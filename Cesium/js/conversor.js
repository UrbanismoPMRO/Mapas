// ─────────────────────────────────────────────────────────────────────────────
// 1. POLÍGONO GEOJSON (altere aqui para usar o seu)
// ─────────────────────────────────────────────────────────────────────────────
const geojsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Área de Exemplo",
        "descricao": "Polígono demonstrativo – clique para baixar como .dxf"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-43.1866, -22.9121],
          [-43.1820, -22.9121],
          [-43.1820, -22.9080],
          [-43.1866, -22.9080],
          [-43.1866, -22.9121]
        ]]
      }
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. CONVERSÃO GeoJSON → DXF (puro JS, sem backend)
//    Suporte: Polygon e MultiPolygon
// ─────────────────────────────────────────────────────────────────────────────
function buildDXF(geometry) {
  const rings = [];

  if (geometry.type === 'Polygon') {
    geometry.coordinates.forEach(r => rings.push(r));
  } else if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach(poly => poly.forEach(r => rings.push(r)));
  } else {
    throw new Error('Geometria não suportada: ' + geometry.type);
  }

  // Cabeçalho DXF mínimo (R12 ASCII – compatível com AutoCAD, QGIS, etc.)
  let dxf = `  0\nSECTION\n  2\nHEADER\n  9\n$ACADVER\n  1\nAC1009\n  0\nENDSEC\n`;
  dxf += `  0\nSECTION\n  2\nENTITIES\n`;

  rings.forEach(ring => {
    // Fechar o anel se necessário
    const pts = [...ring];
    const first = pts[0], last = pts[pts.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) pts.push(first);

    // Polyline 2D
    dxf += `  0\nPOLYLINE\n  8\n0\n 66\n     1\n 70\n     1\n`;

    pts.forEach(([x, y]) => {
      dxf += `  0\nVERTEX\n  8\n0\n 10\n${x.toFixed(8)}\n 20\n${y.toFixed(8)}\n 30\n0.0\n`;
    });

    dxf += `  0\nSEQEND\n  8\n0\n`;
  });

  dxf += `  0\nENDSEC\n  0\nEOF\n`;
  return dxf;
}

function downloadDXF(geometry, name) {
  const content  = buildDXF(geometry);
  const blob     = new Blob([content], { type: 'application/dxf' });
  const url      = URL.createObjectURL(blob);
  const a        = document.createElement('a');
  a.href         = url;
  a.download     = `${name.replace(/\s+/g, '_')}.dxf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. TOAST
// ─────────────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

//##########################***************######################

// ─────────────────────────────────────────────────────────────────────────────
// 5. PARSER DXF → GeoJSON (suporta LWPOLYLINE e POLYLINE/VERTEX)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Tokeniza um arquivo DXF em pares [código, valor].
 * O formato DXF alterna: linha com código numérico + linha com valor.
 */
function tokenizeDXF(text) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const tokens = [];
  for (let i = 0; i + 1 < lines.length; i += 2) {
    const code  = parseInt(lines[i].trim(), 10);
    const value = lines[i + 1].trim();
    if (!isNaN(code)) tokens.push([code, value]);
  }
  return tokens;
}

/**
 * Extrai polígonos de tokens DXF.
 * Lida com LWPOLYLINE (entidade moderna, vértices inline) e
 * POLYLINE + VERTEX (formato R12, mais antigo).
 */
function parseDXF(text) {
  const tokens = tokenizeDXF(text);
  const polygons = []; // array de arrays de [x, y]

  let i = 0;

  while (i < tokens.length) {
    const [code, value] = tokens[i];

    // ── LWPOLYLINE (código 0 + nome da entidade) ──────────────────────────
    if (code === 0 && value === 'LWPOLYLINE') {
      const pts = [];
      let closed = false;
      let layer  = '0';
      i++;
      while (i < tokens.length && tokens[i][0] !== 0) {
        const [c, v] = tokens[i];
        if (c === 8)  layer  = v;
        if (c === 70) closed = (parseInt(v, 10) & 1) === 1; // flag bit 1 = closed
        if (c === 10) pts.push([parseFloat(v), null]);       // X
        if (c === 20 && pts.length > 0) pts[pts.length - 1][1] = parseFloat(v); // Y
        i++;
      }
      // Só inclui se tiver >= 3 pontos e coordenadas completas
      const valid = pts.filter(p => p[1] !== null);
      if (valid.length >= 3) {
        if (closed) valid.push([...valid[0]]); // fechar anel
        polygons.push({ pts: valid, layer });
      }
      continue;
    }

    // ── POLYLINE + VERTEX (R12) ───────────────────────────────────────────
    if (code === 0 && value === 'POLYLINE') {
      const pts  = [];
      let closed = false;
      let layer  = '0';
      i++;
      // Lê flags da POLYLINE
      while (i < tokens.length && tokens[i][0] !== 0) {
        const [c, v] = tokens[i];
        if (c === 8)  layer  = v;
        if (c === 70) closed = (parseInt(v, 10) & 1) === 1;
        i++;
      }
      // Lê VERTEXes até SEQEND
      while (i < tokens.length) {
        const [c, v] = tokens[i];
        if (c === 0 && v === 'SEQEND') { i++; break; }
        if (c === 0 && v === 'VERTEX') {
          let x = null, y = null;
          i++;
          while (i < tokens.length && tokens[i][0] !== 0) {
            const [vc, vv] = tokens[i];
            if (vc === 10) x = parseFloat(vv);
            if (vc === 20) y = parseFloat(vv);
            i++;
          }
          if (x !== null && y !== null) pts.push([x, y]);
        } else {
          i++;
        }
      }
      if (pts.length >= 3) {
        if (closed) pts.push([...pts[0]]);
        polygons.push({ pts, layer });
      }
      continue;
    }

    i++;
  }

  return polygons;
}

/**
 * Converte lista de polígonos DXF em GeoJSON FeatureCollection.
 */
function dxfPolygonsToGeoJSON(polygons, filename) {
  return {
    type: 'FeatureCollection',
    features: polygons.map((poly, idx) => ({
      type: 'Feature',
      properties: {
        name: `${filename} — polígono ${idx + 1}`,
        layer: poly.layer
      },
      geometry: {
        type: 'Polygon',
        coordinates: [poly.pts]
      }
    }))
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. IMPORT DXF: lê arquivo, parseia e plota no mapa
// ─────────────────────────────────────────────────────────────────────────────
let importedLayer = null;

const importStyle = {
  color:       '#00d4aa',
  weight:      2.5,
  opacity:     0.9,
  fillColor:   '#00d4aa',
  fillOpacity: 0.15
};
const importHover = {
  color:       '#ffd700',
  weight:      3,
  fillOpacity: 0.35
};

document.getElementById('dxf-input').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const text     = e.target.result;
      const polys    = parseDXF(text);

      if (polys.length === 0) {
        showToast('⚠️ Nenhum polígono encontrado no arquivo.');
        return;
      }

      const name    = file.name.replace('.dxf', '').replace(/_/g, ' ');
      const geojson = dxfPolygonsToGeoJSON(polys, name);

      // Remove camada anterior se existir
      //if (importedLayer) map.removeLayer(importedLayer);

      importedLayer = L.geoJSON(geojson, {
        style: () => importStyle,
        onEachFeature(feature, layer) {
          const lname = feature.properties?.name || 'Polígono';
          layer.bindTooltip(`<b>${lname}</b><br><small>Layer: ${feature.properties.layer}</small>`, { sticky: true });
          layer.on('mouseover', () => layer.setStyle(importHover));
          layer.on('mouseout',  () => layer.setStyle(importStyle));
          layer.on('click',     () => {
            downloadDXF(feature.geometry, lname);
            showToast(`✅ "${lname}.dxf" re-exportado!`);
          });
        }
      }).addTo(map);

      map.fitBounds(importedLayer.getBounds(), { padding: [60, 60] });

      document.getElementById('file-name').textContent =
        `${file.name} · ${polys.length} polígono(s)`;
      document.getElementById('clear-btn').style.display = 'inline-block';

      showToast(`✅ ${polys.length} polígono(s) importado(s)!`);
    } catch (err) {
      showToast('❌ Erro ao ler o arquivo: ' + err.message);
      console.error(err);
    }
  };
  reader.readAsText(file);
  // Reseta o input para permitir recarregar o mesmo arquivo
  this.value = '';
});

function clearImported() {
  if (importedLayer) { map.removeLayer(importedLayer); importedLayer = null; }
  document.getElementById('file-name').textContent = 'Nenhum arquivo carregado';
  document.getElementById('clear-btn').style.display = 'none';
  showToast('🗑️ Camada removida.');
}



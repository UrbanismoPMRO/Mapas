/*\\\\\\\\SOBRE/////////
Importar arquivos dxf feitos pelos profissionais para incluí-los no mapa principal para estudo de sombramento: aqui estão as funções para importação, que deverão ser importadas para a pagina de estudo de sombreamento para lá importar o dxf, convertendo-o para geojseon.
O script aqui foi gerado pelo claude com diversas adaptações.
o roriginal está no html "geojson-to-dxf-cesium-UTM_original.html", onde estão juntos script e html
*/

import { viewer } from "./funcoes.js"
// ─────────────────────────────────────────────────────────────────────────────
// 1. POLÍGONO GEOJSON (mesmo dado original)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// 2. CESIUM INIT
// ─────────────────────────────────────────────────────────────────────────────
// Estilos de cor (equivalentes ao Leaflet style / hoverStyle)
const COLOR_NORMAL = Cesium.Color.fromCssColorString('#e94560');
const COLOR_HOVER = Cesium.Color.fromCssColorString('#ffd700');
const COLOR_IMPORT = Cesium.Color.fromCssColorString('#00d4aa');
const COLOR_IMP_HOV = Cesium.Color.fromCssColorString('#ffd700');

// ─────────────────────────────────────────────────────────────────────────────
// 3. TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────
const tooltip = document.getElementById('map-tooltip');

function showTooltip(x, y, html) {
  tooltip.innerHTML = html;
  tooltip.style.display = 'block';
  moveTooltip(x, y);
}
function moveTooltip(x, y) {
  tooltip.style.left = (x + 16) + 'px';
  tooltip.style.top = (y + 16) + 'px';
}
function hideTooltip() {
  tooltip.style.display = 'none';
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. REGISTRO DE ENTIDADES (para rastrear grupo → metadados)
// ─────────────────────────────────────────────────────────────────────────────
// Cada entrada: { entity, feature, isImported, outlineEntity }
const entityRegistry = [];

// ─────────────────────────────────────────────────────────────────────────────
// 5. ADICIONAR GEOJSON AO CESIUM
//    Equivalente ao L.geoJSON(...).addTo(map)
// ─────────────────────────────────────────────────────────────────────────────
function addGeoJSONLayer(geojson, fillColor, isImported) {
  const addedEntities = [];

  for (const feature of geojson.features) {
    const geom = feature.geometry;
    const props = feature.properties || {};
    const lote = props.Lote || 'Lote não identificado.';
    const name = props.name || 'Nome não identificado.';
    const desc = props.descricao || (props.layer ? 'Layer: ' + props.layer : '');
    const loteamento = props.Loteamento || 'Loteamento não identificado.';
    const quadra = props.Quadra || 'Quadra não identificada.'

    const rings = geom.type === 'Polygon'
      ? geom.coordinates
      : geom.coordinates.flat(); // MultiPolygon

    for (const ring of (geom.type === 'MultiPolygon' ? geom.coordinates : [geom.coordinates])) {
      const outerRing = ring[0];

      // Posições Cesium a partir de [lon, lat]
      const positions = outerRing.map(([lon, lat]) =>
        Cesium.Cartesian3.fromDegrees(lon, lat, 0)
      );

      // Polígono preenchido
      // ... dentro do loop de criação da entity
      const entity = viewer.entities.add({
        name: name,
        lote: lote,
        loteamento: loteamento,
        quadra: quadra,
        description: desc,
        // Define a posição do label no centro do polígono
        position: Cesium.BoundingSphere.fromPoints(
          outerRing.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat))
        ).center,
        //clampToGround: true,


        polygon: {
          hierarchy: new Cesium.PolygonHierarchy(
            outerRing.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat))
          ),
          material: fillColor.withAlpha(1.0),
          outline: true,
          outlineColor: fillColor,
          outlineWidth: 2.5,
          //height: 0,
          clampToGround: true,
          shadows: Cesium.ShadowMode.ENABLED,
          //classificationType: Cesium.ClassificationType.TERRAIN
        },

/*tirar esse comentário para fazer o codigo mostrar etiqueta das entidades
        // ADICIONANDO A ETIQUETA:
        label: {
          text: lote,
          font: '16px sans-serif',
          fillColor: Cesium.Color.TEAL,
          outlineColor: Cesium.Color.TURQUOISE,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // Gruda no chão
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, 0), // Sobe um pouco a etiqueta
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 1000) // Sumir se estiver muito longe
        },
*/
        _meta: { feature, name, quadra, lote, loteamento, desc, isImported, fillColor }
      });


      entityRegistry.push({ feature, name, quadra, lote, loteamento, desc, isImported, fillColor });
      addedEntities.push(entity);
    }
  }

  return addedEntities;
}


// ─────────────────────────────────────────────────────────────────────────────
// 7. INTERAÇÃO COM O MAPA (hover + click)
//    Substitui layer.on('mouseover'), layer.on('mouseout'), layer.on('click')
// ─────────────────────────────────────────────────────────────────────────────
let hoveredEntity = null;
const canvas = viewer.scene.canvas;

// MOUSEMOVE → tooltip + hover highlight
canvas.addEventListener('mousemove', (e) => {
  // 1. Calcula a posição correta relativa ao canvas
  const rect = canvas.getBoundingClientRect();
  const mousePosition = new Cesium.Cartesian2(
    e.clientX - rect.left,
    e.clientY - rect.top
  );

  // 2. Use a nova posição para o pick
  const picked = viewer.scene.pick(mousePosition);



  if (Cesium.defined(picked) && Cesium.defined(picked.id) && picked.id._meta) {
    const meta = picked.id._meta;

    // Hover highlight
    if (hoveredEntity !== picked.id) {
      // Restaura entidade anterior
      if (hoveredEntity && hoveredEntity._meta) {
        const prev = hoveredEntity._meta;
        hoveredEntity.polygon.material = prev.fillColor.withAlpha(0.18);
        hoveredEntity.polygon.outlineColor = new Cesium.CallbackProperty(() => prev.fillColor, false);
      }
      hoveredEntity = picked.id;
      // Aplica hover
      const hoverColor = meta.isImported ? COLOR_IMP_HOV : COLOR_HOVER;
      hoveredEntity.polygon.material = hoverColor.withAlpha(0.35);
      hoveredEntity.polygon.outlineColor = new Cesium.CallbackProperty(() => hoverColor, false);
      canvas.style.cursor = 'pointer';
    }

    /*aqui a função mostra o tooltip, porém como não há por enquanto nada específico a 
    //indicar sobre os polígonos, então mantive desativado. caso ativa, descomentar também a linha com a função "hideTooltip" e "moveTooltip" na seção depois do else deste mesmo if.
    // Tooltip (equivalente ao bindTooltip sticky)
    const html = `<b>Lote: ${meta.lote}</b>${meta.quadra ? '<br><small>Quadra: ' + meta.quadra + '</small>' : ''}</b>${meta.loteamento ? '<br><small>Loteamento:  ' + meta.loteamento + '</small>' : ''}`;
    showTooltip(e.clientX, e.clientY, html);
    */

  } else {
    // Mouse fora de qualquer entidade
    if (hoveredEntity && hoveredEntity._meta) {
      const prev = hoveredEntity._meta;
      hoveredEntity.polygon.material = prev.fillColor.withAlpha(1.0);
      hoveredEntity.polygon.outlineColor = new Cesium.CallbackProperty(() => prev.fillColor, false);
      hoveredEntity = null;
      canvas.style.cursor = 'default';
    }
    
    /*descomentar caso habilite a função "showTooltip" que está logo aqui acima na seçaõ deste if.
    hideTooltip();
    */
  }

  /*descomentar caso habilite a função "showTooltip" que está logo aqui acima na seçaõ deste if.
  // Move tooltip junto com o mouse
  if (tooltip.style.display !== 'none') moveTooltip(e.clientX, e.clientY);
  */
});

// LEFT CLICK → download DXF (equivalente ao layer.on('click'))

// ─────────────────────────────────────────────────────────────────────────────
// 8. CONVERSÃO UTM ↔ WGS84 (implementação pura JS, sem biblioteca)
//    Baseado nas fórmulas de Karney / OSGB, elipsoide WGS84
// ─────────────────────────────────────────────────────────────────────────────
const UTM = (() => {
  const a = 6378137.0;           // semi-eixo maior WGS84
  const f = 1 / 298.257223563;   // achatamento WGS84
  const b = a * (1 - f);
  const e2 = 2 * f - f * f;       // excentricidade² = (a²-b²)/a²
  const e = Math.sqrt(e2);
  const k0 = 0.9996;              // fator de escala central UTM
  const E0 = 500000;              // falso-leste (m)
  const N0_S = 10000000;          // falso-norte hemisfério sul

  // ── WGS84 (lon, lat graus) → UTM { zone, hemi, easting, northing } ────────
  function lonLatToUTM(lon, lat) {
    const zone = Math.floor((lon + 180) / 6) + 1;
    const lon0 = ((zone - 1) * 6 - 180 + 3) * Math.PI / 180;
    const latR = lat * Math.PI / 180;
    const lonR = lon * Math.PI / 180;

    const N = a / Math.sqrt(1 - e2 * Math.sin(latR) ** 2);
    const T = Math.tan(latR) ** 2;
    const C = (e2 / (1 - e2)) * Math.cos(latR) ** 2;
    const A = Math.cos(latR) * (lonR - lon0);

    // Meridional arc M
    const e4 = e2 * e2, e6 = e4 * e2;
    const M = a * (
      (1 - e2 / 4 - 3 * e4 / 64 - 5 * e6 / 256) * latR
      - (3 * e2 / 8 + 3 * e4 / 32 + 45 * e6 / 1024) * Math.sin(2 * latR)
      + (15 * e4 / 256 + 45 * e6 / 1024) * Math.sin(4 * latR)
      - (35 * e6 / 3072) * Math.sin(6 * latR)
    );

    const easting = k0 * N * (
      A + (1 - T + C) * A ** 3 / 6
      + (5 - 18 * T + T ** 2 + 72 * C - 58 * (e2 / (1 - e2))) * A ** 5 / 120
    ) + E0;

    const northing = k0 * (
      M + N * Math.tan(latR) * (
        A ** 2 / 2
        + (5 - T + 9 * C + 4 * C ** 2) * A ** 4 / 24
        + (61 - 58 * T + T ** 2 + 600 * C - 330 * (e2 / (1 - e2))) * A ** 6 / 720
      )
    ) + (lat < 0 ? N0_S : 0);

    return { zone, hemi: lat >= 0 ? 'N' : 'S', easting, northing };
  }

  // ── UTM { zone, hemi, easting, northing } → WGS84 { lon, lat graus } ─────
  function utmToLonLat(zone, hemi, easting, northing) {
    const lon0 = ((zone - 1) * 6 - 180 + 3) * Math.PI / 180;
    const x = easting - E0;
    const y = northing - (hemi === 'S' ? N0_S : 0);

    const e4 = e2 * e2, e6 = e4 * e2;
    const e1 = (1 - Math.sqrt(1 - e2)) / (1 + Math.sqrt(1 - e2));

    const M = y / k0;
    const mu = M / (a * (1 - e2 / 4 - 3 * e4 / 64 - 5 * e6 / 256));

    const phi1 = mu
      + (3 * e1 / 2 - 27 * e1 ** 3 / 32) * Math.sin(2 * mu)
      + (21 * e1 ** 2 / 16 - 55 * e1 ** 4 / 32) * Math.sin(4 * mu)
      + (151 * e1 ** 3 / 96) * Math.sin(6 * mu)
      + (1097 * e1 ** 4 / 512) * Math.sin(8 * mu);

    const N1 = a / Math.sqrt(1 - e2 * Math.sin(phi1) ** 2);
    const T1 = Math.tan(phi1) ** 2;
    const C1 = (e2 / (1 - e2)) * Math.cos(phi1) ** 2;
    const R1 = a * (1 - e2) / (1 - e2 * Math.sin(phi1) ** 2) ** 1.5;
    const D = x / (N1 * k0);

    const lat = phi1 - (N1 * Math.tan(phi1) / R1) * (
      D ** 2 / 2
      - (5 + 3 * T1 + 10 * C1 - 4 * C1 ** 2 - 9 * (e2 / (1 - e2))) * D ** 4 / 24
      + (61 + 90 * T1 + 298 * C1 + 45 * T1 ** 2 - 252 * (e2 / (1 - e2)) - 3 * C1 ** 2) * D ** 6 / 720
    );

    const lon = lon0 + (
      D
      - (1 + 2 * T1 + C1) * D ** 3 / 6
      + (5 - 2 * C1 + 28 * T1 - 3 * C1 ** 2 + 8 * (e2 / (1 - e2)) + 24 * T1 ** 2) * D ** 5 / 120
    ) / Math.cos(phi1);

    return { lon: lon * 180 / Math.PI, lat: lat * 180 / Math.PI };
  }

  // Detecta se um conjunto de coordenadas parece ser UTM
  // UTM easting: 100000–999999 m; northing: 0–10000000 m (S) ou 0–9400000 (N)
  function looksLikeUTM(pts) {
    if (!pts || pts.length === 0) return false;
    const xs = pts.map(p => p[0]);
    const ys = pts.map(p => p[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    // Lon/lat: x em [-180,180], y em [-90,90] — UTM tem valores muito maiores
    return (maxX > 180 || minX < -180 || maxY > 90 || minY < -90);
  }

  // Detecta zona UTM mais provável dado o centróide das coords UTM
  // (heurística: para o Brasil usa hemisfério S e zonas 18–25)
  function detectZone(pts) {
    // Tenta recuperar do cabeçalho DXF (UCSORG, EXTMIN, EXTMAX) via média
    // Como fallback usa zona 23S (centro do Brasil)
    const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
    // Easting UTM centrado em 500000 m por zona de 6°
    // Estimativa: zona = round((cx - 500000) / 111320 / 6) + zona_base
    // Para Brasil: zonas 18-25, easting ~150000-850000 por zona
    // Heurística simples: assume zonas do Brasil, hemisfério S
    // O usuário pode informar a zona no nome do arquivo (ex: "planta_23S.dxf")
    return { zone: 23, hemi: 'S' }; // padrão Brasil central
  }

  // Tenta extrair zona do nome do arquivo: ex "mapa_22S.dxf", "arq23N.dxf"
  function zoneFromFilename(filename) {
    const m = filename.match(/[_\-\s]?(\d{1,2})([NS])[_\-\s.]?/i);
    if (m) return { zone: parseInt(m[1]), hemi: m[2].toUpperCase() };
    return null;
  }

  return { lonLatToUTM, utmToLonLat, looksLikeUTM, detectZone, zoneFromFilename };
})();

// ─────────────────────────────────────────────────────────────────────────────
// 9. CONVERSÃO GeoJSON → DXF com coordenadas UTM
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// 10. TOAST (idêntico ao original)
// ─────────────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. PARSER DXF → GeoJSON (com detecção e conversão automática de UTM)
// ─────────────────────────────────────────────────────────────────────────────
function tokenizeDXF(text) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const tokens = [];
  for (let i = 0; i + 1 < lines.length; i += 2) {
    const code = parseInt(lines[i].trim(), 10);
    const value = lines[i + 1].trim();
    if (!isNaN(code)) tokens.push([code, value]);
  }
  return tokens;
}

function parseDXF(text) {
  const tokens = tokenizeDXF(text);
  const polygons = [];
  let i = 0;

  while (i < tokens.length) {
    const [code, value] = tokens[i];

    // LWPOLYLINE
    if (code === 0 && value === 'LWPOLYLINE') {
      const pts = [];
      let closed = false;
      let layer = '0';
      i++;
      while (i < tokens.length && tokens[i][0] !== 0) {
        const [c, v] = tokens[i];
        if (c === 8) layer = v;
        if (c === 70) closed = (parseInt(v, 10) & 1) === 1;
        if (c === 10) pts.push([parseFloat(v), null]);
        if (c === 20 && pts.length > 0) pts[pts.length - 1][1] = parseFloat(v);
        i++;
      }
      const valid = pts.filter(p => p[1] !== null);
      if (valid.length >= 3) {
        if (closed) valid.push([...valid[0]]);
        polygons.push({ pts: valid, layer });
      }
      continue;
    }

    // POLYLINE + VERTEX (R12)
    if (code === 0 && value === 'POLYLINE') {
      const pts = [];
      let closed = false;
      let layer = '0';
      i++;
      while (i < tokens.length && tokens[i][0] !== 0) {
        const [c, v] = tokens[i];
        if (c === 8) layer = v;
        if (c === 70) closed = (parseInt(v, 10) & 1) === 1;
        i++;
      }
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

function dxfPolygonsToGeoJSON(polygons, filename) {
  // Verifica se as coordenadas parecem UTM (valores fora do range lon/lat)
  const allPts = polygons.flatMap(p => p.pts);
  const isUTM = UTM.looksLikeUTM(allPts);

  let detectedZone = null, detectedHemi = null;
  if (isUTM) {
    // Tenta detectar zona pelo nome do arquivo primeiro
    const fromName = UTM.zoneFromFilename(filename);
    if (fromName) {
      detectedZone = fromName.zone;
      detectedHemi = fromName.hemi;
    } else {
      // Fallback: detecta pelo centróide das coords UTM
      const ref = UTM.detectZone(allPts);
      detectedZone = ref.zone;
      detectedHemi = ref.hemi;
    }
  }

  return {
    type: 'FeatureCollection',
    features: polygons.map((poly, idx) => {
      // Converte pontos UTM → lon/lat se necessário
      const coords = isUTM
        ? poly.pts.map(([x, y]) => {
          const { lon, lat } = UTM.utmToLonLat(detectedZone, detectedHemi, x, y);
          return [lon, lat];
        })
        : poly.pts;

      return {
        type: 'Feature',
        properties: {
          name: `${filename} — polígono ${idx + 1}`,
          layer: poly.layer,
          utm_zone: isUTM ? `${detectedZone}${detectedHemi}` : null,
          converted: isUTM,
        },
        geometry: {
          type: 'Polygon',
          coordinates: [coords]
        }
      };
    }),
    // Metadados da conversão acessíveis pelo chamador
    _utmInfo: isUTM ? { zone: detectedZone, hemi: detectedHemi } : null
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. IMPORT DXF (com detecção automática de UTM e conversão para lon/lat)
// ─────────────────────────────────────────────────────────────────────────────
let importedEntities = [];

document.getElementById('dxf-input').addEventListener('change', function () {
  const file = this.files[0];
  console.log('primeiro passo');
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const text = e.target.result;
      const polys = parseDXF(text);

      if (polys.length === 0) {
        showToast('⚠️ Nenhum polígono encontrado no arquivo.');
        return;
      }

      const name = file.name.replace(/\.dxf$/i, '').replace(/_/g, ' ');
      const geojson = dxfPolygonsToGeoJSON(polys, file.name);

      // Remove camada anterior se existir
      clearImported(true);

      importedEntities = addGeoJSONLayer(geojson, COLOR_IMPORT, true);

      viewer.flyTo(importedEntities, { duration: 1.2 });

      const utmMsg = geojson._utmInfo
        ? ` · UTM ${geojson._utmInfo.zone}${geojson._utmInfo.hemi} → WGS84`
        : '';

      document.getElementById('file-name').textContent =
        `${file.name} · ${polys.length} polígono(s)${utmMsg}`;
      document.getElementById('clear-btn').style.display = 'inline-block';

      showToast(`✅ ${polys.length} polígono(s) importado(s)${utmMsg}!`);
    } catch (err) {
      showToast('❌ Erro ao ler o arquivo: ' + err.message);
      console.error(err);
    }
  };
  reader.readAsText(file);
  this.value = '';
});

// ─────────────────────────────────────────────────────────────────────────────
// 12. CLEAR IMPORTED (equivalente ao clearImported original)
// ─────────────────────────────────────────────────────────────────────────────
function clearImported(silent = false) {
  // Remove entidades importadas do viewer e do registry
  for (const entity of importedEntities) {
    viewer.entities.remove(entity);
    const idx = entityRegistry.findIndex(r => r.entity === entity);
    if (idx >= 0) entityRegistry.splice(idx, 1);
  }
  importedEntities = [];

  if (!silent) {
    document.getElementById('file-name').textContent = 'Nenhum arquivo carregado';
    document.getElementById('clear-btn').style.display = 'none';
    showToast('🗑️ Camada removida.');
  }
}

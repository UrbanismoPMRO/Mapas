ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([196988.561847, 7504521.054096, 199377.749347, 7506711.804096]);
var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satlite_1 = new ol.layer.Tile({
            'title': 'Satélite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipal_2 = new ol.format.GeoJSON();
var features_LimiteMunicipal_2 = format_LimiteMunicipal_2.readFeatures(json_LimiteMunicipal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_2.addFeatures(features_LimiteMunicipal_2);
var lyr_LimiteMunicipal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_2, 
                style: style_LimiteMunicipal_2,
                popuplayertitle: 'Limite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_2.png" /> Limite Municipal'
            });
var format_EstudodeSombreamentoObrigatrio_3 = new ol.format.GeoJSON();
var features_EstudodeSombreamentoObrigatrio_3 = format_EstudodeSombreamentoObrigatrio_3.readFeatures(json_EstudodeSombreamentoObrigatrio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_EstudodeSombreamentoObrigatrio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstudodeSombreamentoObrigatrio_3.addFeatures(features_EstudodeSombreamentoObrigatrio_3);
var lyr_EstudodeSombreamentoObrigatrio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstudodeSombreamentoObrigatrio_3, 
                style: style_EstudodeSombreamentoObrigatrio_3,
                popuplayertitle: 'Estudo de Sombreamento Obrigatório',
                interactive: true,
    title: 'Estudo de Sombreamento Obrigatório<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_0.png" /> Até 9m<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_1.png" /> 9m < h <= 18m<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_2.png" /> 18m < h <= 27m<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_3.png" /> 27m < h <= 36m<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_4.png" /> 36m < h <= 45m<br />\
    <img src="styles/legend/EstudodeSombreamentoObrigatrio_3_5.png" /> Acim de 45m<br />' });
var format_Loteamento_4 = new ol.format.GeoJSON();
var features_Loteamento_4 = format_Loteamento_4.readFeatures(json_Loteamento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Loteamento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamento_4.addFeatures(features_Loteamento_4);
var lyr_Loteamento_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamento_4, 
                style: style_Loteamento_4,
                popuplayertitle: 'Loteamento',
                interactive: false,
                title: '<img src="styles/legend/Loteamento_4.png" /> Loteamento'
            });
var format_Quadras_5 = new ol.format.GeoJSON();
var features_Quadras_5 = format_Quadras_5.readFeatures(json_Quadras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Quadras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadras_5.addFeatures(features_Quadras_5);
var lyr_Quadras_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadras_5, 
                style: style_Quadras_5,
                popuplayertitle: 'Quadras',
                interactive: false,
                title: '<img src="styles/legend/Quadras_5.png" /> Quadras'
            });
var format_Lotes_6 = new ol.format.GeoJSON();
var features_Lotes_6 = format_Lotes_6.readFeatures(json_Lotes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Lotes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_6.addFeatures(features_Lotes_6);
var lyr_Lotes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_6, 
                style: style_Lotes_6,
                popuplayertitle: 'Lotes',
                interactive: false,
                title: '<img src="styles/legend/Lotes_6.png" /> Lotes'
            });
var format_Topografia_7 = new ol.format.GeoJSON();
var features_Topografia_7 = format_Topografia_7.readFeatures(json_Topografia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Topografia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Topografia_7.addFeatures(features_Topografia_7);
var lyr_Topografia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Topografia_7, 
                style: style_Topografia_7,
                popuplayertitle: 'Topografia',
                interactive: false,
                title: '<img src="styles/legend/Topografia_7.png" /> Topografia'
            });
var format_LinhadeLimitedeSombreamento_8 = new ol.format.GeoJSON();
var features_LinhadeLimitedeSombreamento_8 = format_LinhadeLimitedeSombreamento_8.readFeatures(json_LinhadeLimitedeSombreamento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LinhadeLimitedeSombreamento_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhadeLimitedeSombreamento_8.addFeatures(features_LinhadeLimitedeSombreamento_8);
var lyr_LinhadeLimitedeSombreamento_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhadeLimitedeSombreamento_8, 
                style: style_LinhadeLimitedeSombreamento_8,
                popuplayertitle: 'Linha de Limite de Sombreamento',
                interactive: false,
                title: '<img src="styles/legend/LinhadeLimitedeSombreamento_8.png" /> Linha de Limite de Sombreamento'
            });
var group_EstudodeSombreamento = new ol.layer.Group({
                                layers: [lyr_LimiteMunicipal_2,lyr_EstudodeSombreamentoObrigatrio_3,lyr_Loteamento_4,lyr_Quadras_5,lyr_Lotes_6,lyr_Topografia_7,lyr_LinhadeLimitedeSombreamento_8,],
                                fold: 'close',
                                title: 'Estudo de Sombreamento'});

lyr_Mapa_0.setVisible(true);lyr_Satlite_1.setVisible(true);lyr_LimiteMunicipal_2.setVisible(true);lyr_EstudodeSombreamentoObrigatrio_3.setVisible(false);lyr_Loteamento_4.setVisible(true);lyr_Quadras_5.setVisible(true);lyr_Lotes_6.setVisible(true);lyr_Topografia_7.setVisible(false);lyr_LinhadeLimitedeSombreamento_8.setVisible(true);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,group_EstudodeSombreamento];
lyr_LimiteMunicipal_2.set('fieldAliases', {'fid': 'fid', });
lyr_EstudodeSombreamentoObrigatrio_3.set('fieldAliases', {'fid': 'fid', 'Faixa': 'Faixa', 'LimAlt': 'Limite de Altura', 'Setor': 'Setor', 'Cod_Faixa': 'Cod_Faixa', });
lyr_Loteamento_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_Quadras_5.set('fieldAliases', {'fid': 'fid', 'Quadra': 'Quadra', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Atualizador': 'Atualizador', 'Area': 'Area', 'somadoslotes': 'somadoslotes', });
lyr_Lotes_6.set('fieldAliases', {'fid': 'fid', 'Area': 'Área (m²)', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', });
lyr_Topografia_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LinhadeLimitedeSombreamento_8.set('fieldAliases', {'fid': 'fid', 'Alt_Max': 'Altura Máxima', 'Nome': 'Nome', });
lyr_LimiteMunicipal_2.set('fieldImages', {'fid': '', });
lyr_EstudodeSombreamentoObrigatrio_3.set('fieldImages', {'fid': 'TextEdit', 'Faixa': 'TextEdit', 'LimAlt': 'TextEdit', 'Setor': 'TextEdit', 'Cod_Faixa': 'Range', });
lyr_Loteamento_4.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Quadras_5.set('fieldImages', {'fid': 'TextEdit', 'Quadra': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Atualizador': 'Range', 'Area': 'TextEdit', 'somadoslotes': 'TextEdit', });
lyr_Lotes_6.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Quadra': 'TextEdit', });
lyr_Topografia_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_LinhadeLimitedeSombreamento_8.set('fieldImages', {'fid': 'TextEdit', 'Alt_Max': 'TextEdit', 'Nome': 'TextEdit', });
lyr_LimiteMunicipal_2.set('fieldLabels', {'fid': 'no label', });
lyr_EstudodeSombreamentoObrigatrio_3.set('fieldLabels', {'fid': 'hidden field', 'Faixa': 'no label', 'LimAlt': 'header label - visible with data', 'Setor': 'hidden field', 'Cod_Faixa': 'hidden field', });
lyr_Loteamento_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Quadras_5.set('fieldLabels', {'fid': 'no label', 'Quadra': 'no label', 'Loteamento': 'no label', 'Name': 'no label', 'Atualizador': 'no label', 'Area': 'no label', 'somadoslotes': 'no label', });
lyr_Lotes_6.set('fieldLabels', {'fid': 'hidden field', 'Area': 'hidden field', 'Lote': 'no label', 'Loteamento': 'no label', 'Name': 'no label', 'Quadra': 'no label', });
lyr_Topografia_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_LinhadeLimitedeSombreamento_8.set('fieldLabels', {'fid': 'no label', 'Alt_Max': 'no label', 'Nome': 'no label', });
lyr_LinhadeLimitedeSombreamento_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
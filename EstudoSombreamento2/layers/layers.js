ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([194111.996266, 7504511.634130, 197151.141737, 7507174.504447]);
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
var format_Loteamento_3 = new ol.format.GeoJSON();
var features_Loteamento_3 = format_Loteamento_3.readFeatures(json_Loteamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Loteamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamento_3.addFeatures(features_Loteamento_3);
var lyr_Loteamento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamento_3, 
                style: style_Loteamento_3,
                popuplayertitle: 'Loteamento',
                interactive: false,
                title: '<img src="styles/legend/Loteamento_3.png" /> Loteamento'
            });
var format_Quadras_4 = new ol.format.GeoJSON();
var features_Quadras_4 = format_Quadras_4.readFeatures(json_Quadras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Quadras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadras_4.addFeatures(features_Quadras_4);
var lyr_Quadras_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadras_4, 
                style: style_Quadras_4,
                popuplayertitle: 'Quadras',
                interactive: false,
                title: '<img src="styles/legend/Quadras_4.png" /> Quadras'
            });
var format_Lotes_5 = new ol.format.GeoJSON();
var features_Lotes_5 = format_Lotes_5.readFeatures(json_Lotes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Lotes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_5.addFeatures(features_Lotes_5);
var lyr_Lotes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_5, 
                style: style_Lotes_5,
                popuplayertitle: 'Lotes',
                interactive: false,
                title: '<img src="styles/legend/Lotes_5.png" /> Lotes'
            });
var format_CurvasdeNvel_6 = new ol.format.GeoJSON();
var features_CurvasdeNvel_6 = format_CurvasdeNvel_6.readFeatures(json_CurvasdeNvel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CurvasdeNvel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel_6.addFeatures(features_CurvasdeNvel_6);
var lyr_CurvasdeNvel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNvel_6, 
                style: style_CurvasdeNvel_6,
                popuplayertitle: 'Curvas de Nível',
                interactive: false,
                title: '<img src="styles/legend/CurvasdeNvel_6.png" /> Curvas de Nível'
            });
var format_LinhadeLimitedeSombreamento_7 = new ol.format.GeoJSON();
var features_LinhadeLimitedeSombreamento_7 = format_LinhadeLimitedeSombreamento_7.readFeatures(json_LinhadeLimitedeSombreamento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LinhadeLimitedeSombreamento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhadeLimitedeSombreamento_7.addFeatures(features_LinhadeLimitedeSombreamento_7);
var lyr_LinhadeLimitedeSombreamento_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhadeLimitedeSombreamento_7, 
                style: style_LinhadeLimitedeSombreamento_7,
                popuplayertitle: 'Linha de Limite de Sombreamento',
                interactive: false,
                title: '<img src="styles/legend/LinhadeLimitedeSombreamento_7.png" /> Linha de Limite de Sombreamento'
            });
var format_Obrigatoriedade_8 = new ol.format.GeoJSON();
var features_Obrigatoriedade_8 = format_Obrigatoriedade_8.readFeatures(json_Obrigatoriedade_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Obrigatoriedade_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obrigatoriedade_8.addFeatures(features_Obrigatoriedade_8);
var lyr_Obrigatoriedade_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obrigatoriedade_8, 
                style: style_Obrigatoriedade_8,
                popuplayertitle: 'Obrigatoriedade',
                interactive: true,
    title: 'Obrigatoriedade<br />\
    <img src="styles/legend/Obrigatoriedade_8_0.png" /> Todos<br />\
    <img src="styles/legend/Obrigatoriedade_8_1.png" /> Acima de 8m<br />' });
var group_EstudodeSombreamento = new ol.layer.Group({
                                layers: [lyr_LimiteMunicipal_2,lyr_Loteamento_3,lyr_Quadras_4,lyr_Lotes_5,lyr_CurvasdeNvel_6,lyr_LinhadeLimitedeSombreamento_7,lyr_Obrigatoriedade_8,],
                                fold: 'open',
                                title: 'Estudo de Sombreamento'});

lyr_Mapa_0.setVisible(true);lyr_Satlite_1.setVisible(true);lyr_LimiteMunicipal_2.setVisible(false);lyr_Loteamento_3.setVisible(true);lyr_Quadras_4.setVisible(true);lyr_Lotes_5.setVisible(true);lyr_CurvasdeNvel_6.setVisible(false);lyr_LinhadeLimitedeSombreamento_7.setVisible(true);lyr_Obrigatoriedade_8.setVisible(false);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,group_EstudodeSombreamento];
lyr_LimiteMunicipal_2.set('fieldAliases', {'fid': 'fid', });
lyr_Loteamento_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_Quadras_4.set('fieldAliases', {'fid': 'fid', 'Quadra': 'Quadra', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Atualizador': 'Atualizador', 'Area': 'Area', 'somadoslotes': 'somadoslotes', });
lyr_Lotes_5.set('fieldAliases', {'fid': 'fid', 'Area': 'Área (m²)', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', });
lyr_CurvasdeNvel_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldAliases', {'fid': 'fid', 'Alt_Max': 'Altura Máxima', 'Nome': 'Nome', });
lyr_Obrigatoriedade_8.set('fieldAliases', {'fid': 'fid', 'Faixa': 'Faixa', 'LimAlt': 'LimAlt', 'Setor': 'Setor', 'Cod_Faixa': 'Cod_Faixa', });
lyr_LimiteMunicipal_2.set('fieldImages', {'fid': '', });
lyr_Loteamento_3.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Quadras_4.set('fieldImages', {'fid': 'TextEdit', 'Quadra': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Atualizador': 'Range', 'Area': 'TextEdit', 'somadoslotes': 'TextEdit', });
lyr_Lotes_5.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Quadra': 'TextEdit', });
lyr_CurvasdeNvel_6.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldImages', {'fid': 'TextEdit', 'Alt_Max': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Obrigatoriedade_8.set('fieldImages', {'fid': '', 'Faixa': '', 'LimAlt': '', 'Setor': '', 'Cod_Faixa': '', });
lyr_LimiteMunicipal_2.set('fieldLabels', {'fid': 'no label', });
lyr_Loteamento_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Quadras_4.set('fieldLabels', {'fid': 'no label', 'Quadra': 'no label', 'Loteamento': 'no label', 'Name': 'no label', 'Atualizador': 'no label', 'Area': 'no label', 'somadoslotes': 'no label', });
lyr_Lotes_5.set('fieldLabels', {'fid': 'hidden field', 'Area': 'hidden field', 'Lote': 'no label', 'Loteamento': 'no label', 'Name': 'no label', 'Quadra': 'no label', });
lyr_CurvasdeNvel_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldLabels', {'fid': 'no label', 'Alt_Max': 'no label', 'Nome': 'no label', });
lyr_Obrigatoriedade_8.set('fieldLabels', {'fid': 'hidden field', 'Faixa': 'no label', 'LimAlt': 'hidden field', 'Setor': 'hidden field', 'Cod_Faixa': 'hidden field', });
lyr_Obrigatoriedade_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
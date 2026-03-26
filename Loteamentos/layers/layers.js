var wms_layers = [];


        var lyr_Satlite_0 = new ol.layer.Tile({
            'title': 'Satélite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Loteamentos_1 = new ol.format.GeoJSON();
var features_Loteamentos_1 = format_Loteamentos_1.readFeatures(json_Loteamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loteamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentos_1.addFeatures(features_Loteamentos_1);
var lyr_Loteamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentos_1, 
                style: style_Loteamentos_1,
                popuplayertitle: 'Loteamentos',
                interactive: false,
                title: '<img src="styles/legend/Loteamentos_1.png" /> Loteamentos'
            });
var format_Quadras_2 = new ol.format.GeoJSON();
var features_Quadras_2 = format_Quadras_2.readFeatures(json_Quadras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quadras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadras_2.addFeatures(features_Quadras_2);
var lyr_Quadras_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadras_2, 
                style: style_Quadras_2,
                popuplayertitle: 'Quadras',
                interactive: false,
                title: '<img src="styles/legend/Quadras_2.png" /> Quadras'
            });
var format_Origem_3 = new ol.format.GeoJSON();
var features_Origem_3 = format_Origem_3.readFeatures(json_Origem_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Origem_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Origem_3.addFeatures(features_Origem_3);
var lyr_Origem_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Origem_3, 
                style: style_Origem_3,
                popuplayertitle: 'Origem',
                interactive: true,
    title: 'Origem<br />\
    <img src="styles/legend/Origem_3_0.png" /> Original<br />' });
var format_3Alterao_4 = new ol.format.GeoJSON();
var features_3Alterao_4 = format_3Alterao_4.readFeatures(json_3Alterao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Alterao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Alterao_4.addFeatures(features_3Alterao_4);
var lyr_3Alterao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3Alterao_4, 
                style: style_3Alterao_4,
                popuplayertitle: '3ª Alteração',
                interactive: true,
    title: '3ª Alteração<br />\
    <img src="styles/legend/3Alterao_4_0.png" /> 3ª Alteração<br />' });
var format_2Alterao_5 = new ol.format.GeoJSON();
var features_2Alterao_5 = format_2Alterao_5.readFeatures(json_2Alterao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Alterao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Alterao_5.addFeatures(features_2Alterao_5);
var lyr_2Alterao_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2Alterao_5, 
                style: style_2Alterao_5,
                popuplayertitle: '2ª Alteração',
                interactive: true,
    title: '2ª Alteração<br />\
    <img src="styles/legend/2Alterao_5_0.png" /> 2ª Alteração<br />' });
var format_1Alterao_6 = new ol.format.GeoJSON();
var features_1Alterao_6 = format_1Alterao_6.readFeatures(json_1Alterao_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1Alterao_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1Alterao_6.addFeatures(features_1Alterao_6);
var lyr_1Alterao_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1Alterao_6, 
                style: style_1Alterao_6,
                popuplayertitle: '1ª Alteração',
                interactive: true,
    title: '1ª Alteração<br />\
    <img src="styles/legend/1Alterao_6_0.png" /> 1ª Alteração<br />' });
var format_Atual_7 = new ol.format.GeoJSON();
var features_Atual_7 = format_Atual_7.readFeatures(json_Atual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atual_7.addFeatures(features_Atual_7);
var lyr_Atual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atual_7, 
                style: style_Atual_7,
                popuplayertitle: 'Atual',
                interactive: true,
    title: 'Atual<br />\
    <img src="styles/legend/Atual_7_0.png" /> Atual<br />' });
var group_Lotes = new ol.layer.Group({
                                layers: [lyr_Origem_3,lyr_3Alterao_4,lyr_2Alterao_5,lyr_1Alterao_6,lyr_Atual_7,],
                                fold: 'open',
                                title: 'Lotes'});

lyr_Satlite_0.setVisible(true);lyr_Loteamentos_1.setVisible(true);lyr_Quadras_2.setVisible(true);lyr_Origem_3.setVisible(false);lyr_3Alterao_4.setVisible(false);lyr_2Alterao_5.setVisible(false);lyr_1Alterao_6.setVisible(false);lyr_Atual_7.setVisible(false);
var layersList = [lyr_Satlite_0,lyr_Loteamentos_1,lyr_Quadras_2,group_Lotes];
lyr_Loteamentos_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Codigo': 'Código', });
lyr_Quadras_2.set('fieldAliases', {'fid': 'fid', 'Quadra': 'Quadra', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Atualizador': 'Atualizador', 'Area': 'Area', 'somadoslotes': 'somadoslotes', });
lyr_Origem_3.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', 'Alteracao': 'Alteração', 'DataAprov': 'Data Aprovação', 'ProjAprov': 'Projeto Aprovado', 'Validacao': 'Validação', 'bkp_Loteamento': 'bkp_Loteamento', 'Subtracao': 'Subtração', 'Sub': 'Sub', });
lyr_3Alterao_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', 'Alteracao': 'Alteração', 'DataAprov': 'Data Aprovação', 'ProjAprov': 'Projeto Aprovado', 'Validacao': 'Validação', 'bkp_Loteamento': 'bkp_Loteamento', 'Subtracao': 'Subtração', 'Sub': 'Sub', });
lyr_2Alterao_5.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', 'Alteracao': 'Alteração', 'DataAprov': 'Data Aprovação', 'ProjAprov': 'Projeto Aprovado', 'Validacao': 'Validação', 'bkp_Loteamento': 'bkp_Loteamento', 'Subtracao': 'Subtração', 'Sub': 'Sub', });
lyr_1Alterao_6.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', 'Alteracao': 'Alteração', 'DataAprov': 'Data Aprovação', 'ProjAprov': 'Projeto Aprovado', 'Validacao': 'Validação', 'bkp_Loteamento': 'bkp_Loteamento', 'Subtracao': 'Subtração', 'Sub': 'Sub', });
lyr_Atual_7.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Name', 'Quadra': 'Quadra', 'Alteracao': 'Alteração', 'DataAprov': 'Data Aprovação', 'ProjAprov': 'Projeto Aprovado', 'Validacao': 'Validação', 'bkp_Loteamento': 'bkp_Loteamento', 'Subtracao': 'Subtração', 'Sub': 'Sub', });
lyr_Loteamentos_1.set('fieldImages', {'fid': '', 'Name': '', 'Codigo': 'Range', });
lyr_Quadras_2.set('fieldImages', {'fid': '', 'Quadra': '', 'Loteamento': '', 'Name': '', 'Atualizador': '', 'Area': '', 'somadoslotes': '', });
lyr_Origem_3.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'ValueRelation', 'Name': 'TextEdit', 'Quadra': 'TextEdit', 'Alteracao': 'Range', 'DataAprov': 'DateTime', 'ProjAprov': 'CheckBox', 'Validacao': 'ValueMap', 'bkp_Loteamento': 'TextEdit', 'Subtracao': 'CheckBox', 'Sub': '', });
lyr_3Alterao_4.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'ValueRelation', 'Name': 'TextEdit', 'Quadra': 'TextEdit', 'Alteracao': 'Range', 'DataAprov': 'DateTime', 'ProjAprov': 'CheckBox', 'Validacao': 'ValueMap', 'bkp_Loteamento': 'TextEdit', 'Subtracao': 'CheckBox', 'Sub': '', });
lyr_2Alterao_5.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'ValueRelation', 'Name': 'TextEdit', 'Quadra': 'TextEdit', 'Alteracao': 'Range', 'DataAprov': 'DateTime', 'ProjAprov': 'CheckBox', 'Validacao': 'ValueMap', 'bkp_Loteamento': 'TextEdit', 'Subtracao': 'CheckBox', 'Sub': '', });
lyr_1Alterao_6.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'ValueRelation', 'Name': 'TextEdit', 'Quadra': 'TextEdit', 'Alteracao': 'Range', 'DataAprov': 'DateTime', 'ProjAprov': 'CheckBox', 'Validacao': 'ValueMap', 'bkp_Loteamento': 'TextEdit', 'Subtracao': 'CheckBox', 'Sub': '', });
lyr_Atual_7.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'ValueRelation', 'Name': 'TextEdit', 'Quadra': 'TextEdit', 'Alteracao': 'Range', 'DataAprov': 'DateTime', 'ProjAprov': 'CheckBox', 'Validacao': 'ValueMap', 'bkp_Loteamento': 'TextEdit', 'Subtracao': 'CheckBox', 'Sub': '', });
lyr_Loteamentos_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Codigo': 'hidden field', });
lyr_Quadras_2.set('fieldLabels', {'fid': 'hidden field', 'Quadra': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Atualizador': 'hidden field', 'Area': 'hidden field', 'somadoslotes': 'hidden field', });
lyr_Origem_3.set('fieldLabels', {'fid': 'hidden field', 'Area': 'no label', 'Lote': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Quadra': 'hidden field', 'Alteracao': 'hidden field', 'DataAprov': 'hidden field', 'ProjAprov': 'hidden field', 'Validacao': 'hidden field', 'bkp_Loteamento': 'hidden field', 'Subtracao': 'hidden field', });
lyr_3Alterao_4.set('fieldLabels', {'fid': 'hidden field', 'Area': 'no label', 'Lote': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Quadra': 'hidden field', 'Alteracao': 'hidden field', 'DataAprov': 'hidden field', 'ProjAprov': 'hidden field', 'Validacao': 'hidden field', 'bkp_Loteamento': 'hidden field', 'Subtracao': 'hidden field', });
lyr_2Alterao_5.set('fieldLabels', {'fid': 'hidden field', 'Area': 'no label', 'Lote': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Quadra': 'hidden field', 'Alteracao': 'hidden field', 'DataAprov': 'hidden field', 'ProjAprov': 'hidden field', 'Validacao': 'hidden field', 'bkp_Loteamento': 'hidden field', 'Subtracao': 'hidden field', });
lyr_1Alterao_6.set('fieldLabels', {'fid': 'hidden field', 'Area': 'no label', 'Lote': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Quadra': 'hidden field', 'Alteracao': 'hidden field', 'DataAprov': 'hidden field', 'ProjAprov': 'hidden field', 'Validacao': 'hidden field', 'bkp_Loteamento': 'hidden field', 'Subtracao': 'hidden field', });
lyr_Atual_7.set('fieldLabels', {'fid': 'hidden field', 'Area': 'no label', 'Lote': 'hidden field', 'Loteamento': 'hidden field', 'Name': 'hidden field', 'Quadra': 'hidden field', 'Alteracao': 'hidden field', 'DataAprov': 'hidden field', 'ProjAprov': 'hidden field', 'Validacao': 'hidden field', 'bkp_Loteamento': 'hidden field', 'Subtracao': 'hidden field', });
lyr_Atual_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
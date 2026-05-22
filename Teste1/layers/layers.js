ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([178034.217918, 7500777.289001, 214454.875008, 7523405.675482]);
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
var format_LimiteMunicipal_1 = new ol.format.GeoJSON();
var features_LimiteMunicipal_1 = format_LimiteMunicipal_1.readFeatures(json_LimiteMunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_1.addFeatures(features_LimiteMunicipal_1);
var lyr_LimiteMunicipal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_1, 
                style: style_LimiteMunicipal_1,
                popuplayertitle: 'Limite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_1.png" /> Limite Municipal'
            });
var format_Zoneamento2026Zonas_2 = new ol.format.GeoJSON();
var features_Zoneamento2026Zonas_2 = format_Zoneamento2026Zonas_2.readFeatures(json_Zoneamento2026Zonas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Zoneamento2026Zonas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento2026Zonas_2.addFeatures(features_Zoneamento2026Zonas_2);
var lyr_Zoneamento2026Zonas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento2026Zonas_2, 
                style: style_Zoneamento2026Zonas_2,
                popuplayertitle: 'Zoneamento 2026 - Zonas',
                interactive: true,
    title: 'Zoneamento 2026 - Zonas<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_0.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_1.png" /> Zona Residencial 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_2.png" /> Zona Residencial 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_3.png" /> Zona Residencial 3<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_4.png" /> Zona Residencial 4<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_5.png" /> Zona Residencial 5<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_6.png" /> Zona Residencial 6<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_7.png" /> Zona Residencial 7<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_8.png" /> Zona Residencial 8<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_9.png" /> Zona Residencial 9<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_10.png" /> Zona Residencial 10<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_11.png" /> Zona Residencial 11<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_12.png" /> Zona Residencial 12<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_13.png" /> Zona Residencial 13<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_14.png" /> Zona Residencial 14<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_15.png" /> Zona Central<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_16.png" /> Zona Turística 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_17.png" /> Zona Turística 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_18.png" /> Zona Turística 3<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_19.png" /> Zona Turística 4<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_20.png" /> Zona Industrial<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_21.png" /> Zona Industrial Comercial<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_22.png" /> Zona de Expansão Urbana Controlada 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_23.png" /> Zona de Expansão Urbana Controlada 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_24.png" /> Zona de Expansão Urbana Prioritária<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_25.png" /> Zona de Expansão Urbana Restrita<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_26.png" /> Zona de Expansão Urbano-Rural<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_27.png" /> Zona de Amortecimento da ZEU<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_28.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_29.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_30.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_31.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_32.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_2_33.png" /> <br />' });
var format_Zoneamento2026ZonasAxiais_3 = new ol.format.GeoJSON();
var features_Zoneamento2026ZonasAxiais_3 = format_Zoneamento2026ZonasAxiais_3.readFeatures(json_Zoneamento2026ZonasAxiais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Zoneamento2026ZonasAxiais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento2026ZonasAxiais_3.addFeatures(features_Zoneamento2026ZonasAxiais_3);
var lyr_Zoneamento2026ZonasAxiais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento2026ZonasAxiais_3, 
                style: style_Zoneamento2026ZonasAxiais_3,
                popuplayertitle: 'Zoneamento 2026 - Zonas Axiais',
                interactive: true,
    title: 'Zoneamento 2026 - Zonas Axiais<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_0.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_1.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_2.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_3.png" /> Zona Comercial e Serviço 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_4.png" /> Zona Comercial e Serviço 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_5.png" /> Zona Comercial e Serviço 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_6.png" /> <br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_7.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_8.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_9.png" /> Zona Uso Misto  Parque Linear<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_10.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_11.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_12.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_13.png" /> Zona Comercial e Serviço1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_14.png" /> Zona Comercial e Serviço2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_15.png" /> Zona Comercial e Serviço3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_16.png" /> TEMPORÁRIO<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_17.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_18.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_3_19.png" /> Zona Uso Misto  Parque Linear<br />' });
var format_ZoneamentoAtualLC902023_4 = new ol.format.GeoJSON();
var features_ZoneamentoAtualLC902023_4 = format_ZoneamentoAtualLC902023_4.readFeatures(json_ZoneamentoAtualLC902023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoAtualLC902023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoAtualLC902023_4.addFeatures(features_ZoneamentoAtualLC902023_4);
var lyr_ZoneamentoAtualLC902023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoAtualLC902023_4, 
                style: style_ZoneamentoAtualLC902023_4,
                popuplayertitle: 'Zoneamento Atual (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento Atual (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_0.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_1.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_2.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_3.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_4.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_5.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_6.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_7.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_8.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_9.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_10.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_11.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_12.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_13.png" /> Zona Industrial 1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_14.png" /> Zona Industrial 2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_15.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_16.png" /> ZEU - Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_4_17.png" /> Rio das Ostras<br />' });
var group_ZoneamentoAtualLC902023 = new ol.layer.Group({
                                layers: [lyr_ZoneamentoAtualLC902023_4,],
                                fold: 'close',
                                title: 'Zoneamento Atual (LC 90-2023)'});
var group_ZonoamentoNovo2026 = new ol.layer.Group({
                                layers: [lyr_Zoneamento2026Zonas_2,lyr_Zoneamento2026ZonasAxiais_3,],
                                fold: 'open',
                                title: 'Zonoamento Novo (2026)'});
var group_Legislaes = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Legislações'});
var group_Ambiental = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ambiental'});

lyr_Satlite_0.setVisible(true);lyr_LimiteMunicipal_1.setVisible(true);lyr_Zoneamento2026Zonas_2.setVisible(true);lyr_Zoneamento2026ZonasAxiais_3.setVisible(true);lyr_ZoneamentoAtualLC902023_4.setVisible(false);
var layersList = [lyr_Satlite_0,lyr_LimiteMunicipal_1,group_ZonoamentoNovo2026,group_ZoneamentoAtualLC902023];
lyr_LimiteMunicipal_1.set('fieldAliases', {'fid': 'fid', });
lyr_Zoneamento2026Zonas_2.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Nome': 'Nome', 'HTML': 'HTML', 'OBS': 'OBS', 'Status': 'Status', 'Status_Data': 'Data da alteração', 'Status_Resp': 'Respons. alteração', 'Revisao': 'Revisão', 'parametros': 'Parâmetros', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_Zoneamento2026ZonasAxiais_3.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'OBS': 'OBS', 'TITULO': 'TITULO', 'Revisao': 'Revisão', 'Revisao_Data': 'Data da Revisão', 'Revisao_Resp': 'Responsável Revisão', 'Verificar': 'Verificar', 'T_Eixo': 'Tipo Eixo', 'parametros': 'Parâmetros', 'Nome': 'Nome', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_ZoneamentoAtualLC902023_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'Parâmetros': 'parametros', 'ParametrosHTML': 'ParametrosHTML', 'Nome': 'Nome', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_LimiteMunicipal_1.set('fieldImages', {'fid': '', });
lyr_Zoneamento2026Zonas_2.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Nome': 'TextEdit', 'HTML': 'TextEdit', 'OBS': 'TextEdit', 'Status': 'Range', 'Status_Data': 'DateTime', 'Status_Resp': 'TextEdit', 'Revisao': 'TextEdit', 'parametros': 'TextEdit', 'ZonaNome': '', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_Zoneamento2026ZonasAxiais_3.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'OBS': 'TextEdit', 'TITULO': 'TextEdit', 'Revisao': 'CheckBox', 'Revisao_Data': 'DateTime', 'Revisao_Resp': 'TextEdit', 'Verificar': 'CheckBox', 'T_Eixo': 'TextEdit', 'parametros': 'TextEdit', 'Nome': '', 'ZonaNome': '', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_ZoneamentoAtualLC902023_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': 'TextEdit', 'Nome': 'TextEdit', 'ZonaNome': 'TextEdit', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_LimiteMunicipal_1.set('fieldLabels', {'fid': 'no label', });
lyr_Zoneamento2026Zonas_2.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Nome': 'hidden field', 'HTML': 'hidden field', 'OBS': 'hidden field', 'Status': 'hidden field', 'Status_Data': 'hidden field', 'Status_Resp': 'hidden field', 'Revisao': 'hidden field', 'parametros': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_Zoneamento2026ZonasAxiais_3.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'OBS': 'hidden field', 'TITULO': 'hidden field', 'Revisao': 'hidden field', 'Revisao_Data': 'hidden field', 'Revisao_Resp': 'hidden field', 'Verificar': 'hidden field', 'T_Eixo': 'hidden field', 'parametros': 'hidden field', 'Nome': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_ZoneamentoAtualLC902023_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'hidden field', 'Nome': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_ZoneamentoAtualLC902023_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
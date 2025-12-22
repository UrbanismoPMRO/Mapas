ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-4669979.526483, -2576550.002848, -4666362.276483, -2572889.066254]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lotes_2 = new ol.format.GeoJSON();
var features_Lotes_2 = format_Lotes_2.readFeatures(json_Lotes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_2.addFeatures(features_Lotes_2);
var lyr_Lotes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_2, 
                style: style_Lotes_2,
                popuplayertitle: 'Lotes',
                interactive: true,
    title: 'Lotes<br />\
    <img src="styles/legend/Lotes_2_0.png" /> <br />' });
var format_Quadras_3 = new ol.format.GeoJSON();
var features_Quadras_3 = format_Quadras_3.readFeatures(json_Quadras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quadras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadras_3.addFeatures(features_Quadras_3);
var lyr_Quadras_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadras_3, 
                style: style_Quadras_3,
                popuplayertitle: 'Quadras',
                interactive: true,
    title: 'Quadras<br />\
    <img src="styles/legend/Quadras_3_0.png" /> <br />' });
var format_Loteamentos_4 = new ol.format.GeoJSON();
var features_Loteamentos_4 = format_Loteamentos_4.readFeatures(json_Loteamentos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loteamentos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentos_4.addFeatures(features_Loteamentos_4);
var lyr_Loteamentos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentos_4, 
                style: style_Loteamentos_4,
                popuplayertitle: 'Loteamentos',
                interactive: true,
    title: 'Loteamentos<br />\
    <img src="styles/legend/Loteamentos_4_0.png" /> <br />' });
var format_RedeColetoraRioMais2025_5 = new ol.format.GeoJSON();
var features_RedeColetoraRioMais2025_5 = format_RedeColetoraRioMais2025_5.readFeatures(json_RedeColetoraRioMais2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeColetoraRioMais2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeColetoraRioMais2025_5.addFeatures(features_RedeColetoraRioMais2025_5);
var lyr_RedeColetoraRioMais2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeColetoraRioMais2025_5, 
                style: style_RedeColetoraRioMais2025_5,
                popuplayertitle: 'Rede Coletora (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/RedeColetoraRioMais2025_5.png" /> Rede Coletora (RioMais - 2025)'
            });
var format_LinhasdeRecalqueRioMais2025_6 = new ol.format.GeoJSON();
var features_LinhasdeRecalqueRioMais2025_6 = format_LinhasdeRecalqueRioMais2025_6.readFeatures(json_LinhasdeRecalqueRioMais2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhasdeRecalqueRioMais2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhasdeRecalqueRioMais2025_6.addFeatures(features_LinhasdeRecalqueRioMais2025_6);
var lyr_LinhasdeRecalqueRioMais2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhasdeRecalqueRioMais2025_6, 
                style: style_LinhasdeRecalqueRioMais2025_6,
                popuplayertitle: 'Linhas de Recalque (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/LinhasdeRecalqueRioMais2025_6.png" /> Linhas de Recalque (RioMais - 2025)'
            });
var format_PoosdeVisitaRioMais2025_7 = new ol.format.GeoJSON();
var features_PoosdeVisitaRioMais2025_7 = format_PoosdeVisitaRioMais2025_7.readFeatures(json_PoosdeVisitaRioMais2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoosdeVisitaRioMais2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoosdeVisitaRioMais2025_7.addFeatures(features_PoosdeVisitaRioMais2025_7);
var lyr_PoosdeVisitaRioMais2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoosdeVisitaRioMais2025_7, 
                style: style_PoosdeVisitaRioMais2025_7,
                popuplayertitle: 'Poços de Visita (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/PoosdeVisitaRioMais2025_7.png" /> Poços de Visita (RioMais - 2025)'
            });
var format_AdutorasRioMais2024_8 = new ol.format.GeoJSON();
var features_AdutorasRioMais2024_8 = format_AdutorasRioMais2024_8.readFeatures(json_AdutorasRioMais2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdutorasRioMais2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdutorasRioMais2024_8.addFeatures(features_AdutorasRioMais2024_8);
var lyr_AdutorasRioMais2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdutorasRioMais2024_8, 
                style: style_AdutorasRioMais2024_8,
                popuplayertitle: 'Adutoras (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/AdutorasRioMais2024_8.png" /> Adutoras (RioMais - 2024)'
            });
var format_ReservatriosRioMais2024_9 = new ol.format.GeoJSON();
var features_ReservatriosRioMais2024_9 = format_ReservatriosRioMais2024_9.readFeatures(json_ReservatriosRioMais2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservatriosRioMais2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosRioMais2024_9.addFeatures(features_ReservatriosRioMais2024_9);
var lyr_ReservatriosRioMais2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosRioMais2024_9, 
                style: style_ReservatriosRioMais2024_9,
                popuplayertitle: 'Reservatórios (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosRioMais2024_9.png" /> Reservatórios (RioMais - 2024)'
            });
var format_PlanodeManejoMNCostesRochosos_10 = new ol.format.GeoJSON();
var features_PlanodeManejoMNCostesRochosos_10 = format_PlanodeManejoMNCostesRochosos_10.readFeatures(json_PlanodeManejoMNCostesRochosos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanodeManejoMNCostesRochosos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanodeManejoMNCostesRochosos_10.addFeatures(features_PlanodeManejoMNCostesRochosos_10);
var lyr_PlanodeManejoMNCostesRochosos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanodeManejoMNCostesRochosos_10, 
                style: style_PlanodeManejoMNCostesRochosos_10,
                popuplayertitle: 'Plano de Manejo - MN Costões Rochosos',
                interactive: true,
    title: 'Plano de Manejo - MN Costões Rochosos<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_0.png" /> ZA<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_1.png" /> ZP<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_2.png" /> ZR<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_3.png" /> ZOC<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_4.png" /> ZUE<br />\
    <img src="styles/legend/PlanodeManejoMNCostesRochosos_10_5.png" /> ZUI<br />' });
var format_PlanodeManejoAPALagoadeIriry_11 = new ol.format.GeoJSON();
var features_PlanodeManejoAPALagoadeIriry_11 = format_PlanodeManejoAPALagoadeIriry_11.readFeatures(json_PlanodeManejoAPALagoadeIriry_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanodeManejoAPALagoadeIriry_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanodeManejoAPALagoadeIriry_11.addFeatures(features_PlanodeManejoAPALagoadeIriry_11);
var lyr_PlanodeManejoAPALagoadeIriry_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanodeManejoAPALagoadeIriry_11, 
                style: style_PlanodeManejoAPALagoadeIriry_11,
                popuplayertitle: 'Plano de Manejo - APA Lagoa de Iriry',
                interactive: true,
    title: 'Plano de Manejo - APA Lagoa de Iriry<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_0.png" /> ZP1 - Zona Populacional 1<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_1.png" /> ZP2 - Zona Populacional 2<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_2.png" /> ZP3 - Zona Populacional 3<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_3.png" /> ZAA - Zona de Adequação Ambiental<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_4.png" /> ZC - Zona de Conservação<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_5.png" /> ZI - Zona de Infraestrutura<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_6.png" /> ZUM - Zona de Uso Moderado<br />\
    <img src="styles/legend/PlanodeManejoAPALagoadeIriry_11_7.png" /> <br />' });
var format_ZoneamentoLC902023_12 = new ol.format.GeoJSON();
var features_ZoneamentoLC902023_12 = format_ZoneamentoLC902023_12.readFeatures(json_ZoneamentoLC902023_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneamentoLC902023_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLC902023_12.addFeatures(features_ZoneamentoLC902023_12);
var lyr_ZoneamentoLC902023_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLC902023_12, 
                style: style_ZoneamentoLC902023_12,
                popuplayertitle: 'Zoneamento (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_0.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_1.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_2.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_3.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_4.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_5.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_6.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_7.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_8.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_9.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_10.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_11.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_12.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoLC902023_12_13.png" /> <br />\
    <img src="styles/legend/ZoneamentoLC902023_12_14.png" /> Rio das Ostras<br />' });
var format_ZEIMA1_13 = new ol.format.GeoJSON();
var features_ZEIMA1_13 = format_ZEIMA1_13.readFeatures(json_ZEIMA1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEIMA1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEIMA1_13.addFeatures(features_ZEIMA1_13);
var lyr_ZEIMA1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEIMA1_13, 
                style: style_ZEIMA1_13,
                popuplayertitle: 'ZEIMA1',
                interactive: true,
    title: 'ZEIMA1<br />\
    <img src="styles/legend/ZEIMA1_13_0.png" /> SZA1<br />\
    <img src="styles/legend/ZEIMA1_13_1.png" /> SZA2<br />\
    <img src="styles/legend/ZEIMA1_13_2.png" /> SZA3<br />\
    <img src="styles/legend/ZEIMA1_13_3.png" /> SZA4<br />\
    <img src="styles/legend/ZEIMA1_13_4.png" /> SZA5<br />\
    <img src="styles/legend/ZEIMA1_13_5.png" /> <br />' });
var format_Novacamadaderascunho_14 = new ol.format.GeoJSON();
var features_Novacamadaderascunho_14 = format_Novacamadaderascunho_14.readFeatures(json_Novacamadaderascunho_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Novacamadaderascunho_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Novacamadaderascunho_14.addFeatures(features_Novacamadaderascunho_14);
var lyr_Novacamadaderascunho_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Novacamadaderascunho_14, 
                style: style_Novacamadaderascunho_14,
                popuplayertitle: 'Nova camada de rascunho',
                interactive: true,
                title: '<img src="styles/legend/Novacamadaderascunho_14.png" /> Nova camada de rascunho'
            });
var group_Legislaes = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLC902023_12,lyr_ZEIMA1_13,lyr_Novacamadaderascunho_14,],
                                fold: 'close',
                                title: 'Legislações'});
var group_Ambiental = new ol.layer.Group({
                                layers: [lyr_PlanodeManejoMNCostesRochosos_10,lyr_PlanodeManejoAPALagoadeIriry_11,],
                                fold: 'close',
                                title: 'Ambiental'});
var group_Saneamento = new ol.layer.Group({
                                layers: [lyr_RedeColetoraRioMais2025_5,lyr_LinhasdeRecalqueRioMais2025_6,lyr_PoosdeVisitaRioMais2025_7,lyr_AdutorasRioMais2024_8,lyr_ReservatriosRioMais2024_9,],
                                fold: 'close',
                                title: 'Saneamento'});
var group_Loteamentos = new ol.layer.Group({
                                layers: [lyr_Lotes_2,lyr_Quadras_3,lyr_Loteamentos_4,],
                                fold: 'close',
                                title: 'Loteamentos'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Lotes_2.setVisible(false);lyr_Quadras_3.setVisible(false);lyr_Loteamentos_4.setVisible(false);lyr_RedeColetoraRioMais2025_5.setVisible(false);lyr_LinhasdeRecalqueRioMais2025_6.setVisible(false);lyr_PoosdeVisitaRioMais2025_7.setVisible(false);lyr_AdutorasRioMais2024_8.setVisible(false);lyr_ReservatriosRioMais2024_9.setVisible(false);lyr_PlanodeManejoMNCostesRochosos_10.setVisible(false);lyr_PlanodeManejoAPALagoadeIriry_11.setVisible(false);lyr_ZoneamentoLC902023_12.setVisible(false);lyr_ZEIMA1_13.setVisible(false);lyr_Novacamadaderascunho_14.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,group_Loteamentos,group_Saneamento,group_Ambiental,group_Legislaes];
lyr_Lotes_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Área (m²)', 'Lote': 'Lote', 'Quadra': 'Quadra', 'Loteamento': 'Loteamento', 'InscMun': 'Inscrição Municipal', 'AreaConst': 'Área Construída (m²)', 'Calcada': 'Calçada', 'Meiofio': 'Meio-Fio', 'Pavimento': 'Pavimentado', 'Name': 'Name', });
lyr_Quadras_3.set('fieldAliases', {'fid': 'fid', 'Quadra': 'Quadra', 'Area': 'Área (m²)', 'Loteamento': 'Loteamento', 'Name': 'Name', });
lyr_Loteamentos_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_RedeColetoraRioMais2025_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'comp': 'comp', 'TT_DIAM': 'TT_DIAM', 'TT_TIPO_RE': 'TT_TIPO_RE', 'TT_MATERIA': 'TT_MATERIA', 'TT_CU_ID': 'TT_CU_ID', 'TT_CU_OID': 'TT_CU_OID', 'TT_ZEL_ID': 'TT_ZEL_ID', 'Diâmetro': 'diametro', });
lyr_LinhasdeRecalqueRioMais2025_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Comprimento': 'Comprimento', });
lyr_PoosdeVisitaRioMais2025_7.set('fieldAliases', {'fid': 'fid', 'PR_TIPO_RE': 'PR_TIPO_RE', 'PR_ZET_ID': 'PR_ZET_ID', 'PR_BA_ID': 'PR_BA_ID', 'DIR': 'DIR', });
lyr_AdutorasRioMais2024_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Diâmetro': 'Diâmetro', 'Notas': 'Notas', });
lyr_ReservatriosRioMais2024_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanodeManejoMNCostesRochosos_10.set('fieldAliases', {'fid': 'fid', 'Descricao': 'Descricao', 'Name': 'Name', 'Zona': 'Zona', });
lyr_PlanodeManejoAPALagoadeIriry_11.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Zona': 'Zona', 'Parametros': 'Parametros', 'Usos': 'Usos', 'Normas Gerais': 'Normas Gerais', 'Notas': 'Notas', });
lyr_ZoneamentoLC902023_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Zona': 'Zona', 'Parâmetros': 'Parâmetros', });
lyr_ZEIMA1_13.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Name': 'Name', 'Usos e Atividades': 'Usos e Atividades', 'Estacionamento': 'Estacionamento', 'Parametros': 'Parametros', 'PaginaHTML': 'PaginaHTML', });
lyr_Novacamadaderascunho_14.set('fieldAliases', {'Nome': 'Nome', 'Zona': 'Zona', });
lyr_Lotes_2.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Quadra': 'TextEdit', 'Loteamento': 'TextEdit', 'InscMun': 'TextEdit', 'AreaConst': 'TextEdit', 'Calcada': 'CheckBox', 'Meiofio': 'CheckBox', 'Pavimento': 'CheckBox', 'Name': 'TextEdit', });
lyr_Quadras_3.set('fieldImages', {'fid': 'TextEdit', 'Quadra': 'TextEdit', 'Area': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', });
lyr_Loteamentos_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_RedeColetoraRioMais2025_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'comp': 'TextEdit', 'TT_DIAM': 'TextEdit', 'TT_TIPO_RE': 'TextEdit', 'TT_MATERIA': 'TextEdit', 'TT_CU_ID': 'TextEdit', 'TT_CU_OID': 'TextEdit', 'TT_ZEL_ID': 'TextEdit', 'Diâmetro': 'TextEdit', });
lyr_LinhasdeRecalqueRioMais2025_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Comprimento': 'TextEdit', });
lyr_PoosdeVisitaRioMais2025_7.set('fieldImages', {'fid': 'TextEdit', 'PR_TIPO_RE': 'TextEdit', 'PR_ZET_ID': 'TextEdit', 'PR_BA_ID': 'TextEdit', 'DIR': '', });
lyr_AdutorasRioMais2024_8.set('fieldImages', {'fid': '', 'Name': '', 'Diâmetro': '', 'Notas': '', });
lyr_ReservatriosRioMais2024_9.set('fieldImages', {'fid': '', 'Name': '', });
lyr_PlanodeManejoMNCostesRochosos_10.set('fieldImages', {'fid': 'TextEdit', 'Descricao': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', });
lyr_PlanodeManejoAPALagoadeIriry_11.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Zona': 'TextEdit', 'Parametros': 'TextEdit', 'Usos': 'TextEdit', 'Normas Gerais': 'TextEdit', 'Notas': 'TextEdit', });
lyr_ZoneamentoLC902023_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', });
lyr_ZEIMA1_13.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Name': 'TextEdit', 'Usos e Atividades': 'TextEdit', 'Estacionamento': 'TextEdit', 'Parametros': '', 'PaginaHTML': '', });
lyr_Novacamadaderascunho_14.set('fieldImages', {'Nome': '', 'Zona': '', });
lyr_Lotes_2.set('fieldLabels', {'fid': 'no label', 'Area': 'no label', 'Lote': 'no label', 'Quadra': 'no label', 'Loteamento': 'no label', 'InscMun': 'no label', 'AreaConst': 'no label', 'Calcada': 'no label', 'Meiofio': 'no label', 'Pavimento': 'no label', 'Name': 'no label', });
lyr_Quadras_3.set('fieldLabels', {'fid': 'no label', 'Quadra': 'no label', 'Area': 'no label', 'Loteamento': 'no label', 'Name': 'no label', });
lyr_Loteamentos_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_RedeColetoraRioMais2025_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'comp': 'no label', 'TT_DIAM': 'no label', 'TT_TIPO_RE': 'no label', 'TT_MATERIA': 'no label', 'TT_CU_ID': 'no label', 'TT_CU_OID': 'no label', 'TT_ZEL_ID': 'no label', 'Diâmetro': 'no label', });
lyr_LinhasdeRecalqueRioMais2025_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Comprimento': 'no label', });
lyr_PoosdeVisitaRioMais2025_7.set('fieldLabels', {'fid': 'no label', 'PR_TIPO_RE': 'no label', 'PR_ZET_ID': 'no label', 'PR_BA_ID': 'no label', 'DIR': 'no label', });
lyr_AdutorasRioMais2024_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Diâmetro': 'no label', 'Notas': 'no label', });
lyr_ReservatriosRioMais2024_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_PlanodeManejoMNCostesRochosos_10.set('fieldLabels', {'fid': 'no label', 'Descricao': 'no label', 'Name': 'no label', 'Zona': 'no label', });
lyr_PlanodeManejoAPALagoadeIriry_11.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Zona': 'no label', 'Parametros': 'no label', 'Usos': 'no label', 'Normas Gerais': 'no label', 'Notas': 'no label', });
lyr_ZoneamentoLC902023_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Zona': 'no label', 'Parâmetros': 'no label', });
lyr_ZEIMA1_13.set('fieldLabels', {'fid': 'no label', 'Zona': 'header label - always visible', 'Name': 'no label', 'Usos e Atividades': 'no label', 'Estacionamento': 'no label', 'Parametros': 'no label', 'PaginaHTML': 'no label', });
lyr_Novacamadaderascunho_14.set('fieldLabels', {'Nome': 'no label', 'Zona': 'no label', });
lyr_Novacamadaderascunho_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
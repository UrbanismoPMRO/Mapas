ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-4671442.400150, -2576565.941509, -4664798.966575, -2572175.407332]);
var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Satlite_1 = new ol.layer.Tile({
            'title': 'Satélite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sade_2 = new ol.format.GeoJSON();
var features_Sade_2 = format_Sade_2.readFeatures(json_Sade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sade_2.addFeatures(features_Sade_2);
var lyr_Sade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sade_2, 
                style: style_Sade_2,
                popuplayertitle: 'Saúde',
                interactive: true,
                title: '<img src="styles/legend/Sade_2.png" /> Saúde'
            });
var format_Educao_3 = new ol.format.GeoJSON();
var features_Educao_3 = format_Educao_3.readFeatures(json_Educao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educao_3.addFeatures(features_Educao_3);
var lyr_Educao_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Educao_3, 
                style: style_Educao_3,
                popuplayertitle: 'Educação',
                interactive: true,
    title: 'Educação<br />\
    <img src="styles/legend/Educao_3_0.png" /> Federal - Superior<br />\
    <img src="styles/legend/Educao_3_1.png" /> Estadual - Médio<br />\
    <img src="styles/legend/Educao_3_2.png" /> Municipal - Básico<br />' });
var format_RedeColetoraRioMais2025_4 = new ol.format.GeoJSON();
var features_RedeColetoraRioMais2025_4 = format_RedeColetoraRioMais2025_4.readFeatures(json_RedeColetoraRioMais2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeColetoraRioMais2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeColetoraRioMais2025_4.addFeatures(features_RedeColetoraRioMais2025_4);
var lyr_RedeColetoraRioMais2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeColetoraRioMais2025_4, 
                style: style_RedeColetoraRioMais2025_4,
                popuplayertitle: 'Rede Coletora (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/RedeColetoraRioMais2025_4.png" /> Rede Coletora (RioMais - 2025)'
            });
var format_LinhasdeRecalqueRioMais2025_5 = new ol.format.GeoJSON();
var features_LinhasdeRecalqueRioMais2025_5 = format_LinhasdeRecalqueRioMais2025_5.readFeatures(json_LinhasdeRecalqueRioMais2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhasdeRecalqueRioMais2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhasdeRecalqueRioMais2025_5.addFeatures(features_LinhasdeRecalqueRioMais2025_5);
var lyr_LinhasdeRecalqueRioMais2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhasdeRecalqueRioMais2025_5, 
                style: style_LinhasdeRecalqueRioMais2025_5,
                popuplayertitle: 'Linhas de Recalque (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/LinhasdeRecalqueRioMais2025_5.png" /> Linhas de Recalque (RioMais - 2025)'
            });
var format_PoosdeVisitaRioMais2025_6 = new ol.format.GeoJSON();
var features_PoosdeVisitaRioMais2025_6 = format_PoosdeVisitaRioMais2025_6.readFeatures(json_PoosdeVisitaRioMais2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoosdeVisitaRioMais2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoosdeVisitaRioMais2025_6.addFeatures(features_PoosdeVisitaRioMais2025_6);
var lyr_PoosdeVisitaRioMais2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoosdeVisitaRioMais2025_6, 
                style: style_PoosdeVisitaRioMais2025_6,
                popuplayertitle: 'Poços de Visita (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/PoosdeVisitaRioMais2025_6.png" /> Poços de Visita (RioMais - 2025)'
            });
var format_AdutorasRioMais2024_7 = new ol.format.GeoJSON();
var features_AdutorasRioMais2024_7 = format_AdutorasRioMais2024_7.readFeatures(json_AdutorasRioMais2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdutorasRioMais2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdutorasRioMais2024_7.addFeatures(features_AdutorasRioMais2024_7);
var lyr_AdutorasRioMais2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdutorasRioMais2024_7, 
                style: style_AdutorasRioMais2024_7,
                popuplayertitle: 'Adutoras (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/AdutorasRioMais2024_7.png" /> Adutoras (RioMais - 2024)'
            });
var format_ReservatriosRioMais2024_8 = new ol.format.GeoJSON();
var features_ReservatriosRioMais2024_8 = format_ReservatriosRioMais2024_8.readFeatures(json_ReservatriosRioMais2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservatriosRioMais2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosRioMais2024_8.addFeatures(features_ReservatriosRioMais2024_8);
var lyr_ReservatriosRioMais2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosRioMais2024_8, 
                style: style_ReservatriosRioMais2024_8,
                popuplayertitle: 'Reservatórios (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosRioMais2024_8.png" /> Reservatórios (RioMais - 2024)'
            });
var format_Loteamentos_9 = new ol.format.GeoJSON();
var features_Loteamentos_9 = format_Loteamentos_9.readFeatures(json_Loteamentos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loteamentos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentos_9.addFeatures(features_Loteamentos_9);
var lyr_Loteamentos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentos_9, 
                style: style_Loteamentos_9,
                popuplayertitle: 'Loteamentos',
                interactive: true,
                title: '<img src="styles/legend/Loteamentos_9.png" /> Loteamentos'
            });
var format_reasPblicas_10 = new ol.format.GeoJSON();
var features_reasPblicas_10 = format_reasPblicas_10.readFeatures(json_reasPblicas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasPblicas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPblicas_10.addFeatures(features_reasPblicas_10);
var lyr_reasPblicas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPblicas_10, 
                style: style_reasPblicas_10,
                popuplayertitle: 'Áreas Públicas',
                interactive: true,
    title: 'Áreas Públicas<br />\
    <img src="styles/legend/reasPblicas_10_0.png" /> Terrenos Próprios - Doação<br />\
    <img src="styles/legend/reasPblicas_10_1.png" /> Áreas de Praças<br />\
    <img src="styles/legend/reasPblicas_10_2.png" /> Terrenos Próprios - Desapropriação<br />\
    <img src="styles/legend/reasPblicas_10_3.png" /> Área de Preservação Permanente<br />\
    <img src="styles/legend/reasPblicas_10_4.png" /> Áreas Verdes<br />\
    <img src="styles/legend/reasPblicas_10_5.png" /> Desapropriação - MNCR<br />\
    <img src="styles/legend/reasPblicas_10_6.png" /> Terrenos Institucionais<br />\
    <img src="styles/legend/reasPblicas_10_7.png" /> Próprios Invadidos<br />' });
var format_ARIEItapebussus_11 = new ol.format.GeoJSON();
var features_ARIEItapebussus_11 = format_ARIEItapebussus_11.readFeatures(json_ARIEItapebussus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARIEItapebussus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARIEItapebussus_11.addFeatures(features_ARIEItapebussus_11);
var lyr_ARIEItapebussus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARIEItapebussus_11, 
                style: style_ARIEItapebussus_11,
                popuplayertitle: 'ARIE Itapebussus',
                interactive: true,
    title: 'ARIE Itapebussus<br />\
    <img src="styles/legend/ARIEItapebussus_11_0.png" /> Zona de Adequação Ambiental<br />\
    <img src="styles/legend/ARIEItapebussus_11_1.png" /> Zona de Conservação<br />\
    <img src="styles/legend/ARIEItapebussus_11_2.png" /> Zona de Diferentes Interesses Públicos<br />\
    <img src="styles/legend/ARIEItapebussus_11_3.png" /> Zona de Infraestrutura<br />\
    <img src="styles/legend/ARIEItapebussus_11_4.png" /> Zona Populacional<br />\
    <img src="styles/legend/ARIEItapebussus_11_5.png" /> Zona Produtiva<br />\
    <img src="styles/legend/ARIEItapebussus_11_6.png" /> Zona de Sobreposição Territorial<br />\
    <img src="styles/legend/ARIEItapebussus_11_7.png" /> Zona de Uso Moderado<br />\
    <img src="styles/legend/ARIEItapebussus_11_8.png" /> Zona de Uso Restrito<br />\
    <img src="styles/legend/ARIEItapebussus_11_9.png" /> Zona de Amortecimento<br />' });
var format_MNCostesRochosos_12 = new ol.format.GeoJSON();
var features_MNCostesRochosos_12 = format_MNCostesRochosos_12.readFeatures(json_MNCostesRochosos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MNCostesRochosos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNCostesRochosos_12.addFeatures(features_MNCostesRochosos_12);
var lyr_MNCostesRochosos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNCostesRochosos_12, 
                style: style_MNCostesRochosos_12,
                popuplayertitle: 'MN Costões Rochosos',
                interactive: true,
    title: 'MN Costões Rochosos<br />\
    <img src="styles/legend/MNCostesRochosos_12_0.png" /> ZA<br />\
    <img src="styles/legend/MNCostesRochosos_12_1.png" /> ZP<br />\
    <img src="styles/legend/MNCostesRochosos_12_2.png" /> ZR<br />\
    <img src="styles/legend/MNCostesRochosos_12_3.png" /> ZOC<br />\
    <img src="styles/legend/MNCostesRochosos_12_4.png" /> ZUE<br />\
    <img src="styles/legend/MNCostesRochosos_12_5.png" /> ZUI<br />' });
var format_APALagoadeIriry_13 = new ol.format.GeoJSON();
var features_APALagoadeIriry_13 = format_APALagoadeIriry_13.readFeatures(json_APALagoadeIriry_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APALagoadeIriry_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APALagoadeIriry_13.addFeatures(features_APALagoadeIriry_13);
var lyr_APALagoadeIriry_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APALagoadeIriry_13, 
                style: style_APALagoadeIriry_13,
                popuplayertitle: 'APA Lagoa de Iriry',
                interactive: true,
    title: 'APA Lagoa de Iriry<br />\
    <img src="styles/legend/APALagoadeIriry_13_0.png" /> ZP1 - Zona Populacional 1<br />\
    <img src="styles/legend/APALagoadeIriry_13_1.png" /> ZP2 - Zona Populacional 2<br />\
    <img src="styles/legend/APALagoadeIriry_13_2.png" /> ZP3 - Zona Populacional 3<br />\
    <img src="styles/legend/APALagoadeIriry_13_3.png" /> ZAA - Zona de Adequação Ambiental<br />\
    <img src="styles/legend/APALagoadeIriry_13_4.png" /> ZC - Zona de Conservação<br />\
    <img src="styles/legend/APALagoadeIriry_13_5.png" /> ZI - Zona de Infraestrutura<br />\
    <img src="styles/legend/APALagoadeIriry_13_6.png" /> ZUM - Zona de Uso Moderado<br />\
    <img src="styles/legend/APALagoadeIriry_13_7.png" /> <br />' });
var format_ZoneamentoLC902023_14 = new ol.format.GeoJSON();
var features_ZoneamentoLC902023_14 = format_ZoneamentoLC902023_14.readFeatures(json_ZoneamentoLC902023_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneamentoLC902023_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLC902023_14.addFeatures(features_ZoneamentoLC902023_14);
var lyr_ZoneamentoLC902023_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLC902023_14, 
                style: style_ZoneamentoLC902023_14,
                popuplayertitle: 'Zoneamento (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_0.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_1.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_2.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_3.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_4.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_5.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_6.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_7.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_8.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_9.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_10.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_11.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_12.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoLC902023_14_13.png" /> Rio das Ostras<br />' });
var format_ZEIMA1_15 = new ol.format.GeoJSON();
var features_ZEIMA1_15 = format_ZEIMA1_15.readFeatures(json_ZEIMA1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEIMA1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEIMA1_15.addFeatures(features_ZEIMA1_15);
var lyr_ZEIMA1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEIMA1_15, 
                style: style_ZEIMA1_15,
                popuplayertitle: 'ZEIMA1',
                interactive: true,
    title: 'ZEIMA1<br />\
    <img src="styles/legend/ZEIMA1_15_0.png" /> SZA1<br />\
    <img src="styles/legend/ZEIMA1_15_1.png" /> SZA2<br />\
    <img src="styles/legend/ZEIMA1_15_2.png" /> SZA3<br />\
    <img src="styles/legend/ZEIMA1_15_3.png" /> SZA4<br />\
    <img src="styles/legend/ZEIMA1_15_4.png" /> SZA5<br />' });
var group_Legislaes = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLC902023_14,lyr_ZEIMA1_15,],
                                fold: 'close',
                                title: 'Legislações'});
var group_Ambiental = new ol.layer.Group({
                                layers: [lyr_ARIEItapebussus_11,lyr_MNCostesRochosos_12,lyr_APALagoadeIriry_13,],
                                fold: 'close',
                                title: 'Ambiental'});
var group_Fundirio = new ol.layer.Group({
                                layers: [lyr_Loteamentos_9,lyr_reasPblicas_10,],
                                fold: 'close',
                                title: 'Fundiário'});
var group_Saneamento = new ol.layer.Group({
                                layers: [lyr_RedeColetoraRioMais2025_4,lyr_LinhasdeRecalqueRioMais2025_5,lyr_PoosdeVisitaRioMais2025_6,lyr_AdutorasRioMais2024_7,lyr_ReservatriosRioMais2024_8,],
                                fold: 'close',
                                title: 'Saneamento'});
var group_EquipamentosUrbanos = new ol.layer.Group({
                                layers: [lyr_Sade_2,lyr_Educao_3,],
                                fold: 'close',
                                title: 'Equipamentos Urbanos'});

lyr_Mapa_0.setVisible(true);lyr_Satlite_1.setVisible(true);lyr_Sade_2.setVisible(false);lyr_Educao_3.setVisible(false);lyr_RedeColetoraRioMais2025_4.setVisible(false);lyr_LinhasdeRecalqueRioMais2025_5.setVisible(false);lyr_PoosdeVisitaRioMais2025_6.setVisible(false);lyr_AdutorasRioMais2024_7.setVisible(false);lyr_ReservatriosRioMais2024_8.setVisible(false);lyr_Loteamentos_9.setVisible(false);lyr_reasPblicas_10.setVisible(false);lyr_ARIEItapebussus_11.setVisible(false);lyr_MNCostesRochosos_12.setVisible(false);lyr_APALagoadeIriry_13.setVisible(false);lyr_ZoneamentoLC902023_14.setVisible(false);lyr_ZEIMA1_15.setVisible(false);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,group_EquipamentosUrbanos,group_Saneamento,group_Fundirio,group_Ambiental,group_Legislaes];
lyr_Sade_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tipo': 'Tipo', 'Modalidade': 'Modalidade', 'Administração': 'Administração', 'Descrição': 'Descrição', });
lyr_Educao_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tipo': 'Tipo', 'Modalidade': 'Modalidade', 'Administração': 'Administração', 'Descrição': 'Descrição', });
lyr_RedeColetoraRioMais2025_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'comp': 'comp', 'TT_DIAM': 'TT_DIAM', 'TT_TIPO_RE': 'TT_TIPO_RE', 'TT_MATERIA': 'TT_MATERIA', 'TT_CU_ID': 'TT_CU_ID', 'TT_CU_OID': 'TT_CU_OID', 'TT_ZEL_ID': 'TT_ZEL_ID', 'Diâmetro': 'diametro', });
lyr_LinhasdeRecalqueRioMais2025_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Comprimento': 'Comprimento', });
lyr_PoosdeVisitaRioMais2025_6.set('fieldAliases', {'fid': 'fid', 'PR_TIPO_RE': 'PR_TIPO_RE', 'PR_ZET_ID': 'PR_ZET_ID', 'PR_BA_ID': 'PR_BA_ID', 'DIR': 'DIR', });
lyr_AdutorasRioMais2024_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Diâmetro': 'Diâmetro', 'Notas': 'Notas', });
lyr_ReservatriosRioMais2024_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Loteamentos_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_reasPblicas_10.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', 'Indice': 'Indice', 'Especie': 'Espécie', 'Tipo': 'Tipo', });
lyr_ARIEItapebussus_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Zona': 'Zona', 'Parametros': 'Parâmetros', 'Link': 'Documentação', 'Descricao': 'Descrição', 'NormasGerais': 'Normas Gerais', });
lyr_MNCostesRochosos_12.set('fieldAliases', {'fid': 'fid', 'Descricao': 'Descricao', 'Name': 'Name', 'Zona': 'Zona', 'DescricaoHTML': 'DescricaoHTML', });
lyr_APALagoadeIriry_13.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Zona': 'Zona', 'Parametros': 'Parametros', 'Usos': 'Usos', 'Normas Gerais': 'Normas Gerais', 'Notas': 'Notas', 'PaginaHTML': 'PaginaHTML', });
lyr_ZoneamentoLC902023_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Zona': 'Zona', 'Parâmetros': 'Parâmetros', 'ParametrosHTML': 'ParametrosHTML', });
lyr_ZEIMA1_15.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Name': 'Name', 'Usos e Atividades': 'Usos e Atividades', 'Estacionamento': 'Estacionamento', 'Parametros': 'Parametros', 'PaginaHTML': 'PaginaHTML', 'HTML_Formatacao': 'HTML_Formatacao', 'ParametrosHTML': 'ParametrosHTML', 'DescricaoHTML': 'DescricaoHTML', });
lyr_Sade_2.set('fieldImages', {'fid': '', 'Name': '', 'Tipo': '', 'Modalidade': '', 'Administração': '', 'Descrição': '', });
lyr_Educao_3.set('fieldImages', {'fid': '', 'Name': '', 'Tipo': '', 'Modalidade': '', 'Administração': '', 'Descrição': '', });
lyr_RedeColetoraRioMais2025_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'comp': 'TextEdit', 'TT_DIAM': 'TextEdit', 'TT_TIPO_RE': 'TextEdit', 'TT_MATERIA': 'TextEdit', 'TT_CU_ID': 'TextEdit', 'TT_CU_OID': 'TextEdit', 'TT_ZEL_ID': 'TextEdit', 'Diâmetro': 'TextEdit', });
lyr_LinhasdeRecalqueRioMais2025_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Comprimento': 'TextEdit', });
lyr_PoosdeVisitaRioMais2025_6.set('fieldImages', {'fid': 'TextEdit', 'PR_TIPO_RE': 'TextEdit', 'PR_ZET_ID': 'TextEdit', 'PR_BA_ID': 'TextEdit', 'DIR': '', });
lyr_AdutorasRioMais2024_7.set('fieldImages', {'fid': '', 'Name': '', 'Diâmetro': '', 'Notas': '', });
lyr_ReservatriosRioMais2024_8.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Loteamentos_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reasPblicas_10.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', 'Indice': '', 'Especie': '', 'Tipo': '', });
lyr_ARIEItapebussus_11.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'Zona': '', 'Parametros': '', 'Link': '', 'Descricao': '', 'NormasGerais': '', });
lyr_MNCostesRochosos_12.set('fieldImages', {'fid': 'TextEdit', 'Descricao': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'DescricaoHTML': '', });
lyr_APALagoadeIriry_13.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Zona': 'TextEdit', 'Parametros': 'TextEdit', 'Usos': 'TextEdit', 'Normas Gerais': 'TextEdit', 'Notas': 'TextEdit', 'PaginaHTML': 'TextEdit', });
lyr_ZoneamentoLC902023_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': '', });
lyr_ZEIMA1_15.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Name': 'TextEdit', 'Usos e Atividades': 'TextEdit', 'Estacionamento': 'TextEdit', 'Parametros': '', 'PaginaHTML': '', 'HTML_Formatacao': '', 'ParametrosHTML': '', 'DescricaoHTML': '', });
lyr_Sade_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Tipo': 'hidden field', 'Modalidade': 'inline label - visible with data', 'Administração': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_Educao_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Tipo': 'hidden field', 'Modalidade': 'inline label - visible with data', 'Administração': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_RedeColetoraRioMais2025_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'comp': 'inline label - visible with data', 'TT_DIAM': 'inline label - visible with data', 'TT_TIPO_RE': 'inline label - visible with data', 'TT_MATERIA': 'inline label - visible with data', 'TT_CU_ID': 'inline label - visible with data', 'TT_CU_OID': 'inline label - visible with data', 'TT_ZEL_ID': 'inline label - visible with data', 'Diâmetro': 'inline label - visible with data', });
lyr_LinhasdeRecalqueRioMais2025_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Comprimento': 'inline label - visible with data', });
lyr_PoosdeVisitaRioMais2025_6.set('fieldLabels', {'fid': 'hidden field', 'PR_TIPO_RE': 'inline label - visible with data', 'PR_ZET_ID': 'inline label - visible with data', 'PR_BA_ID': 'inline label - visible with data', 'DIR': 'inline label - visible with data', });
lyr_AdutorasRioMais2024_7.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Diâmetro': 'inline label - visible with data', 'Notas': 'inline label - visible with data', });
lyr_ReservatriosRioMais2024_8.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_Loteamentos_9.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_reasPblicas_10.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'hidden field', 'Descrição': 'header label - visible with data', 'Indice': 'hidden field', 'Especie': 'header label - visible with data', 'Tipo': 'hidden field', });
lyr_ARIEItapebussus_11.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'Zona': 'hidden field', 'Parametros': 'header label - visible with data', 'Link': 'header label - visible with data', 'Descricao': 'header label - visible with data', 'NormasGerais': 'header label - visible with data', });
lyr_MNCostesRochosos_12.set('fieldLabels', {'fid': 'hidden field', 'Descricao': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'DescricaoHTML': 'no label', });
lyr_APALagoadeIriry_13.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'no label', 'Zona': 'hidden field', 'Parametros': 'hidden field', 'Usos': 'hidden field', 'Normas Gerais': 'hidden field', 'Notas': 'hidden field', 'PaginaHTML': 'no label', });
lyr_ZoneamentoLC902023_14.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'no label', });
lyr_ZEIMA1_15.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Name': 'no label', 'Usos e Atividades': 'hidden field', 'Estacionamento': 'hidden field', 'Parametros': 'hidden field', 'PaginaHTML': 'hidden field', 'HTML_Formatacao': 'hidden field', 'ParametrosHTML': 'no label', 'DescricaoHTML': 'no label', });
lyr_ZEIMA1_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
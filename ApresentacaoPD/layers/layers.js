ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([195749.489782, 7507696.410100, 210744.947924, 7518759.541268]);
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
var format_ReBio_1 = new ol.format.GeoJSON();
var features_ReBio_1 = format_ReBio_1.readFeatures(json_ReBio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBio_1.addFeatures(features_ReBio_1);
var lyr_ReBio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBio_1, 
                style: style_ReBio_1,
                popuplayertitle: 'ReBio',
                interactive: false,
    title: 'ReBio<br />\
    <img src="styles/legend/ReBio_1_0.png" /> Adequação<br />\
    <img src="styles/legend/ReBio_1_1.png" /> Uso Moderado<br />\
    <img src="styles/legend/ReBio_1_2.png" /> Amortecimento<br />\
    <img src="styles/legend/ReBio_1_3.png" /> Conservação<br />\
    <img src="styles/legend/ReBio_1_4.png" /> Infraestrutura<br />\
    <img src="styles/legend/ReBio_1_5.png" /> Uso Divergente<br />\
    <img src="styles/legend/ReBio_1_6.png" /> Difer Interess Públ<br />\
    <img src="styles/legend/ReBio_1_7.png" /> Amortecimento<br />' });
var format_ReBioZonadeAmortecimento_2 = new ol.format.GeoJSON();
var features_ReBioZonadeAmortecimento_2 = format_ReBioZonadeAmortecimento_2.readFeatures(json_ReBioZonadeAmortecimento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBioZonadeAmortecimento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBioZonadeAmortecimento_2.addFeatures(features_ReBioZonadeAmortecimento_2);
var lyr_ReBioZonadeAmortecimento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBioZonadeAmortecimento_2, 
                style: style_ReBioZonadeAmortecimento_2,
                popuplayertitle: 'ReBio - Zona de Amortecimento',
                interactive: false,
                title: '<img src="styles/legend/ReBioZonadeAmortecimento_2.png" /> ReBio - Zona de Amortecimento'
            });
var format_ARIE_Itapebussus_3 = new ol.format.GeoJSON();
var features_ARIE_Itapebussus_3 = format_ARIE_Itapebussus_3.readFeatures(json_ARIE_Itapebussus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ARIE_Itapebussus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARIE_Itapebussus_3.addFeatures(features_ARIE_Itapebussus_3);
var lyr_ARIE_Itapebussus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARIE_Itapebussus_3, 
                style: style_ARIE_Itapebussus_3,
                popuplayertitle: 'ARIE_Itapebussus',
                interactive: true,
    title: 'ARIE_Itapebussus<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_0.png" /> Zona de Adequação Ambiental<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_1.png" /> Zona de Conservação<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_2.png" /> Zona de Diferentes Interesses Públicos<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_3.png" /> Zona de Infraestrutura<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_4.png" /> Zona Populacional<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_5.png" /> Zona Produtiva<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_6.png" /> Zona de Sobreposição Territorial<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_7.png" /> Zona de Uso Moderado<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_8.png" /> Zona de Uso Restrito<br />\
    <img src="styles/legend/ARIE_Itapebussus_3_9.png" /> Zona de Amortecimento<br />' });
var format_PMMNCostesRochosos_4 = new ol.format.GeoJSON();
var features_PMMNCostesRochosos_4 = format_PMMNCostesRochosos_4.readFeatures(json_PMMNCostesRochosos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PMMNCostesRochosos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMMNCostesRochosos_4.addFeatures(features_PMMNCostesRochosos_4);
var lyr_PMMNCostesRochosos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PMMNCostesRochosos_4, 
                style: style_PMMNCostesRochosos_4,
                popuplayertitle: 'PM-MN Costões Rochosos',
                interactive: true,
    title: 'PM-MN Costões Rochosos<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_0.png" /> ZA<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_1.png" /> ZP<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_2.png" /> ZR<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_3.png" /> ZOC<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_4.png" /> ZUE<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_5.png" /> ZUI<br />\
    <img src="styles/legend/PMMNCostesRochosos_4_6.png" /> <br />' });
var format_APALagoadeIriry_5 = new ol.format.GeoJSON();
var features_APALagoadeIriry_5 = format_APALagoadeIriry_5.readFeatures(json_APALagoadeIriry_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_APALagoadeIriry_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APALagoadeIriry_5.addFeatures(features_APALagoadeIriry_5);
var lyr_APALagoadeIriry_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APALagoadeIriry_5, 
                style: style_APALagoadeIriry_5,
                popuplayertitle: 'APA Lagoa de Iriry',
                interactive: false,
    title: 'APA Lagoa de Iriry<br />\
    <img src="styles/legend/APALagoadeIriry_5_0.png" /> ZP1 - Zona Populacional 1<br />\
    <img src="styles/legend/APALagoadeIriry_5_1.png" /> ZP2 - Zona Populacional 2<br />\
    <img src="styles/legend/APALagoadeIriry_5_2.png" /> ZP3 - Zona Populacional 3<br />\
    <img src="styles/legend/APALagoadeIriry_5_3.png" /> ZAA - Zona de Adequação Ambiental<br />\
    <img src="styles/legend/APALagoadeIriry_5_4.png" /> ZC - Zona de Conservação<br />\
    <img src="styles/legend/APALagoadeIriry_5_5.png" /> ZI - Zona de Infraestrutura<br />\
    <img src="styles/legend/APALagoadeIriry_5_6.png" /> ZUM - Zona de Uso Moderado<br />\
    <img src="styles/legend/APALagoadeIriry_5_7.png" /> <br />' });
var format_ZEIMA1_6 = new ol.format.GeoJSON();
var features_ZEIMA1_6 = format_ZEIMA1_6.readFeatures(json_ZEIMA1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZEIMA1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEIMA1_6.addFeatures(features_ZEIMA1_6);
var lyr_ZEIMA1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEIMA1_6, 
                style: style_ZEIMA1_6,
                popuplayertitle: 'ZEIMA1',
                interactive: true,
    title: 'ZEIMA1<br />\
    <img src="styles/legend/ZEIMA1_6_0.png" /> SZA1<br />\
    <img src="styles/legend/ZEIMA1_6_1.png" /> SZA2<br />\
    <img src="styles/legend/ZEIMA1_6_2.png" /> SZA3<br />\
    <img src="styles/legend/ZEIMA1_6_3.png" /> SZA4<br />\
    <img src="styles/legend/ZEIMA1_6_4.png" /> SZA5<br />' });
var format_Parque_dos_Passaros_7 = new ol.format.GeoJSON();
var features_Parque_dos_Passaros_7 = format_Parque_dos_Passaros_7.readFeatures(json_Parque_dos_Passaros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Parque_dos_Passaros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parque_dos_Passaros_7.addFeatures(features_Parque_dos_Passaros_7);
var lyr_Parque_dos_Passaros_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parque_dos_Passaros_7, 
                style: style_Parque_dos_Passaros_7,
                popuplayertitle: 'Parque_dos_Passaros',
                interactive: false,
                title: '<img src="styles/legend/Parque_dos_Passaros_7.png" /> Parque_dos_Passaros'
            });
var format_ZoneamentoLC902023_8 = new ol.format.GeoJSON();
var features_ZoneamentoLC902023_8 = format_ZoneamentoLC902023_8.readFeatures(json_ZoneamentoLC902023_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoLC902023_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLC902023_8.addFeatures(features_ZoneamentoLC902023_8);
var lyr_ZoneamentoLC902023_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLC902023_8, 
                style: style_ZoneamentoLC902023_8,
                popuplayertitle: 'Zoneamento (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_0.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_1.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_2.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_3.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_4.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_5.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_6.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_7.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_8.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_9.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_10.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_11.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_12.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_13.png" /> Zona Industrial 1<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_14.png" /> Zona Industrial 2<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_15.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_16.png" /> ZEU - Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoLC902023_8_17.png" /> Rio das Ostras<br />' });
var format_reasdeEstudodeSombreamentoObrigatrio_9 = new ol.format.GeoJSON();
var features_reasdeEstudodeSombreamentoObrigatrio_9 = format_reasdeEstudodeSombreamentoObrigatrio_9.readFeatures(json_reasdeEstudodeSombreamentoObrigatrio_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasdeEstudodeSombreamentoObrigatrio_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeEstudodeSombreamentoObrigatrio_9.addFeatures(features_reasdeEstudodeSombreamentoObrigatrio_9);
var lyr_reasdeEstudodeSombreamentoObrigatrio_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdeEstudodeSombreamentoObrigatrio_9, 
                style: style_reasdeEstudodeSombreamentoObrigatrio_9,
                popuplayertitle: 'Áreas de Estudo de Sombreamento Obrigatório',
                interactive: false,
    title: 'Áreas de Estudo de Sombreamento Obrigatório<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_0.png" /> Até 9m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_1.png" /> 9m < h <= 18m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_2.png" /> 18m < h <= 27m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_3.png" /> 27m < h <= 36m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_4.png" /> 36m < h <= 45m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_9_5.png" /> Acim de 45m<br />' });
var format_LEG_ZoneamentoRevisao_10 = new ol.format.GeoJSON();
var features_LEG_ZoneamentoRevisao_10 = format_LEG_ZoneamentoRevisao_10.readFeatures(json_LEG_ZoneamentoRevisao_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LEG_ZoneamentoRevisao_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEG_ZoneamentoRevisao_10.addFeatures(features_LEG_ZoneamentoRevisao_10);
var lyr_LEG_ZoneamentoRevisao_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEG_ZoneamentoRevisao_10, 
                style: style_LEG_ZoneamentoRevisao_10,
                popuplayertitle: 'LEG_ZoneamentoRevisao',
                interactive: true,
    title: 'LEG_ZoneamentoRevisao<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_0.png" /> Sem Definição<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_1.png" /> Zona Residencial 1<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_2.png" /> Zona Residencial 2<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_3.png" /> Zona Residencial 3<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_4.png" /> Zona Residencial 4<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_5.png" /> Zona Residencial 5<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_6.png" /> Zona Residencial 6<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_7.png" /> Zona Residencial 7<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_8.png" /> Zona Residencial 8<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_9.png" /> Zona Residencial 9<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_10.png" /> Zona Residencial 10<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_11.png" /> Zona Residencial 11<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_12.png" /> Zona Residencial 12<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_13.png" /> Zona Residencial 13<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_14.png" /> Zona Residencial 14<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_15.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_16.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_17.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_18.png" /> Zona Central<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_19.png" /> Zona Turística 1<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_20.png" /> Zona Turística 2<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_21.png" /> Zona Turística 3<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_22.png" /> Zona Turística 4<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_23.png" /> Zona Turística 5<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_24.png" /> Zona Turística 6<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_25.png" /> Zona Industrial<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_26.png" /> Zona Industrial Comercial<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_27.png" /> Zona Comercial e Serviço 1<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_28.png" /> Zona Comercial e Serviço 2<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_29.png" /> Zona de Exoansão Urbana Controlada 1<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_30.png" /> Zona de Exoansão Urbana Controlada 2<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_31.png" /> Zona de Expansão Urbana Prioritária<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_32.png" /> Zona de Expansão Urbanan Restrita<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_33.png" /> Zona de Expansão Urbanan Rural<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_34.png" /> Zona de Amortecimento da ZEU<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_35.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_36.png" /> <br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_37.png" /> <br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_38.png" /> <br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_39.png" /> <br />\
    <img src="styles/legend/LEG_ZoneamentoRevisao_10_40.png" /> <br />' });
var format_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11 = new ol.format.GeoJSON();
var features_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11 = format_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.readFeatures(json_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.addFeatures(features_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11);
var lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11, 
                style: style_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11,
                popuplayertitle: 'LEG_ZoneamentoRevisao_EixosExistentes — Eixos das Zonas Axiais',
                interactive: true,
                title: '<img src="styles/legend/LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.png" /> LEG_ZoneamentoRevisao_EixosExistentes — Eixos das Zonas Axiais'
            });
var group_ZonoamentoNovo = new ol.layer.Group({
                                layers: [lyr_LEG_ZoneamentoRevisao_10,lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11,],
                                fold: 'close',
                                title: 'Zonoamento Novo'});
var group_Legislaes = new ol.layer.Group({
                                layers: [lyr_ReBio_1,lyr_ReBioZonadeAmortecimento_2,lyr_ARIE_Itapebussus_3,lyr_PMMNCostesRochosos_4,lyr_APALagoadeIriry_5,lyr_ZEIMA1_6,lyr_Parque_dos_Passaros_7,lyr_ZoneamentoLC902023_8,lyr_reasdeEstudodeSombreamentoObrigatrio_9,],
                                fold: 'open',
                                title: 'Legislações'});
var group_Ambiental = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ambiental'});

lyr_Satlite_0.setVisible(true);lyr_ReBio_1.setVisible(false);lyr_ReBioZonadeAmortecimento_2.setVisible(false);lyr_ARIE_Itapebussus_3.setVisible(false);lyr_PMMNCostesRochosos_4.setVisible(false);lyr_APALagoadeIriry_5.setVisible(true);lyr_ZEIMA1_6.setVisible(false);lyr_Parque_dos_Passaros_7.setVisible(false);lyr_ZoneamentoLC902023_8.setVisible(false);lyr_reasdeEstudodeSombreamentoObrigatrio_9.setVisible(false);lyr_LEG_ZoneamentoRevisao_10.setVisible(true);lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.setVisible(true);
var layersList = [lyr_Satlite_0,group_Legislaes,group_ZonoamentoNovo];
lyr_ReBio_1.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'AREA': 'AREA', });
lyr_ReBioZonadeAmortecimento_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ARIE_Itapebussus_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Zona': 'Zona', 'Parametros': 'Parâmetros', 'Link': 'Documentação', 'Descricao': 'Descrição', 'NormasGerais': 'Normas Gerais', });
lyr_PMMNCostesRochosos_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'HTML_Pag_Desc': 'HTML_Pag_Desc', });
lyr_APALagoadeIriry_5.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Zona': 'Zona', 'Parametros': 'Parametros', 'Usos': 'Usos', 'Normas Gerais': 'Normas Gerais', 'Notas': 'Notas', 'PaginaHTML': 'PaginaHTML', });
lyr_ZEIMA1_6.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Name': 'Name', 'Usos e Atividades': 'Usos e Atividades', 'Estacionamento': 'Estacionamento', 'Parametros': 'Parametros', 'PaginaHTML': 'PaginaHTML', 'HTML_Formatacao': 'HTML_Formatacao', 'ParametrosHTML': 'ParametrosHTML', 'DescricaoHTML': 'DescricaoHTML', });
lyr_Parque_dos_Passaros_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZoneamentoLC902023_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'Parâmetros': 'parametros', 'ParametrosHTML': 'ParametrosHTML', });
lyr_reasdeEstudodeSombreamentoObrigatrio_9.set('fieldAliases', {'fid': 'fid', 'Faixa': 'Faixa', 'LimAlt': 'Limite de Altura', 'Setor': 'Setor', 'Cod_Faixa': 'Cod_Faixa', });
lyr_LEG_ZoneamentoRevisao_10.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Nome': 'Nome', 'HTML': 'HTML', 'OBS': 'OBS', 'Status': 'Status', 'Status_Data': 'Data da alteração', 'Status_Resp': 'Respons. alteração', 'Revisao': 'Revisão', 'parametros': 'Parâmetros', });
lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'OBS': 'OBS', 'TITULO': 'TITULO', 'Revisao': 'Revisão', 'Revisao_Data': 'Data da Revisão', 'Revisao_Resp': 'Responsável Revisão', 'Verificar': 'Verificar', 'T_Eixo': 'Tipo Eixo', });
lyr_ReBio_1.set('fieldImages', {'fid': 'TextEdit', 'Zona': '', 'AREA': '', });
lyr_ReBioZonadeAmortecimento_2.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_ARIE_Itapebussus_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'Zona': '', 'Parametros': '', 'Link': '', 'Descricao': '', 'NormasGerais': '', });
lyr_PMMNCostesRochosos_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'HTML_Pag_Desc': 'TextEdit', });
lyr_APALagoadeIriry_5.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Zona': 'TextEdit', 'Parametros': 'TextEdit', 'Usos': 'TextEdit', 'Normas Gerais': 'TextEdit', 'Notas': 'TextEdit', 'PaginaHTML': 'TextEdit', });
lyr_ZEIMA1_6.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Name': 'TextEdit', 'Usos e Atividades': 'TextEdit', 'Estacionamento': 'TextEdit', 'Parametros': 'TextEdit', 'PaginaHTML': 'TextEdit', 'HTML_Formatacao': 'TextEdit', 'ParametrosHTML': 'TextEdit', 'DescricaoHTML': 'TextEdit', });
lyr_Parque_dos_Passaros_7.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ZoneamentoLC902023_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': '', });
lyr_reasdeEstudodeSombreamentoObrigatrio_9.set('fieldImages', {'fid': 'TextEdit', 'Faixa': 'TextEdit', 'LimAlt': 'TextEdit', 'Setor': 'TextEdit', 'Cod_Faixa': 'Range', });
lyr_LEG_ZoneamentoRevisao_10.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Nome': 'TextEdit', 'HTML': 'TextEdit', 'OBS': 'TextEdit', 'Status': 'Range', 'Status_Data': 'DateTime', 'Status_Resp': 'TextEdit', 'Revisao': '', 'parametros': 'TextEdit', });
lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'OBS': 'TextEdit', 'TITULO': 'TextEdit', 'Revisao': 'CheckBox', 'Revisao_Data': 'DateTime', 'Revisao_Resp': 'TextEdit', 'Verificar': 'CheckBox', 'T_Eixo': 'TextEdit', });
lyr_ReBio_1.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'no label', 'AREA': 'no label', });
lyr_ReBioZonadeAmortecimento_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ARIE_Itapebussus_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'Zona': 'hidden field', 'Parametros': 'header label - visible with data', 'Link': 'header label - visible with data', 'Descricao': 'header label - visible with data', 'NormasGerais': 'header label - visible with data', });
lyr_PMMNCostesRochosos_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'HTML_Pag_Desc': 'no label', });
lyr_APALagoadeIriry_5.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'no label', 'Zona': 'hidden field', 'Parametros': 'hidden field', 'Usos': 'hidden field', 'Normas Gerais': 'hidden field', 'Notas': 'hidden field', 'PaginaHTML': 'no label', });
lyr_ZEIMA1_6.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Name': 'no label', 'Usos e Atividades': 'hidden field', 'Estacionamento': 'hidden field', 'Parametros': 'hidden field', 'PaginaHTML': 'hidden field', 'HTML_Formatacao': 'hidden field', 'ParametrosHTML': 'no label', 'DescricaoHTML': 'no label', });
lyr_Parque_dos_Passaros_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ZoneamentoLC902023_8.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'no label', });
lyr_reasdeEstudodeSombreamentoObrigatrio_9.set('fieldLabels', {'fid': 'hidden field', 'Faixa': 'no label', 'LimAlt': 'hidden field', 'Setor': 'hidden field', 'Cod_Faixa': 'hidden field', });
lyr_LEG_ZoneamentoRevisao_10.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'no label', 'Nome': 'no label', 'HTML': 'hidden field', 'OBS': 'hidden field', 'Status': 'hidden field', 'Status_Data': 'hidden field', 'Status_Resp': 'hidden field', 'Revisao': 'hidden field', 'parametros': 'no label', });
lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'OBS': 'hidden field', 'TITULO': 'hidden field', 'Revisao': 'hidden field', 'Revisao_Data': 'hidden field', 'Revisao_Resp': 'hidden field', 'Verificar': 'hidden field', 'T_Eixo': 'hidden field', });
lyr_LEG_ZoneamentoRevisao_EixosExistentesEixosdasZonasAxiais_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
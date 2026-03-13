ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([195102.562326, 7503667.732447, 199661.623221, 7506925.952175]);
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
var format_AntenasdeTelefonia_3 = new ol.format.GeoJSON();
var features_AntenasdeTelefonia_3 = format_AntenasdeTelefonia_3.readFeatures(json_AntenasdeTelefonia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AntenasdeTelefonia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntenasdeTelefonia_3.addFeatures(features_AntenasdeTelefonia_3);
var lyr_AntenasdeTelefonia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntenasdeTelefonia_3, 
                style: style_AntenasdeTelefonia_3,
                popuplayertitle: 'Antenas de Telefonia',
                interactive: true,
    title: 'Antenas de Telefonia<br />\
    <img src="styles/legend/AntenasdeTelefonia_3_0.png" /> Claro<br />\
    <img src="styles/legend/AntenasdeTelefonia_3_1.png" /> TIM<br />\
    <img src="styles/legend/AntenasdeTelefonia_3_2.png" /> VIVO<br />\
    <img src="styles/legend/AntenasdeTelefonia_3_3.png" /> <br />' });
var format_Sade_4 = new ol.format.GeoJSON();
var features_Sade_4 = format_Sade_4.readFeatures(json_Sade_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Sade_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sade_4.addFeatures(features_Sade_4);
var lyr_Sade_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sade_4, 
                style: style_Sade_4,
                popuplayertitle: 'Saúde',
                interactive: true,
                title: '<img src="styles/legend/Sade_4.png" /> Saúde'
            });
var format_Educao_5 = new ol.format.GeoJSON();
var features_Educao_5 = format_Educao_5.readFeatures(json_Educao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Educao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educao_5.addFeatures(features_Educao_5);
var lyr_Educao_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Educao_5, 
                style: style_Educao_5,
                popuplayertitle: 'Educação',
                interactive: true,
    title: 'Educação<br />\
    <img src="styles/legend/Educao_5_0.png" /> Federal - Superior<br />\
    <img src="styles/legend/Educao_5_1.png" /> Estadual - Médio<br />\
    <img src="styles/legend/Educao_5_2.png" /> Municipal - Básico<br />' });
var format_RedeColetoraRioMais2025_6 = new ol.format.GeoJSON();
var features_RedeColetoraRioMais2025_6 = format_RedeColetoraRioMais2025_6.readFeatures(json_RedeColetoraRioMais2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RedeColetoraRioMais2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeColetoraRioMais2025_6.addFeatures(features_RedeColetoraRioMais2025_6);
var lyr_RedeColetoraRioMais2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeColetoraRioMais2025_6, 
                style: style_RedeColetoraRioMais2025_6,
                popuplayertitle: 'Rede Coletora (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/RedeColetoraRioMais2025_6.png" /> Rede Coletora (RioMais - 2025)'
            });
var format_LinhasdeRecalqueRioMais2025_7 = new ol.format.GeoJSON();
var features_LinhasdeRecalqueRioMais2025_7 = format_LinhasdeRecalqueRioMais2025_7.readFeatures(json_LinhasdeRecalqueRioMais2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LinhasdeRecalqueRioMais2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhasdeRecalqueRioMais2025_7.addFeatures(features_LinhasdeRecalqueRioMais2025_7);
var lyr_LinhasdeRecalqueRioMais2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhasdeRecalqueRioMais2025_7, 
                style: style_LinhasdeRecalqueRioMais2025_7,
                popuplayertitle: 'Linhas de Recalque (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/LinhasdeRecalqueRioMais2025_7.png" /> Linhas de Recalque (RioMais - 2025)'
            });
var format_PoosdeVisitaRioMais2025_8 = new ol.format.GeoJSON();
var features_PoosdeVisitaRioMais2025_8 = format_PoosdeVisitaRioMais2025_8.readFeatures(json_PoosdeVisitaRioMais2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PoosdeVisitaRioMais2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoosdeVisitaRioMais2025_8.addFeatures(features_PoosdeVisitaRioMais2025_8);
var lyr_PoosdeVisitaRioMais2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoosdeVisitaRioMais2025_8, 
                style: style_PoosdeVisitaRioMais2025_8,
                popuplayertitle: 'Poços de Visita (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/PoosdeVisitaRioMais2025_8.png" /> Poços de Visita (RioMais - 2025)'
            });
var format_AdutorasRioMais2024_9 = new ol.format.GeoJSON();
var features_AdutorasRioMais2024_9 = format_AdutorasRioMais2024_9.readFeatures(json_AdutorasRioMais2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AdutorasRioMais2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdutorasRioMais2024_9.addFeatures(features_AdutorasRioMais2024_9);
var lyr_AdutorasRioMais2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdutorasRioMais2024_9, 
                style: style_AdutorasRioMais2024_9,
                popuplayertitle: 'Adutoras (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/AdutorasRioMais2024_9.png" /> Adutoras (RioMais - 2024)'
            });
var format_ReservatriosRioMais2024_10 = new ol.format.GeoJSON();
var features_ReservatriosRioMais2024_10 = format_ReservatriosRioMais2024_10.readFeatures(json_ReservatriosRioMais2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReservatriosRioMais2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosRioMais2024_10.addFeatures(features_ReservatriosRioMais2024_10);
var lyr_ReservatriosRioMais2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosRioMais2024_10, 
                style: style_ReservatriosRioMais2024_10,
                popuplayertitle: 'Reservatórios (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosRioMais2024_10.png" /> Reservatórios (RioMais - 2024)'
            });
var format_Lotes_11 = new ol.format.GeoJSON();
var features_Lotes_11 = format_Lotes_11.readFeatures(json_Lotes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Lotes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_11.addFeatures(features_Lotes_11);
var lyr_Lotes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_11, 
                style: style_Lotes_11,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_11.png" /> Lotes'
            });
var format_Quadras_12 = new ol.format.GeoJSON();
var features_Quadras_12 = format_Quadras_12.readFeatures(json_Quadras_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Quadras_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadras_12.addFeatures(features_Quadras_12);
var lyr_Quadras_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadras_12, 
                style: style_Quadras_12,
                popuplayertitle: 'Quadras',
                interactive: false,
                title: '<img src="styles/legend/Quadras_12.png" /> Quadras'
            });
var format_Loteamentos_13 = new ol.format.GeoJSON();
var features_Loteamentos_13 = format_Loteamentos_13.readFeatures(json_Loteamentos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Loteamentos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentos_13.addFeatures(features_Loteamentos_13);
var lyr_Loteamentos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentos_13, 
                style: style_Loteamentos_13,
                popuplayertitle: 'Loteamentos',
                interactive: true,
                title: '<img src="styles/legend/Loteamentos_13.png" /> Loteamentos'
            });
var format_reasdaUnio_14 = new ol.format.GeoJSON();
var features_reasdaUnio_14 = format_reasdaUnio_14.readFeatures(json_reasdaUnio_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasdaUnio_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdaUnio_14.addFeatures(features_reasdaUnio_14);
var lyr_reasdaUnio_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdaUnio_14, 
                style: style_reasdaUnio_14,
                popuplayertitle: 'Áreas da União',
                interactive: false,
                title: '<img src="styles/legend/reasdaUnio_14.png" /> Áreas da União'
            });
var format_reasPblicas_15 = new ol.format.GeoJSON();
var features_reasPblicas_15 = format_reasPblicas_15.readFeatures(json_reasPblicas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasPblicas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPblicas_15.addFeatures(features_reasPblicas_15);
var lyr_reasPblicas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPblicas_15, 
                style: style_reasPblicas_15,
                popuplayertitle: 'Áreas Públicas',
                interactive: true,
    title: 'Áreas Públicas<br />\
    <img src="styles/legend/reasPblicas_15_0.png" /> Terrenos Próprios - Doação<br />\
    <img src="styles/legend/reasPblicas_15_1.png" /> Áreas de Praças<br />\
    <img src="styles/legend/reasPblicas_15_2.png" /> Terrenos Próprios - Desapropriação<br />\
    <img src="styles/legend/reasPblicas_15_3.png" /> Área de Preservação Permanente<br />\
    <img src="styles/legend/reasPblicas_15_4.png" /> Áreas Verdes<br />\
    <img src="styles/legend/reasPblicas_15_5.png" /> Desapropriação - MNCR<br />\
    <img src="styles/legend/reasPblicas_15_6.png" /> Terrenos Institucionais<br />\
    <img src="styles/legend/reasPblicas_15_7.png" /> Próprios Invadidos<br />' });
var format_RiscoDeslizamento_16 = new ol.format.GeoJSON();
var features_RiscoDeslizamento_16 = format_RiscoDeslizamento_16.readFeatures(json_RiscoDeslizamento_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RiscoDeslizamento_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiscoDeslizamento_16.addFeatures(features_RiscoDeslizamento_16);
var lyr_RiscoDeslizamento_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiscoDeslizamento_16, 
                style: style_RiscoDeslizamento_16,
                popuplayertitle: 'Risco Deslizamento',
                interactive: false,
                title: '<img src="styles/legend/RiscoDeslizamento_16.png" /> Risco Deslizamento'
            });
var format_reasAlagveis_17 = new ol.format.GeoJSON();
var features_reasAlagveis_17 = format_reasAlagveis_17.readFeatures(json_reasAlagveis_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAlagveis_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAlagveis_17.addFeatures(features_reasAlagveis_17);
var lyr_reasAlagveis_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAlagveis_17, 
                style: style_reasAlagveis_17,
                popuplayertitle: 'Áreas Alagáveis',
                interactive: false,
                title: '<img src="styles/legend/reasAlagveis_17.png" /> Áreas Alagáveis'
            });
var format_UnidadesdeConservaoFederais_18 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoFederais_18 = format_UnidadesdeConservaoFederais_18.readFeatures(json_UnidadesdeConservaoFederais_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_UnidadesdeConservaoFederais_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoFederais_18.addFeatures(features_UnidadesdeConservaoFederais_18);
var lyr_UnidadesdeConservaoFederais_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoFederais_18, 
                style: style_UnidadesdeConservaoFederais_18,
                popuplayertitle: 'Unidades de Conservação Federais',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservaoFederais_18.png" /> Unidades de Conservação Federais'
            });
var format_ReBio_19 = new ol.format.GeoJSON();
var features_ReBio_19 = format_ReBio_19.readFeatures(json_ReBio_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBio_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBio_19.addFeatures(features_ReBio_19);
var lyr_ReBio_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBio_19, 
                style: style_ReBio_19,
                popuplayertitle: 'ReBio',
                interactive: true,
    title: 'ReBio<br />\
    <img src="styles/legend/ReBio_19_0.png" /> Adequação<br />\
    <img src="styles/legend/ReBio_19_1.png" /> Uso Moderado<br />\
    <img src="styles/legend/ReBio_19_2.png" /> Amortecimento<br />\
    <img src="styles/legend/ReBio_19_3.png" /> Conservação<br />\
    <img src="styles/legend/ReBio_19_4.png" /> Infraestrutura<br />\
    <img src="styles/legend/ReBio_19_5.png" /> Uso Divergente<br />\
    <img src="styles/legend/ReBio_19_6.png" /> Difer Interess Públ<br />\
    <img src="styles/legend/ReBio_19_7.png" /> Amortecimento<br />' });
var format_ARIEItapebussus_20 = new ol.format.GeoJSON();
var features_ARIEItapebussus_20 = format_ARIEItapebussus_20.readFeatures(json_ARIEItapebussus_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ARIEItapebussus_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARIEItapebussus_20.addFeatures(features_ARIEItapebussus_20);
var lyr_ARIEItapebussus_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARIEItapebussus_20, 
                style: style_ARIEItapebussus_20,
                popuplayertitle: 'ARIE Itapebussus',
                interactive: true,
    title: 'ARIE Itapebussus<br />\
    <img src="styles/legend/ARIEItapebussus_20_0.png" /> Zona de Adequação Ambiental<br />\
    <img src="styles/legend/ARIEItapebussus_20_1.png" /> Zona de Conservação<br />\
    <img src="styles/legend/ARIEItapebussus_20_2.png" /> Zona de Diferentes Interesses Públicos<br />\
    <img src="styles/legend/ARIEItapebussus_20_3.png" /> Zona de Infraestrutura<br />\
    <img src="styles/legend/ARIEItapebussus_20_4.png" /> Zona Populacional<br />\
    <img src="styles/legend/ARIEItapebussus_20_5.png" /> Zona Produtiva<br />\
    <img src="styles/legend/ARIEItapebussus_20_6.png" /> Zona de Sobreposição Territorial<br />\
    <img src="styles/legend/ARIEItapebussus_20_7.png" /> Zona de Uso Moderado<br />\
    <img src="styles/legend/ARIEItapebussus_20_8.png" /> Zona de Uso Restrito<br />\
    <img src="styles/legend/ARIEItapebussus_20_9.png" /> Zona de Amortecimento<br />' });
var format_MNCostesRochososcopiar_21 = new ol.format.GeoJSON();
var features_MNCostesRochososcopiar_21 = format_MNCostesRochososcopiar_21.readFeatures(json_MNCostesRochososcopiar_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_MNCostesRochososcopiar_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNCostesRochososcopiar_21.addFeatures(features_MNCostesRochososcopiar_21);
var lyr_MNCostesRochososcopiar_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNCostesRochososcopiar_21, 
                style: style_MNCostesRochososcopiar_21,
                popuplayertitle: 'MN Costões Rochosos  copiar',
                interactive: true,
    title: 'MN Costões Rochosos  copiar<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_0.png" /> ZA<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_1.png" /> ZP<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_2.png" /> ZR<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_3.png" /> ZOC<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_4.png" /> ZUE<br />\
    <img src="styles/legend/MNCostesRochososcopiar_21_5.png" /> ZUI<br />' });
var format_MNCostesRochosos_22 = new ol.format.GeoJSON();
var features_MNCostesRochosos_22 = format_MNCostesRochosos_22.readFeatures(json_MNCostesRochosos_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_MNCostesRochosos_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNCostesRochosos_22.addFeatures(features_MNCostesRochosos_22);
var lyr_MNCostesRochosos_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNCostesRochosos_22, 
                style: style_MNCostesRochosos_22,
                popuplayertitle: 'MN Costões Rochosos',
                interactive: true,
    title: 'MN Costões Rochosos<br />\
    <img src="styles/legend/MNCostesRochosos_22_0.png" /> ZA<br />\
    <img src="styles/legend/MNCostesRochosos_22_1.png" /> ZP<br />\
    <img src="styles/legend/MNCostesRochosos_22_2.png" /> ZR<br />\
    <img src="styles/legend/MNCostesRochosos_22_3.png" /> ZOC<br />\
    <img src="styles/legend/MNCostesRochosos_22_4.png" /> ZUE<br />\
    <img src="styles/legend/MNCostesRochosos_22_5.png" /> ZUI<br />' });
var format_APALagoadeIriry_23 = new ol.format.GeoJSON();
var features_APALagoadeIriry_23 = format_APALagoadeIriry_23.readFeatures(json_APALagoadeIriry_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_APALagoadeIriry_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APALagoadeIriry_23.addFeatures(features_APALagoadeIriry_23);
var lyr_APALagoadeIriry_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APALagoadeIriry_23, 
                style: style_APALagoadeIriry_23,
                popuplayertitle: 'APA Lagoa de Iriry',
                interactive: true,
    title: 'APA Lagoa de Iriry<br />\
    <img src="styles/legend/APALagoadeIriry_23_0.png" /> ZP1 - Zona Populacional 1<br />\
    <img src="styles/legend/APALagoadeIriry_23_1.png" /> ZP2 - Zona Populacional 2<br />\
    <img src="styles/legend/APALagoadeIriry_23_2.png" /> ZP3 - Zona Populacional 3<br />\
    <img src="styles/legend/APALagoadeIriry_23_3.png" /> ZAA - Zona de Adequação Ambiental<br />\
    <img src="styles/legend/APALagoadeIriry_23_4.png" /> ZC - Zona de Conservação<br />\
    <img src="styles/legend/APALagoadeIriry_23_5.png" /> ZI - Zona de Infraestrutura<br />\
    <img src="styles/legend/APALagoadeIriry_23_6.png" /> ZUM - Zona de Uso Moderado<br />\
    <img src="styles/legend/APALagoadeIriry_23_7.png" /> <br />' });
var format_ZEIMA1_24 = new ol.format.GeoJSON();
var features_ZEIMA1_24 = format_ZEIMA1_24.readFeatures(json_ZEIMA1_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZEIMA1_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEIMA1_24.addFeatures(features_ZEIMA1_24);
var lyr_ZEIMA1_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEIMA1_24, 
                style: style_ZEIMA1_24,
                popuplayertitle: 'ZEIMA1',
                interactive: true,
    title: 'ZEIMA1<br />\
    <img src="styles/legend/ZEIMA1_24_0.png" /> SZA1<br />\
    <img src="styles/legend/ZEIMA1_24_1.png" /> SZA2<br />\
    <img src="styles/legend/ZEIMA1_24_2.png" /> SZA3<br />\
    <img src="styles/legend/ZEIMA1_24_3.png" /> SZA4<br />\
    <img src="styles/legend/ZEIMA1_24_4.png" /> SZA5<br />' });
var format_ZoneamentoLC902023_25 = new ol.format.GeoJSON();
var features_ZoneamentoLC902023_25 = format_ZoneamentoLC902023_25.readFeatures(json_ZoneamentoLC902023_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoLC902023_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLC902023_25.addFeatures(features_ZoneamentoLC902023_25);
var lyr_ZoneamentoLC902023_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLC902023_25, 
                style: style_ZoneamentoLC902023_25,
                popuplayertitle: 'Zoneamento (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_0.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_1.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_2.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_3.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_4.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_5.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_6.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_7.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_8.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_9.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_10.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_11.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_12.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_13.png" /> Zona Industrial 1<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_14.png" /> Zona Industrial 2<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_15.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_16.png" /> ZEU - Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoLC902023_25_17.png" /> Rio das Ostras<br />' });
var group_Topografia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Topografia'});
var group_OSM = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OSM'});
var group_IBGE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'IBGE'});
var group_ZonoamentoNovo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Zonoamento Novo'});
var group_Fontes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Fontes'});
var group_AntenasTelefonia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Antenas Telefonia'});
var group_ICMBIO = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ICMBIO'});
var group_Legislaes = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservaoFederais_18,lyr_ReBio_19,lyr_ARIEItapebussus_20,lyr_MNCostesRochososcopiar_21,lyr_MNCostesRochosos_22,lyr_APALagoadeIriry_23,lyr_ZEIMA1_24,lyr_ZoneamentoLC902023_25,],
                                fold: 'close',
                                title: 'Legislações'});
var group_Auxiliares = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Auxiliares'});
var group_Ambiental = new ol.layer.Group({
                                layers: [lyr_RiscoDeslizamento_16,lyr_reasAlagveis_17,],
                                fold: 'close',
                                title: 'Ambiental'});
var group_Fundirio = new ol.layer.Group({
                                layers: [lyr_Lotes_11,lyr_Quadras_12,lyr_Loteamentos_13,lyr_reasdaUnio_14,lyr_reasPblicas_15,],
                                fold: 'close',
                                title: 'Fundiário'});
var group_Saneamento = new ol.layer.Group({
                                layers: [lyr_RedeColetoraRioMais2025_6,lyr_LinhasdeRecalqueRioMais2025_7,lyr_PoosdeVisitaRioMais2025_8,lyr_AdutorasRioMais2024_9,lyr_ReservatriosRioMais2024_10,],
                                fold: 'close',
                                title: 'Saneamento'});
var group_EquipamentosUrbanos = new ol.layer.Group({
                                layers: [lyr_Sade_4,lyr_Educao_5,],
                                fold: 'close',
                                title: 'Equipamentos Urbanos'});
var group_Infraestrutura = new ol.layer.Group({
                                layers: [lyr_AntenasdeTelefonia_3,],
                                fold: 'close',
                                title: 'Infraestrutura'});

lyr_Mapa_0.setVisible(true);lyr_Satlite_1.setVisible(true);lyr_LimiteMunicipal_2.setVisible(false);lyr_AntenasdeTelefonia_3.setVisible(false);lyr_Sade_4.setVisible(false);lyr_Educao_5.setVisible(false);lyr_RedeColetoraRioMais2025_6.setVisible(false);lyr_LinhasdeRecalqueRioMais2025_7.setVisible(false);lyr_PoosdeVisitaRioMais2025_8.setVisible(false);lyr_AdutorasRioMais2024_9.setVisible(false);lyr_ReservatriosRioMais2024_10.setVisible(false);lyr_Lotes_11.setVisible(false);lyr_Quadras_12.setVisible(false);lyr_Loteamentos_13.setVisible(false);lyr_reasdaUnio_14.setVisible(false);lyr_reasPblicas_15.setVisible(false);lyr_RiscoDeslizamento_16.setVisible(false);lyr_reasAlagveis_17.setVisible(false);lyr_UnidadesdeConservaoFederais_18.setVisible(false);lyr_ReBio_19.setVisible(false);lyr_ARIEItapebussus_20.setVisible(false);lyr_MNCostesRochososcopiar_21.setVisible(false);lyr_MNCostesRochosos_22.setVisible(false);lyr_APALagoadeIriry_23.setVisible(false);lyr_ZEIMA1_24.setVisible(false);lyr_ZoneamentoLC902023_25.setVisible(false);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,lyr_LimiteMunicipal_2,group_Infraestrutura,group_EquipamentosUrbanos,group_Saneamento,group_Fundirio,group_Ambiental,group_Legislaes];
lyr_LimiteMunicipal_2.set('fieldAliases', {'fid': 'fid', });
lyr_AntenasdeTelefonia_3.set('fieldAliases', {'fid': 'fid', 'Número Estação': 'Número Estação', 'Operadora': 'Operadora', 'SiglaUf': 'SiglaUf', 'MUN': 'MUN', 'Bairro': 'Bairro', 'Logradouro': 'Logradouro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'IBGE': 'IBGE', 'ClassInfraFisica': 'ClassInfraFisica', 'Tecs': 'Tecs', 'Faixa': 'Faixa', });
lyr_Sade_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tipo': 'Tipo', 'Modalidade': 'Modalidade', 'Administração': 'Administração', 'Descrição': 'Descrição', });
lyr_Educao_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tipo': 'Tipo', 'Modalidade': 'Modalidade', 'Administração': 'Administração', 'Descrição': 'Descrição', });
lyr_RedeColetoraRioMais2025_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'comp': 'comp', 'TT_DIAM': 'TT_DIAM', 'TT_TIPO_RE': 'TT_TIPO_RE', 'TT_MATERIA': 'TT_MATERIA', 'TT_CU_ID': 'TT_CU_ID', 'TT_CU_OID': 'TT_CU_OID', 'TT_ZEL_ID': 'TT_ZEL_ID', 'Diâmetro': 'diametro', });
lyr_LinhasdeRecalqueRioMais2025_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Comprimento': 'Comprimento', });
lyr_PoosdeVisitaRioMais2025_8.set('fieldAliases', {'fid': 'fid', 'PR_TIPO_RE': 'PR_TIPO_RE', 'PR_ZET_ID': 'PR_ZET_ID', 'PR_BA_ID': 'PR_BA_ID', 'DIR': 'DIR', });
lyr_AdutorasRioMais2024_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Diâmetro': 'Diâmetro', 'Notas': 'Notas', });
lyr_ReservatriosRioMais2024_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Lotes_11.set('fieldAliases', {'fid': 'fid', 'Area': 'Área (m²)', 'Lote': 'Lote', 'Loteamento': 'Loteamento', 'Name': 'Nome', 'Quadra': 'Quadra', });
lyr_Quadras_12.set('fieldAliases', {'fid': 'fid', 'Quadra': 'Quadra', 'Loteamento': 'Loteamento', 'Name': 'Nome', 'Atualizador': 'Atualizador', 'Area': 'Área (m²)', 'somadoslotes': 'Área dos lotes', });
lyr_Loteamentos_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_reasdaUnio_14.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_reasPblicas_15.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', 'Indice': 'Indice', 'Especie': 'Espécie', 'Tipo': 'Tipo', });
lyr_RiscoDeslizamento_16.set('fieldAliases', {'fid': 'fid', });
lyr_reasAlagveis_17.set('fieldAliases', {'fid': 'fid', 'Levantamento': 'Levantamento', });
lyr_UnidadesdeConservaoFederais_18.set('fieldAliases', {'fid': 'fid', 'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'abrev': 'abrev', 'EscalaUC': 'EscalaUC', 'Demarcacao': 'Demarcacao', });
lyr_ReBio_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_ARIEItapebussus_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Zona': 'Zona', 'Parametros': 'Parâmetros', 'Link': 'Documentação', 'Descricao': 'Descrição', 'NormasGerais': 'Normas Gerais', });
lyr_MNCostesRochososcopiar_21.set('fieldAliases', {'fid': 'fid', 'Descricao': 'Descricao', 'Name': 'Name', 'Zona': 'Zona', 'DescricaoHTML': 'DescricaoHTML', });
lyr_MNCostesRochosos_22.set('fieldAliases', {'fid': 'fid', 'Descricao': 'Descricao', 'Name': 'Name', 'Zona': 'Zona', 'DescricaoHTML': 'DescricaoHTML', });
lyr_APALagoadeIriry_23.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Zona': 'Zona', 'Parametros': 'Parametros', 'Usos': 'Usos', 'Normas Gerais': 'Normas Gerais', 'Notas': 'Notas', 'PaginaHTML': 'PaginaHTML', });
lyr_ZEIMA1_24.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Name': 'Name', 'Usos e Atividades': 'Usos e Atividades', 'Estacionamento': 'Estacionamento', 'Parametros': 'Parametros', 'PaginaHTML': 'PaginaHTML', 'HTML_Formatacao': 'HTML_Formatacao', 'ParametrosHTML': 'ParametrosHTML', 'DescricaoHTML': 'DescricaoHTML', });
lyr_ZoneamentoLC902023_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'Parâmetros': 'parametros', 'ParametrosHTML': 'ParametrosHTML', });
lyr_LimiteMunicipal_2.set('fieldImages', {'fid': '', });
lyr_AntenasdeTelefonia_3.set('fieldImages', {'fid': 'TextEdit', 'Número Estação': 'Range', 'Operadora': 'TextEdit', 'SiglaUf': 'TextEdit', 'MUN': 'TextEdit', 'Bairro': 'TextEdit', 'Logradouro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'IBGE': 'Range', 'ClassInfraFisica': 'TextEdit', 'Tecs': 'TextEdit', 'Faixa': 'TextEdit', });
lyr_Sade_4.set('fieldImages', {'fid': '', 'Name': '', 'Tipo': '', 'Modalidade': '', 'Administração': '', 'Descrição': '', });
lyr_Educao_5.set('fieldImages', {'fid': '', 'Name': '', 'Tipo': '', 'Modalidade': '', 'Administração': '', 'Descrição': '', });
lyr_RedeColetoraRioMais2025_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'comp': 'TextEdit', 'TT_DIAM': 'TextEdit', 'TT_TIPO_RE': 'TextEdit', 'TT_MATERIA': 'TextEdit', 'TT_CU_ID': 'TextEdit', 'TT_CU_OID': 'TextEdit', 'TT_ZEL_ID': 'TextEdit', 'Diâmetro': 'TextEdit', });
lyr_LinhasdeRecalqueRioMais2025_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Comprimento': 'TextEdit', });
lyr_PoosdeVisitaRioMais2025_8.set('fieldImages', {'fid': 'TextEdit', 'PR_TIPO_RE': 'TextEdit', 'PR_ZET_ID': 'TextEdit', 'PR_BA_ID': 'TextEdit', 'DIR': '', });
lyr_AdutorasRioMais2024_9.set('fieldImages', {'fid': '', 'Name': '', 'Diâmetro': '', 'Notas': '', });
lyr_ReservatriosRioMais2024_10.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Lotes_11.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Lote': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Quadra': 'TextEdit', });
lyr_Quadras_12.set('fieldImages', {'fid': 'TextEdit', 'Quadra': 'TextEdit', 'Loteamento': 'TextEdit', 'Name': 'TextEdit', 'Atualizador': 'Range', 'Area': 'TextEdit', 'somadoslotes': 'TextEdit', });
lyr_Loteamentos_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reasdaUnio_14.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_reasPblicas_15.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', 'Indice': '', 'Especie': '', 'Tipo': '', });
lyr_RiscoDeslizamento_16.set('fieldImages', {'fid': '', });
lyr_reasAlagveis_17.set('fieldImages', {'fid': '', 'Levantamento': '', });
lyr_UnidadesdeConservaoFederais_18.set('fieldImages', {'fid': 'TextEdit', 'NomeUC': 'TextEdit', 'Cnuc': 'TextEdit', 'CriacaoAno': 'TextEdit', 'AreaHaAlb': 'TextEdit', 'PerimM': 'TextEdit', 'CriacaoAto': 'TextEdit', 'EsferaAdm': 'TextEdit', 'SiglaCateg': 'TextEdit', 'GrupoUC': 'TextEdit', 'UFAbrang': 'TextEdit', 'BiomaIBGE': 'TextEdit', 'BiomaCRL': 'TextEdit', 'GRegional': 'TextEdit', 'FusoAbrang': 'TextEdit', 'abrev': 'TextEdit', 'EscalaUC': 'TextEdit', 'Demarcacao': 'TextEdit', });
lyr_ReBio_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ARIEItapebussus_20.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'Zona': '', 'Parametros': '', 'Link': '', 'Descricao': '', 'NormasGerais': '', });
lyr_MNCostesRochososcopiar_21.set('fieldImages', {'fid': 'TextEdit', 'Descricao': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'DescricaoHTML': '', });
lyr_MNCostesRochosos_22.set('fieldImages', {'fid': 'TextEdit', 'Descricao': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'DescricaoHTML': '', });
lyr_APALagoadeIriry_23.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Zona': 'TextEdit', 'Parametros': 'TextEdit', 'Usos': 'TextEdit', 'Normas Gerais': 'TextEdit', 'Notas': 'TextEdit', 'PaginaHTML': 'TextEdit', });
lyr_ZEIMA1_24.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Name': 'TextEdit', 'Usos e Atividades': 'TextEdit', 'Estacionamento': 'TextEdit', 'Parametros': '', 'PaginaHTML': '', 'HTML_Formatacao': '', 'ParametrosHTML': '', 'DescricaoHTML': '', });
lyr_ZoneamentoLC902023_25.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': '', });
lyr_LimiteMunicipal_2.set('fieldLabels', {'fid': 'no label', });
lyr_AntenasdeTelefonia_3.set('fieldLabels', {'fid': 'no label', 'Número Estação': 'no label', 'Operadora': 'no label', 'SiglaUf': 'no label', 'MUN': 'no label', 'Bairro': 'no label', 'Logradouro': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'IBGE': 'no label', 'ClassInfraFisica': 'no label', 'Tecs': 'no label', 'Faixa': 'no label', });
lyr_Sade_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Tipo': 'hidden field', 'Modalidade': 'inline label - visible with data', 'Administração': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_Educao_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Tipo': 'hidden field', 'Modalidade': 'inline label - visible with data', 'Administração': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_RedeColetoraRioMais2025_6.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'comp': 'inline label - visible with data', 'TT_DIAM': 'inline label - visible with data', 'TT_TIPO_RE': 'inline label - visible with data', 'TT_MATERIA': 'inline label - visible with data', 'TT_CU_ID': 'inline label - visible with data', 'TT_CU_OID': 'inline label - visible with data', 'TT_ZEL_ID': 'inline label - visible with data', 'Diâmetro': 'inline label - visible with data', });
lyr_LinhasdeRecalqueRioMais2025_7.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Comprimento': 'inline label - visible with data', });
lyr_PoosdeVisitaRioMais2025_8.set('fieldLabels', {'fid': 'hidden field', 'PR_TIPO_RE': 'inline label - visible with data', 'PR_ZET_ID': 'inline label - visible with data', 'PR_BA_ID': 'inline label - visible with data', 'DIR': 'inline label - visible with data', });
lyr_AdutorasRioMais2024_9.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Diâmetro': 'inline label - visible with data', 'Notas': 'inline label - visible with data', });
lyr_ReservatriosRioMais2024_10.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_Lotes_11.set('fieldLabels', {'fid': 'hidden field', 'Area': 'inline label - visible with data', 'Lote': 'inline label - visible with data', 'Loteamento': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Quadra': 'inline label - visible with data', });
lyr_Quadras_12.set('fieldLabels', {'fid': 'no label', 'Quadra': 'no label', 'Loteamento': 'no label', 'Name': 'no label', 'Atualizador': 'no label', 'Area': 'no label', 'somadoslotes': 'no label', });
lyr_Loteamentos_13.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_reasdaUnio_14.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', });
lyr_reasPblicas_15.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'hidden field', 'Descrição': 'header label - visible with data', 'Indice': 'hidden field', 'Especie': 'header label - visible with data', 'Tipo': 'hidden field', });
lyr_RiscoDeslizamento_16.set('fieldLabels', {'fid': 'hidden field', });
lyr_reasAlagveis_17.set('fieldLabels', {'fid': 'hidden field', 'Levantamento': 'hidden field', });
lyr_UnidadesdeConservaoFederais_18.set('fieldLabels', {'fid': 'hidden field', 'NomeUC': 'no label', 'Cnuc': 'no label', 'CriacaoAno': 'no label', 'AreaHaAlb': 'no label', 'PerimM': 'no label', 'CriacaoAto': 'no label', 'EsferaAdm': 'no label', 'SiglaCateg': 'no label', 'GrupoUC': 'no label', 'UFAbrang': 'no label', 'BiomaIBGE': 'no label', 'BiomaCRL': 'no label', 'GRegional': 'no label', 'FusoAbrang': 'no label', 'abrev': 'no label', 'EscalaUC': 'no label', 'Demarcacao': 'no label', });
lyr_ReBio_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'no label', });
lyr_ARIEItapebussus_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'Zona': 'hidden field', 'Parametros': 'header label - visible with data', 'Link': 'header label - visible with data', 'Descricao': 'header label - visible with data', 'NormasGerais': 'header label - visible with data', });
lyr_MNCostesRochososcopiar_21.set('fieldLabels', {'fid': 'hidden field', 'Descricao': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'DescricaoHTML': 'no label', });
lyr_MNCostesRochosos_22.set('fieldLabels', {'fid': 'hidden field', 'Descricao': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'DescricaoHTML': 'no label', });
lyr_APALagoadeIriry_23.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'no label', 'Zona': 'hidden field', 'Parametros': 'hidden field', 'Usos': 'hidden field', 'Normas Gerais': 'hidden field', 'Notas': 'hidden field', 'PaginaHTML': 'no label', });
lyr_ZEIMA1_24.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Name': 'no label', 'Usos e Atividades': 'hidden field', 'Estacionamento': 'hidden field', 'Parametros': 'hidden field', 'PaginaHTML': 'hidden field', 'HTML_Formatacao': 'hidden field', 'ParametrosHTML': 'no label', 'DescricaoHTML': 'no label', });
lyr_ZoneamentoLC902023_25.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'no label', });
lyr_ZoneamentoLC902023_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
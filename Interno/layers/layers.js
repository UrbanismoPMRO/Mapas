ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([193620.236881, 7503945.952084, 201867.299381, 7510288.014584]);
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
var format_Viriofaces_2 = new ol.format.GeoJSON();
var features_Viriofaces_2 = format_Viriofaces_2.readFeatures(json_Viriofaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Viriofaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viriofaces_2.addFeatures(features_Viriofaces_2);
var lyr_Viriofaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viriofaces_2, 
                style: style_Viriofaces_2,
                popuplayertitle: 'Viário (faces)',
                interactive: false,
                title: '<img src="styles/legend/Viriofaces_2.png" /> Viário (faces)'
            });
var format_Virioeixos_3 = new ol.format.GeoJSON();
var features_Virioeixos_3 = format_Virioeixos_3.readFeatures(json_Virioeixos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Virioeixos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Virioeixos_3.addFeatures(features_Virioeixos_3);
var lyr_Virioeixos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Virioeixos_3, 
                style: style_Virioeixos_3,
                popuplayertitle: 'Viário (eixos)',
                interactive: false,
                title: '<img src="styles/legend/Virioeixos_3.png" /> Viário (eixos)'
            });
var format_Fluvialdrenagem_4 = new ol.format.GeoJSON();
var features_Fluvialdrenagem_4 = format_Fluvialdrenagem_4.readFeatures(json_Fluvialdrenagem_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Fluvialdrenagem_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fluvialdrenagem_4.addFeatures(features_Fluvialdrenagem_4);
var lyr_Fluvialdrenagem_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fluvialdrenagem_4, 
                style: style_Fluvialdrenagem_4,
                popuplayertitle: 'Fluvial (drenagem)',
                interactive: true,
                title: '<img src="styles/legend/Fluvialdrenagem_4.png" /> Fluvial (drenagem)'
            });
var format_LimiteMunicipal_5 = new ol.format.GeoJSON();
var features_LimiteMunicipal_5 = format_LimiteMunicipal_5.readFeatures(json_LimiteMunicipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_5.addFeatures(features_LimiteMunicipal_5);
var lyr_LimiteMunicipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_5, 
                style: style_LimiteMunicipal_5,
                popuplayertitle: 'Limite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_5.png" /> Limite Municipal'
            });
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
var format_RedeColetoraPALPMRO_7 = new ol.format.GeoJSON();
var features_RedeColetoraPALPMRO_7 = format_RedeColetoraPALPMRO_7.readFeatures(json_RedeColetoraPALPMRO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RedeColetoraPALPMRO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeColetoraPALPMRO_7.addFeatures(features_RedeColetoraPALPMRO_7);
var lyr_RedeColetoraPALPMRO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeColetoraPALPMRO_7, 
                style: style_RedeColetoraPALPMRO_7,
                popuplayertitle: 'Rede Coletora (PAL - PMRO)',
                interactive: true,
                title: '<img src="styles/legend/RedeColetoraPALPMRO_7.png" /> Rede Coletora (PAL - PMRO)'
            });
var format_LinhasdeRecalqueRioMais2025_8 = new ol.format.GeoJSON();
var features_LinhasdeRecalqueRioMais2025_8 = format_LinhasdeRecalqueRioMais2025_8.readFeatures(json_LinhasdeRecalqueRioMais2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LinhasdeRecalqueRioMais2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhasdeRecalqueRioMais2025_8.addFeatures(features_LinhasdeRecalqueRioMais2025_8);
var lyr_LinhasdeRecalqueRioMais2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhasdeRecalqueRioMais2025_8, 
                style: style_LinhasdeRecalqueRioMais2025_8,
                popuplayertitle: 'Linhas de Recalque (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/LinhasdeRecalqueRioMais2025_8.png" /> Linhas de Recalque (RioMais - 2025)'
            });
var format_PoosdeVisitaRioMais2025_9 = new ol.format.GeoJSON();
var features_PoosdeVisitaRioMais2025_9 = format_PoosdeVisitaRioMais2025_9.readFeatures(json_PoosdeVisitaRioMais2025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PoosdeVisitaRioMais2025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoosdeVisitaRioMais2025_9.addFeatures(features_PoosdeVisitaRioMais2025_9);
var lyr_PoosdeVisitaRioMais2025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoosdeVisitaRioMais2025_9, 
                style: style_PoosdeVisitaRioMais2025_9,
                popuplayertitle: 'Poços de Visita (RioMais - 2025)',
                interactive: true,
                title: '<img src="styles/legend/PoosdeVisitaRioMais2025_9.png" /> Poços de Visita (RioMais - 2025)'
            });
var format_AdutorasRioMais2024_10 = new ol.format.GeoJSON();
var features_AdutorasRioMais2024_10 = format_AdutorasRioMais2024_10.readFeatures(json_AdutorasRioMais2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AdutorasRioMais2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdutorasRioMais2024_10.addFeatures(features_AdutorasRioMais2024_10);
var lyr_AdutorasRioMais2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdutorasRioMais2024_10, 
                style: style_AdutorasRioMais2024_10,
                popuplayertitle: 'Adutoras (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/AdutorasRioMais2024_10.png" /> Adutoras (RioMais - 2024)'
            });
var format_ReservatriosRioMais2024_11 = new ol.format.GeoJSON();
var features_ReservatriosRioMais2024_11 = format_ReservatriosRioMais2024_11.readFeatures(json_ReservatriosRioMais2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReservatriosRioMais2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosRioMais2024_11.addFeatures(features_ReservatriosRioMais2024_11);
var lyr_ReservatriosRioMais2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosRioMais2024_11, 
                style: style_ReservatriosRioMais2024_11,
                popuplayertitle: 'Reservatórios (RioMais - 2024)',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosRioMais2024_11.png" /> Reservatórios (RioMais - 2024)'
            });
var format_Loteamentos_12 = new ol.format.GeoJSON();
var features_Loteamentos_12 = format_Loteamentos_12.readFeatures(json_Loteamentos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Loteamentos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentos_12.addFeatures(features_Loteamentos_12);
var lyr_Loteamentos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentos_12, 
                style: style_Loteamentos_12,
                popuplayertitle: 'Loteamentos',
                interactive: true,
                title: '<img src="styles/legend/Loteamentos_12.png" /> Loteamentos'
            });
var format_reasPblicas_13 = new ol.format.GeoJSON();
var features_reasPblicas_13 = format_reasPblicas_13.readFeatures(json_reasPblicas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasPblicas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPblicas_13.addFeatures(features_reasPblicas_13);
var lyr_reasPblicas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPblicas_13, 
                style: style_reasPblicas_13,
                popuplayertitle: 'Áreas Públicas',
                interactive: true,
    title: 'Áreas Públicas<br />\
    <img src="styles/legend/reasPblicas_13_0.png" /> Terrenos Próprios - Doação<br />\
    <img src="styles/legend/reasPblicas_13_1.png" /> Áreas de Praças<br />\
    <img src="styles/legend/reasPblicas_13_2.png" /> Terrenos Próprios - Desapropriação<br />\
    <img src="styles/legend/reasPblicas_13_3.png" /> Área de Preservação Permanente<br />\
    <img src="styles/legend/reasPblicas_13_4.png" /> Áreas Verdes<br />\
    <img src="styles/legend/reasPblicas_13_5.png" /> Desapropriação - MNCR<br />\
    <img src="styles/legend/reasPblicas_13_6.png" /> Terrenos Institucionais<br />\
    <img src="styles/legend/reasPblicas_13_7.png" /> Próprios Invadidos<br />' });
var format_INCRASIGEFImveisRurais_14 = new ol.format.GeoJSON();
var features_INCRASIGEFImveisRurais_14 = format_INCRASIGEFImveisRurais_14.readFeatures(json_INCRASIGEFImveisRurais_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_INCRASIGEFImveisRurais_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCRASIGEFImveisRurais_14.addFeatures(features_INCRASIGEFImveisRurais_14);
var lyr_INCRASIGEFImveisRurais_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INCRASIGEFImveisRurais_14, 
                style: style_INCRASIGEFImveisRurais_14,
                popuplayertitle: 'INCRA - SIGEF - Imóveis Rurais',
                interactive: true,
    title: 'INCRA - SIGEF - Imóveis Rurais<br />\
    <img src="styles/legend/INCRASIGEFImveisRurais_14_0.png" /> Assentamento<br />\
    <img src="styles/legend/INCRASIGEFImveisRurais_14_1.png" /> Particular<br />\
    <img src="styles/legend/INCRASIGEFImveisRurais_14_2.png" /> Privado<br />' });
var format_MMASICARImveisRurais_15 = new ol.format.GeoJSON();
var features_MMASICARImveisRurais_15 = format_MMASICARImveisRurais_15.readFeatures(json_MMASICARImveisRurais_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_MMASICARImveisRurais_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MMASICARImveisRurais_15.addFeatures(features_MMASICARImveisRurais_15);
var lyr_MMASICARImveisRurais_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MMASICARImveisRurais_15, 
                style: style_MMASICARImveisRurais_15,
                popuplayertitle: 'MMA - SICAR - Imóveis Rurais',
                interactive: true,
                title: '<img src="styles/legend/MMASICARImveisRurais_15.png" /> MMA - SICAR - Imóveis Rurais'
            });
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
var format_ZEIMA1_18 = new ol.format.GeoJSON();
var features_ZEIMA1_18 = format_ZEIMA1_18.readFeatures(json_ZEIMA1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZEIMA1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEIMA1_18.addFeatures(features_ZEIMA1_18);
var lyr_ZEIMA1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEIMA1_18, 
                style: style_ZEIMA1_18,
                popuplayertitle: 'ZEIMA 1',
                interactive: true,
    title: 'ZEIMA 1<br />\
    <img src="styles/legend/ZEIMA1_18_0.png" /> SZA1<br />\
    <img src="styles/legend/ZEIMA1_18_1.png" /> SZA2<br />\
    <img src="styles/legend/ZEIMA1_18_2.png" /> SZA3<br />\
    <img src="styles/legend/ZEIMA1_18_3.png" /> SZA4<br />\
    <img src="styles/legend/ZEIMA1_18_4.png" /> SZA5<br />' });
var format_ZoneamentoLC902023_19 = new ol.format.GeoJSON();
var features_ZoneamentoLC902023_19 = format_ZoneamentoLC902023_19.readFeatures(json_ZoneamentoLC902023_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoLC902023_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLC902023_19.addFeatures(features_ZoneamentoLC902023_19);
var lyr_ZoneamentoLC902023_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLC902023_19, 
                style: style_ZoneamentoLC902023_19,
                popuplayertitle: 'Zoneamento (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_0.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_1.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_2.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_3.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_4.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_5.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_6.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_7.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_8.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_9.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_10.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_11.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_12.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_13.png" /> Zona Industrial 1<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_14.png" /> Zona Industrial 2<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_15.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_16.png" /> ZEU - Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_17.png" /> Rio das Ostras<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_18.png" /> ZUC1<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_19.png" /> ZUC2<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_20.png" /> ZUC3<br />\
    <img src="styles/legend/ZoneamentoLC902023_19_21.png" /> ZUC4<br />' });
var format_ReBioZonadeAmortecimento_20 = new ol.format.GeoJSON();
var features_ReBioZonadeAmortecimento_20 = format_ReBioZonadeAmortecimento_20.readFeatures(json_ReBioZonadeAmortecimento_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBioZonadeAmortecimento_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBioZonadeAmortecimento_20.addFeatures(features_ReBioZonadeAmortecimento_20);
var lyr_ReBioZonadeAmortecimento_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBioZonadeAmortecimento_20, 
                style: style_ReBioZonadeAmortecimento_20,
                popuplayertitle: 'ReBio - Zona de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/ReBioZonadeAmortecimento_20.png" /> ReBio - Zona de Amortecimento'
            });
var format_ReBio_21 = new ol.format.GeoJSON();
var features_ReBio_21 = format_ReBio_21.readFeatures(json_ReBio_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBio_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBio_21.addFeatures(features_ReBio_21);
var lyr_ReBio_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBio_21, 
                style: style_ReBio_21,
                popuplayertitle: 'ReBio',
                interactive: true,
    title: 'ReBio<br />\
    <img src="styles/legend/ReBio_21_0.png" /> Adequação<br />\
    <img src="styles/legend/ReBio_21_1.png" /> Uso Moderado<br />\
    <img src="styles/legend/ReBio_21_2.png" /> Amortecimento<br />\
    <img src="styles/legend/ReBio_21_3.png" /> Conservação<br />\
    <img src="styles/legend/ReBio_21_4.png" /> Infraestrutura<br />\
    <img src="styles/legend/ReBio_21_5.png" /> Uso Divergente<br />\
    <img src="styles/legend/ReBio_21_6.png" /> Difer Interess Públ<br />\
    <img src="styles/legend/ReBio_21_7.png" /> Amortecimento<br />' });
var format_APABaciadoRioSoJoo_22 = new ol.format.GeoJSON();
var features_APABaciadoRioSoJoo_22 = format_APABaciadoRioSoJoo_22.readFeatures(json_APABaciadoRioSoJoo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_APABaciadoRioSoJoo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APABaciadoRioSoJoo_22.addFeatures(features_APABaciadoRioSoJoo_22);
var lyr_APABaciadoRioSoJoo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APABaciadoRioSoJoo_22, 
                style: style_APABaciadoRioSoJoo_22,
                popuplayertitle: 'APA Bacia do Rio São João',
                interactive: true,
                title: '<img src="styles/legend/APABaciadoRioSoJoo_22.png" /> APA Bacia do Rio São João'
            });
var format_ParquedosPssaros_23 = new ol.format.GeoJSON();
var features_ParquedosPssaros_23 = format_ParquedosPssaros_23.readFeatures(json_ParquedosPssaros_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ParquedosPssaros_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosPssaros_23.addFeatures(features_ParquedosPssaros_23);
var lyr_ParquedosPssaros_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosPssaros_23, 
                style: style_ParquedosPssaros_23,
                popuplayertitle: 'Parque dos Pássaros',
                interactive: false,
                title: '<img src="styles/legend/ParquedosPssaros_23.png" /> Parque dos Pássaros'
            });
var format_ARIEItapebussusZonaAmortecimento_24 = new ol.format.GeoJSON();
var features_ARIEItapebussusZonaAmortecimento_24 = format_ARIEItapebussusZonaAmortecimento_24.readFeatures(json_ARIEItapebussusZonaAmortecimento_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ARIEItapebussusZonaAmortecimento_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARIEItapebussusZonaAmortecimento_24.addFeatures(features_ARIEItapebussusZonaAmortecimento_24);
var lyr_ARIEItapebussusZonaAmortecimento_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARIEItapebussusZonaAmortecimento_24, 
                style: style_ARIEItapebussusZonaAmortecimento_24,
                popuplayertitle: 'ARIE Itapebussus - Zona Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/ARIEItapebussusZonaAmortecimento_24.png" /> ARIE Itapebussus - Zona Amortecimento'
            });
var format_ARIEItapebussus_25 = new ol.format.GeoJSON();
var features_ARIEItapebussus_25 = format_ARIEItapebussus_25.readFeatures(json_ARIEItapebussus_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ARIEItapebussus_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARIEItapebussus_25.addFeatures(features_ARIEItapebussus_25);
var lyr_ARIEItapebussus_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARIEItapebussus_25, 
                style: style_ARIEItapebussus_25,
                popuplayertitle: 'ARIE Itapebussus',
                interactive: true,
    title: 'ARIE Itapebussus<br />\
    <img src="styles/legend/ARIEItapebussus_25_0.png" /> Zona de Adequação Ambiental<br />\
    <img src="styles/legend/ARIEItapebussus_25_1.png" /> Zona de Conservação<br />\
    <img src="styles/legend/ARIEItapebussus_25_2.png" /> Zona de Diferentes Interesses Públicos<br />\
    <img src="styles/legend/ARIEItapebussus_25_3.png" /> Zona de Infraestrutura<br />\
    <img src="styles/legend/ARIEItapebussus_25_4.png" /> Zona Populacional<br />\
    <img src="styles/legend/ARIEItapebussus_25_5.png" /> Zona Produtiva<br />\
    <img src="styles/legend/ARIEItapebussus_25_6.png" /> Zona de Sobreposição Territorial<br />\
    <img src="styles/legend/ARIEItapebussus_25_7.png" /> Zona de Uso Moderado<br />\
    <img src="styles/legend/ARIEItapebussus_25_8.png" /> Zona de Uso Restrito<br />\
    <img src="styles/legend/ARIEItapebussus_25_9.png" /> Zona de Amortecimento<br />' });
var format_MNCostesRochosos_26 = new ol.format.GeoJSON();
var features_MNCostesRochosos_26 = format_MNCostesRochosos_26.readFeatures(json_MNCostesRochosos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_MNCostesRochosos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNCostesRochosos_26.addFeatures(features_MNCostesRochosos_26);
var lyr_MNCostesRochosos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNCostesRochosos_26, 
                style: style_MNCostesRochosos_26,
                popuplayertitle: 'MN Costões Rochosos',
                interactive: true,
    title: 'MN Costões Rochosos<br />\
    <img src="styles/legend/MNCostesRochosos_26_0.png" /> ZA<br />\
    <img src="styles/legend/MNCostesRochosos_26_1.png" /> ZP<br />\
    <img src="styles/legend/MNCostesRochosos_26_2.png" /> ZR<br />\
    <img src="styles/legend/MNCostesRochosos_26_3.png" /> ZOC<br />\
    <img src="styles/legend/MNCostesRochosos_26_4.png" /> ZUE<br />\
    <img src="styles/legend/MNCostesRochosos_26_5.png" /> ZUI<br />' });
var format_APALagoadeIriry_27 = new ol.format.GeoJSON();
var features_APALagoadeIriry_27 = format_APALagoadeIriry_27.readFeatures(json_APALagoadeIriry_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_APALagoadeIriry_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APALagoadeIriry_27.addFeatures(features_APALagoadeIriry_27);
var lyr_APALagoadeIriry_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APALagoadeIriry_27, 
                style: style_APALagoadeIriry_27,
                popuplayertitle: 'APA Lagoa de Iriry',
                interactive: true,
    title: 'APA Lagoa de Iriry<br />\
    <img src="styles/legend/APALagoadeIriry_27_0.png" /> ZP1 - Zona Populacional 1<br />\
    <img src="styles/legend/APALagoadeIriry_27_1.png" /> ZP2 - Zona Populacional 2<br />\
    <img src="styles/legend/APALagoadeIriry_27_2.png" /> ZP3 - Zona Populacional 3<br />\
    <img src="styles/legend/APALagoadeIriry_27_3.png" /> ZAA - Zona de Adequação Ambiental<br />\
    <img src="styles/legend/APALagoadeIriry_27_4.png" /> ZC - Zona de Conservação<br />\
    <img src="styles/legend/APALagoadeIriry_27_5.png" /> ZI - Zona de Infraestrutura<br />\
    <img src="styles/legend/APALagoadeIriry_27_6.png" /> ZUM - Zona de Uso Moderado<br />' });
var format_reaConsolidada_28 = new ol.format.GeoJSON();
var features_reaConsolidada_28 = format_reaConsolidada_28.readFeatures(json_reaConsolidada_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reaConsolidada_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaConsolidada_28.addFeatures(features_reaConsolidada_28);
var lyr_reaConsolidada_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaConsolidada_28, 
                style: style_reaConsolidada_28,
                popuplayertitle: 'Área Consolidada',
                interactive: true,
                title: '<img src="styles/legend/reaConsolidada_28.png" /> Área Consolidada'
            });
var format_Pousio_29 = new ol.format.GeoJSON();
var features_Pousio_29 = format_Pousio_29.readFeatures(json_Pousio_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Pousio_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pousio_29.addFeatures(features_Pousio_29);
var lyr_Pousio_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pousio_29, 
                style: style_Pousio_29,
                popuplayertitle: 'Pousio',
                interactive: true,
                title: '<img src="styles/legend/Pousio_29.png" /> Pousio'
            });
var format_ReservaLegal_30 = new ol.format.GeoJSON();
var features_ReservaLegal_30 = format_ReservaLegal_30.readFeatures(json_ReservaLegal_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReservaLegal_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaLegal_30.addFeatures(features_ReservaLegal_30);
var lyr_ReservaLegal_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaLegal_30, 
                style: style_ReservaLegal_30,
                popuplayertitle: 'Reserva Legal',
                interactive: true,
                title: '<img src="styles/legend/ReservaLegal_30.png" /> Reserva Legal'
            });
var format_ServidoAdministrativa_31 = new ol.format.GeoJSON();
var features_ServidoAdministrativa_31 = format_ServidoAdministrativa_31.readFeatures(json_ServidoAdministrativa_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ServidoAdministrativa_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoAdministrativa_31.addFeatures(features_ServidoAdministrativa_31);
var lyr_ServidoAdministrativa_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoAdministrativa_31, 
                style: style_ServidoAdministrativa_31,
                popuplayertitle: 'Servidão Administrativa',
                interactive: true,
    title: 'Servidão Administrativa<br />\
    <img src="styles/legend/ServidoAdministrativa_31_0.png" /> Infraestrutura Pública<br />\
    <img src="styles/legend/ServidoAdministrativa_31_1.png" /> Utilidade Pública<br />\
    <img src="styles/legend/ServidoAdministrativa_31_2.png" /> Reservatórios Energia<br />' });
var format_UsoRetrito_32 = new ol.format.GeoJSON();
var features_UsoRetrito_32 = format_UsoRetrito_32.readFeatures(json_UsoRetrito_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_UsoRetrito_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoRetrito_32.addFeatures(features_UsoRetrito_32);
var lyr_UsoRetrito_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoRetrito_32, 
                style: style_UsoRetrito_32,
                popuplayertitle: 'Uso Retrito',
                interactive: true,
                title: '<img src="styles/legend/UsoRetrito_32.png" /> Uso Retrito'
            });
var format_VegetaoNativa_33 = new ol.format.GeoJSON();
var features_VegetaoNativa_33 = format_VegetaoNativa_33.readFeatures(json_VegetaoNativa_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_VegetaoNativa_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaoNativa_33.addFeatures(features_VegetaoNativa_33);
var lyr_VegetaoNativa_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetaoNativa_33, 
                style: style_VegetaoNativa_33,
                popuplayertitle: 'Vegetação Nativa',
                interactive: true,
                title: '<img src="styles/legend/VegetaoNativa_33.png" /> Vegetação Nativa'
            });
var format_APP_34 = new ol.format.GeoJSON();
var features_APP_34 = format_APP_34.readFeatures(json_APP_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_APP_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_34.addFeatures(features_APP_34);
var lyr_APP_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_34, 
                style: style_APP_34,
                popuplayertitle: 'APP',
                interactive: true,
    title: 'APP<br />\
    <img src="styles/legend/APP_34_0.png" /> Topo de Morro<br />\
    <img src="styles/legend/APP_34_1.png" /> Banhado<br />\
    <img src="styles/legend/APP_34_2.png" /> Escadinha Lago Natural<br />\
    <img src="styles/legend/APP_34_3.png" /> Escadinha Nascente Olho d\'Água<br />\
    <img src="styles/legend/APP_34_4.png" /> Escadinha Rio (10m a 50m)<br />\
    <img src="styles/legend/APP_34_5.png" /> Escadinha Rio (até 10m)<br />\
    <img src="styles/legend/APP_34_6.png" /> Escadinha Vereda<br />\
    <img src="styles/legend/APP_34_7.png" /> Lago Natural<br />\
    <img src="styles/legend/APP_34_8.png" /> Manguezal<br />\
    <img src="styles/legend/APP_34_9.png" /> Nascente Olho d\'Água<br />\
    <img src="styles/legend/APP_34_10.png" /> Reserv. Artif. Decorrente Barramento<br />\
    <img src="styles/legend/APP_34_11.png" /> Rio (10m a 50m)<br />\
    <img src="styles/legend/APP_34_12.png" /> Rio (até 10m)<br />\
    <img src="styles/legend/APP_34_13.png" /> Vereda<br />' });
var group_AmbientalINCRA = new ol.layer.Group({
                                layers: [lyr_reaConsolidada_28,lyr_Pousio_29,lyr_ReservaLegal_30,lyr_ServidoAdministrativa_31,lyr_UsoRetrito_32,lyr_VegetaoNativa_33,lyr_APP_34,],
                                fold: 'close',
                                title: 'Ambiental - INCRA'});
var group_LegislaoAmbiental = new ol.layer.Group({
                                layers: [lyr_ReBioZonadeAmortecimento_20,lyr_ReBio_21,lyr_APABaciadoRioSoJoo_22,lyr_ParquedosPssaros_23,lyr_ARIEItapebussusZonaAmortecimento_24,lyr_ARIEItapebussus_25,lyr_MNCostesRochosos_26,lyr_APALagoadeIriry_27,],
                                fold: 'close',
                                title: 'Legislação Ambiental'});
var group_Legislao = new ol.layer.Group({
                                layers: [lyr_ZEIMA1_18,lyr_ZoneamentoLC902023_19,],
                                fold: 'close',
                                title: 'Legislação'});
var group_reasdeRiscos = new ol.layer.Group({
                                layers: [lyr_RiscoDeslizamento_16,lyr_reasAlagveis_17,],
                                fold: 'close',
                                title: 'Áreas de Riscos'});
var group_Fundirio = new ol.layer.Group({
                                layers: [lyr_Loteamentos_12,lyr_reasPblicas_13,lyr_INCRASIGEFImveisRurais_14,lyr_MMASICARImveisRurais_15,],
                                fold: 'close',
                                title: 'Fundiário'});
var group_Saneamento = new ol.layer.Group({
                                layers: [lyr_RedeColetoraRioMais2025_6,lyr_RedeColetoraPALPMRO_7,lyr_LinhasdeRecalqueRioMais2025_8,lyr_PoosdeVisitaRioMais2025_9,lyr_AdutorasRioMais2024_10,lyr_ReservatriosRioMais2024_11,],
                                fold: 'close',
                                title: 'Saneamento'});
var group_UrbanismoBase = new ol.layer.Group({
                                layers: [lyr_Viriofaces_2,lyr_Virioeixos_3,lyr_Fluvialdrenagem_4,lyr_LimiteMunicipal_5,],
                                fold: 'close',
                                title: 'Urbanismo - Base'});

lyr_Mapa_0.setVisible(false);lyr_Satlite_1.setVisible(true);lyr_Viriofaces_2.setVisible(false);lyr_Virioeixos_3.setVisible(false);lyr_Fluvialdrenagem_4.setVisible(false);lyr_LimiteMunicipal_5.setVisible(true);lyr_RedeColetoraRioMais2025_6.setVisible(false);lyr_RedeColetoraPALPMRO_7.setVisible(false);lyr_LinhasdeRecalqueRioMais2025_8.setVisible(false);lyr_PoosdeVisitaRioMais2025_9.setVisible(false);lyr_AdutorasRioMais2024_10.setVisible(false);lyr_ReservatriosRioMais2024_11.setVisible(false);lyr_Loteamentos_12.setVisible(false);lyr_reasPblicas_13.setVisible(false);lyr_INCRASIGEFImveisRurais_14.setVisible(false);lyr_MMASICARImveisRurais_15.setVisible(false);lyr_RiscoDeslizamento_16.setVisible(false);lyr_reasAlagveis_17.setVisible(false);lyr_ZEIMA1_18.setVisible(false);lyr_ZoneamentoLC902023_19.setVisible(false);lyr_ReBioZonadeAmortecimento_20.setVisible(false);lyr_ReBio_21.setVisible(false);lyr_APABaciadoRioSoJoo_22.setVisible(false);lyr_ParquedosPssaros_23.setVisible(false);lyr_ARIEItapebussusZonaAmortecimento_24.setVisible(false);lyr_ARIEItapebussus_25.setVisible(false);lyr_MNCostesRochosos_26.setVisible(false);lyr_APALagoadeIriry_27.setVisible(false);lyr_reaConsolidada_28.setVisible(false);lyr_Pousio_29.setVisible(false);lyr_ReservaLegal_30.setVisible(false);lyr_ServidoAdministrativa_31.setVisible(false);lyr_UsoRetrito_32.setVisible(false);lyr_VegetaoNativa_33.setVisible(false);lyr_APP_34.setVisible(false);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,group_UrbanismoBase,group_Saneamento,group_Fundirio,group_reasdeRiscos,group_Legislao,group_LegislaoAmbiental,group_AmbientalINCRA];
lyr_Viriofaces_2.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'CD_QUADRA': 'CD_QUADRA', 'CD_FACE': 'CD_FACE', 'Nome _Logradouro': 'Nome _Logradouro', });
lyr_Virioeixos_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'tunnel': 'tunnel', 'bridge': 'bridge', 'level': 'level', 'fid_2': 'fid_2', 'OBJECTID_1': 'OBJECTID_1', 'MUNICN': 'MUNICN', 'REGGOV': 'REGGOV', 'cd7': 'cd7', 'cd6': 'cd6', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fluvialdrenagem_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LimiteMunicipal_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'MUNICN': 'MUNICN', 'REGGOV': 'REGGOV', 'cd7': 'cd7', 'cd6': 'cd6', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RedeColetoraRioMais2025_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'comp': 'comp', 'TT_DIAM': 'TT_DIAM', 'TT_TIPO_RE': 'TT_TIPO_RE', 'TT_MATERIA': 'TT_MATERIA', 'TT_CU_ID': 'TT_CU_ID', 'TT_CU_OID': 'TT_CU_OID', 'TT_ZEL_ID': 'TT_ZEL_ID', 'Diâmetro': 'diametro', });
lyr_RedeColetoraPALPMRO_7.set('fieldAliases', {'fid': 'fid', 'Área': 'Área', 'Obs': 'Obs', });
lyr_LinhasdeRecalqueRioMais2025_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Comprimento': 'Comprimento', });
lyr_PoosdeVisitaRioMais2025_9.set('fieldAliases', {'fid': 'fid', 'PR_TIPO_RE': 'PR_TIPO_RE', 'PR_ZET_ID': 'PR_ZET_ID', 'PR_BA_ID': 'PR_BA_ID', 'DIR': 'DIR', });
lyr_AdutorasRioMais2024_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Diâmetro': 'Diâmetro', 'Notas': 'Notas', });
lyr_ReservatriosRioMais2024_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Loteamentos_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Loteamento', });
lyr_reasPblicas_13.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', 'Indice': 'Indice', 'Especie': 'Espécie', 'Tipo': 'Tipo', });
lyr_INCRASIGEFImveisRurais_14.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'cd_sipra': 'cd_sipra', 'nome_projeto': 'nome_projeto', 'municipio': 'municipio', 'area_hectare_declarada': 'area_hectare_declarada', 'capacidade': 'capacidade', 'num_familias': 'num_familias', 'fase': 'fase', 'data_de_criacao': 'data_de_criacao', 'forma_obtencao': 'forma_obtencao', 'data_obtencao': 'data_obtencao', 'area_calc_ha': 'area_calc_ha', 'sr': 'sr', 'descricao_fase': 'descricao_fase', 'base_INCRA': 'base_INCRA', 'id': 'id', 'parcela_codigo': 'parcela_codigo', 'rt': 'rt', 'art': 'art', 'situacao_informada': 'situacao_informada', 'codigo_imovel': 'codigo_imovel', 'data_submissao': 'data_submissao', 'data_aprovacao': 'data_aprovacao', 'status': 'status', 'nome_area': 'nome_area', 'registro_matricula': 'registro_matricula', 'registro_data': 'registro_data', 'codigo_municipio': 'codigo_municipio', 'id1': 'id1', 'num_processo': 'num_processo', 'num_certificacao': 'num_certificacao', 'data_certificacao': 'data_certificacao', 'qtd_area_peca_tecnica': 'qtd_area_peca_tecnica', 'cod_profissional_credenciado': 'cod_profissional_credenciado', 'cod_imovel_rural': 'cod_imovel_rural', 'nome_imovel': 'nome_imovel', 'layer': 'layer', 'path': 'path', 'Tema': 'Tema', 'TemaSigla': 'Sigla', });
lyr_MMASICARImveisRurais_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambientais': 'temas_ambientais', 'modulos_rurais': 'modulos_rurais', 'sobreposicao_area_indigena': 'sobreposicao_area_indigena', 'sobreposicao_unidade_conservacao': 'sobreposicao_unidade_conservacao', 'sobreposicao_quilombo': 'sobreposicao_quilombo', 'sobreposicao_area_embargada': 'sobreposicao_area_embargada', 'sobreposicao_terras_da_uniao': 'sobreposicao_terras_da_uniao', 'tipo_imovel': 'tipo_imovel', 'situacao_analise': 'situacao_analise', 'status_imovel': 'status_imovel', 'nu_retificacao': 'nu_retificacao', 'dt_atualizacao': 'dt_atualizacao', 'dt_criacao': 'dt_criacao', 'nu_area_imovel': 'nu_area_imovel', 'Tipo_CamadaOriginalKML': 'Tipo_CamadaOriginalKML', });
lyr_RiscoDeslizamento_16.set('fieldAliases', {'fid': 'fid', });
lyr_reasAlagveis_17.set('fieldAliases', {'fid': 'fid', 'Levantamento': 'Levantamento', });
lyr_ZEIMA1_18.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'ParametrosHTML': 'ParametrosHTML', 'DescricaoHTML': 'DescricaoHTML', });
lyr_ZoneamentoLC902023_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'Parâmetros': 'parametros', 'ParametrosHTML': 'ParametrosHTML', });
lyr_ReBioZonadeAmortecimento_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_ReBio_21.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', });
lyr_APABaciadoRioSoJoo_22.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'docleg_id': 'docleg_id', 'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', });
lyr_ParquedosPssaros_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ARIEItapebussusZonaAmortecimento_24.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nome': 'Nome', 'Area_ha': 'Area_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'area_ha_1': 'area_ha_1', 'Sigla': 'Sigla', 'Name': 'Name', 'Parametros': 'Parametros', 'Link': 'Link', });
lyr_ARIEItapebussus_25.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'Zona': 'Zona', 'Sigla': 'Sigla', 'Name': 'Name', 'Parametros': 'Parametros', 'Link': 'Link', });
lyr_MNCostesRochosos_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'HTML_Pag_Desc': 'HTML_Pag_Desc', });
lyr_APALagoadeIriry_27.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'Zona': 'Zona', 'Sigla': 'Sigla', 'PaginaHTML': 'PaginaHTML', });
lyr_reaConsolidada_28.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'Tema': 'Tema', });
lyr_Pousio_29.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'Tema': 'Tema', });
lyr_ReservaLegal_30.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'layer': 'layer', 'path': 'path', 'Tema': 'Tema', 'TemaSigla': 'Sigla', });
lyr_ServidoAdministrativa_31.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'layer': 'layer', 'path': 'path', 'Tema': 'Tema', 'TemaSigla': 'Sigla', });
lyr_UsoRetrito_32.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'Tema': 'Tema', });
lyr_VegetaoNativa_33.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'Tema': 'Tema', });
lyr_APP_34.set('fieldAliases', {'fid': 'fid', 'cod_imovel': 'cod_imovel', 'uf': 'uf', 'municipio': 'municipio', 'bioma': 'bioma', 'temas_ambi': 'temas_ambi', 'modulos_ru': 'modulos_ru', 'sobreposic': 'sobreposic', 'sobreposi0': 'sobreposi0', 'sobreposi1': 'sobreposi1', 'sobreposi2': 'sobreposi2', 'sobreposi3': 'sobreposi3', 'tipo_imove': 'tipo_imove', 'situacao_a': 'situacao_a', 'status_imo': 'status_imo', 'nu_retific': 'nu_retific', 'dt_atualiz': 'dt_atualiz', 'dt_criacao': 'dt_criacao', 'nu_area_im': 'nu_area_im', 'layer': 'layer', 'path': 'path', 'Tema': 'Tema', 'TemaSigla': 'TemaSigla', });
lyr_Viriofaces_2.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'CD_QUADRA': 'TextEdit', 'CD_FACE': 'TextEdit', 'Nome _Logradouro': 'TextEdit', });
lyr_Virioeixos_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'surface': '', 'ref': '', 'tunnel': '', 'bridge': '', 'level': '', 'fid_2': '', 'OBJECTID_1': '', 'MUNICN': '', 'REGGOV': '', 'cd7': '', 'cd6': '', 'AREA_KM2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Fluvialdrenagem_4.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LimiteMunicipal_5.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'MUNICN': '', 'REGGOV': '', 'cd7': '', 'cd6': '', 'AREA_KM2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RedeColetoraRioMais2025_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'comp': 'TextEdit', 'TT_DIAM': 'TextEdit', 'TT_TIPO_RE': 'TextEdit', 'TT_MATERIA': 'TextEdit', 'TT_CU_ID': 'TextEdit', 'TT_CU_OID': 'TextEdit', 'TT_ZEL_ID': 'TextEdit', 'Diâmetro': 'TextEdit', });
lyr_RedeColetoraPALPMRO_7.set('fieldImages', {'fid': '', 'Área': '', 'Obs': '', });
lyr_LinhasdeRecalqueRioMais2025_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Comprimento': 'TextEdit', });
lyr_PoosdeVisitaRioMais2025_9.set('fieldImages', {'fid': 'TextEdit', 'PR_TIPO_RE': 'TextEdit', 'PR_ZET_ID': 'TextEdit', 'PR_BA_ID': 'TextEdit', 'DIR': '', });
lyr_AdutorasRioMais2024_10.set('fieldImages', {'fid': '', 'Name': '', 'Diâmetro': '', 'Notas': '', });
lyr_ReservatriosRioMais2024_11.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Loteamentos_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reasPblicas_13.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', 'Indice': '', 'Especie': '', 'Tipo': '', });
lyr_INCRASIGEFImveisRurais_14.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'cd_sipra': 'TextEdit', 'nome_projeto': 'TextEdit', 'municipio': 'TextEdit', 'area_hectare_declarada': 'TextEdit', 'capacidade': 'TextEdit', 'num_familias': 'TextEdit', 'fase': 'TextEdit', 'data_de_criacao': 'TextEdit', 'forma_obtencao': 'TextEdit', 'data_obtencao': 'TextEdit', 'area_calc_ha': 'TextEdit', 'sr': 'TextEdit', 'descricao_fase': 'TextEdit', 'base_INCRA': 'TextEdit', 'id': 'TextEdit', 'parcela_codigo': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_informada': 'TextEdit', 'codigo_imovel': 'TextEdit', 'data_submissao': 'TextEdit', 'data_aprovacao': 'TextEdit', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_matricula': 'TextEdit', 'registro_data': 'TextEdit', 'codigo_municipio': 'TextEdit', 'id1': 'TextEdit', 'num_processo': 'TextEdit', 'num_certificacao': 'TextEdit', 'data_certificacao': 'TextEdit', 'qtd_area_peca_tecnica': 'TextEdit', 'cod_profissional_credenciado': 'TextEdit', 'cod_imovel_rural': 'TextEdit', 'nome_imovel': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Tema': 'TextEdit', 'TemaSigla': 'TextEdit', });
lyr_MMASICARImveisRurais_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cod_imovel': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'bioma': 'TextEdit', 'temas_ambientais': 'TextEdit', 'modulos_rurais': 'TextEdit', 'sobreposicao_area_indigena': 'TextEdit', 'sobreposicao_unidade_conservacao': 'TextEdit', 'sobreposicao_quilombo': 'TextEdit', 'sobreposicao_area_embargada': 'TextEdit', 'sobreposicao_terras_da_uniao': 'TextEdit', 'tipo_imovel': 'TextEdit', 'situacao_analise': 'TextEdit', 'status_imovel': 'TextEdit', 'nu_retificacao': 'Range', 'dt_atualizacao': 'TextEdit', 'dt_criacao': 'TextEdit', 'nu_area_imovel': 'TextEdit', 'Tipo_CamadaOriginalKML': 'TextEdit', });
lyr_RiscoDeslizamento_16.set('fieldImages', {'fid': '', });
lyr_reasAlagveis_17.set('fieldImages', {'fid': '', 'Levantamento': '', });
lyr_ZEIMA1_18.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'ParametrosHTML': 'TextEdit', 'DescricaoHTML': 'TextEdit', });
lyr_ZoneamentoLC902023_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': '', });
lyr_ReBioZonadeAmortecimento_20.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ReBio_21.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', });
lyr_APABaciadoRioSoJoo_22.set('fieldImages', {'fid': '', 'gml_id': '', 'docleg_id': '', 'uc_id': '', 'cd_cnuc': '', 'wdpa_pid': '', 'nome_uc': '', 'cria_ano': '', 'cria_ato': '', 'outro_ato': '', 'pl_manejo': '', 'co_gestor': '', 'quali_pol': '', 'ppgr': '', 'ha_total': '', 'ha_ato': '', 'esfera': '', 'uf': '', 'municipio': '', 'org_gestor': '', 'grupo': '', 'categoria': '', 'cat_iucn': '', 'amazonia': '', 'caatinga': '', 'cerrado': '', 'matlantica': '', 'pampa': '', 'pantanal': '', 'marinho': '', 'situacao': '', 'limite': '', });
lyr_ParquedosPssaros_23.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ARIEItapebussusZonaAmortecimento_24.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Nome': 'TextEdit', 'Area_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha_1': 'TextEdit', 'Sigla': 'TextEdit', 'Name': 'TextEdit', 'Parametros': 'TextEdit', 'Link': 'TextEdit', });
lyr_ARIEItapebussus_25.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', 'Zona': 'TextEdit', 'Sigla': 'TextEdit', 'Name': 'TextEdit', 'Parametros': 'TextEdit', 'Link': 'TextEdit', });
lyr_MNCostesRochosos_26.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'HTML_Pag_Desc': 'TextEdit', });
lyr_APALagoadeIriry_27.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', 'Zona': 'TextEdit', 'Sigla': 'TextEdit', 'PaginaHTML': 'TextEdit', });
lyr_reaConsolidada_28.set('fieldImages', {'fid': '', 'cod_imovel': '', 'uf': '', 'municipio': '', 'bioma': '', 'temas_ambi': '', 'modulos_ru': '', 'sobreposic': '', 'sobreposi0': '', 'sobreposi1': '', 'sobreposi2': '', 'sobreposi3': '', 'tipo_imove': '', 'situacao_a': '', 'status_imo': '', 'nu_retific': '', 'dt_atualiz': '', 'dt_criacao': '', 'nu_area_im': '', 'Tema': '', });
lyr_Pousio_29.set('fieldImages', {'fid': '', 'cod_imovel': '', 'uf': '', 'municipio': '', 'bioma': '', 'temas_ambi': '', 'modulos_ru': '', 'sobreposic': '', 'sobreposi0': '', 'sobreposi1': '', 'sobreposi2': '', 'sobreposi3': '', 'tipo_imove': '', 'situacao_a': '', 'status_imo': '', 'nu_retific': '', 'dt_atualiz': '', 'dt_criacao': '', 'nu_area_im': '', 'Tema': '', });
lyr_ReservaLegal_30.set('fieldImages', {'fid': '', 'cod_imovel': '', 'uf': '', 'municipio': '', 'bioma': '', 'temas_ambi': '', 'modulos_ru': '', 'sobreposic': '', 'sobreposi0': '', 'sobreposi1': '', 'sobreposi2': '', 'sobreposi3': '', 'tipo_imove': '', 'situacao_a': '', 'status_imo': '', 'nu_retific': '', 'dt_atualiz': '', 'dt_criacao': '', 'nu_area_im': '', 'layer': '', 'path': '', 'Tema': '', 'TemaSigla': '', });
lyr_ServidoAdministrativa_31.set('fieldImages', {'fid': 'TextEdit', 'cod_imovel': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'bioma': 'TextEdit', 'temas_ambi': 'TextEdit', 'modulos_ru': 'TextEdit', 'sobreposic': 'TextEdit', 'sobreposi0': 'TextEdit', 'sobreposi1': 'TextEdit', 'sobreposi2': 'TextEdit', 'sobreposi3': 'TextEdit', 'tipo_imove': 'TextEdit', 'situacao_a': 'TextEdit', 'status_imo': 'TextEdit', 'nu_retific': 'Range', 'dt_atualiz': 'DateTime', 'dt_criacao': 'DateTime', 'nu_area_im': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Tema': 'TextEdit', 'TemaSigla': 'TextEdit', });
lyr_UsoRetrito_32.set('fieldImages', {'fid': '', 'cod_imovel': '', 'uf': '', 'municipio': '', 'bioma': '', 'temas_ambi': '', 'modulos_ru': '', 'sobreposic': '', 'sobreposi0': '', 'sobreposi1': '', 'sobreposi2': '', 'sobreposi3': '', 'tipo_imove': '', 'situacao_a': '', 'status_imo': '', 'nu_retific': '', 'dt_atualiz': '', 'dt_criacao': '', 'nu_area_im': '', 'Tema': '', });
lyr_VegetaoNativa_33.set('fieldImages', {'fid': '', 'cod_imovel': '', 'uf': '', 'municipio': '', 'bioma': '', 'temas_ambi': '', 'modulos_ru': '', 'sobreposic': '', 'sobreposi0': '', 'sobreposi1': '', 'sobreposi2': '', 'sobreposi3': '', 'tipo_imove': '', 'situacao_a': '', 'status_imo': '', 'nu_retific': '', 'dt_atualiz': '', 'dt_criacao': '', 'nu_area_im': '', 'Tema': '', });
lyr_APP_34.set('fieldImages', {'fid': 'TextEdit', 'cod_imovel': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'bioma': 'TextEdit', 'temas_ambi': 'TextEdit', 'modulos_ru': 'TextEdit', 'sobreposic': 'TextEdit', 'sobreposi0': 'TextEdit', 'sobreposi1': 'TextEdit', 'sobreposi2': 'TextEdit', 'sobreposi3': 'TextEdit', 'tipo_imove': 'TextEdit', 'situacao_a': 'TextEdit', 'status_imo': 'TextEdit', 'nu_retific': 'Range', 'dt_atualiz': 'DateTime', 'dt_criacao': 'DateTime', 'nu_area_im': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Tema': 'TextEdit', 'TemaSigla': 'TextEdit', });
lyr_Viriofaces_2.set('fieldLabels', {'fid': 'hidden field', 'CD_SETOR': 'no label', 'CD_QUADRA': 'no label', 'CD_FACE': 'no label', 'Nome _Logradouro': 'no label', });
lyr_Virioeixos_3.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'no label', 'surface': 'hidden field', 'ref': 'hidden field', 'tunnel': 'hidden field', 'bridge': 'hidden field', 'level': 'hidden field', 'fid_2': 'hidden field', 'OBJECTID_1': 'hidden field', 'MUNICN': 'hidden field', 'REGGOV': 'hidden field', 'cd7': 'hidden field', 'cd6': 'hidden field', 'AREA_KM2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Fluvialdrenagem_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_LimiteMunicipal_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'MUNICN': 'no label', 'REGGOV': 'no label', 'cd7': 'no label', 'cd6': 'no label', 'AREA_KM2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RedeColetoraRioMais2025_6.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'comp': 'inline label - visible with data', 'TT_DIAM': 'inline label - visible with data', 'TT_TIPO_RE': 'inline label - visible with data', 'TT_MATERIA': 'inline label - visible with data', 'TT_CU_ID': 'inline label - visible with data', 'TT_CU_OID': 'inline label - visible with data', 'TT_ZEL_ID': 'inline label - visible with data', 'Diâmetro': 'inline label - visible with data', });
lyr_RedeColetoraPALPMRO_7.set('fieldLabels', {'fid': 'hidden field', 'Área': 'no label', 'Obs': 'hidden field', });
lyr_LinhasdeRecalqueRioMais2025_8.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Comprimento': 'inline label - visible with data', });
lyr_PoosdeVisitaRioMais2025_9.set('fieldLabels', {'fid': 'hidden field', 'PR_TIPO_RE': 'inline label - visible with data', 'PR_ZET_ID': 'inline label - visible with data', 'PR_BA_ID': 'inline label - visible with data', 'DIR': 'inline label - visible with data', });
lyr_AdutorasRioMais2024_10.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Diâmetro': 'inline label - visible with data', 'Notas': 'inline label - visible with data', });
lyr_ReservatriosRioMais2024_11.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_Loteamentos_12.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_reasPblicas_13.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'hidden field', 'Descrição': 'header label - visible with data', 'Indice': 'hidden field', 'Especie': 'header label - visible with data', 'Tipo': 'hidden field', });
lyr_INCRASIGEFImveisRurais_14.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'cd_sipra': 'hidden field', 'nome_projeto': 'no label', 'municipio': 'hidden field', 'area_hectare_declarada': 'hidden field', 'capacidade': 'hidden field', 'num_familias': 'hidden field', 'fase': 'hidden field', 'data_de_criacao': 'hidden field', 'forma_obtencao': 'hidden field', 'data_obtencao': 'hidden field', 'area_calc_ha': 'hidden field', 'sr': 'hidden field', 'descricao_fase': 'hidden field', 'base_INCRA': 'hidden field', 'id': 'hidden field', 'parcela_codigo': 'hidden field', 'rt': 'hidden field', 'art': 'hidden field', 'situacao_informada': 'hidden field', 'codigo_imovel': 'hidden field', 'data_submissao': 'hidden field', 'data_aprovacao': 'hidden field', 'status': 'hidden field', 'nome_area': 'inline label - visible with data', 'registro_matricula': 'inline label - visible with data', 'registro_data': 'hidden field', 'codigo_municipio': 'hidden field', 'id1': 'hidden field', 'num_processo': 'hidden field', 'num_certificacao': 'hidden field', 'data_certificacao': 'hidden field', 'qtd_area_peca_tecnica': 'hidden field', 'cod_profissional_credenciado': 'hidden field', 'cod_imovel_rural': 'hidden field', 'nome_imovel': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Tema': 'hidden field', 'TemaSigla': 'hidden field', });
lyr_MMASICARImveisRurais_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'no label', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambientais': 'hidden field', 'modulos_rurais': 'hidden field', 'sobreposicao_area_indigena': 'hidden field', 'sobreposicao_unidade_conservacao': 'hidden field', 'sobreposicao_quilombo': 'hidden field', 'sobreposicao_area_embargada': 'hidden field', 'sobreposicao_terras_da_uniao': 'hidden field', 'tipo_imovel': 'hidden field', 'situacao_analise': 'hidden field', 'status_imovel': 'hidden field', 'nu_retificacao': 'hidden field', 'dt_atualizacao': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_imovel': 'hidden field', 'Tipo_CamadaOriginalKML': 'hidden field', });
lyr_RiscoDeslizamento_16.set('fieldLabels', {'fid': 'hidden field', });
lyr_reasAlagveis_17.set('fieldLabels', {'fid': 'no label', 'Levantamento': 'no label', });
lyr_ZEIMA1_18.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'no label', 'ParametrosHTML': 'hidden field', 'DescricaoHTML': 'no label', });
lyr_ZoneamentoLC902023_19.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'no label', });
lyr_ReBioZonadeAmortecimento_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'no label', });
lyr_ReBio_21.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'no label', });
lyr_APABaciadoRioSoJoo_22.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'docleg_id': 'hidden field', 'uc_id': 'hidden field', 'cd_cnuc': 'hidden field', 'wdpa_pid': 'hidden field', 'nome_uc': 'no label', 'cria_ano': 'hidden field', 'cria_ato': 'hidden field', 'outro_ato': 'hidden field', 'pl_manejo': 'hidden field', 'co_gestor': 'header label - always visible', 'quali_pol': 'hidden field', 'ppgr': 'hidden field', 'ha_total': 'hidden field', 'ha_ato': 'hidden field', 'esfera': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'org_gestor': 'hidden field', 'grupo': 'hidden field', 'categoria': 'hidden field', 'cat_iucn': 'hidden field', 'amazonia': 'hidden field', 'caatinga': 'hidden field', 'cerrado': 'hidden field', 'matlantica': 'hidden field', 'pampa': 'hidden field', 'pantanal': 'hidden field', 'marinho': 'hidden field', 'situacao': 'hidden field', 'limite': 'hidden field', });
lyr_ParquedosPssaros_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ARIEItapebussusZonaAmortecimento_24.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Nome': 'no label', 'Area_ha': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'area_ha_1': 'hidden field', 'Sigla': 'hidden field', 'Name': 'hidden field', 'Parametros': 'no label', 'Link': 'no label', });
lyr_ARIEItapebussus_25.set('fieldLabels', {'fid': 'hidden field', 'area_ha': 'hidden field', 'Zona': 'hidden field', 'Sigla': 'hidden field', 'Name': 'no label', 'Parametros': 'no label', 'Link': 'no label', });
lyr_MNCostesRochosos_26.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Zona': 'hidden field', 'HTML_Pag_Desc': 'no label', });
lyr_APALagoadeIriry_27.set('fieldLabels', {'fid': 'hidden field', 'area_ha': 'hidden field', 'Zona': 'no label', 'Sigla': 'hidden field', 'PaginaHTML': 'no label', });
lyr_reaConsolidada_28.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'Tema': 'no label', });
lyr_Pousio_29.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'Tema': 'no label', });
lyr_ReservaLegal_30.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Tema': 'no label', 'TemaSigla': 'hidden field', });
lyr_ServidoAdministrativa_31.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Tema': 'no label', 'TemaSigla': 'hidden field', });
lyr_UsoRetrito_32.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'Tema': 'no label', });
lyr_VegetaoNativa_33.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'hidden field', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'Tema': 'no label', });
lyr_APP_34.set('fieldLabels', {'fid': 'hidden field', 'cod_imovel': 'hidden field', 'uf': 'hidden field', 'municipio': 'hidden field', 'bioma': 'hidden field', 'temas_ambi': 'hidden field', 'modulos_ru': 'hidden field', 'sobreposic': 'hidden field', 'sobreposi0': 'hidden field', 'sobreposi1': 'no label', 'sobreposi2': 'hidden field', 'sobreposi3': 'hidden field', 'tipo_imove': 'hidden field', 'situacao_a': 'hidden field', 'status_imo': 'hidden field', 'nu_retific': 'hidden field', 'dt_atualiz': 'hidden field', 'dt_criacao': 'hidden field', 'nu_area_im': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Tema': 'no label', 'TemaSigla': 'hidden field', });
lyr_APP_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
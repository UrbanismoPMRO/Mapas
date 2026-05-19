ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([185875.832586, 7504583.705434, 208799.332586, 7521495.872101]);
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
var format_RiscoDeslizamento_3 = new ol.format.GeoJSON();
var features_RiscoDeslizamento_3 = format_RiscoDeslizamento_3.readFeatures(json_RiscoDeslizamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RiscoDeslizamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiscoDeslizamento_3.addFeatures(features_RiscoDeslizamento_3);
var lyr_RiscoDeslizamento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiscoDeslizamento_3, 
                style: style_RiscoDeslizamento_3,
                popuplayertitle: 'Risco Deslizamento',
                interactive: false,
                title: '<img src="styles/legend/RiscoDeslizamento_3.png" /> Risco Deslizamento'
            });
var format_reasAlagveis_4 = new ol.format.GeoJSON();
var features_reasAlagveis_4 = format_reasAlagveis_4.readFeatures(json_reasAlagveis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAlagveis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAlagveis_4.addFeatures(features_reasAlagveis_4);
var lyr_reasAlagveis_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAlagveis_4, 
                style: style_reasAlagveis_4,
                popuplayertitle: 'Áreas Alagáveis',
                interactive: false,
                title: '<img src="styles/legend/reasAlagveis_4.png" /> Áreas Alagáveis'
            });
var format_ReBio_5 = new ol.format.GeoJSON();
var features_ReBio_5 = format_ReBio_5.readFeatures(json_ReBio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBio_5.addFeatures(features_ReBio_5);
var lyr_ReBio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBio_5, 
                style: style_ReBio_5,
                popuplayertitle: 'ReBio',
                interactive: false,
    title: 'ReBio<br />\
    <img src="styles/legend/ReBio_5_0.png" /> Adequação<br />\
    <img src="styles/legend/ReBio_5_1.png" /> Uso Moderado<br />\
    <img src="styles/legend/ReBio_5_2.png" /> Amortecimento<br />\
    <img src="styles/legend/ReBio_5_3.png" /> Conservação<br />\
    <img src="styles/legend/ReBio_5_4.png" /> Infraestrutura<br />\
    <img src="styles/legend/ReBio_5_5.png" /> Uso Divergente<br />\
    <img src="styles/legend/ReBio_5_6.png" /> Difer Interess Públ<br />\
    <img src="styles/legend/ReBio_5_7.png" /> Amortecimento<br />' });
var format_ReBioZonadeAmortecimento_6 = new ol.format.GeoJSON();
var features_ReBioZonadeAmortecimento_6 = format_ReBioZonadeAmortecimento_6.readFeatures(json_ReBioZonadeAmortecimento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ReBioZonadeAmortecimento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReBioZonadeAmortecimento_6.addFeatures(features_ReBioZonadeAmortecimento_6);
var lyr_ReBioZonadeAmortecimento_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReBioZonadeAmortecimento_6, 
                style: style_ReBioZonadeAmortecimento_6,
                popuplayertitle: 'ReBio - Zona de Amortecimento',
                interactive: false,
                title: '<img src="styles/legend/ReBioZonadeAmortecimento_6.png" /> ReBio - Zona de Amortecimento'
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
var format_reasdeEstudodeSombreamentoObrigatrio_8 = new ol.format.GeoJSON();
var features_reasdeEstudodeSombreamentoObrigatrio_8 = format_reasdeEstudodeSombreamentoObrigatrio_8.readFeatures(json_reasdeEstudodeSombreamentoObrigatrio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasdeEstudodeSombreamentoObrigatrio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeEstudodeSombreamentoObrigatrio_8.addFeatures(features_reasdeEstudodeSombreamentoObrigatrio_8);
var lyr_reasdeEstudodeSombreamentoObrigatrio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdeEstudodeSombreamentoObrigatrio_8, 
                style: style_reasdeEstudodeSombreamentoObrigatrio_8,
                popuplayertitle: 'Áreas de Estudo de Sombreamento Obrigatório',
                interactive: false,
    title: 'Áreas de Estudo de Sombreamento Obrigatório<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_0.png" /> Até 9m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_1.png" /> 9m < h <= 18m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_2.png" /> 18m < h <= 27m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_3.png" /> 27m < h <= 36m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_4.png" /> 36m < h <= 45m<br />\
    <img src="styles/legend/reasdeEstudodeSombreamentoObrigatrio_8_5.png" /> Acim de 45m<br />' });
var format_Zoneamento2026Zonas_9 = new ol.format.GeoJSON();
var features_Zoneamento2026Zonas_9 = format_Zoneamento2026Zonas_9.readFeatures(json_Zoneamento2026Zonas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Zoneamento2026Zonas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento2026Zonas_9.addFeatures(features_Zoneamento2026Zonas_9);
var lyr_Zoneamento2026Zonas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento2026Zonas_9, 
                style: style_Zoneamento2026Zonas_9,
                popuplayertitle: 'Zoneamento 2026 - Zonas',
                interactive: true,
    title: 'Zoneamento 2026 - Zonas<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_0.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_1.png" /> Zona Residencial 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_2.png" /> Zona Residencial 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_3.png" /> Zona Residencial 3<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_4.png" /> Zona Residencial 4<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_5.png" /> Zona Residencial 5<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_6.png" /> Zona Residencial 6<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_7.png" /> Zona Residencial 7<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_8.png" /> Zona Residencial 8<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_9.png" /> Zona Residencial 9<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_10.png" /> Zona Residencial 10<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_11.png" /> Zona Residencial 11<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_12.png" /> Zona Residencial 12<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_13.png" /> Zona Residencial 13<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_14.png" /> Zona Residencial 14<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_15.png" /> Zona Central<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_16.png" /> Zona Turística 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_17.png" /> Zona Turística 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_18.png" /> Zona Turística 3<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_19.png" /> Zona Turística 4<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_20.png" /> Zona Industrial<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_21.png" /> Zona Industrial Comercial<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_22.png" /> Zona de Expansão Urbana Controlada 1<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_23.png" /> Zona de Expansão Urbana Controlada 2<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_24.png" /> Zona de Expansão Urbana Prioritária<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_25.png" /> Zona de Expansão Urbana Restrita<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_26.png" /> Zona de Expansão Urbano-Rural<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_27.png" /> Zona de Amortecimento da ZEU<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_28.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_29.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_30.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_31.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_32.png" /> <br />\
    <img src="styles/legend/Zoneamento2026Zonas_9_33.png" /> <br />' });
var format_Zoneamento2026ZonasAxiais_10 = new ol.format.GeoJSON();
var features_Zoneamento2026ZonasAxiais_10 = format_Zoneamento2026ZonasAxiais_10.readFeatures(json_Zoneamento2026ZonasAxiais_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Zoneamento2026ZonasAxiais_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento2026ZonasAxiais_10.addFeatures(features_Zoneamento2026ZonasAxiais_10);
var lyr_Zoneamento2026ZonasAxiais_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento2026ZonasAxiais_10, 
                style: style_Zoneamento2026ZonasAxiais_10,
                popuplayertitle: 'Zoneamento 2026 - Zonas Axiais',
                interactive: true,
    title: 'Zoneamento 2026 - Zonas Axiais<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_0.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_1.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_2.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_3.png" /> Zona Comercial e Serviço 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_4.png" /> Zona Comercial e Serviço 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_5.png" /> Zona Comercial e Serviço 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_6.png" /> <br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_7.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_8.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_9.png" /> Zona Uso Misto  Parque Linear<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_10.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_11.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_12.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_13.png" /> Zona Comercial e Serviço1<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_14.png" /> Zona Comercial e Serviço2<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_15.png" /> Zona Comercial e Serviço3<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_16.png" /> TEMPORÁRIO<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_17.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_18.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/Zoneamento2026ZonasAxiais_10_19.png" /> Zona Uso Misto  Parque Linear<br />' });
var format_ZoneamentoAtualLC902023_11 = new ol.format.GeoJSON();
var features_ZoneamentoAtualLC902023_11 = format_ZoneamentoAtualLC902023_11.readFeatures(json_ZoneamentoAtualLC902023_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoAtualLC902023_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoAtualLC902023_11.addFeatures(features_ZoneamentoAtualLC902023_11);
var lyr_ZoneamentoAtualLC902023_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoAtualLC902023_11, 
                style: style_ZoneamentoAtualLC902023_11,
                popuplayertitle: 'Zoneamento Atual (LC 90-2023)',
                interactive: true,
    title: 'Zoneamento Atual (LC 90-2023)<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_0.png" /> Área Protegida<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_1.png" /> ZC<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_2.png" /> ZR1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_3.png" /> ZR2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_4.png" /> ZR3<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_5.png" /> ZR4<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_6.png" /> ZR5<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_7.png" /> ZR6<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_8.png" /> ZR7<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_9.png" /> ZCS1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_10.png" /> ZCS2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_11.png" /> ZUM1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_12.png" /> ZUM2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_13.png" /> Zona Industrial 1<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_14.png" /> Zona Industrial 2<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_15.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_16.png" /> ZEU - Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoAtualLC902023_11_17.png" /> Rio das Ostras<br />' });
var group_ZoneamentoAtualLC902023 = new ol.layer.Group({
                                layers: [lyr_ZoneamentoAtualLC902023_11,],
                                fold: 'close',
                                title: 'Zoneamento Atual (LC 90-2023)'});
var group_ZonoamentoNovo2026 = new ol.layer.Group({
                                layers: [lyr_Zoneamento2026Zonas_9,lyr_Zoneamento2026ZonasAxiais_10,],
                                fold: 'close',
                                title: 'Zonoamento Novo (2026)'});
var group_Legislaes = new ol.layer.Group({
                                layers: [lyr_ReBio_5,lyr_ReBioZonadeAmortecimento_6,lyr_LinhadeLimitedeSombreamento_7,lyr_reasdeEstudodeSombreamentoObrigatrio_8,],
                                fold: 'close',
                                title: 'Legislações'});
var group_Ambiental = new ol.layer.Group({
                                layers: [lyr_RiscoDeslizamento_3,lyr_reasAlagveis_4,],
                                fold: 'close',
                                title: 'Ambiental'});

lyr_Mapa_0.setVisible(false);lyr_Satlite_1.setVisible(true);lyr_LimiteMunicipal_2.setVisible(true);lyr_RiscoDeslizamento_3.setVisible(false);lyr_reasAlagveis_4.setVisible(false);lyr_ReBio_5.setVisible(false);lyr_ReBioZonadeAmortecimento_6.setVisible(false);lyr_LinhadeLimitedeSombreamento_7.setVisible(false);lyr_reasdeEstudodeSombreamentoObrigatrio_8.setVisible(false);lyr_Zoneamento2026Zonas_9.setVisible(true);lyr_Zoneamento2026ZonasAxiais_10.setVisible(true);lyr_ZoneamentoAtualLC902023_11.setVisible(false);
var layersList = [lyr_Mapa_0,lyr_Satlite_1,lyr_LimiteMunicipal_2,group_Ambiental,group_Legislaes,group_ZonoamentoNovo2026,group_ZoneamentoAtualLC902023];
lyr_LimiteMunicipal_2.set('fieldAliases', {'fid': 'fid', });
lyr_RiscoDeslizamento_3.set('fieldAliases', {'fid': 'fid', });
lyr_reasAlagveis_4.set('fieldAliases', {'fid': 'fid', 'Levantamento': 'Levantamento', });
lyr_ReBio_5.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'AREA': 'AREA', });
lyr_ReBioZonadeAmortecimento_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldAliases', {'fid': 'fid', 'Alt_Max': 'Altura Máxima', 'Nome': 'Nome', });
lyr_reasdeEstudodeSombreamentoObrigatrio_8.set('fieldAliases', {'fid': 'fid', 'Faixa': 'Faixa', 'LimAlt': 'Limite de Altura', 'Setor': 'Setor', 'Cod_Faixa': 'Cod_Faixa', });
lyr_Zoneamento2026Zonas_9.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Nome': 'Nome', 'HTML': 'HTML', 'OBS': 'OBS', 'Status': 'Status', 'Status_Data': 'Data da alteração', 'Status_Resp': 'Respons. alteração', 'Revisao': 'Revisão', 'parametros': 'Parâmetros', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_Zoneamento2026ZonasAxiais_10.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'OBS': 'OBS', 'TITULO': 'TITULO', 'Revisao': 'Revisão', 'Revisao_Data': 'Data da Revisão', 'Revisao_Resp': 'Responsável Revisão', 'Verificar': 'Verificar', 'T_Eixo': 'Tipo Eixo', 'parametros': 'Parâmetros', 'Nome': 'Nome', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_ZoneamentoAtualLC902023_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Zona': 'Zona', 'Parâmetros': 'parametros', 'ParametrosHTML': 'ParametrosHTML', 'Nome': 'Nome', 'ZonaNome': 'ZonaNome', 'Testada': 'Testada', 'Lote Mínimo': 'Lote Mínimo', 'T.O.': 'T.O.', 'C.A.': 'C.A.', 'Altura': 'Altura', });
lyr_LimiteMunicipal_2.set('fieldImages', {'fid': '', });
lyr_RiscoDeslizamento_3.set('fieldImages', {'fid': '', });
lyr_reasAlagveis_4.set('fieldImages', {'fid': '', 'Levantamento': '', });
lyr_ReBio_5.set('fieldImages', {'fid': 'TextEdit', 'Zona': '', 'AREA': '', });
lyr_ReBioZonadeAmortecimento_6.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldImages', {'fid': 'TextEdit', 'Alt_Max': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasdeEstudodeSombreamentoObrigatrio_8.set('fieldImages', {'fid': 'TextEdit', 'Faixa': 'TextEdit', 'LimAlt': 'TextEdit', 'Setor': 'TextEdit', 'Cod_Faixa': 'Range', });
lyr_Zoneamento2026Zonas_9.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Nome': 'TextEdit', 'HTML': 'TextEdit', 'OBS': 'TextEdit', 'Status': 'Range', 'Status_Data': 'DateTime', 'Status_Resp': 'TextEdit', 'Revisao': 'TextEdit', 'parametros': 'TextEdit', 'ZonaNome': '', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_Zoneamento2026ZonasAxiais_10.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'OBS': 'TextEdit', 'TITULO': 'TextEdit', 'Revisao': 'CheckBox', 'Revisao_Data': 'DateTime', 'Revisao_Resp': 'TextEdit', 'Verificar': 'CheckBox', 'T_Eixo': 'TextEdit', 'parametros': 'TextEdit', 'Nome': '', 'ZonaNome': '', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_ZoneamentoAtualLC902023_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Zona': 'TextEdit', 'Parâmetros': 'TextEdit', 'ParametrosHTML': 'TextEdit', 'Nome': 'TextEdit', 'ZonaNome': 'TextEdit', 'Testada': 'TextEdit', 'Lote Mínimo': 'TextEdit', 'T.O.': 'TextEdit', 'C.A.': 'TextEdit', 'Altura': 'TextEdit', });
lyr_LimiteMunicipal_2.set('fieldLabels', {'fid': 'no label', });
lyr_RiscoDeslizamento_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_reasAlagveis_4.set('fieldLabels', {'fid': 'hidden field', 'Levantamento': 'hidden field', });
lyr_ReBio_5.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'no label', 'AREA': 'no label', });
lyr_ReBioZonadeAmortecimento_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_LinhadeLimitedeSombreamento_7.set('fieldLabels', {'fid': 'no label', 'Alt_Max': 'no label', 'Nome': 'no label', });
lyr_reasdeEstudodeSombreamentoObrigatrio_8.set('fieldLabels', {'fid': 'hidden field', 'Faixa': 'no label', 'LimAlt': 'hidden field', 'Setor': 'hidden field', 'Cod_Faixa': 'hidden field', });
lyr_Zoneamento2026Zonas_9.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'Nome': 'hidden field', 'HTML': 'hidden field', 'OBS': 'hidden field', 'Status': 'hidden field', 'Status_Data': 'hidden field', 'Status_Resp': 'hidden field', 'Revisao': 'hidden field', 'parametros': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_Zoneamento2026ZonasAxiais_10.set('fieldLabels', {'fid': 'hidden field', 'Zona': 'hidden field', 'OBS': 'hidden field', 'TITULO': 'hidden field', 'Revisao': 'hidden field', 'Revisao_Data': 'hidden field', 'Revisao_Resp': 'hidden field', 'Verificar': 'hidden field', 'T_Eixo': 'hidden field', 'parametros': 'hidden field', 'Nome': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_ZoneamentoAtualLC902023_11.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Zona': 'hidden field', 'Parâmetros': 'hidden field', 'ParametrosHTML': 'hidden field', 'Nome': 'hidden field', 'ZonaNome': 'no label', 'Testada': 'inline label - visible with data', 'Lote Mínimo': 'inline label - visible with data', 'T.O.': 'inline label - visible with data', 'C.A.': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_ZoneamentoAtualLC902023_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
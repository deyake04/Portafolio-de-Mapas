var wms_layers = [];

var format_ReginVIISur_etiquetas_0 = new ol.format.GeoJSON();
var features_ReginVIISur_etiquetas_0 = format_ReginVIISur_etiquetas_0.readFeatures(json_ReginVIISur_etiquetas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIISur_etiquetas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIISur_etiquetas_0.addFeatures(features_ReginVIISur_etiquetas_0);
var lyr_ReginVIISur_etiquetas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIISur_etiquetas_0, 
                style: style_ReginVIISur_etiquetas_0,
                popuplayertitle: 'Región VII Sur_etiquetas',
                interactive: true,
                title: '<img src="styles/legend/ReginVIISur_etiquetas_0.png" /> Región VII Sur_etiquetas'
            });
var format_ReginVIOriente_etiqueta_1 = new ol.format.GeoJSON();
var features_ReginVIOriente_etiqueta_1 = format_ReginVIOriente_etiqueta_1.readFeatures(json_ReginVIOriente_etiqueta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIOriente_etiqueta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIOriente_etiqueta_1.addFeatures(features_ReginVIOriente_etiqueta_1);
var lyr_ReginVIOriente_etiqueta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIOriente_etiqueta_1, 
                style: style_ReginVIOriente_etiqueta_1,
                popuplayertitle: 'Región VI Oriente_etiqueta',
                interactive: true,
                title: '<img src="styles/legend/ReginVIOriente_etiqueta_1.png" /> Región VI Oriente_etiqueta'
            });
var format_ReginVNoreste_etiquetas_2 = new ol.format.GeoJSON();
var features_ReginVNoreste_etiquetas_2 = format_ReginVNoreste_etiquetas_2.readFeatures(json_ReginVNoreste_etiquetas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVNoreste_etiquetas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVNoreste_etiquetas_2.addFeatures(features_ReginVNoreste_etiquetas_2);
var lyr_ReginVNoreste_etiquetas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVNoreste_etiquetas_2, 
                style: style_ReginVNoreste_etiquetas_2,
                popuplayertitle: 'Región V Noreste_etiquetas',
                interactive: true,
                title: '<img src="styles/legend/ReginVNoreste_etiquetas_2.png" /> Región V Noreste_etiquetas'
            });
var format_ReginIVLitoralCentro_etiquetas_3 = new ol.format.GeoJSON();
var features_ReginIVLitoralCentro_etiquetas_3 = format_ReginIVLitoralCentro_etiquetas_3.readFeatures(json_ReginIVLitoralCentro_etiquetas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIVLitoralCentro_etiquetas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIVLitoralCentro_etiquetas_3.addFeatures(features_ReginIVLitoralCentro_etiquetas_3);
var lyr_ReginIVLitoralCentro_etiquetas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIVLitoralCentro_etiquetas_3, 
                style: style_ReginIVLitoralCentro_etiquetas_3,
                popuplayertitle: 'Región IV Litoral Centro_etiquetas',
                interactive: true,
                title: '<img src="styles/legend/ReginIVLitoralCentro_etiquetas_3.png" /> Región IV Litoral Centro_etiquetas'
            });
var format_ReginIIICentro_etiqueta_4 = new ol.format.GeoJSON();
var features_ReginIIICentro_etiqueta_4 = format_ReginIIICentro_etiqueta_4.readFeatures(json_ReginIIICentro_etiqueta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIIICentro_etiqueta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIIICentro_etiqueta_4.addFeatures(features_ReginIIICentro_etiqueta_4);
var lyr_ReginIIICentro_etiqueta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIIICentro_etiqueta_4, 
                style: style_ReginIIICentro_etiqueta_4,
                popuplayertitle: 'Región III Centro_etiqueta',
                interactive: true,
                title: '<img src="styles/legend/ReginIIICentro_etiqueta_4.png" /> Región III Centro_etiqueta'
            });
var format_ReginIINoroeste_etiqueta_5 = new ol.format.GeoJSON();
var features_ReginIINoroeste_etiqueta_5 = format_ReginIINoroeste_etiqueta_5.readFeatures(json_ReginIINoroeste_etiqueta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIINoroeste_etiqueta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIINoroeste_etiqueta_5.addFeatures(features_ReginIINoroeste_etiqueta_5);
var lyr_ReginIINoroeste_etiqueta_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIINoroeste_etiqueta_5, 
                style: style_ReginIINoroeste_etiqueta_5,
                popuplayertitle: 'Región II Noroeste_etiqueta',
                interactive: true,
                title: '<img src="styles/legend/ReginIINoroeste_etiqueta_5.png" /> Región II Noroeste_etiqueta'
            });
var format_ReginIPoniente_etiqueta_6 = new ol.format.GeoJSON();
var features_ReginIPoniente_etiqueta_6 = format_ReginIPoniente_etiqueta_6.readFeatures(json_ReginIPoniente_etiqueta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIPoniente_etiqueta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIPoniente_etiqueta_6.addFeatures(features_ReginIPoniente_etiqueta_6);
var lyr_ReginIPoniente_etiqueta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIPoniente_etiqueta_6, 
                style: style_ReginIPoniente_etiqueta_6,
                popuplayertitle: 'Región I Poniente_etiqueta',
                interactive: true,
                title: '<img src="styles/legend/ReginIPoniente_etiqueta_6.png" /> Región I Poniente_etiqueta'
            });

        var lyr_GOOGLE_7 = new ol.layer.Tile({
            'title': 'GOOGLE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Centroides_8 = new ol.format.GeoJSON();
var features_Centroides_8 = format_Centroides_8.readFeatures(json_Centroides_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroides_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroides_8.addFeatures(features_Centroides_8);
var lyr_Centroides_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroides_8, 
                style: style_Centroides_8,
                popuplayertitle: 'Centroides',
                interactive: true,
                title: '<img src="styles/legend/Centroides_8.png" /> Centroides'
            });
var format_Aeropuertos_Mex_2024_9 = new ol.format.GeoJSON();
var features_Aeropuertos_Mex_2024_9 = format_Aeropuertos_Mex_2024_9.readFeatures(json_Aeropuertos_Mex_2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_Mex_2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_Mex_2024_9.addFeatures(features_Aeropuertos_Mex_2024_9);
var lyr_Aeropuertos_Mex_2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aeropuertos_Mex_2024_9, 
                style: style_Aeropuertos_Mex_2024_9,
                popuplayertitle: 'Aeropuertos_Mex_2024',
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_Mex_2024_9.png" /> Aeropuertos_Mex_2024'
            });
var format_puertos_peninsula_10 = new ol.format.GeoJSON();
var features_puertos_peninsula_10 = format_puertos_peninsula_10.readFeatures(json_puertos_peninsula_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puertos_peninsula_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puertos_peninsula_10.addFeatures(features_puertos_peninsula_10);
var lyr_puertos_peninsula_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puertos_peninsula_10, 
                style: style_puertos_peninsula_10,
                popuplayertitle: 'puertos_peninsula',
                interactive: true,
                title: '<img src="styles/legend/puertos_peninsula_10.png" /> puertos_peninsula'
            });
var format_ReginIPoniente_11 = new ol.format.GeoJSON();
var features_ReginIPoniente_11 = format_ReginIPoniente_11.readFeatures(json_ReginIPoniente_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIPoniente_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIPoniente_11.addFeatures(features_ReginIPoniente_11);
var lyr_ReginIPoniente_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIPoniente_11, 
                style: style_ReginIPoniente_11,
                popuplayertitle: 'Región I Poniente',
                interactive: true,
                title: '<img src="styles/legend/ReginIPoniente_11.png" /> Región I Poniente'
            });
var format_ReginIINoroeste_12 = new ol.format.GeoJSON();
var features_ReginIINoroeste_12 = format_ReginIINoroeste_12.readFeatures(json_ReginIINoroeste_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIINoroeste_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIINoroeste_12.addFeatures(features_ReginIINoroeste_12);
var lyr_ReginIINoroeste_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIINoroeste_12, 
                style: style_ReginIINoroeste_12,
                popuplayertitle: 'Región II Noroeste',
                interactive: true,
                title: '<img src="styles/legend/ReginIINoroeste_12.png" /> Región II Noroeste'
            });
var format_ReginIIICentro_13 = new ol.format.GeoJSON();
var features_ReginIIICentro_13 = format_ReginIIICentro_13.readFeatures(json_ReginIIICentro_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIIICentro_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIIICentro_13.addFeatures(features_ReginIIICentro_13);
var lyr_ReginIIICentro_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIIICentro_13, 
                style: style_ReginIIICentro_13,
                popuplayertitle: 'Región III Centro',
                interactive: true,
                title: '<img src="styles/legend/ReginIIICentro_13.png" /> Región III Centro'
            });
var format_ReginIVLitoralCentro_14 = new ol.format.GeoJSON();
var features_ReginIVLitoralCentro_14 = format_ReginIVLitoralCentro_14.readFeatures(json_ReginIVLitoralCentro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIVLitoralCentro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIVLitoralCentro_14.addFeatures(features_ReginIVLitoralCentro_14);
var lyr_ReginIVLitoralCentro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIVLitoralCentro_14, 
                style: style_ReginIVLitoralCentro_14,
                popuplayertitle: 'Región IV Litoral Centro',
                interactive: true,
                title: '<img src="styles/legend/ReginIVLitoralCentro_14.png" /> Región IV Litoral Centro'
            });
var format_ReginVNoreste_15 = new ol.format.GeoJSON();
var features_ReginVNoreste_15 = format_ReginVNoreste_15.readFeatures(json_ReginVNoreste_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVNoreste_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVNoreste_15.addFeatures(features_ReginVNoreste_15);
var lyr_ReginVNoreste_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVNoreste_15, 
                style: style_ReginVNoreste_15,
                popuplayertitle: 'Región V Noreste',
                interactive: true,
                title: '<img src="styles/legend/ReginVNoreste_15.png" /> Región V Noreste'
            });
var format_ReginVIOriente_16 = new ol.format.GeoJSON();
var features_ReginVIOriente_16 = format_ReginVIOriente_16.readFeatures(json_ReginVIOriente_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIOriente_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIOriente_16.addFeatures(features_ReginVIOriente_16);
var lyr_ReginVIOriente_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIOriente_16, 
                style: style_ReginVIOriente_16,
                popuplayertitle: 'Región VI Oriente',
                interactive: true,
                title: '<img src="styles/legend/ReginVIOriente_16.png" /> Región VI Oriente'
            });
var format_ReginVIISur_17 = new ol.format.GeoJSON();
var features_ReginVIISur_17 = format_ReginVIISur_17.readFeatures(json_ReginVIISur_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIISur_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIISur_17.addFeatures(features_ReginVIISur_17);
var lyr_ReginVIISur_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIISur_17, 
                style: style_ReginVIISur_17,
                popuplayertitle: 'Región VII Sur',
                interactive: true,
                title: '<img src="styles/legend/ReginVIISur_17.png" /> Región VII Sur'
            });
var format_TrenMaya_18 = new ol.format.GeoJSON();
var features_TrenMaya_18 = format_TrenMaya_18.readFeatures(json_TrenMaya_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrenMaya_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrenMaya_18.addFeatures(features_TrenMaya_18);
var lyr_TrenMaya_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrenMaya_18, 
                style: style_TrenMaya_18,
                popuplayertitle: 'Tren Maya',
                interactive: true,
                title: '<img src="styles/legend/TrenMaya_18.png" /> Tren Maya'
            });
var format_Denue_Empresas_Grandes_19 = new ol.format.GeoJSON();
var features_Denue_Empresas_Grandes_19 = format_Denue_Empresas_Grandes_19.readFeatures(json_Denue_Empresas_Grandes_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denue_Empresas_Grandes_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denue_Empresas_Grandes_19.addFeatures(features_Denue_Empresas_Grandes_19);
cluster_Denue_Empresas_Grandes_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Denue_Empresas_Grandes_19
});
var lyr_Denue_Empresas_Grandes_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Denue_Empresas_Grandes_19, 
                style: style_Denue_Empresas_Grandes_19,
                popuplayertitle: 'Denue_Empresas_Grandes',
                interactive: true,
    title: 'Denue_Empresas_Grandes<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_0.png" /> 11<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_1.png" /> 22<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_2.png" /> 23<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_3.png" /> 31<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_4.png" /> 32<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_5.png" /> 33<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_6.png" /> 43<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_7.png" /> 46<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_8.png" /> 48<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_9.png" /> 49<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_10.png" /> 51<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_11.png" /> 52<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_12.png" /> 53<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_13.png" /> 54<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_14.png" /> 56<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_15.png" /> 61<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_16.png" /> 62<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_17.png" /> 71<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_18.png" /> 72<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_19.png" /> 81<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_19_20.png" /> 93<br />' });

lyr_ReginVIISur_etiquetas_0.setVisible(true);lyr_ReginVIOriente_etiqueta_1.setVisible(true);lyr_ReginVNoreste_etiquetas_2.setVisible(true);lyr_ReginIVLitoralCentro_etiquetas_3.setVisible(true);lyr_ReginIIICentro_etiqueta_4.setVisible(true);lyr_ReginIINoroeste_etiqueta_5.setVisible(true);lyr_ReginIPoniente_etiqueta_6.setVisible(true);lyr_GOOGLE_7.setVisible(true);lyr_Centroides_8.setVisible(true);lyr_Aeropuertos_Mex_2024_9.setVisible(true);lyr_puertos_peninsula_10.setVisible(true);lyr_ReginIPoniente_11.setVisible(true);lyr_ReginIINoroeste_12.setVisible(true);lyr_ReginIIICentro_13.setVisible(true);lyr_ReginIVLitoralCentro_14.setVisible(true);lyr_ReginVNoreste_15.setVisible(true);lyr_ReginVIOriente_16.setVisible(true);lyr_ReginVIISur_17.setVisible(true);lyr_TrenMaya_18.setVisible(true);lyr_Denue_Empresas_Grandes_19.setVisible(true);
var layersList = [lyr_ReginVIISur_etiquetas_0,lyr_ReginVIOriente_etiqueta_1,lyr_ReginVNoreste_etiquetas_2,lyr_ReginIVLitoralCentro_etiquetas_3,lyr_ReginIIICentro_etiqueta_4,lyr_ReginIINoroeste_etiqueta_5,lyr_ReginIPoniente_etiqueta_6,lyr_GOOGLE_7,lyr_Centroides_8,lyr_Aeropuertos_Mex_2024_9,lyr_puertos_peninsula_10,lyr_ReginIPoniente_11,lyr_ReginIINoroeste_12,lyr_ReginIIICentro_13,lyr_ReginIVLitoralCentro_14,lyr_ReginVNoreste_15,lyr_ReginVIOriente_16,lyr_ReginVIISur_17,lyr_TrenMaya_18,lyr_Denue_Empresas_Grandes_19];
lyr_ReginVIISur_etiquetas_0.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginVIOriente_etiqueta_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginVNoreste_etiquetas_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginIVLitoralCentro_etiquetas_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginIIICentro_etiqueta_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginIINoroeste_etiqueta_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_ReginIPoniente_etiqueta_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', 'super': 'super', 'nom_reg': 'nom_reg', });
lyr_Centroides_8.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'area': 'area', });
lyr_Aeropuertos_Mex_2024_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'fase': 'fase', 'operador': 'operador', 'elevation_': 'elevation_', 'iata_code': 'iata_code', 'home_link': 'home_link', 'wikipedia_': 'wikipedia_', 'pas_int_13': 'pas_int_13', 'pas_int_18': 'pas_int_18', 'pas_int_23': 'pas_int_23', 'pas_nat_13': 'pas_nat_13', 'pas_nat_18': 'pas_nat_18', 'pas_nat_23': 'pas_nat_23', 'pas_tot_13': 'pas_tot_13', 'pas_tot_18': 'pas_tot_18', 'pas_to_23': 'pas_to_23', 'carg_13': 'carg_13', 'carg_18': 'carg_18', 'carg_23': 'carg_23', });
lyr_puertos_peninsula_10.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'FASE': 'FASE', 'TIPO': 'TIPO', 'MOVIMIENTO': 'MOVIMIENTO', 'API': 'API', 'ADMINISTRA': 'ADMINISTRA', 'TIPO_INFRA': 'TIPO_INFRA', 'VOL_CARGA': 'VOL_CARGA', 'TIPO_CARGA': 'TIPO_CARGA', 'CRUCERO_1': 'CRUCERO_1', 'CATEGO': 'CATEGO', });
lyr_ReginIPoniente_11.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIINoroeste_12.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIIICentro_13.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIVLitoralCentro_14.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVNoreste_15.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVIOriente_16.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVIISur_17.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_TrenMaya_18.set('fieldAliases', {'Nombre': 'Nombre', 'Fase': 'Fase', 'Tipo': 'Tipo', 'Fecha': 'Fecha', 'Longitud': 'Longitud', 'DerechoVia': 'DerechoVia', 'Empresa': 'Empresa', 'Caracteris': 'Caracteris', 'Tramo': 'Tramo', 'long': 'long', });
lyr_Denue_Empresas_Grandes_19.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', 'pyme': 'pyme', 'sector': 'sector', 'tipo': 'tipo', 'region': 'region', });
lyr_ReginVIISur_etiquetas_0.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginVIOriente_etiqueta_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginVNoreste_etiquetas_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginIVLitoralCentro_etiquetas_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginIIICentro_etiqueta_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginIINoroeste_etiqueta_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_ReginIPoniente_etiqueta_6.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'super': 'TextEdit', 'nom_reg': 'TextEdit', });
lyr_Centroides_8.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'TextEdit', });
lyr_Aeropuertos_Mex_2024_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'fase': 'TextEdit', 'operador': 'TextEdit', 'elevation_': 'TextEdit', 'iata_code': 'TextEdit', 'home_link': 'TextEdit', 'wikipedia_': 'TextEdit', 'pas_int_13': 'TextEdit', 'pas_int_18': 'TextEdit', 'pas_int_23': 'TextEdit', 'pas_nat_13': 'TextEdit', 'pas_nat_18': 'TextEdit', 'pas_nat_23': 'TextEdit', 'pas_tot_13': 'TextEdit', 'pas_tot_18': 'TextEdit', 'pas_to_23': 'TextEdit', 'carg_13': 'TextEdit', 'carg_18': 'TextEdit', 'carg_23': 'TextEdit', });
lyr_puertos_peninsula_10.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'FASE': 'TextEdit', 'TIPO': 'TextEdit', 'MOVIMIENTO': 'TextEdit', 'API': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'TIPO_INFRA': 'TextEdit', 'VOL_CARGA': 'TextEdit', 'TIPO_CARGA': 'TextEdit', 'CRUCERO_1': 'TextEdit', 'CATEGO': 'TextEdit', });
lyr_ReginIPoniente_11.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIINoroeste_12.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIIICentro_13.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIVLitoralCentro_14.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVNoreste_15.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVIOriente_16.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVIISur_17.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_TrenMaya_18.set('fieldImages', {'Nombre': 'TextEdit', 'Fase': 'TextEdit', 'Tipo': 'TextEdit', 'Fecha': 'TextEdit', 'Longitud': 'TextEdit', 'DerechoVia': 'TextEdit', 'Empresa': 'TextEdit', 'Caracteris': 'TextEdit', 'Tramo': 'TextEdit', 'long': 'TextEdit', });
lyr_Denue_Empresas_Grandes_19.set('fieldImages', {'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'Range', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'tipo_v_e_1': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'tipo_v_e_2': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'tipo_v_e_3': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'Range', 'letra_ext': 'TextEdit', 'edificio': 'TextEdit', 'edificio_e': 'Range', 'numero_int': 'Range', 'letra_int': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'tipoCenCom': 'TextEdit', 'nom_CenCom': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'Range', 'cve_ent': 'TextEdit', 'entidad': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'Range', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', 'pyme': 'Range', 'sector': 'Range', 'tipo': 'TextEdit', 'region': 'Range', });
lyr_ReginVIISur_etiquetas_0.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginVIOriente_etiqueta_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginVNoreste_etiquetas_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginIVLitoralCentro_etiquetas_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginIIICentro_etiqueta_4.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginIINoroeste_etiqueta_5.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_ReginIPoniente_etiqueta_6.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', 'super': 'no label', 'nom_reg': 'no label', });
lyr_Centroides_8.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'area': 'no label', });
lyr_Aeropuertos_Mex_2024_9.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'fase': 'no label', 'operador': 'no label', 'elevation_': 'no label', 'iata_code': 'no label', 'home_link': 'no label', 'wikipedia_': 'no label', 'pas_int_13': 'no label', 'pas_int_18': 'no label', 'pas_int_23': 'no label', 'pas_nat_13': 'no label', 'pas_nat_18': 'no label', 'pas_nat_23': 'no label', 'pas_tot_13': 'no label', 'pas_tot_18': 'no label', 'pas_to_23': 'no label', 'carg_13': 'no label', 'carg_18': 'no label', 'carg_23': 'no label', });
lyr_puertos_peninsula_10.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'MUNICIPIO': 'no label', 'ESTADO': 'no label', 'FASE': 'no label', 'TIPO': 'no label', 'MOVIMIENTO': 'no label', 'API': 'no label', 'ADMINISTRA': 'no label', 'TIPO_INFRA': 'no label', 'VOL_CARGA': 'no label', 'TIPO_CARGA': 'no label', 'CRUCERO_1': 'no label', 'CATEGO': 'no label', });
lyr_ReginIPoniente_11.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIINoroeste_12.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIIICentro_13.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIVLitoralCentro_14.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVNoreste_15.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVIOriente_16.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVIISur_17.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_TrenMaya_18.set('fieldLabels', {'Nombre': 'no label', 'Fase': 'no label', 'Tipo': 'no label', 'Fecha': 'no label', 'Longitud': 'no label', 'DerechoVia': 'no label', 'Empresa': 'no label', 'Caracteris': 'no label', 'Tramo': 'no label', 'long': 'no label', });
lyr_Denue_Empresas_Grandes_19.set('fieldLabels', {'id': 'no label', 'clee': 'no label', 'nom_estab': 'no label', 'raz_social': 'no label', 'codigo_act': 'no label', 'nombre_act': 'no label', 'per_ocu': 'no label', 'tipo_vial': 'no label', 'nom_vial': 'no label', 'tipo_v_e_1': 'no label', 'nom_v_e_1': 'no label', 'tipo_v_e_2': 'no label', 'nom_v_e_2': 'no label', 'tipo_v_e_3': 'no label', 'nom_v_e_3': 'no label', 'numero_ext': 'no label', 'letra_ext': 'no label', 'edificio': 'no label', 'edificio_e': 'no label', 'numero_int': 'no label', 'letra_int': 'no label', 'tipo_asent': 'no label', 'nomb_asent': 'no label', 'tipoCenCom': 'no label', 'nom_CenCom': 'no label', 'num_local': 'no label', 'cod_postal': 'no label', 'cve_ent': 'no label', 'entidad': 'no label', 'cve_mun': 'no label', 'municipio': 'no label', 'cve_loc': 'no label', 'localidad': 'no label', 'ageb': 'no label', 'manzana': 'no label', 'telefono': 'no label', 'correoelec': 'no label', 'www': 'no label', 'tipoUniEco': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'no label', 'pyme': 'no label', 'sector': 'no label', 'tipo': 'no label', 'region': 'no label', });
lyr_Denue_Empresas_Grandes_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
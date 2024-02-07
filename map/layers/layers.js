var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Outputpointlayer_1 = new ol.format.GeoJSON();
var features_Outputpointlayer_1 = format_Outputpointlayer_1.readFeatures(json_Outputpointlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_1.addFeatures(features_Outputpointlayer_1);
var lyr_Outputpointlayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outputpointlayer_1, 
                style: style_Outputpointlayer_1,
                interactive: true,
    title: 'Output point layer<br />\
    <img src="styles/legend/Outputpointlayer_1_0.png" /> disponible<br />\
    <img src="styles/legend/Outputpointlayer_1_1.png" /> <br />\
    <img src="styles/legend/Outputpointlayer_1_2.png" /> vendida<br />'
        });
var format_Outputlinelayer_2 = new ol.format.GeoJSON();
var features_Outputlinelayer_2 = format_Outputlinelayer_2.readFeatures(json_Outputlinelayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputlinelayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputlinelayer_2.addFeatures(features_Outputlinelayer_2);
var lyr_Outputlinelayer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outputlinelayer_2, 
                style: style_Outputlinelayer_2,
                interactive: true,
                title: '<img src="styles/legend/Outputlinelayer_2.png" /> Output line layer'
            });
var format_Outputlinelayer_3 = new ol.format.GeoJSON();
var features_Outputlinelayer_3 = format_Outputlinelayer_3.readFeatures(json_Outputlinelayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputlinelayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputlinelayer_3.addFeatures(features_Outputlinelayer_3);
var lyr_Outputlinelayer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outputlinelayer_3, 
                style: style_Outputlinelayer_3,
                interactive: true,
                title: '<img src="styles/legend/Outputlinelayer_3.png" /> Output line layer'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Outputpointlayer_1.setVisible(true);lyr_Outputlinelayer_2.setVisible(true);lyr_Outputlinelayer_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Outputpointlayer_1,lyr_Outputlinelayer_2,lyr_Outputlinelayer_3];
lyr_Outputpointlayer_1.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'estado': 'estado', });
lyr_Outputlinelayer_2.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Outputlinelayer_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Outputpointlayer_1.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'estado': 'TextEdit', });
lyr_Outputlinelayer_2.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': '', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_Outputlinelayer_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_Outputpointlayer_1.set('fieldLabels', {'name': 'no label', 'folders': 'hidden field', 'descriptio': 'hidden field', 'altitude': 'hidden field', 'alt_mode': 'hidden field', 'time_begin': 'hidden field', 'time_end': 'hidden field', 'time_when': 'no label', 'estado': 'no label', });
lyr_Outputlinelayer_2.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Outputlinelayer_3.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Outputlinelayer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
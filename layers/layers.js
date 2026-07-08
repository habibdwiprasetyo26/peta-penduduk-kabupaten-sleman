var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sleman_Kecamatan_1 = new ol.format.GeoJSON();
var features_Sleman_Kecamatan_1 = format_Sleman_Kecamatan_1.readFeatures(json_Sleman_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sleman_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sleman_Kecamatan_1.addFeatures(features_Sleman_Kecamatan_1);
var lyr_Sleman_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sleman_Kecamatan_1, 
                style: style_Sleman_Kecamatan_1,
                popuplayertitle: 'Sleman_Kecamatan',
                interactive: true,
    title: 'Sleman_Kecamatan<br />\
    <img src="styles/legend/Sleman_Kecamatan_1_0.png" /> Rendah<br />\
    <img src="styles/legend/Sleman_Kecamatan_1_1.png" /> Cukup Rendah<br />\
    <img src="styles/legend/Sleman_Kecamatan_1_2.png" /> Sedang<br />\
    <img src="styles/legend/Sleman_Kecamatan_1_3.png" /> Cukup Tinggi<br />\
    <img src="styles/legend/Sleman_Kecamatan_1_4.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Sleman_Kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sleman_Kecamatan_1];
lyr_Sleman_Kecamatan_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'Sleman_Kec': 'Sleman_Kec', 'Sleman_K_1': 'Sleman_K_1', 'Sleman_K_2': 'Sleman_K_2', });
lyr_Sleman_Kecamatan_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Sleman_Kec': 'TextEdit', 'Sleman_K_1': 'TextEdit', 'Sleman_K_2': 'TextEdit', });
lyr_Sleman_Kecamatan_1.set('fieldLabels', {'WADMKC': 'inline label - visible with data', 'Sleman_Kec': 'inline label - visible with data', 'Sleman_K_1': 'inline label - visible with data', 'Sleman_K_2': 'inline label - visible with data', });
lyr_Sleman_Kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
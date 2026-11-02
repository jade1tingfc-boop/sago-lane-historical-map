var wms_layers = [];


        var lyr_MapTilerStreets_0 = new ol.layer.Tile({
            'title': 'MapTiler Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=EC3RAA3KxlZ4quI3Zcc5'
            })
        });
var lyr_sago_lane_1983_georef_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sago_lane_1983_georef<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sago_lane_1983_georef_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11558983.732585, 142352.022696, 11560372.212063, 142956.398356]
        })
    });
var lyr_sago_lane_1930s_georef_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sago_lane_1930s_georef<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sago_lane_1930s_georef_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11558961.937653, 142353.437753, 11560392.936618, 142954.783020]
        })
    });

lyr_MapTilerStreets_0.setVisible(true);lyr_sago_lane_1983_georef_1.setVisible(true);lyr_sago_lane_1930s_georef_2.setVisible(false);
var layersList = [lyr_MapTilerStreets_0,lyr_sago_lane_1983_georef_1,lyr_sago_lane_1930s_georef_2];

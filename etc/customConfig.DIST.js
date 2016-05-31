customConfig = {
    title: 'Télécharger MNT Bretagne',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     */
    geOrchestraBaseUrl: 'https://sdi.georchestra.org/',

    /**
     * map bounds
     */
    initialExtent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],
    maxExtent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],
    restrictedExtent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],

    /**
     * getFeatureInfo control
     */
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * openLS control
     */
    openLSGeocodeUrl: "http://gpp3-wxs.ign.fr/[CLEF GEOPORTAIL]/geoportail/ols?",

    /**
     * background layers (EPSG:2154)
     */
    layersBackground: [
        new ol.layer.Tile({
              source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://sdi.georchestra.org/geoserver/dem/wms',
                params: {
                    'LAYERS': 'altitude',
                    'TILED': true
                },
                extent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://www.cgiar-csi.org/data/srtm-90m-digital-elevation-database-v4-1">(c) CGIAR-CSI</a>'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://sdi.georchestra.org/geoserver/unearthedoutdoors/wms',
                params: {
                    'LAYERS': 'truemarble',
                    'TILED': true
                },
                extent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://www.unearthedoutdoors.net/global_data/true_marble/">(c) Unearthed Outdoors</a>'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://kartenn.region-bretagne.fr/geoserver-proxy/tmp/wms',
                params: {
                    'LAYERS': 'dalles_bretagne',
                    'TILED': true
                },
                extent: [-5,195146672175801,47,13689671800622,-0,9214335234369715,49,00550643243376],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://earthobservatory.nasa.gov/Features/NightLights/page3.php">(c) NASA</a>'})],
            })
        })
    ],

    /**
     * social media links (prefixes)
     */
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};

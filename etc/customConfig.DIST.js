customConfig = {
    title: 'geOrchestra mobile',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     */
    geOrchestraBaseUrl: 'http://sdi.georchestra.org/',

    /**
     * map bounds
     */
    initialExtent: [-12880000,-1080000,5890000,7540000],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],

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
     * background layers (EPSG:3857)
     */
    layersBackground: [
        new ol.layer.Tile({
              source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://sdi.georchestra.org/geoserver/dem/wms',
                params: {
                    'LAYERS': 'altitude',
                    'TILED': true
                },
                extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://www.cgiar-csi.org/data/srtm-90m-digital-elevation-database-v4-1">(c) CGIAR-CSI</a>'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://sdi.georchestra.org/geoserver/unearthedoutdoors/wms',
                params: {
                    'LAYERS': 'truemarble',
                    'TILED': true
                },
                extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://www.unearthedoutdoors.net/global_data/true_marble/">(c) Unearthed Outdoors</a>'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://sdi.georchestra.org/geoserver/nasa/wms',
                params: {
                    'LAYERS': 'night_2012',
                    'TILED': true
                },
                extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
                attributions: [new ol.Attribution({ html: 'tiles from geOrchestra, data <a href="http://earthobservatory.nasa.gov/Features/NightLights/page3.php">(c) NASA</a>'})],
            })
        })
    ],
        
    /**
     * parametric SLD layers
     * allows dynamic overlays; each overlay relies on a WMS+SLD service.
     * layers and styles are being specified by a SLD_BODY fragment.
     * the GUI displays a slider control for each overlay, allowing the user
     * to dynamically alter one parameter within the style and 
     * immediately see the resulting map.
     * This sample SLD parametric layer displays a particular evelation level in Brittany, France.
     */
    layersSLD: [
        {
            'id': 'elevation',
            'url': 'http://geobretagne.fr/geoserver/alti/ows',
            'visible': true,
            'opacity': 0.8,
            'param_label': 'elevation',
            'param_value': 0,
            'param_value_min': 0,
            'param_value_max': 10,
            'param_step': 0.1,
            'param_re': /ELEVATION/g,
            'SLD_BODY': "<NamedLayer> \
<Name>alti:litto3d</Name> \
<UserStyle><FeatureTypeStyle><Rule> \
<RasterSymbolizer><ColorMap type='intervals'> \
<ColorMapEntry color='#b5d0d0' quantity='-100' opacity='0' /> \
<ColorMapEntry color='#b5d0d0' quantity='0' opacity='1' /> \
<ColorMapEntry color='#b5d0d0' quantity='ELEVATION' opacity='1' /> \
<ColorMapEntry color='#b5d0d0' quantity='100000' opacity='0' /> \
</ColorMap></RasterSymbolizer></Rule></FeatureTypeStyle></UserStyle> \
</NamedLayer>"
        }
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

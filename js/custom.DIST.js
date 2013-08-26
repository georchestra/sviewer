/*
 * sViewer local configuration. Overrides the hardcoded configuration.
 */

var Ol = OpenLayers;
var customConfig = {

    /**
     * constant : title
     * the default viewer title, may be overriden with &title=text
     */
    // title: Ol.i18n("geOrchestra mobile"),

    /**
     * constant : geOrchestraURL
     * the geOrchestra IDS url, allows sViewer to display named layers
     * (&layers=)
     */
    // geOrchestraURL: "http://geobretagne.fr/",

    /** constant : initialExtent
     * initial extent, may be overriden with &x=lon&y=lat
     */
    // initialExtent: new Ol.Bounds(-365446,6142287,-365446,6142287),

    /**
     * constant : zinit
     * initial zoom, may be overriden with &z=zoom
     */
    // zinit: 9,

    /**
     * constant : maxExtent
     * map center stays in that extent
     */
    // maxExtent: new Ol.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),

    /**
     * constant : maxResolution
     * maximum units per pixel resolution allowed
     */
    // maxResolution: 156543.0339,

    /**
     * constant : numZoomLevels
     * number of auto computed zoom levels
     */
    // numZoomLevels: 21,

    /**
     * constant : resolutions
     * number of auto computed zoom levels
     */
    //~ resolutions: [
        // 156543.03390625,
        // 78271.516953125,
        // 39135.7584765625,
        // 19567.87923828125,
        // 9783.939619140625,
        // 4891.9698095703125,
        // 2445.9849047851562,
        // 1222.9924523925781,
        // 611.4962261962891,
        // 305.74811309814453,
        // 152.87405654907226,
        // 76.43702827453613,
        // 38.218514137268066,
        // 19.109257068634033,
        // 9.554628534317017,
        // 4.777314267158508,
        // 2.388657133579254,
        // 1.194328566789627,
        // 0.5971642833948135,
        // 0.25,
        // 0.1
    //~ ],

    /**
     * constant : restrictedExtent
     * map center will stay in that extent
     */
    // restrictedExtent: new Ol.Bounds(-700000,5700000,100000,6500000),

    /**
     * constant : projMap
     * maps are displayed with this projection
     */
    // projMap: new Ol.Projection('EPSG:3857'),

    /**
     * constant : projDisplay
     */
    // projDisplay: new Ol.Projection('EPSG:4326'),

    /**
     * constant : maxFeatures
     * max number of features retrieved through getFeatureInfo
     */
    // maxFeatures: 3,

    /**
     * constant : nodata
     * string matching empty gfi response.
     * Use this at the beginning/end of your getFeatureInfo html templates
     * to allow no data detection.
     */
    //
    // nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * constant : openLSGeocodeUrl
     * url of the OpenLS geocoding service
     */
    // openLSGeocodeUrl: "http://geobretagne.fr/openls?",

    /**
     * constant : openLSMaxResponses
     */
    // openLSMaxResponses: 4,

    /**
     * constant : layersBackground
     * array of OpenLayers backgrounds. Only one displayed at a time.
     * non queryable.
     */
    layersBackground: [
        new Ol.Layer.WMS(
            "Aerial photography",
            "http://a.tile.geobretagne.fr/gwc02/service/wms",
            { layers: 'satellite', format: 'image/jpeg', transparent: false },
            {
                attribution: "Photographie aérienne partenaires GéoBretagne/IGN RGE/PlanetObserver",
                tileSize: new Ol.Size(256,256),
                transitionEffect: "resize",
                visibility: true
            }
        ),
        new Ol.Layer.WMS(
            "OpenStreetMap simple",
            [
                "http://a.osm.geobretagne.fr/gwc01/service/wms",
                "http://b.osm.geobretagne.fr/gwc01/service/wms",
                "http://c.osm.geobretagne.fr/gwc01/service/wms"
            ],
            { layers: 'imposm:default', format: 'image/png', transparent: false },
            {
                attribution: "Fond cartographique <a href='http://www.openstreetmap.org/'>OpenStreetMap CC-by-SA</a>",
                tileSize: new Ol.Size(256,256),
                transitionEffect: "resize",
                visibility: false
            }
        ),
        new OpenLayers.Layer.XYZ(
            "OpenStreetMap MapQuest",
            [
                "http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
                "http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
                "http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png"
            ],
            {
                attribution: "Data, imagery and map <a href='http://www.mapquest.com/'  target='_blank'>MapQuest</a>, <a href='http://www.openstreetmap.org/' target='_blank'>Open Street Map</a> and contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>  <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
                transitionEffect: "resize",
                visibility: false
            }
        )
    ],

    /**
     * constant : layersOverlay
     * Array of overlay layers displayed between background and queryable layers.
     */
    // layersOverlay: [],

    /**
     * constant : CQL_FILTER
     * Default CQL filter applied to the queryable layers.
     */
    // CQL_FILTER: null,

    /**
     * constant : socialMedia
     * mapping of name:urlprefix social medias
     */
    // array of name:urlprefix social media links. The map Url
    // ex: "Twitter" : "https://twitter.com/intent/tweet?text=",
    // socialMedia: {
    // }

    // no trailing comma
};

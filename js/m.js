/***********************************************************************************************
 * configuration
 */

// libraries configuration
var Ol = OpenLayers;

Ol.DOTS_PER_INCH = 90.71428571428572;
Ol.Util.onImageLoadErrorColor = 'transparent';
Ol.ProxyHost = '/proxy/?url=';
Proj4js.defs["EPSG:4326"] = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
Proj4js.defs["EPSG:3857"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";



// application hardcoded configuration
var hardConfig = {
    // viewer title, may be overriden with &title=text
    title: "geOrchestra simple viewer",

    // default wms onlineResource for &layers=layernames
    wms: "http://geobretagne.fr/geoserver/ows",
    geoserver: "http://geobretagne.fr/geoserver",

    // initial extent and zoom, may be overriden with &x=lon&y=lat&z=zoom
    initialExtent: new Ol.Bounds(-365446,6142287,-365446,6142287),
    zinit: 9,

    // must match the TMS grid&scale if any
    maxExtent: new Ol.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
    maxResolution: 156543.0339,
    numZoomLevels: 21,
    resolutions: [
        156543.03390625,
        78271.516953125,
        39135.7584765625,
        19567.87923828125,
        9783.939619140625,
        4891.9698095703125,
        2445.9849047851562,
        1222.9924523925781,
        611.4962261962891,
        305.74811309814453,
        152.87405654907226,
        76.43702827453613,
        38.218514137268066,
        19.109257068634033,
        9.554628534317017,
        4.777314267158508,
        2.388657133579254,
        1.194328566789627,
        0.5971642833948135,
        0.25,
        0.1
    ],

    // map center restricted in this extent
    restrictedExtent: new Ol.Bounds(-700000,5700000,100000,6500000),

    // map projection
    projMap: new Ol.Projection('EPSG:3857'),

    // permalink and kml projection
    projDisplay: new Ol.Projection('EPSG:4326'),

    // maximum features retrieved on getFeatureInfo
    maxFeatures: 3,

    // string matching empty gfi response, use this in your template header and footer
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    // openLS geocoding service
    openLSGeocodeUrl: "http://geobretagne.fr/openls?",
    openLSMaxResponses: 4,

    // array of background (opaque) map layers. Only one shall be visible on startup.
    // The user can switch layers with a button.
    layersBackground: [
        new Ol.Layer.WMS(
            "Photographie aérienne",
            "http://a.tile.geobretagne.fr/gwc02/service/wms",
            { layers: 'satellite', format: 'image/jpeg', transparent: false },
            {
                attribution: "<br />Photographie aérienne : partenaires GéoBretagne/IGN RGE/PlanetObserver",
                tileSize: new Ol.Size(256,256),
                visibility: true
            }
        ),
        new Ol.Layer.WMS(
            "Plan OpenStreetMap simple",
            [
                "http://a.osm.geobretagne.fr/gwc01/service/wms",
                "http://b.osm.geobretagne.fr/gwc01/service/wms",
                "http://c.osm.geobretagne.fr/gwc01/service/wms"
            ],
            { layers: 'imposm:default', format: 'image/png', transparent: false },
            {
                attribution: "<br />Fond cartographique : <a href='http://www.openstreetmap.org/'>OpenStreetMap CC-by-SA</a>",
                tileSize: new Ol.Size(256,256),
                visibility: false
            }
        ),
        new Ol.Layer.OSM(
            "Plan OpenStreetMap",
            [
                "http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
                "http://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
                "http://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"
            ],
            {
                attribution: "<br />Fond cartographique : <a href='http://www.openstreetmap.org/'>OpenStreetMap CC-by-SA</a>",
                visibility: false
            }
        )
    ],


    // array of overlay layers. They are always visible.
    layersOverlay: [],

    // CQL filter applied to the overlay layers
    CQL_FILTER: null,

    // social media links
    socialMedia: {
        "Facebook": "http://www.facebook.com/sharer/sharer.php?u=",
        "Twitter" : "https://twitter.com/intent/tweet?text=",
        "Google+" : "https://plus.google.com/share?url="

    }
};

//~ hardConfig.layersBackground = hardConfig.layersBackground.concat([]);


/**
 * end configuration
 ***********************************************************************************************
 */

var map;


function init() {
    "use strict";

    // defaultConfig may be overriden with querystring
    var defaultConfig = {
        title: hardConfig.title,
        CQL_FILTER: hardConfig.CQL_FILTER,
        layernames: [],
        stylenames: []
    };

    // config = defaultConfig + querystring + hashstring
    var config = {};
    Ol.Util.applyDefaults(config, Ol.Util.getParameters("/" + window.location.search, { splitArgs: false }));
    Ol.Util.applyDefaults(config, Ol.Util.getParameters("/?" + window.location.hash.substring(1),  { splitArgs: false }));
    Ol.Util.applyDefaults(config, defaultConfig);

    // document title handling
    document.title = config.title;
    $('#title').text(config.title);
    $('#setTitle').val(config.title);

    /**
     * MAP
     */
    var mapOptions = {
        allOverlays: true,
        projection: hardConfig.projMap,
        displayProjection: hardConfig.projDisplay,
        maxExtent: hardConfig.maxExtent,
        restrictedExtent: hardConfig.restrictedExtent,
        maxResolution: hardConfig.maxResolution,
        numZoomLevels: hardConfig.numZoomLevels,
        units: "m",
        controls: [
            new Ol.Control.Navigation({
                mouseWheelOptions: {
                    cumulative: false,
                    interval: 100
                },
                dragPanOptions: {
                    enableKinetic: {
                        deceleration: 0.02
                }
            }}),
            new Ol.Control.ZoomBox(),
            new Ol.Control.Attribution({div:Ol.Util.getElement("baseAttributions")}),
            new Ol.Control.LoadingPanel()
        ],
        layers: [new Ol.Layer("fake", {isBaseLayer: true, displayInLayerSwitcher: false})]
    };
    map = new Ol.Map('map', mapOptions );


    // keyboard navigation
    var keyboardNav = new Ol.Control.KeyboardDefaults();
    map.addControls([keyboardNav]);


    /**
     * background layers
     */
    // reading visible background index with &lb=
    if (config.lb && config.lb<hardConfig.layersBackground.length) {
        hardConfig.layersBackground[parseInt(config.lb, 10)].setVisibility(true);
    } else {
        hardConfig.layersBackground[0].setVisibility(true);
    }
    map.addLayers(hardConfig.layersBackground);


    /**
     * overlay layers
     */
    if (hardConfig.hasOwnProperty("layersOverlay")) {
        map.addLayers(hardConfig.layersOverlay);
    }

    /**
     * map control methods
     */
    function switchBackground () {
        var n = hardConfig.layersBackground.length;
        var lv = 0;
        $.each(hardConfig.layersBackground, function(i, layer) {
            if (layer.getVisibility()) {
                lv = i;
            }
            layer.setVisibility(false);
        });
        hardConfig.layersBackground[(lv+1)%n].setVisibility(true);
    }

    /**
     * WMS layer providing onclick getFeatureInfo
     * Activated with &layers=layername[*style][,layername...]
     * This WMS layer must be queryable with info_format text/html
     */

    if (config.layers) {
        var popup, layer_wms, layersstyles = [], getFeatureInfo;

        // parser to retrieve layernames and styles
        layersstyles = (typeof config.layers == 'string') ? config.layers.split(',') : config.layers
        $.each(layersstyles, function(i,s) {
            var a = s.split('*',2);
            config.layernames.push(a[0]);
            config.stylenames.push( (a.length > 1) ? a[1]:"");
        });

        // fake popup function
        popup = { destroy: function() {}
        };

        layer_wms = new Ol.Layer.WMS(
            config.title,
            hardConfig.wms,
            {
                layers: config.layernames.join(','),
                format: "image/png",
                transparent: true
            },
            {
                isBaseLayer: false,
                singleTile: true,
                ratio: 1.2
            }
        );

        layer_wms.mergeNewParams({
            styles: config.stylenames.join(',')
        });

        // CQL filter specified with &CQL_FILTER=
        if (config.CQL_FILTER) {
            layer_wms.mergeNewParams({
                "CQL_FILTER": config.CQL_FILTER
            });
        }

        map.addLayer(layer_wms);

        getFeatureInfo = new Ol.Control.WMSGetFeatureInfo({
            url: hardConfig.wms,
            title: 'Interroger la carte par clic',
            queryVisible: true,
            infoFormat: 'text/html',
            hover: false,
            handlerOptions: {
                "hover": { delay: 500 }
            },
            maxFeatures: hardConfig.maxFeatures,
            layers: [layer_wms],
            eventListeners: {
                "getfeatureinfo": function(e) {
                    if (e.text.search(hardConfig.nodata)<0) {
                        popup.destroy();
                        popup = new Ol.Popup.FramedCloud(
                            "wmsPopup",
                            map.getLonLatFromPixel(e.xy),
                            new Ol.Size(200,200),
                            e.text,
                            null,
                            true);
                        map.addPopup(popup);
                    }
                }
            }
        });
        map.addControl(getFeatureInfo);
        getFeatureInfo.activate();
    }


    /**
     * Optional KML Layer activated with &kml=kmlurl
     */
    if (config.kml) {

        var onPopupClose = function(e) {
            selectControl.unselectAll();
        };
        var onFeatureSelect = function(e) {
            var f = e.feature;
            var content = ["<h2>",config.title,"</h2>","<p>",
                "<span class='pname'>",f.attributes.name,"</span><br />",
                "<span class='pdesc'>",f.attributes.description,"</span>","</p>"].join(' ');
            // no dynamic content allowed
            if (content.search("<script") !== -1) { content = content.replace(/</g, "&lt;"); }
            var popup = new Ol.Popup.FramedCloud(
                "kmlPopup",
                f.geometry.getBounds().getCenterLonLat(),
                new Ol.Size(100,100),
                content,
                null,
                true,
                onPopupClose
            );
            popup.autoSize = true;
            popup.maxSize = new Ol.Size(300,200);
            f.popup = popup;
            map.addPopup(popup);
        };
        var onFeatureUnselect = function(e) {
            var f = e.feature;
            if(f.popup) {
                map.removePopup(f.popup);
                f.popup.destroy();
                delete f.popup;
            }
        };

        var layer_kml = new Ol.Layer.Vector(
            config.title,
            {
                strategies: [new Ol.Strategy.Fixed()],
                projection: hardConfig.projDisplay,
                protocol: new Ol.Protocol.HTTP({
                    url: config.kml,
                    format: new Ol.Format.KML({
                    extractStyles: true,
                    extractAttributes: true
                })
            }),
            eventListeners: {
                "featureselected":onFeatureSelect,
                "featureunselected":onFeatureUnselect
            }
        });
        map.addLayer(layer_kml);
        var selectControl = new Ol.Control.SelectFeature(layer_kml, {toggle: true, clickout:false});
        selectControl.handlers.feature.stopDown = false;
        selectControl.handlers.feature.stopUp = false;
        map.addControl(selectControl);
        selectControl.activate();
        layer_kml.events.fallThrough = true;
    }



    /**
     * geoloc functions
     */
    var markGeoloc = new Ol.Layer.Markers("geocodage");
    map.addLayers([markGeoloc]);


    // geocoding
    function openLs(text) {
        try {
            var q = text.trim();
            var qa = q.split(",");
            if (q!=="") {
                var countryCode ="ALL";
                var freeFormAddress ="";
                if (qa.length>1) {
                    // address and municipality separated by a comma
                    var address = qa.slice(0,qa.length-1).join(" ").trim();
                    var municipality = qa[qa.length-1].trim();
                    countryCode="StreetAddress";
                    freeFormAddress = address + " " + municipality;
                }
                else
                {
                    // municipality
                    countryCode="PositionOfInterest";
                    countryCode="StreetAddress";
                    freeFormAddress = q;
                }

                Ol.Request.issue({
                    method: 'POST',
                    headers: { "Content-Type": "application/xml" },
                    url: hardConfig.openLSGeocodeUrl,
                    data:[
                        '<?xml version="1.0" encoding="UTF-8"?>\n',
                        '<XLS xmlns:xls="http://www.opengis.net/xls" ',
                        'xmlns:gml="http://www.opengis.net/gml" ',
                        'xmlns="http://www.opengis.net/xls" ',
                        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ',
                        'version="1.2" ',
                        'xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd">\n',
                        '<RequestHeader/>\n',
                        '<Request maximumResponses="',
                        hardConfig.openLSMaxResponses,
                        '" requestID="1" version="1.2" methodName="LocationUtilityService">\n',
                        '<GeocodeRequest returnFreeForm="false">\n',
                        '<Address countryCode="',
                        countryCode,
                        '">\n',
                        '<freeFormAddress>',
                        freeFormAddress,
                        '</freeFormAddress>\n',
                        '</Address>\n',
                        '</GeocodeRequest>\n',
                        '</Request>\n',
                        '</XLS>'].join(""),
                    failure: onOpenLSFailure,
                    success: onOpenLSSuccess
                });
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }

    function onOpenLSSuccess (response) {
        try {
            $.mobile.loading('hide');
            var format = new Ol.Format.XML();
            var doc = format.read(response.responseText);
            var results = format.getElementsByTagNameNS(doc,"*","GeocodedAddress");
            if (results.length>0) {
                var position = format.getElementsByTagNameNS(results[0],"*","pos")[0];
                var loc = (position.textContent) ? position.textContent.split(" ") : position.nodeTypedValue.split(" ");
                var ptResult = new Ol.LonLat(loc[1], loc[0]).transform(new Ol.Projection("EPSG:4326"), hardConfig.projMap);
                console.log(ptResult);
                var matchType = results[0].getElementsByTagName("GeocodeMatchCode")[0].getAttribute("matchType");
                switch (matchType) {
                    case "City": zoom = 15; break;
                    case "Street": zoom = 17; break;
                    case "Street enhanced": zoom = 18; break;
                    case "Street number": zoom = 18; break;
                }

                // map move and zoom
                if (hardConfig.restrictedExtent.containsLonLat(ptResult)) {
                    map.setCenter(ptResult, zoom);
                    markGeoloc.addMarker(new Ol.Marker(ptResult));
                    $("#locateMsg").text("");
                    $("#frameLocate").popup("close");
                }
                else {
                    $("#locateMsg").text("La géolocalisation a échoué :\nlieu recherché hors carte");
                    $.mobile.loading('hide');
                }
            }
            else {
                $("#locateMsg").text("La géolocalisation a échoué :\naucun résultat");
                $.mobile.loading('hide');
            }
        } catch(err) {
            $("#locateMsg").text("La géolocalisation a échoué");
            $.mobile.loading('hide');
            console.log(err);
        }
    }

    function onOpenLSFailure (response) {
        $("#locateMsg").text("La géolocalisation a échoué");
            $.mobile.loading('hide');
    }

    $("#addressForm").on('submit', function() {
        try {
            $.mobile.loading('show', {
                text: "recherche du lieu"
            });
            markGeoloc.clearMarkers();
            openLs($("#addressInput").val());
        }
        catch(err) {
            console.log(err.message);
        }
        return false;
    });


    /**
     * permalink
     */

    // reading map initial extent &x=&y=&z=
    if (!map.getCenter()) {
        var center = hardConfig.initialExtent.getCenterLonLat();
        var zoom = hardConfig.zinit;
        Ol.Util.applyDefaults(config, {x:center.lon, y:center.lat, z:zoom});
        map.setCenter(new Ol.LonLat(config.x, config.y), config.z);
    }

    // keeping permalink synchronized with the map extent
    var setPermalink = function() {
        var permalinkHash, permalinkQuery;
        var c = map.getCenter();
        var linkParams = {};
        linkParams.x = encodeURIComponent(Math.round(c.lon));
        linkParams.y = encodeURIComponent(Math.round(c.lat));
        linkParams.z = encodeURIComponent(map.getZoom());
        for (var i=0;i<hardConfig.layersBackground.length;i++) {
            if (hardConfig.layersBackground[i].getVisibility()) {
                linkParams.lb = encodeURIComponent(i);
            }
        }
        if (config.kml) { linkParams.kml = config.kml; }
        if (config.layers) { linkParams.layers = config.layers; }
        if (config.title) { linkParams.title = config.title; }
        if (config.CQL_FILTER) { linkParams.CQL_FILTER = config.CQL_FILTER; }

        permalinkHash = window.location.origin + window.location.pathname + "#" + jQuery.param(linkParams);
        permalinkQuery = window.location.origin + window.location.pathname + "?" + jQuery.param(linkParams);

        // permalink, social links & QR code update only if frame is visible
        if ($('#frameShare').css('display')==='block') {
            $('#socialLinks').empty();
            $.each(hardConfig.socialMedia, function(name, socialUrl) {
                $('#socialLinks').append('<a class="socialLink" target="_blank" href="' +
                    socialUrl+encodeURIComponent(permalinkQuery) +
                    '">' +
                    name +
                    '</a>'
                );
            });
            $(".socialLink").buttonMarkup(
            {
                icon: "plus",
                inline: true,
                mini: true,
                theme: "c"
            });

            $('#qrcode').prop('src','http://chart.apis.google.com/chart?cht=qr&chs=160x160&chld=L&chl=' +
                encodeURIComponent(permalinkQuery));
            $('#permalink').val(permalinkQuery);
            $('#embedcode').text('<iframe style="width: 600px; height: 400px;" src="' +
            permalinkQuery +
            '"></iframe>');
        }
    };

    map.events.register("moveend", map, setPermalink);
    setPermalink();


    /**
     * Capabilities and metadata
     */
    var format_WMS = new Ol.Format.WMSCapabilities();
    $.each([].concat(config.layernames), function(i, layername) {
        if (layername) {
            var la = layername.split(":",2);
            var onlineResource = [hardConfig.geoserver,la[0],la[1],"wms"].join("/");
            Ol.Request.GET({
                url: onlineResource,
                params: {
                    SERVICE: "WMS",
                    VERSION: "1.3.0",
                    REQUEST: "GetCapabilities"
                },
                success: function(request) {
                    var doc = request.responseXML;
                    var html = "";
                    if (!doc || !doc.documentElement) {
                        doc = request.responseText;
                    }
                    var capabilities = format_WMS.read(doc);
                    var mdLayer = capabilities.capability.layers[0];
                    var legendArgs = {
                        "service" : "WMS",
                        "version" : capabilities.version,
                        "request" : "GetLegendGraphic",
                        "width" : 30,
                        "format" : "image/png",
                        "layer": mdLayer.name,
                        "style": config.stylenames[i]
                    };

                    html = "<li><h3 class='title'>" +
                        $('<span/>').text(mdLayer.title).html() +
                        "</h3><p class='abstract'>" +
                        $('<span/>').text(mdLayer.abstract).html() +
                        "<br /><img class='legend' src='" +
                        Ol.Util.urlAppend(capabilities.service.href, Ol.Util.getParameterString(legendArgs)) +
                        "' />";

                    if (mdLayer.attribution) {
                        html = html +
                            "<br /><a target='_blank'class='attribution' href='" +
                            mdLayer.attribution.href +
                            "'>" +
                            $('<span/>').text(mdLayer.attribution.title).html() +
                            "</a>";
                    };

                    html = html + "</p></li>";

                    $("#legend").append(html);
                },
                failure: function() {
                    Ol.Console.error.apply(Ol.Console, arguments);
                }
            });
        }
    });



    /**
    * UI
    */
    // disables navkeys when using forms
    $("input").focus(function() {
        keyboardNav.deactivate();
        return false;
    });
    $("input").blur(function() {
        keyboardNav.activate();
        return false;
    });

    $("#ziBt").click(function() {
        map.zoomIn();
    });
    $("#zoBt").click(function() {
        map.zoomOut();
    });
    $("#zeBt").click(function() {
        map.zoomToExtent(hardConfig.initialExtent);
        map.zoomTo(hardConfig.zinit);
    });
    $("#bgBt").click(switchBackground);
    $("#setTitle").keypress(function() {
        config.title = $("#setTitle").val();
        document.title = config.title;
        $('#title').text(config.title);
    });
    $("#setTitle").blur(function() {
        setPermalink();
    });
}

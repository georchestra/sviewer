/***********************************************************************************************
 * sviewer
 */

// libraries configuration
Ol.DOTS_PER_INCH = 90.71428571428572;
Ol.Util.onImageLoadErrorColor = 'transparent';
Ol.ProxyHost = '/proxy/?url=';
Proj4js.defs["EPSG:4326"] = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
Proj4js.defs["EPSG:3857"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";



/**
 * application hardcoded configuration.
 * You'd better not edit this,
 * put your local configuration in js/config.js instead.
 */
var hardConfig = {
    title: Ol.i18n("geOrchestra mobile"),
    geOrchestraURL: "http://geobretagne.fr/",
    initialExtent: new Ol.Bounds(-365446,6142287,-365446,6142287),
    zinit: 9,
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
    restrictedExtent: new Ol.Bounds(-700000,5700000,100000,6500000),
    projMap: new Ol.Projection('EPSG:3857'),
    projDisplay: new Ol.Projection('EPSG:4326'),
    maxFeatures: 3,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://geobretagne.fr/openls?",
    layersBackground: [
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
    layersOverlay: [],
    socialMedia: {
        "Twitter" : "https://twitter.com/intent/tweet?text=",
        "Google+" : "https://plus.google.com/share?url=",
        "Facebook": "http://www.facebook.com/sharer/sharer.php?u=",
    }
};



var map;


function init() {
    "use strict";

    // config holds the viewer final configuration.
    var config = {};

    // customConfig in js/config.js holds the viewer static configuration.
    // Default values are hardcoded in hardConfig.
    Ol.Util.applyDefaults(customConfig, hardConfig);


    // defaultConfig is being overriden by querystring ...
    var defaultConfig = {
        title: customConfig.title,
        cql_filter: "",
        layernames: [],
        stylenames: [],
        onlineresources: [],
        querylayers: [],
        lang: ""
    };
    Ol.Util.applyDefaults(config, Ol.Util.getParameters("/" + window.location.search, { splitArgs: false }));
    Ol.Util.applyDefaults(config, Ol.Util.getParameters("/?" + window.location.hash.substring(1),  { splitArgs: false }));

    // ... then applied to config
    Ol.Util.applyDefaults(config, defaultConfig);
    
    // ... i18n parameter
    Ol.Util.extend(OpenLayers.Lang, sviewerStrings);
    if (sviewerStrings[config["lang"]]) {
        Ol.Lang.setCode(config["lang"]);
    }

    // document title handling
    document.title = config.title;
    $('#title').text(config.title);
    $('#setTitle').val(config.title);

    // map creation
    map = new Ol.Map('map', {
        allOverlays: true,
        projection: customConfig.projMap,
        displayProjection: customConfig.projDisplay,
        maxExtent: customConfig.maxExtent,
        restrictedExtent: customConfig.restrictedExtent,
        maxResolution: customConfig.maxResolution,
        numZoomLevels: customConfig.numZoomLevels,
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
    });


    // keyboard navigation
    var keyboardNav = new Ol.Control.KeyboardDefaults();
    map.addControls([keyboardNav]);


    // ----- methods ------------------------------------------------------------------------------------

    /**
     * Method: escHTML
     * Sanitize strings
     *
     * Parameters:
     * s {String} input string
     *
     * Returns:
     * {String} secured string
     */
    function escHTML (s) {
        return $('<p/>').text(s).html();
    };


    /**
     * Method: translateDOM
     * translate DOM elements
     *
     * Parameters:
     * selector {String} jQuery selector
     * property {String} property to translate.
     * If null or empty, text content will be translated.
     */
    function translateDOM(selector, property) {
        if (!property) {
            $.each($(selector), function(i,e) {
                $(e).text(Ol.i18n($(e).text()));
            });
        }
        else {
            $.each($(selector), function(i,e) {
                $(e).prop(property, Ol.i18n($(e).prop(property)));
            })
        };
    };

    /**
     * Method: parseLayerParam
     * Parses the layer param, ie ns1:layer1*style1,ns2:layer2*style2
     *
     * Parameters:
     * s {String} the layer string
     *
     * Returns:
     * {Object} layers description
     */
    function parseLayerParam (s) {
        var dic = {};
        dic.ns_name = s.split('*')[0];
        dic.style = (s.indexOf("*")>0) ? s.split('*',2)[1]:'';
        dic.ns = (dic.ns_name.indexOf(":")>0) ? dic.ns_name.split(':',2)[0]:'';
        dic.name = (dic.ns_name.indexOf(":")>0) ? dic.ns_name.split(':',2)[1]:'';
        dic.wms_global = customConfig.georchestraURL + "/geoserver/wms"
        dic.wms_ns = customConfig.geOrchestraURL + "/geoserver/" + dic.ns + "/wms";
        dic.wms_layer = customConfig.geOrchestraURL + "/geoserver/" + dic.ns + "/" + dic.name + "/wms";
        return dic;
    }



    /**
     * Method: switchBackground
     * Iterates over background layers
     *
     * Returns :
     * {OpenLayers.Layer.Layer} the active background layer
     */
    function switchBackground () {
        var n = customConfig.layersBackground.length;
        var lv = 0;
        $.each(customConfig.layersBackground, function(i, layer) {
            if (layer.getVisibility()) {
                lv = i;
            }
            layer.setVisibility(false);
        });
        config.lb = (lv+1)%n;
        customConfig.layersBackground[config.lb].setVisibility(true);
        setPermalink();
        return customConfig.layersBackground[config.lb];
    }


    /**
     * Method: addQueryLayer
     * Adds a WMS layers stack with getFeatureInfo.
     * This WMS layers stack must be queryable with info_format text/html
     *
     * Parameters:
     * onlineresource {String} the WMS service URL
     * layernames {Array} list of layers
     * layerstyles {Array} list of styles
     * cql {String} comma separated list of CQL filters
     *
     * Returns:
     * {OpenLayers.Layer.WMS} the added Ol WMS layer
     */
    function addQueryLayer (onlineresource, layernames, layerstyles, cql_filter) {

        var popup, layer_wms, getFeatureInfo;

        // fake popup function
        popup = { destroy: function() {}
        };

        layer_wms = new Ol.Layer.WMS(
            layernames.join(','),
            onlineresource,
            {
                layers: layernames.join(','),
                format: "image/png",
                transparent: true
            },
            {
                isBaseLayer: false,
                singleTile: true,
                transitionEffect: "resize",
                ratio: 1.2
            }
        );

        layer_wms.mergeNewParams({
            styles: layerstyles.join(',')
        });

        // optional CQL filter
        if (cql_filter) {
            layer_wms.mergeNewParams({
                "CQL_FILTER": cql_filter
            });
        }

        map.addLayer(layer_wms);

        getFeatureInfo = new Ol.Control.WMSGetFeatureInfo({
            url: onlineresource,
            title: 'Query',
            queryVisible: true,
            infoFormat: 'text/html',
            hover: false,
            handlerOptions: {
                "hover": { delay: 500 }
            },
            maxFeatures: customConfig.maxFeatures,
            layers: [layer_wms],
            eventListeners: {
                "getfeatureinfo": function(e) {
                    if (e.text.search(customConfig.nodata)<0) {
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

        return layer_wms;
    }




    /**
     * Method: addLegend
     * Queries the layer capabilities to display its legend and metadata.
     *
     * Parameters:
     * onlineresource {String} the WMS service URL
     * layernames {Array} list of layer names
     * layerstyles {Array} list of style names
     */
    function getWMSLegend(onlineresource, layername, layerstyle) {
        var format_Cap = new Ol.Format.WMSCapabilities();
        Ol.Request.GET({
            url: onlineresource,
            params: {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetCapabilities"
            },
            success: function(request) {
                var doc = request.responseXML;
                var html = "";
                var capabilities, mdLayer, legendArgs;
                if (!doc || !doc.documentElement) {
                    doc = request.responseText;
                }
                capabilities = format_Cap.read(doc);

                // searching for the layer
                $.each(capabilities.capability.layers, function(i, layer) {
                    if (layer.name === layername) {
                        mdLayer = layer;
                    }
                });
                if (mdLayer) {
                    console.log(mdLayer);
                    legendArgs = {
                        "service" : "WMS",
                        "version" : capabilities.version,
                        "request" : "GetLegendGraphic",
                        "format" : "image/png",
                        "layer": mdLayer.name,
                        "style": layerstyle
                    };

                    html = "";

                    // attribution
                    if (mdLayer.attribution) {
                        html += "<a target='_blank'class='mdAttrib' href='";
                        html += mdLayer.attribution.href;
                        html += "'>";
                        if (mdLayer.attribution.logo) {
                            html += "<img class='mdLogo' title='";
                            html += escHTML(mdLayer.attribution.title);
                            html += "' src='";
                            html += mdLayer.attribution.logo.href;
                            html += "' /><br />";
                        };
                        html += escHTML(mdLayer.attribution.title);
                        html += "</a>";
                    };

                    // title
                    html += "<p><h3 class='mdTitle'>" +
                        escHTML(mdLayer.title);
                    html += "</h3>";

                    // abstract
                    html += "<p class='mdAbstract'>";
                    html += escHTML(mdLayer.abstract);

                    // metadata
                    if (mdLayer.metadataURLs) {
                        $.each(mdLayer.metadataURLs, function(i,md) {
                            if (md.format === "text/html") {
                                html += "&nbsp;<a target='_blank'class='mdMeta' href='";
                                html += md.href;
                                html += "'>";
                                html += Ol.i18n('metadata');
                                html += " ... </a>";
                            };
                        });
                    };
                    html += "</p>";

                    // legend
                    html += "<img class='mdLegend' src='";
                    html += Ol.Util.urlAppend(capabilities.service.href, Ol.Util.getParameterString(legendArgs));
                    html += "' />";

                    html += "<hr />";

                    $("#legend").append(html);
                }
            },
            failure: function() {
                Ol.Console.error.apply(Ol.Console, arguments);
            }
        });
    }


    /**
     * Method addKmlLayer
     *Adds a KML overlay.
     *
     * Parameters:
     * onlineresource {String} the KML url
     *
     * Returns:
     * {OpenLayers.Layer.KML} the Ol KML layer
     */
    function addKmlLayer(onlineresource) {
        var layer_kml, selectControl;

        function onPopupClose(e) {
            selectControl.unselectAll();
        };

        function onFeatureSelect(e) {
            var f, content, popup;
            f = e.feature;
            content = ["<h2>",config.title,"</h2>","<p>",
                "<span class='pname'>",f.attributes.name,"</span><br />",
                "<span class='pdesc'>",f.attributes.description,"</span>","</p>"].join(' ');
            // no dynamic content allowed
            if (content.search("<script") !== -1) { content = content.replace(/</g, "&lt;"); }
            popup = new Ol.Popup.FramedCloud(
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

        function onFeatureUnselect(e) {
            var f = e.feature;
            if(f.popup) {
                map.removePopup(f.popup);
                f.popup.destroy();
                delete f.popup;
            }
        };

        layer_kml = new Ol.Layer.Vector(
            config.title,
            {
                strategies: [new Ol.Strategy.Fixed()],
                projection: customConfig.projDisplay,
                protocol: new Ol.Protocol.HTTP({
                    url: onlineresource,
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
        selectControl = new Ol.Control.SelectFeature(layer_kml, {toggle: true, clickout:false});
        selectControl.handlers.feature.stopDown = false;
        selectControl.handlers.feature.stopUp = false;
        map.addControl(selectControl);
        selectControl.activate();
        layer_kml.events.fallThrough = true;

        return layer_kml;
    }






    /**
     * Method addWMCLayers
     * Adds visible and queryable WMS Layers from a WMC.
     *
     * Parameters:
     * onlineresource {String} the WMC url
     */
    function addWMCLayers(onlineresource) {
        var format_WMC = new OpenLayers.Format.WMC();
        Ol.Request.GET({
            url: onlineresource,
            params: {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetCapabilities"
            },
            success: function(request) {
                var context;
                var doc = request.responseXML;
                var layers = [];
                if (!doc || !doc.documentElement) {
                    doc = request.responseText;
                };
                context = format_WMC.read(doc);
                $.each(context.layersContext, function(i, layer) {
                    if (layer.visibility&&layer.queryable) {
                        addQueryLayer(layer.url,[layer.name],['']);
                        getWMSLegend(layer.url, layer.name, "");
                    }
                });
            },
            failure: function() {
                Ol.Console.error.apply(Ol.Console, arguments);
            }
        });
    }



    /**
     * Method openLsRequest
     * Queries the OpenLS service and recenters the map
     *
     * Parameters:
     * text {String} the OpenLS plain text query
     *
     * Returns:
     * {OpenLayers.Layer.KML} the Ol KML layer
     */
    function openLsRequest(text) {

        function onOpenLSSuccess (response) {
            try {
                $.mobile.loading('hide');
                var format = new Ol.Format.XML();
                var doc = format.read(response.responseText);
                var results = format.getElementsByTagNameNS(doc,"*","GeocodedAddress");
                if (results.length>0) {
                    var position = format.getElementsByTagNameNS(results[0],"*","pos")[0];
                    var loc = (position.textContent) ? position.textContent.split(" ") : position.nodeTypedValue.split(" ");
                    var ptResult = new Ol.LonLat(loc[1], loc[0]).transform(new Ol.Projection("EPSG:4326"), customConfig.projMap);
                    var matchType = results[0].getElementsByTagName("GeocodeMatchCode")[0].getAttribute("matchType");
                    switch (matchType) {
                        case "City": zoom = 15; break;
                        case "Street": zoom = 17; break;
                        case "Street enhanced": zoom = 18; break;
                        case "Street number": zoom = 18; break;
                    }

                    // map move and zoom
                    if (customConfig.restrictedExtent.containsLonLat(ptResult)) {
                        map.setCenter(ptResult, zoom);
                        markGeoloc.addMarker(new Ol.Marker(ptResult));
                        $("#locateMsg").text("");
                        $("#frameLocate").popup("close");
                    }
                    else {
                        $("#locateMsg").text(Ol.i18n("Results are off map"));
                        $.mobile.loading('hide');
                    }
                }
                else {
                    $("#locateMsg").text(Ol.i18n("No result"));
                    $.mobile.loading('hide');
                }
            } catch(err) {
                $("#locateMsg").text(Ol.i18n("Geolocation failed"));
                $.mobile.loading('hide');
                console.log(err);
            }
        }

        function onOpenLSFailure (response) {
            $("#locateMsg").text(Ol.i18n("Geolocation failed"));
                $.mobile.loading('hide');
        }

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
                    countryCode="StreetAddress";
                    freeFormAddress = q;
                }

                Ol.Request.issue({
                    method: 'POST',
                    headers: { "Content-Type": "application/xml" },
                    url: customConfig.openLSGeocodeUrl,
                    data:[
                        '<?xml version="1.0" encoding="UTF-8"?> \
                        <XLS xmlns:xls="http://www.opengis.net/xls \
                        xmlns:gml="http://www.opengis.net/gml" \
                        xmlns="http://www.opengis.net/xls" \
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
                        version="1.2" \
                        xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd"> \
                        <RequestHeader/> \
                        <Request maximumResponses="1" requestID="1" version="1.2" methodName="LocationUtilityService"> \
                        <GeocodeRequest returnFreeForm="false"> \
                        <Address countryCode="',
                        countryCode,
                        '">\n \
                        <freeFormAddress>',
                        freeFormAddress,
                        '</freeFormAddress> \
                        </Address> \
                        </GeocodeRequest> \
                        </Request> \
                        </XLS>'].join(""),
                    failure: onOpenLSFailure,
                    success: onOpenLSSuccess
                });
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }





    /**
     * Method: setPermalink
     * keeps permalinks synchronized with the map extent
     */
    function setPermalink () {
        var permalinkHash, permalinkQuery;
        var c = map.getCenter();
        var linkParams = {};
        linkParams.x = encodeURIComponent(Math.round(c.lon));
        linkParams.y = encodeURIComponent(Math.round(c.lat));
        linkParams.z = encodeURIComponent(map.getZoom());
        linkParams.lb = encodeURIComponent(config.lb);
        if (config.kml) { linkParams.kml = config.kml; }
        if (config.layers) { linkParams.layers = config.layers; }
        if (config.title) { linkParams.title = config.title; }
        if (config.cql_filter) { linkParams.cql = config.cql_filter; }
        if (config.wmc) { linkParams.wmc = config.wmc; }


        permalinkHash = window.location.origin + window.location.pathname + "#" + jQuery.param(linkParams);
        permalinkQuery = window.location.origin + window.location.pathname + "?" + jQuery.param(linkParams);

        // permalink, social links & QR code update only if frame is visible
        if ($('#panelShare').css('display')==='block') {
            $('#socialLinks').empty();
            $.each(customConfig.socialMedia, function(name, socialUrl) {
                $('#socialLinks').append('<a data-role="button" class="socialBtn" target="_blank" href="' +
                    socialUrl +
                    encodeURIComponent(permalinkQuery) +
                    '">' +
                    name +
                    '</a>'
                );
            });
            $('.socialBtn').buttonMarkup({
                mini: true,
                icon: "link"
            });
            if ($('#qrcode').css("visibility")=="visible") {
                $('#qrcode').empty();
                new QRCode("qrcode", {
                    text: permalinkQuery,
                    width: 160,
                    height: 160,
                    correctLevel: QRCode.CorrectLevel.L
                })
            };
            $('#permalink').prop('href',permalinkQuery);
            $('#embedcode').text('<iframe style="width: 600px; height: 400px;" src="' +
            permalinkQuery +
            '"></iframe>');
        }
    };




    /**
     * Method: sentMapTo
     * Call external viewers
     *
     * Parameters:
     * viewerId {String} the external viewer codename
     */
    function sendMapTo(viewerId) {
        // sendto : georchestra advanced viewer
        if (viewerId === "georchestra_viewer") {
            var params = {
                "services": [],
                "layers" : []
            };
            $.each(map.getLayersByClass('OpenLayers.Layer.WMS'), function(i, layer) {
                if (layer.visibility) {
                    params.layers.push({
                        "layername" : layer.params.LAYERS,
                        "owstype" : "WMS",
                        "owsurl" : layer.url
                    });
                };
            });
            $("#georchestraFormData").val(JSON.stringify(params));
            return true;
        }
    };



    // ----- layers ------------------------------------------------------------------------------------


    // background layers (opaque, non queryable, one at a time)
    if (config.lb && config.lb<customConfig.layersBackground.length) {
        $.each(customConfig.layersBackground, function(i,l) {
            l.setVisibility(false);}
        );
        customConfig.layersBackground[parseInt(config.lb, 10)].setVisibility(true);
    } else {
        customConfig.layersBackground[0].setVisibility(true);
        config.lb = 0;
    }
    map.addLayers(customConfig.layersBackground);

    // overlays (non-queryable) layers
    if (customConfig.hasOwnProperty("layersOverlay")) {
        map.addLayers(customConfig.layersOverlay);
    }

    // WMC layers
    if (config.wmc) {
        addWMCLayers(config.wmc);
    }

    // queryable WMS layers
    if (config.layers) {
        var ns_layer_style_list = [], getFeatureInfo;
        // parser to retrieve namespaces, names and styles
        ns_layer_style_list = (typeof config.layers == 'string') ? config.layers.split(',') : config.layers
        $.each(ns_layer_style_list, function(i,s) {
            var p = parseLayerParam(s);
            config.layernames.push(p.ns_name);
            config.stylenames.push(p.style);
            // using GS ability to deliver virtual layer services = fast on capabilities
            getWMSLegend(p.wms_layer, p.name, p.style);
        });
        // we want grouped getMap, using the global service for getMaps & getFeatureInfo
        addQueryLayer(customConfig.geOrchestraURL + "/geoserver/ows", config.layernames, config.stylenames, config.cql_filter);
    }

    // KML layer
    if (config.kml) {
        addKmlLayer(config.kml);
    }

    // marker layer
    var markGeoloc = new Ol.Layer.Markers("geocode");
    map.addLayers([markGeoloc]);



    // ----- map initialisation ------------------------------------------------------------------------------------


    // reading map initial extent &x=&y=&z=
    if (!map.getCenter()) {
        var center = customConfig.initialExtent.getCenterLonLat();
        var zoom = customConfig.zinit;
        Ol.Util.applyDefaults(config, {x:center.lon, y:center.lat, z:zoom});
        map.setCenter(new Ol.LonLat(config.x, config.y), config.z);
    }
    setPermalink();


    // permalink refresh on map changes
    map.events.register("moveend", map, setPermalink);



    // ----- UI events ------------------------------------------------------------------------------------



    // disables kbd map navigation when using text inputs
    $("input").focus(function(e) {
        keyboardNav.deactivate();
        return false;
    });
    $("input").blur(function(e) {
        keyboardNav.activate();
        return false;
    });

    // map buttons
    $("#ziBt").click(function(e) {
        map.zoomIn();
    });
    $("#zoBt").click(function(e) {
        map.zoomOut();
    });
    $("#zeBt").click(function(e) {
        map.zoomToExtent(customConfig.initialExtent);
        map.zoomTo(customConfig.zinit);
    });
    $("#bgBt").click(switchBackground);

    // set title dialog
    $("#setTitle").keypress(function(e) {
        config.title = $("#setTitle").val();
        document.title = config.title;
        $('#title').text(config.title);
    });
    $("#setTitle").blur(function(e) {
        setPermalink();
    });

    // sendto form
    $("#georchestraForm").submit(function(e) {
        sendMapTo("georchestra_viewer");
    });

    // geolocation
    $("#addressForm").on('submit', function(e) {
        try {
            $.mobile.loading('show', {
                text: Ol.i18n("searching...")
            });
            markGeoloc.clearMarkers();
            openLsRequest($("#addressInput").val());
        }
        catch(err) {
            console.log(err.message);
        }
        return false;
    });

    // permalinks
    $("#panelShare").bind({
        popupafteropen: function(e) {
            setPermalink();
        }
    });

    // popup size and placement to fit small screens
    function popupLayout (e) {
        var popup = $(this);
        popup.css('top', $('#header').outerHeight()-29);
        popup.css('max-width', Math.min($(window).width() - 44, 600) + 'px');
        popup.css('max-height', $(window).height() - 44 + 'px');

    };

    // visible popup = highlight button
    function popupToggle(e) {
        $.each($("#panelBtn a"), function(i,a) {
            var id = a.href.split('#',2)[1];
            $(a).buttonMarkup({
                theme: ($("#"+id).css("visibility")=="visible")?"c":"b"
             });
        })
    };
    $(window).bind("orientationchange resize pageshow", popupLayout);
    $(".popupPanel").bind("popupbeforeposition popupafteropen", popupLayout);
    $(".popupPanel").bind("popupbeforeposition popupafterclose", popupToggle);
    $.each($(".popupPanel"), popupLayout);

    // page translation
    translateDOM('.i18n','');
    translateDOM('span.ui-btn-text','');
    translateDOM('a[data-role=button]','title');
    translateDOM('input[data-role=button]','value');
    translateDOM('input','placeholder');

}

var projcode = 'EPSG:3857';
var projection = ol.proj.get(projcode);
var projectionExtent = projection.getExtent();
var size = ol.extent.getWidth(projectionExtent) / 256;
var resolutions = new Array(20);
var matrixIds = new Array(20);
for (var z = 0; z < 20; ++z) {
    // generate resolutions and matrixIds arrays for this WMTS
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] =projcode + ':' + z;
}
var map;
var view;
var config;
var customConfig = {};

var hardConfig = {
    lang: 'fr',
    title: 'geOrchestra mobile',
    geOrchestraURL: 'http://geobretagne.fr/',
    projection: projection,
    initialExtent: [-365446, 6142287, -345446, 6182287],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-540000, 5880000,30000, 6297000],
    zinit: 9,
    maxFeatures: 3,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://geobretagne.fr/openls?",
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    lb: 0,
    layersBackground: [
        new ol.layer.Tile({
            source: new ol.source.WMTS({
                url: 'http://osm.geobretagne.fr/gwc01/service/wmts',
                layer: 'osm:map',
                attributions: [ol.source.OSM.DATA_ATTRIBUTION],
                matrixSet: projcode,
                format: 'image/png',
                projection: projection,
                tileGrid: new ol.tilegrid.WMTS({
                    origin: ol.extent.getTopLeft(projectionExtent),
                    resolutions: resolutions,
                    matrixIds: matrixIds
                })
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.WMTS({
                url: 'http://tile.geobretagne.fr/gwc02/service/wmts',
                layer: 'satellite',
                attributions: [new ol.Attribution({ html: '<a href="http://geobretagne.fr/geonetwork/apps/georchestra/?uuid=3a0ac2e3-7af1-4dec-9f36-dae6b5a8c731">(c) NASA, PlanetObserver, IGN RGE, partenariat GéoBretagne</a>'})],
                matrixSet: projcode,
                format: 'image/png',
                projection: projection,
                tileGrid: new ol.tilegrid.WMTS({
                    origin: ol.extent.getTopLeft(projectionExtent),
                    resolutions: resolutions,
                    matrixIds: matrixIds
                })
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    socialMedia: {
        "Twitter" : "https://twitter.com/intent/tweet?text=",
        "Google+" : "https://plus.google.com/share?url=",
        "Facebook": "http://www.facebook.com/sharer/sharer.php?u="
    }
};


function initmap() {

    var vectorLayer;

    // ----- methods ------------------------------------------------------------------------------------

    /**
     * Sanitize strings
     * @param {String} s input string
     * @return {String} secured string
     */
    function escHTML (s) {
        return $('<p/>').text(s).html();
    }


    /**
     * DOM elements i18n
     * @param selector {String} jQuery selector
     * @param property {String} property to translate.
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
            });
        }
    }

    /**
     * Parses the query string
     *  Credits http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     * @param {String} s param name
     * @return {String} param value
     */
     var qs = (function(s) {
        if (s == "") return {};
        var b = {};
        for (var i = 0; i < s.length; ++i)
        {
            var p=s[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    /**
     * Parses the layer param, ie ns1:layer1*style1
     * @param {String}s  the layer string
     * @return {Object} array of layer descriptions
     */
    function parseLayerParam (s) {
        var dic = {};
        dic.nslayername = s.split('*')[0]; // namespace:layername
        dic.stylename = (s.indexOf("*")>0) ? s.split('*',2)[1]:''; // stylename
        dic.namespace = (dic.nslayername.indexOf(":")>0) ? dic.nslayername.split(':',2)[0]:''; // namespace
        dic.layername = (dic.nslayername.indexOf(":")>0) ? dic.nslayername.split(':',2)[1]:''; // layername
        dic.wmsurl_global = config.georchestraURL + "/geoserver/wms"; // global getcap
        dic.wmsurl_ns = config.geOrchestraURL + "/geoserver/" + dic.namespace + "/wms"; // virtual getcap namespace
        dic.wmsurl_layer = config.geOrchestraURL + "/geoserver/" + dic.namespace + "/" + dic.layername + "/wms"; // virtual getcap layer
        return dic;
    }



    /**
     * Iterates over background layers, sets the visibility according to the lb parameter.
     * @param {Integer} lb layer index, optional
     * @returns {ol.layer} layer the visible background layer
     */
    function switchBackground (lb) {
        var n = config.layersBackground.length;
        var lv = 0;
        // look for the visible layer and hide all layers
        $.each(config.layersBackground, function(i, layer) {
            if (layer.getVisible()) {
                lv = i;
            }
            layer.setVisible(false);
        });
        // if lb specified, show this layer
        if (typeof(lb) === 'number') {
            config.layersBackground[config.lb].setVisible(true);
        }
        // otherwise, show next layer
        else {
            config.lb = (lv+1)%n;
            config.layersBackground[config.lb].setVisible(true);
        }
        return config.layersBackground[config.lb];
    };


    /**
     * Parses a wms layer descriptor, calls the legend, returns the wms layer
     * @param {Object} layer the WMS layer descriptor
     * @return {ol.layer.Image} WMS layer
     */
    function parseLayerQueryable(layer) {

        var  imagewms;
        var wms_params = {
            'url': layer.wmsurl_ns,
            params: {
                'LAYERS': layer.layername,
                'FORMAT': 'image/png',
                'TRANSPARENT': true,
                'STYLES': layer.stylename
            },
            extent: config.maxExtent
        }
        imagewms = new ol.layer.Image({
            source: new ol.source.ImageWMS(wms_params)
        });
        getWMSLegend(layer.wmsurl_ns, layer.layername, layer.stylename);
        return imagewms;
    }



    /**
     * Queries the layer capabilities to display its legend and metadata.:
     * @param {String} onlineresource the WMS service URL
     * @param {String} layername
     * @param {String} stylename
     */
    function getWMSLegend(onlineresource, layername, stylename) {
        var parser = new ol.parser.ogc.WMSCapabilities();
        $.ajax({
            url: '/proxy/?url=' + encodeURIComponent(onlineresource + '?SERVICE=WMS&REQUEST=GetCapabilities'),
            type: 'GET',
            success: function(response) {
                var html = '';
                var capabilities, mdLayer, legendArgs;
                capabilities = parser.read(response);

                // searching for the layer
                $.each(capabilities.capability.layers, function(i, layer) {
                    if (layer.name === layername) {
                        mdLayer = layer;
                    }
                });
                if (mdLayer) {
                    legendArgs = {
                        "SERVICE" : "WMS",
                        "VERSION" : capabilities.version,
                        "REQUEST" : "GetLegendGraphic",
                        "FORMAT" : "image/png",
                        "LAYER": mdLayer.name,
                        "STYLE": stylename
                    };

                    html = [];

                    // attribution
                    if (mdLayer.attribution) {
                        html.push('<a target="_blank" class="mdAttrib" href="' + mdLayer.attribution.href + '" >');
                        if (mdLayer.attribution.logo) {
                            html.push("<img class='mdLogo' title='");
                            html.push(escHTML(mdLayer.attribution.title));
                            html.push("' src='" + mdLayer.attribution.logo.href);
                            html.push("' /><br />");
                        }
                        html.push(escHTML(mdLayer.attribution.title));
                        html.push("</a>");
                    }

                    // title
                    html.push("<p><h3 class='mdTitle'>" + escHTML(mdLayer.title) + "</h3>");

                    // abstract
                    html.push("<p class='mdAbstract'>" + escHTML(mdLayer['abstract']));

                    // metadata
                    if (mdLayer.metadataURLs) {
                        $.each(mdLayer.metadataURLs, function(i,md) {
                            if (md.format === "text/html") {
                                html.push("&nbsp;<a target='_blank'class='mdMeta' href='" + md.href + "'>");
                                html.push('voir fiche');
                                html.push(" ... </a>");
                            }
                        });
                    }
                    html.push("</p>");

                    // legend
                    html.push("<img class='mdLegend' src='");
                    html.push(onlineresource + '?' + $.param(legendArgs));
                    html.push("' />");

                    html.push("<hr />");

                    $("#legend").append(html.join(''));
                }
            },
            failure: function() {
                Ol.Console.error.apply(Ol.Console, arguments);
            }
        });
    }




    /**
     * Method: setPermalink
     * keeps permalinks synchronized with the map extent
     */
    function setPermalink () {
        var permalinkHash, permalinkQuery;
        var c = view.getCenter();
        var linkParams = {};
        linkParams.x = encodeURIComponent(Math.round(c[0]));
        linkParams.y = encodeURIComponent(Math.round(c[1]));
        linkParams.z = encodeURIComponent(view.getZoom());
        linkParams.lb = encodeURIComponent(config.lb);
        if (config.kml) { linkParams.kml = config.kml; }
        if (config.layersQueryString) { linkParams.layers = config.layersQueryString; }
        if (config.title) { linkParams.title = config.title; }
        if (config.wmc) { linkParams.wmc = config.wmc; }
        permalinkHash = window.location.origin + window.location.pathname + "#" + jQuery.param(linkParams);
        permalinkQuery = window.location.origin + window.location.pathname + "?" + jQuery.param(linkParams);

        // permalink, social links & QR code update only if frame is visible
        if ($('#panelShare').css('display')==='block') {
            $('#socialLinks').empty();
            $.each(config.socialMedia, function(name, socialUrl) {
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
                icon: null,
                iconpos: "right"
            });
            if ($('#qrcode').css("visibility")==="visible") {
                $('#qrcode').empty();
                new QRCode("qrcode", {
                    text: permalinkQuery,
                    width: 130,
                    height: 130,
                    correctLevel: QRCode.CorrectLevel.L
                });
            }
            $('#permalink').prop('href',permalinkQuery);
            $('#embedcode').text('<iframe style="width: 600px; height: 400px;" src="' +
            permalinkQuery +
            '"></iframe>');
        }
    }



    /**
     * Call external viewers
     * @param viewerId {String} the external viewer codename
     */
    function sendMapTo(viewerId) {
        // sendto : georchestra advanced viewer
        if (viewerId === "georchestra_viewer") {
            var params = {
                "services": [],
                "layers" : []
            };
            $.each(config.layersQueryable, function(i, layer) {
                params.layers.push({
                    "layername" : layer.layername,
                    "owstype" : "WMS",
                    "owsurl" : layer.wmsurl_ns
                });
            });
            $("#georchestraFormData").val(JSON.stringify(params));
            return true;
        }
    }

    // ----- geolocation ------------------------------------------------------------------------------------
    /**
     * Queries the OpenLS service and recenters the map
     * @param text {String} the OpenLS plain text query
     * @Returns {OpenLayers.Layer.KML} the Ol KML layer
     */
    function openLsRequest(text) {

        function onOpenLSSuccess (response) {
            $.mobile.loading('hide');
            try {
                var zoom = 15;
                var results = $(response).find("GeocodedAddress");
                var a = results.find("pos").text().split(" ");
                var lonlat = [parseFloat(a[1]), parseFloat(a[0])];
                var matchType = results.find("GeocodeMatchCode").attr("matchType");
                if (results.length>0) {
                    switch (matchType) {
                        case "City": zoom = 15; break;
                        case "Street": zoom = 17; break;
                        case "Street enhanced": zoom = 18; break;
                        case "Street number": zoom = 18; break;
                    }
                    var ptResult = ol.proj.transform(lonlat, 'EPSG:4326', projcode);
                    // map move and zoom
                    if (ptResult[0]>config.restrictedExtent[0]
                        &ptResult[1]>config.restrictedExtent[1]
                        &ptResult[0]<config.restrictedExtent[2]
                        &ptResult[1]<config.restrictedExtent[3]
                    ) {
                        view.setCenter(ptResult);
                        view.setZoom(zoom);
                        $("#locateMsg").text("");
                    }
                    else {
                        $("#locateMsg").text("Results are off map");
                        $.mobile.loading('hide');
                    }
                }
                else {
                    $("#locateMsg").text("No result");
                    $.mobile.loading('hide');
                }
            } catch(err) {
                $("#locateMsg").text("Geolocation failed");
                $.mobile.loading('hide');
                console.log(err);
            }
        }

        function onOpenLSFailure (response) {
            $("#locateMsg").text("Geolocation failed");
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
                else {
                    // municipality alone
                    countryCode="StreetAddress";
                    freeFormAddress = q;
                }

                $.ajax({
                    url: "/proxy/?url=" + encodeURIComponent(config.openLSGeocodeUrl),
                    type: 'POST',
                    data: [
'<?xml version="1.0" encoding="UTF-8"?> \
<XLS xmlns:xls="http://www.opengis.net/xls" \
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
                    contentType: "application/xml",
                    success: onOpenLSSuccess
                });
            }
            $.mobile.loading('show', {
                text: "searching..."
            });
        }
        catch(err) {
            $.mobile.loading('hide');
            console.log(err.message);
        }
    }







    /**
     * getFeatureInfo
     * @todo how's this is supposed to work ?
     */
    function queryMap(e) {
        var p = e.getPixel();
        $('#panelInfo').popup('close');
        $('#querycontent').empty();
        $.each(config.layersQueryable, function(i, layer) {
            var onlineresource = layer.wmsurl_ns;
            var gfiparams = {
                'SERVICE': 'WMS',
                'VERSION': '1.3.0',
                'REQUEST': 'GetFeatureInfo',
                'LAYERS': layer.layername,
                'WIDTH': map.getSize()[0],
                'HEIGHT': map.getSize()[1],
                'BBOX': view.calculateExtent(map.getSize()).join(','),
                'CRS': projcode,
                'FORMAT': 'image/png',
                'QUERY_LAYERS': layer.layername,
                'INFO_FORMAT': 'text/html',
                'I': Math.round(p[0]),
                'J': Math.round(p[1])
            };
            var url = onlineresource + '?' + $.param(gfiparams);
            // response order = layer order
            var domResponse =  $('<div></div>');
            $('#querycontent').append(domResponse);
            // ajax request
            $.mobile.loading('show');
            $.ajax({
                url: '/proxy/?url=' + encodeURIComponent(url),
                type: 'GET',
                dataType: 'html',
                context: domResponse,
                success: function(response) {
                    // empty reponse detection
                    if (response.search(config.nodata)<0) {
                        $.each(['#panelInfo', '#panelLocate', '#panelShare'], function(i, p) {
                            $(p).popup('close');
                        });
                        $(this).append(response);
                        $('#panelQuery').popup('open');
                    }
                    else {
                        $('#panelQuery').popup('close');
                    };
                    $.mobile.loading('hide');

                },
                failure: function() {
                    $.mobile.loading('hide');
                    console.log(response);
                }
            })
        });
    }



    // search form submit
    function searchPlace() {
        try {
            openLsRequest($("#addressInput").val());
        }
        catch(err) {
            $.mobile.loading('hide');
            console.log(err.message);
        }
        return false;
    };

    // popup size and placement to fit small screens
    function popupLayout (e) {
        var popup = $(this);
        popup.css('top', $('#header').outerHeight()-29);
        popup.css('max-width', Math.min($(window).width() - 44, 450) + 'px');
        popup.css('max-height', $(window).height() - 44 + 'px');
    }

    // visible popup = highlight button
    function popupToggle(e) {
        $.each($("#panelBtn a"), function(i, a) {
            var id = a.href.split('#', 2)[1];
            $(a).buttonMarkup({
                theme: ($("#"+id).css("visibility")==="visible")?"c":"b"
             });
        });
    }

    // updates title on keypress
    function setTitle(e) {
        config.title = $("#setTitle").val();
        document.title = config.title;
        $('#title').text(config.title);
    }

    // Zoom +
    function zoomIn() {
        view.setZoom(view.getZoom()+1);
    };

    //Zoom -
    function zoomOut() {
        view.setZoom(view.getZoom()-1);
    };

    // Back to initial extent
    function zoomInit() {
        view.fitExtent(config.initialExtent, map.getSize());
        view.setRotation(0);
        view.setZoom(config.zinit);
    };

        // ----- config parser --------------------------------------------------------------------------------

    // current config
    config = {
        lb: 0,
        kml: '',
        layersQueryable: [],
        layersQueryString: ''
    };
    $.extend(config, customConfig);
    $.extend(config, hardConfig);

    // querystring param: title
    if (qs['title']) {
        config.title = qs['title'];
        document.title = config.title;
        $('#title').text(config.title);
        $('#setTitle').val(config.title);
    };

    // querystring param: xyz
    if (qs['x']&qs['y']&qs['z']) {
        config['x'] = parseFloat(qs['x']);
        config['y'] = parseFloat(qs['y']);
        config['z'] = parseInt(qs['z']);
    };

        // querystring param: lb (selected background)
    if (qs['lb']) {
        config.lb = parseInt(qs['lb']) % config.layersBackground.length;
    };

    // querystring param: layers
    if (qs['layers']) {
        config.layersQueryString = qs['layers'];
        var ns_layer_style_list = [];
        // parser to retrieve serialized namespace:name[*style] and store the description in config
        ns_layer_style_list = (typeof qs['layers'] === 'string') ? qs['layers'].split(',') : qs['layers']
        $.each(ns_layer_style_list, function(i,s) {
            var p = parseLayerParam(s);
            config.layersQueryable.push(p);
        });
    };

    // querystring param: kml
    if (qs['kml']) {
        config.kml = qs['kml'];
    }

    // ----- map ------------------------------------------------------------------------------------


    // map creation
    view = new ol.View2D({
        center: ol.proj.transform([-2.5,48], 'EPSG:4326', 'EPSG:3857'),
        zoom: config.zinit
    });
    map = new ol.Map({
        controls: [
            new ol.control.ScaleLine(),
            new ol.control.ZoomSlider(),
            new ol.control.FullScreen(),
            new ol.control.Attribution({target: $('#baseAttributions')[0] })
        ],
        layers: [],
        overlays: [],
        target: 'map',
        renderer: ol.RendererHint.CANVAS,
        view: view
    });

    // map recentering
    if (config.x&config.y&config.z) {
        view.setCenter([config.x, config.y]);
        view.setZoom(config.z);
    }
     else {
        view.fitExtent(config.initialExtent, map.getSize());
        view.setRotation(0);
        view.setZoom(config.zinit);
    }

    // adding background layers (opaque, non queryable, mutually exclusive)
    $.each(config.layersBackground, function(i, layer) {
            map.addLayer(layer);
        }
    );
    switchBackground(config.lb);

    // adding queryable WMS layers
    $.each(config.layersQueryable, function(i, layer) {
        map.addLayer(parseLayerQueryable(layer));
    });



    // ----- UI events ------------------------------------------------------------------------------------


    // map events
    map.on('click', queryMap);
    view.on("change:center", setPermalink);
    view.on("change:resolution", setPermalink);

    // map buttons
    $("#ziBt").click(zoomIn);
    $("#zoBt").click(zoomOut);
    $("#zeBt").click(zoomInit);
    $("#bgBt").click(switchBackground);

    // geolocation
    $("#addressForm").on('submit', searchPlace);

    // set title dialog
    $("#setTitle").keypress(setTitle);
    $("#setTitle").blur(setPermalink);

    // sendto form
    $("#georchestraForm").submit(function(e) {
        sendMapTo("georchestra_viewer");
    });

    $(window).bind("orientationchange resize pageshow", popupLayout);
    $(".popupPanel").bind("popupbeforeposition popupafteropen", popupLayout);
    $(".popupPanel").bind("popupafteropen", setPermalink);
    $(".popupPanel").bind("popupbeforeposition popupafterclose", popupToggle);
    $.each($(".popupPanel"), popupLayout);
}




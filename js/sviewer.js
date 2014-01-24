var projcode = 'EPSG:3857';
var projection = ol.proj.get(projcode);
var projectionExtent = projection.getExtent();
var size = ol.extent.getWidth(projectionExtent) / 256;
var resolutions = new Array(20);
var matrixIds = new Array(20);
for (var z = 0; z < 20; ++z) {
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] =projcode + ':' + z;
}
var map;
var view;
var config = {};
var customConfig = {};
var hardConfig = {
    lang: 'en',
    title: 'geOrchestra mobile',
    geOrchestraBaseUrl: 'http://sdi.georchestra.org/',
    projection: projection,
    initialExtent: [-12880000,-1080000,5890000,7540000],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://geobretagne.fr/openls?",
    layersBackground: [
        new ol.layer.Tile({
            preload: 2,
            source: new ol.source.MapQuestOSM()
        }),
        new ol.layer.Tile({
            preload: 2,
            source: new ol.source.MapQuestOpenAerial()
        })
    ],
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};


function initmap() {

    var marker;

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
     * Translates strings
     * @param {String} s input string
     * @return {String} translated string
     */
    function tr(s) {
        if (config.lang !== 'en') {
            return i18n[config.lang][s];
        }
        else {
            return s;
        }
    }

    /**
     * DOM elements i18n
     * @param selector {String} jQuery selector
     * @param propnames {Array} array of property names
     */
    function translateDOM(selector, propnames) {
        $.each($(selector), function(i,e) {
            // text translation
            $(e).text(tr($(e).text()));
            // properties translation
            $.each(propnames, function(j, p) {
                $(e).prop(p, tr($(e).prop(p)));
            });
        });
    }

    /**
     * Parses the query string
     *  Credits http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     * @param {String} s param name
     * @return {String} param value
     */
     var qs = (function(s) {
        if (s === "") return {};
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
        var layerDesc = {};
        layerDesc.nslayername = s.split('*')[0]; // namespace:layername
        layerDesc.stylename = (s.indexOf("*")>0) ? s.split('*',2)[1]:''; // stylename
        layerDesc.namespace = (layerDesc.nslayername.indexOf(":")>0) ? layerDesc.nslayername.split(':',2)[0]:''; // namespace
        layerDesc.layername = (layerDesc.nslayername.indexOf(':')>0) ? layerDesc.nslayername.split(':',2)[1]:''; // layername
        layerDesc.wmsurl_global = config.geOrchestraBaseUrl + '/geoserver/wms'; // global getcap
        layerDesc.wmsurl_ns = config.geOrchestraBaseUrl + '/geoserver/' + layerDesc.namespace + '/wms'; // virtual getcap namespace
        layerDesc.wmsurl_layer = config.geOrchestraBaseUrl + '/geoserver/' + layerDesc.namespace + '/' + layerDesc.layername + '/wms'; // virtual getcap layer
        layerDesc.format = 'image/png';
        return layerDesc;
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
    }


    /**
     * Parses a wms layer descriptor, calls the legend, returns the wms layer
     * @param {Object} layer the WMS layer descriptor
     * @return {ol.layer.Image} WMS layer
     */
    function parseLayerQueryable(layerDescriptor) {
        var  wmslayer;
        var wms_params = {
            'url': layerDescriptor.wmsurl_ns,
            params: {
                'LAYERS': layerDescriptor.layername,
                'FORMAT': layerDescriptor.format,
                'TRANSPARENT': true,
                'STYLES': layerDescriptor.stylename
            },
            extent: config.maxExtent
        };
        if (layerDescriptor.sldurl) {
            wms_params.params.SLD = layerDescriptor.sldurl;
        }
        wmslayer = new ol.layer.Tile({
            source: new ol.source.TileWMS(wms_params)
        });
        getWMSLegend(layerDescriptor);
        return wmslayer;
    }

    /**
     * Loads, parses a Web Map Context and instanciates layers
     * ol3 does dot support WMC format for now
     * @param {String} wmc id of the map or URL of the web map context
     */
    function parseWMC(wmc) {
        var url = '';
        // todo : missing ol3 WMC native support
        function parseWMCResponse(response) {
            var wmc = $('ViewContext', response);
            $(wmc).find('LayerList > Layer').each(function() {
                // we only consider visible and queryable layers
                if ($(this).attr('hidden')!='1' && $(this).attr('queryable')=='1') {
                    var layerDesc = {};
                    layerDesc.nslayername = $(this).children('Name').text();
                    layerDesc.namespace = '';
                    layerDesc.layername = $(this).children('Name').text();
                    layerDesc.wmsurl_global = $(this).find('Server > OnlineResource').attr('xlink:href');
                    layerDesc.wmsurl_ns = layerDesc.wmsurl_global;
                    layerDesc.wmsurl_layer = layerDesc.wmsurl_global;
                    layerDesc.format = $(this).find("FormatList  > Format[current='1']").text();
                    layerDesc.sldurl = ($(this).find("StyleList  > Style[current='1'] > SLD > OnlineResource").attr('xlink:href'));
                    layerDesc.stylename = $(this).find("StyleList  > Style[current='1'] > Name").text();
                    map.addLayer(parseLayerQueryable(layerDesc));
                    $.mobile.loading('hide');
                }
            });
        }
        // wmc comes from a geOrchestra map id
        if (wmc.match(wmc.match(/^[a-z\d]{32}$/))) {
            url = config.geOrchestraBaseUrl + 'mapfishapp/ws/wmc/geodoc' + wmc + '.wmc';
        }
        // wmc with absolute url
        else if (wmc.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
            url = wmc;
        }

        if (url!=='') {
            $.mobile.loading('show');
            $.ajax({
                url: '/proxy/?url=' + encodeURIComponent(url),
                type: 'GET',
                dataType: 'XML',
                success: parseWMCResponse
            });
        }
    }

    /**
     * Queries the layer capabilities to display its legend and metadata.:
     * @param {Object} ld layerDescriptor describes the WMS layer
     */
    function getWMSLegend(ld) {
        //.wmsurl_ns, layerDescriptor.layername, layerDescriptor.stylename
        var parser = new ol.parser.ogc.WMSCapabilities();
        $.ajax({
            url: '/proxy/?url=' + encodeURIComponent(ld.wmsurl_ns + '?SERVICE=WMS&REQUEST=GetCapabilities'),
            type: 'GET',
            success: function(response) {
                var html = '';
                var capabilities, mdLayer, legendArgs;
                capabilities = parser.read(response);

                // searching for the layer
                $.each(capabilities.capability.layers, function(i, layer) {
                    if (layer.name === ld.layername) {
                        mdLayer = layer;
                    }
                });
                if (mdLayer) {
                    legendArgs = {
                        'SERVICE' : 'WMS',
                        'VERSION' : capabilities.version,
                        'REQUEST' : 'GetLegendGraphic',
                        'FORMAT' : 'image/png',
                        'LAYER': mdLayer.name,
                        'STYLE': ld.stylename
                    };
                    if (ld.sldurl) {
                        legendArgs['SLD'] = ld.sldurl;
                    }

                    html = [];

                    // attribution
                    if (mdLayer.attribution) {
                        html.push('<a target="_blank" class="mdAttrib" href="' + mdLayer.attribution.href + '" >');
                        if (mdLayer.attribution.logo) {
                            html.push('<img class="mdLogo" src="' + mdLayer.attribution.logo.href + '" /><br />');
                        }
                        html.push(escHTML(mdLayer.attribution.title));
                        html.push('</a>');
                    }

                    // title
                    html.push('<p><h4 class="mdTitle">' + escHTML(mdLayer.title) + '</h4>');

                    // abstract
                    html.push("<p class='mdAbstract'>" + escHTML(mdLayer.abstract));

                    // metadata
                    if (mdLayer.metadataURLs) {
                        $.each(mdLayer.metadataURLs, function(i,md) {
                            if (md.format === "text/html") {
                                html.push('&nbsp;<a target="_blank" class="mdMeta" href="' + md.href + '">');
                                html.push(tr('metadata'));
                                html.push(" ... </a>");
                            }
                        });
                    }
                    html.push("</p>");

                    // legend
                    html.push('<img class="mdLegend" src="');
                    html.push(ld.wmsurl_ns + '?' + $.param(legendArgs));
                    html.push('" />');

                    html.push('<hr />');

                    $('#legend').append(html.join(''));
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
        // permalink, social links & QR code update only if frame is visible
        if ($('#panelShare').css('visibility')==='visible') {
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
            if (config.id) { linkParams.id = config.id; }
            permalinkHash = window.location.origin + window.location.pathname + "#" + jQuery.param(linkParams);
            permalinkQuery = window.location.origin + window.location.pathname + "?" + jQuery.param(linkParams);

            $('#socialLinks').empty();
            $.each(config.socialMedia, function(name, socialUrl) {
                $('#socialLinks').append('<a data-role="button" class="socialBtn" target="_blank" href="' +
                    socialUrl +
                    encodeURIComponent(permalinkQuery) +
                    '" title="' +
                    tr('share on ') +
                    name +
                    '">' +
                    name +
                    '</a>'
                );
            });
            $('.socialBtn').buttonMarkup({
                mini: true,
                icon: null
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
                var results = $(response).find('GeocodedAddress');
                var a = results.find('pos').text().split(' ');
                var lonlat = [parseFloat(a[1]), parseFloat(a[0])];
                var matchType = results.find('GeocodeMatchCode').attr('matchType');
                if (results.length>0) {
                    switch (matchType) {
                        case 'City': zoom = 15; break;
                        case 'Street': zoom = 17; break;
                        case 'Street enhanced': zoom = 18; break;
                        case 'Street number': zoom = 18; break;
                    }
                    var ptResult = ol.proj.transform(lonlat, 'EPSG:4326', projcode);
                    // map move and zoom
                    if (ptResult[0]>config.restrictedExtent[0] &&
                        ptResult[1]>config.restrictedExtent[1] &&
                        ptResult[0]<config.restrictedExtent[2] &&
                        ptResult[1]<config.restrictedExtent[3]
                    ) {
                        marker.setPosition(ptResult);
                        $('#marker').show();
                        $('#locateMsg').text('');
                        view.setCenter(ptResult);
                        view.setZoom(zoom);
                    }
                    else {
                        $('#locateMsg').text(tr('Results are off map'));
                        $.mobile.loading('hide');
                    }
                }
                else {
                    $('#locateMsg').text('No result');
                    $.mobile.loading('hide');
                }
            } catch(err) {
                $('#locateMsg').text(tr('Geolocation failed'));
                $.mobile.loading('hide');
                console.log(err.message);
            }
        }

        function onOpenLSFailure (response) {
            $('#locateMsg').text(tr('Geolocation failed'));
                $.mobile.loading('hide');
        }

        try {
            var q = text.trim();
            var qa = q.split(',');
            if (q.length>0) {
                var countryCode ='ALL';
                var freeFormAddress ='';
                if (qa.length>1) {
                    // address and municipality separated by a comma
                    var address = qa.slice(0,qa.length-1).join(' ').trim();
                    var municipality = qa[qa.length-1].trim();
                    countryCode='StreetAddress';
                    freeFormAddress = address + ' ' + municipality;
                }
                else {
                    // municipality alone
                    countryCode='StreetAddress';
                    freeFormAddress = q;
                }

                $.ajax({
                    url: "/proxy/?url=" + encodeURIComponent(config.openLSGeocodeUrl),
                    type: 'POST',
                    data: [
/*jshint multistr: true */
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
                $.mobile.loading('show', {
                    text: tr("searching...")
                });
            }
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
        var coord = e.getCoordinate();
        var width = map.getSize()[0];
        var height = map.getSize()[1];
        var bbox = view.calculateExtent(map.getSize()).join(',');

        marker.setPosition(coord);
        $('#marker').show();
        //~ // recenter anime
        var pan = ol.animation.pan({
            duration: 1000,
            source: view.getCenter()
        });
        map.beforeRender(pan);
        view.setCenter(coord);
        $('#panelInfo').popup('close');

        $('#querycontent').empty();
        $.each(config.layersQueryable, function(i, layer) {
            var onlineresource = layer.wmsurl_ns;
            var gfiparams = {
                'SERVICE': 'WMS',
                'VERSION': '1.3.0',
                'REQUEST': 'GetFeatureInfo',
                'LAYERS': layer.nslayername,
                'WIDTH': width,
                'HEIGHT': height,
                'BBOX': bbox,
                'CRS': projcode,
                'FORMAT': 'image/png',
                'QUERY_LAYERS':  layer.layername,
                'INFO_FORMAT': 'text/html',
                'maxFeatures': config.maxFeatures,
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
                        $('#panelQuery').popup('open');
                        $(this).append(tr('no item found'));
                    }
                    $.mobile.loading('hide');

                },
                failure: function() {
                    $.mobile.loading('hide');
                    console.log(response);
                }
            });
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
    }

    // panel size and placement to fit small screens
    function panelLayout (e) {
        var panel = $(this);
        var h = $('#header').outerHeight();
        panel.css('top', $('#header').outerHeight()-30);
        panel.css('max-width', Math.min($(window).width() - 44, 450) + 'px');
        panel.css('max-height', $(window).height() - 44 + 'px');
    }

    // visible popup = highlight button
    function panelToggle(e) {
        $.each($("#panelBtn a"), function(i, a) {
            var id = a.href.split('#', 2)[1];
            $(a).toggleClass('ui-btn-active', ($("#"+id).css('visibility')=='visible'));
        });
    }

    // bypass popup behavior
    function panelButton(e) {
        var idOn = e.target.href.split('#',2)[1];
        $.each($('#panelBtn a'), function(i, a) {
            var id = a.href.split('#',2)[1];
            if (id!=idOn) {
                $('#'+id).popup('close');
            }
            else {
                $('#'+id).popup('open');
            }
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
    }

    //Zoom -
    function zoomOut() {
        view.setZoom(view.getZoom()-1);
    }

    // Back to initial extent
    function zoomInit() {
        view.fitExtent(config.initialExtent, map.getSize());
        view.setRotation(0);
    }

        // ----- configuration --------------------------------------------------------------------------------

    /**
     * reads configuration from querystring
     */
    function doConfiguration() {
        // current config
        config = {
            wmc: '',
            lb: 0,
            kml: '',
            layersQueryable: [],
            layersQueryString: ''
        };
        $.extend(config, hardConfig);
        $.extend(config, customConfig);

        // querystring param: title
        if (qs.title) {
            config.title = qs.title ;
            document.title = config.title;
            $('#title').text(config.title);
            $('#setTitle').val(config.title);
        }

        // querystring param: xyz
        if (qs.x&&qs.y&&qs.z) {
            config.x = parseFloat(qs.x);
            config.y = parseFloat(qs.y);
            config.z = parseInt(qs.z);
        }

        // querystring param: lb (selected background)
        if (qs.lb) {
            config.lb = parseInt(qs.lb) % config.layersBackground.length;
        }

        // querystring param: layers
        if (qs.layers) {
            config.layersQueryString = qs.layers;
            var ns_layer_style_list = [];
            // parser to retrieve serialized namespace:name[*style] and store the description in config
            ns_layer_style_list = (typeof qs.layers === 'string') ? qs.layers.split(',') : qs.layers;
            $.each(ns_layer_style_list, function(i,s) {
                config.layersQueryable.push(parseLayerParam(s));
            });
        }

        // querystring param: map id
        if (qs.wmc) {
            config.wmc = qs.wmc;
        }

        // querystring param: kml
        if (qs.kml) {
            config.kml = qs.kml;
        }

    }


    /**
     * creates the map
     */
    function doMap() {
        // map creation
        view = new ol.View2D();
        map = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ScaleLine(),
                new ol.control.Attribution({target: $('#baseAttributions')[0] })
            ]),
            layers: [],
            overlays: [],
            target: 'map',
            renderer: ol.RendererHint.CANVAS,
            view: view
        });

        // map recentering
        if (config.x&&config.y&&config.z) {
            view.setCenter([config.x, config.y]);
            view.setZoom(config.z);
        }
         else {
            view.fitExtent(config.initialExtent, map.getSize());
            view.setRotation(0);
        }

        // adding background layers (opaque, non queryable, mutually exclusive)
        $.each(config.layersBackground, function(i, layer) {
                map.addLayer(layer);
            }
        );
        switchBackground(config.lb);

        // adding queryable WMS layers from querystring
        $.each(config.layersQueryable, function(i, layer) {
            map.addLayer(parseLayerQueryable(layer));
        });

        // adding WMS layers from georchestra map (WMC)
        if (config.wmc) {
            parseWMC(config.wmc);
        }

        // marker overlay for geoloc and queries
        marker =  new ol.Overlay({
            element: $('#marker'),
            positioning: ol.OverlayPositioning.BOTTOM_CENTER,
            stopEvent: false
        });
        map.addOverlay(marker);
    }







    // ------ Main ------------------------------------------------------------------------------------------

    doConfiguration();
    doMap();

    // map events
    map.on('click', queryMap);
    map.on('moveend', setPermalink);
    $('#marker').click(function(e) { $(e.target).hide('fast'); });


    // map buttons
    $('#ziBt').click(zoomIn);
    $('#zoBt').click(zoomOut);
    $('#zeBt').click(zoomInit);
    $('#bgBt').click(switchBackground);

    // geolocation form
    $('#addressForm').on('submit', searchPlace);

    // set title dialog
    $('#setTitle').keyup(setTitle);
    $('#setTitle').blur(setPermalink);

    // sendto form
    $('#georchestraForm').submit(function(e) {
        sendMapTo('georchestra_viewer');
    });

    // dynamic resize
    $(window).bind('orientationchange resize pageshow', panelLayout);
    $('.popupPanel').bind('popupbeforeposition popupafteropen', panelLayout);
    $.each($('.popupPanel'), panelLayout);
    $('.popupPanel').bind('popupafteropen', setPermalink);
    $('.popupPanel').bind('popupafterclose popupafteropen', panelToggle);
    $('#panelBtn a').bind('click', panelButton);

    // i18n
    translateDOM('.i18n', ['title', 'placeholder', 'value']);
}

// supported (re)projections. add more in customConfig.js
Proj4js.defs["EPSG:4326"] = "+title=WGS 84, +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
Proj4js.defs["EPSG:3857"] = "+title=Web Spherical Mercator, +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
Proj4js.defs["EPSG:900913"] = "+title=Web Spherical Mercator, +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
Proj4js.defs["EPSG:2154"] = "+title=RGF-93/Lambert 93, +proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";

// map projection and grids
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
    title: 'geOrchestra mobile',
    geOrchestraBaseUrl: 'http://sdi.georchestra.org/',
    projection: projection,
    initialExtent: [-12880000,-1080000,5890000,7540000],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://gpp3-wxs.ign.fr/[CLEF GEOPORTAIL]/geoportail/ols?",
    layersBackground: [
        new ol.layer.Tile({
            preload: 2,
            source: new ol.source.MapQuest({layer: 'osm'})
        }),
        new ol.layer.Tile({
            preload: 2,
            source: new ol.source.MapQuest({layer: 'sat'})
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

    // ----- pseudoclasses ------------------------------------------------------------------------------------

    /**
     * LayerQueryable is an enhanced ol3.layer.wms
     * @constructor
     * @param {Object} options or qs layer param (string)
     */
    function LayerQueryable(options) {
        this.options = {
            nslayername: '',
            layername: '',
            namespace: '',
            stylename: '',
            qcl_filter: '',
            wmsurl_global: '',
            wmsurl_ns: '',
            wmsurl_layer: '',
            sldurl: null,
            format: 'image/png',
            opacity: 1
        };
        this.md = {
            title: '',
            abstract: ''
        }
        this.wmslayer = null;

        // to allow usage of this. in jquery statements
        var self = this;

        /**
         * Parses a wms layer descriptor, calls the legend, returns the wms layer
         * @param {String} s the querystring describing the layer
         */
        function parseLayerParam (s) {
            self.options.nslayername = s.split('*')[0]; // namespace:layername
            self.options.stylename = (s.indexOf("*")>0) ? s.split('*',2)[1]:''; // stylename
            self.options.cql_filter = (s.indexOf("*")>1) ? s.split('*',3)[2]:''; // qcl_filter

            self.options.namespace = (self.options.nslayername.indexOf(":")>0) ? self.options.nslayername.split(':',2)[0]:''; // namespace
            self.options.layername = (self.options.nslayername.indexOf(':')>0) ? self.options.nslayername.split(':',2)[1]:''; // layername
            self.options.wmsurl_global = config.geOrchestraBaseUrl + '/geoserver/wms'; // global getcap
            self.options.wmsurl_ns = config.geOrchestraBaseUrl + '/geoserver/' + self.options.namespace + '/wms'; // virtual getcap namespace
            self.options.wmsurl_layer = config.geOrchestraBaseUrl + '/geoserver/' + self.options.namespace + '/' + self.options.layername + '/wms'; // virtual getcap layer
        };

        /**
         * Creates the ol3 WMS layer
         */
        function createLayer() {
            var wms_params = {
                'url': self.options.wmsurl_ns,
                params: {
                    'LAYERS': self.options.layername,
                    'FORMAT': self.options.format,
                    'TRANSPARENT': true,
                    'STYLES': self.options.stylename
                },
                extent: config.maxExtent
            };
            if (self.options.cql_filter) {
                wms_params.params.CQL_FILTER = self.options.cql_filter;
            }
            if (self.options.sldurl) {
                wms_params.params.SLD = self.options.sldurl;
            }
            self.wmslayer = new ol.layer.Tile({
                opacity: isNaN(self.options.opacity)?1:self.options.opacity,
                source: new ol.source.TileWMS(wms_params)
            });
        };

        /**
         * Queries the layer capabilities to display its legend and metadata
         */
        function getMetadata(self) {
            var parser = new ol.format.WMSCapabilities();
            $.ajax({
                url: ajaxURL(self.options.wmsurl_ns + '?SERVICE=WMS&REQUEST=GetCapabilities'),
                type: 'GET',
                success: function(response) {
                    var html = [];
                    var capabilities, mdLayer, legendArgs;
                    capabilities = parser.read(response);
                    // searching for the layer in the capabilities
                    $.each(capabilities.Capability.Layer.Layer, function() {
                        if (this.Name === self.options.layername) {
                            mdLayer = this;
                        }
                    });

                    if (mdLayer) {
                        html.push('<div class="sv-md">');
                        legendArgs = {
                            'SERVICE' : 'WMS',
                            'VERSION' : capabilities.version,
                            'REQUEST' : 'GetLegendGraphic',
                            'FORMAT' : 'image/png',
                            'LAYER': mdLayer.Name,
                            'STYLE': self.options.stylename
                        };
                        if (self.options.sldurl) {
                            legendArgs.SLD = self.options.sldurl;
                        }

                        // attribution
                        if (mdLayer.Attribution) {
                            html.push('<span class="sv-md-attrib">' + tr('source'));
                            html.push(' : <a target="_blank" href="' + mdLayer.Attribution.OnlineResource + '" >');
                            if (mdLayer.Attribution.LogoURL) {
                                html.push('<img class="sv-md-logo" src="' + mdLayer.Attribution.LogoURL.OnlineResource + '" /><br />');
                            }
                            html.push(escHTML(mdLayer.Attribution.Title));
                            html.push('</a></span>');
                        }

                        // title
                        html.push('<p><h4 class="sv-md-title">' + escHTML(mdLayer.Title) + '</h4>');
                        self.md.title = mdLayer.Title;

                        // abstract
                        html.push("<p class='sv-md-abstract'>" + escHTML(mdLayer.Abstract));
                        self.md.Abstract = mdLayer.Abstract;

                        // metadata
                        if (mdLayer.hasOwnProperty('MetadataURL')) {
                            $.each(mdLayer.MetadataURL, function() {
                                if (this.Format === "text/html") {
                                    html.push('&nbsp;<a target="_blank" class="sv-md-meta" href="' + this.OnlineResource + '">');
                                    html.push(tr('metadata'));
                                    html.push(" ... </a>");
                                }
                            });
                        }
                        html.push("</p>");

                        // legend
                        html.push('<img class="sv-md-legend" src="');
                        html.push(self.options.wmsurl_ns + '?' + $.param(legendArgs));
                        html.push('" />');
                        html.push('</div>');

                        $('#legend').append(html.join(''));
                    }
                },
                failure: function() {
                    Ol.Console.error.apply(Ol.Console, arguments);
                }
            });
        };

        /**
         * constructor
         */
        this.construct = function(options) {
            // layers from query string parameter
            if ($.type(options) === "string") {
                parseLayerParam(options);
            }
            else {
                $.extend(this.options, options);
            }
            createLayer();
            getMetadata(self);
        };

        this.construct(options);
    };



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
     * Returns a proxified URL for Ajax XSS
     * @param {String} url
     * @return {String} Ajax url
     */
    function ajaxURL (url) {
        // relative path
        if (url.indexOf('http')!=0) {
            return url;
        }
        // same domain
        else if (url.indexOf(location.protocol + '//' + location.host)===0) {
            return url;
        }
        else {
            return  '/proxy/?url=' + encodeURIComponent(url);
        }
    }

    /**
     * Translates strings
     * @param {String} s input string
     * @return {String} translated string
     */
    function tr(s) {
        if ($.type(hardConfig.i18n[config.lang][s])==='string') {
                return hardConfig.i18n[config.lang][s];
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
                if (p !== "value") {
                    $(e).prop(p, tr($(e).prop(p)));
                }
                else {
                    $(e).val(tr($(e).prop(p)));
                }
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
        if (s === "") {
            return {};
        }
        var b = {};
        for (var i = 0; i < s.length; ++i)
        {
            var p=s[i].split('=');
            if (p.length != 2) {
                continue;
            }
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));


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
     * Loads, parses a Web Map Context and instanciates layers
     * ol3 does dot support WMC format for now
     * @param {String} wmc id of the map or URL of the web map context
     */
    function parseWMC(wmc) {
        var url = '';
        // todo : missing ol3 WMC native support
        function parseWMCResponse(response) {
            var wmc = $('ViewContext', response);
            config.wmctitle = $(wmc).children('General').children('Title').text();
            setTitle(config.wmctitle);

            // recenter on  WMC extent if xyz not specified
            if (isNaN(config.x)) {
                var vgb = $(wmc).children('General').children('BoundingBox');
                var srs = vgb.attr('SRS');
                var extent = [vgb.attr('minx'), vgb.attr('miny'), vgb.attr('maxx'), vgb.attr('maxy')];
                var transf = ol.proj.getTransform(srs, projcode);
                view.fitExtent(ol.extent.applyTransform(extent, transf), map.getSize());
            }

            // we only consider visible and queryable layers
            $(wmc).find('LayerList > Layer[queryable=1]').each(function() {
                if ($(this).attr('hidden')!='1') {
                    var options = {};
                    options.nslayername = $(this).children('Name').text();
                    options.namespace = '';
                    options.layername = $(this).children('Name').text();
                    options.wmsurl_global = $(this).find('Server > OnlineResource').attr('xlink:href');
                    options.wmsurl_ns = options.wmsurl_global;
                    options.wmsurl_layer = options.wmsurl_global;
                    options.format = $(this).find("FormatList  > Format[current='1']").text();
                    options.sldurl = ($(this).find("StyleList  > Style[current='1'] > SLD > OnlineResource").attr('xlink:href'));
                    options.stylename = $(this).find("StyleList  > Style[current='1'] > Name").text();
                    options.opacity = parseFloat($(this).find("opacity").text());
                    var l = new LayerQueryable(options);
                    config.layersQueryable.push(l);
                    map.addLayer(l.wmslayer);
                    $.mobile.loading('hide');
                }
            });

            // perform gfi if requied
            if (config.gfiok) {
                queryMap(view.getCenter());
            };
        }

        // wmc comes from a geOrchestra map id
        if (wmc.match(wmc.match(/^[a-z\d]{32}$/))) {
            url = config.geOrchestraBaseUrl + 'mapfishapp/ws/wmc/geodoc' + wmc + '.wmc';
        }
        // wmc is an url
        else {
            url = wmc;
        }

        if (url!=='') {
            $.mobile.loading('show');
            $.ajax({
                url: ajaxURL(url),
                type: 'GET',
                dataType: 'XML',
                success: parseWMCResponse,
                error: function(xhr) {
                    if (xhr.status==404) {
                        messagePopup(tr("map context not found"));
                    }
                    else {
                        messagePopup(tr("map context error"));
                    };
                    $.mobile.loading('hide');
                }
            });
        }
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
            if (config.gficoord && config.gfiz && config.gfiok) {
                linkParams.x = encodeURIComponent(Math.round(config.gficoord[0]));
                linkParams.y = encodeURIComponent(Math.round(config.gficoord[1]));
                linkParams.z = encodeURIComponent(config.gfiz);

                linkParams.q = '1';
            }
            else {
                linkParams.x = encodeURIComponent(Math.round(c[0]));
                linkParams.y = encodeURIComponent(Math.round(c[1]));
                linkParams.z = encodeURIComponent(view.getZoom());
            }
            linkParams.lb = encodeURIComponent(config.lb);
            if (config.kmlUrl) { linkParams.kml = config.kmlUrl; }
            if (config.layersQueryString) { linkParams.layers = config.layersQueryString; }
            if (config.title&&config.wmctitle!=config.title) { linkParams.title = config.title; }
            if (config.wmc) { linkParams.wmc = config.wmc; }
            permalinkHash = window.location.origin + window.location.pathname + "#" + jQuery.param(linkParams);
            permalinkQuery = window.location.origin + window.location.pathname + "?" + jQuery.param(linkParams);

            $('#socialLinks').empty();
            $.each(config.socialMedia, function(name, socialUrl) {
                $('#socialLinks').append('<a class="ui-btn ui-shadow ui-corner-all" target="_blank" href="' +
                    socialUrl +
                    encodeURIComponent(permalinkQuery) +
                    '" title="' +
                    tr('share on ') +
                    name + '">' +
                    name + '</a>'
                );
            });
            $('#georchestraForm').attr('action', config.geOrchestraBaseUrl + 'mapfishapp/');
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
                    "layername" : layer.options.layername,
                    "owstype" : "WMS",
                    "owsurl" : layer.options.wmsurl_layer
                });
            });
            $("#georchestraFormData").val(JSON.stringify(params));
            //~ return true;
            return false;
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
                    url: ajaxURL(config.openLSGeocodeUrl),
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
            messagePopup(tr('Geolocation failed'));
            $.mobile.loading('hide');
        }
    }

    /**
     * getFeatureInfo
     */
    function queryMap(coord) {
        var p = map.getPixelFromCoordinate(coord);
        config.gficoord = coord;
        config.gfiok = false;
        config.gfiz = view.getZoom();
        var viewResolution = view.getResolution();

        marker.setPosition(config.gficoord);
        $('#marker').show();
        // recenter anime
        var pan = ol.animation.pan({
            duration: 1000,
            source: view.getCenter()
        });
        map.beforeRender(pan);
        view.setCenter(config.gficoord);
        $('#panelInfo').popup('close');
        $('#querycontent').html('');

        // WMS getFeatureInfo
        $.each(config.layersQueryable, function() {
            var url = this.wmslayer.getSource().getGetFeatureInfoUrl(
                config.gficoord,
                viewResolution,
                projection,
                {'INFO_FORMAT': 'text/html'}
            );

            // response order = layer order
            var domResponse =  $('<div><span class="sv-md-title">' + escHTML(this.md.title) + '</span></div>');
            $('#querycontent').append(domResponse);
            // ajax request
            $.mobile.loading('show');
            $.ajax({
                url: ajaxURL(url),
                type: 'GET',
                dataType: 'html',
                context: domResponse,
                success: function(response) {
                    // nonempty reponse detection
                    if (response.search(config.nodata)<0) {
                        $.each(['#panelInfo', '#panelLocate', '#panelShare'], function(i, p) {
                            $(p).popup('close');
                        });
                        $(this).append(response);
                        config.gfiok = true;
                        $('#panelQuery').popup('open');
                    }
                    else {
                        $('#panelQuery').popup('open');
                        $(this).append('<p class="sv-noitem">' + tr('no item found') + '</p>');
                        config.gfiok = false;
                    }
                    $.mobile.loading('hide');

                },
                failure: function() {
                    $.mobile.loading('hide');
                    $(this).append('<p class="sv-noitem">' + tr('query failed') + '</p>');
                }
            });
        });

        // KML getFeatureInfo
        if (config.kmlLayer) {
            var features = [];
            var domResponse =  $('<div class="sv-kml"></div>');
            map.forEachFeatureAtPixel(p, function(feature, layer) {
                features.push(feature) }
            );
            if (features.length > 0) {
                $.each(features, function() {
                    $('#panelQuery').popup('open');
                    domResponse.append(this.get('description'));
                });
                $('#querycontent').append(domResponse);
            }
        };


    }

    /**
     * clear getFeatureInfo
     */
    function clearQuery() {
        $('#marker').hide('fast');
        $('#panelQuery').popup('close');
        $('#querycontent').html(tr('Query the map'));
        config.gficoord = null;
        config.gfiz = null;
        config.gfiok = false;
    };

    // search form submit
    function searchPlace() {
        try {
            openLsRequest($("#addressInput").val());
        }
        catch(err) {
            messagePopup(tr('Geolocation failed'));
            $.mobile.loading('hide');
        }
        return false;
    }

    // panel size and placement to fit small screens
    function panelLayout (e) {
        var panel = $(this);
        panel.css('max-width', Math.min($(window).width() - 44, 450) + 'px');
        panel.css('max-height', $(window).height() - 64 + 'px');
    }

    // visible popup = highlight button
    function panelToggle(e) {
        $.each($("#panelcontrols a"), function() {
            var id = this.href.split('#', 2)[1];
            $(this).toggleClass('ui-btn-active', ($("#"+id).css('visibility')=='visible'));
        });
    }

    // bypass popup behavior
    function panelButton(e) {
        var idOn = e.target.href.split('#',2)[1];
        $.each($('#panelcontrols a'), function() {
            var id = this.href.split('#',2)[1];
            if (id!=idOn) {
                $('#'+id).popup('close');
            }
            else {
                $('#'+id).popup('open');
            }
        });
    }

   // updates title
   function setTitle(title) {
        config.title = title;
        document.title = config.title;
       if (config.title!=='') {
            $('#panelShareBtn').text(config.title);
       }
        if ($("#setTitle").val()==='') {
            $("#setTitle").val(config.title);
        }
    }

    // updates title on keypress
    function onTitle(e) {
        setTitle($("#setTitle").val());
    }

    // Zoom +
    function zoomIn() {
        var zoom = ol.animation.zoom({
            duration: 500,
            source: view.getCenter(),
            resolution: view.getResolution()
        });
        map.beforeRender(zoom);
        view.setZoom(view.getZoom()+1);
    }

    //Zoom -
    function zoomOut() {
        var zoom = ol.animation.zoom({
            duration: 500,
            source: view.getCenter(),
            resolution: view.getResolution()
        });
        map.beforeRender(zoom);
        view.setZoom(view.getZoom()-1);
    }

    // Back to initial extent
    function zoomInit() {
        var start = +new Date();
        var pan = ol.animation.pan({
            duration: 500,
            source: view.getCenter(),
            start: start
        });
        var zoom = ol.animation.zoom({
            duration: 500,
            source: view.getCenter(),
            resolution: view.getResolution(),
            start: start
        });
        map.beforeRender(pan, zoom);
        view.fitExtent(config.initialExtent, map.getSize());
        view.setRotation(0);
    }

    //  info popup
    function messagePopup(msg){
        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>"+msg+"</h3></div>")
        .css({
            display: "block",
            position: "fixed",
            padding: "7px",
            "text-align": "center",
            width: "270px",
            left: ($(window).width() - 284)/2,
            top: $(window).height()/2 })
            .appendTo( $.mobile.pageContainer ).delay( 1500 )
            .fadeOut( 1000, function(){
            $(this).remove();
        });
    }

        // ----- configuration --------------------------------------------------------------------------------

    /**
     * reads configuration from querystring
     */
    function doConfiguration() {

        // browser language
        var language = ((navigator.language) ? navigator.language : navigator.userLanguage).substring(0,2);

        // current config
        config = {
            lang: ((hardConfig.i18n.hasOwnProperty(language)) ? language : 'en'),
            wmc: '',
            lb: 0,
            layersQueryable: [],
            layersQueryString: ''
        };
        $.extend(config, hardConfig);
        $.extend(config, customConfig);

        // querystring param: lb (selected background)
        if (qs.lb) {
            config.lb = parseInt(qs.lb) % config.layersBackground.length;
        }

        // querystring param: map id
        if (qs.wmc) {
            config.wmc = qs.wmc;
        }

        // querystring param: layers
        if (qs.layers) {
            config.layersQueryString = qs.layers;
            var ns_layer_style_list = [];
            // parser to retrieve serialized namespace:name[*style[*cql_filter]] and store the description in config
            ns_layer_style_list = (typeof qs.layers === 'string') ? qs.layers.split(',') : qs.layers;
            $.each(ns_layer_style_list, function() {
                config.layersQueryable.push(new LayerQueryable(this));
            });
        }

        // querystring param: xyz
        if (qs.x&&qs.y&&qs.z) {
            config.x = parseFloat(qs.x);
            config.y = parseFloat(qs.y);
            config.z = parseInt(qs.z);
        }

        // querystring param: title
        if (qs.title) {
            setTitle(qs.title);
        }
        else {
            setTitle(config.title);
        }

        // querystring param: kml
        if (qs.kml) {
            config.kmlUrl = qs.kml;
        }

        // querystring param: perform getFeatureInfo
        if (qs.q) {
            config.gfiok = true;
        }
    }


    /**
     * creates the map
     */
    function doMap() {
        // map creation
        view = new ol.View2D();
        map = new ol.Map({
            controls: [
                new ol.control.ScaleLine(),
                new ol.control.Attribution()
            ],
            layers: [],
            overlays: [],
            target: 'map',
            renderer: ol.RendererType.CANVAS,
            view: view
        });

        // adding background layers (opaque, non queryable, mutually exclusive)
        $.each(config.layersBackground, function() {
                this.setVisible(false);
                map.addLayer(this);
            }
        );
        switchBackground(config.lb);

        // adding WMS layers from georchestra map (WMC)
        // try wmc=58a713a089cf408419b871b73110b7cb on dev.geobretagne.fr
        if (config.wmc) {
            parseWMC(config.wmc);
        }

        // adding queryable WMS layers from querystring
        $.each(config.layersQueryable, function() {
            map.addLayer(this.wmslayer);
        });

        // adding kml overlay
        if (config.kmlUrl) {
            config.kmlLayer = new ol.layer.Vector({
                source: new ol.source.KML({
                    projection: 'EPSG:3857',
                    url: ajaxURL(config.kmlUrl)
                })
            });
            map.addLayer(config.kmlLayer);
        }

        // map recentering
        if (config.x&&config.y&&config.z) {
            view.setCenter([config.x, config.y]);
            view.setZoom(config.z);
        }
         else {
            view.fitExtent(config.initialExtent, map.getSize());
            view.setRotation(0);
        }


        // marker overlay for geoloc and queries
        marker =  new ol.Overlay({
            element: $('#marker'),
            positioning: ol.OverlayPositioning.BOTTOM_LEFT,
            stopEvent: false
        });
        map.addOverlay(marker);
    }







    // ------ Main ------------------------------------------------------------------------------------------

    doConfiguration();
    doMap();

    // opens permalink tab if required
    if (qs.qr) {
        setPermalink();
        $('#panelShare').popup('open');
    }

    // map events
    map.on('singleclick', function(e) {
        queryMap(e.coordinate);
    });
    map.on('moveend', setPermalink);
    $('#marker').click(clearQuery);


    // map buttons
    $('#ziBt').click(zoomIn);
    $('#zoBt').click(zoomOut);
    $('#zeBt').click(zoomInit);
    $('#bgBt').click(switchBackground);

    // geolocation form
    $('#addressForm').on('submit', searchPlace);

    // set title dialog
    $('#setTitle').keyup(onTitle);
    $('#setTitle').blur(setPermalink);

    // sendto form
    $('#georchestraForm').submit(function(e) {
        sendMapTo('georchestra_viewer');
    });

    // dynamic resize
    $(window).bind('orientationchange resize pageshow updatelayout', panelLayout);
    $('.sv-panel').bind('popupbeforeposition popupafteropen', panelLayout);
    $.each($('.sv-panel'), panelLayout);
    $('.sv-panel').bind('popupafteropen', setPermalink);
    $('.sv-panel').bind('popupafterclose popupafteropen', panelToggle);
    $('#panelcontrols a').bind('click', panelButton);

    // i18n
    if (config.lang !== 'en') {
        translateDOM('.i18n', ['title', 'placeholder', 'value']);
    }

    if (config.gfiok && (!(config.wmc.length>0))) {
        //~ queryMap(view.getCenter());
        setTimeout(
            function() { queryMap(view.getCenter()) },
            300
        );
    }
}

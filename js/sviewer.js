/*globals $:false, ol:false, proj4:false, QRCode:false*/

// supported (re)projections. add more in customConfig.js
proj4.defs([
    ["EPSG:4326", "+title=WGS 84, +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"],
    ["EPSG:3857", "+title=Web Spherical Mercator, +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"],
    ["EPSG:900913", "+title=Web Spherical Mercator, +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"],
    ["EPSG:2154", "+title=RGF-93/Lambert 93, +proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    ["EPSG:3948", "+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
]);

var config = {};
var customConfig = {};
var hardConfig = {
    title: 'geOrchestra mobile',
    geOrchestraBaseUrl: 'https://public.sig.rennesmetropole.fr/',
    projcode: 'EPSG:3857',
    initialExtent: [-12880000,-1080000,5890000,7540000],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://gpp3-wxs.ign.fr/[CLEF GEOPORTAIL]/geoportail/ols?",
    layersBackground: [
        new ol.layer.Tile({
              source: new ol.source.OSM()
        })
    ],
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};


var SViewer = function() {
    var map;
    var view;
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
        };
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
        }

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
        }

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
                            html.push('<span class="sv-md-attrib">' + escHTML(tr('source')));
                            html.push(' : <a target="_blank" href="' + escHTML(mdLayer.Attribution.OnlineResource) + '" >');
                            if (mdLayer.Attribution.LogoURL) {
                                html.push('<img class="sv-md-logo" src="' + escHTML(mdLayer.Attribution.LogoURL.OnlineResource) + '" /><br />');
                            }
                            html.push(escHTML(mdLayer.Attribution.Title));
                            html.push('</a></span>');
                        }

                        // title
                        html.push('<p><h4 class="sv-md-title">' + escHTML(mdLayer.Title) + '</h4>');
                        self.md.title = mdLayer.Title;
                        if (config.search) {
                            config.searchparams.title = self.md.title;
                        }

                        // abstract
                        html.push("<p class='sv-md-abstract'>" + escHTML(mdLayer.Abstract));
                        self.md.Abstract = mdLayer.Abstract;

                        // metadata
                        if (mdLayer.hasOwnProperty('MetadataURL')) {
                            $.each(mdLayer.MetadataURL, function() {
                                if (this.Format === "text/html") {
                                    html.push('&nbsp;<a target="_blank" class="sv-md-meta" href="' + escHTML(this.OnlineResource) + '">');
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
                }
            });
        }

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
    }



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
        if (url.indexOf('http')!==0) {
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
     * Adjust map size on resize
     */
    function fixContentHeight() {
        var header = $("#header"),
            content = $("#frameMap"),
            viewHeight = $(window).height(),
            contentHeight = viewHeight - header.outerHeight();

        if ((content.outerHeight() + header.outerHeight()) !== viewHeight) {
            contentHeight -= (content.outerHeight() - content.height());
            content.height(contentHeight);
        }
        if (window.map) {
            map.updateSize();
        }
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
        sendInformationToParentPage();
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
                view.fit(ol.proj.transformExtent(extent, srs, config.projcode), map.getSize());
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

            //activate search if required
            if (config.search) {
                activateSearchFeatures('remote');
            }

            // perform gfi if requied
            if (config.gfiok) {
                queryMap(view.getCenter());
            }
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
                    }
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
            if (config.customConfigName) { linkParams.c = config.customConfigName; }
            if (config.kmlUrl) { linkParams.kml = config.kmlUrl; }
            if (config.search) { linkParams.s = '1'; }
            if (config.layersQueryString) { linkParams.layers = config.layersQueryString; }
            if (config.title&&config.wmctitle!=config.title) { linkParams.title = config.title; }
            if (config.wmc) { linkParams.wmc = config.wmc; }
            permalinkHash = window.location.origin + window.location.pathname + "#" + $.param(linkParams);
            permalinkQuery = window.location.origin + window.location.pathname + "?" + $.param(linkParams);

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
        sendInformationToParentPage();
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
     */
    function openLsRequest(text) {

        function onOpenLSSuccess (response) {
            $.mobile.loading('hide');
            try {
                var zoom = false,
                    extent = [],
                    results = $(response).find('GeocodedAddress'),
                    items = [];
                if (results.length>0) {
                    $.each(results, function(i, res) {
                        var a = res.getElementsByTagNameNS('http://www.opengis.net/gml', 'pos')[0].textContent.split(' '),
                            lonlat = [parseFloat(a[1]), parseFloat(a[0])],
                            matchType = results.find('GeocodeMatchCode').attr('matchType'),
                            ptResult = ol.proj.transform(lonlat, 'EPSG:4326', config.projcode),
                            street = $(res).find("Street").text(),
                            municipality = $(res).find('[type="Municipality"]').text();
                        switch (matchType) {
                            case 'City': zoom = 15; break;
                            case 'Street': zoom = 17; break;
                            case 'Street enhanced': zoom = 18; break;
                            case 'Street number': zoom = 18; break;
                        }
                        if (!zoom) {
                            extent = ol.proj.transformExtent(
                                JSON.parse('[' +  $(results[i]).find('[type="Bbox"]').text().replace(/;/g,",") + ']'),
                                'EPSG:4326',
                                map.getView().getProjection().getCode()
                            );
                        }
                        var code =  $(res).find('[type="INSEE"]').text();
                        var resultElems = [municipality, code];
                        if (street.length>1) {
                            resultElems.unshift(street);
                        }
                        var label = resultElems.join (" ");
                        var item =$('<li class="sv-location" data-icon="location"><a href="#"></a></li>')
                                .find("a")
                                .text(label)
                                .parent()
                                .attr("title", resultElems.join('\n'))
                                .click({
                                    'extent': extent,
                                    'coordinates': ptResult,
                                    'zoom': zoom
                                }, onSearchItemClick);
                        items.push(item);
                    });
                    $("#searchResults").prepend(items);
                    $("#searchResults").prepend('<li data-role="list-divider">Localit&eacute;s</li>');
                    $("#searchResults").listview().listview('refresh');
                }
                else {
                    //$('#locateMsg').text('No result');
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
            var extent = ol.proj.transformExtent(config.initialExtent,map.getView().getProjection().getCode(), 'EPSG:4326');
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
<Request maximumResponses="'+config.maxFeatures+'" requestID="1" version="1.2" methodName="LocationUtilityService"> \
<GeocodeRequest returnFreeForm="false"> \
<Address countryCode="',
countryCode,
'">\n \
<freeFormAddress>',
freeFormAddress,
'</freeFormAddress> \
<gml:envelope> \
<gml:pos>',
ol.extent.getBottomLeft(extent).reverse().join(" "),
'</gml:pos> \
<gml:pos>',
ol.extent.getTopRight(extent).reverse().join(" "),
'</gml:pos> \
</gml:envelope> \
</Address> \
</GeocodeRequest> \
</Request> \
</XLS>'].join(""),
                    contentType: "application/xml",
                    success: onOpenLSSuccess,
                    failure: onOpenLSFailure
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
                config.projection,
                {'INFO_FORMAT': 'text/html',
                'FEATURE_COUNT': config.maxFeatures}
            );

            // response order = layer order
            var domResponse =  $($('<div>').append($('<span class="sv-md-title">').text(this.md.title)));
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
                        $('#panelQuery a').attr("rel","external");
                        $('#panelQuery').popup('open');
                    }
                    else {
                        // disable jquery ajax for links
                        $('#panelQuery').popup('open');
                        $(this).append($('<p class="sv-noitem">').text(tr('no item found')));
                        config.gfiok = false;
                    }
                    $.mobile.loading('hide');
                },
                failure: function() {
                    $.mobile.loading('hide');
                    $(this).append($('<p class="sv-noitem">').text(tr('query failed')));
                }
            });
        });

        // KML getFeatureInfo
        if (config.kmlLayer) {
            var features = [];
            var domResponse =  $('<div class="sv-kml"></div>');
            map.forEachFeatureAtPixel(p, function(feature, layer) {
                features.push(feature);
            });
            if (features.length > 0) {
                $.each(features, function() {
                    $('#panelQuery').popup('open');
                    if (this.get('description')) {
                        domResponse.append(this.get('description'));
                    }
                    else {
                        $.each(this.getProperties(), function(k, v) {
                            if ($.type(v)==="string") {
                                domResponse.append($('<span class="sv-key">').text(k + ':'));
                                domResponse.append($('<span class="sv-value">').text(v));
                                domResponse.append($('<br>'));

                            }
                        });
                    }
                });
                $('#querycontent').append(domResponse);
            }
        }


    }

    /**
     * clear getFeatureInfo
     */
    function clearQuery() {
        $('#marker').hide('fast');
        $('#panelQuery').popup('close');
        $('#querycontent').text(tr('Query the map'));
        config.gficoord = null;
        config.gfiz = null;
        config.gfiok = false;
    }


    /**
     * method: searchFeatures
     * search features whose string attributes match a pattern;
     * 'local' mode handles KML featureCollections
     * 'remote' mode performs a WFS getFeature query,
     * @param {String} value search pattern
     */
    function searchFeatures(value) {
        if (value.length>1) {
            config.searchparams.term = value;
            if (config.searchparams.mode === 'remote') {
                var ogcfilter = [],
                    propertynames = [],
                    getFeatureRequest;

                $.each(config.searchparams.searchfields, function(i, fieldname) {
                    /*matchCase="false" for PropertyIsLike don't works with geoserver 2.5.0* in wfs 2.0.0 version*/
                    ogcfilter.push(
                    '<ogc:PropertyIsLike wildCard="*" singleChar="." escapeChar="!" matchCase="false" >' +
                    '<ogc:PropertyName>'+fieldname+'</ogc:PropertyName>' +
                    '<ogc:Literal>*'+value+'*</ogc:Literal></ogc:PropertyIsLike>');
                    propertynames.push('<ogc:PropertyName>'+fieldname+'</ogc:PropertyName>');
                });
                propertynames.push('<ogc:PropertyName>'+config.searchparams.geom+'</ogc:PropertyName>');
                if (config.searchparams.searchfields.length > 1) {
                    ogcfilter.unshift('<ogc:Or>');
                    ogcfilter.push('</ogc:Or>');
                }
                ogcfilter.unshift('<ogc:And>');
                ogcfilter.push(['<ogc:BBOX>',
                        '<ogc:PropertyName>'+config.searchparams.geom+'</ogc:PropertyName>',
                        '<gml:Envelope xmlns:gml="http://www.opengis.net/gml" srsName="'+config.projection.getCode()+'">',
                          '<gml:lowerCorner>'+ol.extent.getBottomLeft(config.initialExtent).join(" ")+'</gml:lowerCorner>',
                          '<gml:upperCorner>'+ol.extent.getTopRight(config.initialExtent).join(" ")+'</gml:upperCorner>',
                        '</gml:Envelope>',
                      '</ogc:BBOX>'].join( ' ' ));
                ogcfilter.push('</ogc:And>');

                getFeatureRequest = ['<?xml version="1.0" encoding="UTF-8"?>',
                    '<wfs:GetFeature',
                        'xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.1.0"',
                        'xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"',
                        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" maxFeatures="'+config.maxFeatures+'" outputFormat="application/json">',
                          '<wfs:Query xmlns:ogc="http://www.opengis.net/ogc"' +
                           ' typeName="'+config.searchparams.typename+'" srsName="'+config.projection.getCode()+'">',
                            propertynames.join(' '),
                            '<ogc:Filter>',
                               ogcfilter.join(' '),
                            '</ogc:Filter>',
                        '</wfs:Query>',
                    '</wfs:GetFeature>'].join (' ');
                $.ajax({
                    type: 'POST',
                    url: ajaxURL(config.searchparams.url),
                    data: getFeatureRequest,
                    dataType: 'json',
                    contentType: "application/xml",
                    success: function(response) {
                        var f =  new ol.format.GeoJSON().readFeatures(response);
                        if (f.length > 0) {
                            featuresToList(f);
                        }
                    },
                    failure: function() {
                        console.log('error ');
                    }
                });
            }
            if (config.searchparams.mode === 'local') {
                // construct a pseudo index the first use
                if (!config.searchindex) {
                    var pseudoIndex = [];
                    $.each(config.kmlLayer.getSource().getFeatures(), function(i, feature) {
                        // construct an index with all text attributes
                        var id = feature.getId();
                        var props = feature.getProperties();
                        var idx = "";
                        $.each(props, function(key, value) {
                            if (key=="name" && typeof(value==='string')) {
                                idx+='|' + value.toLowerCase();
                            }
                        })
                        pseudoIndex.push({id:id, data:idx});
                    });
                    config.searchindex = pseudoIndex;
                }
                // use pseudo index to retrieve matching features
                if (config.searchindex) {
                    var features = [];
                    var responses = 0;
                    $.each(config.searchindex.slice(0,config.maxFeatures), function(i, v) {
                        if (config.searchindex[i].data.indexOf(value.toLowerCase())!=-1) {
                            features.push(config.kmlLayer.getSource().getFeatureById(config.searchindex[i].id));
                            responses +=1;
                        }
                    })
                    featuresToList(features);
                }
            }
        }
    }
    
    /**
     * method: activateSearchFeatures
     * prepares for feature search;
     * performs DescribeLayer/DescribeFeatureType if necessary
     * @param {String} mode local|remote
     */
    function activateSearchFeatures(mode) {
        config.searchparams.mode = mode ;
        if (mode === 'remote') {
            var searchLayer = config.layersQueryable[config.layersQueryable.length -1];
            if (searchLayer) {
                config.searchparams.title = searchLayer.md.title;
                // get DescribeLayer from last Layer
                var describeLayerUrl = searchLayer.options.wmsurl_ns;
                $.ajax({
                        url: ajaxURL(describeLayerUrl + "?" + $.param({
                                'SERVICE': 'WMS',
                                'VERSION': '1.1.1',
                                'REQUEST': 'DescribeLayer',
                                'LAYERS': searchLayer.options.layername
                        })),
                        type: 'GET',
                        success: function(response) {
                            config.searchparams.url = $(response).find("LayerDescription").attr("wfs");
                            config.searchparams.typename = $(response).find("Query").attr("typeName");
                            $.ajax({
                                url: ajaxURL(
                                        $(response).find("LayerDescription").attr("wfs") + 
                                        $.param({
                                            'SERVICE': 'WFS',
                                            'VERSION': '1.0.0',
                                            'REQUEST': 'DescribeFeatureType',
                                            'TYPENAME': $(response).find("Query").attr("typeName")
                                        })
                                    ),
                                type: 'GET',
                                success: function(response) {
                                    var fields = [];
                                    $(response.getElementsByTagNameNS("*","sequence")).find('[type="xsd\\:string"]')
                                        .each(function( i ) {
                                            fields.push($(this).attr("name"));
                                    });
                                    config.searchparams.geom = $(response.getElementsByTagNameNS("*",
                                        "sequence")).find('[type*="gml\\:"]').attr("name");
                                    config.searchparams.searchfields = fields;
                                    config.searchparams.ns = $(response.getElementsByTagNameNS("*","schema"))
                                        .attr("targetNamespace");
                                    config.searchparams.name = config.searchparams.typename.split(":")[1];
                                },
                                failure: function() {
                                    alert('error');
                                }
                            });

                        },
                        failure: function() {
                            alert('error');
                        }
                    });
                }
            }
            if (mode === 'local') {
                //nothing for the moment. the local search initializes on first search.
            }
    }

    /**
     * method: onSearchItemClick
     * recenters map on feature click
     * @param {Jquery.Event} event
     */
    function onSearchItemClick (event) {
        var data = event.data;
        marker.setPosition(event.data.coordinates);
        if (data.extent.length===4 && !(data.extent[0] == data.extent[2] && data.extent[1] == data.extent[3])) {
            view.fit(data.extent, map.getSize());
        } else {
            view.setCenter(data.coordinates,map.getSize());
            view.setZoom(data.zoom || 16);
        }
        $('#marker').show();
    }

    
    /**
     * method: featuresToList
     * renders a clickable list of features
     * @param {ol.features} features
     */
    function featuresToList (features) {
        var lib = config.searchparams.title || tr('Top layer');
        $("#searchResults").append($('<li data-role="list-divider">').text(lib));

        $.each(features, function(i, feature) {
            var geom = feature.getGeometry(),
                attributes = feature.getProperties(),
                tips = [],
                title = [];

            $.map(attributes, function(val, i) {
                if (typeof(val)=== 'string') {
                    tips.push(i + ' : ' + val);
                    if (val.toLowerCase().search(config.searchparams.term.toLowerCase())!= -1) {
                        title.push(val);
                    }
                }
            });

            $('<li class="sv-feature" data-icon="star"><a href="#"></a></li>')
                .find("a")
                .text(title.join(", "))
                .click({
                        'extent': geom.getExtent(),
                        'coordinates': (geom.getType()==='Point') ? geom.getCoordinates() : ol.extent.getCenter(geom.getExtent())
                    }, onSearchItemClick)
                .parent()
                .attr("title", tips.join('\n'))
                .appendTo($("#searchResults"));
        });
        $("#searchResults").listview().listview('refresh');
    }

    /**
     * method: searchPlace
     * search for matching places (OpenLS) and features
     */
    function searchPlace() {
        $("#searchResults").html("");
        try {
            openLsRequest($("#searchInput").val());
            if (config.search) {
                searchFeatures($("#searchInput").val());
            }
        }
        catch(err) {
            messagePopup(tr('Geolocation failed'));
            $.mobile.loading('hide');
        }
        return false;
    }
//-------------------------------Rennes métropole---------------------------------------------------------------------------    
    
    dataAutocomplete = []; // store addresses and localities names. Used to display in autocompletion
    dataAutocompleteCoordinates = []; // store addresses and localities names and coordinates. Used to display matching address or locality on the map
    
    /**
     * method: getAddressesAsked
     * Queries the api RVA (Référentiel Voies et Adresses) of Rennes Metropole 
     * to find matching addresses and localities 
     */
    function getAddressesAsked() {
    	dataAutocompleteCoordinates.splice(0, dataAutocompleteCoordinates.length);
        dataAutocomplete.splice(0, dataAutocomplete.length);
    	var adressAsked = $("#searchInput").val();
    	var adressAskedSplit = adressAsked.split(','); 
    	var adressAskedLowerCase = adressAsked.toLowerCase();
    	var requestLanes = 'https://api-rva.sig.rennesmetropole.fr/?key=556ead9b7893a352bcf9&version=1.0&format=json&epsg=3948&cmd=getlanes&insee=all&query=' + adressAskedSplit[0];
    	var requestAddresses = 'https://api-rva.sig.rennesmetropole.fr/?key=556ead9b7893a352bcf9&version=1.0&format=json&epsg=3948&cmd=getfulladdresses&query='+ adressAskedSplit[0];
    	
    	if (adressAskedSplit[0].length > 5) {
	    	$.getJSON(requestLanes, function(dataApiJson) {
	    		var data = dataApiJson.rva.answer;
	    		if ((data.lanes).length > 0) {
	    			data.lanes.forEach(function(lane) {
	    				if (lane.type == 'Lieu-dit') {
	    					var localityName = lane.name4 + ' (Lieu-dit)';
	    					dataAutocomplete.push(localityName);
	    					var laneUpperCornerSplit = lane.upperCorner.split(' ');
	    					var laneInformations = [localityName, laneUpperCornerSplit[0], laneUpperCornerSplit[1]];
	    					dataAutocompleteCoordinates.push(laneInformations);
	    				}
	    			});
	    		 }
	    	});
	    	
	    	$.getJSON(requestAddresses, function(dataApiJson) {
	    		var data = dataApiJson.rva.answer;
	    		if ( ((data.addresses).length > 0 )  ) {
	    			data.addresses.forEach(function(address) {
		    			if( ((address.addr3.toLowerCase().substring(0, adressAskedLowerCase.length)) == adressAskedLowerCase)
		    				|| ((address.addr3.toLowerCase().includes(adressAskedLowerCase)) == true)) {
		    				if (dataAutocomplete.indexOf(address.addr3) == -1) {
		    					dataAutocomplete.push(address.addr3);
			    				var addressInformations = [address.addr3, address.x, address.y];
			    				dataAutocompleteCoordinates.push(addressInformations);
		    				}
	    				}
	    			});
	    		}
	    	});
    	}
    }
    
    var options = {
            minCharNumber: 3,
            adjustWidth: false,
            data: dataAutocomplete,
            requestDelay: 150,
            list: {
                onClickEvent: function() {
                	var addressSearch = $("#searchInput").val();
                	dataAutocompleteCoordinates.forEach(function(data) {
                		if (data[0] == addressSearch) {
                			var xyCoord = [data[1], data[2]];
                            view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                            if (addressSearch.indexOf('Lieu-dit') != -1) {
                            	view.setZoom(18);
                            } else {
                            	view.setZoom(20);
                            	 marker.setPosition(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                            }
                		}
                	}); 
                }
            }
        };
        //$("#searchInput").easyAutocomplete(options);
        
       $("#searchInput").autocomplete({
            source: dataAutocomplete,
            appendTo: "#addressForm",
            delay: 200,
            minLength: 3,
        });
        
        $("#searchInput").on( "autocompleteselect", function(event, ui) {
        	var addressSearch = ui.item.value;
        	dataAutocompleteCoordinates.forEach(function(data) {
        		if (data[0] == addressSearch) {
        			var xyCoord = [data[1], data[2]];
                    view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                    if (addressSearch.indexOf('Lieu-dit') != -1) {
                    	view.setZoom(18);
                    } else {
                    	view.setZoom(20);
                    	 marker.setPosition(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                    }
        		}
        	});
        });
        
        
        $('.ui-autocomplete').css('max-height','40%');
        $('.ui-autocomplete').css('max-width','90%');
        $('.ui-autocomplete').css('overflow-y','auto');
        $('.ui-autocomplete').css('overflow-x','hidden');
 
        
   /* $("#searchInput").on('autocompleteclose', function(event, ui) {
        	$('#ui-id-1').css('display', 'block');
        });*/
        
            
    /**
     * method: searchLocality
     * Queries the api RVA (Référentiel Voies et Adresses) of Rennes Metropole to find locality
     * @param {string} adressAsked address to find
     */
    function searchLocality(adressAsked) {
        var request = 'https://api-rva.sig.rennesmetropole.fr/?key=556ead9b7893a352bcf9&version=1.0&format=json&epsg=3948&cmd=getlanes&insee=all&query=' + adressAsked;
        $.getJSON(request, function(dataApiJson) {
            var answer = dataApiJson.rva.answer;
            // if several addresses was found
            if (answer.lanes.length > 0) {
                var lowerCornerSplit = answer.lanes[0].lowerCorner.split([' ']);
                var upperCornerSplit = answer.lanes[0].upperCorner.split([' ']);
                var xyCoordUp = [upperCornerSplit[0], upperCornerSplit[1]];
                view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoordUp));
                view.setZoom(18);
            } else {
                 //searchPlace();
            	messagePopup(tr("adresse non trouvée"));
            }
        });
    }
    
    /**
     * method: searchAddress
     * Queries the api RVA (Référentiel Voies et Adresses) of Rennes Metropole to find a place
     */
    function searchAddress() {
        var adressAsked = $("#searchInput").val();
        var request = 'https://api-rva.sig.rennesmetropole.fr/?key=556ead9b7893a352bcf9&version=1.0&format=json&epsg=3948&cmd=getfulladdresses&query='+ adressAsked.split(',')[0];
        var xyCoord;
        $.getJSON(request, function(dataApiJson) {
            var addresses = dataApiJson.rva.answer.addresses;
            // if several addresses was found
            if (addresses.length > 1) {
                // if the request ask by the user starts by a number zoom in the street address
                if (isNaN(parseInt(adressAsked.split(' ')[0])) == false) {
                    addresses.forEach(function(address) {
                        if (address.addr2 == adressAsked) {
                            xyCoord = [address.x, address.y];
                            view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                            view.setZoom(20);
                        } 
                    });
                // else zoom in the street
                } else {
                    xyCoord = [addresses[0].x, addresses[0].y];
                    view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                    view.setZoom(19);
                }
            // if only one adresse was found zoom in this address
            } else if(addresses.length == 1) {
                xyCoord = [addresses[0].x, addresses[0].y];
                view.setCenter(proj4('EPSG:3948', 'EPSG:3857', xyCoord));
                view.setZoom(20);
            // if no address was found, call to the function searchPlace
            } else {
                searchLocality(adressAsked.split(',')[0]);
            }
        });
        return false;
    }
    /**
     * method: sendInformationToParentPage
     * send link parms to the parent page
     * used if the sviewer is in an iframe 
     */
    function sendInformationToParentPage() {
	    var c = view.getCenter();
	    var linkParams = {};
	    if (config.gficoord && config.gfiz && config.gfiok) {
	        linkParams.x = encodeURIComponent(Math.round(config.gficoord[0]));
	        linkParams.y = encodeURIComponent(Math.round(config.gficoord[1]));
	        linkParams.z = encodeURIComponent(config.gfiz);
	        linkParams.q = '1';
	    }
	    else {
	    	if ( c!= null) {
		        linkParams.x = encodeURIComponent(Math.round(c[0]));
		        linkParams.y = encodeURIComponent(Math.round(c[1]));
		        linkParams.z = encodeURIComponent(view.getZoom());
	    	}
	    }
	    linkParams.lb = encodeURIComponent(config.lb);
	    if (config.customConfigName) { linkParams.c = config.customConfigName; }
	    if (config.kmlUrl) { linkParams.kml = config.kmlUrl; }
	    if (config.search) { linkParams.s = '1'; }
	    if (config.layersQueryString) { linkParams.layers = config.layersQueryString; }
	    if (config.title&&config.wmctitle!=config.title) { linkParams.title = config.title; }
	    if (config.wmc) { linkParams.wmc = config.wmc; }

	    try{
	    	if (typeof parent.interactWithSviewer === "function") {
	    		var parentOrigin = parent.location.origin;
	    		var documentOrigin = document.location.origin; 
	    		if (parentOrigin == documentOrigin) {
	    			parent.interactWithSviewer(linkParams);
	    		}
	    	}
	    }catch(e){
	        // not accessible
	    }
    }
//----------------------------------------------------------------------------------------------------------------------
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
                if (id == 'panelLocate') {
                	 $('#searchInput').select();
                }
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
        sendInformationToParentPage();
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
        sendInformationToParentPage();
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
        sendInformationToParentPage();
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
        view.fit(config.initialExtent, map.getSize());
        view.setRotation(0);
        sendInformationToParentPage();
    }
    
    // recenter on device position
    function showPosition(pos) {
        var p = ol.proj.transform([pos.coords.longitude, pos.coords.latitude], 'EPSG:4326', config.projcode),
            start = +new Date(),
            pan = ol.animation.pan({
                duration: 1000,
                source: view.getCenter(),
                start: start
            }),
            zoom = ol.animation.zoom({
                duration: 1000,
                source: view.getCenter(),
                resolution: view.getResolution(),
                start: start
            });
        marker.setPosition(p);
        map.beforeRender(pan, zoom);
        view.setCenter(p);
        if (view.getZoom()<17) view.setZoom(18) ;
    }
    
    // get device position
    function locateMe() {
        if (navigator.geolocation) {
            messagePopup(tr("estimating device position ..."));
            navigator.geolocation.getCurrentPosition(
                showPosition, 
                function(e) {
                    messagePopup(tr("device position error"));
                },
                {maximumAge: 60000, enableHighAccuracy: true, timeout: 30000}
            );
        } else {
            messagePopup(tr("device position not available on this device"));
        }
        return false;
    }

    //  info popup
    function messagePopup(msg){
        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'>")
            .append($('<h3>').text(msg))
        .css({
            display: "block",
            position: "fixed",
            padding: "7px",
            "text-align": "center",
            "background-color": "#ffffff",
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
     * reads optional "c" querystring arg,
     * loads application profile located in etc/customConfig_[configname].js
     * ie &c=cadastral& : loads etc/customConfig_cadastral.js instead of customConfig.js
     * configname MUST MATCH ^[A-Za-z0-9_-]+$
     */
    function init() {
        var qsconfig;
        if (qs.c && qs.c.match(/^[A-Za-z0-9_-]+$/)) {
            qsconfig = "etc/customConfig_"+qs.c+".js";
        }
        else {
            qsconfig = "etc/customConfig.js";
        }
        $.getScript(qsconfig)
            .done(function() {
                // transmits config name for persistency
                customConfig.customConfigName = qs.c;
                doConfiguration();
                doMap();
                doGUI();
            })
            .fail(function() {
                doConfiguration();
                doMap();
                doGUI();
            });
    }
    
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

        config.projection = ol.proj.get(config.projcode);

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
        
        // querystring param: qcl_filters
        if (qs.qcl_filters) {
            var qcl_filters_list = [];
            qcl_filters_list = (typeof qs.qcl_filters === 'string') ? qs.qcl_filters.split(';') : qs.qcl_filters;
    
            $.each(qcl_filters_list, function(index) {
                if (index < config.layersQueryable.length) {
                    var opt = config.layersQueryable[index].options;
                    opt.cql_filter = this;
                    config.layersQueryable[index] = new LayerQueryable(opt);
                }
            });
        }

        // querystring param: xyz
        // recenters map on specified location
        if (qs.x&&qs.y&&qs.z) {
            config.z = parseInt(qs.z);
            var p = [parseFloat(qs.x), parseFloat(qs.y)];
            // is this lonlat ? anyway don't use sviewer for the vendee globe
            if (Math.abs(p[0])<=180&&Math.abs(p[1])<=180&&config.z>7) {
                p = ol.proj.transform(p, 'EPSG:4326', config.projcode);
            }
            config.x = p[0];
            config.y = p[1];
        }

        // querystring param: title
        // controls map title
        if (qs.title) {
            setTitle(qs.title);
        }
        else {
            setTitle(config.title);
        }

        // querystring param: kml overlay url
        if (qs.kml) {
            config.kmlUrl = qs.kml;
        }

        // querystring param: perform getFeatureInfo on map center
        if (qs.q) {
            config.gfiok = true;
        }

        // querystring param: activate search based on layer text attributes
        if (qs.s) {
            config.search = true;
            config.searchparams = {};
            $("#addressForm label").text('Features or ' + $("#addressForm label").text());
        }
    }


    /**
     * creates the map
     */
    function doMap() {
        // map creation
        view = new ol.View({
            projection: config.projection
        });
        console.log(config.projection);
        console.log(config.projcode);
        map = new ol.Map({
            controls: [
                new ol.control.ScaleLine(),
                new ol.control.Attribution()
            ],
            layers: [],
            overlays: [],
            target: 'map',
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

        //activate search for WMS layer (origin : ?layers=...)
        if (config.search && config.layersQueryable.length > 0) {
            activateSearchFeatures('remote');
        }

        // adding kml overlay
        if (config.kmlUrl) {
            config.kmlLayer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    projection: 'EPSG:3857',
                    url: ajaxURL(config.kmlUrl),
                    format: new ol.format.KML()
                })
            });
            map.addLayer(config.kmlLayer);

            //activate search for kml layer (origin : ?kml=...)
            if (config.search) {
                activateSearchFeatures('local');
            }
        }

        // map recentering
        if (config.x&&config.y&&config.z) {
            view.setCenter([config.x, config.y]);
            view.setZoom(config.z);
        }
         else {
            view.fit(config.initialExtent, map.getSize());
            view.setRotation(0);
        }


        // marker overlay for geoloc and queries
        marker =  new ol.Overlay({
            element: $('#marker')[0],
            positioning: 'bottom-left',
            stopEvent: false
        });
        map.addOverlay(marker);
    }

    /**
     * initiates GUI
     */
    function doGUI() {
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
        
        
        //------------------------------

        // map buttons
        $('#ziBt').click(zoomIn);
        $('#zoBt').click(zoomOut);
        $('#zeBt').click(zoomInit);
        $('#bgBt').click(switchBackground);

        // geolocation form
        $('#zpBt').click(locateMe);
        //$('#addressForm').on('submit', searchPlace); //Original
     // branchement  RVA ---------------------------
        //$('#searchInput').attr('list','adressesList');
        //$('#searchInput').append('<datalist id="adressesList" class="option-list"></datalist>');
        $('#addressForm').on('submit', searchAddress);
        $('#addressForm').on('input', getAddressesAsked);
        // --------------------------------------------

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
        

        // resize map
        $(window).bind("orientationchange resize pageshow", fixContentHeight);
        fixContentHeight();

        if (config.gfiok && (!(config.wmc.length>0))) {
            //~ queryMap(view.getCenter());
            setTimeout(
                function() { queryMap(view.getCenter()); },
                300
            );
        }
    }

    // ------ Main ------------------------------------------------------------------------------------------

    init();
    

};


$(document).ready(SViewer);
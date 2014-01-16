customConfig = {
    title: 'geOrchestra mobile',
    geOrchestraBaseUrl: 'http://dev.geobretagne.fr/',
    initialExtent: [-584909, 5968136, 2126, 6287643],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-540000, 5880000,30000, 6297000],
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',
    openLSGeocodeUrl: "http://geobretagne.fr/openls?",
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
    layersOverlay: [],
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};

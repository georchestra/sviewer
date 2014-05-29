goog.require('ol');
goog.require('ol.Attribution');
goog.require('ol.BrowserFeature');
goog.require('ol.Collection');
goog.require('ol.CollectionEvent');
goog.require('ol.CollectionEventType');
goog.require('ol.Coordinate');
goog.require('ol.CoordinateArray');
goog.require('ol.CoordinateFormatType');
goog.require('ol.DeviceOrientation');
goog.require('ol.DeviceOrientationProperty');
goog.require('ol.DragBoxEvent');
goog.require('ol.DrawEvent');
goog.require('ol.Extent');
goog.require('ol.Feature');
goog.require('ol.FeatureOverlay');
goog.require('ol.Geolocation');
goog.require('ol.GeolocationProperty');
goog.require('ol.ImageTile');
goog.require('ol.Kinetic');
goog.require('ol.Map');
goog.require('ol.MapBrowserEvent');
goog.require('ol.MapBrowserEvent.EventType');
goog.require('ol.MapBrowserEventHandler');
goog.require('ol.MapBrowserPointerEvent');
goog.require('ol.MapProperty');
goog.require('ol.Object');
goog.require('ol.ObjectEvent');
goog.require('ol.ObjectEventType');
goog.require('ol.Observable');
goog.require('ol.Overlay');
goog.require('ol.OverlayPositioning');
goog.require('ol.OverlayProperty');
goog.require('ol.Tile');
goog.require('ol.TileCoord');
goog.require('ol.TileState');
goog.require('ol.View2D');
goog.require('ol.View2DProperty');
goog.require('ol.animation');
goog.require('ol.color');
goog.require('ol.control');
goog.require('ol.control.Attribution');
goog.require('ol.control.Control');
goog.require('ol.control.FullScreen');
goog.require('ol.control.Logo');
goog.require('ol.control.MousePosition');
goog.require('ol.control.Rotate');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.ScaleLineProperty');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.control.Zoom');
goog.require('ol.control.ZoomSlider');
goog.require('ol.control.ZoomToExtent');
goog.require('ol.coordinate');
goog.require('ol.dom.Input');
goog.require('ol.dom.InputProperty');
goog.require('ol.easing');
goog.require('ol.events.ConditionType');
goog.require('ol.events.condition');
goog.require('ol.extent');
goog.require('ol.extent.Relationship');
goog.require('ol.feature');
goog.require('ol.format.GML');
goog.require('ol.format.GPX');
goog.require('ol.format.GPX.V1_1');
goog.require('ol.format.GeoJSON');
goog.require('ol.format.IGC');
goog.require('ol.format.IGCZ');
goog.require('ol.format.KML');
goog.require('ol.format.OSMXML');
goog.require('ol.format.TopoJSON');
goog.require('ol.format.WFS');
goog.require('ol.format.WMSCapabilities');
goog.require('ol.geom.Circle');
goog.require('ol.geom.Geometry');
goog.require('ol.geom.GeometryCollection');
goog.require('ol.geom.GeometryType');
goog.require('ol.geom.LineString');
goog.require('ol.geom.LinearRing');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');
goog.require('ol.geom.SimpleGeometry');
goog.require('ol.interaction');
goog.require('ol.interaction.DoubleClickZoom');
goog.require('ol.interaction.DragAndDrop');
goog.require('ol.interaction.DragAndDropEvent');
goog.require('ol.interaction.DragBox');
goog.require('ol.interaction.DragPan');
goog.require('ol.interaction.DragRotate');
goog.require('ol.interaction.DragRotateAndZoom');
goog.require('ol.interaction.DragZoom');
goog.require('ol.interaction.Draw');
goog.require('ol.interaction.KeyboardPan');
goog.require('ol.interaction.KeyboardZoom');
goog.require('ol.interaction.Modify');
goog.require('ol.interaction.MouseWheelZoom');
goog.require('ol.interaction.PinchRotate');
goog.require('ol.interaction.PinchZoom');
goog.require('ol.interaction.Select');
goog.require('ol.layer.Base');
goog.require('ol.layer.Group');
goog.require('ol.layer.Heatmap');
goog.require('ol.layer.Image');
goog.require('ol.layer.Layer');
goog.require('ol.layer.LayerProperty');
goog.require('ol.layer.LayerState');
goog.require('ol.layer.Tile');
goog.require('ol.layer.Vector');
goog.require('ol.loadingstrategy');
goog.require('ol.proj');
goog.require('ol.proj.CH');
goog.require('ol.proj.EPSG2056');
goog.require('ol.proj.EPSG21781');
goog.require('ol.proj.EPSG3857');
goog.require('ol.proj.EPSG4326');
goog.require('ol.proj.METERS_PER_UNIT');
goog.require('ol.proj.Projection');
goog.require('ol.proj.ProjectionLike');
goog.require('ol.proj.Units');
goog.require('ol.proj.common');
goog.require('ol.render.Event');
goog.require('ol.render.EventType');
goog.require('ol.render.canvas.Immediate');
goog.require('ol.source.BingMaps');
goog.require('ol.source.FormatVector');
goog.require('ol.source.GPX');
goog.require('ol.source.GeoJSON');
goog.require('ol.source.IGC');
goog.require('ol.source.ImageCanvas');
goog.require('ol.source.ImageStatic');
goog.require('ol.source.ImageVector');
goog.require('ol.source.ImageWMS');
goog.require('ol.source.KML');
goog.require('ol.source.MapGuide');
goog.require('ol.source.MapQuest');
goog.require('ol.source.OSM');
goog.require('ol.source.OSMXML');
goog.require('ol.source.ServerVector');
goog.require('ol.source.Source');
goog.require('ol.source.Stamen');
goog.require('ol.source.State');
goog.require('ol.source.StaticVector');
goog.require('ol.source.Tile');
goog.require('ol.source.TileDebug');
goog.require('ol.source.TileImage');
goog.require('ol.source.TileJSON');
goog.require('ol.source.TileOptions');
goog.require('ol.source.TileVector');
goog.require('ol.source.TileWMS');
goog.require('ol.source.TopoJSON');
goog.require('ol.source.Vector');
goog.require('ol.source.VectorEvent');
goog.require('ol.source.VectorEventType');
goog.require('ol.source.WMTS');
goog.require('ol.source.WMTSRequestEncoding');
goog.require('ol.source.XYZ');
goog.require('ol.source.Zoomify');
goog.require('ol.sphere.WGS84');
goog.require('ol.style.Circle');
goog.require('ol.style.Fill');
goog.require('ol.style.Icon');
goog.require('ol.style.IconAnchorOrigin');
goog.require('ol.style.IconAnchorUnits');
goog.require('ol.style.IconImageCache');
goog.require('ol.style.Image');
goog.require('ol.style.ImageState');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');
goog.require('ol.style.Text');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.tilegrid.XYZ');
goog.require('ol.tilegrid.Zoomify');
goog.require('ol.tilejson');
goog.require('ol.webgl.Context');


goog.exportSymbol(
    'ol.Attribution',
    ol.Attribution);

goog.exportSymbol(
    'ol.BrowserFeature.DEVICE_PIXEL_RATIO',
    ol.BrowserFeature.DEVICE_PIXEL_RATIO);

goog.exportSymbol(
    'ol.BrowserFeature.HAS_CANVAS',
    ol.BrowserFeature.HAS_CANVAS);

goog.exportSymbol(
    'ol.BrowserFeature.HAS_DEVICE_ORIENTATION',
    ol.BrowserFeature.HAS_DEVICE_ORIENTATION);

goog.exportSymbol(
    'ol.BrowserFeature.HAS_GEOLOCATION',
    ol.BrowserFeature.HAS_GEOLOCATION);

goog.exportSymbol(
    'ol.BrowserFeature.HAS_TOUCH',
    ol.BrowserFeature.HAS_TOUCH);

goog.exportSymbol(
    'ol.BrowserFeature.HAS_WEBGL',
    ol.BrowserFeature.HAS_WEBGL);

goog.exportSymbol(
    'ol.Collection',
    ol.Collection);

goog.exportProperty(
    ol.Collection.prototype,
    'bindTo',
    ol.Collection.prototype.bindTo);

goog.exportProperty(
    ol.Collection.prototype,
    'clear',
    ol.Collection.prototype.clear);

goog.exportProperty(
    ol.Collection.prototype,
    'dispatchChangeEvent',
    ol.Collection.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Collection.prototype,
    'extend',
    ol.Collection.prototype.extend);

goog.exportProperty(
    ol.Collection.prototype,
    'forEach',
    ol.Collection.prototype.forEach);

goog.exportProperty(
    ol.Collection.prototype,
    'get',
    ol.Collection.prototype.get);

goog.exportProperty(
    ol.Collection.prototype,
    'getArray',
    ol.Collection.prototype.getArray);

goog.exportProperty(
    ol.Collection.prototype,
    'getAt',
    ol.Collection.prototype.getAt);

goog.exportProperty(
    ol.Collection.prototype,
    'getKeys',
    ol.Collection.prototype.getKeys);

goog.exportProperty(
    ol.Collection.prototype,
    'getLength',
    ol.Collection.prototype.getLength);

goog.exportProperty(
    ol.Collection.prototype,
    'getProperties',
    ol.Collection.prototype.getProperties);

goog.exportProperty(
    ol.Collection.prototype,
    'insertAt',
    ol.Collection.prototype.insertAt);

goog.exportProperty(
    ol.Collection.prototype,
    'notify',
    ol.Collection.prototype.notify);

goog.exportProperty(
    ol.Collection.prototype,
    'on',
    ol.Collection.prototype.on);

goog.exportProperty(
    ol.Collection.prototype,
    'once',
    ol.Collection.prototype.once);

goog.exportProperty(
    ol.Collection.prototype,
    'pop',
    ol.Collection.prototype.pop);

goog.exportProperty(
    ol.Collection.prototype,
    'push',
    ol.Collection.prototype.push);

goog.exportProperty(
    ol.Collection.prototype,
    'remove',
    ol.Collection.prototype.remove);

goog.exportProperty(
    ol.Collection.prototype,
    'removeAt',
    ol.Collection.prototype.removeAt);

goog.exportProperty(
    ol.Collection.prototype,
    'set',
    ol.Collection.prototype.set);

goog.exportProperty(
    ol.Collection.prototype,
    'setAt',
    ol.Collection.prototype.setAt);

goog.exportProperty(
    ol.Collection.prototype,
    'setValues',
    ol.Collection.prototype.setValues);

goog.exportProperty(
    ol.Collection.prototype,
    'un',
    ol.Collection.prototype.un);

goog.exportProperty(
    ol.Collection.prototype,
    'unByKey',
    ol.Collection.prototype.unByKey);

goog.exportProperty(
    ol.Collection.prototype,
    'unbind',
    ol.Collection.prototype.unbind);

goog.exportProperty(
    ol.Collection.prototype,
    'unbindAll',
    ol.Collection.prototype.unbindAll);

goog.exportProperty(
    ol.CollectionEvent.prototype,
    'element',
    ol.CollectionEvent.prototype.element);

goog.exportSymbol(
    'ol.DeviceOrientation',
    ol.DeviceOrientation);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'bindTo',
    ol.DeviceOrientation.prototype.bindTo);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'dispatchChangeEvent',
    ol.DeviceOrientation.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'get',
    ol.DeviceOrientation.prototype.get);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getAlpha',
    ol.DeviceOrientation.prototype.getAlpha);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getBeta',
    ol.DeviceOrientation.prototype.getBeta);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getGamma',
    ol.DeviceOrientation.prototype.getGamma);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getHeading',
    ol.DeviceOrientation.prototype.getHeading);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getKeys',
    ol.DeviceOrientation.prototype.getKeys);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getProperties',
    ol.DeviceOrientation.prototype.getProperties);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'getTracking',
    ol.DeviceOrientation.prototype.getTracking);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'notify',
    ol.DeviceOrientation.prototype.notify);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'on',
    ol.DeviceOrientation.prototype.on);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'once',
    ol.DeviceOrientation.prototype.once);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'set',
    ol.DeviceOrientation.prototype.set);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'setTracking',
    ol.DeviceOrientation.prototype.setTracking);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'setValues',
    ol.DeviceOrientation.prototype.setValues);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'un',
    ol.DeviceOrientation.prototype.un);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'unByKey',
    ol.DeviceOrientation.prototype.unByKey);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'unbind',
    ol.DeviceOrientation.prototype.unbind);

goog.exportProperty(
    ol.DeviceOrientation.prototype,
    'unbindAll',
    ol.DeviceOrientation.prototype.unbindAll);

goog.exportProperty(
    ol.DragBoxEvent.prototype,
    'coordinate',
    ol.DragBoxEvent.prototype.coordinate);

goog.exportProperty(
    ol.DrawEvent.prototype,
    'feature',
    ol.DrawEvent.prototype.feature);

goog.exportSymbol(
    'ol.Feature',
    ol.Feature);

goog.exportProperty(
    ol.Feature.prototype,
    'bindTo',
    ol.Feature.prototype.bindTo);

goog.exportProperty(
    ol.Feature.prototype,
    'dispatchChangeEvent',
    ol.Feature.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Feature.prototype,
    'get',
    ol.Feature.prototype.get);

goog.exportProperty(
    ol.Feature.prototype,
    'getGeometry',
    ol.Feature.prototype.getGeometry);

goog.exportProperty(
    ol.Feature.prototype,
    'getGeometryName',
    ol.Feature.prototype.getGeometryName);

goog.exportProperty(
    ol.Feature.prototype,
    'getId',
    ol.Feature.prototype.getId);

goog.exportProperty(
    ol.Feature.prototype,
    'getKeys',
    ol.Feature.prototype.getKeys);

goog.exportProperty(
    ol.Feature.prototype,
    'getProperties',
    ol.Feature.prototype.getProperties);

goog.exportProperty(
    ol.Feature.prototype,
    'getStyle',
    ol.Feature.prototype.getStyle);

goog.exportProperty(
    ol.Feature.prototype,
    'getStyleFunction',
    ol.Feature.prototype.getStyleFunction);

goog.exportProperty(
    ol.Feature.prototype,
    'notify',
    ol.Feature.prototype.notify);

goog.exportProperty(
    ol.Feature.prototype,
    'on',
    ol.Feature.prototype.on);

goog.exportProperty(
    ol.Feature.prototype,
    'once',
    ol.Feature.prototype.once);

goog.exportProperty(
    ol.Feature.prototype,
    'set',
    ol.Feature.prototype.set);

goog.exportProperty(
    ol.Feature.prototype,
    'setGeometry',
    ol.Feature.prototype.setGeometry);

goog.exportProperty(
    ol.Feature.prototype,
    'setGeometryName',
    ol.Feature.prototype.setGeometryName);

goog.exportProperty(
    ol.Feature.prototype,
    'setId',
    ol.Feature.prototype.setId);

goog.exportProperty(
    ol.Feature.prototype,
    'setStyle',
    ol.Feature.prototype.setStyle);

goog.exportProperty(
    ol.Feature.prototype,
    'setValues',
    ol.Feature.prototype.setValues);

goog.exportProperty(
    ol.Feature.prototype,
    'un',
    ol.Feature.prototype.un);

goog.exportProperty(
    ol.Feature.prototype,
    'unByKey',
    ol.Feature.prototype.unByKey);

goog.exportProperty(
    ol.Feature.prototype,
    'unbind',
    ol.Feature.prototype.unbind);

goog.exportProperty(
    ol.Feature.prototype,
    'unbindAll',
    ol.Feature.prototype.unbindAll);

goog.exportSymbol(
    'ol.FeatureOverlay',
    ol.FeatureOverlay);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'addFeature',
    ol.FeatureOverlay.prototype.addFeature);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'getFeatures',
    ol.FeatureOverlay.prototype.getFeatures);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'getStyle',
    ol.FeatureOverlay.prototype.getStyle);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'getStyleFunction',
    ol.FeatureOverlay.prototype.getStyleFunction);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'removeFeature',
    ol.FeatureOverlay.prototype.removeFeature);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'setFeatures',
    ol.FeatureOverlay.prototype.setFeatures);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'setMap',
    ol.FeatureOverlay.prototype.setMap);

goog.exportProperty(
    ol.FeatureOverlay.prototype,
    'setStyle',
    ol.FeatureOverlay.prototype.setStyle);

goog.exportSymbol(
    'ol.Geolocation',
    ol.Geolocation);

goog.exportProperty(
    ol.Geolocation.prototype,
    'bindTo',
    ol.Geolocation.prototype.bindTo);

goog.exportProperty(
    ol.Geolocation.prototype,
    'dispatchChangeEvent',
    ol.Geolocation.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Geolocation.prototype,
    'get',
    ol.Geolocation.prototype.get);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getAccuracy',
    ol.Geolocation.prototype.getAccuracy);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getAccuracyGeometry',
    ol.Geolocation.prototype.getAccuracyGeometry);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getAltitude',
    ol.Geolocation.prototype.getAltitude);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getAltitudeAccuracy',
    ol.Geolocation.prototype.getAltitudeAccuracy);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getHeading',
    ol.Geolocation.prototype.getHeading);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getKeys',
    ol.Geolocation.prototype.getKeys);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getPosition',
    ol.Geolocation.prototype.getPosition);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getProjection',
    ol.Geolocation.prototype.getProjection);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getProperties',
    ol.Geolocation.prototype.getProperties);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getSpeed',
    ol.Geolocation.prototype.getSpeed);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getTracking',
    ol.Geolocation.prototype.getTracking);

goog.exportProperty(
    ol.Geolocation.prototype,
    'getTrackingOptions',
    ol.Geolocation.prototype.getTrackingOptions);

goog.exportProperty(
    ol.Geolocation.prototype,
    'notify',
    ol.Geolocation.prototype.notify);

goog.exportProperty(
    ol.Geolocation.prototype,
    'on',
    ol.Geolocation.prototype.on);

goog.exportProperty(
    ol.Geolocation.prototype,
    'once',
    ol.Geolocation.prototype.once);

goog.exportProperty(
    ol.Geolocation.prototype,
    'set',
    ol.Geolocation.prototype.set);

goog.exportProperty(
    ol.Geolocation.prototype,
    'setProjection',
    ol.Geolocation.prototype.setProjection);

goog.exportProperty(
    ol.Geolocation.prototype,
    'setTracking',
    ol.Geolocation.prototype.setTracking);

goog.exportProperty(
    ol.Geolocation.prototype,
    'setTrackingOptions',
    ol.Geolocation.prototype.setTrackingOptions);

goog.exportProperty(
    ol.Geolocation.prototype,
    'setValues',
    ol.Geolocation.prototype.setValues);

goog.exportProperty(
    ol.Geolocation.prototype,
    'un',
    ol.Geolocation.prototype.un);

goog.exportProperty(
    ol.Geolocation.prototype,
    'unByKey',
    ol.Geolocation.prototype.unByKey);

goog.exportProperty(
    ol.Geolocation.prototype,
    'unbind',
    ol.Geolocation.prototype.unbind);

goog.exportProperty(
    ol.Geolocation.prototype,
    'unbindAll',
    ol.Geolocation.prototype.unbindAll);

goog.exportProperty(
    ol.ImageTile.prototype,
    'getImage',
    ol.ImageTile.prototype.getImage);

goog.exportProperty(
    ol.ImageTile.prototype,
    'getTileCoord',
    ol.ImageTile.prototype.getTileCoord);

goog.exportSymbol(
    'ol.Kinetic',
    ol.Kinetic);

goog.exportSymbol(
    'ol.Map',
    ol.Map);

goog.exportProperty(
    ol.Map.prototype,
    'addControl',
    ol.Map.prototype.addControl);

goog.exportProperty(
    ol.Map.prototype,
    'addInteraction',
    ol.Map.prototype.addInteraction);

goog.exportProperty(
    ol.Map.prototype,
    'addLayer',
    ol.Map.prototype.addLayer);

goog.exportProperty(
    ol.Map.prototype,
    'addOverlay',
    ol.Map.prototype.addOverlay);

goog.exportProperty(
    ol.Map.prototype,
    'beforeRender',
    ol.Map.prototype.beforeRender);

goog.exportProperty(
    ol.Map.prototype,
    'bindTo',
    ol.Map.prototype.bindTo);

goog.exportProperty(
    ol.Map.prototype,
    'dispatchChangeEvent',
    ol.Map.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Map.prototype,
    'forEachFeatureAtPixel',
    ol.Map.prototype.forEachFeatureAtPixel);

goog.exportProperty(
    ol.Map.prototype,
    'get',
    ol.Map.prototype.get);

goog.exportProperty(
    ol.Map.prototype,
    'getControls',
    ol.Map.prototype.getControls);

goog.exportProperty(
    ol.Map.prototype,
    'getCoordinateFromPixel',
    ol.Map.prototype.getCoordinateFromPixel);

goog.exportProperty(
    ol.Map.prototype,
    'getEventCoordinate',
    ol.Map.prototype.getEventCoordinate);

goog.exportProperty(
    ol.Map.prototype,
    'getEventPixel',
    ol.Map.prototype.getEventPixel);

goog.exportProperty(
    ol.Map.prototype,
    'getInteractions',
    ol.Map.prototype.getInteractions);

goog.exportProperty(
    ol.Map.prototype,
    'getKeys',
    ol.Map.prototype.getKeys);

goog.exportProperty(
    ol.Map.prototype,
    'getLayerGroup',
    ol.Map.prototype.getLayerGroup);

goog.exportProperty(
    ol.Map.prototype,
    'getLayers',
    ol.Map.prototype.getLayers);

goog.exportProperty(
    ol.Map.prototype,
    'getOverlays',
    ol.Map.prototype.getOverlays);

goog.exportProperty(
    ol.Map.prototype,
    'getPixelFromCoordinate',
    ol.Map.prototype.getPixelFromCoordinate);

goog.exportProperty(
    ol.Map.prototype,
    'getProperties',
    ol.Map.prototype.getProperties);

goog.exportProperty(
    ol.Map.prototype,
    'getSize',
    ol.Map.prototype.getSize);

goog.exportProperty(
    ol.Map.prototype,
    'getTarget',
    ol.Map.prototype.getTarget);

goog.exportProperty(
    ol.Map.prototype,
    'getView',
    ol.Map.prototype.getView);

goog.exportProperty(
    ol.Map.prototype,
    'getViewport',
    ol.Map.prototype.getViewport);

goog.exportProperty(
    ol.Map.prototype,
    'notify',
    ol.Map.prototype.notify);

goog.exportProperty(
    ol.Map.prototype,
    'on',
    ol.Map.prototype.on);

goog.exportProperty(
    ol.Map.prototype,
    'once',
    ol.Map.prototype.once);

goog.exportProperty(
    ol.Map.prototype,
    'removeControl',
    ol.Map.prototype.removeControl);

goog.exportProperty(
    ol.Map.prototype,
    'removeInteraction',
    ol.Map.prototype.removeInteraction);

goog.exportProperty(
    ol.Map.prototype,
    'removeLayer',
    ol.Map.prototype.removeLayer);

goog.exportProperty(
    ol.Map.prototype,
    'removeOverlay',
    ol.Map.prototype.removeOverlay);

goog.exportProperty(
    ol.Map.prototype,
    'render',
    ol.Map.prototype.render);

goog.exportProperty(
    ol.Map.prototype,
    'renderSync',
    ol.Map.prototype.renderSync);

goog.exportProperty(
    ol.Map.prototype,
    'set',
    ol.Map.prototype.set);

goog.exportProperty(
    ol.Map.prototype,
    'setLayerGroup',
    ol.Map.prototype.setLayerGroup);

goog.exportProperty(
    ol.Map.prototype,
    'setSize',
    ol.Map.prototype.setSize);

goog.exportProperty(
    ol.Map.prototype,
    'setTarget',
    ol.Map.prototype.setTarget);

goog.exportProperty(
    ol.Map.prototype,
    'setValues',
    ol.Map.prototype.setValues);

goog.exportProperty(
    ol.Map.prototype,
    'setView',
    ol.Map.prototype.setView);

goog.exportProperty(
    ol.Map.prototype,
    'un',
    ol.Map.prototype.un);

goog.exportProperty(
    ol.Map.prototype,
    'unByKey',
    ol.Map.prototype.unByKey);

goog.exportProperty(
    ol.Map.prototype,
    'unbind',
    ol.Map.prototype.unbind);

goog.exportProperty(
    ol.Map.prototype,
    'unbindAll',
    ol.Map.prototype.unbindAll);

goog.exportProperty(
    ol.Map.prototype,
    'updateSize',
    ol.Map.prototype.updateSize);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'coordinate',
    ol.MapBrowserEvent.prototype.coordinate);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'originalEvent',
    ol.MapBrowserEvent.prototype.originalEvent);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'pixel',
    ol.MapBrowserEvent.prototype.pixel);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'preventDefault',
    ol.MapBrowserEvent.prototype.preventDefault);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'stopPropagation',
    ol.MapBrowserEvent.prototype.stopPropagation);

goog.exportProperty(
    ol.MapBrowserPointerEvent.prototype,
    'coordinate',
    ol.MapBrowserPointerEvent.prototype.coordinate);

goog.exportProperty(
    ol.MapBrowserPointerEvent.prototype,
    'originalEvent',
    ol.MapBrowserPointerEvent.prototype.originalEvent);

goog.exportProperty(
    ol.MapBrowserPointerEvent.prototype,
    'pixel',
    ol.MapBrowserPointerEvent.prototype.pixel);

goog.exportProperty(
    ol.MapBrowserPointerEvent.prototype,
    'preventDefault',
    ol.MapBrowserPointerEvent.prototype.preventDefault);

goog.exportProperty(
    ol.MapBrowserPointerEvent.prototype,
    'stopPropagation',
    ol.MapBrowserPointerEvent.prototype.stopPropagation);

goog.exportSymbol(
    'ol.Object',
    ol.Object);

goog.exportProperty(
    ol.Object.prototype,
    'bindTo',
    ol.Object.prototype.bindTo);

goog.exportProperty(
    ol.Object.prototype,
    'dispatchChangeEvent',
    ol.Object.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Object.prototype,
    'get',
    ol.Object.prototype.get);

goog.exportProperty(
    ol.Object.prototype,
    'getKeys',
    ol.Object.prototype.getKeys);

goog.exportProperty(
    ol.Object.prototype,
    'getProperties',
    ol.Object.prototype.getProperties);

goog.exportProperty(
    ol.Object.prototype,
    'notify',
    ol.Object.prototype.notify);

goog.exportProperty(
    ol.Object.prototype,
    'on',
    ol.Object.prototype.on);

goog.exportProperty(
    ol.Object.prototype,
    'once',
    ol.Object.prototype.once);

goog.exportProperty(
    ol.Object.prototype,
    'set',
    ol.Object.prototype.set);

goog.exportProperty(
    ol.Object.prototype,
    'setValues',
    ol.Object.prototype.setValues);

goog.exportProperty(
    ol.Object.prototype,
    'un',
    ol.Object.prototype.un);

goog.exportProperty(
    ol.Object.prototype,
    'unByKey',
    ol.Object.prototype.unByKey);

goog.exportProperty(
    ol.Object.prototype,
    'unbind',
    ol.Object.prototype.unbind);

goog.exportProperty(
    ol.Object.prototype,
    'unbindAll',
    ol.Object.prototype.unbindAll);

goog.exportSymbol(
    'ol.Observable',
    ol.Observable);

goog.exportProperty(
    ol.Observable.prototype,
    'dispatchChangeEvent',
    ol.Observable.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Observable.prototype,
    'on',
    ol.Observable.prototype.on);

goog.exportProperty(
    ol.Observable.prototype,
    'once',
    ol.Observable.prototype.once);

goog.exportProperty(
    ol.Observable.prototype,
    'un',
    ol.Observable.prototype.un);

goog.exportProperty(
    ol.Observable.prototype,
    'unByKey',
    ol.Observable.prototype.unByKey);

goog.exportSymbol(
    'ol.Overlay',
    ol.Overlay);

goog.exportProperty(
    ol.Overlay.prototype,
    'bindTo',
    ol.Overlay.prototype.bindTo);

goog.exportProperty(
    ol.Overlay.prototype,
    'dispatchChangeEvent',
    ol.Overlay.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.Overlay.prototype,
    'get',
    ol.Overlay.prototype.get);

goog.exportProperty(
    ol.Overlay.prototype,
    'getElement',
    ol.Overlay.prototype.getElement);

goog.exportProperty(
    ol.Overlay.prototype,
    'getKeys',
    ol.Overlay.prototype.getKeys);

goog.exportProperty(
    ol.Overlay.prototype,
    'getMap',
    ol.Overlay.prototype.getMap);

goog.exportProperty(
    ol.Overlay.prototype,
    'getPosition',
    ol.Overlay.prototype.getPosition);

goog.exportProperty(
    ol.Overlay.prototype,
    'getPositioning',
    ol.Overlay.prototype.getPositioning);

goog.exportProperty(
    ol.Overlay.prototype,
    'getProperties',
    ol.Overlay.prototype.getProperties);

goog.exportProperty(
    ol.Overlay.prototype,
    'notify',
    ol.Overlay.prototype.notify);

goog.exportProperty(
    ol.Overlay.prototype,
    'on',
    ol.Overlay.prototype.on);

goog.exportProperty(
    ol.Overlay.prototype,
    'once',
    ol.Overlay.prototype.once);

goog.exportProperty(
    ol.Overlay.prototype,
    'set',
    ol.Overlay.prototype.set);

goog.exportProperty(
    ol.Overlay.prototype,
    'setElement',
    ol.Overlay.prototype.setElement);

goog.exportProperty(
    ol.Overlay.prototype,
    'setMap',
    ol.Overlay.prototype.setMap);

goog.exportProperty(
    ol.Overlay.prototype,
    'setPosition',
    ol.Overlay.prototype.setPosition);

goog.exportProperty(
    ol.Overlay.prototype,
    'setPositioning',
    ol.Overlay.prototype.setPositioning);

goog.exportProperty(
    ol.Overlay.prototype,
    'setValues',
    ol.Overlay.prototype.setValues);

goog.exportProperty(
    ol.Overlay.prototype,
    'un',
    ol.Overlay.prototype.un);

goog.exportProperty(
    ol.Overlay.prototype,
    'unByKey',
    ol.Overlay.prototype.unByKey);

goog.exportProperty(
    ol.Overlay.prototype,
    'unbind',
    ol.Overlay.prototype.unbind);

goog.exportProperty(
    ol.Overlay.prototype,
    'unbindAll',
    ol.Overlay.prototype.unbindAll);

goog.exportProperty(
    ol.Tile.prototype,
    'getTileCoord',
    ol.Tile.prototype.getTileCoord);

goog.exportProperty(
    ol.TileCoord.prototype,
    'getZXY',
    ol.TileCoord.prototype.getZXY);

goog.exportProperty(
    ol.View.prototype,
    'bindTo',
    ol.View.prototype.bindTo);

goog.exportProperty(
    ol.View.prototype,
    'dispatchChangeEvent',
    ol.View.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.View.prototype,
    'get',
    ol.View.prototype.get);

goog.exportProperty(
    ol.View.prototype,
    'getKeys',
    ol.View.prototype.getKeys);

goog.exportProperty(
    ol.View.prototype,
    'getProperties',
    ol.View.prototype.getProperties);

goog.exportProperty(
    ol.View.prototype,
    'notify',
    ol.View.prototype.notify);

goog.exportProperty(
    ol.View.prototype,
    'on',
    ol.View.prototype.on);

goog.exportProperty(
    ol.View.prototype,
    'once',
    ol.View.prototype.once);

goog.exportProperty(
    ol.View.prototype,
    'set',
    ol.View.prototype.set);

goog.exportProperty(
    ol.View.prototype,
    'setValues',
    ol.View.prototype.setValues);

goog.exportProperty(
    ol.View.prototype,
    'un',
    ol.View.prototype.un);

goog.exportProperty(
    ol.View.prototype,
    'unByKey',
    ol.View.prototype.unByKey);

goog.exportProperty(
    ol.View.prototype,
    'unbind',
    ol.View.prototype.unbind);

goog.exportProperty(
    ol.View.prototype,
    'unbindAll',
    ol.View.prototype.unbindAll);

goog.exportSymbol(
    'ol.View2D',
    ol.View2D);

goog.exportProperty(
    ol.View2D.prototype,
    'bindTo',
    ol.View2D.prototype.bindTo);

goog.exportProperty(
    ol.View2D.prototype,
    'calculateExtent',
    ol.View2D.prototype.calculateExtent);

goog.exportProperty(
    ol.View2D.prototype,
    'centerOn',
    ol.View2D.prototype.centerOn);

goog.exportProperty(
    ol.View2D.prototype,
    'constrainCenter',
    ol.View2D.prototype.constrainCenter);

goog.exportProperty(
    ol.View2D.prototype,
    'constrainResolution',
    ol.View2D.prototype.constrainResolution);

goog.exportProperty(
    ol.View2D.prototype,
    'constrainRotation',
    ol.View2D.prototype.constrainRotation);

goog.exportProperty(
    ol.View2D.prototype,
    'dispatchChangeEvent',
    ol.View2D.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.View2D.prototype,
    'fitExtent',
    ol.View2D.prototype.fitExtent);

goog.exportProperty(
    ol.View2D.prototype,
    'fitGeometry',
    ol.View2D.prototype.fitGeometry);

goog.exportProperty(
    ol.View2D.prototype,
    'get',
    ol.View2D.prototype.get);

goog.exportProperty(
    ol.View2D.prototype,
    'getCenter',
    ol.View2D.prototype.getCenter);

goog.exportProperty(
    ol.View2D.prototype,
    'getKeys',
    ol.View2D.prototype.getKeys);

goog.exportProperty(
    ol.View2D.prototype,
    'getProjection',
    ol.View2D.prototype.getProjection);

goog.exportProperty(
    ol.View2D.prototype,
    'getProperties',
    ol.View2D.prototype.getProperties);

goog.exportProperty(
    ol.View2D.prototype,
    'getResolution',
    ol.View2D.prototype.getResolution);

goog.exportProperty(
    ol.View2D.prototype,
    'getRotation',
    ol.View2D.prototype.getRotation);

goog.exportProperty(
    ol.View2D.prototype,
    'getView2D',
    ol.View2D.prototype.getView2D);

goog.exportProperty(
    ol.View2D.prototype,
    'getZoom',
    ol.View2D.prototype.getZoom);

goog.exportProperty(
    ol.View2D.prototype,
    'notify',
    ol.View2D.prototype.notify);

goog.exportProperty(
    ol.View2D.prototype,
    'on',
    ol.View2D.prototype.on);

goog.exportProperty(
    ol.View2D.prototype,
    'once',
    ol.View2D.prototype.once);

goog.exportProperty(
    ol.View2D.prototype,
    'rotate',
    ol.View2D.prototype.rotate);

goog.exportProperty(
    ol.View2D.prototype,
    'set',
    ol.View2D.prototype.set);

goog.exportProperty(
    ol.View2D.prototype,
    'setCenter',
    ol.View2D.prototype.setCenter);

goog.exportProperty(
    ol.View2D.prototype,
    'setProjection',
    ol.View2D.prototype.setProjection);

goog.exportProperty(
    ol.View2D.prototype,
    'setResolution',
    ol.View2D.prototype.setResolution);

goog.exportProperty(
    ol.View2D.prototype,
    'setRotation',
    ol.View2D.prototype.setRotation);

goog.exportProperty(
    ol.View2D.prototype,
    'setValues',
    ol.View2D.prototype.setValues);

goog.exportProperty(
    ol.View2D.prototype,
    'setZoom',
    ol.View2D.prototype.setZoom);

goog.exportProperty(
    ol.View2D.prototype,
    'un',
    ol.View2D.prototype.un);

goog.exportProperty(
    ol.View2D.prototype,
    'unByKey',
    ol.View2D.prototype.unByKey);

goog.exportProperty(
    ol.View2D.prototype,
    'unbind',
    ol.View2D.prototype.unbind);

goog.exportProperty(
    ol.View2D.prototype,
    'unbindAll',
    ol.View2D.prototype.unbindAll);

goog.exportSymbol(
    'ol.animation.bounce',
    ol.animation.bounce);

goog.exportSymbol(
    'ol.animation.pan',
    ol.animation.pan);

goog.exportSymbol(
    'ol.animation.rotate',
    ol.animation.rotate);

goog.exportSymbol(
    'ol.animation.zoom',
    ol.animation.zoom);

goog.exportSymbol(
    'ol.color.asArray',
    ol.color.asArray);

goog.exportSymbol(
    'ol.color.asString',
    ol.color.asString);

goog.exportSymbol(
    'ol.control.Attribution',
    ol.control.Attribution);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'bindTo',
    ol.control.Attribution.prototype.bindTo);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'dispatchChangeEvent',
    ol.control.Attribution.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'get',
    ol.control.Attribution.prototype.get);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'getKeys',
    ol.control.Attribution.prototype.getKeys);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'getMap',
    ol.control.Attribution.prototype.getMap);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'getProperties',
    ol.control.Attribution.prototype.getProperties);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'notify',
    ol.control.Attribution.prototype.notify);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'on',
    ol.control.Attribution.prototype.on);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'once',
    ol.control.Attribution.prototype.once);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'set',
    ol.control.Attribution.prototype.set);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'setMap',
    ol.control.Attribution.prototype.setMap);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'setValues',
    ol.control.Attribution.prototype.setValues);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'un',
    ol.control.Attribution.prototype.un);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'unByKey',
    ol.control.Attribution.prototype.unByKey);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'unbind',
    ol.control.Attribution.prototype.unbind);

goog.exportProperty(
    ol.control.Attribution.prototype,
    'unbindAll',
    ol.control.Attribution.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.Control',
    ol.control.Control);

goog.exportProperty(
    ol.control.Control.prototype,
    'bindTo',
    ol.control.Control.prototype.bindTo);

goog.exportProperty(
    ol.control.Control.prototype,
    'dispatchChangeEvent',
    ol.control.Control.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.Control.prototype,
    'get',
    ol.control.Control.prototype.get);

goog.exportProperty(
    ol.control.Control.prototype,
    'getKeys',
    ol.control.Control.prototype.getKeys);

goog.exportProperty(
    ol.control.Control.prototype,
    'getMap',
    ol.control.Control.prototype.getMap);

goog.exportProperty(
    ol.control.Control.prototype,
    'getProperties',
    ol.control.Control.prototype.getProperties);

goog.exportProperty(
    ol.control.Control.prototype,
    'notify',
    ol.control.Control.prototype.notify);

goog.exportProperty(
    ol.control.Control.prototype,
    'on',
    ol.control.Control.prototype.on);

goog.exportProperty(
    ol.control.Control.prototype,
    'once',
    ol.control.Control.prototype.once);

goog.exportProperty(
    ol.control.Control.prototype,
    'set',
    ol.control.Control.prototype.set);

goog.exportProperty(
    ol.control.Control.prototype,
    'setMap',
    ol.control.Control.prototype.setMap);

goog.exportProperty(
    ol.control.Control.prototype,
    'setValues',
    ol.control.Control.prototype.setValues);

goog.exportProperty(
    ol.control.Control.prototype,
    'un',
    ol.control.Control.prototype.un);

goog.exportProperty(
    ol.control.Control.prototype,
    'unByKey',
    ol.control.Control.prototype.unByKey);

goog.exportProperty(
    ol.control.Control.prototype,
    'unbind',
    ol.control.Control.prototype.unbind);

goog.exportProperty(
    ol.control.Control.prototype,
    'unbindAll',
    ol.control.Control.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.FullScreen',
    ol.control.FullScreen);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'bindTo',
    ol.control.FullScreen.prototype.bindTo);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'dispatchChangeEvent',
    ol.control.FullScreen.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'get',
    ol.control.FullScreen.prototype.get);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'getKeys',
    ol.control.FullScreen.prototype.getKeys);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'getMap',
    ol.control.FullScreen.prototype.getMap);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'getProperties',
    ol.control.FullScreen.prototype.getProperties);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'notify',
    ol.control.FullScreen.prototype.notify);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'on',
    ol.control.FullScreen.prototype.on);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'once',
    ol.control.FullScreen.prototype.once);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'set',
    ol.control.FullScreen.prototype.set);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'setMap',
    ol.control.FullScreen.prototype.setMap);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'setValues',
    ol.control.FullScreen.prototype.setValues);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'un',
    ol.control.FullScreen.prototype.un);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'unByKey',
    ol.control.FullScreen.prototype.unByKey);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'unbind',
    ol.control.FullScreen.prototype.unbind);

goog.exportProperty(
    ol.control.FullScreen.prototype,
    'unbindAll',
    ol.control.FullScreen.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.Logo',
    ol.control.Logo);

goog.exportProperty(
    ol.control.Logo.prototype,
    'bindTo',
    ol.control.Logo.prototype.bindTo);

goog.exportProperty(
    ol.control.Logo.prototype,
    'dispatchChangeEvent',
    ol.control.Logo.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.Logo.prototype,
    'get',
    ol.control.Logo.prototype.get);

goog.exportProperty(
    ol.control.Logo.prototype,
    'getKeys',
    ol.control.Logo.prototype.getKeys);

goog.exportProperty(
    ol.control.Logo.prototype,
    'getMap',
    ol.control.Logo.prototype.getMap);

goog.exportProperty(
    ol.control.Logo.prototype,
    'getProperties',
    ol.control.Logo.prototype.getProperties);

goog.exportProperty(
    ol.control.Logo.prototype,
    'notify',
    ol.control.Logo.prototype.notify);

goog.exportProperty(
    ol.control.Logo.prototype,
    'on',
    ol.control.Logo.prototype.on);

goog.exportProperty(
    ol.control.Logo.prototype,
    'once',
    ol.control.Logo.prototype.once);

goog.exportProperty(
    ol.control.Logo.prototype,
    'set',
    ol.control.Logo.prototype.set);

goog.exportProperty(
    ol.control.Logo.prototype,
    'setMap',
    ol.control.Logo.prototype.setMap);

goog.exportProperty(
    ol.control.Logo.prototype,
    'setValues',
    ol.control.Logo.prototype.setValues);

goog.exportProperty(
    ol.control.Logo.prototype,
    'un',
    ol.control.Logo.prototype.un);

goog.exportProperty(
    ol.control.Logo.prototype,
    'unByKey',
    ol.control.Logo.prototype.unByKey);

goog.exportProperty(
    ol.control.Logo.prototype,
    'unbind',
    ol.control.Logo.prototype.unbind);

goog.exportProperty(
    ol.control.Logo.prototype,
    'unbindAll',
    ol.control.Logo.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.MousePosition',
    ol.control.MousePosition);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'bindTo',
    ol.control.MousePosition.prototype.bindTo);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'dispatchChangeEvent',
    ol.control.MousePosition.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'get',
    ol.control.MousePosition.prototype.get);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'getCoordinateFormat',
    ol.control.MousePosition.prototype.getCoordinateFormat);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'getKeys',
    ol.control.MousePosition.prototype.getKeys);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'getMap',
    ol.control.MousePosition.prototype.getMap);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'getProjection',
    ol.control.MousePosition.prototype.getProjection);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'getProperties',
    ol.control.MousePosition.prototype.getProperties);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'notify',
    ol.control.MousePosition.prototype.notify);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'on',
    ol.control.MousePosition.prototype.on);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'once',
    ol.control.MousePosition.prototype.once);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'set',
    ol.control.MousePosition.prototype.set);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setCoordinateFormat',
    ol.control.MousePosition.prototype.setCoordinateFormat);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setMap',
    ol.control.MousePosition.prototype.setMap);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setProjection',
    ol.control.MousePosition.prototype.setProjection);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setValues',
    ol.control.MousePosition.prototype.setValues);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'un',
    ol.control.MousePosition.prototype.un);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'unByKey',
    ol.control.MousePosition.prototype.unByKey);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'unbind',
    ol.control.MousePosition.prototype.unbind);

goog.exportProperty(
    ol.control.MousePosition.prototype,
    'unbindAll',
    ol.control.MousePosition.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.Rotate',
    ol.control.Rotate);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'bindTo',
    ol.control.Rotate.prototype.bindTo);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'dispatchChangeEvent',
    ol.control.Rotate.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'get',
    ol.control.Rotate.prototype.get);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'getKeys',
    ol.control.Rotate.prototype.getKeys);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'getMap',
    ol.control.Rotate.prototype.getMap);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'getProperties',
    ol.control.Rotate.prototype.getProperties);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'notify',
    ol.control.Rotate.prototype.notify);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'on',
    ol.control.Rotate.prototype.on);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'once',
    ol.control.Rotate.prototype.once);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'set',
    ol.control.Rotate.prototype.set);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'setMap',
    ol.control.Rotate.prototype.setMap);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'setValues',
    ol.control.Rotate.prototype.setValues);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'un',
    ol.control.Rotate.prototype.un);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'unByKey',
    ol.control.Rotate.prototype.unByKey);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'unbind',
    ol.control.Rotate.prototype.unbind);

goog.exportProperty(
    ol.control.Rotate.prototype,
    'unbindAll',
    ol.control.Rotate.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.ScaleLine',
    ol.control.ScaleLine);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'bindTo',
    ol.control.ScaleLine.prototype.bindTo);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'dispatchChangeEvent',
    ol.control.ScaleLine.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'get',
    ol.control.ScaleLine.prototype.get);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'getKeys',
    ol.control.ScaleLine.prototype.getKeys);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'getMap',
    ol.control.ScaleLine.prototype.getMap);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'getProperties',
    ol.control.ScaleLine.prototype.getProperties);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'getUnits',
    ol.control.ScaleLine.prototype.getUnits);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'notify',
    ol.control.ScaleLine.prototype.notify);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'on',
    ol.control.ScaleLine.prototype.on);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'once',
    ol.control.ScaleLine.prototype.once);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'set',
    ol.control.ScaleLine.prototype.set);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'setMap',
    ol.control.ScaleLine.prototype.setMap);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'setUnits',
    ol.control.ScaleLine.prototype.setUnits);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'setValues',
    ol.control.ScaleLine.prototype.setValues);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'un',
    ol.control.ScaleLine.prototype.un);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'unByKey',
    ol.control.ScaleLine.prototype.unByKey);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'unbind',
    ol.control.ScaleLine.prototype.unbind);

goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'unbindAll',
    ol.control.ScaleLine.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.Zoom',
    ol.control.Zoom);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'bindTo',
    ol.control.Zoom.prototype.bindTo);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'dispatchChangeEvent',
    ol.control.Zoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'get',
    ol.control.Zoom.prototype.get);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'getKeys',
    ol.control.Zoom.prototype.getKeys);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'getMap',
    ol.control.Zoom.prototype.getMap);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'getProperties',
    ol.control.Zoom.prototype.getProperties);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'notify',
    ol.control.Zoom.prototype.notify);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'on',
    ol.control.Zoom.prototype.on);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'once',
    ol.control.Zoom.prototype.once);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'set',
    ol.control.Zoom.prototype.set);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'setMap',
    ol.control.Zoom.prototype.setMap);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'setValues',
    ol.control.Zoom.prototype.setValues);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'un',
    ol.control.Zoom.prototype.un);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'unByKey',
    ol.control.Zoom.prototype.unByKey);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'unbind',
    ol.control.Zoom.prototype.unbind);

goog.exportProperty(
    ol.control.Zoom.prototype,
    'unbindAll',
    ol.control.Zoom.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.ZoomSlider',
    ol.control.ZoomSlider);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'bindTo',
    ol.control.ZoomSlider.prototype.bindTo);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'dispatchChangeEvent',
    ol.control.ZoomSlider.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'get',
    ol.control.ZoomSlider.prototype.get);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'getKeys',
    ol.control.ZoomSlider.prototype.getKeys);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'getMap',
    ol.control.ZoomSlider.prototype.getMap);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'getProperties',
    ol.control.ZoomSlider.prototype.getProperties);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'notify',
    ol.control.ZoomSlider.prototype.notify);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'on',
    ol.control.ZoomSlider.prototype.on);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'once',
    ol.control.ZoomSlider.prototype.once);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'set',
    ol.control.ZoomSlider.prototype.set);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'setValues',
    ol.control.ZoomSlider.prototype.setValues);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'un',
    ol.control.ZoomSlider.prototype.un);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'unByKey',
    ol.control.ZoomSlider.prototype.unByKey);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'unbind',
    ol.control.ZoomSlider.prototype.unbind);

goog.exportProperty(
    ol.control.ZoomSlider.prototype,
    'unbindAll',
    ol.control.ZoomSlider.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.ZoomToExtent',
    ol.control.ZoomToExtent);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'bindTo',
    ol.control.ZoomToExtent.prototype.bindTo);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'dispatchChangeEvent',
    ol.control.ZoomToExtent.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'get',
    ol.control.ZoomToExtent.prototype.get);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'getKeys',
    ol.control.ZoomToExtent.prototype.getKeys);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'getMap',
    ol.control.ZoomToExtent.prototype.getMap);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'getProperties',
    ol.control.ZoomToExtent.prototype.getProperties);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'notify',
    ol.control.ZoomToExtent.prototype.notify);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'on',
    ol.control.ZoomToExtent.prototype.on);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'once',
    ol.control.ZoomToExtent.prototype.once);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'set',
    ol.control.ZoomToExtent.prototype.set);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'setMap',
    ol.control.ZoomToExtent.prototype.setMap);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'setValues',
    ol.control.ZoomToExtent.prototype.setValues);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'un',
    ol.control.ZoomToExtent.prototype.un);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'unByKey',
    ol.control.ZoomToExtent.prototype.unByKey);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'unbind',
    ol.control.ZoomToExtent.prototype.unbind);

goog.exportProperty(
    ol.control.ZoomToExtent.prototype,
    'unbindAll',
    ol.control.ZoomToExtent.prototype.unbindAll);

goog.exportSymbol(
    'ol.control.defaults',
    ol.control.defaults);

goog.exportSymbol(
    'ol.coordinate.add',
    ol.coordinate.add);

goog.exportSymbol(
    'ol.coordinate.createStringXY',
    ol.coordinate.createStringXY);

goog.exportSymbol(
    'ol.coordinate.format',
    ol.coordinate.format);

goog.exportSymbol(
    'ol.coordinate.fromProjectedArray',
    ol.coordinate.fromProjectedArray);

goog.exportSymbol(
    'ol.coordinate.rotate',
    ol.coordinate.rotate);

goog.exportSymbol(
    'ol.coordinate.toStringHDMS',
    ol.coordinate.toStringHDMS);

goog.exportSymbol(
    'ol.coordinate.toStringXY',
    ol.coordinate.toStringXY);

goog.exportSymbol(
    'ol.dom.Input',
    ol.dom.Input);

goog.exportProperty(
    ol.dom.Input.prototype,
    'bindTo',
    ol.dom.Input.prototype.bindTo);

goog.exportProperty(
    ol.dom.Input.prototype,
    'dispatchChangeEvent',
    ol.dom.Input.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.dom.Input.prototype,
    'get',
    ol.dom.Input.prototype.get);

goog.exportProperty(
    ol.dom.Input.prototype,
    'getChecked',
    ol.dom.Input.prototype.getChecked);

goog.exportProperty(
    ol.dom.Input.prototype,
    'getKeys',
    ol.dom.Input.prototype.getKeys);

goog.exportProperty(
    ol.dom.Input.prototype,
    'getProperties',
    ol.dom.Input.prototype.getProperties);

goog.exportProperty(
    ol.dom.Input.prototype,
    'getValue',
    ol.dom.Input.prototype.getValue);

goog.exportProperty(
    ol.dom.Input.prototype,
    'notify',
    ol.dom.Input.prototype.notify);

goog.exportProperty(
    ol.dom.Input.prototype,
    'on',
    ol.dom.Input.prototype.on);

goog.exportProperty(
    ol.dom.Input.prototype,
    'once',
    ol.dom.Input.prototype.once);

goog.exportProperty(
    ol.dom.Input.prototype,
    'set',
    ol.dom.Input.prototype.set);

goog.exportProperty(
    ol.dom.Input.prototype,
    'setChecked',
    ol.dom.Input.prototype.setChecked);

goog.exportProperty(
    ol.dom.Input.prototype,
    'setValue',
    ol.dom.Input.prototype.setValue);

goog.exportProperty(
    ol.dom.Input.prototype,
    'setValues',
    ol.dom.Input.prototype.setValues);

goog.exportProperty(
    ol.dom.Input.prototype,
    'un',
    ol.dom.Input.prototype.un);

goog.exportProperty(
    ol.dom.Input.prototype,
    'unByKey',
    ol.dom.Input.prototype.unByKey);

goog.exportProperty(
    ol.dom.Input.prototype,
    'unbind',
    ol.dom.Input.prototype.unbind);

goog.exportProperty(
    ol.dom.Input.prototype,
    'unbindAll',
    ol.dom.Input.prototype.unbindAll);

goog.exportSymbol(
    'ol.easing.bounce',
    ol.easing.bounce);

goog.exportSymbol(
    'ol.easing.easeIn',
    ol.easing.easeIn);

goog.exportSymbol(
    'ol.easing.easeOut',
    ol.easing.easeOut);

goog.exportSymbol(
    'ol.easing.elastic',
    ol.easing.elastic);

goog.exportSymbol(
    'ol.easing.inAndOut',
    ol.easing.inAndOut);

goog.exportSymbol(
    'ol.easing.linear',
    ol.easing.linear);

goog.exportSymbol(
    'ol.easing.upAndDown',
    ol.easing.upAndDown);

goog.exportSymbol(
    'ol.events.condition.altKeyOnly',
    ol.events.condition.altKeyOnly);

goog.exportSymbol(
    'ol.events.condition.altShiftKeysOnly',
    ol.events.condition.altShiftKeysOnly);

goog.exportSymbol(
    'ol.events.condition.always',
    ol.events.condition.always);

goog.exportSymbol(
    'ol.events.condition.never',
    ol.events.condition.never);

goog.exportSymbol(
    'ol.events.condition.noModifierKeys',
    ol.events.condition.noModifierKeys);

goog.exportSymbol(
    'ol.events.condition.platformModifierKeyOnly',
    ol.events.condition.platformModifierKeyOnly);

goog.exportSymbol(
    'ol.events.condition.shiftKeyOnly',
    ol.events.condition.shiftKeyOnly);

goog.exportSymbol(
    'ol.events.condition.targetNotEditable',
    ol.events.condition.targetNotEditable);

goog.exportSymbol(
    'ol.extent.applyTransform',
    ol.extent.applyTransform);

goog.exportSymbol(
    'ol.extent.boundingExtent',
    ol.extent.boundingExtent);

goog.exportSymbol(
    'ol.extent.buffer',
    ol.extent.buffer);

goog.exportSymbol(
    'ol.extent.containsCoordinate',
    ol.extent.containsCoordinate);

goog.exportSymbol(
    'ol.extent.containsExtent',
    ol.extent.containsExtent);

goog.exportSymbol(
    'ol.extent.createEmpty',
    ol.extent.createEmpty);

goog.exportSymbol(
    'ol.extent.equals',
    ol.extent.equals);

goog.exportSymbol(
    'ol.extent.extend',
    ol.extent.extend);

goog.exportSymbol(
    'ol.extent.getBottomLeft',
    ol.extent.getBottomLeft);

goog.exportSymbol(
    'ol.extent.getBottomRight',
    ol.extent.getBottomRight);

goog.exportSymbol(
    'ol.extent.getCenter',
    ol.extent.getCenter);

goog.exportSymbol(
    'ol.extent.getHeight',
    ol.extent.getHeight);

goog.exportSymbol(
    'ol.extent.getSize',
    ol.extent.getSize);

goog.exportSymbol(
    'ol.extent.getTopLeft',
    ol.extent.getTopLeft);

goog.exportSymbol(
    'ol.extent.getTopRight',
    ol.extent.getTopRight);

goog.exportSymbol(
    'ol.extent.getWidth',
    ol.extent.getWidth);

goog.exportSymbol(
    'ol.extent.intersects',
    ol.extent.intersects);

goog.exportSymbol(
    'ol.extent.isEmpty',
    ol.extent.isEmpty);

goog.exportSymbol(
    'ol.format.GML',
    ol.format.GML);

goog.exportProperty(
    ol.format.GML.prototype,
    'readFeatures',
    ol.format.GML.prototype.readFeatures);

goog.exportProperty(
    ol.format.GML.prototype,
    'writeFeatures',
    ol.format.GML.prototype.writeFeatures);

goog.exportSymbol(
    'ol.format.GPX',
    ol.format.GPX);

goog.exportProperty(
    ol.format.GPX.prototype,
    'readFeature',
    ol.format.GPX.prototype.readFeature);

goog.exportProperty(
    ol.format.GPX.prototype,
    'readFeatures',
    ol.format.GPX.prototype.readFeatures);

goog.exportProperty(
    ol.format.GPX.prototype,
    'readProjection',
    ol.format.GPX.prototype.readProjection);

goog.exportProperty(
    ol.format.GPX.prototype,
    'writeFeatures',
    ol.format.GPX.prototype.writeFeatures);

goog.exportProperty(
    ol.format.GPX.V1_1.prototype,
    'readFeature',
    ol.format.GPX.V1_1.prototype.readFeature);

goog.exportProperty(
    ol.format.GPX.V1_1.prototype,
    'readFeatures',
    ol.format.GPX.V1_1.prototype.readFeatures);

goog.exportProperty(
    ol.format.GPX.V1_1.prototype,
    'readProjection',
    ol.format.GPX.V1_1.prototype.readProjection);

goog.exportProperty(
    ol.format.GPX.V1_1.prototype,
    'writeFeatures',
    ol.format.GPX.V1_1.prototype.writeFeatures);

goog.exportSymbol(
    'ol.format.GeoJSON',
    ol.format.GeoJSON);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'readFeature',
    ol.format.GeoJSON.prototype.readFeature);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'readFeatures',
    ol.format.GeoJSON.prototype.readFeatures);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'readGeometry',
    ol.format.GeoJSON.prototype.readGeometry);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'readProjection',
    ol.format.GeoJSON.prototype.readProjection);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'writeFeature',
    ol.format.GeoJSON.prototype.writeFeature);

goog.exportProperty(
    ol.format.GeoJSON.prototype,
    'writeFeatures',
    ol.format.GeoJSON.prototype.writeFeatures);

goog.exportSymbol(
    'ol.format.IGC',
    ol.format.IGC);

goog.exportProperty(
    ol.format.IGC.prototype,
    'readFeature',
    ol.format.IGC.prototype.readFeature);

goog.exportProperty(
    ol.format.IGC.prototype,
    'readFeatures',
    ol.format.IGC.prototype.readFeatures);

goog.exportProperty(
    ol.format.IGC.prototype,
    'readProjection',
    ol.format.IGC.prototype.readProjection);

goog.exportSymbol(
    'ol.format.KML',
    ol.format.KML);

goog.exportProperty(
    ol.format.KML.prototype,
    'readFeature',
    ol.format.KML.prototype.readFeature);

goog.exportProperty(
    ol.format.KML.prototype,
    'readFeatures',
    ol.format.KML.prototype.readFeatures);

goog.exportProperty(
    ol.format.KML.prototype,
    'readProjection',
    ol.format.KML.prototype.readProjection);

goog.exportSymbol(
    'ol.format.OSMXML',
    ol.format.OSMXML);

goog.exportProperty(
    ol.format.OSMXML.prototype,
    'readFeatures',
    ol.format.OSMXML.prototype.readFeatures);

goog.exportProperty(
    ol.format.OSMXML.prototype,
    'readProjection',
    ol.format.OSMXML.prototype.readProjection);

goog.exportSymbol(
    'ol.format.TopoJSON',
    ol.format.TopoJSON);

goog.exportProperty(
    ol.format.TopoJSON.prototype,
    'readFeatures',
    ol.format.TopoJSON.prototype.readFeatures);

goog.exportProperty(
    ol.format.TopoJSON.prototype,
    'readProjection',
    ol.format.TopoJSON.prototype.readProjection);

goog.exportSymbol(
    'ol.format.WFS',
    ol.format.WFS);

goog.exportProperty(
    ol.format.WFS.prototype,
    'readFeatureCollectionMetadata',
    ol.format.WFS.prototype.readFeatureCollectionMetadata);

goog.exportProperty(
    ol.format.WFS.prototype,
    'readFeatures',
    ol.format.WFS.prototype.readFeatures);

goog.exportProperty(
    ol.format.WFS.prototype,
    'readProjection',
    ol.format.WFS.prototype.readProjection);

goog.exportProperty(
    ol.format.WFS.prototype,
    'readTransactionResponse',
    ol.format.WFS.prototype.readTransactionResponse);

goog.exportProperty(
    ol.format.WFS.prototype,
    'writeGetFeature',
    ol.format.WFS.prototype.writeGetFeature);

goog.exportProperty(
    ol.format.WFS.prototype,
    'writeTransaction',
    ol.format.WFS.prototype.writeTransaction);

goog.exportSymbol(
    'ol.format.WMSCapabilities',
    ol.format.WMSCapabilities);

goog.exportProperty(
    ol.format.WMSCapabilities.prototype,
    'read',
    ol.format.WMSCapabilities.prototype.read);

goog.exportSymbol(
    'ol.geom.Circle',
    ol.geom.Circle);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'clone',
    ol.geom.Circle.prototype.clone);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'dispatchChangeEvent',
    ol.geom.Circle.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getCenter',
    ol.geom.Circle.prototype.getCenter);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getClosestPoint',
    ol.geom.Circle.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getExtent',
    ol.geom.Circle.prototype.getExtent);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getFirstCoordinate',
    ol.geom.Circle.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getLastCoordinate',
    ol.geom.Circle.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getLayout',
    ol.geom.Circle.prototype.getLayout);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getRadius',
    ol.geom.Circle.prototype.getRadius);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getSimplifiedGeometry',
    ol.geom.Circle.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'getType',
    ol.geom.Circle.prototype.getType);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'on',
    ol.geom.Circle.prototype.on);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'once',
    ol.geom.Circle.prototype.once);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'setCenter',
    ol.geom.Circle.prototype.setCenter);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'setCenterAndRadius',
    ol.geom.Circle.prototype.setCenterAndRadius);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'setRadius',
    ol.geom.Circle.prototype.setRadius);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'transform',
    ol.geom.Circle.prototype.transform);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'un',
    ol.geom.Circle.prototype.un);

goog.exportProperty(
    ol.geom.Circle.prototype,
    'unByKey',
    ol.geom.Circle.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.Geometry',
    ol.geom.Geometry);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'applyTransform',
    ol.geom.Geometry.prototype.applyTransform);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'dispatchChangeEvent',
    ol.geom.Geometry.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'getClosestPoint',
    ol.geom.Geometry.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'getExtent',
    ol.geom.Geometry.prototype.getExtent);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'on',
    ol.geom.Geometry.prototype.on);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'once',
    ol.geom.Geometry.prototype.once);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'transform',
    ol.geom.Geometry.prototype.transform);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'un',
    ol.geom.Geometry.prototype.un);

goog.exportProperty(
    ol.geom.Geometry.prototype,
    'unByKey',
    ol.geom.Geometry.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.GeometryCollection',
    ol.geom.GeometryCollection);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'clone',
    ol.geom.GeometryCollection.prototype.clone);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'dispatchChangeEvent',
    ol.geom.GeometryCollection.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'getClosestPoint',
    ol.geom.GeometryCollection.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'getExtent',
    ol.geom.GeometryCollection.prototype.getExtent);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'getGeometries',
    ol.geom.GeometryCollection.prototype.getGeometries);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'getSimplifiedGeometry',
    ol.geom.GeometryCollection.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'getType',
    ol.geom.GeometryCollection.prototype.getType);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'on',
    ol.geom.GeometryCollection.prototype.on);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'once',
    ol.geom.GeometryCollection.prototype.once);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'setGeometries',
    ol.geom.GeometryCollection.prototype.setGeometries);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'transform',
    ol.geom.GeometryCollection.prototype.transform);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'un',
    ol.geom.GeometryCollection.prototype.un);

goog.exportProperty(
    ol.geom.GeometryCollection.prototype,
    'unByKey',
    ol.geom.GeometryCollection.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.LineString',
    ol.geom.LineString);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'appendCoordinate',
    ol.geom.LineString.prototype.appendCoordinate);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'clone',
    ol.geom.LineString.prototype.clone);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'dispatchChangeEvent',
    ol.geom.LineString.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getClosestPoint',
    ol.geom.LineString.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getCoordinateAtM',
    ol.geom.LineString.prototype.getCoordinateAtM);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getCoordinates',
    ol.geom.LineString.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getExtent',
    ol.geom.LineString.prototype.getExtent);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getFirstCoordinate',
    ol.geom.LineString.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getLastCoordinate',
    ol.geom.LineString.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getLayout',
    ol.geom.LineString.prototype.getLayout);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getLength',
    ol.geom.LineString.prototype.getLength);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getSimplifiedGeometry',
    ol.geom.LineString.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'getType',
    ol.geom.LineString.prototype.getType);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'on',
    ol.geom.LineString.prototype.on);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'once',
    ol.geom.LineString.prototype.once);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'setCoordinates',
    ol.geom.LineString.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'transform',
    ol.geom.LineString.prototype.transform);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'un',
    ol.geom.LineString.prototype.un);

goog.exportProperty(
    ol.geom.LineString.prototype,
    'unByKey',
    ol.geom.LineString.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.LinearRing',
    ol.geom.LinearRing);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'clone',
    ol.geom.LinearRing.prototype.clone);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'dispatchChangeEvent',
    ol.geom.LinearRing.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getArea',
    ol.geom.LinearRing.prototype.getArea);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getClosestPoint',
    ol.geom.LinearRing.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getCoordinates',
    ol.geom.LinearRing.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getExtent',
    ol.geom.LinearRing.prototype.getExtent);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getFirstCoordinate',
    ol.geom.LinearRing.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getLastCoordinate',
    ol.geom.LinearRing.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getLayout',
    ol.geom.LinearRing.prototype.getLayout);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getSimplifiedGeometry',
    ol.geom.LinearRing.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'getType',
    ol.geom.LinearRing.prototype.getType);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'on',
    ol.geom.LinearRing.prototype.on);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'once',
    ol.geom.LinearRing.prototype.once);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'setCoordinates',
    ol.geom.LinearRing.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'transform',
    ol.geom.LinearRing.prototype.transform);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'un',
    ol.geom.LinearRing.prototype.un);

goog.exportProperty(
    ol.geom.LinearRing.prototype,
    'unByKey',
    ol.geom.LinearRing.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.MultiLineString',
    ol.geom.MultiLineString);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'appendLineString',
    ol.geom.MultiLineString.prototype.appendLineString);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'clone',
    ol.geom.MultiLineString.prototype.clone);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'dispatchChangeEvent',
    ol.geom.MultiLineString.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getClosestPoint',
    ol.geom.MultiLineString.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getCoordinateAtM',
    ol.geom.MultiLineString.prototype.getCoordinateAtM);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getCoordinates',
    ol.geom.MultiLineString.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getExtent',
    ol.geom.MultiLineString.prototype.getExtent);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getFirstCoordinate',
    ol.geom.MultiLineString.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getLastCoordinate',
    ol.geom.MultiLineString.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getLayout',
    ol.geom.MultiLineString.prototype.getLayout);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getLineString',
    ol.geom.MultiLineString.prototype.getLineString);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getLineStrings',
    ol.geom.MultiLineString.prototype.getLineStrings);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getSimplifiedGeometry',
    ol.geom.MultiLineString.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getType',
    ol.geom.MultiLineString.prototype.getType);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'on',
    ol.geom.MultiLineString.prototype.on);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'once',
    ol.geom.MultiLineString.prototype.once);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'setCoordinates',
    ol.geom.MultiLineString.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'transform',
    ol.geom.MultiLineString.prototype.transform);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'un',
    ol.geom.MultiLineString.prototype.un);

goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'unByKey',
    ol.geom.MultiLineString.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.MultiPoint',
    ol.geom.MultiPoint);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'appendPoint',
    ol.geom.MultiPoint.prototype.appendPoint);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'clone',
    ol.geom.MultiPoint.prototype.clone);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'dispatchChangeEvent',
    ol.geom.MultiPoint.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getClosestPoint',
    ol.geom.MultiPoint.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getCoordinates',
    ol.geom.MultiPoint.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getExtent',
    ol.geom.MultiPoint.prototype.getExtent);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getFirstCoordinate',
    ol.geom.MultiPoint.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getLastCoordinate',
    ol.geom.MultiPoint.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getLayout',
    ol.geom.MultiPoint.prototype.getLayout);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getPoint',
    ol.geom.MultiPoint.prototype.getPoint);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getPoints',
    ol.geom.MultiPoint.prototype.getPoints);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getSimplifiedGeometry',
    ol.geom.MultiPoint.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getType',
    ol.geom.MultiPoint.prototype.getType);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'on',
    ol.geom.MultiPoint.prototype.on);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'once',
    ol.geom.MultiPoint.prototype.once);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'setCoordinates',
    ol.geom.MultiPoint.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'transform',
    ol.geom.MultiPoint.prototype.transform);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'un',
    ol.geom.MultiPoint.prototype.un);

goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'unByKey',
    ol.geom.MultiPoint.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.MultiPolygon',
    ol.geom.MultiPolygon);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'appendPolygon',
    ol.geom.MultiPolygon.prototype.appendPolygon);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'clone',
    ol.geom.MultiPolygon.prototype.clone);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'dispatchChangeEvent',
    ol.geom.MultiPolygon.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getArea',
    ol.geom.MultiPolygon.prototype.getArea);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getClosestPoint',
    ol.geom.MultiPolygon.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getCoordinates',
    ol.geom.MultiPolygon.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getExtent',
    ol.geom.MultiPolygon.prototype.getExtent);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getFirstCoordinate',
    ol.geom.MultiPolygon.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getInteriorPoints',
    ol.geom.MultiPolygon.prototype.getInteriorPoints);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getLastCoordinate',
    ol.geom.MultiPolygon.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getLayout',
    ol.geom.MultiPolygon.prototype.getLayout);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getPolygon',
    ol.geom.MultiPolygon.prototype.getPolygon);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getPolygons',
    ol.geom.MultiPolygon.prototype.getPolygons);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getSimplifiedGeometry',
    ol.geom.MultiPolygon.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getType',
    ol.geom.MultiPolygon.prototype.getType);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'on',
    ol.geom.MultiPolygon.prototype.on);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'once',
    ol.geom.MultiPolygon.prototype.once);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'setCoordinates',
    ol.geom.MultiPolygon.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'transform',
    ol.geom.MultiPolygon.prototype.transform);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'un',
    ol.geom.MultiPolygon.prototype.un);

goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'unByKey',
    ol.geom.MultiPolygon.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.Point',
    ol.geom.Point);

goog.exportProperty(
    ol.geom.Point.prototype,
    'clone',
    ol.geom.Point.prototype.clone);

goog.exportProperty(
    ol.geom.Point.prototype,
    'dispatchChangeEvent',
    ol.geom.Point.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getClosestPoint',
    ol.geom.Point.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getCoordinates',
    ol.geom.Point.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getFirstCoordinate',
    ol.geom.Point.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getLastCoordinate',
    ol.geom.Point.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getLayout',
    ol.geom.Point.prototype.getLayout);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getSimplifiedGeometry',
    ol.geom.Point.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.Point.prototype,
    'getType',
    ol.geom.Point.prototype.getType);

goog.exportProperty(
    ol.geom.Point.prototype,
    'on',
    ol.geom.Point.prototype.on);

goog.exportProperty(
    ol.geom.Point.prototype,
    'once',
    ol.geom.Point.prototype.once);

goog.exportProperty(
    ol.geom.Point.prototype,
    'setCoordinates',
    ol.geom.Point.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.Point.prototype,
    'transform',
    ol.geom.Point.prototype.transform);

goog.exportProperty(
    ol.geom.Point.prototype,
    'un',
    ol.geom.Point.prototype.un);

goog.exportProperty(
    ol.geom.Point.prototype,
    'unByKey',
    ol.geom.Point.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.Polygon',
    ol.geom.Polygon);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'appendLinearRing',
    ol.geom.Polygon.prototype.appendLinearRing);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'clone',
    ol.geom.Polygon.prototype.clone);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'dispatchChangeEvent',
    ol.geom.Polygon.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getArea',
    ol.geom.Polygon.prototype.getArea);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getClosestPoint',
    ol.geom.Polygon.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getCoordinates',
    ol.geom.Polygon.prototype.getCoordinates);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getExtent',
    ol.geom.Polygon.prototype.getExtent);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getFirstCoordinate',
    ol.geom.Polygon.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getInteriorPoint',
    ol.geom.Polygon.prototype.getInteriorPoint);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getLastCoordinate',
    ol.geom.Polygon.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getLayout',
    ol.geom.Polygon.prototype.getLayout);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getLinearRing',
    ol.geom.Polygon.prototype.getLinearRing);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getLinearRings',
    ol.geom.Polygon.prototype.getLinearRings);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getSimplifiedGeometry',
    ol.geom.Polygon.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getType',
    ol.geom.Polygon.prototype.getType);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'on',
    ol.geom.Polygon.prototype.on);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'once',
    ol.geom.Polygon.prototype.once);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'setCoordinates',
    ol.geom.Polygon.prototype.setCoordinates);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'transform',
    ol.geom.Polygon.prototype.transform);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'un',
    ol.geom.Polygon.prototype.un);

goog.exportProperty(
    ol.geom.Polygon.prototype,
    'unByKey',
    ol.geom.Polygon.prototype.unByKey);

goog.exportSymbol(
    'ol.geom.Polygon.circular',
    ol.geom.Polygon.circular);

goog.exportSymbol(
    'ol.geom.SimpleGeometry',
    ol.geom.SimpleGeometry);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'dispatchChangeEvent',
    ol.geom.SimpleGeometry.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getClosestPoint',
    ol.geom.SimpleGeometry.prototype.getClosestPoint);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getExtent',
    ol.geom.SimpleGeometry.prototype.getExtent);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getFirstCoordinate',
    ol.geom.SimpleGeometry.prototype.getFirstCoordinate);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getLastCoordinate',
    ol.geom.SimpleGeometry.prototype.getLastCoordinate);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getLayout',
    ol.geom.SimpleGeometry.prototype.getLayout);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'getSimplifiedGeometry',
    ol.geom.SimpleGeometry.prototype.getSimplifiedGeometry);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'on',
    ol.geom.SimpleGeometry.prototype.on);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'once',
    ol.geom.SimpleGeometry.prototype.once);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'transform',
    ol.geom.SimpleGeometry.prototype.transform);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'un',
    ol.geom.SimpleGeometry.prototype.un);

goog.exportProperty(
    ol.geom.SimpleGeometry.prototype,
    'unByKey',
    ol.geom.SimpleGeometry.prototype.unByKey);

goog.exportSymbol(
    'ol.inherits',
    ol.inherits);

goog.exportSymbol(
    'ol.interaction.DoubleClickZoom',
    ol.interaction.DoubleClickZoom);

goog.exportProperty(
    ol.interaction.DoubleClickZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.DoubleClickZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DoubleClickZoom.prototype,
    'on',
    ol.interaction.DoubleClickZoom.prototype.on);

goog.exportProperty(
    ol.interaction.DoubleClickZoom.prototype,
    'once',
    ol.interaction.DoubleClickZoom.prototype.once);

goog.exportProperty(
    ol.interaction.DoubleClickZoom.prototype,
    'un',
    ol.interaction.DoubleClickZoom.prototype.un);

goog.exportProperty(
    ol.interaction.DoubleClickZoom.prototype,
    'unByKey',
    ol.interaction.DoubleClickZoom.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.DragAndDrop',
    ol.interaction.DragAndDrop);

goog.exportProperty(
    ol.interaction.DragAndDrop.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragAndDrop.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragAndDrop.prototype,
    'on',
    ol.interaction.DragAndDrop.prototype.on);

goog.exportProperty(
    ol.interaction.DragAndDrop.prototype,
    'once',
    ol.interaction.DragAndDrop.prototype.once);

goog.exportProperty(
    ol.interaction.DragAndDrop.prototype,
    'un',
    ol.interaction.DragAndDrop.prototype.un);

goog.exportProperty(
    ol.interaction.DragAndDrop.prototype,
    'unByKey',
    ol.interaction.DragAndDrop.prototype.unByKey);

goog.exportProperty(
    ol.interaction.DragAndDropEvent.prototype,
    'features',
    ol.interaction.DragAndDropEvent.prototype.features);

goog.exportProperty(
    ol.interaction.DragAndDropEvent.prototype,
    'file',
    ol.interaction.DragAndDropEvent.prototype.file);

goog.exportProperty(
    ol.interaction.DragAndDropEvent.prototype,
    'projection',
    ol.interaction.DragAndDropEvent.prototype.projection);

goog.exportSymbol(
    'ol.interaction.DragBox',
    ol.interaction.DragBox);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragBox.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'getGeometry',
    ol.interaction.DragBox.prototype.getGeometry);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'on',
    ol.interaction.DragBox.prototype.on);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'once',
    ol.interaction.DragBox.prototype.once);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'un',
    ol.interaction.DragBox.prototype.un);

goog.exportProperty(
    ol.interaction.DragBox.prototype,
    'unByKey',
    ol.interaction.DragBox.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.DragPan',
    ol.interaction.DragPan);

goog.exportProperty(
    ol.interaction.DragPan.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragPan.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragPan.prototype,
    'on',
    ol.interaction.DragPan.prototype.on);

goog.exportProperty(
    ol.interaction.DragPan.prototype,
    'once',
    ol.interaction.DragPan.prototype.once);

goog.exportProperty(
    ol.interaction.DragPan.prototype,
    'un',
    ol.interaction.DragPan.prototype.un);

goog.exportProperty(
    ol.interaction.DragPan.prototype,
    'unByKey',
    ol.interaction.DragPan.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.DragRotate',
    ol.interaction.DragRotate);

goog.exportProperty(
    ol.interaction.DragRotate.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragRotate.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragRotate.prototype,
    'on',
    ol.interaction.DragRotate.prototype.on);

goog.exportProperty(
    ol.interaction.DragRotate.prototype,
    'once',
    ol.interaction.DragRotate.prototype.once);

goog.exportProperty(
    ol.interaction.DragRotate.prototype,
    'un',
    ol.interaction.DragRotate.prototype.un);

goog.exportProperty(
    ol.interaction.DragRotate.prototype,
    'unByKey',
    ol.interaction.DragRotate.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.DragRotateAndZoom',
    ol.interaction.DragRotateAndZoom);

goog.exportProperty(
    ol.interaction.DragRotateAndZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragRotateAndZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragRotateAndZoom.prototype,
    'on',
    ol.interaction.DragRotateAndZoom.prototype.on);

goog.exportProperty(
    ol.interaction.DragRotateAndZoom.prototype,
    'once',
    ol.interaction.DragRotateAndZoom.prototype.once);

goog.exportProperty(
    ol.interaction.DragRotateAndZoom.prototype,
    'un',
    ol.interaction.DragRotateAndZoom.prototype.un);

goog.exportProperty(
    ol.interaction.DragRotateAndZoom.prototype,
    'unByKey',
    ol.interaction.DragRotateAndZoom.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.DragZoom',
    ol.interaction.DragZoom);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.DragZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'getGeometry',
    ol.interaction.DragZoom.prototype.getGeometry);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'on',
    ol.interaction.DragZoom.prototype.on);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'once',
    ol.interaction.DragZoom.prototype.once);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'un',
    ol.interaction.DragZoom.prototype.un);

goog.exportProperty(
    ol.interaction.DragZoom.prototype,
    'unByKey',
    ol.interaction.DragZoom.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.Draw',
    ol.interaction.Draw);

goog.exportProperty(
    ol.interaction.Draw.prototype,
    'dispatchChangeEvent',
    ol.interaction.Draw.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.Draw.prototype,
    'on',
    ol.interaction.Draw.prototype.on);

goog.exportProperty(
    ol.interaction.Draw.prototype,
    'once',
    ol.interaction.Draw.prototype.once);

goog.exportProperty(
    ol.interaction.Draw.prototype,
    'un',
    ol.interaction.Draw.prototype.un);

goog.exportProperty(
    ol.interaction.Draw.prototype,
    'unByKey',
    ol.interaction.Draw.prototype.unByKey);

goog.exportProperty(
    ol.interaction.Interaction.prototype,
    'dispatchChangeEvent',
    ol.interaction.Interaction.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.Interaction.prototype,
    'on',
    ol.interaction.Interaction.prototype.on);

goog.exportProperty(
    ol.interaction.Interaction.prototype,
    'once',
    ol.interaction.Interaction.prototype.once);

goog.exportProperty(
    ol.interaction.Interaction.prototype,
    'un',
    ol.interaction.Interaction.prototype.un);

goog.exportProperty(
    ol.interaction.Interaction.prototype,
    'unByKey',
    ol.interaction.Interaction.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.KeyboardPan',
    ol.interaction.KeyboardPan);

goog.exportProperty(
    ol.interaction.KeyboardPan.prototype,
    'dispatchChangeEvent',
    ol.interaction.KeyboardPan.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.KeyboardPan.prototype,
    'on',
    ol.interaction.KeyboardPan.prototype.on);

goog.exportProperty(
    ol.interaction.KeyboardPan.prototype,
    'once',
    ol.interaction.KeyboardPan.prototype.once);

goog.exportProperty(
    ol.interaction.KeyboardPan.prototype,
    'un',
    ol.interaction.KeyboardPan.prototype.un);

goog.exportProperty(
    ol.interaction.KeyboardPan.prototype,
    'unByKey',
    ol.interaction.KeyboardPan.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.KeyboardZoom',
    ol.interaction.KeyboardZoom);

goog.exportProperty(
    ol.interaction.KeyboardZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.KeyboardZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.KeyboardZoom.prototype,
    'on',
    ol.interaction.KeyboardZoom.prototype.on);

goog.exportProperty(
    ol.interaction.KeyboardZoom.prototype,
    'once',
    ol.interaction.KeyboardZoom.prototype.once);

goog.exportProperty(
    ol.interaction.KeyboardZoom.prototype,
    'un',
    ol.interaction.KeyboardZoom.prototype.un);

goog.exportProperty(
    ol.interaction.KeyboardZoom.prototype,
    'unByKey',
    ol.interaction.KeyboardZoom.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.Modify',
    ol.interaction.Modify);

goog.exportProperty(
    ol.interaction.Modify.prototype,
    'dispatchChangeEvent',
    ol.interaction.Modify.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.Modify.prototype,
    'on',
    ol.interaction.Modify.prototype.on);

goog.exportProperty(
    ol.interaction.Modify.prototype,
    'once',
    ol.interaction.Modify.prototype.once);

goog.exportProperty(
    ol.interaction.Modify.prototype,
    'un',
    ol.interaction.Modify.prototype.un);

goog.exportProperty(
    ol.interaction.Modify.prototype,
    'unByKey',
    ol.interaction.Modify.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.MouseWheelZoom',
    ol.interaction.MouseWheelZoom);

goog.exportProperty(
    ol.interaction.MouseWheelZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.MouseWheelZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.MouseWheelZoom.prototype,
    'on',
    ol.interaction.MouseWheelZoom.prototype.on);

goog.exportProperty(
    ol.interaction.MouseWheelZoom.prototype,
    'once',
    ol.interaction.MouseWheelZoom.prototype.once);

goog.exportProperty(
    ol.interaction.MouseWheelZoom.prototype,
    'un',
    ol.interaction.MouseWheelZoom.prototype.un);

goog.exportProperty(
    ol.interaction.MouseWheelZoom.prototype,
    'unByKey',
    ol.interaction.MouseWheelZoom.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.PinchRotate',
    ol.interaction.PinchRotate);

goog.exportProperty(
    ol.interaction.PinchRotate.prototype,
    'dispatchChangeEvent',
    ol.interaction.PinchRotate.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.PinchRotate.prototype,
    'on',
    ol.interaction.PinchRotate.prototype.on);

goog.exportProperty(
    ol.interaction.PinchRotate.prototype,
    'once',
    ol.interaction.PinchRotate.prototype.once);

goog.exportProperty(
    ol.interaction.PinchRotate.prototype,
    'un',
    ol.interaction.PinchRotate.prototype.un);

goog.exportProperty(
    ol.interaction.PinchRotate.prototype,
    'unByKey',
    ol.interaction.PinchRotate.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.PinchZoom',
    ol.interaction.PinchZoom);

goog.exportProperty(
    ol.interaction.PinchZoom.prototype,
    'dispatchChangeEvent',
    ol.interaction.PinchZoom.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.PinchZoom.prototype,
    'on',
    ol.interaction.PinchZoom.prototype.on);

goog.exportProperty(
    ol.interaction.PinchZoom.prototype,
    'once',
    ol.interaction.PinchZoom.prototype.once);

goog.exportProperty(
    ol.interaction.PinchZoom.prototype,
    'un',
    ol.interaction.PinchZoom.prototype.un);

goog.exportProperty(
    ol.interaction.PinchZoom.prototype,
    'unByKey',
    ol.interaction.PinchZoom.prototype.unByKey);

goog.exportProperty(
    ol.interaction.Pointer.prototype,
    'dispatchChangeEvent',
    ol.interaction.Pointer.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.Pointer.prototype,
    'on',
    ol.interaction.Pointer.prototype.on);

goog.exportProperty(
    ol.interaction.Pointer.prototype,
    'once',
    ol.interaction.Pointer.prototype.once);

goog.exportProperty(
    ol.interaction.Pointer.prototype,
    'un',
    ol.interaction.Pointer.prototype.un);

goog.exportProperty(
    ol.interaction.Pointer.prototype,
    'unByKey',
    ol.interaction.Pointer.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.Select',
    ol.interaction.Select);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'dispatchChangeEvent',
    ol.interaction.Select.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'getFeatures',
    ol.interaction.Select.prototype.getFeatures);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'on',
    ol.interaction.Select.prototype.on);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'once',
    ol.interaction.Select.prototype.once);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'setMap',
    ol.interaction.Select.prototype.setMap);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'un',
    ol.interaction.Select.prototype.un);

goog.exportProperty(
    ol.interaction.Select.prototype,
    'unByKey',
    ol.interaction.Select.prototype.unByKey);

goog.exportSymbol(
    'ol.interaction.defaults',
    ol.interaction.defaults);

goog.exportProperty(
    ol.layer.Base.prototype,
    'bindTo',
    ol.layer.Base.prototype.bindTo);

goog.exportProperty(
    ol.layer.Base.prototype,
    'dispatchChangeEvent',
    ol.layer.Base.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Base.prototype,
    'get',
    ol.layer.Base.prototype.get);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getBrightness',
    ol.layer.Base.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getContrast',
    ol.layer.Base.prototype.getContrast);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getHue',
    ol.layer.Base.prototype.getHue);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getKeys',
    ol.layer.Base.prototype.getKeys);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getMaxResolution',
    ol.layer.Base.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getMinResolution',
    ol.layer.Base.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getOpacity',
    ol.layer.Base.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getProperties',
    ol.layer.Base.prototype.getProperties);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getSaturation',
    ol.layer.Base.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Base.prototype,
    'getVisible',
    ol.layer.Base.prototype.getVisible);

goog.exportProperty(
    ol.layer.Base.prototype,
    'notify',
    ol.layer.Base.prototype.notify);

goog.exportProperty(
    ol.layer.Base.prototype,
    'on',
    ol.layer.Base.prototype.on);

goog.exportProperty(
    ol.layer.Base.prototype,
    'once',
    ol.layer.Base.prototype.once);

goog.exportProperty(
    ol.layer.Base.prototype,
    'set',
    ol.layer.Base.prototype.set);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setBrightness',
    ol.layer.Base.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setContrast',
    ol.layer.Base.prototype.setContrast);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setHue',
    ol.layer.Base.prototype.setHue);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setMaxResolution',
    ol.layer.Base.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setMinResolution',
    ol.layer.Base.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setOpacity',
    ol.layer.Base.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setSaturation',
    ol.layer.Base.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setValues',
    ol.layer.Base.prototype.setValues);

goog.exportProperty(
    ol.layer.Base.prototype,
    'setVisible',
    ol.layer.Base.prototype.setVisible);

goog.exportProperty(
    ol.layer.Base.prototype,
    'un',
    ol.layer.Base.prototype.un);

goog.exportProperty(
    ol.layer.Base.prototype,
    'unByKey',
    ol.layer.Base.prototype.unByKey);

goog.exportProperty(
    ol.layer.Base.prototype,
    'unbind',
    ol.layer.Base.prototype.unbind);

goog.exportProperty(
    ol.layer.Base.prototype,
    'unbindAll',
    ol.layer.Base.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Group',
    ol.layer.Group);

goog.exportProperty(
    ol.layer.Group.prototype,
    'bindTo',
    ol.layer.Group.prototype.bindTo);

goog.exportProperty(
    ol.layer.Group.prototype,
    'dispatchChangeEvent',
    ol.layer.Group.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Group.prototype,
    'get',
    ol.layer.Group.prototype.get);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getBrightness',
    ol.layer.Group.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getContrast',
    ol.layer.Group.prototype.getContrast);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getHue',
    ol.layer.Group.prototype.getHue);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getKeys',
    ol.layer.Group.prototype.getKeys);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getMaxResolution',
    ol.layer.Group.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getMinResolution',
    ol.layer.Group.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getOpacity',
    ol.layer.Group.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getProperties',
    ol.layer.Group.prototype.getProperties);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getSaturation',
    ol.layer.Group.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Group.prototype,
    'getVisible',
    ol.layer.Group.prototype.getVisible);

goog.exportProperty(
    ol.layer.Group.prototype,
    'notify',
    ol.layer.Group.prototype.notify);

goog.exportProperty(
    ol.layer.Group.prototype,
    'on',
    ol.layer.Group.prototype.on);

goog.exportProperty(
    ol.layer.Group.prototype,
    'once',
    ol.layer.Group.prototype.once);

goog.exportProperty(
    ol.layer.Group.prototype,
    'set',
    ol.layer.Group.prototype.set);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setBrightness',
    ol.layer.Group.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setContrast',
    ol.layer.Group.prototype.setContrast);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setHue',
    ol.layer.Group.prototype.setHue);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setMaxResolution',
    ol.layer.Group.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setMinResolution',
    ol.layer.Group.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setOpacity',
    ol.layer.Group.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setSaturation',
    ol.layer.Group.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setValues',
    ol.layer.Group.prototype.setValues);

goog.exportProperty(
    ol.layer.Group.prototype,
    'setVisible',
    ol.layer.Group.prototype.setVisible);

goog.exportProperty(
    ol.layer.Group.prototype,
    'un',
    ol.layer.Group.prototype.un);

goog.exportProperty(
    ol.layer.Group.prototype,
    'unByKey',
    ol.layer.Group.prototype.unByKey);

goog.exportProperty(
    ol.layer.Group.prototype,
    'unbind',
    ol.layer.Group.prototype.unbind);

goog.exportProperty(
    ol.layer.Group.prototype,
    'unbindAll',
    ol.layer.Group.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Heatmap',
    ol.layer.Heatmap);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'bindTo',
    ol.layer.Heatmap.prototype.bindTo);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'dispatchChangeEvent',
    ol.layer.Heatmap.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'get',
    ol.layer.Heatmap.prototype.get);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getBrightness',
    ol.layer.Heatmap.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getContrast',
    ol.layer.Heatmap.prototype.getContrast);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getHue',
    ol.layer.Heatmap.prototype.getHue);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getKeys',
    ol.layer.Heatmap.prototype.getKeys);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getMaxResolution',
    ol.layer.Heatmap.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getMinResolution',
    ol.layer.Heatmap.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getOpacity',
    ol.layer.Heatmap.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getProperties',
    ol.layer.Heatmap.prototype.getProperties);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getSaturation',
    ol.layer.Heatmap.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getSource',
    ol.layer.Heatmap.prototype.getSource);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getStyle',
    ol.layer.Heatmap.prototype.getStyle);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getStyleFunction',
    ol.layer.Heatmap.prototype.getStyleFunction);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'getVisible',
    ol.layer.Heatmap.prototype.getVisible);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'notify',
    ol.layer.Heatmap.prototype.notify);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'on',
    ol.layer.Heatmap.prototype.on);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'once',
    ol.layer.Heatmap.prototype.once);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'set',
    ol.layer.Heatmap.prototype.set);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setBrightness',
    ol.layer.Heatmap.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setContrast',
    ol.layer.Heatmap.prototype.setContrast);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setHue',
    ol.layer.Heatmap.prototype.setHue);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setMaxResolution',
    ol.layer.Heatmap.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setMinResolution',
    ol.layer.Heatmap.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setOpacity',
    ol.layer.Heatmap.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setSaturation',
    ol.layer.Heatmap.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setStyle',
    ol.layer.Heatmap.prototype.setStyle);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setValues',
    ol.layer.Heatmap.prototype.setValues);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'setVisible',
    ol.layer.Heatmap.prototype.setVisible);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'un',
    ol.layer.Heatmap.prototype.un);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'unByKey',
    ol.layer.Heatmap.prototype.unByKey);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'unbind',
    ol.layer.Heatmap.prototype.unbind);

goog.exportProperty(
    ol.layer.Heatmap.prototype,
    'unbindAll',
    ol.layer.Heatmap.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Image',
    ol.layer.Image);

goog.exportProperty(
    ol.layer.Image.prototype,
    'bindTo',
    ol.layer.Image.prototype.bindTo);

goog.exportProperty(
    ol.layer.Image.prototype,
    'dispatchChangeEvent',
    ol.layer.Image.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Image.prototype,
    'get',
    ol.layer.Image.prototype.get);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getBrightness',
    ol.layer.Image.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getContrast',
    ol.layer.Image.prototype.getContrast);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getHue',
    ol.layer.Image.prototype.getHue);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getKeys',
    ol.layer.Image.prototype.getKeys);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getMaxResolution',
    ol.layer.Image.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getMinResolution',
    ol.layer.Image.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getOpacity',
    ol.layer.Image.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getProperties',
    ol.layer.Image.prototype.getProperties);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getSaturation',
    ol.layer.Image.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getSource',
    ol.layer.Image.prototype.getSource);

goog.exportProperty(
    ol.layer.Image.prototype,
    'getVisible',
    ol.layer.Image.prototype.getVisible);

goog.exportProperty(
    ol.layer.Image.prototype,
    'notify',
    ol.layer.Image.prototype.notify);

goog.exportProperty(
    ol.layer.Image.prototype,
    'on',
    ol.layer.Image.prototype.on);

goog.exportProperty(
    ol.layer.Image.prototype,
    'once',
    ol.layer.Image.prototype.once);

goog.exportProperty(
    ol.layer.Image.prototype,
    'set',
    ol.layer.Image.prototype.set);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setBrightness',
    ol.layer.Image.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setContrast',
    ol.layer.Image.prototype.setContrast);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setHue',
    ol.layer.Image.prototype.setHue);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setMaxResolution',
    ol.layer.Image.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setMinResolution',
    ol.layer.Image.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setOpacity',
    ol.layer.Image.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setSaturation',
    ol.layer.Image.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setValues',
    ol.layer.Image.prototype.setValues);

goog.exportProperty(
    ol.layer.Image.prototype,
    'setVisible',
    ol.layer.Image.prototype.setVisible);

goog.exportProperty(
    ol.layer.Image.prototype,
    'un',
    ol.layer.Image.prototype.un);

goog.exportProperty(
    ol.layer.Image.prototype,
    'unByKey',
    ol.layer.Image.prototype.unByKey);

goog.exportProperty(
    ol.layer.Image.prototype,
    'unbind',
    ol.layer.Image.prototype.unbind);

goog.exportProperty(
    ol.layer.Image.prototype,
    'unbindAll',
    ol.layer.Image.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Layer',
    ol.layer.Layer);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'bindTo',
    ol.layer.Layer.prototype.bindTo);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'dispatchChangeEvent',
    ol.layer.Layer.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'get',
    ol.layer.Layer.prototype.get);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getBrightness',
    ol.layer.Layer.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getContrast',
    ol.layer.Layer.prototype.getContrast);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getHue',
    ol.layer.Layer.prototype.getHue);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getKeys',
    ol.layer.Layer.prototype.getKeys);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getMaxResolution',
    ol.layer.Layer.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getMinResolution',
    ol.layer.Layer.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getOpacity',
    ol.layer.Layer.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getProperties',
    ol.layer.Layer.prototype.getProperties);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getSaturation',
    ol.layer.Layer.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getSource',
    ol.layer.Layer.prototype.getSource);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getVisible',
    ol.layer.Layer.prototype.getVisible);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'notify',
    ol.layer.Layer.prototype.notify);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'on',
    ol.layer.Layer.prototype.on);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'once',
    ol.layer.Layer.prototype.once);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'set',
    ol.layer.Layer.prototype.set);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setBrightness',
    ol.layer.Layer.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setContrast',
    ol.layer.Layer.prototype.setContrast);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setHue',
    ol.layer.Layer.prototype.setHue);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setMaxResolution',
    ol.layer.Layer.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setMinResolution',
    ol.layer.Layer.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setOpacity',
    ol.layer.Layer.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setSaturation',
    ol.layer.Layer.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setValues',
    ol.layer.Layer.prototype.setValues);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'setVisible',
    ol.layer.Layer.prototype.setVisible);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'un',
    ol.layer.Layer.prototype.un);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'unByKey',
    ol.layer.Layer.prototype.unByKey);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'unbind',
    ol.layer.Layer.prototype.unbind);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'unbindAll',
    ol.layer.Layer.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Tile',
    ol.layer.Tile);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'bindTo',
    ol.layer.Tile.prototype.bindTo);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'dispatchChangeEvent',
    ol.layer.Tile.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'get',
    ol.layer.Tile.prototype.get);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getBrightness',
    ol.layer.Tile.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getContrast',
    ol.layer.Tile.prototype.getContrast);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getHue',
    ol.layer.Tile.prototype.getHue);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getKeys',
    ol.layer.Tile.prototype.getKeys);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getMaxResolution',
    ol.layer.Tile.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getMinResolution',
    ol.layer.Tile.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getOpacity',
    ol.layer.Tile.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getProperties',
    ol.layer.Tile.prototype.getProperties);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getSaturation',
    ol.layer.Tile.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getSource',
    ol.layer.Tile.prototype.getSource);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'getVisible',
    ol.layer.Tile.prototype.getVisible);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'notify',
    ol.layer.Tile.prototype.notify);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'on',
    ol.layer.Tile.prototype.on);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'once',
    ol.layer.Tile.prototype.once);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'set',
    ol.layer.Tile.prototype.set);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setBrightness',
    ol.layer.Tile.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setContrast',
    ol.layer.Tile.prototype.setContrast);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setHue',
    ol.layer.Tile.prototype.setHue);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setMaxResolution',
    ol.layer.Tile.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setMinResolution',
    ol.layer.Tile.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setOpacity',
    ol.layer.Tile.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setSaturation',
    ol.layer.Tile.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setValues',
    ol.layer.Tile.prototype.setValues);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'setVisible',
    ol.layer.Tile.prototype.setVisible);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'un',
    ol.layer.Tile.prototype.un);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'unByKey',
    ol.layer.Tile.prototype.unByKey);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'unbind',
    ol.layer.Tile.prototype.unbind);

goog.exportProperty(
    ol.layer.Tile.prototype,
    'unbindAll',
    ol.layer.Tile.prototype.unbindAll);

goog.exportSymbol(
    'ol.layer.Vector',
    ol.layer.Vector);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'bindTo',
    ol.layer.Vector.prototype.bindTo);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'dispatchChangeEvent',
    ol.layer.Vector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'get',
    ol.layer.Vector.prototype.get);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getBrightness',
    ol.layer.Vector.prototype.getBrightness);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getContrast',
    ol.layer.Vector.prototype.getContrast);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getHue',
    ol.layer.Vector.prototype.getHue);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getKeys',
    ol.layer.Vector.prototype.getKeys);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getMaxResolution',
    ol.layer.Vector.prototype.getMaxResolution);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getMinResolution',
    ol.layer.Vector.prototype.getMinResolution);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getOpacity',
    ol.layer.Vector.prototype.getOpacity);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getProperties',
    ol.layer.Vector.prototype.getProperties);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getSaturation',
    ol.layer.Vector.prototype.getSaturation);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getSource',
    ol.layer.Vector.prototype.getSource);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getStyle',
    ol.layer.Vector.prototype.getStyle);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getStyleFunction',
    ol.layer.Vector.prototype.getStyleFunction);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'getVisible',
    ol.layer.Vector.prototype.getVisible);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'notify',
    ol.layer.Vector.prototype.notify);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'on',
    ol.layer.Vector.prototype.on);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'once',
    ol.layer.Vector.prototype.once);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'set',
    ol.layer.Vector.prototype.set);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setBrightness',
    ol.layer.Vector.prototype.setBrightness);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setContrast',
    ol.layer.Vector.prototype.setContrast);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setHue',
    ol.layer.Vector.prototype.setHue);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setMaxResolution',
    ol.layer.Vector.prototype.setMaxResolution);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setMinResolution',
    ol.layer.Vector.prototype.setMinResolution);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setOpacity',
    ol.layer.Vector.prototype.setOpacity);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setSaturation',
    ol.layer.Vector.prototype.setSaturation);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setStyle',
    ol.layer.Vector.prototype.setStyle);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setValues',
    ol.layer.Vector.prototype.setValues);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'setVisible',
    ol.layer.Vector.prototype.setVisible);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'un',
    ol.layer.Vector.prototype.un);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'unByKey',
    ol.layer.Vector.prototype.unByKey);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'unbind',
    ol.layer.Vector.prototype.unbind);

goog.exportProperty(
    ol.layer.Vector.prototype,
    'unbindAll',
    ol.layer.Vector.prototype.unbindAll);

goog.exportSymbol(
    'ol.loadingstrategy.all',
    ol.loadingstrategy.all);

goog.exportSymbol(
    'ol.loadingstrategy.bbox',
    ol.loadingstrategy.bbox);

goog.exportSymbol(
    'ol.loadingstrategy.createTile',
    ol.loadingstrategy.createTile);

goog.exportSymbol(
    'ol.proj.CH',
    ol.proj.CH);

goog.exportProperty(
    ol.proj.CH.prototype,
    'getCode',
    ol.proj.CH.prototype.getCode);

goog.exportProperty(
    ol.proj.CH.prototype,
    'getExtent',
    ol.proj.CH.prototype.getExtent);

goog.exportProperty(
    ol.proj.CH.prototype,
    'getUnits',
    ol.proj.CH.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.EPSG2056',
    ol.proj.EPSG2056);

goog.exportProperty(
    ol.proj.EPSG2056.prototype,
    'getCode',
    ol.proj.EPSG2056.prototype.getCode);

goog.exportProperty(
    ol.proj.EPSG2056.prototype,
    'getExtent',
    ol.proj.EPSG2056.prototype.getExtent);

goog.exportProperty(
    ol.proj.EPSG2056.prototype,
    'getUnits',
    ol.proj.EPSG2056.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.EPSG21781',
    ol.proj.EPSG21781);

goog.exportProperty(
    ol.proj.EPSG21781.prototype,
    'getCode',
    ol.proj.EPSG21781.prototype.getCode);

goog.exportProperty(
    ol.proj.EPSG21781.prototype,
    'getExtent',
    ol.proj.EPSG21781.prototype.getExtent);

goog.exportProperty(
    ol.proj.EPSG21781.prototype,
    'getUnits',
    ol.proj.EPSG21781.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.EPSG3857',
    ol.proj.EPSG3857);

goog.exportProperty(
    ol.proj.EPSG3857.prototype,
    'getCode',
    ol.proj.EPSG3857.prototype.getCode);

goog.exportProperty(
    ol.proj.EPSG3857.prototype,
    'getExtent',
    ol.proj.EPSG3857.prototype.getExtent);

goog.exportProperty(
    ol.proj.EPSG3857.prototype,
    'getUnits',
    ol.proj.EPSG3857.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.EPSG4326',
    ol.proj.EPSG4326);

goog.exportProperty(
    ol.proj.EPSG4326.prototype,
    'getCode',
    ol.proj.EPSG4326.prototype.getCode);

goog.exportProperty(
    ol.proj.EPSG4326.prototype,
    'getExtent',
    ol.proj.EPSG4326.prototype.getExtent);

goog.exportProperty(
    ol.proj.EPSG4326.prototype,
    'getUnits',
    ol.proj.EPSG4326.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.METERS_PER_UNIT[undefined]',
    ol.proj.METERS_PER_UNIT[undefined]);

goog.exportSymbol(
    'ol.proj.Projection',
    ol.proj.Projection);

goog.exportProperty(
    ol.proj.Projection.prototype,
    'getCode',
    ol.proj.Projection.prototype.getCode);

goog.exportProperty(
    ol.proj.Projection.prototype,
    'getExtent',
    ol.proj.Projection.prototype.getExtent);

goog.exportProperty(
    ol.proj.Projection.prototype,
    'getUnits',
    ol.proj.Projection.prototype.getUnits);

goog.exportSymbol(
    'ol.proj.addProjection',
    ol.proj.addProjection);

goog.exportSymbol(
    'ol.proj.common.add',
    ol.proj.common.add);

goog.exportSymbol(
    'ol.proj.configureProj4jsProjection',
    ol.proj.configureProj4jsProjection);

goog.exportSymbol(
    'ol.proj.get',
    ol.proj.get);

goog.exportSymbol(
    'ol.proj.getTransform',
    ol.proj.getTransform);

goog.exportSymbol(
    'ol.proj.getTransformFromProjections',
    ol.proj.getTransformFromProjections);

goog.exportSymbol(
    'ol.proj.transform',
    ol.proj.transform);

goog.exportSymbol(
    'ol.proj.transformWithProjections',
    ol.proj.transformWithProjections);

goog.exportProperty(
    ol.render.Event.prototype,
    'context',
    ol.render.Event.prototype.context);

goog.exportProperty(
    ol.render.Event.prototype,
    'frameState',
    ol.render.Event.prototype.frameState);

goog.exportProperty(
    ol.render.Event.prototype,
    'glContext',
    ol.render.Event.prototype.glContext);

goog.exportProperty(
    ol.render.Event.prototype,
    'vectorContext',
    ol.render.Event.prototype.vectorContext);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawAsync',
    ol.render.canvas.Immediate.prototype.drawAsync);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawCircleGeometry',
    ol.render.canvas.Immediate.prototype.drawCircleGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawFeature',
    ol.render.canvas.Immediate.prototype.drawFeature);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawLineStringGeometry',
    ol.render.canvas.Immediate.prototype.drawLineStringGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawMultiLineStringGeometry',
    ol.render.canvas.Immediate.prototype.drawMultiLineStringGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawMultiPointGeometry',
    ol.render.canvas.Immediate.prototype.drawMultiPointGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawMultiPolygonGeometry',
    ol.render.canvas.Immediate.prototype.drawMultiPolygonGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawPointGeometry',
    ol.render.canvas.Immediate.prototype.drawPointGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'drawPolygonGeometry',
    ol.render.canvas.Immediate.prototype.drawPolygonGeometry);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'setFillStrokeStyle',
    ol.render.canvas.Immediate.prototype.setFillStrokeStyle);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'setImageStyle',
    ol.render.canvas.Immediate.prototype.setImageStyle);

goog.exportProperty(
    ol.render.canvas.Immediate.prototype,
    'setTextStyle',
    ol.render.canvas.Immediate.prototype.setTextStyle);

goog.exportSymbol(
    'ol.source.BingMaps',
    ol.source.BingMaps);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'dispatchChangeEvent',
    ol.source.BingMaps.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'getState',
    ol.source.BingMaps.prototype.getState);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'getTileGrid',
    ol.source.BingMaps.prototype.getTileGrid);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'on',
    ol.source.BingMaps.prototype.on);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'once',
    ol.source.BingMaps.prototype.once);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'un',
    ol.source.BingMaps.prototype.un);

goog.exportProperty(
    ol.source.BingMaps.prototype,
    'unByKey',
    ol.source.BingMaps.prototype.unByKey);

goog.exportSymbol(
    'ol.source.BingMaps.TOS_ATTRIBUTION',
    ol.source.BingMaps.TOS_ATTRIBUTION);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'addFeature',
    ol.source.FormatVector.prototype.addFeature);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'addFeatures',
    ol.source.FormatVector.prototype.addFeatures);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'dispatchChangeEvent',
    ol.source.FormatVector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'forEachFeature',
    ol.source.FormatVector.prototype.forEachFeature);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'forEachFeatureInExtent',
    ol.source.FormatVector.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.FormatVector.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'getExtent',
    ol.source.FormatVector.prototype.getExtent);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'getFeatures',
    ol.source.FormatVector.prototype.getFeatures);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'getFeaturesAtCoordinate',
    ol.source.FormatVector.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'getState',
    ol.source.FormatVector.prototype.getState);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'on',
    ol.source.FormatVector.prototype.on);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'once',
    ol.source.FormatVector.prototype.once);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'readFeatures',
    ol.source.FormatVector.prototype.readFeatures);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'removeFeature',
    ol.source.FormatVector.prototype.removeFeature);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'un',
    ol.source.FormatVector.prototype.un);

goog.exportProperty(
    ol.source.FormatVector.prototype,
    'unByKey',
    ol.source.FormatVector.prototype.unByKey);

goog.exportSymbol(
    'ol.source.GPX',
    ol.source.GPX);

goog.exportProperty(
    ol.source.GPX.prototype,
    'addFeature',
    ol.source.GPX.prototype.addFeature);

goog.exportProperty(
    ol.source.GPX.prototype,
    'addFeatures',
    ol.source.GPX.prototype.addFeatures);

goog.exportProperty(
    ol.source.GPX.prototype,
    'dispatchChangeEvent',
    ol.source.GPX.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.GPX.prototype,
    'forEachFeature',
    ol.source.GPX.prototype.forEachFeature);

goog.exportProperty(
    ol.source.GPX.prototype,
    'forEachFeatureInExtent',
    ol.source.GPX.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.GPX.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.GPX.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.GPX.prototype,
    'getExtent',
    ol.source.GPX.prototype.getExtent);

goog.exportProperty(
    ol.source.GPX.prototype,
    'getFeatures',
    ol.source.GPX.prototype.getFeatures);

goog.exportProperty(
    ol.source.GPX.prototype,
    'getFeaturesAtCoordinate',
    ol.source.GPX.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.GPX.prototype,
    'getState',
    ol.source.GPX.prototype.getState);

goog.exportProperty(
    ol.source.GPX.prototype,
    'on',
    ol.source.GPX.prototype.on);

goog.exportProperty(
    ol.source.GPX.prototype,
    'once',
    ol.source.GPX.prototype.once);

goog.exportProperty(
    ol.source.GPX.prototype,
    'readFeatures',
    ol.source.GPX.prototype.readFeatures);

goog.exportProperty(
    ol.source.GPX.prototype,
    'removeFeature',
    ol.source.GPX.prototype.removeFeature);

goog.exportProperty(
    ol.source.GPX.prototype,
    'un',
    ol.source.GPX.prototype.un);

goog.exportProperty(
    ol.source.GPX.prototype,
    'unByKey',
    ol.source.GPX.prototype.unByKey);

goog.exportSymbol(
    'ol.source.GeoJSON',
    ol.source.GeoJSON);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'addFeature',
    ol.source.GeoJSON.prototype.addFeature);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'addFeatures',
    ol.source.GeoJSON.prototype.addFeatures);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'dispatchChangeEvent',
    ol.source.GeoJSON.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'forEachFeature',
    ol.source.GeoJSON.prototype.forEachFeature);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'forEachFeatureInExtent',
    ol.source.GeoJSON.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.GeoJSON.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'getExtent',
    ol.source.GeoJSON.prototype.getExtent);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'getFeatures',
    ol.source.GeoJSON.prototype.getFeatures);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'getFeaturesAtCoordinate',
    ol.source.GeoJSON.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'getState',
    ol.source.GeoJSON.prototype.getState);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'on',
    ol.source.GeoJSON.prototype.on);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'once',
    ol.source.GeoJSON.prototype.once);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'readFeatures',
    ol.source.GeoJSON.prototype.readFeatures);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'removeFeature',
    ol.source.GeoJSON.prototype.removeFeature);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'un',
    ol.source.GeoJSON.prototype.un);

goog.exportProperty(
    ol.source.GeoJSON.prototype,
    'unByKey',
    ol.source.GeoJSON.prototype.unByKey);

goog.exportSymbol(
    'ol.source.IGC',
    ol.source.IGC);

goog.exportProperty(
    ol.source.IGC.prototype,
    'addFeature',
    ol.source.IGC.prototype.addFeature);

goog.exportProperty(
    ol.source.IGC.prototype,
    'addFeatures',
    ol.source.IGC.prototype.addFeatures);

goog.exportProperty(
    ol.source.IGC.prototype,
    'dispatchChangeEvent',
    ol.source.IGC.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.IGC.prototype,
    'forEachFeature',
    ol.source.IGC.prototype.forEachFeature);

goog.exportProperty(
    ol.source.IGC.prototype,
    'forEachFeatureInExtent',
    ol.source.IGC.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.IGC.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.IGC.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.IGC.prototype,
    'getExtent',
    ol.source.IGC.prototype.getExtent);

goog.exportProperty(
    ol.source.IGC.prototype,
    'getFeatures',
    ol.source.IGC.prototype.getFeatures);

goog.exportProperty(
    ol.source.IGC.prototype,
    'getFeaturesAtCoordinate',
    ol.source.IGC.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.IGC.prototype,
    'getState',
    ol.source.IGC.prototype.getState);

goog.exportProperty(
    ol.source.IGC.prototype,
    'on',
    ol.source.IGC.prototype.on);

goog.exportProperty(
    ol.source.IGC.prototype,
    'once',
    ol.source.IGC.prototype.once);

goog.exportProperty(
    ol.source.IGC.prototype,
    'readFeatures',
    ol.source.IGC.prototype.readFeatures);

goog.exportProperty(
    ol.source.IGC.prototype,
    'removeFeature',
    ol.source.IGC.prototype.removeFeature);

goog.exportProperty(
    ol.source.IGC.prototype,
    'un',
    ol.source.IGC.prototype.un);

goog.exportProperty(
    ol.source.IGC.prototype,
    'unByKey',
    ol.source.IGC.prototype.unByKey);

goog.exportProperty(
    ol.source.Image.prototype,
    'dispatchChangeEvent',
    ol.source.Image.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Image.prototype,
    'getState',
    ol.source.Image.prototype.getState);

goog.exportProperty(
    ol.source.Image.prototype,
    'on',
    ol.source.Image.prototype.on);

goog.exportProperty(
    ol.source.Image.prototype,
    'once',
    ol.source.Image.prototype.once);

goog.exportProperty(
    ol.source.Image.prototype,
    'un',
    ol.source.Image.prototype.un);

goog.exportProperty(
    ol.source.Image.prototype,
    'unByKey',
    ol.source.Image.prototype.unByKey);

goog.exportSymbol(
    'ol.source.ImageCanvas',
    ol.source.ImageCanvas);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'dispatchChangeEvent',
    ol.source.ImageCanvas.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'getState',
    ol.source.ImageCanvas.prototype.getState);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'on',
    ol.source.ImageCanvas.prototype.on);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'once',
    ol.source.ImageCanvas.prototype.once);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'un',
    ol.source.ImageCanvas.prototype.un);

goog.exportProperty(
    ol.source.ImageCanvas.prototype,
    'unByKey',
    ol.source.ImageCanvas.prototype.unByKey);

goog.exportSymbol(
    'ol.source.ImageStatic',
    ol.source.ImageStatic);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'dispatchChangeEvent',
    ol.source.ImageStatic.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'getState',
    ol.source.ImageStatic.prototype.getState);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'on',
    ol.source.ImageStatic.prototype.on);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'once',
    ol.source.ImageStatic.prototype.once);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'un',
    ol.source.ImageStatic.prototype.un);

goog.exportProperty(
    ol.source.ImageStatic.prototype,
    'unByKey',
    ol.source.ImageStatic.prototype.unByKey);

goog.exportSymbol(
    'ol.source.ImageVector',
    ol.source.ImageVector);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'dispatchChangeEvent',
    ol.source.ImageVector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'getSource',
    ol.source.ImageVector.prototype.getSource);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'getState',
    ol.source.ImageVector.prototype.getState);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'on',
    ol.source.ImageVector.prototype.on);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'once',
    ol.source.ImageVector.prototype.once);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'un',
    ol.source.ImageVector.prototype.un);

goog.exportProperty(
    ol.source.ImageVector.prototype,
    'unByKey',
    ol.source.ImageVector.prototype.unByKey);

goog.exportSymbol(
    'ol.source.ImageWMS',
    ol.source.ImageWMS);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'dispatchChangeEvent',
    ol.source.ImageWMS.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getGetFeatureInfoUrl',
    ol.source.ImageWMS.prototype.getGetFeatureInfoUrl);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getParams',
    ol.source.ImageWMS.prototype.getParams);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getState',
    ol.source.ImageWMS.prototype.getState);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getUrl',
    ol.source.ImageWMS.prototype.getUrl);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'on',
    ol.source.ImageWMS.prototype.on);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'once',
    ol.source.ImageWMS.prototype.once);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'setUrl',
    ol.source.ImageWMS.prototype.setUrl);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'un',
    ol.source.ImageWMS.prototype.un);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'unByKey',
    ol.source.ImageWMS.prototype.unByKey);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'updateParams',
    ol.source.ImageWMS.prototype.updateParams);

goog.exportSymbol(
    'ol.source.KML',
    ol.source.KML);

goog.exportProperty(
    ol.source.KML.prototype,
    'addFeature',
    ol.source.KML.prototype.addFeature);

goog.exportProperty(
    ol.source.KML.prototype,
    'addFeatures',
    ol.source.KML.prototype.addFeatures);

goog.exportProperty(
    ol.source.KML.prototype,
    'dispatchChangeEvent',
    ol.source.KML.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.KML.prototype,
    'forEachFeature',
    ol.source.KML.prototype.forEachFeature);

goog.exportProperty(
    ol.source.KML.prototype,
    'forEachFeatureInExtent',
    ol.source.KML.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.KML.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.KML.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.KML.prototype,
    'getExtent',
    ol.source.KML.prototype.getExtent);

goog.exportProperty(
    ol.source.KML.prototype,
    'getFeatures',
    ol.source.KML.prototype.getFeatures);

goog.exportProperty(
    ol.source.KML.prototype,
    'getFeaturesAtCoordinate',
    ol.source.KML.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.KML.prototype,
    'getState',
    ol.source.KML.prototype.getState);

goog.exportProperty(
    ol.source.KML.prototype,
    'on',
    ol.source.KML.prototype.on);

goog.exportProperty(
    ol.source.KML.prototype,
    'once',
    ol.source.KML.prototype.once);

goog.exportProperty(
    ol.source.KML.prototype,
    'readFeatures',
    ol.source.KML.prototype.readFeatures);

goog.exportProperty(
    ol.source.KML.prototype,
    'removeFeature',
    ol.source.KML.prototype.removeFeature);

goog.exportProperty(
    ol.source.KML.prototype,
    'un',
    ol.source.KML.prototype.un);

goog.exportProperty(
    ol.source.KML.prototype,
    'unByKey',
    ol.source.KML.prototype.unByKey);

goog.exportSymbol(
    'ol.source.MapGuide',
    ol.source.MapGuide);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'dispatchChangeEvent',
    ol.source.MapGuide.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'getState',
    ol.source.MapGuide.prototype.getState);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'on',
    ol.source.MapGuide.prototype.on);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'once',
    ol.source.MapGuide.prototype.once);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'un',
    ol.source.MapGuide.prototype.un);

goog.exportProperty(
    ol.source.MapGuide.prototype,
    'unByKey',
    ol.source.MapGuide.prototype.unByKey);

goog.exportSymbol(
    'ol.source.MapQuest',
    ol.source.MapQuest);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'dispatchChangeEvent',
    ol.source.MapQuest.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'getState',
    ol.source.MapQuest.prototype.getState);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'getTileGrid',
    ol.source.MapQuest.prototype.getTileGrid);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'on',
    ol.source.MapQuest.prototype.on);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'once',
    ol.source.MapQuest.prototype.once);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'setUrl',
    ol.source.MapQuest.prototype.setUrl);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'un',
    ol.source.MapQuest.prototype.un);

goog.exportProperty(
    ol.source.MapQuest.prototype,
    'unByKey',
    ol.source.MapQuest.prototype.unByKey);

goog.exportSymbol(
    'ol.source.OSM',
    ol.source.OSM);

goog.exportProperty(
    ol.source.OSM.prototype,
    'dispatchChangeEvent',
    ol.source.OSM.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.OSM.prototype,
    'getState',
    ol.source.OSM.prototype.getState);

goog.exportProperty(
    ol.source.OSM.prototype,
    'getTileGrid',
    ol.source.OSM.prototype.getTileGrid);

goog.exportProperty(
    ol.source.OSM.prototype,
    'on',
    ol.source.OSM.prototype.on);

goog.exportProperty(
    ol.source.OSM.prototype,
    'once',
    ol.source.OSM.prototype.once);

goog.exportProperty(
    ol.source.OSM.prototype,
    'setUrl',
    ol.source.OSM.prototype.setUrl);

goog.exportProperty(
    ol.source.OSM.prototype,
    'un',
    ol.source.OSM.prototype.un);

goog.exportProperty(
    ol.source.OSM.prototype,
    'unByKey',
    ol.source.OSM.prototype.unByKey);

goog.exportSymbol(
    'ol.source.OSM.DATA_ATTRIBUTION',
    ol.source.OSM.DATA_ATTRIBUTION);

goog.exportSymbol(
    'ol.source.OSM.TILE_ATTRIBUTION',
    ol.source.OSM.TILE_ATTRIBUTION);

goog.exportSymbol(
    'ol.source.OSMXML',
    ol.source.OSMXML);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'addFeature',
    ol.source.OSMXML.prototype.addFeature);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'addFeatures',
    ol.source.OSMXML.prototype.addFeatures);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'dispatchChangeEvent',
    ol.source.OSMXML.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'forEachFeature',
    ol.source.OSMXML.prototype.forEachFeature);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'forEachFeatureInExtent',
    ol.source.OSMXML.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.OSMXML.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'getExtent',
    ol.source.OSMXML.prototype.getExtent);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'getFeatures',
    ol.source.OSMXML.prototype.getFeatures);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'getFeaturesAtCoordinate',
    ol.source.OSMXML.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'getState',
    ol.source.OSMXML.prototype.getState);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'on',
    ol.source.OSMXML.prototype.on);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'once',
    ol.source.OSMXML.prototype.once);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'readFeatures',
    ol.source.OSMXML.prototype.readFeatures);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'removeFeature',
    ol.source.OSMXML.prototype.removeFeature);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'un',
    ol.source.OSMXML.prototype.un);

goog.exportProperty(
    ol.source.OSMXML.prototype,
    'unByKey',
    ol.source.OSMXML.prototype.unByKey);

goog.exportSymbol(
    'ol.source.ServerVector',
    ol.source.ServerVector);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'addFeature',
    ol.source.ServerVector.prototype.addFeature);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'addFeatures',
    ol.source.ServerVector.prototype.addFeatures);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'dispatchChangeEvent',
    ol.source.ServerVector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'forEachFeature',
    ol.source.ServerVector.prototype.forEachFeature);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'forEachFeatureInExtent',
    ol.source.ServerVector.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.ServerVector.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'getExtent',
    ol.source.ServerVector.prototype.getExtent);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'getFeatures',
    ol.source.ServerVector.prototype.getFeatures);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'getFeaturesAtCoordinate',
    ol.source.ServerVector.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'getState',
    ol.source.ServerVector.prototype.getState);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'on',
    ol.source.ServerVector.prototype.on);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'once',
    ol.source.ServerVector.prototype.once);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'readFeatures',
    ol.source.ServerVector.prototype.readFeatures);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'removeFeature',
    ol.source.ServerVector.prototype.removeFeature);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'un',
    ol.source.ServerVector.prototype.un);

goog.exportProperty(
    ol.source.ServerVector.prototype,
    'unByKey',
    ol.source.ServerVector.prototype.unByKey);

goog.exportProperty(
    ol.source.Source.prototype,
    'dispatchChangeEvent',
    ol.source.Source.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Source.prototype,
    'getState',
    ol.source.Source.prototype.getState);

goog.exportProperty(
    ol.source.Source.prototype,
    'on',
    ol.source.Source.prototype.on);

goog.exportProperty(
    ol.source.Source.prototype,
    'once',
    ol.source.Source.prototype.once);

goog.exportProperty(
    ol.source.Source.prototype,
    'un',
    ol.source.Source.prototype.un);

goog.exportProperty(
    ol.source.Source.prototype,
    'unByKey',
    ol.source.Source.prototype.unByKey);

goog.exportSymbol(
    'ol.source.Stamen',
    ol.source.Stamen);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'dispatchChangeEvent',
    ol.source.Stamen.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'getState',
    ol.source.Stamen.prototype.getState);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'getTileGrid',
    ol.source.Stamen.prototype.getTileGrid);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'on',
    ol.source.Stamen.prototype.on);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'once',
    ol.source.Stamen.prototype.once);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'setUrl',
    ol.source.Stamen.prototype.setUrl);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'un',
    ol.source.Stamen.prototype.un);

goog.exportProperty(
    ol.source.Stamen.prototype,
    'unByKey',
    ol.source.Stamen.prototype.unByKey);

goog.exportSymbol(
    'ol.source.StaticVector',
    ol.source.StaticVector);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'addFeature',
    ol.source.StaticVector.prototype.addFeature);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'addFeatures',
    ol.source.StaticVector.prototype.addFeatures);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'dispatchChangeEvent',
    ol.source.StaticVector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'forEachFeature',
    ol.source.StaticVector.prototype.forEachFeature);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'forEachFeatureInExtent',
    ol.source.StaticVector.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.StaticVector.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'getExtent',
    ol.source.StaticVector.prototype.getExtent);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'getFeatures',
    ol.source.StaticVector.prototype.getFeatures);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'getFeaturesAtCoordinate',
    ol.source.StaticVector.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'getState',
    ol.source.StaticVector.prototype.getState);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'on',
    ol.source.StaticVector.prototype.on);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'once',
    ol.source.StaticVector.prototype.once);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'readFeatures',
    ol.source.StaticVector.prototype.readFeatures);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'removeFeature',
    ol.source.StaticVector.prototype.removeFeature);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'un',
    ol.source.StaticVector.prototype.un);

goog.exportProperty(
    ol.source.StaticVector.prototype,
    'unByKey',
    ol.source.StaticVector.prototype.unByKey);

goog.exportProperty(
    ol.source.Tile.prototype,
    'dispatchChangeEvent',
    ol.source.Tile.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Tile.prototype,
    'getState',
    ol.source.Tile.prototype.getState);

goog.exportProperty(
    ol.source.Tile.prototype,
    'getTileGrid',
    ol.source.Tile.prototype.getTileGrid);

goog.exportProperty(
    ol.source.Tile.prototype,
    'on',
    ol.source.Tile.prototype.on);

goog.exportProperty(
    ol.source.Tile.prototype,
    'once',
    ol.source.Tile.prototype.once);

goog.exportProperty(
    ol.source.Tile.prototype,
    'un',
    ol.source.Tile.prototype.un);

goog.exportProperty(
    ol.source.Tile.prototype,
    'unByKey',
    ol.source.Tile.prototype.unByKey);

goog.exportSymbol(
    'ol.source.TileDebug',
    ol.source.TileDebug);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'dispatchChangeEvent',
    ol.source.TileDebug.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'getState',
    ol.source.TileDebug.prototype.getState);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'getTileGrid',
    ol.source.TileDebug.prototype.getTileGrid);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'on',
    ol.source.TileDebug.prototype.on);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'once',
    ol.source.TileDebug.prototype.once);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'un',
    ol.source.TileDebug.prototype.un);

goog.exportProperty(
    ol.source.TileDebug.prototype,
    'unByKey',
    ol.source.TileDebug.prototype.unByKey);

goog.exportSymbol(
    'ol.source.TileImage',
    ol.source.TileImage);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'dispatchChangeEvent',
    ol.source.TileImage.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'getState',
    ol.source.TileImage.prototype.getState);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'getTileGrid',
    ol.source.TileImage.prototype.getTileGrid);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'on',
    ol.source.TileImage.prototype.on);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'once',
    ol.source.TileImage.prototype.once);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'un',
    ol.source.TileImage.prototype.un);

goog.exportProperty(
    ol.source.TileImage.prototype,
    'unByKey',
    ol.source.TileImage.prototype.unByKey);

goog.exportSymbol(
    'ol.source.TileJSON',
    ol.source.TileJSON);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'dispatchChangeEvent',
    ol.source.TileJSON.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'getState',
    ol.source.TileJSON.prototype.getState);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'getTileGrid',
    ol.source.TileJSON.prototype.getTileGrid);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'on',
    ol.source.TileJSON.prototype.on);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'once',
    ol.source.TileJSON.prototype.once);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'un',
    ol.source.TileJSON.prototype.un);

goog.exportProperty(
    ol.source.TileJSON.prototype,
    'unByKey',
    ol.source.TileJSON.prototype.unByKey);

goog.exportSymbol(
    'ol.source.TileVector',
    ol.source.TileVector);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'dispatchChangeEvent',
    ol.source.TileVector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'getFeaturesAtCoordinate',
    ol.source.TileVector.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'getState',
    ol.source.TileVector.prototype.getState);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'on',
    ol.source.TileVector.prototype.on);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'once',
    ol.source.TileVector.prototype.once);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'readFeatures',
    ol.source.TileVector.prototype.readFeatures);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'un',
    ol.source.TileVector.prototype.un);

goog.exportProperty(
    ol.source.TileVector.prototype,
    'unByKey',
    ol.source.TileVector.prototype.unByKey);

goog.exportSymbol(
    'ol.source.TileWMS',
    ol.source.TileWMS);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'dispatchChangeEvent',
    ol.source.TileWMS.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getGetFeatureInfoUrl',
    ol.source.TileWMS.prototype.getGetFeatureInfoUrl);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getParams',
    ol.source.TileWMS.prototype.getParams);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getState',
    ol.source.TileWMS.prototype.getState);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getTileGrid',
    ol.source.TileWMS.prototype.getTileGrid);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getUrls',
    ol.source.TileWMS.prototype.getUrls);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'on',
    ol.source.TileWMS.prototype.on);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'once',
    ol.source.TileWMS.prototype.once);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'un',
    ol.source.TileWMS.prototype.un);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'unByKey',
    ol.source.TileWMS.prototype.unByKey);

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'updateParams',
    ol.source.TileWMS.prototype.updateParams);

goog.exportSymbol(
    'ol.source.TopoJSON',
    ol.source.TopoJSON);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'addFeature',
    ol.source.TopoJSON.prototype.addFeature);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'addFeatures',
    ol.source.TopoJSON.prototype.addFeatures);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'dispatchChangeEvent',
    ol.source.TopoJSON.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'forEachFeature',
    ol.source.TopoJSON.prototype.forEachFeature);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'forEachFeatureInExtent',
    ol.source.TopoJSON.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.TopoJSON.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'getExtent',
    ol.source.TopoJSON.prototype.getExtent);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'getFeatures',
    ol.source.TopoJSON.prototype.getFeatures);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'getFeaturesAtCoordinate',
    ol.source.TopoJSON.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'getState',
    ol.source.TopoJSON.prototype.getState);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'on',
    ol.source.TopoJSON.prototype.on);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'once',
    ol.source.TopoJSON.prototype.once);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'readFeatures',
    ol.source.TopoJSON.prototype.readFeatures);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'removeFeature',
    ol.source.TopoJSON.prototype.removeFeature);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'un',
    ol.source.TopoJSON.prototype.un);

goog.exportProperty(
    ol.source.TopoJSON.prototype,
    'unByKey',
    ol.source.TopoJSON.prototype.unByKey);

goog.exportSymbol(
    'ol.source.Vector',
    ol.source.Vector);

goog.exportProperty(
    ol.source.Vector.prototype,
    'addFeature',
    ol.source.Vector.prototype.addFeature);

goog.exportProperty(
    ol.source.Vector.prototype,
    'addFeatures',
    ol.source.Vector.prototype.addFeatures);

goog.exportProperty(
    ol.source.Vector.prototype,
    'dispatchChangeEvent',
    ol.source.Vector.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Vector.prototype,
    'forEachFeature',
    ol.source.Vector.prototype.forEachFeature);

goog.exportProperty(
    ol.source.Vector.prototype,
    'forEachFeatureInExtent',
    ol.source.Vector.prototype.forEachFeatureInExtent);

goog.exportProperty(
    ol.source.Vector.prototype,
    'getClosestFeatureToCoordinate',
    ol.source.Vector.prototype.getClosestFeatureToCoordinate);

goog.exportProperty(
    ol.source.Vector.prototype,
    'getExtent',
    ol.source.Vector.prototype.getExtent);

goog.exportProperty(
    ol.source.Vector.prototype,
    'getFeatures',
    ol.source.Vector.prototype.getFeatures);

goog.exportProperty(
    ol.source.Vector.prototype,
    'getFeaturesAtCoordinate',
    ol.source.Vector.prototype.getFeaturesAtCoordinate);

goog.exportProperty(
    ol.source.Vector.prototype,
    'getState',
    ol.source.Vector.prototype.getState);

goog.exportProperty(
    ol.source.Vector.prototype,
    'on',
    ol.source.Vector.prototype.on);

goog.exportProperty(
    ol.source.Vector.prototype,
    'once',
    ol.source.Vector.prototype.once);

goog.exportProperty(
    ol.source.Vector.prototype,
    'removeFeature',
    ol.source.Vector.prototype.removeFeature);

goog.exportProperty(
    ol.source.Vector.prototype,
    'un',
    ol.source.Vector.prototype.un);

goog.exportProperty(
    ol.source.Vector.prototype,
    'unByKey',
    ol.source.Vector.prototype.unByKey);

goog.exportProperty(
    ol.source.VectorEvent.prototype,
    'feature',
    ol.source.VectorEvent.prototype.feature);

goog.exportSymbol(
    'ol.source.WMTS',
    ol.source.WMTS);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'dispatchChangeEvent',
    ol.source.WMTS.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'getDimensions',
    ol.source.WMTS.prototype.getDimensions);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'getState',
    ol.source.WMTS.prototype.getState);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'getTileGrid',
    ol.source.WMTS.prototype.getTileGrid);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'on',
    ol.source.WMTS.prototype.on);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'once',
    ol.source.WMTS.prototype.once);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'un',
    ol.source.WMTS.prototype.un);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'unByKey',
    ol.source.WMTS.prototype.unByKey);

goog.exportProperty(
    ol.source.WMTS.prototype,
    'updateDimensions',
    ol.source.WMTS.prototype.updateDimensions);

goog.exportSymbol(
    'ol.source.WMTS.optionsFromCapabilities',
    ol.source.WMTS.optionsFromCapabilities);

goog.exportSymbol(
    'ol.source.XYZ',
    ol.source.XYZ);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'dispatchChangeEvent',
    ol.source.XYZ.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'getState',
    ol.source.XYZ.prototype.getState);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'getTileGrid',
    ol.source.XYZ.prototype.getTileGrid);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'on',
    ol.source.XYZ.prototype.on);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'once',
    ol.source.XYZ.prototype.once);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'setUrl',
    ol.source.XYZ.prototype.setUrl);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'un',
    ol.source.XYZ.prototype.un);

goog.exportProperty(
    ol.source.XYZ.prototype,
    'unByKey',
    ol.source.XYZ.prototype.unByKey);

goog.exportSymbol(
    'ol.source.Zoomify',
    ol.source.Zoomify);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'dispatchChangeEvent',
    ol.source.Zoomify.prototype.dispatchChangeEvent);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'getState',
    ol.source.Zoomify.prototype.getState);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'getTileGrid',
    ol.source.Zoomify.prototype.getTileGrid);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'on',
    ol.source.Zoomify.prototype.on);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'once',
    ol.source.Zoomify.prototype.once);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'un',
    ol.source.Zoomify.prototype.un);

goog.exportProperty(
    ol.source.Zoomify.prototype,
    'unByKey',
    ol.source.Zoomify.prototype.unByKey);

goog.exportSymbol(
    'ol.sphere.WGS84',
    ol.sphere.WGS84);

goog.exportSymbol(
    'ol.style.Circle',
    ol.style.Circle);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getAnchor',
    ol.style.Circle.prototype.getAnchor);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getFill',
    ol.style.Circle.prototype.getFill);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getImage',
    ol.style.Circle.prototype.getImage);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getRadius',
    ol.style.Circle.prototype.getRadius);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getRotation',
    ol.style.Circle.prototype.getRotation);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getScale',
    ol.style.Circle.prototype.getScale);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getSize',
    ol.style.Circle.prototype.getSize);

goog.exportProperty(
    ol.style.Circle.prototype,
    'getStroke',
    ol.style.Circle.prototype.getStroke);

goog.exportSymbol(
    'ol.style.Fill',
    ol.style.Fill);

goog.exportProperty(
    ol.style.Fill.prototype,
    'getColor',
    ol.style.Fill.prototype.getColor);

goog.exportSymbol(
    'ol.style.Icon',
    ol.style.Icon);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getAnchor',
    ol.style.Icon.prototype.getAnchor);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getImage',
    ol.style.Icon.prototype.getImage);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getRotation',
    ol.style.Icon.prototype.getRotation);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getScale',
    ol.style.Icon.prototype.getScale);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getSize',
    ol.style.Icon.prototype.getSize);

goog.exportProperty(
    ol.style.Icon.prototype,
    'getSrc',
    ol.style.Icon.prototype.getSrc);

goog.exportProperty(
    ol.style.Image.prototype,
    'getRotation',
    ol.style.Image.prototype.getRotation);

goog.exportProperty(
    ol.style.Image.prototype,
    'getScale',
    ol.style.Image.prototype.getScale);

goog.exportSymbol(
    'ol.style.Stroke',
    ol.style.Stroke);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getColor',
    ol.style.Stroke.prototype.getColor);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getLineCap',
    ol.style.Stroke.prototype.getLineCap);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getLineDash',
    ol.style.Stroke.prototype.getLineDash);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getLineJoin',
    ol.style.Stroke.prototype.getLineJoin);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getMiterLimit',
    ol.style.Stroke.prototype.getMiterLimit);

goog.exportProperty(
    ol.style.Stroke.prototype,
    'getWidth',
    ol.style.Stroke.prototype.getWidth);

goog.exportSymbol(
    'ol.style.Style',
    ol.style.Style);

goog.exportProperty(
    ol.style.Style.prototype,
    'getFill',
    ol.style.Style.prototype.getFill);

goog.exportProperty(
    ol.style.Style.prototype,
    'getImage',
    ol.style.Style.prototype.getImage);

goog.exportProperty(
    ol.style.Style.prototype,
    'getStroke',
    ol.style.Style.prototype.getStroke);

goog.exportProperty(
    ol.style.Style.prototype,
    'getText',
    ol.style.Style.prototype.getText);

goog.exportProperty(
    ol.style.Style.prototype,
    'getZIndex',
    ol.style.Style.prototype.getZIndex);

goog.exportSymbol(
    'ol.style.Text',
    ol.style.Text);

goog.exportProperty(
    ol.style.Text.prototype,
    'getFill',
    ol.style.Text.prototype.getFill);

goog.exportProperty(
    ol.style.Text.prototype,
    'getFont',
    ol.style.Text.prototype.getFont);

goog.exportProperty(
    ol.style.Text.prototype,
    'getRotation',
    ol.style.Text.prototype.getRotation);

goog.exportProperty(
    ol.style.Text.prototype,
    'getScale',
    ol.style.Text.prototype.getScale);

goog.exportProperty(
    ol.style.Text.prototype,
    'getStroke',
    ol.style.Text.prototype.getStroke);

goog.exportProperty(
    ol.style.Text.prototype,
    'getText',
    ol.style.Text.prototype.getText);

goog.exportProperty(
    ol.style.Text.prototype,
    'getTextAlign',
    ol.style.Text.prototype.getTextAlign);

goog.exportProperty(
    ol.style.Text.prototype,
    'getTextBaseline',
    ol.style.Text.prototype.getTextBaseline);

goog.exportSymbol(
    'ol.tilegrid.TileGrid',
    ol.tilegrid.TileGrid);

goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getMinZoom',
    ol.tilegrid.TileGrid.prototype.getMinZoom);

goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getOrigin',
    ol.tilegrid.TileGrid.prototype.getOrigin);

goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getResolution',
    ol.tilegrid.TileGrid.prototype.getResolution);

goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getTileSize',
    ol.tilegrid.TileGrid.prototype.getTileSize);

goog.exportSymbol(
    'ol.tilegrid.WMTS',
    ol.tilegrid.WMTS);

goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getMatrixIds',
    ol.tilegrid.WMTS.prototype.getMatrixIds);

goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getMinZoom',
    ol.tilegrid.WMTS.prototype.getMinZoom);

goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getOrigin',
    ol.tilegrid.WMTS.prototype.getOrigin);

goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getResolution',
    ol.tilegrid.WMTS.prototype.getResolution);

goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getTileSize',
    ol.tilegrid.WMTS.prototype.getTileSize);

goog.exportSymbol(
    'ol.tilegrid.XYZ',
    ol.tilegrid.XYZ);

goog.exportProperty(
    ol.tilegrid.XYZ.prototype,
    'getMinZoom',
    ol.tilegrid.XYZ.prototype.getMinZoom);

goog.exportProperty(
    ol.tilegrid.XYZ.prototype,
    'getOrigin',
    ol.tilegrid.XYZ.prototype.getOrigin);

goog.exportProperty(
    ol.tilegrid.XYZ.prototype,
    'getResolution',
    ol.tilegrid.XYZ.prototype.getResolution);

goog.exportProperty(
    ol.tilegrid.XYZ.prototype,
    'getTileSize',
    ol.tilegrid.XYZ.prototype.getTileSize);

goog.exportSymbol(
    'ol.tilegrid.Zoomify',
    ol.tilegrid.Zoomify);

goog.exportProperty(
    ol.tilegrid.Zoomify.prototype,
    'getMinZoom',
    ol.tilegrid.Zoomify.prototype.getMinZoom);

goog.exportProperty(
    ol.tilegrid.Zoomify.prototype,
    'getOrigin',
    ol.tilegrid.Zoomify.prototype.getOrigin);

goog.exportProperty(
    ol.tilegrid.Zoomify.prototype,
    'getResolution',
    ol.tilegrid.Zoomify.prototype.getResolution);

goog.exportProperty(
    ol.tilegrid.Zoomify.prototype,
    'getTileSize',
    ol.tilegrid.Zoomify.prototype.getTileSize);

goog.exportSymbol(
    'ol.webgl.Context',
    ol.webgl.Context);

goog.exportProperty(
    ol.webgl.Context.prototype,
    'getGL',
    ol.webgl.Context.prototype.getGL);

goog.exportProperty(
    ol.webgl.Context.prototype,
    'useProgram',
    ol.webgl.Context.prototype.useProgram);

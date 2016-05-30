(function() {
  var mode = window.location.href.match(/mode=([a-z0-9\-]+)\&?/i);
  var DIST = true;
  var isDev = mode && mode[1] === 'dev';
  var cs = isDev ? 'CesiumUnminified/Cesium.js' : 'Cesium/Cesium.js';
  var ol = (DIST && isDev) ? 'ol3cesium-debug.js' : 'ol3cesium.js';

  if (!window.LAZY_CESIUM) {
    document.write('<scr' + 'ipt type="text/javascript" src="lib/ol3-cesium/'+ cs + '"></scr' + 'ipt>');
  }
  document.write('<scr' + 'ipt type="text/javascript" src="lib/ol3-cesium/' + ol + '"></scr' + 'ipt>');

  var s;
  window.lazyLoadCesium = function() {
    if (!s) {
      s = document.createElement("script");
      s.type = "text/javascript";
      s.src = 'lib/ol3-cesium/' + cs;
      console.log('loading Cesium...');
      document.body.appendChild(s);
    }
    return s;
  }
})();
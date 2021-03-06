sViewer - simple viewer for geOrchestra
=======================================

This branch is a complete rewrite of sviewer based on OpenLayers3.

Quick start
----------------

1. Copy etc/customConfig.DIST.js into etc/customConfig.js
2. Edit etc/customConfig.js to suit your needs
3. Upload the source tree to your web server




What is sViewer ?
--------------------------

sViewer (simple Viewer) is a very simple web map viewer based on the OpenLayers and jQuery mobile libraries. Sviewer offers :

* basic touch-enabled map controls
* place search (OpenLS french geoportal based)
* queryable Web Map Service overlays
* Web Map Context loader
* permalinks, social links, QR code
* geOrchestra viewer compatibility ('send to sviewer')
* map edit with the geOrchestra viewer
* easy to embed in a webpage through iframe or href
* should work on small (phone), medium (tablet) and large (desktop) displays
* i18n support : en (hardcoded), fr, es, de, ru. Feel free to contribute using fr as template.


sViewer was designed to work within the geOrchestra SDI, but it also may work with any OGC-enabled SDI. There's a user tutorial here : http://cms.geobretagne.fr/content/visualiseur-simple-g%C3%A9obretagne

sViewer design notes
====================

* ol3 + jQuery mobile
* no server-side component except a required Ajax proxy (featured in geOrchestra and probably in other SDIs). Untar and it should work.
* EPSG:3857 only : OpenStreetMap, MapQuest, Google...
* simple startup config with KVP in the querystring
* shall work on phone, tablet, desktop browsers


KVP parameters
==============

The tag 'is persistent' indicates that the specified parameter is persistent in the permalink or QR code. 
KVP parameters can conflict (xyz recenter vs wmc recenter). First parameter in this document takes precedence.


x {integer}
y {integer}
z {integer}
----------------
is persistent
Center the map on x,y (EPSG:3857 units) and set the z zoom factor
example :

    http://sdi.georchestra.org/sviewer/?x=-366959&y=2951352&z=5


title {string}
------------------
is persistent
Map title. This can be changed using the "share" button. Use short titles suitable for small screens.
Example :

        http://sdi.georchestra.org/sviewer/?wmc=9be95a6894a3dc6135c8cd760d83f6ef&title=geOrchestra%20SDI


lb {integer}
-----------------
is persistent
Displays the #lb background layer. ie lb=0 displays the first preset background layer
example :

    http://sdi.georchestra.org/sviewer/?lb=1


layers {string}
---------------------
is persistent
Comma-separated list of geOrchestra layer names with namespace extension. This is the fastest way to set up a map because the WMS url is hardcoded (hardConfig.geOrchestraURL). It assumes :

* layers are delivered by the hardcoded geOrchestra (or geoserver) platform
* layers are queryable with INFO_FORMAT=text/html
* layers do have associated HTML templates

example :

    http://sdi.georchestra.org/sviewer/?layers=geor:sdi

To specify alternative styles for a layer, add "*stylename" to the layer name.
example :

    http://sdi.georchestra.org/sviewer/?layers=geor:sdi*geor_sdi

To specify a vendor CQL_FILTER for a layer, add "**cql_filter" to the layer name if no alternative style is specified, otherwise use layer*style*cql_filter
examples :

    http://sdi.georchestra.org/sviewer/?layers=geor:sdi*geor_sdi*title%3DPIGMA
    http://sdi.georchestra.org/sviewer/?layers=geor:sdi**title%3DPIGMA


wmc {string}
-------------------
is persistent
Url of a Web Map Context. Only visible and queryables layers will be loaded. The WMC parser supports SLD custom styling generated by geOrchestra.
Warning, there's no extent or projection check.
-or-
Id of a geOrchestra Web Map Context. Makes the url shorter and allows "send to sviewer" from the geOrchestra advanced viewer.

Example :

    http://sdi.georchestra.org/sviewer/?wmc=http://geobretagne.fr/context/default/05.xml
    http://sdi.georchestra.org/sviewer/?wmc=9be95a6894a3dc6135c8cd760d83f6ef
    
    
kml {string}
-------------------
is persistent
Url of a kml resource. On query, the popup displays object description or, if missing, the object attributes.


q {string}
------------------
is persistent
Queries the map on startup. Convenient to enlight a specific feature on the map. The query is persistent when the user
shares the map. Click on the marker to remove it and disable autoquery.


c {string}
--------------
is persistent

Chooses a particular SViewer configuration See "multiple configurations".

Example :

    http://sdi.georchestra.org/sviewer/?c=myconf


qr {string}
------------------
Opens the permalink/QR code on startup. Convenient for the geOrchestra 'send to mobile' action,
as one can immediately scan the permalink.


s {string}
------------------
Activate search features based on text attributes layer (only first layer for the moment).


multiple configurations
=======================
You may provide several configurations for one SViewer instance. Copy etc/customConfig.js into etc/customConfig_myconf.js
and edit this file according to your needs. You can call this profile using &c=myconf&

The profile name MUST MATCH ^[A-Za-z0-9-_]$, ie "myconf" is valid, "myconf.myorg" isn't.


geOrchestra integration
=======================

* sViewer displays title, asbtract, legend, metadata link, attribution, attributionURL, logoURL from the WMS capabilities
* sViewer can POST the map layout to the geOrchestra advanced viewer for edit, analysis, print purposes.
* sViewer can read WMC from the geOrchestra advanced viewer.

Docker
========

You can launch sviewer in a docker container.

* Start by building the image:

```bash
docker build -t georchestra/sviewer .
```

When builing, it will copy the whole repo to the public folder that nginx serve (the web server in
the container is nginx).

* launch the container

```
docker run -p8080:80 -d georchestra/sviewer
```

With the argument `-p8080:80` it will listen to port 8080/tcp locally.


TODO
====

First item, highest priority

* accessibility check
* special treatment for opaque layers
* customisable splashscreen
* check the genericity of the openLS helper
* GPS geocoding, tracking, events based on feature proximity
* CQL filters support
* mobile OS manifest

Before using this project, read the LICENSE.en terms.

(c) 2011-2014 geOrchestra http://www.georchestra.org/

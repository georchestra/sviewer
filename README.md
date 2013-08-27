sViewer - simple viewer for geOrchestra
=======================================

Quick start
-----------

1. Copy js/custom.DIST.js into js/custom.js
2. Edit js/custom.js to fit your needs
3. Upload the source tree to your web server




What is sViewer ?
-----------------

sViewer (simple Viewer) is a very simple web map viewer based on the OpenLayers and jQuery mobile libraries. Sviewer offers :

* basic touch-enabled map controls
* place search (OpenLS french geoportal based)
* WMS and KML overlays with info popups
* WMC reader
* permalinks, social links, QR code
* export to the geOrchestra advanced viewer
* easy to embed in a webpage through href
* should work on small (phone), medium (tablet) and large (desktop) displays
* i18n support
* geolocation and tracking (TODO)

sViewer has two objectives : it's a code sample to build more advanced or specific apps, and it's a standalone application to be used as a service or installed locally. It was designed to work within the geOrchestra IDS, but it also may work with any OGC-enabled IDS with minimal changes. There's a user tutorial here : http://cms.geobretagne.fr/content/visualiseur-simple-g%C3%A9obretagne

sViewer design notes
====================

* no server-side component except a required Ajax proxy (featured in geOrchestra and probably in other SDIs). Untar and it should work.
* EPSG:3857 only : OpenStreetMap, MapQuest, Google...
* simple startup available though KVP in the querystring
* shall work on phone, tablet, desktop browsers


KVP parameters
==============

x {integer}
y {integer}
z {integer}
-----------
Center the map on x,y (EPSG:3857 units) and set the z zoom factor
example :

    x=-365446&y=6142287&z=9&


lb {integer}
------------
Displays the #lb background layer. ie lb=0 displays the first preset background layer
example :

    lb=3


layers {string}
---------------
Comma-separated list of geOrchestra layer names with namespace extension. This is the fastest way to set up a map because the WMS url is hardcoded (hardConfig.geOrchestraURL) and sViewer will perform grouped getMap. This assumes that :

* layers are delivered by the hardcoded geOrchestra (or geoserver) platform
* layers are queryable with INFO_FORMAT=text/html
* layers do have associated HTML templates (max width and height = 400px)

example :

    layers=geob_loc:DEPARTEMENT,geob_loc:REGION

To specify alternative styles for a layer, add "*stylename" to the layer name.
example :

    layers=geob_loc:DEPARTEMENT*style_yellow,geob_loc:REGION


cql_filter {string}
-------------------
Semicolon (%3B) separated list of CQL filters to filter the layers specified by layers=. This can be used to select a specific feature. Use the keyword INCLUDE with unfiltered layers.
example :

    cql_filter=CODE%3D56%3BINCLUDE


wmc {string}
------------
Url of a Web Map Context. Only visible and queryables layers will be loaded. Warning, there's no extent or projection check.
Example :

    wmc=http%3A%2F%2Fsdi.georchestra.org%2Fcontexts%2F01.wmc


title {string}
--------------
Map title. This can be changed in the interface. Use short titles for small devices.
Example :

    title=my%20first%20sViewer%20map


kml {string}
------------
Url of a plain (non zipped) KML file to load as queryable layer. This KML must use EPSG:4326 coordinates.
Example :

....kml=kml=http%3A%2F%2Fwww2.ac-lyon.fr%2Fenseigne%2Fbiologie%2FIMG%2Fkml%2FKMZ11_Les_marees_vertes_en_Bretagne.kml


geOrchestra integration
=======================

* sViewer displays metadata text/html links, attribution, attributionURL from the WMS capabilities
* sViewer can POST the map layout to the geOrchestra advanced viewer for edit, analysis, print purposes.
* sViewer can read WMC from the geOrchestra advanced viewer. Waiting for a nice addon...



CAVEATS
=======

* GetFeatureInfo from a WMC are not well handled : multiple popups ...


TODO
====

First item, highest priority

* accessibility check
* check the genericity of the openLS helper
* GPS geocoding, tracking, events based on feature proximity
* sviewer->geOrchestra through the global service, inefficient. Use virtual services
* build system to automatically configure the geOrchestra url
* geOrchestra incubation
* compress js and external libs
* mobile OS manifest

Before using this project, read the LICENSE.en terms.

(c) 2011-2013 geOrchestra http://www.georchestra.org/

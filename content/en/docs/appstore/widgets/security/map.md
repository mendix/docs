---
title: "Maps CSP"
url: /appstore/widgets/security/content-security-policy/maps-csp/
weight: 20
description: "Describe the configuration for map widget content security policy"
tags: ["security", "headers", "widgets", "marketplace", "marketplace component", "widget", "maps", "google maps", "openstreetmap", "mapbox", "here maps", "platform support"]
---

## 1 Introduction

The [Maps](/appstore/widgets/maps/) widget requires access to a map provider (which provider is based on your configuration) in order to work. Below, you can see the `allowlist` domains you need to be set up each available provider.

## 2 Setup

### 2.1 Google Maps

You can enable `allowlist` CSP for Google Maps by including these domains:

```
script-src 'self' https: blob:;
img-src 'self' https://*.googleapis.com https://*.gstatic.com *.google.com *.googleusercontent.com data:;
frame-src *.google.com;
connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com data: blob:;
font-src https://fonts.gstatic.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
worker-src blob:;
```

{{% alert color="info" %}}
This list is subject to change by google maps. Please refer to [google maps' content security policy](https://developers.google.com/maps/documentation/javascript/content-security-policy#sample_content_security_policy) document for more detail.
Or take a look at google maps [domain access](https://developers.google.com/maps/domains) list document for detail on each host name access requirements.
{{% /alert %}}

### 2.1.2 Open Street Maps

You can enable `allowlist` CSP for Open Street Maps by including these domains:

```
script-src 'self';
img-src 'self' https://*.tile.osm.org data:;
```

### 2.1.3 Mapbox

You can enable enable `allowlist` CSP for Mapbox by including these domains:

```
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
connect-src https://api.mapbox.com https://events.mapbox.com ;
```

{{% alert color="info" %}}
Please refer to [mapbox's content security policy](https://docs.mapbox.com/mapbox-search-js/guides/browsers-and-testing/) document for more detail.
{{% /alert %}}

### 2.1.4 Here Maps

You can enable `allowlist` CSP for Here Maps by including these domains:

```
script-src 'self';
img-src 'self' https://*.base.maps.cit.api.here.com data:;
```
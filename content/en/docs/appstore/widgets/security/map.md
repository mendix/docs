---
title: "Maps"
url: /appstore/widgets/security/content-security-policy/map
weight: 20
description: "Describe the configuration for map widget content security policy"
tags: ["security", "headers", "widgets", "marketplace", "marketplace component", "widget", "maps", "google maps", "openstreetmap", "mapbox", "here maps", "platform support"]
aliases:
    - /howto/front-end/content-security-policy/map
---

## 1 Introduction

[Map widget](/appstore/widgets/maps/) need to have access to map provider based on your configuration. These are the allowlist domains need to be setup for each available provider.

## 2 Setup

### 2.1 Google Map
You can enable allowlist CSP for google maps by including these domains:

```
script-src 'self' https: blob:;
img-src 'self' https://*.googleapis.com https://*.gstatic.com *.google.com *.googleusercontent.com data:;
frame-src *.google.com;
connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com data: blob:;
font-src https://fonts.gstatic.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
worker-src blob:;
```

{{% alert color="info" %}}This list is subject to change by google maps. Please refer to [google maps' content security policy](https://developers.google.com/maps/documentation/javascript/content-security-policy#sample_content_security_policy) document for more detail.
Or take a look at google maps [domain access](https://developers.google.com/maps/domains) list document for detail on each host name access requirements.{{% /alert %}}

### 2.1.2 Open Street Map
You can enable allowlist CSP for open street map by including these domains:
```
script-src 'self';
img-src 'self' https://*.tile.osm.org data:;
```

### 2.1.3 Mapbox
You can enable enable allowlist CSP for mapbox by including these domains:
```
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
connect-src https://api.mapbox.com https://events.mapbox.com ;
```

{{% alert color="info" %}}Please refer to [mapbox's content security policy](https://docs.mapbox.com/mapbox-search-js/guides/browsers-and-testing/) document for more detail.{{% /alert %}}

### 2.1.4 Here Map
You can enable allowlist CSP for here map by including these domains:
```
script-src 'self';
img-src 'self' https://*.base.maps.cit.api.here.com data:;
```
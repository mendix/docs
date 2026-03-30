---
title: "Maps CSP"
url: /appstore/widgets/security/content-security-policy/maps-csp/
weight: 20
description: "Describe the configuration for map widget content security policy"
---

## Introduction

The [Maps](/appstore/widgets/maps/) widget requires access to a map provider (the exact provider is based on your configuration) in order to work. Below, you can see the `allowlist` domains you need to set up for each available provider.

## Setup Information

### Google Maps

You can enable `allowlist` CSP for Google Maps by including these domains:

```text
script-src 'self' https: blob:;
img-src 'self' https://*.googleapis.com https://*.gstatic.com *.google.com *.googleusercontent.com data:;
frame-src *.google.com;
connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com data: blob:;
font-src https://fonts.gstatic.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
worker-src blob:;
```

{{% alert color="info" %}}
This list is subject to change by Google Maps. For more first-party details, see [Google Maps' content security policy](https://developers.google.com/maps/documentation/javascript/content-security-policy#sample_content_security_policy).

You can also look at Google Maps' [domain access](https://developers.google.com/maps/domains) list for details on host name access requirements.
{{% /alert %}}

### OpenStreetMap

You can enable `allowlist` CSP for Open Street Maps by including these domains:

```text
script-src 'self';
img-src 'self' https://*.tile.osm.org data:;
```

### Mapbox

You can enable enable `allowlist` CSP for Mapbox by including these domains:

```text
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
connect-src https://api.mapbox.com https://events.mapbox.com ;
```

{{% alert color="info" %}}
For more first-party details, see [Mapbox's content security policy](https://docs.mapbox.com/mapbox-search-js/guides/browsers-and-testing/).
{{% /alert %}}

### HERE Maps

You can enable `allowlist` CSP for HERE Maps by including these domains:

```text
script-src 'self';
img-src 'self' https://*.base.maps.cit.api.here.com data:;
```

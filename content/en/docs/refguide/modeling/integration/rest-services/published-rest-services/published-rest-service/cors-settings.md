---
title: "CORS Settings for Published REST Services"
url: /refguide/cors-settings/
weight: 60
description: "Additional options for controlling access to a published REST service"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > Enable CORS > Settings > Help (integration)
---

## Introduction

Cross-Origin Resource Sharing (CORS) uses additional HTTP headers to tell a browser to give access to selected resources from a server in a different origin (domain).

When you enable CORS in a [published REST service](/refguide/published-rest-service/), you can specify which servers are allowed to access your service.

## Allowed Origins

Choose a constant that specifies which websites are allowed to access this service. The constant should contain a comma-separated list of host origins. An origin consists of a protocol, a hostname, and (optionally) a port (for instance, `https://www.mendix.com` or `http://example.com:8080`). When this is a public service that should be accessible by any origin and does not require authentication, you can use a constant with value `*`.

## Max Age

Choose how long a browser is allowed to remember these settings before checking whether there are new CORS settings. A longer time is good for performance, because the browser will perform fewer requests. However, if you change the CORS settings, these changes will not take effect in all browsers until this time has passed.

## Allow Credentials

Check this box to indicate that the browser is allowed to send cookies, authorization headers, and/or client certificates to this service.

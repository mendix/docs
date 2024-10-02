---
title: "CORS Settings for Published REST Services"
url: /refguide9/cors-settings/
weight: 60
description: "Additional options for controlling access to a published REST service"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > Enable CORS > Settings > Help (integration)
---

## Introduction

Cross-Origin Resource Sharing (CORS) uses additional HTTP headers to tell a browser to give access to selected resources from a server in a different origin (domain).

When you enable CORS in a [published REST service](/refguide9/published-rest-service/), by default all websites on all servers are allowed to access your service. The **CORS Settings** dialog box allows you to configure this type of access on a more detailed level.

## Allowed Origins

Here you can specify which websites are allowed to access your service. You can either select **All**, or specify a constant that contains a comma-separated list of host names.

## Max Age

Here you can choose how long a browser is allowed to remember these settings before checking whether there are new CORS settings. A longer time is good for performance, because the browser will perform fewer requests. However, if you change the CORS settings, these changes will not take effect in all browsers until this time has passed.

## Allow Credentials

Check this box to indicate that the browser is allowed to send cookies, authorization headers, and/or client certificates to this service.

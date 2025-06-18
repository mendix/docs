---
title: "Request Handlers"
url: /refguide/request-handlers/
description: "Describes the various request handlers that are available in the runtime."
weight: 45
---

## Introduction

Communication between the Mendix client and the runtime server happens through various different request handlers. 

## Standard Request Handlers

The following standard request handlers are used:

| Name | Endpoint | Description |
| ---- | -------- | ----------- |
| Resources | `/` | Serves static files, such as the `index.html`. |
| XAS | `/xas` | Handles the client/runtime communication. See [Communication Patterns in the Mendix Runtime](/refguide/communication-patterns/) for more information. |
| File | `/file` | Handles file uploads and downloads from the Mendix client. |
| Page/Microflow URLs | `/p` (default) | Handles opening pages and executing microflows that have a URL configured. The endpoint can be configured in the [app settings](/refguide/app-settings/#url-prefix). |
| PWA Manifest | `/manifest.webmanifest` | Serves the manifest file that is required for [PWA applications](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/). |
| Mx Dev Tools | `/mxdevtools` | Websocket endpoint that handles client logs and nanoflow debugging. Only enabled during development. |

## Custom Request Handlers

Custom request handlers can be added using the `com.mendix.core.Core#addRequestHandler({name of the request handler})` API call.

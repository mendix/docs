---
title: "Request Handler"
url: /refguide/request-handlers/
description: "Runtime에서 사용할 수 있는 다양한 Request Handler를 설명합니다."
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

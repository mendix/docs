---
title: "Request handlers"
url: /refguide/request-handlers/
description: "Describes the various request handlers that are available in the runtime."
---

## 1 Introduction

Communication with the runtime happens through various different request handlers. 

## 2 Request handlers

The following request handlers are available:

| Name | Endpoint | Description |
| ---- | -------- | ----------- |
| Resources | `/` | Handles serving static files, such as the `index.html` |
| XAS | `/xas` | Handles the client/runtime communication. See [Communication Patterns in the Mendix Runtime](/refguide/communication-patterns/) for more information. |
| File | `/file` | Handles file upload/download from the Mendix client. |
| Page/Microflow URLs | `/p` (default) | Handles opening pages and executing microflows that have a URL configured. The endpoint can be configured in the [app settings](/refguide/app-settings/#url-prefix). |
| PWA Manifest | `/manifest.webmanifest` | Serves the manifest file that is required for [PWA applications](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/). |
| Mx Dev Tools | `/mxdevtools` | Websocket endpoint that handles client logs + nanoflow debugging. Only enabled during development. |

## 3 Custom request handlers

Custom request handlers can be added using the `com.mendix.core.Core#addRequestHandler({name of the request handler})` API call. 
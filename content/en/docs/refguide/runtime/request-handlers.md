---
title: "Request Handlers"
url: /refguide/request-handlers/
description: "Describes the various request handlers that are available in the runtime."
weight: 45
---

## Introduction

The Mendix Runtime receives requests through various request handlers. Standard request handlers handle the communication between the Mendix client and the runtime server. Other request handlers expose the services that your app publishes.

## Standard Request Handlers

The following standard request handlers are used:

| Name | Endpoint | Description |
| ---- | -------- | ----------- |
| Resources | `/` | Serves static files, such as the `index.html`. |
| XAS | `/xas` | Handles the client/runtime communication. See [Communication Patterns in the Mendix Runtime](/refguide/communication-patterns/) for more information. |
| File | `/file` | Handles file uploads and downloads from the Mendix client. |
| Page/Microflow URLs | `/p` (default) | Handles opening pages and executing microflows that have a URL configured. The endpoint can be configured in the [app settings](/refguide/runtime-tab/#url-prefix). |
| PWA Manifest | `/manifest.webmanifest` | Serves the manifest file that is required for [PWA applications](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/). |
| Mx Dev Tools | `/mxdevtools` | Websocket endpoint that handles client logs and nanoflow debugging. Only enabled during development. |
| Debugger | `/debugger` | Endpoint that can be used to debug Mendix Apps. |

## Admin Port Request Handlers

| Name | Endpoint | Description |
| ---- | -------- | ----------- |
| Root | `/` | Used to perform different operations on the admin port. |

{{% alert color="info" %}}
The admin port `root` (`/`) URL is not exposed to clients. It uses a different port from the standard request handlers and is only accessible to system administrators.
{{% /alert %}}

## Service Endpoints {#service-endpoints}

Apps that contain published services expose additional endpoints for handling service requests and for documentation.

### Published Service Request Handlers {#published-service-handlers}

[Published REST services](/refguide/published-rest-services/) and [published OData services](/refguide/published-odata-services/) register their own request handlers, based on the location that you configure for each service. For example, a published REST service with the location `rest/myservice/v1` is served on `/rest/myservice/v1`.

If the app contains published web services, the `/ws` request handler handles the web service requests.

### Documentation Endpoints {#documentation-endpoints}

The following endpoints provide documentation for the services published by your app:

| Endpoint | Enabled When | Description |
| -------- | ------------ | ----------- |
| `/api-doc` | The app contains a published REST, OData, or web service. | Overview page that links to the other documentation endpoints. See [Mendix Runtime](/refguide/runtime/#apis). |
| `/rest-doc` | The app contains a [published REST service](/refguide/published-rest-services/). | Serves the [OpenAPI documentation](/refguide/open-api/) of each published REST service. |
| `/odata-doc` | The app contains a [published OData service](/refguide/published-odata-services/). | Serves the API documentation of each published OData service. See [API Documentation](/refguide/published-odata-services/#api-documentation). |
| `/ws-doc` | The app contains a [published web service](/refguide/published-web-services/). | Serves the documentation of each published web service, including its WSDL. |

#### Restricting Access to Documentation Endpoints {#restricting-access}

Mendix Cloud denies access to the documentation endpoints by default. The runtime has no setting to disable them. On other deployments, you can restrict access to these paths with a reverse proxy or a web application firewall (WAF).

For more information, see [Path-Based Access Restrictions](/developerportal/deploy/environments-details/#path-based-restrictions) and [Applying Access Restrictions to Unnecessary Request Handlers](/howto/security/best-practices-security/#request-handlers).

## Custom Request Handlers

Custom request handlers can be added using the `com.mendix.core.Core#addRequestHandler({name of the request handler})` API call.

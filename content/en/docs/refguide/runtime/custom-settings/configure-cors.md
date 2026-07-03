---
title: "Configuring CORS in the Mendix Runtime"
linktitle: "Configuring CORS"
url: /refguide/configure-cors/
description: "Describes how to enable Cross-Origin Resource Sharing (CORS) in the Mendix Runtime, allowing browser-based clients on other domains to access the runtime."
---

## Introduction

Cross-Origin Resource Sharing (CORS) is a mechanism that allows a web application running on one domain to make requests to a server on a different domain. By default, browsers block such cross-origin requests for security reasons. If your Mendix front end is hosted on a different domain than the Mendix Runtime (for example, when using a separate single-page application or a microfrontend architecture), you need to configure CORS so the browser permits these requests.

This document describes the custom runtime settings required to enable CORS in the Mendix Runtime.

If you also enable CORS on a [published REST service](/refguide/published-rest-service/) and configure [Allowed Origins](/refguide/cors-settings/), access is granted to both the origins configured on the published REST service and the origins configured through the runtime settings described in this document.

{{% alert color="info" %}}

This feature is only supported in Mendix 11.10 and later.

{{% /alert %}}

## Settings to Configure {#settings}

To enable CORS, configure the following custom runtime settings. For general information on how to set custom runtime settings, see [Runtime Customization](/refguide/custom-settings/).

### Runtime Settings

| Name | Value | Description |
| --- | --- | --- |
| `com.mendix.core.SameSiteCookies` | `None` | Allows cookie sharing between the runtime origin and the client origin. This is required for cross-origin authentication to work correctly. The value needs to be set to "None", not left with no value. |

### Custom HTTP Response Headers

In addition to the runtime settings above, you need to set the following custom HTTP response headers via the `Headers` setting:

| Header | Value | Description |
| --- | --- | --- |
| `Access-Control-Allow-Credentials` | `true` | Indicates that the server allows credentials (cookies, authorization headers) to be included in cross-origin requests. |
| `Access-Control-Allow-Headers` | `Content-Type, x-csrf-token` | Specifies which HTTP headers can be used in the actual request. Expand this list if your application uses additional custom headers. |
| `Access-Control-Allow-Methods` | `POST, GET, OPTIONS` | Specifies the HTTP methods allowed when accessing the resource. Expand this list if your application uses additional methods (for example, `PUT` or `DELETE`). |
| `Access-Control-Allow-Origin` | Your client domain (for example, `https://my-app.example.com`) | The origin from which the client application is served. This must match the exact domain, including the scheme and port. |

{{% alert color="info" %}}
If you change these settings, you need to restart your app to apply the changes.
{{% /alert %}}

## Example `m2ee.yaml` Configuration {#example}

The following example shows how to configure CORS in an `m2ee.yaml` file. Replace `YOUR_ORIGIN` with the actual domain of your client application (for example, `https://my-app.example.com`):

```yaml
mxruntime:
    com.mendix.core.SameSiteCookies: None
    Headers:
        "Access-Control-Allow-Credentials": "true"
        "Access-Control-Allow-Headers": "Content-Type, x-csrf-token"
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
        "Access-Control-Allow-Origin": "YOUR_ORIGIN"
```

## Troubleshooting

If CORS is not working as expected, check the following:

* **Browser console errors** — Look for CORS-related error messages in the browser developer tools console. These typically indicate which header is missing or misconfigured.
* **Origin mismatch** — Ensure the value of `Access-Control-Allow-Origin` exactly matches the origin shown in the browser error, including the scheme (`https://`) and port number (if applicable).
* **Missing `SameSiteCookies` setting** — Without `com.mendix.core.SameSiteCookies` set to `None`, cookies will not be sent on cross-origin requests, which can cause authentication failures.
* **HTTPS requirement** — When `SameSiteCookies` is set to `None`, the `Secure` attribute is automatically added to cookies, meaning both the runtime and the client must be served over HTTPS.

---
title: "Content Security Policy"
url: /howto/security/csp/
weight: 80
description: By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context.
aliases:
    - /howto/security/using-mobile-capabilities/csp/
---

## Introduction

By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context. A rigorous CSP allows you to control which resources are loaded in the app.

A web app (including progressive web apps) can be made more strict and secure by setting its CSP to `default-src: self`. By doing so, only resources from the same domain can be loaded and no resources can be loaded inline (such as Base64 images or inline JavaScript).

For more background information on CSPs, see [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) from Mozilla.

{{% alert type="warning" %}}
Currently, some of Mendix's pluggable widgets are not fully compliant with CSP. If used with strict CSP, these widgets can result in CSP errors in the console or broken flows. Please refer to [widget's security documentation](/appstore/widgets/security/content-security-policy/) page for more details.
{{% /alert %}}

## Setup

In order to be able to use the strictest setting of a CSP (`default-src: self`) you must make some changes in your application. See the sections below for guidance.

### Updating the Theme Folder

To upgrade your theme directory to latest version, complete the following steps:

1. Rename your current theme directory. For example, you can use *theme_backup* as the new name.
1. Download the new theme files from this GitHub link: [theme.zip](https://github.com/mendix/atlas/releases/download/atlasui-theme-files-2024-01-25/atlasui-theme-files.zip). Extract the downloaded file into the root of your Mendix app folder. The folder structure should be similar to the previous folder, (meaning the Mendix app root, then the theme, and then the web and native folders).
1. After extracting the new theme files, restore your custom styling from the backup by copying over the new theme folder files. You will see the main changes enacted to make things compatible with strict CSP involve the `login.html` file and one JavaScript file for the toggled password.

### Changing the Theme

#### In React Client

Create a new file in your theme folder (**theme/web/appSetup.js**) with the following:

```js
if (!document.cookie || !document.cookie.match(/(^|;) *originURI=/gi)) {
    const url = new URL(window.location.href);
    const subPath = url.pathname.substring(0, url.pathname.lastIndexOf("/"));

    document.cookie = `originURI=${subPath}/login.html${window.location.protocol === "https:" ? ";SameSite=None;Secure" : ""}`;
}
```

Create a second file to contain the script for unsupported browsers (*theme/web/unsupported-browser.js*):

```js
// Redirect to unsupported browser page if opened from browser that doesn't support Symbols
if (typeof Symbol !== "function") {
    var homeUrl = window.location.origin + window.location.pathname;
    var appUrl = homeUrl.slice(0, homeUrl.lastIndexOf("/") + 1);
    window.location.replace(appUrl + "unsupported-browser.html");
}
```

Next, the *theme/web/index.html* file needs to be changed to use these files directly. If you lack this file, complete the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section of *Customize Styling*. Once you have the file, you can proceed.

In *theme/web/index.html* do the following:

1. Remove the line with the `{{unsupportedbrowsers}}` tag.
1. Remove the `<script>` which tells the client where to redirect to if a user is required to log in.
1. At the top of the `<head`> tag, add a reference to the `unsupported-browser.js` script:

    ```js
    <html>
        <head>
            <script src="unsupported-browser.js"></script>
            ...
        </head>
        ...
    </html>
    ```

1. In the `<body>` tag, add a reference to the `appSetup.js` script before `index.js` is loaded:

    ```js
    <html>
        <body>
            ...
            <div id="root"></div>
            <script src="appSetup.js"></script>
            <script src="dist/index.js?{{cachebust}}"></script>
        </body>
    </html>
    ```

Lastly, ensure you are not using any external fonts by checking your theme's styling to confirm all of the fonts are loaded locally.

#### In Dojo Client

{{% alert color="warning" %}}
In Mendix 11.0 and above, the Dojo Client is deprecated.
{{% /alert %}}

Create a new file to contain the Dojo configuration in your theme folder (*theme/web/appSetup.js*) with the following configuration:

```js
window.dojoConfig = {
    // Default Dojo config
	isDebug: false,
	useCustomLogger: true,
	async: true,
	baseUrl: "mxclientsystem/dojo/",
	cacheBust: "{{cachebust}}",
	rtlDirect: "index-rtl.html",

    // CSP Dojo config
	has: {
        "csp-restrictions": true
    },
	blankGif: "mxclientsystem/dojo/resources/blank.gif"
};

if (!document.cookie || !document.cookie.match(/(^|;) *originURI=/gi)) {
    const url = new URL(window.location.href);
    const subPath = url.pathname.substring(0, url.pathname.lastIndexOf("/"));
    document.cookie = `originURI=${subPath}/login.html${window.location.protocol === "https:" ? ";SameSite=None;Secure" : ""}`;
}
```

Create a second file to contain the script for unsupported browsers (*theme/web/unsupported-browser.js*):

```js
// Redirect to unsupported browser page if opened from browser that doesn't support Symbols
if (typeof Symbol !== "function") {
    var homeUrl = window.location.origin + window.location.pathname;
    var appUrl = homeUrl.slice(0, homeUrl.lastIndexOf("/") + 1);
    window.location.replace(appUrl + "unsupported-browser.html");
}
```

Finally, the *theme/web/index.html* file needs to be changed to use these files directly. If you lack this file, please follow the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section of *Customize Styling*.

In *theme/web/index.html* do the following:

1. Remove the line with the `{{unsupportedbrowsers}}` tag
1. Remove the `<script>` tag with the `dojoConfig` inside
1. At the top of the `<head`> tag, add a reference to the `unsupported-browser.js` script:

    ```js
    <html>
        <head>
            <script src="unsupported-browser.js"></script>
            ...
        </head>
        ...
    </html>
    ```

1. In the `<body>` tag, add a reference to the `appSetup.js` script before `mxui.js` is loaded:

    ```js
    <html>
        <body>
            ...
            <div id="content"></div>
            <script src="appSetup.js"></script>
            <script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>
        </body>
    </html>
    ```

Lastly, ensure you are not using any external fonts by checking your theme's styling to confirm all of the fonts are loaded locally.

#### Testing Your Changes Locally

To check that your changes are working locally, you can add a custom `Content-Security-Policy` header in your [configuration](/refguide/configuration/#headers).

After redeploying your app locally, it should function as normal. If your app does not load or if there are errors, check that you have completed all steps listed above.

After you finish testing locally, remember to remove the line of code in the `head` tag.

## CSP Support in Java Request Handlers

When developing Marketplace modules or custom Java actions that include request handlers, you may need to implement CSP support to ensure compatibility with strict CSP policies. This includes support for CSP Level 2+ features such as nonces for inline scripts and styles. 

{{% alert color="info" %}}
CSP support is only relevant for request handlers that serve static content such as HTML pages, not for API endpoints that return JSON or other data formats.
{{% /alert %}}

This section describes how to properly handle CSP headers in Java request handlers when serving HTML content.

### Available CSP APIs

Mendix provides two APIs to support CSP in Java request handlers:

#### IMxRuntimeResponse Methods

The `IMxRuntimeResponse` interface provides these basic CSP methods:

* `addContentSecurityPolicyHeader()` – Adds the Content-Security-Policy header as configured in the application
* `getNonce()` – Returns a secure, uniquely generated nonce for the response that you can use in CSP directives
* `addHeader(String key, String value)` – Adds a custom header to the response

#### CspHelper Interface (Recommended)

The `CspHelper` interface provides additional utility methods for more advanced CSP handling:

* `getTemplate()` – Gets the template used for the Content-Security-Policy header value
* `getNonce(IMxRuntimeResponse response)` – Gets the generated nonce of the current HTTP response
* `hasNonce(IMxRuntimeResponse response)` – Returns true if the configured CSP template contains the `{{ NONCE }}` placeholder. For example: `Content-Security-Policy: script-src 'nonce-{{ NONCE }}'`
* `addHeader(IMxRuntimeResponse response)` – Adds Content-Security-Policy header to the response using the configured template

### Example Implementation

Here's how to implement CSP support in a Java request handler using the `CspHelper` interface:

```java
package your.module.requesthandlers;

import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.http.CspHelper;
import com.mendix.core.Core;

public class YourRequestHandler extends RequestHandler {
    
    @Override
    protected void processRequest(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        try {
            // Add the configured CSP header from the application
            Core.csp().addHeader(response);
            
            // Set response content type
            response.setContentType("text/html");
            
            // Generate your response content with conditional nonce support
            String htmlContent = generateHtmlWithCSP(response);
            
            // Write the response
            response.getWriter().write(htmlContent);
            
        } catch (Exception e) {
            logger.error("Error processing request: " + e.getMessage(), e);
            response.setStatus(IMxRuntimeResponse.INTERNAL_SERVER_ERROR);
            response.sendError("Internal server error");
        }
    }
    
    private String generateHtmlWithCSP(IMxRuntimeResponse response) {
        StringBuilder html = new StringBuilder();
        html.append("<!DOCTYPE html>\n");
        html.append("<html>\n");
        html.append("<head>\n");
        html.append("<title>Your Module</title>\n");
        
        // Only use nonce if it's configured in the CSP template
        if (Core.csp().hasNonce(response)) {
            String nonce = Core.csp().getNonce(response);
            html.append("<script nonce=\"").append(nonce).append("\">\n");
            html.append("// Your inline JavaScript here\n");
            html.append("console.log('This script is CSP-compliant with nonce');\n");
            html.append("</script>\n");
        } else {
            // Alternative approach when nonce is not configured
            html.append("<script src=\"/path/to/external/script.js\"></script>\n");
        }
        
        html.append("</head>\n");
        html.append("<body>\n");
        html.append("<h1>Your Module Content</h1>\n");
        html.append("<!-- Your content here -->\n");
        html.append("</body>\n");
        html.append("</html>\n");
        
        return html.toString();
    }
}
```

### Best Practices for CSP in Request Handlers

When implementing CSP support in your request handlers, follow these best practices:

* **Use `CspHelper` for conditional nonce support** – Always check if nonce is configured before using it:

   ```java
   if (Core.csp().hasNonce(response)) {
    String nonce = Core.csp().getNonce(response);
    // Use nonce for inline content
   } else {
    // Use external resources or alternative approach
   }
   ```

* **Always add CSP headers** – Use `Core.csp().addHeader(response)` to ensure your module respects the application's CSP configuration when serving HTML content.

* **CSP is only needed for HTML content** – Only implement CSP support in request handlers that serve HTML pages. API endpoints returning JSON, XML, or other data formats do not need CSP headers.

* **Avoid inline scripts and styles when possible** – Use external files that can be loaded via `'self'` directive.

* **Test with strict CSP** – Test your request handlers with `default-src: 'self'` to ensure they work with the strictest CSP settings.

### Common CSP Issues in Request Handlers

When working with CSP in request handlers, you may encounter these common issues:

#### Base64 Images

Strict CSP blocks inline Base64 images that your request handler generates. Consider these alternatives:

* Serve images as separate endpoints
* Use external image hosting
* Add `data:` to `img-src` directive (less secure)

#### Dynamic Script Generation

Avoid generating `<script>` tags dynamically without nonces. Instead:

* Use the provided nonce for any inline scripts
* Move logic to external JavaScript files
* Use data attributes and external scripts to handle dynamic behavior

#### Third-party Resources

If your module loads external resources, make sure they are allowed by the CSP or provide configuration options for developers to whitelist them.

#### Error Handling

When CSP violations occur, implement proper error handling:

```java
// Log CSP-related errors for debugging
if (Core.csp().hasNonce(response)) {
    logger.debug("Using CSP with nonce: " + Core.csp().getNonce(response));
} else {
    logger.debug("CSP configured without nonce support");
}
```

## Enabling the Header in the Cloud

There are two ways to enable the header in the cloud:

1. **[Headers](/refguide/configuration/#headers) custom runtime setting (Recommended)**: Use this if you need nonce-based CSP support. Configure this in the Developer Portal under [Custom Runtime Settings](/developerportal/deploy/environments-details/#custom-runtime-settings).
2. **HTTP Headers UI:** This method works for basic CSP support. For more details, refer to the [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) section of *Environment Details*.

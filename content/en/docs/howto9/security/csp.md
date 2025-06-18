---
title: "Content Security Policy"
url: /howto9/security/csp/
weight: 80
description: By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context.
---

## Introduction

By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context. A rigorous CSP allows you to control which resources are loaded in the app.

In Mendix Studio Pro 9.12.0 and higher, a web app (including progressive web apps) can be made more strict and secure by setting its CSP to `default-src: self`. By doing so, only resources from the same domain can be loaded and no resources can be loaded inline (such as Base64 images or inline JavaScript).

For more background information on CSPs, see [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) from Mozilla.

{{% alert type="warning" %}}
Currently, some of Mendix's pluggable widgets are not fully compliant with CSP. If used with strict CSP, these widgets can result in CSP errors in the console or broken flows. Please refer to [widget's security documentation](/appstore/widgets/security/content-security-policy/) page for more details.
{{% /alert %}}

## Setup

In order to be able to use the strictest setting of a CSP (`default-src: self`) you must make some changes in your application. See the sections below for guidance.

### Changing the Theme

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

if (!document.cookie || !document.cookie.match(/(^|;) *originURI=/gi))
	document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");
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

Finally, the *theme/web/index.html* file needs to be changed to use these files directly. If you lack this file, please follow the [Customizing index.html (Web)](/howto9/front-end/customize-styling-new/#custom-web) section of *Customize Styling*.

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
            <div id-"content"></div>
            <script src="appSetup.js"></script>
            <script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>
        </body>
    </html>
    ```

Lastly, ensure you are not using any external fonts by checking your theme's styling to confirm all of the fonts are loaded locally.

#### Testing Your Changes Locally

To check that your changes are working locally, you can temporarily enforce the header by adding the following *theme/web/index.html* at the top of the `<head>` tag:

```html
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
    </head>
</html>
```

After redeploying your app locally, it should function as normal. If your app does not load or if there are errors, check that you have completed all steps listed above.

After you finish testing locally, remember to remove the line of code in the `head` tag.

### Enabling the Header in the Cloud

To enable the header in the cloud, follow the instructions in the [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) section of *Environment Details*.

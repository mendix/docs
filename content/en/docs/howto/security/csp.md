---
title: "Content Security Policy"
url: /howto/security/csp/
weight: 80
description: By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context.
---

## 1 Introduction

By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context. A rigorous CSP allows you to control which resources are loaded in the app.

A web app (including progressive web apps) can be made more strict and secure by setting its CSP to `default-src: self`. By doing so, only resources from the same domain can be loaded and no resources can be loaded inline (such as Base64 images or inline JavaScript).

For more background information on CSPs, see [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) from Mozilla.

{{% alert type="warning" %}}
Currently, some of Mendix's pluggable widgets are not fully compliant with CSP. If used with strict CSP, these widgets can result in CSP errors in the console or broken flows. Please refer to [widget's security documentation](/appstore/widgets/security/content-security-policy/) page for more details.
{{% /alert %}}

## 2 Setup

In order to be able to use the strictest setting of a CSP (`default-src: self`) you must make some changes in your application. See the sections below for guidance.

### 2.1 Updating the Theme Folder

To upgrade your theme directory to latest version, complete the following steps:

1. Rename your current theme directory. For example, you can use *theme_backup* as the new name.
1. Download the new theme files from this GitHub link: [theme.zip](https://github.com/mendix/atlas/releases/download/atlasui-theme-files-2024-01-25/atlasui-theme-files.zip). Extract the downloaded file into the root of your Mendix app folder. The folder structure should be similar to the previous folder, (meaning the Mendix app root, then the theme, and then the web and native folders).
1. After extracting the new theme files, restore your custom styling from the backup by copying over the new theme folder files. You will see the main changes enacted to make things compatible with strict CSP involve the `login.html` file and one JavaScript file for the toggled password.

### 2.1.1 Changing the Theme

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
            <div id-"content"></div>
            <script src="appSetup.js"></script>
            <script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>
        </body>
    </html>
    ```

Lastly, ensure you are not using any external fonts by checking your theme's styling to confirm all of the fonts are loaded locally.

#### 2.1.2 Configuring the Header

The `Content-Security-Policy` header can be configured as a [custom runtime setting](/refguide/runtime/custom-settings/#CSPHeaderTemplate). It will then be returned as a header for all HTML files.

{{% alert type="warning" %}}
The `Content-Security-Policy` header configured in the Cloud Portal overwrites this setting. We recommend only setting the custom runtime setting as it provides more flexibility and ensures the header is the same in your local and cloud environment.
{{% /alert %}}

#### 2.1.3 Testing Your Changes Locally

After redeploying your app locally, it should function as normal. If your app does not load or if there are errors, check that you have completed all steps listed above, and your CSP header is configured correctly.

### 2.2 Using Nonces
For cases where you need to use a nonce in your CSP header, such as a requirement to have an inline style or script, and you cannot use CSP hashes, you can use the `{{NONCE}}` template variable in your CSP header.

Example CSP header with a nonce: `default-src: 'self'; script-src 'self' 'nonce-{{NONCE}}';`

When using the nonce in the header, you will also have to add the nonce to all script/style tags (depending on the configuration of your header) in your HTML files.

For example, for the example header above, `script` tags would be changed to look like this (for both inline + external JS scripts):

```html
<script src="my-script.js" nonce="{{NONCE}}"></script>
```

When the HTML is loaded, it will always contain a unique nonce. This also means the HTML file will not be cached, since that would also cache the nonce. The exception to this is in offline web applications where the service worker can cache the HTML file with a nonce. Since this nonce is unique at the time of the request, this does not pose a security risk as the nonce will not be known up-front to attackers.

### 2.3 Implementing the CSP Header in Custom Request Handlers

In case you are building a custom request handler, and have a need to serve static files. We provide Java APIs that will allow you to easily implement a correctly configured CSP header into your handler.

To check whether a custom CSP header is configured, you can check the [runtime configuration](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/conf/Configuration.html#getContentSecurityPolicyHeaderTemplate()) with `configuration.getContentSecurityPolicyHeaderTemplate`.

You can use `response.getNonce()` to [retrieve a unique nonce for the response](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/m2ee/api/IMxRuntimeResponse.html#getNonce()). This can then be used together with your favorite templating engine when parsing HTML to add the nonce in case it is required.

By using `response.addContentSecurityPolicyHeader()`, the correct headers, matching the apps configuration, will also be [added to the headers](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/m2ee/api/IMxRuntimeResponse.html#addContentSecurityPolicyHeader()) of the response.
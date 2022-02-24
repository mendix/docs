---
title: "CSP"
#category: "Enter the category under which the document should be published if necessary (for parent pages only; a category example is "Modeler"); if there is a parent, remove this category line"
#parent: "Enter the parent document filename of this document if necessary (for example, "push-notifications"); if there is a category, remove this parent line"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
description: "Enabling Content-Security-Policy headers for your application."
tags: ["security", "headers"]
---

## 1 Introduction

Since Mendix 9.12.0, applications can be made even more secure and strict by setting the Content Security Policy (CSP) to `default-src: self`. By doing so, only resources from the same domain can be loaded, and no resources can be loaded inline (such as base64 images, inline JavaScript, etc...).

For more background information, see https://owasp.org/www-community/controls/Content_Security_Policy.

## 2 Setup

In order to be able to use the strictest setting of CSP (`default-src: self`) some changes are needed in your application. 

### 2.1 Changing the theme

Create a new file that will hold the Dojo configuration in your theme folder (`theme/web/appSetup.js`) with the following configuration:

```js
window.dojoConfig = {
    // Default Dojo config
	isDebug: false,
	useCustomLogger: true,
	async: true,
	baseUrl: "mxclientsystem/dojo/",
	cacheBust: "{{cachebust}}",
	#{OTHER_DIR}Redirect: "#{RTL_REDIRECT}"

    // CSP Dojo config
	has: {
        "csp-restrictions": true
    },
	blankGif: "mxclientsystem/dojo/resources/blank.gif"
};

if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
	document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");
```

Now create a second file that will hold the script for unsupported browsers (`theme/web/unsupported-browser.js`):

```js
// Redirect to unsupported browser page if opened from browser that doesn't support Symbols
if (typeof Symbol !== "function") {
    var homeUrl = window.location.origin + window.location.pathname;
    var appUrl = homeUrl.slice(0, homeUrl.lastIndexOf("/") + 1);
    window.location.replace(appUrl + "unsupported-browser.html");
}
```

To tie it together, the `theme/web/index.html` file needs to be changed to use these files directly. In case, you do not have this file, please follow [these instructions](https://docs.mendix.com/howto/front-end/customize-styling-new#9-customizing-index-html-web). In your `theme/web/index.html`:

- Remove the line with the `{{unsupportedbrowsers}}` tag
- Remove the `<script>` tag with the `dojoConfig` inside
- At the top of the `<head`> tag, add a reference to the `unsupported-browser.js` script:

    ```js
    <html>
        <head>
            <script src="unsupported-browser.js"></script>
            ...
        </head>
        ...
    </html>
    ```
- In the `<body>` tag, add a reference to the `appSetup.js` script before `mxui.js` is loaded:

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

The last step is to ensure you are not using any external fonts by checking the styling of your theme and making sure all of the fonts are loaded locally.

#### 2.1.1 Testing your changes locally
To ensure the changes you've made are working locally, you can temporarily enforce the header by adding the following to your `theme/web/index.html` at the top of the `<head>` tag:

```html
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
    </head>
</html>
```

After redeploying your app locally, it should function as normal. If your application does not load, or if there are any errors, go back to the first step and ensure you've gone through all steps necessary.

Don't forget to remove this line after you're done testing your changes.

### 2.2 Enabling the header in the Cloud

At this point you can enable the header in the cloud as mentioned [here](https://docs.mendix.com/developerportal/deploy/environments-details#http-headers).

## 3 Read More

* https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP - More information on CSP

---
title: "Widget CSP Overview"
url: /appstore/widgets/security/content-security-policy/
weight: 20
description: "By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context."
---

## Introduction

Currently, certain Mendix pluggable widgets are not fully compliant with strict content security policy (CSP). Some of these widgets require access to third party domains. By allowing access to these domains, these widgets can still follow `allowlist` CSP.

## Setup

For information on setting up your application's CSP, see the [Content Security Policy](/howto/security/csp/) guide.

## Widgets

The following widgets are not fully compliant with strict CSP. See the widgets' documents below for additional information and setup instructions to enable CSP:

### Charts {#charts}

The [Charts](/appstore/widgets/charts/) widget is not fully compliant with strict CSP. The Plotly library used by the widget adds its styles to the page at runtime, and strict CSP blocks this. The charts are still drawn, but their layers are positioned incorrectly. As a result, chart elements such as legends are displaced or missing.

You can resolve this in one of the following ways:

* [Allow inline styles](#charts-allowlist): this is the simplest option, but it relaxes your CSP
* [Add the Plotly styles to your theme](#charts-strict): this option keeps strict CSP

#### Allowing Inline Styles {#charts-allowlist}

You can enable `allowlist` CSP for Charts by including these directives:

```text
style-src 'self' 'unsafe-inline';
```

#### Adding the Plotly Styles to Your Theme {#charts-strict}

Plotly publishes its styles as a static CSS file. When this file is part of your theme, the charts are displayed correctly with `default-src 'self'`.

To add the Plotly styles to your theme, follow these steps:

1. Download the Plotly CSS file for the Plotly version used by your Charts version. For example, Charts version 6.3.2 uses Plotly 3.6.0, so the file is `https://cdn.plot.ly/plotly-3.6.0.css`.
1. Save the file as *plotly.css* in the **theme/web** folder of your app. Do not link to the file on the CDN, because strict CSP blocks stylesheets from other domains.
1. Add the file to the `cssFiles` property in *theme/web/settings.json*:

    ```json
    {
        "cssFiles": ["theme.compiled.css", "plotly.css"]
    }
    ```

1. Run your app again.

For more information on adding CSS files to your theme, see the [Adding Custom Styling](/howto/front-end/customize-styling-new/#add-custom-styling) section of *Customize Styling*.

{{% alert color="info" %}}
The Plotly CSS file must match the Plotly version used by the widget. When you update Charts, check whether you need to replace *plotly.css*.
{{% /alert %}}

With these steps, the charts are displayed correctly, but the browser console still shows CSP errors because Plotly continues to try to add its styles. These errors do not affect the charts. To stop Plotly from adding its styles, add the following element to the `<head>` tag of your *theme/web/index.html* file:

```html
<meta id="plotly.js-style-global" class="no-inline-styles" />
```

If you do not have this file, see the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section of *Customize Styling*.

The following CSP errors can remain in the browser console. They do not affect charts that do not use maps:

* An inline style error for the styles of the map library included in Plotly.
* Two image errors for a `data:` image that Plotly uses to detect WebP support. To remove these errors, you can add `img-src 'self' data:` to your CSP.

### Color Picker

You can enable `allowlist` CSP for [Color Picker](/appstore/widgets/color-picker/) by including these directives:

```text
style-src 'self' 'unsafe-inline';
```

### Document Viewer {#document-viewer}

You can enable CSP for document viewer by setting the PDF.js worker URL to the local path. For more configuration information, see the [Advanced](/appstore/widgets/document-viewer/#advanced) section of *Document Viewer*.

### HTML/JavaScript Snippet

For information on HTML/JavaScript Snippet widget CSP configurations, see [HTML/JavaScript Snippet CSP](/appstore/widgets/security/content-security-policy/html-javascript-snippet-csp/).

### Maps

For information on Maps widget CSP configurations, see [Maps CSP](/appstore/widgets/security/content-security-policy/maps-csp/).

### Rich Text

Use versions 3.0 and higher of [Rich Text](/appstore/widgets/rich-text/) for strict CSP compliance.

You can enable `allowlist` CSP for [Rich Text](/appstore/widgets/rich-text/) by including these directives:

```text
style-src 'self' 'unsafe-inline';
```

For Rich text version 2.x and below, you will need to add the following directives:

```text
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
```

### Progress Circle

Use versions 3.3.0 and higher of [Progress Circle](/appstore/widgets/progress-circle/) for strict CSP compliance.

### Web Actions

Use versions 2.10.0 and higher [Web Actions](/appstore/modules/web-actions/) for strict CSP compliance.

## Read More

* Read [Security Guide](/refguide/security/) to understand more about security roles and access in Mendix
* See [App Permissions](/refguide/mobile/using-mobile-capabilities/generic-permission-action/) to understand how make your app ask users for permission before storing their media

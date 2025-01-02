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

### Charts

You can enable `allowlist` CSP for [Charts](/appstore/widgets/charts/) by including these directives:

```text
style-src 'self' 'unsafe-inline';
```

### Color Picker

You can enable `allowlist` CSP for [Color Picker](/appstore/widgets/color-picker/) by including these directives:

```text
style-src 'self' 'unsafe-inline';
```

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

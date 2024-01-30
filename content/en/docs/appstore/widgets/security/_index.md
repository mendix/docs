---
title: "Widget CSP Overview"
url: /appstore/widgets/security/content-security-policy/
weight: 20
description: "By employing a content security policy (CSP) in your app, you can protect it from malicious content which might try to take advantage of the app's trusted web page context."
tags: ["security", "headers", "widgets"]
---

## 1 Introduction

Currently, certain Mendix pluggable widgets are not fully compliant with strict content security policy (CSP). Some of these widgets require access to third party domains. By allowing access to these domains, these widgets can still follow `allowlist` CSP.

## 2 Setup

For information on setting up your application's CSP, see the [Content Security Policy](/howto/security/csp/) guide.

## 3 Widgets

The following widgets are not fully compliant with strict CSP. See the widgets' documents below for additional information and setup instructions to enable CSP:

- ##### Charts
    You can enable `allowlist` CSP for [Charts](/appstore/widgets/charts/) by including these directive:
    ```text
    style-src 'self' 'unsafe-inline';
    ```

- ##### Color picker
    You can enable `allowlist` CSP for [Color Picker](/appstore/widgets/color-picker/) by including these directive:
    ```text
    style-src 'self' 'unsafe-inline';
    ```

- ##### HTML/Javascript snippet
    Please see [HTML/Javascript content security policy document](/appstore/widgets/security/content-security-policy/html-javascript-snippet-csp/) for information on HTML/Javascript snippet widget CSP configurations.
    
- ##### Map
    Please see [Map widget content security policy document](/appstore/widgets/security/content-security-policy/maps-csp/) for information on Map widget CSP configurations.

- ##### Rich text
    You can enable `allowlist` CSP for [Rich Text](/appstore/widgets/rich-text/) by including these directive:
    ```text
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';;
    ```

- ##### Progress circle
    Please use minimum version 3.3.0 of [Progress Circle](/appstore/widgets/progress-circle/) for strict CSP compliant.

- ##### Web actions
    Please use minimum version 2.10.0 of [Web Actions](/appstore/modules/web-actions/) for strict CSP compliant.

## 4 Read More

* Read [Security Guide](/refguide/security/) to understand more about security roles and access in Mendix
* See [App Permissions](/refguide/mobile/using-mobile-capabilities/generic-permission-action/) to understand how make your app ask users for permission before storing their media

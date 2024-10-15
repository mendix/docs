---
title: "HTML/JavaScript Snippet CSP"
url: /appstore/widgets/security/content-security-policy/html-javascript-snippet-csp/
weight: 20
description: "Describe the configuration for map widget content security policy"
---

## Introduction

The [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/) widget is not fully CSP compliant out-of-the-box. This is due to the widget's innate methods of injecting HTML or JavaScript into pages. To make this widget CSP compliant, see the sections below.

## Setup Information

Follow the configuration advice below to made the widget CSP compliant.

### Use CSP Compliant Code

Make sure that the HTML or JavaScript code that you are injecting to the page is following CSP compliant specifications.

### Use External Files Instead of Content Attributes

Create a new JavaScript file in the app's root directory (**theme** folder) and refer to it instead of using its content attribute. This applies for both HTML and JavaScript snippets:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/security/html-js-csp/create.png" width="350" >}}
{{< figure src="/attachments/appstore/platform-supported-content/widgets/security/html-js-csp/refer.png" width="350" >}}

### Directives Unsafe-Inline and Unsafe-Eval

If you cannot follow both of the steps above, you can always input the following directives to enable the widget in CSP environment:

```text
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';;
```

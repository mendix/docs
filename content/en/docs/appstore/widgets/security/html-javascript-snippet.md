---
title: "HTML/JavaScript Snippet CSP"
url: /appstore/widgets/security/content-security-policy/html-javascript-snippet-csp/
weight: 20
description: "Describe the configuration for map widget content security policy"
tags: ["security", "headers", "widgets", "marketplace", "marketplace component", "widget", "html", "javascript", "snippet", "maps", "platform support"]
---

## 1 Introduction

The [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/) widget is not fully CSP compliant due to it's nature of injecting HTML or javascript into the page.
But there are still guidance that user could follow to make it CSP compliant.

## 2 Setup Information
Here are the some configurations that you can follow for making the widget CSP compliant:

- ##### Use CSP compliant code
    Make sure that the HTML/Javascript code that you are injecting to the page is following CSP compliant specification.

- ##### Use external file instead of content attribute
    Create a new javascript file in the root directory (Theme folder) and refer to it instead of writing it in content attribute.
    This is apply for both HTML and Javascript snippet.

    {{< figure src="/attachments/" >}}
    {{< figure src="/attachments/" >}}

- ##### unsafe-inline and unsafe-eval
    If you can't follow both of the steps above, you can always put the following directive to enable the widget in CSP environment:
    ```text
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';;
    ```
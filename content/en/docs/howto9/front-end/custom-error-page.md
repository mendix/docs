---
title: "Create Custom Error Pages"
url: /howto9/front-end/custom-error-page/
weight: 55
description: "Describes how to create a custom error page for a more tailored user experience."
---

{{% alert color="info" %}}
This document explains how to make custom error pages for web pages. Native mobile does not use custom error pages, as users cannot enter URLs which lead to them.

To create customized error information for native pages, please create custom [system texts](/refguide9/system-texts/).
{{% /alert %}}

## Introduction

Whenever your application is stopped, you are presented with the default Mendix error page. However, you can make a custom error page on Mendix Cloud for a more tailored user experience. 

Specifically, you can create an `offline.html` page, a `404.html` page, and a `403.html` page.

The different files serve different purposes:

* `offline.html`: will be served when your application has been stopped manually
* `404.html`: will be served whenever a path does not exist
* `403.html`: will be served when access to a resource is denied, because an IP filter has been implemented or because of client certificate restrictions

If you do not create these files, the default error page will be used for each scenario:

{{< figure src="/attachments/howto9/front-end/custom-error-page/custom-error-page.png" class="no-border" >}}

This how-to teaches you how to do the following:

* Create a custom error page

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a local repository of the app
* Have your app *hosted in the Mendix Cloud*
* Identify which version of the Atlas module you are using

## Creating a Custom Error Page

{{% alert color="info" %}}
If you are using Atlas 2, consider [upgrading](/refguide9/moving-from-atlas-2-to-3/). If you cannot, follow the instructions below but create the **error_page** folder in your **theme** folder directly.
{{% /alert %}}

If you are using Atlas 3, do the following:

1. Open the local folder of your app.
2. Go to **theme**:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/theme.png" class="no-border" >}}

3. Go to **web**:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/web.png" class="no-border" >}}

4. Create a new folder named *error_page*:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/error-page.png" class="no-border" >}}

5. In the **error_page** folder, place your *offline.html* file:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/offline.png" class="no-border" >}}

    Optionally, you can also create *404.html* and *403.html* pages.

    {{% alert color="info" %}}In these *.html* files, you can only refer to external resources or resources under the absolute path `/error_page/`; the `/error_page/` path is the only one that will be available when the application is stopped.{{% /alert %}}

6. Commit the changes in Studio Pro.

{{% alert color="warning" %}}
It might take up to an hour to before the custom error page is visible when the app is offline.
{{% /alert %}}

### Example Offline Page

An example `offline.html`, `404.html`, or `403.html` page could look like this:

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/error_page/style.css">
    <script src="/error_page/script.js"></script>
  </head>
  <body>
    This application is currently offline.
  </body>
</html>
```

This example refers to *style.css* and *script.js*, which you should also create and place in the **error_page** directory if you want to have special styling and/or JavaScript.

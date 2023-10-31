---
title: "Create Custom Error Pages"
url: /howto/front-end/custom-error-page/
category: "Front End"
weight: 55
description: "Describes how to create a custom error page for a more tailored user experience."
tags: ["theming", "UX", "Error page", "offline", "404", "403", "front end"]
---

## 1 Introduction

Whenever your application is stopped, you are presented with the default Mendix error page. However, you can make a custom error page on *Mendix Cloud* for a more tailored user experience. 

Specifically, you can create an `offline.html` page, a `404.html` page, and a `403.html` page.

The different files serve different purposes:

* `offline.html`: will be served when your application has been stopped manually
* `404.html`: will be served whenever a path does not exist
* `403.html`: will be served when access to a resource is denied, because an IP filter has been implemented or because of client certificate restrictions

If you do not create these files, the default error page will be used for each scenario:

{{< figure src="/attachments/howto/front-end/custom-error-page/custom-error-page.png" >}}

This how-to teaches you how to do the following:

* Create a custom error page

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a local repository of the app
* Have your app hosted in Mendix Cloud
* Identify which version of the Atlas module you are using

## 3 Creating a Custom Error Page {#create-custom-error}

If you are using Atlas 3, do the following:

1. Open the local folder of your app.
2. Go to **theme**:

    {{< figure src="/attachments/howto/front-end/custom-error-page/theme.png" >}}

3. Go to **web**:

    {{< figure src="/attachments/howto/front-end/custom-error-page/web.png" >}}

4. Create a new folder named *error_page*:

    {{< figure src="/attachments/howto/front-end/custom-error-page/error-page.png" >}}

5. In the **error_page** folder, place your *offline.html* file:

    {{< figure src="/attachments/howto/front-end/custom-error-page/offline.png" >}}

    Optionally, you can also create *404.html* and *403.html* pages.

    {{% alert color="info" %}}In these *.html* files, you can only refer to external resources or resources under the absolute path `/error_page/`; the `/error_page/` path is the only one that will be available when the application is stopped.{{% /alert %}}

6. Commit the changes in Studio Pro.

{{% alert color="warning" %}}
It might take up to an hour to before the custom error page is visible when the app is offline.
{{% /alert %}}

### 3.1 Example Offline Page

An example `offline.html/404.html/403.html` page could look like this:

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

## 4 Creating a Re-Usable Custom Error Page {#create-reusable-error}

It is also possible to create custom error pages inside [re-usable theme modules](/howto/front-end/customize-styling-new/#create-theme-mod).

To create a custom error page inside your theme module, do the following:

1. Open your app's local folder.
1. Go to **themesource**:

   {{< figure src="/attachments/howto/front-end/custom-error-page/themesource.png" >}}

1. Open your theme module's folder:

   {{< figure src="/attachments/howto/front-end/custom-error-page/module-themesource.png" >}}

1. Open the **public** folder:

   {{< figure src="/attachments/howto/front-end/custom-error-page/public.png" >}}

1. Create a new folder named *error_page*:

   {{< figure src="/attachments/howto/front-end/custom-error-page/public-error-page.png" >}}

1. In the **error_page** folder, place your *offline.html*, *404.html*, and/or *403.html* files:

   {{< figure src="/attachments/howto/front-end/custom-error-page/offline.png" >}}

Now you have a custom error page inside a re-useable theme module! When this module is imported into other apps, its custom error pages will automatically become available.

This can also be used in a [company design system](/howto/front-end/create-a-company-design-system/).

{{% alert color="info" %}}
Error pages created inside your app's **theme/web** folder will override error pages that are included in a theme module.

Because of this, you are able to customize one or more error pages while still using the rest of the styling and elements from the module. 
{{% /alert %}}

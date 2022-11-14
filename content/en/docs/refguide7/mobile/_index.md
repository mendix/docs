---
title: "Mobile Development"
url: /refguide7/mobile/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix allows you to quickly build apps for mobile devices. This document gives an overview of mobile app development with Mendix.

## 2 Navigation

Every app starts at the home page. You can specify different home pages for phones and tablets in the [Navigation](/refguide7/navigation/) document. The mobile profiles can be added and removed separately. If you add a profile, you also have to provide its home page. Apart from the home page, different home page for different user roles can be specified. In addition, there is a default menu that can be used in [menu widgets](/refguide7/menu-widgets/).

{{< figure src="/attachments/refguide7/mobile/18582284.png" >}}

## 3 Layout

In theory, you can show the whole desktop site on mobile devices, but you probably want to have optimized pages with simpler layouts and less information. [Layouts](/refguide7/layout/) help you to create pages that suit a device.

For mobile devices, you might want to have a layout that hides the menu in a collapsible [sidebar](/refguide7/sidebar-toggle-button/).

You will need at least one layout per supported device type (desktop, tablet, phone) to optimize your app, but you can create as many as you like.

{{< figure src="/attachments/refguide7/mobile/16844053.png" >}}

## 4 Widgets

Some widgets are more suitable to mobile use than others. For example, the [data grid](/refguide7/data-grid/) is not very well suited because of its reliance on multiple columns and multiple search fields. The [list view](/refguide7/list-view/) is a simpler, more compact widget for showing a list of objects. [Data views](/refguide7/data-view/) lend themselves equally to mobile and desktop usage, but of course this depends on all the widgets you place inside. Some custom widgets can only be used in hybrid mobile apps, because they access native features of the device.

## 5 Hybrid Mobile Apps

Mendix apps can simply be viewed in mobile web browsers. However, some features of mobile devices cannot be accessed through HTML and JavaScript.

If you want to publish your app in the Apple App Store or Google Play, you have to wrap the app in a native shell. We use [PhoneGap](http://phonegap.com/) to do this. PhoneGap creates a native wrapper around a web application and provides access to native functions through a Javascript API. These apps are also called "hybrid" apps, because they are a hybrid of a web and a native app. Mendix facilitates the creation of hybrid mobile apps in a number of ways.

### 5.1 Hybrid Mobile Widgets

To access native functions of the device, we provide a number of PhoneGap widgets in the Mendix Marketplace. And, of course, you can build your own custom widgets that use native features. PhoneGap widgets can be recognized by their special icon. You can also search for them by via **Edit** > **Find Advanced** in the Mendix Desktop Modeler.

{{< figure src="/attachments/refguide7/mobile/16844052.png" >}}

### 5.2 Offline Apps

Separate profiles are available for building [offline apps](/refguide7/offline/). These apps can run even when there is no network connection available, because they store their data on the device itself. When the device connects to the network, the user can synchronize with the main application. Note that there are some restrictions compared to connected apps.

## 6 Documents in This Category

* [Configuring Hybrid Mobile Apps To Run Offline](/refguide7/configuring-hybrid-mobile-apps-to-run-offline/)
* [Customizing Hybrid Mobile Apps](/refguide7/customizing-hybrid-mobile-apps/)
* [Developing Hybrid Mobile Apps](/refguide7/developing-hybrid-mobile-apps/)
* [Getting the Mendix Developer App](/refguide7/getting-the-mendix-app/)
* [Managing App Signing Keys](/refguide7/managing-app-signing-keys/)
* [Packaging Hybrid Mobile Apps](/refguide7/packaging-hybrid-mobile-apps/)

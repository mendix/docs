---
title: "Developing Hybrid Mobile Apps"
url: /refguide8/developing-hybrid-mobile-apps/
tags: ["studio pro"]
aliases:
    - /refguide8/Developing+Hybrid+Mobile+Apps.html
    - /refguide8/Developing+Hybrid+Mobile+Apps
---

## 1 Introduction

Hybrid Mendix apps can simply be viewed in mobile web browsers. However, mobile device features cannot be accessed through HTML and JavaScript. Also, if you want to publish your hybrid app on the Apple App Store, Google Play, or Microsoft Phone Store, you have to wrap your app in a native shell. We use [local builds](/howto8/mobile/build-hybrid-locally/) to accomplish this.

These apps are called "hybrid" apps because they are a hybrid of a web and a native app. Mendix facilitates the creation of hybrid mobile apps in a number of ways.

## 2 The Mendix Developer App

While developing a hybrid mobile app, you can quickly preview it in in the browser by using the **View Hybrid Phone App Online** or **View Hybrid Tablet App Online** from the toolbar or through the **Run** menu.

However, when you use native widgets on your hybrid pages, some of these widgets might not work in the browser. Some of these widgets will offer an alternative implementation for when they are running in an ordinary browser; others will not work at all. To see what your app will look like inside the wrapper, you can use the Mendix Developer App. In Studio Pro, you can reach the hybrid mobile app dialog box via **View in the Mendix App** in the toolbar or through the **Run** menu. It shows a QR code that can be scanned with that app. This is a quick way to load your app into a compatible environment.

{{< figure src="/attachments/refguide8/mobile/hybrid-mobile/developing-hybrid-mobile-apps/View_Hybrid_Mobile_App_Popup.png" >}}

For more information about how to download the Mendix Developer App, see [Getting the Mendix Developer App](/refguide8/getting-the-mendix-app/).

{{% alert color="warning" %}}

Your mobile device has to be on the same network as your development machine for the Mendix Developer App to work. If this is the case and the connection still fails, make sure that communication between devices is allowed in the Wi-Fi access point.

{{% /alert %}}

## 3 Read More

* [Mobile](/refguide8/mobile/)
* [Getting the Mendix Developer App](/refguide8/getting-the-mendix-app/)
* [Customizing Hybrid Mobile Apps](/refguide8/customizing-hybrid-mobile-apps/)
* [Packaging Hybrid Mobile Apps](/refguide8/packaging-hybrid-mobile-apps/)


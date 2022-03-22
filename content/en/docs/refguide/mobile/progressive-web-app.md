---
title: "Progressive Web Apps"
url: /refguide/progressive-web-app/
category: "Mobile"
weight: 2
tags: ["mobile", "progressive web app", "PWA", "studio pro"]
---

## 1 Introduction

Progressive web apps (PWAs) are an evolution of traditional web apps. Overall, PWAs tend to behave more like native mobile apps, and their popularity is increasing. One difference and possible advantage of PWAs compared to hybrid and native mobile apps is that PWAs do not need to be distributed via an app store but can be accessed directly via the browser.

Progressive web apps have three main characteristics:

* **Installable —** PWAs let you add your app to your user's home screen and start a full screen app. This makes PWAs feel more fully-capable native apps.
* **Reliable —** Using service workers, PWAs can work offline or partially offline. Mendix PWAs can work partially offline (resources like styling, pages, and images are cached) or fully offline (like hybrid offline and native mobile apps).
* **Capable —** PWAs can leverage several device capabilities like the camera and location, and can offer support for web push notifications. Note that support for features depend on which browser is used.

## 2 Enabling PWA Features

As PWAs are basically web apps with additional features, Mendix offers these features as a part of web navigation profiles. Based on what is needed, you can create a fully offline-capable PWA, or a web application that requires an internet connection but still uses PWA features.

To create a full offline-first PWA, choose and add one of the following profiles (depending on which form factor you need): Responsive Web Offline, Phone Web Offline, or Tablet Web Offline. For more information about offline-first apps, see the [Offline-First Reference Guide](/refguide/offline-first/).

{{% alert color="info" %}}
Offline-first progressive web apps have some restrictions to make sure they can fully work offline. For more information, see the [Ensuring Your App Is Offline-First ](/refguide/offline-first/#limitations) section of the *Offline-First Reference Guide*.
{{% /alert %}}

Within the navigation profiles the following PWA features can be configured:

{{< figure src="/attachments/refguide/mobile/progressive-web-app/settings.png" alt="PWA settings"   width="350"  >}}

To be able to fully test PWA functionalities, the app needs to be deployed to the cloud. This is because the service worker is only enabled in the cloud over HTTPS.

### 2.1 Publishing as a Progressive Web App

When checked and deployed to the cloud, the app registers a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers) that is the basis for PWAs. On offline navigation profiles, this option is always enabled. In online navigation profiles, enabling this option will also give the end-user a custom page when the device has no connection. Where desired, this page can be customized by adding an *offline.html* page to the theme folder (for example, *theme/offline.html*). Note that this page should not load any other resources over the network.

### 2.2 Allowing "Add to Home Screen" Prompt

When the **Add to Home Screen** option is selected, the end-user might be actively asked to add the app to their device's home screen or desktop. The behavior can differ per browser and over time. When unselected, the app can still always be added to the home screen, but the user will not be actively asked.

### 2.3 Preloading Static Resources

Enabling this option will make the app pre-load static resources like pages, images, and widgets in the background. This can aid performance. This pre-loading happens when a user opens the app for the first time, or when the model has changed. This makes the app feel faster when navigating to new pages. It comes at a cost, however, as it consumes more bandwidth and device storage initially.

In offline profiles, this feature is automatically enabled to allow the app to function fully offline.

Note that all pages and images reachable in the navigation profile are loaded by the browser. This configuration can be undesirable from a security perspective, depending on your use case and requirements.

## 3 Previewing or Testing a PWA

PWAs can be directly viewed and tested in the browser on your machine or device. Via the **View** menu you can directly open the PWA profiles in your browser:

{{< figure src="/attachments/refguide/mobile/progressive-web-app/view-menu.png" alt="View menu" >}}

You can also open PWA profiles on your device via the **View on your device** option:

{{< figure src="/attachments/refguide/mobile/progressive-web-app/view-dialog.png" alt="View menu"   width="350"  >}}

Note that if you are running on a Mac with Parallels, make sure that port 8080 (or whichever port you have configured for your app) is forwarded and that you use your Mac IP instead of the Virtual Machine’s IP. For more information on Mendix and Parallels, see [How to Configure Parallels](/howto/general/using-mendix-studio-pro-on-a-mac/).

{{% alert color="info" %}}
When previewing or testing an offline-first PWA locally, an internet connection is always required to load the app. After initial loading, the app behaves fully offline, but it can not be reloaded without a connection. Once the app is deployed to the cloud, end-users can always load it without a connection after the first visit.
{{% /alert %}}
    
### 3.1 PWA Lighthouse Check

To check a PWA's capabilities, you can use [Lighthouse](https://developers.google.com/web/tools/lighthouse). Lighthouse is an open-source, automated tool for improving the quality of web pages. It can check if your app meets the progressive web app requirements and can offer suggestions for improving your web app.

## 4 Distributing or Sharing the PWA

As PWAs are web apps, these can be shared easily by sharing the PWA's URL.

When opening the app on a device or browser, Mendix automatically determines the navigation profile based on the user agent and the browser capabilities. If the browser does not support offline functionality, an online profile will be used instead.

Google Chrome and Microsoft Edge (Chromium edition) fully support running offline-first apps.

### 4.1 Example of Profile Selection

For example, when a Phone Web Offline profile is configured and the app is opened in the browser, the following scenarios can occur:

| Device & Browser         | Result                                                                                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop browser          | Responsive Web profile is loaded                                                                                                                               |
| Android - Chrome browser | Phone Web Offline profile is loaded                                                                                                                            |
| iOS - Any browser        | If there is a Phone Web profile, this is loaded; otherwise, the Responsive Web profile is loaded. This is because offline PWAs are not (yet) supported on iOS. |

Next to that, it is possible to force a profile by providing the profile name in the URL as a query parameter: for example `http://localhost:8080/?profile=PhoneOffline`. Possible profile values are as follows:

| Profile Name           | Value in URL      |
| ---------------------- | ----------------- |
| Responsive web         | Responsive        |
| Responsive web offline | ResponsiveOffline |
| Phone web              | Phone             |
| Phone web offline      | PhoneOffline      |
| Tablet web             | Tablet            |
| Tablet web offline     | TabletOffline     |

When forcing a specific profile on a cloud deployment, it can be necessary to first clear the browser cache.

## 5 Advanced Settings

See the sections below for information on advanced settings.

### 5.1 Web App Manifest

PWAs use a web app manifest that provides information to the browser about the application. Mendix generates one automatically based on the model. It can be customized for specific needs by changing the `manifest-overrides.webmanifest` *.json* file in the **theme** folder. The `background_color` and `theme_color` properties will often be useful to customize:

```json
{
    "background_color": "white",
    "theme_color": "#0CABF9"
}
```

For more information on the available properties in the web app manifest, read this [short introduction](https://web.dev/add-manifest/) or view [the full reference at MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest).

### 5.2 Sessions

Offline-first PWAs use long-lived sessions, which keep users logged in for a longer period even after their apps are closed. By default, users will be logged out after 7 days of inactivity. This can be customized using the *LongLivedSessionTimeout* runtime setting.

For more information on sessions and how to customize the timeout, see the [Session Duration](/refguide/tricky-custom-runtime-settings/#session-duration) section of the *Advanced Custom Settings in Mendix Runtime Reference Guide*.

## 6 Accessing Device Features

Browsers offer access to device features through APIs that can be leveraged in PWAs. These device features can be used by available widgets and nanoflow actions. It is also possible to leverage additional device features by extending the platform using [JavaScript Actions](/refguide/javascript-actions/) or [Pluggable Widgets](/howto/extensibility/pluggable-widgets/).

This table lists the most used device features and APIs, and also documents their compatibility with common browsers:

| Feature | Chrome/Edge | Firefox | Safari |
|---------|-----------|-------|------|
| [Camera](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} |
| [Payment](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} |
| [Credentials (Biometrics)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Push Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Permissions](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Foreground Detection](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} |
| [Bluetooth](https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [File Access](https://developer.mozilla.org/en-US/docs/Web/API/File) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} |
| [Geo Location](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} |
| [Battery](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}} |
| [Vibrate](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Memory](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |
| [Connection](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation) | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}} | {{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}} |

**Legend** — The symbols above correspond to the following definitions:

*  Fully compatible:

	{{< figure src="/attachments/refguide/mobile/progressive-web-app/check-mark.svg" alt="Fully compatible" >}}
	
*  Compatible only when using HTTPS protocol:

	{{< figure src="/attachments/refguide/mobile/progressive-web-app/warning.svg" alt="Compatible when using HTTPS" >}}
	
*  Not compatible:

	{{< figure src="/attachments/refguide/mobile/progressive-web-app/cross-mark.svg" alt="Not compatible" >}}

For more information on browser support for certain device features, see the third-party website [Can I Use](https://caniuse.com/).

{{% alert color="info" %}}
In order to test the features requiring HTTPS protocol, use [ngrok](https://ngrok.com/) to enable features in your localhost.
{{% /alert %}}

## 7 Deciding Between a PWA or Native Mobile App

Mendix offers options to build both native mobile apps and PWAs. Depending on your app's requirements or constraints, one or the other can be a better fit. It is also possible to have both native mobile and PWA profiles in a single app, which can run next to each other and overlap significantly.

{{% alert color="info" %}}
Important limitation: Apple does not support push notifications for PWAs on iOS.

Currently, it is not possible to create a fully offline-first PWA for iOS — adding that support is part of our 2022 roadmap.
{{% /alert %}}

Use the following diagram to decide whether to build a PWA, a native mobile app, or both:

{{< figure src="/attachments/refguide/mobile/progressive-web-app/native-or-pwa.png" alt="Native app or PWA"   width="350"  >}}

## 8 Read More

* [Native Mobile Reference Guide](/refguide/native-mobile/)
* [Offline-First Reference Guide](/refguide/offline-first/)
* [Navigation Reference Guide](/refguide/navigation/)

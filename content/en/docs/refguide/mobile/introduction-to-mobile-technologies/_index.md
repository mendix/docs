---
title: "Introduction to Mobile Technologies"
url: /refguide/mobile/introduction-to-mobile-technologies/
weight: 20
---

## Introduction

Mendix supports different technologies to build mobile applications. Besides responsive web apps, you can build native mobile apps or progress web apps. You can use pages, widgets, nanoflows, JavaScript actions, microflows, and many other familiar elements to build your app.

These different technologies (for example: responsive, native phone) can be configured in a single model using navigation profiles. Mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](/refguide/navigation/).

## Progressive Web Apps {#pwa}

Progressive web apps (PWAs) are an evolution of traditional web apps. Overall, PWAs tend to behave more like native mobile apps. One key difference, however, is that PWAs are not distributed via app stores but can be accessed directly in the browser.

Progressive web apps have several advantages over regular web applications:

* They can be installed by adding them to the home page on Android and iOS devices. This makes the app easily accessible for the user, provides more screen space to the app by hiding the browser controls, and stores the offline data separate from the browser making it more secure.
* They can be used offline. PWAs can be configured to pre-load all resources allowing them to start while the device is offline. They can also make use of offline data allowing full offline operation.
* They can make use of more native capabilities, such as push notifications.
* They can be deployed using mobile device management solutions.

Publishing PWAs is the same as publishing regular web applications with Mendix. Once the application is deployed, users can simply access the PWA by opening the application URL. Considering PWA and web apps are equally easy to publish, we recommend you use PWAs to take advantage of their additional capabilities.

For more information, see [Progressive Web App](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/).

## Native Mobile Apps {#nativemobile}

Mendix allows you to build fully native mobile apps (based on [React Native](https://facebook.github.io/react-native/)). Native mobile apps have several advantages over web-based mobile apps but they require more effort to develop and publish:

* They leverage native UI elements instead of web components in a web view. This results in high performance, smooth animations and benefits from natural interactions (like swipe gestures) provided by the mobile operating system.
* They can make use of the native navigation stack and use the beautiful page transitions supplied by the mobile operating system.
* They deeply integrate with the mobile device and can use almost everything the mobile operating system offers, such as fast barcode scanning, immersive augmented reality, and advanced connectivity options such as Bluetooth and NFC.
* They can securely and efficiently store large amounts of data, including the ability to encrypt all data stored on the mobile device.
* They can be extended with custom native functionality, for example, to integrate with the hardware scanner or special Android devices.
* They are published and distributed via app stores.

Building native mobile apps is inherently more complex than building web-based apps. They are distributed via app stores, which requires additional steps for deploying and updating the mobile app. Further, they are always offline-first, which requires additional considerations when designing the domain model.

For more information, see [Native Mobile](/refguide/mobile/introduction-to-mobile-technologies/native-mobile/).

## Deciding Between a PWA or Native Mobile App

Mendix offers building native mobile apps and PWAs, enabling companies to choose the right technology for the right use case. Depending on your app's requirements or constraints, one or the other can be a better fit. It is also possible to have both native mobile and PWA profiles in a single app, running next to each other.

In general, Mendix recommends building a PWA for your mobile app project. PWAs are easier to build and deploy than native mobile apps, and in many cases, companies can achieve everything needed with them. However, there can be also good reasons to build a native mobile app instead of a PWA. Consult the following list to help decide between the two technologies:

1. **User Experience**: If providing the best possible user experience is key for your mobile app, for example when targeting consumers in a public app, then you should build a native mobile app. The native UI elements, page transitions, animations, and gestures of a native mobile app allow you to build superior experiences that are more polished and run smoother than web-based applications.

1. **App Store Publishing**: The Apple AppStore and Google Play Store serve as distribution platforms for millions of apps. If your app should also be published via these stores, you should build a native mobile app. Mendix PWAs cannot be published via these stores without additional steps and third-party solutions. Note that publishing your app via these stores can be complex while providing only limited benefit especially for apps that are primarily used internally. 

1. **Deep Device Integrations**: PWAs can access a multitude of device capabilities via Web APIs, including the camera, GPS, and push notifications (see [Progressive Web App](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#accessing-device-features) for a comprehensive list). However, not everything is supported. If your app requires a capability that is not supported via Web APIs or needs to execute custom native code, you should build a native mobile app.

1. **Offline Data**: PWAs also allow offline-first operation. However, the size of the database is limited and cannot be stored securely. If your app requires storing large amounts of data reliably or requires that offline data is encrypted, build a native mobile app.

1. **Developer Experience**: If most of your developers and designers are experienced in web technologies (and you have no developers familiar with building and publishing native mobile apps), you should build a PWA. Training your team to learn new native technologies while simultaneously developing apps can delay application production.

If you decide to build a native mobile app after considering these requirements, please consult our documentation on [Building Efficient Mobile Apps](/refguide/mobile/building-efficient-mobile-apps/) and [Building, Testing, and Distributing Apps](/refguide/mobile/distributing-mobile-apps/).

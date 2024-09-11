---
title: "Introduction to Mobile Technologies"
url: /refguide/mobile/introduction-to-mobile-technologies/
weight: 20
---

## Introduction

Mendix supports different technologies to build mobile applications. Besides responsive web apps, you can build native mobile apps or progress web apps. You can use pages, widgets, nanoflows, JavaScript actions, microflows, and many other familiar elements to build your app.

These different technologies (for example, responsive, native phone) can be configured in a single model using navigation profiles. Mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](/refguide/navigation/).

## Native Mobile Apps {#nativemobile}

Studio Pro makes it is possible to build fully native mobile apps. Native mobile apps do not render inside a web view, but use native UI elements instead. This results in fast performance, smooth animations, natural interaction patterns (like swipe gestures), and improved access to all native device capabilities.  To make such responsive native mobile apps, Mendix leverages the popular open-source framework [React Native](https://facebook.github.io/react-native/).

For more information, see [Native Mobile](/refguide/mobile/introduction-to-mobile-technologies/native-mobile/).

## Progressive Web Apps {#pwa}

Progressive web apps (PWAs) are an evolution of traditional web apps. Overall, PWAs tend to behave more like native mobile apps. One key difference, however, is that PWAs do not need to be distributed via an app store but can be accessed directly via the browser.

Progressive web apps have three main characteristics:

* **Installable** – PWAs let you add your app to your user’s home screen and start a full screen app. This makes PWAs feel more fully-capable native apps.
* **Reliable** – Using service workers, PWAs can work offline or partially offline. Mendix PWAs can work partially offline (resources like styling, pages, and images are cached) or fully offline (like native mobile apps).
* **Capable** – PWAs can leverage several device capabilities like the camera and location, and can offer support for web push notifications. Note that support for features depend on which browser is used.

For more information, see [Progressive Web App](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/).

## Deciding Between a PWA or Native Mobile App

Mendix offers options to build both native mobile apps and PWAs. Depending on your app's requirements or constraints, one or the other can be a better fit. It is also possible to have both native mobile and PWA profiles in a single app, which can run next to each other and overlap significantly.

{{% alert color="warning" %}}
PWAs have the following limitation:

* Offline data is not supported for PWAs on iOS
{{% /alert %}}

Use the following diagram to decide whether to build a PWA, a native mobile app, or both:

{{< figure src="/attachments/refguide/mobile/progressive-web-app/native-or-pwa.png" alt="Native app or PWA"   width="350"  class="no-border" >}}

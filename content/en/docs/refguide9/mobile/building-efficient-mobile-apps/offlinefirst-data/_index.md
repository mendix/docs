---
title: "Offline-First Data"
url: /refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/
weight: 20
no_list: false
description_list: true 
aliases:
    - /refguide9/offline-first/
    - /refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/
---

## Introduction

The Mendix platform offers support to build fully offline-first applications, whether it is a native mobile app or a progressive web app.

Offline-first applications work regardless of the connection to provide a continuous experience. Pages and logic interact with an offline database on the device, and the client synchronizes the data with the server. Working against local database results in a snappier UI, increased reliability, and improved device battery life. Please note that offline-first apps need a network connection for several operations, such as when starting the app for the first time or when a user attempts to log in.

{{% alert color="info" %}}
It is essential to understand that offline-first is an architectural concept and not an approach based on the device's network state. Offline-first apps do not rely on a connection. Still, they can use network connections (for example, you can call microflows, use a Google Maps widget, or use push notifications).
{{% /alert %}}

Mendix supports building offline-first applications for [native mobile](/refguide9/native-mobile/) and [progressive web apps](/refguide9/mobile/introduction-to-mobile-technologies/progressive-web-app/). Both native and progressive web apps (PWAs) share the same core, giving them the same offline-first capabilities. Native mobile apps are always offline-first, but for progressive web apps this is optional. You can configure your PWA to be offline-first by adding an offline-first PWA navigation profile to your app. For more information, see [Progressive Web Apps](/refguide9/mobile/introduction-to-mobile-technologies/progressive-web-app/).

## Synchronization

Synchronization is the process of copying data and files from the app's server to the device and updating the server with the changes made on the local device. The local database is populated when the app starts for the first time. After this initial synchronization, data will remain available in the app so that it can work without an internet connection. You can model when and how to perform the subsequent synchronizations. In some cases, the Mendix Client may perform a synchronization automatically. Designing an efficient synchronization strategy is crucial for a high-performance app and a smooth UX. For more information, see the [Synchronization Guide](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/).

## Modeling Offline-First Apps

You can use the same concepts (domain model, pages, microflows, and more) and editors for modeling web apps to model an offline-first app. However, offline-first apps are fundamentally different than web apps. Mendix Studio Pro performs validations to ensure your app follows an offline-first approach and works even when there is no connection.

### Local Database

The key difference of offline-first apps is that they work with a local database instead of the server database. This means you need to synchronize the objects your app needs to the offline client's local database. However, synchronizing too many objects may result in performance issues. 

Changes made by the user are stored in this offline-first database, too. This means such changes will not exist to other users until the changes are synchronized with the server. When synchronizing the changes made in an app to the server database, there are several aspects to consider for developer teams. For example, the same object may have been edited or removed by a different user, or may no longer be accessible due to access rules defined in the app's model. Agree on workflows at the start of a development project to keep development running smoothly.

### Backwards-Compatibility

Another important aspect of developing offline-first apps is backwards-compatibility. Typically when you deploy a new version of a web app to the cloud, all users immediately have access to the latest model. However, that is not the case with offline-first apps. Some parts of your app model are distributed as part of the native mobile app package, such as pages, nanoflows and JavaScript actions. This means even if you change and deploy new versions of these parts, your users do not have access to the latest version until they update their native mobile apps through an OTA package or an online app store such as Google Play or App Store.

Imagine that you have deployed the first version of your native mobile app, your users have downloaded it, and now they are using it. At this point you should be thoughtful of the changes you introduce to the model. For example, assume you rename an entity and deploy it to the Mendix Cloud. The local databases in your users' devices will still be using the old entity name. This may cause synchronization errors if your users attempt to synchronize a new object of the entity you renamed, because the server no longer has an entity with the old name. Even after your users update the apps on their devices, there may be data created using the old model domain that needs to be synchronized with the server. Issues like this are why you need to ensure that your app's model changes are backward-compatible.

A similar issue may occur regarding changes to other app elements, including microflows and constants available to the client. For example, if your new deployment renames a microflow or modifies its parameters, users who have not updated their apps will be working with the previous model of the app where it references the microflow with the old name. 

For more information on offline-first app design, see [Offline Best Practices](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/).

## Distributing Mobile Apps 

When you model a web app and deploy it to production, all users immediately have access to it. However, this is often not the case with offline-first apps. The apps installed on your users' devices do not immediately update (especially true for native mobile apps). Typically, you create and distribute a new release of your app in the Google Play store and Apple App Store, which may take some time. Alternatively, Mendix provides an over-the-air (OTA) update mechanism to update your apps without going through the release process. For more information, see [Updating Native Apps](/refguide9/mobile/distributing-mobile-apps/overtheair-updates/).

For information on safely updating your offline-first apps, see [Building, Testing, and Distributing Apps](/refguide9/mobile/distributing-mobile-apps/).

## Session Management 

Typically, when a user visits or logs into a web app, the Mendix Runtime creates a session. The Mendix Runtime keeps the session alive as long as the user works in the app. The session expires after a certain amount of inactivity determined by the time of the last request to the server.

Session management in offline-first apps uses the same system mentioned above, but this introduces some challenges. Offline-first apps perform few requests to Mendix Runtime, because these apps work mostly with the local database. This causes the session on the runtime to expire while the user is still using the app. Mendix has employed solutions that differ per app type (native or PWA) to overcome this situation. 

## Documents in This Category

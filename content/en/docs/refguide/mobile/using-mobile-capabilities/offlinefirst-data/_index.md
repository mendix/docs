---
title: Offline-First Data
url: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/
parent: /refguide/mobile/using-mobile-capabilities/
weight: 10
aliases:
    - /refguide/offline-first/
---

The Mendix platform offers support to build fully offline-first applications, whether it is a native mobile app or a progressive web app.

## 1 Introduction

Offline-first applications work regardless of the connection to provide a continuous experience. Pages and logic interact with an offline database on the device, and the client synchronizes the data with the server. Working against local database results in a snappier UI, increased reliability, and improved device battery life. Please note that offline-first apps need a network connection for several operations, such as when starting the app for the first time or when a user attempts to log in.

{{% alert color="info" %}}
It is essential to understand that offline-first is an architectural concept and not an approach based on the device's network state. Offline-first apps do not rely on a connection. Still, they can use network connections (for example, you can call microflows, use a Google Maps widget, or use push notifications).
{{% /alert %}}

Mendix supports building offline-first applications for [native mobile](/refguide/native-mobile/) and [progressive web apps](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/). Both native and progressive web apps share the same core, giving them the same offline-first capabilities. Native mobile apps are always offline-first, but for progressive web apps, it depends on the navigation profile that is configured.

## 2 Synchronization

Synchronization is the process of copying data and files from the app's server to the device and updating the server with the changes made on the local device. The local database is populated when the app starts for the first time. After this initial synchronization, data will remain available in the app so that it can work without an internet connection. You can model when and how to perform the subsequent synchronizations. In some cases, the Mendix Client may perform a synchronization automatically. Designing an efficient synchronization strategy is crucial for a high-performance app and a smooth UX. For more information, see the [Synchronization Guide](/synchronization).

## 3 Modelling Offline-First Apps

You can use the same model concepts (domain model, pages, microflows, and more) and editors for modeling web applications to model an offline-first application. However, offline-first apps are fundamentally different compared to web apps. Mendix Studio Pro performs validations to ensure your app follows an offline-first approach and works even when there is no connection.

For more information on offline-first app design, see [Offline Best Practices](best-practices).

## 4 Distributing Offline-First Apps 

When you model a web app and deploy it to production, all users immediately have access to it. However, this is often not the case with offline-first apps. The apps installed on your users' devices do not immediately update (especially true for native mobile apps). Typically, you create and distribute a new release of your app in the Google Play store and Apple App Store, which may take some time. Alternatively, Mendix provides an over-the-air (OTA) update mechanism to update your apps without going through the release process. For more information, see [Over the Air Updates](/refguide/mobile/distributing-mobile-apps/overtheair-updates/).

In both cases, your users may keep working with the previous app models until they receive an update. Even after your users update the apps on their devices, there may be data created using the old model domain that needs to be synchronized with the server. That is why you need to ensure that your app's model changes are backward-compatible.

Imagine that you have deployed the first version of your native mobile app, your users have downloaded it, and now they are using it. At this point you should be thoughtful of the changes you introduce to the model. Assume you rename an entity and deploy it to the Mendix Cloud. The local databases in your users' devices will still be using the old entity name. This may cause synchronization errors if your users attempt to synchronize a new object of the entity you renamed, because the server no longer has an entity with the old name.

A similar issue may occur regarding changes to other app elements, including microflows and constants available to the client.

For information on safely updating your offline-first apps, see [Distributing Mobile Apps](/refguide/mobile/distributing-mobile-apps/).

## 5 Session Management 

Typically, when a user visits or logs into a web app, the Mendix Runtime creates a session. The Mendix Runtime keeps the session alive as long as the user works in the app. The session expires after a certain amount of inactivity determined by the time of the last request to the server.

Session management in offline-first apps uses the same system mentioned above, but this introduces some challenges. Offline-first apps perform few requests to Mendix Runtime, because these apps work mostly with the local database. This causes the session on the runtime to expire while the user is still using the app. Mendix has employed solutions that differ per app type (native or PWA) to overcome this situation. To learn more about how Mendix handles sessions for offline-first users, see [Session Management](refguide/mobile/offlinefirst-data/session-management).

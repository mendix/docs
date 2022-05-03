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

## Synchronization

Synchronization is the process of copying data and files from the app's server to the device and updating the server with the changes made on the local device. The local database is populated when the app starts for the first time. After this initial synchronization, data will remain available in the app so that it can work without an internet connection. You can model when and how to perform the subsequent synchronizations. In some cases, the Mendix client may perform a synchronization automatically. Designing an efficient synchronization strategy is crucial for a performant app and a smooth UX. Check out the [Synchronization](/synchronization) page to learn more about it.

## Modelling offline-first applications

You can use the same model concepts (domain model, pages, microflows, etc.) and editors for modeling web applications to model an offline-first application. However, offline-first apps are fundamentally different compared to web apps. Mendix Studio Pro performs validations to ensure your app follows an offline-first approach and works even when there is no connection.

Visit [this page](best-practices) to learn more about best practices when designing offline-first apps.

## Distributing offline-first applications 

When you model a web application and deploy it to the production, all users immediately have access to it. However, this is often not the case with offline-first apps. The apps installed on your users' devices do not immediately update, especially for native mobile apps. Typically, you create and distribute a new release of your app in the Google PlayStore and AppStore, which may take some time. Alternatively, Mendix provides an Over-the-Air (OTA) update mechanism to update the apps without going through the release process. In both cases, your users may keep working with the previous application model until they receive an update. Even after your users update the app on their devices, there may be data created using the old model domain that needs to be synchronized with the server. That's why you need to ensure that your app's model changes are backward-compatible.

Imagine that you've deployed the first version of your native mobile app, and users have downloaded the app and started using it. At this point - you should be thoughtful of the changes you introduce to the model. Assume you rename an entity and deploy it to the Mendix cloud. However, the local databases in your users' devices still have the old entity name. This may cause synchronization errors if your users attempt to synchronize a new object of the entity you renamed because the server no longer has an entity with the old name.

A similar issue may occur regarding changes to other model elements, including microflows and constants available to the client.

You can find in-depth documentation about updating your offline-first apps safely here: [Distributing Mobile Apps](/refguide/mobile/distributing-mobile-apps/)

## Session management 

Typically, when a user visits or logs in to a web app, the Mendix runtime creates a session. The Mendix runtime keeps the session alive as long as the user works with the app. The session expires after a certain amount of inactivity determined by the time of the last request to the server.

Session management in offline-first apps uses the same system mentioned above, but this introduces some challenges. Offline-first apps perform few requests to Mendix runtime as the app works with the local database. This causes the session on the runtime to expire while the user is still using the app. Mendix has employed solutions that differ per application type (native or PWA) to overcome this situation. To learn more about how Mendix handles sessions for offline-first users, read the following doc: [Session Management](refguide/mobile/offlinefirst-data/session-management)


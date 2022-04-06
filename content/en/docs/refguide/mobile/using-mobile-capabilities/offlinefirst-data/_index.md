---
title: Offline-First Data
url: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/
parent: /refguide/mobile/using-mobile-capabilities/
weight: 10
aliases:
    - /refguide/offline-first/
---

The Mendix platform offers support to build fully offline-first applications, whether it is a native mobile app or a progressive web apps.

## 1 Introduction

Offline-first applications work regardless of the connection in order to provide a continuous experience. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server. This results in a snappier UI, increased reliability, and improved device battery life.

{{% alert color="info" %}}
It is important to understand that offline-first is an architectural concept and not an approach based on the network state of the device. Offline-first apps do not rely on a connection, but they can use connections (for example, you can call microflows, use a Google Maps widget, or use push notifications).
{{% /alert %}}

Mendix supports building offline-first applications for [native mobile](/refguide/native-mobile/) and [progressive web apps](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/). Both native and progressive web apps share the same core, and this gives them the same offline-first capabilities. Native mobile apps are always offline-first, but for progressive web apps, it depends on the navigation profile that is configured. The data is stored on the device in a local database, and the files are stored on the file storage of the device.

Mendix Studio Pro performs validations to make sure your app follows an offline-first approach and works even when there is no connection.

During development, the [Make It Native mobile app](/refguide/getting-the-make-it-native-app/) can be used to preview and test your Mendix app on a device. The first time your Mendix app is loaded, an internet connection will be required to create a session on the server and download the necessary data and resources. After this initial synchronization, data will remain available in the app even without an internet connection. Subsequent synchronizations will be performed when requested by the user, through application logic or after a model change.

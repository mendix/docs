---
title: "Part 6: Implement Push Notifications in Your Progressive Web App"
linktitle: "6. Push Notifications in Progressive Web App"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-pwa/
weight: 70
description: Tutorial for implementing push notifications in a progressive web app.
---

## Introduction

This guide will help you set up your progressive web app to handle push notifications.

## Initialize Firebase

Push notifications in progressive web apps require Firebase to be set up as early as possible. To do so, you need to create a custom index.html and initialize Firebase there:

1. Create a custom `index.html` in your `theme\web` folder by following [this guide](/howto/front-end/customize-styling-new/#custom-web).
1. Edit the created `index.html` file in your favorite text editor.
1. Add below text before the line `<script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>` (replace `firebaseConfig` with your configuration from [part 3](/refguide/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/#copy-pwa-config)):

    ```html
    <script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js"></script>
    <script>
    const firebaseConfig = {
      apiKey: "...",
      authDomain: "...",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "..."
    };
    firebase.initializeApp(firebaseConfig);
    </script>
    ```

1. Create the file `theme\web\firebase-messaging-sw.js` with the following content (replace `firebaseConfig` with your configuration from [part 3](/refguide/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/#copy-pwa-config)):

    ```js
    importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');
    const firebaseConfig = {
      apiKey: "...",
      authDomain: "...",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "..."
    };
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    ```

1. Back in Studio Pro, set the constant `WebPushVapidKey` found in `_USE ME/Web/` in the Push Notifications module to the public key of the Web Push certificate you created in [part 3](/refguide/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/#set-web-push).

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-implement-pwa/vapid-idwizard.png" alt="VAPID Constant"   width="400"  class="no-border" >}}

1. Add the snippet `WebRegistration_Snippet` found in `_USE ME/Web` in the Push Notifications module to your home page. It contains a button that your users must click to register for push notifications.
1. Stop the Mendix Runtime in Studio Pro if it is running and start it afterwards. Do not use **Rerun**, as that will not pick up the changes in your theme folder.

You have now successfully added a button to enable receiving push notifications for your users. Go ahead to the next section to test sending a push notification.

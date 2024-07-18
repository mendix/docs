---
title: "Part 6: Implement Push Notifications in Your Progressive Web App"
linktitle: "6. Push Notifications in Progressive Web App"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-pwa/
weight: 70
description: Tutorial for implementing push notifications in a progressive web app.
---

## 1 Introduction

This section will help you set up your progressive web app to handle push notifications.

## 2 Initialize Firebase

Push notifications in progressive web apps require firebase to be set up as early as possible. To do so, you need to create a custom index.html and initialize firebase there. Follow these steps to do so:

1. Create a custom `index.html` in your `theme\web` folder by following [this guide](/howto/front-end/customize-styling-new/#custom-web).
2. Edit the created `index.html` file in your favorite text editor.
3. Add below text before the line `<script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>` (replace `firebaseConfig` with your configuration from step 3):

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

4. Create the file `theme\web\firebase-messaging-sw.js` with the following content (replace `firebaseConfig` with your configuratiom from step 3):

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

5. Back in Studio Pro, set the constant `WebPushVapidKey` found in `_USE ME/Web/` in the Push Notifications module to the web certificate from part 3.

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-implement-pwa/vapid-idwizard.png" alt="VAPID Constant"   width="400"  class="no-border" >}}

6. Add the Snippet `WebRegistration_Snippet` found in `_USE ME/Web` in the Push Notifications module to your home page. It contains a button that your users must click to register for push notifications.
7. Stop the Mendix runtime in Studio Pro if it is running and start it afterwards. Do not use Rerun as that will not pick up the changes in your theme folder.

You have now successfully added a button to enable receiving push notifications for your users. Go ahead to the next section to test sending a push notification.

---
title: "Configure Push Notifications"
parent: "notifications"
menu_order: 56
description: Tutorial for configuring push notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction 

This step is here to configure the runtime for using push notifications towards native or hybrid apps. If you do not plan on using this you may skip this step and move forward to configuring local notifications. If that is also not what you are looking for but you want to configure web notifications click here.

After setting up the dependencies and the `Push notifications` module you just started your application. Login as the administrator user (the user you assigned the `Administrator` role). And navigate to the `Administration` page you added to the navigation.

The first time you open this page it will present you with a wizard to setup the Firebase configurations which are required to use push notifications. If you haven’t setup Firebase yet, click here.

| **File**    | **Source**   | **Usage**      |
| -------- | -------- | ------- |
| GoogleServices-Info.plist | Google Firebase | Used to push notifications to your iOS native applications.     |
| google-services.json      | Google Firebase | Used to push notifications to your Android native applications. |

Both these files are also known as the private key files. They need to be configured as part of building your native applications for the Android and iOS platforms. But also on runtime when configuring your server. This last part is done from the administration page and setup wizard.

If you did follow the instructions on the page to setup your apps for iOS and/or Android in for the server sided part.

After doing that you will be redirected to the configuration page. For more information on the configuration page click here.

Now that we have set up the backend part it is time to implement hybrid/native push notifications for your hybrid/native app. Click here for hybrid or here for native.

---
title: "Debug Native Apps (Advanced)"
parent: "native-mobile"
menu_order: 40
description: A how-to for debugging native app projects using the Make It Native app.
tags: ["native", "mobile", "debug", "Make It Native"]
---

## 1 Introduction

When changing your native app or designing a custom widget, you may need to debug your implementation. The Make It Native app exposes a developer mode which supports debugging native apps for expert developers. Using Google Chrome is recommended for this, as it starts automatically during debugging.

## 2 Debugging Your Native App

To start a debugging session, do the following:

1. Run your Mendix app project locally on your desktop.
2. Start the Make It Native app.
3. Select **Enable dev mode** in the Make It Native app.
4. Start your app project on your mobile device in Mendix Studio Pro by clicking **View** > **View in the Mendix App**.
5. With your mobile device, tap **Scan QR code**, then scan the QR code on your desktop.

When the Make It Native app finishes loading your app project, do the following:

1. Open the developer menu by using a three-finger long press.
2. Tap **Enable Remote js Debugging**.

Your mobile app project should start reloading, and a Chrome window should launch on your desktop pointing to a debugging address. Change the address in your browser's navigation bar to *localhost:8083/debugger-ui* manually and go to that page.

If Chrome launches but does not load your app, check that your app project is running in Mendix Studio Pro. If it is, click the **Stop** button, then click **Run Locally** again to restart your app. 

You should see this page:

![debug waiting](attachments/native-debug/debug-waiting.png)

If the status remains at **Waiting**, use the reload command (pictured above) to refresh your app. The **Waiting** status should change and indicate an **active** session:

![debug active](attachments/native-debug/debug-active.png)

Your browser's debugging tools should be pointing to your app project. Now, you can debug your app like you would any other web app. 

Outside of Chrome, other tools can help you debug Mendix apps (such as React Developer Tools). Regardless of which tool you use, remember that Mendix uses a different port (8083) than a default React Native installation would (8080).

## 3 Read More


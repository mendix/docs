---
title: "Deploy Your First Hybrid Mobile App"
category: "Mobile"
tags: []
---

## 1 Introduction

Mendix supports mobile web development, and it is also possible to create and publish hybrid mobile apps. A hybrid app gives you the best of both worlds: it's a web application that can be deployed using the Mendix Platform, but it runs inside a container that can be installed as a native app on your device. This container handles native capabilities like the camera and GPS, and it can even be published in the Apple App Store and Google Play. The big advantage of a hybrid mobile app is that you only need to go through the approval process once and every future update is just a new deployment of your app in the Mendix cloud.

**This how-to will teach you how to do the following:**

* Open a hybrid example app
* Install the app on your device

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the Mendix Modeler (available from the [App Store](https://appstore.home.mendix.com/link/modelers))
* Install the Mendix mobile app on you device, which makes it easy to see a hybrid application in action without the need to get it approved in the Mendix App Store (for details and download links, see [Getting the Mendix App](/refguide7/getting-the-mendix-app) in the Mendix Reference Guide)

## 3 Opening a Hybrid Example App

To open a hybrid example app, follow these steps:

1.  Open the App Store in your Desktop Modeler by clicking this icon in the upper-right toolbar:

    ![](attachments/18448692/icon.png)

2. Search for the **Company Expenses** app and click **Download**:

    ![](attachments/18448692/18581187.png)

3. Click **Run** to deploy this application to the Mendix Cloud:

    ![](attachments/18448692/18581186.png) 

    The Modeler will notify you as soon as the application is deployed.
4. Click the small arrow to open the **View App** menu and select **View Hybrid Mobile App**:

    ![](attachments/18448692/18581185.png) 

    This will open the **View Hybrid Mobile App** pop-up window:

    ![](attachments/18448692/18581184.png)

5. Open the Mendix mobile app on your device and select **Scan QR Code**:

    ![](attachments/18448692/18581190.png)

6. Scan the QR code on the screen with the Mendix mobile app:

    ![](attachments/18448692/18581189.png)

    You should see the example application running on your device:

    ![](attachments/18448692/18581188.png)

## 4 Installing the App on Your Device

If you want to install this application as a native app on your device, you can install it via iTunes or publish it to one of the mobile app stores. For details on how to achieve this, see [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores).

## 5 Related Content

* [How to Build a Simple HRM App](../tutorials/build-a-simple-hrm-app)
* [How to Debug a Hybrid Mobile Application](../monitoring-troubleshooting/debug-a-hybrid-mobile-application)

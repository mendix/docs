---
title: "Migrate Local Bundled Resources to a Deployed iOS App"
parent: "hybrid-mobile"
menu_order: 11
tags: ["mobile", "hybrid", "local", "ios", "apple"]
---

## 1 Introduction

This tutorial will teach you to migrate a local copy of your deployed cloud resources into your distributed iOS app.

## 2 Prerequisites

To begin this process, you will need to build versions of your mobile application:

1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
2. Click **Deploy** > **Mobile App**.
3. Click **Publish for Mobile App Stores**.
4. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**.

This will give you a *zip* project that you can use to customize your app according to the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/).

## 3 Getting and Using Local Resources

You need the local copy of the *resources.zip* of your deployed Mendix app, which you can find at this address: `https://{your deployed runtime url}/resources.zip`.

To successfully use the resources, you must put the *resources.zip* in your app's **www** folder:

1. Extract the contents of the *resources.zip*.
2. Navigate to the *dist* directory.
3. Extract the contents of the *zip* project found in there.
4. In the extracted contents, navigate to the *www* directory.
5. Paste the *resources.zip* into the *www* directory
6. Compress the extracted contents from step 3 with the included changes from step 5 into a new *zip* package.

## 4 Building Your Mobile App

Now that you have set up your hybrid app with the local resources, you may continue building it by following the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/).

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)

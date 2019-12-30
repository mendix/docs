---
title: "Include local bundled Resources.zip"
parent: "hybrid-mobile"
menu_order: 11
tags: ["mobile", "hybrid", "local", "ios", "apple"]
---

## 1 Introduction

If you have ever wanted to include a local copy of your deployed cloud resources into your distributed iOS app, then, this how-to is tailored just for you.

## 2 Prerequisites

To begin this process, you will need to build versions versions of your mobile application:

1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
2. Click **Deploy** > **Mobile App**.
3. Click **Publish for Mobile App Stores**.
4. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**.

This will give you a *zip* project that you can use to customize your app according to the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/).

## 3 Getting and Using local Resources

You need the local copy of the *resources.zip* of your deployed mendix app. This can be gotten by following the link `https://<insert deployed runtime url>/resources.zip`.

To successfully use the resources, you must put the *resources.zip* in your app's **www** folder:

1. Extract the contents of the *zip* project gotten from the previous section.
2. Navigate to the *dist* directory.
3. Extract the contents of the *zip* project found in there.
4. Navigate into the *www* directory within extracted contents.
5. Paste the *resources.zip* within the *www* directory
6. Compress the extracted contents from *3* with the included changes from *5* into a new *zip* package.

## 4 Building Your Mobile App

Now that you have set up your hybrid app with the local resources, you may continue building it by following the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/).

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)

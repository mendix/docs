---
title: "Migrate Local Bundled Resources to a Deployed iOS App"
parent: "hybrid-mobile"
menu_order: 11
tags: ["mobile", "hybrid", "local", "ios", "apple"]
---

## 1 Introduction

This tutorial will teach you to distribute an iOS app which includes a local copy of the app's resources (which are usually created when you deploy your app). By bundling these resources with your iOS app, your app's launch time will be significantly faster for first-time users. 

## 2 Building Your App Package

todo: these instructions are sort of included [here](https://docs.mendix.com/developerportal/deploy/mobileapp#4-2-doing-it-yourself) already. Should they be here at all?

1. Deploy your app in Mendix Studio Pro.
1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
1. Click **Deploy** > **Mobile App**.
1. Click **Publish for Mobile App Stores**.
1. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**.
1. Extract the contents which you just downloaded to your preferred folder. 

You now have a *zip* project that you can use to customize your app. For more information on how to do this, see the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/).

## 3 Getting and Using Local Resources

You need the local copy of the *resources.zip* of your deployed Mendix app, which you can find at this address: `https://{your deployed runtime url}/resources.zip`.

To successfully use the resources, you will *resources.zip* in your app's **www** folder by following these steps:

1. Extract the contents of the *resources.zip* wherever you want. [todo: namecheck]
2. Navigate to the *dist* directory.
3. Extract the contents of the *zip* project found in there.
4. In the extracted contents, navigate to the *www* directory.
5. Paste the *resources.zip* into the *www* directory
6. Compress the extracted contents from step 3 with the included changes from step 5 into a new *zip* package.

## 4 Building Your Mobile App

Now that you have set up your hybrid app with the local resources, you may continue building it by following the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/). Once you build this app, your app will load more quickly the first time it is run because of the work you completed here.

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)

---
title: "Migrate Local Bundled Resources to a Deployed iOS App"
parent: "hybrid-mobile"
menu_order: 11
tags: ["mobile", "hybrid", "local", "ios", "apple"]
---

## 1 Introduction

This tutorial will teach you to distribute an iOS app which includes a local copy of the app's resources (which are usually created when you deploy your app). By bundling these resources with your iOS app, your app's launch time will be significantly faster the first time the app is run. 

## 2 Building Your App Package [todo: there is no building in this section]

Download a *zip* project which contains a customizable package of your app's settings, icons, and splash screens:

1. Deploy your app in Mendix Studio Pro.
1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
1. Click **Deploy** > **Mobile App**.
1. Click **Publish for Mobile App Stores**.
1. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**.
1. Extract the contents which you just downloaded to your preferred folder. 

You now have a *zip* project that you can use to customize your app. [todo: must they cusomize their app right here?]For more information on how to do this, see the [Customizing Your App](https://github.com/mendix/hybrid-app-template#customizing-your-app) section of the *Hybrid App Template Documentation*.

## 3 Getting and Using Local Resources [todo: do they use local resources in this step?]

[todo: you need a sentence here like "In order to X, you need a local copy of your app's *resources.zip* file.]You need the local copy of your deployed app's *resources.zip* file. To get it, go to this address in a web browser: `https://{your deployed runtime url}/resources.zip`. The *resources.zip* file will download automatically.

To successfully use the resources, put *resources.zip* in your app's **www** folder by following these steps:

1. Extract the contents of the *resources.zip* wherever you want.
1. Navigate to that folder's *dist* directory.
1. Extract the contents of the *zip* project found in there.
1. In those extracted contents, navigate to the *www* directory.
1. Paste the *resources.zip* into the *www* directory. [todo: cut and paste or copy and paste?]
1. Compress the extracted contents from step 3 with the included changes from step 5 into a new *zip* package.

## 4 Building Your Mobile App

Now that you have set up your hybrid app with the local resources, you may continue building it by following the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/). Once you build this app, your app will load more quickly the first time it is run because of the work you completed here.

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)

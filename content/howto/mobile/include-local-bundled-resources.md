---
title: "Bundle Your iOS App Resources"
parent: "hybrid-mobile"
menu_order: 11
tags: ["mobile", "hybrid", "local", "ios", "apple"]
---

## 1 Introduction

This tutorial will teach you to distribute an iOS app which includes a local copy of the app's resources (which are usually created when you deploy your app). By bundling these resources with your iOS app, your app's launch time will be significantly faster the first time the app is run.

## 2 Getting Your App Package 

Download a *zip* project which contains a customizable package of your app's settings, icons, and splash screens (for more information on customization possibilities, see the [Customizing Your App](https://github.com/mendix/hybrid-app-template#customizing-your-app) section of the *Hybrid App Template Documentation*):

1. Deploy your app in Mendix Studio Pro.
1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
1. Click **Deploy** > **Mobile App**.
1. Click **Publish for Mobile App Stores**.
1. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**.
1. Extract the *zip* package you just downloaded to your preferred folder. This is your app's template.

## 3 Downloading Deployed Resources to Update Your Local App Template

Now that you have your app's template, add your deployed resources into it and compress it again into a *zip* package:

1. Navigate inside your app template's *dist* folder.
1. Extract the contents of the *zip* package found there. 
1. In those extracted contents, navigate to the *www* folder.
1. Open a web browser and go to `https://{your deployed runtime url}/resources.zip`. This will download your app's *resources.zip* package automatically.
1. Copy and paste *resources.zip* into the *www* folder.
1. Navigate one level higher than your **www** folder.
1. Compress the contents of this folder into a new *zip* package.

## 4 Building Your Mobile App

Now that you have set up your hybrid app with the local resources, upload your new *zip* package to [PhoneGap](https://build.phonegap.com/) and build your app.

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)

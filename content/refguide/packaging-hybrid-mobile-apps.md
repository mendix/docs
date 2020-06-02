---
title: "Packaging Hybrid Mobile Apps"
parent: "hybrid-mobile"
tags: ["studio pro"]
---

A Mendix hybrid application is a hybrid of a web and native app. If you want to publish your hybrid app on the Apple App Store or Google Play, you have to wrap your app in a native shell. We use [PhoneGap](http://phonegap.com/) to make hybrid apps. PhoneGap creates a native wrapper around a web application and provides access to native functions through a Javascript API. 

Once you are ready to distribute your app to test users or publish it on an app store, you need to package your app into a native mobile app. PhoneGap offers tooling to do this yourself, but you will need to install and configure several pieces of software. Furthermore, when building iOS apps, PhoneGap requires you to use a Mac. The easier alternative is to let PhoneGap build the packaging for you.  

We have made this second option even easier for users deploying their apps to the Mendix Cloud. For instructions on how to do this, see the [Publish for Mobile App Stores](/developerportal/deploy/mobileapp#publish) section in *Mobile App*.

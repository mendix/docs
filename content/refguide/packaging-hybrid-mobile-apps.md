---
title: "Packaging Hybrid Mobile Apps"
category: "Mobile Development"
---


If you want to publish your application on the Apple App Store or Google Play, you have to wrap your app in a native shell. This type of app is called a 'hybrid' app because it is a hybrid of a web and native app. We use [PhoneGap](http://phonegap.com/) to make hybrid apps. PhoneGap creates a native wrapper around a web application and provides access to native functions through a Javascript API. 

Once you are ready to distribute your app to test users or publish it on an app store, you need to package your app into a native app. PhoneGap offers tooling to do this yourself, but you will need to install and configure several pieces of software. Furthermore, when building iOS apps PhoneGap requires you to use a Mac. The easier alternative is to let PhoneGap build the packaging for you.  

We have made this second option even easier for our users deploying their apps to the Mendix Cloud. Once you have deployed your app to the Mendix Cloud, visit the **Publish** tab in the [Development Portal](https://sprintr.home.mendix.com/). There, choose **Publish for Mobile App Stores**.
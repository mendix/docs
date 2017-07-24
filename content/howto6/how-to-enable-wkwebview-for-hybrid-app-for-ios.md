---
title: "How To Enable WKWebView for Hybrid Apps on iOS"
category: "Mobile"
tags: []
---

## 1 Introduction

The hybrid app on iOS uses a bare bones browser called a webview. On iOS there are two webviews
available: the webview the Safari browser is using under the hood, called WKWebView, and another,
older webview called UIWebView, is used by the hybrid app. The WKWebview is the latest and greatest
webview, with better performance, a better memory footprint, and less browser bugs.

You can use this awesome webview in your hybrid app as well, and this how-to will tell you how to
accomplish that.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You have a Mendix App with mobile support and Mendix version 6.10 or higher running in the Mendix Cloud, either in a Free App or on a licensed cloud node.
* You have an account for Adobe PhoneGap Build. You can sign up for an account at [https://build.phonegap.com/plan](https://build.phonegap.com/plans).

## 3 Building the Hybrid App Package With WKWebview Enabled

### 3.1 Download the Hybrid App Package
In this assignment you will download the PhoneGap app package so you can change its configuration later. Download the PhoneGap app package using the following steps:

1. Go the **Publish** tab in the Development Portal after deploying your app to the Mendix Cloud.
2. Click **Publish for Mobile App Stores**.
3. In the screen that opens, click **Publish for Mobile App Stores** again.
4. Select **Do it yourself** and click Download PhoneGap Build Package. This downloads a zip file that contains the Hybrid app package.

### 3.2 Change the Hybrid App Package Configuration
Change the configuration so that iOS uses the new and shiny WKWebView by following these steps:

1. **Extract** the downloaded archive so you can change the configuration file.
2. Open `config.xml` in your favorite editor.
3. Add the following code directly after the `phonegap-version` code:

    {% highlight xml %}
    <feature name="CDVWKWebViewEngine">
        <param name="ios-package" value="CDVWKWebViewEngine" />
    </feature>

    <preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />{% endhighlight %}

4. Add the extra plugin by adding the following code below the other `gap:plugin` tags:

    {% highlight xml %}
    <gap:plugin name="cordova-plugin-wkwebview-engine-nextgen" source="npm" version="1.0.1" />{% endhighlight %}

You now need to create an archive with these changes by following these steps:
1. Select all the files and directories you extracted.
2. Right click the selection and select **Send to compressed folder**. This will create a new archive file that is ready for PhoneGap Build.

### 3.3 Building the Hybrid App
Build the app by following these steps:
1. Log in to PhoneGap Build[https://build.phonegap.com/](https://build.phonegap.com/).
2. Upload the archive you created in the previous section.

This will trigger a build for the Hybrid app, so sit back and relax while your app is being created. When the build is done you can download the new and shiny iOS ipa file, where the awesome WKWebView is enabled!

## 4 Related Content
* [How To Enable WKWebView for Hybrid Apps on iOS](building-a-mendix-hybrid-mobile-app-for-windows-phone)
* [How to Deploy Your First Hybrid Mobile App](deploy-your-first-hybrid-mobile-app)
* [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
* [How to Debug a Hybrid Mobile Application](debug-a-hybrid-mobile-application)
* [Push Notifications](push-notifications)

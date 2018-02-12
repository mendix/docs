---
title: "Show the Feedback Widget on iOS"
category: "Mobile"
description: "How to configure ios security settings to render the feedback widget's content"
tags: ["Mobile", "feedback", "widget", "ios"]
---

## 1 Introduction

When you first fire up a Mendix hybrid mobile app for iOS, the feedback button doesn't work, thanks to a security policy on iOS whereby the application is only allowed to make requests and load content from `file:///` urls. The content in the feedback widget is hosted at `https://sprintr.home.mendix.com` so it doesn't work 

**This how-to will teach you how to do the following:**

* Configure your hybrid app to allow access to the Sprintr feedback portal in your iOS hybrid app.

## 2 Prerequisites

* Ensure that you have access to the Sprintr portal and the **Custom Phonegap/Cordova configuration** section on the **Mobile App** page.

> Alternatively you can make this change directly in the **config.xml** file, if you have it handy.

## 3 How To

To make the feedback button work as it should, you need only to add two lines to your phonegap **config.xml** file inside the `<widget>` element:

```xml
<!-- Don't block any requests -->
<access origin="*" />
<!-- Allow links to sprintr.home.mendix.com -->
<allow-navigation href="https://sprintr.home.mendix.com/*" />
```

Now build your appliaction and you will see a correctly rendered feedback widget! 

For more information on the Cordova Whitelist plugin, see the documentation [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/)

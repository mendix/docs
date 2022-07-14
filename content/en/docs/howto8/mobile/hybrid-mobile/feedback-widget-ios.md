---
title: "Configure the Mendix Feedback Widget for iOS"
url: /howto8/mobile/feedback-widget-ios/
weight: 20
description: "How to configure ios security settings to render the feedback widget's content"
tags: ["mobile", "feedback", "widget", "ios"]
---

## 1 Introduction

When you first start a Mendix hybrid mobile app for iOS, the feedback button from the [Mendix Feedback](/appstore/widgets/mendix-feedback/) widget will not work. This is due to an iOS security policy whereby the application is only allowed to make requests and load content from `file:///` URLs. Because the content in the feedback widget is hosted at `https://sprintr.home.mendix.com`, the widget will not work 

This how-to will teach you how to do the following:

* Configure your iOS hybrid mobile app to allow access to the Developer Portal [feedback management](/developerportal/collaborate/feedback/) functionality

## 2 Prerequisites

* Ensure that you have access to the Developer Portal and the **Custom Cordova configuration** section on the **Mobile App** page (accessible via **DEPLOY**)
* Alternatively, you can make this change directly in the *config.xml* file, if you have that available

## 3 Extending the config.xml File

To make the feedback button work as it should, you need only to add two lines to your *config.xml* file inside the `<widget>` element:

```xml
<!-- Don't block any requests -->
<access origin="*" />
<!-- Allow links to sprintr.home.mendix.com -->
<allow-navigation href="https://sprintr.home.mendix.com/*" />
```

Now build your appliaction and you will see a correctly rendered feedback widget! 

For more information on the Cordova Whitelist plugin, see [cordova-plugin-whitelist](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/).

## 4 Read More

* [Feedback Management](/developerportal/collaborate/feedback/)
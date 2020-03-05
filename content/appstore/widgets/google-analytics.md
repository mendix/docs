---
title: "Google Analytics"
category: "Widgets"
description: "Describes the configuration and usage of the Google Analytics widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "google analytics", "eventtracker", "webmaster", "platform support"]
draft: true
---

## 1 Introduction

The [Google Analytics](https://appstore.home.mendix.com/link/app/105/) widget enables tracking page views and custom events with Google Analytics. If you have an e-commerce application, you can also use this widget to keep track of your transactions.

### 1.1 Typical Usage Scenario

With this widget, you can track custom events, page views, and transactions. For example, you want to track how often a product is viewed and inspect it in Google Analytics, and you want a detailed overview of all transactions.

## 2 Configuration

Insert the widget into a page, then configure the widget properties. Be sure to use a valid `UA-XXXX-XX` code in order to track traffic on your web application.

## 3 Properties

All the widgets in this package (except for [EventTrackerButton](#eventtrackerbutton)) should be placed inside an empty table row with only one cell. To avoid empty spaces, the cell is hidden from the end-user.

### 3.1 EventTracker {#eventtracker}

* **Category** – the name you supply for the group of objects you want to track
* **Action** – a string that is uniquely paired with each category, and commonly used to define the type of user interaction for the web object
* **Labe** – an optional string to provide additional dimensions to the event data
* **Value** – an integer you can use to provide numerical data about the user event

For more information, see [Event Tracking - Web Tracking (ga.js)](http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html).

### 3.2 EventTrackerButton {#eventtrackerbutton}

This widget combines a built-in microflow trigger with the [EventTracker](#eventtracker). Inspect the widget properties for details.

### 3.3 MasterPageTracker

Typically, you want to start with the MasterPageTracker widget by adding it to your master layout. By doing this, all the pages in your Mendix app will be tracked by Google Analytics. You will need to provide the widget with the tracker ID (`UA-XXX-XX`) that you should receive when configuring your Google Analytics account. The MasterPageTracker widget will use the combination of module name and page name in Mendix as the URL to be reported to Google Analytics (for examppe, a page in the X module that is named Y will be registered as /X/Y in Google Analytics. Note that you can also define a prefix for the URL).

By having a MasterPageTracker widget in the master layout, you do not need to define the tracker ID (`UA-XXX-XX`) in each [AdvancedPageTracker](#advancedpagetracker) or [PageTracker](#pagetracker) anymore, since they will use the one from MasterPageTracker.

{{% alert type="info" %}}
MasterPageTracker should only be used once in your Mendix application.
{{% /alert %}}

### 3.4 AdvancedPageTracker {#advancedpagetracker}

{{% alert type="info" %}}
This widget must be inside a data view.
{{% /alert %}}

* **URL** – the URL that should be shown in the Google Analytics overview
* **Title ** – the title that should be shown in the Google Analytics overview

For example, if the **Url** is */test/${name}*, then if the URL is parsed, *${name}* will be replaced by the value of the current object's attribute, which is defined in the **Data Source** tab. 

### 3.5 PageTracker {#pagetracker}

This is exactly the same as [AdvancedPageTracker](#advancedpagetracker), but without the ability to use the object's attribute value to build the **Url** or **Title**. Consequently, there is no need to have the widget inside a data view.

### 3.6 Webmaster Tools

These tools allow you to focus on the quality of your web application. For more information on what this means for your Mendix application, see [Google Search Console](https://search.google.com/search-console/about).

This widget will place a `META` verification tag inside the `html` tag so that the webmaster tools can be activated and help with SEO on Mendix applications.

---
title: "Google Analytics"
url: /appstore/widgets/google-analytics/
description: "Describes the configuration and usage of the Google Analytics widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="danger" %}}
The Google Analytics widgets set has been removed from our Marketplace. These widgets were exclusively compatible with Universal Analytics. As of July 1, 2023, Universal Analytics has been discontinued and succeeded by Google Analytics 4. For guidance on transitioning to Google Analytics 4, Mendix recommends referring to Google's official documentation. To integrate Google Analytics 4 with your Mendix applications, please use the [Google Tag](/appstore/modules/google-tag/) module.
{{% /alert %}}

## Introduction

The Google Analytics widget enables tracking page views and custom events with Google Analytics. If you have an e-commerce application, you can also use this widget to keep track of your transactions.

### Typical Usage Scenario

With this widget, you can track custom events, page views, and transactions. For example, you want to track how often a product is viewed and inspect it in Google Analytics, and you want a detailed overview of all transactions.

## Configuration

Insert the widget into a page, then configure the widget properties. Be sure to use a valid `UA-XXXX-XX` code in order to track traffic on your web application.

## Properties

All the widgets in this package (except for [EventTrackerButton](#eventtrackerbutton)) should be placed inside an empty table row with only one cell. To avoid empty spaces, the cell is hidden from the end-user.

### EventTracker {#eventtracker}

* **Category** – the name you supply for the group of objects you want to track
* **Action** – a string that is uniquely paired with each category, and commonly used to define the type of user interaction for the web object
* **Label** – an optional string to provide additional dimensions to the event data
* **Value** – an integer you can use to provide numerical data about the user event

For more information, see [Event Tracking - Web Tracking (ga.js)](https://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html).

### EventTrackerButton {#eventtrackerbutton}

This widget combines a built-in microflow trigger with the [EventTracker](#eventtracker). Inspect the widget properties for details.

### MasterPageTracker

Typically, you want to start with the MasterPageTracker widget by adding it to your primary layout. By doing this, all the pages in your Mendix app will be tracked by Google Analytics. You will need to provide the widget with the tracker ID (`UA-XXX-XX`) that you should receive when configuring your Google Analytics account. The MasterPageTracker widget will use the combination of module name and page name in Mendix as the URL to be reported to Google Analytics (for example, a page in the X module that is named Y will be registered as /X/Y in Google Analytics; note that you can also define a prefix for the URL).

By having a MasterPageTracker widget in the primary layout, you do not need to define the tracker ID (`UA-XXX-XX`) in each [AdvancedPageTracker](#advancedpagetracker) or [PageTracker](#pagetracker) anymore, since they will use the one from MasterPageTracker.

{{% alert color="info" %}}
MasterPageTracker should only be used once in your Mendix application.
{{% /alert %}}

### AdvancedPageTracker {#advancedpagetracker}

{{% alert color="info" %}}
This widget must be inside a data view.
{{% /alert %}}

* **URL** – the URL that should be shown in the Google Analytics overview
* **Title** – the title that should be shown in the Google Analytics overview

For example, if the **Url** is */test/${name}*, then if the URL is parsed, *${name}* will be replaced by the value of the current object's attribute, which is defined in the **Data Source** tab. 

### PageTracker {#pagetracker}

This is exactly the same as [AdvancedPageTracker](#advancedpagetracker), but without the ability to use the object's attribute value to build the **Url** or **Title**. Consequently, there is no need to have the widget inside a data view.

### Webmaster Tools

These tools allow you to focus on the quality of your web application. For more information on what this means for your Mendix application, see [Google Search Console](https://search.google.com/search-console/about).

This widget will place a `META` verification tag inside the `html` tag so that the webmaster tools can be activated and help with SEO on Mendix applications.

## Limitations

If you are using an advertisement blocker (such as the AdBlocker browser extension) or have configured your browser to not allow tracking, it might result in your page being broken. This is because certain advertisement blockers and tracking restrictions can block this widget's files. 

## Strict CSP Compatibility

This widget requires additional configuration to be compliant with strict content security policy (CSP). Google Analytics uses an external address to track the analytics. To make this widget work, you need to configure the CSP headers to allow resources from that domain.

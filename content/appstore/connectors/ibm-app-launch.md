---
title: "IBM App Launch"
category: "Connectors"
description: "Describes the configuration and usage of the IBM App Launch connector, which is available in the Mendix Marketplace."
tags: ["marketplace",  "marketplace component", "ibm app launch", "app launch"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert type="warning" %}}
This connector is deprecated.
{{% /alert %}}

## 1 Introduction

The [IBM App Launch](https://marketplace.mendix.com/link/component/106382/) connector enables connecting your Mendix application to [IBM App Launch](https://www.ibm.com/blogs/cloud-archive/tag/app-launch/). This service allows you to perform A/B testing, release new features, and monitor metrics for your site.

### 1.1 Typical Usage Scenario

The IBM App Launch service enables you to launch features to mobile apps at speed and measure impact by controlling the targeted audience. App owners can work with developers to define KPIs for the features, measure the impact, and make feature rollout and rollback decisions based on real-time feedback. This service also enables testing multiple variants of app features, UI elements, and messages and making decisions based on feedback.

### 1.2 Features

* Get actions
* Get variable code for feature
* Is feature-enabled
* Registering devices
* Sending metrics

## 2 Configuration

When running your application on [IBM Cloud](/developerportal/deploy/ibm-cloud) and binding the App Launch service to your app, the connector will automtically be configured. 

When running your app outside of IBM Cloud, you need to set the following constants: 

```
APP_GUID
APP_SECRET
CLIENT_SECRET
```

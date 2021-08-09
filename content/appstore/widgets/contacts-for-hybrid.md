---
title: "Contacts for Hybrid"
category: "Widgets"
description: "Describes the configuration and usage of the Contacts for Hybrid widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "contacats for hybrid", "phonegap", "native", "mobile", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This widget is deprecated.
{{% /alert %}}

## 1 Introduction

The [Contacts for Hybrid](https://marketplace.mendix.com/link/component/1473/) widget enables the native contacts functionality within your Mendix mobile application. 

## 2 Configuration

To configure this widget, follow these steps:

1. Place the widget in a data view where you want the button to be placed. Make sure this form is reachable from a mobile application.
2. On the **Button** properties tab, enter the label text to be shown on the button for **Label**.
3. On the same tab, optionally enter a class to be placed directly on the button DOM node for **Class**.
4. On the **Behavior** tab, set the widget to **Create contact** or **Retrieve contact** for **Contact type**.
5. On the **Data source** tab, set the attributes that are the mapping between your application and the mobile contact.
6. On the **Events** tab, optionally add a microflow that will be triggered once a contact has been successfully added to the phone for **Contact added success**.

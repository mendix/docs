---
title: "Bootstrap Tooltip"
url: /appstore/widgets/bootstrap-tooltip/
category: "Widgets"
description: "Describes the configuration and usage of the Bootstrap Tooltip widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "bootstrap tooltip", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
{{% alert color="warning" %}}
This widget is deprecated. For an alternative, see [Tooltip](/appstore/widgets/tooltip/).
{{% /alert %}}

## 1 Introduction

The [Bootstrap Tooltip](https://marketplace.mendix.com/link/component/1939/) widget adds a tooltip to a user-defined field that contains help text or extra information.

To see the component in the Mendix Marketplace, click here:

{{% button color="dark" href="https://marketplace.mendix.com/link/component/1939/" text="See component in Marketplace" title="See component in Marketplace" %}}

### 1.1 Typical Usage Scenario

* Add help text to an input field that is visible upon focus
* Add informative text for buttons that is visible upon hovering

### 1.2 Feature

* Based on Bootstrap's *tooltip.js*

## 2 Installation

To install, import the Bootstrap Tooltip widget into your app and add the widget on a page. Locate the widget as close to the target element as possible (preferably next to it).     

When an element has a tooltip attached to it and needs to be conditionally visible, put both the element and the tooltip together in a container and apply the visibility conditions to the container instead of the element:

{{< figure src="/attachments/appstore/widgets/bootstrap-tooltip/tooltip.png" >}}

## 3 Configuration

You can configure the properties below to determine how the widget will behave in your application.

### 3.1 Appearance Tab

* **Target element classname** – the class name of the field to which you want to attach the tooltip
* **Render HTML** – selecting **Yes** renders the tooltip content as HTML
* **Tooltip position** – the location of the tooltip relative to the field
* **Tooltip mode** – when to show the tooltip

### 3.2 Data Source Tab

* **Default text** – the text displayed when no data source microflow is defined
* **Tooltip source microflow** – the microflow that returns the text to be displayed in the tooltip

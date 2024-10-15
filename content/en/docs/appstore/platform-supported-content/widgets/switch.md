---
title: "Switch"
url: /appstore/widgets/switch/
description: "Describes the configuration and usage of the Switch widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Switch](https://marketplace.mendix.com/link/component/50324/) widget enables toggling a Boolean attribute.

## Usage

To use this widget, place it in a [data container](/refguide/data-sources/) that has a Boolean attribute.

The widget offers the following for configuration:

* A Boolean attribute to toggle on user-interaction
* An action (such as Microflow or Nanoflow) to trigger when the Switch is toggled
* A **Device style** design property with two options (`iOS` and `Android`) influencing the Switch's appearance
* A **Style** design property for brand styling, influencing the Switch's colors
* [Common properties](/refguide/common-widget-properties/)

This widget is compatible with [Atlas Core](https://marketplace.mendix.com/link/component/117187).

## Widgets Below Version 3.0.0

Features:

* Deactivate when attribute or context is read-only
* Execute a microflow when toggled
* Execute a nanoflow when toggled
* Add a label to the switch
* Display in either iOS style or Android (material design)
* Display in various bootstrap styles

To use this widget, place it in the context of an object that has a Boolean attribute.

## Read More

* [CAB.02 - Switch](/appstore/partner-solutions/ats/ht-two-cab-02-switch/)

---
title: "Events"
url: /appstore/widgets/events/
category: "Widgets"
description: "Describes the configuration and usage of the events widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "events", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Events](https://marketplace.mendix.com/link/component/224259) widget allows you to execute an **action** when a component loads or when the context changed.

For example, you can show a welcome message on page load, execute custom JavaScript (using a NF) when your data grid finished loading, or trigger a validation Microflow when an attribute changed. It also supports triggering an action with a delay or executing repeatedly with an interval timer.

### 1.1 Features

* Configurable events:
    * Component load
    * Attribute change
* Supports execution delay and repeat

## 2 Configurations

With [Events](https://marketplace.mendix.com/link/component/224259) widget, you can execute [actions](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#action) based on selected event type.

### 2.1 Events Tab {#general}

#### 2.1.1 Component load

In this section, you could configure action to be executed on when the events widget load.
The placement of this widget in design mode will be taken into consideration for load event to be triggered. \
For example:
-   placing the **Events** widget on the top of the page to triggered a page load event. 
-   you could also place the widget in a popup to trigger **action** each time the pop up loaded.

Configurations:
* Action - selected **action*** that will be executed
* Delay - timer delay to the first executed **action**. the value is in milisecond. setting it up to 0 will execute the **action** immediately.
* Repeat - Selecting *yes* will repeat the event execution based on the repeat delay timer.
    * Delay - timer interval between repeated action execution. the value is in milisecond.

#### 2.1.2 On change

In this section, you could configure action to be executed when the selected attribute changed. You could place the widget inside data view, datagrid, or any other placement to find the correct attribute that you need to listened into.

Configurations:
* Attribute - selected attribute that will be listened into. **Action** will be executed when this attribute value changed.
* Action - selected **action** that will be executed.
* Delay - timer delay to the first executed event. the value is in milisecond. setting it up to 0 will execute the action immediately

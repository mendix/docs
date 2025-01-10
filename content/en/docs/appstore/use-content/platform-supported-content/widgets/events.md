---
title: "Events"
url: /appstore/widgets/events/
description: "Describes the configuration and usage of the events widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Events](https://marketplace.mendix.com/link/component/224259) widget allows you to execute an [action](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#action) when a component loads or when the context is changed.

For example, you can show a welcome message on page load, execute custom JavaScript (using a nanoflow) when your data grid has finished loading, or trigger a validation microflow when an attribute has been changed. This widget also supports triggering an action with a delay, or executing an action repeatedly using an interval timer.

### Features

The events widget offers the following features:

* Configurable events:
    * Component load
    * Attribute change
* Supports execution delay and repetition

## Configurations

With the [Events](https://marketplace.mendix.com/link/component/224259) widget, you can execute [actions](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#action) based on the selected event type.

### Events Tab {#general}

#### Component Load

Using this property, you can configure an action to be executed when the event widget loads. The placement of this widget in design mode will be taken into consideration for load event to be triggered. 

Some common usage examples:

* Place the events widget on the top of a page to trigger a page load event. 
* Place the widget in a popup to trigger an action each time the pop up loads.

Property configurations:

* **Action** – Specifies the selected action that will be executed.
* **Delay** – Puts a timer delay on the first executed action. The value is in milliseconds. Setting it to **0** will execute the action immediately.
* **Repeat** – Selecting **Yes** will repeat the event execution based on the repeat delay timer.
    * **Delay** – Time interval between repeated action executions. The value is in milliseconds.

#### On Change

Using this property, you can configure an action to be executed when a selected attribute is changed. You can place the widget inside a data view, datagrid, or another component to find the correct attribute you want the events widget to listen to.

Property configurations:

* **Attribute** - Specifies the attribute that will be listened into. The **action** will be executed when this attribute value changed.
* **Action** - Specifies the **action** that will be executed.
* **Delay** - Adds a timer delay to the first executed event. The value is in milliseconds. Setting it to **0** will execute the action immediately.

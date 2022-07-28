---
title: "Advanced Scheduler"
url: /appstore/widgets/advanced-scheduler/
category: "Widgets"
description: "Describes the configuration and usage of the Advanced Scheduler widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Advanced Scheduler]() enables you to load events and visualize them.

{{% todo %}}Add the link to the widget page.{{% /todo %}}

## 2 Configuration

### 2.1 Domain Model

### 2.2 Configuring the Scheduler Widget

#### 2.2.1 Views Tab

* **Scheduler Start Date** – the start date of the scheduler 

* **Scheduler End Date** – the end date of the scheduler 

* **On changed time window** – sets an action that is triggered if the time window is changed

* **Views** – shows a list of views that are available
  * **New **– opens the **Edit Views Item** window where you can add a new view with the following items:

    * **ID of the view** – the ID used to define a view

    * **Name of the view** – the name of the view

    * **Default or Custom view** – selects whether to use one of the following default views or a custom view 

      * **Day**, **Week**, **Month**, **Year** – default views

      * **Custom** – custom view

        * **Unit of time** – the unit of time use for the timeline of the custom view

        * **Visible timeline** – defines how many units of time are visible in the time window

        * **On prev/next button skip** – defines how many units of time are skipped when you click the previous button (<**)** or the next button (**>**)

  * **Delete** – deletes the selected view

  * **Edit** – opens the **Edit Views Item** window where you can edit the selected view

  * **Move up** – moves up the selected view

  * **Move down** – moves down the selected view

* **Selected View** – {{% todo %}}What is this  exactly?{{% /todo %}}

* **Fixed Timeline**
  * **Yes** – If selected, you cannot change the timeline.
  * **No** – If selected, you can scroll to a date within two years before and after the current date.

#### 2.2.2 Resources Tab

This tab contains the following items:

* **Resources Datasource** – the datasource for the resources that are shown in the scheduler
* **Resource ID** – the ID of a resource
* **Resource title** – the title of the resource 
* **Resource Classname** – the classname of the resource, which can be used to do proper styling of an resource
  * If left empty, the value is set to *resource-type-default*.

* **Resource height** – the height of the resource
* **On Click** – sets an action that is triggered when the resource is clicked

#### 2.2.3 Events Tab

*  **List of Data sources** – shows a list of data sources of events
    *  **New** – opens the **Edit List of Data Sources** Item window where you can add a new event with the following settings:
        * **Overrall** tab
          * **Data source** – the data source of the event
          * **Event ID** – the ID of the event
          * **Resource ID** – the ID of the corresponding resource**Before e**
          * **vent travel time** – {{% todo %}}What is this  exactly?{{% /todo %}}
          * **Start event** – the start date of an event
          * **End event** – the end date of an event
          * **After event travel time** - {{% todo %}}What is this  exactly?{{% /todo %}}
          * **Movable** – selects a Boolean attribute to indicate whether the event can be moved around along the timeline
          * **Resizeable** – selects a Boolean attribute to indicate whether the length of the event can be resized
          * **Delete** – deletes the select data source
          * **Edit** – open the **Edit List of Data Sources** Item window where you can edit the selected data source
          * **Move up** – moves up the selected data source
          * **Move down** – moves down the selected data source
        * **UI** tab
          * **Event Title** – the title of the event
          * **Tooltip content** – the content of the tooltip of the event
          * **Classname** – the classname of the event, which can be used to do proper styling of an event
            * If left empty, the value is set to *event-type-default*.
        * **User interaction** tab
          * **On click action** – sets an action that is triggered when the event is clicked
          * **On change action** – sets an action that is triggered when the event is moved around along the timeline or its length is resized
* **Create new events**
  * **Yes**
  * **No**
*  **On create event action**
*  **Microflow**
*  **Microlow settings**
*  **Last Moved Event Id**
*  **New Resource ID**
*  **New Start Event**
* **New End Event**

#### 2.2.4 Rosters Tab

* **Datasource** – sets the data source for the roster
* **Resource ID** – sets the resource ID for the roster
* **Start date time** – the start date of the roster
* **End date time** – the end date of the roster
* **Name of the roster** – the name that is displayed in the roster
* **ClassName** – the classname of the roster, which can be used to do proper styling of a roster {{% todo %}}different from the explanation on the UI. Double check with the dev.{{% /todo %}}
  * If left empty, the value is set to *event-type-default*.

#### 2.2.5 UI Tab

* **Today button**  – changes the text shown on the **Today** button, for example, to the translation of "today" in a different language
* **Hide navigation** – selects whether to hide the navigation or not
  * **Yes** – If selected, the navigation is hidden.
  * **No** – If selected, the navigation is visible.

#### 2.2.6 Common Tab

For more information, see [Common Section](https://docs.mendix.com/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

#### 2.2.7 Appearance Tab

### 2.3 Configuring the Header Dropzone

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/header-dropzone.png" >}}

In this area, you can define what is shown above the scheduler.

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/header.png" >}}

### 2.4 Configuring the Resource Area

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/resource-area.png" >}}

In this area, you define what is shown as **Resources** in the scheduler.

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/resources.png" >}}

## 3 Example Implementation

For an example about how to implement the widget, see the example implementation.  {{% todo %}}Add the link and check the name of the example implementation.{{% /todo %}}




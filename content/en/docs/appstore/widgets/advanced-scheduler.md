---
title: "Advanced Scheduler"
url: /appstore/widgets/advanced-scheduler/
category: "Widgets"
description: "Describes the configuration and usage of the Advanced Scheduler widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Advanced Scheduler]() enables you to load resources and events and visualize them.

{{% todo %}}Add the link to the widget page.{{% /todo %}}

## 2 Configuration

### 2.1 Domain Model

### 2.2 Configuring the Scheduler Widget

#### 2.2.1 Views Tab

* **Scheduler Start Date** – This is the start date of the scheduler.
* **Scheduler End Date** – This is the end date of the scheduler{{% todo %}}Will this field be removed before the release?{{% /todo %}}  
* **On changed time window** – You can set an action that is triggered if the time window is changed.
* **Views** – You can manage the available views on the list.
  * **New** – You can add a new view with the following items:
    * **ID of the view** – This is the ID used to define a view.
  
    * **Name of the view** – This is the name of the view.
  
    * **Default or Custom view** – You can select whether you use one of the following default views or a custom view :
      * **Day** – This is a default view
      
      * **Week** – This is a default view
      
      * **Month** – This is a default view
      
      * **Year** – This is a default view
      
      * **Custom** – This is a default view
        * **Unit of time** – This is the unit of time used for the view
      
        * **Visible timeline** – You can define how many units of time are visible in the time window
      
        * **On prev/next button skip** – You can define how many units of time are skipped when you click the previous button (**<**) or the next button (**>**).
      

  * **Delete** – You can delete the selected view.

  * **Edit** – You can edit the selected view.

  * **Move up** – You can move up the selected view.
  
  * **Move down** – You can move down the selected view.
* **Selected View** – This is an attribute of an entity in your Domain Model, which is used to change the view in Mendix. {{% todo %}}What is this  exactly?{{% /todo %}}
* **Fixed Timeline**
  * **Yes** – If selected, you cannot change the timeline.
  * **No** – If selected, you can scroll to a date within two years before and after the current date.

#### 2.2.2 Resources Tab

* **Resources Datasource** – This is the datasource for the resources that are shown on the left side of the scheduler.
* **Resource ID** – This is the ID of the resource.
* **Resource title** – This is the title of the resource. {{% todo %}}Will this field be removed before the release?{{% /todo %}}
* **Resource Classname** – This is the classname of the resource, which can be used for the styling of the resource.
  * If left empty, the value is set to *resource-type-default*.
* **Resource height** – This is the height of the resource.
* **On Click** – You can set an action that is triggered when the resource is clicked.{{% todo %}}Will this field be removed before the release?{{% /todo %}}

#### 2.2.3 Events Tab

*  **List of Data sources** – You can manage the data sources of events on the list.
    *  **New** – You can add a new event with the following items:
        * **General** tab
          * **Data source** – This is the data source of the event.
          * **Event ID** – This is the ID of the event.
          * **Resource ID** – This is the ID of the corresponding resource.
          * **Before event travel time** – You can add some travel time before the event.
          * **Start event** – The is the start date of an event.
          * **End event** – This is the end date of an event.
          * **After event travel time** – You can add some travel time after the event.
          * **Movable** – You can select a Boolean attribute to indicate whether the event can be moved around along the timeline.
          * **Resizeable** – You can select a Boolean attribute to indicate whether the length of the event can be resized.
        * **UI** tab
          * **Event Title** – This is the title of the event.
          * **Tooltip content** – This is the content of the tooltip of the event.
          * **Classname** – This is the classname of the event, which can be used for the styling of an event.
            * If left empty, the value is set to *event-type-default*.
        * **User interaction** tab
          * **On click action** – You can set an action that is triggered when the event is clicked.
          * **On change action** – You can set an action that is triggered when the event is moved to a different time slot or when its length is resized.
    *  **Delete** – Yo can delete the select data source.
    *  **Edit** – You can edit the selected data source.
    *  **Move up** – You can move up the selected data source.
    *  **Move down** – You van move down the selected data source.
* **Create new events**
  * **Yes** – If selected, you can create a new event by drag and drop or double-clicking a time slot. {{% todo %}}Check if this is correct. How does this drag and drop work exactly?{{% /todo %}}
  * **No** – If selected, you cannot create a new event by drag and drop or double-clicking a time slot.
*  **On create event action** – You can set an action that is triggered when a new event is created.
*  **Last Moved Event Id** – {{% todo %}}What is this exactly?{{% /todo %}}
*  **New Resource ID** – {{% todo %}}What is this exactly?{{% /todo %}}
*  **New Start Event** – {{% todo %}}What is this exactly?{{% /todo %}}
* **New End Event** – {{% todo %}}What is this exactly?{{% /todo %}}

#### 2.2.4 Rosters Tab

{{% alert color="info" %}}The roster has the light yellow background in the scheduler.{{% /alert %}}

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/roster.png" >}}

* **Datasource** – This is the data source for the roster.
* **Resource ID** – This is the resource ID for the roster.
* **Start date time** – This is the start date of the roster.
* **End date time** – This is the end date of the roster.
* **Name of the roster** – This is name that is displayed in the roster.
* **ClassName** – the classname of the roster, which can be used for the styling of a roster {{% todo %}}On the UI, it says "proper styling of an event" – is this correct?{{% /todo %}}
  * If left empty, the value is set to *event-type-default*.

#### 2.2.5 UI Tab

* **Today button**  – You can change the text shown on the **Today** button, for example, to the translation of "today" in a different language.
* **Hide navigation**
  * **Yes** – If selected, the navigation, including the previous button (**<**), the next button (**>**), the **Today** button, and the view selector, is hidden. You can create your own Mendix buttons.
  * **No** – If selected, the navigation, including the previous button (**<**), the next button (**>**), the **Today** button, and the view selector, is visible.

#### 2.2.6 Common Tab

For more information, see [Common Section](https://docs.mendix.com/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

#### 2.2.7 Appearance Tab





### 2.3 Configuring the Header Dropzone

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/header-dropzone.png" >}}

In this area, you can define your own header, which is shown above the scheduler.

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/header.png" >}}

### 2.4 Configuring the Resource Area

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/resource-area.png" >}}

In this area, you can define what is shown as **Resources** in the scheduler.

{{< figure src="/attachments/appstore/widgets/advanced-scheduler/resources.png" >}}

## 3 Example Implementation

For an example about how to implement the widget, see the example implementation.  {{% todo %}}Add the link and check the name of the example implementation.{{% /todo %}}




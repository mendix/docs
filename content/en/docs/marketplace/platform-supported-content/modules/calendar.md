---
title: "Calendar"
url: /appstore/modules/calendar-module/
description: "Describes the configuration and usage of the Calendar module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Calendar](https://marketplace.mendix.com/link/component/245304) module can be used to display and manage calendar events.

### Features

* Add and edit calendar events.
* Drag and drop calendar events.
* Change calendar event colors.
* Retrieve events based on selected date ranges.
* Show events in day, week, work week, month, agenda, and year views.
* Customize the items in the calendar toolbar.

## Basic Configuration

The calendar module provides default calendar building blocks. Drag the calendar building blocks from the toolbox into the page editor. This provides basic configuration using the **CalendarEvent** entity within the Calendar module.

### Domain model

The calendar module provides default **CalendarEvent** entity in the domain model.

### General Tab

#### Data Source

* **Events** – Determines the retrieval of calendar events via context, database, microflow, nanoflow, or association.
* **Title type** – Determines how the calendar event's title is set:

    * **Attribute** – Use the **Title attribute**. This is the default.
    * **Expression** – Use the **Title expression**.

* **Title attribute** – The String attribute containing the calendar event's title. This is available when **Title type** is set to **Attribute**.
* **Title expression** – An expression that results in the calendar event's title. This is available when **Title type** is set to **Expression**.
* **All day attribute** – The Boolean attribute indicating if a calendar event takes a full day.
* **Start attribute** – The DateTime attribute indicating the start of a calendar event.
* **End attribute** – The DateTime attribute indicating the end of a calendar event.
* **Color attribute** – The String or Enumeration attribute affecting the background of a calendar event.    
    All HTML supported color formats are supported, for example "red", "#FF0000", "rgb(250,10,20)" or "rgba(10,10,10, 0.5)".

### View Tab

* **Editable** – An expression that determines if users can select empty time slots to create events and resize events. The default value is **true**.
* **View** – Determines the calendar's views:
    
    * **Standard** – Day, week, month, and year view only. This is the default.
    * **Custom** – Views configured as toolbar items on the **Custom view** tab.

* **Initial selected view** – Determines the view when the calendar becomes visible for the first time.    
    When **View** is set to **Standard**, the available options are:
    
    * **Day**
    * **Week**
    * **Month**. This is the default.
    * **Year**

    When **View** is set to **Custom**, the available options are:

    * **Day**
    * **Week**
    * **Month**. This is the default.
    * **Work week**
    * **Agenda**
    * **Year**

* **Year view: day click opens** – Determines the view that opens when the user clicks a day in the year view. The default value is **Day**.    
    When **View** is set to **Standard**, the available options are **Day**, **Week**, and **Month**.    
    When **View** is set to **Custom**, the available options are **Day**, **Week**, **Work week**, **Month**, and **Agenda**. The selected view must also be added as a toolbar item on the **Custom view** tab. Otherwise, clicking a day in the year view does nothing.
* **Show event date range** – Display the start and end date of the event.
* **Time format** – Set the format in which the time is displayed. The default format is "hh:mm a". This is available when **View** is set to **Standard**.
* **Top bar date format** – Set the format of the title in the toolbar across views. If empty, a locale-aware format is used. This is available when **View** is set to **Standard**.
* **Day start hour** – The hour when the day starts. Choose a value between 0 and 23. The default value is **0**.
* **Day end hour** – The hour when the day ends. Choose a value between 1 and 24. The default value is **24**.
* **Show all events** – If set to **Yes**, the calendar displays all events in a day without "more" links. The default value is **Yes**.
* **Show multi-day times** – If set to **Yes**, the week and day views show the start and end times of events that span multiple days, instead of placing these events in the all-day row. The default value is **No**.
* **Step** – The selectable time increments, in minutes, in the week and day views. The default value is **30**.
* **Time slots** – The number of slots per section in the time grid views. Use this together with **Step** to change the default of one-hour sections with 30-minute slots. The default value is **1**.
* **Start date attribute** – The DateTime attribute used on initial load.

### Custom View Tab

The settings on this tab are available when **View** is set to **Custom**.

#### Toolbar

* **Custom top bar views** – Configure the items displayed in the calendar toolbar, and the views that are available. If no view items are configured, the calendar shows the day, week, and month views.

Each toolbar item has the following properties:

* **Item** – The item to render in the toolbar. The default value is **Month view button**. The available options are:

    * **Day view button**
    * **Month view button**
    * **Agenda view button**
    * **Week view button**
    * **Work week view button** – Shows the custom work week view. Visible days can be configured in the **Custom view visible days** section.
    * **Year view button**
    * **Title date text**
    * **Previous button**
    * **Next button**
    * **Today button**

* **Position** – The alignment of the item within the toolbar: **Left** (default), **Center**, or **Right**.
* **Caption** – Optional text for the button. If empty, a default localized label is used.
* **Render mode** – Determines whether the item is rendered as a **Button** (default) or a **Link**.
* **Button tooltip** – The tooltip for the button.
* **Button style** – The style of the button: **Default** (default), **Primary**, **Success**, **Info**, **Warning**, or **Danger**.

The **Caption**, **Render mode**, **Button tooltip**, and **Button style** properties are not available for the **Title date text** item.

For view button items, the following format and text properties are also available, depending on the view:

* **Header day format** – The format of the dates in the header above the view. This is available for the day, week, work week, month, and agenda view buttons.
* **Cell date format** – The date shown in the month cells. This is available for the month view button.
* **Time gutter format** – The time shown as the first column in the view. This is available for the day, week, work week, and agenda view buttons.
* **Date gutter format** – The date shown as the first column in the agenda view.
* **All day text** – The text shown in the all-day column of the agenda view.
* **Text header date** – The header of the date column in the agenda view.
* **Text header time** – The header of the time column in the agenda view.
* **Text header event** – The header of the event column in the agenda view.

#### Custom View Visible Days

Configure the visible days in the custom work week view.    
Any day of the week you choose is displayed in the custom week view. By default, Monday to Friday are visible.

### Events Tab

* **On edit** – Specifies the action to be executed when the user selects an existing event in the calendar.    
    The default action is to call the **Calendar.Event_NewEdit** page and to set the selected event object as the page's parameter.
* **On create** – Specifies the action to be executed when the user selects an empty slot in the calendar. This requires **Editable** to be **true**.    
    The default action is to call the **Calendar.ACT_CreateEvent** nanoflow, then to create a new **CalendarEvent** entity and to set the default variables. The available variables are:
   
    * **$allDay**
    * **$startDate**
    * **$endDate**     
* **On drag/drop/resize** – Specifies the action to execute when the user moves or drags an item, or changes the start or end time by resizing the item.    
    The default action is to call the **Calendar.OCH_DragResize** microflow, and to update the existing **CalendarEvent** object based on the available variables. The available variables are:
    
    * **$newStart**
    * **$newEnd**
    * **$oldStart**
    * **$oldEnd**
* **On view range change** – Specifies the action to be executed when the calendar view range changes. The available variables are:

    * **$rangeStart**
    * **$rangeEnd**
    * **$currentView**

### Dimensions Tab

* **Width unit** – The width of the widget.

    * **Percentage** – specifies the width in relation to the rest of the elements on the page. This is the default.
    * **Pixels** – specifies the width in pixels.
* **Width** – Used as an appropriate CSS value. The default value is **100**.
* **Height unit** – The height of the widget.

    * **Auto** – The height adjusts to the content.
    * **Pixels** – Specifies the height in pixels. This is the default.
    * **Percentage** – Specifies the height in relation to the parent element.
    * **Viewport** – Specifies the height in relation to the viewport.
* **Height** – Used as an appropriate CSS value. The default value is **580**. This is not available when **Height unit** is set to **Auto**.

When **Height unit** is set to **Auto**, the following properties are also available:

* **Minimum height unit** – **None**, **Pixels** (default), **Percentage**, or **Viewport**.
* **Minimum height** – The minimum height of the widget. The default value is **250**. This is not available when **Minimum height unit** is set to **None**.
* **Maximum height unit** – **None** (default), **Pixels**, **Percentage**, or **Viewport**.
* **Maximum height** – The maximum height of the widget. The default value is **250**. This is not available when **Maximum height unit** is set to **None**.
* **Vertical overflow** – Determines how content that exceeds the maximum height is handled: **Auto** (default), **Scroll**, or **Hidden**. This is not available when **Maximum height unit** is set to **None**.

## Flows

### ACT_CreateEvent

This nanoflow creates a new **CalendarEvent** entity and displays the **Event_NewEdit** page.

### OCH_DragResize

This microflow updates a given **CalendarEvent** entity with new start and end dates.

## Page

### Event_NewEdit

This page displays **CalendarEvent** entity attributes for update or delete purposes.    
If **All day** is set to **Yes**, then **Start** and **End** use the **Date** format only. Otherwise, they use the **Date and time** format.

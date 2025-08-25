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

## Basic Configuration

The calendar module provides default calendar building blocks. Drag the calendar building blocks from the toolbox into the page editor. This provides basic configuration using the **CalendarEvent** entity within the Calendar module.

### Domain model

The calendar module provides default **CalendarEvent** entity in the domain model.

### Data Source Tab

* **Events** – Determines the retrieval of calendar events via context, database, microflow, nanoflow, or association.
* **Title attribute** – The String attribute containing the calendar event's title.
* **All day attribute** – The Boolean attribute indicating if a calendar event takes a full day.
* **Start attribute** – The DateTime attribute indicating the start of a calendar event.
* **End attribute** – The DateTime attribute indicating the end of a calendar event.
* **Color attribute** – The String attribute affecting the background of a calendar event.    
    All HTML supported color formats are supported, for example "red", "#FF0000", "rgb(250,10,20)" or "rgba(10,10,10, 0.5)".
* **Start date attribute** – The DateTime attribute used on initial load.

### View Tab

* **View** – Determines the calendar's views:
    
    * **Standard** – Day, week, and month view only. This is the default.
    * **Custom** – Custom views configured on the **Custom views** tab.

* **Initial selected view** – Determines the view when the calendar becomes visible for the first time.    
    The available options are:
    
    * **Day**
    * **Week**
    * **Month**. This is the default.
    * **Custom**. This is configurable as a custom work week view on the **Custom views** tab.
    * **Agenda**

* **Show event date range** – Display the start and end date of the event.
* **Time format** – Set the format in which the time is displayed.
* **Day start hour** – The hour when the day starts. Choose a value between 0 and 23.
* **Day end hour** – The hour when the day ends. Choose a value between 0 and 24.
* **Show all events** — If set to **yes**, the calendar displays all events in a day without "more" links.

### Custom View Tab

#### Visible Views

* **Day** – Show the day button view in the toolbar.
* **Week** – Show the week button view in the toolbar.
* **Custom work week** – Show the custom work week button view in the toolbar. Visible days can be configured in the **Custom view visible days** section.
* **Custom view caption** – Configure the **Custom work week** button and title.    
    This is configurable when **Custom work week** is set to **Yes**.      
    The default value is **Custom**.
* **Month** – Show the month button view in the toolbar.
* **Agenda** – Show the agenda button view in the toolbar.

#### Visible Days in the Custom View

Configure the visible days in the **Custom work week** view.    
Any day of the week you choose is displayed in the custom week view.

### Events Tab

* **On edit** – Specifies the action to be executed when the user selects an existing event in the calendar.    
    The default action is to call the **Calendar.Event_NewEdit** page and to set the selected event object as the page's parameter.
* **On create** – Specifies the action to be executed when the user selects an empty slot in the calendar.    
    The default action is to call the **Calendar.ACT_CreateEvent** nanoflow, then to create a new **CalendarEvent** entity and to set the default variables. The available variables are:
   
    * **$allday**
    * **$startDate**
    * **$endDate**     
* **On drag/drop/resize** – Specifies the action to execute when the user moves or drags an item, or changes the start or end time by resizing the item.    
    The default action is to call the **Calendar.OCH_DragResize** microflow, and to update the existing **CalendarEvent** object based on the available variables. The available variables are:
    
    * **$newStart**
    * **$newEnd**
    * **$oldStart**
    * **$oldEnd**
* **On view range change** – Specifies the action to be executed when the calendar view range changes.    

### Dimensions Tab

* **Width unit** – The width of the widget.

    * **Percentage** – specifies the width in relation to the rest of the elements on the page.
    * **Pixels** – specifies the width in pixels.
* **Width** – Used as an appropriate CSS value.
* **Height unit** – The height of the widget.

    * **Percentage of width** – Specifies the height in relation to the width.
    * **Pixels** – Specifies the height in pixels.
    * **Percentage of parent** – Specifies the width in relation to the rest of the elements on the page.
* **Height** – Used as an appropriate CSS value.
* **Minimum height** – Applicable if the height is relative to the parent's percentage.

## Flows

### ACT_CreateEvent

This nanoflow creates a new **CalendarEvent** entity and displays the **Event_NewEdit** page.

### OCH_DragResize

This microflow updates a given **CalendarEvent** entity with new start and end dates.

## Page

### Event_NewEdit

This page displays **CalendarEvent** entity attributes for update or delete purposes.    
If **All day** is set to **Yes**, then **Start** and **End** use the **Date** format only. Otherwise, they use the **Date and time** format.

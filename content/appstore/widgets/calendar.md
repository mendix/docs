---
title: "Calendar"
category: "Widgets"
description: "Describes the configuration and usage of the Calendar widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "calendar", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Calendar](https://marketplace.mendix.com/link/component/107954/) widget can be used to display and manage calendar events.

### 1.1 Features

* Add and edit calendar events
* Drag and drop calendar events
* Change calendar event colors
* Retrieve events based on selected date ranges

## 2 Basic Configuration

Drag and drop the widget inside a data view which provides a calendar entity (containing calendar config attributes) as context, and use the configuration properties described in the following sections.

### 2.1 Data Source Tab

- **Data source** (default: **Context**) - Determines to retrieve the calendar events via context, database, microflow, or nanoflow.
- **Event entity** - The entity that represents the event to be displayed by the calendar.
- **XPath** - (configurable when the **Data source** is set to **Database**) - Filters the events retrieved from the database by the configured XPath.
- **Microflow** - (configurable when the **Data source** is set to **Microflow**) - The microflow executed to retrieve the calendar events.
- **Nanoflow** - (configurable when the **Data source** is set to **Nanoflow**) - The nanoflow executed to retrieve the calendar events.
- **Title attribute** - (configurable when the **Event entity** is configured) - The String attribute containing the calendar event's title.
- **All day attribute** - (configurable when the **Event entity** is configured) - The Boolean attribute indicating whether a calendar event takes a full day.
- **Start attribute** - (configurable when the **Event entity** is configured) - The DateTime attribute indicating the start of a calendar event.
- **End attribute** - (configurable when the **Event entity** is configured) - The DateTime attribute indicating the end of a calendar event.
- **Color attribute** - (configurable when the **Event entity** is configured) - The String attribute affecting the background of a calendar event. All HTML supported color formats are supported (e.g. "red", "#FF0000", "rgb(250,10,20)" or "rgba(10,10,10, 0.5)").
- **Refresh data source on view** - (configurable when the **Data source** is set to **Microflow**; default: **No**) - Enables to retrieve a sub set of a large data set by:
	
	- updating the **View start attribute** and **View end attribute** values when the viewable calendar dates change.
	- repopulating the calendar with events by executing the **Microflow** which should use the **View start attribute** and **View end attribute** values as data retrieval constraints (for example, `End > $CalenderView/StartAttribute` and `Start < $CalenderView/EndAttribute]`).
	
- **View start attribute** - The DateTime attribute that indicates the lower date & time boundary of events displayed on the calendar.
- **View end attribute** - The DateTime attribute that indicates the upper date & time boundary of events displayed on the calendar.

### 2.2 View Tab

- **View** (default: **Standard**) - Determines the calendar's views:
  
  - **Standard**: day, week, and month view only.
  - **Custom**: custom views configured in **Custom top bar views**.

- **Initial selected view** (default: **Month**) - Determines the view (**Day**, **Week**, **Month**, **(Work week)** (available as custom view), **(Agenda)** (available as custom view)) when the calendar becomes visible for the first time.
- **Start date attribute** - The DateTime attribute indicating the start date of the current calendar view. Depending on the view, the actual view's start date may differ. For example when a Wednesday is configured as the start date in a week view. In that case the Monday just before that date is the actual start date.
  
- **Custom top bar views** (configurable when **View** is set to **Custom**) - The custom calendar views:
  
  - **Appearance** tab:
	
	- **Item** (default: **Month button**) - The type of element and, thus supported calendar views, to be added to the top bar of the calendar. The following types are supported:
	  
      - **Previous button**
      - **Today button**
      - **Next button**
      - **Title date text**
      - **Month button**
      - **Week button**
      - **Work week button**
      - **Day button**
      - **Agenda button**
		
	- **Position** (default: **Left**) - Determines the alignment (**Left**, **Center**, **Right**) of the buttons and text in the calendar's top bar.
	- **Caption** - The text for the button or title depending in the selected **Item** type.
	- **Render mode** (default: **Button**) - Determines whether the button is rendered as an actual button or a link.
	- **Button tooltip** - Optional text shown in a tooltip when hovering the button.
	- **Button style** (default: **Default**) - Sets the button's brand style.
	
  - **Custom formats** tab:
	
	- **Header day format** (configurable when **Item** is set to **Day button**, **Week button**, **Work week button**, **Month button** or **Agenda button**) - The day formatting in the view's header columns. Use Mendix date formats (e.g. 'EEEE dd/MM'). 
	- **Cell date format** (configurable when **Item** is set to **Month button**) - The day formatting of a certain day cell in a month view. Use Mendix date formats (e.g. 'dd'). 
	- **Time gutter format** (configurable when **Item** is set to **Day button**, **Week button**, **Work week button** or **Agenda button**) - The time formatting in the first column of the view. Use Mendix date formats (e.g. 'HH:mm'). 
	- **Date gutter format** (configurable when **Item** is set to **Agenda button**) - The date formatting in the first column of the view. Use Mendix date formats (e.g. 'EEE MMM d'). 
	
  - **Text** tab:
	
	- **Default all day text** (configurable when **Item** is set to **Agenda button**) - The text indicating an event will take a full day in the agenda view.
	- **Header date** (configurable when **Item** is set to **Agenda button**) - The text for the date column header in the agenda view.
	- **Header time** (configurable when **Item** is set to **Agenda button**) - The text for the time column header in the agenda view.
	- **Header event** (configurable when **Item** is set to **Agenda button**) - The text for the event column header in the agenda view.

- **Editable** (default: **Default**) - Determines whether the calendar is editable. In the default mode, the surrounding data view's editability is decisive.
- **Enable create** (default: **Yes**) - Determines whether the calendar allows creation of new events by clicking on and dragging over date and time slots.

### 2.3 Events Tab

- **On click** (default: **Do nothing**) - Determines the type of the executed action triggered when clicking a calendar event or day slot.
- **On click microflow** (configurable when **On click** is set to **Call a microflow**) - The microflow executed when clicking a calendar event or day slot.
- **On click nanoflow** (configurable when **On click** is set to **Call a nanoflow**) - The nanoflow executed when clicking a calendar event or day slot.
- **On create** (default: **Do nothing**) - Determines the type of the executed action triggered when a date or time slot is selected and the **Enable create** is set to **Yes**.
- **Create association** - Sets an association between the created event object and the calendar object which is provided with a data view as context to the widget.
- **On create microflow** (configurable when **On create** is set to **Call a microflow**) - The microflow executed when a date or time slot is selected and the **Enable create** is set to **Yes**.
- **On create nanoflow** (configurable when **On create** is set to **Call a nanoflow**) - The nanoflow executed when a date or time slot is selected and the **Enable create** is set to **Yes**.
- **On change** (default: **Do nothing**) - Determines the type of the executed action triggered when moving (by dragging) or resizing an event.
- **On change microflow** (configurable when **On change** is set to **Call a microflow**) - The microflow executed when moving (by dragging) or resizing an event.
- **On change nanoflow** (configurable when **On change** is set to **Call a nanoflow**) - The nanoflow executed when moving (by dragging) or resizing an event.

### 2.4 Size Tab

- **Width unit** (default: **Percentage**) - Determines whether the unit of the **Width** value is a percentage or a pixel amount.
- **Width** (default: **100**) - The width value of the calendar.
- **Height unit** (default: **Pixels**) - Determines whether the unit of the **Width** value is:
  - a pixel amount.
  - a percentage of the width.
  - a percentage of the parent height.
- **Height** (default: **580**) - The height value of the calendar.

	![](attachments/calendar/calendar2.gif)

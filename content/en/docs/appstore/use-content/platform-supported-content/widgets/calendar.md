---
title: "Calendar"
url: /appstore/widgets/calendar/
description: "Describes the configuration and usage of the Calendar widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Calendar](https://marketplace.mendix.com/link/component/107954/) widget can be used to display and manage calendar events.

### Features

* Add and edit calendar events
* Drag and drop calendar events
* Change calendar event colors
* Retrieve events based on selected date ranges

## Basic Configuration

Drag the widget into a data view which provides a calendar entity (containing calendar config attributes) as context. Next, use the configuration properties described in the following sections.

### Data Source Tab

* **Data source** – determines retrieval of the calendar events via context, database, microflow, or nanoflow
    * Default: **Context**
* **Event entity** – the entity that represents the event to be displayed by the calendar
* **XPath** – filters the events retrieved from the database by the configured XPath
    * Configurable when the **Data source** is set to **Database**
* **Microflow** – The microflow executed to retrieve the calendar events
    * Configurable when the **Data source** is set to **Microflow**
* **Nanoflow** – the nanoflow executed to retrieve the calendar events
    * Configurable when the **Data source** is set to **Nanoflow**
* **Title attribute** – the String attribute containing the calendar event's title
    * Configurable when the **Event entity** is configured
* **All day attribute** – the Boolean attribute indicating if a calendar event takes a full day
    * Configurable when the **Event entity** is configured
* **Start attribute** – the DateTime attribute indicating the start of a calendar event
    * Configurable when the **Event entity** is configured
* **End attribute** – the DateTime attribute indicating the end of a calendar event
    * Configurable when the **Event entity** is configured
* **Color attribute** – the String attribute affecting the background of a calendar event
    * Configurable when the **Event entity** is configured
    * All HTML supported color formats are supported (for example "red", "#FF0000", "rgb(250,10,20)" or "rgba(10,10,10, 0.5)")
* **Refresh data source on view** – enables the retrieval of a subset of a larger data set by doing the following:
    * Updating the **View start attribute** and **View end attribute** values when the viewable calendar dates change.
    * Repopulating the calendar with events by executing the **Microflow** which should use the **View start attribute** and **View end attribute** values as data retrieval constraints (for example `End > $CalenderView/StartAttribute` and `Start < $CalenderView/EndAttribute]`).
    * Default: **No**
    * Configurable when the **Data source** is set to **Microflow**
* **View start attribute** – the DateTime attribute that indicates the lower date and time boundary of events displayed on the calendar
* **View end attribute** – the DateTime attribute that indicates the upper date and time boundary of events displayed on the calendar

### View Tab

* **View** – determines the calendar's views:
    * **Standard** – day, week, and month view only
    * **Custom** – custom views configured in **Custom top bar views**
    * Default: **Standard**
* **Initial selected view** – determines the view when the calendar becomes visible for the first time
    * Default: **Month**
    * Options are **Day**, **Week**, **Month**, **Work week** (available as a custom view), **Agenda** (available as a custom view)
* **Start date attribute** – the DateTime attribute indicating the start date of the current calendar view. Depending on the view, the actual view's start date may differ. For example, if a Wednesday is configured as the start date in a week view then the Monday just before that date is the actual start date.
* **Custom top bar views** – the custom calendar views, which are configurable when **View** is set to **Custom**, offer the following options:
    * **Appearance** tab
        * **Item** – the type of element and, thus supported calendar views, to be added to the top bar of the calendar. The default is **Month button**. The following types are supported: 
            * **Previous button**
            * **Today button**
            * **Next button**
            * **Title date text**
            * **Month button**
            * **Week button**
            * **Work week button**
            * **Day button**
            * **Agenda button**
        * **Position** – determines the alignment of the buttons and text in the calendar's top bar
            * Default: **Left**
            * Options are **Left**, **Center**, **Right**
        * **Caption** – the text for the button or title depending in the selected **Item** type
        * **Render mode** – determines whether the button is rendered as an actual button or a link
            * Default: **Button**
        * **Button tooltip** – optional text shown in a tooltip when hovering the button
        * **Button style** – sets the button's brand style
            * Default: **Default**
    * **Custom formats** tab
        * **Header day format** – the day formatting in the view's header columns
            * Configurable when **Item** is set to **Day button**, **Week button**, **Work week button**, **Month button**, or **Agenda button**
            * Use Mendix date formats (for example 'EEEE dd/MM'). 
        * **Cell date format** – the day formatting of a certain day cell in a month view 
            * Configurable when **Item** is set to **Month button** 
            * Use Mendix date formats (for example 'dd')
        * **Time gutter format** – the time formatting in the first column of the view
            * Configurable when **Item** is set to **Day button**, **Week button**, **Work week button**, or **Agenda button** 
            * Use Mendix date formats (for example 'HH:mm')
        * **Date gutter format** – the date formatting in the first column of the view. Use Mendix date formats (for example 'EEE MMM d')
            * Configurable when **Item** is set to **Agenda button** 
    * **Text** tab
        * **Default all day text** – the text indicating an event will take a full day in the agenda view
            * Configurable when **Item** is set to **Agenda button** 
        * **Header date** – the text for the date column header in the agenda view
            * Configurable when **Item** is set to **Agenda button** 
        * **Header time** – the text for the time column header in the agenda view
            * Configurable when **Item** is set to **Agenda button**
        * **Header event** – the text for the event column header in the agenda view
            * Configurable when **Item** is set to **Agenda button** 
* **Editable** (default: **Default**) – determines whether the calendar is editable
    * In the default mode, the surrounding data view's editability is decisive
* **Enable create** – determines whether the calendar allows creation of new events by clicking on and dragging over date and time slots
    * Default: **Yes**

### Events Tab

* **On click** – determines the type of the executed action triggered when clicking a calendar event or day slot
    * default: **Do nothing** 
* **On click microflow** – the microflow executed when clicking a calendar event or day slot
    * Configurable when **On click** is set to **Call a microflow** 
* **On click nanoflow** – the nanoflow executed when clicking a calendar event or day slot
    * Configurable when **On click** is set to **Call a nanoflow**
* **On create** – determines the type of the executed action triggered when a date or time slot is selected and the **Enable create** is set to **Yes**
    * Default: **Do nothing**
* **Create association** – sets an association between the created event object and the calendar object which is provided with a data view as context to the widget
* **On create microflow** – the microflow executed when a date or time slot is selected and the **Enable create** is set to **Yes**
    * Configurable when **On create** is set to **Call a microflow**
* **On create nanoflow** – the nanoflow executed when a date or time slot is selected and the **Enable create** is set to **Yes**
    * Configurable when **On create** is set to **Call a nanoflow**
* **On change** – determines the type of the executed action triggered when moving (by dragging) or resizing an event
    * Default: **Do nothing**
* **On change microflow** – the microflow executed when moving (by dragging) or resizing an event
    * Configurable when **On change** is set to **Call a microflow**
* **On change nanoflow** – the nanoflow executed when moving (by dragging) or resizing an event
    * Configurable when **On change** is set to **Call a nanoflow**

### Size Tab

* **Width unit** (default: **Percentage**) – determines whether the unit of the **Width** value is a percentage or a pixel amount
* **Width** (default: **100**) – the width value of the calendar
* **Height unit** (default: **Pixels**) – determines whether the unit of the **Width** value is a pixel amount, a percentage of the width, or a percentage of the parent height
* **Height** (default: **580**) – the height value of the calendar

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/calendar/calendar2.gif" class="no-border" >}}

## Example Configuration

To configure an example Calendar widget in a basic way, follow these steps:

1. Place the widget in a data container like a data view, list view, or template grid widget.
1. Navigate to the **Data Source** tab and configure the data source type to retrieve a list of events. You can use a **Microflow** for this purpose.
1. Configure the **Event** entity. For this example, create and select an entity named *Appointment* in your domain model with the following attributes: 
    * title (string)
    * start (data-time)
    * end (data-time)
    * allDay (Boolean)
    * color (string)
1. Select or create a microflow that retrieves a list of the calendar events. Use the **Retrieve** action to retrieve a list of **Appointments** from the database, and define this list as a return type.
1. Configure the title, all day, start, end, and color attribute fields in the **View** tab. Select these attributes from the **Appointment** entity.

Optionally, you can further configure the widget by following these steps:

1. Choose the initial selected view in the **View** tab:
    1. Select a **Day**, **Week**, or **Month** view as the default.
1. In the **Events** tab, choose the **On Create** event and select **Call a Microflow**: 
1. Create this microflow so that it opens a new page, like an overview edit page of the **Appointment** entity mentioned above. This way, when a time slot in the calendar is selected, you can add or edit a new event.
1. Navigate to the **Size** tab and define the width and height of the widget so it suits your page.

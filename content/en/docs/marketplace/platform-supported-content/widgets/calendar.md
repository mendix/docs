---
title: "Calendar"
deprecated: true
url: /appstore/widgets/calendar/
description: "Describes the configuration and usage of the Calendar widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated. For an alternative, see the [Calendar](/appstore/modules/calendar-module/) module.
{{% /alert %}}

## Introduction

{{% alert color="info" %}}
This documentation applies to version 1 of the Calendar widget.

For documentation on versions 2 and above of Calendar, refer to [Calendar module](/appstore/modules/calendar-module/).
{{% /alert %}}

The [Calendar](https://marketplace.mendix.com/link/component/107954/) widget can be used to display and manage calendar events.

### Features

* Add and edit calendar events.
* Drag and drop calendar events.
* Change calendar event colors.
* Retrieve events based on selected date ranges.

## Basic Configuration

Drag the widget into a data view that provides a calendar entity, which contains calendar config attributes, as context. Next, use the configuration properties described in the following sections.

### Data Source Tab

* **Data source** – Determines the retrieval of the calendar events via context, database, microflow, or nanoflow.
    The default value is **Context**.
* **Event entity** – The entity that represents the event to be displayed by the calendar.
* **XPath** – Filters the events retrieved from the database by the configured XPath.
    This is configurable when the **Data source** is set to **Database**.
* **Microflow** – The microflow executed to retrieve the calendar events.
    This is configurable when the **Data source** is set to **Microflow**.
* **Nanoflow** – The nanoflow executed to retrieve the calendar events.
    This is configurable when the **Data source** is set to **Nanoflow**.
* **Title attribute** – The String attribute containing the calendar event's title.
    This is configurable when the **Event entity** is configured.
* **All day attribute** – The Boolean attribute indicating whether a calendar event takes a full day.
    This is configurable when the **Event entity** is configured.
* **Start attribute** – The DateTime attribute indicating the start of a calendar event.
    This is configurable when the **Event entity** is configured.
* **End attribute** – The DateTime attribute indicating the end of a calendar event.
    This is configurable when the **Event entity** is configured.
* **Color attribute** – The String attribute affecting the background of a calendar event.
    This is configurable when the **Event entity** is configured.
    All HTML supported color formats are supported, for example, "red", "#FF0000", "rgb(250,10,20)" or "rgba(10,10,10, 0.5)".
* **Refresh data source on view** – Enables the retrieval of a subset of a larger data set by doing the following:

    * Updating the **View start attribute** and the **View end attribute** values when the viewable calendar dates change.
    * Repopulating the calendar with events by executing the **Microflow** which should use the **View start attribute** and **View end attribute** values as data retrieval constraints. Example: `End > $CalenderView/StartAttribute` and `Start < $CalenderView/EndAttribute]`.
    * Default: **No**
    * This is configurable when the **Data source** is set to **Microflow**.
* **View start attribute** – The DateTime attribute that indicates the lower date and time boundary of events displayed on the calendar.
* **View end attribute** – The DateTime attribute that indicates the upper date and time boundary of events displayed on the calendar.

### View Tab

* **View** – Determines the calendar's views:

    * **Standard** – Day, week, and month view only. This is the default value.
    * **Custom** – Custom views configured in **Custom top bar views**.
* **Initial selected view** – Determines the view when the calendar becomes visible for the first time. The available options are:

    * **Day**
    * **Week**
    * **Month**. This is the default.
    * **Work week**. This is available as a custom view.
    * **Agenda**. This is available as a custom view.
* **Start date attribute** – The DateTime attribute indicating the start date of the current calendar view. Depending on the view, the actual view's start date may differ. For example, if a Wednesday is configured as the start date in a week view, then the Monday just before that date is the actual start date.
* **Custom top bar views** – The custom calendar views, which are configurable when **View** is set to **Custom**, offer the following options:

    * **Appearance** tab
        * **Item** – The type of element and the supported calendar views to be added to the top bar of the calendar. The default is **Month button**. The following types are supported:

            * **Previous button**
            * **Today button**
            * **Next button**
            * **Title date text**
            * **Month button**
            * **Week button**
            * **Work week button**
            * **Day button**
            * **Agenda button**
        * **Position** – Determines the alignment of the buttons and the text in the calendar's top bar. The options are:

            * **Left**. This is the default.
            * **Center**
            * **Right**
        * **Caption** – The text for the button or title, depending on the selected **Item** type.
        * **Render mode** – Determines whether the button is rendered as an actual button or a link. The default value is **Button**.
        * **Button tooltip** – Optional text shown in a tooltip when hovering over the button.
        * **Button style** – Sets the button's brand style. The default value is **Default**.
    * **Custom formats** tab
        * **Header day format** – The day formatting in the view's header columns. This is configurable when **Item** is set to **Day button**, **Week button**, **Work week button**, **Month button**, or **Agenda button**.
            Use Mendix date formats, such as `EEEE dd/MM`.
        * **Cell date format** – The day formatting of a certain day cell in a month view. This is configurable when **Item** is set to **Month button**.
            Use Mendix date formats, such as `dd`.
        * **Time gutter format** – The time formatting in the first column of the view. This is configurable when **Item** is set to **Day button**, **Week button**, **Work week button**, or **Agenda button**.
            Use Mendix date formats, such as `HH:mm`.
        * **Date gutter format** – The date formatting in the first column of the view. This is configurable when **Item** is set to **Agenda button**.
            Use Mendix date formats, such as `EEE MMM d`.
    * **Text** tab
        * **Default all day text** – The text indicating that an event will take a full day in the agenda view. This is configurable when **Item** is set to **Agenda button**.
        * **Header date** – The text for the date column header in the agenda view. This is configurable when **Item** is set to **Agenda button**.
        * **Header time** – The text for the time column header in the agenda view. This is configurable when **Item** is set to **Agenda button**.
        * **Header event** – The text for the event column header in the agenda view. This is configurable when **Item** is set to **Agenda button**.
* **Editable** – Determines whether the calendar is editable.
    The default value is **Default**. In the default mode, the surrounding data view's editability is decisive.
* **Enable create** – Determines whether the calendar allows the creation of new events by clicking on and dragging over date and time slots.
    The default value is **Yes**.

### Events Tab

* **On click** – Determines the type of the executed action triggered when clicking a calendar event or day slot. The default value is **Do nothing**.
* **On click microflow** – The microflow executed when clicking a calendar event or day slot. This is configurable when **On click** is set to **Call a microflow**.
* **On click nanoflow** – The nanoflow executed when clicking a calendar event or day slot. This is configurable when **On click** is set to **Call a nanoflow**.
* **On create** – Determines the type of the executed action triggered when a date or time slot is selected and when **Enable create** is set to **Yes**. The default value is **Do nothing**.
* **Create association** – Sets an association between the created event object and the calendar object which is provided with a data view as context to the widget.
* **On create microflow** – The microflow executed when a date or time slot is selected and when **Enable create** is set to **Yes**. This is configurable when **On create** is set to **Call a microflow**.
* **On create nanoflow** – The nanoflow executed when a date or time slot is selected and when **Enable create** is set to **Yes**. This is configurable when **On create** is set to **Call a nanoflow**.
* **On change** – Determines the type of the executed action triggered when moving, by dragging, or resizing an event. The default value is **Do nothing**.
* **On change microflow** – The microflow executed when moving, by dragging, or resizing an event. This is configurable when **On change** is set to **Call a microflow**.
* **On change nanoflow** – The nanoflow executed when moving, by dragging, or resizing an event. This is configurable when **On change** is set to **Call a nanoflow**.

### Size Tab

* **Width unit** – Determines whether the unit of the **Width** value is a percentage or a pixel amount. The default value is **Percentage**.
* **Width** – Determines the width value of the calendar. The default value is **100**.
* **Height unit** – Determines whether the unit of the **Width** value is a pixel amount, a percentage of the width, or a percentage of the parent height. The default value is **Pixels**.
* **Height** – Determines the height value of the calendar. The default value is **580**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/calendar/calendar2.gif" class="no-border" >}}

## Example Configuration

To configure an example Calendar widget in a basic way, follow these steps:

1. Place the widget in a data container like a data view, list view, or template grid widget.
2. Navigate to the **Data Source** tab and configure the data source type to retrieve a list of events. You can use a **Microflow** for this purpose.
3. Configure the **Event** entity. For this example, create and select an entity named *Appointment* in your domain model with the following attributes:

    * title (string)
    * start (data-time)
    * end (data-time)
    * allDay (Boolean)
    * color (string)
4. Select or create a microflow that retrieves a list of the calendar events. Use the **Retrieve** action to retrieve a list of **Appointments** from the database, and define this list as a return type.
5. Configure the title, all day, start, end, and color attribute fields in the **View** tab. Select these attributes from the **Appointment** entity.

Optionally, you can further configure the widget by following these steps:

1. Choose the initial selected view in the **View** tab:
    1. Select a **Day**, **Week**, or **Month** view as the default.
2. In the **Events** tab, choose the **On Create** event and select **Call a Microflow**:
3. Create this microflow so that it opens a new page, like an overview edit page of the **Appointment** entity mentioned above. This way, when a time slot in the calendar is selected, you can add or edit a new event.
4. Navigate to the **Size** tab and define the width and height of the widget so it suits your page.

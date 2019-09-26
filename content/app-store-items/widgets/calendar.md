---
title: "Calendar"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Calendar](https://appstore.home.mendix.com/link/app/248/) widget shows a calendar in a Mendix app and can render objects as events in it. This widget is a Mendix implementation of the open-source jQuery widget [FullCalendar](https://fullcalendar.io/docs).

## 2 Configuration

### 2.1 Data Source Tab

#### 2.1.1 Data Source Type {#type}

This widget supports three types of data sources. All three require [Event Entity](#event-entity) to be set.

The default type is **XPath retrieve**, which can be combined with an optional XPath constraint.

The **Microflow** option uses the [Data Source Microflow](#data-source-microflow) to fill in the events for the calendar. Make sure this microflow returns a list of objects of the same type as the the [Event Entity](#event-entity).

The **Microflow with context object** option lets you pass a context object (from a data view) to the microflow to retrieve the events. When using this option, you can use the [Data View Context (Optional)](#data-view-context) tab options to set up the configuration for this. Make sure this microflow returns a list of objects of the same type as the [Event Entity](#event-entity) to be set.

#### 2.1.2 Event Entity {#event-entity}

This the entity for the event objects that will be shown on the calendar.

#### 2.1.3 XPath Constraint

This is an optional XPath constraint.This is only used when the [Data Source Type](#type) is set to **XPath retrieve**.

#### 2.1.4 Data Source Microflow {#data-source-microflow}

This is the microflow to fill the calendar. This is only used when the [Data Source Type](#type) is set to **Microflow**. Make sure this microflow returns a list of objects of the same type as the [Event Entity](#event-entity).

### 2.2 Data View Context (Optional) Tab  {#data-view-context}

These options are only applicable if the the [Data Source Type](#type) is set to **Microflow with context object**.

#### 2.2.1 Data View Entity {#data-view-entity}

This the entity of the data view in which the Calendar widget is placed.

#### 2.2.2 Data View Data Source Microflow

This is the microflow to fill the calendar. This is only used when the [Data Source Type](#type) is set to **Microflow with context object** and has one input parameter, which matches the [Data View Entity](#data-view-entity). Make sure this microflow returns a list of objects of the same type as the [Event Entity](#event-entity).

#### 2.2.3 Start Pos Attribute

This option lets you specify an attribute of the data view object to be used as the start position where the calendar opens.

### 2.3 Event Data Tab

#### 2.3.1 Title

This is the string attribute that contains the title for the event.

#### 2.3.2 Start {#start}

This is the DateTime attribute that contains the start date for the event.

#### 2.3.3 End

This is the DateTime attribute that contains the end date for the event.

#### 2.3.4 Editable {#editable}

Set this Boolean value if the end-user is allowed to change the events using drag-and-drop actions.

#### 2.3.5 All Day

This Boolean attribute specifies if the event is an all-day event or at a specific time that day.

### 2.4 Behavior Tab

#### 2.4.1 On Change

This microflow is triggered whenever an event is changed through drag-and-drop. The microflow gets the event object as an input parameter. 

This only works if [Editable](#editable) is set to **Yes**.

#### 2.4.2 On Click

This microflow is triggered when an event is clicked. The microflow gets the event object as an input parameter.

#### 2.4.3 New Event

This microflow is triggered when the user clicks somewhere in the calendar where there is not yet an event. This will create a new object of the same entity as the [Event Entity](#event-entity), with the [Start](#start) attribute filled with the date that was clicked. This will then be sent to the microflow as an input parameter.

#### 2.4.4 New Event Reference

This reference can be configured from the the [Event Entity](#event-entity) to the context object and will be set when a new event is created by clicking in the calendar.

#### 2.4.5 Start View

This is the view on which the calendar should start.

### 2.5 View Settings Tab

#### 2.5.1 Height

This is the height of the calendar in pixels.

#### 2.5.2 Show Week Numbers

This Boolean lets you turn the week numbers on and off.

#### 2.5.3 Week Number Title

The title for the column with the week numbers. This defaults to a simple **W**.

#### 2.5.4 Show Weekends

This Boolean let you set if the weekends should be shown on the calendar.

#### 2.5.5 First Day of the Week

This is an integer to set what the first day of the week is, where 0 = Sunday, 1 = Monday, etc.

#### 2.5.6 Custom Time Format {#custom-time}

The default is **h:mm{ - h:mm}**. For more information, see [timeFormat](http://fullcalendar.io/docs/text/timeFormat/).

#### 2.5.7 Custom Date Format

This is the date format that is shown in the column headings. For more information, see [columnFormat](http://fullcalendar.io/docs/text/columnFormat/).

#### 2.5.8 Custom Title Format

This is the header title format shown in the header's title. For more information, see [titleFormat](http://fullcalendar.io/docs/text/titleFormat/).

#### 2.5.9 Month Names Format

This is a translatable string of all the month names used in the calendar.

#### 2.5.10 Month Short Names Format

This is a translatable string of all the shorthand month names used in the calendar.

#### 2.5.11 Day Names Format

This is a translatable string of all the day names used in the calendar.

#### 2.5.12 Day Short Names Format

This is a translatable string of all the shorthand day names used in the calendar.

#### 2.5.13 Enum for Colors {#enum}

You can set an enumeration here (an attribute on the [Event Entity](#event-entity)) to specify the color for each event. The enumeration key has to match with one of the colors specified under [Colors](#colors).

#### 2.5.14 Colors {#colors}

This is a list of event color combinations with their matching enumeration keys (as set in [Enum for Colors](#enum)).

### 2.6 Extra Tab

#### 2.6.1 Agenda Axis Time Format

This is the format of the vertical axis labels in agenda views. The default is **h(:mm)tt**.

#### 2.6.2 Slot Duration

This is the time interval (in minutes) of the day and week calendars. The default is **30**.

#### 2.6.3 Today Button Caption

This is the caption on the button that allows the user to jump to the current date. The default is **Today**.

#### 2.6.4 All-Day Caption

This is the caption text in the **all-day** slot at the top of the calendar. The default is **all-day**. This option only applies to the week and day agenda [views](#views).

#### 2.6.5 Start Time

This is the start time for each day. This property only applies to the week and day agenda [views](#views).

#### 2.6.6 End Time

This is the end time for each day. This property only applies to the week and day agenda [views](#views).

#### 2.6.7 Available Views {#views}

This is a list of which views should be available to the user in the calendar (for example, **Month**, **Basic Week**, **Agenda Week**, **Basic Day**, **Agenda Day**).

When you click **New**, the **Edit Available Views Item** dialog box opens. On the **Extra** tab of this dialog box, you have the following options:

* **Custom time format** – the default is **h:mm{ - h:mm}**; this overrides the "general" [Custom Time Format](#custom-time) property; for more information, see [timeFormat](http://arshaw.com/fullcalendar/docs/text/timeFormat/)
* **Custom date format** – for more information, see [columnFormat](http://arshaw.com/fullcalendar/docs/text/columnFormat/)
* **Custom title format** – for more information, see [titleFormat](http://arshaw.com/fullcalendar/docs/text/titleFormat/)
* **Label** – this is the caption used for the calendar view button; for more information, see [buttonText](http://fullcalendar.io/docs/text/buttonText/)

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

1. Place the widget in a data form within the context of an event entity.
2. On the **Data source** tab, configure the calendar event to retrieve from a data source by **Context**, **Database** (via **XPath**), **Microflow** (via **Microflow**), or **Nanoflow** (via  **Nanoflow**).
3. Select the **Event entity**.
4. Select attributes to provide the event title, start date, end date, and color. Select a Boolean attribute to determine whether the event should be considered all day.
5. If you configured the **Microflow** data source, consider setting up **Refresh data source on view** by selecting **Yes** and adding a constraint based on the **View start attribute** and **View end attribute** (for example, `End > $CalenderView/StartAttribute` and `Start < $CalenderView/EndAttribute]`). if configured, when navigating the calendar, only events between the **View start attribute** and **View end attribute** dates will be retrieved.
6. On the **View** tab, select **Standard** for a view with a day, week, and month only. To set a custom toolbar, select **Custom**. The **Month** is the default initial selected view.
7. Configure the optional **Start date attribute** if necessary.
8.  On the **Events** tab, there are three types of events:
	* On-click events for clicking a calendar event/day slot
	* On-create events (for which **Enable create** must be selected on the **View** tab)
	* On-change events for dragging-and-dropping and event resizing

	![](attachments/calendar/calendar2.gif)

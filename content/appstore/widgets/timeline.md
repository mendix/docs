---
title: "Timeline"
category: "Widgets"
description: "Describes the Timeline widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "timeline", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You can use the [Timeline](https://appstore.home.mendix.com/link/app/115852/) widget to create a vertical list of events with descriptions.

## 2 Configuration

### 2.1 Choosing the Render Type

[**ADD**]

For the sake of simplicity, there are two modes available to create a timeline: basic and custom.

With the basic mode, you can quickly select the **Title**, **Description**, **Time indication**, and **Icon** for fast results in implementing a timeline.

With the custom mode, you can freely model everything that will be shown in the timeline, such as the **Title**, **Icon**,  day divider, event date/time, and content.

### 2.2 Selecting a Data Source

On the **Data Source** tab, you should simply select the data source that will be used. Since the widget will try to group the events based on date, make sure there is a DateTime attribute in the entity itself. 

{{% alert type="info" %}}
If you are using the basic mode, the values of the **Data source** field will be used as a group header.
{{% /alert %}}

#### 2.2.1 Showing the Group Header

[**ADD**]

For both custom and basic mode, you can opt for showing the day divider by using this control. Removing divider will make timeline look like one single flow.

### 2.3 Basic Mode-Specific Fields

[**POSITION**]

Simply select:

* **Title** – required
* **Description**
* **Event date/time** [**VERIFY**]
* **Icon** – you can use glyphicons and images from the connected data-source entity; if an **Icon** is not provided, it will be shown as circle with a background color specified in `.widget-timeline-icon-circle`

In the basic mode, you can show a group header in the following formats:

| Option                           | Explanation                                                                                       | Example    |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ---------- |
| day / day name                   | If events are grouped by date, this will show full name of the week day\.                         | Monday     |
| day / day number and month       | If events are grouped by date, this will show zero padded day number and full name of the month\. | 01 March   |
| day / day number, month and year | If events are grouped by date, this will show default date format based on current language\.     | 31/12/2020 |
| month / month name               | If events are grouped by month, this will show full name of the month\.                           | April      |
| month / month and year           | If events are grouped by month, this will show short name of the month and full year\.            | Apr 2020   |
| year                             | If events are grouped by year, this will show full year\.                                         | 2020       |

##### Custom Mode Specific Fields

Timeline will generate 5 drop zones for Icon, Divider, Title, Event Date Time and Content. Since none of these fields are required, feel free to create your own timeline widget with any combinations.

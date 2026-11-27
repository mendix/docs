---
title: "Timeline"
url: /appstore/widgets/timeline/
description: "Describes the Timeline widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can use the [Timeline](https://marketplace.mendix.com/link/component/115852/) widget to create a vertical list of events with descriptions.

## Configuration

### Choosing the Render Type

For the sake of simplicity, there are two modes available to create a timeline:

* **Basic** – this is the default mode in which you can select the **Data source**, **Title**, **Description**, and **Time Indication** on the **Data Source** tab and the **Icon** on the **General** tab to quickly implement a timeline in your app
* **Custom** – enable this mode by setting **Custom Visualization** to **Yes** on the **General** tab to freely model everything that will be shown in the timeline, such as the title, icon, group header/day divider, time indication, and content

### Selecting a Data Source

On the **Data Source** tab for both basic and custom modes, you must select the **Data source** that will be used. 

Since the widget will try to group the events based on date, make sure there is a date-time attribute in the data-source entity itself. For details, see the [Showing the Group Header](#group-header) section below.

### Showing the Group Header {#group-header}

On the **General** tab for both basic and custom modes, you can opt to show a day divider by selecting **Yes** for **Group Events** (default) and selecting a **Group Attribute**. The **Group Attribute** must be a Date and time attribute, and it is required when **Group Events** is set to **Yes**.

Use **Group by** to group events by **Day** (default), **Month**, or **Year**.

Use **Ungrouped events position** to set where events without a date and time value are shown: **Beginning of the timeline** or **End of the timeline** (default).

{{% alert color="info" %}}
If you are using the basic mode, the values of the **Data source** field will be used as a group header via the **Group Attribute** property.
{{% /alert %}}

Selecting **No** for **Group Events** will make the timeline look like one single flow.

### Basic Mode-Specific Fields {#basic}

In the basic mode, configure the following properties:

* **Title** – required
* **Description**
* **Time Indication**
* **Icon** – you can use glyphicons and images; if an **Icon** is not provided, it will be shown as a circle with a background color specified in `.widget-timeline-icon-circle`

In the basic mode, you can show a group header in the following formats, set with **Group by** and **Format**:

| Option | Explanation | Example |
| --- | --- | --- |
| **Day** / **Day name** (default) | This will show the full name of the weekday. | Monday |
| **Day** / **Day and month** | This will show a zero-padded day number and the full name of the month. | 01 March |
| **Day** / **Day, month, year** | This will show the default date format based on the current language. | 31/12/2020 |
| **Month** / **Month** (default) | This will show the full name of the month. | April |
| **Month** / **Month and year** | This will show the short name of the month and the full year. | Apr 2020 |
| **Year** | This will show the full year. | 2020 |

### Custom Mode-Specific Fields {#custom}

In the custom mode, the widget will generate five drop-zones for the icon, group header, title, time indication, and content. Since none of these fields are required, feel free to create your own timeline with any combination.

### Events

On the **Events** tab, you can set an **On click** action that runs when an event in the timeline is clicked. Events with an action get the `clickable` class.

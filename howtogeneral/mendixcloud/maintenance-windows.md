---
title: "Maintenance Windows"
space: "General How-To's"
category: "Mendix Cloud"
---
# Maintenance Windows

In the Mendix Cloud you can define a Maintenance Window for all your applications in the Professional and Enterprise plans.

**After completing this how-to you will know:**

*   How to configure a maintenance window

## 1. Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   Have a Mendix Cloud application where you have transport, monitor or backups rights.

## 2\. Maintenance Operations

In the Mendix Cloud you can configure a weekly time range where system maintenance can occur. Whenever we have planned operations, these will be executed within the time window of your preference. Naturally we will always inform you upfront on any upcoming maintenance operations in accordance with your SLA.

### 2.1 Maintenance Window

Your "Preferred Maintenance Windows" is a weekly time range where system maintenance can occur.

### 2.2 Planned Maintenance

"Planned Maintenance" is a maintenance operation that will be executed within your configured maintenance window.

## 3\. Configuring the Maintenance Window for your application

1.  Go to the "Environment Details" Page of the environment you want to configure the maintenance window for
2.  Go to the "Maintenance" tab
3.  Here you can configure your preferred maintenance window. Transport rights for this environment are required. Click the Change button to modify the preferred maintenance window of your environment. All windows are defined in UTC time format. Please see the table below for the time in other time zones.
4.  When a maintenance operation is planned, it will show up under "Planned Maintenance". By default it will be planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking "Override".

# ![](attachments/19203296/19399087.png)

## 4\. Maintenance Timetable

### 4.1 Daylight Savings Time

| UTC | LA (-07:00) | Boston (-04:00) | UK (+01:00) | NL (+02:00) |
| --- | --- | --- | --- | --- |
| 08:00 - 11:00 | 01:00 - 04:00 | 04:00 - 07:00 | 09:00 - 12:00 | 10:00 - 13:00 |
| 12:00 - 15:00 | 05:00 - 08:00 | 08:00 - 11:00 | 13:00 - 16:00 | 14:00 - 17:00 |
| 19:00 - 22:00 | 12:00 - 15:00 | 15:00 - 18:00 | 20:00 - 23:00 | 21:00 - 00:00 |

### 4.2 Standard Time

| UTC | LA (-08:00) | Boston (-05:00) | UK (+00:00) | NL (+01:00) |
| --- | --- | --- | --- | --- |
| 08:00 - 11:00 | 00:00 - 03:00 | 03:00 - 06:00 | 08:00 - 11:00 | 09:00 - 12:00 |
| 12:00 - 15:00 | 04:00 - 07:00 | 07:00 - 10:00 | 12:00 - 15:00 | 13:00 - 16:00 |
| 19:00 - 22:00 | 11:00 - 14:00 | 14:00 - 17:00 | 19:00 - 22:00 | 20:00 - 23:00 |

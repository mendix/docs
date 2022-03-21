---
title: "Scheduled Events – Task Queue"
url: /refguide/scheduled-events-task-queue/
weight: 10
description: "Options for configuring scheduled events"
tags: ["Scheduled Event", "Execution properties", "Timing", "intervals", "scheduling issues", "time zones", "daylight saving", "task queue"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With scheduled events you can make the runtime execute a microflow repeatedly at specific intervals.

A scheduled event is added to your module as a document (right-click your module and you will find it listed under *Add other*).

{{% alert color="warning" %}}
Scheduled events can be tested locally, but they will not be run if your app is deployed as a Free App. See the Free App section of [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app) for more information on Free App limitations.
{{% /alert %}}

## 2 Common properties

| Property | Description |
| --- | --- |
| Name | The name of the scheduled event. This name is stored in the `ScheduledEventInformation` objects at runtime, so that runs of the scheduled event are recognizable. |
| Documentation | This field is for documentation purposes in the app model only. Its value is not visible to end-users and doesn't influence the behavior of your application. |

## 3 Execution properties

| Property | Description |
| --- | --- |
| Microflow | The microflow that is executed when the scheduled event is executed. It should have no parameters and is run with all rights (see [Microflow](microflow)). |
| Enabled | The microflow is only executed if the scheduled event is enabled. This setting only applies when running from Studio Pro or from Eclipse. On production environments, scheduled events are enabled/disabled via the platform tools (for example the Developer Portal or Windows Service Console). |

## 4 Timing properties

| Property | Description |
| --- | --- |
| Interval type | The type of scheduled that should be executed. Valid values are [Yearly](#yearly), [Monthly](#monthly), [Weekly](#weekly), [Daily](#daily), [Hourly](#hourly) or [Minutes](#minutes). |

### 4.1 Yearly properties {#yearly}

Yearly events come in 2 flavors:

* Execute on a particular date
* Execute on a particular weekday

#### 4.1.1 Particular date

| Property | Description |
| --- | --- |
| Date | The month and day on which to execute the event. |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

{{% alert color="warning" %}}
It is possible to select the leap day (February 29th). In non-leap years the event will then be executed on February 28th.
{{% /alert %}}

#### 4.1.2 Particular weekday

| Property | Description |
| --- | --- |
| Month | The month in which to execute the event. |
| Day | The day at which to execute the event. |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### 4.2 Monthly properties {#monthly}

Monthly events also come in 2 flavors:

* Execute on a particular day of the month
* Execute on a particular weekday

#### 4.2.1 Particular date

| Property | Description |
| --- | --- |
| Interval | The number of months in between executions of the event. This must be a divisor of 12. |
| Months | The months in which the event will be executed; not visible when executing every month. |
| Day | The day of the months on which to execute the event. |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

{{% alert color="warning" %}}
The selected day might not exist in all selected months. In those months the event will be executed on the last day of the month.
{{% /alert %}}

#### 4.2.2 Particular weekday

| Property | Description |
| --- | --- |
| Month | The month in which to execute the event. |
| Day | The day on which to execute the event. |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

#### 4.3 Weekly properties {#weekly}

| Property | Description |
| --- | --- |
| Day | The days of the week on which to execute the event. |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### 4.4 Daily properties {#daily}

| Property | Description |
| --- | --- |
| Time | The time of day at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### 4.5 Hourly properties {#hourly}

| Property | Description |
| --- | --- |
| Interval | The number of hours in between executions of the event. This must be a divisor of 24. |
| Offset (minutes) | The offset in minutes from the start time of an event period. For instance, set to 90 in order to execute halfway during a 3 hour interval. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

Example times will be shown in the dialog to illustrate the effects of the offset.

### 4.6 Minutes properties {#minutes}

| Property | Description |
| --- | --- |
| Interval | The number of minutes in between executions of the event. This must be a divisor of 60. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### 4.7 Long-running Events {#long-events}

If a repeated scheduled event takes longer than the interval, an overlap would occur. To prevent this a choice must be made how to handle this. This is set in the **On overlap** property of the scheduled event.

* **Skip next** – If an event takes longer than its interval, subsequent events are skipped until it has completed. The next event will start at the next available scheduled time.

    This is the default and will ensure that events are always executed at a scheduled time.

* **Delay next** – If an event takes longer than its interval, the next event is delayed until it has completed. The next event will start immediately after the previous one has completed and will likely not be executed at a scheduled time.

    If multiple successive events are longer than their interval, the intended scheduled time will be further and further away from the actual start time. This situation should be avoided by choosing an interval that is generally sufficient to execute the event.

    Should an event have drifted a long way from its intended schedule over time, the best way to remedy this is to delete the event and create a new one (with a longer interval).

## 5 Additional information

### 5.1 Daylight saving

If the chosen time zone is UTC, then an event will always execute at the specified time of day.
However, if server time is chosen there may be daylight saving for the configured time zone (in the project's runtime settings).
If a time is chosen which is in the daylight saving time window (the time at which the clocks change, for example between 01:00 and 03:00 in Europe), then that time will not occur on one day of the year and occur
twice on another day of the year. The scheduled event will not be affected by this and will execute exactly once on those days.

### 5.2 Running concurrently

You cannot run more than ten scheduled events in parallel per cluster node.

This limit cannot be overridden.

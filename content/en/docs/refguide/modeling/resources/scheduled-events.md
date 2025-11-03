---
title: "Scheduled Events"
url: /refguide/scheduled-events/
weight: 90
description: "Options for configuring scheduled events"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Sometimes you will want to regularly run a microflow which does not require end-user interaction. You can do this using scheduled events. Scheduled events are managed using the [task queue](/refguide/task-queue/) mechanism.

A scheduled event is added to your module as a document (right-click your module and you will find it listed under *Add other*).

{{% alert color="warning" %}}
Scheduled events can be tested locally, but they will not be run if your app is deployed as a Free App. For more information on Free App limitations, see the [Free App](/developerportal/deploy/mendix-cloud-deploy/#free-app) section of *Mendix Cloud*.
{{% /alert %}}

## Common Properties

| Property | Description |
| --- | --- |
| Name | The name of the scheduled event. This name is recorded in the `System.ProcessedQueueTask` objects at runtime so you can identify when this scheduled event has been processed. See [Task Queues](/refguide/task-queue/) for additional information about this object.<br/>⚠ For compatibility with legacy scheduled events, it is also stored in the `ScheduledEventInformation` objects but this is deprecated and will be removed in Mendix 11. |
| Documentation | This field is for documentation purposes in the app model only. Its value is not visible to end-users and does not influence the behavior of your application. |

## Execution Properties

| Property | Description |
| --- | --- |
| Microflow | The microflow that is initiated when the scheduled event is run. It should have no parameters and is run with all rights (see [Microflow](/refguide/microflow/)). |
| Enabled | The microflow is only initiated if the scheduled event is enabled. This setting only applies when running from Studio Pro or from Eclipse. On production environments, scheduled events are enabled/disabled via the platform tools (for example, the Mendix Portal or Windows Service Console). |

## Timing Properties

| Property | Description |
| --- | --- |
| Interval type | The type of schedule that should be implemented. Valid values are [Yearly](#yearly), [Monthly](#monthly), [Weekly](#weekly), [Daily](#daily), [Hourly](#hourly), or [Minutes](#minutes). |

### Yearly Properties {#yearly}

You can specify how a yearly scheduled event is run in two different ways by specifying the **Input type**:

* **Date** – run it on a specific date
* **Month and weekday** – run it on a specific weekday

#### Date

This allows you to run the event on the same date every year (for example, April 5th).

| Property | Description |
| --- | --- |
| Date | The month and day on which to run the event. |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

{{% alert color="warning" %}}
It is possible to select the leap day (February 29). In non-leap years, the event will be run on February 28th.
{{% /alert %}}

#### Month and Weekday

This allows you to run the event on a certain day of the week every year. For example, the first Monday in April.

| Property | Description |
| --- | --- |
| Month | The month in which to run the event. |
| Day | The day on which to run the event. |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

### Monthly Properties {#monthly}

You can also specify how a monthly scheduled event is run in two different ways by specifying the **Input type**:

* **Particular day** – run it on a specific day of the month
* **Weekday** – run it on a specific weekday

#### Particular Day

This allows you to run the event on the same date every month, or number of months (for example, the 5th of each month).

| Property | Description |
| --- | --- |
| Interval | The number of months between each running of the event. This must be a divisor of 12. |
| Months | The months in which the event will be run; not visible when running every month. |
| Day | The day of the month on which to run the event. |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

{{% alert color="warning" %}}
The selected day might not exist in all selected months. In those months, the event will be run on the last day of the month.
{{% /alert %}}

#### Weekday

This allows you to run the event on a certain day of the week every month, or number of months. For example, the first Monday of each month.

| Property | Description |
| --- | --- |
| Month | The month in which to run the event. |
| Day | The day on which to run the event. |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

### Weekly Properties {#weekly}

This allows you to run the event on certain days every week. For example every Monday, Wednesday, and Friday.

| Property | Description |
| --- | --- |
| Days | The days of the week on which to run the event. |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

### Daily Properties {#daily}

This allows you to run the event every day.

| Property | Description |
| --- | --- |
| Time | The time at which to run the event. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

### Hourly Properties {#hourly}

This allows you to run the event every hour, or number of hours. It also allows you to set an offset, so the first event is not run at midnight. For example, every three hours starting at 01:30.

| Property | Description |
| --- | --- |
| Interval | The number of hours between each running of the event. This must be a divisor of 24. |
| Offset (minutes) | The offset in minutes from the start time of an event period. For instance, set to 90 in order to run halfway during a 3 hour interval. The offset must be shorter than the specified interval. |
| UTC/Server | Whether to use UTC or a local time set on the server. See [Server Time](#server-time) below for more information. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

Example times will be shown in the dialog to illustrate the effects of the offset.

{{< figure src="/attachments/refguide/modeling/resources/scheduled-events/hourly-event.png" class="no-border" >}}

### Minutes Properties {#minutes}

This allows you to run the event every minute, or number of minutes.

| Property | Description |
| --- | --- |
| Interval | The number of minutes between each running of the event. This must be a divisor of 60. |
| On overlap | See explanation of options in [Long-Running Events](#long-events). |

### Long-Running Events {#long-events}

If a repeated scheduled event takes longer than the interval, an overlap would occur. To prevent this, choose one of the following options in the **On overlap** property of the scheduled event:

* **Skip next** – If an event takes longer than its interval, subsequent events are skipped until it has completed. The next event will start at the next available scheduled time.

    This is the default and will ensure that events are always run at a scheduled time, subject to queue resources being available (see [Running Concurrently](#concurrently), below).

* **Delay next** – If an event takes longer than its interval, the next event is delayed until it has completed. The next event will start immediately after the previous one has completed and will likely not be run at a scheduled time.

    If multiple successive events are longer than their interval, the intended scheduled time will be further and further away from the actual start time. This situation should be avoided by choosing an interval that is generally sufficient to run the event.

    If an event has drifted a long way from its intended schedule over time, the best way to remedy this is to delete the event and create a new one (with a longer interval).

## Additional Information

### Server Time{#server-time}

You can choose **Server** time rather than **UTC** time, but make sure that your server time is set as you expect. Many servers are set to run on UTC to avoid issues when working across time zones.

{{% alert color="warning" %}}
All Mendix Cloud servers are set to UTC.
{{% /alert %}}

### Daylight Saving

If the chosen time zone is UTC, then an event will always be run at the specified time. However, if server time is chosen there may be daylight saving for the configured time zone (in the app's runtime settings). If a time is chosen which is in the daylight saving time window (the time at which the clocks change, for example between 01:00 and 03:00 in Europe), then that time will not occur on one day of the year and occur twice on another day of the year. The scheduled event will not be affected by this and will run exactly once on those days.

### Running Concurrently{#concurrently}

No more than ten scheduled events can be run in parallel for each cluster node. Additional scheduled events will be queued and run in "first in, first out" order as currently running events finish.

This limit cannot be overridden.

### Unsupported Intervals

Hour- and minute-based intervals can only be integer divisors of 24 or 60, respectively. For example you cannot schedule an event to be run every seven minutes as this does not divide precisely into 60 minutes. If it is absolutely critical that an unsupported interval is used, you should schedule the event with interval value of one (every hour or every minute) and decide within the microflow whether it should continue at that particular time.

### Cleaning Up Completed Scheduled Events

Every time a scheduled event is run it produces an entry in the `System.ProcessedQueueTask` table in the database. Over time these accumulate and the table can grow large. Refer to the documentation on [Cleaning Up Old Processed Tasks](/refguide/task-queue/#cleanup) in *Task Queue* to learn how to remove processed entries.

### One Session for All Scheduled Events

Each runtime node has one specific session in memory which is used for all scheduled events. Changes to this session are visible for all scheduled events on that node. Things like changing the time zone via a Java action in one scheduled event can lead to unexpected behavior in other scheduled events. You are therefore strongly discouraged from changing the session object for scheduled events.

### Complex Interval Patterns

If you want to implement complex interval patterns, such as running a scheduled event hourly but only on Tuesdays, you can do the following:

1. Create a Scheduled Event that runs at the highest required frequency (in this example, hourly).
1. Add a condition at the start of the microflow triggered by the event which checks whether the additional criteria are met. In this example, you would verify that the current day of the week is Tuesday.
1. Perform the actions relating to the event only if the condition evaluates to true.

This approach allows you to maintain flexibility in scheduling while keeping the logic centralized and easy to manage.

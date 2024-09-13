---
title: "Scheduled Events"
url: /refguide/scheduled-events/
weight: 80
description: "Options for configuring scheduled events"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

With scheduled events you can make the runtime execute a microflow repeatedly at specific intervals. The microflow is run using the [task queue](/refguide/task-queue/) mechanism.

A scheduled event is added to your module as a document (right-click your module and you will find it listed under *Add other*).

{{% alert color="warning" %}}
Scheduled events can be tested locally, but they will not be run if your app is deployed as a Free App. See the Free App section of [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app) for more information on Free App limitations.
{{% /alert %}}

## Common Properties

| Property | Description |
| --- | --- |
| Name | The name of the scheduled event. This name is recorded in the `System.ProcessedQueueTask` objects at runtime, so that you can identify when this scheduled event has been processed. See [Task Queues](/refguide/task-queue/) for additional information about this object. ⚠ For compatibility with legacy scheduled events, it is also stored in the `ScheduledEventInformation` objects but this is deprecated and will be removed in Mendix 11. |
| Documentation | This field is for documentation purposes in the app model only. Its value is not visible to end-users and doesn't influence the behavior of your application. |

## Execution Properties

| Property | Description |
| --- | --- |
| Microflow | The microflow that is executed when the scheduled event is executed. It should have no parameters and is run with all rights (see [Microflow](/refguide/microflow/)). |
| Enabled | The microflow is only executed if the scheduled event is enabled. This setting only applies when running from Studio Pro or from Eclipse. On production environments, scheduled events are enabled/disabled via the platform tools (for example the Mendix Portal or Windows Service Console). |

## Timing Properties

| Property | Description |
| --- | --- |
| Interval type | The type of scheduled that should be executed. Valid values are [Yearly](#yearly), [Monthly](#monthly), [Weekly](#weekly), [Daily](#daily), [Hourly](#hourly) or [Minutes](#minutes). |

### Yearly Properties {#yearly}

Yearly events come in 2 flavors:

* Execute on a specific date
* Execute on a specific weekday

#### Specific Date

This allows you to run the event on the same date every year (for example, April 5th).

| Property | Description |
| --- | --- |
| Date | The month and day on which to execute the event. |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

{{% alert color="warning" %}}
It is possible to select the leap day (February 29). In non-leap years the event will then be executed on February 28th.
{{% /alert %}}

#### Specific Month and Weekday

This allows you to run the event on a certain day of the week every year. For example, the first Monday in April.

| Property | Description |
| --- | --- |
| Month | The month in which to execute the event. |
| Day | The day on which to execute the event. |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### Monthly Properties {#monthly}

Monthly events also come in 2 flavors:

* Execute on a specific day of the month
* Execute on a specific weekday

#### Specific Date

This allows you to run the event on the same date every month, or number of months (for example, the 5th of each month).

| Property | Description |
| --- | --- |
| Interval | The number of months in between executions of the event. This must be a divisor of 12. |
| Months | The months in which the event will be executed; not visible when executing every month. |
| Day | The day of the month on which to execute the event. |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

{{% alert color="warning" %}}
The selected day might not exist in all selected months. In those months the event will be executed on the last day of the month.
{{% /alert %}}

#### Specific Weekday

This allows you to run the event on a certain day of the week every month, or number of months. For example, the first Monday of each month.

| Property | Description |
| --- | --- |
| Month | The month in which to execute the event. |
| Day | The day on which to execute the event. |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

#### Weekly Properties {#weekly}

This allows you to run the event on certain days every week. For example every Monday, Wednesday, and Friday.

| Property | Description |
| --- | --- |
| Day | The days of the week on which to execute the event. |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### Daily Properties {#daily}

This allows you to run the event every day.

| Property | Description |
| --- | --- |
| Time | The time at which to execute the event. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### Hourly Properties {#hourly}

This allows you to run the event every hour, or number of hours. It also allows you to set an offset, so the first event is not run at midnight. For example, every three hours starting at 01:30.

| Property | Description |
| --- | --- |
| Interval | The number of hours in between executions of the event. This must be a divisor of 24. |
| Offset (minutes) | The offset in minutes from the start time of an event period. For instance, set to 90 in order to execute halfway during a 3 hour interval. The offset must be shorter than the specified interval|
| On overlap | See explanation of options in [Long-running Events](#long-events). |

Example times will be shown in the dialog to illustrate the effects of the offset.

{{< figure src="/attachments/refguide/modeling/resources/scheduled-events/hourly-event.png" class="no-border" >}}

### Minutes Properties {#minutes}

This allows you to run the event every minute, or number of minutes.

| Property | Description |
| --- | --- |
| Interval | The number of minutes in between executions of the event. This must be a divisor of 60. |
| On overlap | See explanation of options in [Long-running Events](#long-events). |

### Long-running Events {#long-events}

If a repeated scheduled event takes longer than the interval, an overlap would occur. To prevent this a choice must be made on how to handle this. This is set in the **On overlap** property of the scheduled event.

* **Skip next** – If an event takes longer than its interval, subsequent events are skipped until it has completed. The next event will start at the next available scheduled time.

    This is the default and will ensure that events are always executed at a scheduled time, subject to queue resources being available (see [Running Concurrently](#concurrently), below).

* **Delay next** – If an event takes longer than its interval, the next event is delayed until it has completed. The next event will start immediately after the previous one has completed and will likely not be executed at a scheduled time.

    If multiple successive events are longer than their interval, the intended scheduled time will be further and further away from the actual start time. This situation should be avoided by choosing an interval that is generally sufficient to execute the event.

    Should an event have drifted a long way from its intended schedule over time, the best way to remedy this is to delete the event and create a new one (with a longer interval).

## Additional information

### Daylight Saving

If the chosen time zone is UTC, then an event will always execute at the specified time.
However, if server time is chosen there may be daylight saving for the configured time zone (in the app's runtime settings).
If a time is chosen which is in the daylight saving time window (the time at which the clocks change, for example between 01:00 and 03:00 in Europe), then that time will not occur on one day of the year and occur
twice on another day of the year. The scheduled event will not be affected by this and will execute exactly once on those days.

### Running Concurrently{#concurrently}

No more than ten scheduled events can run in parallel per cluster node. Additional scheduled events will be queued and run in "first in, first out" order as currently running events finish.

This limit cannot be overridden.

### Unsupported Intervals

Hour- and minute-based intervals can only be integer divisors of 24 or 60, respectively. For example you cannot schedule an event to run every seven minutes as this does not divide precisely into sixty minutes. If it is absolutely critical that an unsupported interval is used, you should schedule the event with interval value of one (every hour or every minute) and decide within the microflow whether it should continue executing at that particular time.

### Cleaning Up Completed Runs of Scheduled Events

Every time a scheduled event is run it produces an entry in the `System.ProcessedQueueTask` table in the database. Over time these accumulate and the table can grow large. Refer to the documentation on [Cleaning Up Old Processed Tasks](/refguide/task-queue/#cleanup) in *Task Queue* to learn how to remove processed entries.

### One Session for All Scheduled Events

Each runtime node has one specific session in memory which is used for all scheduled events. Changes to this session are visible for all scheduled events on that node. Things like changing the time zone via a Java action in one scheduled event can lead to unexpected behavior in other scheduled events. You are therefore strongly discouraged from changing the session object for scheduled events.

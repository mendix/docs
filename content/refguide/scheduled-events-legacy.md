---
title: "Scheduled Events"
parent: "resources"
menu_order: 80
description: "Options for configuring scheduled events"
tags: ["Scheduled Event", "Execution properties", "Timing", "intervals", "scheduling issues", "time zones", "daylight saving"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With scheduled events you can let the runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval, for example every day.

A scheduled event is added to your module as a document (right-click your module and you will find it listed under *Add other*).

{{% alert type="warning" %}}
Scheduled events can be tested locally, but they will not be run if your app is deployed as a Free App. See the Free App section of [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy#free-app) for more information on Free App limitations.
{{% /alert %}}

A `ScheduledEventInformation` object is created every time the scheduled event defined in your app model is run. This records the following:

* **Name** – the **Name** of the scheduled event as entered in [Common Properties](#common-properties)
* **Description** – the **Documentation** of the scheduled event as entered in [Common Properties](#common-properties)
* **StartTime** – the time this run of the scheduled event started
* **EndTime** – the time this run of the scheduled event ended
* **Status** – the current status of this run of the scheduled event:
    * **Running** – the event is currently running and has not yet ended
    * **Completed** – the event has completed successfully
    * **Error** – the event completed with an error — you can find the error on the error log using the *StartTime* and *EndTime* to locate it if necessary
    * **Stopped** – the scheduled event was stopped before completion, for example by the app being stopped or a cluster node becoming unhealthy

{{% alert type="warning" %}}
The `ScheduledEventInformation` objects are not cleared automatically. If you have a large number of scheduled events you will need to decide how long you need to keep this information and remove stale objects when they are no longer required.
{{% /alert %}}

## 2 Common Properties{#common-properties}

| Property | Description |
| --- | --- |
| Name | The name of the scheduled event. This name is stored in the `ScheduledEventInformation` objects at runtime, so that runs of the scheduled event are recognizable. |
| Documentation | This field is for documentation purposes in the app model only. Its value is not visible to end-users and doesn't influence the behavior of your application. |

## 3 Execution Properties

| Property | Description                                                                                                                                                                                                                                                                                   |
| --- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microflow | The microflow that is executed when the scheduled event is executed. It should have no parameters and is run with all rights (see [Microflow](microflow)).                                                                                                                                    |
| Enabled | The microflow is only executed if the scheduled event is enabled. This setting only applies when running from Studio Pro or from Eclipse. On production environments, scheduled events are enabled/disabled via the platform tools (for example Developer Portal or Windows Service Console). |

## 4 Timing Properties

| Property | Description |
| --- | --- |
| Start date/time | The date and time when the scheduled event is executed the first time. If the start date/time is **UTC** time the scheduled event is executed when it is the indicated time in UTC (Universal Coordinated Time). If the start date/time is **Server** time, the scheduled event is executed when it is the indicated time on the server on which your application runs. |
| Repeat | The scheduled event is repeated with the indicated interval (for example, every 5 minutes) if repeat is set to **Yes**. |
| Interval | This number together with the interval type indicates how large the interval is between two events. This number should be greater than zero. |
| Interval type | The interval type determines the unit of the interval. Together with the interval number it indicates how large the interval between two events is. For example, 1 day or 10 minutes. |

## 5 Additional information

### 5.1 Running Concurrently

You cannot run more then 10 scheduled events in parallel.

This limit cannot be overridden and is independent of how the app is scaled.

### 5.2 Calculating Intervals

The platform schedules the scheduled event by fixed intervals. That means that at startup, the platform schedules the next iterations/intervals the scheduled event should run. This is done by retrieving the intervals, and in addition the platform does some calculations.

Seconds, Minutes, Hours, Days, and Weeks are scheduled exactly as configured.

Months and Years might not be executed as you would expect: 

* A **Month** is interpreted as a *31 day interval*
* A **Year** as a *365 day interval*

So be aware when scheduling your events using Month or Year, because they may not run on the day you are expecting.

For example, if you schedule an event to start on March 1 with one month intervals, it will subsequently run on April 1, May 2, Jun 2, Jul 3, Aug 3, Sep 3, and so forth.

This is a simplified example of the implementation of how the Mendix 5.3.2 release calculated the interval. Later releases might behave slightly different.

```java
switch(scheduledEvent.getIntervalType())
{
    case SECOND:
        timeUnit = TimeUnit.SECONDS;
        interval = scheduledEvent.getInterval();
        break;
    case MINUTE:
        timeUnit = TimeUnit.MINUTES;
        interval = scheduledEvent.getInterval();
        break;
    case HOUR:
        timeUnit = TimeUnit.HOURS;
        interval = scheduledEvent.getInterval();
        break;
    case DAY:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval();
        break;
    case WEEK:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*7;
        break;
    case MONTH:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*31;
        break;
    case YEAR:
        timeUnit = TimeUnit.DAYS;
        interval = scheduledEvent.getInterval()*365;
        break;
}
```

{{% alert type="warning" %}}

If it is absolutely critical to run a scheduled event on a specific day of the month, you should schedule the event to run daily and then check whether this is the right day of the month to run it. 

In your microflow you should start with a decision using an expression such as:

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 15
// This will run the scheduled event on the 15th of the month
```

To run it on the last day of the month, you can use this suggestion from [Herbert Vujik](https://mxforum.mendix.com/questions/6934/How-are-monthly-Scheduled-Events-planned#10518):

```java
formatDateTime([%CurrentDateTime%], 'dd') = formatDateTime([%EndOfCurrentMonth%], 'dd') 
```
{{% /alert %}}

### 5.3 Specifying the Time

In addition to Monthly and Yearly scheduled events, you also want to be careful when scheduling daily events if they need to run every day at a specific time. This is because of daylight saving time.

Whenever you set up an event to run every day at a certain time, it will start at the specified time. However, after this it will run at a fixed interval (internally this is calculated back to run every X nanoseconds). This means that a daily event runs every 24 hours. Therefore, if the time changes because of daylight saving, your event *could* be an hour off.

This depends on the locale (timezone) your server is hosted in. Even if you choose **UTC** time, you will still experience this time shift if you are in a country that adopts daylight savings, as the daylight savings changes the offset from UTC.

Unfortunately there isn't a great workaround for this issue. If the scheduled event has to be run at a specific time you could create a similar solution to that described above, scheduling the event hourly and using 'HH' (0-23 hours), or 'kk' (1-24 hours) rather than 'dd' in the date format expression. Remember that this will increase the number of `ScheduledEventInformation` objects created.

### 5.4 Long Running Events

If a repeated scheduled event takes longer than the interval then the next scheduled event will be delayed, the events will not run concurrently. For example, if a scheduled event is repeated every 5 minutes but the event takes 10 minutes then the next event is delayed by 5 minutes.

### 5.5 Cleaning up old events {#cleanup}

The execution of a scheduled event produces a `System.ScheduledEventInformation` row in the database. Over time these accumulate and the table can grow large.

In Mendix versions 9.9.0 and above, the `System.ScheduledEventInformation` can be cleaned up automatically by specifying the `com.mendix.core.ScheduledEventsCleanupAge` runtime setting. This setting specifies (in milliseconds) how old rows in the table have to be before they are automatically cleaned up. Only rows with the "Completed" status are cleaned up.

When this setting is not specified, no cleanup is performed.

{{% alert type="info" %}}
When turning on the automatic cleanup after having used scheduled events for a long time, there might be many rows to clean up, which will be initiated when the runtime starts. This may cause additional load on the database, but will not block the startup. It is recommended not to do this during a busy period.
{{% /alert %}}

In versions of Mendix below 9.9.0, you can clean up old events by creating a microflow for administrators to use if the table gets too large.

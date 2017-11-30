---
title: "Scheduled Events"
category: "Modeler"
---


With scheduled events you can let the runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval, for example every day.

## Common Properties

Property      | Description
------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------
Name          | The name of the scheduled event. This name is stored in the ScheduledEventInformation objects at runtime, so that runs of the scheduled event are recognizable.
Documentation | This field is for documentation purposes only. Its value is not visible to end users and doesn't influence the behavior of your application.


## Execution Properties

Property  | Description
--------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Microflow | The microflow that is executed when the scheduled event is executed. It should have no parameters and run with all rights (see [Microflow](microflow)).
Enabled   | The microflow is only executed if the scheduled event is enabled. This setting only applies when running from the Modeler or from Eclipse. On server deployments, scheduled events are enabled/disabled using configuration files.


## Timing Properties

Property        | Description
--------------- | -------
Start date/time | The date and time when the scheduled event is executed the first time.<br /><br />If the start date/time is UTC time the scheduled event is executed when it is the indicated time in UTC (Universal Coordinated Time).<br /><br />If the start date/time is server time, the scheduled event is executed when it is the indicated time on the server on which your application runs.
Repeat          | The scheduled event is repeated with the indicated interval (e.g. every 5 minutes) if repeat is on.
Interval        | This number together with the interval type indicates how large the interval is between two events. This number should be greater than zero.
Interval type   | The interval type determines the unit of the interval. Together with the interval number it indicates how large the interval between two events is. For example, 1 day or 10 minutes.


### Additional information

The platform schedules the scheduled event by fixed intervals. That means that at startup, the platform schedules the next iterations/intervals the scheduled event should run. This is done by retrieving the intervals, and in addition the platform does some calculations.

Seconds, Minutes, Hours, Days, and Weeks are scheduled exactly as configured. However, Months and Years might not be executed as you would expect. A month is interpreted as a 31 day interval, a year as a 365 day interval.

If you schedule an event to start at March 1, it will run on April 1, May 2, Jun 2, Jul 3, Aug 3, Sep 3, etc. So be aware when scheduling your events, because it is possible that they will run 1 day of what you have been expecting.

This is a simplified example of the implementation of how the Mendix 5.3.2 release calculates the interval. Later releases might behave slightly different, but I haven't seen a message in the release notes that this has been improved.

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

```
If it is absolutely critical to run a scheduled event on a specific day of the month, you should schedule the event to run daily. 
```

In your microflow you should start with an exclusive split and do an expression such as:

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 1
```

or

```java
parseInteger( formatDateTime( [%CurrentDateTime%], 'dd') ) = 15
// This will run the scheduled event on the 1th and 15th of the month
```

Or as [Herbert Vujik](https://mxforum.mendix.com/questions/6934/How-are-monthly-Scheduled-Events-planned#10518) suggests, use this expression for running it on the last day of the month:

```java
formatDateTime([%CurrentDateTime%], 'dd') = formatDateTime([%EndOfCurrentMonth%], 'dd') 
```

In addition to Monthly scheduled events, you also want to be careful when scheduling daily events. If you schedule an event to run every day at a specific time, you also need to be aware of daylight saving time.

Whenever you set up an event to run every day at a certain time, it will start at exactly the specified time. However, after this it will run at a fixed interval (internally this is calculated back to run every X nanoseconds). This means that a daily event runs every 24 hours. Therefore, if the time changes because of daylight saving, your event **could** be an hour off.

But this is only applicable depending on the locale (timezone) your server is hosted in. No matter what option you pick from your perspective, if you are in a country that adapts daylight savings, you will notice the scheduled event run an hour off schedule. When scheduling an event to start at a certain UTC time, the platform technically won't have a problem, because UTC doesn't know daylight saving. However your users will still experience the event to run at a different hour.

Unfortunately there isn't a great workaround for this issue. You could create a similar solution as described above. This can be done with the same type of expressions, except instead of using date format expression 'dd', you should use 'HH' (0-23 hours), or 'kk' (1-24 hours).

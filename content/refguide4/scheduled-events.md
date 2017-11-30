---
title: "Scheduled Events"
parent: "modules"
---
With scheduled events you can let the runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval, for example every day.

## Common Properties

### Name

The name of the scheduled event. This name is stored in the ScheduledEventInformation objects at run-time so that you can recognise runs of the scheduled event.

### Documentation

This field is for documentation purpose only; its value is not visible to end user and doesn't influence the behavior of your application.

## Execution Properties

### Microflow

The microflow that is executed when the scheduled event is executed. It should have no parameters and run with all rights (see [Microflow](microflow)).

### Enabled

The microflow is only executed if the scheduled event is enabled. This setting only applies when running from the Modeler or from Eclipse. On server deployments, scheduled events are enabled/disabled using configuration files.

## Timing Properties

### Start date/time

The date and time when the scheduled event is executed the first time.

{{% alert type="warning" %}}

If the start date/time is UTC time the scheduled event is executed when it is the indicated time in UTC (Universal Coordinated Time).

If the start date/time is server time, the scheduled event is executed when it is the indicated time on the server on which your application runs.

{{% /alert %}}

### Repeat

The scheduled event is repeated with the indicated interval (e.g. every 5 minutes) if repeat is on.

### Interval

This number together with the interval type indicates how large the interval is between two events. This number should be greater than zero.

### Interval type

The interval type determines the unit of the interval. Together with the interval number it indicates how large the interval between two events is. For example, 1 day or 10 minutes.

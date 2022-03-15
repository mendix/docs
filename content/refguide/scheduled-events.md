---
title: "Scheduled Events"
parent: "resources"
menu_order: 80
description: "Options for configuring scheduled events"
tags: ["Scheduled Event", "Execution properties", "Timing", "intervals", "scheduling issues", "time zones", "daylight saving"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With scheduled events you can let the runtime execute a microflow at specific moments in time.

A scheduled event is added to your module as a document (right-click your module and you will find it listed under *Add other*).

{{% alert type="warning" %}}
Scheduled events can be tested locally, but they will not be run if your app is deployed as a Free App. See the Free App section of [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy#free-app) for more information on Free App limitations.
{{% /alert %}}

## 2 Variants

Until Mendix 9.13.0 scheduled events only execute on the cluster leader node, with an at-most-once guarantee, which means that they
will not be executed if something happens to the cluster leader node. Also, these scheduled events do not support proper monthly and
yearly events and potentially suffer from a shift of one hour due to daylight saving. These 'legacy' scheduled events will be
deprecated and will no longer be supported from Mendix 10 onward.

As of Mendix 9.13.0 scheduled events have been improved and are being executed using the [task queue](task-queue.md), providing an
at-least-once guarantee. They will be executed by an arbitrary node in the cluster and support monthly and yearly events properly.
Most importantly, the task queue based scheduled events no longer have a start-time, but allow specifying a particular time of day,
ensuring that they work as expected in the face of daylight saving.

Mendix 9.13.0 and above supports the following schedule types:

* **Legacy** - the type that existing before Mendix 9.13.0; see [Legacy scheduled events](scheduled-events-legacy.md)
* **Yearly** - an event that occurs once a year on a particular day or date and time; see [Yearly scheduled events](scheduled-events-task-queue.md#yearly)
* **Monthly** - an event that occurs every so many months on a particular day and time; see [Monthly scheduled events](scheduled-events-task-queue.md#monthly)
* **Weekly** - an event that occurs weekly on particular days and time; see [Weekly scheduled events](scheduled-events-task-queue.md#weekly)
* **Daily** - an event that occurs daily at a particular time; see [Daily scheduled events](scheduled-events-task-queue.md#daily)
* **Hourly** - an event that occurs every so many hours; see [Hourly scheduled events](scheduled-events-task-queue.md#hourly)
* **Minutes** - an event that occurs every so many minutes; see [Minute scheduled events](scheduled-events-task-queue.md#minutes)

## 3 Migration

When migrating to Mendix 9.13.0 or above Studio Pro will attempt to convert legacy scheduled events into task queue based events,
when possible. In the following cases this is not possible and manual conversion is requested:

* the event has a start-time in the future; change the start-time to a date in the past or use a task based scheduled event
* the event has interval type Month or Year, which is translated in 31 and 365 days respectively; use the Monthly or Yearly type 
* the event has interval type Seconds, which is no longer supported
* the event has an interval that doesn't divide its interval type nicely, causing it to drift (e.g. every 7 minutes, causing it to 'drift' 4 minutes every hour)

{{% alert type="warning" %}}
Mendix 9.13.0 and above allow legacy scheduled events to be edited, but do not allow new legacy scheduled events to be created.
{{% /alert %}}

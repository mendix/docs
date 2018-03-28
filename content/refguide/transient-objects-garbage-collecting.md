---
title: "Transient Objects and Garbage Collecting"
category: "Runtime"
description: "This page will explain the life cycle of both persistable and non-persistable objects, and how they flow through the platform memory."
tags: ["persistable", "non-persistable", "transient", "objects", "garbage", "collecing"]
---
This page will explain the life cycle of both persistable and non-persistable objects, and how they flow through the platform memory. In order to understand the behavior of transient objects there are a few facts that you need to be aware off:

*   A Transient Object (also known as a non-persistable object) is an object that is considered temporary and only exists in memory
*   Changed Persistable Objects that are not committed only exist in memory and behave similar to Transient Objects
*   The Mendix Platform will remove objects automatically when they are no longer ‘used’ (the definition of ‘used’ will be explained later)


## New Behavior in Mendix 7

The way that Transient Objects stay in memory has significantly changed in Mendix 7. They are no longer kept in the Mendix Platform Cache on the server's side, but maintained in the client. This means server-side garbage collection no longer takes place. This simplifies the handling of objects on the server side because an object will not be garbage collected while it exists on the server.

Objects will be returned to the client with the response of a request. Objects created outside the context of a request (like Scheduled Event execution) will automatically be discarded when the scheduled event has finished.

### Influencing the Impact on Response Size
As the objects that are still available are returned with the server call automatically, it is possible to reduce the response size by deleting Transient Objects that are not useful for the client or subsequent requests. This can happen by deleting non-persistable objects or rolling back changed persistable objects.

## Client Side Garbage Collection

The Mendix Client has a garbage collector. This garbage collector will automatically free up memory by deleting objects that are no longer used or necessary to keep in memory. Objects are used when they are visible in a widget. For non-persistable objects it also means that they are seen as in-use when other used objects refer to them. Unchanged persistable objects are removed from memory when they aren't used because they can be reloaded from the Mendix Database when necessary.

### Exceptional Cases
When non-persistable objects are associated to the current user or to the current session, they (including the non-persistable objects they associate) are not garbage collected. As such, this can function as a way for objects to survive requests, although this should be used with care as it can easily lead to a growing state.

## Tracking State Growth
As state is managed by the client, it becomes harder to get an overview of all the state used by all clients in Mendix (it's no longer available in one place, but distributed over all the clients). However, there are means in Mendix to track state growth by observing the log files.

### Observing State Growth by Session
By enabling `TRACE` level logging on the `RequestStatistics` log node, Mendix Runtime will log a message for every request that contains information about state. This information is logged in the form of a JSON structure, allowing it to be used in tooling to create graphs over time. See this example of a log statement (formatted for readability in this case):
```
TRACE: Request-State statistics: {
  session: "fd0771fe-8c12-49cf-8667-921058b116a3",
  action: "execute-action",
  total: 5,
  details: {
    "MyModule.MyEntity": 3,
    "AnotherModule.SomeEntity": 2
  }
}
```
In the details section you find the number of instances per entity type available in the state of a request.

### Detecting Requests with Large State
By default the Mendix Runtime will log a `WARNING` on the `RequestStatistics` log node in case the request state exceeds the configured threshold. See this example of a log statement:
```
WARNING: Request state size of 551 objects exceeds the threshold of 500 objects. Request details: type `execute-action` in session `fd0771fe-8c12-49cf-8667-921058b116a3`. State consists of:
 * MyModule.MyEntity: 421 objects
 * AnotherModule.SomeEntity: 130 objects
```
This threshold can be configured with the custom setting `com.mendix.webui.StateSizeWarningThreshold` (the value is a number that reflects the total number of objects in the request state).

#### Choosing a Correct Threshold Level
Choosing the right level for the threshold is crucial because when it's set too low it will trigger too often and setting it too high will cause the detection of problems too late. It is meant to detect state memory leakage, which means that state grows to certain levels and does not get properly garbage collected. In some apps it is possible that some pages use a large amount of non-persistable objects to show the data on-screen. In that case the threshold should be larger then the amount of objects that are normally shown in this screen to prevent this warning from being logged too often.

#### Acting on Large Request State Problems
When the request state exceeds the configured threshold, you can look at the following list of possible causes (or a combination of them):
 * a problem in a widget (in case the widget does not unsubscribe itself from updates on objects which it has shown at a point in time)
 * too many objects are associated with the current session or user
 * non-persistable objects associate an object shown in a widget in a layout (meaning that this object stays in-use as long as this layout is shown, usually a long time)

In order to find the root cause of this state size, you need to make a state overview dump using the developer tools in the client. This allows you to see the objects that are in the state and why they are not garbage collected.

## Server side memory management

For every request to the Mendix runtime, be it from the client or via web service calls, objects are cleaned up at the end of the request. This means that if you create a lot of temporary objects in a microflow they will occupy runtime memory untill the end of the request.

## Related Articles

*   [Java Memory Usage with Mendix](java-memory-usage-with-mendix)

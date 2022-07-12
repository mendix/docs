---
title: "Advanced Custom Settings in Mendix Runtime"
url: /refguide7/tricky-custom-runtime-settings/
description: "Describes advanced custom settings in Mendix Runtime and how to configure them."
tags: ["Support", "custom settings"]
---

## 1 Introduction

There are many custom settings in Mendix, most of which are described in [Custom Settings](/refguide7/custom-settings/) in the Mendix Reference Guide.

However, a few of the more commonly used custom settings can be complicated and have far-reaching implications. That is why we would like to give these settings a bit of special attention and more thoroughly explain the consequences of changing them.

## 2 Session Duration

### 2.1 Web Client Settings

The following settings influence the behavior of the Mendix web client:

| Name | Description | Default value |
| --- | --- | --- |
| `EnableKeepAlive` | Defines whether the web client sends a keep alive request every `SessionTimeout`/2 milliseconds in order to prevent a session timeout. Each click in the browser also acts as `KeepAlive`. Disabling this property will result in the user being logged out automatically after 10 minutes of inactivity, even if the browser remains open. | true |

### 2.2 General Settings

The following custom settings can be configured:

| Name | Description | Default value |
| --- | --- | --- |
| `SessionTimeout` | Defines after how much time the session becomes invalid (in milliseconds). After that timeout, a session becomes applicable for removal. The session won't be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 |
| `ClusterManagerActionInterval` | The interval (in milliseconds) used for performing all cluster manager actions. These actions include unblocking users and removing invalid sessions. If nothing is specified, the interval is half the `SessionTimeout`. | 300000 |

Increasing the session timeout can improve the user experience, especially on mobile devices. It is important to keep in mind that entities used to present data to the user or entities that are created or retrieved when a user executes a microflow are tied to that user's session, and those entities can remain in memory for long periods of time. When a user signs out, these entities will be removed from memory, but if the user idles but does not sign out (for example, if they leave the browser tab open while executing other tasks or simply close the browser without signing out), the session timeout can act as a safeguard that prevents memory usage from being tied up by idle sessions. The first case can also be mitigated by setting the `EnableKeepAlive` custom setting to false. On most browsers, this setting will ensure that any idle browser tab will be affected by the session timeout as well.

Since the frequency of the session timeout checks and other important events is tied to the `ClusterManagerActionInterval`, it makes sense to not use the default of half the session timeout when the value is increased by a lot (for example, 24 hours or more). It might make sense to put a maximum value on `ClusterManagerActionInterval`, regardless of how high the value of `SessionTimeout` is set. An approximate figure is 15 minutes, but ultimately this will depend on the functional requirements of the application.

With the introduction of stateless runtime in Mendix 7, the potential of memory usage leading to problems has been reduced for two reasons. The first reason is the ability to run in a horizontally scaled environment. Multiple runtimes will mean unintended memory usage is also divided over those runtimes, reducing the impact of any one idle user session. But the main (and second) reason is that most of the memory usage has been moved to the client. So instead of all entities in the memory ending up on the application node, a large share of them will end up in the browser of the client. This should significantly reduce the potential strain on the application node that can be caused by increasing the `SessionTimeout` default value to a much higher value. If you are setting the timeout to a very high value in Mendix 6, you should consider using one node size larger than you would use otherwise.

Another important matter that can be affected by increasing the session timeout is the user restrictions imposed by your Mendix license. Longer sessions might mean more concurrent users at any given time. This is something to keep in mind when deciding on the specifics of the license you will need to run your application.

Finally, there is a security consideration to be made. An idle session means that there is a potential for a session to be hijacked in case the user does not follow standard security procedures. If they leave their computer unlocked at any given time and do not remain present at the their computer afterwards, any person with physical access to that user’s computer could steal or use it and would be able to make use of the session for their own gain. With the default session timeout value this risk is reduced, as the window in which physical access is possible is much more limited (meaning, a session timeout of 24 hours is riskier than a session timeout of 10 minutes). How much of a concern this is will depend on the application’s core business goal and the type of people working with the app. For example, IT professionals should be more likely to follow standard security procedures than most other user groups.

So, make sure to keep in mind all of the above when changing these values. Also, make sure your decision to alter any of these values is made with the right considerations.

## 3 Query Logging

### 3.1 Database Settings: Common settings

| Name | Description | Default value |
| --- | --- | --- |
| `LogMinDurationQuery` | Defines whether database queries are logged via the `ConnectionBus_Queries` log node if they finished after the amount of milliseconds specified here. By default, only the concerning SQL query will be logged. Set the log level of the `ConnectionBus_Queries` log node to TRACE to show more information about the form or the microflow that leads to this query. |   |

`LogMinDurationQuery` can be a very helpful tool in detecting queries that are taking longer than expected. This is especially useful for queries that only take longer than expected after the data used in and by the app grows larger, because this might mean the queries will only become slower after a few months of usage and might not have turned up in pre-release performance tests. Determining that a query is slow depends on the type of app you are running. But in general, any query that directly affects a user using the app (meaning, not a background process) will have a lower threshold for determing it as slow than a query running in the background. For example, a drop-down menu that takes 5 seconds to load before anything can be selected is many times worse than a PDF generated in the background taking 8 instead of 4 seconds because of a “slow” query that takes 5 seconds instead of 1 second.

In the Mendix Cloud, we have chosen a default value of 10000 (meaning, 10 seconds). As any such query would be noticeable on the front end of the application. If your application has no background processes, this value might be too high. On the other hand, if your application is running many background processes with minimal user interaction, this value might be too low. In the end, the right value to set will depend on the functional requirements of your app and needs to be set accordingly.

The most important part of this setting is to regularly check the application log for any queries exceeding this value and to resolve them if they are deemed problematic. Setting this value without following up on it is as useful as not setting the value at all. Queries running slowly can negatively affect the user experience, the throughput of any action affected by them, the memory usage of the application, the CPU usage of the application, and can even lead to outages in extreme cases. Given all that, Mendix strongly advises setting this value to a number that makes sense for your application and following up on any query that is logged. 

You can find these log entries by looking for the following phrase in your application log: **Query executed in**. The phrase will appear in an example like this: `Jan 01 02:03:04.567 - WARNING - ConnectionBus_Queries: (1/4) Query executed in 642 seconds and 694 milliseconds: UPDATE "somemodule$someentity”`.

## 4 The Number of Database Connections

### 4.1 Connection Pooling

The settings below are used to define the database connection pooling behavior. The Runtime uses a pool of reusable database connections. You can, for example, define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](http://commons.apache.org/pool/).

| Name | Value | Default value |
| --- | --- | --- |
| `ConnectionPoolingMaxActive` | Sets the cap on the total number of active instances from the pool. | 50 |
| `ConnectionPoolingMaxIdle` | Sets the cap on the number of "idle" instances in the pool. | 50 (since Mendix 3.3, 20 before Mendix 3.3) |
| `ConnectionPoolingMinIdle` | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when `numActive` + `numIdle` >= `maxActive`.  This setting has no effect if the idle object evictor is disabled (meaning, if `timeBetweenEvictionRunsMillis` <= 0). | 0 |

{{% alert color="info" %}}
If you change these settings, you will need to restart your app to apply the changes.
{{% /alert %}}

{{% alert color="info" %}}
These settings are configured *per runtime instance*. If you have [scaled your application](/developerportal/deploy/scale-environment/), the number of connections on the database side will be multiplied by the number of runtime instances. For example, if you set `ConnectionPoolingMaxIdle` to `50` and scale your app to 2 runtime instances, each runtime instance will create at most 50 connections, but on the database side this will lead to a maximum of 100 connections.
{{% /alert %}}

When changing the `ConnectionPoolingMaxIdle` and `ConnectionPoolingMinIdle` settings, consider the following points:

* More idle connections means more memory usage
* More idle connections means less overhead when starting a query as the connection itself does not need to be created
* Fewer idle connections means less memory usage
* Fewer idle connections means more overhead when starting a query, as the connection itself needs to be created

The most interesting setting is `ConnectionPoolingMaxActive`, as this caps the total number of queries that can run in parallel at any given point in time. The default setting for this value in a Mendix application is 50. This means that at any given time, a maximum of 50 queries can be running in parallel. For most applications this will be a very safe number, as most queries only take milliseconds, so it takes a lot of concurrent users to reach a point in which 50 queries are running in parallel. When the app is constantly at its connection pooling limit, you get errors like this:

* `WARNING - ConnectionBus: Database connections: 50 active, 0 idle.`
* `ERROR - ConnectionBus: Opening JDBC connection to 1.2.3.4:5432 failed with SQLState: null Error code: 0 Message: Cannot get a connection, pool error Timeout waiting for idle object Retrying...(1/4)`

And/or you get a DB connection pool graph that looks like this:

{{< figure src="/attachments/refguide7/runtime/custom-settings/tricky-custom-runtime-settings/mendix-customsettings-tricky-img1.png" >}}

It will be tempting to increase the `ConnectionPoolingMaxActive` value to a (much) higher number. But if any of the following are true, this is not the right action to take:

* Long running queries show up in the application log – in that case, it makes more sense to try and fix those first, as otherwise you will eventually run in to the same problem, but it will take a bit longer to occur after a (re)start of the application
* A database is running low on memory or is even out of memory regularly — in that case, it makes more sense to upgrade the database node size first
    * In this case, it  will also be likely you can find long running queries in your application log
* Only a few user sessions are active at any given time — your application might need refactoring unless you can explain why three users constantly use 50 parallel database connections

However, if all of the following are true, you should increase the `ConnectionPoolingMaxActive` value to a (much) higher number:

* There are large amounts of concurrent users (meaning, at least a few thousand)
* There are no long running queries showing up in the application log, even with the `LogMinDurationQuery` set to a relatively low number (like 3 seconds)
* There is plenty of database memory available at all times

In general, we see that increasing the `ConnectionPoolingMaxActive` value to a (much) higher number is very rarely the right action to take, even if it is unfortunately the action usually taken when you run into connection pooling issues.s

In addition, keep in mind that changing this value for an application running in Mendix Cloud v3 will also require an adjustment on the database node that only Mendix can make. So, before changing the value, please file a ticket in the [Mendix Support Portal](https://support.mendix.com/) stating the number to which you intend to change the value. When your application is running in Mendix Cloud v4, you can change the value without a change on the database node.

## 5 Read More

* [Custom Settings](/refguide7/custom-settings/)

---
title: "Advanced Custom Settings in Mendix Runtime"
linktitle: "Advanced Custom Settings"
url: /refguide/tricky-custom-runtime-settings/
description: "Describes advanced custom settings in Mendix Runtime and how to configure them."
---

## Introduction

There are many custom settings in Mendix, most of which are described in [Runtime Customization](/refguide/custom-settings/).

However, a few of the more commonly used custom settings can be complicated and have far-reaching implications. That is why we would like to give these settings a bit of special attention and more thoroughly explain the consequences of changing them.

## Session Duration {#session-duration}

### Web Client Settings

The following settings influence the behavior of the Mendix web client:

| Name | Description | Default value |
| --- | --- | --- |
| `EnableKeepAlive` | Defines whether the web client sends a keep alive request every `SessionTimeout`/2 milliseconds in order to prevent a session timeout. Each click in the browser also acts as `KeepAlive`. Disabling this property will result in the user being logged out automatically after `SessionTimeout` milliseconds of inactivity (default 10 minutes), even if the browser remains open. See `SessionTimeout` in the next section for more information. | true |

### General Settings {#general-settings}

The following custom settings can be configured:

| Name | Description | Default value |
| --- | --- | --- |
| `SessionTimeout` | Defines after how much time the session becomes invalid (in milliseconds). After that timeout, a session becomes applicable for removal. The session won't be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 (10 minutes) |
| `ClusterManagerActionInterval` | The interval (in milliseconds) used for performing all cluster manager actions. These actions include unblocking users and removing invalid sessions. See the constraints section below for default value details. | |
| `SessionKeepAliveUpdatesInterval` | Defines how often a runtime writes session LastActive dates in its memory back to the database. See the constraints section below for default value details. | |

Changing these settings can have a significant impact on your app, particularly regarding memory usage, security, and user experience. Consider the following points carefully before altering any of these values.

Increasing the session timeout can improve the user experience, especially on mobile devices.

When increasing the session timeout, be aware of the user restrictions imposed by your Mendix license. If the end-user idles but does not sign out (for example, if they leave the browser tab open while executing other tasks or simply close the browser without signing out), the session timeout can act as a safeguard that prevents sessions continuing for idle sessions. Longer sessions might mean more concurrent users at any given time. This is something to keep in mind when deciding on the specifics of the license you will need to run your application. If the browser tab remains open, setting the `EnableKeepAlive` custom setting to false will ensure, in most browsers, that the session timeout will apply to any idle browser tab.

Increasing the session timeout could also have an impact on the security of your app. An idle session means that there is a potential for a session to be hijacked in case the user does not follow standard security procedures. If they leave their computer unlocked at any given time and do not remain present at their computer afterwards, any person with physical access to that user’s computer could steal or use it and would be able to make use of the session for their own gain. With the default session timeout value this risk is reduced, as the window in which physical access is possible is much more limited (meaning, a session timeout of 24 hours is riskier than a session timeout of 10 minutes). How much of a concern this is will depend on the application’s core business goal and the type of people working with the app. For example, IT professionals are more likely to follow standard security procedures than most other user groups.

Since the frequency of session timeout checks and other important events is tied to `ClusterManagerActionInterval`, using the default value (half the session timeout) does not make sense when `SessionTimeout` is increased significantly (for example, to 24 hours or more). In this case Mendix recommends that you set a lower value for `ClusterManagerActionInterval`, regardless of how high the value of `SessionTimeout` is set. Mendix suggests a value of around 15 minutes, but ultimately this will depend on the functional requirements of the application.

If you set `ClusterManagerActionInterval` to be much longer than `SessionTimeout`, this will lead to expired sessions remaining in the database longer. On the other hand, if you set `SessionKeepAliveUpdatesInterval` to be longer than `ClusterManagerActionInterval` or set `SessionKeepAliveUpdatesInterval` to be longer than `SessionTimeout`, active sessions will be cleaned up.

{{% alert color="warning" %}}
The Runtime will fail to start if `ClusterManagerActionInterval`, `SessionKeepAliveUpdatesInterval`, and `SessionTimeout` are not configured correctly. The valid relationships between the three settings are described below.
{{% /alert %}}

### Session Timing Constraints and Defaults {#session-timing}

The following constraints apply to `ClusterManagerActionInterval` and `SessionKeepAliveUpdatesInterval`:

**ClusterManagerActionInterval:**

* Must not exceed twice `SessionTimeout`, or expired sessions may remain in the database too long
* If explicitly set to a value exceeding twice the `SessionTimeout`, startup fails with an error
* Default value:
    * Below Mendix 11.11.0: 300000 (5 minutes), or half the `SessionTimeout` if not explicitly specified
    * In Mendix 11.11.0 and above: 300000 (5 minutes), unless `SessionTimeout` ≤ 10 minutes and the default (5 minutes) would exceed twice the `SessionTimeout`, in which case it is automatically set to `SessionTimeout` / 2 (and a warning is logged)

**SessionKeepAliveUpdatesInterval:**

* Must not be greater than half the `ClusterManagerActionInterval`, or else active sessions may be cleaned up
* Must not be greater than the `SessionTimeout`, or else active sessions may be cleaned up
* Default value:
    * Before Mendix 11.11.0: one sixth of the `SessionTimeout`, or 100000 (100 seconds) if `SessionTimeout` is not set
    * In Mendix 11.11.0 and above: 100000 (100 seconds), unless `SessionTimeout` or half the `ClusterManagerActionInterval` is ≤ 100 seconds, in which case `ClusterManagerActionInterval` / 3 is used (and a warning is logged)

## Query Logging

### Database Settings: Common settings

| Name | Description | Default value |
| --- | --- | --- |
| `LogMinDurationQuery` | Defines whether database queries are logged via the `ConnectionBus_Queries` log node if they finished after the amount of milliseconds specified here. By default, only the concerning SQL query will be logged. Set the log level of the `ConnectionBus_Queries` log node to TRACE to show the SQL queries that precede this query. | 10000  |

`LogMinDurationQuery` can be a very helpful tool in detecting queries that are taking longer than expected. This is especially useful for queries that only take longer than expected after the data used in and by the app grows larger, because this might mean the queries will only become slower after a few months of usage and might not have turned up in pre-release performance tests. Determining that a query is slow depends on the type of app you are running. But in general, any query that directly affects a user using the app (meaning, not a background process) will have a lower threshold for determining it as slow than a query running in the background. For example, a drop-down menu that takes 5 seconds to load before anything can be selected is many times worse than a PDF generated in the background taking 8 instead of 4 seconds because of a “slow” query that takes 5 seconds instead of 1 second.

In Mendix Cloud, we have chosen a default value of 10000 (meaning, 10 seconds). As any such query would be noticeable on the front end of the application. If your application has no background processes, this value might be too high. On the other hand, if your application is running many background processes with minimal user interaction, this value might be too low. In the end, the right value to set will depend on the functional requirements of your app and needs to be set accordingly.

The most important part of this setting is to regularly check the application log for any queries exceeding this value and to resolve them if they are deemed problematic. Setting this value without following up on it is as useful as not setting the value at all. Queries running slowly can negatively affect the user experience, the throughput of any action affected by them, the memory usage of the application, the CPU usage of the application, and can even lead to outages in extreme cases. Given all that, Mendix strongly advises setting this value to a number that makes sense for your application and following up on any query that is logged. 

You can find these log entries by looking for the following phrase in your application log: **Query executed in**. The phrase will appear in an example like this: `Jan 01 02:03:04.567 - WARNING - ConnectionBus_Queries: (1/4) Query executed in 642 seconds and 694 milliseconds: UPDATE "somemodule$someentity”`.

## Connection Pooling

### The Number of Database Connections{#num-connections}

The settings below are used to define the database connection pooling behavior. The Runtime uses a pool of reusable database connections. You can, for example, define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](https://commons.apache.org/proper/commons-pool/).

| Name | Value | Default value |
| --- | --- | --- |
| `ConnectionPoolingMaxActive` | Sets the cap on the total number of active instances from the pool. | 50 |
| `ConnectionPoolingMaxIdle` | Sets the cap on the number of "idle" instances in the pool. | 50 |
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

And/or you get a **Number of database connections** graph that regularly peaks, or stays, at the maximum number of active connections.

It will be tempting to increase the `ConnectionPoolingMaxActive` value to a (much) higher number. But if any of the following are true, this is not the right action to take:

* Long running queries show up in the application log – in that case, it makes more sense to try and fix those first, as otherwise you will eventually run in to the same problem, but it will take a bit longer to occur after a (re)start of the application
* A database is running low on memory or is even out of memory regularly — in that case, it makes more sense to upgrade the database node size first
    * In this case, there will probably also be long running queries in your application log
* Only a few user sessions are active at any given time — your application might need refactoring unless you can explain why each user is constantly using several parallel database connections

However, if all of the following are true, you should increase the `ConnectionPoolingMaxActive` value to a (much) higher number:

* There are large amounts of concurrent users (meaning, at least a few thousand)
* There are no long running queries showing up in the application log, even with the `LogMinDurationQuery` set to a relatively low number (like 3 seconds)
* There is plenty of database memory available at all times

In general, we see that increasing the `ConnectionPoolingMaxActive` value to a (much) higher number is very rarely the right action to take, even if it is unfortunately the action usually taken when you run into connection pooling issues.

### Validating Database Connections

In some deployments, database connections can be closed by the network infrastructure, for example by a firewall when they have been inactive for a long time.
This may cause the Mendix Runtime to raise an error when it attempts to use the database connection that has now been closed.
Mendix recommends avoiding such deployments but, if one is used, the consequences can be mitigated by letting the connection pool validate connections.
This validation is performed using the `java.sql.Connection.isValid` method, which the JDBC driver will implement in a vendor specific way.

There are a number of custom runtime settings to enable this validation:

* `ConnectionPoolingTestOnBorrow`: Validate connections before returning them to the application.
* `ConnectionPoolingTestOnCreate`: Validate connections after creating them.
* `ConnectionPoolingTestOnReturn`: Validate connections after they are returned to the pool.
* `ConnectionPoolingTestWhileIdle`: Validate connections when the idle object evictor runs.

These options may have a small performance impact, which is the reason they are not enabled by default.

## Read More

* [Runtime Customization](/refguide/custom-settings/)

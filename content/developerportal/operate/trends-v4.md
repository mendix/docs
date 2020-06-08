---
title: "Trends in Mendix Cloud v4"
parent: "metrics"
menu_order: 20
description: "Describes how to interpret various graphs and trends in the Mendix Cloud v4."
tags: ["Trends","v4","Mendix Cloud","Developer Portal"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Please do not rename the anchors in this document as they are used in links from the Developer Portal
---

## 1 Introduction

To track the usage growth of your app, and to debug performance problems, the Mendix Cloud includes detailed graphs of both your app and its environment. These graphs show performance trends of your apps in the paid editions of the Mendix Cloud. If you experience issues with your app, always check the **Alerts** and **Trends** in the **Developer Portal** under **Operate**.

{{% alert type="info" %}}
This document describes the trends graphs available in Mendix Cloud v4. If your app is deployed to Mendix Cloud v3, please refer to [Trends in Mendix Cloud v3](trends).

If you don't know which Mendix Cloud version you are using, you can find out by following the instructions in [Cloud Version and Region in the Mendix Cloud](/developerportal/deploy/cloud-version-region).
{{% /alert %}}

## 2 Access to Monitoring Trends

To view the **Trends**, you must have permission to **Access the Monitoring**.

{{% alert type="info" %}}

Only the [Technical Contact](../company-app-roles/technical-contact) is allowed to grant node permissions.

{{% /alert %}}

Assign permission by following these steps:

1. Open your app in the [Developer Portal](http://home.mendix.com).
2. Click **Security** under the **Settings** category on the left.
3. Go to the **Node Permissions** tab.
4. Choose the environment for which you want to grant access.
5. Check **Access to Monitoring** next to the name of the person to whom you want to grant this permission.

    ![](attachments/trends-v4/nodepermission.jpg)

## 3 Viewing the Trends

### 3.1 Finding the Trends

You can find the trends by following these steps:

1. Open your app in the [Developer Portal](http://home.mendix.com).
2. Click **Metrics** under the **Operate** category.
3. Select the environment you want to monitor under the tab **Trends**.

![](attachments/trends-v4/environment.png)

### 3.2 Interpreting the Graphs

As with all complex IT systems, there are many interrelated components which can cause performance issues. This document cannot cover all possibilities, but is intended as a general introduction to the information which is displayed and a few ideas about where to look for possible areas of concern.

#### 3.2.1 Disk Partitions

If there is more than one disk partition in the system, the `/srv` partition generally contains project files and uploaded files of the application, while `/var` generally holds the database storage.

#### 3.2.2 Combining Information{#combine-info}

You can often get more information about the performance of your app by combining the information from several graphs. Useful graphs for this are:

* [Database Node CPU Usage](#Trends-dbcpu)
* [Database Node Disk I/Os](#Trends-dbdiskstatsiops)
* [Number of Handled External Requests](#Trends-appmxruntimerequests)

For example, a combination of a moderate number of IO operations, low disk throughput, high CPU usage, full memory disk cache, and reports of long running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

## 4 Application Statistics

This section explains the metrics that represent the current status and statistics of a running Mendix application. This includes requests that the application processes from the services/clients with which it is integrated as well as Java Virtual Machine-related statistics and the Jetty Web server it uses.

### <a name="Trends-appmxruntimerequests"></a>4.1 Number of Handled External Requests

The **Number of handled external requests** graph shows the number of requests that are sent from the client and systems that integrate with your application using web services.

![](attachments/trends-v4/no-ext-reqs.png)

The number of requests per second is split up by request handlers. The key ones are:

* **xas/** lists general queries for data in data grids, sending changes to the server, and triggering the execution of microflows
* **ws/** shows the number of web service calls that were done
* **file** shows the number of file uploads and downloads
* The **default** should not list any requests, because static content is directly served to the user by the front-facing web server, which is placed between the user and this application process

These are the commonly used types:

Request Type | Explanation
------------ | -------------
**api-doc/** | A general API doc overview for other doc request handlers.
**debugger/** | Mendix Runtime debugger request handler.
**default** | Default request handler.
**file** | Request handler used for serving files.
**odata-doc/** | Documentation request handler for OData.
**openid/** | OPENID authentication request handler.
**p/** | Request handler for custom page URLs.
**rest-doc/** | HTTP REST web service request handler documentation.
**ws-doc/** | SOAP webservice request handler documentation.
**ws/** | SOAP webservice call request handler.
**xas/** | Request handler used by the Mendix Runtime itself.

Additional information about request handlers is available in the *Requests* section of [Monitoring Mendix Runtime](/refguide/monitoring-mendix-runtime#request-handlers) and the *Applying Access Restrictions to Unnecessary Request Handlers* section of [How To Implement Best Practices for App Security](/howto/security/best-practices-security#request-handlers).

### <a name="Trends-appmxruntimecache"></a>4.2 Object Cache

In the **Object cache** graph you can monitor the number of Mendix Objects that live in memory.

{{% alert type="info" %}}
This metric is only available for apps built with Mendix versions 6 and below. Mendix versions 7 and above use a stateless runtime and so have no object cache. See the [Mendix 7.0 Release Notes](/releasenotes/studio-pro/7.0) for more information.
{{% /alert %}}

Non-persistable entities live in the JVM memory and are garbage-collected regularly. If you have a memory leak, the number of objects in memory will grow over time. This might be a problem.

### <a name="Trends-appmxruntimesessions"></a>4.3 User Accounts and Login Sessions

The **User Accounts and Login Sessions** graph shows the number of logged-in named and anonymous user sessions for your application.

![](attachments/trends-v4/user-accounts-logins.png)

These are the user types:

User Type | Explanation
------------ | -------------
**named users** | Total number of user accounts.
**concurrent named user sessions** | Total number of sessions for users using a named login. 
**concurrent anonymous user sessions** | Total number of sessions for users who are signing in anonymously. 

### <a name="Trends-appmxruntimejvmheap"></a>4.4 JVM Object Heap

The **JVM Object Heap** graph shows the internal distribution of allocated memory inside the application process for *Java* objects. Java objects are created in Java actions, but also include all objects that are used by microflows running in your app at runtime.

![](attachments/trends-v4/jvm-heap.png)

One of the most important things to know, in order to be able to interpret the values in this graph, is that the JVM does not immediately clean up objects that are no longer in use. This graph will show unused memory as still in use until the so-called *garbage collector*, which analyzes the memory to free up space, is run. So, you cannot see how much of the JVM memory that is in use before a garbage collection will be available after the garbage collection cycle, because the garbage collection process will only find that out when it actually runs.

These are the types of object:

Object Type | Explanation
------------ | -------------
**tenured generation** |  As objects "survive" repeated garbage collections in the eden space, they are migrated to the tenured generation. You can look at this metric as a number of long-living objects in JVM.
**native memory** | The native memory is the memory available to the operating system.
**eden space** | The pool from which memory is initially allocated for most objects.
**unused** | Unused JVM heap memory.

For example, if the **tenured generation** is shown as 65% of the complete heap size, this may change to 0% if a garbage collection is triggered when the percentage reaches two thirds of the total heap size. However, it could stay at this 65% if all data in this memory part is still referenced by running actions in the application. This behavior means that the JVM heap memory graphs are the most difficult to base conclusions on.

### <a name="Trends-appmxruntimejvmprocessmemory"></a>4.5 JVM Process Memory Usage

This **JVM Process Memory Usage** graph is similar to the previous graph, *JVM Object Heap*. It shows a more complete view of the actual size and composition of the operating system memory that is in use by the JVM process.

![](attachments/trends-v4/jvm-process-memory.png)

This graph is primarily present to provide more insight in situations where the part of the real used memory *outside* the JVM Object Heap is growing too much, causing problems with memory shortage in the operating system.

More information on this graph is available in a Tech Blog post: [What's in my JVM memory?](https://www.mendix.com/blog/whats-jvm-memory/).

These are the types:

Type | Explanation
------------ | -------------
**code cache** | JVM includes a code cache, containing memory that is used for compilation and storage of native code.
**native code** | JVM allocates a certain amount of memory space for native bytecode.
**jar files** | JAR files necessary for JVM itself to run.
**tenured generation** | As objects "survive" repeated garbage collections in the survivor space, they are migrated to the tenured generation. You can look at this metric as a number of long living objects in JVM.
**survivor space** | The pool containing objects that have survived the garbage collection of the Eden space.
**eden space** | The pool from which memory is initially allocated for most objects.
**unused java heap** | Unused JVM heap memory.
**permanent generation** | The pool containing all the reflective data of the virtual machine itself, such as class and method objects. With Java VMs that use class data sharing, this generation is divided into read-only and read-write areas.
**other** | Virtual or reserved memory space.
**thread stacks** | Stacks that are reserved for unique threads.

### <a name="Trends-appmemory"></a>4.6 Application Node Operating System Memory

The **Application node operating system memory** graph shows the distribution of operating system memory that is available for this server.

![](attachments/trends-v4/node-os-memory.png)

Performance issues can arise if the apps memory takes up too large a proportion of the operating system memory.

### <a name="Trends-appm2eeserverthreadpool"></a>4.7 Threadpool for Handling External Requests

The **Threadpool for handling external requests** graph shows the number of concurrent requests that are being handled by the Mendix Runtime. The requests are counted in two circumstances:

* they are initiated by a remote API – the way the normal web-based client communicates
* they are initiated by calling web services

![](attachments/trends-v4/threadpool-external-reqs.png)

Because creating a new thread that can concurrently process a request is an expensive operation, Mendix holds a pool of threads that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the number of requests that are flowing through the application.

The values shown by the graph are:

Value | Explanation
------------ | -------------
**min threads** | Minimum bound of threads to be used by the Jetty threadpool.
**max threads** | Maximum bound of threads to be used by the Jetty threadpool.
**active threads** | Active threads that are being used within the Jetty threadpool.
**threadpool size** | The current total size of the Jetty threadpool.

### <a name="Trends-appmxruntimethreads"></a>4.8 Total Number of Threads in the JVM Process

The **Total Number of Threads in the JVM Process** graph shows the total number of threads that exist inside the running JVM process.

![](attachments/trends-v4/jvm-thread-count.png)

Besides the threadpool that is used for *external* HTTP requests, described above, this includes the threadpool used for database connections, internal processes inside the Mendix Runtime, and optional extra threads created by the application itself, for example, using a threadpool in a custom module or custom Java code.

### <a name="Trends-appcpu"></a>4.9 Application Node CPU Usage

The **Application node CPU usage** graph shows the CPU utilization in percentage.

![](attachments/trends-v4/app-cpu.png)

{{% alert type="info" %}}
CPU usage of the database is shown in [Database Node CPU Usage](#Trends-dbcpu), below.
{{% /alert %}}

### <a name="Trends-appdf"></a>4.10 Application Node Disk Usage in Percentage (%)

The **Application node disk usage (percentage)** graph shows the relative amounts of data that are stored on disk.

![](attachments/trends-v4/app-disk-usage-pct.png)

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

The disk usage graph shows only the disk usage inside the container. This is usually only relevant if your application creates a lot of temporary files in `/tmp`. This value is not the same as the file document storage.

## 5 Database Statistics

In this section you will find the statistics about the database that the application uses.

### <a name="Trends-dbmxruntimeconnectionbus"></a>5.1 Number of Database Queries Being Executed

The **Number of database queries being executed** graph shows the number of database queries that are executed by your Mendix application.

![](attachments/trends-v4/no-db-queries.png)

The queries are broken down into queries that actually modify data (**insert**, **update**, and **delete**) and queries that fetch data (**select**).

These are the types of query:

Type | Explanation
------------ | -------------
**inserts** | Number of SQL `INSERT INTO` statements per second. These add new rows of data to a table in the database. 
**transactions** | Number of SQL transactions per second. A transaction is a unit of work that is performed against a database. 
**update** | Number of SQL `UPDATE` statements per second. The SQL `UPDATE` query modifies the existing records in a table. 
**select** | Number of SQL `SELECT` statements per second. The SQL `SELECT` statement fetches data from a database table that returns this data in the form of a result table. 
**delete** | Number of SQL `DELETE` statements per second. The SQL `DELETE` query deletes the existing records from a table. 

### <a name="Trends-dbpgtableindexsizeVERSIONmain"></a>5.2 Database Table vs. Index Size

The **Database table vs. index size** graph shows the distribution between disk space used for storing indexes and actual data.

![](attachments/trends-v4/db-table-vs-index.png)

Remember, indexes actually occupy memory space and disk storage, as they are just copies of parts of your data stored and sorted in another way! Besides the data you are processing, the relevant parts of the indexes also have to be read into system memory to be able to use them.

These are the values:

Value | Explanation
------------ | -------------
**tables** | Total space taken by the database.
**indices** | Amount of space taken by the indices in the database.

### <a name="Trends-dbpgstatdatabaseVERSIONmain"></a>5.3 Number of Database Tuple Mutations

The **Number of database tuple mutations** graph shows the number of database objects that were actually changed by database queries from the application.

![](attachments/trends-v4/db-mutations.png)

For a single database operation that affects more than one object, this graph shows the number of objects actually changed, as measured from inside the database. However, the [Number of database queries being executed](#Trends-dbmxruntimeconnectionbus) graph will only show a single database query for the same operation.

These are the values:

Value | Explanation
------------ | -------------
**xact commit** | Number of transactions committed per second.
**xact rollback** | Number of transactions rolled back per second.
**xact inserted** | Number of tuples inserted per second.
**xact updated** | Number of tuples updated per second.
**xact deleted** | Number of tuples deleted per second.

### <a name="Trends-dbmxruntimepgstatactivity"></a>5.4 Number of Database Connections

The **Number of database connections** graph shows the number of connections to the PostgreSQL server.

![](attachments/trends-v4/no-db-connections.png)

This should go up and down with the usage of the application. The number of connections is limited to 50.

### <a name="Trends-dbmemory"></a>5.5 Database Node Operating System Memory

The **Database node operating system memory** graph shows the distribution of operating system memory that is available for this server.

![](attachments/trends-v4/db-os-memory.png)

It is crucial to the performance of an application that parts of the database data and indexes that are referenced a lot are always available in the working memory of the server. A lack of Freeable memory on a busy application will result in continuous re-reads of data from disk, which takes several orders of magnitude more time, slowing down the entire application. This may indicate that you have a large number of concurrent database connections from your app and that the environment is not large enough to support these.

These are the types:

Type | Explanation
------------ | -------------
**Used memory** | Total memory size of the database instance minus the freeable memory.
**Freeable memory** | Memory that is allocated dynamically containing, for example, cached reads and indexes.
**Swap usage** | The amount of swap space used on the database instance.

### <a name="Trends-dbcpu"></a>5.6 Database Node CPU Usage

The **Database node CPU usage** graph shows the amount of CPU usage over time, as a percentage.

![](attachments/trends-v4/db-cpu-usage.png)

### <a name="Trends-dbdiskstatsthroughput"></a>5.7 Database Node Disk Throughput

The **Database node disk throughput** graph shows the amount of data that is being read from and written to disk.

![](attachments/trends-v4/db-disk-throughput.png)

If you see large values here which do not immediately drop back again, it may indicate that your app is continually swapping data to disk. This could be caused by inefficient queries, for example ones which require sorting within the app.

### <a name="Trends-dbdfabs"></a><a name="Trends-dbdf"></a>5.8 Database Node Disk Usage (in Bytes)

The **Database node disk usage (in bytes)** graph displays the absolute amount of data that is stored on disk.

![](attachments/trends-v4/db-disk-usage-bytes.png)

### <a name="Trends-dbdiskstatsiops"></a>5.9 Database Node Disk I/Os

The **Database node disk IO/s** graph shows the *number* of disk read and write operations that are done from and to the disk storage. It does not show the amount of data that was transferred.

![](attachments/trends-v4/db-disk-ios.png)

There are two sets of values:

Value | Explanation
------------ | -------------
**read** | Read ops on the disk holding the database. 
**write** | Write ops on the disk holding the database. 

### <a name="Trends-dbdiskstatslatency"></a>5.10 Database Node Disk Latency

The **Database node disk latency** graph shows the average waiting times for disk operations to complete.

![](attachments/trends-v4/db-disk-latency.png)

Interpreting the values in this graph should be done in combination with the other disk stats graphs, together with the type of requests that were made. Sequential or random reads and writes can create a different burden for disk storage.

There are two sets of values:

Value | Explanation
------------ | -------------
**read** | Read ops on the disk holding the database. 
**write** | Write ops on the disk holding the database.

### 5.11 Database IOPS Burst Balance {#Trends-dbmxdatabaseburstbalance}

The **Database IOPS burst balance** graph shows the number of IOPS credits accrued to support burstable performance. The metric is expressed as percentage; 100% means that the volume has accumulated the maximum number of credits.

![](attachments/trends-v4/db-burst-balance.png)

Apps running on Mendix Cloud V4 use AWS databases to store their data. These databases are **burstable**, which means that it has a specified performance baseline. See the AWS document [Overview of Monitoring Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html) for more information.

Burstable performance means that if you use fewer IOPS than is required for baseline performance (such as when it is idle), the unspent IOPS credits are accrued until they reach a maximum. If a burstable performance instance needs to burst above the baseline performance level, it spends the accrued credits. The more credits that a burstable performance instance has accrued, the more time it can burst beyond its baseline when more performance is needed.

You can find more details about the credit system in the official AWS documentation: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html.

If your database uses a high level of IOPS over a sustained period, this may impact your app's performance. If your database burst balance reduces consistently, you will need to ensure that there are periods when there is less activity so that the database burst balance can be restored.

For more information, see the *AWS Database blog* [Understanding Burst vs. Baseline Performance with Amazon RDS and GP2](https://aws.amazon.com/blogs/database/understanding-burst-vs-baseline-performance-with-amazon-rds-and-gp2/).

## 6 Read More

* [Alerts](monitoring-application-health)
* [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows)
* [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4)
* [How to Receive Environment Status Alerts](receive-alerts)
* [Cloud Version and Region in the Mendix Cloud](/developerportal/deploy/cloud-version-region)
* [Mendix Cloud v4 - FAQ](/developerportal/deploy/mxcloudv4)

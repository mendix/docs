---
title: "Trends in Mendix Cloud v3"
parent: "metrics"
menu_order: 10
description: "Describes how to interpret various graphs and trends in the Mendix Cloud v3."
tags: ["Trends","v3","Mendix Cloud","Developer Portal"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Please do not rename the anchors in this document as they are used in links from the Developer Portal
---

## 1 Introduction

To track the usage growth of your app, and to debug performance problems, the Mendix Cloud includes detailed graphs of both your app and its environment. These graphs show performance trends of your apps in the paid editions of the Mendix Cloud. If you experience issues with your app, always check the **Alerts** and **Trends** in the **Developer Portal** under **Operate**.

{{% alert type="info" %}}
This document describes the trends graphs available in Mendix Cloud v3. If your app is deployed to Mendix Cloud v4, please refer to [Trends in Mendix Cloud v4](trends-v4).

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

![](attachments/trends/nodepermission.jpg)

## 3 Viewing the Trends

### 3.1 Finding the Trends

You can find the trends by following these steps:

1. Open your app in the [Developer Portal](http://home.mendix.com).
2. Click **Metrics** under the **Operate** category.
3. Select the environment you want to monitor under the tab **Trends**.

![](attachments/trends/environment.png)

### 3.2 Interpreting the Graphs

As with all complex IT systems, there are many interrelated components which can cause performance issues. This document cannot cover all possibilities, but is intended as a general introduction to the information which is displayed and a few ideas about where to look for possible areas of concern.

#### 3.2.1 Scales

The scales are produced automatically by the graphing software. This can lead to unexpected scales.

For example a scale for transactions per seconds may have a value of 30 m. This means  30 *milli*-transactions per second, 1800 milli-transactions, or 2 transactions per minute.

#### 3.2.2 Disk Utilization

Disk utilization is calculated as the disk usage that is used by the user of the system. Due to operating system overhead and empty space in block size allocation, not all disk space can be fully allocated. For this reason, the total amount of usable space will be about 4% lower than the actual disk space.

#### 3.2.3 Disk Partitions

If there is more than one disk partition in the system, the `/srv` partition generally contains project files and uploaded files of the application, while `/var` generally holds the database storage.

#### 3.2.4 Combining Information{#combine-info}

You can often get more information about the performance of your app by combining the information from several graphs. Useful graphs for this are:

* The CPU iowait information from [Database Node CPU Usage](#Trends-dbcpu)
* [Application Node Disk I/Os](#Trends-appdiskstatsiops)
* [Database Node Disk I/Os](#Trends-dbdiskstatsiops)
* [Number of Handled External Requests](#Trends-appmxruntimerequests)

For example, a combination of a moderate number of IO operations, low disk throughput, visible cpu iowait, full memory disk cache, and reports of long running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

#### 3.2.5 More Information

If you would like some more information about how these graphs are created and further suggestions for interpretation, see [Monitoring a Mendix application using Munin](https://github.com/mendix/m2ee-tools/blob/master/doc/munin.md) in the Mendix m2ee-tools GitHub repo.

## 4 Application Statistics

These graphs show various application-specific metrics, such as the number of HTTP requests, user sessions,  JVM memory, and other application performance statistics.

### <a name="Trends-appmxruntimerequests"></a>4.1 Number of Handled External Requests

The **Number of handled external requests** graph shows the number of requests that are sent from the client and systems that integrate with your application using web services.

![](attachments/trends/no-ext-reqs.png)

The number of requests per second is split up by request handlers. The key ones are:

* **/** should not list any requests, because static content is directly served to the user by the front-facing web server, which is placed between the user and this application process
* **ws/** shows the number of web service calls that were done
* **xas/** lists general queries for data in data grids, sending changes to the server and triggering the execution of microflows
* **file** shows the number of file uploads and downloads

Additional information about request handlers is available in the *Requests* section of [Monitoring Mendix Runtime](/refguide/monitoring-mendix-runtime#request-handlers) and the *Applying Access Restrictions to Unnecessary Request Handlers* section of [How To Implement Best Practices for App Security](/howto/security/best-practices-security#request-handlers).

### <a name="Trends-appmxruntimecache"></a>4.2 Object Cache

In the **Object cache** graph you can monitor the number of Mendix Objects that live in memory.

{{% alert type="info" %}}
This metric is only available for apps built with Mendix versions 6 and below. Mendix versions 7 and above use a stateless runtime and so have no object cache. See the [Mendix 7.0 Release Notes](/releasenotes/studio-pro/7.0) for more information.
{{% /alert %}}

![](attachments/trends/object-cache.png)

Non-persistable entities live in the JVM memory and are garbage collected regularly. If you have a memory leak, the number of objects in memory will grow over time. This might be a problem. 

### <a name="Trends-appmxruntimesessions"></a>4.3 User Accounts and Login Sessions

The **User Accounts and Login Sessions** graph shows the number of logged-in named and anonymous user sessions for your application.

![](attachments/trends/user-accounts-logins.png)

These are the user types:

User Type | Explanation
------------ | -------------
**named users** | Total number of user accounts.
**concurrent named user sessions** | Total number of sessions for users using a named login. 
**concurrent anonymous user sessions** | Total number of sessions for users who are signing in anonymously. 

### <a name="Trends-appmxruntimejvmheap"></a>4.4 JVM Object Heap

The **JVM Object Heap** graph shows the internal distribution of allocated memory inside the application process for *Java* objects. Java objects are created in Java actions, but also include all objects that are used by microflows running in your app at runtime.

![](attachments/trends/jvm-heap.png)

One of the most important things to know, in order to be able to interpret the values in this graph, is that the JVM does not immediately clean up objects that are no longer in use. This graph will show unused memory as still in use until the so-called *garbage collector*, which analyzes the memory to free up space, is run. So, you cannot see how much of the JVM memory that is in use before a garbage collection will be available after the garbage collection cycle, because the garbage collection process will only find that out when it actually runs.

There are three sorts of space in the JVM heap, which the garbage collector treats separately to enable it to work efficiently:

* **eden space** is for newly-created objects
* **survivor space** is where objects are moved if the garbage collector cannot clean them out of eden space
* **tenured generation** holds objects which are longer-lived

For example, if the **tenured generation** is shown as 65% of the complete heap size, this may change to 0% if a garbage collection is triggered when the percentage reaches two thirds of the total heap size. However, it could stay at this 65% if all data in this memory part is still referenced by running actions in the application. This behavior means that the JVM heap memory graphs are the most difficult to base conclusions on.

### <a name="Trends-appmxruntimejvmprocessmemory"></a>4.5 JVM Process Memory Usage

This **JVM Process Memory Usage** graph is similar to the previous graph, *JVM Object Heap*. It shows a more complete view of the actual size and composition of the operating system memory that is in use by the JVM process.

![](attachments/trends/jvm-process-memory.png)

This graph is primarily present to provide more insight in situations where the part of the real used memory *outside* the JVM Object Heap is growing too much, causing problems with memory shortage in the operating system.

More information on this graph is available in a Tech Blog post: [What's in my JVM memory?](https://www.mendix.com/blog/whats-jvm-memory/)

### <a name="Trends-appmemory"></a>4.6 Application Node Operating System Memory

The **Application node operating system memory** graph shows the distribution of operating system memory that is available for this server.

![](attachments/trends/node-os-memory.png)

The most important part of the graph is the category **apps** which shows the amount of memory that is continuously in use by the application process. Performance issues can arise if the apps memory takes up too large a proportion of the operating system memory or if the **committed** value exceeds the operating system memory.

### <a name="Trends-appm2eeserverthreadpool"></a>4.7 Threadpool for Handling External Requests

The **Threadpool for handling external requests** graph shows the number of concurrent requests that are being handled by the Mendix Runtime. The requests are counted in two circumstances:

* they are initiated by a remote API – the way the normal web-based client communicates
* they are initiated by calling web services

![](attachments/trends/threadpool-external-reqs.png)

Because creating a new thread that can concurrently process a request is an expensive operation, Mendix holds a pool of threads that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the number of requests that are flowing through the application.

### <a name="Trends-appmxruntimethreads"></a>4.8 Total Number of Threads in the JVM Process

The **Total Number of Threads in the JVM Process** graph shows the total number of threads that exist inside the running JVM process.

![](attachments/trends/jvm-thread-count.png)

Besides the threadpool that is used for *external* HTTP requests, described above, this includes the threadpool used for database connections, internal processes inside the Mendix Runtime, and optional extra threads created by the application itself, for example, using a threadpool in a custom module or custom Java code.

### <a name="Trends-appcpu"></a>4.9 Application Node CPU Usage

The **Application node CPU usage** graph shows the CPU utilization in percentage, broken down into different types of CPU usage. Each CPU is counted as 100%, so in a multi-CPU system, the scale will be several hundred percent.

![](attachments/trends/app-cpu.png)

The most important value in here is **user**, which shows the amount of CPU time used for handling requests at Mendix Runtime and executing microflows and scheduled events.

{{% alert type="info" %}}
CPU usage of the database is shown in [Database Node CPU Usage](#Trends-dbcpu), below.
{{% /alert %}}

### <a name="Trends-appdiskstatsthroughput"></a>4.10 Application Node Disk Throughput

The **Application node disk throughput** graph shows the rate at which data which isn't stored in the database is being read from and written to disk.

![](attachments/trends/app-disk-throughput.png)

### <a name="Trends-appdfabs"></a>4.11 Application Node Disk Usage (in Bytes)

The **Application node disk usage (in bytes)** graph displays the absolute amount of data that is stored on disk.

![](attachments/trends/app-disk-usage-bytes.png)

### <a name="Trends-appdf"></a>4.12 Application Node Disk Usage in Percentage (%)

The **Application node disk usage (percentage)** graph shows the relative amounts of data that are stored on disk.

![](attachments/trends/app-disk-usage-pct.png)

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

### <a name="Trends-appdiskstatsiops"></a>4.13 Application Node Disk I/Os

The **Application node disk IO/s** statistics show the *number* of disk read and write operations that are done from and to disk storage. It does not show the amount of data that was transferred.

![](attachments/trends/app-disk-ios.png)

### <a name="Trends-appload"></a>4.14 Application Node Load

The **Application node load** is commonly used as a general indication of overall server load that can be monitored and alerted upon.

![](attachments/trends/app-load.png)

The load value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. If you are investigating high server load, this graph alone is not sufficient.

This value is used in [Alerts](/developerportal/operate/monitoring-application-health) to signal that the CPU usage is not OK. A **warning** is issued for extended load higher than 2.8, and **critical** is signaled for extended load higher than 6.0.

### <a name="Trends-appdiskstatslatency"></a>4.15 Application Node Disk Latency

The **Application node disk latency** graph shows the average waiting times for disk operations to complete.

![](attachments/trends/app-disk-latency.png)

Interpreting the values in this graph should be done in combination with the other disk stats graphs, and taking the types of requests into consideration. Sequential or random reads and writes can create a different burden for disk storage.

### <a name="Trends-appdiskstatsutilization"></a><a name="Trends-appdiskstatsutilization"></a>4.16 Application Node Disk Utilization

The **Application node disk utilization** shows the percentage of time that the disk storage is busy processing requests.

![](attachments/trends/app-disk-utilization.png)

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

## 5 Database Statistics

The database statistics show the number of database queries and mutations, the total size of the database, and other performance statistics.

### <a name="Trends-appmxruntimeconnectionbus"></a>5.1 Number of Database Queries Being Executed

The **Number of database queries being executed** graph shows the number of database queries that are executed by your Mendix application.

![](attachments/trends/no-db-queries.png)

The queries are broken down into queries that actually modify data (**insert**, **update**, and **delete**) and queries that fetch data (**select**).

### <a name="Trends-appmxruntimepgtableindexsize"></a>5.2 Database Table vs. Index Size

The **Database table vs. index size** graph shows the distribution between disk space used for storing indexes and actual data.

![](attachments/trends/db-table-vs-index.png)

Remember, indexes actually occupy memory space and disk storage, as they are just a copy of your data stored and sorted in another way! Besides the data you are processing, the relevant parts of the indexes also have to be read into system memory to be able to use them.

### <a name="Trends-appmxruntimepgstattuples"></a>5.3 Database transactions and Mutations

The **Database transactions and mutations** graph shows the number of database objects that were actually changed by database queries from the application.

![](attachments/trends/db-mutations.png)

For a single database operation that affects more than one object, this graph shows the number of objects actually changed, as measured from inside the database. However, the [Number of database queries being executed](#Trends-appmxruntimeconnectionbus) graph only shows a single database query for the same operation.

### <a name="Trends-appmxruntimepgstatactivity"></a>5.4 Number of Database Connections

The **Number of database connections** graph shows the number of connections to the PostgreSQL server.

![](attachments/trends/no-db-connections.png)

This should go up and down with the usage of the application. The number of connections is limited to 50.

The connections are categorized as follows:

Connection Type | Description
--- | ---
active | a microflow or client xpath request is using the database right now
idle in transaction | the connection is in use by a microflow, but it is currently executing a microflow activity that is not using the database 
idle | the connection is open and available to quickly allocate to a microflow or xpath request that needs it

### <a name="Trends-dbmemory"></a>5.5 Database Node Operating System Memory

The **Database node operating system memory** graph shows the distribution of operating system memory that is available for this server.

![](attachments/trends/db-os-memory.png)

The most important values on this graph are **cache** and **apps**.

The **cache** values show the memory used to hold parts of the database that have been read from disk earlier. It is crucial to the performance of an application that parts of the database data and indexes that are referenced a lot are always available in the working memory of the server, in the cache. A lack of disk cache on a busy application will result in continuous re-reads of data from disk, which takes several orders of magnitude more time, slowing down the entire application. This may indicate that you have a large number of concurrent database connections from your app and that the environment is not large enough to support these.

The **apps** values show the amount of memory allocated to the database server (postgresql) to perform database queries.

### <a name="Trends-dbcpu"></a>5.6 Database Node CPU Usage

The **Database node CPU usage** graph shows the amount of CPU usage in percentage, broken down into different types of CPU usage. Each CPU is counted as 100%, so in a multi-CPU system, the scale will be several hundred percent.

![](attachments/trends/db-cpu-usage.png)

The most important values in here are: **user**, which shows the CPU time used for running database queries, and **iowait**, showing the length of time a CPU core is idle and waiting for disk operations to finish (for example, waiting for information that has to be read from disk, or waiting for a synchronous write operation to finish).

Clearly visible amounts of **iowait**, in combination with a high number of disk read operations ([Database Node Disk I/Os](#Trends-dbdiskstatsiops)), and having all free system memory filled as disk cache ([Database Node Operating System Memory](#Trends-dbmemory)), are a sign of a lack of available server memory for use as disk cache. This situation will slow down database operations tremendously, because getting data from disk over and over again takes considerably longer than having it present in memory.

### <a name="Trends-dbdiskstatsthroughput"></a>5.7 Database Node Disk Throughput

The **Database node disk throughput** graph shows the amount of data that is being read from and written to disk.

![](attachments/trends/db-disk-throughput.png)

If you see large values here which do not immediately drop back again, it may indicate that your app is continually swapping data to disk. This could be caused by inefficient queries, for example ones which require sorting within the app.

### <a name="Trends-dbdfabs"></a>5.8 Database Node Disk Usage (in Bytes)

The **Database node disk usage (in bytes)** graph displays the absolute amount of data that is stored on disk.

![](attachments/trends/db-disk-usage-bytes.png)

### <a name="Trends-dbdf"></a>5.9 Database Node Disk Usage in Percentage (%)

The **Database node disk usage (percentage)** graph shows the displays the relative amounts of data that are stored on disk.

![](attachments/trends/db-disk-usage-pct.png)

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

### <a name="Trends-dbdiskstatsiops"></a>5.10 Database Node Disk I/Os

The **Database node disk IO/s** graph shows the *number* of disk read and write operations that are done from and to the disk storage. It does not show the amount of data that was transferred.

![](attachments/trends/db-disk-ios.png)

### <a name="Trends-dbload"></a>5.11 Database Node Load

This value is commonly used as a general indication for overall server load that can be monitored and alerted upon.

![](attachments/trends/db-load.png)

The **Database node load** value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. When actually investigating high server load, this graph alone is not sufficient.

### <a name="Trends-dbdiskstatslatency"></a>5.12 Database Node Disk Latency

The **Database node disk latency** graph shows the average waiting times for disk operations to complete.

![](attachments/trends/db-disk-latency.png)

Interpreting the values in this graph should be done in combination with the other disk stats graphs, together with the type of requests that were made. Sequential or random reads and writes can create a different burden for disk storage.

### <a name="Trends-dbdiskstatsutilization"></a>5.13 Database Node Disk Utilization

The **Database node disk utilization** graph shows the percentage of time that the disk storage is busy processing requests.

![](attachments/trends/db-disk-utilization.png)

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

## 6 Read More

* [Alerts](monitoring-application-health)
* [Database Size Reduction](database-size-reduction)
* [How to Calculate the Total Amount of Diskspace of a Cloud App Environment](calculate-diskspace-of-a-cloud-app-environment)
* [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows)
* [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4)
* [How to Receive Environment Status Alerts](receive-alerts)
* [Cloud Version and Region in the Mendix Cloud](/developerportal/deploy/cloud-version-region)
* [Mendix Cloud v4](/developerportal/deploy/mxcloudv4)

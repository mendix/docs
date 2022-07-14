---
title: "Trends in Mendix Cloud v3"
linktitle: "Mendix Cloud v3 Trends"
url: /developerportal/operate/trends/
weight: 70
description: "Describes how to interpret various graphs and trends in the Mendix Cloud v3."
tags: ["Trends","v3","Mendix Cloud","Developer Portal"]
aliases:
    - /howtogeneral/mendixcloud/trends.html
    - /howtogeneral/mendixcloud/trends
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Please do not rename the anchors in this document as they are used in links from the Developer Portal.
---

{{% alert color="warning" %}}
Our Mendix Cloud V3 is deprecated, currently in a grace period, and will be retired at the beginning of Q3 2021. To continue running your licensed Mendix application on the Mendix Cloud, you need to migrate your app to Mendix Cloud V4. To learn more about Mendix Cloud V4 and how to migrate from Mendix Cloud V3, please visit the following page: [Migrate to Mendix Cloud V4](/developerportal/deploy/migrating-to-v4/). 
{{% /alert %}}

## 1 Introduction

To track the usage growth of your app, and to debug performance problems, the Mendix Cloud includes detailed graphs of both your app and its environment. These graphs show performance trends of your apps in the paid editions of the Mendix Cloud. If you experience issues with your app, always check the **Alerts** and **Trends** in the **Developer Portal**.

{{% alert color="info" %}}
This document describes the trends graphs available in Mendix Cloud v3. If your app is deployed to Mendix Cloud v4, please refer to [Trends in Mendix Cloud v4](/developerportal/operate/trends-v4/).

If you don't know which Mendix Cloud version you are using, you can find out by following the instructions in [Cloud Version and Region in the Mendix Cloud](/developerportal/deploy/cloud-version-region/).
{{% /alert %}}

## 2 Access to Monitoring Trends

To view the **Trends**, you must have permission to **Access the Monitoring**.

{{% alert color="info" %}}
Only the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) is allowed to grant node permissions.
{{% /alert %}}

Assign permission by following these steps:

1. Open your app in the [Developer Portal](http://sprintr.home.mendix.com).
2. Click **Collaborate** > **Security** under the on the left.
3. Go to the **Node Permissions** tab.
4. Choose the environment for which you want to grant access.
5. Check **Access to Monitoring** next to the name of the person to whom you want to grant this permission.

{{< figure src="/attachments/developerportal/operate/metrics/trends/nodepermission.jpg" >}}

## 3 Viewing the Trends

### 3.1 Finding the Trends

You can find the trends by following these steps:

1. Open your app in the [Developer Portal](http://sprintr.home.mendix.com).
2. Click **Metrics**.
3. Select the environment you want to monitor under the tab **Trends**.

{{< figure src="/attachments/developerportal/operate/metrics/trends/environment.png" >}}

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
* [Number of Handled External Requests](#Trends-appmxruntimerequests)

For example, a combination of a moderate number of IO operations, low disk throughput, visible cpu iowait, full memory disk cache, and reports of long running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

#### 3.2.5 More Information

If you would like some more information about how these graphs are created and further suggestions for interpretation, see [Monitoring a Mendix application using Munin](https://github.com/mendix/m2ee-tools/blob/master/doc/munin.md) in the Mendix m2ee-tools GitHub repo.

## 4 Application Statistics

These graphs show various application-specific metrics, such as the number of HTTP requests, user sessions,  JVM memory, and other application performance statistics.

### 4.1 Number of Handled External Requests{#Trends-appmxruntimerequests}

The **Number of handled external requests** graph shows the number of requests that are sent from the client and systems that integrate with your application using web services.

{{< figure src="/attachments/developerportal/operate/metrics/trends/no-ext-reqs.png" >}}

The number of requests per second is split up by request handlers. The key ones are:

* **/** should not list any requests, because static content is directly served to the user by the front-facing web server, which is placed between the user and this application process
* **ws/** shows the number of web service calls that were done
* **xas/** lists general queries for data in data grids, sending changes to the server and triggering the execution of microflows
* **file** shows the number of file uploads and downloads

Additional information about request handlers is available in the *Requests* section of [Monitoring Mendix Runtime](/refguide/monitoring-mendix-runtime/#request-handlers) and the *Applying Access Restrictions to Unnecessary Request Handlers* section of [How To Implement Best Practices for App Security](/howto/security/best-practices-security/#request-handlers).

### 4.2 Object Cache{#Trends-appmxruntimecache}

In the **Object cache** graph you can monitor the number of Mendix Objects that live in memory.

{{% alert color="info" %}}
This metric is only available for apps built with Mendix versions 6 and below. Mendix versions 7 and above use a stateless runtime and so have no object cache. See the [Mendix 7.0 Release Notes](/releasenotes/studio-pro/7.0/) for more information.
{{% /alert %}}

{{< figure src="/attachments/developerportal/operate/metrics/trends/object-cache.png" >}}

Non-persistable entities live in the JVM memory and are garbage collected regularly. If you have a memory leak, the number of objects in memory will grow over time. This might be a problem. 

### 4.3 User Accounts and Login Sessions{#Trends-appmxruntimesessions}

The **User Accounts and Login Sessions** graph shows the number of logged-in named and anonymous user sessions for your application.

{{< figure src="/attachments/developerportal/operate/metrics/trends/user-accounts-logins.png" >}}

These are the user types:

User Type | Explanation
------------ | -------------
**named users** | Total number of user accounts.
**concurrent named user sessions** | Total number of sessions for users using a named login. 
**concurrent anonymous user sessions** | Total number of sessions for users who are signing in anonymously. 

### 4.4 JVM Object Heap{#Trends-appmxruntimejvmheap}

The **JVM Object Heap** graph shows the internal distribution of allocated memory inside the application process for *Java* objects. Java objects are created in Java actions, but also include all objects that are used by microflows running in your app at runtime.

{{< figure src="/attachments/developerportal/operate/metrics/trends/jvm-heap.png" >}}

One of the most important things to know, in order to be able to interpret the values in this graph, is that the JVM does not immediately clean up objects that are no longer in use. This graph will show unused memory as still in use until the so-called *garbage collector*, which analyzes the memory to free up space, is run. So, you cannot see how much of the JVM memory that is in use before a garbage collection will be available after the garbage collection cycle, because the garbage collection process will only find that out when it actually runs.

There are three sorts of space in the JVM heap, which the garbage collector treats separately to enable it to work efficiently:

* **eden space** is for newly-created objects
* **survivor space** is where objects are moved if the garbage collector cannot clean them out of eden space
* **tenured generation** holds objects which are longer-lived

For example, if the **tenured generation** is shown as 65% of the complete heap size, this may change to 0% if a garbage collection is triggered when the percentage reaches two thirds of the total heap size. However, it could stay at this 65% if all data in this memory part is still referenced by running actions in the application. This behavior means that the JVM heap memory graphs are the most difficult to base conclusions on.

### 4.5 JVM Process Memory Usage{#Trends-appmxruntimejvmprocessmemory}

This **JVM Process Memory Usage** graph is similar to the previous graph, *JVM Object Heap*. It shows a more complete view of the actual size and composition of the operating system memory that is in use by the JVM process.

{{< figure src="/attachments/developerportal/operate/metrics/trends/jvm-process-memory.png" >}}

This graph is primarily present to provide more insight in situations where the part of the real used memory *outside* the JVM Object Heap is growing too much, causing problems with memory shortage in the operating system.

More information on this graph is available in a Tech Blog post: [What's in my JVM memory?](https://www.mendix.com/blog/whats-jvm-memory/)

### 4.6 Application Node Operating System Memory{#Trends-appmemory}

The **Application node operating system memory** graph shows the distribution of operating system memory that is available for this server.

{{< figure src="/attachments/developerportal/operate/metrics/trends/node-os-memory.png" >}}

The most important part of the graph is the category **apps** which shows the amount of memory that is continuously in use by the application process. Performance issues can arise if the apps memory takes up too large a proportion of the operating system memory or if the **committed** value exceeds the operating system memory.

### 4.7 Threadpool for Handling External Requests{#Trends-appm2eeserverthreadpool}

The **Threadpool for handling external requests** graph shows the number of concurrent requests that are being handled by the Mendix Runtime. The requests are counted in two circumstances:

* they are initiated by a remote API – the way the normal web-based client communicates
* they are initiated by calling web services

{{< figure src="/attachments/developerportal/operate/metrics/trends/threadpool-external-reqs.png" >}}

Because creating a new thread that can concurrently process a request is an expensive operation, Mendix holds a pool of threads that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the number of requests that are flowing through the application.

### 4.8 Total Number of Threads in the JVM Process{#Trends-appmxruntimethreads}

The **Total Number of Threads in the JVM Process** graph shows the total number of threads that exist inside the running JVM process.

{{< figure src="/attachments/developerportal/operate/metrics/trends/jvm-thread-count.png" >}}

Besides the threadpool that is used for *external* HTTP requests, described above, this includes the threadpool used for database connections, internal processes inside the Mendix Runtime, and optional extra threads created by the application itself, for example, using a threadpool in a custom module or custom Java code.

### 4.9 Application Node CPU Usage{#Trends-appcpu}

The **Application node CPU usage** graph shows the CPU utilization in percentage, broken down into different types of CPU usage. Each CPU is counted as 100%, so in a multi-CPU system, the scale will be several hundred percent.

{{< figure src="/attachments/developerportal/operate/metrics/trends/app-cpu.png" >}}

The most important value in here is **user**, which shows the amount of CPU time used for handling requests at Mendix Runtime and executing microflows and scheduled events.

{{% alert color="info" %}}
CPU usage of the database is shown in [Database Node CPU Usage](#Trends-dbcpu), below.
{{% /alert %}}

### 4.10 Application Node Disk Usage (in Bytes){#Trends-appdbnodedfabs}

The **Application node disk usage (in bytes)** graph displays the absolute amount of data that is stored on disk.

{{< figure src="/attachments/developerportal/operate/metrics/trends/app-disk-usage-bytes.png" >}}

### 4.11 Application Node Disk Usage in Percentage (%){#Trends-appappdbnodedfpercent}

The **Application node disk usage (percentage)** graph shows the relative amounts of data that are stored on disk.

{{< figure src="/attachments/developerportal/operate/metrics/trends/app-disk-usage-pct.png" >}}

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

### 4.12 Application Node Load{#Trends-appload}

The **Application node load** is commonly used as a general indication of overall server load that can be monitored and alerted upon.

{{< figure src="/attachments/developerportal/operate/metrics/trends/app-load.png" >}}

The load value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. If you are investigating high server load, this graph alone is not sufficient.

This value is used in [Alerts](/developerportal/operate/monitoring-application-health/) to signal that the CPU usage is not OK. A **warning** is issued for extended load higher than 2.8, and **critical** is signaled for extended load higher than 6.0.

## 5 Database Statistics

The database statistics show the number of database queries and mutations, the total size of the database, and other performance statistics.

### 5.1 Number of Database Queries Being Executed{#Trends-appmxruntimeconnectionbus}

The **Number of database queries being executed** graph shows the number of database queries that are executed by your Mendix application.

{{< figure src="/attachments/developerportal/operate/metrics/trends/no-db-queries.png" >}}

The queries are broken down into queries that actually modify data (**insert**, **update**, and **delete**) and queries that fetch data (**select**).

### 5.2 Database Table vs. Index Size{#Trends-appmxruntimepgtableindexsize}

The **Database table vs. index size** graph shows the distribution between disk space used for storing indexes and actual data.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-table-vs-index.png" >}}

Remember, indexes actually occupy memory space and disk storage, as they are just a copy of your data stored and sorted in another way! Besides the data you are processing, the relevant parts of the indexes also have to be read into system memory to be able to use them.

### 5.3 Database transactions and Mutations{#Trends-appmxruntimepgstattuples}

The **Database transactions and mutations** graph shows the number of database objects that were actually changed by database queries from the application.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-mutations.png" >}}

For a single database operation that affects more than one object, this graph shows the number of objects actually changed, as measured from inside the database. However, the [Number of database queries being executed](#Trends-appmxruntimeconnectionbus) graph only shows a single database query for the same operation.

### 5.4 Number of Database Connections{#Trends-appmxruntimepgstatactivity}

The **Number of database connections** graph shows the number of connections to the PostgreSQL server.

{{< figure src="/attachments/developerportal/operate/metrics/trends/no-db-connections.png" >}}

This should go up and down with the usage of the application. The number of connections is limited to 50.

The connections are categorized as follows:

Connection Type | Description
--- | ---
active | a microflow or client xpath request is using the database right now
idle in transaction | the connection is in use by a microflow, but it is currently executing a microflow activity that is not using the database 
idle | the connection is open and available to quickly allocate to a microflow or xpath request that needs it

### 5.5 Database Node Operating System Memory{#Trends-dbmemory}

The **Database node operating system memory** graph shows the distribution of operating system memory that is available for this server.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-os-memory.png" >}}

The most important values on this graph are **cache** and **apps**.

The **cache** values show the memory used to hold parts of the database that have been read from disk earlier. It is crucial to the performance of an application that parts of the database data and indexes that are referenced a lot are always available in the working memory of the server, in the cache. A lack of disk cache on a busy application will result in continuous re-reads of data from disk, which takes several orders of magnitude more time, slowing down the entire application. This may indicate that you have a large number of concurrent database connections from your app and that the environment is not large enough to support these.

The **apps** values show the amount of memory allocated to the database server (postgresql) to perform database queries.

### 5.6 Database Node CPU Usage{#Trends-dbcpu}

The **Database node CPU usage** graph shows the amount of CPU usage in percentage, broken down into different types of CPU usage. Each CPU is counted as 100%, so in a multi-CPU system, the scale will be several hundred percent.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-cpu-usage.png" >}}

The most important values in here are: **user**, which shows the CPU time used for running database queries, and **iowait**, showing the length of time a CPU core is idle and waiting for disk operations to finish (for example, waiting for information that has to be read from disk, or waiting for a synchronous write operation to finish).

Clearly visible amounts of **iowait**, in combination with a high number of disk read operations, and having all free system memory filled as disk cache ([Database Node Operating System Memory](#Trends-dbmemory)), are a sign of a lack of available server memory for use as disk cache. This situation will slow down database operations tremendously, because getting data from disk over and over again takes considerably longer than having it present in memory.

### 5.7 Database Node Disk Usage (in Bytes){#Trends-dbappdbnodedfabs}

The **Database node disk usage (in bytes)** graph displays the absolute amount of data that is stored on disk.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-disk-usage-bytes.png" >}}

### 5.8 Database Node Disk Usage in Percentage (%){#Trends-dbappdbnodedfpercent}

The **Database node disk usage (percentage)** graph shows the displays the relative amounts of data that are stored on disk.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-disk-usage-pct.png" >}}

This graph should be interpreted in combination with other graphs. See [Combining Information](#combine-info), above.

### 5.9 Database Node Load{#Trends-dbload}

This value is commonly used as a general indication for overall server load that can be monitored and alerted upon.

{{< figure src="/attachments/developerportal/operate/metrics/trends/db-load.png" >}}

The **Database node load** value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. When actually investigating high server load, this graph alone is not sufficient.

## 6 Read More

* [Alerts](/developerportal/operate/monitoring-application-health/)
* [How to Calculate the Total Amount of Diskspace of a Cloud App Environment](/developerportal/operate/calculate-diskspace-of-a-cloud-app-environment/)
* [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows/)
* [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4/)
* [How to Receive Environment Status Alerts](/developerportal/operate/receive-alerts/)
* [Cloud Version and Region in the Mendix Cloud](/developerportal/deploy/cloud-version-region/)
* [Mendix Cloud v4](/developerportal/deploy/mxcloudv4/)

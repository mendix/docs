---
title: "Operation Metrics"
linktitle: "Metrics"
url: /developerportal/operate/metrics/
weight: 10
description: "Describes how to monitor performance and interpret various graphs and trends in Mendix Cloud."
aliases:
    - /developerportal/operate/trends-v4/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#Please do not rename the anchors in this document as they are used in links from the Mendix Portal.
---

## Introduction

The **Metrics** page contains detailed graphs about your app and its environment. You can use this page to monitor the performance and health of your app; for example, you can track the usage growth of your app or debug performance problems.

These statistics are displayed as trends over time. The data covers the past three months, and you can adjust the view to display data for the past day, week, month, or quarter.

{{% alert color="info" %}}
This page describes metrics for licensed apps deployed to Mendix Cloud. Metrics are not available for Free Apps deployed to Mendix Cloud.

If your app is deployed to SAP Business Technology Platform (SAP BTP) instead, the **Metrics** page displays links to the SAP BTP cockpit.
{{% /alert %}}

## Accessing the Metrics Graphs

To access the graphs on the **Metrics** page, you must have **Access to Monitoring** permissions enabled. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

If you meet the above conditions, you can find the graphs by following these steps:

1. Open your app in [Apps](https://sprintr.home.mendix.com).

1. In the navigation pane, click **Metrics**.

1. Use the drop-down menu in the upper-right corner to select the environment you want to monitor.

1. Use the **Period** and **Group** drop-down menus to choose the time period (day, week, month, or quarter) and the group (application, database, or all) for the graphs that you want to view.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/metrics-selection.png" >}}

1. To view more information about any of the metrics, click **Documentation** ({{% icon name="info-circle" %}}) next to the relevant graph. To quickly scroll to the top of the page, click **Scroll to top** ({{% icon name="arrow-circle-up" %}}).

{{% alert color="info" %}}
The **Metrics** page does not support multi-instance metrics. If you [horizontally scale](/developerportal/deploy/scale-environment/) your environment to multiple instances, you will be able to see metrics for only one of those instances. If you need data on multiple instances, consider using an [APM integration](/developerportal/operate/monitoring-with-apm/).
{{% /alert %}}

## Interpreting the Graphs

As with all complex IT systems, there are many interrelated components that can cause performance issues. This document cannot cover all possibilities; it is intended as a general introduction to the information that is displayed. It also suggests a few ideas about where to look for possible areas of concern.

### Combining Information{#combine-info}

You can often get more information about the performance of your app by combining the information from several graphs. Here are some useful graphs for this:

* [CPU Utilization of the Database](#Trends-dbcpu)
* [Database IOPS](#Trends-dbdiskstatsiops)
* [Number of Handled External Requests](#Trends-appmxruntimerequests)

For example, a combination of a moderate number of input/output operations (IOPs), low disk throughput, high CPU usage, full memory disk cache, and reports of long-running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

## Application Statistics

This section explains the metrics that represent the current status and statistics of a running Mendix application. This includes the following:

* Requests that the application processes from the services/clients with which it is integrated
* Statistics related to Java Virtual Machine and the Jetty web server that the application uses

### Number of Handled External Requests{#Trends-appmxruntimerequests}

The **Number of handled external requests** graph shows the number of requests that are sent from the client and systems that integrate with your application using web services.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-ext-requests.png" >}}

The number of requests per second is split up by request handlers. These are the key ones:

* **xas/** lists general queries for data in data grids, sending changes to the server, and triggering the execution of microflows.
* **ws/** shows the number of web service calls that were done.
* **file** shows the number of file uploads and downloads.
* The **default** request handler handles all requests that are not handled by the standard request handlers (such as `/xas/` or `/file`) or request handlers installed by the user application. Requests handled by the default handler are usually for the static resources of application (for example, `/login.html` and `/mxui.js`).

These are the commonly used types:

| Request Type   | Explanation                                               |
|----------------|-----------------------------------------------------------|
| **api-doc/**   | A general API doc overview for other doc request handlers |
| **debugger/**  | Mendix Runtime debugger request handler                   |
| **default**    | Default request handler                                   |
| **file**       | Request handler used for serving files                    |
| **odata-doc/** | Documentation request handler for OData                   |
| **openid/**    | OPENID authentication request handler                     |
| **p/**         | Request handler for custom page URLs                      |
| **rest-doc/**  | HTTP REST web service request handler documentation       |
| **ws-doc/**    | SOAP webservice request handler documentation             |
| **ws/**        | SOAP webservice call request handler                      |
| **xas/**       | Request handler used by the Mendix Runtime itself         |

Additional information about request handlers is available on the following pages:

* The [Requests](/refguide/monitoring-mendix-runtime/#request-handlers) section of *Monitoring Mendix Runtime*
* The [Applying Access Restrictions to Unnecessary Request Handlers](/howto/security/best-practices-security/#request-handlers) section of *How To Implement Best Practices for App Security*

### User Accounts and Login Sessions{#Trends-appmxruntimesessions}

The **User accounts and login sessions** graph shows the number of logged-in user sessions for your application. It includes both named and anonymous users accounts.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-accounts-logins.png" >}}

These are the user types:

| User Type                              | Explanation                                                       |
|----------------------------------------|-------------------------------------------------------------------|
| **named users**                        | Total number of user accounts                                     |
| **concurrent named user sessions**     | Total number of sessions for users using a named login            |
| **concurrent anonymous user sessions** | Total number of sessions for users who are signing in anonymously |

### JVM Object Heap{#Trends-appmxruntimejvmheap}

The **JVM Object Heap** graph shows the internal distribution of allocated memory inside the application process for Java objects. Java objects are created in Java actions, but they also include all objects that are used by microflows running in your app at runtime.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-jvm-heap.png" >}}

Note that the JVM does not immediately clean up objects that are no longer in use. This graph shows unused memory as still in use until the garbage collector—which analyzes the memory to free up space—is run. So, before a garbage collection, you cannot see how much of the JVM memory will be available after the garbage collection cycle. This is because the garbage collection process only finds that out when it actually runs.

These are the types of objects:

| Object Type            | Explanation                                                         |
|------------------------|---------------------------------------------------------------------|
| **tenured generation** |  As objects "survive" repeated garbage collections in the eden space, they are migrated to the tenured generation. You can look at this metric as a number of long-living objects in JVM. |
| **survivor space**     | The Survivor space is the pool containing objects that have survived the garbage collection of the Eden space.  |
| **eden space**         | The Eden space is the pool from which memory is initially allocated for most objects. |
| **unused**             | This is the unused JVM heap memory.                                             |

{{% alert color="warning" %}}
It is difficult to base conclusions on JVM heap memory graphs. Imagine, for example, a scenario where the tenured generation is shown as 65% of the complete heap size.

If a garbage collection is triggered when the percentage reaches two-thirds of the total heap size, then the tenured generation could drop to 0%. However, it could stay at 65% if all data in this memory part is still referenced by running actions in the application.
{{% /alert %}}

### JVM Process Memory Usage{#Trends-appmxruntimejvmprocessmemory}

The **JVM Process Memory Usage** graph is similar to the [JVM Object Heap](#Trends-appmxruntimejvmheap) graph described above. It shows a more complete view of the actual size and composition of the operating system memory that is in use by the JVM process.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-jvm-memory.png" >}}

This graph is included to provide more insight into situations where the part of the real used memory outside the JVM Object Heap is growing too much and causing problems with memory shortage in the operating system.

For more information about this graph, see [What's in my JVM memory?](https://www.mendix.com/blog/whats-jvm-memory/).

These are the types:

| Type                 | Explanation                                                                                           |
|----------------------|-------------------------------------------------------------------------------------------------------|
| **code cache**       | JVM includes a code cache, containing memory that is used for compilation and storage of native code. |
| **native code**      | JVM allocates a certain amount of memory space for native bytecode.                                   |
| **jar files**        | These are JAR files necessary for JVM itself to run.                                                            |
| **tenured generation** | As objects "survive" repeated garbage collections in the survivor space, they are migrated to the tenured generation. You can look at this metric as a number of long-living objects in JVM. |
| **survivor space**   | This is the pool containing objects that have survived the garbage collection of the Eden space.              |
| **eden space**       | This is the pool from which memory is initially allocated for most objects.                                   |
| **unused java heap** | This is unused JVM heap memory.                                                                               |
| **permanent generation** | This is the pool containing all the reflective data of the virtual machine itself, such as class and method objects. With Java VMs that use class data sharing, this generation is divided into read-only and read-write areas. |
| **other**            | This is virtual or reserved memory space.                                                                     |
| **thread stacks**    | This is stacks that are reserved for unique threads.                                                          |

### Memory Usage{#Trends-appmemory}

The **Memory usage** graph shows the distribution of operating system memory that is available for this server. It is measured in gibibytes.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-memory-usage.png" >}}

Performance issues can arise if the app's memory takes up too much of the operating system memory.

### Threadpool for Handling External Requests{#Trends-appm2eeserverthreadpool}

The **Threadpool for handling external requests** graph shows the number of concurrent requests that are being handled by the Mendix Runtime. The requests are counted in two circumstances:

* When they are initiated by a remote API (the way the normal web-based client communicates)
* When they are initiated by calling web services

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-threadpool.png" >}}

Creating a new thread that can concurrently process a request is an expensive operation. So, Mendix holds a pool of threads that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the number of requests that are flowing through the application.

The values shown by the graph are as follows:

| Value               | Explanation                                                    |
|---------------------|----------------------------------------------------------------|
| **min threads**     | Minimum bound of threads to be used by the Jetty threadpool    |
| **max threads**     | Maximum bound of threads to be used by the Jetty threadpool    |
| **active threads**  | Active threads that are being used within the Jetty threadpool |
| **threadpool size** | The current total size of the Jetty threadpool                 |

### Total Number of Threads in the JVM Process{#Trends-appmxruntimethreads}

The **Total number of threads in the JVM process** graph shows the total number of threads that exist inside the running JVM process.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-jvm-thread-count.png" >}}

In addition to the threadpool that is used for external HTTP requests (described above), this includes the threadpool used for the following:

* Database connections
* Internal processes inside the Mendix Runtime
* Optional extra threads created by the application itself (for example, using a threadpool in a custom module or custom Java code)

### CPU Usage{#Trends-appcpu}

The **CPU usage** graph shows the app's CPU utilization, as a percentage. The graph's y-axis scales dynamically based on the data, ranging from 0 to the maximum data point included in the request.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-cpu-usage.png" >}}

{{% alert color="info" %}}
CPU usage of the database is shown in [Database Node CPU Usage](#Trends-dbcpu), below.
{{% /alert %}}

This graph is normalized so that 100% is the full capacity of a single CPU, 200% is the full capacity of two CPUs, and so on.

Your app can always access at least the amount of CPU specified for your container. However, because of the way resources are allocated to Mendix apps, your app may be able to burst to use more than the CPU specified for your container. For example, an app running in a container with two CPUs might show CPU usage of 250% where you would expect the maximum to be 200%.

 If your app consistently uses more CPU than specified for your container, your app could suffer from performance issues. This is because there may be periods when there are insufficient CPU resources for the app to burst above the level specified for the container.

### Disk Usage {#Trends-appdf}

The **Disk usage** graph shows the relative amounts of application node data stored on disk, displayed as a percentage. The graph's y-axis scales dynamically based on the data. If the app's disk usage is below 100%, then the y-axis ranges from 0 to the maximum data point included in the request.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-disk-usage.png" >}}

Interpret this graph in combination with other graphs. For more information, see [Combining Information](#combine-info), above.

The disk usage graph shows only the disk usage inside the container. This is usually only relevant if your application creates a lot of temporary files in `/tmp`. This value is not the same as the file document storage.

### Storage – Number of Files{#Trends-appnumberoffiles}

The **Storage – Number of Files** graph shows the number of files created by entities that are based on `FileDocument` generalizations. These are stored in S3 file storage.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-number-of-files.png" >}}

### Storage – Size of Files{#Trends-appsizeoffiles}

{{% alert type="info" %}}
This metric was added on January 21, 2022, with the release [4.25.0](https://github.com/mendix/cf-mendix-buildpack/releases/tag/v4.25.0) of the Cloud Foundry Mendix Buildpack. If you have not deployed your Mendix app since that date, the graph will show **No Data Available**. In that case, redeploy your app to see the data. The graph will then show data from that date onward.
{{% /alert %}}

The **Storage – Size of Files** graph shows the size of files (in bytes) that are stored in file storage.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/app-size-of-files.png" >}}

## Database Statistics

In this section, you will find the statistics about the database that the application uses.

{{% alert color="warning" %}}
If you are using the [Basic License](/developerportal/deploy/basic-package/), you will only see the first three graphs described in this section. These are the graphs that show information specific to your app.
{{% /alert %}}

### Number of Database Queries Being Executed{#Trends-dbmxruntimeconnectionbus}

The **Number of database queries being executed** graph shows the number of database queries per second that are executed by your Mendix application.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-queries-no.png" >}}

The queries are broken down into queries that modify data (**insert**, **update**, and **delete**) and queries that fetch data (**select**). It also includes the number of SQL transactions per second.

These are the types of queries:

| Type             | Explanation                                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------------------|
| **inserts**      | Number of SQL `INSERT INTO` statements per second. These add new rows of data to a table in the database.       |
| **transactions** | Number of SQL transactions per second. A transaction is a unit of work that is performed against a database.    |
| **update**       | Number of SQL `UPDATE` statements per second. The SQL `UPDATE` query modifies the existing records in a table.  |
| **select**       | Number of SQL `SELECT` statements per second. The SQL `SELECT` statement fetches data from a database table that returns this data in the form of a result table. |
| **delete**       | Number of SQL `DELETE` statements per second. The SQL `DELETE` query deletes the existing records from a table. |

### Database Table vs. Index Size{#Trends-dbpgtableindexsizeVERSIONmain}

The **Database table vs. index size** graph shows the distribution between disk space used for storing indexes and actual data.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-table-vs-index.png" >}}

Remember, indexes actually occupy memory space and disk storage. This is because they are just copies of parts of your data stored and sorted in another way! Besides the data you are processing, the relevant parts of the indexes also have to be read into system memory to be able to use them.

These are the values:

| Value       | Explanation                                          |
|-------------|------------------------------------------------------|
| **tables**  | Total space taken by the database                    |
| **indices** | Amount of space taken by the indices in the database |

### Database Transactions and Mutations{#Trends-dbpgstatdatabaseVERSIONmain}

The **Database transactions and mutations** graph shows the number of database objects that were changed by database queries from the application. It is measured in operations per second.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-mutations.png" >}}

For a single database operation that affects more than one object, this graph shows the number of objects actually changed, as measured from inside the database. However, the [Number of database queries being executed](#Trends-dbmxruntimeconnectionbus) graph only shows a single database query for the same operation.

These are the values:

| Value             | Explanation                                   |
|-------------------|-----------------------------------------------|
| **xact commit**   | Number of transactions committed per second   |
| **xact rollback** | Number of transactions rolled back per second |
| **xact inserted** | Number of tuples inserted per second          |
| **xact updated**  | Number of tuples updated per second           |
| **xact deleted**  | Number of tuples deleted per second           |

The most common cause of rollbacks is a (unexpected) reboot of the application.

Rollbacks appearing during normal operation indicate a problem and should be investigated. A common cause is that two or more processes are attempting a mutation of the same object. If you have more than one instance, remember that these processes might be running on different instances.

### Connections to the Database{#Trends-dbmxruntimepgstatactivity}

The **Connections to the database** graph shows the number of connections to the PostgreSQL server.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-connections-no.png" >}}

The number of connections goes up and down with the usage of the application. The database can reuse open connections and will not open more connections than it needs.

The standard configuration sets a maximum of 50 connections per instance. You can change this through [The Number of Database Connections](/refguide/tricky-custom-runtime-settings/#num-connections), as described in *Advanced Custom Settings in Mendix Runtime*. The graph displays the total number of connections for all instances in a multi-instance scaled runtime. 

### Database Memory{#Trends-dbmemory}

The **Database memory** graph shows the distribution of operating system memory, in gibibytes, that is available for this server.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-memory.png" >}}

Parts of the database data and indexes that are referenced frequently must always be available in the working memory of the server. This is crucial for application performance.

A lack of freeable memory on a busy application results in continuous re-reads of data from disk. This takes several orders of magnitude more time and slows down the entire application. This may indicate that you have a large number of concurrent database connections from your app and that the environment is not large enough to support these.

These are the types:

| Type                | Explanation                                                                            |
|---------------------|----------------------------------------------------------------------------------------|
| **Used memory**     | Total memory size of the database instance minus the freeable memory                   |
| **Freeable memory** | Memory that is allocated dynamically containing, for example, cached reads and indexes |
| **Swap usage**      | The amount of swap space used on the database instance                                 |

### CPU Utilization of the Database{#Trends-dbcpu}

The **CPU Utilization of the database** graph shows the amount of CPU usage over time as a percentage.

This graph is normalized so that 100% is the full capacity of the database node. This is the figure reported by the database node itself. So, however many CPUs the database node has, the graph will peak at 100%.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-cpu-usage.png" >}}

### Database Throughput{#Trends-dbdiskstatsthroughput}

The **Database throughput** graph shows the amount of data that is being read from and written to disk.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-throughput.png" >}}

If you see large values here that do not immediately drop back again, it may indicate that your app is continually swapping data to disk. This could be caused by inefficient queries; for example, it could be caused by queries that require sorting within the app.
<a id="Trends-dbdf"></a>

### Database Disk Usage{#Trends-dbdfabs}

The **Database disk usage** graph displays used storage (the absolute amount of data that is stored on disk) as well as free space (the remaining space on the database node). It is measured in gibibytes.

The value for used storage also includes space that is used to store transaction logs. These are required to maintain the integrity of the database. Although limits are set to keep the transaction logs to a minimum, storage used by the transaction logs can sometimes exceed 2 gibibytes.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-disk-usage.png" >}}

### Database IOPS {#Trends-dbdiskstatsiops}

The **Database IOPS** graph, also called the database input/output operations per second graph, shows the number of disk read and write operations that are done from and to the disk storage. It does not show the amount of data that was transferred.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-iops.png" >}}

There are two sets of values:

| Value     | Explanation                                |
|-----------|--------------------------------------------|
| **read**  | Read ops on the disk holding the database  |
| **write** | Write ops on the disk holding the database |

### Database IO Latency{#Trends-dbdiskstatslatency}

The **Database IO latency** graph shows the average waiting times, in seconds, for disk operations to complete.

{{% alert color="info" %}}
You will not see this if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-io-latency.png" >}}

Interpret the values in this graph in combination with the other disk stats graphs and the type of requests that were made. Sequential or random reads and writes can create a different burden for disk storage.

There are two sets of values:

| Value     | Explanation                                |
|-----------|--------------------------------------------|
| **read**  | Read ops on the disk holding the database  |
| **write** | Write ops on the disk holding the database |

### Database IOPS Burst Balance {#Trends-dbmxdatabaseburstbalance}

{{% alert color="info" %}}
Burst balance metrics are not available for databases with the gp3 storage instance type. This applies to any database with a storage size of 20 GiB or more. For details, see [Migration to gp3 Storage Instances](#gp3-migration), below.
{{% /alert %}}

{{% alert color="info" %}}
You will not see this graph if you are using the [Basic License](/developerportal/deploy/basic-package/) because you are using a private schema on a shared database server.
{{% /alert %}}

The **Database IOPS burst balance** graph shows the number of IOPS credits accrued to support burstable performance. The metric is expressed as a percentage; 100% means that the volume has accumulated the maximum number of credits.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/db-iops-burst-balance.png" >}}

Apps running on Mendix Cloud use AWS databases to store their data. These databases are burstable, which means that they have a specified performance baseline. Burstable performance means that if you use fewer IOPS than is required for baseline performance (such as when the app is idle), the unspent IOPS credits accrue until they reach a maximum. If a burstable performance instance needs to burst above the baseline performance level, it spends the accrued credits. The more credits that a burstable performance instance has accrued, the more time it can burst beyond its baseline when more performance is needed.

For more information, see the AWS document [Overview of Monitoring Metrics in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html).

If your database uses a high level of IOPS over a sustained period, this may impact your app's performance. If your database burst balance reduces consistently, you need to ensure that there are periods when there is less activity so that the database burst balance can be restored.

Databases larger than 1,000 GiB have a base performance that is equal to or greater than the maximum burst performance. This means depleting the database IOPS burst balance does not affect their performance.

For more information, see the AWS Database blog [Understanding Burst vs. Baseline Performance with Amazon RDS and GP2](https://aws.amazon.com/blogs/database/understanding-burst-vs-baseline-performance-with-amazon-rds-and-gp2/).

#### Migration to gp3 Storage Instances {#gp3-migration}

Burst balance metrics are not available for databases with the gp3 storage instance type.

As of [October 25, 2023](/releasenotes/developer-portal/mendix-cloud/#october-25-2023), whenever you create a new DB instance, it will be provisioned with a gp3 storage instance if it meets the eligibility criteria defined in the table below. This also occurs if your database is recreated.

As of [March 26, 2024](/releasenotes/developer-portal/mendix-cloud/#march-26-2024), all existing databases of environments on eligible plans in Mendix Cloud (as specified in the table below) have also been migrated to gp3 storage instances.

| Storage Size           | Storage Instance Type | Baseline Storage Performance | Provisioned IOPS Range | Provisioned Throughput Range |
|------------------------|-----------------------|------------------------------|------------------------|------------------------------|
| Less than 20 GiB       | gp2                   | 100 IOPS (3000 burst) /<br>125 MiB/s | 100–1197 IOPS    | 128–250 MiB/s                |
| Between 20 and 400 GiB | gp3                   | 3000 IOPS /<br>125 MiB/s       | N/A                    | N/A                          |
| 400 GiB and higher     | gp3                   | 12000 IOPS /<br>500 MiB/s      | 12000–64000 IOPS       | 500–4000 MiB/s               |

Compared to gp2, gp3 provides higher baseline storage performance and does not require any burst balance. For more information on gp2 and gp3 performance, see the [AWS gp3 storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) page.

{{% alert color="info" %}}
For details on DB storage size for various plans, see [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack).
{{% /alert %}}

## Read More

* [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/) – Describes how to use application performance monitoring tools to provide additional monitoring for your Mendix Apps running on Mendix Cloud

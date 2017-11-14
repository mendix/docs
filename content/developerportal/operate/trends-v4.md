---
title: "Trends in Mendix Cloud v4"
parent: "metrics"
description: "Describes how to interpret various graphs and trends in the Mendix Cloud v4."
tags: ["Trends","v4","Mendix Cloud","Developer Portal"]
---

## 1 Introduction

To monitor the application health and performance, you can view the trends.

## 2 Access to Monitoring Trends

To view the **Trends**, you must have permission to **Access the Monitoring**.

{{% alert type="info" %}}

Only the Technical Contact is allowed to grant the node permissions.

{{% /alert %}}

To assign this permission, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.
3. Select the node that you want to monitor.
4. Click **Security** under the **Settings** category on the left.
5. Go to the **Node Permissions** tab.
6. Check **Access to Monitoring** next to the name of the person who is granted this permission.

    ![](attachments/nodepermission.jpg)

## 3 Viewing the Trends

You can find the trends by following these steps:

1. Go to the [Developer Portal](http://home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.
3. Select the node that you want to monitor.
4. Click **Metrics** under the **Operate** category.
5. Select the environment you want to monitor under the **Trends** tab.

    ![](attachments/environment.jpg)

## 4 Application Statistics

This section explains the metrics that represent the current status and statistics of a running Mendix application. This includes requests that the application processes from the services/clients with which it's integrated as well as actions it performs on its own database, Java Virtual Machine-related statistics, and the Jetty Web server it uses.

### <a name="Trends-appmxruntimerequests"></a>4.1 Number of Handled External Requests

The requests graph shows the number of requests that are sent from the client or systems that integrate with your application using web services. The number of requests per second is split up by request handlers.

Note the following:

* **xas** lists general queries for data in data grids, sending changes to the server, and triggering the execution of microflows
* **ws** shows the number of web service calls that were done
* **FileDocuments** shows the number of file uploads and downloads
* The **/** should not list any requests, because static content is directly served to the user by the front-facing web server, which is placed between the user and this application process

These are the commonly used types:

Request Type | Explanation
------------ | -------------
**api-doc/** | A general API doc overview for other doc request handlers.
**debugger/** | Mendix Runtime debugger request handler.
**/** | Default request handler.
**FileDocuments** | Request handler used for serving files.
**odata-docs/** | Documentation request handler for OData.
**openid/** | OPENID authentication request handler.
**p/** | Request handler for custom page URLs.
**rest-doc/** | HTTP REST web service request handler documentation.
**ws-doc/** | SOAP webservice request handler documentation.
**ws/** | SOAP webservice call request handler.
**xas/** | Request handler used by the Mendix Runtime itself.

### <a name="Trends-appmxruntimeconnectionbus"></a>4.2 Number of Database Queries Being Executed

This graph shows the number of database queries that are executed by your Mendix application, broken down in queries that actually modify data (insert, update, delete), queries that fetch data (select), and the number of transactions (like microflows from which these queries originate).

These are the types:

Type | Explanation
------------ | -------------
**inserts** | Amount of SQL `INSERT INTO` statements per second. This is used to add new rows of data to a table in the database.
**transactions** | Amount of SQL transactions per second. A transaction is a unit of work that is performed against a database.
**update** | Amount of SQL `UPDATE` statements per second. The SQL `UPDATE` query is used to modify the existing records in a table.
**select** | Amount of SQL `SELECT` statements per second. The SQL `SELECT` statement is used to fetch the data from a database table that returns this data in the form of a result table.
**delete** | Amount of SQL `DELETE` statements per second. The SQL `DELETE` query is used to delete the existing records from a table.

### <a name="Trends-appmxruntimesessions"></a>4.3 User Accounts and Login Sessions

The sessions graph shows the number of logged-in named and anonymous user sessions for your application, next to the total number of existing login accounts in the application.

These are the user types:

User Type | Explanation
------------ | -------------
**named users** | Total number of user accounts.
**concurrent named user sessions** | Total number of named login sessions that are occurring at that moment.
**concurrent anonymous user sessions** | Total number of anonymous login sessions that are occurring at that moment.

### <a name="Trends-appmxruntimejvmheap"></a>4.4 JVM Object Heap

The JVM Object Heap graph shows the internal distribution of allocated memory inside the application process for objects that are in use by microflows, scheduled events, and all other data that flows around inside the Mendix Runtime process.

In order to be able to interpret the values in this graph, one of the most important things to know is the fact that the JVM does not immediately clean up objects that are no longer in use. This graph will show unused memory as still in use until the so-called garbage collector (which analyzes the memory to free up space) is run. So, this graph does not show how much of the JVM memory that is in use before a garbage collection will have to stay allocated after the garbage collection cycle, because the garbage collection process will only find out about that when it's actually running.

If the tenured generation shows up to as much as 65% of the complete heap size, this might as well change to 0% when a garbage collection is triggered as soon as the percentage reaches two thirds of the total heap size. However, it could also stay at this amount if all data in this memory part is still referenced by running actions in the application. This behavior means that the JVM Object Heap graphs is one of the most difficult graphs on which to base conclusions.

These are the types:

Object Type | Explanation
------------ | -------------
**tenured generation** |  As objects "survive" repeated garbage collections in the survivor space, they are migrated to the tenured generation. You can look at this metric as a number of long-living objects in JVM.
**native memory** | The native memory is the memory available to the operating system.
**eden space** | The pool from which memory is initially allocated for most objects.
**unused** | Unused JVM heap memory.

### <a name="Trends-appmxruntimejvmprocessmemory"></a>4.5 JVM Process Memory Usage

This second graph about JVM memory is similar to the previous graph, JVM Object Heap. It shows a more complete view of the actual size and composition of the operating system memory that is in use by the JVM process. This graph is currently present to provide more insight in situations in which the part of the real used memory outside the JVM Object Heap is growing too much, causing problems with memory shortage in the operating system.

For more information about this graph, see this Tech Blog post: [What's in My JVM Memory?](https://tech.mendix.com/linux/2015/01/14/whats-in-my-jvm-memory/).

These are the types:

Type | Explanation
------------ | -------------
**code cache** | JVM also includes a code cache, containing memory that is used for compilation and storage of native code.
**native code** | JVM allocates a certain amount of memory space for native bytecode.
**jar files** | JAR files necessary for JVM itself to run.
**tenured generation** | As objects "survive" repeated garbage collections in the survivor space, they are migrated to the tenured generation. You can look at this metric as a number of long living objects in JVM.
**survivor space** | The pool containing objects that have survived the garbage collection of the Eden space.
**eden space** | The pool from which memory is initially allocated for most objects.
**unused java heap** | Unused JVM heap memory.
**permanent generation** | The pool containing all the reflective data of the virtual machine itself, such as class and method objects. With Java VMs that use class data sharing, this generation is divided into read-only and read-write areas.
**other** | Virtual or reserved memory space.
**thread stacks** | Stacks that are reserved for unique threads.

### <a name="Trends-appm2eeserverthreadpool"></a>4.6 Threadpool for Handling External Requests

The application server thread pool graph shows the number of concurrent requests that are being handled by the Mendix Runtime, but only when they're initiated by a remote API (like the way the normal web-based client communicates) or by calling web services. Because creating a new thread that can concurrently process a request is an expensive operation, there's a pool of threads being held that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the number of requests that are flowing through the application.

These are the types:

Type | Explanation
------------ | -------------
**min threads** | Minimum bound of threads to be used by the Jetty threadpool.
**max threads** | Maximum bound of threads to be used by the Jetty threadpool.
**active threads** | Active threads that are being used within the Jetty threadpool.
**threadpool size** | The current total size of the Jetty threadpool.

### <a name="Trends-appmxruntimethreads"></a>4.7 Total Number of Threads in the JVM Process

This graph shows the total number of threads that exist inside the running JVM process. Besides the threadpool that is used for external HTTP requests (as shown above), this includes the threadpool used for database connections, internal processes inside the Mendix Runtime, and optional extra threads created by the application itself (for example, using a threadpool in a custom module or custom Java code).

### <a name="Trends-appmxruntimecache"></a>4.8 Object Cache

Mendix 4.0 introduced non-persistent entities that live in the JVM memory and are garbage-collected regularly. If you have a memory leak, the number of objects in memory will grow over time. This might be a problem. In this graph, you can monitor the number of Mendix objects that live in memory.

## 5 Database Statistics

In this section you will find the statistics about the database that the application uses.

### <a name="Trends-dbpgstatdatabaseVERSIONmain"></a>5.1 Mutations

This graph shows the number of database objects that were actually changed by database queries from the application. A single database operation that affects more than one object, will show up as single database query as measured from the application side, but will show the number of object actually changed here, as measured from inside the database.

These are the types:

Type | Explanation
------------ | -------------
**xact commit** | Number of transactions committed per second.
**xact rollback** | Number of transactions rolled back per second.
**tuples inserted** | Number of tuples inserted per second.
**tuples updated** | Number of tuples updated per second.
**tuples deleted** | Number of tuples deleted per second.

### <a name="Trends-dbpgtableindexsizeVERSIONmain"></a>5.2 Index vs. Table Size

This database size graph shows the distribution between disk space used for storing indexes and actual data. Remember, indexes actually occupy memory space and disk storage, as they're just parts of your data copied, stored, and sorted in another way! Besides your data, indexes also have to be read into the system memory to be able to use them.

These are the types:

Type | Explanation
------------ | -------------
**tables** | Amount of space taken by the tables in the database.
**indexes** | Amount of space taken by the indexes in the database.

### 5.3 Application Node

The application node is the isolated and secure machine on which your application runs.

This section presents crucial information about this machine.

#### <a name="Trends-appcpu"></a>5.3.1 CPU

The CPU graph shows the amount of CPU utilization in percentage, broken down into different types of CPU usage.

The most important value in here is **user**, which shows the amount of CPU time used for handling requests at Mendix Runtime as well as executing microflows and scheduled events. CPU usage of the database is shown in a separate graph below.

#### <a name="Trends-appmemory"></a>5.3.2 Memory

The memory graph shows the distribution of operating system memory that is available for this server. The most important part of the graph is the application process, which is visible as an amount of memory that is continuously in use, labelled in the category **apps**.

### 5.4 Database Node

The database node is the isolated and secure machine on which your application runs.

This section presents crucial information about this machine.

#### <a name="Trends-dbcpu"></a>5.4.1 CPU

The CPU graph shows the amount of CPU utilization in percentage, broken down into different types of CPU usage.

The most important values here are the following:

* **user** – shows the amount of CPU time used for running database queries
* **iowait** – shows the amount of time a CPU core is idle and waiting for disk operations to finish (for example, waiting for information that has to be read from disk, or waiting for a synchronous write operation to finish)

Clearly visible amounts of **iowait** in combination with a high number of disk read operations (Disk IOPS) and all free system memory filled as disk cache (Memory graph) is a sign of a lack of available server memory for use as disk cache. This situation will slow down database operations tremendously, because getting data from the disk over and over again takes considerably more time than having it present in the memory.

#### <a name="Trends-dbmemory"></a>5.4.2 Memory

The memory graph shows the distribution of operating system memory that is available for this server. The most important part of this graph is the **cache** section. This type of memory usage contains parts of the database storage that have been read from disk earlier. It is crucial to the performance of an application that parts of the database data and indexes that are referenced a lot are always immediately available in the working memory of the server, at the cache part. A lack of disk cache on a busy application will result in continuous re-reads of data from disk, which takes several orders of magnitude more time, slowing down the entire application.

These are the types:

Type | Explanation
------------ | -------------
**used memory** | Total memory size of the database instance minus the freeable memory.
**freeable memory** | The amount of available random access memory.
**swap usage** | The amount of swap space used on the database instance.

#### <a name="Trends-dbpgstatactivityVERSIONmain"></a>5.4.3 Database Connections

The database connections graph shows the number of connections to the PostgreSQL server. This should go up and down with the usage of the application. The number of connections is limited to 50.

## <a name="Trends-dbdiskstatsiops"></a>6 Both Application and Database Node

Shared statistics for both of the machines.

### <a name="Trends-appdiskstatsiops"></a>6.1 Disk IOPS

The disk IO statistics show the number of disk read and write operations that are done from and to the disk storage. It does not show the amount of data that was transferred.

These are the types:

Type | Explanation
------------ | -------------
**read** | Read ops on the current targeted file storage.
**write** | Write ops on the current targeted file storage.

### <a name="Trends-appload"></a><a name="Trends-dbload"></a>6.2 Load

This value is commonly used as a general indication for overall server load that can be monitored and alerted upon. The load value is a composite value, calculated from a range of other measurements, as shown in the other graphs on this page. When actually investigating high server load, this graph alone is not sufficient.

### <a name="Trends-appdiskstatslatency"></a><a name="Trends-dbdiskstatslatency"></a>6.3 Disk Latency

The disk latency graph shows the average waiting times for disk operations to complete. Interpreting the values in this graph should be done in combination with the other disk stats graphs, and while having insight in the type of requests that done. Sequential or random reads and writes can create a different burden for disk storage.

### <a name="Trends-appdiskstatsthroughput"></a><a name="Trends-dbdiskstatsthroughput"></a>6.4 Disk Throughput

Disk throughput shows the amount of data that is being read from and written to disk. If there's more than one disk partition in the system, the `/srv` partition generally contains the project files and uploaded files of the application, while `/var` generally holds the database storage.

### <a name="Trends-appdfabs"></a><a name="Trends-dbdfabs"></a><a name="Trends-dbdf"><a name="Trends-appdf"></a>6.5 Disk Usage

This graph displays the amount of data that is stored on disk in absolute amounts. If there's more than one disk partition in the system, the `/srv` partition generally holds project files and uploaded files of the application, while `/var` generally holds the database storage.

### <a name="Trends-appdiskstatsutilization"></a><a name="Trends-dbdiskstatsutilization"></a>5.6 Disk Utilization

Disk utilization shows the percentage of time that the disk storage is busy processing requests. This graph should be interpreted in combination with other graphs, like CPU **iowait**, **disk iops**, and **number of running requests**. For example, a combination of a moderate number of IO operations, low amount of disk throughput, visible CPU **iowait**, filled up memory disk cache, and reports of long-running database queries in the application log could point to a shortage of system memory for the disk cache that leads to repeated random reads from disk storage.

## 6 Related Content

* [Alerts](monitoring-application-health)
* [How to Configure Maintenance Windows](/developerportal/howto/maintenance-windows)
* [How to Migrate to Mendix Cloud v4](/deployment/mendixcloud/migrating-to-v4)
* [How to Receive Environment Status Alerts](/developerportal/howto/receive-alerts)
* [How to View the Mendix Cloud Version and Region](/developerportal/howto/cloud-version-region)
* [Mendix Cloud v4 - FAQ](/deployment/mendixcloud/mxcloudv4)


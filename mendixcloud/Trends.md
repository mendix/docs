---
title: "Trends"
space: "Mendix Cloud"
category: "Mendix Cloud"
---
## 1. Amount of handled external requests

The requests graph shows the amount of requests that are sent from the end user web browser, or systems that integrate with your application using web services. The amount of requests per second is split up by request handler.

"xas" lists general queries for data in datagrids, sending changes to the server and triggering the execution of microflows, "ws" shows the amount of web service calls that were done, "file" shows the amount of file uploads and downloads. The "/" should not list any requests, because static content is directly served to the end user by the front facing web server, which is placed between the end user and this application process.

## 2\. Amount of database queries being executed

This graph shows the amount of database queries that are executed by your mendix application, broken down in queries that actually modify data (insert, update, delete), queries that fetch data (select), and the amount of transactions (i.e. microflows from which these queries originate).

## 3\. User accounts and login sessions

The sessions graph shows the amount of logged in named and anonymous user sessions on your application, besides the total amount of existing login accounts in the application.

## 4\. JVM Object Heap

The JVM Object Heap graphs shows the internal distribution of allocated memory inside the application process for objects that are in use by microflows, scheduled events, and all other data that flows around inside the mendix runtime process.

One of the most important things to know in order to be able to interpret the values in this graph, is the fact that the JVM does not immediately clean up objects that are no longer in use. This graph will show unused memory as still in use until the so called garbage collector which analyzes the memory to free up space is run. So, this graph does not show how much of the JVM memory that is in use before a garbage collection will have to stay allocated after the garbage collection cycle, because the garbage collection process will only find out about that when it's actually running.

If the tenured generation shows up to as big as 65% of the complete heap size, this might as well change to 0% when a garbage collection is triggered as soon as the percentage reaches two thirds of the total heap size, but it could also stay at this amount if all data in this memory part is still referenced by running actions in the application. This behaviour causes the jvm heap memory graphs to be one of the most difficult to base conclusions on.

## 5\. JVM Process Memory Usage

This second graph about JVM memory is a bit similar to the previous graph, JVM Object Heap. It shows a more complete view on the real actual size and composition of the operating system memory that is in use by the JVM process. This graph is currently primarily present to provide more insight in situations in which the part of the real used memory outside the JVM Object Heap is growing too much, causing problems with memory shortage in the operating system as a whole.

More information on this graph is available in a Tech Blog post: [What's in my JVM memory?](https://tech.mendix.com/linux/2015/01/14/whats-in-my-jvm-memory/)

## 6\. Threadpool for handling external requests

The application server thread pool graph shows the amount of concurrent requests that are being handled bij the mendix runtime, but only when they're initiated by a remote API, like the way the normal web based client communicates, or by calling web services. Because creating new thread which can concurrently process a request is an expensive operation, there's a pool of threads being held that can quickly start processing new incoming requests. This pool automatically grows and shrinks according to the amount of requests that's flowing through the application.

## 7\. Total amount of threads in the JVM process

This graph shows the complete number of theads that exist inside the running JVM process. Besides the threadpool that is used for external http requests, as shown above, this includes the threadpool used for database connections, internal processes inside the Mendix Runtime and optional extra threads created by the application itself, e.g. using a threadpool in a custom module or custom java code.

## 8\. Object Cache

Mendix 4.0 introduced Non-Persistent Entities which live in the JVM memory and are garbage collected regularly. If you have a memory leak, the amount of objects in memory will grow over time. This might be a problem. In this graph you can monitor the number of Mendix Objects that live in memory.

## 9\. Database

### 9.1 Mutations

This graph shows the amount of database objects that were actually changed by database queries from the application. A single database operation that affects more than one object, will show up as single database query as measured from the application side, but will show the amount of object actually changed here, as measured from inside the database.

### 9.2 Index vs Table size

This database size graph shows the distribution between disk space used for storing indexes and actual data. Remember, indexes actually occupy memory space and disk storage, as they're just parts of your data copied and stored, sorted in another way! Besides your data, also indexes have to be read into system memory to be able to use them.

## 9.3 Application Node

### 9.4 CPU

The CPU graph shows the amount of cpu utilization in percents, broken down in different types of cpu usage.

Most important value in here is 'user', which shows the amount of cpu time used for handling requests at the Mendix Runtime and executing microflows and scheduled events. CPU usage of the database is show in a separate graph below.

### 9.5 Memory

The memory graph shows the distribution of operating system memory that is available for this server. The most important part of the graph is the application process, which is visible as an amount of memory that is continuously in use, labelled in the category 'apps'.

## 10\. Database Node

### 10.1 CPU

The CPU graph shows the amount of cpu utilization in percents, broken down in different types of cpu usage.

Most important values in here are: 'user', which shows the amount of cpu time used for running database queries, and 'iowait', showing the amount of time a cpu core is idle and waiting for disk operations to finish (e.g. waiting for information that has to be read from disk, or waiting for a synchronous write operation to finish).

Clearly visible amounts of iowait, in combination with a high amount of disk read operations (Disk IOPS) and having all free system memory filled as disk cache (Memory graph) are a sign of shortage of server memory available for use as disk cache. This situation will slow down database operations tremendously, because getting data from disk over and over again takes considerably more time than having it present in memory.

### 10.2 Memory

The memory graph shows the distribution of operating system memory that is available for this server. The most important part of this graph is the 'cache' section. This type of memory usage contains parts of the database storage that have been read from disk earlier. It is crucial to the performance of an application that parts of the database data and indexes that are referenced a lot are always immediately available in the working memory of the server, at the cache part. A lack of disk cache on a busy application will result in continuous re-reads of data from disk, which takes several orders of magnitude more time, slowing down the entire application.

### 10.3 Database Connections

The database connections graph shows the amount of connections to the PostgreSQL server. This should go up and down with the usage of the application. The amount of connections is limited to 50.

## 11\. Both Application and Database Node

### 11.1 Disk IOPS

The Disk IO statistics show the amount of disk read and write operations that are done from and to the disk storage. It does not show the amount of data that was transferred.

### 11.2 Load

This value is commonly used as a general indication for overall server load that can be monitored and alerted upon. The load value is a composite value, calculated from a range of other measurements, as show in the other graphs on this page. When actually investigating high server load, this graph is not sufficient on itself.

### 11.3 Disk Latency

The disk latency graph shows the average waiting times for disk operations to complete. Interpreting the values in this graph should be done in combination with the other disk stats graphs, and while having insight in the type of requests that done. Sequential or random reads and writes can create a really different burden for disk storage.

### 11.4 Disk Throughput

Disk throughput shows the amount of data that is being read from and written to disk. If there's more than one disk partition in the system, the /srv partition generally holds project files and uploaded files of the application and /var generally holds the database storage.

### 11.5 Disk Usage

This graph displays the amount of data that is stored on disk in absolute amounts. If there's more than one disk partit
ion in the system, the /srv partition generally holds project files and uploaded files of the application and /var general
ly holds the database storage.

### 11.6 Disk Utilization

Disk utilization shows the percentage of time that the disk storage is busy processing requests. This graph should be interpreted in combination with other graphs like cpu iowait, disk iops and amount of running requests. For example, a combination of a moderate amount of IO operations, low amount of disk throughput, visible cpu iowait, filled up memory disk cache and reports of long running database queries in the application log could point to a shortage of system memory for disk cache that leads to repeated random reads from disk storage.

## 12\. Related content

*   [Trends](/mendixcloud/Trends)
*   [Deploying to the cloud](/mendixcloud/Deploying+to+the+cloud)
*   [How to deploy a Mendix app on Azure](/mendixcloud/How+to+deploy+a+Mendix+app+on+Azure)
*   [Sending Email](/mendixcloud/Sending+Email)
*   [Monitoring application health](/mendixcloud/Monitoring+application+health)
*   [Different user logins when integrated with Mendix SSO](/mendixcloud/Different+user+logins+when+integrated+with+Mendix+SSO)
*   [Integrate your app with Mendix SSO](/mendixcloud/Integrate+your+app+with+Mendix+SSO)
*   [Deploying to a Free App](/mendixcloud/Deploying+to+a+Free+App)

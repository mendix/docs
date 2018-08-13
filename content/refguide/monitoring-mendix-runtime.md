---
title: "Monitoring Mendix Runtime"
category: "Runtime"
description: "Describes the supported Mendix Runtime monitoring actions."
tags: ["runtime, json"]
---

## 1 Introduction

The Mendix Runtime monitoring actions can be called by sending a JSON request to the admin handler. This is accomplished by sending a request to the admin port which is specified in the application configuration (defaults to 8090).

You can change the admin port from the Desktop Modeler by navigating to **Project** > **Settings** > **Configurations** > *your configuration* > **Server** > **Admin port**.

The request needs to be of the **POST** type with **No Authorization** and the following headers:

* Content-Type: **application/json**
* X-M2EE-Authentication: **yourM2EEPassword_Base64Encoded**

The M2EE password is NOT the super administrator password, but a separate password. If you have the application deployed on premises, you can set this password in the **settings.yaml** file, which is located in the **Apps/YourProject** folder. If you are running the application from the Desktop Modeler, the M2EE password is set automatically by Mendix, and you can retrieve it from the enviornment variables of your application process.

Read the next sections to find out which monitoring actions are supported.

## 2 Current Executions

**Request**

```java
"{"action" : "get_current_runtime_requests", "params":{} }"

```

**Response**

```java
{
  "feedback":{
    "202de1e51639ae0":{
      "request_duration":106175,
      "type":"CLIENT",
      "user":"Anonymous_2ce7c971-f077-4aca-83c5-f3898443ed01",
      "action_stack":[
      {
        "xpath":"//MyFirstModule.Entity",
        "amount":1,
        "depth":0,
        "offset":-1,
        "sort":{},
        "type":"RetrieveXPathAction"
      },
      {
        "current_activity":{
          "caption":"Retrieve Entity from database",
          "type":"RetrieveByXPath"
        },
        "name":"MyFirstModule.LoopNested",
        "type":"Microflow"
      },
      {
        "current_activity":{
          "caption":"LoopNested",
          "type":"SubMicroflow"
        },
        "name":"MyFirstModule.Loop",
        "type":"Microflow"
      }
    ]},
    "bcbb5508-0293-4f12-b290-ee109962811e":{
      "request_duration":104776,
      "type":"CLIENT_ASYNC_MONITORED",
      "user":"Anonymous_2ce7c971-f077-4aca-83c5-f3898443ed01",
      "action_stack":[
      {
        "current_activity":{
          "caption":"Retrieve Entity from database",
          "type":"RetrieveByXPath"
        },
        "name":"MyFirstModule.LoopNested",
        "type":"Microflow"
      },
      {
        "current_activity":{
          "caption":"LoopNested",
          "type":"SubMicroflow"
        },
        "name":"MyFirstModule.Loop",
        "type":"Microflow"
      }
    ]}
  },
  "result":0
}
```

This request returns the current executions of actions known by the Mendix Runtime. Actions can amongst others be microflows, Java actions, web service calls and scheduled events. For each execution the following is reported:

*   The "duration" of the execution in milliseconds.
*   The "type" of execution. Possible types are "CLIENT", "CLIENT_ASYNC", "CLIENT_ASYNC_MONITORED", "CUSTOM", "WEB_SERVICE", "SCHEDULED_EVENT" and "UNKNOWN". "CLIENT_ASYNC" is the asynchronous microflow call triggered from the web client, "CLIENT_ASYNC_MONITORED" is the actual execution of the asynchronous microflow in the Mendix Runtime, which happens in a different thread.
*   The "user" is the name of the user associated with the session executing the action. In case of a non-user session the name "System" is displayed.
*   The "action_stack" shows the stack of actions for this execution. For each action in this stack detailed information is displayed, e.g. for a microflow the current activity and the name of the microflow are shown.

## 3 Runtime Statistics

**Request**

```java
"{"action" : "runtime_statistics", "params":{} }"

```

**Response**

```java
"{
  "feedback":
  {
    "requests":
    [
      {"name":"","value":97,"last_request_timestamp":1394785085325},
      {"name":"file","value":0,"last_request_timestamp":1394785072325},
      {"name":"ws-doc/","value":0,"last_request_timestamp":1394785072325},
      {"name":"xas/","value":8,"last_request_timestamp":1394785082325},
      {"name":"ws/","value":0,"last_request_timestamp":1394785072325}
    ],
	"cache": { "total_count":2 },
    "sessions":
    {
	  "user_sessions":{
        "562949953421313":[
          "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0"
        ]
      },
      "named_users":3,
      "named_user_sessions":1,
      "anonymous_sessions":0
    },
    "connectionbus":
    {
      "update":7,
      "transaction":0,
      "select":28,
      "delete":5,
      "insert":5
    },
    "memory":
    {
      "code":0,
      "init_nonheap":2555904,
      "init_heap":268435456,
      "eden":0,
      "memorypools":[
        {
          "is_heap":false,
          "usage":11788032,
          "name":"Code Cache",
          "index":0
        },
        {
          "is_heap":false,
          "usage":49590256,
          "name":"Metaspace",
          "index":1
        },
        {
          "is_heap":false,
          "usage":6458552,
          "name":"Compressed Class Space",
          "index":2
        },
        {
          "is_heap":true,
          "usage":106799624,
          "name":"PS Eden Space",
          "index":3
        },
        {
          "is_heap":true,
          "usage":0,
          "name":"PS Survivor Space",
          "index":4
        },
        {
          "is_heap":true,
          "usage":18500976,
          "name":"PS Old Gen",
          "index":5
        }
      ],
      "tenured":0,
      "committed_heap":301465600,
      "max_heap":3817865216,
      "survivor":0,
      "used_nonheap":67844048,
      "max_nonheap":-1,
      "committed_nonheap":72777728,
      "permanent":0,
      "used_heap":125300600
  },
  "result":0
}"

```

<u>Requests</u>
Displays information about the request per handler. The value field shows the number of requests per handler. Since Mendix 5.3, the last_request_timestamp field shows the timestamp in milliseconds of the last handled request. If there are no requests handled, this field shows the moment the handler is registered.
The empty handler represents the resource request handler, which handles images, forms etc. (only in use when no reverse proxy is used for static content handling).
"file" handles file uploads and downloads, "xas/" processes CRUD actions and microflow execution calls issued by the web client and "ws/" and "ws-doc/" handle web service requests and provide web service documentation.

<u>Cache</u>

Shows the total number of objects which are currently part of the runtime state (all session together). The runtime state either resides in memory (non-clustered runtime) or in Redis or the database (clustered runtime). Too many objects in the state could slow down the performance of the Mendix Runtime.

<u>Sessions</u>
The "user_sessions" sections shows the current user sessions with their user agents. The other sections show the number of sessions per category. Categories are "named users" (the number of user instances), "named_user_sessions" (the number of non-anonymous concurrent sessions) and "anonymous_sessions" (the number of anonymous concurrent sessions).

<u>Connectionbus</u>
Number of database requests. Distinguishes between "select", "update", "insert", "delete" commands and started database transactions.

<u>Memory</u>

{{% alert type="warning" %}}

Memory statistics should only be interpreted by experts, lack of detailed knowledge of the Java memory model can lead to false conclusions.

{{% /alert %}}{{% alert type="warning" %}}

For versions of lower than Mendix 6.6 or Mendix 5.21.5 running on Java8, the information returned in the "memory" part of the response provides incomplete and incorrect information. If you rely on information in this section for these versions we recommend you to upgrade your version to Mendix 6.7 or 5.21.5 or higher.

For backwards compatibility reasons the fields "code", "eden", "tenured", "survivor" and "permanent" are still present but they should not be relied on anymore. They will be removed from Mendix 7 onwards.

{{% /alert %}}

Represents the number of bytes allocated to the specified memory sections. For a general explanation, see the [Oracle documentation on tuning garbage collection](http://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/). For the heap and non-heap fields see the [memory usage](https://docs.oracle.com/javase/8/docs/api/java/lang/management/MemoryUsage.html) page. The "memorypools" section contains an ordered list of all the memory pools exactly as we receive them from the JVM, in the same order and with some fields of the [MemoryPoolMxBean](http://docs.oracle.com/javase/8/docs/api/java/lang/management/MemoryPoolMXBean.html):

*   "usage": returns an estimate of the memory usage of this memory pool (in bytes).
*   "is_heap": is this memory pool part of the heap or not?
*   "name": the description of the memory pool as received by the JVM. These names can be different depending on for example JDK,memory manager or  garbage collection options.
*   "index": the index in the JSON Array. This field is not strictly needed as the pools are returned in a list so you can, and should, rely on the order of the list in case you are processing them in a program.

{{% alert type="info" %}}

If you are automatically processing the "memorypools" section to for example display in a graph, you should ideally not make any assumptions about the kind of memory pool based on its order in the list or its name as these may change depending on for example garbage collector settings or Java version.

In case you do want to develop a strategy on interpreting these pools anyway based on Java version: you can get the Java version from the 'about' admin action.

{{% /alert %}}

## 4 State Statistics

**Request**

```java
"{"action" : "cache_statistics", "params":{} }"

```

**Response**

```java
{
  "feedback":{
    "totals":{
      "Expenses.TempUser":1,
      "System.Session":1
    },
    "user_totals":[
      {
        "user_name":"MxAdmin",
        "total_count":2,
        "amounts_per_type":{
          "Expenses.TempUser":1,
          "System.Session":1
         }
      }
    ]
  },
  "result":0
}
```

This monitoring action gives more detailed information about objects which are currently in the state of the Mendix Runtime. In "totals" the total number of objects per sessions are shown, in "user_totals" the number of objects per entity for a particular sessions are shown. This information can be an aid in figuring out which objects cause a lot of memory usage.

## 5 Server Statistics

**Request**

```java
"{"action" : "server_statistics", "params":{} }"

```

**Response**

```java
{
  "feedback":{
    "jetty":{
      "current_connections":0,
      "max_connections":0,
      "max_idle_time_s":200
    },
    "threadpool": {
      "idle_threads":3,
      "max_threads":254,
      "threads_priority":5,
      "threads":8,
      "max_queued":-1,
      "min_threads":8,
      "max_idle_time_s":60,
      "max_stop_time_s":0
    }
  },
  "result":0
}
```

The server statistics monitor action gives information about the embedded Jetty web server. The "jetty" section lists the number of current open connections and the maximum number of open connections. In addition, the maximum idle time of connection before it's being closed is listed, for when Jetty is under normal circumstances. Please note that in Mendix 7.9 and above, information about the maximum idle time of connections before it's being closed for when Jetty is low on resources ("max_idle_time_s_low_resources") is removed as part of the Jetty upgrade, because it is no longer provided by Jetty.

The "threadpool" section gives information about the threadpool of the handler which processes all requests which go through the runtime port. See the [Jetty QueuedThreadPool documentation](https://www.eclipse.org/jetty/javadoc/9.4.11.v20180605/org/eclipse/jetty/util/thread/QueuedThreadPool.html) for more information.

## 6 Logged-In Users

**Request**

```java
"{"action" : "get_logged_in_user_names", "params":{} }"

```

**Response**

```java
{
  "feedback": {
    "count":1,
    "users":["MxAdmin"]
  },
  "result":0
}
```

Shows which users are currently logged in. If a user has multiple sessions, this user will be list once for every session.

## 7 Thread Stack Traces

**Request**

```java
"{"action" : "get_all_thread_stack_traces", "params":{} }"

```

**Response**

```java
{
  "feedback": {
    "qtp1967003817-95":[
      "sun.misc.Unsafe.park(Native Method)",
      "java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:215)",
      "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:2078)",
      "java.util.concurrent.LinkedBlockingQueue.poll(LinkedBlockingQueue.java:467)",
      "com.mendix.modules.microflowengine.debugger.internal.EventPusher.handleRequest(EventPusher.scala:18)",
      "com.mendix.modules.microflowengine.debugger.internal.DebuggerHandler.processJsonRequest(DebuggerHandler.scala:124)",
      "com.mendix.modules.microflowengine.debugger.internal.DebuggerHandler.processRequest(DebuggerHandler.scala:50)",
      "com.mendix.externalinterface.connector.MxRuntimeConnector$1.execute(MxRuntimeConnector.java:69)",
      "com.mendix.externalinterface.connector.MxRuntimeConnector$1.execute(MxRuntimeConnector.java:66)",
      "com.mendix.util.classloading.Runner.doRunUsingClassLoaderOf(Runner.java:32)",
      "com.mendix.externalinterface.connector.MxRuntimeConnector.processRequest(MxRuntimeConnector.java:72)",
      "com.mendix.core.impl.MxRuntimeImpl.processRequest(MxRuntimeImpl.java:715)",
      "com.mendix.m2ee.appcontainer.server.handler.RuntimeHandler.handle(RuntimeHandler.java:41)",
      "org.eclipse.jetty.server.handler.HandlerList.handle(HandlerList.java:52)",
      "org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:116)",
      "org.eclipse.jetty.server.Server.handle(Server.java:368)",
      "org.eclipse.jetty.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:489)",
      "org.eclipse.jetty.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:942)",
      "org.eclipse.jetty.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:1004)",
      "org.eclipse.jetty.http.HttpParser.parseNext(HttpParser.java:647)",
      "org.eclipse.jetty.http.HttpParser.parseAvailable(HttpParser.java:235)",
      "org.eclipse.jetty.server.AsyncHttpConnection.handle(AsyncHttpConnection.java:82)",
      "org.eclipse.jetty.io.nio.SelectChannelEndPoint.handle(SelectChannelEndPoint.java:628)",
      "org.eclipse.jetty.io.nio.SelectChannelEndPoint$1.run(SelectChannelEndPoint.java:52)",
      "org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:608)",
      "org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:543)",
      "java.lang.Thread.run(Thread.java:745)"
    ],
    "pool-1-thread-10":[
      "sun.misc.Unsafe.park(Native Method)",
      "java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)",
      "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)",
      "java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:1088)",
      "java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:809)",
      "java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1067)",
      "java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1127)",
      "java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)",
      "java.lang.Thread.run(Thread.java:745)"
    ],
  },
  "result":0
}
```

Returns all the current thread stack traces by name. This is useful to low level analyze what is happening in the application. Use the "get_current_runtime_executions" request to retrieve information on a higher level (microflows and other actions).

## 8 Runtime Status

**Request**

```java
"{"action" : "runtime_status", "params":{} }"

```

**Response**

```java
{
  "feedback":{
    "status":"running"
  },
  "result":0
}
```

Returns the current Mendix Runtime status. Possible status values are: "created", "starting", "broken", "running", "stopping" and "stopped". This information can be used to track in what state the Mendix Runtime is when the command to start or stop was given or to check whether the runtime is still running.

## 9 Check Health

**Request**

```java
"{"action" : "check_health", "params":{} }"

```

**Response**

```java
{
  "feedback":{
    "health":"sick",
    "diagnosis": "Remote product web service is offline"
  },
  "result":0
}
```

In the Mendix Desktop Modeler a [Health Microflow](project-settings) can be configured. This microflow can report on the functional status of the application. Does the general functionality of the application work? Are the necessary remote services available?

If such a Health Microflow has been configured, this request will report on the current health status. The "health" value, can be either "healthy", "sick", or "unknown" (when no health microflow was configured). In case of the value "sick", the "diagnosis" value will give the reason the application is not healthy. This reason is the return value of the Health Microflow.

{{% alert type="warning" %}}

This request can only be executed when the Mendix Runtime status is "running" (see Runtime Status).

{{% /alert %}}

## 10 About Runtime

**Request**

```java
"{"action" : "about", "params":{} }"

```

**Response**

```java
{
   "feedback":{
      "model_version":"unversioned",
      "copyright":"Copyright © 2003-2016 Mendix bv. All rights reserved.",
      "build":"unreleased",
      "vendor":"Mendix",
      "name":"Mendix Runtime",
      "java_version":"1.8.0_77",
      "xasid":"68ece856-3771-4024-9c42-078aaa2282aa",
      "version":"unreleased"
   },
   "result":0
}
```

Returns feedback about the Mendix Runtime. "java_version" is available from Mendix 6.6 onwards.

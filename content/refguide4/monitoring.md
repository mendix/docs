---
title: "Monitoring"
category: "Deployment"
---
The runtime statistics monitoring action can be called by sending a JSON request to the admin handler of the runtime. This is accomplished by sending a request to the admin port which is specified in the application configuration.
The JSON request should be accompanied by a base64 encoded monitoring password (the password should also be specified in the application configuration) in the request header "X-M2EE-Authentication". The content type of the request should be "application/json".

To fetch runtime statistics the following JSON string should be sent in the body of the request:

```java
"{"action" : "runtime_statistics", "params":{} }"

```

The result has the following format:

```java
"{
  "feedback":
  {
    "requests":
    [
      {"name":"","value":97},
      {"name":"file","value":0},
      {"name":"ws-doc/","value":0},
      {"name":"xas/","value":8},
      {"name":"ws/","value":0}
    ],
    "sessions":
    {
      "named_users":1,
      "named_user_sessions":0,
      "anonymous_sessions":1
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
      "max_heap":1879048192,
      "used_nonheap":31943776,
      "survivor":5480040,
      "used_heap":61413480,
      "tenured":116080,
      "code":1484992,
      "init_nonheap":24313856,
      "init_heap":132081152,
      "committed_heap":159645696,
      "permanent":30458368,
      "eden":55817360,
      "committed_nonheap":33161216,
      "max_nonheap":136314880
    }
  },
  "result":0
}"

```

**Requests**
Displays the number of requests per handler. The empty handler represents the resource request handler, which handles images, forms etc. (only in use when no reverse proxy is used for static content handling).
"file" handles file uploads and downloads, "xas/" processes CRUD actions and microflow execution calls issued by the web client and "ws/" and "ws-doc/" handle web service requests and provide web service documentation.

**Sessions**
The number of sessions per category. Categories are "named users" (the number of user instances), "named_user_sessions (the number of non-anonymous concurrent sessions) and "anonymous_sessions" (the number of anonymous concurrent sessions).

**Connectionbus**
Number of database requests. Distinguishes between "select", "update", "insert", "delete" commands and started database transactions.

**Memory**
Represents the number of bytes allocated to the specified memory section. See the [memory usage](http://docs.oracle.com/javase/6/docs/api/java/lang/management/MemoryUsage.html) and the [tuning garbage collection](http://www.oracle.com/technetwork/java/gc-tuning-5-138395.html) pages for an explanation of the different sections.

{{% alert type="warning" %}}

Memory statistics should only be interpreted by experts, lack of detailed knowledge of the Java memory model can lead to false conclusions.

{{% /alert %}}

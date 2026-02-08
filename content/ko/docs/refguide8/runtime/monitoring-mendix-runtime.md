---
title: "Mendix Runtime 모니터링"
url: /refguide8/monitoring-mendix-runtime/
description: "지원되는 Mendix Runtime 모니터링 작업을 설명합니다."
#The anchor request-handlers below is mapped, so it should not be removed or changed.
---

## 소개

온프레미스 및 로컬 Mendix 배포의 경우, Mendix Runtime 모니터링 작업은 관리 핸들러에 JSON 요청을 보내서 호출할 수 있습니다. 이는 애플리케이션 구성에 지정된 관리 포트(기본 포트는 8090)에 요청을 보내면 됩니다.

{{% alert color="info" %}}
이것은 앱의 로컬 및 온프레미스 배포에서만 사용할 수 있습니다.

Mendix Cloud 배포의 경우 m2ee 관리 핸들러에 접근할 수 없습니다. 그러나 Mendix Portal의 다양한 페이지에서 동일한 정보를 얻을 수 있습니다. 자세한 내용은 [메트릭](/developerportal/operate/metrics/) 및 [현재 실행 중](/developerportal/deploy/mxcloud-runningnow/)을 참조하십시오.
{{% /alert %}}

Studio Pro에서 **Project** > **Settings** > **Configurations** > *사용자 구성* > **Server** > **Admin port**로 이동하여 관리 포트를 변경할 수 있습니다.

요청은 **POST** 유형이어야 하며 **No Authorization**과 다음 헤더가 필요합니다:

* Content-Type: **application/json**
* X-M2EE-Authentication: **yourM2EEPassword_Base64Encoded**

M2EE 비밀번호는 슈퍼 관리자 비밀번호가 아니며 별도의 비밀번호입니다. 애플리케이션을 온프레미스에 배포한 경우 **Apps/YourProject** 폴더에 있는 **settings.yaml** 파일에서 이 비밀번호를 설정할 수 있습니다. Studio Pro에서 애플리케이션을 실행하는 경우 M2EE 비밀번호는 Mendix에 의해 자동으로 설정되며 애플리케이션 프로세스의 환경 변수에서 가져올 수 있습니다.

다음 섹션에서는 지원되는 모니터링 작업을 설명합니다.

## 현재 실행 중

### 요청

```json
{"action" : "get_current_runtime_requests", "params":{} }
```

### 응답 예시

```json
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

### 반환 값

이 요청은 Mendix Runtime에서 알려진 현재 실행 중인 작업을 반환합니다. 작업에는 Microflow, Java Action, 웹 서비스 호출, Scheduled Event가 포함될 수 있습니다. 각 실행에 대해 다음이 보고됩니다:

* 실행 "duration"(밀리초)
* 실행 "type". 가능한 유형은 다음과 같습니다:
* "CLIENT"
* "CLIENT_ASYNC" – 웹 클라이언트에서 트리거된 비동기 Microflow 호출
* "CLIENT_ASYNC_MONITORED" – Mendix Runtime에서의 비동기 Microflow 실제 실행, CLIENT_ASYNC와 다른 스레드에서 발생
* "CUSTOM"
* "WEB_SERVICE"
* "SCHEDULED_EVENT"
* "UNKNOWN"
* 작업을 실행하는 세션과 연결된 "user" – 비사용자 세션의 경우 "System"이라는 이름이 반환됩니다
* 이 실행에 대한 "action_stack" – 이 스택의 각 작업에 대해 현재 활동 및 Microflow 이름과 같은 상세 정보가 표시됩니다

## Runtime 통계

### 요청

```json
{"action" : "runtime_statistics", "params":{} }
```

### 응답 예시

```json
{
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
      "committed_heap":301465600,
      "max_heap":3817865216,
      "used_nonheap":67844048,
      "max_nonheap":-1,
      "committed_nonheap":72777728,
      "used_heap":125300600
  },
  "result":0
}
```

### 반환 값

#### 요청{#request-handlers}

핸들러별 요청에 대한 정보를 표시합니다:

* 빈 핸들러는 이미지, 폼 등을 처리하는 리소스 요청 핸들러를 나타냅니다(정적 콘텐츠 처리에 역방향 프록시를 사용하지 않는 경우에만 사용됨).
* "file"은 파일 업로드 및 다운로드를 처리합니다
* "xas/"는 웹 클라이언트에서 발행한 CRUD 작업 및 Microflow 실행 호출을 처리합니다
* "ws/" 및 "ws-doc/"은 웹 서비스 요청을 처리하고 웹 서비스 문서를 제공합니다

각 핸들러에 대해 두 가지 정보를 얻을 수 있습니다:

* value 필드는 핸들러당 요청 수를 보여줍니다.
* last_request_timestamp 필드는 마지막으로 처리된 요청의 밀리초 단위 타임스탬프를 보여줍니다. 처리된 요청이 없으면 이 필드는 핸들러가 등록된 시점을 보여줍니다.

#### 캐시

현재 Runtime 상태의 일부인 객체의 총 수를 보여줍니다(모든 세션 합계). Runtime 상태는 메모리(비클러스터 Runtime) 또는 Redis나 데이터베이스(클러스터 Runtime)에 있습니다. 상태에 너무 많은 객체가 있으면 Mendix Runtime의 성능이 저하될 수 있습니다.

#### 세션

"user_sessions" 섹션은 현재 사용자 세션과 해당 사용자 에이전트를 보여줍니다.

다른 섹션은 카테고리별 세션 수를 보여줍니다. 카테고리는 다음과 같습니다:

* "named users" (사용자 인스턴스 수)
* "named_user_sessions" (익명이 아닌 동시 세션 수)
* "anonymous_sessions" (익명 동시 세션 수)

#### Connectionbus

데이터베이스 요청 수입니다. "select", "update", "insert", "delete" 명령과 시작된 데이터베이스 트랜잭션을 구분합니다.

#### 메모리

{{% alert color="warning" %}}
메모리 통계는 전문가만 해석해야 합니다. Java 메모리 모델에 대한 상세한 지식이 부족하면 잘못된 결론을 내릴 수 있습니다.
{{% /alert %}}

지정된 메모리 섹션에 할당된 바이트 수를 나타냅니다. 일반적인 설명은 [가비지 컬렉션 튜닝에 대한 Oracle 문서](https://docs.oracle.com/en/java/javase/17/gctuning/introduction-garbage-collection-tuning.html)를 참조하십시오. 힙 및 비힙 필드에 대해서는 [메모리 사용량](https://docs.oracle.com/en/java/javase/17/docs/api/java.management/java/lang/management/MemoryUsage.html) 페이지를 참조하십시오.

"memorypools" 섹션은 [MemoryPoolMxBean](https://docs.oracle.com/en/java/javase/17/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html)의 일부 필드와 함께 JVM에서 수신한 모든 메모리 풀의 정렬된 목록을 포함합니다:

* "usage" – 이 메모리 풀의 메모리 사용량 추정치(바이트)를 반환합니다
* "is_heap" – 이 메모리 풀이 힙의 일부인지 여부
* "name" – JVM에서 수신한 메모리 풀의 설명. 이 이름은 JDK, 메모리 관리자 또는 가비지 컬렉션 옵션에 따라 다를 수 있습니다
* "index" – JSON 배열의 인덱스. 풀이 목록으로 반환되므로 이 필드는 엄밀히 필요하지 않으며, 프로그램에서 처리하는 경우 목록의 순서에 의존할 수 있습니다

{{% alert color="info" %}}
"memorypools" 섹션을 자동으로 처리하여 예를 들어 그래프에 표시하는 경우, 가비지 컬렉터 설정이나 Java 버전에 따라 변경될 수 있으므로 목록에서의 순서나 이름을 기반으로 메모리 풀 종류에 대한 가정을 하지 않는 것이 좋습니다.

그래도 Java 버전을 기반으로 이러한 풀을 해석하는 전략을 개발하려면 'about' 관리 작업에서 Java 버전을 가져올 수 있습니다.
{{% /alert %}}

## 상태 통계 {#state}

### 요청

```json
{"action" : "cache_statistics", "params":{} }
```

### 응답 예시

```json
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

### 반환 값

이 모니터링 작업은 현재 Mendix Runtime 상태에 있는 객체에 대한 자세한 정보를 제공합니다:

* "totals"는 세션당 총 객체 수를 보여줍니다
* "user_totals"는 특정 세션에 대한 Entity당 객체 수를 보여줍니다

이 정보는 어떤 객체가 많은 메모리 사용량을 유발하는지 파악하는 데 도움이 됩니다.

## 서버 통계

### 요청

```json
{"action" : "server_statistics", "params":{} }
```

### 응답 예시

```json
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

### 반환 값

서버 통계 모니터 작업은 내장된 Jetty 웹 서버에 대한 정보를 제공합니다. "jetty" 섹션은 현재 열린 연결 수와 최대 열린 연결 수를 나열합니다. 또한 Jetty가 정상적인 상황에서 실행되는 경우 연결이 닫히기 전 최대 유휴 시간을 나열합니다.

"threadpool" 섹션은 Runtime 포트를 통과하는 모든 요청을 처리하는 핸들러의 스레드풀에 대한 정보를 제공합니다. 자세한 내용은 [Jetty QueuedThreadPool 문서](https://www.eclipse.org/jetty/javadoc/jetty-9/org/eclipse/jetty/util/thread/QueuedThreadPool.html)를 참조하십시오.

## 로그인한 사용자

### 요청

```json
{"action" : "get_logged_in_user_names", "params":{} }
```

### 응답 예시

```json
{
  "feedback": {
    "count":1,
    "users":["MxAdmin"]
  },
  "result":0
}
```

### 반환 값

현재 로그인한 사용자를 보여줍니다. 사용자에게 여러 세션이 있으면 해당 사용자는 세션마다 한 번씩 나열됩니다.

## 스레드 스택 추적 {#thread}

### 요청

```json
{"action" : "get_all_thread_stack_traces", "params":{} }
```

### 응답 예시

```json
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

### 반환 값

이름별로 모든 현재 스레드 스택 추적을 반환합니다. 이는 애플리케이션에서 무슨 일이 일어나고 있는지에 대한 저수준 분석에 유용합니다. 더 높은 수준(Microflow 및 기타 작업)의 정보를 가져오려면 "get_current_runtime_executions" 요청을 사용하십시오.

## Runtime 상태 {#runtime-status}

### 요청

```json
{"action" : "runtime_status", "params":{} }
```

### 응답 예시

```json
{
  "feedback":{
    "status":"running"
  },
  "result":0
}
```

### 반환 값

현재 Mendix Runtime 상태를 반환합니다. 가능한 상태 값은 다음과 같습니다:

* "created"
* "starting"
* "broken"
* "running"
* "stopping"
* "stopped"

이 정보는 시작 또는 중지 명령이 주어졌을 때 Mendix Runtime이 어떤 상태에 있는지 추적하거나, Runtime이 여전히 실행 중인지 확인하는 데 사용할 수 있습니다.

## 상태 확인 {#check-health}

### 요청

```json
{"action" : "check_health", "params":{} }
```

### 응답 예시

```json
{
  "feedback":{
    "health":"sick",
    "diagnosis": "Remote product web service is offline"
  },
  "result":0
}
```

### 반환 값

Mendix Studio Pro에서 [상태 확인 Microflow](/refguide8/project-settings/)를 구성할 수 있습니다. 이 Microflow는 애플리케이션의 기능적 상태를 보고할 수 있습니다. 애플리케이션의 일반 기능이 작동하는지, 필요한 원격 서비스를 사용할 수 있는지 확인합니다.

상태 확인 Microflow가 구성되어 있으면 이 요청은 현재 상태를 보고합니다. "health" 값은 "healthy", "sick" 또는 "unknown"(상태 확인 Microflow가 구성되지 않은 경우) 중 하나일 수 있습니다. "sick" 값의 경우, "diagnosis" 값이 애플리케이션이 건강하지 않은 이유를 제공합니다. 이 이유는 상태 확인 Microflow의 반환 값입니다.

상태 확인 Microflow는 분당 여러 번 호출됩니다. 따라서 가볍고 빠르게 실행되도록 하는 것이 좋습니다. 무거운 작업은 애플리케이션 성능에 상당한 영향을 미칠 수 있습니다.

{{% alert color="warning" %}}
이 요청은 Mendix Runtime 상태가 "running"일 때만 실행할 수 있습니다(위의 [Runtime 상태](#runtime-status) 참조).
{{% /alert %}}

## Runtime 정보

### 요청

```json
{"action" : "about", "params":{} }
```

### 응답 예시

```json
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

### 반환 값

Mendix Runtime에 대한 피드백을 반환합니다.

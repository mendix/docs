---
title: "Task Queue"
url: /refguide9/task-queue/
weight: 85
description: "Task Queue의 개념 및 사용법"
---

## 소개

**Task Queue**를 사용하면 Microflow 또는 Java Action을 비동기적으로 실행하면서 Task Queue에 할당하여 동시에 실행되는 작업 수를 제어할 수 있습니다. Task Queue를 구성하여 피크 사용 시간 동안 이러한 작업이 애플리케이션에 가하는 최대 부하를 제어하면서도 모든 Microflow와 Java Action이 결국 실행되도록 보장할 수 있습니다.

### Process Queue 모듈 대체

이 백그라운드 작업 실행 방식은 이전의 [Process Queue](/appstore/modules/process-queue/) Marketplace 모듈을 대체합니다.

두 메커니즘 간의 차이점에 대한 자세한 내용은 아래의 [Process Queue 대체](#process-queue) 섹션을 참조하십시오.

## 구성

Microflow 또는 Java Action은 Studio Pro의 **Call Microflow** 또는 **Call Java Action** 액션을 사용하거나 Java API를 통해 시작될 때 백그라운드에서 실행되도록 예약할 수 있습니다.

### Task Queue에서 실행되는 작업

#### Task Queue에 작업 추가 시 프로세스 흐름

Microflow 또는 Java Action의 실행 예약은 즉시 반환됩니다. 작업은 호출된 트랜잭션이 완료된 후 가능한 한 빨리 클러스터 내 어딘가에서 실행됩니다.

작업이 백그라운드에서 실행되므로 반환 값이 없습니다. 작업이 성공적으로 실행되었는지만 확인할 수 있습니다. 확인 방법에 대한 자세한 내용은 아래의 [큐 인터페이스](#interfacing-queue)를 참조하십시오.

#### 작업이 실행되는 위치

단일 노드 시나리오에서는 Task Queue의 작업이 단일 노드에서 실행됩니다.

클러스터 환경에서는 Mendix 런타임이 이러한 작업을 클러스터 전체에 투명하게 분배합니다. 작업 실행 중 클러스터 노드가 종료되거나 실패하면, 나머지 클러스터 노드가 해당 노드가 다운된 것으로 감지되면 작업을 가져와 다시 실행합니다. 이는 자동으로 발생하며 관리할 필요가 없습니다.

Task Queue를 생성할 때 각 노드 또는 전체 클러스터에서 병렬로 실행할 수 있는 작업 수를 제어할 수 있습니다. 자세한 내용은 아래의 [Task Queue 생성](#create-queue)을 참조하십시오.

#### Task Queue의 컨텍스트

Task Queue에서 실행되는 Microflow 및 Java Action의 경우, 작업이 실행되는 조건이 다음과 같이 약간 변경됩니다:

* 커밋된 영속(persistable) Entity만 작업에 매개변수로 전달할 수 있습니다. 영속 *New* 또는 *Changed* Entity를 전달하면 런타임 오류가 발생합니다. 기본적으로 Entity는 이전에 커밋되었거나 작업이 생성된 동일한 트랜잭션에서 커밋되어야 합니다.
* 작업은 즉시 실행되지 않습니다. 작업은 예약된 트랜잭션이 성공적으로 종료될 때(그리고 종료되는 경우에만) Task Queue에 추가됩니다. 그 시점에서 어떤 클러스터 노드든 작업을 가져갈 수 있습니다.
* 예외와 함께 실행이 실패하면, 실패 내용이 `System.ProcessedQueueTask` 테이블에 기록됩니다.

### Task Queue 생성 {#create-queue}

백그라운드 실행은 **Task Queue**에서 수행됩니다. Studio Pro에서 다음과 같이 생성할 수 있습니다:

1. 모듈 또는 폴더를 마우스 오른쪽 버튼으로 클릭합니다.
2. **Add other**를 선택합니다.
3. **Task Queue**를 클릭합니다.
4. Task Queue의 **Threads** 값을 입력합니다.
5. 스레드의 **Scope**를 선택합니다 (Mendix 9.13 이후):
    * "Per Node"를 선택하면 최대 스레드 수가 노드별로 제한됩니다. 이 옵션을 선택하면 클러스터에 새 노드를 추가할 때 전체 클러스터의 총 스레드 수도 증가합니다.
    * "Cluster-wide"를 선택하면 최대 스레드 수가 클러스터 전체로 제한됩니다. 이 옵션을 선택하면 클러스터의 총 스레드 수가 고정되며 새 노드를 추가/제거해도 스레드 수에 영향을 미치지 않습니다.

Task Queue에는 여러 스레드가 있습니다. 각 스레드는 한 번에 하나의 작업을 처리할 수 있습니다. 즉, 큐는 스레드 수만큼의 동시 작업을 가져갑니다. 작업이 완료될 때마다 다음 작업이 가져가집니다.
    
#### 스레드 수 권장 사항 

{{% alert color="info" %}}
Mendix 9.9.0 이전 버전에서는 클러스터 노드당 40개의 스레드 제한이 있습니다.
{{% /alert %}}

일반적으로 하나 또는 두 개의 스레드로 충분합니다. 작업이 많거나 작업이 오래 걸려 병렬 실행이 필요한 경우가 아니라면 충분합니다. 스레드가 많으면 데이터베이스에 추가 부하가 발생하므로 필요하지 않은 경우 사용하지 마십시오.

Task Queue의 스레드 수를 선택할 때 다음 지침을 사용하십시오:

* 작업이 몇 개뿐인 경우 단일 스레드를 사용하십시오.
* 작업이 계산만 수행하고 차단 호출을 수행하지 않는 경우 사용 가능한 코어 수 이하의 스레드를 사용하십시오.
* 작업이 많고 차단 호출을 수행하는 경우에만 사용 가능한 코어 수보다 많은 스레드를 사용하십시오.
* 코어 수보다 많은 스레드를 사용하면 추가 스케줄링이 필요하며 큐에 대기 중인 작업 처리량이 반드시 향상되지는 않는다는 점을 유의하십시오.

### Microflow 실행 큐잉{#queuing}

#### Studio Pro에서 {#sp}

Studio Pro에서 [Call Microflow](/refguide9/microflow-call/) 액티비티는 Task Queue에서 Microflow를 시작할 수 있습니다.

1. **Call Microflow** 액티비티를 편집합니다.
2. **Execute this Microflow in a Task Queue** 확인란을 선택합니다.
3. **Select Task Queue**를 Microflow가 실행될 Task Queue로 설정합니다.
4. (선택 사항 – Mendix 9.10.0 이상) 자동 재시도 전략을 선택합니다:
    * "Fixed retry"를 선택하면 지정된 지연 시간 후에 지정된 시도 횟수까지 재시도가 수행됩니다.
    * "Exponential retry"를 선택하면 각 재시도마다 재시도 간 지연 시간이 두 배로 늘어나며, 지정된 최대 간격까지 늘어납니다.

#### API를 통해

`com.mendix.core`의 `Core` 클래스에는 `microflowCall` 메서드가 포함되어 있습니다. 다음 예제와 같이 백그라운드 실행을 위해 Microflow를 예약하는 데 사용할 수 있습니다:

```java
Core.microflowCall("AModule.SomeMicroflow")
  .withParam("Param1", "Value1")
  .withParam("Param2", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName");
```

`executeInBackground` 메서드는 컨텍스트와 큐 이름 두 가지 매개변수를 사용합니다. 컨텍스트는 작업 생성에만 사용되며, 작업 실행은 [새로운 동등한 컨텍스트](#context)에서 수행됩니다. 자세한 내용은 [API 문서](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#microflowCall(java.lang.String))를 참조하십시오.

### Java Action 실행 큐잉

#### Studio Pro에서

Studio Pro에서 [Call Java action](/refguide9/microflow-call/) 액티비티는 Task Queue에서 Java Action을 시작할 수 있습니다.

1. **Call Java Action** 액티비티를 편집합니다.
2. **Execute this Java action in a Task Queue** 확인란을 선택합니다.
3. **Select Task Queue**를 Java Action이 실행될 Task Queue로 설정합니다.

#### API를 통해

`com.mendix.core`의 `Core` 클래스에는 `userActionCall` 메서드가 포함되어 있습니다. 다음 예제와 같이 백그라운드 실행을 위해 Java Action을 예약하는 데 사용할 수 있습니다:

```java
Core.userActionCall("AModule.SomeJavaAction")
  .withParams(context, "Value1", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName");
```

`executeInBackground` 메서드는 컨텍스트와 큐 이름 두 가지 매개변수를 사용합니다. 컨텍스트는 작업 생성에만 사용되며, 작업 실행은 [새로운 동등한 컨텍스트](#context)에서 수행됩니다. 자세한 내용은 [API 문서](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/Core.html#userActionCall(java.lang.String))를 참조하십시오.

### 작업 예약 {#scheduling}

Mendix 9.12.0 이상에서는 지정된 날짜/시간에 실행되도록 작업을 예약할 수 있습니다. 이는 API를 통해 수행할 수 있으며, 예를 들면 다음과 같습니다:

```java
Calendar calendar = Calendar.getInstance();
calendar.add(Calendar.DATE, 1); // add 1 day to the current date
Date date = calendar.getTime();
Core.microflowCall("AModule.SomeMicroflow")
  .withParam("Param1", "Value1")
  .withParam("Param2", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName", date);
Core.userActionCall("AModule.SomeJavaAction")
  .withParams(context, "Value1", "Value2")
  .executeInBackground(context, "AModule.SomeQueueName", date);
// the tasks will be executed 1 day from this point in time
```

### 실패 시 재시도 {#retry}

Mendix 9.9.0 이상에서는 작업이 실패했을 때 자동으로 재시도할 수 있습니다. 다음 옵션을 사용할 수 있습니다:

1. 고정 지연으로 재시도 – 최대 시도 횟수와 각 시도 사이의 대기 시간을 지정합니다.
2. 지수적으로 증가하는 지연으로 재시도 – 최대 시도 횟수와 첫 번째 재시도 전 대기 시간을 지정합니다. 대기 시간은 각 실패한 재시도 후 최대값까지 두 배로 늘어납니다. 최대값을 지정하지 않으면 기본값은 1일입니다.

각 시도는 자체 `System.ProcessedQueueTask` 항목을 생성합니다. 이러한 항목은 동일한 작업을 참조하므로 모두 동일한 시퀀스 번호를 갖습니다.

재시도 메커니즘은 API를 통해 활성화할 수 있으며, 예를 들면 다음과 같습니다:

```java
Core.microflowCall("AModule.SomeMicroflow")
  .withRetry(10, Duration.ofSeconds(3))
  .executeInBackground(context, "AModule.SomeQueueName");
Core.userActionCall("AModule.SomeJavaAction")
  .withExponentialRetry(8, Duration.ofSeconds(3), Duration.ofMinutes(1))
  .executeInBackground(context, "AModule.SomeQueueName");
```

재시도는 API를 사용하여 [예약](#scheduling)과 결합할 수도 있습니다.

### 구성 옵션 {#configuration}

큐의 정상 종료 기간은 Studio Pro에서 [사용자 정의 런타임](/refguide9/custom-settings/) 설정으로 구성할 수 있습니다. 

| 구성 옵션                       | 예제 값 | 설명                                                                             |
|--------------------------------------------|---------------|-----------------------------------------------------------------------------------------|
| `TaskQueue.ShutdownGracePeriod`            |          10000| 종료 시 작업이 완료될 때까지 대기하는 시간(ms).                               |
| `com.mendix.core.ProcessedTasksCleanupAge` |       86400000| `ProcessedQueueTask`가 자동으로 삭제되는 시간(ms) (이 설정이 지정되지 않으면 자동 삭제되지 않음). <br />*이 설정은 Mendix 9.9.0에서 도입되었습니다* |
| `com.mendix.core.ProcessedTasksCleanupBatchSize` |       10000| ProcessedTask 정리 작업이 실행될 때마다 데이터베이스에서 제거될 System.<wbr>ProcessedQueueTask 객체의 수를 지정합니다. <br />*이 설정은 Mendix 9.24.17에서 도입되었습니다* |

{{% alert color="info" %}}
이 유예 기간은 [종료](#shutdown)(아래 설명) 중에 두 번 적용되므로 런타임이 작업이 종료될 때까지 대기하는 최대 시간은 이 값의 두 배입니다.
{{% /alert %}}

### 큐 인터페이스 {#interfacing-queue}

작업 예약 및 실행 외에도 Mendix 플랫폼은 백그라운드에서 실행된 작업을 추적합니다: 예를 들어, 어떤 작업이 완료되었고 어떤 작업이 실패했는지를 추적합니다.

내부적으로 예약되었거나 실행 중인 작업은 Mendix Entity `System.QueuedTask`로 표현됩니다. 고성능 환경에서는 이 Entity를 사용자 코드에서 직접 사용하면 *안 됩니다*. 기본 데이터베이스 테이블이 많이 사용되기 때문입니다. 예를 들어, 현재 존재하는 `System.QueuedTask` 객체 수를 카운트하면 테이블이 잠기고 작업 처리에 심각한 속도 저하가 발생할 수 있습니다. `System.QueuedTask`에 직접 쓰기도 하지 마십시오. 대신 **Call Microflow** 또는 **Call Java Action** 액티비티나 Java API를 사용하여 백그라운드 실행 작업을 표시하십시오.

처리된 작업, 즉 완료되거나 실패한 작업은 Entity 유형 `System.ProcessedQueueTask`의 객체로 저장됩니다. 이러한 객체는 사용자가 사용할 수 있습니다. 예를 들어, 다음을 수행하는 데 사용할 수 있습니다:

1. 작업이 성공적으로 실행되었는지 확인하거나,
2. 오류 발생 시 애플리케이션을 디버그합니다.

데이터베이스에서 `System.ProcessedQueueTask` 객체의 정리에 대한 자세한 내용은 [오래된 처리 완료 작업 정리](#cleanup)를 참조하십시오.

### 실행 컨텍스트 {#context}

Mendix 9.6 이전에는 예약 Microflow에서 **Apply entity access**가 *true*로 설정되어 있어도 작업이 항상 시스템 컨텍스트에서 실행되었습니다 (자세한 내용은 [Microflow 속성](/refguide9/microflow/)을 참조하십시오). Mendix 9.6부터 이 동작은 더 이상 권장되지 않으며, 이제 작업은 예약된 컨텍스트와 동등한 컨텍스트에서 실행됩니다. 이는 다음과 같은 영향을 미칩니다:

**Apply entity access**가 *true*로 설정된 경우 다음 규칙이 적용됩니다:

* 사용자가 로그인한 경우, 작업은 동일한 명명된 사용자에 대한 새 컨텍스트에서 실행됩니다. 이 컨텍스트는 사용자가 로그인한 것과 동일합니다. 
* 사용자가 로그인하지 않은 경우, 작업은 새 익명 컨텍스트에서 실행됩니다. 이 컨텍스트는 원래 사용자와 동일한 언어 및 시간대를 가진 새 익명 사용자를 위한 것입니다.

위 규칙에 대한 한 가지 예외가 있습니다:

* [Java API](https://apidocs.rnd.mendix.com/9/runtime/com/mendix/core/actionmanagement/ActionCallBuilder.html#executeInBackground(com.mendix.systemwideinterfaces.core.IContext,java.lang.String))를 사용하여 시스템 컨텍스트에서 작업을 예약하는 경우, **Apply entity access** 설정에 관계없이 작업은 새 시스템 컨텍스트에서 실행됩니다.

Mendix 9.6 이전에 생성된 Task Queue가 포함된 프로젝트는 로그에 사용 중단 경고가 표시됩니다: `The project setting 'System context tasks' is deprecated`.
Studio Pro의 앱 **Settings**에서 **Runtime** 탭에서 이 경고를 제거할 수 있습니다. **System context tasks**를 *no*로 설정하면 작업이 생성된 컨텍스트와 동등한 컨텍스트에서 실행되고 경고가 제거됩니다.

{{% alert color="warning" %}}
*no*를 선택한 후에는 다시 *yes*로 전환할 수 없으므로 이 변경을 확인하라는 메시지가 표시됩니다. 시스템 컨텍스트에서 작업을 실행하는 것(시스템 세션에서 예약된 경우 제외)은 더 이상 권장되지 않기 때문입니다.
{{% /alert %}}

### 작업 상태

`System.QueuedTask` 및 `System.ProcessedQueueTask`의 **Status** 속성은 백그라운드 작업이 있는 상태를 반영합니다. 값은 다음과 같습니다:

* `Idle`: 작업이 생성되었으며 실행 대기 중입니다.
* `Running`: 작업이 실행 중입니다.
* `Completed`: 작업이 성공적으로 실행되었습니다. 이를 반영하기 위해 `System.ProcessedQueueTask`가 추가됩니다.
* `Failed`: 예외가 발생하여 작업이 더 이상 실행되지 않습니다. 실패를 반영하기 위해 예외가 포함된 `System.ProcessedQueueTask`가 추가됩니다. 작업은 재시도되지 않습니다.
* `Retrying`: `Failed`와 동일하지만 작업이 재시도됩니다.
* `Aborted`: 실행 중이던 클러스터 노드가 다운되어 작업이 더 이상 실행되지 않습니다. 이를 반영하기 위해 `System.ProcessedQueueTask`가 추가됩니다. 작업은 다른 클러스터 노드에서 재시도됩니다.
* `Incompatible`: 모델이 더 이상 실행할 수 없는 방식으로 변경되어 작업이 실행되지 않았습니다. Microflow가 제거/이름 변경되었거나, 인수가 변경되었거나, Task Queue가 제거되었을 수 있습니다.

### 모델 변경

Mendix 런타임 시작 중에 데이터베이스의 예약된 작업이 현재 모델에 맞는지 확인하는 검사가 있습니다. 다음 조건이 확인됩니다:

* Microflow가 존재하는지
* 매개변수가 일치하는지
* 큐가 존재하는지 

이러한 조건 검사 중 하나라도 실패하면 작업은 **Status** `Incompatible`으로 `System.ProcessedQueueTask`로 이동됩니다. 런타임은 모든 예약된 작업이 확인된 후에야 시작됩니다. 이는 일반적으로 수천 개의 작업이 있더라도 매우 오래 걸리지 않습니다.

### 종료 {#shutdown}

종료 중에 `TaskQueueExecutors`는 새 작업 수락을 중지합니다. 실행 중인 작업에는 [유예 기간](#configuration)이 주어져 완료할 수 있습니다. 이 기간이 지나면 런타임은 여전히 실행 중인 모든 작업 스레드에 인터럽트를 보내고 다시 유예 기간을 부여합니다. 두 번째 유예 기간이 지나면 런타임은 종료를 계속하여 결국 작업 실행을 중단합니다. 중단된 작업은 나중에 또는 다른 클러스터 노드에서 재실행되도록 재설정됩니다. 개발 모드에서는 첫 번째 유예 기간이 1초로 단축됩니다.

{{% alert color="info" %}}
작업 스레드를 인터럽트하면 실패할 수 있습니다. 이러한 작업은 `Aborted`로 표시되고 나중에 재시도됩니다.
{{% /alert %}}

### 오래된 처리 완료 작업 정리 {#cleanup}

작업의 실행은 데이터베이스에 `System.ProcessedQueueTask` 객체를 생성합니다. 시간이 지남에 따라 이러한 객체가 누적되어 테이블이 커질 수 있습니다.

Mendix 9.9 이상에서는 `com.mendix.core.ProcessedTasksCleanupAge` 런타임 설정을 지정하여 `System.ProcessedQueueTask`를 자동으로 정리할 수 있습니다. 이 설정은 테이블의 객체가 자동으로 정리되기 전에 얼마나 오래되어야 하는지를 밀리초 단위로 지정합니다. "Completed" 상태의 객체만 정리됩니다. 정리 작업은 매 [`ClusterManagerActionInterval`](/refguide9/custom-settings/#general)마다 실행되며 로그 메시지를 생성하지 않습니다. Mendix 9.24.17 이상에서는 정리 작업이 실행될 때마다 최대 10000개의 객체를 제거합니다. 이는 [`com.mendix.core.ProcessedTasksCleanupBatchSize`](/refguide9/custom-settings/#commendixcoreProcessedTasksCleanupBatchSize) 런타임 설정으로 구성할 수 있습니다. Mendix 9.24.17 이전 버전에서는 일치하는 모든 객체가 제거됩니다.

`com.mendix.core.ProcessedTasksCleanupAge`가 지정되지 않으면 정리가 수행되지 않습니다.

{{% alert color="info" %}}
오랫동안 작업을 사용한 후 자동 정리를 활성화하면 정리할 객체가 많을 수 있으며, 런타임이 시작될 때 시작됩니다. 이로 인해 데이터베이스에 추가 부하가 발생할 수 있지만 시작을 차단하지는 않습니다. 바쁜 기간에는 이 작업을 수행하지 않는 것이 좋습니다.
{{% /alert %}}

Mendix 9.9.0 이전 버전에서는 테이블이 너무 커질 경우 관리자가 사용할 Microflow를 만들어 오래된 작업을 정리할 수 있습니다.

## 모니터링

### 로깅

Task Queue와 관련된 모든 작업에 대해 `Queue`라는 [로그 노드](/refguide9/logging/#mendix-nodes)가 있습니다.

## 기타

Task Queue에서 **Find usages**를 실행하면 Microflow에서 해당 큐의 사용 위치만 찾습니다.

{{% alert color="info" %}}
Java Action에서의 호출은 찾을 수 없습니다.
{{% /alert %}}

### Task Queue Helper

Mendix Marketplace의 [Task Queue Helpers](https://marketplace.mendix.com/link/component/117272) 모듈을 사용하여 Task Queue 구현을 도울 수 있습니다. 이 모듈에는 다음이 포함되어 있습니다:

* Task Queue를 모니터링하는 데 사용할 수 있는 페이지
* 기본 유지 관리 작업을 수행할 수 있는 Microflow

### 제한 사항

Task Queue에는 다음과 같은 제한 사항이 있습니다:

* 백그라운드에서 실행되는 Microflow 또는 Java Action은 생성된 순서대로 가능한 한 빨리 실행되지만, 병렬로 실행될 수 있습니다. FIFO 순서로 소비되지만 여러 스레드의 경우 병렬로 실행됩니다. 스레드 수가 1이고 런타임 노드가 하나뿐인 경우가 아니면, 어떤 시점에서든 단일 Microflow 또는 Java Action만 실행되도록(즉, 작업이 순차적으로 실행되도록) 보장할 방법이 없습니다.
* 백그라운드에서 실행되는 Microflow 또는 Java Action은 다음 유형의 매개변수만 사용할 수 *있습니다*: Boolean, Integer/Long, Decimal, String, Date and time, Enumeration, 커밋된 Persistable Entity.
* 백그라운드 Microflow 또는 Java Action은 생성된 트랜잭션이 완료되는 즉시 실행을 시작합니다. 이는 백그라운드 Microflow 또는 Java Action에 필요한 모든 데이터도 커밋되도록 보장합니다. 트랜잭션 도중에 백그라운드 Microflow 또는 Java Action을 즉시 시작하는 것은 불가능합니다. 트랜잭션이 롤백되면 작업은 전혀 실행되지 않습니다.
* Mendix 9.9.0 이전 버전에서는 노드당 총 병렬 처리량이 40으로 제한됩니다. 즉, 병렬 처리 1인 큐를 최대 40개, 또는 병렬 처리 40인 단일 큐, 또는 총합이 40을 초과하지 않는 그 사이의 조합을 정의할 수 있습니다.
* Mendix 9.8 이하에서는 실패한 큐 작업을 기본 제공 기능으로 다시 예약할 수 없습니다. 실패한 작업을 다시 시도하도록 예약된 Microflow를 설정할 수 있습니다. `System.ProcessedQueueTask` 테이블에서 조회할 수 있습니다.

### 고수준 구현 개요

작업은 `System.QueuedTask` 테이블의 데이터베이스에 저장됩니다. 각 백그라운드 작업에 대해 `Sequence` 번호, `Status = Idle`, `QueueName`, `QueueId`, `MicroflowName` 또는 `UserActionName`, `Arguments`, `ContextType`, `ContextData`, 및 작업의 `System.owner`가 포함된 새 객체가 삽입됩니다. 이는 Microflow 또는 Java Action을 호출하고 Task Queue에 배치하는 트랜잭션의 일부로 발생하며, 이는 해당 트랜잭션이 성공적으로 완료될 때까지 데이터베이스에서 작업이 보이지 않음을 의미합니다.

그런 다음 작업은 다음 무료 작업을 가져오려는 `SELECT FOR UPDATE SKIP LOCKS` SQL 문을 수행하는 실행기에 의해 소비됩니다. `SKIP LOCKS` 절은 이미 다른 실행기에 의해 업데이트를 위해 잠긴 작업을 건너뜁니다. 해당 `UPDATE`는 `Status`를 `Running`으로 변경하고 `XASId` 및 `ThreadId` 속성에 작업 소유자를 설정합니다.

작업이 실행된 후, `Status` `Completed` 또는 `Failed`로 `System.ProcessedQueueTask` Entity의 객체로 이동됩니다. 작업이 예외와 함께 실패한 경우 `ErrorMessage` 속성에 포함됩니다.

인수는 `Arguments` 속성에 JSON 값으로 저장됩니다. 인수는 모든 기본 유형([변수](/refguide9/variable-activities/)) 또는 커밋된 영속 객체일 수 있으며, Mendix 식별자로 `Arguments` 필드에 포함됩니다. 작업 실행 시 해당 객체는 Mendix 식별자를 사용하여 데이터베이스에서 검색됩니다. 이러한 이유로 영속 객체는 작업이 실행되기 전에 커밋되어야 하며, 그렇지 않으면 런타임 예외가 발생합니다.

노드가 충돌하면 다른 클러스터 노드가 하트비트 타임스탬프를 더 이상 업데이트하지 않기 때문에 결국 감지합니다. 이 시점에서 다른 노드는 충돌한 노드에서 실행 중이던 모든 작업을 재설정합니다. 재설정은 다음 작업을 수행합니다:

* `Status = Aborted`인 `System.ProcessedQueueTask` 객체로 작업의 복사본 생성
* `Status`를 다시 `Idle`로 설정
* `Retried` 필드 증가
* `XASId` 및 `ThreadId` 필드 지우기

그런 다음 작업은 클러스터의 나머지 노드 중 하나에 의해 자동으로 다시 소비됩니다. 사실상 이는 작업이 최소 한 번은 실행되도록 보장됨을 의미합니다.

{{% alert color="warning" %}}
정상적인 상황에서는 작업이 정확히 한 번 실행되지만, 노드 장애 시 작업이 (부분적으로) 여러 번 실행될 수 있습니다. 이는 분산 시스템이 제공할 수 있는 최선의 보장입니다.
{{% /alert %}}

### Process Queue 대체 {#process-queue}

**Task Queue**는 Mendix 9 출시와 함께 더 이상 사용되지 않는 이전의 [Process Queue](/appstore/modules/process-queue/) Marketplace 모듈을 대체합니다. Process Queue 모듈과 **Task Queue** 사이에는 몇 가지 차이점이 있습니다:

* **Task Queue**는 다중 노드 클러스터 설정을 지원하므로 수평 확장 환경에서 사용할 수 있습니다.
* **Task Queue**는 추가 Entity를 생성할 필요가 없으며, Microflow 또는 Java Action을 백그라운드에서 실행하도록 표시하기만 하면 됩니다.

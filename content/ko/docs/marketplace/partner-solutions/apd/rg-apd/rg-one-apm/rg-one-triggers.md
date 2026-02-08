---
title: "Triggers"
url: /appstore/partner-solutions/apd/rg-one-triggers/
---

## 소개

트리거는 Measurements Tool, Trap Tool 및 Statistics Tool에서 구성할 수 있습니다. 트리거는 패턴 및/또는 임계값을 기반으로 이벤트에서 발동하도록 되어 있습니다. 이를 통해 메모리를 모니터링하고 메모리 사용량이 예를 들어 80%에 도달하면 통계를 저장하거나 트랩을 수행할 수 있습니다. 

## 트리거 유형

### 측정 트리거

측정 트리거는 특정 값에 대한 측정을 확인하는 데 사용됩니다. 트리거의 표현식이 충족되면 구성된 액션이 수행됩니다.

## 트리거 구성

### 트리거 정의 탭

트리거 정의 탭에는 **Description** 및 **Enabled** 속성과 다양한 트리거 유형에 대한 특정 설정이 포함되어 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-triggers/Trigger_Definition.png" class="no-border" >}}   

#### 공유 필드

* **Description** - 트리거를 설명합니다. 이 설명은 로그 및 트랩 메시지 액션에서 {1}로 사용할 수 있습니다.
* **Enabled** - 트리거를 활성화하거나 비활성화합니다. 계속 진행이 **Stop**으로 설정되면 트리거가 자동으로 비활성화됩니다.

#### 측정 트리거

* **Expression** - 액션을 발동하는 비즈니스 규칙을 설정합니다. 자세한 내용은 아래를 참조하십시오.
* **Parameter** - 표현식에서 매개변수로 사용할 다른 측정을 정의합니다.

#### 통계 트리거

* **Microflow pattern** - 이 트리거가 확인할 Microflow를 결정합니다.
* **Threshold value (ms)** - 임계값을 설정합니다. Microflow가 더 오래 걸리면 트리거가 발동됩니다.

#### 메시지 트리거

* **Node pattern** - 트리거가 발동할 로그 노드를 결정합니다.
* **Level** - 트리거가 발동할 로그 레벨을 결정합니다.
* **Message pattern** - 트리거가 발동할 메시지 패턴을 정의합니다.

### 트리거 액션 탭

트리거 액션은 트리거가 발동될 때 일어나는 일을 정의합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-triggers/Trigger_Actions.png" class="no-border" >}} 

가능한 트리거 액션입니다:

* **Notify**. 전역 설정 [More 탭](/appstore/partner-solutions/apd/rg-one-configuration/#more)에 구성된 관리자에 `{1}`을 사용할 수 있습니다. 제목과 메시지에 `{1}`과 같은 대체 변수를 사용할 수 있습니다. 이들은 **i**nformation 아이콘에서 설명됩니다.
* **Create log message**. 메시지에 `{1}`과 같은 대체 변수를 사용할 수 있습니다. 이들은 **i**nformation 아이콘에서 설명됩니다.
* **Create trap message**. 메시지에 `{1}`과 같은 대체 변수를 사용할 수 있습니다. 이들은 **i**nformation 아이콘에서 설명됩니다.
* **Save statistics**. 이 스냅샷의 기간은 전역 설정에서 구성됩니다. 스냅샷에는 기본적으로 10-20분의 통계가 포함됩니다.

다음은 특별한 권한에서만 표시됩니다:

* **Run microflow** (⚠ 사용 중단됨). 이를 사용하여 트리거 유형에 따른 매개변수가 있는 Microflow를 실행할 수 있습니다. 과거에 알림에 사용되었지만 알림 옵션이 간소화되었습니다.
* **Create heap dump**. 특별한 권한이 있는 경우에만 이 옵션을 볼 수 있습니다. (**주의하여 사용**: 힙 덤프를 생성하면 Mendix 서버를 실행하는 Java 프로세스에 할당된 힙 공간의 양에 따라 일정 기간 동안 시스템이 일시 중지됩니다. 이는 앱을 수 초 동안 멈출 수 있습니다).

### 트리거 계속 진행 탭

계속 진행 탭에서는 트리거가 발동되고 액션이 실행된 후 어떤 일이 일어나는지 구성할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-triggers/Trigger_Continuation.png" class="no-border" >}}

다음을 할 수 있습니다:

* **Nothing** - 계속 확인하고 트리거를 실행합니다.
* **Stop** - 트리거가 한 번 발동된 후 비활성화됩니다.
* **Pause** - 트리거가 다시 발동되지 않는 기간을 정의할 수 있습니다.

이는 예를 들어 CPU 사용량이 높을 때 대량의 이메일이 발송되는 것을 방지하기 위한 것입니다.

## 트리거된 이벤트

트리거가 발동하면 트리거된 이벤트에 레코드가 생성됩니다. 이벤트는 전역 설정 [More 탭](/appstore/partner-solutions/apd/rg-one-configuration/#more)에 구성된 대로 일정 일수 후 자동으로 삭제됩니다. 

**Remove triggered events after (days)**. 향후 참조를 위해 이벤트를 보관하려면 트리거된 이벤트 그리드 위의 keep 버튼을 사용할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-measurements-tool/Triggered_Events.png" class="no-border" >}}

트리거 액션으로 트랩이 생성되면 트랩을 열 수 있습니다.

트리거 액션으로 통계 스냅샷이 생성되면 통계 스냅샷을 열 수 있습니다.

트리거 액션으로 힙 덤프가 생성되면 힙 덤프를 다운로드할 수 있습니다. 이 옵션은 특별한 권한이 있는 경우에만 표시됩니다.

**Show trigger** 버튼으로 트리거를 포함하는 측정 구성을 열 수 있습니다.

---
title: "Event Handler"
url: /refguide8/event-handlers/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Event Handler는 Entity와 관련된 특정 이벤트를 처리하는 Microflow를 정의합니다. 선택한 시점과 유형에 따라 객체를 생성, 커밋, 삭제 또는 롤백하기 전이나 후에 Microflow가 실행됩니다.

Event Handler는 해당 이벤트가 발생할 때마다 트리거되므로 적절히 사용해야 합니다. 항상 발생하길 원하는 것에만 사용해야 합니다. 특정 페이지에서만 어떤 일이 발생하길 원하는 경우 해당 페이지에서 Microflow를 사용할 수 있습니다(예: 사용자 정의 **Save** 버튼).

{{% alert color="warning" %}}
Event Handler는 특정 순서로 트리거되지 않습니다. 따라서 이벤트가 어떤 방식으로든 서로 의존하지 않도록 하십시오(일반화 및 특수화의 이벤트도 포함).

Microflow에서 이벤트가 트리거될 때 Microflow 액션에서 Event Handler를 우회하도록 선택할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
지정된 이벤트가 객체 목록에 적용되는 경우(예: 객체 목록을 커밋하는 경우), 핸들러가 모든 객체에 대해 먼저 트리거된 다음 이벤트가 목록에 적용됩니다. 주어진 예에서 핸들러가 모든 객체에서 먼저 실행된 다음 목록의 모든 객체가 커밋됩니다.

핸들러가 목록의 다른 객체에 이미 적용된 이벤트에 의존하는 경우, 목록을 반복하면서 각 객체에 이벤트를 차례로 적용해야 합니다.
{{% /alert %}}

예를 들어, **Customer** Entity에 **Postcode** Attribute가 있고 이것이 항상 유효한지 확인하고 싶다고 가정합니다. 이것이 변경될 수 있는 여러 곳이 있는 경우, Customer 객체가 커밋될 때마다 우편번호가 유효한지 확인하고 우편번호가 유효하지 않은 경우 객체가 커밋되는 것을 방지하는 Microflow **BCo_Customer_Postcode**를 호출하는 *Before Commit* 이벤트를 추가할 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/event-handlers/customer-event-handlers.png" alt="Example of adding a before commit event handler to the Customer entity" class="no-border" >}}

데이터 검증을 위한 Event Handler 사용에 대한 자세한 내용은 [데이터 검증 설정 방법](/howto8/data-models/setting-up-data-validation/)을 참조하십시오.

## 속성

[Entity 대화 상자](/refguide8/entities/#dialog-box)에서 Entity에 대한 Event Handler를 추가하고 편집할 수 있습니다.

Event Handler 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/event-handlers/event-handler-properties.png" class="no-border" >}}

Event Handler 속성은 다음 섹션으로 구성됩니다:

* [시점(When)](#when)
* [내용(What)](#what)

### 시점 섹션 {#when}

#### 시점(Moment) {#moment}

**Moment**는 지정된 이벤트가 발생하기 **전(Before)** 또는 **후(After)**에 Microflow가 실행되는지 지정합니다.

#### 이벤트{#event}

**Event**는 Microflow 실행을 트리거하는 이벤트를 지정합니다.

| 값 | 설명 |
| --- | --- |
| Create | 이 Entity의 객체가 생성될 때 Microflow가 실행됩니다. 사용자가 그리드에서 **Create**를 클릭하거나 Microflow에서 객체가 생성될 때 발생합니다. Microflow의 [생성](/refguide8/create-object/) 액션에서, after create 액션은 객체가 Attribute의 기본값으로 초기화된 후 실행되지만, 액션에 지정된 변경 항목이 적용되기 전에 실행됩니다. |
| Commit | 이 Entity의 객체가 커밋될 때 Microflow가 실행됩니다. 사용자가 페이지에서 **Save**를 클릭하거나 Microflow에서 객체가 커밋될 때 발생합니다. |
| Delete | 이 Entity의 객체가 삭제될 때 Microflow가 실행됩니다. 사용자가 그리드에서 **Delete**를 클릭하거나 Microflow에서 객체가 삭제될 때 발생합니다. |
| Rollback | 이 Entity의 객체가 롤백될 때 Microflow가 실행됩니다. 사용자가 페이지에서 **Cancel**을 클릭하거나 Microflow에서 객체가 롤백될 때 발생합니다. |

### 내용 섹션{#what}

#### 이벤트 객체 전달

이 옵션은 이 이벤트에 대해 설정된 Microflow(아래 **Microflow** 참조)가 이벤트와 연관된 객체를 매개변수로 가질지 지정합니다. 예를 들어, 커밋되는 객체에 대한 유효성 검사를 Event Handler에서 수행하려는 경우 유용합니다.

이 값을 **No**로 설정하면 매개변수가 없는 Microflow만 지정할 수 있습니다.

#### Microflow

이 속성은 지정된 이벤트에 대해 실행되는 Microflow를 정의합니다. Microflow는 Event Handler의 시점과 이벤트와 일치하는 매개변수 및 반환 유형을 가져야 합니다:

* **Before Create**를 제외한 모든 Event Handler의 Microflow는 이벤트가 발생하는 객체를 매개변수로 가져올 수 있습니다.
* 이벤트 *전에* 실행되는 Microflow는 이벤트를 계속 진행할지(true) 취소할지(false) 지정하는 Boolean 값을 반환해야 합니다. 여러 Microflow가 동일한 이벤트를 처리할 때, Microflow 중 하나가 false를 반환하면 이벤트가 즉시 취소됩니다. 이 경우 일부 Microflow는 전혀 실행되지 않을 수 있습니다. 예를 들어, 특정 조건이 충족되지 않을 때 객체 커밋을 취소하는 데 이 기능을 사용할 수 있습니다.

| [시점](#moment) | [이벤트](#event) | 객체를 매개변수로 가져올 수 있음 | Boolean 값 반환 |
| --- | --- | --- | --- |
| Before | Create | 아니오 | 예 |
| After | Create | 예 | 아니오 |
| Before | Commit | 예 | 예 |
| After | Commit | 예 | 아니오 |
| Before | Delete | 예 | 예 |
| After | Delete | 예 | 아니오 |
| Before | Rollback | 예 | 예 |
| After | Rollback | 예 | 아니오 |

#### Microflow가 False를 반환할 때 오류 발생

이것은 [시점](#moment)이 **Before**로 설정된 경우에만 관련됩니다.

이 옵션이 활성화되면 Microflow가 false를 반환할 때 Event Handler가 오류를 발생시킵니다. 그런 다음 오류 처리를 사용하여 Event Handler가 false를 반환했는지 감지할 수 있습니다.

예를 들어, 이것은 **Before Commit** Event Handler를 네이티브 유효성 검사와 동일한 방식으로 사용할 수 있게 합니다. 이 옵션이 **No**로 설정된 경우, Before Commit Event Handler는 커밋이 발생하는 것을 막을 수 있지만 나머지 Microflow는 계속 실행됩니다.

기본값: *Yes*

## 더 읽기

* [성능 향상을 위한 데이터 비정규화 방법](/howto8/data-models/denormalize-data-to-improve-performance/)
* [데이터 검증 설정 방법](/howto8/data-models/setting-up-data-validation/)

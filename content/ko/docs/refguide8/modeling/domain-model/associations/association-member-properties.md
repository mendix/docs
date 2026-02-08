---
title: "Association 탭 속성"
url: /refguide8/association-member-properties/
weight: 15
---

## 소개

[Association](/refguide8/associations/)의 속성을 편집하는 두 가지 방법이 있습니다. 이 문서에서는 Entity 속성의 **Associations** 탭에서 편집할 수 있는 속성을 설명합니다. [Association 속성](/refguide8/association-properties/)에서 설명하는 대로 Association 속성을 편집하려면 **Edit**를 클릭하여 Association 속성 대화 상자를 열 수 있습니다.

Association에 대한 자세한 내용은 [Association](/refguide8/associations/)을 참조하십시오.

## 속성

Entity 속성의 **Associations** 탭의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-member-properties/edit-entity-association.png" class="no-border" >}}

Association 탭의 Association은 다음 속성을 가집니다:

* [이름](#name) 
* [유형](#type)
* [소유자](#owner)
* [부모/자식](#parent-child)

이러한 속성 중 아무거나(오름차순 또는 내림차순) 열 제목을 클릭하여 Association 목록을 정렬할 수 있습니다.

### 이름 {#name}

Association의 이름은 이를 참조하는 데 사용됩니다. 예를 들어, 양식이나 Microflow에서 사용됩니다.

{{% alert color="info" %}}
Association 탭에서는 이 이름을 변경할 수 없습니다. 이름을 변경하려면 **Edit**를 클릭(또는 Association 이름을 더블 클릭)하여 [Association 속성](/refguide8/association-properties/)을 여십시오.
{{% /alert %}}

### 유형 {#type}

이 속성은 Association이 참조(단수)인지 참조 집합(복수)인지 정의합니다.

| 값 | 설명 |
| --- | --- |
| Reference *(기본값)* | 단수: 소유 Entity의 객체가 다른 Entity의 0개 또는 1개 객체를 참조합니다. |
| Reference set | 복수: 소유 Entity의 객체가 다른 Entity의 0개 이상 객체를 참조합니다. |

{{% alert color="info" %}}
이 속성의 예시는 아래의 소유자 속성 예시와 결합되어 있습니다.
{{% /alert %}}

### 소유자 {#owner}

이 속성은 Association이 하나 또는 두 개의 소유자를 가지는지 정의합니다. 소유자가 하나인 경우 소유자는 화살표의 시작점에 위치합니다.

| 값 | 설명 |
| --- | --- |
| Default *(기본값)* | 하나의 Entity만 소유자(부모)입니다. |
| Both | 두 Entity 모두 소유자입니다. |

소유권은 Association의 두 가지 측면을 정의하므로 중요합니다:

* 카디널리티(다수 또는 하나)가 제어되는 방식
* Association이 기록되는 위치

{{% alert color="info" %}}
External Entity는 External Entity와 로컬 Entity 간 Association의 소유자가 될 수 없습니다.
{{% /alert %}}

#### 카디널리티

카디널리티는 객체가 가질 수 있는 Association의 수를 계산하는 것을 말합니다. 객체가 특정 Association의 발생 횟수를 셀 수 있으려면 Association의 소유권을 가져야 합니다.

따라서 일대다 Association의 경우 *다* 쪽이 *하나* 객체와만 연관할 수 있도록 Association을 소유합니다. 일대일 Association의 경우 양쪽이 모두 Association을 소유합니다. 다대다 관계의 경우 카디널리티는 중요하지 않습니다.

#### Association 기록

Association은 이를 소유하는 객체에 기록됩니다. 두 객체 모두 Association을 소유하면 Association이 두 객체에 기록됩니다. Association이 기록되는 위치의 예는 *Association*의 [Association 예시](/refguide8/associations/#examples) 섹션에서 볼 수 있습니다.

Association이 기록되는 위치는 앱에서 참조 및 참조 집합 선택기 사용에 중요한 영향을 미칩니다. 선택기는 *소유* 객체를 포함하는 Data View 내에만 위치할 수 있습니다. 소유 객체를 커밋할 때만 Association이 기록되기 때문입니다.

예를 들어, Customer Entity가 소유하는 **Customer_Group**이라는 **Customer**와 **Group** 간의 다대다 Association이 있다고 가정합니다. Customer Data View 내에서 Group을 선택하기 위한 입력 참조 집합 선택기를 넣을 수 있습니다. 그러나 Group Data View 내에서 Customer를 선택하기 위한 입력 참조 집합 선택기를 넣을 수는 *없습니다*.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-member-properties/input-reference-set-selector.png" alt="Selecting Group objects through an input reference set selector in a Customer data view" class="no-border" >}}

양쪽이 모두 Association을 소유하면 이 제한을 극복할 수 있습니다. 그러나 Association이 기록되는 모든 Entity를 커밋해야 하는 오버헤드와 균형을 맞춰야 합니다. 따라서 Mendix 앱에서 양쪽에서 Association을 추가해야 하는 강력한 비즈니스 이유가 없는 한 다대다 관계는 **Default** Entity가 소유하는 것을 권장합니다.

{{% alert color="info" %}}
하나의 Entity에만 Association을 기록하는 것이 양쪽에서 Association을 탐색하는 능력에 영향을 미치지 않습니다. 그러나 비소유자 쪽에서 탐색하는 것이 더 느릴 수 있습니다.
{{% /alert %}}

### 유형 및 소유자와 다중성 및 탐색 가능성의 관계 {#types}

Entity의 **Type** 및 **Owner** 속성은 Association의 [다중성](/refguide8/association-properties/#multiplicity) 및 [탐색 가능성](/refguide8/association-properties/#navigability) 속성과 관련이 있습니다. **Type** 또는 **Owner**를 변경하면 **다중성**과 **탐색 가능성**도 변경됩니다.

아래 표에서 **Type**/**Owner**와 **다중성**/**탐색 가능성** 간의 대응 관계를 확인할 수 있습니다.

| **다중성** | **탐색 가능성** | 유형 | 소유자 |
| -----------------|----------------- | ------------- | ------- |
| 일대일     | —      | Reference     | Both    |
| 일대다     | —     | Reference     | Default |
| 다대다     | X 객체가 Y 객체를 참조 | Reference set | Default |
| 다대다     | X와 Y 객체가 서로 참조 | Reference set | Both    |

다중성과 탐색 가능성에 대한 자세한 내용은 *Association 속성*의 [다중성](/refguide8/association-properties/#multiplicity) 및 [탐색 가능성](/refguide8/association-properties/#navigability) 섹션을 참조하십시오.

## 부모/자식 {#parent-child}

부모 및 자식 설정은 Association의 방향을 보여줍니다. 부모는 Association이 시작되는 Entity를 정의하고, 자식은 Association이 끝나는 Entity를 정의합니다.

## 더 읽기

* [Association 속성](/refguide8/association-properties/)
* [Entity](/refguide8/entities/)

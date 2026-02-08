---
title: "Consumed OData Service 요구사항"
url: /refguide8/consumed-odata-service-requirements/
weight: 20
description: "Mendix에서 소비되는 OData 서비스에 대한 요구사항."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 소비될 OData 서비스에 대한 요구사항을 설명합니다. 이러한 요구사항은 런타임에 추가로 확인되지 않으며 충족되는 것으로 예상됩니다. 이러한 요구사항이 충족되지 않으면 오류가 발생할 수 있습니다.

## Consumed OData Service 요구사항

Mendix 앱에서 사용되는 Consumed OData Service에 대한 요구사항은 다음과 같습니다: 

* OData 서비스는 Atom XML을 반환하는 OData v3 서비스이거나 Atom XML 또는 JSON을 반환하는 OData v4 서비스여야 합니다
* `$filter`, `$orderby`, `$top`, `$skip`, `$expand` 및 `$count`(또는 `$inlinecount`)를 포함한 OData 피드에 대한 쿼리를 지원해야 합니다

## 서비스 Entity 및 속성에 대한 요구사항

이 섹션에서는 Mendix 앱에서 지원되는 Consumed OData Service의 기능을 설명합니다. 이러한 기능은 외부 Entity가 Domain Model에서 사용되기 전에 확인됩니다.

### Entity

Vocabulary Annotation은 서비스에서 지원되지 않는 기능을 나타내는 데 사용할 수 있습니다. Entity Set에 대해 다음 Vocabulary Annotation이 인식됩니다:

* **Countable** – Entity Set을 `Countable="false"`로 표시하면 사용자가 Entity를 프로젝트에 추가하는 것을 방지합니다
* **Filterable** – Entity Set을 `Filterable="false"`로 표시하면 모든 속성이 필터링 불가로 설정됩니다
* **Sortable** – Entity Set을 `Sortable="false"`로 표시하면 모든 속성이 정렬 불가로 설정됩니다
* Entity Set을 `Filterable="false"` 및 `Sortable="false"`로 표시하면 모든 속성이 필터링 불가 및 정렬 불가로 설정됩니다. `NonFilterableProperties` 주석 또는 `NonSortableProperties` 주석으로 속성을 표시하면 특정 속성(Attribute)이 필터링 불가 또는 정렬 불가로 설정됩니다

Entity는 Entity Set을 통해 접근 가능한 경우에만 사용할 수 있습니다.

또한 Entity는 키로 고유하게 식별 가능한 경우에만 사용할 수 있습니다. 키는 다음 조건이 충족되는 한 하나 이상의 속성으로 구성될 수 있습니다:

* 속성은 nullable이 될 수 없습니다(`isNullable="false"`가 지정되어야 합니다)
* 다음 타입만 허용됩니다: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`, `Boolean`, `Decimal`, `Single`, `Double` 및 `String`
* 타입이 `String`인 경우 `MaxLength`를 지정해야 합니다

### 속성(Attribute)

{{% alert color="warning" %}}
`FC_KeepInContent=false`로 표시된 속성(Attribute)은 사용할 수 없습니다.
{{% /alert %}}

속성(Attribute) 타입은 기본형이어야 합니다(복합형, 컬렉션 또는 열거형이 아님). 앱의 속성 타입은 다음 표에 제공된 대로 OData 메타데이터의 속성 타입을 기반으로 합니다:

| OData 타입 | Mendix 타입 |
| --- | --- |
| Binary                         | Binary (단, 3.4 참조) |
| Boolean                        | Boolean ¹ |
| Byte, SByte, Int16, Int32      | Integer |
| DateTime, DateTimeOffset, Time | Date/time |
| Decimal, Double, Single        | Decimal ² |
| Int64                          | Long |
| String, Guid                   | String |
| (기타)                        | (무시됨) |

{{% alert color="warning" %}}
OData 엔드포인트에 작업(Operation)이 포함된 경우 Consumed OData Service에서 가져오지 않습니다. [Call REST Service](/refguide8/call-rest-action/) 액티비티를 사용하여 이러한 작업을 호출할 수 있습니다.
{{% /alert %}}

<small>¹ Mendix에서 Boolean은 null이 될 수 없습니다. 서비스가 null을 반환하면 Mendix에서 값은 false가 됩니다.<br />² [Mendix Decimal](/refguide8/attributes/#type)의 범위를 벗어나는 Decimal 값은 현재 지원되지 않습니다. 서비스가 범위를 벗어나는 값을 반환하면 오류가 발생합니다.</small>

### 일반화

Consumed OData Service는 일반화 및 특수화 가져오기를 지원하지 않습니다. 이는 원본 앱의 Published OData Service 계약이 특수화를 일반화의 속성(Attribute)과 특수화된 Entity의 속성(Attribute)을 포함하는 개별 Entity로 표시함을 의미합니다. 

이는 Mendix OData 엔드포인트를 소비할 때 일반화와 그 특수화를 모두 소비할 필요가 없음을 의미합니다. 특수화는 이제 일반화의 모든 속성(Attribute)과 연관(Association)을 가진 Entity가 됩니다.

Published OData Service에서 다른 노출된 Entity와의 일반화에 대한 연관(Association)은 이제 개별 "특수화된" Entity에 포함됩니다.

{{% alert color="warning" %}}
일반화와 특수화된 Entity가 동일한 서비스에서 노출되는 경우. 두 Entity가 모두 소비되면 일반화에 대한 연관(Association)만 표시됩니다. 이제 개별 특수화는 상속된 연관을 갖습니다. 이에 대한 가능한 해결 방법은 일반화 없이 특수화만 포함하는 서비스를 게시하는 것입니다. 또는 일반화에 대한 연관을 게시하지 않아 특수화에서 상속된 연관이 보존되도록 해야 합니다.
{{% /alert %}}

### 바이너리 속성(Attribute)

바이너리 데이터 형식은 *미디어 Entity* 형태로 지원됩니다. 미디어 Entity를 Domain Model에 드래그하면 해당하는 외부 Entity가 생성됩니다. Entity에는 바이너리 데이터가 있는 `contents` 속성(Attribute)이 있습니다.

현재 바이너리 데이터는 Java Action을 통해서만 접근할 수 있습니다.

### 연관(Association)

OData v3 연관(Association)은 두 개의 끝이 있는 경우에만 사용할 수 있습니다.

OData v4 탐색 속성은 파트너가 있는 경우에만 연관(Association)으로 사용할 수 있습니다.

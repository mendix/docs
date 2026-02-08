---
title: "등록된 자산 사용하기"
url: /catalog/consume/consume-registered-assets/
weight: 20
description: "카탈로그를 통해 공유된 서비스와 데이터셋을 사용하는 방법에 대해 설명합니다."
aliases:
    - /data-hub/data-hub-catalog/consume/
---

## 소개

카탈로그는 앱에서 사용할 수 있는 데이터셋을 노출하는 OData 서비스의 카탈로그입니다. Mendix Studio Pro에서 이러한 노출된 데이터셋은 [Integration Pane](/refguide/integration-pane/)을 통해 *외부 엔티티(External Entity)*로 추가됩니다. Studio Pro의 통합 카탈로그 [검색](/catalog/search/) 기능을 사용하여 앱에서 사용할 적합한 데이터셋을 찾을 수 있습니다.

## 앱에서 등록된 자산 사용하기 {#consuming-services-entities}

카탈로그 또는 Studio Pro의 [Integration Pane](/refguide/integration-pane/)을 사용하여 등록된 서비스를 찾을 수 있습니다. [URI 복사](/catalog/manage/search/#service-details)를 클릭하여 OData 서비스 URI를 얻으면 다른 엔터프라이즈 애플리케이션에서 사용할 수 있습니다.

다음 섹션에서는 Studio Pro에서 앱에 OData 서비스 및 등록된 데이터셋을 사용할 때 고려해야 할 중요한 사항을 요약합니다.

### 서비스

외부 엔티티(External Entity)에 대한 새 버전의 OData 서비스가 카탈로그에 등록되면, 소비 앱에서 사용된 OData 서비스를 업데이트할 수 있습니다. 사용된 서비스 업데이트에 대한 자세한 내용은 *Consumed OData Service*의 [사용된 OData 서비스 업데이트 또는 전환](/refguide/consumed-odata-service/#updating) 섹션을 참조하십시오.

{{% alert color="info" %}}
Studio Pro에서 새 버전의 서비스가 표시되며 사용자는 서비스를 **업데이트(Update)**하거나 다른 엔드포인트에 배포된 다른 버전의 서비스로 **전환(Switch)**할 수 있습니다.
{{% /alert %}}

서비스 게시자는 서비스 버전에 호환성을 깨뜨리는 변경 사항이 포함된 경우 해당 버전을 더 이상 사용하지 않는 것으로 표시하는 것이 좋습니다.

### 사용된 외부 엔티티

Studio Pro의 [Integration Pane](/refguide/integration-pane/)을 통해 게시된 OData 서비스의 외부 엔티티를 사용하면, 특정 환경에 배포된 서비스의 데이터셋을 사용하게 됩니다.

앱에 보안이 활성화되어 있으면, [영속성 있는](/refguide/persistability/#persistable) 엔티티와 [영속성 없는](/refguide/persistability/#non-persistable) 엔티티에 대해 하는 것처럼 외부 엔티티에 대한 접근 규칙을 정의할 수 있습니다. 사용자 역할에 기반한 접근 규칙을 정의할 수 있습니다 (자세한 내용은 [보안 및 정보 접근 제어](/catalog/security/)를 참조하십시오).

외부 엔티티를 [영속성 있는 엔티티와 영속성 없는](/refguide/persistability/) 로컬 엔티티 모두에 연관시킬 수 있습니다. 그러나 외부 엔티티는 연관(Association)의 소유자가 될 수 없습니다. 즉, 도메인 모델(Domain Model)에서 로컬 엔티티에서 외부 엔티티로의 연관이어야 하며, 연관의 [소유권](/refguide/associations/#ownership) 값은 **Default**로 설정해야 합니다.

원본 앱에서 [특수화(Specialization)](/refguide/generalization-and-association/)인 Mendix 엔티티는 상속된 속성과 연관을 포함하는 개별 엔티티로 게시되고 사용됩니다. 일반화된 엔티티가 특수화된 엔티티와 동일한 서비스에 노출되는 경우, 메타데이터 계약이나 둘 다 사용될 때 상속 관계는 존재하지 않습니다.

{{% alert color="warning" %}}
일반화에서 상속된 연관은 특수화가 사용될 때 노출되고 표시됩니다. 그러나 일반화된 엔티티의 동일한 연관은 동일한 도메인 모델에서 특수화에 대해 지원되지 않습니다. 동일한 연관을 동일한 도메인 모델의 두 개의 다른 외부 엔티티에 대해 노출하고 사용할 수 없습니다.
{{% /alert %}}

### 데이터셋

외부 엔티티의 데이터는 소비 앱의 데이터베이스가 아닌 OData 서비스를 게시하는 앱의 데이터베이스에 있습니다. 사용된 엔티티와 관련된 데이터셋은 게시 앱에서 유지 관리됩니다.

데이터에 대한 접근은 게시된 REST OData 서비스를 통해 이루어지며, 소비 앱에서 데이터를 읽고, 쿼리하고, 업데이트하거나 삽입합니다.

## 외부 엔티티 사용에 의해 영향을 받는 작업

소비 앱에서 외부 엔티티를 사용할 때 다음 작업이 영향을 받습니다:

* 집계(Aggregation) – 외부 엔티티 목록을 카운트할 수 있지만, 합계, 평균, 최솟값, 최댓값과 같은 다른 집계를 표시할 수 없습니다.
    * [OData v3.0](https://www.odata.org/documentation/odata-version-3-0/)은 이러한 작업을 지원하지 않습니다. 유일한 예외는 [목록 집계](/refguide/aggregate-list/) 마이크로플로우(Microflow) 액티비티(Activity)를 사용하는 것으로, **Count**를 제외한 모든 집계에서 전체 데이터를 가져온 후 메모리에서 집계를 수행합니다
* [XPath](/refguide/xpath/) – XPath를 사용하여 외부 엔티티를 필터링할 수 있습니다. 다음을 제외한 모든 XPath 구문이 지원됩니다:
    * 날짜/시간에서의 세 가지 변환: `day-of-year-from-dateTime`, `weekday-from-dateTime`, `week-from-dateTime`
    * 집계: `avg()`, `max()`, `min()`, `sum()`
    * 로컬 엔티티와 외부 엔티티 간의 연관 사용
    * 속성을 다른 속성과 비교하기 (속성은 리터럴 값이나 변수와만 비교할 수 있습니다)
    * [존재 표현식](/refguide/xpath-expressions/#exist) (연관된 객체가 존재하는지 여부로 필터링)
    * 경로 중간에서의 필터링 (`[Module.Car_Person/Module.Car[Brand='BMW']/Module.Car_Plate/Module.Plate/Number='123']`와 같이 `[Brand='BMW']`가 경로 중간에 나타나는 경우)
    * `reverse()`를 사용하는 표현식 ([자기 참조에 대한 쿼리](/refguide/query-over/)에서 언급된 바와 같이)
* [OQL](/refguide/oql/) – 외부 엔티티에 대해 OQL 쿼리를 정의할 수 없습니다 (예: 데이터셋에서)

## 비Mendix 시스템의 OData 서비스에 등록된 데이터셋

비Mendix 앱에서 등록된 OData 데이터셋의 경우 아래 설명된 제한 사항이 적용됩니다.

### 키

모든 데이터셋에는 키가 있어야 합니다. 키는 다음 조건을 갖는 하나 이상의 속성을 가질 수 있습니다:

* 속성은 null을 허용하지 않아야 합니다 (`isNullable="false"`가 지정되어야 합니다)
* 다음 유형만 허용됩니다: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`, `Boolean`, `Decimal`, `Single`, `Double`, `String`
* 속성 유형이 `String`인 경우 `MaxLength`를 지정해야 합니다

키 속성은 외부 엔티티의 속성으로 사용할 수 없습니다.

### 지원되는 메타데이터 기능

Studio Pro에서 사용된 OData 서비스로 메타데이터를 가져올 때, 지원되지 않는 모든 구문은 무시됩니다. 다음 구문이 지원됩니다:

* 서비스 피드에 게시된 엔티티만 가져올 수 있습니다. 메타데이터 파일에만 나타나고 서비스 피드에는 나타나지 않는 엔티티는 외부 엔티티로 가져올 수 없습니다.
* 속성 유형은 원시 유형이어야 합니다 (복합 유형, 컬렉션 또는 열거형이 아닌). 앱 내 속성의 유형은 OData 메타데이터의 속성 유형을 기반으로 합니다:

    | OData 유형 | Mendix 유형 |
    | --- | --- |
    | Binary | Binary (아래 [FileDocuments](#filedocs) 섹션도 참조하십시오) |
    | Boolean | Boolean \*1 |
    | Byte, SByte, Int16, Int32 | Integer |
    | DateTime, DateTimeOffset, Time | DateTime |
    | Decimal, Double, Single | Decimal \*2 |
    | Int64 | Long |
    | String, Guid | String |
    | (기타) | (무시됨) |

다음 조건이 적용됩니다:

* OData 엔드포인트에 작업(Operation)이 포함되어 있으면, 이는 사용된 OData 서비스로 가져오지 않습니다. 이러한 작업을 호출하려면 [Call REST service](/refguide/call-rest-action/) 액티비티를 사용하십시오
* Mendix에서 Boolean은 null이 될 수 없습니다. 서비스가 null을 반환하면 값은 false입니다
* `FC_KeepInContent=false`로 표시된 속성은 지원되지 않습니다
* Mendix Decimal 범위를 벗어나는 Decimal 값은 현재 지원되지 않습니다. 서비스가 범위를 벗어나는 값을 반환하면 오류가 발생합니다

### FileDocuments {#filedocs}

바이너리 속성을 가진 외부 엔티티는 FileDocument로 가져오지 않습니다. 이는 사용이 제한됨을 의미합니다.

---
title: "일반화(Generalization) vs 일대일 Association"
linktitle: "일반화 vs 1대1 Association"
url: /refguide8/generalization-and-association/
weight: 50
---

## 소개

때때로 다른 모듈에서 사용되는 Entity에 정보를 추가하고 싶을 때가 있습니다. 아마도 Mendix Marketplace에서 가져온 모듈일 수 있습니다. 모듈의 업데이트 버전을 받을 수 없게 되므로 Entity를 커스터마이즈하고 싶지 않습니다. 다른 경우에는 Entity의 일부 객체에만 추가 정보를 추가하고 다른 객체에는 추가하고 싶지 않을 수 있습니다. 이러한 경우에 사용할 수 있는 두 가지 방법이 있습니다: **일반화(Generalization)** (또는 흔히 *상속(Inheritance)*이라고도 함) 또는 **연관된 Entity(Associated Entity)**.

Mendix 개발자는 상속을 사용할지 Association을 사용할지 매일 선택해야 합니다. 대부분의 프로젝트에서 발생하는 한 가지 예는 사용자를 어떻게 설정할지 결정하는 것입니다. Administration 모듈에서 이미 사용 가능한 Account Entity를 계속 사용하시겠습니까? 아니면 사용자 계정에 대한 일대일 Association이 있는 별도의 Entity로 작업하시겠습니까? 아니면 **System.User**에서 상속받는 (다중) Entity를 추가하시겠습니까? 이 경우 System.User Entity에 직접 추가 정보를 추가하는 것은 나쁜 관행이며, 실제로 Mendix는 그렇게 하는 것을 방지합니다.

밀접하게 관련된 구조를 정의할 때 최선의 아키텍처를 결정하기 어려울 수 있습니다. Entity가 기본 구조에서 상속받아야 할까요, 아니면 일대일 Association을 사용하는 것이 나을까요? 각각이 애플리케이션의 성능이나 개발 속도에 큰 영향을 미칠 수 있으므로 두 옵션을 모두 고려해야 합니다.

## 일반화, 특수화 및 상속

Mendix 도메인 모델은 [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language)의 [클래스 다이어그램](https://en.wikipedia.org/wiki/Class_diagram)을 기반으로 하며, 객체/Entity와 그 Attribute 및 Association의 사양을 허용합니다. Mendix에서의 일반화 개념은 UML에서와 정확히 동일합니다. 그러나 Mendix 도메인 모델은 일반화를 표시하기 위해 다른 표기법을 사용합니다. UML 클래스 다이어그램은 슈퍼 클래스(즉, 일반화)를 가리키는 속이 빈 삼각형(화살표)이 있는 Association을 사용합니다. Mendix에서 일반화는 특수화된 Entity 위에 일반화 Entity 이름을 지정하는 파란색 레이블로 표현됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/generalization-and-association/generalization-indication.png" alt="example of generalization notation" class="no-border" >}}

UML은 또한 [집약(Aggregation)](https://en.wikipedia.org/wiki/Aggregation_(object-oriented_programming)) 또는 [합성(Composition)](https://en.wikipedia.org/wiki/Object_composition)과 같은 Association의 유형을 지정할 수 있게 합니다. 이러한 Association의 정의는 객체가 서로 없이 존재할 수 있는지 여부를 지정합니다. UML과 달리 관계의 강도를 지정할 수 없습니다. 두 객체 간의 종속성은 [이벤트 Microflow](/refguide8/event-handlers/) 또는 [삭제 동작/방지](/refguide8/association-properties/#delete-behavior)를 사용하여 지정해야 합니다.

### 성능

애플리케이션에 대한 영향과 동작을 이해하려면 [트랜잭션](https://en.wikipedia.org/wiki/Database_transaction) 및 [(데이터베이스) 격리 수준](https://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed)의 기본 개념을 이해해야 합니다.

Mendix 플랫폼은 트랜잭션을 사용하므로 모든 Microflow, 커밋 및 삭제가 (데이터베이스) 트랜잭션에서 발생합니다. 트랜잭션은 Microflow가 첫 번째 데이터베이스 작업을 실행하는 즉시 초기화되며 Microflow가 완료될 때만 종료됩니다. 데이터베이스에 대한 쓰기 작업은 수정된 객체에 대한 쓰기 잠금을 취하며 이 잠금은 트랜잭션이 끝날 때까지 유지됩니다. 이것이 Mendix가 모든 유형의 Entity 및 Association에 대한 쓰기 활동을 가능한 한 Microflow의 끝쪽으로 이동할 것을 권장하는 이유입니다. 반면에 검색 활동에 대한 잠금은 검색 작업이 끝날 때까지만 지속됩니다.

Mendix 플랫폼은 격리 수준 [Read Committed](https://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed)를 사용하므로 트랜잭션 외부에서는 커밋된 객체만 읽을 수 있습니다. 다른 Microflow가 변경 중인 객체를 읽으려고 시도하면 트랜잭션이 완료될 때까지 기다려야 합니다. 데이터베이스가 이 격리 수준을 구현하는 방식의 세부 사항은 기본 데이터베이스 관리 시스템(예: PostgreSQL)에 따라 다릅니다. 이것은 상속과 연관된 객체 중 선택에 중요한 영향을 미치므로 알아두는 것이 중요합니다.

### 객체 생성 및 변경

객체를 변경할 때 Mendix 플랫폼은 커밋 활동을 실행하거나 변경 객체에서 **Commit** 작업을 **Yes**로 설정하면 해당 변경 사항을 데이터베이스에 기록합니다. 업데이트 또는 삽입 쿼리는 변경한 값을 기반으로 수행됩니다. 그러나 이것이 트랜잭션을 종료하지는 않습니다. 정확한 동작은 사용 중인 데이터베이스 관리 시스템에 따라 다르지만, 대부분 레코드를 잠그고 트랜잭션이 완료(완료 또는 롤백)될 때까지 다른 사용자가 읽지 못하게 합니다.

#### 상속

상속이 있는 객체를 변경하면 플랫폼은 모든 검색에 필요한 일반화를 살펴보므로 계층의 모든 Entity에 대한 모든 검색을 잠재적으로 방지할 수 있습니다.

#### 일대일 Association

객체를 변경할 때 연관된 객체는 변경되지 않습니다. 이 규칙에는 두 가지 예외가 있습니다: 객체 이벤트에서 연관된 객체를 변경하는 경우 또는 연관된 객체가 '자동 커밋'되는 경우입니다. [Object Activity](/refguide8/object-activities/)를 참조하십시오.

애플리케이션에서 쓰기 트랜잭션이 많은 경우, 트랜잭션 중에 변경/잠기는 테이블 수를 제한하므로 일대일 Association을 선택하는 것이 좋습니다. 그러나 업데이트보다 삽입이 더 많은 경우 상속을 사용하는 것이 다시 가치가 있을 수 있습니다. 상속은 관계를 저장하기 위해 하나 적은 테이블을 사용합니다. Association 테이블이 없기 때문입니다. 따라서 모든 삽입에는 업데이트할 인덱싱된 테이블이 하나 적습니다.

### 객체 검색

페이지에서 데이터 위젯을 사용할 때 Mendix는 실행 중인 작업에 필요한 데이터만 검색하도록 최적화되어 있습니다. 예를 들어, 연관되거나 상속된 Attribute를 표시하지 않으면 해당 객체가 검색 쿼리에 포함되지 않습니다. 그러나 도메인 모델의 Entity에 XPath 제약 조건을 사용하는 Access Rule이 포함된 경우 추가 데이터가 검색될 수 있습니다. 예를 들어, 현재 사용자 기반의 제약 조건은 사용자에 대한 정보를 검색해야 합니다.

Microflow를 사용하여 데이터를 검색하면 모든 데이터가 검색됩니다(아래 [Microflow](#microflows) 참조).

#### 상속

특수화를 검색하면 플랫폼은 이 데이터가 필요한 경우에만 일반화 객체 자체에서 Attribute를 검색합니다.

이에 대한 한 가지 예외는 System.User Entity입니다. **Administration.Account**의 개요가 있는 경우, System.User Attribute를 표시하는지 여부에 관계없이 보안이 production으로 설정되어 있으면 플랫폼이 System.User 테이블을 포함합니다. 두 테이블 모두 객체 id에 대한 클러스터형 인덱스가 있으므로 데이터베이스에서 정보를 조인하는 것이 매우 효율적입니다.

일반화를 쿼리하면 특수화의 Attribute가 필요한 경우 메인 쿼리 후에 추가 쿼리가 수행됩니다.

#### 일대일 Association

일대일 Association의 경우, 연관된 객체는 페이지에 표시될 때 검색되어야 하며 메인 쿼리 후에 추가 쿼리가 발생합니다. Association 테이블을 사용하여 정보가 검색되므로 상속보다 효율적이지 않습니다. 정보가 정렬되고 필터링되는 방식에 따라 상속에서 사용되는 클러스터형 인덱스를 통해 조인하는 것보다 Association 테이블을 통해 조인하는 것이 일반적으로 덜 효율적입니다.

상속/연관된 정보에 대한 많은 검색, 정렬 및 표시가 필요한 경우 상속을 사용하는 것이 더 효율적일 수 있습니다. 반면에 연관된 정보가 몇 개의 페이지에서만 필요한 경우 상속 대신 Association을 통해 정보를 검색하는 추가 지연은 애플리케이션의 다른 부분에서 더 빠른 검색 시간과 비교할 때 수용할 수 있을 수 있습니다.

## 유연성

상속과 Association 간의 결정은 애플리케이션에 많은 데이터를 로드하기 전에 해야 합니다. Association을 추가할 때 객체 간의 관계를 지정하기 위해 추가 데이터가 필요할 수 있습니다. 일반화를 제거하면 두 객체 간의 관계가 손실됩니다. 이전 관계를 해결하는 데 사용할 수 있는 방법이 있지만, 애플리케이션에 많은 데이터가 저장되어 있으면 어렵고 시간이 오래 걸릴 수 있습니다.

### 상속

상속을 사용하면 Microflow를 더 쉽게 유지 관리할 수 있고 기능을 재사용할 수 있습니다. 그러나 유연성을 잃습니다. Entity에 상속을 적용하면 상속을 제거하고 관계를 사용하여 모든 데이터를 유지하기가 어렵습니다. 레코드가 하위 클래스의 유형을 변경할 수 있는지 고려하십시오. 예를 들어 직원 특수화 객체가 변경되어 프로젝트 관리자 객체가 되는 경우입니다. 대부분의 시나리오에서 완벽한 솔루션은 없으며 항상 양보할 것이 있습니다. 선택할 때 그 의미를 인식하기만 하면 됩니다.

더 쉽다고 해서 상속을 추가하거나 더 느리다고 해서 제거하지 마십시오. 특히 다른 객체 유형이 유사한 프로세스를 거쳐야 하는 시나리오에서는 기능을 재사용하고 애플리케이션의 일관성과 안정성을 높이기 위해 상속을 적용하는 것이 가치가 있을 수 있습니다.

그러나 높은 트랜잭션 볼륨이 있는 시스템에서는 일대일 Association이 상속보다 바람직합니다. 상속이 있는 테이블에서 레코드를 쓰고 업데이트하는 것은 단일 테이블만 업데이트하는 것보다 느립니다. Excel, 웹 서비스 또는 기타 통합을 통해 많은 새 객체 또는 변경된 객체가 로드되면 상속이 프로세스를 크게 느리게 할 수 있습니다.

### 일대일 Association

통합 중 데이터를 로드할 때 상속은 기능을 재사용할 수 있으므로 개발 속도를 향상시킬 수 있습니다. 이것은 모든 향후 변경 사항을 한 곳에서만 적용하면 되므로 큰 장점입니다. 그러나 모든 변경 사항을 별도의 Entity에 저장할 수 있는 경우 상속은 성능 저하를 일으킬 수 있습니다. 별도의 Entity에 모든 데이터를 분리할 수 있고 이 정보가 제한된 수의 위치에서만 애플리케이션에서 사용되는 경우 일대일 Entity를 유지하는 것이 더 빠릅니다.

## Microflow {#microflows}

페이지에 대한 데이터 검색은 Data View에서 사용되는 Entity 및 검색 Attribute와만 조인하도록 최적화되어 있지만, Microflow 검색 활동은 그렇지 않습니다. Microflow에서는 Entity의 일반화 및 특수화에서 *모든* 컬럼이 검색됩니다. 또한 선택된 Entity가 Association의 부모 쪽에 있는 모든 연관된 Entity가 검색됩니다.
 
많은 Attribute를 가진 Entity의 경우 데이터베이스에서 많은 데이터가 검색됩니다. 부모인 많은 Association을 가진 Entity의 경우 많은 추가 쿼리도 발생합니다.
 
Microflow에서 가장 효율적인 검색은 소유자 유형이 `Default`이고 객체가 `child`인 Association이 있는 객체의 검색입니다. 즉, `일대다` Association의 `일` 쪽에 있는 객체를 검색하는 것입니다. 이 객체를 검색하면 기본적으로 자식이므로 Association 테이블이 읽히지 않습니다. 일대다 Association을 가지는 것이 항상 편리하지는 않지만, 소유자 유형이 `Both`인 일대일 Association을 만들면 Association이 부모 대 부모 Association처럼 작동하므로 객체를 검색하면 항상 연관된 객체가 검색됩니다.

## 결론

이 설명이 상속 또는 Association을 사용할 때에 대한 명확한 답을 제공하지 못했을 수 있지만, 이는 올바른 답이나 잘못된 답이 없기 때문입니다. 상속과 일대일 Association 모두 장단점이 있습니다. 상황에 따라 특정 Entity에 무엇이 더 나은지 결정해야 합니다.

그러나 명확한 답을 줄 수 있는 몇 가지 상황이 있습니다:

* 다음과 같은 Entity에는 일대일 Association을 사용하십시오:
    * 다른 특수화에 대한 높은 수의 트랜잭션이 있는 경우 (초당 여러 변경 또는 생성을 높은 것으로 간주)
    * 소수의 공통 Attribute만 있는 경우 — 해당 정보에 대해 연관된 객체를 만드는 것이 가치가 없다고 느끼면 상속하는 것도 가치가 없습니다

* 다음과 같은 Entity에는 상속을 사용하십시오:
    * 항상 연관된 객체의 정보가 필요하고 사용자가 연관된 Attribute에 대해 집중적으로 검색하고 정렬하는 경우

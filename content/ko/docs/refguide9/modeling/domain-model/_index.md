---
title: "Domain Model"
url: /refguide9/domain-model/
weight: 30
description: "Studio Pro의 Domain Model을 소개합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

**Domain Model**은 애플리케이션에서 사용하는 정보(또는 *데이터*)를 추상적으로 설명하는 모델입니다. 이는 애플리케이션 아키텍처의 핵심입니다. 각 [모듈](/refguide9/modules/)에는 해당 모듈에서 사용하는 데이터를 설명하는 자체 Domain Model이 있습니다. 앱 내의 모든 모듈은 앱 내 모든 Domain Model의 데이터를 사용할 수 있습니다.

Domain Model은 [Entity](/refguide9/entities/)와 다른 Entity와의 관계를 나타내는 [Association](/refguide9/associations/)으로 구성됩니다. Domain Model에 [Annotation](/refguide9/annotations/)을 추가하여 사용 방법을 설명할 수도 있습니다.

아래는 고객과 주문을 정의하는 Domain Model입니다. Entity의 이름은 `Customer`와 `Order`입니다. 이들 사이의 선은 Association `Order_Customer`입니다. 한 고객은 여러 주문을 가질 수 있지만, 각 주문은 한 고객에게만 속합니다. Entity를 나타내는 상자 안에는 Entity의 [Attribute](/refguide9/attributes/)와 해당 데이터의 [유형](/refguide9/attributes/#type)이 표시됩니다. 별도의 제품 시스템에서 검색된 제품 정보를 기록하는 데 사용되는 [Non-persistable](/refguide9/persistability/) Entity `ProductQueryResults`도 있습니다.

{{< figure src="/attachments/refguide9/modeling/domain-model/annotated-domain-model.png" alt="Domain Model annotated with structure" class="no-border" >}}

| 요소 | 표시 내용 |
| --- | --- |
| Annotation | Domain Model의 특정 측면을 설명하는 주석 |
| Entity 이름 | [Entity](/refguide9/entities/)가 데이터베이스에서 참조되는 방식 |
| Event Handler | 이 Entity에 하나 이상의 [Event Handler](/refguide9/event-handlers/)가 설정되어 있음을 나타냅니다 |
| 이미지 | Entity를 식별하는 데 도움이 되는 이미지 |
| Validation Rule | 이 Attribute에 하나 이상의 [Validation Rule](/refguide9/validation-rules/)이 설정되어 있음을 나타냅니다 |
| 계산된 값 | 이 [Attribute](/refguide9/attributes/)의 값이 계산됨을 나타냅니다 |
| One | 이 Entity 하나가 Association의 반대편 Entity의 수량과 관련됨을 나타냅니다 |
| Association 이름 | [Association](/refguide9/associations/)이 데이터베이스에서 참조되는 방식 |
| Many | 이 Entity 여러 개가 Association의 반대편 Entity의 수량과 관련됨을 나타냅니다 |
| Association 소유자 | 화살표가 없는 Association의 끝은 이 Entity가 Association을 [소유](/refguide9/associations/#ownership)함을 나타냅니다(두 Entity가 모두 Association을 소유할 수도 있습니다) |
| Attribute 이름 | 이 Attribute가 데이터베이스에서 참조되는 방식 |
| Attribute 유형 | 이 Attribute에 저장되는 데이터의 [유형](/refguide9/attributes/#type) |
| Non-persistable Entity | 데이터베이스에 저장되지 않고 앱 내에서 임시로만 저장되는 Entity |

## 구현 {#implementation}

데이터베이스에서 모든 Entity는 별도의 테이블에 저장되며 Studio Pro에서 정의된 Attribute(계산된 Attribute 제외), 시스템 Attribute 및 고유 객체 식별자에 대한 열을 갖습니다. Entity에 특수화(Specialization)가 있는 경우 객체가 어떤 특수화에 속하는지를 나타내는 열도 있습니다. Association은 두 객체의 식별자(ID)를 포함하는 연결 테이블에 저장됩니다.

다음 Domain Model을 살펴보십시오.

{{< figure src="/attachments/refguide9/modeling/domain-model/customer-order.png" class="no-border" >}}

'Customer' Entity는 아래 표시된 'module$customer' 테이블에 저장됩니다. 'System' 모듈의 'User' 객체 ID를 포함하는 'system$owner' 및 'system$changedby' 열에 유의하십시오.

| id | createddate | changeddate | system$owner | system$changedby | fullname |
| --- | --- | --- | --- | --- | --- |
| 1 | 2006-10-24 08:10:45.053 | 2009-11-27 09:56:45.099 | 66 | 29 | Steve Jobs |
| 3 | 2007-09-30 09:56:45.099 | 2008-04-01 08:10:45.053 | 66 | 34 | Bill Gates |

'Order_Customer' Association은 아래 표시된 'module$order_customer' 테이블에 저장됩니다. 두 열 모두 연관된 객체의 ID를 포함합니다.

| module$orderid | module$customerid |
| --- | --- |
| 8 | 1 |
| 5 | 3 |

'Order' Entity는 아래 표시된 'module$order' 테이블에 저장됩니다. 'Customer' Entity의 테이블과 유사하지만 모든 시스템 Attribute가 비활성화되어 테이블에 저장되지 않습니다.

| id | number | date |
| --- | --- | --- |
| 5 | 5 | 2009-11-27 09:56:45.099 |
| 8 | 8 | 2008-04-01 08:10:45.053 |

## 추가 정보

* [기본 데이터 레이어 만들기](/refguide9/create-a-basic-data-layer/)

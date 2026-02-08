---
title: "도메인 모델"
url: /refguide8/domain-model/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

**도메인 모델(Domain Model)**은 애플리케이션에서 사용하는 정보(또는 *데이터*)를 추상적으로 설명하는 모델입니다. 이것은 애플리케이션 아키텍처의 핵심입니다. 각 [모듈](/refguide8/modules/)에는 해당 모듈에서 사용하는 데이터를 설명하는 고유한 도메인 모델이 있습니다. 앱 내의 모든 모듈은 앱 내의 모든 도메인 모델의 데이터를 사용할 수 있습니다.

도메인 모델은 [Association](/refguide8/associations/)으로 표현되는 다른 Entity와의 관계를 가진 [Entity](/refguide8/entities/)로 구성됩니다. 또한 도메인 모델에 [Annotation](/refguide8/annotations/)을 추가하여 사용 방법을 설명할 수 있습니다.

아래는 고객과 주문을 정의하는 도메인 모델입니다. Entity의 이름은 `Customer`와 `Order`입니다. 이들 사이의 선은 Association `Order_Customer`입니다. 한 고객은 여러 주문을 가질 수 있지만, 각 주문은 한 고객에 대한 것입니다. Entity를 나타내는 상자 안에서 Entity의 [Attribute](/refguide8/attributes/)와 해당 데이터의 [타입](/refguide8/attributes/#type)을 볼 수 있습니다. 또한 별도의 제품 시스템에서 검색된 제품 정보를 기록하는 데 사용되는 [비영속(Non-persistable)](/refguide8/persistability/) Entity `ProductQueryResults`도 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/annotated-domain-model.png" alt="Domain Model annotated with structure" class="no-border" >}}

| 요소 | 표시 내용 |
| --- | --- |
| Annotation | 도메인 모델의 한 측면을 설명하는 주석 |
| Entity 이름 | 데이터베이스에서 [Entity](/refguide8/entities/)를 참조하는 방법 |
| Event Handler | 이 Entity에 대해 하나 이상의 [Event Handler](/refguide8/event-handlers/)가 설정되어 있음을 나타냄 |
| 이미지 | Entity를 식별하는 데 도움이 되는 이미지 |
| Validation Rule | 이 Attribute에 대해 하나 이상의 [Validation Rule](/refguide8/validation-rules/)이 설정되어 있음을 나타냄 |
| 계산된 값 | 이 [Attribute](/refguide8/attributes/)의 값이 계산됨을 나타냄 |
| One | 이 Entity 하나가 Association의 다른 쪽 Entity의 수량과 관련됨을 나타냄 |
| Association 이름 | 데이터베이스에서 [Association](/refguide8/associations/)을 참조하는 방법 |
| Many | 이 Entity 여러 개가 Association의 다른 쪽 Entity의 수량과 관련됨을 나타냄 |
| Association 소유자 | 화살표가 없는 Association의 끝은 이 Entity가 Association을 [소유](/refguide8/associations/#ownership)함을 나타냄 (두 Entity 모두 Association을 소유하는 것도 가능) |
| Attribute 이름 | 데이터베이스에서 이 Attribute를 참조하는 방법 |
| Attribute 타입 | 이 Attribute에 저장되는 데이터의 [타입](/refguide8/attributes/#type) |
| 비영속 Entity | 데이터베이스에 저장되지 않고 앱 내에서 임시로만 저장되는 Entity |

## 구현 {#implementation}

데이터베이스에서 모든 Entity는 별도의 테이블에 저장되며 Studio Pro에서 정의된 Attribute(계산되는 것 제외), 시스템 Attribute 및 고유 객체 식별자에 대한 컬럼을 가집니다. Entity에 특수화(Specialization)가 있는 경우 객체가 속하는 특수화를 나타내는 컬럼도 있습니다. Association은 두 객체의 식별자(ID)가 포함된 조인 테이블에 저장됩니다.

다음 도메인 모델을 살펴보십시오.

{{< figure src="/attachments/refguide8/modeling/domain-model/customer-order.png" class="no-border" >}}

Entity 'Customer'는 아래에 표시된 테이블 'module$customer'에 저장됩니다. 'System' 모듈의 'User' 객체 ID를 포함하는 'system$owner' 및 'system$changedby' 컬럼에 주의하십시오.

| id | createddate | changeddate | system$owner | system$changedby | fullname |
| --- | --- | --- | --- | --- | --- |
| 1 | 2006-10-24 08:10:45.053 | 2009-11-27 09:56:45.099 | 66 | 29 | Steve Jobs |
| 3 | 2007-09-30 09:56:45.099 | 2008-04-01 08:10:45.053 | 66 | 34 | Bill Gates |

Association 'Order_Customer'는 아래에 표시된 테이블 'module$order_customer'에 저장됩니다. 두 컬럼 모두 연관된 객체의 ID를 포함합니다.

| module$orderid | module$customerid |
| --- | --- |
| 8 | 1 |
| 5 | 3 |

Entity 'Order'는 아래에 표시된 테이블 'module$order'에 저장됩니다. Entity 'Customer'의 테이블과 유사합니다. 그러나 모든 시스템 Attribute가 비활성화되어 테이블에 저장되지 않습니다.

| id | number | date |
| --- | --- | --- |
| 5 | 5 | 2009-11-27 09:56:45.099 |
| 8 | 8 | 2008-04-01 08:10:45.053 |

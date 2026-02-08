---
title: "Association"
url: /refguide8/associations/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개 {#intro}

Association은 Entity 간의 관계를 설명합니다. 도메인 모델에서 Association은 두 Entity 사이의 선 또는 화살표로 표현됩니다.

{{% alert color="info" %}}
동일한 데이터 소스에서 가져온 두 External Entity 간의 Association은 원본 앱에서 정의되므로 Entity가 모델에서 사용될 때 자동으로 설정됩니다. 자세한 내용은 *External Entity*의 [Association](/refguide8/external-entities/#properties) 섹션을 참조하십시오.
{{% /alert %}}

### 소유권 {#ownership}

Association의 값은 Association의 [소유자](/refguide8/association-member-properties/#owner)인 Entity의 객체에서 보고 편집해야 합니다. Association에서의 소유권은 화살표로 표시됩니다(화살표는 방향을 나타내는 것이 아님을 주의하십시오). 하나의 Entity 또는 두 Entity 모두 Association의 소유자가 될 수 있습니다. 하나의 Entity가 소유자인 경우, 소유자에서 다른 Entity를 가리키는 화살표가 있습니다. 두 Entity가 모두 소유자인 경우, 두 Entity 사이에 선이 있지만 화살표는 없습니다. 이것이 화살표를 제어할 수 있는 유일한 방법입니다.

소유권이 존재하는 이유를 이해하는 것이 중요합니다. 소유권은 Mendix에서 구현되어 첫 번째 디자인에 고정되지 않고 관계를 동적으로 변경할 수 있습니다. 예를 들어, [일대다 Association](#one-to-many)으로 디자인한 것을 [기본 소유권을 가진 다대다 Association](#many-to-many)으로 변경해야 하는 경우, Mendix가 처리하므로 데이터베이스를 다시 빌드할 필요가 없습니다.

### 다중성

Association의 [다중성](/refguide8/association-properties/#multiplicity)(또는 참조되는 객체의 수)은 Association 양쪽에 있는 숫자 1(`1`) 또는 별표(`*`)로 표시됩니다.

아래 예에서 화살표는 **Order**가 Association의 소유자임을 나타내고, `1`과 `*`는 한 고객이 여러 주문과 연관됨을 나타냅니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-order-customer.png" class="no-border" >}}

{{% alert color="info" %}}
영속 Entity와 비영속 Entity 간의 Association은 비영속 Entity에서 시작해야 하며 소유자가 **Default**여야 합니다. 영속 및 비영속 Entity에 대한 자세한 내용은 [영속성(Persistability)](/refguide8/persistability/)을 참조하십시오.
{{% /alert %}}

## Association 만들기 {#creating}

Association을 만드는 가장 빠른 방법은 [도메인 모델](/refguide8/domain-model/)에서 두 Entity 사이에 Association을 그리는 것입니다. 기본적으로 이것은 Association의 소유자/다(Many) 쪽에서 시작하여 일(One) 쪽에서 끝나는 일대다 Association을 생성합니다. Association은 두 Entity의 이름을 밑줄로 결합하여 이름이 지정됩니다. 그런 다음 다음 섹션에서 설명하는 대로 Association을 편집할 수 있습니다.

앱의 다른 모듈에 있는 Entity 간에도 Association을 만들 수 있습니다. 이 경우 Association을 그리는 것이 불가능합니다. Association을 소유하는 Entity의 **Association** 탭에서 새 Association을 만들 수 있습니다. 그런 다음 앱 내의 모든 Entity를 Association의 대상으로 선택할 수 있습니다. 자세한 내용은 [Association 탭 속성](/refguide8/association-member-properties/)을 참조하십시오.

{{% alert color="info" %}}
External Entity와 로컬 Entity 사이에서만 Association을 만들고 편집할 수 있습니다. 그러나 External Entity는 로컬 Entity와의 Association의 [소유자](/refguide8/association-member-properties/#owner)가 될 수 없습니다.
{{% /alert %}}

{{% alert color="info" %}}
두 External Entity를 연결해야 하는 경우 로컬 Entity를 추가하고 이 로컬 Entity를 두 External Entity와 연결하는 것을 고려하십시오. 이 경우 로컬 Entity가 두 Association의 소유자여야 합니다.
{{% /alert %}}

## Association 편집

Association을 편집하는 두 가지 방법이 있습니다.

### Association 직접 편집

Association 자체를 편집할 수 있습니다. 이 경우 다중성과 탐색 가능성을 사용하여 Association을 정의합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/edit-association.png" class="no-border" >}}

자세한 내용은 [Association 속성](/refguide8/association-properties/)을 참조하십시오.

### Entity의 Association에서 편집

Entity의 멤버로서 Association을 편집할 수 있습니다. 이 경우 유형과 소유자를 사용하여 Association을 정의합니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-member-properties/edit-entity-association.png" class="no-border" >}}

자세한 내용은 [Association 탭 속성](/refguide8/association-member-properties/)을 참조하십시오.

## Association 예시 {#examples}

### 일대다 Association {#one-to-many}

이 예에서 **Order** Entity에서 **Customer** Entity로 Association을 그리면 다음과 같은 결과가 됩니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-order-customer.png" class="no-border" >}}

유형 속성은 기본값 `Reference`이고 소유자(Order Entity)는 `Default`입니다. 이것은 다중성이 `One 'Customer' object is associated with multiple 'Order' objects`로 설정된 것과 동일하므로 고객은 여러 주문을 가질 수 있지만 주문은 하나의 고객만 가질 수 있습니다.

XML에서 이러한 Entity와 Association의 인스턴스는 다음과 같습니다(Association이 **Order** 요소에만 저장됨에 유의하십시오):

```xml
<Order id="101">
	<number>1</number>
	<date>9/30/2008</date>
	<Order_Customer>id_201</Order_Customer>
</Order>

<Customer id="201">
	<fullname>Apple Inc.</fullname>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
</Customer>

```

### 기본 소유권을 가진 다대다 Association {#many-to-many}

기본 소유권을 가진 다대다 Association은 Association을 그린 다음 유형 속성을 `Reference set`으로 설정하고 소유자를 `Default`로 유지하여 생성됩니다.

이 예에서 **Customer**는 여러 **Group**을 가질 수 있고 **Group**은 여러 **Customer**를 가질 수 있습니다. 이것은 다중성이 `Multiple 'Group' objects are associated with multiple 'Customer' objects`로 설정되고 탐색 가능성이 `'Customer' objects refer to 'Group' objects`로 설정된 것과 동일합니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-customer-group.png" class="no-border" >}}

XML에서 이러한 Entity와 Association의 인스턴스는 다음과 같습니다(Association이 **Customer** 요소에만 저장됨에 유의하십시오):

```xml
<Customer id="201">
	<fullname>Apple Inc.</name>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
	<Customer_Group>id_301 id_302</Customer_Group>
</Customer>

<Group id="301">
	<name>Multinational corporations</name>
</Group>

<Group id="302">
	<name>Hardware suppliers</name>
</Group>

```

### 일대일 Association

일대일 Association은 소유자 속성을 `Both`로 설정하여 생성됩니다(유형 속성은 기본값 `Reference`를 유지).

이 예에서 **Customer**는 하나의 **Profile**을 가질 수 있고 **Profile**은 하나의 **Customer**를 가질 수 있습니다. 이것은 다중성이 `One 'Customer' object is associated with one 'Profile' object`로 설정된 것과 동일합니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-customer-profile.png" class="no-border" >}}

XML에서 이러한 Entity와 Association의 인스턴스는 다음과 같습니다(Association이 **Profile** 요소와 **Customer** 요소 모두에 저장됨에 유의하십시오):

```xml
<Profile id="401">
	<religion>Buddhism</religion>
	<job>Chief Executive Officer</job>
	<website>http://www.apple.com/ </website>
	<Customer_Profile>id_201</Customer_Profile>
</Profile>

<Customer id="201">
	<fullname>Steve Jobs</fullname>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
	<Customer_Profile>id_401</Customer_Profile>
</Customer>

```

### 양방향 소유권을 가진 다대다 Association

두 Entity가 모두 소유자인 다대다 Association은 소유자 속성을 `Both`로 설정하고 유형 속성을 `Reference set`으로 설정하여 생성됩니다.

이 예에서 **Accountant**는 여러 **Group**을 가질 수 있고 **Group**은 여러 **Accountant**를 가질 수 있습니다. 이것은 다중성이 `Multiple 'Group' objects are associated with multiple 'Accountant' objects`로 설정되고 탐색 가능성이 `'Accountant' and 'Group' objects refer to each other`로 설정된 것과 동일합니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-accountant-group.png"   width="500"  class="no-border" >}}

XML에서 이러한 Entity와 Association의 인스턴스는 다음과 같습니다(Association이 **Accountant** 요소와 **Group** 요소 모두에 저장됨에 유의하십시오):

```xml
<Accountant id="501">
	<idnumber>1</idnumber>
	<name>Earl Grey</name>
	<telephonenumber>1-800-EARL-GREY</telephonenumber>
	<Accountant_Group>id_301 id_302</Accountant_Group>
</Accountant>

<Accountant id="502">
	<idnumber>2</idnumber>
	<name>Scrooge McDuck</name>
	<telephonenumber>1-800-SCROOGE-MCDUCK</telephonenumber>
	<Accountant_Group>id_301 id_302</Accountant_Group>
</Accountant>

<Group id="301">
	<name>Multinational corporations</name>
	<Accountant_Group>id_501 id_502</Accountant_Group>
</Group>

<Group id="302">
	<name>Hardware suppliers</name>
	<Accountant_Group>id_501 id_502</Accountant_Group>
</Group>

```

---
title: "Access Rule"
url: /refguide8/access-rules/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Entity의 **Access Rule**은 사용자가 해당 Entity의 객체로 수행할 수 있는 작업을 정의합니다. 사용자는 객체를 생성 및/또는 삭제할 수 있으며, 멤버 값을 보거나 편집할 수 있습니다. 멤버는 Entity의 Attribute 또는 Association입니다. 또한 [XPath 제약 조건](/refguide8/xpath-constraints/)을 사용하여 보기, 편집 및 제거할 수 있는 객체 집합을 제한할 수 있습니다.

모든 Access Rule은 하나 이상의 [모듈 역할](/refguide8/module-security/#module-role)에 적용됩니다. Access Rule은 해당 역할에 특정 접근 권한을 부여합니다. 규칙은 누적적이므로, 여러 Access Rule이 동일한 모듈 역할에 적용되면 해당 모듈 역할에 대해 해당 규칙의 모든 접근 권한이 결합됩니다.

{{% alert color="warning" %}}
Access Rule은 Entity의 [일반화(Generalization)](/refguide8/entities/#generalization)에서 상속되지 않으며, 모든 Entity의 보안은 명시적으로 지정됩니다. 이는 Entity에 Access Rule을 추가할 때 필요한 모든 XPath 제약 조건이 적용되었는지 항상 확인해야 함을 의미합니다.

Entity에 XPath 제약 조건을 정의하는 Access Rule이 있는 일반화가 있는 경우, 이러한 제약 조건은 해당 특수화에 적용되지 않으므로 가시성이 제한되지 않습니다.
{{% /alert %}}

## 속성

Access Rule은 Entity의 **Properties** > **Access rules** 또는 Entity 대화 상자의 **Access rules** 탭에서 정의됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-section.png" alt="Access Rules for Entities" class="no-border" >}}

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-tab.png" alt="Access Rules for Entities" class="no-border" >}}

{{% alert color="info" %}}
**Access rules** 섹션은 [프로젝트 보안](/refguide8/project-security/)이 **Production**으로 설정된 경우에만 표시됩니다.
{{% /alert %}}

Access Rule 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-properties.png" alt="Access Rules for Entities" class="no-border" >}}

Access Rule 속성은 다음 섹션으로 구성됩니다:

* [문서화](#documentation)
* [모듈 역할](#module-roles)
* [접근 권한](#access-rights)
* [XPath 제약 조건](#xpath-constraint)

### 문서화 섹션 {#documentation}

**Documentation**에서 Access Rule의 의도를 설명할 수 있습니다. 이것은 특히 복잡한 XPath 제약 조건의 경우 Access Rule을 이해하기 쉽게 유지하는 데 도움이 됩니다.

### 다음 모듈 역할에 규칙 적용 섹션 {#module-roles}

#### 역할

모든 모듈 역할이 나열되며, 이 Access Rule이 적용되는 역할이 체크됩니다. 체크된 모듈 역할 중 하나 이상을 가진 모든 사용자가 규칙이 정의하는 접근 권한을 얻습니다.

#### 전체 선택 / 전체 해제

이 체크박스를 사용하여 모든 모듈 역할을 쉽게 선택하거나 해제할 수 있습니다.

### 접근 권한 탭{#access-rights}

**Access rights** 탭을 사용하면 선택한 모듈 역할을 가진 사용자에게 권한을 할당할 수 있습니다.

#### 생성 및 삭제 권한 섹션

##### 새 객체 생성 허용

**Allow creating new objects**가 체크되면 사용자가 이 Entity의 새 객체를 생성할 수 있습니다.

##### 기존 객체 삭제 허용

**Allow deleting existing objects**가 체크되면 사용자가 이 Entity의 기존 객체를 삭제할 수 있습니다.

삭제할 수 있는 객체 집합은 [XPath 제약 조건](#xpath-constraint)을 사용하여 제한할 수 있습니다.

#### 멤버 읽기 및 쓰기 권한 섹션

**Member read and write rights**는 Entity의 모든 멤버([Attribute](/refguide8/attributes/) 또는 [Association](/refguide8/associations/))에 대한 접근 권한을 정의합니다. 이러한 접근 권한은 사용자가 멤버의 값을 볼 수 있거나 편집할 수 있는지 나타냅니다. 이러한 권한이 적용되는 객체 집합은 [XPath 제약 조건](#xpath-constraint)을 사용하여 제한할 수 있습니다.

| 값 | 설명 |
| --- | --- |
| - | 사용자가 멤버의 값을 보거나 편집할 수 없습니다. |
| Read | 사용자가 이 멤버의 값을 볼 수 있지만 편집할 수 없습니다. |
| Read, Write | 사용자가 이 멤버의 값을 보고 편집할 수 있습니다. |

{{% alert color="info" %}}
계산되는 Attribute에는 *쓰기* 접근을 설정할 수 없습니다. 여기에는 *Autonumber* 유형의 Attribute와 Attribute 값이 **Calculated**로 설정된 Attribute가 포함됩니다.
{{% /alert %}}

**Default rights for new members**는 이 Entity의 새 Attribute 또는 Association에 적용되는 권한을 지정합니다.

**Set all to**를 사용하면 멤버에 대한 모든 접근 권한을 **None**, **Read** 또는 **Read, Write**로 빠르게 설정할 수 있습니다.

예를 들어, 고객은 할인을 볼 수 있지만 편집할 수 없습니다. 할인 Attribute의 접근 권한은 **Read**입니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-discount-read.png" class="no-border" >}}

### XPath 제약 조건 탭 {#xpath-constraint}

[XPath 제약 조건](/refguide8/xpath-constraints/)을 사용하여 Access Rule이 적용되는 객체 집합을 제한할 수 있습니다. XPath 제약 조건이 비어 있으면 규칙이 Entity의 모든 객체에 적용됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-xpath-tab.png" class="no-border" >}}

예를 들어, **Customer** Entity는 **User** Entity의 특수화입니다. **Order** Entity는 **Customer** Entity와 연관되어 있습니다.

로그인한 고객은 개인 주문을 볼 수 있지만 다른 고객의 주문을 볼 수 없습니다. 이것은 **Order** Entity의 Access Rule에서 다음 XPath 제약 조건을 사용하여 달성됩니다:

```java
[Module.Order_Customer = '[%CurrentUser%]']
```

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-order-xpath.png" class="no-border" >}}

이 XPath 제약 조건으로 인해 Access Rule은 고객이 현재 로그인한 사용자인 주문에만 적용됩니다.

{{% alert color="warning" %}}
XPath 제약 조건은 데이터베이스에 의해 적용되므로 영속 Entity에만 적용할 수 있습니다. 비영속 Entity에 대한 XPath 제약 조건 정의는 일관성 오류를 발생시킵니다.
{{% /alert %}}

---
title: "Entity"
url: /refguide8/entities/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Entity는 일반적으로 고객, 송장, CD 등과 같은 실제 세계 객체의 클래스를 나타냅니다. Entity의 인스턴스를 객체(Object)라고 합니다.

예를 들어, CD 'Exodus'를 나타내는 객체는 Entity 'CD'의 인스턴스일 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/example-entity.png" alt="Example of a CD entity" class="no-border" >}} 

Entity의 속성이나 특성은 [Attribute](/refguide8/attributes/)를 사용하여 설명됩니다. Attribute는 사람의 이름이나 생년월일과 같은 Entity에 대한 작은 정보를 나타냅니다.

예를 들어, 아래 표와 같은 CD 컬렉션이 있습니다:

| Title | Artist |
| --- | --- |
| How to Dismantle an Atomic Bomb | U2 |
| Exodus | Bob Marley and The Wailers |

표의 행은 CD입니다. 두 행의 타입은 *CD*이며 이것이 Entity 이름입니다. *U2* 밴드의 *How to Dismantle an Atomic Bomb*과 같은 특정 CD를 Entity *CD*의 객체라고 합니다. 제목과 아티스트와 같은 특성을 Attribute라고 합니다.

{{% alert color="info" %}}
[Data Hub](/refguide8/data-hub-pane/) 패널을 통해 프로젝트에서 다른 애플리케이션의 데이터 소스를 사용할 수도 있습니다. 이러한 데이터 소스는 도메인 모델에서 보라색 Entity 컨테이너로 표시되는 *외부 Entity(External Entity)*로 표현됩니다:
{{< figure src="/attachments/refguide8/modeling/domain-model/entities/virtual-entity-example.png" alt="Virtual Entity Example" class="no-border" >}} 

자세한 내용은 [External Entity](/refguide8/external-entities/)를 참조하십시오.
{{% /alert %}}

## Entity 유형 {#entity-types}

Entity 유형은 데이터가 처리되는 방식을 정의하며 두 가지 유형이 있습니다:

* [영속 Entity(Persistable Entity)](#persistable-entity) 
* [비영속 Entity(Non-persistable Entity)](#non-persistable-entity)

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/type-of-entities.jpg" class="no-border" >}}

### 영속 Entity {#persistable-entity}

Entity가 영속(Persistable)으로 선언되면 해당 Entity에 대한 데이터베이스 테이블이 생성됩니다. 이러한 유형의 Entity는 도메인 모델에서 *파란색*으로 표시됩니다. 영속 Entity에 대한 자세한 내용은 [영속성(Persistability)](/refguide8/persistability/)을 참조하십시오.

### 비영속 Entity {#non-persistable-entity}

비영속(Non-persistable) Entity는 런타임 메모리에 저장되며 데이터베이스에 커밋되지 않습니다. 이러한 유형의 Entity는 도메인 모델에서 *주황색*으로 표시됩니다. 비영속 Entity에 대한 자세한 내용은 [영속성(Persistability)](/refguide8/persistability/)을 참조하십시오.

## 속성 {#properties}

Entity 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/entity-properties.png"   width="300"  class="no-border" >}}

Entity 속성은 다음 섹션으로 구성됩니다:

* [접근 규칙(Access Rule)](#access-rules)
* [문서화](#documentation)
* [일반](#entities-general-properties)
* [시스템 멤버](#system-members)

{{% alert color="info" %}}
자세한 내용은 *External Entity*의 [속성](/refguide8/external-entities/#properties) 섹션을 참조하십시오.
{{% /alert %}}

### 접근 규칙 섹션 {#access-rules}

#### 접근 규칙

접근 규칙에 대한 자세한 내용은 [Access Rule](/refguide8/access-rules/)을 참조하십시오.

### 문서화 섹션 {#documentation}

#### 문서화 {#documentation-property}

이 기능을 사용하면 앱 내에서 Entity를 사용할 때 본인이나 다른 팀원에게 유용할 수 있는 Entity의 측면을 설명할 수 있습니다.

### 일반 섹션 {#entities-general-properties}

#### 이름 {#name}

이름 속성은 Entity의 이름을 정의합니다. 이 이름은 양식, Microflow, 쿼리, 제약 조건 등에서 Entity를 참조하는 데 사용됩니다.

이름은 모듈 도메인 모델 내에서만 고유하면 됩니다. 다른 모듈의 도메인 모델에 있는 경우 동일한 이름을 가진 두 개의 Entity를 가질 수 있습니다.

#### 일반화(Generalization) {#generalization}

Entity는 일반 Entity의 더 특수화된 버전일 수 있습니다. 이는 특수화된 Entity가 더 일반적인 Entity의 모든 Attribute, Association, 이벤트 및 기타 속성을 가짐을 의미합니다. 일반화(Generalization) 속성을 사용하여 Entity의 일반화가 되는 Entity를 지정할 수 있습니다. 예를 들어, **Car** Entity는 **Vehicle**을 일반화로 가질 수 있습니다.

일반화는 특정 Entity가 자신의 속성(Attribute, Association, 이벤트 및 기타 속성)을 파생하는 Entity를 지정합니다. Entity에 공통 Attribute가 있고 상위 Entity를 사용하여 일반화할 수 있을 때 사용됩니다. 객체 지향 프로그래밍(OOP)에서 일반화와 특수화에 대한 일반 용어를 **상속(Inheritance)**이라고 합니다.

특수화를 가진 Entity가 검색될 때(예: Data Grid 또는 Microflow에서), 해당 Entity의 특수화가 결과에 포함됩니다. 특수화가 검색되면 해당 일반화는 결과에 포함되지 않습니다. 이전 예를 사용하면, **Vehicle**이 검색되면 결과 집합에는 **Vehicle** 및 **Car** 유형의 객체가 포함됩니다. **Car**가 검색되면 **Car** 객체만 결과 집합에 포함됩니다.

이 기능의 중요한 용도 중 하나는 **System** 모듈에서 기능을 파생하는 것입니다(예: **Image** Entity에서의 이미지, **FileDocument** Entity에서의 파일).

예를 들어, **Student** Entity와 **Professor** Entity가 있고 일부 일반적인 속성을 가지고 있는 상황에서 이 속성을 사용할 수 있습니다. 둘 다 이름, 전화번호, 이메일 주소를 가지고 있으며 하나 이상의 과정의 멤버가 될 수 있습니다. 두 Entity는 **Member** Entity에서 *일반화*됩니다. 반대로, **Member** Entity는 **Student**와 **Professor** Entity에서 *특수화*됩니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/917900.png" class="no-border" >}}

자세한 내용 및 일반화와 Association 사용의 상대적 장점에 대한 논의는 [일반화 vs 1-1 Association](/refguide8/generalization-and-association/)을 참조하십시오.

#### 이미지 {#image}

이미지 속성을 사용하여 Entity에 이미지를 연결할 수 있습니다. 도메인 모델에서 이 이미지는 Entity 표현의 오른쪽 상단 모서리에 시각화됩니다. 이미지는 Entity 선택 창과 Connector에서도 볼 수 있습니다. 예를 들어, Data View에 대한 Entity를 선택할 때입니다.

#### 영속성(Persistable)

이 Entity의 인스턴스를 데이터베이스에 저장할 수 있는지 정의합니다. 자세한 내용은 [영속성(Persistability)](/refguide8/persistability/)을 참조하십시오.

### 시스템 멤버 속성{#system-members}

#### 'createdDate' 저장 

이 속성은 Entity에 시스템 Attribute 'createdDate'가 포함되는지 정의합니다. 이것은 객체가 생성된 날짜와 시간을 저장하는 **Date and time** 유형의 Attribute입니다. 이 Attribute의 값은 객체 생성 시 서버에 의해 자동으로 설정됩니다.

| 옵션 | 설명 |
| --- | --- |
| True | Entity에 시스템 Attribute 'createdDate'가 포함됩니다. |
| False *(기본값)* | Entity에 시스템 Attribute 'createdDate'가 포함되지 않습니다. |

{{% alert color="info" %}}
System.User Entity 또는 해당 특수화의 이 시스템 멤버를 Data Grid에서 직접 표시하는 것은 지원하지 않습니다.
{{% /alert %}}

#### 'changedDate' 저장 

이 속성은 Entity에 시스템 Attribute 'changedDate'가 포함되는지 정의합니다. 이것은 객체가 가장 최근에 변경된 날짜와 시간을 저장하는 **Date and time** 유형의 Attribute입니다.

| 옵션 | 설명 |
| --- | --- |
| True | Entity에 시스템 Attribute 'changedDate'가 포함됩니다. |
| False *(기본값)* | Entity에 시스템 Attribute 'changedDate'가 포함되지 않습니다. |

{{% alert color="info" %}}
'changedDate' 속성은 실제 변경이 있을 때만 업데이트됩니다. 동일한 Attribute 값으로 Entity를 단순히 변경하고 커밋하는 것은 'changedDate'를 업데이트하지 않습니다.
{{% /alert %}}

{{% alert color="info" %}}
System.User Entity 또는 해당 특수화의 이 시스템 멤버를 Data Grid에서 직접 표시하는 것은 지원하지 않습니다.
{{% /alert %}}

{{% alert color="warning" %}}
[`com.mendix.systemwideinterfaces.core.IMendixObject.setValue​(IContext context, java.lang.String memberName, java.lang.Object value)`](https://apidocs.rnd.mendix.com/8/runtime/com/mendix/systemwideinterfaces/core/IMendixObject.html#setValue(com.mendix.systemwideinterfaces.core.IContext,java.lang.String,java.lang.Object)) 메서드로 확인되는 호출을 사용하여 Java에서 객체를 직접 업데이트하는 경우(예: `Entity.setValue(IContext, String)`) `changedDate` 값이 업데이트되지 않습니다. Java를 사용할 때 `changedDate`를 업데이트해야 하는 경우 [`com.mendix.core.Core.change​(IContext context, IMendixObject object, java.util.Map<java.lang.String,​java.lang.String> changes)`](https://apidocs.rnd.mendix.com/8/runtime/com/mendix/core/Core.html#change(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.util.Map)) 메서드를 사용하십시오.
{{% /alert %}}

#### 'owner' 저장 

이 속성은 Entity에 시스템 Association 'owner'가 있는지 정의합니다. 이것은 객체를 생성한 사용자에 대한 참조를 (초기에) 저장하는 시스템 Entity 'User'에 대한 Association입니다. 이 Association은 객체 생성 시 서버에 의해 자동으로 설정됩니다.

| 옵션 | 설명 |
| --- | --- |
| True | Entity에 시스템 Association 'owner'가 있습니다. |
| False *(기본값)* | Entity에 시스템 Association 'owner'가 없습니다. |

#### 'changedBy' 저장 

이 속성은 Entity에 시스템 Association 'changedBy'가 있는지 정의합니다. 이것은 객체를 가장 최근에 변경한 사용자에 대한 참조를 저장하는 시스템 Entity 'User'에 대한 Association입니다.

| 옵션 | 설명 |
| --- | --- |
| True | Entity에 시스템 Association 'changedBy'가 있습니다. |
| False *(기본값)* | Entity에 시스템 Association 'changedBy'가 없습니다. |

## Entity 대화 상자의 탭{#dialog-box}

Entity 속성 대화 상자를 열어 Entity를 편집할 수도 있습니다.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/example-entity.png" alt="Example of a CD entity" class="no-border" >}}

위에서 설명한 속성 외에도 다음을 편집할 수 있는 탭도 있습니다:

* [Attribute](/refguide8/attributes/)
* [Association](/refguide8/associations/)
* [Validation Rule](/refguide8/validation-rules/)
* [Event Handler](/refguide8/event-handlers/)
* [Index](/refguide8/indexes/)
* [Access Rule](/refguide8/access-rules/)

각 탭에 대한 자세한 내용은 해당 상세 페이지를 참조하십시오.

---
title: "Operations"
url: /refguide8/operations/
---

## 소개

웹 서비스를 구성하는 실제 메서드를 제공합니다.

작업을 더 자세히 살펴보면 Microflow를 선택할 수 있는 것을 볼 수 있습니다. Microflow를 선택하면 다른 필드가 자동으로 채워집니다. 이러한 필드는 필요에 따라 변경할 수 있습니다.

작업에는 다음과 같은 속성이 있습니다:

## General

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/operations/16843884.png" class="no-border" >}}

### Name

WSDL에서 작업의 이름입니다.

### Microflow

이 웹 서비스가 호출될 때 실행될 Microflow를 정의합니다.

### Documentation

작업을 설명하며 WSDL에 포함됩니다.

## Parameters

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/operations/16843879.png" class="no-border" >}}

### Microflow Parameter

Microflow에서 매개변수의 이름을 정의합니다.

### Type

매개변수의 유형을 정의합니다. 예를 들어 Vehicle Entity의 List입니다.

### Optional

이 매개변수가 웹 서비스 호출에서 선택 사항인지 정의합니다.

### Nillable

이 매개변수가 웹 서비스 호출에서 nil 값을 가질 수 있는지 정의합니다.

### Operation Parameter

웹 서비스 호출에서 매개변수의 이름을 정의합니다. 처음에는 Microflow 매개변수 이름에서 복사되지만 수정할 수 있습니다.

### Operation Object Name

매개변수가 목록일 때 사용할 수 있으며 목록의 객체 이름을 지정하는 데 사용할 수 있습니다.

{{% alert color="info" %}}
CountCarsAndHp 작업입니다. VehicleList라고 불리는 Vehicle의 비선택적 목록을 매개변수로 받으며 Vehicle이라는 객체로 구성됩니다. 이 정보는 Microflow 및 Entity 모델을 기반으로 하지만 수정할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/operations/918221.png" class="no-border" >}}

CountCarsAndHp 작업에 연결된 Microflow입니다. Vehicle Entity의 객체 목록을 입력으로 받아 해당 차량의 수와 총 마력을 보유하는 객체를 반환합니다.
{{% /alert %}}

### Exposed Attributes and Associations

매개변수 탭에서 'Select...'를 클릭하면 매개변수로 전달되는 Entity의 개별 멤버를 선택할 수 있습니다. 도구 모음 버튼을 사용하면 번거로운 작업을 빠르게 수행할 수 있습니다.

| Collapse all | 전체 트리를 축소하여 루트 노드만 표시합니다. |
| --- | --- |
| Check all | 확장된 모든 노드와 보이는 리프 노드 옆의 체크박스를 선택합니다. 축소된 노드와 그 하위 항목은 영향을 받지 않습니다. |
| Uncheck all | 확장된 모든 노드와 보이는 리프 노드 옆의 체크박스를 선택 해제합니다. 축소된 노드와 그 하위 항목은 영향을 받지 않습니다. |
| All optional | 확장된 모든 노드와 보이는 리프 노드의 Optional 상자를 선택합니다. |
| All non-optional | 확장된 모든 노드와 보이는 리프 노드의 Optional 상자를 선택 해제합니다. |
| All nillable | 확장된 모든 노드와 보이는 리프 노드의 Nillable 상자를 선택합니다. |
| All non-nillable | 확장된 모든 노드와 보이는 리프 노드의 Nillable 상자를 선택 해제합니다. |

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/operations/16843878.png" class="no-border" >}}

여기에서 Entity의 어떤 멤버를 전달할 수 있는지 및/또는 선택 사항인지 또는 nillable인지 선택하고 이름을 설정할 수 있습니다. 루트 요소에서 Optional 또는 Nillable을 선택하는 것은 효과가 없습니다. 이러한 값은 작업 편집기에서 설정해야 합니다.
{{% /alert %}}

{{% alert color="info" %}}
WSDL의 XML 요소 순서는 정의상 도메인 모델에서 Entity의 속성 순서를 반영하지 않습니다. 대화 상자의 멤버 순서는 WSDL의 요소 순서와 동일합니다(Entity의 속성 순서와 다를 수 있음). 이를 통해 Mendix에서 노출되는 WSDL 계약에 대한 더 나은 개요를 제공합니다. 멤버 대화 상자에서 보이는 구조는 WSDL의 구조를 반영합니다.

Entity의 새 속성은 WSDL에 이미 있는 멤버 *아래에* 새 요소로 나타납니다. 이렇게 하면 WSDL 계약이 깨지는 것을 방지할 수 있습니다. XML *Sequence* 컨테이너 내에 새 XML 요소를 삽입하면 WSDL에 대해 엄격하게 유효성을 검사하는 기존 웹 서비스 소비자가 깨질 수 있기 때문입니다.
{{% /alert %}}

{{% alert color="info" %}}
System.User Entity(또는 그 특수화)의 Password(해시된 문자열) 속성을 노출하면 누군가 원래 일반 텍스트 비밀번호를 얻기 위해 무차별 대입 공격을 할 위험이 있다는 경고가 나타납니다. 강력한 해싱 알고리즘(가급적 'BCrypt')을 사용하면 위험이 상당히 줄어듭니다. 해싱 알고리즘은 Project settings에서 설정할 수 있습니다.
{{% /alert %}}

## Return Type

이 섹션은 Microflow의 반환 유형과 XML로 다시 변환되는 방법에 관한 것입니다.

### Type

Microflow에서 반환할 객체의 종류를 정의합니다. 반환된 유형이 복합 유형(Entity 모델의 항목)인 경우 Members 버튼을 사용하여 매개변수와 동일한 방식으로 반환할 멤버를 선택할 수 있습니다.

### Name

반환 유형의 이름입니다. 이는 웹 서비스 호출에서 생성되는 XML의 출력 요소 이름을 결정합니다.

### Optional

반환 값이 비어 있는 경우 XML의 요소를 생략할 수 있는지 결정합니다.

### Nillable

반환 값이 비어 있는 경우 XML의 요소를 nil로 전송할지 결정합니다.

Optional과 Nillable을 동시에 선택할 수 없습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/operations/16843880.png" class="no-border" >}}

여기에서 ReturnsOrder 작업의 반환 유형으로 설정된 선택적 Order Entity를 볼 수 있습니다.

{{% /alert %}}

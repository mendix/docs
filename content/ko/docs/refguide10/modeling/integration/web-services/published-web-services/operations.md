---
title: "Operations"
url: /refguide10/operations/
---

## 소개

이 문서에서는 웹 서비스를 구성하는 메서드를 제공합니다.

오퍼레이션을 더 자세히 살펴보면 마이크로플로우(Microflow)를 선택할 수 있음을 알 수 있습니다. 마이크로플로우를 선택하면 다른 필드가 자동으로 채워집니다. 필요에 따라 변경할 수 있습니다.

오퍼레이션에는 아래에 설명된 속성이 있습니다.

## General

{{< figure src="/attachments/refguide10/modeling/integration/web-services/operations/16843884.png" class="no-border" >}}

### Name

WSDL에서 오퍼레이션이 호출되는 이름입니다.

### Microflow

이 웹 서비스가 호출될 때 실행될 마이크로플로우를 정의합니다.

### Documentation

오퍼레이션을 설명하며 WSDL에 포함됩니다.

## Parameters

{{< figure src="/attachments/refguide10/modeling/integration/web-services/operations/16843879.png" class="no-border" >}}

### Microflow Parameter

마이크로플로우에서 매개변수의 이름을 정의합니다.

### Type

매개변수의 유형을 정의합니다(예: Vehicles 엔티티의 목록).

### Optional

이 매개변수가 웹 서비스 호출에서 선택 사항인지 정의합니다.

### Nillable

이 매개변수가 웹 서비스 호출에서 nil 값을 가질 수 있는지 정의합니다.

### Operation Parameter

웹 서비스 호출에서 매개변수의 이름을 정의합니다. 처음에는 마이크로플로우 매개변수 이름에서 복사되지만 수정할 수 있습니다.

### Operation Object Name

매개변수가 목록인 경우 사용할 수 있으며, 목록의 객체 이름을 지정하는 데 사용할 수 있습니다.

{{% alert color="info" %}}
`CountCarsAndHp` 오퍼레이션은 비선택적 차량 목록을 매개변수로 받으며, 이 매개변수는 *VehicleList*라고 하며 *Vehicle*이라는 객체로 구성됩니다. 이 정보는 마이크로플로우 및 엔티티 모델을 기반으로 하지만 수정할 수 있습니다.
{{% /alert %}}

{{< figure src="/attachments/refguide10/modeling/integration/web-services/operations/918221.png" class="no-border" >}}

`CountCarsAndHp` 오퍼레이션에 첨부된 마이크로플로우입니다. Vehicle 엔티티의 객체 목록을 입력으로 받아 해당 차량의 수와 총 마력을 보유하는 객체를 반환합니다.

### 노출된 속성 및 연관

**Parameter** 탭에서 **Select**를 클릭하면 매개변수로 전달되는 엔티티의 개별 멤버를 선택할 수 있습니다. 도구 모음 버튼은 그렇지 않으면 어려울 수 있는 작업을 빠르게 수행하는 데 도움이 됩니다.

| Collapse all | 전체 트리를 접어 루트 노드만 보이게 합니다. |
| --- | --- |
| Check all | 확장된 모든 노드와 보이는 리프 노드 옆의 상자를 체크합니다. 접힌 노드와 그 하위 노드는 영향을 받지 않습니다. |
| Uncheck all | 확장된 모든 노드와 보이는 리프 노드 옆의 상자를 체크 해제합니다. 접힌 노드와 그 하위 노드는 영향을 받지 않습니다. |
| All optional | 확장된 모든 노드와 보이는 리프 노드에서 Optional 상자를 체크합니다. |
| All non-optional | 확장된 모든 노드와 보이는 리프 노드에서 Optional 상자를 체크 해제합니다. |
| All nillable | 확장된 모든 노드와 보이는 리프 노드에서 Nillable 상자를 체크합니다. |
| All non-nillable | 확장된 모든 노드와 보이는 리프 노드에서 Nillable 상자를 체크 해제합니다. |

{{< figure src="/attachments/refguide10/modeling/integration/web-services/operations/16843878.png" class="no-border" >}}

여기에서 엔티티의 어떤 멤버가 전달될 수 있는지 및/또는 선택 사항 또는 nil 가능한지, 그리고 이름을 설정할 수 있습니다. 루트 요소에서 **Optional** 또는 **Nillable**을 체크해도 효과가 없으므로 오퍼레이션 편집기에서 이 값을 설정하세요.

{{% alert color="info" %}}
WSDL에서 XML 요소의 순서는 정의상 도메인 모델의 엔티티에서 속성의 순서를 반영하지 않습니다. 대화 상자에서 멤버의 순서는 WSDL에서 요소의 순서와 동일합니다(엔티티의 속성 순서와 다를 수 있습니다). 이를 통해 Mendix에서 노출되는 WSDL 계약에 대한 더 나은 개요를 제공합니다. 멤버 대화 상자에서 보이는 구조는 WSDL의 구조를 반영합니다.

엔티티의 새 속성은 WSDL에 이미 있는 멤버 아래에 새 요소로 나타납니다. 이렇게 하면 WSDL 계약이 깨지는 것을 방지합니다. XML Sequence 컨테이너 내부에 새 XML 요소를 삽입하면 WSDL에 대해 엄격하게 검증하는 기존 웹 서비스 소비자가 깨질 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
`System.User` 엔티티(또는 그 특수화)의 Password (해시된 문자열) 속성을 노출하면 누군가가 원래 평문 비밀번호를 얻기 위해 무차별 대입 공격을 수행할 위험이 있다는 경고가 나타납니다. 강력한 해싱 알고리즘(가급적 'BCrypt')을 사용하면 위험이 상당히 줄어듭니다. 해싱 알고리즘은 앱 설정에서 설정할 수 있습니다.
{{% /alert %}}

## Return Type

이 섹션은 마이크로플로우의 반환 유형과 이를 XML로 다시 변환하는 방법에 관한 것입니다.

### Type

마이크로플로우에서 어떤 종류의 객체가 반환될지 정의합니다. 반환된 유형이 복잡한 유형(엔티티 모델의 무언가)인 경우 **Members** 버튼을 사용하여 매개변수와 동일한 방식으로 반환될 멤버를 선택할 수 있습니다.

### Name

반환 유형의 이름입니다. 이것은 웹 서비스 호출에서 생성되는 XML의 출력 요소 이름을 결정합니다.

### Optional

반환 값이 비어 있으면 XML에서 요소를 생략할 수 있는지 여부를 결정합니다.

### Nillable

반환 값이 비어 있으면 XML에서 요소가 nil로 전송되는지 여부를 결정합니다.

Optional과 Nillable은 둘 다 체크할 수 없습니다.

{{< figure src="/attachments/refguide10/modeling/integration/web-services/operations/16843880.png" class="no-border" >}}

여기에서 ReturnsOrder 오퍼레이션의 반환 유형으로 설정된 선택적 Order 엔티티를 볼 수 있습니다.

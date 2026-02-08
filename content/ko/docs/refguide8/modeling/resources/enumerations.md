---
title: "열거형"
url: /refguide8/enumerations/
weight: 40
aliases:
    - /refguide8/enumeration-values.html
    - /refguide8/enumeration-values
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <enum-value-properties> below is mapped, so it should not be removed or changed.
---

## 소개

Enumeration은 미리 정의된 값의 목록을 정의합니다. Enumeration은 열거형 속성(Attribute) 타입에 사용됩니다. 예를 들어, 주문의 상태는 *Open*, *Closed* 또는 *In Progress*일 수 있습니다. 따라서 주문 상태에 대한 Enumeration은 *Open*, *Closed*, *In_Progress*의 세 가지 값으로 구성됩니다. 

Enumeration은 하나 이상의 [열거형 값](/refguide8/enumerations/#enum-properties)으로 구성됩니다. 각 값은 하나의 옵션을 나타냅니다. 열거형 타입의 속성(Attribute)은 초기화되지 않은 상태를 나타낼 수도 있습니다. 예를 들어, 주문에 상태를 할당하지 않으면 주문 상태는 *empty*가 됩니다. 

## Enumeration 생성  

새 Enumeration을 생성하려면 다음을 수행하십시오: 

1. [Project Explorer](/refguide8/project-explorer/)에서 Enumeration을 추가할 모듈 또는 폴더를 마우스 오른쪽 버튼으로 클릭하고 작업 목록에서 **Add other** > **Enumeration**을 선택하십시오:

    {{< figure src="/attachments/refguide8/modeling/resources/enumerations/add-enumeration.png" class="no-border" >}}

2. **Add Enumeration** 대화 상자에서 Enumeration의 이름을 입력하십시오.
3. **Enumeration** 대화 상자에서 **New**를 클릭하여 열거형 값을 생성하십시오:

    1. 열거형 값의 **Name**과 **Caption**을 입력하십시오. 필요한 경우 **Image**를 설정할 수 있습니다. Enumeration 속성에 대한 자세한 정보는 [Enumeration 속성](#enum-properties) 섹션을 참조하십시오. <br />

        {{< figure src="/attachments/refguide8/modeling/resources/enumerations/add-enum-value.png" class="no-border" >}}

    1. **OK**를 클릭하여 열거형 값을 저장하십시오.

4. 생성하려는 모든 열거형 값에 대해 3단계를 반복하십시오.
5. **OK**를 클릭하여 Enumeration을 저장하십시오. 

프로젝트에 새 Enumeration이 추가되었습니다. 프로젝트 내 다양한 열거형 타입 속성(Attribute)에 동일한 Enumeration을 사용할 수 있습니다. 

## Enumeration 속성 {#enum-properties}

Enumeration에는 다음과 같은 속성이 있습니다:

* **Name** – Enumeration의 이름
* **Enumeration values** – Enumeration에는 하나 이상의 열거형 값이 있습니다. 각 값은 하나의 옵션을 나타냅니다. 열거형 값 및 해당 속성에 대한 자세한 정보는 [열거형 값 속성](#enum-value-properties) 섹션을 참조하십시오.

    {{< figure src="/attachments/refguide8/modeling/resources/enumerations/enumeration-properties.png" class="no-border" >}}

### 열거형 값 속성 {#enum-value-properties}

열거형 값 속성은 아래에 설명되어 있습니다:

* **Caption** – 열거형 값의 캡션은 최종 사용자가 이 열거형 값에 대해 보는 텍스트입니다. 이는 번역 가능한 텍스트입니다. 자세한 정보는 [Language Menu](/refguide8/translatable-texts/)를 참조하십시오. 

* **Name** – 열거형 값의 이름은 프로젝트에서 열거형 값을 참조하는 데 사용되는 기술적 이름입니다.

    {{% alert color="warning" %}}열거형 값의 이름은 데이터베이스에 열거형 값을 저장하는 데도 사용됩니다. 따라서 열거형 값의 **Name**을 변경하는 것은 허용되지 않습니다. 변경하면 데이터베이스의 데이터가 무효화됩니다. 그러나 **Caption**은 변경할 수 있으며, 이 텍스트가 최종 사용자에게 표시됩니다.<br />열거형 값의 이름은 공백과 특수 문자가 없는 기술적 이름이어야 합니다. 열거형 값의 캡션에는 모든 문자를 사용할 수 있습니다. 예를 들어, 열거형 값의 이름이 *In_Progress*이고 캡션이 *In Progress*일 수 있습니다.{{% /alert %}}

* **Image** – 열거형 값에 대해 선택한 이미지는 데이터 그리드 열에 표시할 수 있습니다. 이 경우 열의 열거형 형식은 *Image*여야 합니다. 데이터 그리드 열에 대한 자세한 정보는 [Grid Columns](/refguide8/columns/)를 참조하십시오.

## 추가 정보

* [속성(Attribute)](/refguide8/attributes/)
* [엔티티(Entity)](/refguide8/entities/)

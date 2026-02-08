---
title: "입력 위젯"
url: /refguide8/input-widgets/
weight: 30
description: "페이지에 추가하여 객체의 속성을 보고 편집할 수 있는 위젯입니다."
---

## 소개

입력 위젯은 최종 사용자에게 데이터를 표시하고, 선택적으로 데이터를 편집할 수 있게 합니다.

입력 위젯은 기능을 수행하기 위해 Entity의 속성(Attribute)에 연결되어야 합니다. 따라서 해당 Entity 유형의 객체를 포함하는 데이터 위젯 내에 배치해야 합니다.

예를 들어, 입력 위젯은 [Data View](/refguide8/data-view/) 내에 배치할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/data-view.png" alt="Data view containing widgets" class="no-border" >}}

여러 종류의 입력 위젯이 있으며, 서로 다른 [데이터 유형](/refguide8/data-types/) 및 서로 다른 유형의 [연관(Association)](/refguide8/associations/)에 사용됩니다. 입력 위젯 카테고리에는 다음 위젯이 포함됩니다:

* [Text Box](/refguide8/text-box/) – *숫자* 또는 *문자열 유형* 속성의 텍스트 데이터를 표시하고, 선택적으로 최종 사용자가 추가하거나 편집할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/text-box.png" alt="Text box containing Name attribute" class="no-border" >}}

* [Text Area](/refguide8/text-area/) – *문자열* 속성의 긴 텍스트 데이터를 표시하고, 선택적으로 최종 사용자가 추가하거나 편집할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/text-area.png" alt="Text area containing notes attribute" class="no-border" >}}

* [Drop-Down](/refguide8/drop-down/) – *열거형(Enumeration)* 속성의 현재 값을 표시하고, 선택적으로 최종 사용자가 옵션 목록에서 선택할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/drop-down.png" alt="Drop down containing region attribute" class="no-border" >}}

* [Checkbox](/refguide8/check-box/) – *Boolean* 속성의 현재 값을 표시하고, 선택적으로 최종 사용자가 `true` 또는 `false`로 설정할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/check-box.png" alt="Checkbox showing personal attribute" class="no-border" >}}

* [Radio Buttons](/refguide8/radio-buttons/) – *열거형(Enumeration)* 속성의 옵션 목록이나 *Boolean* 속성의 값에서 현재 값을 표시하고, 선택적으로 최종 사용자가 선택할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/radio-buttons.png" alt="Radio buttons showing the preferred contact time and personal attributes" class="no-border" >}}

* [Date Picker](/refguide8/date-picker/) – *날짜 및 시간* 속성을 표시하고, 선택적으로 최종 사용자가 캘린더에서 선택할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/date-picker.png" alt="Date picker showing the last contacted attribute" class="no-border" >}}

* [Reference Selector](/refguide8/reference-selector/) – 연관된 객체의 *문자열*, *숫자*, *열거형* 또는 *날짜 및 시간* 속성 값을 사용하여 *일대일* 또는 *일대다* 연관(Association)을 표시하고, 선택적으로 최종 사용자가 선택할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/reference-selector.png" alt="Reference selector showing company name attribute of associated company" class="no-border" >}}

* [Reference Set Selector](/refguide8/reference-set-selector/) – 하나 이상의 속성과 함께 목록을 표시하고, 선택적으로 최종 사용자가 *다대다* 연관(Association)을 통해 연결된 연관 객체를 추가하거나 제거할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/reference-set-selector.png" alt="Reference set selector showing details of associated products" class="no-border" >}}

* [Input Reference Set Selector](/refguide8/input-reference-set-selector/) – 연관 객체의 속성을 표시하고, 선택적으로 사용자가 *다대다* 연관(Association)을 통해 연결된 연관 객체를 추가하거나 제거할 수 있게 합니다:

    {{< figure src="/attachments/refguide8/modeling/pages/input-widgets/input-reference-set-selector.png" alt="Input reference set selector showing the name attribute of associated products" class="no-border" >}}

{{% alert color="info" %}}
데이터 유형에 대한 자세한 내용은 [데이터 유형](/refguide8/data-types/)을 참조하세요.

연관(Association) 및 속성에 대한 자세한 내용은 [연관](/refguide8/associations/)을 참조하세요.
{{% /alert %}}

## 기본 기능 수행

{{% snippet file="/static/_includes/refguide8/performing-basic-functions-widgets.md" %}}

## 추가 참조

* [페이지](/refguide8/page/)
* [페이지](/refguide8/pages/)
* [데이터 유형](/refguide8/data-types/)
* [연관](/refguide8/associations/)

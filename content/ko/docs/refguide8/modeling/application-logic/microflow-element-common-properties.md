---
title: "공통 속성"
url: /refguide8/microflow-element-common-properties/
weight: 110
---

## 소개

이 문서에서는 Microflow 편집기에서 많은 요소가 공유하는 공통 속성을 설명합니다.

{{% alert color="warning" %}}
Microflow 또는 Nanoflow의 모든 요소가 이러한 속성을 모두 갖고 있는 것은 아닙니다.
{{% /alert %}}

Microflow 및 Nanoflow의 공통 속성은 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflow-element-common-properties/microflow-element-common-properties.png" alt="Common properties in properties pane"   width="30%"  class="no-border" >}}

* [캡션](#caption)
* [캡션 자동 생성](#auto-generate-caption)
* [배경색](#color)
* [오류 처리 유형](#error-handling)

## 캡션 {#caption}

**Caption**은 이 요소에서 어떤 작업이 수행되는지를 설명합니다. Microflow 요소에 표시되어 어노테이션을 추가하지 않고도 Microflow를 더 쉽게 읽고 이해할 수 있도록 합니다. 여기에 값을 입력하면 [캡션 자동 생성](#auto-generate-caption)이 자동으로 **No**로 설정됩니다.

## 캡션 자동 생성 {#auto-generate-caption}

**Auto-generate caption** 속성은 액티비티 유형에 따라 캡션이 자동으로 생성되는지 여부를 지정합니다.

| 옵션 | 설명 |
| --- | --- |
| Yes  *(기본값)* | 액티비티의 캡션이 Studio Pro에 의해 생성됩니다. |
| No | 직접 편집할 수 있는 **Caption** 속성의 값이 사용됩니다. |

## 배경색 {#color}

**Background color** 속성을 사용하면 각 액티비티에 대해 개별적으로 배경색을 선택할 수 있습니다. 색상은 실행에 영향을 미치지 않으며, 플로우에서 요소를 빠르게 식별하는 데만 사용됩니다. 예를 들어, [오류 핸들러](/refguide8/error-event/#errorhandlers)가 있는 액티비티를 빨간색으로 만들어 쉽게 식별할 수 있습니다.

**Project Settings** > [Miscellaneous](/refguide8/project-settings/#miscellaneous)에서 특정 유형의 모든 액티비티에 대한 기본 색상을 선택할 수도 있습니다. 특정 유형의 모든 액티비티에 대한 기본 색상은 Microflow 액티비티를 마우스 오른쪽 버튼으로 클릭하고 컨텍스트 메뉴에서 **Set as default color**를 선택하여 변경할 수도 있습니다. 이렇게 하면 현재 액티비티의 색상이 동일한 유형의 모든 액티비티에 대한 기본 색상이 됩니다. 액티비티 유형의 기본 색상을 변경하고 앱에 다른 개별 배경색이 지정된 동일한 유형의 다른 액티비티가 있는 경우, 이러한 개별 색상을 새 기본 색상으로 덮어쓸지 여부를 묻는 메시지가 표시됩니다.

## 오류 처리 유형 {#error-handling}

**Error handling type**에서 액티비티의 오류 처리 유형을 선택할 수 있습니다. 사용 가능한 옵션과 그 효과에 대한 자세한 내용은 *Microflow*의 [오류 핸들러](/refguide8/error-event/#errorhandlers) 섹션을 참조하십시오.

## 더 읽기

* [Microflow](/refguide8/microflows/)
* [Nanoflow](/refguide8/nanoflows/)

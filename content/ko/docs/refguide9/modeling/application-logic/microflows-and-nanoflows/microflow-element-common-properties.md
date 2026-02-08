---
title: "공통 속성"
url: /refguide9/microflow-element-common-properties/
weight: 110
---

## 소개

이 문서에서는 Microflow 편집기에서 많은 요소가 공유하는 공통 속성을 설명합니다.

{{% alert color="warning" %}}
Microflow 또는 Nanoflow의 모든 요소에 이러한 속성이 모두 있는 것은 아닙니다.
{{% /alert %}}

다음은 Microflow 및 Nanoflow의 공통 속성입니다:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflow-element-common-properties/microflow-element-common-properties.png" alt="Common properties in properties pane"   width="30%"  class="no-border" >}}

* [캡션](#caption)
* [캡션 자동 생성](#auto-generate-caption)
* [배경 색상](#color)
* [오류 처리 유형](#error-handling)
* [비활성화됨](#disabled)

## 캡션 {#caption}

**캡션**은 이 요소에서 일어나는 일을 설명합니다. Annotation을 추가하지 않고도 Microflow를 더 쉽게 읽고 이해할 수 있도록 Microflow 요소에 표시됩니다. 여기에 값을 입력하면 [캡션 자동 생성](#auto-generate-caption)이 자동으로 **아니요**로 설정됩니다.

## 캡션 자동 생성 {#auto-generate-caption}

**캡션 자동 생성** 속성은 Activity 유형에 따라 캡션이 자동으로 생성되는지 지정합니다.

| 옵션 | 설명 |
| --- | --- |
| 예  *(기본값)* | Activity의 캡션이 Studio Pro에 의해 생성됩니다. |
| 아니요 | 직접 편집할 수 있는 **캡션** 속성의 값이 사용됩니다. |

## 배경 색상 {#color}

**배경 색상** 속성을 사용하면 각 Activity에 대해 개별적으로 배경 색상을 선택할 수 있습니다. 색상은 실행에 영향을 미치지 않으며, 흐름에서 요소를 빠르게 찾는 데만 사용됩니다. 예를 들어, [오류 핸들러](/refguide9/error-handling-in-microflows/#errorhandlers)가 있는 Activity를 빨간색으로 만들어 쉽게 식별할 수 있습니다.

**앱 설정** > [기타](/refguide9/app-settings/#miscellaneous)에서 특정 유형의 모든 Activity에 대한 기본 색상을 선택할 수도 있습니다. 특정 유형의 모든 Activity에 대한 기본 색상은 Microflow Activity를 마우스 오른쪽 버튼으로 클릭하고 컨텍스트 메뉴에서 **Set as default color**를 선택하여 변경할 수도 있습니다. 이렇게 하면 현재 Activity의 색상이 동일한 유형의 모든 Activity에 대한 기본 색상이 됩니다. Activity 유형의 기본 색상을 변경하고 앱에 다른 개별 배경 색상이 지정된 해당 유형의 다른 Activity가 있는 경우, 이 개별 색상을 새 기본 색상으로 덮어쓸지 묻는 메시지가 표시됩니다.

## 오류 처리 유형 {#error-handling}

**오류 처리 유형**에서 Activity의 오류 처리 유형을 선택할 수 있습니다. 사용 가능한 옵션 및 효과에 대한 자세한 내용은 *Microflow의 오류 처리*의 [오류 처리 옵션](/refguide9/error-handling-in-microflows/#errorhandlers) 섹션을 참조하십시오.

## 비활성화됨 {#disabled}

**비활성화됨** 속성을 사용하면 흐름에서 Activity를 건너뛸 수 있습니다.

| 옵션 | 설명 | 
| --- |--- |
| 예 | Activity가 흐리게 표시되고 오류가 무시됩니다. Microflow를 실행할 때 비활성화된 Activity는 건너뛰어지며, 디버깅 중에도 마찬가지입니다. |
| 아니요 *(기본값)* | Activity가 평소대로 작동합니다. | 

## 더 읽기

* [Microflow](/refguide9/microflows/)
* [Nanoflow](/refguide9/nanoflows/)

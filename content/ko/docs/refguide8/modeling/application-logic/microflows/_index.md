---
title: "Microflow"
url: /refguide8/microflows/
weight: 10
description: "Microflow에서 사용할 수 있는 모든 요소에 대한 개요를 제공합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Microflow를 사용하면 애플리케이션의 로직을 표현할 수 있습니다. Microflow는 객체 생성 및 업데이트, 페이지 표시, 선택 등의 액션을 수행할 수 있습니다. 전통적으로 텍스트 프로그램 코드로 작성되는 것을 시각적으로 표현하는 방법입니다.

Microflow는 런타임 서버에서 실행되므로 오프라인 앱에서는 사용할 수 없습니다. 오프라인 앱 내의 애플리케이션 로직에 대해서는 [Nanoflow](/refguide8/nanoflows/)를 참조하십시오.

이 페이지는 Microflow를 구성하는 요소와 Microflow 내에서의 시각적 표현에 대한 요약입니다. 또한 Microflow 편집 시 [키보드 지원](#keyboard)에 대해서도 다룹니다.

{{% alert color="info" %}}
Microflow 자체의 속성에 대해서는 [Microflow 속성](/refguide8/microflow/)을 참조하십시오.
{{% /alert %}}

## Microflow 표기법

Microflow의 그래픽 표기법은 [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)(BPMN)을 기반으로 합니다. BPMN은 워크플로우에서 비즈니스 프로세스를 그리기 위한 표준화된 그래픽 표기법입니다.

Microflow는 요소로 구성됩니다. 아래는 모든 요소의 카테고리별 개요입니다. 다음 카테고리가 사용됩니다:

* [이벤트](#events)는 Microflow의 시작 및 종료 지점과 루프의 특수 작업을 나타냅니다.
* [플로우](#flows)는 요소 간의 연결을 형성합니다.
* [Decision](#decisions)은 선택을 하고 다른 경로를 다시 병합하는 것을 처리합니다.
* [액티비티](#activities)는 Microflow에서 실행되는 액션입니다.
* [루프](/refguide8/loop/)는 객체 목록을 반복하는 데 사용됩니다.
* [파라미터](#parameter)는 Microflow의 입력으로 사용되는 데이터입니다.
* [어노테이션](#annotation)은 Microflow에 주석을 넣는 데 사용할 수 있는 요소입니다.

### 이벤트{#events}

이벤트는 Microflow의 시작 및 종료 지점과 루프의 특수 작업을 나타냅니다.

| 그래픽 | 이름 | 설명 |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/start-event.png" link="/refguide8/start-event/" class="no-border" >}} | [시작 이벤트](/refguide8/start-event/) | 시작 이벤트는 Microflow의 시작 지점입니다. Microflow에는 하나의 시작 이벤트만 있을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/end-event.png" link="/refguide8/end-event/" class="no-border" >}} | [종료 이벤트](/refguide8/end-event/) | 종료 이벤트는 Microflow가 중지되는 위치를 정의합니다. Microflow의 반환 유형에 따라 일부 경우 값을 지정해야 합니다. 종료 이벤트가 두 개 이상 있을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/error-event.png" link="/refguide8/error-event/" class="no-border" >}} | [오류 이벤트](/refguide8/error-event/) | 오류 이벤트는 Microflow가 중지되고 이전에 발생한 오류를 throw하는 위치를 정의합니다. Microflow를 호출할 때 Microflow 내에서 오류가 발생했는지 여부를 알고 싶을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/continue-event.png" link="/refguide8/continue-event/" class="no-border" >}} | [Continue 이벤트](/refguide8/continue-event/) | Continue 이벤트는 루프의 현재 반복을 중지하고 다음 반복을 계속하는 데 사용됩니다. Continue 이벤트는 [루프](/refguide8/loop/) 내에서만 사용할 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/break-event.png" link="/refguide8/break-event/" class="no-border" >}} | [Break 이벤트](/refguide8/break-event/) | Break 이벤트는 객체 목록에 대한 반복을 중지하고 루프 이후의 나머지 플로우를 계속하는 데 사용됩니다. Break 이벤트는 [루프](/refguide8/loop/) 내에서만 사용할 수 있습니다. |

### 플로우{#flows}

플로우는 요소 간의 연결을 형성합니다.

| 그래픽 | 이름 | 설명 |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/sequence-flow.png" link="/refguide8/sequence-flow/" class="no-border" >}} | [시퀀스 플로우](/refguide8/sequence-flow/) | 시퀀스 플로우는 이벤트, 액티비티, Decision 및 Merge를 서로 연결하는 화살표입니다. 이들은 함께 Microflow 내의 실행 순서를 정의합니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation-flow.png" link="/refguide8/annotation/#annotation-flow" class="no-border" >}} | [어노테이션 플로우](/refguide8/annotation/#annotation-flow) | 어노테이션을 다른 요소에 연결하는 데 사용할 수 있는 연결입니다. |

### Decision {#decisions}

Decision은 선택을 하고 다른 경로를 다시 병합하는 것을 처리합니다.

| 그래픽                                                      | 이름                                         | 설명                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/decision.png" link="/refguide8/decision/" class="no-border" >}} | [Decision](/refguide8/decision/)                         | Decision은 조건에 따라 결정을 내리고 나가는 플로우 중 하나만 따릅니다. Microflow에는 병렬 실행이 없습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/object-type-decision.png" link="/refguide8/object-type-decision/" class="no-border" >}} | [객체 유형 Decision](/refguide8/object-type-decision/) | 객체 유형 Decision은 선택된 객체의 [특수화](/refguide8/entities/)에 따라 선택을 하는 요소입니다. [Cast Object](/refguide8/cast-object/) 액션을 사용하여 특수화된 객체에 이름을 지정할 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/merge.png" link="/refguide8/merge/" class="no-border" >}} | [Merge](/refguide8/merge/)                               | Merge는 여러 시퀀스 플로우를 하나로 결합하는 데 사용할 수 있습니다. Microflow에서 선택이 이루어지고 이후에 공통 작업을 수행해야 하는 경우 Merge를 사용하여 두 개(또는 그 이상)의 경로를 결합할 수 있습니다. |

### 액티비티{#activities}

[액티비티](/refguide8/activities/)는 Microflow에서 실행되는 액션입니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/activity.png" alt="Activity" class="no-border" >}}

### 루프 {#loop}

[루프](/refguide8/loop/)는 객체 목록을 반복하는 데 사용됩니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/loop.png" alt="Loop" class="no-border" >}}

모든 객체에 대해 루프 내부의 플로우가 실행됩니다. 루프 액티비티에는 시작 및 종료 이벤트를 제외한 Microflow에서 사용되는 모든 요소가 포함될 수 있습니다.

### 파라미터 {#parameter}

[파라미터](/refguide8/parameter/)는 Microflow의 입력으로 사용되는 데이터입니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/parameter.png" alt="Parameter" class="no-border" >}}

파라미터는 Microflow가 트리거되는 위치에서 채워집니다.

### 어노테이션 {#annotation}

[어노테이션](/refguide8/annotation/)은 Microflow에 주석을 넣는 데 사용할 수 있는 요소입니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### 항목 사용

Studio Pro는 선택한 요소에서 사용되는 항목을 시각화합니다. 사용된 항목을 파란색 배경에 흰색 텍스트로 표시합니다. 반대로, 선택한 요소가 반환하는 항목을 사용하는 요소는 녹색 배경에 흰색 텍스트로 'Usage'라는 단어로 표시됩니다.

아래 예제에서 **AccountPasswordData** 파라미터는 선택한 액티비티(**Retrieve Account**)에서 사용되기 때문에 강조 표시됩니다. 그리고 **Save password** 액티비티에는 **Retrieve Account**가 반환하는 객체를 사용하기 때문에 **Usage** 레이블이 있습니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## 키보드 지원{#keyboard}

Microflow 편집기는 Microflow를 탐색하고 조작하기 위한 키보드 지원을 제공합니다. 다음 표는 사용할 수 있는 키를 보여줍니다.

| 키 | 효과 |
| --- | --- |
| 화살표 키 | 화살표 방향으로 인접한 요소(액티비티, 이벤트, 루프 또는 파라미터)를 선택합니다. |
| <kbd>Enter</kbd> | 선택한 요소의 속성을 편집합니다. |
| <kbd>F2</kbd> | 선택한 요소가 반환하는 항목의 이름을 변경합니다. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> 또는 입력 시작 | 선택한 요소의 캡션을 편집합니다. |
| <kbd>Ctrl</kbd> + 화살표 키 | 선택한 요소를 화살표 방향으로 이동합니다. |
| <kbd>Tab</kbd> | 루프가 선택된 경우 루프 내부의 첫 번째 요소가 선택됩니다. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | 루프 내부의 요소가 선택된 경우 루프 자체가 선택됩니다. |
| <kbd>Home</kbd> | 시작 이벤트를 선택합니다. |
| <kbd>End</kbd> | 종료 이벤트를 순환합니다. |
| 컨텍스트 메뉴 키 또는 <kbd>Shift</kbd> + <kbd>F10</kbd> | 현재 선택된 요소의 컨텍스트 메뉴를 엽니다. |

## Microflow 디버깅

Microflow가 실행되는 동안 어떤 일이 발생하는지 보려면 Microflow 디버거를 사용할 수 있습니다. 다음 사용 방법 문서를 참조하십시오:

* [Microflow 디버깅](/howto8/monitoring-troubleshooting/debug-microflows/)
* [원격 Microflow 디버깅](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)

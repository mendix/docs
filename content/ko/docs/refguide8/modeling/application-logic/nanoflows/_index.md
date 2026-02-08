---
title: "Nanoflow"
url: /refguide8/nanoflows/
weight: 20
description: "Nanoflow에서 사용할 수 있는 모든 요소에 대한 개요를 제공합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Nanoflow는 [Microflow](/refguide8/microflows/)와 유사하며, 애플리케이션의 로직을 표현할 수 있습니다. 그러나 몇 가지 특정한 이점이 있습니다(예: 브라우저/디바이스에서 직접 실행되며 오프라인 앱에서 사용할 수 있습니다). 또한, 대부분의 액션이 디바이스에서 직접 실행되므로 서버 접근이 필요 없는 로직에 대한 속도 이점도 있습니다.

{{% alert color="info" %}}
이 페이지는 Nanoflow에서 사용할 수 있는 모든 요소에 대한 개요입니다. Nanoflow 자체의 속성에 대해서는 [Nanoflow 속성](/refguide8/nanoflow/)을 참조하십시오.
{{% /alert %}}

## Nanoflow 사용 시기

### 오프라인 모바일 앱

Nanoflow는 오프라인 우선 애플리케이션을 염두에 두고 설계되었으며, 오프라인 앱에서 작동하는 애플리케이션 로직을 모델링할 수 있습니다. 모든 데이터베이스 관련 액션이 로컬 오프라인 데이터베이스에서 실행되므로 오프라인 앱의 Nanoflow는 빠릅니다.

### 연결이 필요 없는 로직

Nanoflow는 온라인 애플리케이션에도 큰 가치를 제공합니다(예: UI 로직, 유효성 검사, 계산 및 네비게이션). 그러나 데이터베이스 관련 액션을 수행할 때 각 액션이 Mendix Runtime에 별도의 네트워크 요청을 생성한다는 점에 유의하십시오.

다음 액션은 데이터베이스와 상호 작용합니다:

* Create
* Commit
* Retrieve
* Rollback

따라서, 위의 액션이 포함되지 않은 경우 온라인 애플리케이션에서 Nanoflow를 사용하는 것이 모범 사례입니다.

{{% alert color="info" %}}
커밋 없이 객체를 변경하는 것은 데이터베이스 관련 액션이 아닙니다. 변경 사항이 디바이스 또는 브라우저에서 적용되기 때문입니다.
{{% /alert %}}

#### 기타 사례

Nanoflow는 데이터베이스 관련 액션이 사용되지 않는 온라인 애플리케이션에서 가장 잘 작동하며, 이것이 일반적으로 최적의 사례이지만, 최대 하나의 데이터베이스 관련 액션을 포함하는 Nanoflow도 여전히 잘 작동할 수 있습니다. 이러한 Nanoflow는 하나의 네트워크 호출만 필요하므로 Microflow만큼 잘 작동합니다. 이러한 사용 사례의 예로는 객체에 대한 유효성 검사 로직을 수행하고 동일한 Nanoflow에서 객체를 커밋하는 것이 있습니다.

## Microflow와의 차이점

Nanoflow와 Microflow 사이에는 다섯 가지 주요 차이점이 있습니다:

1. Nanoflow가 액션을 실행할 때 클라이언트 액션이 즉시 실행됩니다. 예를 들어, 페이지 열기 액션은 Nanoflow가 끝날 때가 아니라 즉시 페이지를 엽니다. 이것은 Microflow의 클라이언트 액션과 다르며, Microflow에서는 클라이언트가 Microflow의 결과를 받을 때만 실행됩니다.
2. Nanoflow 액티비티에서 사용될 때 표현식은 다음 객체 및 변수를 지원하지 않습니다: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`.
3. Nanoflow는 트랜잭션 내에서 실행되지 않으므로 Nanoflow에서 오류가 발생하면 이전 변경 사항이 롤백되지 않습니다.
4. Nanoflow와 Microflow는 동일한 액션을 제공하지 않습니다. Microflow에서 사용 가능한 일부 액션은 Nanoflow에서 사용할 수 없으며, 그 반대도 마찬가지입니다.
5. Nanoflow는 JavaScript 라이브러리를 사용하고 Microflow는 Java 라이브러리를 사용하기 때문에 표현식이 실행되는 방식에 약간의 차이가 있을 수 있습니다.

## 표기법 및 카테고리

Nanoflow의 그래픽 표기법은 [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)(BPMN)을 기반으로 합니다. BPMN은 워크플로우에서 비즈니스 프로세스를 그리기 위한 표준화된 그래픽 표기법입니다.

Nanoflow는 요소로 구성됩니다. 다음 카테고리가 사용됩니다:

* [이벤트](#events)는 Nanoflow의 시작 및 종료 지점과 루프의 특수 작업을 나타냅니다
* [플로우](#flows)는 요소 간의 연결을 형성합니다
* [Decision](#decisions)은 선택을 하고 다른 경로를 다시 병합하는 것을 처리합니다
* [액티비티](#activities)는 Nanoflow에서 실행되는 액션입니다
* [루프](/refguide8/loop/)는 객체 목록을 반복하는 데 사용됩니다
* [파라미터](#parameter)는 Microflow의 입력으로 사용되는 데이터입니다.
* [어노테이션](#annotation)은 Microflow에 주석을 넣는 데 사용할 수 있는 요소입니다.

### 이벤트 {#events}

이벤트는 Nanoflow의 시작 및 종료 지점과 루프의 특수 작업을 나타냅니다.

| 그래픽 | 이름 | 설명 |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/start-event.png" alt="start event" link="/refguide8/start-event/" class="no-border" >}} | [시작 이벤트](/refguide8/start-event/) | Nanoflow의 시작 지점입니다. Nanoflow에는 하나의 시작 이벤트만 있을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/end-event.png" alt="end event" link="/refguide8/end-event/" class="no-border" >}} | [종료 이벤트](/refguide8/end-event/) | Nanoflow가 중지되는 위치를 정의합니다. Nanoflow의 반환 유형에 따라 일부 경우 값을 지정해야 합니다. 종료 이벤트가 두 개 이상 있을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/error-event.png" link="/refguide8/error-event/" class="no-border" >}} | [오류 이벤트](/refguide8/error-event/) | 오류 이벤트는 Nanoflow가 중지되고 이전에 발생한 오류를 throw하는 위치를 정의합니다. Nanoflow를 호출할 때 Nanoflow 내에서 오류가 발생했는지 여부를 알고 싶을 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/continue-event.png" alt="continue event" link="/refguide8/continue-event/" class="no-border" >}} | [Continue 이벤트](/refguide8/continue-event/) | 루프의 현재 반복을 중지하고 다음 반복을 계속하는 데 사용됩니다. Continue 이벤트는 [루프](/refguide8/loop/) 내에서만 사용할 수 있습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/break-event.png" alt="break event" link="/refguide8/break-event/" class="no-border" >}} | [Break 이벤트](/refguide8/break-event/) | 객체 목록에 대한 반복을 중지하고 루프 이후의 나머지 플로우를 계속하는 데 사용됩니다. Break 이벤트는 [루프](/refguide8/loop/) 내에서만 사용할 수 있습니다. |

### 플로우 {#flows}

플로우는 요소 간의 연결을 형성합니다.

| 그래픽 | 이름 | 설명 |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/sequence-flow.png" link="/refguide8/sequence-flow/" class="no-border" >}} | [시퀀스 플로우](/refguide8/sequence-flow/) | 이벤트, 액티비티, Decision 및 Merge를 서로 연결하는 화살표입니다. 이들은 함께 Nanoflow 내의 실행 순서를 정의합니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation-flow.png" link="/refguide8/annotation/#annotation-flow" class="no-border" >}} | [어노테이션 플로우](/refguide8/annotation/#annotation-flow) | 어노테이션을 다른 요소에 연결하는 데 사용할 수 있는 연결입니다. |

### Decision {#decisions}

Decision은 선택을 하고 다른 경로를 다시 병합하는 것을 처리합니다.

| 그래픽 | 이름 | 설명 |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/decision.png" alt="decision" link="/refguide8/decision/" class="no-border" >}} | [Decision](/refguide8/decision/) | 조건에 따라 결정을 내리고 나가는 플로우 중 하나만 따릅니다. **참고**: Nanoflow에는 병렬 실행이 없습니다. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/merge.png" alt="merge" link="/refguide8/merge/" class="no-border" >}} | [Merge](/refguide8/merge/) | 여러 시퀀스 플로우를 하나로 결합하는 데 사용할 수 있습니다. Nanoflow에서 선택이 이루어지고 이후에 공통 작업을 수행해야 하는 경우 Merge를 사용하여 두 개(또는 그 이상)의 경로를 결합할 수 있습니다. |

### 액티비티{#activities}

[액티비티](/refguide8/activities/)는 Nanoflow에서 실행되는 액션입니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/activity.png" alt="Activity" class="no-border" >}}

### 루프 {#loop}

[루프](/refguide8/loop/)는 객체 목록을 반복하는 데 사용됩니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/loop.png" alt="Loop" class="no-border" >}}

모든 객체에 대해 루프 내부의 플로우가 실행됩니다. 루프 액티비티에는 시작 및 종료 이벤트를 제외한 Nanoflow에서 사용되는 모든 요소가 포함될 수 있습니다.

### 파라미터 {#parameter}

[파라미터](/refguide8/parameter/)는 Nanoflow의 입력으로 사용되는 데이터입니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/parameter.png" alt="Parameter" class="no-border" >}}

파라미터는 Nanoflow가 트리거되는 위치에서 채워집니다.

### 어노테이션 {#annotation}

[어노테이션](/refguide8/annotation/)은 Microflow에 주석을 넣는 데 사용할 수 있는 요소입니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### 항목 사용

Studio Pro는 선택한 요소에서 사용되는 항목을 시각화합니다. 사용된 항목을 파란색 배경에 흰색 텍스트로 표시합니다. 반대로, 선택한 요소가 반환하는 항목을 사용하는 요소는 녹색 배경에 흰색 텍스트로 'Usage'라는 단어로 표시됩니다.

아래 예제에서 **AccountPasswordData** 파라미터는 선택한 액티비티(**Retrieve Account**)에서 사용되기 때문에 강조 표시됩니다. 그리고 **Save password** 액티비티에는 **Retrieve Account**가 반환하는 객체를 사용하기 때문에 **Usage** 레이블이 있습니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## 키보드 지원

Nanoflow 편집기는 Nanoflow를 탐색하고 조작하기 위한 키보드 지원을 제공합니다. 다음 표는 사용할 수 있는 키를 보여줍니다.

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

## Nanoflow 디버깅

단계별 디버깅은 아직 지원되지 않습니다. 현재 Mendix에서는 Studio Pro의 콘솔 로그에 표시되는 로그 메시지 액티비티를 사용하는 것을 권장합니다.

## 보안

Nanoflow는 현재 사용자의 컨텍스트에서 실행됩니다. 사용자가 권한이 없는 모든 작업은 실패합니다. 예를 들어, Nanoflow에서 객체를 검색할 때 현재 사용자가 읽기 액세스 권한이 있는 객체만 반환됩니다. 객체 커밋은 현재 사용자가 모든 변경 사항에 대해 쓰기 액세스 권한이 있는 경우에만 성공합니다.

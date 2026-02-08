---
title: "Loop"
url: /refguide9/loop/
weight: 80
---

## 소개

Loop는 반복 작업을 실행하는 데 사용되며 프레임으로 시각화됩니다. 각 반복마다 Loop 내부의 흐름이 실행됩니다. Loop는 목록을 반복하도록 구성하거나 Boolean Expression을 기반으로 할 수 있습니다. 자세한 내용은 아래의 [Loop 유형 속성](#loop-type) 섹션을 참조하십시오.

Loop에는 [시작 이벤트](/refguide9/start-event/) 및 [종료 이벤트](/refguide9/end-event/)를 제외하고 Microflow에서 사용되는 모든 유형의 요소를 포함할 수 있습니다. Loop만 [중단 이벤트](/refguide9/break-event/) 및 [계속 이벤트](/refguide9/continue-event/)를 포함할 수 있습니다.

## Loop 유형 속성 {#loop-type}

두 가지 Loop 유형은 아래에 설명되어 있습니다.

### For Each (목록의 항목) {#for-each}

이것은 새 Loop Activity를 만들 때의 기본 유형이며, 객체 목록을 반복하는 데 사용할 수 있습니다. **Iterate over** 속성을 흐름 범위의 목록으로 설정하여 목록을 구성할 수 있으며, 목록의 각 객체에 대해 Loop 내부의 흐름이 실행됩니다. 반복자(매개변수와 같은 모양)는 각 반복에서 목록의 현재 객체를 나타내며, **Loop object name**을 설정하여 이름을 변경할 수 있습니다. 이 객체는 검정색으로 표시되고, 객체의 Entity 유형은 파란색으로 표시됩니다.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/loop/foreach-loop-edit-form.png" class="no-border" >}}

예를 들어, **OrderLine** Entity의 객체 목록이 있고 모든 객체에 대해 구매 날짜를 설정하려는 경우, 구매 날짜를 설정하는 변경 Activity가 포함된 Loop를 사용할 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/loop/foreach-loop.png" class="no-border" >}}

### While (조건이 True인 동안) {#while}

이 Loop 유형은 일부 조건이 `false`로 평가될 때까지 Loop 내부의 흐름을 여러 번 반복합니다. 이 조건은 Loop 본문이 실행되기 전에 매번 평가됩니다. 일반적으로 **While** Loop는 정확한 Loop 반복 횟수를 미리 결정할 수 없는 경우에 사용됩니다.

**Caption** 필드를 설정하여 Loop 또는 조건에 대한 설명을 제공할 수 있습니다. Loop 조건은 **Expression** 편집기에서 [Expression](/refguide9/expressions/)으로 입력할 수 있으며, Boolean 값을 반환해야 합니다. **While** 키워드는 파란색으로 표시되고, **Caption**은 아래에 검정색으로 표시됩니다.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/loop/while-loop-edit-form.png" class="no-border" >}}

예를 들어, 1에서 5 사이의 숫자를 [로그](/refguide9/log-message/)하려면 **Counter** [변수](/refguide9/variable-activities/)가 5보다 작거나 같은지 확인하는 조건이 있는 Loop를 사용할 수 있습니다. Loop 내에서 **Counter** 값을 로그하고 **Counter**가 5보다 클 때 Loop 실행을 중지하기 위해 **Counter** 변수에 1을 더합니다:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/loop/while-loop.png" class="no-border" >}}

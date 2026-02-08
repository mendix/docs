---
title: "대화형 AI 디자인 체크리스트"
url: /howto/front-end/conversation-checklist/
linktitle: "대화형 디자인 체크리스트"
weight: 70
description: "대화형 AI 봇 설계를 위한 모범 사례를 설명합니다."
---

## 소개 {#introduction}

대화형 AI는 쉽게 만들 수 있지만, 사용하기 쉽고 비즈니스의 정신을 반영하도록 해야 합니다. 대화형 AI를 만드는 것은 기존 사용자 인터페이스를 설계하는 것과 다르며, 이전에 접하지 못했을 수 있는 측면이 있습니다.

이를 돕기 위해 Mendix는 최종 사용자가 대화형 AI를 어떻게 인식하고 사용하길 원하는지 생각하는 데 도움이 되는 대화형 AI 디자인 체크리스트를 마련했습니다. 이 체크리스트는 템플릿이 아닌 영감으로 활용하세요. 특정 Mendix 기능이나 모듈에 대한 참조는 없지만, Mendix가 더 많은 대화형 AI 기능을 통합함에 따라 추가될 예정입니다.

아래 예시에서 대화형 AI의 이름은 Bot입니다.

### 핵심 디자인 요소

Mendix는 대화형 AI 서비스 블루프린트를 설정할 것을 제안합니다. 이는 주요 대상 사용자 그룹에 맞게 디자인을 조정하는 데 사용할 수 있는 여정 맵입니다. 다음 디자인 요소를 포함합니다:

* 독특한 성격
* 특정 톤과 목소리
* 일관된 사운드, 느낌 및 동작

### 대화형 AI 동작 설계

Mendix는 대화형 AI에 다음과 같은 동작을 부여할 것을 권장합니다. 각 항목을 클릭하면 자세한 내용을 확인할 수 있습니다.

#### 따뜻한 시작으로 최종 사용자를 환영합니다

* [인사합니다](#hi)
* [다양한 최종 사용자에게 맞는 인사를 제공합니다](#greeting)
* [시스템 또는 서비스의 가치를 보여주고 최종 사용자의 기대에 부응하려고 합니다](#value)
* [데이터 보호에 대해 최종 사용자에게 사전에 안심시킵니다](#privacy)

#### 최종 사용자가 통제감을 느끼도록 돕습니다

* [최종 사용자가 AI 응답 생성 중 중지할 수 있습니다](#local-control)
* [최종 사용자가 시작 시 프롬프트를 포맷할 수 있습니다](#input)
* [최종 사용자가 온도를 설정할 수 있습니다](#value)
* [최종 사용자가 상호작용 기록을 삭제할 수 있습니다](#privacy)

#### 최종 사용자가 더 나은 AI 응답을 구성하도록 돕습니다

* [최종 사용자에게 프롬프트 가이드를 제공합니다](#prompting)
* [최종 사용자가 쉽게 재프롬프트할 수 있도록 합니다](#reprompting)
* [충분한 힌트와 발견성을 제공합니다](#hinting)

#### 우아한 오류 처리를 수용합니다

* [최종 사용자가 해결책을 식별하고 적절한 조치를 취할 수 있도록 돕는 투명한 오류 메시지가 있습니다](#errors)
* [최종 사용자의 의도를 더 잘 이해하기 위해 사전에 최종 사용자와 확인합니다](#confirming)
* [최종 사용자를 답답한 루프에 빠뜨리지 않도록 최대 오류 카운터를 가집니다](#confirming)
* [시스템이 최종 사용자에게 적절한 해결책을 제공할 수 없는 경우 대안으로 폴백 옵션을 제공합니다](#confirming)

## 인사하기{#hi}

### 왜 중요한가

가치를 보여주고, 최종 사용자를 환영하고, 기대를 설정하고, 최종 사용자가 통제할 수 있도록 하여 좋은 첫인상을 만드세요.

### 어떻게 하는가

따뜻한 환영으로 챗봇은 긍정적인 톤을 확립하고 최종 사용자가 가치 있다고 느끼게 합니다. 이 접근 방식은 친밀감을 형성하고 참여를 촉진하여 전반적인 최종 사용자 경험을 향상시킵니다.

바로 시작하지 마세요. "안녕하세요"라고 인사하세요.

### 예시

* 최종 사용자를 환영합니다. 간단한 "환영합니다" 또는 "안녕하세요"로 최종 사용자에게 간단히 인사하세요.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/say-hi1.png" max-width="320px" alt="Hello Ana, How can I help you today?" >}}

## 인사 맞춤화{#greeting}

### 왜 중요한가

다양한 최종 사용자 그룹에 맞게 인사를 맞춤화하면 일반적인 인사보다 더 매력적인 최종 사용자 경험을 만들 수 있습니다. 처음 방문하는 사용자와 재방문 사용자 간의 인사를 구분하세요.

초보 최종 사용자는 대화형 AI의 옵션과 기능에 대해 더 자세한 설명이 필요할 수 있습니다. 같은 정보가 더 경험 많은 최종 사용자에게는 답답함을 줄 수 있습니다.

반면에 전문 최종 사용자는 고급 기능에 대한 적절한 팁으로부터 도움을 받을 수 있습니다. 이러한 정보는 초보 최종 사용자에게 부담을 줄 수 있습니다.

### 어떻게 하는가

* **새로운 최종 사용자**: 따뜻한 환영과 시스템 기능에 대한 간략한 소개를 제공합니다.
* **재방문 최종 사용자**: 친숙함을 인정하는 친근한 인사를 사용합니다.
* **중단된 작업 재개**: 특히 재방문 최종 사용자의 경우 이전 상호작용의 맥락을 고려합니다.

초기에 많은 세부 정보로 최종 사용자를 압도하지 마세요.

### 예시

* 초보 최종 사용자에게 인사하고 시스템 상태를 설명합니다:

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-is-experiment.png" max-width="480px" alt="A pop-up explaining what Bot is." >}}

* 재방문 최종 사용자의 경우:

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/bot-recurring.png" max-width="480px" alt="Recurring end-users get straight to Bot with some suggestions and an offer to start asking questions" >}}

## 가치 결정{#value}

### 왜 중요한가

최종 사용자가 AI 기능의 가치를 파악할 수 있도록 도와야 합니다. 디자이너는 최종 사용자가 AI가 어디에 가치를 더하는지 이해하고 올바른 기대를 갖고 상호작용하도록 도울 수 있습니다.

### 어떻게 하는가

* **기대 설정**: 새로운 시스템을 마주할 때, 최종 사용자는 다음과 같은 암묵적인 질문을 가집니다:

    * 이것은 무엇인가?
    * 나를 위해 무엇을 할 수 있는가?
    * 왜 관심을 가져야 하는가?
    * 이것에 대해 어떻게 느껴야 하는가?
    * 왜 신뢰해야 하는가?
    * 다음에 무엇을 하길 원하는가?

* **시스템 상태 또는 버전**: 최종 사용자가 시스템의 기능과 한계를 이해하고 경험에 대한 적절한 기대를 설정하도록 돕습니다. 예를 들어, 시스템이 베타 상태임을 알려주세요.
* **새로운 기능 및 업데이트**: 재방문 최종 사용자의 경우, 시스템의 새로운 기능과 업데이트에 대해 적극적으로 소통합니다.

### 예시

* 최종 사용자가 시스템으로 무엇을 할 수 있는지 소통합니다.
* 최종 사용자의 데이터 보호를 사전에 확보하고 최종 사용자에게 알립니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/protection-and-examples.png" max-width="320px" alt="Give example questions and indicate on the screen that data is protected" >}}

* 새로운 기능이나 개선된 서비스를 최종 사용자에게 소통합니다. 최종 사용자가 AI 시스템의 가치를 적절히 평가할 수 있도록 합니다.
* 시스템의 버전을 표시하여 최종 사용자가 시스템의 한계를 파악할 수 있도록 합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/upgraded-recommendations.png" max-width="320px" alt="Pop-up informing that new features are available" >}}

## 개인정보 보호 및 보안 보장{#privacy}

### 왜 중요한가

사용자는 AI 시스템이 개인 정보를 안전하게 처리한다는 신뢰와 보장을 원합니다. 따라서 기밀성, 침해 방지, 최종 사용자 신뢰는 AI 시스템 보안의 중요한 측면입니다. 우리의 윤리적 의무는 최종 사용자 데이터를 모든 사고로부터 보호하는 것입니다.

### 어떻게 하는가

* **투명한 데이터 처리**: 데이터가 어떻게 수집, 처리, 사용되는지 명확하게 소통합니다.
* **최종 사용자 통제 강화**: 최종 사용자가 개인정보 설정을 맞춤화하고 데이터를 관리할 수 있도록 합니다.

### 예시

* 최종 사용자의 개인 및 기업 데이터를 사전에 보호합니다. 데이터가 보호되고 있음을 최종 사용자에게도 표시해야 합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/protection-and-examples.png" max-width="320px" alt="Use a Protected badge to indicate that data is protected" >}}

* 최종 사용자가 이전 대화의 기록을 삭제하고 대화 기록 저장 여부를 제어할 수 있도록 합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/delete-conversation.png" max-width="320px" alt="Show a switch to turn activity history on and off" >}}

## 로컬 제어 제공{#local-control}

### 왜 중요한가

로컬 제어는 최종 사용자가 AI의 제안이나 출력을 자신의 상황에 맞게 조정할 수 있게 합니다.

또한, 사람들은 결과에 영향을 미칠 수 있다고 믿을 때 더 동기부여되고 참여합니다(자기 효능감). 최종 사용자 제어 옵션을 제공하면 최종 사용자의 자기 효능감을 강화하고 AI 시스템과의 상호작용에 동기를 부여합니다.

### 어떻게 하는가

* **기본 옵션**: 최종 사용자 연구와 일반적인 사용 사례를 기반으로 기본값을 설정합니다. 원래 설정으로 돌아가려는 최종 사용자를 위해 명확한 "기본값으로 초기화" 옵션을 제공합니다.
* **발견성**: 로컬 제어 옵션을 명확한 맥락 내에, 영향을 미치는 기능 근처에 배치합니다. 직관적인 아이콘과 레이블을 사용합니다. 고급 설정에 대해 툴팁이나 상황에 맞는 도움말을 제공합니다.

### 예시

* 최종 사용자가 이전 프롬프트를 편집하고 업데이트하여 새로운 응답을 생성하기 쉽게 만듭니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/cancel-update-button.png" max-width="320px" alt="Show a button to allow end-user to edit a prompt" >}}

* AI 상호작용을 중지하거나 일시 정지할 수 있는 방법을 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/pause.png" max-width="320px" alt="Show a switch to pause current interaction" >}}

* 새 프롬프트를 작성하지 않고도 최종 사용자가 프롬프트에 대한 선호하는 응답을 선택할 수 있는 옵션을 제공합니다. 예를 들어, 세 가지 다른 초안 버전 중에서 선택하거나 새 버전을 생성할 수 있습니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/regenerate.png" max-width="320px" alt="Allow end-user to select a previous prompt and generate new responses from it" >}}

## 입력 메커니즘 만들기{#input}

### 왜 중요한가

입력 메커니즘은 최종 사용자가 시스템에 정보를 제공하는 방법입니다. 텍스트, 음성, 버튼, 메뉴 또는 이러한 요소의 조합을 통해 가능합니다.

### 어떻게 하는가

* 기본 입력 메커니즘은 대화형 인터페이스의 텍스트 입력이어야 합니다. 이 기본 입력 메커니즘은 차단되거나 비활성화되어서는 안 됩니다. 최종 사용자는 항상 기본 입력을 제공할 수 있는 방법을 가져야 합니다.
* 최종 사용자가 텍스트, 버튼 또는 다른 입력 메커니즘을 통해 어디에서 입력을 제공할 수 있는지 쉽게 인지할 수 있도록 합니다.
* 시스템이 최종 사용자의 입력을 받으면 시스템이 입력을 올바르게 이해했는지 확인하기 위한 피드백을 제공합니다.
* 한 번에 너무 많은 입력 옵션으로 최종 사용자를 압도하지 마세요. 간단하게 유지하거나 적시에 입력 옵션을 제공하여 최종 사용자가 어떤 작업을 수행해야 하는지 혼란스러워하는 것을 방지하세요.
* 최종 사용자가 제안된 주제를 사용하거나 자유 텍스트를 입력하여 대화를 시작할 수 있도록 합니다.

### 예시

* 사용자가 대화를 탐색할 수 있도록 명령 버튼과 자유 텍스트 입력을 모두 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/buttons-and-prompts.png" max-width="320px" alt="Suggested questions on buttons and also a text input field" >}}

* 사용자의 자유 텍스트 입력을 제한하지 마세요.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/free-text.png" max-width="320px" alt="Suggested free input text" >}}

## 프롬프팅{#prompting}

### 왜 중요한가

유용한 프롬프트 가이드는 최종 사용자가 원하는 것과 AI가 이해할 수 있는 것 사이의 간격을 메웁니다. 결국 최종 사용자에게 더 나은 AI 응답을 제공합니다.

### 어떻게 하는가

* **AI 응답 온도**: 최종 사용자에게 AI 응답에 대한 조정 가능한 온도 설정을 제공합니다. 이를 통해 최종 사용자가 원하는 세부 수준과 성격을 맞춤화할 수 있으며, 사실적이고 간결한 것부터 창의적이고 정교한 것까지 다양합니다.

* **최종 사용자 데이터 보호**: 사전 보호를 위해 노력하고 사후 대응 조치를 넘어서세요. 처음부터 최종 사용자 개인정보를 우선시하는 시스템을 설계하세요. 최종 사용자 정보를 보호하기 위한 강력한 데이터 암호화 및 접근 제어를 구현하세요.

* **입력 문자 처리**: 최종 사용자 입력에 대한 명확하고 현실적인 기대를 설정합니다. AI 시스템의 효율적인 데이터 처리를 보장하면서 최종 사용자의 불만을 방지하기 위해 문자 수 또는 형식에 대한 제한을 소통합니다.

### 예시

* 입력 필드에 프롬프트 예시를 제시하여 최종 사용자가 시스템에서 프롬프트를 작성하는 방법을 이해하도록 돕습니다. 정보 아이콘({{% icon name="info-circle" %}})을 통해 추가 안내를 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/prompts.png" max-width="320px" alt="Suggested prompt fragments on buttons and further help next to input field" >}}

* 고급 최종 사용자를 위한 프롬프트를 제시합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/further-advice.png" max-width="320px" alt="Pop up shown while response is generated giving additional suggestions for how to construct a prompt" >}}

* 최종 사용자가 제공된 맥락 위에 구성할 수 있도록 바로 사용할 수 있는 프롬프트를 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/context-driven-prompts.png" max-width="320px" alt="Suggested responses to latest output explaining a typo in the question" >}}

## 인용 및 재프롬프팅 {#reprompting}

### 왜 중요한가

최종 사용자가 이전 메시지의 특정 부분을 인용하고 직접 답장할 수 있도록 허용하면 대화 내에서 더 명확하고 집중된 소통이 가능합니다.

* **명확성과 맥락**: 인용은 이전 메시지의 특정 부분을 참조하여 명확성과 맥락을 유지하고 대화 흐름의 이해를 돕습니다.
* **정밀성**: 특정 텍스트에 답장하면 질문이나 의견을 정확하게 다루기 쉬워 관련성을 보장합니다.
* **정리**: 인용과 재프롬프팅은 대화를 정리하고 주제를 별도의 스레드로 분리하여 더 쉽게 후속 조치할 수 있도록 돕습니다.
* **효율성**: 이전 메시지를 참조하면 집중적인 교류가 가능하고 동일한 대화 내에서 여러 주제를 효율적으로 다룰 수 있습니다.

### 어떻게 하는가

* **가시성과 접근성**: 인용-재프롬프팅 기능을 인터페이스 내에서 쉽게 접근하고 보이도록 만듭니다. 최종 사용자가 메시지의 특정 부분을 직관적이고 원활하게 선택하고 인용할 수 있어야 합니다.
* **명확성과 가독성**: 인용된 텍스트가 최종 사용자의 입력과 구분되어 명확하고 읽기 쉽게 표시되도록 합니다. 들여쓰기, 색상 또는 서식과 같은 시각적 단서를 사용하여 인용된 텍스트와 새 메시지를 구분합니다.
* **상호작용성**: 인용-재프롬프팅 기능이 상호작용적이고 반응적이도록 설계합니다. 최종 사용자가 인용된 텍스트를 클릭하거나 탭하여 확장하거나 축소할 수 있도록 하여 인터페이스를 어지럽히지 않고 맥락을 볼 수 있는 원활한 방법을 제공합니다.

### 예시

* 추가 기능이 발견 가능하지만 인터페이스를 압도하거나 주요 작업에서 주의를 분산시키지 않도록 합니다. 예를 들어, 최종 사용자가 일부 텍스트를 선택하면 선택한 텍스트에 직접 답장할 수 있음을 나타내는 아이콘이 나타날 수 있습니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/reply-quote-icon.png" max-width="320px" alt="Showing an icon in the Bot response to indicate that selected text can be replied to directly" >}}

* 입력 영역 근처에 선택한 텍스트를 표시합니다. 더 이상 필요하지 않으면 최종 사용자가 이를 해제할 수 있도록 합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/highlight-the-question.png" max-width="320px" alt="Display selected text above the input area" >}}

## 힌팅과 발견성{#hinting}

### 왜 중요한가

대화형 AI에서 봇이나 음성 어시스턴트의 기능을 발견하는 부담은 최종 사용자에게 있습니다. 최종 사용자는 챗봇이 좋은 응답을 제공하지 못한 후에야 챗봇이 무언가를 할 수 없다는 것을 알게 됩니다. 힌트나 인터페이스 단서가 없으면 최종 사용자가 비현실적인 기대를 가질 가능성이 높습니다.

최종 사용자가 취하길 원하는 모든 행동에 대한 명확한 동기를 제공하세요. 최종 사용자에게 방법을 알려주기 전에 왜 그렇게 하길 원하는지 알려주세요.

### 어떻게 하는가

* **시각적 단서**: AI 기반 기능이나 제안을 나타내는 시각적 표시기 또는 아이콘을 통합하면 최종 사용자가 AI 요소를 더 쉽게 식별하고 상호작용할 수 있습니다.
* **온보딩 튜토리얼**: AI 기능을 소개하는 가이드 온보딩 튜토리얼이나 툴팁을 제공하면 발견성을 향상시키고 탐색을 촉진합니다.
* **상황에 맞는 도움말**: 최종 사용자가 처음으로 AI 기능을 접할 때 나타나는 상황에 맞는 도움말 프롬프트 또는 팝업을 제공하면 이러한 기능을 효과적으로 사용하도록 도울 수 있습니다.
* **예측 제안**: AI 알고리즘에 의해 구동되는 예측 제안이나 자동 완성 기능을 구현하면 최종 사용자가 시스템 응답을 예측하고 새로운 기능을 발견하는 데 도움이 됩니다.
* **점진적 공개**: 최종 사용자가 시스템과 상호작용함에 따라 AI 기능을 점진적으로 공개하는 기술을 사용하면 초기에 너무 많은 정보로 최종 사용자를 압도하는 것을 방지하면서 시간이 지남에 따라 탐색을 촉진합니다.
* **행동 지향**: 항상 최종 사용자에게 다음에 취할 행동을 제공합니다.

### 예시

* 텍스트가 강조 표시되면 **Reply** 아이콘({{% icon name="blockquote-filled" %}})이 나타나 추가 상호작용의 기회를 알립니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/reply-quote-icon.png" max-width="320px" alt="Showing an icon in the Bot response to indicate that selected text can be replied to directly" >}}

* 최종 사용자가 생성된 텍스트의 다양한 초안을 표시하거나 숨기는 옵션을 발견하고 선호하는 버전을 선택할 수 있습니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/show-hide-draft.png" max-width="320px" alt="Option is given to create multiple drafts of response from Bot with option to show or hide the Bot's responses" >}}

## 오류 보고{#errors}

### 왜 중요한가

투명한 오류 메시지는 최종 사용자에게 정확히 무엇이 잘못되었는지 알려주어 혼란을 방지하고 문제를 추측하는 데 시간을 낭비하지 않게 합니다. 문제를 설명함으로써 최종 사용자가 해결책을 식별하거나 적절한 수정 조치를 쉽게 취할 수 있습니다.

### 어떻게 하는가

* **정확한 언어 사용**: "오류가 발생했습니다" 대신 문제를 정확하게 지적하세요. 예: "해당 이메일 주소의 프로필을 찾을 수 없습니다. 철자를 확인하고 다시 시도해 주세요."
* **맥락 제공**: 오류가 발생한 이유를 간략하게 설명하세요. 예: "이미지가 너무 큰 것 같습니다. 업로드 제한은 5MB입니다. 크기를 조정하거나 더 작은 이미지를 선택하면 잘 작동할 것입니다!"
* **해결책 제공**: 최종 사용자가 문제를 해결하기 위해 취할 수 있는 실행 가능한 단계를 제공하세요. 대안적인 작업을 제안하거나, 관련 도움말 문서에 연결하거나, 비밀번호 재설정을 제안할 수 있습니다.
* **긍정적인 톤 유지**: 오류를 보고할 때도 정중하고 도움이 되는 언어를 사용하세요. 예: "요청을 처리하는 데 문제가 발생했습니다. 다시 시도해 볼까요!"

### 예시

* 요청된 작업을 수행할 수 없는 이유를 설명하는 맥락을 제공합니다. 또한 대안적인 해결책을 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/error.png" max-width="320px" alt="Bot responds explaining why it cannot send an email and suggesting something it can do" >}}

## 의도 확인{#confirming}

### 왜 중요한가

최종 사용자의 의도를 명확히 하면 시스템이 최종 사용자가 원하는 것을 이해하여 정확한 응답과 원활한 상호작용을 이끌어냅니다.

### 어떻게 하는가

* **확인 프롬프트**: 진행하기 전에 최종 사용자의 요청을 질문으로 바꾸어 이해를 확인합니다. ("혹시...를 의미하셨나요?")
* **여러 응답 옵션**: 일반적인 최종 사용자 목표를 반영하는 몇 가지 간결한 답변 선택지를 제공합니다.
* **맥락 인식**: 현재 요청의 해석을 알리기 위해 과거 상호작용과 최종 사용자 이력을 고려합니다.
* **폴백 메커니즘**: 최종 사용자를 실시간 상담원에 연결하거나 일반적인 작업 메뉴를 제공하는 등의 내장 폴백 옵션을 갖습니다. 이는 시스템이 초기 요청을 완벽하게 처리할 수 없더라도 최종 사용자에게 옵션을 보장합니다.

### 예시

* "제가 맞게 이해했나요?"라고 물으면 최종 사용자와 시스템이 대화 방향을 형성하는 데 도움이 됩니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/am-i-right.png" max-width="480px" alt="Bot responds with asking if response is correct with Yes/No buttons to allow response" >}}

* 시스템이 쿼리를 처리할 수 없는 경우 추가 탐색을 위한 폴백 옵션을 제공합니다.

    {{< figure src="/attachments/howto/front-end/conversation-best-practices/do-not-understand.png" max-width="320px" alt="Bot responds that it cannot understand and prompts with buttons showing possible next steps" >}}

---
title: "MxAssist Logic Bot"
url: /refguide8/mx-assist-studio-pro/
description: "Mendix Studio Pro의 MxAssist Logic Bot에 대해 설명합니다."
---

## 소개

MxAssist Logic Bot은 Mendix Studio Pro에서 애플리케이션 로직(Microflow)을 모델링하고 구성하는 데 도움을 주는 AI 기반 가상 공동 개발자 봇입니다. 이미 설계된 액티비티, 파라미터 및 기타 컨텍스트 관련 정보를 기반으로 Microflow에서 다음에 수행할 최적의 액티비티에 대한 맥락화된 추천을 제공합니다.

MxAssist Logic Bot은 Mendix로 구축된 1,200만 건 이상의 익명화된 애플리케이션 로직(Microflow)에 대한 머신 러닝 분석을 사용하여 Microflow의 모범 사례 패턴을 감지하고 학습합니다.

MxAssist Logic Bot의 주요 기능은 다음과 같습니다:

* **다음 최적 액션 제안** – 40개 이상의 다른 옵션 중에서 상위 5개의 다음 최적 액티비티를 95%의 정확도로 추천합니다.
* **자동 구성** – 다음 최적 액션을 제공할 뿐만 아니라 해당 액션의 파라미터를 미리 채워 개발을 더욱 자동화합니다.
* **맥락 기반 제안** – 개발자가 플로우 중간에 새 액티비티 또는 Decision을 삽입할 때 Microflow에서 좌우를 '살펴보는' 것을 포함하여 다양한 방식으로 맥락을 도출하고, 호출된 페이지를 사용하여 맥락을 추론합니다.
* **높은 정확도** – 모델의 지속적인 개선 및 훈련을 통해 정확도 수준이 95%에서 향상되었습니다.

## MxAssist Logic Bot 설정

Microflow 편집기의 오른쪽 상단에 있는 **On-Off** 버튼을 클릭하여 MxAssist Logic Bot을 켜고 끌 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/on-off-button.png" alt="On-Off Button" class="no-border" >}}

MxAssist Logic Bot의 설정에 접근하려면 **Edit** > **Preferences** > **Mendix Assist** 탭 > **Logic Bot** 섹션을 여십시오. 자세한 내용은 [환경 설정](/refguide8/preferences-dialog/)을 참조하십시오.

**Mendix Assist** 탭의 **Logic Bot** 섹션에서 다음을 설정할 수 있습니다:

* **Enable MxAssist Logic Bot** – MxAssist Logic Bot을 켜고 끕니다
* **Show suggestions for system variables** – 활성화하면 MxAssist Logic Bot이 시스템 객체에 대한 제안을 합니다(예: **currentUser** 또는 **currentSession**과 같은 객체를 변경하도록 제안할 수 있습니다):

    {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/mx-assist-system-variables.png" alt="Suggestions for System Variables" class="no-border" >}}

환경 설정에 대한 자세한 내용은 [환경 설정](/refguide8/preferences-dialog/)을 참조하십시오.

## MxAssist Logic Bot을 사용한 Microflow 구축

MxAssist Logic Bot은 기본적으로 활성화되어 있으며 [Microflow](/refguide8/microflows/)의 플로우에 파란색 점으로 표시됩니다.

MxAssist Logic Bot을 사용하지 않고 일반적인 방법으로 Microflow에 요소를 추가할 수 있지만, MxAssist Logic Bot은 가장 관련성 높은 액티비티의 짧은 목록을 제안하여 더 빠르게 요소를 추가할 수 있도록 도와줍니다.

MxAssist Logic Bot을 사용하려면 다음을 수행하십시오:

1. 나비넥타이를 클릭하여 다음 최적 액션 추천을 확인합니다:

    {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/mx-assist-studio-pro/mx-assist-recommendations.png" alt="Logic Bot Recommendations"   width="350"  class="no-border" >}}

2. 추천 액티비티 중 하나를 클릭하여 Microflow에 삽입합니다.
3. **Properties** 대화 상자에서 선택한 액티비티/이벤트를 구성합니다.

액티비티/이벤트가 Microflow에 추가됩니다.

상위 5개 추천 목록에서 원하는 액티비티 또는 요소를 볼 수 없는 경우 **Add other element**를 클릭하여 액티비티, 루프, Decision, Merge 또는 객체 유형 Decision을 선택할 수 있습니다.

## 더 읽기

* [Microflow](/refguide8/microflows/)

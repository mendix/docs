---
title: "로드 및 가져오기 오류 해결"
url: /howto9/monitoring-troubleshooting/solving-load-and-import-errors/
weight: 11
description: "앱을 열 때 발생할 수 있는 문제를 해결하는 방법을 설명합니다."
aliases:
    - /howto9/solving-load-and-import-errors.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 사용 방법은 Mendix Studio Pro에서 앱을 열 때 발생할 수 있는 문제를 해결하는 데 도움을 줍니다.

로딩을 방해하는 오류의 가능한 원인 중 하나는 앱을 생성하거나 편집하기 위해 [Mendix Model SDK](/apidocs-mxsdk/mxsdk/)를 사용하는 것입니다. Mendix Model SDK를 사용하면 앱을 편집하여 형식이 유효하지 않게 만들 수 있으며, 이 과정에서 Studio Pro가 열 수 없게 됩니다. 이 경우 다음 메시지가 표시됩니다:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/solving-load-and-import-errors/18580055.png" class="no-border" >}}

이러한 오류의 원인을 파악하는 방법과 해결 가능한 방법을 알아보려면 계속 읽으십시오.

## 실제 문제 파악하기

**Details >>** 버튼을 클릭하여 앱을 로드하는 동안 발생한 실제 오류를 표시하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/solving-load-and-import-errors/18580052.png" class="no-border" >}}

이러한 상세 메시지는 다음을 알려줍니다:

* 오류가 발생한 모듈과 문서(예: 'Transportation' 모듈의 Domain Model).
* 오류를 발생시킨 모델 요소(예: 'Vehicle' Entity).
* 실제 문제가 무엇인지(예: 속성을 포함하지 않는 인덱스가 있으며 이는 허용되지 않음).

## 앱의 출처 파악하기

문제를 해결하기 전에, 다른 사람이 오류를 도입했을 수 있으므로 앱의 출처를 발견하는 것이 유용합니다. 다음 가능성을 검토하십시오:

### Team Server 앱인가요?

앱이 [Team Server](/developerportal/repository/team-server/) 앱이고 서버에서 [다운로드 또는 업데이트](/refguide9/using-version-control-in-studio-pro/)를 방금 수행한 경우, 최근 Team Server에 커밋된 리비전에서 문제가 추가되었을 수 있습니다. [Apps](https://sprintr.home.mendix.com/)의 [Team Server](/developerportal/repository/team-server/) 메뉴 항목을 통해 가장 최근 커밋을 한 사람을 확인할 수 있습니다.

브랜치 라인의 최신 변경 사항이 자신이 아닌 다른 사람에 의해 커밋된 경우, 해당 사람에게 문제에 대해 알려주십시오.

### 다른 사람에게서 모델을 받았나요?

앱 패키지(*.mpk*) 파일 등으로 다른 사람에게서 모델을 받은 경우, Mendix Model SDK로 모델을 생성했을 수 있습니다. 해당 사람에게 문제에 대해 알리고 해결책을 요청하십시오.

### 직접 앱을 생성했나요?

앱을 직접 생성하거나 편집한 경우, 문제를 해결할 수 있는 방법을 알아보려면 이 사용 방법의 다음 섹션을 읽으십시오.

## 문제 해결하기

이 사용 방법에서 설명하는 문제는 Mendix Studio Pro에서 앱을 편집하여 해결할 수 없습니다. 앱의 파일 형식이 Studio Pro에서 읽을 수 없는 방식으로 유효하지 않기 때문입니다. 이는 또한 Studio Pro로 앱 작업을 하면서 문제가 발생한 것이 아닐 가능성이 높다는 것을 의미합니다.

이러한 종류의 오류의 가장 가능한 원인은 Mendix Model SDK에서 실행된 결함 있는 스크립트이며, 이 경우 SDK를 사용하여 문제를 수정해야 합니다. Mendix Model SDK를 사용하여 직접 모델을 생성하거나 편집한 경우, 오류 대화 상자의 메시지를 주의 깊게 읽고 SDK 코드의 관련 부분을 찾아 SDK 스크립트를 변경하여 앱을 다시 유효하게 만드는 방법을 알 수 있을 것입니다. SDK 스크립트로 모델을 구성하거나 변경하는 방법에 대한 정보가 필요한 경우 [Mendix Model SDK 문서](/apidocs-mxsdk/mxsdk/)를 확인하십시오.

## 더 읽기

* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [하이브리드 모바일 애플리케이션 디버깅](/howto9/monitoring-troubleshooting/debug-a-hybrid-mobile-application/)
* [Java 액션 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions/)
* [Java 액션 원격 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/)
* [Microflow 원격 디버깅](/refguide9/debug-microflows-remotely/)
* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [로그 수준](/howto9/monitoring-troubleshooting/log-levels/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

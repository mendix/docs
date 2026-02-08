---
title: "로그 수준 설정"
url: /howto9/monitoring-troubleshooting/log-levels/
weight: 9
description: "앱 내 다양한 로깅 유형에 대한 로그 수준을 구성하는 방법을 설명합니다."
---

## 소개

각 애플리케이션에는 실행 중인 애플리케이션의 상태를 모니터링하기 위해 로그 메시지를 기록하는 로그가 있습니다. 로그 수준은 로그 메시지에 레이블을 지정하고 가장 높은 우선순위의 메시지를 강조 표시하여 쉽게 식별하고 대응할 수 있도록 하는 데 사용됩니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 앱 내 다양한 유형의 로깅에 대한 로그 수준 구성하기

## 로깅 기본 사항

### 로그 메시지

로그 메시지는 Mendix 애플리케이션의 로그에 나타나며 다음을 포함한 상황화된 상세 정보를 제공합니다:

* 로그 메시지가 생성된 날짜와 시간
* 수준
* 로그 노드
* 메시지
* 스택 추적

#### 로그 노드

로그 노드는 로그 메시지의 소스를 설명합니다. 예를 들어, 이메일 모듈의 로그 메시지에서 로그 노드를 **Email Module**로 설정할 수 있습니다.

#### 메시지

로그의 대부분의 메시지는 시스템에 의해 자동 생성됩니다(예: **Mendix Runtime successfully started, the application is now available**). 그러나 Microflow를 통해 생성된 로그 메시지는 개발자가 사용자 정의할 수 있습니다.

사용자 정의 로그 메시지는 **Template**을 정의하여 생성됩니다. 템플릿은 메시지의 구조이며 매개변수와 자유 텍스트로 구성할 수 있습니다.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/log-message-template.png" class="no-border" >}}

위 이미지에서 메시지의 템플릿은 *Email not sent to department {1}*입니다. 이 예제 템플릿에서 오류가 발생하면 고객의 이메일 주소가 매개변수 플레이스홀더 **{1}**에 삽입됩니다(예: 로그 메시지는 *Email not sent to department Customer Support*가 됩니다). 따라서 로그 메시지는 오류에 특정한 데이터로 사용자 정의됩니다.

#### 스택 추적

스택 추적은 애플리케이션이 시작된 시점부터 예외가 발생한 시점까지의 현재 메서드 호출 목록입니다.

Studio Pro에서 스택 추적을 포함하는 로그 메시지는 클립 아이콘({{% icon name="paperclip" %}})으로 표시됩니다. 이 아이콘을 더블 클릭하면 스택 추적이 표시됩니다.

### 수준 {#level}

로그 수준은 로그 메시지의 심각도를 정의합니다. Studio Pro에서는 다른 색상과 아이콘으로 표시됩니다.

Mendix에서 사용하는 로그 수준은 다음과 같습니다:

| 수준 | 아이콘 | 색상 | 설명
| --- | --- | --- | --- |
| Trace | | | 더 상세한 정보. 로그에만 기록됩니다. |
| Debug | | | 상세한 정보, 일반적으로 문제 진단 시에만 관심이 있습니다. |
| Info  | | | 예상대로 작동하고 있음을 확인합니다. |
| Warning | {{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/warning.png" class="no-border" >}} | 주황색 | 예상치 못한 일이 발생했거나 가까운 미래에 문제가 있을 수 있음을 나타냅니다(예: "디스크 공간 부족"). 애플리케이션은 여전히 예상대로 작동합니다. |
| Error | {{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/error.png" class="no-border" >}} | 빨간색 | 더 심각한 문제로 인해 애플리케이션이 일부 기능을 수행할 수 없었습니다. |
| Critical | {{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/critical.png" class="no-border" >}} | 흰색(텍스트), 빨간색(배경) | 심각한 오류가 발생하여 애플리케이션 자체가 계속 실행되지 못할 수 있음을 나타냅니다. |

## 로그 수준 설정하기

이 섹션에서는 로그 메시지 수준에 따라 어떤 로그 메시지가 생성되는지 지정하는 방법을 배웁니다. 구성된 로그 수준보다 낮은 수준의 로그 메시지는 생성되지 않습니다. 다른 [수준](#level)은 Mendix Studio Pro에서 생성하는 사전 정의된 로깅과 사용자 정의 로깅 모두에 적용할 수 있습니다.

### 스크립트를 통한 로그 수준 구성

실제 로그 수준이 존재하기 전에 런타임 관리 포트를 통해 로그 수준을 구성할 수 있습니다. 따라서 모든 필수 로그 수준을 한 번에 설정하는 스크립트를 생성할 수 있습니다.

다음은 `ConnectionBus`와 `ActionManager`를 각각 Trace와 Debug 수준으로 설정하는 Python 스크립트입니다:

```py
import requests, base64, json, sys

payload = {
    'action':'set_log_level',
    'params': {'nodes' : [
        { 'name':'ConnectionBus', 'level':'TRACE'},
        { 'name':'ActionManager', 'level':'DEBUG'}
        ], 'force':True}
}
```

이 스크립트를 다음과 같이 실행할 수 있습니다:

```powershell
C:\temp\LogDemoApp\python
λ python setlogs.py 87a32a3e-c6db-4bc8-9fa3-7cd5b108eaec 8090
{"feedback":{},"result":0}
```

### Studio Pro 내에서 로그 수준 구성하기 {#configure-log-levels-from-studio-pro}

Studio Pro 내에서 로그 수준을 설정하려면 다음 단계를 따르십시오:

1. 앱이 로컬에서 실행 중인지 확인하십시오 – 그렇지 않으면 로그 수준 설정 옵션을 클릭할 수 없습니다.
2. **Console** 패인에서 **Advanced**를 클릭하여 고급 옵션 메뉴를 여십시오.
3. **Set log levels**를 클릭하십시오.
4. 관련 **Log node**에 대해 **Log level** 열의 드롭다운에서 원하는 수준을 선택하십시오.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/set-log-levels.png" class="no-border" >}}

{{% alert color="info" %}}
앱이 Mendix Cloud에 배포될 때 각 환경에서 표준 로그 메시지의 로그 수준을 재정의할 수 있습니다. 자세한 내용은 *Environment Details*의 [Log Levels Tab](/developerportal/deploy/environments-details/#log-levels) 섹션을 참조하십시오.
{{% /alert %}}

## 사용자 정의 로그 메시지의 로그 수준 설정하기

Microflow를 통해 생성한 사용자 정의 로그 메시지의 수준을 설정하려면 다음 단계를 따르십시오:

1. 로그 메시지 수준을 변경하려는 Microflow를 여십시오.
2. 로그 메시지 액티비티를 더블 클릭하십시오.
3. **Log level** 드롭다운에서 원하는 수준을 선택하십시오.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/log-levels/custom-log-messages.png" class="no-border" >}}

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/)
* [Java 액션 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions/)

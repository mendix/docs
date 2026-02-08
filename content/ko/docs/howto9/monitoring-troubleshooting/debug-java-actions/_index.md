---
title: "Java 액션 디버깅"
url: /howto9/monitoring-troubleshooting/debug-java-actions/
weight: 4
description: "Eclipse에서 브레이크포인트를 설정하고 Java 액션을 디버깅하는 방법을 설명합니다."
---

## 소개

Mendix Studio Pro에는 Microflow 수준에서 오류를 해결하기 위한 내장 디버거가 있습니다. Microflow는 사용자 정의 Java 액션으로 확장할 수 있지만, 이러한 액션은 텍스트 기반이므로 컴파일 오류에 대해서만 확인할 수 있습니다. Java 액션에서 오류가 발생하면 Eclipse의 디버거를 활용하여 쉽게 디버깅할 수 있습니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 브레이크포인트 설정하기
* Eclipse에서 디버깅하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* [Eclipse](https://eclipse.org/) 설치
* Java 액션 추가 및 Eclipse에서 앱 열기
* [사용자 정의 Java로 애플리케이션 확장하기](/refguide9/extending-your-application-with-custom-java/) 읽기
* Studio Pro의 앱 메뉴에서 **Deploy for Eclipse**를 선택하여 Eclipse용 애플리케이션을 배포하기(Studio Pro에서 변경할 때마다 이 작업을 다시 수행해야 합니다):
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18581045.png" class="no-border" >}}

## 브레이크포인트 설정하기

1. Eclipse를 열고 **Package Explorer**에서 앱을 찾으십시오.
2. **ReverseCustomerName.java**를 더블 클릭하십시오:
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18581041.png" class="no-border" >}}
3. 디버깅이 필요한 줄에 커서를 놓고 <kbd>Ctrl</kbd> + <kbd>Shift</kbd>를 누른 상태에서 <kbd>B</kbd>를 눌러 브레이크포인트를 활성화하십시오. 줄 앞에 파란색 점이 나타납니다:
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18580059.png" class="no-border" >}}
{{% alert color="info" %}}
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>를 사용하여 브레이크포인트를 비활성화할 수도 있습니다.
{{% /alert %}}

## Eclipse에서 디버깅하기

1. Package Explorer에서 앱 루트 노드를 선택하고 Eclipse 도구 모음에서 디버그 아이콘을 클릭하십시오:
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18580062.png" class="no-border" >}}

    이제 Eclipse가 디버거로 연결된 상태에서 애플리케이션이 시작됩니다.

2. 배포 프로세스가 준비되면, 브라우저에서 애플리케이션을 열고 Java 액션을 트리거하십시오:
    * 애플리케이션의 최종 사용자로서 애플리케이션에 진행 표시줄이 표시됩니다
    * 개발자로서 Windows 작업 표시줄에서 Eclipse 아이콘이 깜박이는 것을 볼 수 있습니다
3. Eclipse를 여십시오. 이제 Eclipse의 "debug" 관점이 표시됩니다.
4. **Step into**(또는 <kbd>F5</kbd> 누르기) 또는 **Step over**(또는 <kbd>F6</kbd> 누르기)를 클릭하여 Microflow의 다음 단계로 이동하십시오:
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18580056.png" class="no-border" >}}

    {{% alert color="warning" %}}디버거 옵션에서 "Step into"와 "Step over"의 차이는 함수 호출을 만날 때만 눈에 띕니다. "Step into"는 디버거가 함수 안으로 들어가는 것을 의미하고, "Step over"는 동일한 Java 액션의 다음 줄로 디버거를 이동시킵니다. "Step Return"(<kbd>F7</kbd> 누르기)으로 디버거에게 함수를 떠나도록 지시할 수 있습니다. 이는 기본적으로 "Step Into"의 반대입니다. "Resume"(<kbd>F8</kbd> 누르기)를 클릭하면 디버거가 다른 브레이크포인트에 도달할 때까지 계속하도록 지시합니다.{{% /alert %}}

5. Java 액션의 변수 위에 커서를 놓으면 팝업 창에서 해당 값을 확인할 수 있습니다:
    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/18580057.png" class="no-border" >}}

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto9/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Java 액션 원격 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 수준](/howto9/monitoring-troubleshooting/log-levels/)
* [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/)
* [Microflow 원격 디버깅](/refguide9/debug-microflows-remotely/)
* [Java Actions](/refguide9/java-actions/)

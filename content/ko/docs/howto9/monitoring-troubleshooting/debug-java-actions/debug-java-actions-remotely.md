---
title: "Java 액션 원격 디버깅"
url: /howto9/monitoring-troubleshooting/debug-java-actions-remotely/
---

## 소개

Mendix Microflow에서 사용되는 Java 액션을 디버깅하려면 Mendix Runtime을 시작하는 방식에 대해 일부 구성 변경을 해야 합니다. 이 사용 방법은 이를 관리하는 방법을 설명합니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 서버 구성 편집하기
* 원격 디버깅 구성하기

## 추가 JVM 매개변수로 서버 구성 편집하기

이 섹션에서는 [프로토타입/데모](/howto9/security/create-a-secure-app/#prototype) 수준에서 보안을 구성하는 방법을 배웁니다. 이 수준의 보안은 개발/데모 목적에만 적용된다는 점에 유의하십시오. 이 수준은 데모 애플리케이션의 빠른 개발을 위해 사용할 수 있습니다. 더 복잡한 데이터 접근 구성 없이 보안을 시뮬레이션합니다. [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)에 배포할 때는 [프로덕션](/howto9/security/create-a-secure-app/#production) 보안 설정이 필수입니다.

추가 JVM 매개변수로 서버 구성을 편집하려면 다음 단계를 따르십시오:

1. [App Settings](/refguide9/app-settings/)를 여십시오.
2. **Configurations** 탭에서 구성을 편집하십시오.
3. 구성의 **Server** 탭으로 이동하여 **Extra JVM parameters** 필드에 다음 줄을 추가하십시오:

    `-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005`

    {{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/debug-java-actions-remotely/18580063.png" class="no-border" >}}

4. 애플리케이션을 실행하십시오.

## 원격 디버깅 구성하기

Java IDE에서 원격 디버깅을 구성해야 합니다.

IntelliJ를 구성하려면 다음 단계를 따르십시오:

1. **Debugger**를 시작하십시오.
2. Java 코드에 브레이크포인트를 배치하십시오.
3. 디버깅을 시작하십시오.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-java-actions/debug-java-actions-remotely/intellij_rundebug_configurations.png" class="no-border" >}}

Eclipse를 구성하려면 다음 단계를 따르십시오:

1. Eclipse에서 앱을 여십시오.
2. 버그 아이콘이 있는 메뉴 또는 **Run** 메뉴를 여십시오.
3. **Debug Configurations**를 선택하십시오.
4. 왼쪽 메뉴 바에서 **Remote Java Application**을 선택하십시오.
5. **New**를 마우스 오른쪽 버튼으로 클릭하십시오.
6. **App** 아래에 현재 앱이 있는지 확인하고 포트를 5005로 변경하십시오(JVM 매개변수 참조).
7. **Debug**를 클릭하십시오.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto9/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Java 액션 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions/)

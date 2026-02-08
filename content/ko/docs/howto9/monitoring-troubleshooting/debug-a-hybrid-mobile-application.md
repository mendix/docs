---
title: "하이브리드 모바일 애플리케이션 디버깅"
url: /howto9/monitoring-troubleshooting/debug-a-hybrid-mobile-application/
weight: 5
description: "모바일 폰의 Mendix Developer App에서 실행 중인 Mendix 앱을 디버깅하는 방법을 설명합니다."
---

## 소개

이 사용 방법은 모바일 폰의 Mendix Developer App에서 실행 중인 Mendix 애플리케이션을 디버깅하는 단계를 설명합니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 모바일 애플리케이션 디버깅하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/) 설치
* 모바일 기기에 Mendix Developer App 설치

## weinre 시작하기

콘솔에서 다음 매개변수로 weinre를 시작하십시오: `weinre --boundHost 1.2.3.4 --httpPort 9090`:

* `1.2.3.4`는 로컬 IP로, Mendix Developer App의 기록에서 볼 수 있는 주소와 일치할 가능성이 높습니다
* `9090`은 애플리케이션의 포트(보통 8080)와 충돌하지 않는 한 다른 포트로 변경할 수 있습니다

## Mendix Developer App 연결하기

디버거를 구성하려면 화면 오른쪽 상단의 **Settings** ({{% icon name="cog" %}})를 클릭하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/debug-a-hybrid-mobile-application/18580021.png" class="no-border" >}}

구성 화면에서 weinre를 시작할 때 사용한 것과 동일한 설정을 입력하십시오. `http://1.2.3.4:9090`이어야 합니다(`1.2.3.4`는 로컬 IP).

이제 로컬 브라우저에서 동일한 주소로 이동하여 디버깅 세션을 시작할 수 있습니다.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto9/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto9/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Java 액션 원격 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 수준](/howto9/monitoring-troubleshooting/log-levels/)
* [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/)
* [Java 액션 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions/)
* [Microflow 원격 디버깅](/refguide9/debug-microflows-remotely/)

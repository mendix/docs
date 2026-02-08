---
title: "IIS (Internet Information Services) 문제 해결"
linktitle: "IIS 문제 해결"
url: /developerportal/deploy/troubleshooting-iis/
description: "애플리케이션 로그 및 기타 문제 해결 기능을 사용한 Microsoft IIS 문제 해결에 대한 도움말"
weight: 40
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 페이지에서는 Mendix 앞에 웹 서버로 Microsoft Internet Information Services(IIS)를 설정할 때 발생할 수 있는 문제를 해결하는 데 도움을 드립니다.

세 개의 섹션으로 나뉩니다:

* [Mendix 설치 문제 해결](#mendix)
* [IIS 문제 해결](#iis)
* [Mendix Service Console 오류 문제 해결](#msc-errors)

## Mendix 설치 문제 해결{#mendix}

먼저, IIS 구성에서 문제를 찾기 전에 Mendix 앱이 작동하는지 확인하십시오.

### IIS를 우회하여 Mendix 앱 실행

애플리케이션을 정상적으로 열면 IIS를 통해 접근하려고 합니다. IIS 없이 Mendix를 테스트하려면 직접 접근해야 합니다.

서버에서 브라우저를 열고 [http://localhost:8080/](http://localhost:8080/)(또는 다른 경우 구성된 포트)에서 앱에 접속하십시오. 앱이 작동하면 여기에서 찾을 수 있습니다.

앱이 작동하면 문제는 IIS 구성에 있습니다.

Mendix 앱에 문제가 있는 경우 Mendix Service Console 및/또는 브라우저에 오류 메시지가 표시됩니다.

### 중요 파일을 찾을 수 없음

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/troubleshooting-iis/18580723.png" class="no-border" >}}

이런 종류의 오류는 두 가지 상황에서 발생할 수 있습니다:

1. 파일이 누락되었거나 잘못된 위치에 있음

    올바른 플랫폼 버전과 오류 메시지에 언급된 파일을 검색하십시오.

    파일이 누락된 경우 서버 배포(*tar.gz* 파일)를 다시 설치하고 파일이 올바른 위치에 있는지 확인하십시오.

2. Mendix 서비스가 파일에 접근할 수 없음

    파일이 있는 경우 Mendix 서비스를 실행하는 사용자가 `mxclientsystem` 폴더에 대한 읽기 및 실행 접근 권한을 가지고 있는지 확인하십시오.

## IIS 문제 해결{#iis}

이 섹션에서는 IIS를 설정할 때 사람들이 겪는 몇 가지 일반적인 문제를 설명합니다.

발생할 수 있는 모든 문제에 대한 솔루션을 여기에서 제공할 수는 없습니다. 아래 기법을 사용하여 문제의 원인을 격리하십시오. 솔루션이 명확하지 않은 경우 특정 문제를 해결하는 데 도움이 될 수 있는 많은 인터넷 리소스가 있습니다.

[Mendix 커뮤니티](https://community.mendix.com/p/questions)에서 도움을 요청할 수도 있습니다.

유용한 팁이 있으면 이 문서에 자유롭게 추가하십시오.

### IIS 접근 권한 오류

브라우저에서 웹사이트를 열 때 접근 권한에 관한 IIS 오류 페이지가 표시됩니다.

보안 설정을 검증하십시오. IIS 서비스를 실행하는 사용자는 전체 디렉토리 경로에 접근할 수 있어야 합니다. (아마도 사용자: IIS_IUSRS이지만, 서비스 목록에서 확인하십시오). Mendix 애플리케이션이 "E:\Mendix\projects\MyApp"에 설치된 경우 IIS 사용자는 계층 구조의 **모든** 폴더(Mendix, projects, MyApp 및 MyApp 내의 web 폴더)에 접근할 수 있어야 합니다.

### 로그인 프로세스 실패: 404 - 서버를 찾을 수 없음

브라우저에서 로그인 페이지를 볼 수 있지만, 작업을 트리거하면 404 또는 "서버를 찾을 수 없음" 메시지가 표시됩니다.

* 추가 플러그인을 활성화하거나 설치해야 했습니까?

    그렇다면 전체 IIS 서비스를 재시작하십시오. 새로 설치된 설정을 구성할 수 있지만, 전체 IIS 서비스를 재시작할 때까지 효과가 없습니다.

* 재작성 규칙과 같은 새 구성 설정을 추가했습니까?

    물론 그렇겠지만, 웹사이트도 재시작했습니까? 재작성 URL과 같은 새 구성 옵션을 추가한 후 웹사이트를 재시작해야 합니다. 새로 생성한 사이트를 마우스 오른쪽 버튼으로 클릭하면 재시작 옵션을 볼 수 있습니다.

### 잘못된 자격 증명 사용 시 잘못된 응답

로그인할 수 있지만, 잘못된 비밀번호를 입력하면 로그인 페이지에 잘못된 로그인 대신 '서버를 찾을 수 없음'이 표시됩니다.

일부 IIS 설치는 HTTP 상태 코드 200-OK가 아닌 모든 응답의 내용을 숨깁니다. Mendix 로그인 시 잘못된 자격 증명을 입력하면 Mendix는 권한 없는 접근을 나타내기 위해 400 범위의 상태 코드를 반환합니다. 이 응답에는 사용자에게 표시하려는 응답이 포함된 JSON 문자열도 포함됩니다.

IIS가 상세 오류 메시지를 숨기면 Mendix가 작동할 수 없습니다. '상세 오류 메시지'를 켜야 합니다. 웹사이트에 대한 이 설정을 변경하는 방법에 대한 지침은 Microsoft 웹사이트에서 찾을 수 있습니다: [IIS7 : HOW TO enable the detailed error messages for the website while browsed from for the client browsers](https://blogs.msdn.microsoft.com/rakkimk/2007/05/25/iis7-how-to-enable-the-detailed-error-messages-for-the-website-while-browsed-from-for-the-client-browsers/)

### Mendix 앱 로그 검토

먼저 Mendix 애플리케이션에 도달하고 있는지 평가하십시오. IIS가 실행 중인 Mendix 앱에 무언가를 전달하면 로그에서 확인할 수 있습니다. 'Connector' 및 'Jetty' 로그 노드가 가장 유용할 수 있습니다. Connector 로그 노드는 들어오는 모든 요청에 대한 정보를 출력할 수 있습니다. Trace 로깅을 활성화하면 요청이 올바른 요청 핸들러에 도달하는지 확인할 수 있습니다.

'Connector'가 아무것도 출력하지 않으면 'Jetty'에서도 trace 로깅을 활성화할 수 있습니다. 'Jetty' 로그 노드는 Mendix와 설정되는 모든 연결에 대해 메시지를 출력합니다. Jetty가 trace 메시지를 출력하지 않으면 IIS 재작성 규칙이 확실히 올바르게 설정되지 않은 것입니다.

'Connector' 로그 노드에 정보가 있는 경우 요청이 어디로 전달되는지 확인할 수 있습니다. 이를 통해 재작성 규칙이 트래픽을 어디로 보내는지, 어떻게 변경해야 하는지 이해하는 데 도움이 됩니다.

### IIS 로그 검토

Mendix에 메시지가 도달하지 않는다고 결론을 내리면 IIS trace 로깅을 활성화할 수 있습니다. 이는 모든 재작성 규칙을 IIS trace 로그 파일에 출력합니다. IIS가 요청을 정확히 어떻게 변경하고 어디로 전달하는지 확인할 수 있습니다. 이를 통해 재작성 규칙의 구성을 수정하는 데 필요한 정보를 얻을 수 있습니다. 자세한 내용은 이 Microsoft 페이지를 참조하십시오: [Using Failed Request Tracing to Trace Rewrite Rules](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/using-failed-request-tracing-to-trace-rewrite-rules).

### 브라우저 개발자 도구 사용

애플리케이션을 열고 브라우저의 개발자 도구로 요청을 검사하십시오. 애플리케이션이 작동하지 않으면 성공적으로 실행되지 않는 요청이 표시됩니다. 이러한 요청을 검사하여 패턴이 있는지 확인하십시오.

1. 모든 /xas/ 요청이 오류로 실패합니다.

    재작성이 잘못 구성되었을 수 있습니다. 브라우저에서 /xas/ 폴더를 여십시오. 그러면 문제의 원인에 대한 더 자세한 설명이 표시될 수 있습니다.

2. 일부 JavaScript 파일을 열 수 없습니다.

    브라우저에서 직접 파일을 열어 보십시오. IIS 구성에 문제가 있으면 해당 URL을 열 때 더 많은 정보를 얻을 수 있습니다.

    여전히 오류가 발생하면 보안 문제일 가능성이 높습니다. 웹사이트가 실행되는 사용자에게 필요한 파일에 접근하기 위한 충분한 권한이 없습니다.

## Mendix Service Console 오류 문제 해결{#msc-errors}

### 서비스 시작 시 보안 오류

서비스를 시작하는 동안 시스템에서 보안 오류가 발생하면, 구성된 서비스 사용자가 Mendix 애플리케이션의 폴더에 대한 충분한 권한을 가지고 있는지 확인하십시오. 때로는 사용자 이름 앞에 도메인 이름을 붙여야 합니다. 즉, 단순히 user_name 대신 DOMAIN_NAME\user_name을 사용하십시오.

### 유형 초기화

때때로 이벤트 뷰어에 다음과 같은 메시지가 표시됩니다:

```text
EventType clr20r3, P1 mendixservice.exe, P2 1.0.3810.25652, P3 4c0cf0d8, P4 mendixservice, P5 1.0.3810.25652, P6 4c0cf0d8, P7 2, P8 6, P9 system.typeinitialization, P10 NIL.
```

서비스를 실행하는 데 사용되는 사용자 계정이 Mendix Service 실행 파일이 포함된 폴더에 대한 충분한 권한을 가지고 있는지 확인하십시오.

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Mendix에서 경고 메시지 지우기](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [원격으로 Java Action 디버깅](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 레벨](/howto/monitoring-troubleshooting/log-levels/)
* [Java Action 디버깅](/howto/monitoring-troubleshooting/debug-java-actions/)
* [마이크로플로우 및 나노플로우 디버깅](/refguide/debug-microflows-and-nanoflows/)

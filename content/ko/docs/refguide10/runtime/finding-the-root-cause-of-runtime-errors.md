---
title: "런타임 오류의 근본 원인 찾기"
url: /refguide10/find-the-root-cause-of-runtime-errors/
description: "Studio Pro 및 애플리케이션 로그를 통해 런타임 오류의 근본 원인을 찾는 방법을 설명합니다."
aliases:
    - /howto10/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/
---

## 소개

이 문서에서는 런타임 오류의 근본 원인을 찾는 데 필요한 정보를 찾는 방법을 보여줍니다. 애플리케이션에 표시되는 메시지는 종종 모호하고 설명이 부족합니다. 오류가 발생한 환경에 따라 이 정보를 찾는 두 가지 방법이 있습니다.

이 문서에서는 다음을 수행하는 방법을 배울 수 있습니다:

* 두 가지 방법을 통해 런타임 오류의 근본 원인 찾기

## 방법 #1 – Studio Pro 사용

애플리케이션이 Studio Pro에서 배포된 경우 정보는 콘솔에 있습니다:

{{< figure src="/attachments/refguide10/runtime/finding-the-root-cause-of-runtime-errors/18580024.png" class="no-border" >}}

오류가 발생하면 콘솔에 빨간 글꼴의 줄이 나타납니다. 이 줄을 더블 클릭하면 **View Log Line Details** 대화 상자가 표시됩니다:

{{< figure src="/attachments/refguide10/runtime/finding-the-root-cause-of-runtime-errors/18580023.png" class="no-border" >}}

이 창에는 세 가지 핵심 정보가 있습니다:

1. 오류가 발생한 Microflow 및 액션.
2. 발생한 오류 유형.
3. 오류가 발생한 표현식.

이 세 가지 정보로 오류 원인을 찾을 수 있어야 합니다. 이 정보로 원인을 확인할 수 없는 경우, 지정된 Microflow에 중단점을 설정하고 상황을 디버깅할 수 있습니다.

## 방법 #2 – 애플리케이션 로그 사용

애플리케이션이 서비스 콘솔 또는 클라우드에서 배포된 경우 정보는 애플리케이션 로그에서 확인할 수 있습니다.

{{% alert color="info" %}}
오류가 발생한 타임스탬프가 필요합니다. 로그에는 많은 정보가 포함될 수 있으며, 이 타임스탬프를 사용하면 검색이 훨씬 쉬워집니다. 로그 파일로 이동한 후 오류를 검색할 수 있습니다.
{{% /alert %}}

{{< figure src="/attachments/refguide10/runtime/finding-the-root-cause-of-runtime-errors/18580022.png" class="no-border" >}}

오류 시간에 해당하는 로그 섹션으로 이동합니다. 해당 시간대에 타임스탬프 뒤에 `ERROR –`가 있는 여러 줄이 있을 것입니다. 이것이 필요한 정보를 포함하는 로그 파일 줄입니다. 여기에 세 가지 핵심 정보가 있습니다:

1. 오류가 발생한 Microflow 및 액션.
2. 발생한 오류 유형.
3. 오류가 발생한 표현식.

이 세 가지 정보로 오류 원인을 찾을 수 있어야 합니다. 이 정보로 원인을 확인할 수 없는 경우, 지정된 Microflow에 중단점을 설정하고 상황을 디버깅할 수 있습니다.

## 더 읽기

* [경고 메시지 지우기](/howto10/monitoring-troubleshooting/clear-warning-messages/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto10/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/developerportal/deploy/monitoring-mendix-using-jmx/)
* [원격 Java Action 디버그](/howto10/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 레벨](/howto10/monitoring-troubleshooting/log-levels/)
* [Microflow 및 Nanoflow 디버깅](/refguide10/debug-microflows-and-nanoflows/)
* [원격 Microflow 디버깅](/refguide10/debug-microflows-remotely/)
* [Java Action 디버그](/howto10/monitoring-troubleshooting/debug-java-actions/)
* [런타임 오류의 근본 원인과 가장 일반적인 2가지 문제 해결](https://www.mendix.com/blog/the-root-cause-of-runtime-errors-and-resolving-the-2-most-common-issues/)

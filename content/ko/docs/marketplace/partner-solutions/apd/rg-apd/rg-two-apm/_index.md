---
title: "APM 2 레퍼런스 가이드"
url: /appstore/partner-solutions/apd/rg-two-apm/
weight: 1
aliases:
    - /apm/reference-guide/rg-2/reference-guide-2.html
    - /apm/reference-guide/rg-2/reference-guide-2/
---

## 소개

Application Performance Monitor(APM)는 성능 문제와 런타임 동작을 분석하는 데 도움이 되는 솔루션입니다.

Mendix용 CLEVR APM 2의 레퍼런스 가이드입니다. 다음 장으로 구성되어 있습니다:

* [Apps](/appstore/partner-solutions/apd/rg-two-apps/)
* [Environments](/appstore/partner-solutions/apd/rg-two-environments/)
* [대시보드](/appstore/partner-solutions/apd/rg-two-dashboard/)
* [APD 로그](/appstore/partner-solutions/apd/rg-two-logs/)
* [성능 통계](/appstore/partner-solutions/apd/rg-two-statistics/)
* [Performance Recorder](/appstore/partner-solutions/apd/rg-two-recorder/)
* [설정](/appstore/partner-solutions/apd/rg-two-settings/)

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/APM_Powered_logo.png" class="no-border" >}}

아래 섹션에서는 APM에 대한 간략한 설명과 그 기능 및 가능한 용도를 제공합니다.

## APM의 정의

CLEVR APM은 Wikipedia의 [Application Performance Management](https://en.wikipedia.org/wiki/Application_performance_management) 정의에 기반하며, 다음 사항을 강조합니다:

* APM은 "소프트웨어 애플리케이션의 성능과 가용성을 모니터링하고 관리하는 것"
* APM은 "예상 서비스 수준을 유지하기 위해 복잡한 애플리케이션 성능 문제를 감지하고 진단하기 위해 노력하는 것"
* APM은 "IT 메트릭을 비즈니스 의미(가치)로 변환하는 것"

물론 CPU, 메모리, 디스크와 같은 하드웨어 부분과 데이터베이스 및 웹 서버와 같은 구성 요소를 측정하기 위한 기본 인프라 프로브가 필요합니다. 그러나 더 높은 품질의 지원을 위해서는 애플리케이션과 그 성능도 살펴보아야 하며, 특히 이를 사용자의 비즈니스 관점에 연결해야 합니다.

소프트웨어에 버그가 포함되어 있다는 것은 모두 알고 있으며, 물론 운영에 투입하기 전에 모두 테스트합니다. 사용자에게 오류는 애플리케이션이 작동하지 않는다는 신호입니다. 오류가 예기치 않게 나타나면 사용자는 시스템에 대한 신뢰를 잃습니다. 지원팀의 표준 반응은 보통 질문을 하고(고객이 문제를 재현할 수 있는지 포함), 로깅을 켜도록 요청하고, 안전한 환경에서 문제를 조사할 수 있도록 데이터베이스 덤프를 요청하는 것입니다.

APM 도구는 운영 환경에서 애플리케이션의 동작과 성능을 분석하기 위한 귀중한 정보를 제공합니다. 이를 통해 고객에게 기다리거나 재현하거나 기술 정보를 전달하도록 요청할 필요 없이 직접 분석할 수 있습니다. 동일한 정보는 개발 중에도 사용할 수 있어 운영에서 문제가 나타나기 전에 예방할 수 있습니다.

## 성능 문제를 미리 감지하는 성능 통계

애플리케이션의 성능은 초기/개발 단계에서 테스트하기 어렵습니다. 데이터셋이 너무 작고 사용자의 정확한 사용 방식(예: 검색 동작)을 알 수 없습니다. Mendix 애플리케이션을 구축할 때 모든 성능 모범 사례를 적용하더라도 운영에서 문제가 나타날 수 있습니다. 보통 데이터셋이 커짐에 따라 시간이 지나면서 나타나므로 이를 어떻게 미리 감지할 수 있는가가 문제입니다.

Mendix APM은 Microflow, 클라이언트 API 요청 및 사용자 클릭 경로에 대한 통계 데이터를 수집합니다. 이러한 통계는 매시간 저장되며, 사용자가 문제를 제기하기 전에 추세를 확인하는 데 사용할 수 있습니다. 지원팀이 가장 오래 실행되고 가장 자주 실행되는 Microflow를 정기적으로 확인하여 개선할 수 있는지 보는 것이 강력히 권장됩니다. 이러한 통계를 드릴다운하여 성능 문제를 조사할 수 있습니다. 개별 액션, 루프 반복 및 정확히 어디에 장애물이 있는지를 보여줍니다.

개발 중에는 APM 확인을 일반적인 완료 정의에 추가하는 것이 권장됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/statistics_history.png" class="no-border" >}}

## 개별 트레이스를 수집하는 Performance Recorder

지원팀이나 DevOps가 성능 문제를 조사하려고 할 때 APM Performance Recorder를 사용할 수 있습니다. 이는 개별 액션, 루프 반복 및 정확히 어디에 장애물이 있는지를 보여줍니다.

## 비행 데이터 기록기

런타임 에이전트의 **Trap** 기능은 가장 높은 TRACE 레벨까지 모든 수준의 로깅을 수신합니다. 오류가 발생하면 메모리의 로깅과 오류가 APM 매니저 데이터베이스에 저장되어, 오류 발생 시 런타임이 처리 중이던 내용에 대한 정보를 제공합니다.

## 로그

로그는 Mendix Runtime 로그 메시지를 수집하고 APM 매니저 데이터베이스에 저장하는 데 사용됩니다.

이를 통해 로그 정보에 대한 원격 접근이 가능하며, 컨설턴트에게 제공되고, 쉽게 검색하고 분석할 수 있습니다.

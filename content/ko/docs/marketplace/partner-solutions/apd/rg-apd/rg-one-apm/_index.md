---
title: "APM 1 레퍼런스 가이드"
url: /appstore/partner-solutions/apd/rg-one-apm/
weight: 2
---

## 소개

Application Performance Monitor(APM)는 성능 문제를 분석하고 런타임 동작을 분석하는 데 도움이 되는 솔루션입니다.

Mendix용 CLEVR APM의 레퍼런스 가이드입니다. 다음 장으로 구성되어 있습니다:

* [대시보드](/appstore/partner-solutions/apd/rg-one-dashboard/)
* [구성](/appstore/partner-solutions/apd/rg-one-configuration/)
* [Log Tool](/appstore/partner-solutions/apd/rg-one-log-tool/)
* [Trap Tool](/appstore/partner-solutions/apd/rg-one-trap-tool/)
* [Statistics Tool](/appstore/partner-solutions/apd/rg-one-statistics-tool/)
* [Performance Tool](/appstore/partner-solutions/apd/rg-one-performance-tool/)
* [JVM Browser](/appstore/partner-solutions/apd/rg-one-jvm-browser/)
* [Measurements Tool](/appstore/partner-solutions/apd/rg-one-measurements-tool/)
* [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/)
* [Query Tool](/appstore/partner-solutions/apd/rg-one-query-tool/)
* [Load Test Recorder](/appstore/partner-solutions/apd/rg-one-load-test-recorder/)

아래 섹션에서는 APM에 대한 소개를 제공합니다. APM이 무엇인지, APM 제품군에 어떤 도구가 있는지, 그리고 무엇에 사용되는지에 대한 설명입니다. APM은 다음 도구로 구성됩니다:

* Statistics Tool
* Performance Tool
* Trap Tool
* Measurements Tool
* JVM Browser
* Query Tool
* Log Tool

## APM의 정의

Wikipedia에서 [Application Performance Management](https://en.wikipedia.org/wiki/Application_performance_management)에 대한 좋은 정의를 제공합니다.

APM은 소프트웨어 애플리케이션의 성능 및 가용성을 모니터링하고 관리하는 것입니다.
APM은 예상 서비스 수준을 유지하기 위해 애플리케이션 성능 문제를 감지하고 진단하기 위해 노력합니다.
APM은 IT 메트릭을 비즈니스 의미(가치)로 변환하는 것입니다.

물론 CPU, 메모리 및 디스크와 같은 하드웨어 부분과 데이터베이스 및 웹 서버와 같은 구성 요소를 측정하기 위한 기본 인프라 프로브가 필요합니다. 그러나 더 높은 품질의 지원을 위해서는 애플리케이션과 그 성능도 살펴보아야 하며, 특히 이를 사용자의 비즈니스 관점에 연결해야 합니다.

소프트웨어에 버그가 포함되어 있다는 것은 모두 알고 있으며, 물론 운영에 투입하기 전에 모두 테스트합니다. 사용자에게 오류는 애플리케이션이 제대로 작동하지 않는다는 신호입니다. 오류가 예기치 않게 나타나면 사용자는 시스템에 대한 신뢰를 잃게 됩니다. 지원팀의 표준 반응은 항상 질문을 하는 것이었습니다. 고객이 문제를 재현할 수 있는지, 로깅을 켜고, 데이터베이스 덤프를 요청하여 안전한 환경에서 문제를 조사할 수 있도록 하는 것입니다.

{{% alert color="info" %}}

APM 도구는 운영 환경에서 애플리케이션의 동작과 성능을 분석하기 위한 귀중한 정보를 제공합니다. 테스트 도구는 물론 개발 및 테스트 단계에서도 사용해야 합니다.

{{% /alert %}}

## 성능 문제를 미리 감지하는 Statistics Tool

애플리케이션의 성능은 초기 단계에서 테스트하기 어렵습니다. 데이터셋이 작고 사용자의 검색 동작 등 정확한 사용 방식을 알 수 없습니다. 따라서 Mendix 애플리케이션을 구축할 때 모든 성능 모범 사례를 적용하더라도 운영 환경에서 일부 문제가 나타날 수 있습니다. 보통 시간이 지남에 따라 나타나므로, 문제는 이를 어떻게 미리 감지할 수 있는가입니다.

APM Statistics Tool은 Microflow 및 클라이언트 API 요청에 대한 통계 데이터를 수집합니다. 이러한 통계는 주기적으로(보통 매일, 구성 가능) 저장되며, 사용자가 문제를 제기하기 훨씬 전에 추세를 확인하는 데 사용됩니다. 또한 좋은 습관으로, 지원팀은 가장 오래 실행되고 가장 자주 실행되는 Microflow를 정기적으로 확인하여 개선할 수 있는지 봅니다.

Statistics Tool(로드 밸런싱 환경에서는 Microflow가 실행되는 서버를 볼 수 있습니다)입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Overview.png" class="no-border" >}}

## Microflow를 기록하는 Performance Tool

지원팀이 성능 문제를 조사하려고 할 때, Statistics Tool을 통한 사전 조사든 고객이 문제를 보고한 후의 사후 조사든 APM Performance Tool을 사용합니다. 이를 통해 액션 수준에서 Microflow의 단계별 소요 시간을 볼 수 있습니다. 개별 SQL 문까지 드릴다운할 수 있습니다. 데이터베이스에 Explain Plan을 요청하여 데이터베이스가 쿼리를 처리하는 방법, 사용하는 인덱스 등을 알려줄 수도 있습니다. 이 도구는 문제를 빠르게 정확히 파악하는 데 도움이 됩니다.

호출 트리로, 호출된 Microflow와 루프의 한 번의 반복을 보여주며 소요 시간으로 필터링됩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Tree_View.png" class="no-border" >}}

아래는 Performance Tool의 출력입니다. 모든 액션을 더블 클릭할 수 있으며, Microflow 호출의 경우 다음 Microflow로 이동할 수 있습니다. 루프의 경우 개별 반복을 볼 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Browse_Microflow.png" class="no-border" >}}

액션 중의 SQL 문입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Browse_Actions.png" class="no-border" >}}

## 비행 데이터 기록기인 Trap Tool

APM Trap Tool은 가장 높은 TRACE 레벨까지 모든 수준의 로깅을 항상 수신하며 마지막 몇 초(구성 가능!)를 기억합니다. 오류가 발생하면 오류로 이어지는 마지막 몇 초의 로깅이 데이터베이스에 저장됩니다. APM Measurements Tool은 메모리 사용량이나 CPU를 모니터링하고 임계값에 도달하면 로깅을 트랩할 수도 있습니다. 이렇게 하면 문제가 처음 발생할 때 정보가 수집되어 문제 해결이 상당히 빨라집니다.

## 더 많은 정보를 수집하고 필요시 알람을 트리거하는 Measurements Tool

APM Measurements Tool은 비즈니스 로직과 측정을 연결하며, 모델과 CPU 측정과 같은 인프라 메트릭 사이의 격차를 해소합니다. APM Measurements Tool은 여러 소스에서 정보를 가져옵니다. 첫째, JConsole, VisualVM 및 JMC와 같은 표준 Java 관리 도구에서 보여주는 것과 유사한 정보를 제공하는 간단한 APM JVM Browser. 둘째, 데이터베이스별 메타 정보 및/또는 비즈니스 값을 모니터링하기 위한 비즈니스 및 데이터베이스 쿼리를 수행하는 APM Query Tool. 셋째, APM JVM Browser 또는 기타 Java JVM 관리 플랫폼을 통해 Mendix와 APM 도구의 내부 메트릭도 사용할 수 있습니다.

측정값은 임계값에 대한 이벤트를 트리거하는 데 사용할 수 있습니다. 예를 들어 메모리의 80% 이상이 사용되거나 CPU의 80% 이상이 사용되면 트리거가 발생합니다. 일부 고객에서 지원팀은 모델 변경에 대한 트리거를 구성하여 새로운 배포가 수행될 때 알림을 받습니다.

트리거는 로깅을 트랩하거나, 예를 들어 이메일을 보내거나 힙 덤프를 만드는 Microflow를 실행하는 것일 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Measurements_Tool.png" class="no-border" >}}

## JVM Browser

JVM Browser는 JConsole, JVisualVM 또는 JMC와 같은 도구와 유사한 JVM 정보를 보는 데 사용할 수 있습니다. 이를 통해 Mendix 애플리케이션을 실행하는 머신에 대한 전문가와 기술적 접근 없이도 기능적 담당자에게 정보를 제공할 수 있습니다.

## Query Tool

Query Tool을 사용하면 XPath, OQL 및 JDBC 쿼리를 수행하여 비즈니스 통계(리포트 등), 애플리케이션 통계(동시에 실행 중인 예약된 이벤트 수) 또는 세션 수와 같은 데이터베이스별 통계를 수집할 수 있습니다. 이 모듈은 Performance Tool의 기능에도 사용됩니다.

## Log Tool

Log Tool은 Mendix Runtime 로그 메시지를 수집하고 데이터베이스에 저장하는 데 사용됩니다.
이를 통해 로그 정보에 대한 원격 접근이 가능하며, 컨설턴트에게 제공되고, 쉽게 검색하고 분석할 수 있습니다.

로그 리라우팅은 Java 콘솔, Java util 라이브러리 또는 log4j 라이브러리로 보내지는 Java 메시지가 Mendix 로그로 리라우팅되도록 합니다. 예를 들어 javamail은 디버그 출력을 콘솔로 보내는데, 이 옵션을 사용하면 해당 정보를 수집하여 Mendix 로그뿐만 아니라 APM Log Tool 및 APM Trap Tool에서도 볼 수 있게 됩니다. 이는 이메일 문제와 웹 서비스 보안 및 인증서 관련 문제를 해결하는 데 지원팀에 많은 도움이 되었습니다.

---
title: "앱 성능 관리"
url: /howto9/monitoring-troubleshooting/manage-app-performance/
weight: 12
description: "New Relic을 사용하여 앱 성능을 관리하는 방법을 설명합니다."
---

## 소개

Mendix 앱 성능을 모니터링 및/또는 관리하는 데 사용할 수 있는 여러 도구가 있습니다.

### Mendix Cloud

**Mendix Cloud**에 배포된 앱의 경우 [Metrics](/developerportal/operate/metrics/)에 설명된 표준 메트릭을 사용할 수 있습니다.

[Datadog](/developerportal/operate/datadog-metrics/), [AppDynamics](/developerportal/operate/appdynamics-metrics/), 또는 [Dynatrace](/developerportal/operate/dynatrace-metrics/)와의 통합도 설정할 수 있습니다.

### 기타 배포 옵션

{{% alert color="warning" %}}
Mendix Cloud에 배포된 앱의 경우 Datadog, AppDynamics, Dynatrace만 지원됩니다.
{{% /alert %}}

Mendix Cloud 외부에서는 다음 모니터링 도구를 사용할 수 있습니다:

* Datadog
* New Relic – [New Relic으로 앱 성능 관리하기](/howto9/monitoring-troubleshooting/manage-app-performance-with-new-relic/) 참조
* Dynatrace – 예를 들어 [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/#runtime-tab)에서
* 기타 도구 – Mendix *Cloud Foundry Buildpack*의 [Telemetry Configuration](https://github.com/mendix/cf-mendix-buildpack#telemetry-configuration)에서 확인할 수 있습니다.

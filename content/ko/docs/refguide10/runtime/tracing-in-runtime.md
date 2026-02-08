---
title: "Tracing"
url: /refguide10/tracing-in-runtime/
beta: true
description: "Mendix Runtime에서 트레이싱을 설정하고 사용하는 방법을 설명합니다."
---

## 소개

버전 10.18.0부터 Mendix는 OpenTelemetry를 통한 트레이싱을 지원합니다. 트레이싱이 활성화되면 런타임은 오류 및 성능 분석에 도움이 되는 트레이스를 생성합니다.
이러한 트레이스는 [Jaeger](https://www.jaegertracing.io/) 또는 [Datadog](https://www.datadoghq.com/)과 같은 관측성 도구로 전송할 수 있습니다.

{{% alert color="warning" %}}
트레이싱은 현재 Mendix Cloud에서 지원되지 않습니다.
{{% /alert %}}

## 생성된 Span

Mendix 10.18.0 이상에서 런타임은 다음에 대한 Span을 생성합니다:

* 프론트엔드에서 오는 런타임 작업(예: Microflow 호출, 검색, 커밋, 삭제)
* 런타임 내의 Microflow 실행(하위 Microflow 호출 포함)
* Microflow 루프 및 루프 반복
* Task Queue 작업 실행

## 구성

### 최소 구성 {#min-configuration}

Mendix 10.24에서는 `App Settings` -> `Configuration` 대화 상자에서 트레이싱을 활성화할 수 있습니다. `Tracing` 탭에서 트레이싱을 활성화하고 **Endpoint**와 **Service Name**을 지정할 수 있습니다.

{{< figure src="/attachments/refguide10/runtime/tracing-in-runtime/tracing-configuration.png" >}}

#### Mendix 10.19.0 ~ 10.23.x {#min-configuration-pre-10-24}

Mendix 10.19와 10.23.x 사이에서 트레이싱 구성은 [OpenTelemetry Java Agent](https://opentelemetry.io/docs/zero-code/java/agent/)를 통해 처리됩니다. 최소 트레이싱 구성을 설정하려면 다음 단계를 따르십시오:

1. [OpenTelemetry Java Instrumentation 릴리스 페이지](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases)에서 [opentelemetry-javaagent.jar](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar)를 다운로드합니다.
1. Studio Pro의 [Server 설정](/refguide10/configuration/#server)에서 **Extra JVM parameters** 필드를 찾아 다음을 추가합니다:

    ```
    -javaagent:{/path/to/opentelemetry-javaagent.jar} -Dotel.instrumentation.common.default-enabled=false -Dotel.instrumentation.opentelemetry-api.enabled=true -Dotel.service.name="{My App}"
    ```
  
    * `{/path/to/opentelemetry-javaagent.jar}`을 이전에 저장한 에이전트의 위치로 변경하십시오. 파일의 전체 절대 경로여야 합니다. 예: `C:\Users\SomeUser\Documents\opentelemetry-javaagent.jar`(Windows) 또는 `/Users/SomeUsers/Documents/opentelemetry-javaagent.jar`(MacOS).
    * `{My App}`을 트레이스가 표시될 이름으로 변경하십시오.

이렇게 하면 내부 트레이싱을 비활성화하면서 Mendix 관련 트레이싱이 활성화됩니다. OpenTelemetry Java Agent는 기본적으로 `http/protobuf` 프로토콜을 사용하여 http://localhost:4318/v1/traces로 트레이스를 전송합니다.

#### Mendix 10.18

Mendix 10.18에서 트레이싱을 활성화하기 위한 최소 구성은 다음과 같습니다:

* `OpenTelemetry.Enabled` [런타임 설정](/refguide10/custom-settings/)을 `true`로 설정
* `otel.service.name` 런타임 설정을 서비스 이름으로 설정

이렇게 하면 트레이싱이 활성화됩니다. 트레이스는 기본적으로 `grpc` 프로토콜을 사용하여 http://localhost:4317로 전송됩니다.

### 테스트

트레이싱을 테스트하려면 [Jaeger](https://www.jaegertracing.io/)를 사용할 수 있습니다. 예를 들어, all-in-one 바이너리 또는 Docker 이미지를 사용할 수 있습니다. Jaeger는 기본적으로 위의 엔드포인트를 수신합니다.

또는 기본 엔드포인트를 수신하고 OpenTelemetry를 지원하는 백엔드로 전송하도록 구성할 수 있는 [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/)를 설정할 수 있습니다. APM 벤더에 문의하여 OpenTelemetry가 지원되는지 확인하십시오. 무료 온라인 Collector 구성 도구 [OTelBin](https://github.com/dash0hq/otelbin)이 Collector 구성에 도움이 될 수 있습니다.

### 모든 설정

아래에 Mendix 런타임에서 지원하는 설정을 나열합니다. `otel.` 접두사가 붙은 설정에 대한 참조는 [SDK 구성](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties)을 참조하십시오.

Mendix 10.19.0 이상에서는 **Extra JVM parameters** 필드에 추가할 수 있는 시스템 속성(예: `-Dotel.exporter.otlp.traces.endpoint`) 또는 환경 변수를 통해 Java Agent를 구성할 수 있습니다.

| Name | Description | Default |
|------|-------------|---------|
| `otel.service.name` | 서비스 이름입니다. | `runtimelauncher` *(Mendix 10.18에서는 `unknown_service:java`)* |
| `otel.resource.attributes` | 모든 Span에 포함할 추가 리소스 속성입니다. 예: `attribute1=value1,attribute2=value2` | |
| `otel.traces.exporter` | 쉼표로 구분된 Span 내보내기 목록입니다. 지원되는 값: `otlp`, `console`, `logging-otlp`, `none`. | `otlp` |
| `otel.exporter.otlp.traces.protocol` | OTLP 트레이스 요청에 사용할 전송 프로토콜입니다. 옵션: `grpc`, `http/protobuf`. | `http/protobuf` (Java Agent, Mendix 10.19 이상), `grpc` (Mendix 10.18만 해당) |
| `otel.exporter.otlp.traces.endpoint` | 모든 OTLP 트레이스를 전송할 엔드포인트입니다. TLS 사용 여부에 따라 http 또는 https 스키마의 URL이어야 합니다. | 프로토콜이 `http/protobuf`일 때 `http://localhost:4318/v1/traces`<br>프로토콜이 `grpc`일 때 `http://localhost:4317` |
| `otel.exporter.otlp.traces.certificate` | 트레이스 서버의 TLS 자격 증명을 확인할 때 사용할 신뢰할 수 있는 인증서가 포함된 파일의 경로입니다. 파일에는 PEM 형식의 하나 이상의 X.509 인증서가 포함되어야 합니다. | 기본적으로 호스트 플랫폼의 신뢰할 수 있는 루트 인증서가 사용됩니다. |
| `otel.exporter.otlp.traces.client.key` | 트레이스 클라이언트의 TLS 자격 증명을 확인할 때 사용할 개인 클라이언트 키가 포함된 파일의 경로입니다. 파일에는 PKCS8 PEM 형식의 개인 키 하나가 포함되어야 합니다. | 기본적으로 클라이언트 키 파일을 사용하지 않습니다. |
| `otel.exporter.otlp.traces.client.certificate` | 트레이스 클라이언트의 TLS 자격 증명을 확인할 때 사용할 신뢰할 수 있는 인증서가 포함된 파일의 경로입니다. 파일에는 PEM 형식의 하나 이상의 X.509 인증서가 포함되어야 합니다. | 기본적으로 인증서 파일을 사용하지 않습니다. |
| `OpenTelemetry.Enabled` *(Mendix 10.18만 해당)*| 트레이싱을 비활성화하거나 활성화하기 위해 `true` 또는 `false`로 설정할 수 있습니다. | `false` |

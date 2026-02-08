---
title: "Deploy a Business Event"
url: /appstore/services/business-events-deployment/
description: "Mendix Business Events 서비스의 모델링 및 배포에 대해 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[Studio Pro 9.24 이상](/appstore/services/business-events-configuration/#two-way-be)에서 서비스를 생성한 후 앱에서 모델링을 시작하고 비즈니스 이벤트를 배포할 수 있습니다.

## 비즈니스 이벤트를 사용한 모델링 (지원되는 모든 Studio Pro 버전) {#be-modelling}

비즈니스 이벤트는 Mendix Business Events 서비스에 포함된 **PublishedBusinessEvent** 엔터티를 특수화하는 엔터티를 사용하여 정의됩니다.

1. [도메인 모델(Domain Model)](/refguide/domain-model/)에서 비즈니스 이벤트로 게시할 엔터티를 더블클릭하여 엔터티 속성을 표시하십시오.
2. **Generalization** 필드에서 **Select**를 클릭하고 **PublishedBusinessEvent** 엔터티를 선택하십시오.

엔터티의 기본값은 **PublishedBusinessEvent**에서 가져오며, 엔터티는 특수화된 엔터티처럼 동작합니다. 자세한 내용은 [일반화, 특수화 및 상속](/refguide/generalization-and-association/)을 참조하십시오.

엔터티 위의 파란색 배경 텍스트는 **BusinessEvents** 서비스의 **PublishedBusinessEvent** 엔터티를 기반으로 한 특수화된 엔터티임을 나타냅니다:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/specialized-entity.png" class="no-border" width="200" >}}

### Publish Business Event 액티비티 사용

비즈니스 이벤트를 정의하고 게시된 서비스에 추가한 후, 주목할 만한 이벤트가 발생할 때마다 마이크로플로우에서 이벤트를 게시할 수 있습니다.

{{% alert color="info" %}}
비즈니스 이벤트를 게시하려면 마이크로플로우가 어딘가에서 트리거되어야 합니다. {{% /alert %}}

**Publish business event** 액티비티를 사용하여 다음을 수행하십시오:

1. 비즈니스 이벤트를 게시할 마이크로플로우를 여십시오.
2. 게시하려는 비즈니스 이벤트의 객체를 생성하십시오.
3. **Toolbox**에서 **Publish business event** 액션을 검색하여 드래그한 후 마이크로플로우에 배치하십시오.
4. **Publish business event**를 더블클릭하여 **Publish Business Event** 속성 상자를 표시하십시오.
5. 다음 정보를 입력하십시오:
    * **Subject** - 페이로드에서 예상할 수 있는 내용에 대한 짧은 설명과 같이 유용하다고 생각되는 내용을 입력하십시오. 이메일 제목과 유사합니다. 구독한 앱이 이벤트가 유용한지 판단하는 데 도움이 됩니다.
    * **Event Data** - 게시하려는 비즈니스 이벤트를 나타내는 엔터티를 입력하십시오.
    * **Task Queue/Output** - 이 값은 현재 비즈니스 이벤트에 사용되지 않으며 변경하지 않아야 합니다.

{{% alert color="info" %}}
**Publish Business Event** 액티비티는 게시 프로세스 시작 시 모든 이벤트 객체를 **Outbox** 엔터티로 커밋합니다. 이것은 구현 세부 사항입니다. 게시 프로세스 중에 문제가 발생하면 최대 48시간 동안 재시도 메커니즘이 트리거됩니다. 게시 마이크로플로우가 실패하면 **Outbox**의 엔터티도 롤백됩니다. **Outbox** 엔터티에 대한 자세한 내용은 [비즈니스 이벤트 엔터티](#be-entities) 섹션을 참조하십시오.
{{% /alert %}}

### 비즈니스 이벤트 엔터티 {#be-entities}

**PublishedBusinessEvent** 및 **ConsumedBusinessEvent** 엔터티는 비즈니스 이벤트를 게시하기 위해 도메인 모델에 포함해야 합니다. **DeadLetterQueue** 및 **Outbox**는 Mendix Business Events 서비스의 일부입니다.

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/four-entities-in-domain-model.png" class="no-border" >}}

* **PublishedBusinessEvent** - 이 비영구 엔터티는 모든 게시된 이벤트에 포함될 필드 설정을 가지고 있습니다. 모든 게시된 비즈니스 이벤트는 이 엔터티에서 상속됩니다. 세 개의 필드는 Java Action에서 설정할 수 있습니다. 게시된 비즈니스 이벤트의 모양을 정의하는 데 사용됩니다.
* **ConsumedBusinessEvent** - 이 엔터티는 모든 소비된 이벤트에 포함될 필드를 가지고 있습니다. 모든 소비된 비즈니스 이벤트는 이 엔터티에서 상속됩니다. 이러한 필드는 서비스에서 설정되며, 이벤트 페이로드와 일치하는 추가 필드도 설정됩니다. 구독한 비즈니스 이벤트에서 수신하려는 내용을 정의합니다.
* **DeadLetterQueue** - Business Events 서비스의 도메인 모델 내에 있는 이 영구 엔터티는 소비자가 수신할 때 성공하지 못했거나 오류가 발생한 비즈니스 이벤트 활동에 대해 생성된 이벤트의 기록을 생성하는 데 사용되며, 문제 해결을 위해 참조할 수 있습니다. DeadLetterQueue 엔터티를 조회하여 처리할 수 없었던 수신 이벤트를 확인할 수 있습니다.
* **Outbox** - 이 엔터티는 이벤트를 전송하기 전에 저장하는 데 사용됩니다. 이 엔터티는 비즈니스 이벤트가 트리거되는 마이크로플로우에 연결됩니다. 마이크로플로우가 실패하면 동일한 트랜잭션의 일부로 엔터티가 제거됩니다. 런타임에 이벤트 브로커가 다운되면 비즈니스 이벤트가 **Outbox**에 축적됩니다. 48시간 동안 점점 늘어나는 간격으로 재시도되며, 그 시간이 지나면 실패합니다. 이벤트가 성공적으로 전달되면 **Outbox**에서 삭제됩니다.

### 실패한 메시지에 대한 Dead Letter Queue {#dead-letter-queue}

비즈니스 이벤트가 수신될 때마다 구독의 일부로 생성된 엔터티와 일치하도록 변환됩니다. 가져온 AsyncAPI 문서를 기반으로 비즈니스 이벤트 내의 엔터티가 변경되면 엔터티를 처리할 수 없게 될 수 있습니다. 이러한 시나리오에서는 비즈니스 이벤트가 데이터 열 내에 엔터티의 표현을 포함하는 **Dead Letter Queue**에 저장됩니다.

오류가 있을 때 이 엔터티에서 확인해야 할 가장 중요한 필드는 다음과 같습니다:

* `type`
* `source`
* `subject`
* `data`

이러한 필드를 사용하여 페이로드를 Mendix 엔터티로 다시 변환하십시오. 원래 이벤트에서 subject가 누락된 경우 값은 빈 문자열이 됩니다. 소비된 이벤트의 형식이 올바르지 않으면 이벤트가 Dead Letter Queue로 이동하지 않고 오류가 발생합니다.

## Mendix Event Broker {#mendix-event-broker}

Mendix Cloud 내에서는 Mendix Business Events 모듈을 사용하여 쉽게 애플리케이션을 배포할 수 있도록 Mendix Event Broker가 제공됩니다. 자세한 내용은 [Mendix Event Broker](/appstore/services/event-broker/)를 참조하십시오.

### 토픽 및 채널 {#topics-channels}

이벤트는 채널(토픽이라고도 함)에 배치됩니다. 채널을 구독한 앱은 해당 채널에 게시된 이벤트를 수신합니다.

Free App에서 게시된 이벤트는 멀티테넌트 무료 Event Broker의 하나의 공유 회사 채널에 게시됩니다. 라이선스가 부여된 노드에서 실행되는 앱에서 게시된 이벤트는 회사 Event Broker의 자체 채널에 게시됩니다. Kafka의 토픽으로 구현된 이러한 채널은 이벤트를 게시하는 앱의 배포 시 자동으로 생성됩니다.

자체 Kafka 클러스터("Bring Your Own Kafka")의 토픽 및 채널 설정에 대한 정보는 [자체 Kafka 클러스터에 대한 배포 상수 구성](#deployment-constants)을 참조하십시오.

### 오류 처리

이벤트 게시는 게시가 발생하는 트랜잭션의 일부입니다. 즉, 마이크로플로우 로직에서 문제가 발생하여 모든 변경 사항을 롤백하면 이벤트 게시도 롤백됩니다. 다른 앱으로 이벤트가 전송되지 않습니다.

이는 다음과 같이 구현됩니다:

* 게시된 이벤트는 임시 엔터티 테이블에 저장됩니다
* 트랜잭션이 성공적으로 완료되면 이벤트가 Mendix Event Broker로 전달됩니다
* 게시 마이크로플로우가 실패하고 변경 사항이 롤백되면 게시된 이벤트도 포함됩니다

## 배포 {#deployment}

비즈니스 이벤트는 네 가지 배포 모델을 제공합니다:

* [Local Setup Tool](https://github.com/mendix/event-broker-tools)을 사용한 로컬 배포
* 무료 멀티테넌트 이벤트 브로커를 사용하는 Free App
* Mendix Cloud에서 실행되는 [Mendix Event Broker](#mendix-event-broker)를 사용하는 프로덕션 앱
* 자체 Kafka 클러스터를 실행하는 앱 (Bring Your Own Kafka)

### 로컬 배포

로컬 배포에는 [Local Setup Tool](https://github.com/mendix/event-broker-tools)을 사용하십시오. 자세한 내용은 [Business Events Local Setup Tool 사용](#local-setup)을 참조하십시오.

무료 클러스터에 앱을 배포하면 무료 이벤트 브로커가 자동으로 제공되고 구성됩니다. Mendix Free App 환경에서는 앱당 하루 1000개의 이벤트 제한이 있습니다.

### Free App 배포

무료 클러스터에 앱을 배포하면 무료 이벤트 브로커가 자동으로 제공되고 구성됩니다. Mendix Free App 환경에서는 앱당 하루 1000개의 이벤트 제한이 있습니다.

조직의 모든 Free App은 모든 Free App이 회사를 위한 단일 무료 채널을 공유하므로 조직의 Free App에서 게시한 모든 이벤트를 수신할 수 있습니다.

### 프로덕션 배포

프로덕션에 배포하려면 [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907)에 대한 구독이 있어야 합니다. 자세한 내용은 *Mendix Event Broker*의 [Mendix Event Broker 라이선스](/appstore/services/event-broker/#event-broker-license) 섹션을 참조하십시오.

배포 전에 모든 앱과 환경에 대해 Mendix Event Broker를 활성화해야 합니다. 자세한 내용은 [Mendix Event Broker](/appstore/services/event-broker/)를 참조하십시오.

#### Mendix Event Broker 활성화 시 경고 메시지

환경에 대해 [Mendix Event Broker](#mendix-event-broker)를 활성화한 경우 이벤트 브로커 서비스를 활성화할 수 없다는 경고를 받을 수 있습니다. 이 메시지가 표시되면 프로덕션 환경 화면의 [Services](/developerportal/deploy/environments/#services) 탭에서 다음을 수행하십시오:

1. 환경의 체크박스를 **Enable** 하십시오.
1. *.mda* 파일을 환경으로 전송하십시오.
1. 환경을 재시작하십시오.

#### 배포 순서

비즈니스 이벤트 서비스를 정의하는 앱(**앱 A**)은 해당 비즈니스 이벤트 서비스를 사용하는 앱(**앱 B**)이 실행되기 전에 배포되고 실행되어야 합니다.

이 요구 사항이 충족되지 않으면 **앱 B**가 종료되거나, [Business Events](https://marketplace.mendix.com/link/component/202649) 서비스 버전 3.7.0 이상을 사용하는 경우 로그에 오류가 발생합니다.

이 경우 다음을 수행하십시오:

1. **앱 A**가 **앱 B**와 동일한 스페이스에서 시작되었는지 확인하십시오.
2. **앱 B**를 재시작하십시오.

### 자체 Kafka 클러스터를 실행하는 앱 (Bring Your Own Kafka) {#byok}

비즈니스 이벤트는 Apache Kafka로 구동됩니다([Mendix Event Broker](#mendix-event-broker) 참조). [Mendix Event Broker](#mendix-event-broker) 대신 자체 Kafka 클러스터를 사용하려면 [자체 Kafka 클러스터에 대한 배포 상수 구성](#deployment-constants)을 참조하십시오. 자체 클러스터를 실행하는 것을 Bring Your Own Kafka(BYOK)라고 합니다.

#### 자체 Kafka 클러스터에 대한 배포 상수 구성 {#deployment-constants}

Business Events 서비스는 [상수(Constants)](/refguide/constants/)를 통해 구성을 제공합니다. 이러한 상수는 배포 시 Kafka 클러스터에 연결하도록 설정됩니다.

모든 상수는 Mendix Business Events 서비스의 일부입니다.

* `BusinessEvents.ServerUrl` - Kafka 부트스트랩 서버를 `host1:port1,host2:port2,...` 형식으로 구성하십시오. 이 설정은 앱을 연결하는 데 사용됩니다.
* `BusinessEvents.Username` 및 `BusinessEvents.Password` - 이 서비스는 Kafka의 SASL/SCRAM SHA-512 인증 메커니즘을 지원하며, Kafka 클러스터는 이를 사용하여 클라이언트를 인증하도록 설정되어야 합니다. 자세한 내용은 Apache Kafka 문서의 [Configuring Kafka Brokers](https://kafka.apache.org/documentation/#security_sasl_scram_brokerconfig)를 참조하십시오.
* `BusinessEvents.EventBrokerSpace` - 이 설정은 이벤트를 Kafka [토픽](#topics-channels)으로 그룹화하는 데 도움이 됩니다. 이 설정을 사용하면 각 비즈니스 이벤트가 자체 토픽에 배치됩니다. `EventBrokerSpace` 값을 `test` 또는 `production`과 같은 환경 이름(또는 Kubernetes 네임스페이스)으로 설정하십시오. 이렇게 하면 앱에 정의된 각 비즈니스 이벤트가 특정 환경에 배포될 때 자체 토픽을 갖게 됩니다. 예를 들어, 앱에 정의된 `OrdersReceived` 비즈니스 이벤트가 두 개의 다른 환경에 배포되면 두 개의 토픽이 생성됩니다. 토픽은 `businessevents.<channel>.<EventBrokerSpace>` 형식으로 명명됩니다. 채널은 UUID로 작성되며 이벤트를 그룹화하는 데 사용됩니다.
* `TruststoreLocation` 및 `TruststorePassword` (선택 사항) - 이 서비스는 서버의 SSL 검증을 위해 Truststore와 비밀번호를 추가하는 것을 지원합니다.
* `ConsumerStartupDelaySeconds` (선택 사항) - Business Event 소비자는 시작 후 마이크로플로우의 일부로 자동 시작됩니다. 이 상수를 설정하여 시작을 지연시킬 수 있습니다. 시작은 별도의 스레드에서 발생하므로 Business Event 소비자가 아직 시작을 기다리는 동안에도 시작 후 마이크로플로우가 완료될 수 있습니다. 1보다 큰 값만 효과가 있습니다.

{{% alert color="warning" %}} `BusinessEvents.EventBrokerSpace` 상수에는 특수 문자를 사용할 수 없습니다. {{% /alert %}}

토픽 및 채널에 대한 자세한 설명은 [토픽 및 채널](#topics-channels) 및 [Mendix Event Broker](#mendix-event-broker)를 참조하십시오.

#### 자체 Kafka 클러스터 실행 시 다루지 않는 DevOps 작업

자체 Kafka 클러스터를 운영하는 것은 Mendix Cloud 환경의 범위를 벗어나므로 다음 `DevOps` 작업을 고려해야 합니다(이 목록은 포괄적이지 않습니다):

* Kafka의 클라이언트 사용자 이름 및 비밀번호 프로비저닝 - Kafka 클러스터에서 사용자 이름과 비밀번호 생성은 고객이 관리해야 합니다.
* Kafka의 토픽 생성 - Kafka 클러스터가 `auto.create.topics.enable`을 true로 설정(Apache Kafka의 기본 설정)하지 않는 한 고객이 토픽을 생성해야 합니다. 자세한 내용은 [토픽 및 채널](#topics-channels)을 참조하십시오.
* 접근 제어 - Kafka 클러스터가 `allow.everyone.if.no.acl.found`를 true로 설정(Apache Kafka의 기본 설정)하지 않는 한 ACL은 고객이 유지 관리해야 합니다.

#### 자체 Kafka 클러스터에서 토픽 관리

채널 UUID는 내보낸 AsyncAPI 문서의 channels 섹션을 검사하여 확인할 수 있습니다.

토픽은 `businessevents.<channel>.<EventBrokerSpace>` 형식으로 명명됩니다. 채널은 UUID로 작성되며 이벤트를 그룹화하는 데 사용됩니다.

## 로컬 테스트 {#local-testing}

개발 및 테스트를 위해 이벤트 브로커를 포함하여 모든 앱을 로컬 워크스테이션에서 실행하는 것이 유용하며, `docker-compose`를 통해 Kafka를 실행하여 수행할 수 있습니다.

### Business Events Local Setup Tool 사용 {#local-setup}

Mendix Business Events [Local Setup Tool](https://github.com/mendix/event-broker-tools)은 Kafka가 포함된 Docker 컨테이너를 설정하여 로컬 배포를 돕습니다. 이 저장소에는 필요한 `docker-compose.yml` 파일이 포함되어 있습니다.

`docker-compose up` 명령을 사용하여 Docker 클러스터를 시작하십시오. 필요한 모든 Docker 이미지를 다운로드하거나 업데이트하고 Kafka를 시작합니다.

### PostgreSQL 데이터베이스 사용 (선택 사항) {#postgres-db}

Studio Pro에서 실행 중인 앱이 Docker를 사용하여 생성된 Postgres 데이터베이스를 사용하도록 구성할 수 있습니다. 모든 앱에 대해 서로 다른 데이터베이스 이름을 사용하는 것을 잊지 마십시오.

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/postgres.png" class="no-border" >}}

다음은 `docker-compose.yml` 파일에 추가할 수 있는 Postgres 서비스의 예입니다.

``` yml
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_DB: cspdb-dev
      POSTGRES_USER: mendix
      POSTGRES_PASSWORD: mendix
      PGPASSWORD: mendix
    ports:
      - "25432:5432"
```

## 추가 읽기

* [비즈니스 이벤트 구성](/appstore/services/business-events-configuration/)
* [Mendix Event Broker](/appstore/services/event-broker/)

---
title: "Mendix Business Events"
url: /appstore/services/business-events/
description: "Mendix Marketplace에서 제공하는 Mendix Business Events 서비스에 대해 설명합니다."
aliases:
    - /appstore/modules/business-events/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

비즈니스 이벤트(Business Events)는 앱 간에 이벤트 알림을 공유하기 위한 메일링 리스트와 유사합니다. 비즈니스 이벤트와 REST 또는 웹 서비스와 같은 기존 앱 간 통신의 주요 차이점은 서로 다른 앱 간에 직접적인 통신이 없다는 것입니다.

[Mendix Business Events](https://marketplace.mendix.com/link/component/202649)를 사용하면 애플리케이션에서 중요한 일이 발생했을 때 신호를 보낼 수 있으며, 다른 애플리케이션은 이러한 이벤트에 독립적으로 구독하여 알림을 받을 수 있습니다.

애플리케이션 간에 이러한 이벤트를 안정적으로 전달하려면 이벤트 브로커(Event Broker)가 필요합니다. 라이선스가 부여된 노드에서 Mendix Cloud를 실행하는 앱의 경우 [Mendix Event Broker](/appstore/services/event-broker/) 라이선스를 구매해야 합니다.

{{% alert color="info" %}}
비즈니스 이벤트는 Studio Pro [9.18](/releasenotes/studio-pro/9.18/) 이상에서 지원되며, 현재 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)에만 배포할 수 있습니다.{{% /alert %}}

## 일반적인 사용 사례

비즈니스 이벤트는 조직에서 어떤 일이 발생했을 때 후속 작업을 자동화하는 데 도움이 됩니다. 다음과 같은 다양한 상황에서 유용하게 사용할 수 있습니다:

* 한 앱에서 결제 영수증을 업로드하면 다른 앱이 회사 원장에서 지출 결제를 처리하는 경우
* 예약 앱에서 서비스 제공업체와 약속을 잡으면 서비스 제공업체의 일정 관리 앱에 추가해야 하는 경우
* 고객이 웹 쇼핑몰에서 주문을 하면 배송 예약, 청구서 발송, 재고 재주문 등의 후속 조치를 다른 앱에서 수행해야 하는 경우

## 사전 요구 사항

Mendix Business Events를 사용하려면 다음이 필요합니다:

* Mendix Marketplace의 [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) 서비스
* Studio Pro [9.24](/releasenotes/studio-pro/9.24/) 이상
* 이벤트 브로커: Mendix Cloud에서 실행되는 앱의 경우 라이선스가 부여된 [Mendix Event Broker](/appstore/services/event-broker/), 또는 [로컬 테스트](/appstore/services/business-events-deployment/#local-testing) 브로커 ([배포](/appstore/services/business-events-deployment/#deployment) 참조)
* 로컬 배포를 위한 [Docker](https://www.docker.com/)

## 라이선스 {#licensing}

Mendix Business Events 서비스 자체에는 라이선스가 필요하지 않지만, 프로덕션 환경에 배포하려면 이벤트 브로커가 필요합니다. [Mendix Event Broker 라이선스](/appstore/services/event-broker/#event-broker-license)를 구매하여 브로커를 설정할 수 있습니다. 자세한 내용은 [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) 플랫폼 서비스 페이지를 참조하십시오. 또한 [자체 Kafka 클러스터](/appstore/services/business-events-deployment/#byok)에서 비즈니스 이벤트를 실행할 수도 있습니다.

## 자주 묻는 질문

1. 마이크로플로우(Microflow)가 실패하는 경우 Publish Event 액션을 취소할 수 있습니까?

    예. 오류 핸들러에서 롤백을 수행하면 비즈니스 이벤트가 다른 애플리케이션으로 전송되지 않습니다.

2. 다른 소프트웨어에서 직접 Kafka 토픽에 자체 이벤트를 게시할 수 있습니까?

    아니요, Mendix Cloud Event Broker를 사용할 때는 현재 지원되지 않습니다. [자체 Kafka 클러스터](/appstore/services/business-events-deployment/#byok)에서는 가능합니다.

3. 관련된 객체 또는 연관된 객체를 단일 비즈니스 이벤트로 전송할 수 있습니까?

    아니요, 플랫 객체만 가능합니다. 복잡한 데이터 구조의 경우 비즈니스 이벤트를 수신한 후 소비 앱에서 복잡한 구조를 조회할 수 있는 API를 제공하십시오. 또는 비즈니스 이벤트의 문자열 속성에 매핑을 사용하여 JSON이나 XML을 저장할 수 있습니다.

4. Mendix 앱 간에 데이터를 복제하고 싶습니다. 비즈니스 이벤트를 사용해야 합니까?

    비즈니스 이벤트를 사용하면 지속적으로 폴링할 필요가 없으므로 데이터를 더 효율적으로 복제할 수 있습니다. 데이터를 공유하려면 여전히 OData 또는 REST를 사용하는 것이 좋습니다.

5. 비즈니스 이벤트는 정확히 한 번만 전달되는 것이 보장됩니까?

    [Outbox](/appstore/services/business-events-deployment/#be-entities)는 각 비즈니스 이벤트를 한 번만 게시합니다. 그러나 비즈니스 로직에서 Outbox에 중복 메시지를 보내는 것은 방지하지 않습니다.

6. 비즈니스 이벤트는 원래 순서대로 전달되는 것이 보장됩니까?

    이벤트는 생성된 순서대로 전달됩니다. 그러나 Mendix Business Events 서비스는 이 순서대로 **Entity** 테이블에 이벤트를 저장합니다. 엔터티가 저장되면 저장된 엔터티에 대한 마이크로플로우가 트리거됩니다. 마이크로플로우의 실패로 인해 데이터가 순서에 맞지 않게 될 수 있습니다. 이벤트 순서 보장은 현재 Mendix Business Event 서비스의 기능이 아닙니다.

7. 수신된 이벤트의 처리 실패를 어떻게 감지하고 수정합니까?

    Mendix Business Events 서비스는 이벤트를 게시하고 소비하기 위해 [Task Queue](/refguide/task-queue/)를 사용하므로, Task Queue의 모든 관찰 기능을 여기에서도 사용할 수 있습니다.

8. 어떤 Kafka 클러스터를 사용할지 어떻게 구성합니까?

    모델링 시 [로컬 배포 구성](/appstore/services/business-events-configuration/#config-local-deployment) 섹션에 설명된 **상수(Constants)**를 사용하여 로컬 또는 다른 Kafka에 구성할 수 있습니다. 이 설정은 런타임으로 전달되지 않습니다.

9. 이벤트와 작업을 어떻게 삭제하거나 정리합니까?

    이 기능은 향후 릴리스에서 구현될 예정입니다. 그동안 예약된 이벤트를 사용하여 직접 이벤트를 정리할 수 있습니다(소비자가 더 이상 필요하지 않은지 확인하십시오). Task Queue의 경우 [Task Queue](/refguide/task-queue/)에 연결된 **Task Queue Helpers** 서비스를 사용할 수 있습니다.

10. 이벤트가 성공적으로 게시되었는지 어떻게 알 수 있습니까?

    메시지는 먼저 비즈니스 이벤트로 성공적으로 전달하기 위해 **Outbox**에 대기열에 추가된 후 삭제됩니다. 고유한 `Event Id`를 비즈니스 이벤트와 매칭할 수 있습니다. **Outbox** 엔터티를 모니터링하면 게시되지 않은 비즈니스 이벤트 엔터티가 있는지 확인할 수 있습니다. **Outbox**에 대한 자세한 내용은 [비즈니스 이벤트 엔터티](/appstore/services/business-events-deployment/#be-entities)를 참조하십시오.

11. 이벤트가 성공적으로 소비되었는지 어떻게 알 수 있습니까?

    이벤트의 흐름은 **Consumed Business Event** 엔터티에 대한 이벤트 저장에 의해 제어됩니다([비즈니스 이벤트 엔터티](/appstore/services/business-events-deployment/#be-entities) 참조). 이러한 실패가 발생하면 흐름이 계속되지 않습니다. 이러한 실패의 유일한 원인은 데이터베이스와 관련된 것이며 발생할 가능성은 낮습니다.

    마이크로플로우에서 시작 액션 이후에 로그 메시지 액션을 추가하여 진행 상황을 추적할 수 있습니다. 자세한 내용은 [실패한 메시지에 대한 Dead Letter Queue](/appstore/services/business-events-deployment/#dead-letter-queue) 섹션을 참조하십시오.

## 추가 읽기

비즈니스 이벤트를 구성하고 배포하는 방법에 대한 자세한 내용은 다음 문서를 참조하십시오:

* [비즈니스 이벤트 구성](/appstore/services/business-events-configuration/)
* [비즈니스 이벤트 배포](/appstore/services/business-events-deployment/)

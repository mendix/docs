---
title: "Business Events Configuration"
url: /appstore/services/business-events-configuration/
description: "Mendix Business Events 서비스의 구성 및 사용 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

비즈니스 이벤트를 사용하려면 [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) 서비스를 앱에 가져오십시오. 자세한 내용은 *Marketplace 콘텐츠 사용*의 [Marketplace 콘텐츠 설치](/appstore/use-content/#install) 섹션을 참조하십시오.

## 구성

### 로컬 배포 구성 {#config-local-deployment}

개발 워크스테이션에서 테스트하려면 [Docker](https://www.docker.com/)를 사용하여 머신에서 Event Broker를 실행하십시오. 필요한 구성은 [이벤트 브로커 도구 로컬 설정](https://github.com/mendix/event-broker-tools)에서 확인할 수 있습니다.

로컬 배포의 경우 **ChannelName** 및 **ServerUrl** 상수를 설정해야 합니다. 이러한 상수는 다음 단계에 따라 구성하는 것이 좋습니다:

1. **App Settings**를 여십시오.
2. **Configuration** 탭에서 **New**를 클릭하십시오.
3. **Constants** 탭을 열고 상수를 다음과 같이 설정하십시오:

   * **ChannelName**: `local`
   * **ServerUrl**:
       * Windows의 경우: `localhost:9092`
       * MacOS에서 Docker를 실행하고 Parallels를 통해 Windows에서 Studio Pro를 실행하는 경우: `10.211.55.2:9094`
       * Linux에서 Docker를 실행하고 VirtualBox/KVM을 통해 Windows에서 Studio Pro를 실행하는 경우: `<IP ADDRESS>:9094`

### 로깅 간격 변경 (선택 사항)

선택적으로 **SummaryLogIntervalSeconds**를 다른 값으로 설정할 수 있습니다. 기본값은 120이며, 이는 이벤트가 소비되거나 생성되면 소비 또는 생성된 내용의 개요가 120초마다 `INFO` 레벨로 기록됨을 의미합니다. 0 또는 음수로 설정하면 이 추가 로깅이 전혀 수행되지 않습니다.

## 비즈니스 이벤트 사용 {#two-way-be}

Studio Pro 9.24 이상에서는 양방향 비즈니스 이벤트라고도 하는 비즈니스 이벤트의 새로운 동작을 지원합니다. 이 버전에서는 앱이 비즈니스 이벤트를 게시하고 하나 이상의 앱이 이벤트를 소비하거나 구독합니다. 게시자는 다른 게시 앱의 비즈니스 이벤트를 소비할 수도 있으며, 구독자는 다른 앱에 비즈니스 이벤트를 게시할 수도 있습니다.

### 새 비즈니스 이벤트 서비스 생성 {#two-way-be-create}

정의 앱에서 다음을 수행하여 새 서비스를 생성할 수 있습니다:

1. 서비스 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Add other** 위에 마우스를 올린 다음 **Business Event Service**를 클릭하십시오.
2. **Create a new business event service**를 선택하십시오.
3. [비즈니스 이벤트 서비스 문서](/refguide/business-event-services/)의 **Document name**을 입력하십시오.
4. **OK**를 클릭하십시오.

비즈니스 이벤트 서비스 문서가 Studio Pro에서 열립니다:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/new-business-event-service.png" class="no-border" >}}

### 이벤트 정의 추가 {#add-be-definitions}

이벤트에 포함되는 정보와 서비스가 구현할 내용을 정의하려면 열린 서비스 문서에서 **Add**를 클릭하십시오:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/add-event-definition.png" class="no-border" >}}

1. 이 이벤트에 포함되는 정보를 정의하십시오.

    * **General** 필드에서 **Event name** 및 **Description**을 제공하여 다른 사람들이 서비스의 용도를 알 수 있도록 하십시오.
    * **Attributes** 필드에서 **Add**를 클릭하여 속성을 정의하십시오.
        * 나중에 여기서 변경하면 속성이 속한 엔터티가 소비되는 경우 호환성이 깨질 수 있습니다. 관련 엔터티는 자동으로 업데이트됩니다.

    {{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/wizard-step-1.png" class="no-border" width="400" >}}

2. 다른 앱이 수행할 수 있는 작업과 이 서비스가 구현할 내용을 결정하십시오.

    * **Other apps can** 필드에서 다른 앱이 서비스를 사용하는 방식을 선택할 수 있습니다. **This Business Events service implements** 필드는 서비스가 이벤트 게시, 이벤트 구독 또는 둘 다를 담당할지 여부를 정의합니다.
    * 다음은 다른 앱이 수행할 수 있는 작업과 서비스가 구현하는 내용에 대한 설명입니다:

    | 다른 앱이 수행할 수 있는 작업 | 서비스 자체가 구현해야 하는 작업 | 서비스가 추가로 구현할 수 있는 작업 | 자동으로 생성되는 항목 |
    | ---------- | ---------- | ---------- | ---------- |
    | 이벤트 게시 | 이벤트 구독 | 이벤트 게시 | **ConsumedBusinessEvent** 엔터티 및 [핸들러 마이크로플로우](#two-way-be-handler) |
    | 이벤트 구독 | 이벤트 게시 | 이벤트 구독 | 게시 시 **PublishedBusinessEvent** 엔터티 및 핸들러 마이크로플로우 <br>구독 시 **ConsumedBusinessEvent** 엔터티 |
    | 이벤트 게시 및<br>이벤트 구독 | [필수 없음: 앱이 둘 다 수행할 수 있는 경우 서비스가 구현해야 할 의무 없음] | 이벤트 게시 및/또는 이벤트 구독 | 서비스 구현을 선택하지 않으면 아무것도 생성되지 않음 <br>게시 시 **PublishedBusinessEvent** 엔터티 및 핸들러 마이크로플로우 <br>구독 시 **ConsumedBusinessEvent** 엔터티 <br>둘 다 선택 시 두 엔터티와 핸들러 마이크로플로우가 모두 생성됨 |

3. **Done**을 클릭하여 마법사를 종료하고 정의된 서비스 문서를 확인하십시오.

    * **Export AsyncAPI Document**는 다른 앱이 [새로 생성한 서비스를 사용](#two-way-be-existing)할 수 있도록 비즈니스 이벤트 서비스의 YAML 파일을 내보냅니다.

### 속성 유형 {#attribute-types}

비즈니스 이벤트의 속성 유형은 엔터티의 속성 유형과 관련이 있지만, 모든 속성 유형이 비즈니스 이벤트에서 지원되는 것은 아닙니다. 다음 속성 유형은 지원되지 않습니다:

* AutoNumber
* Binary
* Hashed string
* Enumeration (아래 [열거형 속성 유형](#enum-att-type) 참조)

Studio Pro 9.24 이하에서는 비즈니스 이벤트가 엔터티에 의해 정의되었기 때문에 모든 유형이 암시적으로 지원되었습니다. 지원되지 않는 유형은 소비자 관점에서 문자열로 수신되었습니다.

#### 열거형 속성 유형 {#enum-att-type}

Studio Pro [9.24](/releasenotes/studio-pro/9.24/)에서 소비자는 열거형을 일반 문자열로 볼 수 있습니다. 열거형 항목의 이름은 이벤트 브로커에 의해 구독자에게 전송되는 값입니다. Studio Pro [9.24](/releasenotes/studio-pro/9.24/)에서는 새 서비스에 대해 열거형을 모델링할 수 없지만, 이전 앱을 변환한 경우에는 기능이 유지됩니다.

Studio Pro [10.0](/releasenotes/studio-pro/10.0/) 이상에서는 열거형이 완전히 지원됩니다. 열거형 속성 유형을 모델링할 수 있습니다. 열거형 항목은 내보낸 AsyncAPI 문서에 저장되며, 가져올 때 *<attributeName>Enum*이라는 이름의 새 열거형 문서가 생성됩니다. **Caption** 및 **Image** 필드는 AsyncAPI 문서의 가져오기 프로그램으로 전송되지 않습니다. 캡션과 이미지는 수동으로 제공할 수 있으며 AsyncAPI 문서를 다시 가져올 때 충돌이 발생하지 않습니다.

### 기존 비즈니스 이벤트 서비스 사용 {#two-way-be-existing}

Studio Pro 9.24 이상에서 기존 비즈니스 서비스를 사용하려면 다음을 수행하십시오:

1. 서비스 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Add other** 위에 마우스를 올린 다음 **Business Event Service**를 클릭하십시오.
2. **Use an existing business event service**를 선택하십시오.
3. **Browse**를 클릭하고 게시 앱에서 내보낸 YAML 파일로 이동하십시오.
4. [비즈니스 이벤트 서비스 문서](/refguide/business-event-services/)의 **Document name**을 입력하거나 기본 이름을 사용하십시오.
5. **OK**를 클릭하십시오.

### 비즈니스 이벤트 게시 및 구독

[기존 비즈니스 이벤트 서비스 사용](#two-way-be-existing)의 지침을 따른 후 다음 방법으로 게시 또는 구독(또는 [서비스 정의](#add-be-definitions)에 따라 둘 다)할 수 있습니다:

* 비즈니스 서비스 문서를 열고 **Add**를 클릭하십시오
* [Integration pane](/refguide/integration-pane/)에서 비즈니스 이벤트를 도메인 모델(Domain Model)로 드래그 앤 드롭하십시오

비즈니스 이벤트 서비스를 게시하려면 마이크로플로우에서 사용해야 합니다.

## 자동 생성된 이벤트 핸들러 마이크로플로우 및 엔터티 {#two-way-be-handler}

문서에서 이벤트를 서비스에 추가하기 위해 **Add**를 클릭하면, Studio Pro가 도메인 모델 내에 영구 저장 소비 엔터티를 자동으로 생성하고 이벤트 전달 후 이벤트 흐름을 관리하는 [이벤트 핸들러(Event Handler)](/refguide/event-handlers/) 마이크로플로우(**Handle_BE**)를 생성합니다. **이벤트 핸들러** 마이크로플로우는 서비스와 같은 디렉터리에 생성됩니다.

현재 Mendix는 동일한 앱 내에서 같은 비즈니스 이벤트에 대한 복수 구독자를 지원하지 않습니다.

## 추가 읽기

* [비즈니스 이벤트 배포](/appstore/services/business-events-deployment/)
* [Mendix Event Broker](/appstore/services/event-broker/)

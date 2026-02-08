---
title: "설정"
url: /appstore/partner-solutions/apd/rg-two-settings/
---

이 스크린샷에 표시된 설정은 환경에서 사용할 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-settings/settings.png" class="no-border" >}}

기본적으로 가장 일반적인 상황에 맞는 최적의 옵션이 이미 선택되어 있습니다. 다음 설정을 변경할 수 있습니다:

* **Environment Name**
* **Environment Type** – Mendix Studio Pro, 테스트, 수락 및 운영 환경을 사용할 수 있습니다. Mendix Studio Pro 인스턴스는 환경 생성자에게만 비공개입니다. 테스트, 수락 또는 운영을 사용하려면 Mendix에서 클라우드 운영자여야 합니다.
* **Runtime agent memory usage** – 최대 트랩 기간, 최대 트랩 레코드 수, 에이전트에서 기록되어 아직 매니저로 보내야 하는 최대 메시지 수 또는 성능 노드 수와 같은 여러 기술적 설정을 결정합니다. 이 설정은 과도한 메모리 사용에 대한 보호입니다. Mendix Studio Pro에서는 더 많이 기록/트랩하기 위해 **Large**로 안전하게 설정할 수 있습니다. **Medium**으로 설정하는 것이 권장됩니다.
* **Enabled** – 브라우저 에이전트 게스트 사용자, 브라우저 에이전트 또는 런타임이 이 환경에 연결할 수 있는지 구성할 수 있습니다. 이것은 보안 설정입니다.
* **Statistics collection** – 통계는 **Per microflow** 및 **Per microflow action**으로 사용할 수 있습니다. **Per microflow action**의 경우 Microflow의 액션에 대한 통계가 생성됩니다(**Per microflow**는 이를 수행하지 않음).
* **Trap message collection** – **All messages** 및 **Without database nodes**로 설정할 수 있습니다. **Without database nodes**로 변경하면 데이터베이스 노드의 로그를 APM으로 보내는 것을 중지합니다. 이러한 노드에는 다음이 포함됩니다:
    * DataStorage_QueryPlan
    * DataStorage_QueryHandling
    * ConnectionBus_Update
    * ConnectionBus_Security
    * ConnectionBus_Retrieve
    * ConnectionBus_Mapping
    * ConnectionBus_Queries
    * ConnectionBus_Synchronize
    * ConnectionBus_Validation
    * QueryParser
* **Generate API key**
* **Delete this environment** – 이 버튼을 클릭하면 APM 매니저에서 환경이 삭제됩니다.

런타임/Mendix Studio Pro 환경에 대한 API 키를 생성할 때 이 키는 한 번만 표시되므로 즉시 복사-붙여넣기하여 사용하십시오. 설치에 대한 자세한 내용은 [APM 2 설치 가이드](/appstore/partner-solutions/apd/ig-two/)를 참조하십시오.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-settings/api_key_dialog.png" class="no-border" >}}

**Copy**를 클릭하여 API 키를 클립보드에 복사합니다.

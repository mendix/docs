---
title: "Business Event Services"
url: /refguide10/business-event-services/
weight: 10
description: "Mendix Marketplace에서 다운로드한 [Business Event services 모듈](https://marketplace.mendix.com/link/component/202649)의 Studio Pro 개요입니다."
---

## 소개

Studio Pro 10은 Mendix Business Events 모듈 기능과 통합됩니다. [Mendix Business Events](/appstore/services/business-events/) 모듈을 사용하면 애플리케이션이 중요한 일이 발생했을 때 신호를 보내고, 알림을 받고 싶은 경우 이러한 이벤트를 구독할 수 있습니다. Business Events는 앱 간에 이벤트 알림을 공유하기 위한 메일링 리스트와 같습니다.

이 페이지는 Studio Pro의 **Business Event Service** 문서를 참조합니다. 전체 문서는 [Mendix Business Events](/appstore/services/business-events/)를 참조하세요.

{{% alert color="warning" %}}
이 기능이 올바르게 작동하려면 [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) 모듈이 설치되어 있어야 합니다. 설치되어 있지 않으면 다운로드하여 앱에 추가하라는 메시지가 표시됩니다.
{{% /alert %}}

### Business Event Service 문서

**Business Event Service** 문서는 Business Event 서비스를 만들 때 Studio Pro의 앱에 추가됩니다.

#### Business Event Services {#be-services}

Business Event Services는 특정 사용 사례를 위해 하나의 앱에서 중앙 집중적으로 정의됩니다. 다른 앱은 이러한 미리 정의된 이벤트를 보내거나 받을 수 있습니다.

##### 새 Business Event Service 만들기 {#create-new}

새 Business Service를 만들려면 앱의 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Business event service** > **Create a new business event service**로 이동하세요. Business Event Service 문서가 Studio Pro에서 열립니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/business-event-services/new-business-event-service.png" class="no-border" width="700" >}}

자세한 정보는 *Mendix Business Events*의 [새 Business Event Service 만들기](/appstore/services/business-events/#two-way-be-create) 섹션을 참조하세요.

##### 기존 Business Event Service 사용하기 {#use-existing}

기존 Business Service를 사용하려면 앱의 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Business event service** > **Use an existing business event service**로 이동하세요. YAML 파일을 가져온 후 Business Event Service 문서가 Studio Pro에서 열립니다:

{{< figure src="/attachments/refguide10/modeling/integration/use-platform-supported-content/business-event-services/existing-business-event-service.png" class="no-border" width="700" >}}

자세한 정보는 *Mendix Business Events*의 [기존 Business Event Service 사용하기](/appstore/services/business-events/#two-way-be-existing) 섹션을 참조하세요.

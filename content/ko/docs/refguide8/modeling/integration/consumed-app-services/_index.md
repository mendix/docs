---
title: "Consumed App Service"
url: /refguide8/consumed-app-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
App Service는 더 이상 사용되지 않으며 Studio Pro 9에서 제거되었습니다. 기존 App Service를 사용하려면 [Consumed Web Service](/refguide8/consumed-web-services/)를 사용하십시오.
{{% /alert %}}

App Service는 Mendix 애플리케이션을 서로 연결하는 방법입니다. App Service를 가져와서 그 내용을 사용할 수 있습니다. 현재 App Service는 다음 내용을 제공합니다:

* Microflow Action
* Domain Model Entity

Project Explorer에서 모듈의 'Add' 컨텍스트 메뉴에서 App Service를 선택할 수 있습니다. 자세한 정보는 [Select App Service](/refguide8/select-app-service/)를 참조하십시오.

문서 옵션에 대한 자세한 정보는 [Settings](/refguide8/settings/) 페이지를 참조하십시오.

App Service Action은 Microflow에서 직접 사용할 수 있습니다. 새 액티비티가 추가되면 표준 Microflow Action 아래에 새 App Service Action이 표시됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/consumed-app-services/16843891.png" class="no-border" >}}

App Service Action에는 파라미터가 필요할 수 있으며, 일반적으로 반환 값을 제공합니다. 반환 값은 Microflow의 나머지 부분에서 사용할 수 있습니다. 파라미터와 반환 값은 객체 또는 목록 타입일 수 있으며, App Service에서 허용하는 Entity는 App Service의 Domain Model에 포함됩니다.

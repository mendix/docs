---
title: "설정"
url: /refguide8/settings/
---

{{% alert color="info" %}}
App Service는 더 이상 사용되지 않으며 Studio Pro 9에서 제거되었습니다. 기존 App Service를 사용하려면 [Consumed Web Service](/refguide8/consumed-web-services/)를 사용하십시오.
{{% /alert %}}

설정 화면에서 App Service의 버전, 아이콘 및 간단한 설명을 볼 수 있습니다. 'Actions', 'Settings' 및 'Documentation'의 세 탭을 선택할 수 있습니다.

## Actions

{{< figure src="/attachments/refguide8/modeling/integration/consumed-app-services/settings/16843901.png" class="no-border" >}}

이 탭에서는 제공된 Microflow Action의 개요가 제공됩니다. 각 Action에 대해 아이콘, 캡션 및 설명이 표시됩니다. Microflow 도구 상자에서 각 Action은 아이콘과 캡션을 Action 이름으로 표시합니다. 이 이름은 Microflow에서 사용할 때도 표시됩니다.

## Settings

'Settings' 탭에는 App Service의 위치와 인증 방법이 포함되어 있습니다.

{{< figure src="/attachments/refguide8/modeling/integration/consumed-app-services/settings/16843897.png" class="no-border" >}}

### 구성

Constant에 URL을 도입하여 App Service의 기본 위치를 변경할 수 있습니다.

### 인증

인증 방법이 표시됩니다. 소비자로서 이를 제어할 수 없으므로 변경할 수 없습니다.

### 시간 초과

이 시간 초과는 App Service가 제공하는 모든 Action에 적용됩니다. App Service Action이 지정된 시간(초) 내에 응답하지 않으면 오류가 생성됩니다. Microflow의 표준 오류 처리를 사용하여 시간 초과 시 수행할 작업을 정의할 수 있습니다.

## 게시자 문서화

이 탭에는 App Service 공급자가 제공하는 문서가 표시됩니다.

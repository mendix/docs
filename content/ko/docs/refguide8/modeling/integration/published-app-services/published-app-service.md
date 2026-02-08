---
title: "Published App Service"
url: /refguide8/published-app-service/
---

{{% alert color="info" %}}
App Service는 더 이상 사용되지 않으며 Studio Pro 9에서 제거되었습니다. 대신 [Published Web Service](/refguide8/published-web-services/) 또는 [Published REST Service](/refguide8/published-rest-services/)를 사용하십시오.
{{% /alert %}}

## General 탭

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/published-app-service/16843916.png" class="no-border" >}}

### Version

App Service의 버전입니다. App Service 인스턴스가 생성될 때마다 버전 번호가 자동으로 증가합니다.

App Service는 명시적으로 버전이 관리됩니다. App Service가 Consumable 상태가 되면 공개 인터페이스(매개변수 및 반환 유형)를 더 이상 변경할 수 없기 때문입니다. 공개 인터페이스는 새 App Service 버전을 생성해야만 변경할 수 있습니다. 그러나 인터페이스를 준수하는 한 기본 Microflow는 여전히 변경할 수 있습니다.

### Status

새로 생성된 버전의 상태는 기본적으로 'Draft'로 설정됩니다. 'Draft' 상태에서는 App Service에 변경 및 추가가 가능합니다. 버전을 게시할 준비가 되면 상태를 'Consumable'로 설정해야 합니다.

상태가 'Consumable'로 설정되면 더 이상 App Service를 편집할 수 없습니다. App Service 버전은 'Draft' 상태일 때만 편집할 수 있습니다. 'Draft' 상태의 App Service 버전은 하나만 허용됩니다.

{{% alert color="info" %}}
프로덕션에 배포하기 전에 항상 하나 이상의 App Service 버전을 Consumable로 설정하는 것을 잊지 마십시오. Consumable App Service 버전만 프로덕션에서 사용할 수 있습니다.
{{% /alert %}}

### Icon

App Service에 속하는 아이콘입니다. 프로젝트의 모든 이미지 문서에서 아이콘을 선택할 수 있습니다. 아직 사용할 수 없는 경우 이미지 문서에 새 아이콘을 추가할 수 있습니다.

### Caption

소비자가 도구 상자에서 볼 수 있는 App Service의 이름입니다.

### Description

App Service의 용도를 설명하는 데 사용할 수 있습니다.

## Actions

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/published-app-service/16843915.png" class="no-border" >}}

App Service를 구성하는 실제 Action을 제공합니다. 각 Action은 Microflow에 연결됩니다. [Actions](/refguide8/actions/)를 참조하십시오.

## Settings

{{< figure src="/attachments/refguide8/modeling/integration/published-app-services/published-app-service/16843914.png" class="no-border" >}}

### Authentication

다음 인증 방법을 사용할 수 있습니다:

* 인증 없음.
* 사용자 이름 및 비밀번호: 제공된 Action은 사용자 이름/비밀번호 조합이 등록된 웹 서비스 사용자와 일치하는 경우에만 실행됩니다.

### Target Namespace

'Target namespace'는 XML 네임스페이스를 제공하는 기술 용어입니다.

### Export Mendix Service Definition

'Export Mendix Service Definition' 버튼은 App Service 정의가 포함된 MSD 파일을 생성합니다. 서비스의 소비자가 이를 가져올 수 있습니다. 이 MSD 파일을 다른 앱에서 가져오고 공급자 앱과 소비자 앱을 동시에 실행하여 로컬 머신에서 App Service를 테스트할 수 있습니다.

{{% alert color="warning" %}}
이 MSD 파일에는 기본 위치인 프로젝트 설정의 기본 구성에 있는 Application Root URL이 포함되어 있습니다. 예: [http://localhost:8080/](http://localhost:8080/). 이 엔드포인트 주소는 앱을 클라우드에 배포하면 덮어쓰여지며 앱이 실행 중인 클라우드 위치로 설정됩니다.
{{% /alert %}}

## Documentation

Published App Service에 대한 문서입니다. App Service의 소비자도 이를 볼 수 있습니다.

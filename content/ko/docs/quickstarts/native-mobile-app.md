---
title: "네이티브 모바일 앱 추가하기"
url: /quickstarts/part2/
weight: 20
description: "네이티브 모바일 앱을 만드는 기본 사항을 알아보세요."
tags: ["hello world", "microflows", "widgets", "app", "nanoflow", "app development"]
aliases:
    - /refguide/quickstart-part2/
    - /refguide9/quickstart-part2/
---

## 소개

이 가이드는 파트 1의 연속이며, 파트 1에서 만든 웹 애플리케이션을 네이티브 모바일 애플리케이션으로 다시 만듭니다. 이 가이드는 Mendix 네이티브 모바일을 시작하고 Studio Pro IDE를 사용하여 첫 번째 네이티브 앱을 개발하는 단계를 안내합니다.

이 가이드를 따라하면 다음을 수행할 수 있습니다:

* 네이티브 모바일 애플리케이션을 **생성, 실행 및 배포**하는 방법 학습
* **나노플로우(Nanoflow)**를 사용하여 로직 구축
* **온라인 우선** 네이티브 모바일 앱(Mendix 11의 기본값)으로 시작하고, 나중에 필요 시 **오프라인 우선** 개발과 **데이터 동기화**를 탐색하는 옵션
* 네이티브 모바일 애플리케이션을 **생성, 실행 및 배포**하는 방법 학습
* **Make it Native 앱**을 사용하여 네이티브 앱 테스트

## 모바일 개발 필수 사항

Mendix 플랫폼을 사용하면 웹, 네이티브 모바일, PWA를 포함한 다양한 종류의 앱을 만들 수 있습니다. 네이티브 모바일 애플리케이션을 만들 때 다음과 같은 특별한 요구 사항을 고려해야 합니다:

* **온라인 우선 개발**: Mendix 11부터 네이티브 모바일 앱은 기본적으로 온라인 우선 모드로 생성됩니다. 이는 앱이 연결이 있을 때마다 서버와 직접 통신한다는 것을 의미합니다. 많은 사용 사례에서 이것이 시작하는 가장 간단하고 빠른 방법입니다.

* (선택 사항) [오프라인 우선 개발](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/): 앱이 안정적인 인터넷 연결 없이 작동해야 하는 경우 오프라인 우선 모드를 활성화할 수 있습니다. 이 방식에서는 데이터가 모바일 기기의 로컬 데이터베이스에 저장되고 가능할 때 서버와 동기화됩니다.

* (선택 사항) [데이터 동기화](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/): 오프라인 우선 앱을 지원하기 위해 동기화를 구성할 수 있습니다. 동기화는 나노플로우의 동기화 액션과 마이크로플로우(Microflow)의 디바이스 동기화 액션을 사용하여 트리거됩니다. 또한 데이터 사용량과 로딩 시간을 최소화하기 위해 각 특정 사용자에게 필요한 데이터만 업데이트하도록 구성할 수 있습니다.

## 사전 요구 사항

시작하기 전에 이 가이드의 파트 1을 완료하는 것을 권장합니다. 또한 다음이 필요합니다:

* 모바일 기기에 [Make It Native](/refguide/getting-the-make-it-native-app/) 앱을 다운로드하여 설치하고, 사용 중인 Mendix 버전이 Make It Native 앱 버전과 [호환](/refguide/mobile/getting-started-with-mobile/prerequisites/#get-min-app)되는지 확인하세요
* 이 가이드 시리즈의 파트 1인 [반응형 웹 앱 만들기](/quickstarts/part1/)를 완료하세요
* Mac에서 작업하는 경우 [Parallels 구성](/refguide/using-mendix-studio-pro-on-a-mac/)을 완료하여 Mac에 Studio Pro를 설치하세요

## 앱 만들기

첫 번째 네이티브 모바일 앱을 만들려면 Studio Pro **앱 선택 화면**에서 **새 앱 만들기**를 클릭하세요. 그런 다음 앱의 시작점으로 **Blank Native Mobile App** 템플릿을 선택하세요.

{{< figure src="/attachments/quickstarts/part2/4.a Create New App.png" width="450px" alt="빈 네이티브 모바일 앱 만들기">}}

다음으로 **이 시작점 사용**을 클릭하세요.

{{< figure src="/attachments/quickstarts/part2/4.b Blank Native Mobile Template.png" width="450px" alt="이 시작점 사용">}}

나타나는 팝업 창에서 앱의 **이름**을 입력하세요. 다른 모든 옵션은 기본값으로 두고 **앱 만들기**를 클릭하세요.

{{< figure src="/attachments/quickstarts/part2/4.c Confirm Create App.png" width="450px" alt="선택을 확인하고 앱 만들기">}}

## 도메인 모델(Domain Model) 만들기

파트 1과 마찬가지로 직원 데이터를 저장할 엔티티를 만들어야 합니다. Native Mobile Module의 **도메인 모델**에서 **새 엔티티**를 추가하세요.

1. 엔티티 이름을 Employee로 지정합니다.
1. 엔티티는 Account 엔티티의 일반화(Generalization)여야 합니다.
1. 엔티티에 세 가지 속성을 추가합니다:
    * FirstName (String)
    * LastName (String)
    * JobRole (String)

1. **OK**를 클릭하여 변경 사항을 확인합니다:

    {{< figure src="/attachments/quickstarts/part2/5. Creating The Domain Model.png" width="450px" alt="도메인 모델 만들기">}}

## 사용자 인터페이스 만들기

도메인 모델이 완성되었으므로 이제 앱의 사용자 인터페이스를 만들 차례입니다. 시작하려면 앱 탐색기에서 **Home_Native** 페이지를 엽니다.

1. 페이지에서 미리 채워진 모든 "Welcome" 텍스트와 컨테이너를 **삭제**합니다.
1. **도구 상자**에서 **List View**를 페이지로 드래그합니다.
1. **List View**를 더블 클릭하여 **속성**을 엽니다.
1. **속성 창**에서 **Data source 탭**으로 이동하고 **Type** 옆에 **Database**가 선택되어 있는지 확인합니다.
1. Entity에서 **Select** 버튼을 클릭합니다.
1. 앞서 만든 **Employee** 엔티티를 선택하고 **Select**를 클릭합니다.
1. **OK**를 클릭하여 선택을 확인합니다:

    {{< figure src="/attachments/quickstarts/part2/6.a Creating the UI.png" width="450px" alt="사용자 인터페이스">}}

1. 콘텐츠를 자동으로 채울지 묻는 메시지가 나타나면 **Yes**를 선택합니다.
1. 우리가 만든 속성(**FirstName, LastName, JobRole**)을 제외한 모든 콘텐츠를 삭제합니다.
1. 페이지에 **Layout Grid**(4x4x4)를 추가한 다음 나머지 각 레이블을 레이아웃 그리드의 **개별 셀**로 이동합니다:

{{< figure src="/attachments/quickstarts/part2/6.b Layout Grid.png" width="450px" alt="레이아웃 그리드 추가">}}

1. 페이지의 빈 헤더 섹션에 도구 상자에서 **Create** 버튼을 추가합니다.
1. 페이지에 버튼을 추가하면 버튼을 클릭할 때 생성될 엔티티를 선택하는 창이 나타납니다. **Employee** 엔티티를 선택하고 **Select**를 클릭합니다:

    {{< figure src="/attachments/quickstarts/part2/6.c Select Entity.png" width="450px" alt="표시할 엔티티 선택">}}

1. 다음으로 버튼을 클릭할 때 표시될 on-click 페이지를 선택해야 합니다. 버튼의 속성에서 이벤트 섹션의 **on-click** 페이지 옆에 있는 **Select**를 클릭합니다.
1. 나타나는 팝업 창에서 **New page**를 클릭하여 만듭니다.
1. 다음 창에서 새 페이지의 이름을 Employee_NewEdit로 입력합니다. 레이아웃은 그대로 두고 **Edit With Dataview 템플릿**을 선택한 후 **OK**를 클릭하여 선택을 확인합니다.

## 애플리케이션 로직 만들기 {#creating-application-logic}

도메인 모델과 사용자 인터페이스가 완성되었으므로 나노플로우(Nanoflow)를 사용하여 로직을 만들 수 있습니다. Employee_NewEdit 페이지의 기본 저장 버튼을 대체하는 나노플로우를 만들겠습니다. 이 나노플로우는 세부 정보가 올바르게 입력되었는지 검증한 다음 변경 사항을 커밋하고 서버와 동기화합니다.

{{% alert type="info" %}}
**나노플로우(Nanoflow)란?**

나노플로우는 애플리케이션의 복잡한 로직을 구축할 수 있다는 점에서 마이크로플로우(Microflow)와 유사합니다. 시각적으로도 비슷하게 보이며, 일부 액션은 마이크로플로우와 나노플로우 모두에서 사용할 수 있습니다(마이크로플로우를 나노플로우로 자동 변환할 수도 있습니다!). 나노플로우는 클라이언트에서 실행되며 JavaScript를 기반으로 합니다. 마이크로플로우는 서버에서 실행되며 Java를 기반으로 합니다.
{{% /alert %}}

1. **저장 버튼**의 **속성**을 엽니다.
1. **on-click** 액션에서 **Call a Nanoflow**를 선택합니다.
1. 나타나는 창에서 **New**를 클릭하여 새 나노플로우를 만듭니다.
1. 새 나노플로우의 **이름**을 `ACT_Employe_NewEdit`로 지정합니다.
1. 새로 만든 나노플로우에서 도구 상자의 주황색 **결정(Decision)**을 찾아 플로우에 드래그합니다.
1. 결정을 **더블 클릭**하여 **속성**을 엽니다.
1. 캡션을 `Has Firstname?`으로 입력합니다.
1. **Expression**에 'trim($Employee/FirstName)!= empty'를 추가합니다. 이렇게 하면 문자열에서 공백이 제거되고 문자열 속성에 문자가 있는지 확인합니다.
1. 위의 표현식은 true와 false 결과를 반환하므로 결정에서 **분기 경로를 만들어야** 합니다 - 각 가능한 결과에 대한 경로입니다. **결정**을 선택한 다음 모서리에서 **클릭하여 드래그**하여 새 대체 경로를 만듭니다. 두 경로를 **마우스 오른쪽 버튼으로 클릭**하고 condition value에서 **true**와 **false**를 선택하여 어떤 경로가 true 결과이고 false 결과인지 정의하세요.
1. **false** 경로에 **validation feedback 액션**을 추가합니다. 더블 클릭하여 **속성**을 열고 다음 세부 정보를 입력한 다음 **OK**를 클릭합니다:
1. **on-click** 액션에서 **Call a Nanoflow**를 선택합니다.
1. 나타나는 창에서 **New**를 클릭하여 새 나노플로우를 만듭니다.
1. 새 나노플로우의 **이름**을 `ACT_Employe_NewEdit`로 지정합니다.
1. 새로 만든 나노플로우에서 도구 상자의 주황색 **결정(Decision)**을 찾아 플로우에 드래그합니다.
1. 결정을 **더블 클릭**하여 **속성**을 엽니다.
1. 캡션을 Has Firstname?으로 입력합니다.
1. **Expression**에 'trim($Employee/FirstName)!= empty'를 추가합니다. 이렇게 하면 문자열에서 공백이 제거되고 문자열 속성에 문자가 있는지 확인합니다.
1. 위의 표현식은 true와 false 결과를 반환하므로 결정에서 **분기 경로를 만들어야** 합니다 - 각 가능한 결과에 대한 경로입니다. **결정**을 선택한 다음 모서리에서 **클릭하여 드래그**하여 새 대체 경로를 만듭니다. 두 경로를 **마우스 오른쪽 버튼으로 클릭**하고 condition value에서 **true**와 **false**를 선택하여 어떤 경로가 true 결과이고 false 결과인지 정의하세요.
1. **false** 경로에 **validation feedback 액션**을 추가합니다. 더블 클릭하여 **속성**을 열고 다음 세부 정보를 입력한 다음 **OK**를 클릭합니다:

    * Variable → Employee
    * Member → FirstName
    * Template → Please enter a Firstname for the employee

1. 이제 **true 경로**에서 **LastName** 및 **JobRole** 속성에 대해서도 이 단계를 반복합니다.
    * 시간을 절약하기 위해 결정과 validation feedback 액션을 복사하여 붙여넣을 수 있습니다(단, 각 속성에 대해 액션을 업데이트하는 것을 잊지 마세요)

1. 플로우의 true 경로 끝에 **commit 액션**을 추가합니다. 액션을 더블 클릭하여 **속성**을 열고 **Object or List**에 **Employee**가 선택되어 있는지 확인하고 **refresh in client**를 **Yes**로 변경합니다. **OK**를 클릭하여 창을 닫습니다.

1. commit 액션 후에 **synchronize 액션**을 추가하고 동기화되지 않은 객체만 동기화하도록 선택합니다.
   참고: 이 단계는 앱을 오프라인으로 작동하도록 구성하는 경우에만 필요합니다. 온라인 우선 앱의 경우 변경 사항이 추가 구성 없이 서버로 직접 전송됩니다.

1. synchronize 액션 후에 **close page 액션**을 추가합니다.
1. 플로우의 true 경로 끝에 **commit 액션**을 추가합니다. 액션을 더블 클릭하여 **속성**을 열고 **Object or List**에 **Employee**가 선택되어 있는지 확인하고 **refresh in client**를 **Yes**로 변경합니다. **OK**를 클릭하여 창을 닫습니다.
1. commit 액션 후에 **synchronize 액션**을 추가합니다.
1. synchronize 액션 후에 **close page 액션**을 추가합니다:

    {{< figure src="/attachments/quickstarts/part2/7. Completed Nanoflow.png" width="450px" alt="완성된 나노플로우">}}

## 앱 배포

애플리케이션을 기기에서 쉽게 테스트하려면 Studio Pro에서 애플리케이션을 실행한 다음 모바일 기기에서 **Make it Native 앱**을 여세요. 앱이 실행되면 **View App** 옆의 **드롭다운 화살표**를 클릭하고 **View on a Device**를 선택하세요. 네이티브 모바일 앱을 볼 수 있는 **QR 코드**를 찾은 다음 Make it Native 앱을 사용하여 스캔하세요([Parallels](/refguide/using-mendix-studio-pro-on-a-mac/)를 사용하는 경우 특별한 구성이 필요할 수 있습니다).

**Make it Native**로 **QR 코드**를 스캔하면 앱이 로드되어 애플리케이션을 테스트할 수 있습니다. 앱 스토어(Apple 및 Android)에 애플리케이션을 배포하려면 애플리케이션의 서명된 빌드를 만들어야 합니다. Mendix는 배포용 앱 패키징에 [Bitrise](/refguide/mobile/distributing-mobile-apps/building-native-apps/bitrise/)를 사용하는 것을 권장합니다.

> **선택 사항 (오프라인 우선)**: 앱이 오프라인으로 작동하도록 하려면 사용 중인 엔티티의 동기화 모드를 업데이트하세요. 기본적으로 동기화는 **Online**으로 설정됩니다. 오프라인 우선을 활성화하려면 데이터가 로컬에 저장되고 주기적으로 서버와 동기화되도록 엔티티를 **All Objects** 모드로 구성하세요.

## 완료!

첫 번째 네이티브 모바일 앱을 완성하고 배포한 것을 축하합니다! 다음으로 [Academy](https://academy.mendix.com/link/home)로 이동하여 **Crash Course** 학습 플랜을 시작하거나, 관심 있는 주제를 검색하여 문서 페이지에서 학습을 이어가세요. 최신 뉴스와 업데이트 비디오는 [YouTube 페이지](https://www.youtube.com/c/MendixCommunity)를 확인하세요. 커뮤니티 활동은 [Medium 출판물](https://medium.com/mendix)에서 확인할 수 있습니다.

저희 또는 커뮤니티에 연락하고 싶으신가요? [Slack 커뮤니티 워크스페이스](https://join.slack.com/t/mendixcommunity/shared_invite/zt-39m9sfzsl-so7j70WRyj_4gJ33gaVXOw)에 가입하여 참여하세요.

## 더 읽기

* [Studio Pro 개요](/refguide/studio-pro-overview/) – Studio Pro 탭, 메뉴 및 단축키에 대해 설명합니다
* [Mendix 개발 모범 사례](/refguide/dev-best-practices/) – Mendix 앱 개발 시 일관된 이름 지정 및 모델링 규칙을 채택하기 위한 참조 자료입니다
* [스프레드시트에서 앱 시작하기](/refguide/app-from-spreadsheet/) – Microsoft Excel 스프레드시트를 가져오고 데이터를 사용하여 앱을 만드는 방법을 설명합니다
* [Mendix Academy Become a Rapid Developer](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer) – 로우코드를 사용하여 첫 번째 앱을 만들려는 새로운 Mendix 사용자에게 권장되는 학습 경로입니다
* [Mendix Academy Crash Course](https://academy.mendix.com/link/paths/82/Crash-Course) – 숙련된 개발자이기도 한 새로운 Mendix 사용자에게 권장되는 학습 경로입니다

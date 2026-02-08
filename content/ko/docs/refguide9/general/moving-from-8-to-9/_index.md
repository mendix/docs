---
title: "Mendix Studio Pro 8에서 9로 전환하기"
url: /refguide9/moving-from-8-to-9/
weight: 20
description: "Studio Pro 8에서 Studio Pro 9로 앱을 업데이트하는 방법에 대한 세부 사항을 제공하며, 앱 변환 및 지원 중단된 기능에 대한 섹션을 포함합니다."
---

## 소개

Mendix Studio Pro 9는 앱을 향상시킬 수 있는 강력한 새 도구를 제공합니다. 전체 변경 목록은 [Studio Pro 9 릴리스 노트](/releasenotes/studio-pro/9/)를 참조하십시오.

## Studio Pro 8에서 9로 업데이트 {#studio-pro-upgrade}

다음 하위 섹션에서는 Studio Pro 8에서 Studio Pro 9로 앱을 변환하는 단계를 설명합니다. Mendix는 먼저 *Studio Pro 9.0* 릴리스 노트의 [주요 변경 사항](/releasenotes/studio-pro/9.0/#breaking-changes) 섹션과 업데이트된 [시스템 요구 사항](/refguide9/system-requirements/)을 검토하는 것을 권장합니다.

### 앱 백업

변환을 시작하기 전에 최신 변경 사항을 Team Server에 커밋했거나 로컬 앱의 백업을 만들었는지 확인하십시오.

### 버전 8의 최신 릴리스로 업그레이드

{{% alert color="warning" %}}
Mendix 9로 업데이트하려면 먼저 앱을 Mendix 8.12로 업그레이드해야 합니다. 그러나 Mendix는 Mendix 8의 최신 버전인 [8.18](/releasenotes/studio-pro/8.18/)로 업데이트하는 것을 권장합니다.
{{% /alert %}}

Mendix 8.18로 업그레이드하려면 다음 단계를 따르십시오:

1. 최신 패치 릴리스의 Studio Pro [8.18](/releasenotes/studio-pro/8.18/)을 다운로드합니다.
1. Studio Pro 8.18에서 앱을 엽니다.
1. 필요한 경우 앱 업그레이드를 허용합니다.

### Mendix 8 앱 검토

아래 섹션과 함께 앱을 검토하고 Mendix 9로 업그레이드하기 전에 추가 조치가 필요한지 평가하십시오.

앱을 실행하고, 모든 기능을 테스트하고, 오류 없이 작동하는지 확인해야 합니다. 앱이 앱 서비스를 사용하는 경우, 앱 서비스는 Mendix 9에서 지원 중단되었으므로 업그레이드 전에 제거해야 합니다.

Studio Pro의 개발 중에 그리고 콘솔 및 브라우저 콘솔을 사용하여 Runtime에서 표시되는 모든 지원 중단 경고를 수정해야 합니다.

### 버전 8 앱 저장

필요한 경우 돌아갈 수 있도록 앱을 백업하거나 커밋하십시오.

이제 앱을 Mendix 9로 업그레이드할 준비가 되었습니다. Studio Pro 8에서 앱을 닫을 수 있습니다.

### 앱을 버전 9로 업그레이드

Studio Pro 9에서 앱을 열고 Studio Pro가 앱을 버전 9로 업데이트하도록 허용하십시오. Mendix가 자동으로 앱을 업그레이드합니다.

모든 오류 메시지와 지원 중단 항목에 대한 메시지를 검토하고 필요한 곳에 변경을 가하십시오.

### 모든 Widget 및 모듈 업그레이드 {#upgrade-widgets}

문제 가능성을 최소화하려면 앱에서 사용하는 모든 Widget과 기타 Marketplace 모듈을 최신 버전으로 업데이트해야 합니다.

Marketplace에서 모듈의 최신 버전이 있는지 확인하십시오. 업그레이드 시 특정 조치가 필요한지 Marketplace의 버전 릴리스 노트를 읽어보십시오.

다음 핵심 Widget, 리소스 및 Action을 업데이트하십시오:

* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Data Grid 2](https://marketplace.mendix.com/link/component/116540)

일반적으로 릴리스 노트에서 권장하지 않는 한 모듈을 제거하고 다시 가져오면 안 됩니다. 제거하고 다시 가져오면 모듈과 관련된 데이터나 구성이 손실될 수 있습니다.

### Atlas 모듈 업데이트 (선택 사항)

Mendix 9에는 새 페이지 템플릿과 빌딩 블록을 포함한 새로운 Atlas 테마가 제공됩니다. 이 테마를 얻으려면 Marketplace에서 [Atlas Core](https://marketplace.mendix.com/link/component/117187), [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) 및 [Atlas Native Content](https://marketplace.mendix.com/link/component/117175) 모듈 패키지를 다운로드할 수 있습니다.

### 앱 검토 및 테스트

마지막으로, 아래 섹션을 검토하고 필요한 모든 변경을 완료했는지 확인하십시오. 예상치 못한 결과가 있는지 앱을 테스트하십시오.

{{% alert color="success" %}}
축하합니다! 앱이 Mendix 9로 성공적으로 업그레이드되었으며 정상적으로 작업을 계속할 수 있습니다.
{{% /alert %}}

## Mendix Runtime API 변경 사항

Mendix 8에서 지원 중단된 대부분의 Java API 호출이 제거되었습니다. Java Action에서 이러한 메서드를 계속 사용하고 있었다면 교체하거나 삭제해야 합니다. 지원 중단된 호출을 확인하려면 [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api-9/)의 **Mendix 8 Runtime API** 링크를 클릭하십시오.

또한 추가적인 Mendix Runtime API 변경 세부 사항은 Mendix Studio Pro 9.02 릴리스 노트를 참조하십시오.

### 데이터베이스 고유성 변경 사항

Mendix 9 이전에는 Mendix가 Mendix Runtime 또는 데이터베이스 엔진 자체에 의존하여 데이터 고유성을 보장할 수 있었습니다. Mendix 9부터는 **Database**가 유일한 옵션이 됩니다.

앱이 여전히 고유성 유효성 검사에 Mendix Runtime을 사용하고 있다면, 사용자 정의 Runtime 설정 `DataStorage.EnableDiagnostics`를 `true`로 설정하여 데이터베이스에 존재할 수 있는 잠재적인 데이터 중복 문제를 확인해야 합니다.

발견된 경우 **An error occurred while initializing the Runtime: Detected unique constrain violation...**과 같은 오류가 기록됩니다. 이를 해결하려면 Mendix 9로 이동하기 전에 앱을 준비해야 합니다. [지원 요청 제출](/support/submit-support-request/)을 통해 필요한 도구를 얻을 수 있습니다.

### Mendix Object Changed 플래그

Mendix 9.5 이상에서 객체 멤버를 변경하면 이전 값과 새 값이 동일하더라도 멤버 상태가 'CHANGED'로 됩니다. 이는 Community Commons 모듈의 `objectHasChanged` 및 `memberHasChanged` Java Action에도 영향을 미칩니다.

예를 들어, `$User/Name = 'Alice'`인 커밋된 객체 `$User`가 있다고 가정합니다. `$User/Name`을 `'Alice'`로 설정하면 이름이 동일하더라도 멤버 상태가 'CHANGED'로 됩니다. 이전에는 멤버 상태가 'UNCHANGED'로 유지되었습니다.

## 네이티브 모바일 앱 테스트

Mendix 9에서 네이티브 모바일 앱을 테스트하고 미리 보려면 Mendix 9 버전의 Make It Native 앱을 다운로드해야 합니다:

* [Google Play Store](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx9)에서 Android용 Make It Native 9를 다운로드
* [Apple App Store](https://apps.apple.com/nl/app/make-it-native/id1542182000)에서 iOS용 Make It Native 9를 다운로드

네이티브 앱에서 최상의 결과를 얻으려면 위의 [모든 Widget 및 모듈 업그레이드](#upgrade-widgets) 섹션에 설명된 대로 [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) 모듈을 업데이트했는지 확인하십시오.

## Client API 변경 사항

Mendix 9에서 지원 중단되고 제거 예정으로 표시된 Client API가 실제로 제거되었습니다. `big.js`, `react`, `react-native` 등 Client와 함께 제공되는 라이브러리가 최신 버전으로 업데이트되었습니다. 이는 사용자 정의 및 플러거블 Widget과 JavaScript Action에 영향을 줄 수 있습니다. 자세한 내용은 *Studio Pro 9.0* 릴리스 노트의 [주요 변경 사항](/releasenotes/studio-pro/9.0/#breaking-changes) 섹션을 참조하십시오.

## 네이티브 종속성

Mendix 9 네이티브 앱에는 더 이상 `react-native-maps`, `react-native-ble-plx`, `react-native-geocoder` 등 필수적이지 않은 네이티브 라이브러리가 기본적으로 포함되지 않습니다. 대신, Mendix 9에서 구성 요소에 대한 네이티브 종속성을 선언하는 새로운 기능이 도입되었습니다. 모든 플러거블 Widget 또는 JavaScript Action은 사용하는 네이티브 라이브러리를 선언해야 합니다. 이렇게 하면 네이티브 앱에 필요한 라이브러리만 번들되고 불필요한 라이브러리는 포함되지 않습니다.

플러거블 Widget 또는 JavaScript Action이 네이티브 링크가 필요한 라이브러리를 사용하는 경우, 해당 네이티브 라이브러리를 구성 요소의 종속성으로 정의하도록 Widget과 Action을 업데이트하십시오. 네이티브 종속성에 대한 자세한 내용은 [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/)을 참조하십시오.

## XPath 쿼리 엔진 9 {#query-engine-9}

Mendix 9에는 기존 엔진인 *쿼리 엔진 7* 또는 QE7을 대체하는 *쿼리 엔진 9* 또는 QE9이라는 새로운 XPath 쿼리 엔진이 포함되어 있습니다. 쿼리 엔진 간에 몇 가지 기능 변경 사항이 있습니다:

* 연관이 [양방향에서 탐색 가능](/refguide9/association-properties/#navigability)한 경우, 두 Entity 모두 연관의 읽기 가능 여부를 선언하는 접근 규칙을 정의할 수 있습니다. 이러한 연관의 경우 QE9는 항상 현재 XPath의 왼쪽에 있는 Entity를 사용하여 접근 가능 여부를 결정합니다.
예: `//Customer[Customer_Address/Address/City = 'Rotterdam']` 쿼리에서는 `Customer`에 정의된 접근 규칙이 연관에 사용되는 반면, `//Address[Customer_Address/Customer/Lastname = 'Doe']`에서는 동일한 연관에 대해 `Address`의 규칙이 사용됩니다. QE7에서는 동작이 잘 정의되지 않았습니다.
* QE9는 데이터 검색 시 최소 권한 원칙을 엄격히 따르도록 작성되었습니다. 이로 인해 최종 사용자에게 보이는 데이터가 줄어들 수 있습니다.
* Studio Pro에서는 허용되지 않지만, Java Action에서 `//Address[City]`와 같이 비-부울 속성을 제약 조건으로 사용할 수 있었습니다. QE7은 이러한 쿼리를 허용하지만 데이터베이스에 따라 예상치 못한 결과가 나올 수 있습니다. QE9는 이러한 쿼리를 거부합니다.
* 지원되거나 문서화되지는 않았지만, Java Action에서 `//Customer/Customer_Address/Address`와 같은 쿼리를 사용할 수 있습니다. `Address` 인스턴스가 여러 `Customer` 인스턴스에서 접근 가능한 경우, QE7은 `Address` 인스턴스를 여러 번 반환합니다. QE9는 일치하는 각 `Address` 인스턴스를 한 번만 반환합니다.

## 관련 Mendix 커뮤니티 게시물

Mendix 커뮤니티에서 업그레이드 문제를 해결하는 방법을 다음 Mendix 커뮤니티 게시물에서 확인하십시오:

* [Upgrade from Mendix 8 to Mendix 9](https://community.mendix.com/link/space/studio-pro/questions/123696) – *.jar* 파일 및 *userlib* 디렉터리 관련
* [Native app styling difference with Mendix 9 upgrade](https://community.mendix.com/link/space/mobile/questions/118280) – [Atlas 3으로 업그레이드](/refguide9/moving-from-atlas-2-to-3/) 관련
* [Error importing Excel file after upgrade to Mendix 9](https://community.mendix.com/link/space/studio-pro/questions/117814) – 속성 값 변환 관련
* [Does anyone have experience with upgrading Mx applications from 7 to 9?](https://community.mendix.com/link/space/studio-pro/questions/112229) – 7에서 8로, 8에서 9로 전환 시 고려 사항 관련
* [Native Mobile Synchronization Error after Mendix 9 Upgrade](https://community.mendix.com/link/space/integrations/questions/112173) – 객체 동기화 및 보안 규칙 관련
* [Unable to Upgrade App from Mendix 8.18.7 to 9.4.0](https://community.mendix.com/link/space/studio-pro/questions/109310) – Mendix Team Server 및 Git 문제 관련
* [Mendix Native 8 to 9 Upgrade Deployment Structure Error](https://community.mendix.com/link/space/deployment/questions/106428) – 배포 파일 구조 및 Marketplace 구성 요소 디렉터리 관련
* [MX 9.5.0 Upgrade error from MX 8.18.8: The type cache does not contain a type with qualified name WebServices$ProvidedService](https://community.mendix.com/link/space/studio-pro/questions/109620) – 앱 서비스를 사용한 업그레이드 관련
* [Error while upgrading to Mx 9](https://community.mendix.com/link/space/studio-pro/questions/105907) – 앱 서비스를 사용한 업그레이드 관련

## 더 읽기

* [Studio Pro 9 릴리스 노트](/releasenotes/studio-pro/9.0/)

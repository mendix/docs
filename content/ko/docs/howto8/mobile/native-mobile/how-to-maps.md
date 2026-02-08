---
title: "Native Mobile 앱에서 Maps 설정"
url: /howto8/mobile/how-to-maps/
weight: 78
description: 이 가이드에서는 Android 및 Apple 디바이스를 위한 Native Mobile Maps 기능을 설정하는 방법을 설명합니다.
---

## 소개

Maps 모듈을 사용하면 지도로 작업할 수 있습니다. 아래 지침을 참조하여 Native Mobile 앱에 지도 기능을 포함하십시오.

## 전제 조건

* 앱 유형에 따른 [전제 조건](/refguide/mobile/getting-started-with-mobile/prerequisites/)을 완료하십시오
* [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/overview)에서 앱을 생성하고 Android용(그리고 iOS에서도 Google Maps를 사용하려면 iOS용) Google Maps를 활성화하고 [API 키](https://developers.google.com/maps/documentation/android-sdk/get-api-key)를 보유하십시오. 
* Google Maps Platform API와 SDK를 사용하기 전에 가입하고 [결제 계정](https://developers.google.com/maps/gmp-get-started/#create-billing-account)을 생성해야 합니다.
* Native Mobile App Builder를 사용하려면 Mendix Studio Pro 8.15.0 이상을 설치하십시오

## 앱 딥 링크 설정 {#set-up}

Maps 모듈이 포함된 앱이 있는지 확인하십시오. 이것은 코어 모듈이므로 **Widgets** 패널에서 사용할 수 있습니다. 기존 프로젝트에 추가하거나 처음부터 새 프로젝트를 만들 수 있습니다. 

### 지도 제공자 구성

다음으로 **Maps** Widget 제공자를 구성합니다. **Default**와 **Google Maps** 두 가지 선택 사항이 있습니다. **Default**를 선택하면 앱이 디바이스에서 기본 활성화된 지도를 사용합니다. 이는 Android 디바이스에서 Google Maps를, iOS 디바이스에서 Apple Maps를 사용하는 것을 의미합니다. **Maps** 구성으로 **Google Maps**를 선택하면 두 플랫폼 모두에서 Google Maps만 사용됩니다:

1. Maps Widget을 더블 클릭하고 **Map** 탭을 선택하십시오. 
1. **Default** 또는 **Google Maps** 제공자를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-maps/maps-provider-configuration.png" alt="maps provider configuration"   width="400"  class="no-border" >}}

### Maps 기능 구성 

1. **Native Mobile App Builder**로 네이티브 템플릿을 설정하십시오. 이것은 [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)에 표시된 대로 Project 메뉴에서 시작할 수 있습니다. 마법사를 완료하고 프로젝트의 세부 정보와 토큰을 구성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-maps/launch-native-mobile-app-builder.png" alt="launch native mobile builder"   width="400"  class="no-border" >}}

1. 마법사를 완료한 후 **Capabilities** 메뉴 항목을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-maps/capability-menu-option.png" alt="capability menu option"   width="400"  class="no-border" >}}

1. Maps 기능을 활성화하십시오. 이렇게 하면 구성 세트가 노출됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-maps/maps-input-fields.png" alt="maps input fields"   width="400"  class="no-border" >}}

    * 전제 조건 섹션에서 설명한 대로, API 키는 Maps Widget에 Google Cloud 서비스에 대한 접근 권한을 제공합니다
    * **Purpose for maps** 문자열은 앱에서 지도를 사용해야 하는 이유를 Apple에 알려주는 특수 텍스트입니다(지도가 디바이스 위치 데이터를 사용하므로 Apple이 설명을 요구합니다)
    * **I want to use Apple Maps for iOS**는 위의 지도 제공자 구성 섹션에서 설명한 결정을 반영합니다

1. **Save** 버튼을 클릭하십시오. 
1. 빌드 페이지로 이동한 다음 **Build**를 클릭하십시오.

{{% alert color="info" %}}
로컬 소스에서 실행할 때 iOS에서는 `pod install`을 한 번 더 실행해야 합니다
{{% /alert %}}

## 추가 정보

* [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)
* [Native Mobile 시작하기](/howto8/mobile/getting-started-with-native-mobile/)

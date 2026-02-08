---
title: "모바일 앱"
url: /developerportal/deploy/mobileapp/
weight: 90
description: "Apple App Store 및 Google Play Store를 통해 iOS 또는 Android에 배포하는 방법을 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

**Mobile App** 페이지에서는 Apple App Store(iOS용) 및 Google Play Store(Android용)에 앱을 게시할 수 있습니다.

이 페이지는 세 개의 탭으로 나뉩니다:

* **App Info**
* **iOS**
* **Android**

{{% alert color="warning" %}}
클라우드에서 하이브리드 앱을 빌드하는 것은 Adobe의 PhoneGap Build 서비스를 사용합니다. Adobe가 더 이상 이 서비스를 유지 관리하지 않으므로, 클라우드에서 하이브리드 앱을 빌드하고 앱 스토어에 게시하는 것은 더 이상 불가능합니다.

하이브리드 앱을 빌드하고 게시하려면 로컬 빌드에 대한 정보는 [로컬에서 Mendix 하이브리드 앱 빌드하기](/howto8/mobile/build-hybrid-locally/)를 참조하십시오.

앱 스토어에 앱을 게시하려면, Mendix는 대신 네이티브 iOS 앱을 빌드할 것을 권장합니다. 자세한 내용은 [네이티브 앱 빌드](/refguide/mobile/distributing-mobile-apps/building-native-apps/)를 참조하십시오.
{{% /alert %}}

## App Info

이 탭에서 다음 섹션을 찾을 수 있습니다:

* **General settings**
* **Profile settings**
* **Permissions**
* **Custom Cordova configuration**

### General Settings

**General settings** 섹션에서 다음 정보를 제공해야 합니다:

* 앱의 **Name**
* 고유한 **App Identifier** (예: `com.example.CompanyExpenses`)
* 앱의 **Description**
* **PIN required?** 체크박스를 통한 5자리 PIN 활성화 또는 비활성화 여부

### Profile Settings

모바일 앱을 빌드할 때 사용 사례에 따라 전화 및 태블릿에서 사용할 올바른 내비게이션 프로필을 지정하십시오. 프로필 식별자가 Mendix Studio Pro에서 정의한 것과 일치하는지 확인하십시오:

* **Phone profile**
* **Tablet profile**
* **Enable offline capabilities?** (오프라인 사용 가능 앱)

자세한 내용은 [오프라인](/refguide/offline-first/)의 **가용성**을 참조하십시오.

### Permissions

기본적으로 Mendix 하이브리드 애플리케이션은 일련의 기기 권한을 필요로 합니다. 사용자가 앱을 설치하거나 처음 열 때 이러한 권한을 부여하도록 요청받습니다. 아래 체크박스를 사용하여 요청할 권한을 제어할 수 있습니다.

활성화/비활성화할 수 있는 권한:

* **Calendar**
* **Camera**
* **Contacts**
* **Geolocation**
* **Microphone**
* **Photo Library**

{{% alert color="info" %}}
이러한 권한을 비활성화하면 일부 기능을 사용하지 못할 수 있습니다(예: 카메라를 비활성화하면 카메라 위젯을 사용할 수 없습니다).
{{% /alert %}}

### Custom Cordova Configuration {#custom}

아래에 XML 스니펫을 추가하여 추가 Cordova 설정 및 플러그인을 지정할 수 있습니다. 이 스니펫은 구성 파일의 하단에 삽입됩니다.

사용 가능한 요소 및 설정에 대한 개요는 [Apache Cordova Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/)을 참조하십시오.

## iOS 및 Android

이 탭에서는 앱 스토어에서 사용될 모든 이미지의 개요를 볼 수 있습니다. 이미지는 두 가지 범주로 나뉩니다:

* **아이콘**
* **스플래시 화면**

다음 이미지 형식이 지원됩니다: PNG, GIF, JPEG 및 BMP. 정보 손실 없이 압축되고 투명도를 잘 지원하는 PNG가 권장됩니다.

**Edit**를 클릭하면 원본 파일과 동일한 크기의 새 파일을 업로드하여 이미지를 교체할 수 있습니다.

이미지를 업로드하지 않으면 표시된 기본 Mendix 브랜드 이미지가 계속 사용됩니다.

이미지 파일의 필수 해상도와 파일 유형을 확인하십시오. 시스템에서 다른 해상도의 이미지를 업로드할 수 없습니다(앱 패키지가 제대로 작동하지 않기 때문입니다).

## 직접 수행하기 {#doing-it-yourself}

앱 빌드 마법사를 시작하고 올바른 환경을 선택한 후 **Download a customizable package**를 클릭하십시오. 패키지에는 모든 설정, 아이콘 및 스플래시 화면이 포함되어 있습니다. 이를 통해 쉽게 변경하고, 로컬 빌드를 생성하고, 에뮬레이터에서 실행할 수 있습니다.

iOS의 경우 *로컬에서 Mendix 하이브리드 앱 빌드하기*의 [로컬에서 iOS 앱 빌드하기](/howto8/mobile/build-hybrid-locally/#building-ios-locally) 섹션의 지침을 따르십시오.

Android의 경우 *로컬에서 Mendix 하이브리드 앱 빌드하기*의 [로컬에서 Android 앱 빌드하기](/howto8/mobile/build-hybrid-locally/#building-android-locally) 섹션의 지침을 따르십시오.

## 추가 정보

* [앱 배포](/deployment/)
* [오프라인 참조 가이드](/refguide/offline-first/)
* [Apache Cordova Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/)

---
title: "Hybrid App Base 및 Template 릴리스 노트"
linktitle: "Hybrid App Base 및 Template"
url: /releasenotes/mobile/hybrid-app/
weight: 30
description: "Mendix Hybrid App Base 및 Hybrid App Template 릴리스 노트."
---

Mendix Developer Portal의 일반 PhoneGap Build 접근 방식을 사용하여 하이브리드 모바일 앱을 빌드하는 경우, 이러한 번호에 대해 걱정할 필요가 없습니다. 새 패키지를 다운로드하고 빌드하면 최신 버전으로 설정됩니다.

고급 플로우를 사용하는 경우, 하이브리드 앱 디렉토리에서 `npm update`를 실행하여 최신 버전의 Hybrid App Base를 받을 수 있습니다. 최신 버전의 Hybrid App Template으로 업그레이드하려면, GitHub에서 최신 변경 사항을 가져오거나 [Mendix Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY**에서 새 복사본을 다운로드하세요.

Mendix의 하이브리드 모바일 앱 개발에 대한 자세한 내용은 *Studio Pro 8 가이드*의 [하이브리드 모바일](/refguide8/hybrid-mobile/) 섹션과 *Studio Pro 8 사용법*의 [하이브리드 모바일](/howto8/mobile/hybrid-mobile/) 섹션을 참조하세요.

## 2021

### Hybrid App Base 5.0.6

**릴리스 날짜: 2021년 6월 17일**

#### 개선 사항

* 하이브리드 앱이 이제 Android API 30을 지원합니다.

#### 수정 사항 

* 올바른 Mendix 호스트로 허용 탐색 태그를 업데이트했습니다.

### Hybrid App Base 5.0.5

**릴리스 날짜: 2021년 4월 16일**

* iOS 푸시 알림 관련 문제를 수정하기 위해 푸시 알림 라이브러리를 업그레이드했습니다.

### Hybrid App Base 5.0.4

**릴리스 날짜: 2021년 3월 16일**

* 런타임 토큰을 가끔 손상시키는 파일 저장소 문제를 수정했습니다.

### Hybrid App Base 5.0.3

**릴리스 날짜: 2021년 3월 5일**

* 데이터베이스가 잘못된 시점에 닫힐 수 있는 문제를 수정했습니다.

## 2020

### Hybrid App Base 5.0.2

**릴리스 날짜: 2020년 9월 3일**

* Hybrid App Base의 버전 번호를 수정했습니다.

### Hybrid App Base 5.0.1

**릴리스 날짜: 2020년 9월 3일**

* Android 빌드는 이제 기본적으로 Android SDK 레벨 29를 대상으로 합니다. 이 버전의 Native Template은 Google Play 요구 사항을 준수합니다. 자세한 내용은 [Android 개발자 포럼](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk)에서 확인할 수 있습니다. 

### Hybrid App Base 5.0.0 / Hybrid App Template 5.0.0

**릴리스 날짜: 2020년 4월 15일**

이 릴리스에서는 더 이상 사용되지 않는 UIWebView 종속성에 대한 Apple App Store 가이드라인을 준수하기 위해 모든 PhoneGap 종속성을 최신 지원 버전으로 업데이트했습니다:

* Cordova 및 PhoneGap을 9.0.0으로 업데이트했습니다.
* Android Engine을 8.1.0으로 업데이트했습니다.
* iOS Engine을 5.1.1로 업데이트했습니다.
* cordova-plugin-inappbrowser를 3.2.0으로 업데이트했습니다.
* NativepageTransitions를 내부 포크를 사용하도록 업데이트했습니다.

### Hybrid App Base 4.1.10

**릴리스 날짜: 2020년 2월 4일**

* 보안 저장소에서 Android 10이 실패하는 문제를 수정했습니다.

### Hybrid App Base 4.1.9

**릴리스 날짜: 2020년 1월 3일**

* 비동기 훅의 경쟁 조건 문제를 수정했습니다.
* 새로운 **onBeforeSynchronization** 훅을 도입했습니다.

## 2019

### Hybrid App Base 4.1.8

**릴리스 날짜: 2019년 12월 17일**

* iOS의 키보드 회피 동작 회귀를 수정했습니다.
* iOS 13 기기에서 SSO 로딩에 실패하는 문제를 수정했습니다.

### Hybrid App Base 4.1.7

**릴리스 날짜: 2019년 11월 18일**

* 빌드 스크립트 누락 문제를 수정했습니다.

### Hybrid App Base 4.1.6

**릴리스 날짜: 2019년 11월 12일**

* iOS 13을 실행하는 iPad에서 앱 로딩을 중지시키는 문제를 수정했습니다.

### Hybrid App Base 4.1.5 

**릴리스 날짜: 2019년 11월 12일**

* 파일 누락으로 인해 Android 빌드가 실패하는 문제를 수정했습니다.

### Hybrid App Base 4.1.4

**릴리스 날짜: 2019년 8월 15일**

* 이전 WebView 버전을 가진 Android 기기가 로딩 루프에 빠질 수 있는 문제를 수정했습니다.
* PIN 뷰를 사용할 때 Secure Storage의 처리되지 않은 예외를 수정했습니다. 핀, 비밀번호, 생체 인식과 같은 OS 수준 보안 기능이 활성화되지 않은 기기의 사용자는 앱의 PIN을 설정하기 전에 이 중 하나를 활성화하라는 메시지가 표시됩니다.

### Hybrid App Base 4.1.3 / Hybrid App Template 4.1.3

**릴리스 날짜: 2019년 7월 18일**

* PIN 뷰를 사용할 때 Android 기기가 때때로 숫자 키보드 대신 QWERTY 키보드를 제공하는 문제를 수정했습니다.

### Hybrid App Base 4.1.1

**릴리스 날짜: 2019년 7월 2일**

* Google Services *.json*, *.plist*, *build-extras.xml* 파일을 **/config** 폴더로 이동했습니다. 따라서 기존 **config.xml** 파일이 있는 경우 213-214 줄이 다음과 같은지 확인하세요:

```xml
<resource-file src="config/google-services.json" target="app/google-services.json" />
<resource-file src="config/build-extras.gradle" target="build-extras.gradle" />
```

* *build-extras.xml* 파일이 앱에 포함되는 방식을 변경했습니다. 이제 PhoneGap Build가 해당 파일을 올바르게 포함합니다.
* *GoogleServices-Info.plist* 파일을 제공하지 않아도 빌드 프로세스가 더 이상 실패하지 않습니다. Android에서는 Firebase Cloud Messaging을 사용하고 iOS에서는 Apple Push Notification 서비스를 사용하는 경우에 유용합니다.

### Hybrid App Base 4.1.0 / Hybrid App Template 4.1.0

**릴리스 날짜: 2019년 5월 14일**

**Cordova Android**를 버전 7.1.4로 업데이트했습니다.

이제 Android 앱의 대상 아키텍처를 더 많이 제어할 수 있습니다. `npm run package` 명령은 이제 모든 지원 아키텍처(x86, x86_64, arm, arm64)를 대상으로 하는 프로젝트를 생성합니다. 즉, 모든 기기에 사용되는 하나의 APK를 게시할 수 있습니다. 이 APK는 Google Play에 게시되는 앱에 대한 [64비트 요구 사항](https://android-developers.googleblog.com/2019/01/get-your-apps-ready-for-64-bit.html)을 충족합니다.

대상 아키텍처를 더 세밀하게 제어하려면 다음 변형을 사용하세요:

| npm 명령             |           설명                        |
| --- | --- |
|`$ npm run package:x86`    |           x86용 `build` 디렉토리를 준비합니다.|
|`$ npm run package:x86_64` |           x86_64용 `build` 디렉토리를 준비합니다.|
|`$ npm run package:arm`    |           arm용 `build` 디렉토리를 준비합니다.|
|`$ npm run package:arm64`  |           arm64용 `build` 디렉토리를 준비합니다.|

### Hybrid App Base 4.0.5

**릴리스 날짜: 2019년 1월 28일**

* 키보드가 숨겨진 후 iOS에서 앱이 전체 화면을 채우지 않는 문제를 수정했습니다.

### Hybrid App Base 4.0.4

**릴리스 날짜: 2019년 1월 23일**

* Google Services *.plist* 파일의 실수를 수정했습니다.

### Hybrid App Base 4.0.3

**릴리스 날짜: 2019년 1월 7일**

* **Cordova Android**를 버전 7.1.3으로 업데이트했습니다.
* 푸시 알림이 활성화된 경우에만 Google Play Services 파일이 복사되도록 했습니다.
* *google-services.json* 파일의 위치를 수정했습니다.
* webpack 구성(하이브리드 앱 패키지 생성에 사용)에서 불필요한 로직을 제거했습니다.

### Hybrid App Base 4.0.2

**릴리스 날짜: 2019년 1월 7일**

* 게시된 npm 패키지에서 누락된 *build-extras.gradle* 파일을 추가했습니다.

### Hybrid App Base 4.0.0 / Hybrid App Template 4.0.0

**릴리스 날짜: 2019년 1월 6일**

{{% alert color="warning" %}}
2019년 4월 11일부로, Google은 Google Cloud Messaging(GCM) 서비스를 통한 푸시 알림 전송 지원을 중단합니다. 그때까지 모든 클라이언트는 새로운 Firebase Cloud Messaging(FCM) 서비스로 마이그레이션해야 합니다. GCM에서 FCM으로의 전환은 Mendix [Push Notifications Connector](/appstore/modules/push-notifications/) 모듈을 통해 푸시 알림을 사용하는 Mendix 앱에 영향을 미칩니다. 업그레이드 지침은 아래 참고 사항을 읽으세요.
{{% /alert %}}

#### 푸시 알림

최신 릴리스의 Mendix Push Notifications Connector는 푸시 알림 전송을 위한 새로운 엔드포인트로 FCM을 지원합니다. FCM은 Android 및 iOS 기기 모두에 푸시 알림을 보내는 데 사용할 수 있습니다.

이 하이브리드 앱 패키지 업그레이드에는 [Cordova Push Notifications 플러그인](https://github.com/phonegap/phonegap-plugin-push) v2로의 업그레이드가 포함됩니다. 플러그인 업그레이드의 일부로 푸시 알림(Mendix Push Notifications Connector와 연결)에 대한 추가 설정이 필요합니다. 구체적으로, 앱이 푸시 알림을 지원하는 경우 앱에 대한 [Firebase](https://firebase.google.com/) 계정을 설정하고 하이브리드 앱에 Google 서비스 설명 파일(*google-services.json* 및 *GoogleService-Info.plist*)을 포함해야 합니다.

이로 인해 푸시 알림을 사용하는 Mendix 하이브리드 앱은 더 이상 Phonegap Build 방법을 사용하여 직접 빌드할 수 없습니다. 대신 *모바일 앱 가이드*의 [직접 하기](/developerportal/deploy/mobileapp/#doing-it-yourself) 섹션을 따라 하이브리드 앱 패키지를 로컬로 준비해야 합니다.

앱이 푸시 알림을 사용하지 않는 경우 여전히 Phonegap Build 워크플로를 사용할 수 있습니다. Developer Portal의 **Deploy** > [Mobile App](/developerportal/deploy/mobileapp/) 페이지의 **Permissions** 섹션에서 **Push Notifications** 체크박스를 해제하세요.

#### 기타 수정 사항

* iOS 앱 빌드 관련 문제를 수정하기 위해 권한 텍스트 구성 방식을 개선했습니다.
* [Google Maps](/appstore/widgets/google-maps/) 위젯 관련 문제를 수정하기 위해 `about:blank`에 대한 탐색 예외를 추가했습니다.

## 2018

### Hybrid App Base 3.0.0 / Hybrid App Template 3.0.0

**릴리스 날짜: 2018년 11월 20일"

{{% alert color="warning" %}}

이것은 하이브리드 앱의 주요 버전 업그레이드입니다.

{{% /alert %}}

이 릴리스의 목표는 PhoneGap/Cordova 프레임워크와 모든 플러그인을 포함한 모든 주요 종속성을 최신 버전으로 업그레이드하는 것입니다. 모든 이전 및 새 버전의 개요는 아래를 참조하세요.

#### 변경 사항

* PhoneGap/Cordova 프레임워크 및 플러그인을 업그레이드했습니다(자세한 내용은 아래 [버전 업그레이드](#upgrades-20) 참조)
* Android 빌드는 이제 기본적으로 Android SDK 레벨 28을 대상으로 합니다(최소 지원 SDK 레벨은 여전히 19)

#### 로컬 컴파일 앱에만 해당

* 하이브리드 앱의 종속성을 설치할 때(`npm install` 실행), 전역적으로 설치된 `phonegap` 패키지의 버전을 확인합니다. 이 버전이 `config.xml` 파일에 지정된 `phonegap-cli` 버전과 정확히 일치해야 하는 요구 사항을 완화했습니다. 대신 지정된 주요 버전 내에서 더 새로운 버전도 허용합니다. 예를 들어, `config.xml`이 `phonegap-cli` 레벨 8.1.1을 정의하면 PhoneGap 버전 8.2.2도 허용합니다.
* 더 이상 필요하지 않은 `cordova-android-support-gradle-release` 및 `cordova-android-play-services-gradle-release` 플러그인에 대한 모든 참조를 제거했습니다.
* 하이브리드 앱을 빌드하고 PhoneGap CLI와 상호 작용하기 쉽게 하기 위해 추가 NPM 스크립트를 추가하고 기존 스크립트를 개선했습니다.

#### 버전 업그레이드 {#upgrades-20}

##### 프레임워크

| 이름            | 이전 버전 | 새 버전 |
| --------------- | ----------- | ----------- |
| PhoneGap CLI    | 7.1.0       | 8.1.1       |
| Cordova Android | 6.3.0       | 7.1.2       |
| Cordova iOS     | 4.5.4       | 4.5.5       |

##### 플러그인

| 이름                                                        | 이전 버전          | 새 버전          | 비고                                                     |
| ----------------------------------------------------------- | -------------------- | -------------------- | ------------------------------------------------------------ |
| `com.crosswalk.cookies`                                     | 버전 미지정 | 버전 미지정 |                                                              |
| `com.darktalker.cordova.screenshot`                         | 0.1.6                | 0.1.6                |                                                              |
| `com.telerik.plugins.nativepagetransitions`                | 0.6.5                | 0.6.5                |                                                              |
| `cordova-build-architecture`                                | 1.0.3                | 1.0.4                |                                                              |
| `cordova-plugin-actionsheet`                                | 2.3.3                | 2.3.3                |                                                              |
| `cordova-plugin-android-permissions`                        | 0.10.0               | 0.11.0               |                                                              |
| `cordova-android-support-gradle-release`                    | 1.2.0                | 제거됨              |                                                              |
| `cordova-plugin-app-version`                                | 0.1.8                | 0.1.9                |                                                              |
| `cordova-plugin-battery-status`                             | 1.1.2                | 2.0.2                |                                                              |
| `cordova-plugin-calendar`                                   | 4.5.5                | 5.1.2                |                                                              |
| `cordova-plugin-camera`                                     | 2.4.0                | 4.0.3                |                                                              |
| `cordova-plugin-contacts`                                   | 1.4.2                | 3.0.2                |                                                              |
| `cordova-plugin-cookieemperor`                              | 버전 미지정 | 버전 미지정 |                                                              |
| `cordova-plugin-crosswalk-webview`                          | 2.3.0                | 2.4.0                |                                                              |
| `cordova-plugin-device`                                     | 1.1.2                | 2.0.2                |                                                              |
| `cordova-plugin-device-motion`                              | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-device-orientation`                         | 1.0.3                | 2.0.1                |                                                              |
| `cordova-plugin-dialogs`                                    | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-file`                                       | 4.2.0                | 6.0.1                |                                                              |
| `cordova-plugin-file-opener2`                               | 2.0.19               | 2.0.19               |                                                              |
| `cordova-plugin-file-transfer` | 1.5.1                | 1.7.1                |                                                              |
| `cordova-plugin-geolocation`                                | 2.2.0                | 4.0.1              |                                                              |
| `cordova-plugin-globalization`                              | 1.0.3                | 1.11.0               |                                                              |
| `cordova-plugin-inappbrowser`                               | 3.0.0                | 3.0.0                |                                                              |
| `cordova-plugin-media`                                      | 2.3.0                | 5.0.2                |                                                              |
| `cordova-plugin-media-capture`                              | 1.4.2                | 3.0.2                |                                                              |
| `cordova-plugin-network-information`                        | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-secure-storage`                             | 2.4.0                | 2.6.8                |                                                              |
| `cordova-plugin-spinner`                                    | 1.1.0                | 1.1.0                |                                                              |
| `cordova-plugin-splashscreen`                               | 4.1.0                | 5.0.2                |                                                              |
| `cordova-plugin-statusbar`                                  | 2.3.0                | 2.4.2                |                                                              |
| `cordova-plugin-vibration`                                  | 2.1.1                | 3.1.0                |                                                              |
| `cordova-plugin-x-socialsharing`                            | 5.0.11               | 5.4.0                |                                                              |
| `cordova-plugin-zip`                                        | 3.1.0                | 3.1.0                |                                                              |
| `cordova-plugin-whitelist`                                  | 1.2.2                | 1.3.3                |                                                              |
| `cordova-plugin-wkwebview-engine-mx`                        | 1.1.0                | 1.0.1-mx.1.2.0       | 이전 버전 번호가 잘못되었습니다                             |
| `@mendix/cordova-sqlite-storage`                            | 버전 미지정 | 2.0.4-mx.1.1.0       | `cordova-sqlite-storage-pgb`에서 이름 변경                    |
| `@mendix/phonegap-plugin-push`                              | 1.5.3                | 1.11.1-mx.1.0.0      | `phonegap-plugin-push`에서 이름 변경                          |
| `@mendix/uk.co.workingedge.phonegap.plugin.launchnavigator` | 2.9.11               | 4.2.2-mx.1.0.0       | `uk.co.workingedge.phonegap.plugin.launchnavigator`에서 이름 변경 |

실제 프로젝트와 [Mendix Marketplace](https://marketplace.mendix.com/)의 널리 사용되는 위젯에 대해 광범위한 테스트를 수행했습니다.

### Hybrid App Base 2.3.2

**릴리스 날짜: 2018년 10월 18일**

* Android 지원 라이브러리를 고정하는 메커니즘을 실수로 제거하여 앱 컴파일 중 문제가 발생할 수 있었습니다. 이제 SDK 버전 27로 다시 고정합니다.

### Hybrid App Base 2.3.1

**릴리스 날짜: 2018년 10월 18일**

* inappbrowser 플러그인을 최신 버전(3.0.0)으로 업그레이드했습니다.

### Hybrid App Base 2.3.0

**릴리스 날짜: 2018년 10월 18일**

* Cordova inappbrowser 플러그인이 최근 Android API 요구 사항 변경을 준수하지 않습니다. 구체적으로 file:// 프로토콜을 사용한 파일 열기가 허용되지 않습니다. 이 문제를 피하기 위해 파일(이미지, pdf 등)에 대한 링크는 이제 기기에서 사용 가능한 기본 애플리케이션을 사용하여 열립니다.

### Hybrid App Base 2.2.2

**릴리스 날짜: 2018년 8월 14일**

* 로그아웃/정리 프로세스의 일부로 인증 토큰이 여전히 존재할 수 있는 모든 위치를 이제 비웁니다.

### Hybrid App Base 2.2.1

**릴리스 날짜: 2018년 8월 13일**

* 업그레이드된 앱의 경우, 인증 토큰을 localstorage 대신 파일 저장소에 저장하는 최근 변경이 세션 손실로 이어질 수 있었습니다. 이 문제를 피하기 위해 localstorage에 토큰이 아직 사용 가능한지 확인하는 폴백 메커니즘을 추가했습니다.

### Hybrid App Base 2.2.0

**릴리스 날짜: 2018년 8월 13일**

* 앱 업데이트 후 세션이 재구성되지 않는 문제를 방지하기 위해 인증 토큰 저장 방식을 변경했습니다.
* 웹 뷰에서 보안 오류를 방지하기 위해 *config.xml* 파일에 여러 기본 항목을 추가했습니다.

### Hybrid App Base 2.1.0

**릴리스 날짜: 2018년 7월 9일**

{{% alert color="warning" %}}

8월 1일부터 Google Play Store에 게시되는 새 앱은 최소 Android SDK 26을 대상으로 해야 합니다. 11월 1일부터 앱 업데이트도 최소 SDK 26을 대상으로 해야 합니다.

{{% /alert %}}

이 업데이트로 Mendix 하이브리드 앱은 위의 요구 사항과 호환됩니다.

불행히도 Crosswalk은 SDK 버전 24 이상과 호환되지 않습니다. 따라서 기본 Mendix 하이브리드 앱 템플릿에서 Crosswalk을 제거했습니다. 이로 인해 Android 버전 4.4 이하를 실행하는 기기에서 성능이 저하될 수 있습니다.

{{% alert color="info" %}}

이 업데이트를 위해 Mendix는 [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**을 통해 Mendix Developer Portal에서 새 하이브리드 앱 패키지를 다운로드하는 것을 권장합니다.

{{% /alert %}}

### Hybrid App Base 2.0.7

**릴리스 날짜: 2018년 7월 5일**

* 기본 스타일링의 투명도 수준을 수정했습니다.

### Hybrid App Base 2.0.6 {#7318}

**릴리스 날짜: 2018년 7월 3일**

* 오프라인 앱의 기본 서버 타임아웃을 늘렸습니다. 새 타임아웃은 30초입니다.

### Hybrid App Base 2.0.5

**릴리스 날짜: 2018년 4월 20일**

* 로더 및 로그인 화면의 텍스트를 더 두껍게 만들어 스타일링을 개선했습니다.

### Hybrid App Base 2.0.4

**릴리스 날짜: 2018년 4월 19일**

* 로더 화면의 스타일링을 개선했습니다.
* 품질 대 밀도 속성(Android 전용)에 대한 하위 호환성을 추가했습니다.

### Hybrid App Base 2.0.3 / Hybrid App Template 2.0.1

**릴리스 날짜: 2018년 3월 23일**

이 패치는 Google에 의해 업데이트된 업스트림 종속성(`com.google.android.gms:play-services-gcm`)의 문제를 수정합니다. 이 문제로 인해 로컬 및 Phonegap Build 모두에서 *.apk* 파일 빌드가 불가능했습니다.

### Hybrid App Base 2.0.2

**릴리스 날짜: 2018년 3월 16일**

이 패치는 `index.html` 파일 생성 관련 문제를 수정합니다.

### Hybrid App Base 2.0.1

**릴리스 날짜: 2018년 3월 13일**

이 패치는 Google에 의해 업데이트된 업스트림 종속성(`com.android.support:support-v4`)의 문제를 수정합니다. 이 문제로 인해 로컬 및 Phonegap Build 모두에서 *.apk* 파일 빌드가 불가능했습니다.

### Hybrid App Base 2.0.0 / Hybrid App Template 2.0.0

**릴리스 날짜: 2018년 3월 9일**

{{% alert color="info" %}}

이것은 주요 릴리스이며, 이전 버전의 hybrid-app-template과 완전히 호환되지 않습니다. 이 업데이트를 위해 Mendix는 [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**을 통해 Mendix Developer Portal에서 새 하이브리드 앱 패키지를 다운로드하는 것을 권장합니다. 아래에 설명된 테마 옵션의 필드로 **Mobile Apps** 마법사를 확장했습니다. 또한 단일 기본 이미지를 업로드하여 스플래시 화면/아이콘을 구성할 수 있습니다.

{{% /alert %}}

* 커스텀 테마 지원을 추가했습니다:
    * *error.png*를 추가/교체하여 오류 화면의 이미지를 구성할 수 있습니다.
    * *parameters.json*을 조정하여 오류 대화 상자, 로그인 화면 및 PIN 화면의 색상(배경/전경/텍스트)을 구성할 수 있습니다.
    * *loader.html.snippet* 및 *loader.css.snippet*을 구성하여 로딩 화면의 HTML과 CSS를 조정할 수 있습니다.
* 이제 *parameters.json*의 `name` 값을 기반으로 페이지 제목을 올바르게 설정합니다.

### Hybrid App Base 1.7.4 / Hybrid App Template 1.4.0

**릴리스 날짜: 2018년 1월 31일**

{{% alert color="info" %}}

이 업데이트를 위해 Mendix는 Mendix Developer Portal([Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**)에서 새 하이브리드 앱 패키지를 다운로드하는 것을 권장합니다.

{{% /alert %}}

* NPM 업데이트가 지속적으로 실패하는 문제를 수정했습니다. 이 문제는 최근 추가된 로컬 PhoneGap 종속성과 관련이 있었습니다. 이 로컬 종속성은 이제 제거되었습니다. PhoneGap은 전역적으로 설치되어야 하며, *config.xml*에 구성된 CLI 버전과 일치해야 합니다(예: `npm install -g phonegap@7.1.0`). NPM 설치/업데이트 중에 현재 및 필수 버전에 관한 콘솔 피드백이 있습니다.
* `mendix-hybrid-app-base` 및 `mendix-hybrid-app-template` 모두에서 *package-lock.json* 파일을 제거했습니다. 이를 통해 최신 `mendix-hybrid-app-base` 패키지를 최신 상태로 유지하기 쉬워집니다.
* 이제 NPM 설치/업데이트 중에 *config.xml.mustache* 및 *index.html.mustache* 파일의 예제 파일이 생성됩니다.
* webpack 관련 오래된 종속성을 제거했습니다.

### Hybrid App Base 1.7.3

**릴리스 날짜: 2018년 1월 30일**

* Cordova 콘솔 플러그인을 제거했습니다. 이 플러그인은 쓸모없었고 iOS 패키지 빌드 중 문제를 유발했습니다.

### Hybrid App Template 1.3.5

**릴리스 날짜: 2018년 1월 23일**

* 이전 버전의 `mendix-hybrid-app-base`가 사용되는 문제를 수정하기 위해 *package-lock.json* 파일을 업데이트했습니다.

### Hybrid App Base 1.7.2 / Hybrid App Template 1.3.4

**릴리스 날짜: 2018년 1월 17일**

* 필요한 경우에만 정적 파일의 새 복사본이 다운로드되도록 `synchronizePackage` 호출에 캐시 버스트를 추가했습니다.
* 사용되는 Phonegap CLI 버전을 7.1.0으로 업그레이드했습니다.
* **cordova-build-architecture** 플러그인을 최신 버전으로 업그레이드하여 PhoneGap 프로젝트의 로컬 플랫폼 설정 문제를 수정했습니다.
* 로컬 빌드를 더 강력하게 만들기 위해 **npm**을 dev 종속성으로 추가했습니다.

## 2017

### Hybrid App Template 1.3.3

**릴리스 날짜: 2017년 12월 22일**

* 같은 이름의 **npm** 명령과 충돌했기 때문에 `prepare` 명령을 `prepare:all`로 이름을 변경했습니다.
* 목차와 알려진 문제 목록으로 README를 업데이트했습니다.

### Hybrid App Base 1.7.0 / Hybrid App Template 1.3.2

**릴리스 날짜: 2017년 12월 2일**

* 새로운 iPhone X 화면 크기/비율/노치를 지원하도록 일부 Cordova 플러그인을 업데이트했습니다. iPhone X에서 하이브리드 앱이 잘 보이도록 구성하려면 [iPhone X 지원](https://github.com/mendix/hybrid-app-template/blob/master/IPHONEX.md)의 지침을 따르세요.
* Android 스플래시 화면 구성 방식을 개선했습니다. 이전 구성은 시작 중 메모리 관련 충돌로 이어질 수 있었습니다.

### Hybrid App Base 1.6.0

**릴리스 날짜: 2017년 11월 16일**

* Android 아이콘과 스플래시 화면이 이제 올바르게 구성됩니다. "직접 하기" 워크플로를 사용하는 프로젝트의 경우, *src/config.xml.mustache*에서 다음 변경을 적용하세요:

* 변경:

    ```xml
    <{{{tag}}} src="{{{filename}}}" qualifier="{{{qualifier}}}"/>
    ```

    <br />
    를:<br />

    ```xml
    <{{{tag}}} src="{{{filename}}}" density="{{{qualifier}}}"/>
    ```

* PIN 로그인 실패 시 불필요한 오류 메시지를 제거했습니다.
* Mendix 프로젝트에서 **디스크의 정적 리소스**가 활성화된 경우 매 시작 시 정적 파일이 동기화되는 문제를 수정했습니다.
* 이전 버전에서는 오프라인 모드가 활성화된 모바일 앱이 Mendix 앱의 새 버전이 사용 가능할 때 대화 상자를 표시했습니다. 이 동작을 시작 시 항상 업데이트하도록 변경했습니다. 이를 통해 사용자가 나중에 모바일 앱을 업데이트하기로 결정했을 때 발생할 수 있는 불일치를 방지합니다.

### Hybrid App Base 1.5.0

**릴리스 날짜: 2017년 10월 27일**

* 일부 경우에 PIN 로그인 프롬프트를 피할 수 있었습니다. 이 릴리스는 이러한 경우를 완화합니다. PIN 로그인이 활성화된 하이브리드 앱의 경우 이 릴리스로 업그레이드하는 것을 강력히 권장합니다.

### Hybrid App Base 1.4.3

**릴리스 날짜: 2017년 10월 17일**

* 커스텀 네비게이션 프로필에 대한 지원이 제거되었습니다. 이는 버전 7.2 또는 7.3에서 실행되는 Mendix 앱에 영향을 미칩니다. 이러한 앱의 경우 최신 Mendix 버전으로 업그레이드하는 것이 권장됩니다.

### Hybrid App Base 1.4.2 / Hybrid App Template 1.3.1

**릴리스 날짜: 2017년 10월 13일**

* 추가 Phonegap 명령(`plugin` 및 `prepare`)을 추가했습니다.
* 일부 경우 빌드 실패를 수정하기 위해 `devDependency`를 추가했습니다.
* 쿠키 및/또는 PIN/로그인 토큰 제거가 실패했을 때 일부 정리 단계가 건너뛰어지는 문제를 수정했습니다.

### Hybrid App Base 1.4.1

**릴리스 날짜: 2017년 10월 12일**

* PIN 플로우를 깨뜨리는 `Promise.all`의 잘못된 적용을 수정했습니다.
* Phonegap Build ZIP 파일 빌드에 내부적으로 사용되는 `appbase` 명령을 수정했습니다.

### Hybrid App Base 1.4.0

**릴리스 날짜: 2017년 10월 11일**

* 이 릴리스는 PIN 로그인 기능에 대한 지원을 개선합니다:
    * Phonegap CLI 버전을 7.0.1로 업데이트했습니다.
    * PIN 로그인 기능과 조합한 사용자 전환에 대한 지원을 개선했습니다.
    * 남아 있는 세션 데이터 문제를 수정했습니다.

### Hybrid App Template 1.3.0

**릴리스 날짜: 2017년 9월 25일**

* Mendix 커뮤니티의 피드백을 기반으로 Mendix 하이브리드 모바일 앱을 빌드하는 동안 사용할 수 있는 명령 세트를 반복하기로 결정했습니다. 업데이트된 명령 사용 방법에 대한 지침은 [Mendix PhoneGap Build App Template README](https://github.com/mendix/hybrid-app-template/blob/master/README.md)를 참조하세요.

### Hybrid App Base 1.3.0

**릴리스 날짜: 2017년 9월 20일**

* iOS 11 지원을 추가했습니다(티켓 56209). 기존 하이브리드 앱의 경우 *config.xml*의 `cordova-plugin-wkwebview-engine-nextgen plugin` 버전을 1.1.0으로 업데이트하고 다시 게시할 수도 있습니다.
* PIN 로그인 페이지의 키보드 유형을 `tel`로 변경했습니다. (티켓 54380)

### Hybrid App Base 1.2.0 / Hybrid App Template 1.2.0

**릴리스 날짜: 2017년 8월 28일**

* Mendix 애플리케이션의 새 버전이 배포될 때마다 하이브리드 앱이 이제 사용자에게 업데이트할 준비가 되었는지 확인을 요청합니다.

### Hybrid App Base 1.1.2 / Hybrid App Template 1.1.1

**릴리스 날짜: 2017년 8월 25일**

* "잘못된 형식의 JSON" 문제를 수정했습니다.
* BlueBird 라이브러리에 대한 종속성을 제거했습니다.
* Webpack 3으로 업데이트했습니다.

### Hybrid App Base 1.1.0 / Hybrid App Template 1.1.0

**릴리스 날짜: 2017년 8월 1일**

* 자격 증명이 제공되면 이제 자동으로 로그인할 수 있습니다.
* SQLite 라이브러리를 자체 포크로 교체했습니다.

### Hybrid App Base 1.0.7

**릴리스 날짜: 2017년 6월 13일**

* Android ARM 빌드가 이제 기본값입니다.

### Hybrid App Base 1.0.6

**릴리스 날짜: 2017년 6월 13일**

* 이제 `entry.js`의 재정의를 지원합니다.

### Hybrid App Base 1.0.5

**릴리스 날짜: 2017년 6월 13일**

* **resources** 폴더를 정리했습니다.

### Hybrid App Base 1.0.4

**릴리스 날짜: 2017년 6월 13일**

* 정리 시 *package.json*이 제거되는 문제를 수정했습니다.

### Hybrid App Base 1.0.3 / Hybrid App Template 1.0.3

**릴리스 날짜: 2017년 6월 13일**

* `WkWebview`가 이제 기본적으로 활성화됩니다.
* UglifyJS 관련 문제를 수정하고 NPM5 lockfile을 추가했습니다.

### Hybrid App Base 1.0.2 / Hybrid App Template 1.0.2

**릴리스 날짜: 2017년 6월 13일**

* 리소스 경로와 디버그 모드를 수정했습니다.

### Hybrid App Base 1.0.1 / Hybrid App Template 1.0.1

**릴리스 날짜: 2017년 6월 13일**

* 이제 더 많은 iOS 아이콘이 있습니다.
* 문서를 개선했습니다.
* `WkWebview`에서 이미지 URL을 수정했습니다.

### Hybrid App Base 1.0.0 / Hybrid App Template 1.0.0

**릴리스 날짜: 2017년 6월 13일**

* 새로운 Mendix Hybrid App 패키지 형식입니다.

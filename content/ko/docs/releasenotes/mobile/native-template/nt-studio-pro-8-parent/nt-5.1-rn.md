---
title: "Native Template 5.1"
url: /releasenotes/mobile/nt-5.1-rn/
weight: 20
description: "Native Template 5.1 릴리스 노트."
---

{{% alert color="warning" %}}
Native Template [5.0](/releasenotes/mobile/nt-5.0-rn/) 및 [5.1](/releasenotes/mobile/nt-5.1-rn/) 버전은 더 이상 업데이트를 받지 않습니다. 또한, Native Template은 8.18.9 미만 버전에서는 작동하지 않습니다. 

최신 Studio Pro [8.18.x](/releasenotes/studio-pro/8.18/) 패치 릴리스와 [호환되는](/releasenotes/mobile/nt-studio-pro-8-parent/) Native Template 버전을 사용하세요.
{{% /alert %}}

## 5.1.21

**릴리스 날짜: 2022년 12월 27일**

### 수정 사항

* jitpack.io 관련 문제를 해결하기 위해 Android 빌드의 리포지토리 순서를 변경했습니다.

## 5.1.20

**릴리스 날짜: 2022년 11월 9일**

### 수정 사항

* 최근 React Native 릴리스로 인해 Android 빌드 실패가 발생하는 문제를 수정했습니다. (티켓 170385, 170396, 170398, 170469)
* Apple M1 머신을 사용하여 로컬로 빌드된 Android 앱에 영향을 미치는 문제를 수정했습니다.

## 5.1.19

**릴리스 날짜: 2022년 5월 11일**

### 수정 사항

* 빌드 실패를 일으키는 Android의 JCenter 문제를 수정했습니다. JCenter가 불안정해지고 더 이상 지원되지 않으므로, 이제 Android 종속성을 자체 호스팅합니다. (티켓 148798, 148819, 148830, 148840)

## 5.1.17

**릴리스 날짜: 2021년 9월 29일**

### 개선 사항

iOS 15에서는 Xcode 13으로 앱을 재컴파일해야 합니다. 이 릴리스는 App Center의 구성을 Xcode 13을 사용하도록 업데이트합니다.

## 5.1.16

**릴리스 날짜: 2021년 9월 9일**

### 수정 사항

* Android의 종속성 해석 문제를 수정했습니다.

## 5.1.15

**릴리스 날짜: 2021년 8월 9일**

### 개선 사항

* 이 릴리스는 Firebase Crashlytics 지원을 도입하고 더 이상 사용되지 않는 Fabric.io 종속성에 대한 이전 참조를 제거합니다.

## 5.1.14

**릴리스 날짜: 2021년 7월 20일**

### 개선 사항

* `appCenterOTA` 기능에 대한 구현을 추가하여 기능 구성을 개선했습니다. 이로 인해 Native Mobile App Builder를 통해 OTA 지원이 활성화되지 않은 경우에도 모든 애플리케이션에 `Codepush`를 번들로 포함해야 하는 이전의 필요성이 제거되었습니다.
* 이전 버전의 보안 문제로 인해 `react-native-codepush` 종속성을 `6.4.1`로 업데이트했습니다.
* 더 이상 사용되지 않는 Fabric 및 Crashlytics 모듈에 대한 지원을 제거했습니다.

## 5.1.13

**릴리스 날짜: 2021년 6월 30일**

### 개선 사항

* pods 설치(`pod install`) 시 Native Template이 이제 시스템의 Xcode 버전을 파악하고 Xcode 12.5 호환성 패치를 올바르게 적용할 수 있습니다.

### 수정 사항

* 딥 링크 관련 iOS 커스텀 개발자 앱 문제를 수정했습니다.
* 딥 링크가 애플리케이션을 충돌시키는 Android 커스텀 개발자 앱의 문제를 수정했습니다.

## 5.1.12

**릴리스 날짜: 2021년 6월 11일**

### 개선 사항

* 커스텀 개발자 앱이 이제 딥 링크를 완전히 지원합니다. 이를 통해 커스텀 개발자 앱을 사용하여 딥 링크 사용 사례를 테스트할 수 있습니다. 자세한 내용은 [커스텀 개발자 앱 만들기](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) 및 [네이티브 모바일 앱에서 딥 링크 설정](/refguide9/mobile/using-mobile-capabilities/deep-links/)을 참조하세요.

### 호환성을 깨뜨리는 변경 사항

iOS에서 이제 `AppDelegate.m.`의 두 가지 구현이 있습니다: 하나는 릴리스 앱용이고, 다른 하나는 개발자 앱용입니다. 더 많은 기능을 추가할수록 커스텀 개발자 앱의 더 복잡한 요구 사항을 지원하기 위해 더 많은 보일러플레이트를 추가해야 했습니다. 구현을 분리함으로써 릴리스 앱은 이제 깔끔하고 간단한 구현을 받고, 더 복잡한 구현은 추상화됩니다. 

이를 통해 종속성의 문서를 따르기만 하면 커스텀 코드를 쉽게 추가할 수 있습니다. 

{{% alert color="warning" %}}
앱에 타사 종속성 등으로 인해 커스텀 초기화가 필요하고 커스텀 개발자 앱을 사용하여 구현을 테스트할 계획인 경우, 이 버전 이상부터 해당 커스텀 작업을 AppDelegate(`Dev/AppDelegate.m`에 위치)에 **반드시 복제해야** 합니다.
{{% /alert %}}

## 5.1.11

**릴리스 날짜: 2021년 5월 14일**

### 수정 사항 

* Firebase 기능이 비활성화된 경우에도 Firebase 모듈 종속성이 iOS 애플리케이션에 자동으로 링크되는 문제를 수정했습니다.

## 5.1.10

**릴리스 날짜: 2021년 4월 6일**

### 개선 사항

* Android 커스텀 개발자 앱이 이제 딥 링크를 지원합니다. 

### 수정 사항 

* Native Template v5.1.9에서 iOS 빌드가 실패하는 문제를 수정했습니다.

## 5.1.9

**릴리스 날짜: 2021년 3월 31일**

### 5.1.x용 Mobile Toolkit

Mobile Toolkit은 Native Template에 도입된 새로운 구성 CLI입니다. 이를 통해 프로젝트 구성의 책임을 Template으로 이전하여, Native Mobile Builder의 온라인 요구 사항으로 인해 이전에는 불가능했던 오프라인 사용자의 프로젝트 자동 구성 경로를 제공합니다. CLI는 다음 명령을 지원합니다:

`native-mobile-toolkit configure --config-path='./config.json'`

또는

`npm run configure`

Native Mobile Builder는 *config.json*에 작성하고 상대 위치에 에셋을 커밋합니다. 그런 다음 CLI가 *config*를 읽고 프로젝트를 구성하며 에셋을 프로젝트의 올바른 위치로 이동하는 작업을 처리합니다.

### 수정 사항

* 디버그 모드를 활성화할 때 Firebase가 Custom Developer 앱을 충돌시킬 수 있는 또 다른 경우를 수정했습니다.

## 5.1.8 {#518}

**릴리스 날짜: 2021년 3월 17일**

### 수정 사항

* Native Template v5.1.7에서 릴리스된 수정으로 인해 앱이 충돌할 수 있는 문제를 수정했습니다.
* JavaScript 디버깅이 활성화된 경우 커스텀 개발자 앱이 충돌할 수 있는 문제를 수정했습니다.

## 5.1.7

**릴리스 날짜: 2021년 3월 12일**

{{% alert color="warning" %}}
패치 후 Firebase를 사용할 때 앱이 충돌한다는 보고를 받아 버전 5.1.7을 철회하기로 결정했습니다. [5.1.8](#518)로 업데이트하세요. 
{{% /alert %}}

### 수정 사항

* JavaScript 디버깅이 활성화된 경우 커스텀 개발자 앱이 충돌할 수 있는 문제를 수정했습니다.

## 5.1.6

**릴리스 날짜: 2021년 2월 15일**

### 수정 사항

* **react-native-image-picker** 종속성을 업데이트했습니다.
* **react-native-image-picker** 패치가 이제 Windows에서 올바르게 적용됩니다.
* iOS에서 **PRODUCT_NAME** 변수를 각 타겟의 XCConfig 파일을 통해 설정할 수 있습니다.

## 5.1.5

**릴리스 날짜: 2021년 2월 4일**

### 수정 사항

* 스크롤 가능한 뷰의 입력에 대한 Android 키보드 동작을 수정했습니다.
* 보안 문제를 해결하기 위해 React Native Device Info 라이브러리를 업데이트했습니다.

## 5.1.4

**릴리스 날짜: 2020년 12월 22일**

### 수정 사항

* 푸시 알림을 열 때 iOS 앱이 충돌할 수 있는 문제를 수정했습니다.

## 5.1.3

**릴리스 날짜: 2020년 11월 27일**

### 개선 사항

* iOS 피어 종속성을 업데이트했습니다.

### 수정 사항

* iOS 14의 버그를 수정하기 위해 기본 DatePicker 라이브러리를 업데이트했습니다.

## 5.1.1

**릴리스 날짜: 2020년 11월 2일**

### 고지 사항

* Native Template v5.1.1은 Studio Pro v8.15.x 이상으로 빌드된 앱에 적용됩니다.

### 개선 사항

* 이 릴리스는 Mendix 네이티브 모바일 앱을 Xcode 12의 빌드 시스템과 완전히 호환되도록 합니다.

### 수정 사항

* Xcode 12를 사용하여 완료된 빌드에서 Base64 인코딩 이미지가 이제 완전히 지원됩니다.

## 5.1.0

**릴리스 날짜: 2020년 10월 27일**

### 고지 사항

이 릴리스는 새로운 Mendix Native Mobile Builder에서 도입된 **Capabilities** 지원을 사용하기 위해 필요합니다. 해당 도구의 기능을 사용하려면 이 버전 이상으로 업데이트해야 합니다. Mendix Native Mobile Builder는 Mendix Studio Pro 8.15 이상에 포함되어 있습니다.

### Capabilities 지원

Mendix Native Mobile Builder의 릴리스와 함께 종속성 링크에 대한 새로운 접근 방식을 도입합니다.

이전 버전의 Native Template에서는 모든 코어 종속성이 기본적으로 링크되어 있었습니다. 예를 들어, 앱이 어떤 기능도 사용하지 않더라도 Firebase가 링크되어 있었습니다. 새로운 접근 방식은 React Native의 자동 링크 동작을 기반으로 하며 한 단계 더 확장합니다.

모든 코어 기능을 수집하여 플랫폼별 capabilities의 *.json* 파일로 그룹화했습니다. 간단한 Boolean 토글로 Native Template은 활성화된 기능에 필요한 종속성을 링크할 수 있습니다. 자동 링크가 없는 것들도 포함됩니다. 이는 iOS의 `pod install` 단계와 Android의 빌드 단계의 일부로 발생합니다. 이 파일을 변경할 때마다 iOS에서는 `pod install`을, Android 프로젝트에서는 빌드를 실행해야 새로운 파일이 생성됩니다.

Google Service 구성이나 Google Maps API 포함과 같은 일부 단계는 로컬로 빌드하는 경우 여전히 수동입니다. 이러한 단계를 더 간소화하려면 Mendix Native Mobile Builder를 사용하여 프로젝트를 구성하고 원하는 방식으로 프로젝트를 빌드하는 것을 고려하세요.

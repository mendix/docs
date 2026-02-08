---
title: "Mendix Native Mobile Builder 릴리스 노트"
linktitle: "Mendix Native Mobile Builder"
url: /releasenotes/mobile/mendix-native-mobile-builder/
aliases:
    - /releasenotes/mobile/mendix-mobile-native-builder
weight: 11
description: "Mendix Native Mobile Builder 릴리스 노트."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 소개

Mendix Native Mobile Builder는 Mendix Studio Pro를 보완하는 UI 기반 도구로, Mendix 네이티브 모바일 앱을 빌드하는 데 도움을 줍니다. Mendix Native Mobile Builder가 빌드 프로세스를 간소화한 후, 가장 원하는 일을 할 수 있습니다: 앱을 테스트하고 게시하기. 

Mendix Native Mobile Builder는 MxBuild와 GitHub를 사용하여 앱 빌드 프로세스를 간소화하며 Mendix Studio Pro를 통해 직접 접근할 수 있습니다. 최상의 결과를 위해 최신 버전의 Native Mobile Builder를 사용하는 것을 권장합니다.

### 문제 해결

#### OTA 업데이트 루프

더 이상 존재하지 않는 Native Template 버전(예: 이전에 배포된 베타 버전)을 사용하여 앱을 빌드한 경우, [OTA](/refguide/mobile/distributing-mobile-apps/overtheair-updates/#when-to-use-ota)로 업데이트할 때 앱이 해결되지 않는 루프에 빠질 수 있습니다. 이 문제는 지원되지 않는 Native Template에서 비롯되므로 모든 NMB 버전에 영향을 미칠 수 있습니다. 

이 문제를 해결하려면 다음을 수행하세요:

1. NMB의 이전 빌드 출력 폴더로 이동하세요.
2. **template_version** 파일을 여세요.
3. 파일의 내용을 삭제하세요.
4. **config.json**을 삭제하세요.
5. Mendix Native Mobile Builder를 다시 여세요.

## Release 1.0.145 {#10145}

**릴리스 날짜: 2026년 1월 28일**

### iOS 위치 권한 변경

* iOS에서 위치 권한 기준을 변경했습니다. 이전에는 기본적으로 필수였지만, 이제 **Native Permissions** 화면에서 선택적으로 활성화하거나 비활성화할 수 있습니다.

### 기능

* Android OS 13+ 타겟팅 시 `MEDIA` 권한 지원을 추가했습니다. 이제 Native Builder에 권한이 표시됩니다. 이로 인해 이러한 기기에서 이러한 권한이 올바르게 작동하지 않는 경우도 수정됩니다.

## Release 1.0.144 {#10143}

**릴리스 날짜: 2025년 12월 23일**

## 개선 사항

* Studio Pro 11 이상을 사용할 때 푸시 알림에 Notifee가 설치됩니다. 이전 버전에는 영향을 미치지 않습니다.

## 수정 사항

* iOS에서 빌드 후 `RUNTIME_URL`에 추가 경로 부분이 포함된 경우 슬래시 구분자가 올바르게 이스케이프되지 않는 문제를 수정했습니다.

## Release 1.0.143 {#10143}

**릴리스 날짜: 2025년 11월 21일**

## 수정 사항

* "`@notifee/react-native` is not a known dependency" 오류로 네이티브 빌드가 실패하는 문제를 수정했습니다.

## Release 1.0.142 {#10142}

**릴리스 날짜: 2025년 11월 19일**

### 수정 사항

* Native Build UI가 오래된 알림 종속성을 참조하는 문제를 수정했습니다.

## Release 1.0.141 {#10141}

**릴리스 날짜: 2025년 11월 11일**

### 수정 사항

* `react-native-firebase` 종속성을 업데이트했습니다.

## Release 1.0.138 {#10138}

**릴리스 날짜: 2025년 8월 5일**

### 수정 사항

* Native Builder UI를 처음 사용할 때 초기 빌드 시간이 느린 문제를 수정했습니다.

## Release 1.0.137 {#10137}

**릴리스 날짜: 2025년 7월 15일**

### 수정 사항

* Native Builder UI가 폰트 구성을 업데이트할 때 이전에 추가된 폰트 파일을 교체하지 않는 문제를 수정했습니다.

## Release 1.0.136 {#10135}

**릴리스 날짜: 2025년 4월 1일**

#### 호환성을 깨뜨리는 변경 사항

* App Center로 모바일 앱 빌드(**Cloud Build** 옵션)가 제거되었습니다. 이전에 **Cloud Build**를 사용하던 고객은 **Local Build**를 선택할 수 있습니다.

## Release 1.0.135 {#10135}

**릴리스 날짜: 2025년 3월 4일**

### 수정: 인증서 알려진 문제 {#ki-certificate-signing}

* Native Mobile Builder의 자동 업그레이드가 인증서 서명 중 프로세스가 중단되는 알려진 문제를 수정했습니다. 이 문제를 해결하려면 아래 프로세스를 한 번 따라야 합니다:
    1. 현재 버전을 제거하세요: **C:\Users\[%USER_NAME%]\AppData\Local\Mendix Builder\Uninstall Builder.exe**
    1. [Mendix Native Mobile 원클릭 설치 프로그램](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)을 사용하여 최신 버전을 설치하세요.

{{% alert color="info" %}}
Windows 보안 참고: Windows 보안 정책으로 인해 위 작업을 수행할 수 없는 경우 다음을 수행하세요:

1. 설치 프로그램을 마우스 오른쪽 버튼으로 클릭하세요.
1. **속성**을 클릭하세요.
1. **차단 해제**를 선택하세요.
1. **확인**을 클릭하세요.
{{% /alert %}}

이 단계를 완료한 후 설치 프로그램을 다시 실행하세요. Studio Pro를 다시 시작할 수 있으며 Native Mobile Builder가 올바르게 로드됩니다.

### 수정 사항

* Microsoft Defender SmartScreen 알림을 받지 않고 앱을 사용할 수 있도록 서명 메커니즘을 업데이트했습니다.

## Release 1.0.134 

**릴리스 날짜: 2025년 2월 20일**

#### 수정 사항

* Native Mobile Builder가 선택한 권한을 유지하지 않는 문제를 수정했습니다.
* Native Mobile Builder의 **Runtime URL** 필드가 하위 경로가 있는 URL을 허용하지 않는 문제를 수정했습니다.
* 기본 구성의 이름을 변경하면 업데이트가 중단되는 문제를 해결했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.133

**릴리스 날짜: 2025년 1월 7일**

#### App Center 2025년 3월 지원 중단

* App Center로 모바일 앱 빌드는 [지원 중단](https://learn.microsoft.com/en-us/appcenter/retirement)되었으며 2025년 3월에 제거됩니다. 이제 클라우드 빌드 옵션이 활성화된 경우 지원 중단 경고를 표시합니다.

#### 수정 사항

* 커스텀 빌드된 Mendix Native Developer App에서 원격 JavaScript 디버깅이 실패하는 문제를 해결했습니다. 이는 빌드 과정에서 Firebase 서비스가 부적절하게 초기화되어 발생했습니다. 수정을 통해 Firebase 종속성은 애플리케이션에서 명시적으로 필요한 경우에만 포함됩니다.
  
{{% alert color="warning" %}}
이것은 호환성을 깨뜨리는 변경 사항이므로 필수 업데이트가 필요합니다. 이 수정을 구현하려면 최신 Native Template 버전을 사용해야 하며, 이전 버전은 애플리케이션에 오류를 유발할 수 있습니다. 업데이트하지 않으면 앱의 불안정성과 기능 문제가 발생할 수 있습니다.
{{% /alert %}}

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.131

**릴리스 날짜: 2024년 2월 19일**

#### 수정 사항

* [1.0.130](#10130)에서 도입된 빌드 회귀를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.130 {#10130}

**릴리스 날짜: 2024년 2월 13일**

#### 수정 사항

* Native Builder UI를 사용하여 애플리케이션을 빌드할 때 `native-template` Gradle 파일의 네임스페이스가 올바르게 업데이트되지 않는 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.129

**릴리스 날짜: 2024년 1월 29일**

#### 개선 사항

* 이제 App Center 대신 로컬 빌드를 권장하며 이를 반영하도록 Native Builder를 변경했습니다.

#### 수정 사항

* Native Builder에서 알림을 비활성화한 후에도 iOS 앱에 푸시 알림 권한 코드가 포함되는 문제를 수정했습니다. (티켓 #167685)

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.128

**릴리스 날짜: 2022년 10월 6일**

이 릴리스는 이전에 1.0.127로 표시되었습니다. 릴리스 번호가 수정되었습니다.

#### 수정 사항

* Android 애플리케이션에서 외부 저장소 읽기 및 쓰기 기본 권한을 제거했습니다. (티켓 152467)

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.126

**릴리스 날짜: 2022년 9월 19일**

#### 개선 사항

* **react-native-vector-icons** 라이브러리에서 다음 폰트에 대한 지원을 추가했습니다:
    * AntDesign
    * Entype
    * EvilIcons
    * Feather
    * FontAwesome
    * FontAwesome 5
    * Fontisto
    * Foundation
    * Ionicons
    * MaterialCommunityIcons
    * MaterialIcons
    * Octicons
    * SimpleLineIcons
    * Zocial

## Release 1.0.125

**릴리스 날짜: 2022년 9월 8일**

#### 개선 사항

* Android 12 이상과의 호환성을 활성화했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.123

**릴리스 날짜: 2022년 8월 29일**

#### 수정 사항

* 일부 폰트 스타일이 커스텀 폰트로 지원되지 않는 문제를 수정했습니다. (티켓 #163323)

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.121

**릴리스 날짜: 2022년 7월 21일**

#### 수정 사항

* App Center가 앱 이름에 마침표를 허용하지 않는 문제를 수정했습니다. (티켓 153722, 154433, 154489, 154814)

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.120

**릴리스 날짜: 2022년 5월 25일**

#### 수정 사항

* 기능 세부 정보 화면에서 데이터 업데이트에 영향을 미치는 버그를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.113

**릴리스 날짜: 2022년 3월 18일**

#### 새로운 기능

##### Android Web Links 지원

Android 기기에서 딥 앱 링크의 특수한 형태는 웹 링크입니다. 이는 앱이 처리 가능하도록 등록할 수 있는 일반 HTTP 또는 HTTPS URL입니다. 두 개 이상의 앱이 웹 링크를 열 수 있는 경우, 사용자에게 앱을 선택하라는 메시지가 표시됩니다.

예를 들어, 모바일 기기에서 고객 경험을 향상시키기 위해 모바일 앱을 사용하여 새로운 사용자 등록을 유도할 수 있습니다. 이를 위해 {my-app-website.com/register} 형태의 웹 링크를 등록할 수 있습니다. 애플리케이션이 설치된 기기에서 이러한 링크를 열면, 프롬프트가 사용자에게 선호하는 앱을 사용하여 링크를 열 수 있도록 합니다.

{{% alert color="info" %}}
Android 사용자는 링크를 여는 기본 앱을 선택할 수 있습니다. 사용자가 브라우저와 같은 기본 앱을 설정하여 이 선택 화면을 건너뛰면, 기기의 환경 설정을 사용하여 기본 앱 선택을 수동으로 지울 때까지 다시 메시지가 표시되지 않습니다.
{{% /alert %}} 

##### 여러 MPR 파일이 있는 프로젝트 폴더 지원

Mendix Native Mobile Builder가 이제 여러 MPR 파일이 있는 프로젝트 폴더를 올바르게 처리할 수 있습니다. 이전 버전에서는 Studio Pro가 프로젝트 디렉토리를 제공하면 도구가 해당 디렉토리에서 발견된 첫 번째 MPR 파일을 열었습니다. 같은 디렉토리에 여러 MPR 파일이 존재하는 경우(예: 프로젝트의 다른 버전 복사본) Studio Pro에서 하나의 MPR에 접근하지만 도구에서 다른 MPR을 열고 빌드할 수 있었습니다. 이는 초기 설계 제한의 원치 않는 부작용이었습니다.

이제 디렉토리에서 발견된 첫 번째 MPR 파일에 접근하는 대신, 도구는 Mendix Studio Pro가 제공한 정확한 MPR을 고려합니다.

#### 개선 사항

* 도구가 이제 여러 MPR 파일이 있는 앱을 올바르게 처리합니다.
* 도구가 이제 오류 대화 상자에서 Native Template 업데이트 실패 원인이 된 오류를 공개합니다.
* 도구가 이제 이미 구성된 빌드에 대한 App Center 빌드 구성을 올바르게 업데이트합니다. 이를 통해 새로운 요구 사항을 수용하기 위한 Xcode 또는 Node 버전과 같은 항목에 대한 업데이트가 가능합니다.

#### 수정 사항

* App Center가 리포지토리를 구성하는 데 실패했을 때 리포지토리를 수동으로 링크하는 시각적 가이드 대신 일반적인 오류가 표시되는 UI 버그를 수정했습니다. 이제 일반적인 오류 대신 시각적 가이드가 올바르게 표시됩니다.
* 필수 업데이트의 잘못된 이유를 표시하는 Native Template 업데이트 대화 상자 버그를 수정했습니다. 이제 필수 업데이트의 올바른 이유가 표시됩니다.
* GitHub 또는 App Center 토큰이 더 이상 유효하지 않을 때 앱이 완전히 로드되지 못하는 버그를 수정했습니다. 이제 앱이 로드를 완료하고 오류가 UI에 명확하게 표시됩니다.
* 앱 시작 시 치명적인 예외가 올바르게 잡히지 않아 시작 시 빈 화면이 될 수 있는 버그를 수정했습니다. 이제 대화 상자가 올바르게 표시됩니다.
* 호환되는 Native Template이 Mendix Native OTA와 호환되지 않는다고 잘못 경고하는 호환성 검사 문제를 수정했습니다. 버전 6.2.7 이상의 Native Template은 모두 호환됩니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.111

**릴리스 날짜: 2021년 12월 21일**

#### 개선 사항

##### 새 프로젝트에 대한 더 많은 기본 권한

앱 권한을 더 간소화하기 위해 새 프로젝트에 기본적으로 다음 권한이 활성화됩니다:

* 카메라
* 위치

이 권한은 필수가 아니며 필요하지 않은 경우 권한 페이지에서 제거할 수 있습니다.

{{% alert color="info" %}}
이미 구성된 프로젝트는 영향을 받지 않습니다.
{{% /alert %}}

##### iOS NSUserTrackingUsageDescription 권한 지원

iOS에서 `NSUserTrackingUsageDescription` 권한에 대한 지원을 추가했습니다. 앱이 App Tracking Transparency API를 호출하는 경우, 시스템 권한 알림 요청으로 표시되는 커스텀 텍스트(사용 설명 문자열이라고 함)를 제공해야 합니다. 사용 설명 문자열은 최종 사용자에게 앱이 최종 사용자 또는 기기를 추적하기 위해 데이터를 사용할 권한을 요청하는 이유를 알려줍니다. 최종 사용자는 인증 요청을 수락하거나 거부할 수 있습니다. 사용 설명 문자열을 포함하지 않으면 최종 사용자가 앱을 처음 실행할 때 앱이 충돌할 수 있습니다. 

자세한 내용은 Apple의 App Tracking Transparency 페이지에서 [NSUserTrackingUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nsusertrackingusagedescription)을 참조하세요.

#### 수정 사항

* 이전 버전의 Native Mobile Builder로 빌드된 앱에서 푸시 알림이 두 번 트리거되는 네이티브 앱의 문제를 수정했습니다. 이 문제를 해결하려면 이 버전으로 앱을 다시 빌드해야 합니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.109

**릴리스 날짜: 2021년 10월 25일**

#### 개선 사항

##### 새로운 Mendix OTA 업데이트 지원

Mendix Studio Pro 9.7에서 릴리스된 새로운 Mendix OTA(Over the Air) 업데이트 기능에 대한 지원을 추가했습니다. UI는 App Center OTA와 Mendix OTA가 모두 활성화된 경우를 식별하고 사용자에게 App Center OTA 업데이트를 비활성화하라는 메시지를 표시할 수 있습니다. 대화 상자를 수락하면 App Center 옵션이 비활성화되며 이는 더 이상 사용되지 않는 것으로 간주됩니다.

#### 수정 사항

* 다양한 버그를 수정하고 성능 문제를 개선했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.107

**릴리스 날짜: 2021년 7월 26일**

#### 수정 사항

* 네이티브 템플릿 업그레이드 작업 중 삭제된 파일이 올바르게 제거되지 않는 문제를 수정했습니다.
* Google API 변경으로 인해 Android 네이티브 앱 빌드에 문제가 발생하는 문제를 수정했습니다. 자세한 내용은 [Android 네이티브 모바일 앱 업데이트 필요](https://www.mendix.com/blog/update-needed-for-android-native-mobile-apps/)를 참조하세요. 

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.105

**릴리스 날짜: 2021년 7월 16일**

#### 개선 사항

* 프록시 지원 및 네트워크 안정성 개선을 추가했습니다.
* Mendix Native Builder 네트워크 스택을 재작업했습니다.
* 보통 수준의 인터넷 연결에서도 더 높은 안정성을 기대합니다.
* Mendix Native Builder가 이제 OS별 프록시 설정을 사용하여 요청을 수행할 수 있습니다.

App Center의 CodePush OTA 페이지 개선 사항:

* App Center의 CodePush OTA 페이지의 UX를 개선했습니다.
* 플랫폼 선택기가 이제 사용 가능한 플랫폼을 올바르게 나타냅니다. App Center 빌드 설정이 아직 없는 플랫폼은 기본적으로 비활성화됩니다. 
* 각 플랫폼이 대상으로 하는 App Center 앱에 대한 가시적 링크를 추가했습니다. 이를 통해 Mendix Native Mobile Builder가 예상 앱을 대상으로 하지 않는 경우를 쉽게 식별할 수 있습니다.
* OTA 버튼이 이제 OTA 업데이트가 현재 불가능한 이유를 시각적으로 요약하는 콜아웃 버튼입니다.

#### 수정 사항

* App Center의 CodePush OTA가 사용자의 플랫폼 선택을 존중하지 않는 버그를 식별하고 수정했습니다. 플랫폼 중 하나에 App Center 빌드 구성이 없는 경우 OTA 빌드 버튼이 잘못 비활성화된 상태로 유지되었습니다.
* **Advanced** 모드에서 빌드할 때 새로 생성된 GitHub 프로젝트에 에셋 파일이 누락되는 문제를 수정했습니다.
* **App Identifier**에 변경 사항이 있을 때 Firebase 구성 유효성 검사 버그를 식별하고 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.90

**릴리스 날짜: 2021년 6월 22일**

#### 수정 사항

* 머신의 다른 프로세스에서 파일이 아직 사용 중일 때 Native Mobile Toolkit의 파일 복사 작업 처리 문제를 수정했습니다.
* Firebase 기능이 비활성화된 후에도 Firebase 관련 구성을 유지하는 Native Mobile Toolkit의 동작을 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.89

**릴리스 날짜: 2021년 5월 28일**

#### 새로운 기능 

##### 로컬 프로젝트 구성 지원

{{% alert color="info" %}}
이 기능은 Native Template 5.1.9 이상을 사용하는 프로젝트에서만 사용할 수 있습니다. 이전 프로젝트의 경우 Native Template을 업데이트하세요.* 
{{% /alert %}}

지금까지 Native Mobile Builder는 올바르게 작동하기 위해 최소한 GitHub가 필요했습니다. 이 릴리스에서는 이제 Mendix Native Mobile Builder를 사용하여 프로젝트를 로컬로 구성할 수도 있습니다. 이 기능 사용에 대한 자세한 내용은 [로컬에서 Mendix 네이티브 앱 빌드](/refguide9/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)를 참조하세요.

마법사에서 새 프로젝트는 두 가지 빌드 유형 중 하나를 사용하도록 구성할 수 있습니다:  

* **Default**: 클라우드 서비스를 사용하여 자동으로 빌드합니다.
    * 클라우드 서비스 사용이 **Default** 선택으로 유지됩니다. 이 모드에서는 App Center 사용을 선택 해제하는 것이 **더 이상 불가능**합니다.
* **Advanced**: 추가 커스터마이징을 위한 로컬 복사본을 만들거나, 이 옵션을 사용하여 로컬로 빌드합니다.
    * 이 옵션은 프로젝트를 설정할 로컬 디렉토리를 선택할 수 있게 합니다. 그런 다음 Native Mobile Builder는 이 폴더를 사용하여 구성을 수행하고 Android 및 iOS 프로젝트를 설정합니다.
    * 이 모드에서는 기본 모드와 유사하게 클라우드 서비스 사용을 선택할 수 있습니다. 그러면 Native Mobile Builder가 로컬 복사본을 구성하고, 변경 사항을 리포지토리에 푸시하며, 마지막으로 App Center를 사용하여 앱을 빌드합니다.

이 릴리스의 추가 주요 정보는 다음과 같습니다:

* 이미 구성된 프로젝트는 클라우드 서비스가 활성화된 **Default** 빌드 유형으로 기본 설정됩니다.
* App Center가 비활성화된 경우 유효한 App Center 토큰으로 토글하고 구성할 때까지 선택 사항으로 유지됩니다.
* **이 상태의 프로젝트는 이전과 동일하게 계속 작동하며 아무것도 변경할 필요가 없습니다**.
* 빌드 유형은 Native Mobile Builder의 **Build type** 페이지를 통해 변경할 수 있습니다.

Mendix Native Builder를 사용할 때 다음 **주의 사항**에 주의하세요:

* Mendix Native Builder는 완전한 기능의 Git 클라이언트를 *대체하지 않습니다*. 변경 사항을 커밋하는 것은 diff가 아닌 무시된 파일을 제외한 전체 프로젝트의 Native Template을 리포지토리에 업로드하는 것과 동등한 작업입니다.
* **Default**에서 **Advanced** 빌드 유형으로 전환할 때, 선택한 디렉토리에 유효한 Native Template이 없으면 이전에 사용한 리포지토리가 아닌 새로운 Native Template이 체크아웃됩니다.
* GitHub가 활성화되어 있고 리포지토리가 존재하는 경우, 다음에 변경 사항을 구성하고 커밋하도록 선택하면 로컬 변경 사항이 리포지토리에 다시 커밋됩니다.
* **Default**에서 **Advanced** 빌드 유형으로의 전환은 현재 *되돌릴 수 없는 작업*입니다. 한 번 전환하면 **Default** 빌드 유형으로 다시 돌아갈 수 없습니다.

##### 네이티브 권한 지원

모든 모바일 앱은 특정 기능과 해당 기능이 작동하기 위해 사용자가 수락해야 하는 특정 권한이 필요합니다. 따라서 플랫폼별(Android 및 iOS)로 자주 요청되는 권한 목록을 컴파일하고, 필요할 때 이러한 권한을 수정할 수 있는 새로운 **Advanced** 페이지를 도입했습니다.

#### 개선 사항

* 개발자 빌드 애플리케이션 식별자를 포함하지 않는 Firebase 구성을 업로드할 때 표시되는 경고 텍스트를 제거했습니다. 이 경고는 개발자 애플리케이션 빌드가 시작될 때 발생하는 기존 경고 팝업에 유리하도록 제거되었습니다.

#### 수정 사항

* 오타 및 잘못 정의된 정보 상자를 수정했습니다.
* 일반적인 버그 수정을 수행했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.86

**릴리스 날짜: 2021년 4월 1일**

#### 새로운 기능

##### 편안한 동물 소리 (만우절 농담)

연구에 따르면 동물 소리가 스트레스를 완화할 수 있습니다. 네이티브 앱 빌드를 간소화하기 위해 노력하면서 약간의 스트레스 해소를 추가하기로 결정했습니다. 이제 Mendix Native Mobile Builder는 클릭 습관에 따라 스트레스 수준을 파악하고 그에 맞는 동물 소리를 재생할 수 있습니다.

#### 수정 사항 

* 빌드 예외 시 읽을 수 있는 메시지 대신 추상적인 오류 팝업이 발생하는 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release 1.0.84

**릴리스 날짜: 2021년 3월 17일**

#### 새로운 기능

##### App Center CodePush 기반 OTA

App Center CodePush 기반의 OTA 지원을 추가했습니다. Capabilities 페이지에서 찾을 수 있습니다. 자세한 내용은 [네이티브 앱 업데이트](/refguide9/mobile/distributing-mobile-apps/overtheair-updates/)를 참조하세요.

#### 개선 사항 

* 빌드 프로세스 중 특정 상황에 대한 오류 로그를 개선했습니다.
* 도구가 키의 유효성을 검증할 수 없는 경우 Android 키스토어 유효성 검사가 비차단적이어야 합니다. 키스토어 값이 유효하지 않은 경우 빌드는 여전히 실패합니다.
* Mendix Studio Pro 프로젝트에서 명시적으로 요구하지 않는 경우에도 특정 기능(Local notifications, Push notifications, Google Maps 및 Firebase Crashlytics)과 관련된 종속성을 이제 포함합니다.

#### 수정 사항

* Android 인증서가 올바르게 검증되지 않는 문제를 수정했습니다.
* Native Mobile Builder가 App Center에서 잘못된 앱을 구성하려고 할 수 있는 버그를 수정했습니다. 

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.81

**릴리스 날짜: 2021년 3월 2일**

#### 개선 사항 

* 도구가 키의 유효성을 검증할 수 없는 경우 Android 키스토어 유효성 검사가 이제 비차단적입니다. 키스토어 값이 유효하지 않은 경우 빌드는 여전히 실패합니다.

#### 수정 사항

* Android 인증서가 올바르게 검증되지 않는 문제를 수정했습니다.

## Release v1.0.80

**릴리스 날짜: 2021년 2월 25일**

#### Mendix 9용 로컬 알림 

Mendix 9에서 로컬 알림과 푸시 알림을 분리했습니다. 로컬 알림은 이제 추가 구성 없이 Mendix Native Mobile Builder를 사용하여 활성화할 수 있습니다. 이전과 같이 앱의 JavaScript 액션이나 Nanoflow에서도 사용할 수 있습니다. 

Mendix 8 프로젝트의 경우, 로컬 알림 옵션은 비대화형으로 유지되지만 프로젝트에 Firebase가 포함된 경우 로컬 알림은 여전히 활성화됩니다.

#### Mendix 9용 Firebase Crashlytics 

Mendix 9에서 Firebase Crashlytics 기능을 도입했습니다. 활성화하면 JavaScript 액션과 Nanoflow 내에서 충돌 보고가 가능합니다.

#### Mendix 9용 Native Mobile Toolkit 활성화

Native Mobile Toolkit은 구성 파일을 통해 Mendix Native Template을 구성할 수 있는 Native Template 6.x에서 도입된 라이브러리입니다.

이 기능을 활성화하면 Native Mobile Builder가 더 이상 파일에 직접 쓰지 않고, Native Mobile Toolkit이 읽는 공유 구성 파일에 씁니다. 그런 다음 프로젝트는 빌드가 시작되기 전에 App Center를 통해 명시적으로 구성됩니다.

이 변경으로 프로젝트 구성에 여러 경로를 활성화하는 기반을 마련합니다. *.config* 파일이 Native Mobile Toolkit이 기대하는 형식을 준수하는 한, 프로젝트를 구성할 수 있습니다.

이 방식으로 프로젝트를 구성할 때 몇 가지 주의 사항이 있습니다:

* 실제 변경 사항이 커밋 이력에 표시되지 않습니다. 커밋은 이제 파일 업로드와 구성 파일 변경 사항을 반영합니다.
* 로컬로 빌드하는 경우 프로젝트를 빌드하기 전에 `npm run configure`를 실행하여 변경 사항을 적용해야 합니다.

종속성 관리 및 자동 링크는 현재 Native Mobile Toolkit 플로우의 일부로 포함되어 있지 않습니다. 로컬로 빌드하는 경우, Native Mobile Builder를 사용하여 먼저 GitHub에서 프로젝트를 구성한 다음 체크아웃하고 빌드하세요.

#### 개선 사항

* iOS 애플리케이션의 구성을 개선하기 위해 **bundle name** 필드를 추가했습니다.

#### 수정 사항

* 폰트 구성이 비어 있는 경우에도 유효성 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.79

**릴리스 날짜: 2021년 2월 12일**

#### 네이티브 종속성 관리 베타 (Studio Pro 9.0.3 베타)

Mendix Studio Pro 9.0.3 베타 릴리스에서 네이티브 종속성 관리를 도입했습니다. 네이티브 종속성 관리를 사용하면 위젯과 JavaScript 액션이 이제 네이티브 종속성 요구 사항을 정의하고 Mendix Native Mobile Builder가 앱에 링크하도록 할 수 있습니다. 결과적으로 실제로 필요한 종속성만 포함하는 더 가벼운 프로젝트 템플릿이 됩니다.

#### 향상된 Native Template 업데이트 메커니즘

이 새로운 업데이트에서는 프로젝트에 더 이상 포함되지 않아야 하는 이전 네이티브 템플릿 파일을 제거하는 지원을 추가했습니다. Native Mobile Builder는 이제 리포지토리의 기본 버전에 대한 업데이트를 "diff"하여 유지하거나 제거해야 할 파일을 파악할 수 있습니다. 이는 주요 변경 사항이 도입된 최신 Studio Pro 버전으로 이전 프로젝트를 업데이트할 때 특히 유용합니다.

#### 수정 사항

* 템플릿 업그레이드 시 App Center 빌드 구성이 업데이트되지 않는 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.74

**릴리스 날짜: 2020년 12월 30일**

#### 서명된 iOS 빌드 실패

App Center의 변경으로 인해 서명된 iOS 빌드가 실패하는 문제를 인지하게 되었습니다. 이 문제를 적극적으로 모니터링하고 있으며 여전히 문제가 발생하는 경우 피드백을 부탁드립니다. 추가 문의는 [지원](https://support.mendix.com)에 연락하세요.

#### 수정 사항

* Mendix Native Mobile Builder를 사용하여 앱에 서명할 수 있도록 다시 수정되었습니다.
* **Only apply configuration to the source code** 상태만 계속 유지하는 **Build** 버튼 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.71

**릴리스 날짜: 2020년 12월 23일**

#### 다중 구성 

앱을 개발하는 동안 새로운 기능을 테스트하거나, 앱을 재구성하거나, 기본 구성을 유지하면서 다른 [환경](/developerportal/deploy/environments/)에 대해 테스트하고 싶을 수 있습니다. 구성은 이러한 목표를 달성하는 데 도움이 됩니다. 처음에는 모든 변경 사항이 기본 구성에 저장됩니다.   

스테이징 환경을 대상으로 하는 새 구성을 원한다고 상상해 보세요. 이제 간단히 새 구성을 만들고(이전에 만든 구성을 기반으로), 런타임 URL을 변경하고, 저장하고, 빌드하면 됩니다.

이제 스테이징 환경에 대해 빌드해야 할 때마다 구성 드롭다운 메뉴에서 스테이징 구성을 선택하기만 하면 됩니다.

#### 호환성을 깨뜨리는 변경 사항

다중 구성에 대한 새로운 지원은 이전 버전에서 지원하지 않는 Mendix Native Mobile Builder *config* 파일을 변환합니다. 

새 버전의 Native Mobile Builder UI로 변환된 프로젝트를 이전 빌더 버전에서 열면 **구성되지 않은** 것으로 표시됩니다.

같은 프로젝트에서 여러 명이 작업하는 경우, 백그라운드 업데이트 기능을 통해 또는 [여기](https://artifacts.rnd.mendix.com/native-builders/latest.exe)에서 최신 원클릭 설치 프로그램을 다운로드하여 최신 버전의 Mendix Native Mobile Builder를 사용하고 있는지 확인하세요.

#### 개선 사항

* 쉽게 생성하고 제거할 수 있는 다중 구성 지원을 추가했습니다.
* Mendix Studio Pro 9용 푸시 알림 지원을 추가했습니다.

#### 수정 사항

* iOS 인증서가 올바르게 저장되지 않는 문제를 수정했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.51 

**릴리스 날짜: 2020년 12월 10일**

#### 개선 사항

이 릴리스는 주로 삶의 질 향상 버그 수정과 기능에 중점을 둡니다.

#### 기능

* 빌드를 시작하지 않고 변경 사항을 리포지토리에 커밋하기만 하는 옵션을 도입했습니다. 이를 위해 빌드 버튼은 이제 **build** 또는 **configure** 중에서 선택할 수 있는 조합 버튼입니다.
* 빌드가 실패하면 이제 애플리케이션 로그를 가리키는 버튼이 표시됩니다. 이를 통해 애플리케이션 로그에 쉽게 접근할 수 있습니다.
* 커스텀 개발자 앱 푸시 알림 구성을 선택 사항으로 만들었습니다. 대신 커스텀 개발자 앱에 대한 구성이 누락된 경우 경고가 표시됩니다.
  
#### 수정 사항

* 호환되는 Native Template이 발견되면 기능이 올바르게 활성화됩니다.
* 누락된 토큰이 더 이상 Native Builder UI를 충돌시키지 않습니다.
* Native Template 업데이트 후 기능의 중복 가능성을 수정했습니다.
* Maps 기능을 사용하는 앱에 iOS Purpose 문자열이 올바르게 적용됩니다.
* GitHub 토큰의 **Workflows** 권한이 다시 선택 사항입니다.
* 폰트가 이제 앱 전체에 올바르게 적용됩니다.
* 혼동을 피하기 위해 마법사에서 **Skip** 버튼을 제거했습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

## Release v1.0.49

**릴리스 날짜: 2020년 10월 27일**

Mendix Native Mobile Builder UI 도구의 초기 릴리스입니다. [Mendix Studio Pro 8.15](/releasenotes/studio-pro/8.15/) 이상에 포함되어 있습니다.

#### 기능

몇 번의 클릭으로 다음을 수행할 수 있습니다:

* 필수 서비스를 구성합니다.
* 이름, 앱 ID, 런타임 URL 등의 기본 앱 정보를 구성합니다.
* 플랫폼별 아이콘을 구성합니다.
* 플랫폼별 스플래시 화면을 구성합니다.
* 서명 인증서를 구성하고 앱 스토어용으로 서명된 바이너리를 빌드합니다.
* 푸시 알림, 지도 등의 기능을 구성합니다.
* 최신 Native Template이 사용 가능해지면 프로젝트를 최신 상태로 유지합니다.

내부적으로 더 많은 기능을 작업하고 있으니 기대해 주세요.

#### 백그라운드 업데이트

Mendix Native Mobile Builder는 백그라운드 업데이트를 지원합니다. 즉, 한 번 설치하면 최신 버전이 나오면 자동으로 업데이트됩니다. 이 자동 업데이트 기능을 통해 새로운 기능이 출시 준비가 되면 즉시 새 버전을 푸시할 수 있습니다.

#### 알려진 문제

* [1.0.135](#10135) 미만의 모든 Native Mobile Builder 버전에 영향을 미치는 알려진 문제가 있습니다. 구체적으로, 서명 인증서에 알려진 문제가 있습니다. 인증서 단계에서 업데이트가 실패하므로 Native Mobile Builder가 로딩 화면에 멈춥니다. 아래 링크에서 일회성 해결 방법 구현 지침을 참조하세요:
    * [1.0.135](#ki-certificate-signing)에서 수정되었습니다.

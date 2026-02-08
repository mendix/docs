---
title: "Mendix Native Mobile Builder를 사용하여 로컬에서 Mendix 네이티브 모바일 앱 빌드"
linktitle: "로컬 네이티브 모바일 앱 빌드"
url: /howto8/mobile/native-build-locally/
weight: 30
description: Mendix Native Mobile Builder를 사용하여 첫 번째 Mendix 네이티브 모바일 앱을 로컬에서 빌드하는 방법을 설명합니다.
---

## 소개

{{% alert color="info" %}}
이 사용법 가이드에는 Mendix Studio Pro 8.15.1이 필요합니다. 이전 Studio Pro 버전을 사용하는 경우 [Mendix 네이티브 모바일 앱 수동 로컬 빌드 방법](/howto8/mobile/native-build-locally-manually/)을 사용하십시오.
{{% /alert %}}

기본적으로 네이티브 모바일 앱 바이너리를 빌드할 때 Mendix는 [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps)를 서비스로 사용하여 사용자가 Xcode 또는 Android Studio와 같은 도구를 설치하지 않고도 빌드할 수 있습니다. 그러나 App Center를 사용할 수 없거나 허용되지 않는 경우가 있습니다. 이러한 상황에서는 로컬에서 앱을 빌드할 수 있습니다.

아래 섹션을 [네이티브 앱 빌드](#building-app-project)까지 따라 빌드를 완료하십시오. 로컬 빌드에 대한 추가 사용자 지정 옵션은 아래의 [종속성 추가](#adding-dependencies) 및 [종속성 제거](#removing-dependencies) 섹션을 참조하십시오.

## 사전 요구 사항 {#prerequisites}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Studio Pro 8.15.1 이상
* [Node 및 NPM](https://nodejs.org/en/download/)을 설치하십시오

iOS 빌드의 경우:

* Mac OS X 머신이 있어야 합니다 
* [Xcode 12.4](https://apps.apple.com/us/app/xcode/id497799835?mt=12) 이상 및 [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)를 설치하십시오 

Android 빌드의 경우:

* [Android SDK](https://developer.android.com/studio) 및 [platform tools](https://developer.android.com/studio/releases/platform-tools)를 설치하십시오

## Mendix Native Mobile Builder를 사용하여 로컬 프로젝트 설정

1. 프로젝트에서 Mendix Native Mobile Builder를 실행하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobile Builder"   width="350"  class="no-border" >}}

1. Mendix Native Mobile Builder가 시작되면 홈 화면이 표시됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  class="no-border" >}}

1. **Build app for distribution**을 선택하십시오.
1. 앱의 이름과 앱 식별자를 입력하십시오. 마법사가 기본값을 제공하지만 회사의 역방향 URL을 사용하도록 앱 식별자를 정렬하거나 다른 방식으로 앱 이름을 변경할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.
1. **Build type**에서 **Advanced** 체크박스를 선택하십시오:
 
    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/wizard-buildtype-local.png" alt="Build type"   width="350"  class="no-border" >}}

1. 프로젝트의 Native Template을 생성할 폴더를 선택하십시오. 유효한 선택은 빈 디렉토리 또는 Native Template이 있는 디렉토리입니다.
1. 사용하지 않으려는 서비스를 비활성화하십시오. App Center가 작동하려면 GitHub가 서비스로 필요합니다.
1. 마법사 끝에 도달할 때까지 **Next Step**을 클릭하십시오. 필요에 따라 각 단계를 구성하십시오.  
1. 사이드바에서 **Build type**을 선택하십시오. 

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/advanced-buildtype-local.png" alt="Build type"   width="350"  class="no-border" >}}

    이 프로젝트에서 **Advanced** 흐름을 사용하도록 이미 선택했으므로 **Cloud** 서비스만 사용하도록 다시 전환할 수 없습니다. 그러나 필요에 따라 모든 서비스를 활성화하거나 비활성화할 수 있습니다. 예를 들어 GitHub가 활성화된 경우 Native Mobile Builder는 다음에 프로젝트를 구성하고 변경 사항을 커밋할 때 로컬 변경 사항을 저장소와 동기화합니다. 그러나 Mendix Native Builder는 Git 클라이언트를 대체하는 것이 아니며, 로컬 변경 사항을 저장소에 푸시하면 구성 시간이 추가될 수 있습니다.

1. **Configure app locally**를 선택하고 앱에 필요한 정보를 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/advanced-configure-app-locally.png" alt="Build type"   width="350"  class="no-border" >}}

1. **Configure locally**를 클릭하십시오:

프로세스가 시작되고 다음을 수행합니다:

* MxBuild를 실행하여 프로젝트의 앱 번들을 빌드합니다
* 사용 중인 Mendix Studio Pro 버전에 맞는 올바른 버전의 Native Template을 체크아웃합니다
* 프로젝트를 구성합니다

GitHub가 활성화된 경우 이전 단계에 추가로 다음을 수행합니다: 

* 전체 로컬 사본을 프로젝트의 저장소에 커밋합니다

## 네이티브 모바일 앱 빌드 {#building-app-project}

이제 Native Template이 준비되었고 앱의 번들, 리소스 및 런타임 URL 구성이 포함되어 있으므로 네이티브 앱으로 빌드할 수 있습니다. 프로젝트를 빌드하려면 Android 및 iOS 프로젝트에 대해 각각 Android Studio 또는 Xcode로 앱을 열고 정상적으로 빌드하면 됩니다. 지속적 통합 파이프라인용 앱과 같은 더 고급 사용 사례에서는 Gradle 또는 xcodebuild를 사용하여 커맨드라인으로 앱을 빌드할 수 있습니다.

아래 섹션에서는 Android 또는 iOS IDE를 사용하여 에뮬레이터 또는 디바이스에서 앱을 실행하는 기본 단계를 볼 수 있습니다.

### Android Studio로 Android 앱 빌드

{{% alert color="warning" %}}
이 프로세스 중에 최신 Gradle 또는 Kotlin 버전으로 업데이트하라는 제안을 수락하지 마십시오.
{{% /alert %}}

Android Studio로 Android 앱을 빌드하려면 다음을 수행하십시오:

1. 앱 루트에서 `npm install`(NPM v7 이상의 경우 `npm install --legacy-peer-deps`)을 실행하여 필요한 종속성을 설치하십시오.
1. Android Studio를 여십시오.
1. `<Native Template root>/android`를 앱의 진입점으로 선택하십시오.
1. 앱 동기화 후 Android Studio는 다음과 같아야 합니다(최신 Gradle 또는 Kotlin 버전으로 업데이트하라는 제안을 수락하지 마십시오):

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  class="no-border" >}}

    Mendix 네이티브 모바일 앱은 릴리스 앱 또는 사용자 지정 Developer App을 빌드하기 위해 **Build Variants**를 사용합니다. **Build Variants**의 개념은 동일한 코드베이스를 공유하면서 다른 경험을 제공하는 Gradle 빌드 시스템 개념입니다.

1. 에뮬레이터 또는 연결된 디바이스에서 앱을 빌드하고 테스트할 수 있도록 **appstoreDebug** 변형을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Variants"   width="350"  class="no-border" >}}

1. 잠시 후 앱이 동기화되고 **Run Locally** ({{% icon name="controls-play" %}})를 선택할 수 있어야 합니다. 드롭다운 메뉴에서 디바이스를 선택하거나 생성하고 **Run Locally**를 클릭하여 디바이스에서 앱을 빌드하고 설치하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  class="no-border" >}}

### Xcode로 iOS 앱 빌드

1. 아직 실행하지 않았다면 앱 루트에서 `npm install`(NPM v7 이상의 경우 `npm install --legacy-peer-deps`)을 실행하여 필요한 종속성을 설치하십시오.
1. `cd ios`를 실행하고 `pod install`을 실행하여 iOS 종속성을 설치하십시오.

    iOS 프로젝트는 종속성 관리를 위해 CocoaPods를 사용합니다. 머신에 CocoaPods 종속성 관리자를 설치하는 방법에 대한 자세한 내용은 CocoaPods [문서](https://cocoapods.org/#install)를 참조하십시오.

1. Xcode를 사용하여 *.xcodeworkspace*를 여십시오.
1. **Signing and Capabilities**로 이동하여 드롭다운 메뉴에서 **Team**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="Xcode Build Toolbar"   width="350"  class="no-border" >}}

    Android **Build Variants**와 마찬가지로 iOS 앱은 사용자 지정 Developer App 또는 릴리스 앱 빌드 간 전환을 위해 **Build Targets**를 사용합니다.

1. 드롭다운 메뉴에서 **nativeTemplate**과 앱을 실행할 디바이스를 선택한 다음 **Run Locally** ({{% icon name="controls-play" %}})를 클릭하여 앱 빌드를 시작하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="Xcode Build Toolbar"   width="250"  class="no-border" >}}

빌드가 성공하면 앱이 선택한 디바이스에서 실행되고 제공한 런타임 URL을 사용하여 런타임에 연결됩니다. 

## 종속성 추가{#adding-dependencies}

어느 시점에서 네이티브 플러그형 위젯 및 React Native 모듈과 라이브러리의 포함이 필요한 기능으로 프로젝트를 향상시키고 싶을 것입니다.

Mendix 네이티브 모바일 앱은 React Native 위에 빌드됩니다. 따라서 모든 React Native 모듈을 프로젝트에 추가하고 사용할 수 있습니다. 다른 React Native 프로젝트와 동일한 규칙이 적용됩니다.

### Native Template v4.0.0 이상의 종속성 추가

Native Template v4.0.0 이상부터 Mendix는 RN 0.6.x를 지원하므로 자동 링킹을 지원합니다. 자동 링킹은 *package.json* 파일에 정의된 네이티브 종속성을 네이티브 프로젝트와 자동으로 링크할 수 있는 React Native 메커니즘입니다. Native Template v4.0.0 이상의 종속성을 추가하려면 다음을 수행하십시오:

1. `npm i -s <dependency name>`을 사용하여 Native Template의 루트 *package.json*에 종속성을 추가하십시오.
1. 종속성이 자동 링킹을 지원하는 경우 `npm install`(NPM v7 이상의 경우 `npm install --legacy-peer-deps`)을 실행하면 Android 및 iOS 프로젝트에 자동으로 올바르게 추가됩니다. 종속성이 자동 링킹을 지원하지 않거나 추가 구성이 필요한 경우 해당 문서를 따라 필요한 항목을 수동으로 추가하십시오.

### Native Template v4.0.0 미만의 종속성 추가

Native Template v4.0.0 미만 버전은 React Native의 자동 링킹을 지원하지 않습니다. 따라서 항상 종속성의 수동 단계를 따라 Android 및 iOS 프로젝트에 추가하십시오.

## 종속성 제거{#removing-dependencies}

프로젝트의 요구 사항이 변경될 수 있으므로 필요한 네이티브 모듈과 라이브러리도 변경됩니다. 불필요한 라이브러리로 앱을 비대하게 만드는 것을 방지하려면 사용하지 않는 라이브러리를 제거하는 것을 고려하십시오. 이 프로세스는 현재 자동화되어 있지 않으며 사용하지 않는 라이브러리를 식별할 때 약간의 고려가 필요합니다.

### Native Template v4.0.0 이상에서 자동 링킹을 지원하는 종속성 제거

자동 링킹을 지원하는 종속성을 제거하려면 다음을 수행하십시오:

1. *package.json* 파일에서 종속성 항목을 제거하십시오.
1. `npm i`를 실행하십시오.

### 자동 링킹을 지원하지 않는 종속성 또는 Native Template v.3.x 이하의 종속성 제거

자동 링킹을 지원하지 않는 종속성을 제거하려면 다음을 수행하십시오:

1. *package.json* 파일에서 종속성 항목을 제거하십시오.
1. *ios/Podfile* 파일에서 종속성 항목을 제거하십시오.
1. *android/setting.gradle*에서 종속성의 `include` 및 `project` 항목을 제거하십시오. 예를 들어 Firebase 모듈을 제거하려면 다음을 제거하십시오: 

    ```text
    include ':react-native-firebase'
    project(':react-native-firebase').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-firebase/android')
    ```

1. *android/app/build.gradle*에서 종속성의 `implementation` 항목을 제거하십시오. 예를 들어 Firebase 모듈을 제거하려면 다음을 제거하십시오:

    ```text
    implementation project(":react-native-firebase")
    ```

1. iOS 또는 Android 프로젝트에 포함된 사용자 지정 코드를 제거하십시오.

## 추가 읽기

* [클라우드에서 Mendix 네이티브 앱 빌드 방법](/howto8/mobile/deploying-native-app/)
* [사용자 지정 Developer App 생성 방법](/howto8/mobile/how-to-devapps/)

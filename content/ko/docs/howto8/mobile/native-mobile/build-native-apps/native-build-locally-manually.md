---
title: "Mendix 네이티브 모바일 앱 수동 로컬 빌드"
linktitle: "로컬 네이티브 모바일 앱 수동 빌드"
url: /howto8/mobile/native-build-locally-manually/
weight: 30
description: 첫 번째 Mendix 네이티브 모바일 앱을 수동으로 로컬 빌드하는 방법을 설명합니다.
---

{{% alert color="info" %}}
Mendix Native Mobile Builder가 Mobile Toolkit 호환 Native Template 버전(v5.1.9 이상)을 식별하면 프로젝트에 직접 변경 사항을 적용하지 않습니다. 로컬 빌드 시 변경 사항을 적용하려면 최신 변경 사항을 체크아웃하고, `npm install`을 실행하고(NPM v7 이상의 경우 `npm install --legacy-peer-deps` 실행), `npm run configure`를 실행하십시오.
{{% /alert %}}

## 소개

기본적으로 네이티브 모바일 앱 바이너리를 빌드할 때 Mendix는 [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps)를 서비스로 사용하여 사용자가 Xcode 또는 Android Studio와 같은 도구를 설치하지 않고도 빌드할 수 있습니다. 그러나 App Center를 사용할 수 없거나 허용되지 않는 경우가 있습니다. 이러한 상황에서는 인터넷 연결 없이 로컬에서 앱을 빌드할 수 있습니다.

아래 섹션을 [네이티브 앱 빌드](#building-app-project)까지 따라 빌드를 완료하십시오. 이러한 지침을 넘어서려면 아래의 [종속성 추가](#adding-dependencies) 및 [종속성 제거](#removing-dependencies) 섹션을 참조하십시오. 이 섹션을 통해 로컬 빌드를 추가로 사용자 지정할 수 있습니다.

로컬 빌드 프로세스를 이해하려면 몇 가지 기본 개념을 파악하는 것이 중요합니다. Mendix 네이티브 모바일 앱은 기본적으로 다른 RN 앱과 동일한 규칙을 따르는 React Native(RN) 앱입니다:

* JS 코드와 정적 자산을 RN이 사용할 수 있도록 함께 번들링해야 합니다
* 번들된 코드와 자산은 iOS 및 Android 앱을 나타내는 React Native Template에 넣습니다

유사하게 MxBuild와 Mendix Native Template은 다음 규칙을 따릅니다:

* MxBuild를 사용할 때 JS 코드와 정적 자산이 함께 번들링됩니다
* 번들된 코드와 자산은 iOS 및 Android 버전의 앱 모두에 대한 기반을 제공하는 Mendix Native Template에 넣습니다

## 사전 요구 사항 {#prerequisites}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Node 및 NPM](https://nodejs.org/en/download/)을 설치하십시오

iOS 빌드의 경우:

* Mac OS X 머신이 있어야 합니다 
* 최신 버전의 [Xcode](https://developer.apple.com/xcode/resources/) 및 [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)를 설치하십시오 

Android 빌드의 경우:

* [Android SDK](https://developer.android.com/studio) 및 [platform tools](https://developer.android.com/studio/releases/platform-tools)를 설치하십시오

## Native Template 가져오기

Native Template은 Mendix로 네이티브 모바일 앱을 빌드하기 위한 기반입니다. 본질적으로 Mendix 앱을 실행하는 데 필요한 추가 종속성과 구성이 포함된 React Native 템플릿입니다.

Native Template은 Mendix Studio Pro에 대해 버전이 관리됩니다. 즉, Mendix 앱을 만드는 데 사용하는 Studio Pro 버전이 사용해야 할 Native Template 버전을 결정합니다. Native Mobile Builder를 사용할 때 이는 Studio Pro에서 도구를 시작할 때 자동으로 처리됩니다.

### 사용할 Native Template 버전 결정

사용할 Native Template 버전을 결정하려면 다음을 수행하십시오:

1. 사용 중인 Studio Pro 버전을 확인하십시오.
1. [Native Template GitHub 저장소](https://github.com/mendix/native-template)로 이동하십시오.
1. 프로젝트 루트에서 *mendix_version.json* JSON 파일을 여십시오.

사전의 키는 Mendix Studio Pro 버전을 나타냅니다. `min` 및 `max` 값은 지원되는 최소 및 최대 Native Template 버전입니다: 

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/mendix-version.png" alt="iOS output"   width="200"  class="no-border" >}}

위의 예시 그림에서와 같이 Mendix Studio Pro 8.9.x의 경우 4.0.0부터 최신까지 모든 Native Template 버전을 선택할 수 있습니다. 이상적으로는 지원되는 가장 최신 버전을 선택해야 합니다.

Native Template 사본을 얻는 가장 좋은 방법은 없습니다. 다음 섹션에서 필요한 버전을 얻는 두 가지 방법을 제공합니다.

#### Git CLI를 사용하여 Native Template 가져오기

이 방법은 Git이 설치되어 있는 경우 유용합니다. Native Template을 가져오려면 다음을 수행하십시오:

1. `git@github.com:mendix/native-template.git` 또는 `https://github.com/mendix/native-template.git`을 사용하여 앱을 로컬로 클론하십시오. 
1. 다음 명령을 실행하십시오: `git clone --single-branch --branch release/<major-version-number> <repo-url>`.

최종 단계는 머신에 따라 다릅니다:

Android 앱을 빌드하는 Windows 머신의 경우 다음을 수행하십시오: 

1. `npm i`를 실행하여 필요한 종속성을 설치하십시오.

    {{% alert color="info" %}}Mendix Native Mobile Builder가 Mobile Toolkit 호환 Native Template 버전(v5.1.9 이상)을 식별하면 프로젝트에 직접 변경 사항을 적용하지 않습니다. 로컬 빌드 시 변경 사항을 적용하려면 최신 변경 사항을 체크아웃하고, `npm install`을 실행한 다음 `npm run configure`를 실행하십시오.{{% /alert %}}

2. Native Template v5.1.9 이상의 인스턴스에는 Native Mobile Toolkit이 포함되어 있습니다. 따라서 이러한 버전 중 하나를 사용하는 경우 npm run configure 명령도 실행해야 합니다. 이렇게 하면 Mendix Native Mobile Builder의 변경 사항이 프로젝트에 적용됩니다.

Mac OS X 머신에서 iOS 앱을 빌드하는 경우 다음을 수행하십시오:

1. `cd ios && pod install`을 실행하여 필요한 종속성을 설치하십시오.

#### GitHub에서 소스 코드를 다운로드하여 Native Template 가져오기

이 방법은 Git이 설치되어 있지 않은 경우 유용합니다. Native Template을 가져오려면 다음을 수행하십시오:

1. [Native Template releases](https://github.com/mendix/native-template/releases)로 이동하십시오.
1. 다운로드하려는 버전으로 스크롤하십시오.
1. 소스 코드 바이너리를 선택하여 코드 사본을 다운로드하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/github-assets.png" alt="iOS output"   width="250"  class="no-border" >}}

1. 파일의 압축을 해제하십시오.
1. `npm i && cd ios && pod install`을 실행하여 필요한 종속성을 설치하십시오.

이제 Native Template 사본을 체크아웃하고 준비했으므로 Mendix 앱을 번들링하고 Native Template 폴더로 이동한 다음 모든 것을 함께 컴파일하여 완성된 네이티브 앱을 생성할 수 있습니다.

## Mendix 앱 번들링

번들링은 Studio Pro에서 만든 모든 것을 패키징하고 해당 패키지를 네이티브 모바일 앱으로 컴파일할 준비를 하는 프로세스입니다. React Native 앱(따라서 Mendix 네이티브 앱)의 번들링에는 앱의 비즈니스 로직과 레이아웃을 JavaScript 번들로 트랜스파일하고 모든 정적 리소스를 올바른 폴더 구조로 수집하는 것이 포함됩니다. 

리소스를 번들링하기 위해 Mendix Studio Pro에는 [MxBuild](/refguide8/mxbuild/)라는 유용한 도구가 함께 제공됩니다. MxBuild는 Studio Pro 실행 파일의 위치를 기준으로 찾을 수 있습니다(예: *C:\Program Files\Mendix\Studio Pro (version)\mxbuild.exe*).

1. 다음 명령을 실행하십시오:

    ```shell
    mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" --target=deploy --native-packager --loose-version-check [path-to-project-mpr-file]
    ```

번들은 `project-directory\deployment\native\bundles`를 기준으로 생성됩니다

1. 프로젝트에 대해 MxBuild를 실행하여 필요한 번들과 자산을 생성하십시오.

완료되면 프로젝트의 deployment 폴더 아래 `project-directory\deployment\native\bundles`에 두 개의 폴더가 있어야 합니다. 하나는 `ios`, 다른 하나는 `android`입니다:

1. ios 폴더의 내용을 *{your Native Template root}/ios/Bundle*로 이동하십시오.
1. `android` 폴더 구조는 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/android-output.png" alt="iOS output"   width="250"  class="no-border" >}}

1. 폴더의 내용을 *{your Native Template root}/android/app/src/main*으로 이동하십시오. 요청 시 덮어쓰기를 선택하십시오.
1. 텍스트 편집기를 사용하여 *{your Native Template root}/android/app/src/main/res/raw/runtime_url*을 여십시오.
1. URL을 런타임의 올바른 URL로 바꾸십시오.
1. *{your Native Template root}/ios/Config/config.xcconfig*를 열고 `RUNTIME_URL=`의 값을 런타임의 올바른 URL로 바꾸십시오.

축하합니다! Mendix 앱의 최신 번들과 자산으로 Native Template의 기본 설정을 성공적으로 완료했습니다.

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

1. 아직 하지 않았다면 앱 루트에서 `npm install`(NPM v7 이상의 경우 `npm install --legacy-peer-deps`)을 실행하여 필요한 종속성을 설치하십시오.
1. `cd ios`를 실행하여 디렉토리를 변경하십시오.
1. Mac 유형에 따라 아래 두 경로 중 하나를 완료하십시오.

**경로 1: Apple Silicon(M1)을 실행하는 Mac**

Native Template은 아직 ARM 64 Simulator 아키텍처를 지원하지 않습니다. 이러한 이유로 x86 pod를 설치하고 Rosetta로 Xcode를 시작해야 합니다:

1. 시스템에 Rosetta가 설치되어 있는지 확인하십시오(자세한 내용은 이 [Apple 문서](https://support.apple.com/en-us/HT211861)를 참조하십시오).
1. `arch -x86_64 pod install`을 실행하여 올바른 유형의 pod를 설치하십시오.
1. **Xcode.app** 아이콘을 마우스 오른쪽 버튼으로 클릭하고 **Get info**를 선택하십시오.
1. **Open using Rosetta** 체크박스를 선택하십시오.
1. Xcode를 시작하십시오.

Xcode는 이제 x86_64 시뮬레이터를 사용하며 빌드가 예상대로 작동해야 합니다. x86 pod를 설정했으므로 [여기](#resume-ios)를 클릭하여 두 번째 경로를 건너뛰고 빌드 프로세스를 재개하십시오.

**경로 2: Intel Silicon을 실행하는 Mac**

Intel Silicon을 실행하는 Mac으로 iOS 앱을 빌드하려면 다음을 수행하십시오:

1. `pod install`을 실행하십시오.
1. Xcode를 시작하십시오.

iOS 프로젝트는 종속성 관리를 위해 CocoaPods를 사용합니다. 머신에 CocoaPods 종속성 관리자를 설치하는 방법에 대한 자세한 내용은 CocoaPods [문서](https://cocoapods.org/#install)를 참조하십시오.

<a id="resume-ios"></a>위의 두 경로 중 하나를 완료했으므로 이제 iOS 앱 빌드를 재개할 수 있습니다:

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

### v4.0.0 이상에서 자동 링킹을 지원하는 종속성 제거

자동 링킹을 지원하는 종속성을 제거하려면 다음을 수행하십시오:

1. *package.json* 파일에서 종속성 항목을 제거하십시오.
1. `npm i`를 실행하십시오.

### 자동 링킹을 지원하지 않는 종속성 또는 v.3.x 이하의 종속성 제거

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

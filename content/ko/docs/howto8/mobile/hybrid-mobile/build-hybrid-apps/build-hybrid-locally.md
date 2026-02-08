---
title: "Mendix 하이브리드 앱 로컬 빌드"
url: /howto8/mobile/build-hybrid-locally/
weight: 9
---

{{% alert color="warning" %}}
하이브리드 모바일 패키지에는 Node.js v18이 필요합니다. 그 이상의 버전에서는 종속성 설치 및 컴파일에 실패합니다. 하이브리드 모바일 패키지가 이후 버전을 지원하도록 업데이트하고 있습니다.

Windows에서 여러 node 또는 npm 버전을 지원하려면 [Node Version Switcher (NVM)](https://github.com/coreybutler/nvm-windows) 유틸리티를 사용하십시오.
{{% /alert %}}

## 소개

이 문서에서는 하이브리드 앱을 로컬에서 빌드하는 방법을 설명합니다.

## iOS 앱 로컬 빌드 {#building-ios-locally}

**사전 요구 사항:**

* Mac OSX 머신
* 올인원 설치 옵션을 사용하여 [Node.js 18](https://nodejs.org/download/release/latest-v18.x/)을 설치하십시오
* Cloud Portal에서 [로컬 빌드 패키지](/developerportal/deploy/mobileapp/#doing-it-yourself)를 다운로드하고 알려진 위치에 압축을 해제하십시오
* [Apple Developer Account](https://developer.apple.com/register/index.action)에 등록하십시오
* [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) 및 커맨드라인 도구를 설치하십시오

### 빌드를 위한 앱 준비

빌드를 위해 앱을 준비하려면 다음 지침을 따르십시오:

1. 터미널 창을 열고 압축 해제한 패키지 폴더로 디렉토리를 변경하십시오. 예를 들어 Downloads 폴더에 있는 경우 **cd /Downloads/localbuild**를 실행합니다.
1. `npm i && npm run package && npm run platform:ios`를 실행하십시오. 이 명령 조합은 다음을 수행합니다:
    * 필요한 모든 종속성을 설치합니다.
    * 배포를 위해 Cordova 앱을 패키징합니다.
    * Cordova에 iOS 플랫폼을 추가합니다.

#### DTAP 엔드포인트 사용자 지정    

선택적으로 **config/environments.json** 파일에서 다양한 환경을 설정할 수 있습니다. 이는 자체 테스트 또는 수락 환경에서 빌드를 만들려는 경우에 유용합니다. 

앱에서 특정 DTAP 엔드포인트를 대상으로 하려면 `npm run package` 또는 `npm run package:x86`에 매개변수로 지정할 수 있습니다. 예를 들어 다음과 같은 코드가 될 수 있습니다:

```shell
npm run package -- --env target=test  # target the test endpoint for ARM architecture
```

가능한 대상은 `development`, `test`, `acceptance`, `production`(기본값) 및 `sandbox`입니다. 편의를 위해 첫 글자로 줄여 사용할 수 있습니다. `--env target` 매개변수가 제공되지 않으면 하이브리드 앱 엔드포인트는 기본적으로 프로덕션 환경으로 설정됩니다. 

### 준비된 프로젝트 빌드

앱을 빌드하는 방법은 두 가지가 있습니다: Cordova CLI 또는 Xcode. Cordova CLI가 더 빠르며 Cordova가 앱의 구성을 완전히 제어할 수 있습니다. Xcode는 더 복잡하지만 Xcode의 UI를 통해 앱의 문제를 더 쉽게 감지할 수 있습니다. 상황에 맞는 방법을 사용하십시오.

#### Cordova CLI를 사용한 iOS 빌드

**사전 요구 사항:**

* Apple Developer 팀 ID([여기](https://developer.apple.com/account/#/membership/)에서 확인할 수 있습니다)

이 프로세스는 Xcode를 사용하는 것보다 짧지만 빌드 실패 원인을 이해하는 데 더 많은 작업이 필요할 수 있습니다. Cordova CLI를 사용하여 빌드하려면 다음을 수행하십시오:

1. `npm run build -- ios --release --device --codeSignIdentity="iPhone Developer" --developmentTeam="<your-teams-id>"`를 실행하십시오. 이 명령 조합은 다음을 수행합니다:
    * 물리적 디바이스용 바이너리를 생성하는 릴리스 빌드를 시작합니다
    * 서명을 위해 "iPhone Developer" 코드 서명 ID를 사용합니다 
    * 제공된 Apple Developer 팀 ID를 사용하여 프로비저닝 파일과 인증서를 조회합니다
    * 선택적으로, 에뮬레이터용 디버그 빌드를 원하는 경우 다음 명령을 대신 사용하십시오: `npm run build -- ios --debug --emulator`.
1. 빌드가 성공하면 생성된 *IPA* 파일을 */build/platforms/ios/build*에서 찾을 수 있습니다. 해당 폴더는 다음과 같은 파일 구조를 가져야 합니다(에뮬레이터용으로 빌드한 경우 *.app* 파일을 사용할 수 있습니다):

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/folder-final.png" alt="Signing screen correctly configured" class="no-border" >}}

1. 생성된 IPA를 TestFlight에 업로드하여 추가 테스트를 할 수 있습니다. 이를 원하시면 Apple App Store 문서의 [Upload tools](https://help.apple.com/app-store-connect/#/dev82a6a9d79) 섹션을 계속 진행하십시오.

#### Xcode를 사용한 iOS 빌드

Xcode의 친숙한 시각적 인터페이스 덕분에 Cordova CLI보다 Xcode를 사용하는 것이 더 쉬울 수 있습니다. Xcode를 사용하여 앱을 빌드하려면 다음을 수행하십시오:

1. **/build/platforms/ios/** 아래에서 `.xcworkspace` 파일을 더블 클릭하여 여십시오. Xcode가 앱과 함께 열립니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/xc-workspace.png" alt="Opening XCWorkspace"   width="400"  class="no-border" >}}

1. 왼쪽 패널의 트리 뷰에서 루트 요소를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/root-element.png" alt="Selecting the root element"   width="400"  class="no-border" >}}

1. 화면이 다음 뷰로 변경되어야 합니다. 변경되지 않으면 왼쪽 패널의 **Targets** 아래 항목(**App** 아래 항목이 아님)을 선택하고 **Signing & Certificates** 탭을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/setup-signing-wrong.png" alt="Signing screen with errors"   width="400"  class="no-border" >}}

1. **Debug**와 **Release** 모두 **Automatically manage signing**으로 구성되어 있을 수 있습니다. 두 체크박스를 모두 해제하여 수동 서명으로 전환하십시오. 화면이 다음과 같이 변경되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/setup-signing-correct.png" alt="Signing screen correctly configured"   width="400"  class="no-border" >}}

1. **Automatically manage signing**을 다시 활성화하십시오.
1. 드롭다운 메뉴를 사용하여 **Team**을 선택하십시오. 아직 자격 증명으로 로그인하지 않은 경우 Xcode에서 로그인하라는 메시지가 표시됩니다.
1. 올바르게 구성되면 모든 오류가 사라져야 합니다.
1. 앱의 빌드 대상을 선택하고 **Generic iOS Device**를 디바이스로 지정하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/target-device.png" alt="Signing screen correctly configured"   width="400"  class="no-border" >}}

1. 메뉴 바에서 **Product**를 선택한 다음 **Archive**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/archiving.png" alt="Archiving"   width="400"  class="no-border" >}}

1. 프로세스가 성공적으로 완료되면 **Organizer** 뷰가 나타납니다. 앱이 선택되어 있고 최신 **Archive**가 표시되어야 합니다. Xcode의 **Window** 메뉴를 통해 언제든지 Organizer를 직접 열 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/organizer.png" alt="Organizer"   width="400"  class="no-border" >}}

1. **Distribute App** 버튼을 사용하여 앱 스토어에 앱을 배포하거나 로컬 배포를 위해 아카이브할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/distribute-options.png" alt="Distribute Options"   width="400"  class="no-border" >}}

## Android 앱 로컬 빌드 {#building-android-locally}

**사전 요구 사항:**

* [AndroidStudio](https://developer.android.com/studio)를 설치하십시오
* 올인원 설치 옵션을 사용하여 [Node.js 18](https://nodejs.org/download/release/latest-v18.x/)을 설치하십시오
* JDK 1.8을 설치하십시오
* [키스토어 생성](/refguide8/managing-app-signing-keys/#generating-a-keystore)을 사용하여 키스토어를 생성하십시오
* Cloud Portal에서 [로컬 빌드 패키지](/howto8/mobile/customizing-phonegap-build-packages/#download-local-package)를 다운로드하고 알려진 위치에 압축을 해제하십시오

### 빌드를 위한 앱 준비

빌드를 위해 앱을 준비하려면 다음 지침을 따르십시오:

1. 터미널 창을 열고 압축 해제한 패키지 폴더로 디렉토리를 변경하십시오. 예를 들어 **Downloads** 폴더에 있는 경우 **cd /Downloads/localbuild**를 실행합니다.
1. `npm i && npm run package && npm run platform:android`를 실행하십시오. 이 명령 조합은 다음을 수행합니다:
    * 필요한 모든 종속성을 설치합니다
    * 배포를 위해 Cordova 앱을 패키징합니다
    * Cordova에 Android 플랫폼을 추가합니다

### 환경 변수 설정

로컬 빌드 명령을 실행하려면 시스템에 일부 필수 환경 변수를 설정해야 합니다. 이러한 변수는 현재 명령줄 세션에 대해 임시로 설정하거나 시스템에 전역으로 설정할 수 있습니다. 변수는 다음과 같습니다:

* **ANDROID_SDK_ROOT**, Android *SDK* 설치 폴더를 가리킵니다
* **JAVA_HOME**, *JDK* 1.8 루트 디렉토리를 가리킵니다
* **GRADLE_HOME**, 유효한 Gradle 배포 디렉토리를 가리킵니다

이 가이드에서는 각 명령에 대해 임시로 설정합니다.

### 준비된 프로젝트 빌드

앱을 빌드하는 방법은 두 가지가 있습니다: Cordova CLI 또는 Android Studio. Cordova CLI가 더 빠르며 Cordova가 앱의 구성을 완전히 제어할 수 있습니다. Android Studio는 더 복잡하지만 Android Studio의 UI를 통해 앱의 문제를 더 쉽게 감지할 수 있습니다. 상황에 맞는 방법을 사용하십시오.

#### Cordova CLI를 사용한 Android 빌드

릴리스용으로 앱을 로컬 빌드하는 명령은 `npm run build -- android --release`입니다.

1. 다음 명령을 실행하십시오:

    1. **Mac OSX에서, 단일 명령으로 실행:**<br />

        ```shell
        PATH="\$PATH:/Users/<username>/.gradle/wrapper/dists/gradle-5.1.1-all/97z1ksx6lirer3kbvdnh7jtjg/gradle-5.1.1/bin" JAVA_HOME=`/usr/libexec/java_home -v 1.8\` npm run build -- android --release -- --keystore=<keystore-path> --storePassword=<keystore-password> --alias=<keystore-alias> --password=<certificate-password>
        ```

    1. **Windows에서, 명령줄에서 별도의 명령으로 실행:**<br />

        ```shell
        set PATH=%PATH%;C:\path-to-gradle-distribution

        set JAVA_HOME=C:\path-to-jdk-1.8-directory

        npm run build -- android --release -- --keystore=<keystore-path> --storePassword=<keystore-password> --alias=<keystore-alias> --password=<certificate-password>
        ```

    이 명령은 경로에 gradle 바이너리를 추가하고, JAVA *JDK*를 1.8로 전환하며, 서명된 *APK*를 생성하는 빌드 릴리스 명령을 실행합니다.

1. 빌드가 성공하면 생성된 *APK* 파일을 **/build/platform/android/app/release**에서 찾을 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/folder-final-android.png" alt="Final folder structure"   width="400"  class="no-border" >}}

#### Android Studio를 사용한 Android 빌드

Android Studio의 친숙한 시각적 인터페이스 덕분에 Cordova CLI보다 Android Studio를 사용하는 것이 더 쉬울 수 있습니다. Android Studio를 사용하여 앱을 빌드하려면 다음을 수행하십시오:

1. Android Studio를 시작하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-welcome.png" alt="Android Studio Welcome Screen"   width="400"  class="no-border" >}}

1. 기존 Android Studio 프로젝트를 열고 앱의 Android 폴더를 선택하십시오. 예: **/Downloads/localbuild/build/platform/android**:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-open-folder.png" alt="Android Studio Open Folder"   width="400"  class="no-border" >}}

1. Android Studio가 앱 동기화를 완료할 때까지 기다리십시오.
1. **Build** > **Generate Signed Bundle / APK**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-build-menu.png" alt="Android Studio Build Menu"   width="400"  class="no-border" >}}

1. *APK* 체크박스를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-sign-wizard-1.png" alt="Android Studio Sign Wizard Step 1"   width="400"  class="no-border" >}}

1. Android 키스토어를 선택하고 올바른 키스토어 비밀번호, 별칭 및 비밀번호로 양식을 작성하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-sign-wizard-2.png" alt="Android Studio Sign Wizard Step 2"   width="400"  class="no-border" >}}

1. *APK*의 대상 폴더, **Build Variant** 릴리스, 그리고 **V1 and V2 Signature** 버전을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/build-hybrid-locally/android-studio-sign-wizard-3.png" alt="Android Studio Sign Wizard Step 3"   width="400"  class="no-border" >}}

1. **Finish**를 클릭하십시오.

이제 *APK*가 Android Studio를 사용하여 생성되고 서명되었습니다. 결과 *APK*는 선택한 출력 폴더에서 찾을 수 있으며 추가 처리를 위해 Google Play Console을 통해 업로드할 수 있습니다.

## 추가 읽기

* [앱 배포](/deployment/)
* [오프라인 참조 가이드](/refguide8/offline-first/)
* [앱 스토어에 Mendix 하이브리드 모바일 앱 게시 방법](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
* [Apache Cordova Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/)

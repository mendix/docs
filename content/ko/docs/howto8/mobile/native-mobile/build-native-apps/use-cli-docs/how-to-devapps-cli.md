---
title: "Native Builder CLI로 사용자 지정 Developer App 생성"
linktitle: "Native Builder CLI로 사용자 지정 Developer App"
url: /howto8/mobile/how-to-devapps-cli/
weight: 30
description: 사용자 지정 Developer App 생성을 위한 튜토리얼입니다.
---

## 소개

Mendix 앱이 성숙해지면 사용자 지정 위젯이나 새로운 네이티브 종속성이 필요한 로직을 도입하는 등 기능을 확장하고 싶을 수 있습니다. 이러한 사용자 지정 중 하나는 앱에 NFC(근거리 무선 통신) 모듈을 추가하는 것입니다. Make It Native 앱은 기본 앱을 테스트하기에 충분하지만, 앱이 사용자 지정 네이티브 위젯이나 폰트와 같은 사용자 지정 종속성을 추가하면 더 맞춤화된 Developer App이 필요합니다.

사용자 지정 Developer App은 Make It Native 앱의 대체로 사용되며, Make It Native 앱에서 지원하지 않는 사용자 지정 위젯과 로직이 있을 때 사용해야 합니다. 사용자 지정 Developer App은 현재 프로젝트 구조, 사용자 지정 모듈 및 기타 요구 사항을 사용하여 직접 생성할 수 있는 앱입니다. 사용자 지정 Developer App은 Make It Native 앱과 동일한 기능을 갖지만 사용자의 필요에 맞게 맞춤화됩니다.

## 사전 요구 사항

* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)를 완료하십시오

## Developer App 빌드

1. Command Prompt와 같은 명령줄 인터페이스(CLI)를 여십시오.
2. Native Builder의 디렉토리로 이동하십시오:

    ```powershell
    cd {path to Native Builder executable file}
    ```

3. 다음 명령을 실행하여 프로젝트의 사용자 지정 Developer App을 빌드하십시오:

    ```powershell
    native-builder.exe build dev-app --project-name {your project's name}
    ```

    이 명령은 다음을 수행합니다: <br />
    1. `main`에 커밋된 변경 사항을 기반으로 `developer`라는 브랜치를 생성합니다. <br />
    1. 프로젝트의 Developer App 플레이버를 사용하여 빌드를 시작합니다.
4. Native Builder가 빌드를 완료할 때까지 기다리십시오.

릴리스 빌드와 마찬가지로, Native Builder가 빌드를 완료하면 각 빌드에 대해 두 개의 아카이브(iOS 및 Android 빌드)가 있어야 합니다. 이러한 아카이브는 빌드 출력 경로 `{build output path}`에서 이름 앞에 **Dev**가 붙어 있습니다. 기본 `{build output path}`는 `native-builder.exe` 위치를 기준으로 `./builds` 폴더입니다.

## 사용자 지정 Developer App 설치

### Android

기본적으로 사용자 지정 Developer App은 서명되지 않습니다. 서명된 *IPA*를 받으려면 *클라우드에서 Mendix 네이티브 앱 빌드 방법*의 [빌드 서명](/howto8/mobile/deploying-native-app/#signing-a-build) 섹션의 단계를 따르십시오. 사용자 지정 Developer App 브랜치의 이름은 **developer**입니다.

Android의 경우 빌드의 출력은 *APK* 파일입니다. *APK* 파일은 디바이스나 에뮬레이터에 직접 설치할 수 있습니다.

#### 에뮬레이터에 설치

에뮬레이터가 실행 중인 상태에서 다음을 수행하여 에뮬레이터에 앱을 설치하십시오:

1. *APK*를 에뮬레이터 창에 드래그하십시오.
2. 설치가 완료될 때까지 기다리십시오.
3. 런처에서 앱을 여십시오.

#### 디바이스에 설치

디바이스에 앱을 설치하는 방법은 여러 가지가 있습니다. USB를 사용한 설치가 아래에 자세히 설명되어 있지만 적합한 다른 방법을 사용할 수 있습니다. 디바이스에 *APK*를 설치하려면 다음을 수행하십시오:

1. USB를 통해 디바이스를 머신에 연결하십시오.
2. 디바이스에서 파일 전송을 활성화하십시오(디바이스마다 다름).
3. 파일 탐색기에서 **This PC**를 여십시오. 디바이스가 외부 디바이스로 나열되어야 합니다.
4. *APK*를 디바이스로 드래그하십시오.
5. 전송이 완료될 때까지 기다리십시오.
6. 디바이스의 파일 관리자를 여십시오.
7. 파일 시스템의 루트로 이동하십시오.
8. *APK*를 탭하여 설치하십시오.
9. 설치 단계를 진행하십시오.
10. 런처에서 앱을 여십시오.

### iOS

기본적으로 사용자 지정 Developer App은 서명되지 않습니다. 서명된 *IPA*를 받으려면 *클라우드에서 Mendix 네이티브 앱 빌드 방법*의 [빌드 서명](/howto8/mobile/deploying-native-app/#signing-a-build) 섹션의 단계를 따르십시오. 사용자 지정 Developer App 브랜치의 이름은 **developer**입니다.

iOS 빌드의 서명되지 않은 출력은 *XCArchive* 파일입니다. *XCArchive* 파일은 디바이스에 설치하기 전에 수동 서명이 필요합니다.

iOS 빌드의 서명된 출력은 *IPA* 파일입니다. 올바르게 서명된 경우 *IPA* 파일을 물리적 디바이스에 설치할 수 있습니다.

설치하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Mac OSX 머신이 있어야 합니다
* Node.js 및 NPM의 LTS 빌드를 설치하십시오([여기](https://nodejs.org/en/)에서 다운로드)
* Cocoapods를 설치하십시오([설치 지침](https://cocoapods.org/#install))
* 최신 Xcode 버전을 설치하십시오

#### 에뮬레이터에 설치

Native Builder로의 빌드는 시뮬레이터 아티팩트가 제거됩니다. 따라서 Xcode의 Simulator에서 실행하려면 소스에서 developer 브랜치를 로컬로 빌드해야 합니다:

1. GitHub 저장소로 이동하십시오.
2. **developer** 브랜치로 전환하십시오:
   
    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/github-branch-switching.png" alt="Switch branch on GitHub" class="no-border" >}}
   
3. **Clone or Download**를 클릭한 다음 **Download ZIP**을 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/github-download-branch.png" alt="Download repository" class="no-border" >}}

4. 다운로드한 아카이브의 압축을 해제하십시오.
5. 터미널을 열고 해당 폴더로 디렉토리를 변경하십시오.
6. 다음 명령을 실행하십시오:

    ```shell
    npm i && cd ios && pod install
    ```

    이렇게 하면 node 모듈 종속성과 iOS 종속성이 설치됩니다
7. **ios** 폴더에서 **NativeTemplate.xcworkspace** 파일을 여십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/ios-folder.png" alt="iOS folder structure" class="no-border" >}}

8. Xcode에서 **Dev** 타겟과 Developer App을 빌드할 에뮬레이터를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/xcode-target-selection.png" alt="Dev target selection" class="no-border" >}}

9. **Run** ({{% icon name="controls-play" %}})을 클릭하십시오.

#### 사용자 지정 Developer App 배포

테스트 디바이스가 아닌 디바이스에서 사용자 지정 Developer App을 실행하려면 인증서로 Developer App에 서명해야 합니다. 

로컬 빌드의 경우 *Native Builder CLI로 첫 번째 Mendix 네이티브 모바일 앱 배포 방법*의 [빌드 서명](/howto8/mobile/deploying-native-app-cli/#signing-a-build) 섹션을 따라 *.xarchive* 파일에 서명하십시오. 

Native Builder가 사용자 지정 Developer App에 서명하게 하려면 *Native Builder CLI로 첫 번째 Mendix 네이티브 모바일 앱 배포 방법*의 [빌드 서명](/howto8/mobile/deploying-native-app-cli/#signing-a-build) 섹션의 단계를 따르십시오.

## 추가 읽기

* [클라우드에서 Mendix 네이티브 앱 빌드 방법](/howto8/mobile/deploying-native-app/)
* [OTA 업데이트 사용 방법](/howto8/mobile/how-to-ota/)

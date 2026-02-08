---
title: "클라우드에서 Mendix 네이티브 앱 빌드"
linktitle: "Mendix 네이티브 모바일 앱 배포"
url: /howto8/mobile/deploying-native-app/
weight: 10
description: Mendix Native Mobile Builder로 클라우드에서 Mendix 네이티브 앱을 빌드하는 방법을 설명합니다.
---

## 소개

이 사용법 가이드에서는 빈 상태에서 디바이스에서 실행되는 앱까지 만드는 방법을 알려드립니다.

Mendix Native Mobile Builder는 Mendix 네이티브 모바일 앱을 설정하고 빌드하는 UI 도구입니다. 네이티브 모바일 탐색 프로필이 있는 모든 프로젝트에 대해 Mendix Studio Pro 8.15 이상에서 직접 접근할 수 있습니다.

## 사전 요구 사항 {#prerequisites}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 온라인 설치 프로그램을 사용하여 Mendix Studio Pro 8.15 이상을 설치하십시오. 오프라인 설치 프로그램에는 Mendix Native Mobile Builder 종속성이 포함되어 있지 않습니다.
* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)를 읽고 Mendix Studio Pro로 애플리케이션을 생성, 스타일링 및 디버그하는 방법을 확인하십시오
* Studio Pro를 통해 네이티브 모바일 앱을 클라우드에 배포하고 배포된 애플리케이션의 클라우드 주소를 준비하십시오
* [GitHub](https://github.com/) 계정이 있어야 합니다.
* [App Center](https://appcenter.ms/) 계정이 있어야 합니다. 정기적으로 빌드하고 배포할 예정이라면 유료 계정을 권장합니다.

### 플랫폼별 사전 요구 사항

iOS 디바이스에서 테스트용으로 앱을 배포하려면 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Apple Developer Account에 등록하십시오
* 생성될 iOS 패키지를 테스트할 iOS 디바이스가 있어야 합니다
* 디바이스가 활성화된 iOS 배포 인증서와 프로비저닝 파일이 있어야 합니다
* iOS 패키지를 테스트 디바이스에 배포하기 위해 컴퓨터에 Xcode가 설치되어 있어야 합니다

Android 디바이스에서 테스트용으로 앱을 배포하려면 Android 디바이스가 준비되어 있어야 합니다.

## 토큰 얻기 {#getting-your-tokens}

Mendix Native Mobile Builder를 사용하려면 먼저 GitHub 및 App Center에 인증하기 위한 토큰을 받아야 합니다. 이미 GitHub 및 App Center용 토큰이 있는 경우 **토큰 얻기** 섹션을 완료할 필요가 없습니다.

### GitHub 토큰 {#github-token}

1. [GitHub](https://github.com/)로 이동하여 로그인하십시오.
2. 페이지 오른쪽 상단의 프로필 사진을 클릭하여 [Settings](https://github.com/settings/profile)로 이동하십시오.
3. 왼쪽 메뉴 하단의 [Developer settings](https://github.com/settings/apps)를 클릭하십시오.
4. [Personal access tokens](https://github.com/settings/tokens)로 이동한 다음 **Generate new token**을 클릭하여 새 개인 접근 토큰을 생성하십시오.
5. **Note** 필드에 *Native Mobile Builder*를 입력하십시오.
6. **Select scopes** 아래에서 **repo** 및 **workflows**를 선택하십시오.
7. **Generate token**을 클릭하십시오.
8. 토큰을 안전한 곳에 저장하십시오. 다시 볼 수 없습니다. 분실한 경우 새 토큰을 생성하고 이전 토큰을 삭제해야 합니다.

### App Center 토큰 {#appcenter-token}

1. [App Center](https://appcenter.ms/apps)로 이동하여 로그인하십시오.
2. 오른쪽 상단의 프로필 아이콘을 클릭한 다음 **Settings**, **Account Settings**를 클릭하십시오.
3. **API Tokens** 탭에서 **New API token**을 클릭하십시오.
4. 토큰에 대한 설명을 추가하고 **Full Access**를 선택한 다음 **Add new API token**, **New API Token**을 클릭하십시오.
5. 이 토큰도 안전한 곳에 저장하십시오. 다시 볼 수 없습니다. 분실한 경우 새 토큰을 생성하고 이전 토큰을 삭제해야 합니다.

## 네이티브 앱 빌드 {#building}

{{% alert color="info" %}}
Mendix Native Mobile Builder는 GitHub 및 App Center와 통신해야 합니다. 따라서 방화벽 권한이 도구를 제한하지 않는지 확인하십시오.
{{% /alert %}}

Studio Pro에서:

1. **Project** > **Build Native Mobile App**을 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobiler Builder"   width="350"  class="no-border" >}}

1. Mendix Native Mobile Builder가 시작되면 홈 화면이 표시됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Natve Mobile Builder Home Screen"   width="350"  class="no-border" >}}

1. **Build app for distribution**을 선택하십시오.
1. 앱의 이름과 앱 식별자를 입력하십시오. 마법사가 기본값을 제공하지만 회사의 역방향 URL을 사용하도록 앱 식별자를 정렬하거나 프로젝트 이름 이외의 이름으로 변경할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.
1. **Tokens** 화면에서 GitHub 및 App Center API 토큰을 입력하십시오. 도구가 토큰이 유효한 계정에 충분한 접근 권한을 부여하는지 확인하고 그렇지 않은 경우 알려줍니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-tokens.png" alt="Wizard Tokens"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.
1. 아이콘으로 사용하려는 이미지가 이미 있는 경우 **Choose your icon**을 선택하십시오. 사용자 지정 이미지를 추가하지 않고 계속하면 앱은 아래에 표시된 기본 이미지를 사용합니다. 나중에 앱 아이콘을 변경할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-icons.png" alt="Wizard Icons"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.
1. 스플래시 화면으로 사용하려는 이미지가 이미 있는 경우 **Choose your splash screen**을 선택하거나 기본 이미지를 사용해도 괜찮다면 계속하십시오. 나중에 스플래시 화면을 변경할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-splashscreens.png" alt="Wizard Splash screen"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.
1. 사용하려는 폰트 선택이 이미 있는 경우 사용자 지정 폰트를 필드에 드래그하거나, 사용자 지정 폰트를 추가할 필요가 없으면 계속하십시오. 나중에 사용자 지정 폰트를 추가할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-fonts.png" alt="Wizard Fonts"   width="350"  class="no-border" >}}

1. 준비되면 **Next Step**을 클릭하십시오.

프로젝트를 빌드하는 데 필요한 필수 기본 앱 구성을 완료했습니다. 이제 **Build app for distribution** 화면이 표시됩니다: 

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

다음으로 다음을 수행하십시오:

1. 의도적인 버전 번호를 입력하십시오. 기본값에 대해서는 다음 번호 지정 가이드라인을 사용하는 것을 권장합니다:

    * 알파 릴리스의 경우 0.5.0 미만 버전
    * 베타 릴리스의 경우 0.5에서 0.9.x 범위의 버전
    * 릴리스의 경우 1.0.0부터 시작하는 버전

1. **Runtime URL**을 입력하십시오. 로컬에서 실행 중인 Studio Pro 설치에 대해 테스트할 계획이라면 로컬 머신의 IP가 될 수 있습니다. 이미 앱을 Mendix Cloud에 배포한 경우 Cloud Portal에서 찾을 수 있는 배포된 런타임의 URL을 지정할 수 있습니다.
1. **Build** 버튼을 클릭하여 빌드를 시작하십시오.
1. 도구가 GitHub 저장소를 설정하고, 변경 사항을 커밋하고, App Center를 두 개의 새 프로젝트(iOS용 및 Android용)로 구성하고, 앱 빌드를 계속합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  class="no-border" >}}{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  class="no-border" >}}
    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step2.png" alt="Building release app" width="350" class="no-border" >}}

1. 빌드가 완료되면 제공된 QR 코드를 스캔하여 디바이스에 앱을 설치할 수 있습니다. 현재 QR 코드 서비스는 Android 디바이스에서만 지원됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-done-both.png" alt="Build completed"   width="350"  class="no-border" >}}

## 앱 서명 {#signing-a-build}

기본적으로 App Center 빌드는 서명되지 않으며 Google Play Store 또는 Apple App Store에 릴리스할 수 없습니다. 앱을 릴리스하려면 Mendix Native Mobile Builder에 서명 키를 제공해야 합니다. 서명 키는 앱의 진위를 증명하고 위조를 방지합니다. 이러한 키를 얻는 방법에 대한 자세한 내용은 [앱 서명 키 관리 참조 가이드](/refguide8/managing-app-signing-keys/)를 참조하십시오.

### iOS 서명 설정 {#signing-for-ios}

iOS는 **Development**와 **Release** 두 가지 유형의 서명 구성을 지원합니다. 빌드 유형은 도구를 구성하는 데 사용된 프로비저닝 파일과 인증서의 유형에 따라 달라집니다. iOS 서명을 설정하려면 다음 단계를 따르십시오:

1. Mendix Native Mobile Builder 내에서 **Certificates** 아래의 **iOS**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

1. 프로비저닝 파일과 P12 인증서를 업로드한 다음 비밀번호를 입력하십시오. 도구가 다음을 확인합니다:

    * 앱의 앱 식별자가 프로비저닝 파일에 포함되어 있는지
    * 인증서가 프로비저닝 파일에 포함되어 있는지
    * 비밀번호로 인증서를 잠금 해제할 수 있는지

    도구에서 오류가 발생하면 문제를 수정하고 다시 시도하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/signing-ios.png" alt="Signing iOS"   width="350"  class="no-border" >}}

1. **Save**를 클릭하십시오.

이로써 iOS 서명 설정이 완료되었습니다. 다음 빌드에서는 제공된 구성을 사용하여 iOS 앱에 서명합니다.

### Android 서명 설정 {#signing-for-android}

1. Mendix Native Mobile Builder 내에서 **Certificates** 아래의 **Android**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

1. 키스토어 파일을 업로드하고 키스토어 설정 시 정의한 키스토어 비밀번호, 키 별칭 및 키 비밀번호를 제공하십시오. 도구가 다음을 확인합니다:

    * 키스토어 비밀번호가 유효한지
    * 제공된 키스토어에 키 별칭이 존재하는지

    오류가 발생하면 문제를 수정하고 다시 시도하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/signing-android.png" alt="Signing iOS"   width="350"  class="no-border" >}}

1. **Save**를 클릭하십시오.

이로써 Android 서명 설정이 완료되었습니다. 다음 빌드에서는 제공된 구성을 사용하여 Android 앱에 서명합니다.

## 배포 {#distributing}

이 섹션에서는 바이너리 배포, [iOS](#signing-for-ios) 및 [Android](#signing-for-android)용 릴리스 인증서와 키스토어를 사용한 서명 설정, 바이너리 빌드를 안내합니다.

특정 플랫폼에 배포하려면 아래 해당 섹션을 참조하십시오:

* [Android 배포](#android-distributing)
* [iOS 배포](#ios-distributing)

### App Store Connect에 iOS 앱 배포 {#ios-distributing}

iOS 앱에 서명했는지 여부에 따라 빌드의 출력은 각각 *IPA* 또는 *XCArchive* 파일이 됩니다. *IPA* 파일은 App Store Connect에 직접 배포하여 추가 처리할 수 있습니다. *XCArchives*는 디바이스에 배포하거나 Apple App Store에 업로드하기 전에 Xcode에서 서명하고 *IPA*를 생성해야 합니다.

#### 서명된 IPA 배포

앱을 App Store Connect에 업로드하려면 App Store Connect 웹사이트를 사용하여 새 앱을 설정해야 합니다. 거기서 앱을 빌드하는 데 사용한 **app name**과 **app id**를 사용하십시오. 자세한 지침은 [App Store Connect Guide to adding a new app](https://help.apple.com/app-store-connect/en.lproj/static.html#devbec4892b7)을 참조하십시오.

iOS 앱에 서명하면 *IPA* 파일이 생성됩니다. Apple App Store에 *IPA*를 업로드하기 위해 Xcode에는 커맨드라인 도구가 포함되어 있습니다. Xcode가 설치되어 있고 추가 커맨드라인 도구가 설정되어 있다고 가정하면 *IPA*를 업로드하는 명령은 다음과 같습니다:

```text
xcrun altool --upload-app --type ios --file "path/to/application.ipa"
--username "YOUR_APPSTORE_USER_EMAIL" --password "YOUR_APPSTORE_PASSWORD"
```

`file "path/to/application.ipa"`를 IPA 파일의 절대 경로로, `username`을 개발자 앱 스토어 이메일 주소로, `password`를 Apple App Store 비밀번호로 바꾸십시오.

이 명령은 먼저 IPA가 올바르게 패키징되어 출시 준비가 되었는지 확인한 다음 추가 처리를 위해 TestFlight에 업로드합니다.

#### 서명되지 않은 XCArchive 배포

로컬 서명은 디바이스에서만 앱을 테스트하려는 경우, 또는 배포 인증서가 없고 개발자 인증서로 서명할 때 App Center의 빌드 시간이 부족한 경우에 유용합니다.

디바이스 또는 Apple App Store에 *nativeTemplate.xcarchive*를 배포하려면 Apple 개발자 계정과 개발팀이 필요합니다. 사용 가능한 경우 다음을 수행하십시오:

1. Xcode를 사용하여 *nativeTemplate.xcarchive* 파일을 더블 클릭하십시오. 내장된 **Application Loader** 소프트웨어로 열어야 합니다.
1. *Distribute App* 버튼을 클릭하여 로컬 서명 흐름을 시작하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-1.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. **Development**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-2.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. **Development Team**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-3.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. **Development distribution options**를 구성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-4.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. 재서명 옵션을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-5.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. *.ipa* 내용을 검토하고 **Export**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-6.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

축하합니다. 이제 서명된 *.ipa* 파일이 있습니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-7.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

### Google Play에 Android 앱 배포 {#android-distributing}

서명된 Android APK는 Google Play Store에 직접 업로드할 수 있습니다. 새 앱 설정 및 바이너리 업로드에 대한 자세한 내용은 Google의 [Uploading an app](https://support.google.com/googleplay/android-developer/answer/113469?hl=en) 가이드를 따르십시오.

## 추가 읽기

* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)

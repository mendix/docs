---
title: "모바일 앱 스토어에 Mendix 하이브리드 모바일 앱 게시"
linktitle: "앱 스토어에 하이브리드 모바일 앱 게시"
url: /howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/
weight: 20
aliases:
    - /refguide8/publish-packages-to-mobile-stores.html
    - /refguide8/publish-packages-to-mobile-stores
---
## 소개

{{% alert color="warning" %}}
클라우드에서 하이브리드 앱을 빌드하는 것은 Adobe의 PhoneGap Build 서비스를 사용합니다. Adobe가 더 이상 이 서비스를 유지 관리하지 않으므로, 클라우드에서 하이브리드 앱을 빌드하고 앱 스토어에 게시하는 것은 더 이상 불가능합니다.

하이브리드 앱을 빌드하고 게시하려면 로컬 빌드에 대한 정보를 위해 [Mendix 하이브리드 앱 로컬 빌드 방법](/howto8/mobile/build-hybrid-locally/)을 참조하십시오.

앱 스토어에 앱을 게시하려면 Mendix는 대신 네이티브 iOS 앱을 빌드하는 것을 권장합니다. 자세한 내용은 [네이티브 앱 빌드 방법](/howto8/mobile/build-native-apps/)을 참조하십시오.
{{% /alert %}}

Mendix 하이브리드 모바일 애플리케이션 개발을 완료한 후에는 Apple iOS 및 Google Android와 같은 모바일 플랫폼용 앱으로 제공하고 싶을 것입니다. 플랫폼별 설치 패키지를 생성할 수 있습니다. 플랫폼별 설치 패키지 배포에 대한 자세한 내용은 [Mobile App](/developerportal/deploy/mobileapp/)을 참조하십시오.

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 앱 서명 키 설정
* 앱 패키징 프로세스 완료
* 모바일 테스트 디바이스에 iOS 또는 Android 앱 설치
* Apple App Store 또는 Google Play Store에 앱 업로드

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 무료 앱 또는 라이선스가 있는 클라우드 노드에서 Mendix Cloud에 모바일 지원이 포함된 Mendix 앱이 실행 중이어야 합니다
* Adobe PhoneGap Build 계정이 있어야 합니다([여기](https://helpx.adobe.com/experience-manager/kb/adobe-phonegap-end-of-service.html)에서 무료로 생성할 수 있습니다)

Apple App Store에 앱을 게시하려면 다음을 수행하십시오:

* [Apple Developer Account](https://developer.apple.com/register/index.action)에 등록하십시오
* 생성될 iOS 패키지를 테스트하기 위한 iOS 디바이스(iPhone 또는 iPad)가 있어야 합니다
* 모바일 테스트 디바이스가 활성화된 iOS 배포 인증서와 프로비저닝 파일이 있어야 합니다
* 모바일 테스트 디바이스에 생성될 iOS 패키지를 배포하기 위해 컴퓨터에 Apple iTunes가 설치되어 있어야 합니다

Google Play Store에 앱을 게시하려면 다음을 수행하십시오:

* 생성될 APK 패키지를 테스트하기 위한 Android 디바이스가 있어야 합니다

## 패키징 프로세스 시작{#starting-the-packaging-process}

패키징 프로세스를 시작하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)를 여십시오.
2. 게시하려는 Mendix 앱의 앱으로 이동하십시오.
3. 앱의 사이드 메뉴에서 **Deploy > Mobile app** 항목으로 이동하십시오.
4. **Publish App for Mobile App Stores** 페이지가 표시되며, 여기서 하이브리드 모바일 앱에 대한 몇 가지 옵션을 설정해야 합니다.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/mobile-app-page.png" alt="mobile app page" class="no-border" >}}

5. **App Info** 탭에서 앱에 대한 다음 설정을 구성하십시오:</br>
    1. 앱 스토어와 디바이스에서 앱에 표시될 이름을 입력하십시오. **Name**은 Apple 인증서에 설정된 이름과 일치해야 합니다.</br>
    1. 앱의 고유 **App Identifier**를 설정하십시오. **App Identifier**는 Apple 인증서에 설정된 것과 일치해야 합니다.</br>
    1. 앱이 푸시 알림을 사용하지 않는 경우 체크박스를 해제하여 **Push Notifications** 권한을 비활성화하십시오.

6. 지원하려는 플랫폼을 선택하십시오.
7. 선택적으로, 다른 플랫폼에 대한 탭에서 사용자 지정 브랜드 앱 아이콘과 스플래시 화면을 업로드하십시오. 해당 탭은 **App Info** 탭 옆에 있습니다.

    {{% alert color="info" %}}이미지를 업로드하지 않으면 표시된 기본 Mendix 브랜드 이미지가 계속 사용됩니다.{{% /alert %}}

8. 녹색 **Publish for Mobile App Stores** 버튼을 클릭하십시오. **Build Mobile App Store Packages** 페이지가 표시됩니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/build-mobile-packages.png" alt="build mobile app store packages" class="no-border" >}}

9. 게시할 위치를 선택하십시오:

    * 무료 앱의 경우 유일한 옵션은 **Sandbox**입니다
    * 라이선스가 있는 클라우드 노드에서 실행되는 앱의 경우 **Test**, **Acceptance**, **Production** 중에서 선택할 수 있습니다(클라우드 노드에서 사용 가능한 항목에 따라 다름)
    * [Flexible Environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)를 사용하는 앱의 경우 환경 드롭다운 목록에서 환경을 선택할 수 있습니다.

10. 패키지 빌드 방법의 기본 선택인 **Build Mobile App Store packages for me by sending the build configuration to Adobe PhoneGap Build**를 그대로 두십시오. 
    대안 옵션을 사용하여 PhoneGap Build 패키지를 수동으로 다운로드한 다음, 검사, 수정 및 Adobe PhoneGap Build에 수동으로 업로드할 수 있습니다(자세한 내용은 [로컬 빌드 패키지 사용자 지정](/howto8/mobile/customizing-phonegap-build-packages/)을 참조하십시오). 이는 대부분의 시나리오에서 불필요합니다.

생성된 패키지를 자유롭게 사용자 지정하여 추가 PhoneGap/Cordova 플러그인을 활성화하거나 앱에 추가 리소스를 추가할 수 있습니다. 자세한 내용은 [로컬 빌드 패키지 사용자 지정](/howto8/mobile/customizing-phonegap-build-packages/)을 참조하십시오.

자세한 지침은 [hybrid-app-template GitHub 저장소](https://github.com/mendix/hybrid-app-template)를 참조하십시오.

클라우드에서 하이브리드 앱을 빌드하는 것에 대한 자세한 컨텍스트와 iOS 앱의 다른 옵션에 대해서는 [하이브리드 앱 빌드 방법](/howto8/mobile/build-hybrid-apps/)을 참조하십시오.

## 앱 서명 키 설정

**PhoneGap Build: Signing Key Required** 페이지에서는 PhoneGap Build 웹사이트로 이동하여 앱 서명 키를 설정하라고 요청합니다. 앱 서명 키를 설정하려면 다음 단계를 따르십시오:

1. **Log in to PhoneGap Build**를 클릭하십시오. PhoneGap의 [apps 탭](https://helpx.adobe.com/experience-manager/kb/adobe-phonegap-end-of-service.html)에서 새 페이지가 열립니다. 여기서 Mendix Portal이 앱을 위해 생성한 PhoneGap Build 앱을 볼 수 있습니다. 앱 이름은 위의 [패키징 프로세스 시작](#starting-the-packaging-process) 섹션의 **App Info**에서 정의한 것과 같습니다.
2. 계정에서 앱에 대한 앱 서명 키를 설정하십시오.
3. 페이지 오른쪽 상단의 아바타 아이콘을 클릭한 다음 **Edit account**를 클릭하여 앱 빌드 방법을 구성하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/edit-account.png" alt="edit account" class="no-border" >}}

## 앱 준비 및 게시

특정 플랫폼에 게시하려면 이 사용법 가이드의 다음 섹션을 참조하십시오:

* [iOS 준비 및 게시](#publishing-for-ios)
* [Android 준비 및 게시](#publishing-for-android)

## iOS 준비 및 게시{#publishing-for-ios}

Apple은 [Apple App Store에 iOS 앱 게시](https://developer.apple.com/programs/ios/distribute.html)에 대한 일반 정보를 제공합니다. 앱을 업로드하기 전에 [App Review Guidelines](https://developer.apple.com/app-store/review/)를 확인하여 앱이 승인될 수 있는지 확인하십시오. Apple Developer Account가 필요합니다. 계정이 없는 경우 [Apple Developer로 등록](https://developer.apple.com/register/index.action)하십시오.

1. PhoneGap Build에서 아바타 아이콘을 클릭한 다음 **Edit account**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/edit-account.png" alt="edit account" class="no-border" >}}

2. **Signing Keys** 탭을 클릭하고 **iOS** 아래에서 **add a key**를 클릭하십시오: 

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/add-a-key.png" alt="add a key" class="no-border" >}}

3. 인증서 파일과 프로비저닝 프로필 파일을 업로드하라는 대화 상자가 표시됩니다. 이 파일들은 Apple에서 받을 수 있습니다. 인증서는 *.p12* 파일이고 프로비저닝 프로필은 *.mobileprovision* 파일입니다. 자세한 내용은 [앱 서명 키 관리 참조 가이드](/refguide8/managing-app-signing-keys/)를 참조하십시오.
4. 쉽게 인식할 수 있는 제목을 키에 부여하고 파일을 업로드하십시오.
5. 키와 같은 행에 있는 노란색 배경의 자물쇠를 클릭하고 암호를 입력하십시오. 이제 키는 1시간 동안 빌드에 사용할 수 있습니다. 1시간 후에는 암호를 다시 입력해야 합니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/yellow-lock.png" alt="yellow lock" class="no-border" >}}

6. 페이지 상단의 **Apps**를 클릭하여 앱 개요를 확인하십시오. 앱의 이름이나 로고를 클릭하여 앱 세부 정보를 확인하십시오.
7. 앱에 맞는 올바른 키를 선택하십시오. **iOS** 텍스트 옆에 **No key selected** 옵션이 있는 드롭다운 메뉴가 있습니다. 드롭다운 메뉴에서 **unlocked** 아래에 나열된 새로 업로드한 키를 선택하십시오.

이제 PhoneGap Build 계정이 준비되었으며 패키징 프로세스를 계속할 수 있습니다.

### 패키징 프로세스 완료

Mendix Portal에서 빌드 프로세스를 완료하려면 다음 단계를 따르십시오:

1. **Adobe PhoneGap Build** 페이지를 닫고 원래의 **Mendix Developer Platform** 페이지로 돌아가십시오.
2. **Restart build job**을 클릭하여 패키징 프로세스를 다시 시작하십시오.</br> 
    * PhoneGap Build가 앱을 빌드하는 동안 **Building** 상태를 표시하는 **Building Mobile App Store Packages** 페이지가 표시됩니다. 앱이 준비되면 페이지 상태가 **Done**으로 표시됩니다.
3. **Download iOS package** 버튼을 클릭하고 패키지(*.ipa* 파일)를 컴퓨터에 저장하십시오.

### 모바일 테스트 디바이스에 iOS 앱 설치

이제 모바일 테스트 디바이스에 앱을 배포할 수 있습니다. 이 단계에는 Mac 모바일 테스트 디바이스를 사용해야 합니다. Apple iTunes를 사용하면 쉽게 할 수 있습니다.

모바일 테스트 디바이스에 iOS 앱을 설치하려면 다음 단계를 따르십시오:

1. Apple 모바일 테스트 디바이스를 컴퓨터에 연결하십시오. 두 디바이스 모두 신뢰를 확인하는 대화 상자가 표시됩니다. 디바이스에서 **Continue**를 클릭하고 모바일 디바이스에서 **Trust This Computer?**를 눌러 진행하십시오.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/appletrust.png" alt="trust dialog" class="no-border" >}}

2. iTunes를 열고 iOS 모바일 테스트 디바이스를 컴퓨터에 연결하십시오.
3. 이전에 다운로드한 *.ipa* 패키지 파일을 선택하고 iTunes 왼쪽 메뉴의 모바일 테스트 디바이스 **Devices** 섹션으로 드래그하십시오. *.ipa* 파일을 거기에 놓아 모바일 테스트 디바이스에 설치하십시오.
4. 기존 버전이 있는 경우 iTunes에서 기존 버전을 교체할 것인지 묻습니다. 있다면 교체하십시오. 
5. 앱이 앱 목록에 표시됩니다. 앱 옆의 **Install** 버튼을 클릭하십시오.
6. 화면 하단의 **Apply**를 클릭하여 실제 설치를 실행하십시오.

이제 디바이스에서 앱이 보입니다. 앱을 열고 일반 사용자 계정으로 로그인하십시오. 아직 설정하지 않았다면 데스크톱 브라우저의 Mendix 앱에서 설정할 수 있습니다.

### Apple App Store에 iOS 앱 업로드

1. Apple의 [Add an app to your account](https://help.apple.com/app-store-connect/#/dev2cd126805) 튜토리얼을 따라 계정에 앱 항목을 추가하십시오.
2. 계정에 새 앱을 추가한 후 Apple의 [View and edit app information](https://help.apple.com/app-store-connect/#/dev97865727c) 튜토리얼을 따라 새 앱 항목을 설명하십시오. 왼쪽 메뉴의 **Enter app information** 카테고리 아래의 다른 페이지도 앱에 해당하는 경우 참조하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/ios-enter-app-info.png" alt="enter app information" class="no-border" >}}

3. Apple의 [Uploading builds overview](https://help.apple.com/app-store-connect/#/dev82a6a9d79)를 따라 App Store Connect에 앱 빌드를 업로드하십시오.
4. Apple의 [Choose the build before you submit to review](https://help.apple.com/app-store-connect/#/dev7cbda8c55)를 사용하여 App Review에 제출할 빌드를 선택하십시오.

### 테스트

[TestFlight beta testing overview](https://help.apple.com/app-store-connect/#/devdc42b26b8) 문서에 따라 앱을 테스트하여 앱이 예상대로 작동하는지 확인하십시오. TestFlight 베타 테스트를 사용하면 어떤 사용자가 앱을 테스트할 수 있는지 제어하고 피드백을 수집할 수 있습니다.

### 게시

Apple의 [Overview of publishing an app](https://help.apple.com/app-store-connect/#/dev34e9bbb5a) 및 왼쪽 메뉴의 **Publish on the App Store** 카테고리에 있는 후속 문서를 따라 앱을 게시하십시오:

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/ios-publishing-an-app.png" alt="publish on the app store" class="no-border" >}}

## Android 준비 및 게시{#publishing-for-android}

Android 앱을 게시하려는 경우 Google의 [Android 앱 게시 프로세스](https://developer.android.com/tools/publishing/publishing_overview.html) 개요를 읽으십시오. 앱 스토어에 앱을 제출하기 전에 [출시 체크리스트를 검토](https://developer.android.com/distribute/tools/launch-checklist.html)하십시오.

앱을 테스트만 하는 경우 키스토어를 생성할 필요가 없습니다. 아래의 다음 섹션 [Android 바이너리(APK)를 위한 모바일 테스트 디바이스 활성화](#download-apk)를 계속 진행할 수 있습니다. 

Android 앱을 게시하려면 먼저 *앱 서명 키 관리*의 [Android](/refguide8/managing-app-signing-keys/#android) 섹션을 완료해야 합니다. 이 섹션에서는 키스토어를 생성하고 PhoneGap Build에 업로드하는 방법을 설명합니다.

### Android 바이너리(APK)를 위한 모바일 테스트 디바이스 활성화{#download-apk}

빌드를 생성한 후 다운로드 링크 또는 QR 코드를 사용하여 결과 APK를 다운로드할 수 있습니다. APK 설치를 활성화하려면:

1. 디바이스의 **Settings**를 여십시오.
2. **Apps and notifications**를 열거나, Samsung Galaxy의 경우 **Biometrics and Security**를 여십시오.
3. **Install unknown apps**를 탭하십시오(일부 디바이스에서는 먼저 **Special access**를 탭해야 할 수 있습니다).
4. APK 파일을 다운로드할 때 사용할 브라우저를 선택하십시오.
5. **Allow from this source** 스위치 또는 체크박스를 활성화하십시오.
6. 메시지가 표시되면 **OK** 버튼을 탭하십시오.

### APK 설치

APK를 설치하려면 모바일 디바이스의 웹 브라우저를 사용하여 APK 파일을 다운로드하거나 USB 코드를 사용하여 APK 파일을 Android 디바이스로 전송할 수 있습니다.

#### 옵션 1: 디바이스 브라우저 사용

모바일 테스트 디바이스의 브라우저를 사용하여 PhoneGap 설치 페이지로 이동하여 설치를 계속하고 다음 지침을 따르십시오:

1. Android 링크를 탭하여 APK를 받으십시오.
2. 브라우저의 **Downloads** 폴더로 이동하여 열고 다운로드한 앱을 탭하십시오.
3. 다음 화면에서 **Install** 버튼을 탭하여 설치하십시오.

Android의 **Download** 폴더에서 직접 APK 파일을 설치하려면:

1. **Back** 버튼을 탭하여 앱 목록을 확인하십시오.
2. APK 파일을 설치하는 데 사용할 파일 관리자 앱을 탭하십시오.
3. **Allow** 스위치 또는 체크박스를 탭하십시오.
4. 메시지가 표시되면 **OK** 버튼을 탭하십시오.

#### 옵션 2: USB 코드 사용

앱을 설치하는 두 번째 방법은 USB를 통해 디바이스를 컴퓨터에 연결하는 것입니다. 이 방법으로 디바이스의 파일 관리자 앱에서 APK를 설치하려면:

1. Google의 [컴퓨터와 Android 디바이스 간 파일 전송](https://support.google.com/android/answer/9064445?hl=en) 지침을 따라 디바이스에 APK를 전송하십시오. APK를 전송한 폴더를 기억하십시오.
2. 휴대폰의 파일 관리자를 열고 APK를 전송한 폴더로 이동한 다음 APK 파일을 탭하여 여십시오.
3. **Install** 버튼을 탭하십시오.
4. 메시지가 표시되면 **Done** 버튼을 탭하십시오. 이제 **App Drawer**를 통해 또는 설치 완료 후 **Open** 버튼을 탭하여 설치된 앱에 접근할 수 있습니다.

### 앱 테스트

새 앱을 사용하여 모든 페이지, 버튼 및 기능이 의도한 대로 작동하는지 확인하십시오. [BrowserStack](https://www.browserstack.com/)과 같은 자동화 소프트웨어를 사용하거나 수동으로 앱을 테스트할 수 있습니다. 

### Play Console에 업로드

Google의 [Upload your app to the Play Console](https://developer.android.com/studio/publish/upload-bundle) 사이트의 지침을 따라 Mendix 앱을 Play Console에 업로드하십시오. Play Console에 업로드하기 전에 Google 계정으로 로그인하고, 개발자 계약에 동의하고, 등록비를 지불하고, 계정 세부 정보를 완료하는 [가입 단계](https://play.google.com/apps/publish/signup/)를 완료해야 합니다. 이러한 요구 사항을 충족하면 Play Console에 [앱을 업로드](https://support.google.com/googleplay/android-developer/answer/7159011)할 수 있습니다.

### 릴리스 생성, 검토 및 출시

Google의 [Prepare and roll out a release](https://support.google.com/googleplay/android-developer/answer/7159011)의 단계를 따라 앱 릴리스를 생성, 준비, 검토 및 출시하십시오. 에뮬레이터 대신 물리적 Android 디바이스를 사용하여 앱을 테스트하는 자세한 지침은 Google의 [Run apps on a hardware device](https://developer.android.com/studio/run/device)를 참조할 수도 있습니다.

## 추가 읽기

* [첫 번째 하이브리드 모바일 앱 배포](/howto8/mobile/deploy-your-first-hybrid-mobile-app/)
* [하이브리드 모바일 앱 디버그](/howto8/mobile/debug-a-mobile-app/)
* [푸시 알림 포함](/howto8/mobile/push-notifications/)

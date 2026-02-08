---
title: "Native Builder CLI로 첫 번째 Mendix 네이티브 모바일 앱 배포"
linktitle: "Native Builder CLI로 모바일 앱 배포"
url: /howto8/mobile/deploying-native-app-cli/
weight: 20
description: Native Builder CLI를 사용하여 클라우드에서 Mendix 네이티브 앱을 빌드하는 방법을 설명합니다.
---

{{% alert color="warning" %}}
Native Builder CLI는 Studio Pro와 통합되는 UI 도구인 Mendix Native Mobile Builder로 대체되었습니다. 앱 배포 방법에 대해서는 [여기](/howto8/mobile/deploying-native-app/)에서 자세히 알아보십시오.
{{% /alert %}}

{{% alert color="warning" %}}
Native Builder v3.2.2로 업데이트하십시오. Native Builder v3.2.2에는 GitHub가 기본 저장소 브랜치 이름으로 **master** 대신 **main**을 사용하도록 전환한 것에 대응하는 데 필요한 수정 사항이 포함되어 있습니다. 
{{% /alert %}}

## 소개

이 사용법 가이드에서는 빈 상태에서 디바이스에서 실행되는 앱까지 만드는 방법을 알려드립니다.

모든 Native Builder 프로젝트에는 구성이 있습니다. 이러한 구성은 앱을 준비한 다음 각각 App Center와 GitHub에서 빌드를 생성하는 데 유용합니다. 구성은 프로덕션 디바이스에 이미 제공된 앱을 업데이트하는 데에도 중요합니다. Native Builder의 기능에 대한 자세한 내용은 [Native Builder 참조 가이드](/refguide8/native-builder/)를 참조하십시오. 네이티브 빌드 프로세스는 로컬 애플리케이션을 사용하여 GitHub에 저장소를 생성하고, App Center가 GitHub 저장소를 사용하여 *.apk*를 빌드한 다음 해당 *.apk*를 로컬 저장소에 다운로드합니다. 

## 사전 요구 사항 {#prerequisites}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)를 읽고 Mendix Studio Pro로 애플리케이션을 생성, 스타일링 및 디버그하는 방법을 확인하십시오
* Studio Pro를 통해 네이티브 모바일 앱을 클라우드에 배포하고 배포된 애플리케이션의 클라우드 주소를 준비하십시오
* Windows의 명령줄 인터페이스(CLI) 프로그램 `cmd` 사용 방법을 숙지하십시오
* [Java JDK 11](https://adoptopenjdk.net/)을 설치하십시오(Studio Pro가 설치되어 있으면 *C:\Program Files\AdoptOpenJDK*에 이미 JDK 11이 있어야 합니다)
* Native Builder [실행 파일](https://www.dropbox.com/sh/hpw7sshut9bco68/AABackrr75rPSgW7u5LBMkMra?dl=0)을 원하는 폴더에 다운로드하고 모든 내용을 압축 해제하십시오
* Mendix 8.0에서는 v1.0.0을 사용하십시오
* Mendix 8.1.0 이상에서는 v2.0.0을 사용하십시오
* Mendix 8.3.0 이상에서는 v3.0.0을 사용하십시오
* [GitHub](https://github.com/) 계정이 있어야 합니다.
* [App Center](https://appcenter.ms/) 계정이 있어야 합니다. 정기적으로 빌드하고 배포할 예정이라면 유료 계정을 권장합니다.

### 플랫폼별 사전 요구 사항

iOS 디바이스에서 테스트용으로 앱을 배포하려면 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Apple Developer Account에 등록하십시오
* 생성될 iOS 패키지를 테스트할 iOS 디바이스가 있어야 합니다
* 디바이스가 활성화된 iOS 배포 인증서와 프로비저닝 파일이 있어야 합니다
* iOS 패키지를 테스트 디바이스에 배포하기 위해 컴퓨터에 Xcode가 설치되어 있어야 합니다

Android 디바이스에서 테스트용으로 앱을 배포하려면 Android 디바이스가 준비되어 있어야 합니다.

## 토큰 얻기

Native Builder를 사용하려면 먼저 GitHub 및 App Center에 인증하기 위한 토큰을 받아야 합니다. 이미 GitHub 및 App Center용 토큰이 있는 경우 이 섹션을 반복할 필요가 없습니다.

{{% alert color="info" %}}
Native Builder는 GitHub 및 App Center와 통신해야 합니다. 따라서 방화벽 권한이 Native Builder를 제한하지 않는지 확인하십시오.
{{% /alert %}}

### GitHub 토큰 {#github-token}

1. [GitHub](https://github.com/)로 이동하여 로그인하십시오.
2. 페이지 오른쪽 상단의 프로필 사진을 클릭하여 [Settings](https://github.com/settings/profile)로 이동하십시오.
3. 왼쪽 메뉴 하단의 [Developer settings](https://github.com/settings/apps)를 클릭하십시오.
4. [Personal access tokens](https://github.com/settings/tokens)로 이동한 다음 **Generate new token**을 클릭하여 새 개인 접근 토큰을 생성하십시오.
5. **Note** 필드에 *Native Builder.*를 입력하십시오.
6. **Select scopes** 아래에서 **repo** 및 **workflows**를 선택하십시오.
7. **Generate token**을 클릭하십시오.
8. 토큰을 안전한 곳에 저장하십시오. 다시 볼 수 없습니다. 분실한 경우 새 토큰을 생성하고 이전 토큰을 삭제해야 합니다.

### App Center 토큰 {#appcenter-token}

1. [App Center](https://appcenter.ms/apps)로 이동하여 로그인하십시오.
2. 오른쪽 상단의 프로필 아이콘을 클릭한 다음 **Settings**, **Account Settings**를 클릭하십시오.
3. **API Tokens** 탭에서 **New API token**을 클릭하십시오.
4. 토큰에 대한 설명을 추가하고 **Full Access**를 선택한 다음 **Add new API token**, **New API Token**을 클릭하십시오.
5. 이 토큰도 안전한 곳에 저장하십시오. 다시 볼 수 없습니다. 분실한 경우 새 토큰을 생성하고 이전 토큰을 삭제해야 합니다.

## 프로젝트 준비 {#preparing}

Native Builder는 CLI에서 빌드의 세부 사항을 지정하기 위해 `prepare` 명령과 매개변수 라인을 사용합니다. 아래는 전체 매개변수 세트가 있는 `prepare` 명령의 예입니다:

```bash
native-builder.exe prepare --project-name CoolApp --java-home "C:\Program Files\Java\jdk-11.0.3" --project-path "Y:\Documents\Mendix\CoolApp\CoolApp.mpr" --mxbuild-path "C:\Program Files\Mendix\8.6.0.715\modeler\mxbuild.exe" --github-access-token b609183aa226a8c2d962700be7a387bd7776e986 --appcenter-api-token 440725eb1311ddfced62894a4d23fc90843370c7 --appcenter-organization "cool-organization" --runtime-url "https://coolapp.mendixcloud.com" --app-name "My Cool App" --app-identifier "com.mendix.coolapp" --mendix-version "8.6.0"
```

{{% alert color="info" %}}
유효하려면 `app-identifier`가 특수 문자 없이 소문자여야 합니다.
{{% /alert %}}

`prepare` 명령은 다음을 수행합니다:

* 프로젝트의 소스 코드와 구성을 보관할 비공개 GitHub 저장소를 생성합니다
* Android 및 iOS에 대해 각각 App Center에 두 개의 다른 프로젝트를 생성합니다
* 제공된 경우 기본 앱 아이콘과 스플래시 화면을 수정합니다
* 제공된 경우 Android 및 iOS 모두에 대해 애플리케이션 이름과 식별자를 수정합니다
* 제공된 경우 Android 및 iOS 모두에 대해 Runtime URL을 수정합니다

이제 첫 번째 `prepare` 명령을 실행하십시오:

1. CLI를 여십시오.
2. Native Builder 내용을 압축 해제한 폴더로 디렉토리를 변경하십시오.
3. 처음으로 `prepare`를 실행하면 다음 경고가 표시됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/native-builder-authentication-failure.png" alt="App Center authentication failure" class="no-border" >}}

    이 경고는 App Center의 보안 정책의 일부입니다. 

4. App Center의 [대시보드](https://appcenter.ms/)를 방문하여 Native Builder가 생성한 애플리케이션을 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/appcenter-apps.png" alt="App Center Applications" class="no-border" >}}

경고를 해결하려면 다음 단계를 완료하십시오(iOS와 Android 앱이 각각 있는 경우 둘 다 수행해야 합니다):

1. [App Center](https://appcenter.ms/)로 이동하십시오.
2. 새로 생성된 앱을 선택하십시오.
3. 왼쪽 패널에서 **Build**를 선택하십시오.
4. 저장소 서비스와 계정을 링크할 수 있는 화면이 표시됩니다.
5. **GitHub**를 선택하십시오.
6. 아직 로그인하지 않은 경우 GitHub 계정에 로그인하라는 메시지가 표시됩니다. 요청된 경우 로그인하십시오.
7. 권한 요청에서 승인을 선택하십시오.
8. 연결하려는 저장소를 선택하십시오.
9. App Center 계정으로 다시 리디렉션됩니다. 저장소의 브랜치가 이제 빌드 페이지에 나열됩니다.

{{% alert color="info" %}}
`prepare` 명령을 실행하는 동안 오류가 발생하면 CLI를 관리자로 실행해 보십시오.
{{% /alert %}}

{{% alert color="info" %}} 무료 App Center 계정은 빌드 시간이 부족할 수 있습니다. 해결 방법은 다른 GitHub 접근 토큰으로 다른 조직을 추가하는 것입니다. {{% /alert %}}

앱을 성공적으로 준비했으며 다음 섹션에서 빌드를 만들 것입니다.

## 첫 번째 빌드 만들기 {#first-build}

Native Builder에서 첫 번째 빌드를 시작하려면 다양한 매개변수가 포함된 CLI 명령을 실행합니다. 매개변수에 대한 자세한 내용은 *Native Builder* 가이드의 [Commands](/refguide8/native-builder/#commands) 섹션을 참조하십시오. 일부 매개변수는 선택 사항이지만 `--project-name` 매개변수와 `--build-number` 매개변수 두 가지는 필수입니다.

다음은 위에서 언급한 두 가지 필수 매개변수와 선택적 `--app-version` 명령을 사용한 빌드 명령 예입니다(각 릴리스에 [새 앱 버전](https://semver.org/)을 포함하는 것이 모범 사례입니다):

```bash
native-builder.exe build --project-name CoolApp --build-number 1 --app-version 0.1.0
```

이제 직접 첫 번째 빌드를 만들 차례입니다:

1. CLI를 여십시오.
2. Native Builder 디렉토리에 있는지 확인하십시오.
3. 예제 텍스트를 자신의 정보로 대체하여 다음 명령을 작성하십시오:

    ```text
    native-builder.exe build --project-name {ExampleName} --build-number {1} --app-version {0.1.0}
    ```

4. 명령을 실행하십시오.

이 명령은 다음을 수행합니다:

* Studio Pro에서 네이티브 모바일 앱의 JavaScript 배포 번들과 이미지를 생성합니다
* GitHub에 새 빌드 브랜치를 생성하고 App Center에서 빌드 프로세스를 시작합니다

Java 클래스의 버전 충돌을 인용하며 `build` 명령이 실패하면 다음을 시도하십시오:

1. 배포 디렉토리를 지우십시오.
2. Studio Pro에서 새 빌드를 완료하십시오.
3. Native Builder에서 `build` 명령을 다시 실행하십시오.
4. `--java-home` 파일 경로의 버전이 Studio Pro에서 사용 중인 버전과 일치하는지 확인하십시오.

### 빌드 서명 {#signing-a-build}

기본적으로 App Center 빌드는 서명되지 않으며 Google Play Store 또는 Apple App Store에 릴리스할 수 없습니다. 앱을 릴리스하려면 App Center에 서명 키를 제공해야 합니다. 서명 키는 앱의 진위를 증명하고 위조를 방지합니다. 이러한 키를 얻는 방법에 대한 자세한 내용은 [앱 서명 키 관리 참조 가이드](/refguide8/managing-app-signing-keys/)를 참조하십시오. 

Android의 경우 Google Play Store에 앱을 게시할 의도가 없으면 이 섹션을 건너뛸 수 있습니다. iOS의 경우 이 단계에서 이미 설치 가능한 iOS App Store Package(*.ipa*)를 준비합니다. 이 섹션의 지침 없이는 서명되지 않은 iOS 앱(*.xcarchive*)을 디바이스에 배포하거나 Apple App Store에 배포하려면 Xcode를 사용하여 수동으로 서명해야 합니다.

{{% alert color="info" %}}
현재 Native Builder는 한 브랜치에서 다른 브랜치로 서명 키를 복사할 수 없습니다. 따라서 릴리스하려는 각 브랜치에 대해 서명을 설정해야 합니다. Native Builder로 빌드할 때 제공된 빌드 번호는 **{build/#number}** 형식의 새 브랜치를 만드는 데 사용됩니다. 릴리스할 준비가 되면 이 문서에 따라 결정한 빌드 번호 브랜치에 대해 서명을 설정하고 해당 브랜치의 빌드 번호를 사용하여 Native Builder로 다시 빌드하십시오.
{{% /alert %}}

App Center를 사용하여 앱에 서명하려면 다음을 수행하십시오:

1. [App Center](https://appcenter.ms/apps)로 이동하십시오.
2. 구성하려는 애플리케이션을 선택하십시오.
3. 왼쪽 패널에서 **Build**를 선택하십시오.
4. 목록에서 구성하려는 **branch**를 선택하십시오.

다음 단계는 구성하려는 앱 유형에 따라 다릅니다.

#### iOS 빌드 서명

1. 오른쪽 상단의 **Wrench icon**을 클릭하여 **Build configuration** 패널을 여십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/ios-build-wrench.png" alt="Build Wrench"   width="400"  class="no-border" >}}

2. **Sign builds** 토글을 켜십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/ios-sign-upload.png" alt="iOS sign upload"   width="400"  class="no-border" >}}

3. 모바일 프로비저닝 프로필을 업로드하십시오. 무료 계정의 경우 **Developer** 프로필로 서명할 때 App Center에 30분 제한이 있으므로 **Distribution** 프로필이 가장 좋습니다.
4. *.p12* 인증서를 업로드하십시오.
5. *.p12* 인증서를 내보낼 때 사용한 비밀번호를 제공하십시오.
6. **Save**를 클릭하거나 즉시 빌드하려면 **Save and build**를 클릭하십시오.

#### Android 빌드 서명

1. 오른쪽 상단의 **Wrench icon**을 선택하여 **Build configuration** 패널을 여십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/android-build-wrench.png" alt="Build Wrench"   width="400"  class="no-border" >}}

2. **Build Variant** 드롭다운 메뉴에서 **release**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/android-release-variant.png" alt="Android release variant"   width="400"  class="no-border" >}}

3. **Sign builds**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/android-sign-upload.png" alt="Android sign upload"   width="400"  class="no-border" >}}

4. 키스토어 파일을 업로드하십시오.
5. 키스토어 비밀번호를 제공하십시오.
6. 키의 별칭 이름을 제공하십시오.
7. 키의 별칭 비밀번호를 제공하십시오.
8. **Save**를 클릭하거나 즉시 빌드하려면 **Save and build**를 클릭하십시오.

마지막으로, 이 브랜치의 빌드를 수동으로 시작하거나 이전과 동일한 빌드 번호로 `build` 명령을 다시 실행하십시오:

```bash
native-builder.exe build --project-name CoolApp --build-number 1 --app-version 0.1.0
```

이렇게 하면 Native Builder가 이미 App Center에 구성된 동일한 키를 사용하여 다시 빌드할 수 있습니다.

### Native Builder 및 App Center 빌드 단계

Native Builder 빌드를 시작한 후 다음 중 일부 또는 전부를 볼 수 있습니다:

* Native Builder가 빌드를 시작하는 모습:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/native-builder-starting-build.png" alt="Native Builder starting a build"   width="400"  class="no-border" >}}

* App Center가 빌드를 시작하는 모습:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/appcenter-building.png" alt="App Center starting a build"   width="400"  class="no-border" >}}

* 성공적인 App Center 빌드:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/appcenter-successful.png" alt="Successful App Center build"   width="400"  class="no-border" >}}

빌드 시간이 초과되면 아래의 [Android 로컬 서명](#android-local-signing) 및 [iOS 로컬 서명](#ios-local-signing)에 설명된 대로 앱을 로컬에서 서명하거나 유료 App Center 계정으로 업그레이드할 수 있습니다.

실패한 경우 편의를 위해 빌드 로그가 다운로드됩니다. Mendix에 [지원 티켓](/support/submit-support-request/)을 제출할 때 이를 제공하십시오.

빌드가 성공하면 Native Builder에서 제공하는 경로에서 다운로드된 *.zip* 아카이브를 확인하십시오.

## 배포 {#distributing}

빌드가 서명되지 않은 경우 다운로드된 아카이브 `CoolApp-Android-1.zip` 및 `CoolApp-iOS-1.zip`에는 *비릴리스* 빌드인 `app-debug.apk` 및 `nativeTemplate.xcarchive`가 포함됩니다. 

빌드가 서명된 경우 각각 Android 및 iOS 플랫폼에 대해 `app-release.apk` 및 `nativeTemplate.ipa` 파일이 포함됩니다.

특정 플랫폼에 배포하려면 아래 해당 섹션을 참조하십시오:

* [Android 배포](#android-distributing)
* [iOS 배포](#ios-distributing)

### Android 배포 {#android-distributing}

#### 로컬 서명 {#android-local-signing}

[빌드 서명](#signing-a-build)을 완료한 경우 이 섹션을 건너뛸 수 있습니다. Android 앱을 로컬에서 서명하려면 Google의 [apksigner 문서](https://developer.android.com/studio/command-line/apksigner)를 따라 apksigner를 사용하십시오.

#### 디바이스에 설치

*app-debug.apk* 또는 *app-release.apk*는 사용 가능한 수단(예: USB)을 통해 파일을 보내 모든 디바이스에 쉽게 설치할 수 있습니다.

USB를 통해 앱을 설치하려면 디바이스를 USB로 머신에 연결하십시오. 이 방법으로 디바이스의 파일 관리자 앱에서 APK를 설치하려면:

1. Google의 [컴퓨터와 Android 디바이스 간 파일 전송](https://support.google.com/android/answer/9064445?hl=en) 지침을 따라 디바이스에 APK를 가져오십시오. APK를 전송한 폴더를 기록하십시오.
2. 휴대폰의 파일 관리자를 열고 APK가 있는 폴더로 이동한 다음 APK 파일을 탭하여 여십시오.
3. **Install** 버튼을 탭하십시오. 

    {{% alert color="info" %}}Android에서는 Play Store 앱이 아니기 때문에 설치에 대한 경고 대화 상자가 표시될 수 있습니다. **INSTALL ANYWAY**를 탭하십시오.{{% /alert %}}

4. 메시지가 표시되면 **Done** 버튼을 탭하십시오. 이제 **App Drawer**를 통해 또는 설치 완료 후 **Open** 버튼을 탭하여 설치된 앱에 접근할 수 있습니다.

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/android-app-launch.gif" alt="android app launch"   width="300"  class="no-border" >}}

에뮬레이터 대신 물리적 Android 디바이스를 사용하여 앱을 테스트하는 자세한 지침은 Google의 [Run apps on a hardware device](https://developer.android.com/studio/run/device)를 참조할 수도 있습니다.

#### Google Play Store에 업로드

이 섹션은 서명된 Android 앱을 Google Play Store에 게시하는 방법을 자세히 설명합니다. 이 섹션을 시작하려면 위의 [빌드 서명](#signing-a-build) 섹션을 완료하고, *app-release.apk* 빌드를 생성하고, Google의 [Android 앱 게시 프로세스](https://developer.android.com/studio/publish) 개요를 읽어야 합니다. 

앱 스토어에 앱을 제출하기 전에 Google의 [가입 단계](https://play.google.com/apps/publish/signup/)를 완료해야 합니다. 또한 앱을 게시하기 전에 [출시 체크리스트를 검토](https://developer.android.com/distribute/tools/launch-checklist.html)하십시오. 

이러한 요구 사항을 충족하면 Google의 [Upload your app to the Play Console](https://developer.android.com/studio/publish/upload-bundle)을 따를 수 있습니다. 그런 다음 Google의 [Prepare and roll out a release](https://support.google.com/googleplay/android-developer/answer/7159011)를 따라 앱 릴리스를 생성, 준비, 검토 및 출시하십시오.

### iOS 배포 {#ios-distributing}

#### 로컬 서명 {#ios-local-signing}

[빌드 서명](#signing-a-build)을 완료한 경우 이 섹션을 건너뛸 수 있습니다. 로컬 서명은 디바이스에서만 앱을 테스트하려는 경우 또는 배포 인증서가 없고 개발자 인증서로 서명할 때 App Center의 빌드 시간이 부족한 경우에 유용합니다.

디바이스 또는 Apple App Store에 *nativeTemplate.xcarchive*를 배포하려면 Apple 개발자 계정과 개발팀이 필요합니다. 사용 가능한 경우 다음을 수행하십시오:

1. Xcode 11 미만 버전을 사용하여 *nativeTemplate.xcarchive* 파일을 더블 클릭하면 내장된 *Application Loader* 소프트웨어로 열려야 합니다.
2. *Distribute App* 버튼을 클릭하여 로컬 서명 흐름을 시작하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-1.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

3. **Development**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-2.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

4. **Development Team**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-3.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

5. **Development distribution options**를 구성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-4.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

6. 재서명 옵션을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-5.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

7. *.ipa* 내용을 검토하고 **Export**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-6.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

8. 축하합니다. 이제 서명된 *.ipa* 파일이 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-7.png" alt="Xcode Application loader"   width="400"  class="no-border" >}}

#### 디바이스에 설치

이제 디바이스에 앱을 배포할 수 있습니다. Apple의 iTunes 프로그램을 사용하면 쉽게 할 수 있습니다.

디바이스에 *ipa*를 설치하려면 다음 단계를 따르십시오:

1. Apple 디바이스를 컴퓨터에 연결하십시오. 두 디바이스 모두 신뢰를 확인하는 대화 상자가 표시됩니다. 디바이스에서 **Continue**를 탭하고 모바일 디바이스에서 **Trust This Computer?**를 탭하여 진행하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/appletrust.png" alt="trust dialog"   width="400"  class="no-border" >}}

2. iTunes를 열고 iOS 디바이스를 컴퓨터에 연결하십시오.
3. 이전에 다운로드한 *.ipa* 패키지 파일을 선택하고 iTunes 왼쪽 메뉴의 디바이스 **Devices** 섹션으로 드래그하십시오. *.ipa* 파일을 거기에 놓아 디바이스에 설치하십시오.
4. 기존 버전이 있는 경우 iTunes에서 기존 버전을 교체할 것인지 묻습니다. 있다면 교체하십시오.
5. 앱이 앱 목록에 표시됩니다. 앱 옆의 **Install** 버튼을 클릭하십시오.
6. 화면 하단의 **Apply**를 클릭하여 실제 설치를 실행하십시오.

#### Apple App Store에 업로드

iOS App Store에 앱을 업로드하려면 다음 지침을 따르십시오(계속하려면 위의 [빌드 서명](#signing-a-build) 섹션을 완료하고 Apple Store용으로 서명된 빌드를 받아야 합니다):

1. Apple의 [Add an app to your account](https://help.apple.com/app-store-connect/#/dev2cd126805) 튜토리얼을 따라 계정에 앱 항목을 추가하십시오.
2. 계정에 새 앱을 추가한 후 Apple의 [View and edit app information](https://help.apple.com/app-store-connect/#/dev97865727c) 튜토리얼을 따라 새 앱 항목을 설명하십시오.

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/ios-enter-app-info.png" alt="enter app information"   width="400"  class="no-border" >}}

3. Apple의 [Uploading builds overview](https://help.apple.com/app-store-connect/#/dev82a6a9d79)를 따라 앱 빌드를 App Store Connect에 업로드하십시오.
4. Apple의 [Upload tools guide](https://help.apple.com/app-store-connect/#/devb1c185036)를 사용하여 *ipa*를 업로드하십시오.
5. Apple의 [Choose the build before you submit to review](https://help.apple.com/app-store-connect/#/dev7cbda8c55)를 사용하여 App Review에 제출할 빌드를 선택하십시오.
6. Apple의 [Overview of publishing an app](https://help.apple.com/app-store-connect/#/dev34e9bbb5a)을 따라 앱을 게시하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/ios-publishing-an-app.png" alt="publish on the app store"   width="400"  class="no-border" >}}

## 추가 읽기

* [Native Builder 참조 가이드](/refguide8/native-builder/)
* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)

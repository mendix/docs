---
title: "Native Mobile 앱에서 딥 링크 설정"
linktitle: "Native Mobile 앱의 딥 링크"
url: /howto8/mobile/native-deep-link/
weight: 75
description: "딥 링크를 추가하여 URL을 네이티브 모바일 앱에 연결하십시오."
---

## 소개

URL은 일반적으로 웹사이트를 열지만, 모바일 디바이스에 설치된 앱을 열 수도 있습니다. 이 튜토리얼에서는 URL `app://myapp`를 Android 또는 iOS 디바이스에 설치된 Mendix 네이티브 앱에 연결하는 방법을 배웁니다. 경로, 쿼리 매개변수 및 해시를 사용하여 추가 데이터를 전달하는 것도 가능합니다. 추가 데이터 전달은 다음과 같을 수 있습니다: `app://myapp/task/123?action=close#info`.

딥 링크는 항상 정의된 스키마 내에서 호출되거나 트리거됩니다. 예를 들어, 모바일 브라우저에서 `http://` 대신 `makeitnative://`를 사용하면 Make It Native 앱이 강제로 열립니다. 

URL은 다음 부분으로 구성됩니다(**path** 이후의 모든 것은 detail로 정의됩니다):

{{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/url-parts.png" alt="url details" class="no-border" >}}

`http://` 또는 `https://`로 시작하는 일반 웹링크의 처리를 등록할 수도 있습니다. 그러나 이것은 iOS에서 더 많은 작업이 필요하며 이 튜토리얼에서는 다루지 않습니다. iOS의 경우 Owen L. Brown의 [Universal Links: Make the Connection](https://www.raywenderlich.com/6080-universal-links-make-the-connection)을 참조하십시오. Android는 아래 [Android 앱의 경우](#for-android) 섹션에 표시된 대로 두 가지 유형의 웹링크 처리를 기본적으로 허용합니다. 

앱이 설치되면 `schema`와 선택적으로 `host`를 등록하여 운영 체제가 URL을 클릭했을 때 어떤 애플리케이션을 열어야 하는지 알 수 있게 합니다. 링크를 탭하면 앱이 실행 중이든, 백그라운드에서 실행 중이든, 닫혀 있든 상관없이 애플리케이션이 열립니다.

딥 링크 등록은 앱이 닫힌 후에도 유지됩니다. 구체적으로, 딥 링크는 앱 매니페스트에 등록되며, Android 프로덕션 앱의 경우 앱이 설치될 때 읽히고, iOS 앱의 경우 OS *info.plist*에 등록됩니다(OS도 인식하게 됩니다).

### Make It Native 앱으로 테스트하기

이 튜토리얼에서 Mendix는 로컬 Mendix Studio Pro 인스턴스에 대해 소스에서 앱을 실행하는 것을 권장합니다. 이렇게 하면 앱을 다시 빌드하고 재배포할 때 시간을 절약할 수 있습니다. 이를 위해 [Native Mobile 시작하기](/howto8/mobile/getting-started-with-native-mobile/)의 단계를 따라 앱을 만들고 Make It Native 모바일 테스트 앱에 연결하십시오.

Make It Native 앱에는 이미 등록된 스키마 `makeitnative://`가 있으며 바로 사용할 수 있습니다. 해당 스키마로 Make It Native 앱을 사용하려면 아래의 [앱에서 딥 링크 사용](#using-deep-linking) 섹션을 참조하십시오. 이 스키마를 변경하려면 [사용자 정의 Developer App 만드는 방법](/howto8/mobile/how-to-devapps/)을 참조하여 자체 사용자 정의 Developer App을 빌드한 다음 아래의 [앱 딥 링크 설정](#set-up) 섹션을 사용하여 스키마를 변경하십시오.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 앱 유형에 따른 [전제 조건](/refguide/mobile/getting-started-with-mobile/prerequisites/)을 완료하십시오
* [Native Mobile Resources](/appstore/modules/native-mobile-resources/) 모듈이 최신 상태인지 확인하십시오
* Native Mobile App Builder CLI 작업을 위해 Git [명령줄](https://git-scm.com/downloads) 도구를 설치하십시오
* Native Mobile App Builder를 사용하려면 Mendix Studio Pro v 8.15.0 이상을 설치하십시오

## 앱 딥 링크 설정 {#set-up}

앱의 네이티브 템플릿이 아직 없는 경우 아래 섹션을 따라 생성할 수 있습니다.

### Native Mobile App Builder 사용

다음 지침에 따라 **Native Mobile App Builder**로 네이티브 템플릿을 설정하십시오:

1. **Project** 메뉴에서 Native Mobile App Builder를 시작하십시오. 마법사를 진행하고 프로젝트의 세부 정보와 토큰을 구성하십시오(자세한 정보는 [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)을 참조하십시오):

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/launch-native-mobile-app-builder.png" alt="launch native mobile builder"   width="400"  class="no-border" >}}

2. 마법사를 완료하면 딥 링크 기능을 활성화합니다. 먼저 **Capabilities** 메뉴 항목을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/capability-menu-option.png" alt="capability menu option"   width="400"  class="no-border" >}}

3. 뒤에 붙는 `://` 없이 `schema` 이름을 입력하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/deep-link-input-field.png" alt="deep link input field"   width="400"  class="no-border" >}}

4. **Save** 버튼을 클릭하십시오. 
5. 빌드 페이지로 이동하여 **Build**를 클릭하십시오.

{{% alert color="info" %}}
로컬 소스에서 실행할 때 iOS에서는 `pod install`을 한 번 더 실행해야 합니다
{{% /alert %}}

### Native Mobile App Builder CLI 사용

1. [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)에 표시된 대로 `prepare` 명령을 사용하여 Native Builder로 셸 앱을 만드십시오. 이때 이 예제 명령의 매개변수를 자체 프로젝트의 매개변수, 로컬 경로 및 토큰으로 교체하십시오:

    ``` shell
    native-builder.exe prepare --project-name "Native Deep Link" --app-name "Native Deep Link" --java-home "C:\Program Files\AdoptOpenJDK\jdk-11.0.3.7-hotspot" --mxbuild-path "C:\Program Files\Mendix\8.6.0.715\modeler\mxbuild.exe" --project-path "C:\mendix-projects\NativeDeepLink\NativeDeepLink.mpr" --github-access-token "c3f322c471623" --appcenter-api-token "2d5b570693d34"  --app-identifier "com.mendix.native.deeplink" --runtime-url "https://nativedeeplink-sandbox.mxapps.io/" --mendix-version "8.6.0"
    ```

1. 선택한 명령줄 인터페이스(CLI)를 열고 빌드 템플릿을 편집할 폴더로 디렉토리를 변경하십시오:

    ```shell
    cd c:/github
    ```

1. Git을 사용하여 GitHub에서 Native Builder 템플릿을 복제하십시오: 

    ```shell
    git clone https://github.com/your-account/native-deeplink-app
    ```

#### Android 앱의 경우 {#for-android}

매니페스트 파일은 Mendix 앱과 연결될 Android 디바이스의 스키마와 호스트를 등록합니다. 간단히 말해, 매니페스트 파일은 권한, `activity` 코드 등을 제어합니다. 따라서 딥 링크를 활성화하려면 *AndroidManifest.xml* 파일을 구성해야 합니다:

1. 템플릿을 복제한 폴더를 여십시오: `c:/github/native-deeplink-app`.
1. *android/app/src/main/AndroidManifest.xml*을 여십시오.
1. `activity`에 속성 `android:launchMode="singleTask"`를 추가하십시오. Launch Mode에 대한 자세한 정보는 이 [Android 문서](https://developer.android.com/guide/topics/manifest/activity-element#lmode)를 참조하십시오.
1. `activity`에 `intent-filter`를 추가하십시오:

    ```xml
    <intent-filter android:label="@string/app_name">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="app" android:host="myapp" />
    </intent-filter>
    ```
    
    Android에서의 링크에 대한 자세한 정보는 이 [Android 문서](https://developer.android.com/training/app-links/deep-linking#adding-filters)를 참조하십시오.

#### iOS 앱의 경우

*info.plist* 파일은 iOS에서 앱과 연결될 스키마와 호스트를 등록합니다. 이 *plist* 파일은 권한, 앱 정보 등을 제어합니다. 따라서 딥 링크를 활성화하려면 *info.plist* 파일을 구성해야 합니다:

1. 템플릿을 복제한 폴더를 여십시오: `c:/github/native-deeplink-app`.
1. Xcode(Apple Mac에서만 사용 가능)에서 *ios/NativeTemplate.xcworkspace*를 여십시오.
1. *ios/NativeTemplate/Info.plist*를 여십시오
1. `URL types`를 추가한 다음 `URL Schemes`와 `URL identifier`를 추가하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/ios-info-plist.png" alt="ios info plist" class="no-border" >}}

    *Info.plist*를 텍스트 파일로 볼 때 섹션이 추가된 것을 볼 수 있습니다:

    ```xml
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>app</string>
            </array>
            <key>CFBundleURLName</key>
            <string>myapp</string>
        </dict>
    </array>
    ```

1. *ios/AppDelegate.m*을 여십시오 
1. 기존 import에 다음 import를 추가하십시오: `#import "React/RCTLinkingManager.h"`.
1. `openURL` 메서드를 다음에서:

    ```objc
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
      [MendixAppDelegate application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      return YES;
    }
    ```

    다음으로 변경하십시오:

    ```objc
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
      [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      [MendixAppDelegate application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      return YES;
    }
    ```

    이 메서드는 열린 URL을 등록하여 **Native Deep Link** Nanoflow 액션에서 사용할 수 있게 합니다. 

#### Native Mobile 앱 다시 빌드하기

로컬 소스에서 실행할 때 앱을 다시 시작해야 합니다:

1. CLI로 템플릿을 복제한 폴더를 여십시오: `cd c:/github/native-deeplink-app`.
1. 위 단계에서의 모든 변경 사항을 추가, 커밋 및 푸시하십시오:

    ```shell
    git add .
    git commit -m "Add deeplink handling"
    git push
    ```

1. 이제 새 기능을 추가하기 위해 네이티브 모바일 앱을 다시 빌드하고 설치하십시오:

    ```shell
    native-builder.exe build --project-name "Native Deep Link" --app-version "1.0.0" --build-number 1
    ```

## 앱에서 딥 링크 사용 {#using-deep-linking}

이제 앱이 링크를 사용할 준비가 되었으므로 추가 경로 및 쿼리 데이터 처리를 설정합니다. 이 섹션을 건너뛰면 앱에 대한 링크는 앱만 열 뿐입니다. URL에서 사용 가능한 추가 데이터로 아무 작업도 수행되지 않습니다.

### Native Deep Link Nanoflow 액션 

이제 Mendix 애플리케이션에서 들어오는 URL을 처리해야 합니다. 이를 위해 [Native Mobile Resources](/appstore/modules/native-mobile-resources/) 모듈에 있는 Nanoflow 액션 **Register Deep Link**과 **Parse Url To Object**를 사용합니다. 이 모듈은 최신 Starter App으로 시작한 경우 앱에 자동으로 포함됩니다. 앱에서 이러한 액션을 사용할 수 없는 경우 Marketplace를 통해 모듈을 업데이트하십시오.

#### 딥 링크 등록

Register Deep Link Nanoflow 액션은 URL을 사용하여 앱이 열릴 때마다 호출되는 콜백 Nanoflow를 등록합니다. 이 **URL Handler** Nanoflow는 문자열 유형의 URL을 입력 매개변수로 받습니다. 

{{% alert color="info" %}}
입력 매개변수의 이름은 대소문자를 구분하며 변경할 수 없습니다.
{{% /alert %}}

#### URL을 Mendix 객체로 파싱

Register Deep Link Nanoflow 액션은 새로운 Mendix 객체를 생성하고 URL을 분할하며 모든 객체 속성을 해당 값으로 설정합니다. 예를 들어, URL https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top 은 다음 속성과 값을 가집니다:

| 속성                                                   | 값                                                                                        |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| href                                                        | https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top |
| protocol                                                    | https:                                                                                       |
| hash                                                        | top                                                                                          |
| query                                                       | ?tag=networking&order=newest                                                                 |
| pathname                                                    | /forum/questions/                                                                            |
| auth                                                        | john.doe                                                                                     |
| host                                                        | www.example.com:123                                                                          |
| port                                                        | 123                                                                                          |
| hostname                                                    | www.example.com                                                                              |
| password                                                    | secret                                                                                       |
| username                                                    | john.doe                                                                                     |
| origin                                                      | https://www.example.com:123                                                                  |
| **경로의 슬래시 수에 따라 동적으로 결정** | |
| path0                                                       | forum                                                                                        |
| path1                                                       | questions                                                                                    |
| **쿼리 키 수에 따라 동적으로 결정**           | |
| tag                                                         | networking                                                                                   |
| order                                                       | newest                                                                                       |

### 앱에서 유틸리티 사용

이제 **Native Deep Link** Nanoflow 액션이 Studio Pro에서 사용 가능하므로 URL을 등록하고 처리하는 유틸리티가 있습니다. 이제 애플리케이션에서 사용합니다:

1. 앱에서 Native Mobile Resource 모듈의 일부인 **App events** Widget을 홈 페이지에 추가하십시오.
1. **App events** Widget을 더블 클릭하십시오. **App events** 탭에서 **Page load** > **On load** > **Call a nanoflow**를 선택하고 *OL_RegisterDeepLink*라는 새 Nanoflow를 생성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/app-events-register-deep-link.png" alt="app event register deeplink" class="no-border" >}}

    이 Nanoflow는 앱이 시작될 때 한 번만 호출됩니다.

1. **OL_RegisterDeepLink** Nanoflow에서 **Register DeepLink** 액션을 추가하고, 해당 액션의 **Url handler**에서 *DL_ShowUrlDetails*라는 Nanoflow를 생성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/nanoflow-register-deep-link.png" alt="nanoflow register deeplink" class="no-border" >}}

    이 Nanoflow는 URL을 사용하여 앱이 열릴 때마다 호출됩니다.

1. URL을 객체로 파싱하기 위해 다음 단계에서 **NativeMobileResources** 모듈의 **DeepLinkParameter**라는 비영속 Entity를 사용합니다. 지금은 **NativeMobileResources** > **Domain Model**로 이동하여 이 Entity를 확인하십시오. 쿼리 문자열 등을 사용하는 경우 이 Entity를 자체 모듈로 복사할 수 있습니다. 속성은 모두 선택 사항이며 구현에 필요한 속성만 추가해야 합니다. 가능한 URL 부분의 표준 목록 외에도 쿼리 문자열의 키(예: `?name=Jhon&title=sir`)를 추가할 수 있습니다. 속성은 대소문자를 구분하지 않습니다. URL의 경로 세그먼트에 대한 속성을 추가할 수 있으며 `Path0`, `Path1` 등으로 분할됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/entity-parameter.png" alt="parameter entity" class="no-border" >}}

다음으로 URL 데이터를 전달할 수 있도록 딥 링크 핸들러 Nanoflow **DL_ShowUrlDetails**를 구현합니다:

1. **DL_ShowUrlDetails**에서 Nanoflow의 빈 공간에 매개변수를 드래그하십시오.
1. 매개변수를 더블 클릭하고 이름을 *URL*(대소문자 구분)로 지정하고 유형을 **String**으로 설정하십시오.
1. Nanoflow에 **Parse URL to Object** Activity를 추가하십시오. 더블 클릭하고 다음과 같이 구성하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/parse-url.png" alt="parse url" class="no-border" >}}

1. **Parse URL to Object** Activity 오른쪽에 **Show message** Activity를 추가하십시오.
1. **Show message** Activity를 더블 클릭하십시오.
1. **Template**에 *Your deep link callback URL {1} host = {2}*를 입력하십시오.
1. **Parameters** > **New**를 클릭하고 *$Parameter/Href*를 입력한 다음 **OK**를 클릭하십시오.
1. **Parameters** > **New**를 클릭하고 *$Parameter/Host*를 입력한 다음 **OK**를 클릭하십시오.
1. **Parse URL to Object** Activity를 마우스 오른쪽 버튼으로 클릭하고 **Set error handling**을 클릭한 다음 **Custom without rollback**을 클릭하십시오.
1. **Parse URL to Object** Activity 아래에 **End event**를 놓으십시오. **Parse URL to Object**에서 End event로 선을 드래그하고 마우스 오른쪽 버튼으로 클릭한 다음 **Set as error handler**를 클릭하십시오.
1. 이 선에 **Show message** Activity를 추가하십시오. 유형을 **Error**로 설정하고 template에 *Failed to parse deep link data.*를 입력하십시오. 완성된 Nanoflow는 다음과 같습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/deep-link-nano-full.png" alt="full nanoflow" class="no-border" >}}

### 딥 링크 테스트

웹 페이지에 몇 가지 테스트 링크 버튼(예: {app://myapp/task/123} 또는 {makeitnative://task/123})을 추가한 다음 프로젝트를 다시 실행하십시오. 브라우저에 *{로컬 IP 주소}:8080*을 입력하여 디바이스의 브라우저에서 앱을 여십시오. 앱이 로드된 상태에서 링크를 탭하여 테스트하십시오. 브라우저에서 나와 앱의 페이지로 이동해야 합니다!

{{% alert color="info" %}}
로컬 소스에서 앱을 실행하지 않는 경우 테스트하기 전에 Native Builder로 앱을 다시 빌드해야 합니다. `build` 명령을 사용하여 이를 수행하십시오: `build --project-name "Native Deep Link" --app-version "1.0.0" --build-number 2`.
{{% /alert %}}

## 추가 정보

* [Native Builder 참조 가이드](/refguide8/native-builder/)
* [클라우드에서 Mendix Native App 빌드하는 방법](/howto8/mobile/deploying-native-app/)
* [React Native Linking](https://facebook.github.io/react-native/docs/linking)
* [Deep Linking Android](https://developer.android.com/training/app-links/deep-linking)
* [Deep Linking iOS](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app)
* [Universal Linking iOS](https://developer.apple.com/ios/universal-links/)
* [URL Schema vs Universal Link](https://medium.com/wolox-driving-innovation/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)

---
title: "App Center의 CodePush로 OTA 업데이트 릴리스"
linktitle: "CodePush로 OTA 업데이트"
url: /howto8/mobile/how-to-ota/
weight: 71
description: App Center의 CodePush를 사용하여 OTA(Over the Air) 업데이트를 푸시하기 위한 튜토리얼입니다.
---

## 소개

{{% alert color="warning" %}}
Studio Pro 10.6 이상에서 Mendix는 CodePush 지원을 중단했습니다. 앱이 OTA 업데이트를 위해 CodePush에 의존하는 경우 더 이상 사용할 수 없습니다.

OTA 업데이트를 관리하기 위해 [Mendix OTA](/refguide/mobile/distributing-mobile-apps/overtheair-updates/)를 지원하는 상위 버전으로 앱을 마이그레이션하는 것을 권장합니다.
{{% /alert %}}

Native Mobile Builder와 Mendix Studio Pro를 사용하면 Mendix 네이티브 앱을 OTA(Over the Air)로 업데이트할 수 있습니다. OTA 업데이트는 레이아웃, 페이지, 자산 또는 앱의 비즈니스 로직(예: Nanoflow 및 JavaScript 액션)과 같은 항목을 빠르고 고통 없이 업데이트하는 방법입니다.

네이티브 앱은 두 부분으로 분리됩니다: 기본적으로 네이티브 iOS 또는 Android 앱인 래퍼와 해당 래퍼에 의해 동적으로 로드되는 번들. 비즈니스 로직과 정적 자산 같은 것들이 이 동적으로 로드되는 번들의 일부입니다. 배포하려는 변경 사항이 있을 때 Native Mobile Builder는 새로 업데이트된 번들로 번들링하고 고통 없이 배포할 수 있습니다. 다음 앱 재시작 시 앱 사용자는 최신 버전으로 업데이트되어 평소와 같이 비즈니스를 계속합니다.

OTA 업데이트는 특정 앱 버전 및 빌드 번호에 바인딩됩니다. 따라서 특정 업데이트를 특정 앱 버전에 타겟팅할 수 있습니다.

{{% alert color="info" %}}
현재 OTA는 앱이 열려 있거나 최소화된 상태에서는 앱을 업데이트하지 않습니다.
{{% /alert %}}

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 릴리스된 앱에 대한 OTA 업데이트 푸시

## 사전 요구 사항 {#prerequisites}

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 온라인 설치 프로그램을 사용하여 Mendix Studio Pro 8.15 이상을 설치하십시오(오프라인 설치 프로그램에는 Mendix Native Mobile Builder 종속성이 포함되어 있지 않습니다)
* [첫 번째 Mendix 네이티브 모바일 앱 배포 방법](/howto8/mobile/deploying-native-app/)을 완료하여 앱을 배포하십시오.
* 앱에 대해 App Center를 설정하고 구성했는지 확인하십시오. App Center 설정에 대한 정보는 *첫 번째 Mendix 네이티브 모바일 앱 배포 방법*의 [App Center 토큰](/howto8/mobile/deploying-native-app/#appcenter-token) 섹션을 참조하십시오. 이전에 앱 빌드 시 App Center 구성을 옵트아웃한 경우 **Tokens** 화면으로 이동하여 **I want to use App Center** 옵션을 토글 온해야 합니다.
* 테스트 디바이스 또는 에뮬레이터에 앱을 설치하십시오.
* [오프라인 우선 참조 가이드](/refguide8/offline-first/)를 읽으십시오.

{{% alert color="info" %}}
이 문서를 사용하기 전에 호환성을 확인하십시오. 프로젝트를 Native Mobile Builder로 마이그레이션하지 않았거나 Native Template 버전이 5.1.9보다 오래된 경우(Mendix Studio Pro 8.15.1 이하), OTA 업데이트를 구현하기 **전에** 아래의 [CLI OTA 호환 앱을 Mendix Native Mobile Builder로 전환](#from-cli-to-ui) 섹션을 따르거나 Native Template을 업데이트하십시오. 

프로젝트를 최신 버전의 Native Template으로 마이그레이션할 수 없는 경우(예: 이전 버전의 Studio Pro를 사용해야 하는 경우), 이 문서 대신 [CLI를 사용하여 App Center의 CodePush로 OTA 업데이트 릴리스](/howto8/mobile/how-to-ota-cli/)를 사용하십시오.
{{% /alert %}}

## OTA 업데이트를 사용해야 하는 경우

### Mendix 앱을 재배포하지 않고 OTA 업데이트를 안전하게 푸시 {#safeToUpdate}

새 OTA 업데이트를 푸시하기 전에 *항상* Mendix 앱을 재배포하는 것이 좋습니다. 그러나 다음의 경우에는 Mendix Cloud에 Mendix 앱을 재배포하지 않고 OTA 업데이트를 릴리스하는 것이 일반적으로 안전합니다:

* 스타일 변경
* 정적 이미지, 텍스트 또는 기타 정적 자산 변경
* 레이아웃 변경
* Nanoflow 변경
* JavaScript 액션 변경
* Mendix와 함께 제공되는 위젯 추가 또는 제거
* 새 사용자 지정 JavaScript 전용 위젯 또는 모듈 추가 
* 추가 로직 없이 페이지 추가 
* 비파괴적 모델 변경(자세한 내용은 [오프라인 우선 참조 가이드](/refguide8/offline-first/)를 참조하십시오)

### 전체 릴리스가 필요한 경우

iOS 또는 Android 프로젝트에 직접 변경을 한 경우 변경 사항이 적용되려면 앱 스토어에 앱을 완전히 재배포해야 합니다. 다음의 경우에는 OTA 업데이트가 충분하지 않으며 전체 릴리스가 필요합니다:

* 앱의 초기 릴리스
* 새 Native Template 버전이 필요한 Mendix Studio Pro 버전 업그레이드
* 앱의 기능을 근본적으로 변경한 경우
* 새 네이티브 모듈이 추가된 경우
* 앱 이름이 변경된 경우
* 새 Microflow 또는 Nanoflow를 추가한 경우
* 앱의 런처 아이콘이 변경된 경우
* 스플래시 화면이 변경된 경우

## CodePush OTA 업데이트를 사용할 수 있는 앱 빌드 {#build-with-ota-support}

Mendix Native Mobile Builder로 빌드된 앱은 기본적으로 App Center의 CodePush를 통한 OTA 업데이트가 비활성화되어 있습니다. 앱 사용자가 App Center의 CodePush를 통한 OTA 업데이트를 사용할 수 있게 하려면 **App Center OTA Support** 기능을 토글 온해야 합니다. 

다음으로 이 기능이 토글 온된 새 바이너리를 빌드한 다음 각 앱 스토어에 앱을 릴리스해야 합니다(새 앱이 있는 사용자만 OTA 업데이트를 받을 수 있습니다). 이를 수행하려면 다음 일반 단계를 따르십시오:

1. **Project** > **Build Native Mobile App**을 클릭하십시오.
1. **App Capabilities**로 이동하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-capabilities.png" alt="Start Mendix Native Mobile Builder"   width="350"  class="no-border" >}}

1. **App Center CodePush OTA Support**를 토글 온하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-capabilities-ota.png" alt="OTA capability enabled"   width="350"  class="no-border" >}}

1. **Save**를 클릭하십시오.
1. 이제 배포용 애플리케이션을 빌드하고 사용된 버전 번호를 기록하십시오: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/build-release-app-for-ota.png" alt="Build release app page"   width="350"  class="no-border" >}}

1. OTA 업데이트 기능을 사용자에게 제공하려면 적절한 앱 스토어를 통해 새 바이너리를 릴리스하십시오. 기능을 테스트하는 경우 이제 테스트 디바이스에 앱을 설치할 수 있습니다.

## OTA 업데이트 배포

OTA 업데이트를 사용하면 새 릴리스를 발행하지 않고도 게시된 앱의 실수를 수정할 수 있습니다. 예를 들어, 새 릴리스를 발행한 후 환영 화면에서 맞춤법 실수를 발견했다고 상상하십시오:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-error-text.png" alt="Typo in welcome screen"   width="300"  class="no-border" >}}

새 버전을 OTA로 릴리스하려면 다음 단계를 따르십시오:

1. 제목과 메시지를 다음과 같이 수정하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/modeller-correct.png" alt="Make some changes"   width="300"  class="no-border" >}}

1. 변경 사항을 저장하십시오.
1. 업데이트하려는 앱 빌드의 버전과 빌드 번호를 기록하십시오. 이 사용법 가이드에서는 앱 버전 1.0.0과 빌드 번호 1을 가정합니다.
1. **Project** > **Build Native Mobile App**을 클릭하십시오.
1. **Build app for distribution** 아래에서 **Deploy OTA update via CodePush**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-menu.png" alt="Menu entry Deploy OTA update via CodePush"   width="350"  class="no-border" >}}

1. OTA 업데이트를 릴리스하려는 대상 앱 버전을 입력하십시오. 이 버전은 이전 단계에서 앱 바이너리를 빌드하는 데 사용된 앱 버전 또는 앱 스토어에 릴리스된 것과 정확히 일치해야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-configuration.png" alt="OTA configuration screen"   width="350"  class="no-border" >}}

1. **Release an OTA update via CodePush**를 클릭하십시오.
1. Mendix Native Mobile Builder가 앱과 리소스를 컴파일하고 OTA 업데이트를 릴리스합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-building.png" alt="OTA build step"   width="350"  class="no-border" >}}

1. 컴파일이 완료되면 Android 및 iOS 앱의 CodePush OTA 업데이트 관리 페이지 링크를 받게 됩니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-success.png" alt="OTA build step success"   width="350"  class="no-border" >}}

    {{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-appcenter-page.png" alt="OTA App Center page"   width="350"  class="no-border" >}}
1. Native Mobile Builder가 완료될 때까지 기다리십시오.
1. 테스트 디바이스에서 앱을 재시작하십시오. 다음 메시지가 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-update-prompt.png" alt="Update available prompt"   width="300"  class="no-border" >}}

1. **Confirm**을 탭하여 앱을 업데이트하십시오.
1. 앱이 다시 로드되고 다음 대화 상자가 표시되어야 합니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-success-prompt.png" alt="Update success prompt"   width="300"  class="no-border" >}}

## 모델 무결성 보존

OTA 업데이트를 발행하거나 새 버전을 릴리스하기 전에 [오프라인 우선](/refguide8/offline-first/) 참조 가이드를 읽고 이해하십시오. 오프라인 우선의 의미를 이해하는 것이 중요합니다.

Mendix 네이티브 앱은 오프라인 우선입니다. 이는 다음 요소를 변경할 때 주의해야 하며 가능하면 변경을 피해야 한다는 것을 의미합니다:

* 탐색 프로필
* 오프라인 우선 엔터티(예: 엔터티 이름 변경, 새 엔터티 관계 등)

일반적으로 오프라인 동기화된 엔터티에 대한 파괴적 변경을 피해야 합니다. 드문 경우 이것이 불가피한 경우 새 앱 버전을 릴리스하거나 OTA 업데이트를 수행하면 앱 사용자가 복구할 수 없는 상태에 놓일 수 있습니다.

### 오프라인 앱 및 데이터 손실

OTA 업데이트 또는 새 릴리스가 앱이 오프라인인 것과 동시에 발생하면 데이터 손실이 발생할 수 있습니다.

이 문제는 OTA 업데이트와 독립적이며 오프라인 앱에 특정합니다. 오프라인 앱은 런타임 모델의 스냅샷을 로컬에서 실행합니다. 따라서 Mendix 개발자로서 앱의 상태를 복구할 수 없게 만들 수 있는 주요 변경을 하기 전에 두 번 생각해야 합니다.

## CLI OTA 호환 앱을 Mendix Native Mobile Builder로 전환 {#from-cli-to-ui}

OTA를 지원하는 앱의 CLI에서 Mendix Native Mobile Builder로의 전환에는 몇 가지 수동 단계가 필요합니다. 이러한 단계를 통해 앱 스토어에 앱을 다시 릴리스할 필요가 없습니다. 

### 필요한 정보 수집 

1. [App Center](https://appcenter.ms)로 이동하십시오.
1. 로그인한 상태에서 앱을 빌드하는 데 사용된 Android 및 iOS 앱을 찾으십시오.
1. URL을 확인하고 URL에 표시된 애플리케이션 ID를 기록하십시오. 예를 들어 **https://appcenter.ms/users/user.name/apps/App-Android/distribute/code-push**에서 **App-Android**가 Android 앱의 ID입니다. 
1. 앱이 조직 아래에 빌드된 경우 URL은 다음과 같을 수 있습니다: **https://appcenter.ms/orgs/org-name/apps/App-Android/distribute/code-push**. 이 경우 URL에 표시된 **org-name**을 기록하십시오.

### Mendix Native Mobile Builder로 앱 이동

1. 프로젝트에 대해 Mendix Native Mobile Builder를 시작하십시오.
1. 아직 설정 마법사를 완료하지 않은 경우 지금 완료하십시오.
1. 도구를 완전히 종료하십시오. 
1. 앱의 디렉토리로 이동하여 **nativemobile** 폴더를 찾으십시오(예: **C:\Users\user\Documents\Mendix\App\nativemobile**).
1. Explorer에서 **Hidden items**를 활성화하여 *.config* 파일이 보이지 않는 경우 볼 수 있도록 하십시오. 
1. 메모장을 사용하여 *.config* 파일을 열고 **App Center**라는 키를 찾으십시오. 이미 있는 경우 다음 예와 같이 일부 앱 이름이 포함되어 있을 수 있습니다: 

    ```text
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
    },
    ```
    
    선택적으로, 앱이 App Center 조직에서 빌드된 경우 다음 예와 같이 조직 이름을 추가하십시오: 
    
    ```text
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
        "organization": "your-organization-here"
    },
    ```

1. 또한 **Capabilities** 섹션의 **appCenterOTA** 키를 확인하고 `"enabled": true`로 설정되어 있는지 확인하십시오: 

    ```text
    "appCenterOTA": {
        "enabled": true
    }
    ```

    파일이 존재하지 않으면 수동으로 추가하십시오. 어느 쪽이든 **App Center 앱의 ID를 반영하도록 이름을 변경해야 합니다**. 그런 다음 새로 변경된 파일이 여전히 유효한 JSON인지 확인하십시오.
    
1. 프로젝트에 대해 Mendix Native Mobile Builder를 재시작하십시오. 도구가 시작되지 않으면 *.config* 파일이 유효한 JSON인지 다시 한번 확인하십시오.

릴리스되지 않은 앱 버전(예: v0.1.0)에 대한 OTA 업데이트를 푸시해 보십시오. OTA 업데이트가 App Center 앱의 CodePush 관리 페이지에 나타나면 축하합니다! 프로젝트를 Mendix Native Mobile Builder로 성공적으로 전환했습니다.

OTA 릴리스 버튼이 비활성화된 상태로 유지되는 경우 구성에 추가된 앱 이름이 올바른지 확인하고 앱이 조직 아래에 있는 경우 organization 속성을 추가하십시오. 실수를 수정한 후 Mendix Native Mobile Builder를 재시작하고 다시 시도하십시오.

## 추가 읽기

* [클라우드에서 Mendix 네이티브 앱 빌드 방법](/howto8/mobile/deploying-native-app/)
* [오프라인 우선 참조 가이드](/refguide8/offline-first/)
* [Codepush 소개](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
* [CodePush UI 사용](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/using-ui)

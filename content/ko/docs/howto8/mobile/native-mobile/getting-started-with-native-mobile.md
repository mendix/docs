---
title: "Native Mobile 시작하기"
url: /howto8/mobile/getting-started-with-native-mobile/
weight: 5
description: 네이티브 모바일 Mendix 앱을 만들고 모바일 디바이스에서 보기 위한 사용 방법입니다.
---

## 소개

Mendix Studio Pro의 Native Mobile 앱 기능을 사용하려면 Mendix Marketplace의 [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)을 사용할 수 있습니다. 이 앱은 네이티브 모바일 앱을 빠르게 빌드하도록 최적화되어 있습니다. 기본적으로 이 앱은 네이티브 페이지, 네이티브 디바이스 내비게이션을 활성화하는 네이티브 폰 프로필, 메뉴가 있는 네이티브 레이아웃, 디바이스 기능을 활용하는 네이티브 Widget 및 액션을 제공합니다.

Blank Native Mobile App에는 네 개의 모듈도 포함되어 있습니다:

* **Administration** – 사용자 관리를 도와줍니다
* **Atlas UI Resources package** – 앱 스타일링을 가능하게 합니다
* **Nanoflow Commons** – 일반적으로 유용한 Nanoflow 액션을 포함합니다
* **Native Mobile Actions** – 디바이스 기능을 활용하는 다양한 네이티브 Widget 및 Nanoflow 액션을 포함합니다

## 전제 조건 {#prerequisites}

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 네이티브 모바일 앱을 테스트할 모바일 디바이스가 있어야 합니다 
* 디바이스 요구 사항에 대한 정보는 [시스템 요구 사항](/refguide8/system-requirements/)을 참조하십시오
* Android 모바일 테스트용 에뮬레이터를 사용하려면 [Bluestacks](https://www.bluestacks.com/nl/index.html) 또는 [Genymotion](https://www.genymotion.com/)과 같은 제품을 설치하십시오(에뮬레이터는 Google Play services를 지원해야 합니다)

## Quickstarter 앱을 기반으로 새 앱 만들기 {#quickstartapp}

Blank Native Mobile App 템플릿을 사용하여 Mendix 앱을 만드는 방법에 대한 자세한 내용은 [Google Play store](https://play.google.com/store/apps/details?id=com.mendix.developerapp) 또는 [Apple App Store](https://apps.apple.com/us/app/make-it-native/id1334081181)에서 Make It Native 8 앱을 다운로드하십시오. 이 앱 템플릿에는 최신 버전의 Atlas UI와 Native Mobile 앱을 위한 Widget 및 Nanoflow 액션이 포함된 [Native Mobile Resources](/appstore/modules/native-mobile-resources/) 모듈이 포함되어 있습니다. 네이티브 모바일 앱 빌드에 대한 자세한 정보는 [네이티브 모바일 검사 앱 빌드](https://academy.mendix.com/link/path/66) 학습 경로를 참조하십시오(이 학습 경로를 보려면 Mendix 플랫폼에 로그인해야 합니다). Make It Native 앱을 사용하여 Mendix 앱의 변경 사항을 보려면 아래 섹션을 참조하십시오.

### Quickstarter 앱 시작하기

템플릿을 기반으로 새 앱을 시작하려면 다음 단계를 따르십시오:

1. Mendix Studio Pro를 여십시오. **File** > **New Project**를 선택한 다음 **Blank Native Mobile App**을 선택하십시오.
2. **Use this starting point**를 클릭하십시오.
3. **Create app**을 클릭하여 대화 상자를 닫으십시오.
4. **Run Locally**를 클릭하여 앱이 작동하는 것을 확인하십시오. 네이티브 모바일 앱을 처음 시작하는 것은 이후 인스턴스보다 약간 더 오래 걸릴 수 있습니다(총 약 1분).
5. 앱을 실행한 후 Windows 보안 경고 대화 상자가 나타날 수 있습니다. 기본으로 선택된 권한을 수락하고 **Allow access**를 클릭하여 대화 상자를 닫으십시오.
6. 데이터베이스 **'default'**를 생성하라는 메시지가 나타나면 **Yes**를 클릭하십시오.

이 시점에서 실행 중인 네이티브 모바일 앱이 있습니다. 그러나 모바일 디바이스에서 앱을 보려면 Make It Native 앱을 다운로드해야 합니다.

### Make It Native 앱 다운로드 및 설치

#### Android용 다운로드

Android 디바이스(또는 에뮬레이터)에서 앱을 보려면 [Google Play store](https://play.google.com/store/apps/details?id=com.mendix.developerapp)에서 Make It Native 8 앱을 다운로드하고 설치해야 합니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/getting-started-with-native-mobile/make-it-native-googleplay.png" alt="native app on googleplay"   width="500"  class="no-border" >}}

#### iOS용 다운로드 {#downloading-for-ios}

iOS 디바이스에서 앱을 보려면 [Apple App Store](https://apps.apple.com/us/app/make-it-native/id1334081181)에서 Make It Native 8 앱을 다운로드하고 설치해야 합니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/getting-started-with-native-mobile/make-it-native-ios.png" alt="native app on app store"   width="500"  class="no-border" >}}

### 테스트 디바이스에서 앱 보기

모바일 디바이스에서 앱을 보면 네이티브 기능 및 앱의 다른 측면을 테스트할 수 있습니다. 이 섹션은 모바일 디바이스용으로 작성되었지만 위의 [전제 조건](#prerequisites) 섹션에서 언급한 Android 에뮬레이터를 사용할 수 있습니다. 앱을 보려면 다음 단계를 따르십시오:

1. Mendix Studio Pro에서 **View** 버튼 옆의 드롭다운 메뉴를 클릭한 다음 **View on your device**를 선택하고 **Native mobile** 탭으로 이동하여 앱의 QR 코드를 찾으십시오. 여기에서 테스트 앱의 QR 코드를 볼 수 있습니다.
2. 디바이스에서 아이콘을 탭하여 Make It Native 앱을 시작하십시오.
3. **Scan a QR Code** 버튼을 탭하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/getting-started-with-native-mobile/scan-qr.png" alt="Scan QR Code"   width="500"  class="no-border" >}}

4. 메시지가 표시되면 앱에 디바이스의 카메라에 대한 접근 권한을 부여하십시오.
5. 모바일 디바이스의 카메라를 QR 코드에 맞추십시오. 모바일 디바이스에서 자동으로 테스트 앱이 시작됩니다.

{{% alert color="warning" %}}

Make It Native 앱이 작동하려면 모바일 디바이스가 개발 머신과 동일한 네트워크에 있어야 합니다. 이 경우에도 연결이 실패하면 Wi-Fi 액세스 포인트에서 디바이스 간 통신이 허용되는지 확인하십시오. 또한 **Project Settings** > **Edit**에서 **Runtime port**를 **8080**으로 유지하는 것을 권장합니다. 변경하는 경우 **8083**으로 변경하지 마십시오. 이 포트는 앱 패키징에 지정되어 있습니다.

{{% /alert %}}

이제 디바이스에서 앱을 볼 수 있습니다. 이것은 단지 템플릿 앱이지만, 변경 사항을 만들 때마다 Make It Native 앱에서 실시간으로 볼 수 있습니다.

Make It Native 앱 홈 페이지에서 **Enable dev mode** 토글을 볼 수 있습니다. 이 토글을 켜면 오류 화면에서 더 자세한 경고 메시지와 Developer App 메뉴의 추가 기능을 제공합니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/getting-started-with-native-mobile/enable-dev-mode.png" alt="enable dev mode"   width="500"  class="no-border" >}}

### 테스트 디바이스에서 앱 변경 사항 보기 {#viewingchanges}

Mendix Studio Pro에서 만든 변경 사항이 테스트 디바이스에서 실시간으로 표시되는 방법을 보려면 앱에 작은 변경을 가하십시오.

1. 앱의 홈 페이지에 텍스트 Widget을 놓으십시오. 그런 다음 텍스트를 입력하십시오. 이 예제에서는 "Native rules!"가 추가되었습니다: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/getting-started-with-native-mobile/new-text-studiopro.png" alt="new studio pro text" class="no-border" >}}

2. **Run Locally**를 클릭하여 디바이스에서 실행 중인 앱을 자동으로 업데이트하고 새 텍스트를 확인하십시오. **Run Locally**를 클릭하면 앱이 상태를 유지하면서 자동으로 다시 로드됩니다. 

앱을 테스트하는 동안 오류 화면이 나타나면 다시 시작하는 쉬운 방법이 있습니다: 

* 세 손가락으로 테스트 앱을 탭하여 앱을 다시 시작하십시오
* **Enable dev mode** 토글이 켜져 있으면 세 손가락 탭을 길게 눌러 Developer App 메뉴를 불러올 수 있습니다—여기에서 **ADVANCED SETTINGS** 및 **ENABLE REMOTE JS DEBUGGING**에 접근할 수 있습니다 

네이티브 모바일 앱 디버깅에 대한 더 자세한 지침은 [Native Mobile 앱 디버그 (고급)](/howto8/mobile/native-debug/)를 참조하십시오.

## 추가 정보

* [Pluggable Widget 빌드 방법](/howto8/extensibility/pluggable-widgets/)
* [Native Mobile 스타일링 참조 가이드](/refguide8/native-styling-refguide/)
* [Native Mobile 앱 디버그 방법 (고급)](/howto8/mobile/native-debug/)

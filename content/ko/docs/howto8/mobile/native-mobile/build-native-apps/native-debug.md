---
title: "네이티브 모바일 앱 디버그(고급)"
url: /howto8/mobile/native-debug/
weight: 40
description: Make It Native 앱을 사용하여 네이티브 모바일 앱을 디버그하는 방법입니다.
---

## 소개

네이티브 모바일 앱을 변경하거나 사용자 지정 위젯을 설계할 때 구현을 디버그해야 할 수 있습니다. Make It Native 앱은 전문 개발자를 위한 네이티브 모바일 앱 디버깅을 지원하는 개발자 모드를 노출합니다. 이를 위해 Google Chrome을 사용하는 것이 좋습니다. 디버깅 중에 자동으로 시작됩니다.

## 네이티브 앱 디버그

디버깅 세션을 시작하려면 다음을 수행하십시오:

1. 데스크톱에서 Mendix 앱을 로컬로 실행하십시오.
2. Make It Native 앱을 시작하십시오.
3. Make It Native 앱에서 **Enable dev mode**를 선택하십시오.
4. Mendix Studio Pro에서 **View** > **View in the Mendix App**을 클릭하여 모바일 디바이스에서 앱을 시작하십시오.
5. 모바일 디바이스에서 **Scan QR code**를 탭한 다음 데스크톱의 QR 코드를 스캔하십시오.

Make It Native 앱이 앱 로드를 완료하면 다음을 수행하십시오:

1. 세 손가락 길게 누르기를 사용하여 개발자 메뉴를 여십시오.
2. **Enable Remote js Debugging**을 탭하십시오.

모바일 앱이 다시 로드되기 시작하고 Chrome 창이 데스크톱에서 디버깅 주소를 가리키며 실행됩니다. 브라우저의 탐색 바에서 주소를 *localhost:8083/debugger-ui*로 수동으로 변경하고 해당 페이지로 이동하십시오.

Chrome이 실행되었지만 앱이 로드되지 않으면 Mendix Studio Pro에서 앱이 실행 중인지 확인하십시오. 실행 중이면 **Stop** 버튼을 클릭한 다음 **Run Locally** ({{% icon name="controls-play" %}})를 다시 클릭하여 앱을 재시작하십시오. 

다음 페이지가 표시되어야 합니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/debug-waiting.png" alt="debug waiting" class="no-border" >}}

상태가 **Waiting**으로 유지되면 위에 표시된 새로고침 명령을 사용하여 앱을 새로고침하십시오. **Waiting** 상태가 변경되고 **active** 세션을 나타내야 합니다:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/debug-active.png" alt="debug active" class="no-border" >}}

브라우저의 디버깅 도구가 앱을 가리키고 있어야 합니다. 이제 다른 웹 앱과 마찬가지로 앱을 디버그할 수 있습니다. 

아래의 [React Developer Tools 사용](#rn-dev) 섹션과 같은 다른 도구도 Mendix 앱을 디버그하는 데 도움이 될 수 있습니다. 어떤 도구를 사용하든 Mendix는 기본 React Native 설치(8080)와 다른 포트(8083)를 사용한다는 점을 기억하십시오.

### React Developer Tools 사용{#rn-dev}

React Developer Tools는 네이티브 페이지가 렌더링되는 방식을 조사하고, 라이브 편집기에서 간격 등을 조정하고, 플러그형 및 네이티브 위젯의 상태와 props를 검사할 수 있는 [앱](https://github.com/facebook/react/tree/main/packages/react-devtools)입니다. 계속하려면 [Node 및 NPM](https://nodejs.org/en/download/)도 설치되어 있어야 합니다.

Facebook의 [공식 문서](https://reactnative.dev/docs/debugging)에서 추가 정보를 참조할 수 있지만, 이 문서에서는 React Developer Tools 사용의 기본 사항을 알려드립니다. 

React Developer Tools를 설치하려면 다음을 수행하십시오:

1. CLI를 열고 다음 코드로 NPX(NPM용 실행 가능한 러너)를 실행하십시오: `npx react-devtools@^3`. `@^3`은 Mendix의 React Native 버전과의 호환성을 보장합니다.

#### iOS Simulator 및 Android 에뮬레이터로 디버깅

iOS Simulator 또는 Android 에뮬레이터에서 네이티브 앱을 열고 다음을 수행하십시오:

1. 네이티브 앱에서 **Enable dev mode**를 선택하십시오.
2. `npx react-devtools@^3`을 실행하십시오.
3. React Developer Tools가 실행되고 Simulator에 연결됩니다. 이제 Chrome에서 HTML 요소를 수정하는 것과 같은 방식으로 React Native 요소를 검사하고 수정할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/simulator-rn-dev.png" alt="debug simulator"   width="350"  class="no-border" >}}

4. Make It Native App에서 세 손가락 탭을 사용하여 **Toggle Element Inspector**를 활성화하고 향상된 검사 기능을 활성화하십시오.

#### Make It Native 앱으로 디버깅

Make It Native 앱에서 React Developer Tools를 사용하려면 다음을 수행하십시오: 

1. USB 코드로 모바일 디바이스를 노트북에 연결하십시오.
2. `adb devices`를 실행하여 디바이스가 나열되는지 확인하십시오.
3. **Enable dev mode**를 선택한 상태에서 디바이스에서 네이티브 앱을 시작하십시오.
4. `npx react-devtools@^3`을 실행하십시오.
5. `adb reverse tcp:8097 tcp:8097`을 실행하여 애플릿이 디바이스와 상호 작용할 수 있도록 하십시오.
6. React Developer Tools가 실행되고 디바이스에 연결됩니다. 이제 Chrome에서 HTML 요소를 수정하는 것과 같은 방식으로 React Native 요소를 검사하고 수정할 수 있습니다:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/min-app-rn-devtools.png" alt="debug min app"   width="350"  class="no-border" >}}

## 스타일링 디버그

Make It Native 앱을 사용하면 스타일링과 페이지 구조를 검사할 수 있습니다. 이를 통해 디버깅, 테스트 및 스타일링 검사가 더 쉬워집니다. 다음을 수행하여 스타일링을 검사하고 디버그하십시오:

1. [Node.js](https://nodejs.org/en/)의 LTS를 설치하십시오.
2. 명령줄 인터페이스(CLI)를 여십시오.
3. `npm i -g react-devtools@3`을 실행하여 React 개발자 도구를 설치하십시오.
4. `react-devtools`를 실행하십시오.

`react-devtools`를 실행하면 React 개발자 도구 GUI가 표시됩니다. 도구를 사용하여 스타일링을 디버그하려면 다음을 수행하십시오:

1. **Enable dev mode**를 선택한 상태에서 Make It Native 앱에서 앱을 여십시오.
2. 앱을 실행할 때 디바이스를 흔들어 개발자 설정을 여십시오.
3. **Toggle Element Inspector**를 탭하여 검사를 시작하십시오. 
4. 앱에서 스타일이 적용된 요소(예: 텍스트 요소)를 탭하여 디바이스에서 스타일 정보를 보고 React 개발자 도구 GUI에서 검사하고 디버그하십시오.
5. 디바이스를 흔들고 **Toggle Element Inspector**를 탭하여 인스펙터를 끄십시오.

## OS 로그 디버깅

Mendix 앱이 충돌하거나 Mendix Studio Pro의 로깅이 불완전한 경우 운영 체제의 로그 파일에서 정보를 확인할 수 있습니다. 두 가지 옵션이 있습니다:

1. [Xcode 또는 Android Studio](/howto8/mobile/native-build-locally/#building-app-project)에서 앱을 시작할 수 있으며, 이를 통해 더 많은 정보를 제공하고 중단점을 설정하고 변수 값을 검사할 수 있습니다. 이 접근 방식은 다소 번거롭습니다. 
1. 디바이스에서 직접 로그 파일을 가져올 수 있습니다.

첫 번째 접근 방식은 자명합니다. 그러나 디바이스에서 직접 로그 파일을 가져오는 방법은 아래를 참조하십시오.

### Android Logcat 사용

Android Debug Bridge(ADB)는 다음 단계를 따라 명령줄(특히 logcat)을 통해 로그 파일을 가져올 수 있습니다:

1. 휴대폰을 설정하십시오:<br />
    1. 아직 활성화하지 않은 경우 **Settings** > **System**을 열고 **Build Number**를 7번 탭하여 **Developer Mode**를 활성화하십시오.<br />
    1. **Settings**에서 **Developer Options**를 여십시오.<br />
    1. **USB Debugging**을 활성화하십시오.
1. Windows용 [Latest Android Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)를 다운로드하십시오.
1. 작업 디렉토리(예: **C:\adb**)에 파일의 압축을 해제하십시오.
1. 작업 디렉토리에서 명령줄 도구를 여십시오.
1. `adb start-server` 명령을 실행하십시오.
1. USB를 통해 휴대폰을 연결한 다음 휴대폰에서 **Allow USB debugging?** 대화 상자를 수락하십시오.
1. `adb logcat > output.txt` 명령을 실행하십시오. 모든 출력이 *output.txt*에 기록됩니다.
1. Mendix 앱을 열고 디버그하려는 작업을 구현하십시오.
1. 명령줄 도구에서 <kbd>Ctrl</kbd> + <kbd>C</kbd>를 눌러 로그 캡처를 중지하십시오.
1. 텍스트 편집기에서 *output.txt*를 여십시오.
1. 문제를 검색하십시오.

ADB 설정에 대한 자세한 단계는 [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)를 참조하십시오. ADB에 대한 일반적인 내용은 [Command ADB](https://developer.android.com/studio/command-line/adb)를 참조하십시오.

## 추가 읽기

* [네이티브 모바일 시작하기](/howto8/mobile/getting-started-with-native-mobile/)
* [하이브리드 모바일 앱 디버그](/howto8/mobile/debug-a-mobile-app/)
* [Parallels 구성](/howto8/general/using-mendix-studio-pro-on-a-mac/)

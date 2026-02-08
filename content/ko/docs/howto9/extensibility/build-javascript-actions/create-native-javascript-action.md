---
title: "네이티브 모바일용 JavaScript Actions 빌드"
url: /howto9/extensibility/create-native-javascript-action/
weight: 30
description: "이 튜토리얼에서는 네이티브 모바일 앱을 위한 JavaScript Action을 빌드하는 방법을 안내합니다."
---

## 소개

네이티브 모바일 애플리케이션은 더 빠른 성능을 제공하며 디바이스 하드웨어 기능을 활용할 수 있습니다. 이 튜토리얼에서는 네이티브 모바일 디바이스의 하드웨어를 활용하여 Near Field Communication(NFC) 태그를 읽는 JavaScript Actions을 직접 빌드하는 방법을 안내합니다. NFC 스캐너 이외의 서드파티 모듈을 사용하려면 이 튜토리얼을 일반적인 개요로 참조하세요.

이 사용 방법에서는 다음을 수행하는 방법을 배웁니다:

* 네이티브 모바일 앱을 위한 JavaScript Action 빌드
* 네이티브 JavaScript Action에 종속성 추가
* JavaScript Action에서 NFC 스캐너 구현

## 사전 준비 사항

이 사용 방법을 시작하기 전에 다음 사전 준비 사항을 완료했는지 확인하세요:

* [Marketplace](https://marketplace.mendix.com/link/studiopro/)에서 최신 버전의 Mendix Studio Pro 설치
* npm의 [Node.js](https://nodejs.org) 설치
* 테스트용 물리적 [NFC NDEF](https://www.dummies.com/consumer-electronics/nfc-data-exchange-format-ndef/) 태그 보유
* NFC 기능이 있는 모바일 디바이스 보유

## NFC JavaScript Actions 빌드

NFC JavaScript Actions을 빌드하려면 다음을 수행합니다:

1. Mendix 앱을 만듭니다.
1. 앱에 종속성을 설치합니다.
1. 네이티브 종속성을 추가합니다.
1. 두 개의 NFC JavaScript Actions을 만듭니다.
1. 앱에서 NFC 스캐너를 구현합니다.
1. 네이티브 모바일 앱을 빌드합니다.

{{% alert color="info" %}}
이 튜토리얼의 명령은 소프트웨어가 다음 위치에 설치되어 있다고 가정합니다:

* Studio Pro: *C:\Program Files\Mendix\9.11.0.39533*
* Mendix 앱: *C:\MendixApps*
{{% /alert %}}

### Mendix 앱 만들기 {#test-project}

NFC 앱을 설정하려면 다음 지침을 따르세요:

1. Mendix Studio Pro를 여세요.
1. **File** > **New App**을 선택하세요.
1. **Blank Native Mobile App**을 선택하세요 (온라인에서도 [여기](https://marketplace.mendix.com/link/component/109511/)에서 사용할 수 있습니다).
1. **Use this starting point**을 클릭하세요.
1. 앱 이름을 *NativeNFC*로 지정하고 **Create App**을 클릭하여 대화 상자를 닫으세요.
1. 모듈 **NativeMobile**의 이름을 *NativeNFC*로 변경하세요. 이 모듈에 구현을 추가합니다.
1. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **JavaScript action**을 선택하세요. 새 JavaScript Action의 이름을 *HasNFCSupport*로 지정하세요. 구현은 나중에 만듭니다.
1. **Home_Native** 페이지를 열고 테스트 앱을 위한 환영 텍스트를 추가하세요.
1. 홈 페이지에 *Read NFC Tag* 캡션이 있는 액션 버튼을 추가하세요:
    1. 홈 페이지를 마우스 오른쪽 버튼으로 클릭하고 **Add widget**을 클릭하세요.
    1. **Call nanoflow button**을 선택하세요.
    1. **new**를 클릭하세요.
    1. **Name**을 *ACT_ReadNFCTag*으로 설정하세요.
    1. 버튼 캡션을 *Read NFC Tag*으로 변경하세요.
    1. 페이지를 저장하세요.
    1. **ACT_ReadNFCTag**를 여세요.
    1. **HasNFCSupport** JavaScript Action을 이 Nanoflow에 드래그하세요.
    1. Nanoflow를 저장하세요.
1. **Publish**를 클릭하여 Free App 환경에 배포하세요.

Mendix 앱은 다음과 같이 보여야 합니다:

{{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/native-nfc-app-home-studio-pro.png" alt="native nfc app home"   width="550"  class="no-border" >}}

### NFC JavaScript Actions 만들기 {#nfc-ja-action}

웹 및 네이티브 플랫폼용 JavaScript Actions은 유사합니다. 그러나 빌드할 수 있는 고유한 종속성 세트가 있습니다.

디바이스가 NFC를 지원하는지 확인하는 액션을 빌드하세요:

1. **HasNFCSupport** JavaScript Action을 여세요.
1. **Return type**을 **Boolean**으로 변경하세요.
1. `EXTRA CODE` 블록 위에 이 import를 추가하세요:

    ``` javascript
    import { Big } from "big.js";
    import { NativeModules } from "react-native";
    import NfcManager from "react-native-nfc-manager";
    ``` 

1. `USER CODE` 블록의 내용을 다음으로 대체하세요:

    ``` javascript
    if (!NativeModules.NfcManager) {
    throw new Error("The NfcManager module is not available in your app.");
    }
    return NfcManager.isSupported();
    ``` 

    코드 설명:
    * `NativeModules`는 로드된 모든 모듈을 포함합니다. 이를 통해 앱에 모듈이 설치되어 있는지 확인할 수 있습니다. 이 액션이 **Make it Native** 앱에서 사용되면 오류가 발생합니다.
    * NfcManager는 새로 추가한 모듈에서 가져옵니다. `isSupported` 함수는 NFC가 하드웨어에서 지원되는지 확인합니다. NFC가 지원되는지 여부를 나타내는 Boolean 값으로 해결되는 Promise를 반환합니다.
    완료되면 코드는 다음과 같이 보여야 합니다:
    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/action-has-nfc-support-code.png" alt="has NFC support action code" class="no-border" >}}

1. 선택적으로 **Expose as nanoflow action** 탭을 클릭하고, **Expose as nanoflow action**을 선택하고, JavaScript Action에 대한 아이콘을 **Select**하세요.

이제 NFC 태그 정보를 읽는 JavaScript Action을 만드세요:

1. *ReadNFCTag*라는 이름의 JavaScript Action을 만드세요.
1. **Return type** > **String**을 선택하세요.
1. **Code** 탭을 클릭하고 `EXTRA CODE` 블록 위에 import를 추가하세요:

    ``` javascript
    import NfcManager, { Ndef } from "react-native-nfc-manager";
    ```

1. USER CODE 블록에 다음 코드를 추가하세요:

    ``` javascript
    return new Promise(resolve => {
        NfcManager.registerTagEvent(tag => {
            NfcManager.unregisterTagEvent();
            const text = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
            resolve(text);
        });
    });
    ```

    코드 설명:
    * 여기서 문자열 값으로 해결되는 Promise를 반환합니다. Nanoflow는 resolve 함수가 호출될 때까지 기다립니다. 등록은 리더가 감지하는 태그를 수신합니다. 태그가 발견되어 콜백 함수가 실행되면 리스너를 등록 해제하여 다른 태그 수신을 중지합니다. 페이로드는 바이트 배열에서 텍스트로 디코딩됩니다. 텍스트 매개변수와 함께 resolve 함수가 호출되면 Nanoflow는 이 값을 반환 매개변수로 받습니다.
    * 완료되면 코드는 다음과 같이 보여야 합니다:
    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/action-read-nfc-tag-code.png" alt="Read NFC tag action code" class="no-border" >}}

1. 선택적으로 **Expose as nanoflow action** 탭을 클릭하고, **Expose as nanoflow action**을 선택하고, JavaScript Action에 대한 아이콘을 **Select**하세요.

### 앱에 종속성 설치 {#install-dependency-project}

종속성은 네이티브 디바이스 부분과 클라이언트 JavaScript 부분으로 나뉩니다. 이 섹션에서는 클라이언트 번들용 종속성 JavaScript를 추가합니다. 번들링을 위해 종속성 빌더를 추가해야 `react-native-nfc-manager` JavaScript 코드를 추가할 수 있습니다.

1. CLI에서 JavaScript Action이 포함된 모듈 폴더를 여세요:

    ```powershell
    cd C:\MendixApps\NativeNFC\javascriptsource\nativenfc\actions
    ```

1. *HasNFCSupport.js*가 이 폴더에 있는지 확인하여 올바른 위치에 있는지 확인하세요.
1. `npm install react-native-nfc-manager@1.2.2` 명령으로 종속성을 설치하세요.

{{% alert type="info" %}}
이렇게 하면 **actions** 폴더 내에 **node_module** 폴더가 생성됩니다. Apache Subversion을 사용하여 *node_modules* 폴더를 커밋하려고 할 때, 커밋에 많은 수의 파일이 포함된 경우 문제가 발생할 수 있는 알려진 이슈가 있습니다. 이를 해결하려면 커밋하기 전에 불필요한 파일을 제거해 보세요.
{{% /alert %}}

#### 네이티브 종속성 선언

Mendix가 네이티브 앱의 프로덕션 유사 빌드를 만들 때 네이티브 종속성을 자동으로 설치하고 연결하게 하려면, JavaScript Actions 옆에 JSON 파일을 만드세요: *HasNFCSupport.json* 및 *ReadNFCTag.json*. 각각에 동일한 네이티브 종속성을 정의하세요:

```json
{
    "nativeDependencies": {
        "react-native-nfc-manager": "1.2.2"
    }
}
```

자세한 내용은 [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/)을 참조하세요.

### NFC JavaScript Actions 사용 {#use-nfc-action}

새 액션을 사용하는 Nanoflow를 만드세요:

{{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/scan-tag-nanoflow.png" alt="Scan tag nanoflow" class="no-border" >}}

위에 표시된 Nanoflow를 만들려면 다음을 수행하세요:

1. **ATC_ReadNFCTag**를 여세요.
1. **Has NFC Support** 액션을 더블 클릭하고, **Variable name**을 *HasNFCSupport*로 설정하고 **OK**를 클릭하세요.
1. **Has NFC Support** 액션을 마우스 오른쪽 버튼으로 클릭하고, **Set error handling**을 선택하고, 유형을 **Custom without rollback**으로 설정하세요.
1. **Show message** 액션을 만들고, 유형을 **Error**로 설정하고, 템플릿을 *Error occurred while checking NFC support: {1}*로 설정하세요. *$latestError*를 포함하는 매개변수를 추가하세요.
1. **Has NFC Support** 액티비티를 **Show message** 액티비티에 연결하세요. **Show message** 액션으로의 연결을 마우스 오른쪽 버튼으로 클릭하고 **Set as error handler**를 선택하세요.
1. 오류 메시지 아래에 종료 이벤트를 추가한 다음 메시지를 종료 이벤트에 연결하세요.
1. **Decision** 액션을 추가하세요. **Expression**에서 *$HasNFCSupport* 표현식으로 반환 변수를 확인하고, **Caption**에 *Has NFC support?*를 입력한 다음 **OK**를 클릭하세요. 이 Show message 액티비티 아래에 종료 이벤트를 추가하세요.
1. 디바이스가 지원되지 않는 경우 경고 유형의 메시지를 표시하세요. 템플릿 텍스트가 *Sorry, your device does not support NFC.*인 **Show message** 액션을 만들고 이 오류 메시지를 결정에 연결하세요.
1. 디바이스가 지원되는 경우 **Read NFC Tag** 액션을 추가하고 응답을 *TagValue* 변수에 저장하세요.
1. 결정에서의 시퀀스 플로우를 **True** (왼쪽) 및 **False** (아래쪽)로 설정하세요.
1. **Read NFC Tag** 액션을 마우스 오른쪽 버튼으로 클릭하고 **Set error handling**을 선택하세요. 유형을 **Custom without rollback**으로 설정하세요.
1. **Show message** 액션을 만들고, 유형을 error로 설정하고, 템플릿 텍스트를 *Error occurred while reading an NFC tag: {1}*로 설정하세요. *$latestError*를 단일 매개변수로 사용하세요.
1. **Read NFC Tag** 액티비티를 **Show message** 액티비티에 연결하세요. **Show message** 액션으로의 연결을 마우스 오른쪽 버튼으로 클릭하고 **Set as error handler**를 선택하세요.
1. 이 **Show message** 액션을 종료점에 연결하세요. 유형을 information으로 설정하고, 템플릿을 *Your NFC tags says: {1}*로 설정하세요. *$TagValue*를 매개변수로 사용하세요.
1. 선택적으로 **Show progress** 및 **Hide progress** 액티비티를 추가하여 NFC 리더를 사용하는 동안 사용자에게 더 많은 정보를 제공할 수 있습니다. 이 액션은 **Nanoflow Commons** 모듈에서 찾을 수 있습니다.
1. 앱을 샌드박스에 배포하세요.

### NFC 태그 쓰기 {#write-nfc-tag}

이제 NFC *NDEF* 태그를 읽는 방법이 있습니다. 다음으로 태그에 텍스트를 작성합니다. 직접 JavaScript Action을 만들거나 기존 도구를 사용할 수 있습니다. 기존 도구를 사용하는 경우 [NFC Tools Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) 또는 [NFC Tools iOS](https://apps.apple.com/us/app/nfc-tools/id1252962749)를 권장합니다.

자신만의 NFC 태그를 작성하려면 다음을 수행하세요:

1. 디바이스에 NFC Tools 앱을 설치하세요.
1. NFC Tools 앱을 여세요.
1. 태그를 스캔하세요. **Technologies available** 섹션에 *Ndef*를 지원한다고 표시되어야 합니다. **Writeable** 섹션에 **Yes**가 표시되어야 합니다.
1. **WRITE**를 탭하고, **Add a record**를 탭하고, **Text**를 탭하세요.
1. *Hello Mendix Developer!* 텍스트를 입력하고 **OK**를 탭하세요.
1. **Write / 30 Bytes**를 탭하세요.
1. 태그를 스캔하세요. **Write complete** 대화 상자가 표시됩니다:
    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/nfc-tools-write-tag.png" alt="write nfc tag"   width="250"  class="no-border" >}}

{{% alert color="info" %}}
이 대화 상자는 휴대폰의 운영 체제가 NFC 태그를 인식한 것입니다. Android 디바이스에서는 디바이스에 NFC 태그를 접촉할 때마다 성공 메시지가 표시됩니다. 진정으로 테스트해야 할 것은 앱의 버튼을 탭한 후 앱의 NFC 스캔입니다. iOS에서는 예상대로 작동하며, Android에서는 앱의 NFC 스캔이 운영 체제의 스캔보다 우선합니다.
{{% /alert %}}

### 네이티브 커스텀 개발자 앱 빌드 {#custom-developer-app}

네이티브 모바일 앱을 개발할 때 빠르게 시작하기 위해 [Make it Native](/refguide9/getting-the-make-it-native-app/) 앱을 사용할 수 있습니다. 그러나 이 앱은 제한된 수의 기능과 번들되어 있습니다. 이 튜토리얼의 앱은 네이티브 NFC 기능에 접근하기 위해 NFC 모듈이 필요합니다. 이는 커스텀 개발자 앱을 빌드해야만 달성할 수 있습니다. 커스텀 개발자 앱을 빌드하고 설치하려면 [커스텀 개발자 앱 만들기](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/)의 단계를 따르세요.

### NFC 커스텀 개발자 앱 테스트

[커스텀 개발자 앱 만들기](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/)에 설명된 단계를 완료한 후 테스트해 보세요.

1. 앱을 여세요
1. **Scan tag**을 탭하세요
1. NFC 태그를 스캔하세요. 태그에 할당한 텍스트가 포함된 대화 상자가 표시되어야 합니다:
    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/create-native-javascript-action/native-nfc-app-success-android.png" alt="read NFC successfully"   width="250"  class="no-border" >}}

이 NFC 튜토리얼을 완료한 것을 축하합니다! 학습한 내용을 넘어서려면 아래 섹션을 참조하세요.

### 코드 강화 {#hardening-nfc-action-code}

이제 작동하는 NFC 스캐너가 있습니다. 그러나 Android와 iOS 모두에 대해 개선할 수 있습니다.

**Android에서** — NFC 스캔을 끌 수 있습니다. 또한 뒤로 버튼을 클릭하면 스캔을 취소해야 합니다.

**iOS에서** — **Ready to Scan** 대화 상자가 표시된 상태에서 스캔을 취소할 수 있습니다.

이러한 기능을 구현하려면 **ReadNFCTag** JavaScript Action의 모든 **USER CODE**를 다음 코드로 교체한 다음, 위의 [네이티브 커스텀 개발자 앱 빌드](#custom-developer-app) 섹션의 단계를 반복하여 업데이트된 앱을 디바이스에 빌드하고 설치하세요:

``` js
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the app.
import { Big } from "big.js";
import { BackHandler, NativeModules, Platform } from "react-native";
import NfcManager, { Ndef } from "react-native-nfc-manager";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<string>}
 */
export async function ReadNFCTag() {
    // BEGIN USER CODE
    if (!NativeModules.NfcManager) {
        throw new Error("The NfcManager module is not available in your app.");
    }
    if (Platform.OS === "android") {
        const enabled = await NfcManager.isEnabled();
        if (!enabled) {
            throw new Error("NFC is not enabled");
        }
    }

    return new Promise(async(resolve, reject) => {
        let success = false;
        await NfcManager.start({
            onSessionClosedIOS: () => {
                if (!success) {
                    reject(new Error("NFC session closed"));
                }
            }
        });
        if (Platform.OS === "android") {
            BackHandler.addEventListener("hardwareBackPress", async () => {
                await NfcManager.unregisterTagEvent();
                await NfcManager.stop();
                return reject(new Error("NFC was canceled by the user"));
            });
            NfcManager.onStateChanged(
                async event => {
                    if (event.state === "off" || event.state === "turning_off") {
                        await NfcManager.unregisterTagEvent();
                        await NfcManager.stop();
                        return reject(new Error("NFC was disabled by the user"));
                    }
                }
            )
        }
        NfcManager.registerTagEvent(async tag => {
            success = true;
            await NfcManager.unregisterTagEvent();
            await NfcManager.stop();
            const text = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
            resolve(text);
        }, "Read NFC");
    });
    // END USER CODE
}
```

코드 설명:

액션의 시작 부분에서 Android에서는 NFC 태그 리더가 꺼져 있는지 확인하고 꺼져 있으면 오류를 발생시킵니다. `resolve`와 `reject` 매개변수를 가진 Promise를 생성합니다. 함수 앞의 `async` 키워드에 주목하세요. 이렇게 하면 비동기 함수와 함께 `await`를 사용하여 코드에서의 순서를 존중하면서 함께 실행할 수 있습니다. `start`는 모듈을 초기화하고 iOS용 콜백을 등록합니다. 이 콜백은 OS에 의해 또는 **Cancel** 버튼이 탭되어 **NFC NDEF reader session**이 무효가 될 때 호출됩니다.

Android의 경우 **하드웨어 뒤로** 버튼에 대한 리스너가 포함됩니다. 탭하면 태그 수신을 중지하고 `reject` 함수를 호출하여 실행을 취소합니다. 이렇게 하면 Nanoflow는 오류 핸들러가 잡는 오류를 받게 됩니다.

앱이 태그를 수신하고 있을 때 Android에서 NFC 기능을 끌 수 있습니다. 이는 *상태 변경*을 유발하여 잡히고 Promise에 대한 거부를 유발합니다.

`registerTagEvent` 함수의 두 번째 매개변수는 iOS **Ready to Scan** 대화 상자에 나타나는 안내 텍스트입니다. 리더가 태그를 찾은 후 NFC 관리자를 `stop`해야 합니다. 이렇게 하면 Android에서 상태 변경 수신을 중지하고, iOS에서 세션 종료 수신을 중지합니다.

네이티브 JavaScript Action을 직접 만드신 것을 축하합니다! 학습한 레슨을 통해 NFC 기능을 확장하거나 다른 모듈을 구현하는 데 창의력을 발휘하세요.

## 릴리스 빌드

이 섹션까지 커스텀 개발자 앱을 사용하여 애플리케이션의 유효성을 검사했습니다. Google Play Store 또는 Apple App Store에 앱을 배포하려면 번들된 Mendix 앱을 포함하는 빌드를 만들어야 합니다.

앱을 앱 스토어에 빌드, 서명 및 배포하는 방법에 대한 전체 설명은 [앱 빌드, 테스트 및 배포](/refguide9/mobile/distributing-mobile-apps/)를 참조하세요.

## 더 읽기

* [앱 빌드, 테스트 및 배포](/refguide9/mobile/distributing-mobile-apps/)
* [JavaScript Actions 참조 가이드](/refguide9/javascript-actions/)
* [JavaScript Actions 빌드 방법](/howto9/extensibility/build-javascript-actions/)
* [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/)
* GitHub의 [NFC React Native 라이브러리](https://github.com/whitedogg13/react-native-nfc-manager)

---
title: "JavaScript Actions 빌드: 파트 1 (기본)"
linktitle: "1. JavaScript Actions 빌드"
url: /howto9/extensibility/write-javascript-actions/
weight: 10
description: "이 사용 방법에서는 JavaScript Action을 만드는 방법을 안내합니다."
---

## 소개

Nanoflow는 플러그인 가능한 Nanoflow 액션(JavaScript Actions)을 통해 더욱 강력해집니다. JavaScript Actions을 사용하면 표준 액션 세트를 새로운 기능으로 확장할 수 있습니다. JavaScript Action은 Nanoflow와 마찬가지로 클라이언트에서 실행되는 JavaScript 기반의 재사용 가능한 액션으로, HTML5 브라우저 함수, Cordova 플러그인 및 React Native 모듈과 같은 기능을 사용할 수 있습니다. JavaScript Actions은 [Java Actions](/refguide9/java-actions/)과 유사하지만 서버 대신 클라이언트에서 실행됩니다. 조직 내에서 공유하기 위해 JavaScript Actions은 프라이빗 [Mendix Marketplace](https://marketplace.mendix.com/)를 통해 배포하고 다운로드할 수 있습니다.

이 사용 방법에서는 다음을 수행하는 방법을 배웁니다:

* JavaScript Action 만들기
* 입력 및 출력 매개변수 구성
* 웹 텍스트 음성 변환 구현
* 비동기 반환 만들기
* 액션을 Nanoflow 액션으로 노출
* 데모에서 액션 사용

## JavaScript Action 만들기: TextToSpeech

텍스트를 음성으로 합성할 수 있는 JavaScript Action을 만들려면 다음 단계를 따르세요:

1. **App Explorer**에서 새 JavaScript Action을 추가할 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **JavaScript action**을 선택하세요.
2. JavaScript Action에 설명적인 이름을 지정하세요:

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/descriptivename.png" alt="naming dialog" class="no-border" >}}

    이제 매개변수와 반환 유형으로 구성된 JavaScript Action용 API를 만들 수 있습니다.

3. **TextToSpeech** 액션에는 단일 매개변수만 필요합니다. 왼쪽 상단의 **Add** 버튼을 클릭하여 만드세요. 매개변수에 이름을 지정하고 원하는 경우 확장 설명을 추가하세요:

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/jsactiondescription.png" alt="javascript action description field" class="no-border" >}}

    **Return type**은 기본 Boolean 값으로 둘 수 있습니다. 이는 텍스트가 제공되지 않으면 `false`를 반환하고, 제공된 텍스트를 성공적으로 말한 후 `true`를 반환한다는 의미입니다.
  
4. 다음으로 **Code** 탭을 클릭하여 JavaScript Action 편집을 시작하세요. 이제 실제 액션을 작성할 수 있습니다. Mendix Studio Pro가 제공한 매개변수와 반환 유형을 사용하여 기본 템플릿을 이미 만들었습니다:

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/code.png" alt="text to speech code" class="no-border" >}}

    `// BEGIN USER CODE`와 `// END USER CODE` 사이에서만 코드를 추가할 수 있습니다. 이 블록 외부의 코드는 손실됩니다. 소스 코드는 앱 폴더의 **javascriptsource** > **(모듈 이름)** > **actions** > **(액션 이름).js**에 저장됩니다. 이 JavaScript Action은 비동기식이므로 값을 반환하기 위해 Promise를 사용합니다 (Promise 사용에 대한 자세한 내용은 Mozilla의 [Promise 사용](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) 가이드를 참조하세요).

5. 이제 필요한 매개변수가 올바르게 설정되었는지 확인하는 검사를 추가하세요. 텍스트가 제공되지 않으면 `false`를 반환합니다:

    ```javascript
    export async function TextToSpeech(text) {
        // BEGIN USER CODE
        if (!text) {
            return false;
        }
        throw new Error("JavaScript action was not implemented");
        // END USER CODE
    }
    ```

6. 음성 텍스트를 활성화하려면 [Web SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)가 필요합니다. 그러나 모든 브라우저가 이 실험적 API를 지원하는 것은 아닙니다. API를 사용할 수 있는지 확인하는 검사를 추가하고, 사용할 수 없는 경우 오류를 포함하세요. 향후 참조를 위해 API 및 호환성에 대한 문서 참조와 함께 주석을 추가하세요.

    ```javascript
    export async function TextToSpeech(text) {
        // BEGIN USER CODE
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
        // Compatibility: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#Browser_compatibility
        if (!text) {
            return false;
        }
        if ("speechSynthesis" in window === false) {
            throw new Error("Browser does not support text to speech");
        }
        throw new Error("JavaScript action was not implemented");
        // END USER CODE
    }
    ```

7. 다음은 재미있는 부분입니다: 애플리케이션이 말하게 만들기. 새 `SpeechSynthesisUtterance` 객체를 만들고 `speak` 함수를 호출하세요. 이전 코드의 마지막 `Return`을 덮어씌워 이 새 코드를 작성합니다.

    ```javascript
    export async function TextToSpeech(text) {
        // BEGIN USER CODE
        if (!text) {
            return false;
        }
        if ("speechSynthesis" in window === false) {
            throw new Error("Browser does not support text to speech");
        }
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
        return true;
        // END USER CODE
    }
    ```

8. 브라우저가 말하기를 완료하지 않았는데도 함수가 이미 반환됩니다. 이를 방지하기 위해 `onend`와 `onerror` 핸들러를 연결할 수 있습니다. `onend` 핸들러는 애플리케이션이 텍스트 말하기를 완료하면 실행되므로 Promise가 `true` 값으로 해결됩니다. 오류가 발생하면 Promise가 거부되고 설명적인 오류 메시지가 표시됩니다. 이러한 핸들러를 연결한 후 말하기를 시작할 수 있습니다:

    ```javascript
    export async function TextToSpeech(text) {
        // BEGIN USER CODE
        if (!text) {
            return false;
        }
        if ("speechSynthesis" in window === false) {
            throw new Error("Browser does not support text to speech");
        }
        // const utterance = new SpeechSynthesisUtterance(text);
        // window.speechSynthesis.speak(utterance);
        // return true;
        return new Promise(function(resolve, reject) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = function() {
                resolve(true);
            };
            utterance.onerror = function(event) {
                reject("An error occurred during playback: " + event.error);
            };
            window.speechSynthesis.speak(utterance);
        });
        // END USER CODE
    }
    ```

9. 첫 번째 JavaScript Action을 구현했습니다! **JavaScript action call**을 추가하고 새로 만든 **SpeechToText** 액션을 선택하여 Nanoflow에서 액션을 사용할 수 있습니다:

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/selectjsactioncalldetail.png" alt="select text to speech action" class="no-border" >}}

    선택적으로 JavaScript Action을 Nanoflow 액션으로 노출할 수 있습니다. 그렇게 하면 **Caption**, **Category** 및 **Icon**을 선택할 수 있습니다. 아이콘을 선택하려면 이미지가 기존 [이미지 컬렉션](/refguide9/image-collection/)에 포함되어 있어야 합니다.

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/exposeasnanoflow.png" alt="add caption category and icon" class="no-border" >}}

    그러면 Nanoflow를 편집할 때 **Toolbox** 창에 나타납니다:

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/iconintoolbox.png" alt="text to speech in nanoflow" class="no-border" >}}

10. 이제 JavaScript Action을 테스트해 보겠습니다! 먼저 새 JavaScript Action이 포함된 Nanoflow를 만드세요. **App Explorer**에서 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Add nanoflow**를 클릭하세요. 그런 다음 Nanoflow에 액션을 추가하고 **call a nanoflow action**을 선택하고 JavaScript Action을 선택하세요. JavaScript Action을 편집할 수 있는 창이 표시됩니다. **Input Text**의 **Edit** 버튼을 클릭하고 *'Hello world'*를 입력하세요. 그런 다음 **Use return value**를 *No* 라디오 버튼으로 설정하세요.

    {{< figure src="/attachments/howto9/extensibility/build-javascript-actions/write-javascript-actions/calljsactionnanoflow.png" alt="edit text in call javascript action dialog" class="no-border" >}}

11. 이제 새 Nanoflow를 활용할 차례입니다. 앱의 페이지에서 상단 중앙 도구 모음의 **Add widget**을 클릭하여 액션 버튼을 만드세요. 그런 다음 **Buttons**에서 **Call nanoflow button**을 선택하세요. 프롬프트가 표시되면 새 Nanoflow를 선택하세요.
12. 페이지에서 새 버튼을 놓을 위치를 클릭하세요. 페이지에 버튼이 배치되면 작업을 테스트할 수 있습니다. 모델을 실행하고 새 버튼을 클릭하면, 소리가 켜져 있다면 프로그래밍한 음성으로 인사를 받아야 합니다!

## 더 읽기{#read-more}

* [JavaScript Actions 빌드: 파트 2 (고급)](/howto9/extensibility/write-javascript-github/)
* [JavaScript Actions 모범 사례 구현](/howto9/extensibility/best-practices-javascript-actions/)
* [JavaScript Actions](/refguide9/javascript-actions/)
* [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/) 
* JavaScript 리소스:
    * [JavaScript 기초](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    * [Async 함수](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

---
title: "JavaScript Actions 모범 사례 구현"
linktitle: "JavaScript Actions 모범 사례"
url: /howto9/extensibility/best-practices-javascript-actions/
weight: 60
description: "고품질 JavaScript Actions을 만들고, 일반적인 구현 패턴을 사용하고, 더 나은 API를 설계하고, Nanoflow에서 JavaScript Actions을 사용하는 방법을 설명합니다."
---

## 소개

JavaScript Actions은 여러 새로운 기능으로 앱을 확장할 수 있습니다. JavaScript Actions을 가장 효과적으로 구현하려면 이러한 모범 사례를 반드시 따르세요.

이 모범 사례에서는 다음을 수행하는 방법을 배웁니다:

* 고품질 JavaScript Actions 만들기
* 일반적인 구현 패턴 배우기
* 더 나은 API 설계하기
* Nanoflow에서 JavaScript Actions 사용하기

## 액션 구현

JavaScript Actions은 브라우저에서 실행되며, 각 브라우저 버전은 고유한 JavaScript Standard Style 구현을 가지고 있습니다. 따라서 특정 액션은 일부 브라우저에서는 실행되지만 다른 브라우저에서는 실행되지 않을 수 있습니다. 호환성을 위해 ECMAScript 5로 작업하는 것을 권장합니다.

이전 브라우저에는 새로운 ES6 함수가 구현되어 있지 않을 수 있으므로, 특히 IE11을 지원해야 하는 경우 인터넷에서 최신 샘플 코드를 복사하여 붙여넣을 때 주의하세요. 일부 ECMAScript 6 함수는 Mendix Client에 의해 폴리필됩니다.

Mendix Studio Pro에는 [Core JS](https://github.com/zloirock/core-js)의 다음 폴리필이 포함되어 있습니다:

* **core-js/fn/array/find**
* **core-js/fn/array/from**
* **core-js/fn/array/includes**
* **core-js/fn/array/fill**
* **core-js/fn/array/find-index**
* **core-js/fn/object/assign**
* **core-js/fn/object/entries**
* **core-js/fn/object/is**
* **core-js/fn/object/set-prototype-of**
* **core-js/fn/object/values**
* **core-js/fn/string/starts-with**
* **core-js/fn/string/ends-with**
* **core-js/fn/string/pad-end**
* **core-js/features/string/includes**
* **core-js/features/promise**
* **core-js/features/symbol**
* **core-js/features/set**
* **core-js/features/map**

Mendix Studio Pro에는 Mozilla의 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)용 폴리필도 포함되어 있습니다.

### 입력 처리{#handlinginput}

JavaScript Action을 만들 때 입력 매개변수를 사용할 수 있습니다. JavaScript Actions은 다른 사람이 사용하지만 올바르게 사용되는지 알 수 없습니다. 액션을 더 견고하게 만들려면 모든 입력 매개변수의 유효성을 검사하고 가능한 경우 기본값을 활성화하세요.

입력 문자열 텍스트의 유효성을 검사하려면 다음 코드를 사용하세요:

```javascript
/**
 * @param {string} text
 */
async function TextToSpeech(text) {
    // BEGIN USER CODE    
    if (text === undefined) {
        // Throw an error when the parameter is set to 'empty', the value will be undefined 
        throw new Error("The Text parameter is required");
    }
    if (text.trim() === "") {
        // Throw an error when the text is an empty string ""
        throw new Error("The Text parameter can not be empty");
    }
    /* implementation */
    // END USER CODE
  }
```

Mendix 입력 객체의 유효성을 검사하려면 다음 코드를 사용하세요:

```javascript
/**
 * @param {MxObject} audioFile
 */
async function PlayAudio(audioFile) {
    // BEGIN USER CODE
    if (!audioFile) {
        throw new Error("The 'Audio file' parameter can not be empty");
    }
    if (!audioFile.isA("System.FileDocument") && !audioFile.inheritsFrom("System.FileDocument")) {
        throw new Error("The 'Audio file' parameter should inherit from System.FileDocument");
    }
    if (!audioFile.get("HasContents")) {
        throw new Error("The 'Audio file' parameter does not have any content");
    }
    const allowedExtensions = ["mp3", "wav", "ogg"]
    const fileName = audioFile.get("Name");
    const dotIndex = fileName.lastIndexOf(".");
    const extension = fileName.substring(dotIndex + 1).toLowerCase();
    if (dotIndex === -1 || allowedExtensions.indexOf(extension) === -1) {
        throw new Error("The 'Audio file' parameter only supports files with extension .mp3, .wav or .ogg");
    }
    /* implementation */
    // END USER CODE
}
```

객체 입력 리스트와 `attributesNames`의 유효성을 검사하려면 다음 코드를 사용하세요:

```javascript
/**
 * @param {MxObject[]} objectList
 * @param {string} attributeName
 * @returns {Promise.<Big>}
 */
async function SumListAttributeValues(objectList, attributeName) {
    // BEGIN USER CODE
    if (!attributeName || attributeName.trim() === "") {
        throw new Error("The 'Attribute name' parameter can not be empty");
    }
    if (!objectList || objectList.length === 0) {
        // Return early, sum of empty is 0
        return new Big(0);
    }
    if (!objectList[0].has(attributeName)) {
        throw new Error("List of type " + objectList[0].getEntity() + " does not have an attribute named " + attributeName);
    }
    if (!objectList[0].isNumeric(attributeName)) {
        throw new Error("List of type " + objectList[0].getEntity() + " an attribute named " + attributeName + " is not numeric");
    }
    /* implementation */
    // END USER CODE
}
```

기본 입력 값을 위한 코드를 사용하세요:

```javascript
/**
 * @param {Big} targetSize
 * @param {"Module.PictureSource.camera"|"Module.PictureSource.gallery"} pictureSource
 * @param {boolean} correctOrientation
 * @param {string} waterMark
 */
function CameraStart(targetSize, pictureSource, correctOrientation, waterMark) {
    // BEGIN USER CODE
    targetSize = targetSize && targetSize > 0 ? targetSize : 150;  // numeric
    pictureSource = pictureSource ? pictureSource : "camera"; // enumeration
    correctOrientation = correctOrientation ? true : false; // boolean
    waterMark = waterMark !== undefined ? waterMark : "DEMO"; // string
    /* implementation */
    // END USER CODE
}
```

입력 유형에 대한 자세한 내용은 [JavaScript Actions](/refguide9/javascript-actions/)를 참조하세요. 올바른 입력 유형을 선택하는 방법에 대한 자세한 내용은 아래 [더 나은 API](#betterapis) 섹션을 참조하세요.

### 액션 코딩

JavaScript Actions을 커스터마이징하려면 아래 섹션을 참조하세요.

#### Mendix Client API 이해

JavaScript Actions 내에서 전체 Mendix Client API를 사용할 수 있습니다. 참조는 [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/)를 확인하세요. Mendix Client API의 일부는 Widget용으로 만들어졌으며 JavaScript Actions과는 관련성이 적습니다.

#### JavaScript Actions에서 숫자 매개변수 사용

Decimal, Integer 또는 Long 유형의 매개변수를 사용할 때, 매개변수는 JavaScript에서 일반적으로 사용하는 숫자가 아닙니다. 대신 Mendix Client에서 사용하는 *Big.js*라는 JavaScript 라이브러리의 `Big` 객체입니다. 이는 애플리케이션에서 사용하는 숫자가 기본 JavaScript 숫자 제한에 의해 제약되지 않도록 하기 위함입니다.

```javascript
// Precision limitation of JavaScript numbers
0.1 + 0.2                  // 0.30000000000000004
// Solved with BigJs
x = new Big(0.1)
y = x.plus(0.2)            // '0.3'
```

JavaScript Action이 이 확장된 정밀도를 필요로 하지 않는 경우 (예: 1에서 100 사이의 간단한 정수를 예상하는 경우) `Big` 객체를 JavaScript 숫자로 쉽게 변환할 수 있습니다:

```javascript
const numberValue = Number(bigJsValue); // number
```

*Big.js* 사용 방법에 대한 자세한 내용은 [big.js API](https://mikemcl.github.io/big.js/)를 참조하세요.

#### 객체 생성

객체를 생성하려면 다음 코드를 사용하세요:

```javascript
mx.data.create({
    entity: "MyFirstModule.Cat",
    callback: function(object) {
        console.log("Object created on server");
    },
    error: function(error) {
        console.error("Could not commit object:", error);
    }
});
```

객체 생성에 대한 자세한 내용은 *Mendix Client API*의 [Create](https://apidocs.rnd.mendix.com/9/client/mx.data.html#.create) 섹션을 참조하세요.

#### 객체 변경

객체를 변경하려면 다음 코드를 사용하세요:

```javascript
mxobj.get("Name");               // "Fred"
mxobj.set("Name", "Henry");
mxobj.get("Name");               // "Henry"
mxobj.getOriginalValue("Name")   // "Fred"
```

객체 변경에 대한 자세한 내용은 *Mendix Client API*의 [Set](https://apidocs.rnd.mendix.com/9/client/mendix_lib_MxObject.html#set) 섹션을 참조하세요.

#### 플랫폼 기본 제공 종속성 로드

플랫폼 기본 제공 종속성을 로드하려면 다음 코드를 사용하세요 (기본 제공 종속성은 Mendix 버전에 따라 다를 수 있습니다):

```javascript
// Synchronous libs that are already loaded
var lang = require("mendix/lang");
```

Mendix Client에서 제공하는 라이브러리는 다음과 같습니다:

* [mendix/lang](https://apidocs.rnd.mendix.com/9/client/module-mendix_lang.html)
* [mendix/validator](https://apidocs.rnd.mendix.com/9/client/module-mendix_validator.html)
* [mxui/dom](https://apidocs.rnd.mendix.com/9/client/module-mxui_dom.html)
* [mxui/html/parser](https://apidocs.rnd.mendix.com/9/client/module-mxui_html_parser.html)

Dojo 및 Document Object Model(DOM) 함수를 사용할 수 있지만 권장하지 않습니다. Dojo 및 DOM 함수에 대한 자세한 내용은 아래 이 문서의 [잘못된 사례 이해](#badpractice) 섹션을 참조하세요.

#### 브라우저에서 외부 종속성 사용

외부 라이브러리 로드 및 번들링은 현재 지원되지 않습니다. 라이브러리 코드와 CSS를 JavaScript 내에 포함하는 것은 이상적이지 않습니다. 라이브러리 JavaScript 파일과 CSS를 theme 폴더에 추가하고 *index.html* 및 *components.json*에서 참조하는 것이 권장됩니다.

다음은 [pdf-lib](https://github.com/Hopding/pdf-lib)를 기반으로 한 외부 종속성 사용 예시입니다:

1. 명령 프롬프트를 열고 `cd --your-app-folder--/javascriptsource/--ModuleName--/actions`를 사용하여 올바른 폴더로 이동하세요.
2. `npm install pdf-lib`을 실행하세요.
3. JavaScript Action에서 다음 코드를 사용하여 라이브러리를 가져오세요:

    ```javascript
    // This file was generated by Mendix Studio Pro.
    //
    // WARNING: Only the following code will be retained when actions are regenerated:
    // - the import list
    // - the code between BEGIN USER CODE and END USER CODE
    // - the code between BEGIN EXTRA CODE and END EXTRA CODE
    // Other code you write will be lost the next time you deploy the app.
    import { Big } from "big.js";
    import { PDFDocument } from "pdf-lib"
    
    // BEGIN EXTRA CODE
    ```

#### 하이브리드 앱 외부 종속성 이해

Mendix 하이브리드 앱은 기본적으로 대량의 플러그인 세트와 함께 제공됩니다. 기본 플러그인에 대한 자세한 내용은 *하이브리드 앱 베이스 및 템플릿* 릴리스 노트의 [2018년 11월 20일 버전 업그레이드](/releasenotes/mobile/hybrid-app/#upgrades-20) 섹션을 참조하세요.

모바일 빌드 중에 새 플러그인을 추가하는 것도 가능합니다.

사용 중인 실제 플러그인 목록은 배포 패키지 내의 *config.xml*에서 찾을 수 있습니다.

### 반환 이해

JavaScript Action은 Integer, DateTime, Object, List of object 및 Generics와 같은 반환 유형을 지정할 수 있습니다. 반환에 대한 자세한 내용은 [JavaScript Actions](/refguide9/javascript-actions/)를 참조하세요.

액션은 동기식 또는 비동기식일 수 있습니다. 동기식 액션은 값을 직접 반환하고 실행을 완료합니다. 비동기식 액션은 Promise를 반환하며 나중에 실행을 계속하고 완료합니다. Nanoflow는 Promise가 해결될 때 계속 실행됩니다.

기본적으로 JavaScript는 동기식 프로그래밍 언어입니다 — 한 번에 한 줄의 코드를 실행합니다. 코드 줄이 실행 중이면 Mendix Client의 다른 모든 JavaScript 실행을 차단하여 Mendix Client가 느리게 보이게 합니다. 비동기 함수는 이 문제를 해결합니다. 비동기 함수를 사용하면 결과가 사용 가능할 때 나중에 실행되도록 함수가 저장됩니다. 이 방법으로 다른 JavaScript가 실행되는 것을 방지하지 않습니다.

결과를 직접 사용할 수 있을 때 동기식 반환을 사용하려면 다음 코드를 사용하세요:

```javascript
    /**
     * @param {Big} valueA
     * @param {Big} valueB
     * @param {Big}
     */
    function AddValue(valueA, valueB) {
        // BEGIN USER CODE
        return valueA.plus(valueB)
        // END USER CODE
    }
```

Nanoflow가 액션이 완료될 때까지 기다려야 하는 경우 비동기식 반환을 사용하려면 다음 코드를 사용하세요:

```javascript
    function Wait(delay) {
        // BEGIN USER CODE
        return new Promise(function(resolve) {
            window.setTimeout(function(){
                resolve();
            }, delay);
        });
        // END USER CODE
    }
```

많은 API와 함수는 비동기 방식으로 설계되어 콜백 함수 또는 Promise를 사용합니다. JavaScript Action은 Promise가 반환되기를 기대합니다. Promise는 액션에서 예상되는 반환 값으로 해결되어야 합니다.

#### Promise 이해

`Promise` 객체는 비동기 작업의 최종 완료(또는 실패)와 그 결과 값을 나타냅니다.

콜백 API를 Promise로 래핑하려면 다음 코드를 사용하세요:

```javascript
function AskConfirmation(question) {
    // BEGIN USER CODE
    return new Promise(function (resolve) {
        mx.ui.confirmation({
            content: question,
            handler: function() {
                resolve(true);
            },
            onCancel: function() {
                resolve(false);
            }
        });
    });
    // END USER CODE
}
```

콜백 코드 설명:

* 표준 Mendix Client를 사용하여 **OK** 및 **Cancel** 버튼이 있는 확인 대화 상자를 표시합니다 (Nanoflow의 실행은 사용자가 버튼 중 하나를 클릭할 때까지 중단됩니다)
* resolve는 Boolean 값을 반환하며, 이는 액션의 반환 값으로 사용됩니다
* Nanoflow에서 반환 변수는 확인 및 취소에 대한 대체 흐름에 사용할 수 있습니다

#### Promise API 이해

이 함수는 Fetch API를 사용합니다:

```javascript
async function GetUserNameSampleRest(userID) {
    // BEGIN USER CODE
    if (!userID) {
        throw new Error("The UserID parameter is required")
    }
    const url = "https://jsonplaceholder.typicode.com/users/" + userID;
    try {
        const response = await fetch(url); // Fetch returns a promise, gets the url and wait for result
        const jsonData = await response.json(); // Transform to json
        return jsonData.name; // Get the data
    } catch (error) {
        throw new Error("Failed to get user information");
    }
    // END USER CODE
}
```

Fetch API 코드 설명:

* URL은 JSON 객체 `{ id: string, name: string }`을 반환하는 샘플 API를 참조하며, `fetch`는 Promise를 반환하는 데이터 조회용 브라우저 API입니다 ([MDI Fetch API 문서](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 참조) — 응답은 `.json()` 함수로 데이터로 변환되는 Promise이며 (이름에 접근하여 반환됩니다)

* 이것은 async 함수이므로 fetch, JSON 파싱, 데이터 접근의 세 단계 모두에서 오류 처리를 단일 `try...catch` 블록 내에서 수행할 수 있습니다 (더 자세한 설명은 [async/await를 사용한 오류 처리에 대한 MDN 문서](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#adding_error_handling)를 참조하세요).

* JavaScript Action REST 소비 함수 빌드에 대한 자세한 내용은 [JavaScript Actions 빌드: 파트 2 (고급)](/howto9/extensibility/write-javascript-github/)을 참조하세요.

#### 일반적인 Promise 함수 이해

가장 일반적으로 사용되는 Promise 함수는 다음과 같습니다:

* `new Promise(`*`executor`*`)`: 반환할 수 있는 새 Promise를 생성합니다 — executor 함수는 resolve와 reject 두 개의 매개변수를 받습니다
* `resolve(someValue)`: 결과 값과 함께 호출해야 합니다 — 값은 Nanoflow 반환 값으로 사용됩니다
* `reject(rejectReason)`: Nanoflow에서 오류를 발생시키고 실행을 중단합니다
* `Promise.resolve(results)`: 결과로 해결된 `Promise` 객체를 반환하며, Nanoflow의 액션 출력 변수에 설정됩니다
* `Promise.reject(errorMessage)`: 거부된 `Promise` 객체를 반환하며, 거부는 Nanoflow에서 오류를 유발한다고 설명합니다
* `.then()`: Promise 체이닝을 가능하게 하여 중첩된 콜백 함수보다 코드를 읽기 쉽게 만듭니다

JavaScript 언어에 더 최근에 추가된 것은 `async functions`와 `await` 키워드입니다. 이러한 기능은 비동기 코드를 더 동기적인 코드처럼 보이게 하여 작성하고 나중에 읽기 쉽게 만듭니다. `async/await`를 코드에서 사용하는 데는 두 부분이 있습니다:

* `async` 키워드 — 함수 선언 앞에 놓아 비동기 함수로 만듭니다 (값을 직접 반환하는 대신 Promise를 반환하도록 합니다)
* `await` — 비동기 Promise 기반 함수 앞에 놓아 Promise가 이행될 때까지 해당 줄에서 코드를 일시 중지한 다음 결과 값을 반환합니다

오류 처리에는 몇 가지 옵션이 있습니다:

* `async/await`와 함께 동기적 `try...catch` 구조를 사용하여 비동기 함수 호출을 래핑합니다. `catch(`*`error`*`) {}` 블록은 거부된 `Promise`의 오류 객체를 받습니다
* `.then()` 호출의 끝에 `.catch(`*`error`*`)` 블록을 체이닝합니다

#### Promise 함수 모범 사례 사용

Promise 함수를 사용할 때 다음 사항에 유의하세요:

* 현재 JavaScript Actions은 항상 반환 유형을 기대합니다 — 액션에 관련 있는 반환 값이 없는 경우 반환 유형 `String`을 선택하세요 (구현된 반환 또는 Promise는 `undefined`일 수 있습니다)
* Nanoflow에서 JavaScript Action을 사용할 때 출력 `Use return variable`을 `No`로 설정하세요
* 반환 유형 Boolean은 `undefined` 값으로 반환해서는 안 됩니다 (반환된 변수가 Nanoflow에서 실수로 사용되면 오류가 발생합니다)
* 코드가 실행될 수 있거나 건너뛰어야 하는 경우 일찍 반환하는 것이 좋습니다 — 예를 들어 입력을 유효성 검사할 때
* JavaScript에서 처리되지 않은 오류는 Microflow에서 오류를 발생시킵니다 — 현재 Microflow에서처럼 Nanoflow에 오류 핸들러를 추가하는 방법은 없습니다

## 재사용 가능한 JavaScript Actions 만들기

JavaScript Actions을 가장 효과적으로 만들고 개선하려면 아래 하위 섹션을 참조하세요.

### 더 나은 API 설계{#betterapis}

잘 설계된 API를 통해 JavaScript Actions은 더 쉽게 재사용할 수 있습니다. API를 설계할 때 다음 지침을 고려하세요:

* 작고 기능적인 액션을 만드세요 — 많은 기능이 있는 액션을 더 작은 컴포넌트로 분할하면 Nanoflow에서 다양한 방식으로 결합할 수 있습니다
* 부작용을 최소화하세요 — 부작용이 없는 액션은 상태가 없고 다른 컴포넌트의 상태에 의존하지 않으므로 독립적으로 사용할 수 있습니다 (이는 개발자가 테스트와 동작 예측을 더 쉽게 합니다)
* 표준 액션으로 수행할 수 있는 액션을 구현하지 말고, 새로운 기능과 기존 기능을 단일 액션에 결합하지 마세요 (대신 Nanoflow에서 여러 액션으로 필요한 기능을 구성하세요)
* 비즈니스 로직은 Nanoflow에 있어야 합니다 — 액션은 `Do`, `Check` 상태, `Get` 데이터만 해야 합니다
* Mendix Client가 액션을 수행할 수 있다는 것을 모르는 개발자를 위해 `Check` 액션과 `Do` 액션을 만드세요 — 예를 들어 `CheckCameraSupported`와 `OpenCamera` 액션
* 액션과 매개변수에 명확한 이름을 지정하세요 (이것이 API를 문서화하는 데 큰 도움이 됩니다)
* 액션, 매개변수, 기본값, 반환 값, 오류 및 호환성을 문서화하세요 — 자세한 내용은 아래 이 문서의 [JavaScript Actions 문서화](#document) 섹션을 참조하세요
* 가장 일반적인 기능만 노출하세요 — 노출된 함수가 적은 라이브러리는 이해, 사용, 유지 관리 및 테스트가 더 쉽습니다 (새 기능은 나중에 항상 추가할 수 있습니다)
* 사용된 라이브러리와 독립적인 API를 설계하세요 (이렇게 하면 API를 변경하지 않고 구현을 변경하거나 라이브러리를 교체할 수 있습니다)
* 개발자에게 친숙한 언어를 사용하세요 — 예를 들어 함수 이름에 구현 세부 정보를 포함하지 않아야 합니다; `OpenPhoneGapCamera`는 `OpenCamera`가 되어야 합니다

최선의 API 사례를 위한 추가 기술적 제안을 고려하세요:

* 자유 형식 문자열보다 제한된 옵션에 대해 열거형을 선호하세요 — 예: 소스 "Camera", "Gallery" 또는 "User choice"
* 이진 매개변수에는 Boolean 옵션을 선호하세요 — 예: 'Blocking dialog' (true / false)
* 원시 반환 유형을 선호하세요 — 가능하면 객체를 반환하지 말고 대신 반환 String 또는 Decimal을 사용하세요
* 객체를 변경하지 마세요; 대신 새로운 비영속 Entity(NPE) 객체를 만드세요 — NPE 객체는 액션과 함께 모듈에 포함되어야 하며 다양한 관련 없는 Nanoflow에서 재사용할 수 있습니다
* 작업하지 않을 때 NPE 객체가 Entity 또는 Generic 매개변수에 의존하도록 하세요 (이렇게 하면 도메인 모델에서 Entity 이름이 변경될 때 오류를 생성할 수 있는 하드코딩된 Entity 이름을 제한할 수 있습니다)
* 입력의 유효성을 검사하고 개발자가 액션을 올바르게 사용하고 있다고 신뢰하지 마세요 — 자세한 내용은 위 이 문서의 [입력 처리](#handlinginput) 섹션을 참조하세요
* 가능하면 입력 매개변수에 합리적인 기본값을 제공하세요

### JavaScript Actions 노출

JavaScript Actions은 JavaScript Action 호출 액티비티를 사용하여 Nanoflow에서 사용할 수 있습니다. 또한 액티비티 목록에서 액션을 노출할 수도 있습니다. 이렇게 하면 개발자가 액션을 더 쉽게 찾을 수 있습니다. 자주 재사용되는 액션만 노출하는 것이 좋습니다.

**Category**를 사용하여 액션을 그룹화하고, **Icon** 및 **Image**를 사용하여 노출된 Nanoflow 액션을 Nanoflow 내에서 쉽게 인식할 수 있게 하세요:

{{< figure src="/attachments/howto9/extensibility/best-practices-javascript-actions/narrow-expose.png" alt="exposed nanoflow with info" width="650" class="no-border" >}}

### JavaScript Actions 게시

App Explorer에서 JavaScript Action을 마우스 오른쪽 버튼으로 클릭한 다음 **Export document to file**을 선택하여 단일 액션을 내보낼 수 있습니다. 그러면 내보낸 파일을 다른 개발자와 공유할 수 있습니다. 단일 Nanoflow는 Mendix Marketplace에 게시할 수 없습니다. 대신 모듈로 게시하세요.

App Explorer에서 모듈을 마우스 오른쪽 버튼으로 클릭한 다음 **Import document from file**을 선택하여 단일 액션을 가져올 수 있습니다. 그런 다음 JavaScript Action 파일을 선택하세요.

단일 Nanoflow 액션은 Mendix Marketplace에 게시할 수 없습니다. 모듈로 게시할 수 있지만, 관련 Nanoflow 액션을 모듈 내에서 그룹으로 게시하는 것이 좋습니다. 여러 Nanoflow 액션이 포함된 모듈의 경우 "entities"와 같은 관련 데이터 모델로 액션을 그룹화하고 외부 종속성에 대한 관련 문서를 제공하세요. 모듈을 전체로 내보내고 Mendix Marketplace에 업로드하세요. 추가 지침은 [Marketplace 콘텐츠 공유 방법](/appstore/submit-content/)을 참조하세요.

### JavaScript Actions 문서화{#document}

잘 문서화된 액션은 재사용하기가 더 쉽습니다. 문서화할 때 다음을 고려하세요:

* 올바른 이름 지정이 문서화의 가장 중요한 측면입니다
    * "VerbNoun" 명명 규칙을 사용하세요, 예: GetUser
    * 자체 설명적인 매개변수 이름을 사용하세요
* 액션의 **Settings** > **Documentation** 탭에서 다음을 설명하세요:
    * 액션이 수행하는 작업
    * 반환 값
    * 지원되는 플랫폼 (웹, 모바일 또는 네이티브 등)
    * 브라우저 호환성 (Chrome, Firefox 또는 Edge 등)
    * 종속 모듈 (있는 경우)
    * 사용된 라이브러리 또는 함수
* 매개변수에 대해 설명을 추가하고 구현된 경우 기본값을 제공하세요
* 사용된 API에 대한 문서를 참조하세요
* 외부 종속성을 기록하고 추가 방법을 설명하세요

## JavaScript Actions 테스트

광범위한 테스트 앱은 JavaScript Action을 더 견고하게 만드는 데 도움이 됩니다. 테스트 앱 내에서 빈 입력과 처리해야 할 오류 사례를 포함하여 입력의 모든 가능한 변형을 만들어 보세요.

테스트할 때 모든 호환 플랫폼(웹, 하이브리드 및 네이티브)을 확인하세요. 웹은 Mendix 브라우저 호환성을 처리해야 합니다. 호환성에 대한 자세한 내용은 *시스템 요구 사항*의 [브라우저](/refguide9/system-requirements/#browsers) 섹션을 참조하세요.

액션이 플랫폼과 호환되지 않는 경우 오류가 발생하기 전에 추가 액션으로 확인할 수 있어야 합니다. 예를 들어, 카메라를 시작하기 전에 `CheckCameraSupport` 액션을 사용하세요. 액션이 호출되었지만 호환되지 않는 경우 정상적으로 실패하거나 명확한 오류 메시지를 표시해야 합니다.

## JavaScript Actions 디버깅

JavaScript Action 코드의 디버깅은 브라우저 개발자 도구 내에서 수행할 수 있습니다. 이 방법에 대한 자세한 내용은 브라우저의 개발자 도구 문서 [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/), [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools), [Microsoft Edge Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium) 또는 Safari의 [Web Development Tools](https://developer.apple.com/safari/tools/)를 참조하세요.

처음에는 JavaScript Actions의 소스 코드가 로드되지 않습니다. 모듈 액션의 첫 번째 실행 직전에 소스 코드가 로드됩니다. 그 순간부터 Chrome을 사용하는 경우 **Developer Tools**의 **Sources** 탭에서 **javascript-actions** 폴더에서 소스 코드를 찾을 수 있습니다.

파일이 로드된 후 인라인 번호를 클릭하여 코드에 중단점을 설정할 수 있습니다 (아래 스크린샷의 **A**). 또는 **Pause on caught exceptions**를 선택하여 문제를 찾을 수 있습니다 (**B**). 마지막 수단으로 `debugger;` 줄을 추가하여 소스 코드를 변경할 수 있습니다 (**C**). 이 명령문은 액션이 처음 실행될 때 디버깅 도구를 시작하고 중단점을 적용합니다:

{{< figure src="/attachments/howto9/extensibility/best-practices-javascript-actions/debugging.png" alt="debugging"   width="500"  class="no-border" >}}

## 잘못된 사례 이해 {#badpractice}

모든 기능이 사용에 권장되는 것은 아닙니다. 액션이 Mendix Client, DOM 또는 다른 Widget에 미칠 수 있는 부작용을 고려하세요:

* 사용자의 브라우저를 가정하지 마세요 — 모든 브라우저가 동일한 기능을 가지고 있는 것은 아닙니다
* 영구적인 렌더링은 Pluggable Widget을 사용하여 수행해야 합니다 — 새 Mendix Client는 원할 때 페이지를 렌더링하고 변경 사항을 제거합니다 (예: DOM을 렌더링할 때 `index.html`의 DOM 노드에서 작업하세요)
* DOM에 대한 변경 사항은 원할 때 DOM을 렌더링하는 Mendix Client로 인해 손실될 수 있습니다 (예: 다른 컴포넌트에 CSS 클래스를 추가하면 Mendix Client가 원할 때 페이지를 렌더링하고 변경 사항을 제거합니다) — `<div id="content"></div>` 외부에 배치된 DOM 요소를 만들고 변경할 수 있습니다
* 더 이상 사용되지 않는 라이브러리 사용을 피하세요 — Dojo나 Dijit는 더 이상 사용되지 않으므로 사용하지 마세요 (jQuery도 더 이상 사용하지 않아야 합니다)
* `undefined`를 반환하는 Boolean 액션 사용을 피하세요 — Boolean 변수는 값이 필요한 유일한 변수이며, 허용 가능한 상태는 `true` 또는 `false`뿐입니다 (다른 변수는 `undefined`로 설정할 수 있으며 Mendix Studio Pro에서 `$variable != empty`로 확인할 수 있습니다)

## 더 읽기

* [JavaScript Actions 빌드](/howto9/extensibility/build-javascript-actions/)
* [JavaScript Actions](/refguide9/javascript-actions/)
* [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/)
* JavaScript 기초:
    * [Mozilla JavaScript 기초](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    * [Async 함수](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

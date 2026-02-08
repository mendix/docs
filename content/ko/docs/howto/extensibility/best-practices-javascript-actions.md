---
title: "JavaScript Actions 모범 사례 구현"
linktitle: "JavaScript Actions 모범 사례"
url: /howto/extensibility/best-practices-javascript-actions/
weight: 60
description: "고품질 JavaScript Actions 생성, 일반적인 구현 패턴 사용, 더 나은 API 설계, Nanoflow에서 JavaScript Actions 사용 방법을 설명합니다."
---

## 소개

JavaScript Actions는 앱에 여러 새로운 기능을 확장할 수 있습니다. JavaScript Actions를 가장 효과적으로 구현하려면 이 모범 사례를 따르세요.

이 모범 사례를 통해 다음을 배울 수 있습니다:

* 고품질 JavaScript Actions 생성
* 일반적인 구현 패턴 학습
* 더 나은 API 설계
* Nanoflow에서 JavaScript Actions 사용

## Actions 구현

JavaScript Actions는 브라우저에서 실행되며, 각 브라우저 버전에는 JavaScript Standard Style의 고유한 구현이 있습니다. 따라서 특정 Actions는 일부 브라우저에서는 실행되지만 다른 브라우저에서는 실행되지 않을 수 있습니다. 호환성을 위해 ECMAScript 5로 작업하는 것이 권장됩니다.

이전 브라우저에는 새로운 ES6 기능이 구현되어 있지 않을 수 있으므로, 특히 IE11을 지원해야 하는 경우 인터넷에서 최신 샘플 코드를 복사하여 붙여넣을 때 주의하세요. 일부 ECMAScript 6 기능은 Mendix Client에 의해 폴리필됩니다.

Mendix Studio Pro에는 [Core JS](https://github.com/zloirock/core-js)에서 가져온 다음 폴리필이 포함되어 있습니다:

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

Mendix Studio Pro에는 Mozilla의 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)에 대한 폴리필도 포함되어 있습니다.

### 입력 처리{#handlinginput}

JavaScript Action을 생성할 때 입력 매개변수를 사용할 수 있습니다. JavaScript Actions는 다른 사람들이 사용하게 되지만, 올바르게 사용될지는 알 수 없습니다. Actions를 더 견고하게 만들려면 모든 입력 매개변수를 검증하고 가능한 경우 기본값을 활성화하세요.

입력 문자열 텍스트 검증 코드:

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

Mendix 입력 객체 검증 코드:

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

객체 목록과 `attributesNames` 입력 검증 코드:

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

기본 입력값 코드:

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

입력 유형에 대한 자세한 내용은 [JavaScript Actions](/refguide/javascript-actions/)를 참조하세요. 올바른 입력 유형 선택에 대한 자세한 내용은 아래 [더 나은 API](#betterapis) 섹션을 참조하세요.

### Actions 코딩

JavaScript Actions를 맞춤화하려면 아래 섹션을 참조하세요.

#### Mendix Client API 이해

JavaScript Actions 내에서 전체 Mendix Client API를 사용할 수 있습니다. 참조는 [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/)를 참조하세요. Mendix Client API의 일부는 위젯용으로 생성되었으며, JavaScript Actions와는 관련성이 적습니다.

#### JavaScript Actions에서 숫자 매개변수 사용

decimal, integer 또는 long 유형의 매개변수를 사용할 때, 매개변수는 JavaScript에서 익숙한 숫자가 아닙니다. 대신, Mendix Client에서 사용하는 *Big.js*라는 JavaScript 라이브러리의 `Big` 객체가 됩니다. 이는 애플리케이션에서 사용되는 숫자가 기본 JavaScript 숫자 제한에 의해 제약받지 않도록 보장합니다.

```javascript
// Precision limitation of JavaScript numbers
0.1 + 0.2                  // 0.30000000000000004
// Solved with BigJs
x = new Big(0.1)
y = x.plus(0.2)            // '0.3'
```

JavaScript Action에 확장된 정밀도가 필요하지 않다면(예: 1에서 100 사이의 간단한 정수를 예상하는 경우) `Big` 객체를 JavaScript 숫자로 쉽게 변환할 수 있습니다:

```javascript
const numberValue = Number(bigJsValue); // number
```

*Big.js* 사용법은 [big.js API](https://mikemcl.github.io/big.js/)를 참조하세요.

#### 객체 생성

객체를 생성하려면 다음 코드를 사용하세요:

```javascript
import { create } from "mx-api/data"

try {
    const cat = await create({ entity: "MyFirstModule.Cat" })
    console.log("Object created on server:", cat);
} catch (err) {
    console.error("Could not commit object:", err);
}
```

객체 생성에 대한 자세한 내용은 *Mendix Client API*의 [Create](https://apidocs.rnd.mendix.com/11/client-mx-api/module-mx-api_data.html#.create) 섹션을 참조하세요.

#### 객체 변경

객체를 변경하려면 다음 코드를 사용하세요:

```javascript
mxobj.get("Name");               // "Fred"
mxobj.set("Name", "Henry");
mxobj.get("Name");               // "Henry"
mxobj.getOriginalValue("Name")   // "Fred"
```

객체 변경에 대한 자세한 내용은 *Mendix Client API*의 [Set](https://apidocs.rnd.mendix.com/10/client/mendix_lib_MxObject.html#set) 섹션을 참조하세요.

#### 플랫폼 탑재 의존성 로드

플랫폼 탑재 의존성을 로드하려면 다음 코드를 사용하세요(탑재 의존성은 Mendix 버전에 따라 다를 수 있음):

```javascript
// Synchronous libs that are already loaded
var lang = require("mendix/lang");
```

Mendix Client에서 제공하는 라이브러리:

* [mendix/lang](https://apidocs.rnd.mendix.com/10/client/module-mendix_lang.html)
* [mendix/validator](https://apidocs.rnd.mendix.com/10/client/module-mendix_validator.html)
* [mxui/dom](https://apidocs.rnd.mendix.com/10/client/module-mxui_dom.html)
* [mxui/html/parser](https://apidocs.rnd.mendix.com/10/client/module-mxui_html_parser.html)

Dojo 및 DOM(Document Object Model) 함수를 사용할 수 있지만 권장되지 않습니다. Dojo 및 DOM 함수에 대한 자세한 내용은 이 문서의 [나쁜 관행 이해](#badpractice) 섹션을 참조하세요.

#### 브라우저에서 외부 의존성 사용

외부 라이브러리의 로딩 및 번들링은 현재 지원되지 않습니다. 라이브러리 코드와 CSS를 JavaScript 내에 포함하는 것은 이상적이지 않습니다. 라이브러리 JavaScript 파일과 CSS를 테마 폴더에 추가하고 *index.html*과 *components.json*에서 참조하는 것이 권장됩니다.

다음은 [pdf-lib](https://github.com/Hopding/pdf-lib)를 기반으로 한 외부 의존성 사용 예시입니다:

1. 명령 프롬프트를 열고 `cd --your-app-folder--/javascriptsource/--ModuleName--/actions`를 사용하여 올바른 폴더로 이동합니다.
2. `npm install pdf-lib`를 실행합니다.
3. JavaScript Action에서 다음 코드를 사용하여 라이브러리를 가져옵니다:

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

### 반환값 이해

JavaScript Action은 Integer, DateTime, Object, List of object, Generics 등의 반환 유형을 지정할 수 있습니다. 반환에 대한 자세한 내용은 [JavaScript Actions](/refguide/javascript-actions/)를 참조하세요.

Actions는 동기식 또는 비동기식이 될 수 있습니다. 동기식 Actions는 값을 직접 반환하고 실행을 완료합니다. 비동기식 Action은 Promise를 반환하며, 나중에 계속 실행되고 완료됩니다. Promise가 resolved될 때 Nanoflow는 계속 실행됩니다.

본질적으로 JavaScript는 동기식 프로그래밍 언어입니다 – 한 번에 하나의 코드 라인을 실행합니다. 코드 라인이 실행 중이면 Mendix Client의 다른 모든 JavaScript가 실행되지 않아 Mendix Client가 느리게 보입니다. 비동기 함수는 이 문제를 해결합니다. 비동기 함수를 사용하면 결과가 사용 가능할 때 나중에 실행하기 위해 함수가 저장됩니다. 이렇게 하면 다른 JavaScript의 실행이 방해받지 않습니다.

결과가 직접 사용 가능한 경우 동기식 반환 코드:

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

Nanoflow가 Action이 완료될 때까지 대기해야 하는 경우 비동기식 반환 코드:

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

많은 API와 함수는 비동기 방식으로 설계되어 콜백 함수 또는 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 사용합니다. JavaScript Action은 Promise가 반환되기를 기대합니다. Promise는 Action에서 기대하는 반환값으로 resolved되어야 합니다.

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

* URL은 JSON 객체 `{ id: string, name: string }`를 반환하는 샘플 API를 참조하며, `fetch`는 Promise를 반환하는 브라우저 API입니다([MDI Fetch API 문서](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 참조) — 응답은 `.json()` 함수로 데이터로 변환되는 Promise입니다(이름이 접근되어 반환됨)

* async 함수이므로, fetch, JSON 파싱, 데이터 접근의 세 단계 모두에서의 오류 처리를 하나의 `try...catch` 블록 내에서 수행할 수 있습니다(자세한 설명은 [async/await 오류 처리에 대한 MDN 문서](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#adding_error_handling) 참조).

* JavaScript Action REST 소비 함수 구축에 대한 자세한 내용은 [Build JavaScript Actions: Part 2 (Advanced)](/howto/extensibility/write-javascript-github/)를 참조하세요.

#### 일반적인 Promise 함수 이해

가장 일반적으로 사용되는 Promise 함수:

* `new Promise(`*`executor`*`)`: 반환할 수 있는 새 Promise를 생성합니다 — executor 함수는 resolve와 reject 함수라는 두 매개변수를 받습니다
* `resolve(someValue)`: 결과 값으로 호출되어야 합니다 — 값은 Nanoflow 반환값에 사용됩니다
* `reject(rejectReason)`: Nanoflow에서 오류를 발생시키고 실행을 중지합니다
* `Promise.resolve(results)`: 결과로 resolved된 `Promise` 객체를 반환하며, Nanoflow의 Action 출력 변수에 설정됩니다
* `Promise.reject(errorMessage)`: rejected된 `Promise` 객체를 반환하며, Nanoflow에서 오류를 유발합니다
* `.then()`: Promise 체이닝을 가능하게 하여 중첩된 콜백 함수보다 코드를 읽기 쉽게 만듭니다

JavaScript 언어에 최근 추가된 것은 `async 함수`와 `await` 키워드입니다. 이 기능들은 비동기 코드를 더 쉽게 작성하고 나중에 읽기 쉽게 만듭니다:

* `async` 키워드는 함수 선언 앞에 놓아 async 함수로 변환합니다(값을 직접 반환하는 대신 Promise를 반환하도록 합니다)
* `await`는 모든 async Promise 기반 함수 앞에 놓아 Promise가 fulfilled될 때까지 코드를 일시 중지하고 결과 값을 반환할 수 있습니다

오류 처리에는 몇 가지 옵션이 있습니다:

* `async/await`와 함께 동기식 `try...catch` 구조를 사용하고 async 함수 호출을 감쌉니다. `catch(`*`error`*`) {}` 블록은 rejected된 `Promise`의 오류 객체를 받습니다
* `.then()` 호출 끝에 `.catch(`*`error`*`)` 블록을 체이닝합니다

#### Promise 함수 모범 사례 사용

Promise 함수 사용 시 다음 사항에 유의하세요:

* 현재 JavaScript Actions는 항상 반환 유형을 기대합니다 — Action에 관련 반환값이 없는 경우 반환 유형 `String`을 선택하세요(구현된 반환 또는 Promise는 `undefined`일 수 있음)
* Nanoflow에서 JavaScript Action을 사용할 때 출력 `Use return variable`을 `No`로 설정하세요
* Boolean 반환 유형은 `undefined` 값으로 반환되어서는 안 됩니다(반환된 변수가 Nanoflow에서 실수로 사용되면 오류가 발생함)
* 코드가 실행될 수 있거나 건너뛰어야 하는 경우 일찍 반환하는 것이 권장됩니다 — 예: 입력 검증 시
* JavaScript의 포착되지 않은 오류는 Microflow에서 오류를 발생시킵니다 — 현재 Microflow에서와 같이 Nanoflow에서 오류 처리기를 추가할 방법이 없습니다

## 재사용 가능한 JavaScript Actions 만들기

JavaScript Actions를 가장 효과적으로 만들고 개선하려면 아래 하위 섹션을 참조하세요.

### 더 나은 API 설계{#betterapis}

잘 설계된 API를 사용하면 JavaScript Actions를 더 쉽게 재사용할 수 있습니다. API를 설계할 때 다음 가이드라인을 고려하세요:

* 작고 기능적인 Actions를 만드세요 — 많은 기능이 있는 Actions를 작은 구성 요소로 분할하면 Nanoflow에서 다양한 방식으로 결합할 수 있습니다
* 부작용을 최소화하세요 — 부작용이 없는 Action은 상태가 없고 다른 구성 요소의 상태에 의존하지 않으며 단독으로 사용할 수 있습니다(테스트와 동작 예측도 쉬워짐)
* 표준 Actions로 수행할 수 있는 Actions를 구현하지 마세요, 새로운 기능과 기존 기능을 하나의 Action으로 결합하지 마세요(대신 Nanoflow에서 여러 Actions로 필요한 기능을 구성하세요)
* 비즈니스 로직은 Nanoflow에 있어야 합니다 — Actions는 `Do`, `Check` 상태, `Get` 데이터만 해야 합니다
* Action과 매개변수에 명확한 이름을 지정하세요(이것만으로도 API 문서화에 큰 도움이 됩니다)
* Action, 매개변수, 기본값, 반환값, 오류 및 호환성을 문서화하세요 — 자세한 내용은 아래 [JavaScript Actions 문서화](#document) 섹션을 참조하세요
* 가장 일반적인 기능만 노출하세요 — 노출되는 함수가 적은 라이브러리가 이해, 사용, 유지보수, 테스트하기 더 쉽습니다(새 기능은 나중에 항상 추가할 수 있음)
* 사용된 라이브러리와 독립적인 API를 설계하세요(API를 변경하지 않고 구현을 변경하거나 라이브러리를 교체할 수 있음)
* 개발자에게 친숙한 언어를 사용하세요 — 예: 함수 이름에 구현 세부 사항을 포함하지 마세요; `OpenPhoneGapCamera`가 아닌 `OpenCamera`

추가 기술적 제안:

* 제한된 옵션에는 자유 형식 문자열 대신 열거형을 선호하세요 — 예: source "Camera", "Gallery", 또는 "User choice"
* 이진 매개변수에는 Boolean 옵션을 선호하세요 — 예: 'Blocking dialog' (true / false)
* 기본 반환 유형을 선호하세요 — 가능하면 객체를 반환하지 말고 String이나 Decimal을 사용하세요
* 객체를 변경하지 마세요; 대신 새로운 비영속 엔티티(NPE) 객체를 만드세요
* 입력을 검증하고 개발자가 Action을 올바르게 사용하고 있다고 신뢰하지 마세요 — 자세한 내용은 위의 [입력 처리](#handlinginput) 섹션을 참조하세요
* 가능한 한 입력 매개변수에 합리적인 기본값을 제공하세요

### JavaScript Actions 노출

JavaScript Actions는 Call JavaScript action 활동으로 Nanoflow에서 사용할 수 있습니다. 또한 활동 목록에 Actions를 노출할 수 있습니다. 이렇게 하면 개발자가 Actions를 쉽게 찾을 수 있습니다. 자주 재사용되는 Actions만 노출하는 것이 권장됩니다.

**Category**를 사용하여 Actions를 그룹화하고, **Icon**과 **Image**를 사용하여 노출된 Nanoflow Action에 쉬운 인식을 제공하세요:

{{< figure src="/attachments/howto/extensibility/best-practices-javascript-actions/narrow-expose.png" alt="exposed nanoflow with info" width="650" class="no-border" >}}

### JavaScript Actions 게시

App Explorer에서 JavaScript Action을 마우스 오른쪽 버튼으로 클릭하고 **Export document to file**을 선택하여 단일 Action을 내보낼 수 있습니다. 그런 다음 내보낸 파일을 다른 개발자와 공유할 수 있습니다. 단일 Nanoflow는 Mendix Marketplace에 게시할 수 없습니다. 대신 모듈로 게시하세요.

App Explorer에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Import document from file**을 선택하여 단일 Action을 가져올 수 있습니다. 다음으로 JavaScript Action 파일을 선택하세요.

단일 Nanoflow Action은 Mendix Marketplace에 게시할 수 없습니다. 모듈로 게시할 수 있지만, 모듈 내에서 관련 Nanoflow Actions를 그룹으로 게시하는 것이 권장됩니다. 여러 Nanoflow Actions가 포함된 모듈의 경우, "entities"와 같은 관련 데이터 모델로 Actions를 그룹화하고 외부 의존성에 대한 관련 문서를 제공하세요. 모듈 전체를 내보내고 Mendix Marketplace에 업로드하세요. 추가 지침은 [Marketplace 콘텐츠 공유 방법](/appstore/submit-content/)을 참조하세요.

### JavaScript Actions 문서화{#document}

잘 문서화된 Actions는 재사용하기 더 쉽습니다. 문서화 시 다음을 고려하세요:

* 올바른 이름 지정이 문서화의 가장 중요한 측면입니다
    * "VerbNoun" 명명 규칙 사용, 예: GetUser
    * 자기 설명적인 매개변수 이름 사용
* Action의 **Settings** > **Documentation** 탭에서 설명:
    * Action이 수행하는 작업
    * 반환값
    * 지원 플랫폼(web, mobile, native 등)
    * 브라우저 호환성(Chrome, Firefox, Edge 등)
    * 종속 모듈(있는 경우)
    * 사용된 라이브러리 또는 함수
* 매개변수에 대해 설명을 추가하고 구현된 경우 기본값을 제공하세요
* 사용된 API에 대한 문서 참조
* 외부 의존성을 언급하고 추가 방법을 설명하세요

## JavaScript Actions 테스트

광범위한 테스트 앱은 JavaScript Action을 더 견고하게 만드는 데 도움이 됩니다. 테스트 앱 내에서 빈 입력과 처리해야 하는 오류 사례를 포함하여 입력의 모든 가능한 변형을 만들어 보세요.

테스트할 때 모든 호환 플랫폼(web과 native)을 확인하세요. 웹에서는 Mendix 브라우저 호환성을 처리해야 합니다. 호환성에 대한 자세한 내용은 *시스템 요구 사항*의 [브라우저](/refguide/system-requirements/#browsers) 섹션을 참조하세요.

Action이 플랫폼과 호환되지 않는 경우, 오류가 발생하기 전에 추가 Action으로 확인할 수 있어야 합니다. 예를 들어, 카메라를 시작하기 전에 `CheckCameraSupport` Action을 사용하세요. Action이 호출되었지만 호환되지 않는 경우, 우아하게 실패하거나 명확한 오류 메시지를 표시해야 합니다.

## JavaScript Actions 디버깅

JavaScript Action의 코드 디버깅은 브라우저 개발 도구 내에서 수행할 수 있습니다. 이를 수행하는 방법에 대한 자세한 내용은 [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/), [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools), [Microsoft Edge Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium) 또는 Safari의 [Web Development Tools](https://developer.apple.com/safari/tools/)를 참조하세요.

처음에 JavaScript Actions의 소스 코드는 로드되지 않습니다. 모듈의 Action이 처음 실행되기 직전에 소스 코드가 로드됩니다. 그 시점부터 Chrome을 사용하는 경우 **Developer Tools**의 **Sources** 탭에서 **javascript-actions** 폴더에서 소스 코드를 찾을 수 있습니다.

파일이 로드된 후, 인라인 번호를 클릭하여 코드에 중단점을 설정할 수 있습니다(**A**, 아래 스크린샷). 또는 **Pause on caught exceptions**를 선택하여 문제를 찾을 수 있습니다(**B**). 최후의 수단으로 `debugger;` 라인을 추가하여 소스 코드를 수정할 수 있습니다(**C**). 이 명령문은 Action이 처음 실행될 때 디버깅 도구를 시작하고 중단점을 적용합니다:

{{< figure src="/attachments/howto/extensibility/best-practices-javascript-actions/debugging.png" alt="debugging"   width="500"  class="no-border" >}}

## 나쁜 관행 이해 {#badpractice}

모든 기능이 사용하기에 권장되는 것은 아닙니다. Action이 Mendix Client, DOM 또는 다른 위젯에 미칠 수 있는 부작용을 고려하세요:

* 사용자의 브라우저를 가정하지 마세요 — 모든 브라우저가 같은 기능을 가지고 있지 않습니다
* 영구적인 렌더링은 플러그형 위젯을 사용해야 합니다 — 새 Mendix Client는 페이지를 임의로 렌더링하고 변경 사항을 제거합니다(예: DOM을 렌더링할 때 `index.html`의 DOM 노드에서 작업하세요)
* DOM 변경은 Mendix Client가 DOM을 임의로 렌더링할 수 있기 때문에 손실될 수 있습니다(예: 다른 구성 요소에 CSS 클래스를 추가하면 Mendix Client가 페이지를 임의로 렌더링하고 변경 사항을 제거합니다) — `<div id="content"></div>` 외부에 배치된 DOM 요소를 만들고 변경할 수 있습니다
* 더 이상 사용되지 않는 라이브러리 사용을 피하세요 — Dojo나 Dijit은 더 이상 사용되지 않으므로 사용하지 마세요(jQuery도 더 이상 사용하지 않아야 함)
* `undefined`를 반환하는 Boolean Actions 사용을 피하세요 — Boolean 변수는 값이 필요한 유일한 변수이며, 허용 가능한 상태는 `true` 또는 `false`뿐입니다(다른 변수는 `undefined`로 설정될 수 있으며 Mendix Studio Pro에서 `$variable != empty`로 확인 가능)

## 추가 정보

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)
* [JavaScript Actions](/refguide/javascript-actions/)
* [Mendix Client API](/apidocs-mxsdk/apidocs/client-api/)
* JavaScript 기초:
    * [Mozilla JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    * [Async functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

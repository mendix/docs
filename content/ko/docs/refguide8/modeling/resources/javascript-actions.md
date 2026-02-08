---
title: "JavaScript Action"
url: /refguide8/javascript-actions/
weight: 20
description: "이 참조 가이드에서는 JavaScript Action을 사용하여 Mendix 앱의 기능을 확장하는 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
이 액티비티는 **Nanoflow**에서만 사용할 수 있습니다.
{{% /alert %}}

## 소개

JavaScript Action을 사용하면 Nanoflow만으로는 불가능한 방식으로 애플리케이션의 기능을 확장할 수 있습니다. JavaScript Action을 사용하려면 [JavaScript Action Call](/refguide8/javascript-action-call/)을 사용하여 Nanoflow에서 호출하십시오.

{{% alert color="info" %}}

Mendix Studio Pro에서 정의된 각 JavaScript Action은 프로젝트 디렉토리의 하위 디렉토리 **javascriptsource{모듈 이름}/actions/**에 있는 *{JavaScript Action 이름}.js* 파일에 해당합니다.

이러한 *.js* 파일의 스켈레톤은 Action을 저장할 때 자동으로 생성되며, 해당 JavaScript Action은 내장 코드 편집기에서 즉시 편집할 수 있습니다.

{{% /alert %}}

JavaScript Action을 생성, 구성 및 사용하는 방법을 알아보려면 [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/) 사용 방법 문서를 참조하십시오.

## 일반 설정

**Project Explorer**에서 JavaScript Action을 더블 클릭하면 JavaScript Action의 설정을 볼 수 있습니다: 

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/javascript-action-settings-no-para.png" alt="javascript settings"   width="400"  class="no-border" >}}

JavaScript Action의 설정과 그 의미는 아래에 자세히 설명되어 있습니다.

### 이름

이 설정은 JavaScript Action의 이름을 처리하며, Nanoflow가 호출할 때 참조하는 이름입니다. 이 이름은 생성되는 *.js* 파일의 이름이기도 합니다.

### 파라미터

파라미터는 JavaScript Action에 데이터를 전달합니다. 예를 들어, 숫자를 곱하는 JavaScript Action이 있다면 파라미터는 곱할 숫자를 정의합니다. JavaScript Action에는 0개 이상의 파라미터가 있을 수 있습니다. 각 파라미터는 고유한 이름을 가져야 합니다. **Parameters** > **Add**를 클릭하여 파라미터를 추가하고, 해당 파라미터를 사용자 정의하여 JavaScript Action에 데이터를 전달할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/parameter-naming.png" alt="parameter" class="no-border" >}}

JavaScript Action의 **Code** 탭에서 파라미터의 값을 확인하고 구현을 처리할 수 있습니다. 각 파라미터에는 이름(1), 타입(2), 카테고리, 설명(3) 및 반환 타입(4)이 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/parameter-code.png" alt="parameter code" class="no-border" >}}

Nanoflow에서 해당 액티비티를 더블 클릭하면 **Call JavaScript Action** 대화 상자에서 파라미터의 카테고리(1), 파라미터 이름(2) 및 설명(3)을 볼 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/call-js-action-dialog.png" alt="call javascript action dialog"   width="400"  class="no-border" >}}

JavaScript Action에서 지원되는 파라미터 타입은 아래에 설명되어 있습니다.

#### 이름

이 설정은 파라미터의 이름을 처리합니다. 이름은 필수입니다. 이름은 문자로 시작해야 하며 문자만 포함할 수 있습니다. 이름에는 공백이 허용되지 않습니다.

#### 타입

|   이름   |   설명   |
| ---- | ---- |
|  Object    |   Object 파라미터 타입을 사용하면 Mendix 객체를 JavaScript Action에 전달할 수 있습니다. Entity 타입도 선택해야 하며, 이는 특정 Entity이거나 타입 파라미터일 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 타입은 MxObject로 표현됩니다. |
|   List   |   List 파라미터 타입을 사용하면 Mendix 객체 목록을 JavaScript Action에 전달할 수 있습니다. Entity 타입도 선택해야 하며, 이는 특정 Entity이거나 타입 파라미터일 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 타입은 MxObject 배열로 표현됩니다. |
|   Entity   |   Entity 파라미터 타입은 플레이스홀더입니다. Nanoflow에서 호출될 때 새 Entity의 이름으로 대체되는 Entity를 나타냅니다. 또한 Entity 타입은 타입 파라미터를 채우는 데 사용할 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 타입은 문자열로 표현됩니다.  |
|   Nanoflow   |   Nanoflow 파라미터 타입을 사용하면 JavaScript Action에서 호출할 수 있는 Nanoflow를 전달할 수 있습니다. 파라미터의 값은 비동기 함수이며, 호출하면 구성된 Nanoflow가 트리거됩니다. JavaScript 객체로 파라미터를 지정하고 실행이 완료되면 Nanoflow의 반환 값을 캡처할 수 있습니다. 예를 들어, 문자열 `Name` 파라미터를 가지고 해당 이름의 `User` 객체를 반환하는 Nanoflow를 호출할 수 있습니다: `const user = await nanoflowParameter({ Name: "John Doe" });`. |
|   Boolean   |   Boolean 파라미터 타입을 사용하면 Boolean 값을 JavaScript Action에 전달할 수 있습니다.  |
|   Date and Time   |  Date and Time 파라미터 타입을 사용하면 날짜 및 시간 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 타입은 JavaScript `Date`로 표현됩니다.  |
|   Decimal   |  Decimal 파라미터 타입을 사용하면 소수 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 타입은 [Big](https://www.npmjs.com/package/big-js) 객체로 표현됩니다.  |
|   Enumeration   |  Enumeration 파라미터 타입을 사용하면 열거형 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 타입은 문자열로 표현됩니다.  |
|   Integer/Long   |  Integer/Long 파라미터 타입을 사용하면 소수 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 타입은 [Big](https://www.npmjs.com/package/big-js) 객체로 표현됩니다.  |
|   String   |  String 파라미터 타입을 사용하면 문자열 값을 JavaScript Action에 전달할 수 있습니다. |

#### 카테고리

[JavaScript Action Call](/refguide8/javascript-action-call/)에서 파라미터를 구분하기 위해 카테고리를 사용하십시오. 카테고리는 프로젝트에 여러 파라미터가 있을 때 논리적 그룹을 만드는 데 유용합니다. 카테고리를 지정하지 않으면 파라미터는 **Input** 그룹에 표시됩니다.

#### 설명

여러 파라미터가 있는 프로젝트의 경우, 설명은 파라미터의 정확한 용도를 상기시키는 데 유용합니다. 설명을 통해 프로젝트 협력자에게 파라미터를 설명할 수도 있습니다. 설명에는 대문자, 소문자, 숫자 및 기호를 모두 사용할 수 있습니다.

### 반환 타입

반환 파라미터 타입은 JavaScript Action이 반환하는 데이터의 타입을 결정합니다. 많은 API가 비동기적이므로 이 타입으로 해결되는 `Promise` 객체를 반환할 수도 있습니다. JavaScript Action의 반환 값에 이름을 부여하고 저장하여 호출되는 Nanoflow에서 사용할 수 있습니다. 파라미터에 사용할 수 있는 모든 타입을 반환 타입으로도 사용할 수 있습니다. 또한 Action에서 데이터를 반환하지 않아야 하는 경우 반환 타입 'Nothing'을 사용할 수 있습니다.

## 타입 파라미터

타입 파라미터는 Nanoflow에서 호출될 때 특정 Entity로 채워지는 Entity 타입의 플레이스홀더입니다. 타입 파라미터는 파라미터의 데이터 타입을 구성할 때 사용할 수 있으며, 사용자가 임의의 Entity 타입의 객체 또는 목록을 전달할 수 있게 합니다. 쉽게 추가, 편집 또는 삭제할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/type-parameter.png" alt="type parameter"   width="450"  class="no-border" >}}

JavaScript Action에는 0개 이상의 타입 파라미터가 있을 수 있습니다. 각 타입 파라미터는 고유한 이름을 가져야 합니다.

## Nanoflow Action으로 노출

**Expose as nanoflow action** 탭에서 JavaScript Action을 Nanoflow Action으로 노출할 수 있습니다. 이 샘플 Action에는 *Sample Action* 캡션 텍스트가 지정되었고, *Workshop*이 카테고리로 할당되었으며, 아이콘은 지정되지 않았습니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/expose-jsaction.png" alt="expose action"   width="450"  class="no-border" >}}

JavaScript Action을 노출하면 Nanoflow를 편집할 때 선택한 카테고리의 **Toolbox** 창에 표시됩니다. 이 Action이 Nanoflow에서 사용되면 제공된 캡션과 아이콘이 표시됩니다. 카테고리와 캡션이 여기에 표시되며, 사용자 정의 아이콘이 할당되지 않았으므로 기본 아이콘이 표시됩니다: 

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/workshop-exposed.png" alt="workshop exposed" class="no-border" >}}

### 캡션

JavaScript Action을 노출할 때 캡션은 필수입니다. 이 캡션은 Nanoflow **Toolbox** 창에서 JavaScript Action과 함께 표시되며 유용한 참고 정보를 제공할 수 있습니다.

### 카테고리

JavaScript Action을 노출할 때 카테고리는 필수입니다. 카테고리를 사용하여 Nanoflow **Toolbox** 창에서 유사한 목적의 JavaScript Action을 함께 구성하십시오.

### 아이콘

JavaScript Action을 노출할 때 아이콘은 선택 사항입니다. 아이콘을 선택하지 않으면 기본 JavaScript Action 아이콘이 사용됩니다. 아이콘의 권장 크기는 16x16 픽셀입니다.

## 문서화

**Documentation** 탭에서 **Edit**를 눌러 JavaScript Action을 문서화하십시오: 

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/documentation-pro.png" alt="documentation"   width="450"  class="no-border" >}}

문서화 내용은 **Code** 탭에서 볼 수 있습니다. 문서화 내용은 해당 *.js* 파일의 함수에 주석으로도 복사됩니다:

{{< figure src="/attachments/refguide8/modeling/resources/javascript-actions/documentation-js-file.png" alt="documentation js file"   width="450"  class="no-border" >}}

## 코드

**Code** 탭에서 Studio Pro를 떠나지 않고 JavaScript Action 코드를 편집할 수 있습니다. 편집기는 [Monaco Editor](https://microsoft.github.io/monaco-editor/index.html)를 기반으로 합니다. 구문 강조 및 코드 완성과 같은 기능을 제공합니다. Mendix 8.3 이상에서는 최신 JavaScript(ES8 / ES2017)로 코드를 작성할 수 있으며 `async`와 `await` 및 `Promise`와 같은 함수를 사용할 수 있습니다. 코드는 트랜스파일되고 폴리필되어 실행됩니다(Internet Explorer 11에서도). 

코드에는 세 개의 섹션이 있습니다: Import 목록, 추가 코드 블록 및 사용자 코드 블록. 추가되는 모든 코드는 이러한 블록 중 하나에 작성해야 합니다. 블록 외부의 코드는 JavaScript Action 설정의 배포 또는 업데이트 시 템플릿 코드를 재생성할 때 손실됩니다. 

추가 Import는 `import`로 시작하여 `// BEGIN EXTRA CODE` 위에 배치해야 합니다. 추가 코드는 `// BEGIN USER CODE`와 `// END USER CODE` 사이에 배치해야 합니다. 사용자 구현 코드는 `// BEGIN EXTRA CODE`와 `// END EXTRA CODE` 사이에 배치해야 합니다.

``` js
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
 function sayHello(message) {
     window.alert("Hello: " + message);
 }
// END EXTRA CODE

/**
 * Show an alert message to an user.
 * @param {string} message - Message shown to the user.
 * @returns {Promise.<void>}
 */
export async function Hello(message) {
	// BEGIN USER CODE
	sayHello(message);
	return Promise.resolve();
	// END USER CODE
}
```

## 추가 정보

* [JavaScript Action Call](/refguide8/javascript-action-call/)
* [Nanoflow](/refguide8/nanoflows/)
* [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/)
* [Java Action Call](/refguide8/java-action-call/)
* [Microflow Call](/refguide8/microflow-call/)

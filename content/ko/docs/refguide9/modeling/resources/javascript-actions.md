---
title: "JavaScript Action"
url: /refguide9/javascript-actions/
weight: 20
description: "이 참조 가이드에서는 JavaScript Action이 Mendix 앱의 기능을 확장할 수 있는 방법을 자세히 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
이 액티비티는 **Nanoflow**에서만 사용할 수 있습니다.
{{% /alert %}}

## 소개

JavaScript Action을 사용하면 Nanoflow만으로는 불가능한 방식으로 애플리케이션의 기능을 확장할 수 있습니다. JavaScript Action을 사용하려면 [JavaScript Action Call](/refguide9/javascript-action-call/)을 사용하여 Nanoflow에서 호출하십시오.

{{% alert color="info" %}}

Mendix Studio Pro에서 정의된 각 JavaScript Action은 앱 디렉토리의 하위 디렉토리 **javascriptsource{module name}/actions/**에 있는 파일 *{JavaScript action name}.js*에 해당합니다.

이러한 *.js* 파일의 스켈레톤은 액션을 저장할 때 자동으로 생성되며, 해당 JavaScript Action은 내장 코드 편집기에서 즉시 편집할 수 있습니다.

{{% /alert %}}

JavaScript Action을 생성, 구성 및 사용하는 방법을 배우려면 [Build JavaScript Actions](/howto9/extensibility/build-javascript-actions/) 하우투를 참조하십시오.

## 일반 설정

**App Explorer**에서 JavaScript Action을 더블클릭하면 JavaScript Action의 설정이 표시됩니다: 

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/javascript-action-settings-no-para.png" alt="javascript settings"   width="400"  class="no-border" >}}

JavaScript Action의 설정과 그 의미는 아래에 자세히 설명되어 있습니다.

### 이름

이 설정은 JavaScript Action의 이름을 처리하며, Nanoflow가 호출을 수행할 때 참조하는 이름입니다. 이 이름은 생성된 *.js* 파일의 이름이기도 합니다.

### 매개변수

매개변수는 JavaScript Action에 데이터를 전달합니다. 예를 들어, 숫자를 곱하는 JavaScript Action이 있다면 매개변수는 곱할 숫자를 정의합니다. JavaScript Action은 0개 이상의 매개변수를 가질 수 있습니다. 각 매개변수는 고유한 이름을 가져야 합니다. **Parameters** > **Add**를 클릭하여 매개변수를 추가한 다음 해당 매개변수를 사용자 정의하여 JavaScript Action에 데이터를 전달할 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/parameter-naming.png" alt="parameter" class="no-border" >}}

JavaScript Action의 **Code** 탭에서 매개변수의 값을 확인하고 구현을 처리할 수 있습니다. 각 매개변수에는 이름(1), 유형(2), 카테고리, 설명(3), 반환 유형(4)이 있습니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/parameter-code.png" alt="parameter code" class="no-border" >}}

Nanoflow에서 액티비티를 더블클릭한 후 **Call JavaScript Action** 대화 상자에서 매개변수의 카테고리(1), 매개변수 이름(2), 설명(3)을 확인할 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/call-js-action-dialog.png" alt="call javascript action dialog"   width="400"  class="no-border" >}}

JavaScript Action이 지원하는 매개변수 유형은 아래에 설명되어 있습니다.

#### 이름

이 설정은 매개변수의 이름을 처리합니다. 이름은 필수입니다. 이름은 문자로 시작해야 하며 문자만 포함해야 합니다. 이름에 공백은 허용되지 않습니다.

#### 유형

|   이름   |   설명   |
| ---- | ---- |
|  Object    |   Object 매개변수 유형을 사용하면 Mendix 객체를 JavaScript Action에 전달할 수 있습니다. Entity 유형도 선택해야 하며, 이는 특정 Entity 또는 유형 매개변수일 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 유형은 MxObject로 표현됩니다. |
|   List   |   List 매개변수 유형을 사용하면 Mendix 객체 목록을 JavaScript Action에 전달할 수 있습니다. Entity 유형도 선택해야 하며, 이는 특정 Entity 또는 유형 매개변수일 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 유형은 MxObject 배열로 표현됩니다. |
|   Entity   |   Entity 매개변수 유형은 자리 표시자입니다. Nanoflow에서 호출될 때 새 Entity의 이름으로 대체될 Entity를 나타냅니다. 또한 Entity 유형은 유형 매개변수를 채우는 데 사용할 수 있습니다. 생성된 JavaScript Action 템플릿 코드에서 이 유형은 문자열로 표현됩니다.  |
|   Nanoflow   |   Nanoflow 매개변수 유형을 사용하면 JavaScript Action에서 호출할 수 있는 Nanoflow를 전달할 수 있습니다. 매개변수의 값은 비동기 함수이며, 호출하면 구성된 Nanoflow가 트리거됩니다. JavaScript 객체로 매개변수를 지정하고 실행이 완료되면 Nanoflow의 반환 값을 캡처할 수 있습니다. 예를 들어, 문자열 `Name` 매개변수를 가지고 이 이름의 `User` 객체를 반환하는 Nanoflow를 호출할 수 있습니다: `const user = await nanoflowParameter({ Name: "John Doe" });`. |
|   Boolean   |   Boolean 매개변수 유형을 사용하면 Boolean 값을 JavaScript Action에 전달할 수 있습니다.  |
|   Date and Time   |  Date and Time 매개변수 유형을 사용하면 날짜 및 시간 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 유형은 JavaScript `Date`로 표현됩니다.  |
|   Decimal   |  Decimal 매개변수 유형을 사용하면 소수 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 유형은 [Big](https://www.npmjs.com/package/big-js) 객체로 표현됩니다.  |
|   Enumeration   |  Enumeration 매개변수 유형을 사용하면 Enumeration 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 유형은 문자열로 표현됩니다.  |
|   Integer/Long   |  Integer/Long 매개변수 유형을 사용하면 소수 값을 JavaScript Action에 전달할 수 있습니다. 생성된 JavaScript Action 코드에서 이 유형은 [Big](https://www.npmjs.com/package/big-js) 객체로 표현됩니다.  |
|   String   |  String 매개변수 유형을 사용하면 문자열 값을 JavaScript Action에 전달할 수 있습니다. |

#### 카테고리

카테고리를 사용하여 [JavaScript Action Call](/refguide9/javascript-action-call/)에서 매개변수를 구분할 수 있습니다. 카테고리는 앱에 여러 매개변수가 있을 때 매개변수의 논리적 그룹을 만드는 데 유용합니다. 카테고리를 지정하지 않으면 매개변수가 **Input** 그룹에 나타납니다.

#### 설명

여러 매개변수가 있는 앱의 경우 설명은 매개변수의 정확한 목적을 상기시키는 데 유용합니다. 설명을 사용하면 앱 협업자에게 매개변수를 설명할 수도 있습니다. 설명에는 대문자, 소문자, 숫자 및 기호가 모두 포함될 수 있습니다.

### 반환

JavaScript Action은 앱에 다양한 데이터 유형을 반환할 수 있습니다.

#### 반환 유형

반환 매개변수 유형은 JavaScript Action이 반환하는 데이터 유형을 결정합니다. 많은 API가 비동기적이므로 이 유형으로 해석되는 `Promise` 객체도 반환할 수 있습니다. JavaScript Action의 반환 값에 이름을 지정하고 저장하여 호출된 Nanoflow에서 사용할 수 있습니다. 매개변수에 사용할 수 있는 모든 유형에 대해 반환 유형으로도 사용할 수 있습니다. 또한, 액션에서 데이터를 반환하지 않아야 하는 경우 반환 유형 'Nothing'을 사용할 수 있습니다.

#### 변수 이름

이 설정을 사용하면 반환 유형이 선택된 경우 JavaScript Action의 반환 값에 이름을 지정할 수 있습니다. 이 이름은 액션을 Nanoflow에 끌어 놓을 때 사용됩니다. 기본값은 **ReturnValueName**으로 설정됩니다.

{{% alert color="info" %}}
반환 변수의 이름을 지정하는 기능은 Mendix 버전 9.23.0에서 추가되었습니다
{{% /alert %}}

### 플랫폼 {#platform}

JavaScript Action은 특정 플랫폼용일 수 있으며 다음 값을 가진 선택적 플랫폼 속성이 있습니다:

* All *(기본값)*
* Web – 브라우저 또는 하이브리드 모바일 앱에서 사용할 수 있습니다
* Native – 네이티브 모바일 앱에서 사용할 수 있습니다

Nanoflow에서 특정 플랫폼용 JavaScript Action을 사용하면 해당 Nanoflow의 플랫폼이 제한됩니다. 예를 들어, 플랫폼이 **Native**로 설정된 JavaScript Action이 포함된 Nanoflow에서는 네이티브 페이지만 열 수 있습니다.

## 유형 매개변수

유형 매개변수는 Nanoflow에서 호출될 때 특정 Entity로 채워질 Entity 유형의 자리 표시자입니다. 유형 매개변수는 매개변수의 데이터 유형을 구성할 때 사용할 수 있으며, 이를 통해 사용자가 임의의 Entity 유형의 객체 또는 목록을 전달할 수 있습니다. 쉽게 추가, 편집 또는 삭제할 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/type-parameter.png" alt="type parameter" class="no-border" >}}

JavaScript Action은 0개 이상의 유형 매개변수를 가질 수 있습니다. 각 유형 매개변수는 고유한 이름을 가져야 합니다.

## Nanoflow Action으로 노출

**Expose as nanoflow action** 탭에서 JavaScript Action을 Nanoflow Action으로 노출할 수 있습니다. 이 샘플 액션에는 *Sample Action* 캡션 텍스트가 지정되고, *Workshop*이 카테고리로 할당되었으며, 아이콘이나 이미지는 지정되지 않았습니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/expose-jsaction.png" alt="expose action" class="no-border" >}}

**Expose as nanoflow action** 옵션이 선택되면 JavaScript가 선택한 카테고리에서 [Nanoflow 편집기](/refguide9/nanoflows/)의 **Toolbox**에 나타납니다. 이 액션이 Nanoflow에서 사용되면 제공한 캡션과 아이콘이 표시됩니다. 카테고리와 캡션이 여기에 나타나며, 사용자 정의 아이콘과 이미지가 할당되지 않았으므로 기본 아이콘과 이미지가 표시됩니다: 

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/workshop-exposed.png" alt="workshop exposed" class="no-border" >}}

### 캡션

JavaScript Action을 노출할 때 캡션은 필수입니다. 이 캡션은 Nanoflow **Toolbox** 창 내에서 JavaScript Action과 함께 표시되며 JavaScript Action에 대한 유용한 알림 정보를 제공할 수 있습니다.

### 카테고리

JavaScript Action을 노출할 때 카테고리는 필수입니다. 카테고리를 사용하여 유사한 목적을 가진 JavaScript Action을 Nanoflow **Toolbox** 창에서 함께 구성하십시오.

### 아이콘

**Icon** 속성은 JavaScript Action을 노출할 때 선택 사항입니다. **Icon** 속성의 이미지는 **Toolbox**의 목록 뷰에 사용됩니다. 자세한 내용은 *View Menu*의 [Toolbox](/refguide9/view-menu/#toolbox) 섹션을 참조하십시오.

아이콘을 선택하지 않으면 기본 JavaScript Action 아이콘이 사용됩니다. 필요한 아이콘 크기는 64x64 픽셀이며 필요한 아이콘 형식은 PNG입니다. 

Studio Pro의 [다크 모드](/refguide9/preferences-dialog/#dark-mode)에 맞는 별도의 아이콘을 제공할 수 있습니다.

### 이미지

**Image** 속성은 JavaScript Action을 노출할 때 선택 사항입니다. **Image** 속성의 이미지는 Toolbox 타일 뷰에 사용됩니다. 자세한 내용은 *View Menu*의 [Toolbox](/refguide9/view-menu/#toolbox) 섹션을 참조하십시오.

이미지와 아이콘이 모두 선택되지 않으면 기본 JavaScript Action 이미지가 사용됩니다. 그렇지 않으면 제공된 *아이콘* 이미지가 사용됩니다. 

필요한 이미지 크기는 256x192 픽셀이며 필요한 이미지 형식은 PNG입니다. 

Studio Pro의 [다크 모드](/refguide9/preferences-dialog/#dark-mode)에 맞는 별도의 이미지를 제공할 수 있습니다.

## 문서화

**Documentation** 탭에서 **Edit**를 눌러 JavaScript Action을 문서화할 수 있습니다: 

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/documentation-pro.png" alt="documentation"   width="450"  class="no-border" >}}

문서화는 **Code** 탭에서 볼 수 있습니다. 문서화는 해당 *.js* 파일의 함수에 대한 주석으로 JavaScript Action에 복사됩니다:

{{< figure src="/attachments/refguide9/modeling/resources/javascript-actions/documentation-js-file.png" alt="documentation js file"   width="450"  class="no-border" >}}

## 코드

**Code** 탭에서 Studio Pro를 떠나지 않고 JavaScript Action 코드를 편집할 수 있습니다. 편집기는 [Monaco Editor](https://microsoft.github.io/monaco-editor/index.html)를 기반으로 합니다. 구문 강조 표시 및 코드 완성과 같은 기능을 제공합니다. 코드는 최신 JavaScript(ES8 / ES2017)로 작성할 수 있으며 `async` with `await` 및 `Promise`와 같은 함수를 사용할 수 있습니다.

코드에는 import 목록, 추가 코드 블록, 사용자 코드 블록의 세 가지 섹션이 있습니다. 추가되는 모든 코드는 이러한 블록 중 하나에 들어가야 합니다. 블록 외부의 코드는 배포 또는 JavaScript Action 설정 업데이트 시 템플릿 코드를 다시 생성할 때 손실됩니다. 

추가 import는 `import`로 시작하여 `// BEGIN EXTRA CODE` 위에 배치해야 합니다. 추가 코드는 `// BEGIN USER CODE`와 `// END USER CODE` 사이에 배치해야 합니다. 사용자 구현 코드는 `// BEGIN EXTRA CODE`와 `// END EXTRA CODE` 사이에 배치해야 합니다.

``` js
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the app.
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

## 더 읽기

* [JavaScript Action Call](/refguide9/javascript-action-call/)
* [Nanoflow](/refguide9/nanoflows/)
* [Build JavaScript Actions](/howto9/extensibility/build-javascript-actions/)
* [Java Action Call](/refguide9/java-action-call/)
* [Microflow Call](/refguide9/microflow-call/)

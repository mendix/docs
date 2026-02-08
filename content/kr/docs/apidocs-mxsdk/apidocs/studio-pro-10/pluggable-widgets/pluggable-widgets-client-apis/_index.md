---
title: "클라이언트 API"
linktitle: "플러그형 위젯용 클라이언트 API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/
description: Mx10에서 플러그형 위젯에 사용할 수 있는 클라이언트 API를 이해하기 위한 가이드입니다.
weight: 20
---

## 소개

Mendix 플랫폼이 플러그형 위젯 클라이언트 컴포넌트에 제공하는 기본 API는 컴포넌트가 받는 props입니다. 이러한 props는 위젯 정의 XML 파일에 지정된 속성 구조와 유사합니다([플러그형 위젯 API](/apidocs-mxsdk/apidocs/pluggable-widgets-10/)에 설명된 구조). 속성의 attribute 유형은 속성이 클라이언트 컴포넌트에 어떻게 표현될지에 영향을 줍니다. 간단히 말해, attribute의 유형은 그것이 무엇이 될지를 정의합니다. 속성 유형 및 속성 값이 따를 수 있는 인터페이스에 대한 자세한 내용은 [플러그형 위젯 속성 유형](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/)에서 확인할 수 있습니다. 플러그형 위젯의 실제 작동 예는 [플러그형 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)을 참조하십시오.

또한 Mendix 플랫폼은 몇 가지 JavaScript 모듈, 특히 추가 Mendix API뿐만 아니라 클라이언트 컴포넌트가 제대로 작동하기 위해 플랫폼과 공유해야 하는 React와 같은 기존 라이브러리를 노출합니다. 노출된 라이브러리에 대한 자세한 내용은 아래의 [노출된 라이브러리(#exposed-libraries)](#exposed-libraries) 섹션을 참조하십시오.

## 번들링(Bundling)

Mendix는 JavaScript 라이브러리에서 일반적으로 사용하는 방식인 *npm 패키지*로 코드를 제공하지 않습니다. 대신 Mendix는 실행 중에 사용할 수 있는 모듈을 제공합니다. 따라서 [webpack](https://webpack.js.org/)과 같은 모듈 번들러를 사용하는 경우 이러한 모듈을 [externals](https://webpack.js.org/configuration/externals/)로 표시하도록 구성해야 합니다.

이 프로세스는 번거로울 수 있으므로 플러그형 위젯과 작동하도록 올바르게 구성된 번들러가 포함된 [tools 패키지](https://www.npmjs.com/package/@mendix/pluggable-widgets-tools)를 사용할 것을 권장합니다. 모범 사례를 따르고 [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget)를 사용하여 위젯을 스캐폴딩하면 이 패키지가 자동으로 추가됩니다.

## 표준 속성(Standard Properties) {#standard-properties}

위젯 정의 XML 파일에 지정된 속성에 해당하는 props와 함께 아래에 나열된 props가 항상 클라이언트 컴포넌트에 전달됩니다.

### Name 

Mendix Studio Pro에서 모든 위젯은 구성된 이름을 가져야 합니다. 위젯 이름의 주요 용도는 [Selenium](/howto/integration/selenium-support/) 또는 Appium 테스트 자동화를 사용하여 타겟팅할 수 있도록 클라이언트에서 해당 컴포넌트를 식별 가능하게 만드는 것입니다. 웹 앱에서 Mendix 플랫폼은 위젯에 `mx-name-{widgetName}` 클래스를 자동으로 추가하므로 컴포넌트 개발자의 추가 조치가 필요하지 않습니다. 불행히도 이 솔루션은 [네이티브 모바일 앱](/refguide/mobile/)에서는 불가능합니다. 네이티브 모바일 앱의 경우 컴포넌트 개발자는 지정된 `string` `name` prop을 기본 React Native [testID](https://facebook.github.io/react-native/docs/view#testid)로 수동으로 전달해야 합니다.

### Class

사용자는 모든 위젯에 대해 여러 클래스를 지정할 수 있습니다. Studio Pro에서 [class](/refguide/common-widget-properties/#class) 속성을 직접 구성하거나 디자인 속성을 사용하여 이를 수행할 수 있습니다. 웹 앱에서 Mendix 플랫폼은 구성에서 CSS 클래스 문자열을 생성하고 이를 모든 클라이언트 컴포넌트에 `string` `class` prop으로 전달합니다. 불행히도 React Native에는 클래스에 대한 유사한 지원이 없습니다. 따라서 네이티브 모바일 앱에서 컴포넌트는 `class` prop을 받지 않고 대신 `style` prop을 받습니다.

### Style

사용자는 [style](/refguide/common-widget-properties/#style) 속성을 사용하여 웹 페이지의 모든 위젯에 대해 사용자 지정 CSS를 지정할 수 있습니다. 이 스타일링은 `CSSProperties` 유형의 선택적 `style` prop을 통해 클라이언트 컴포넌트에 전달됩니다.

네이티브 페이지에서 `style` prop의 의미는 매우 다릅니다. 우선 사용자는 네이티브 페이지의 위젯에 대해 앞서 언급한 인라인 스타일을 지정할 수 없습니다. 따라서 `style` prop은 구성된 클래스를 기반으로 계산된 스타일을 전달하는 데 사용됩니다. 클라이언트 컴포넌트는 모든 적용 가능한 스타일이 결합된 단일 [스타일 객체](/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/#style-objects)가 포함된 배열을 받습니다.

### TabIndex

위젯이 TabIndex prop [시스템 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#tabindex)](#tabindex)을 사용하는 경우, 구성된 탭 인덱스가 기본값인 0인 경우를 제외하고 `number` `tabIndex` 속성을 통해 구성된 `Tab index`를 받습니다. 현재 `tabIndex`는 네이티브 페이지에서 사용되는 위젯에는 전달되지 않습니다. 

## 프로퍼티 값(Property Values)

### ActionValue {#actionvalue}

`ActionValue`는 액션 버튼의 [On click](/refguide/on-click-event/#on-click) 속성과 같은 액션을 나타내는 데 사용됩니다. **Do nothing**을 제외한 모든 액션에 대해 컴포넌트는 다음 인터페이스를 따르는 값을 받습니다. **Do nothing**의 경우 `undefined`를 받습니다. `ActionValue` prop은 다음과 같이 나타납니다:

```ts
export interface ActionValue {
    readonly canExecute: boolean;
    readonly isExecuting: boolean;
    execute(): void;
}
```

#### canExecute {#canexecute}

`canExecute` 플래그는 현재 조건에서 액션을 실행할 수 있는지 여부를 나타냅니다. 이는 앱의 보안 설정에 의해 허용되지 않는 액션이 실행되는 것을 방지합니다. 사용자가 호출할 수 있도록 마이크로플로우 및 나노플로우에서 사용자 역할을 설정할 수 있습니다. 사용자 역할 및 보안에 대한 자세한 내용은 [모듈 보안 참조 가이드](/refguide/module-security/)를 참조하십시오.

파라미터가 있는 마이크로플로우를 트리거하는 **Call microflow** 액션을 사용할 때도 이 플래그를 사용할 수 있습니다. 이러한 액션은 파라미터 객체를 사용할 수 있을 때까지(예: 부모 데이터 뷰가 로딩을 완료했을 때) 실행할 수 없습니다. 실행할 수 없는 액션을 `execute`하려고 시도하면 아무런 효과가 없으며 디버그 수준의 경고 메시지가 생성됩니다.

이 동작의 예외는 `ActionValue`가 [`ListActionValue.get()`](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#listactionvalue)에 의해 반환되는 경우입니다. 이 경우 모든 인수가 로드되지 않았을 때 플래그는 true가 됩니다. 로딩 중인 인수가 있는 액션에 대해 `execute()`를 호출하면 모든 인수를 사용할 수 있게 되는 즉시 액션이 실행됩니다. 대기하는 동안 `isExecuting`은 `true`로 설정되고 이후의 `execute()` 호출은 무시됩니다. 로딩 후 인수를 사용할 수 없게 되면 액션이 실행되지 않고 디버그 수준의 경고 메시지가 기록됩니다.

#### isExecuting {#isexecuting}

`isExecuting` 플래그는 액션이 현재 실행 중인지 여부를 나타냅니다. 오래 실행되는 액션은 완료하는 데 몇 초가 걸릴 수 있습니다. 컴포넌트는 이 정보를 사용하여 사용자가 로딩 진행 상황을 추적할 수 있도록 인라인 로딩 표시기를 렌더링할 수 있습니다. 종종 사용자가 여러 액션을 병렬로 트리거하는 것을 허용하지 않는 것이 바람직합니다. 따라서 컴포넌트는 (구성에 따라) 이전 실행이 진행 중인 동안 액션 트리거를 건너뛰기로 결정할 수 있습니다.

`isExecuting`은 현재 액션이 실행 중인지 여부만 나타냅니다. 대상 나노플로우, 마이크로플로우 또는 객체 작업이 다른 액션으로 인해 실행 중인지 여부는 나타내지 않습니다.

#### execute {#execute}

`execute` 메서드는 액션을 트리거합니다. 아무것도 반환하지 않으며 액션이 동기적으로 시작됨을 보장하지 않습니다. 하지만 액션이 시작되면 컴포넌트는 `isExecuting` 플래그가 설정된 새 prop을 받게 됩니다.

액션 속성이 [액션 변수를 정의(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#action-xml-elements)](#action-xml-elements)하는 경우, `execute()` 메서드는 각 변수에 대한 속성을 포함하는 객체 맵을 기대합니다. 변수는 undefined로 전달될 수 있지만 명시적으로 설정되어야 합니다.

두 개의 `Decimal` 변수 `lat` 및 `long`과 `label`이라는 `String` 변수를 정의하는 액션 속성이 주어지면, 그 `execute()` 메서드는 다음 입력을 허용합니다:

```ts
interface MapWidgetProps {
    onClick: ActionValue<{ lat: Option<Big>, long: Option<Big>, label: Option<string> }>
}

onClick.execute({
    lat: new Big(51.907),
    long: new Big(4.488),
    label: undefined
});
```

{{% alert color="info" %}}
액션 변수는 Mendix [10.21](/releasenotes/studio-pro/10.21/#pluggable-widget-api-action-variables)에서 도입되었습니다. 이전 버전의 Mendix는 `execute()`에 대해 0개의 인수를 취하며 액션에 변수를 전달하는 직접적인 방법을 제공하지 않습니다. 대신 `execute()`를 호출하기 전에 관련 값을 설정하기 위해 [attribute 속성(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#attribute)](#attribute)을 사용하십시오.
{{% /alert %}}

### DynamicValue {#dynamic-value}

`DynamicValue`는 시간이 지남에 따라 변할 수 있는 값을 나타내는 데 사용되며 많은 속성 유형에서 사용됩니다. 다음과 같이 정의됩니다:

```ts
export type DynamicValue<X> =
    | { readonly status: ValueStatus.Available; readonly value: X }
    | { readonly status: ValueStatus.Unavailable; readonly value: undefined }
    | { readonly status: ValueStatus.Loading; readonly value: X | undefined };
    
export const enum ValueStatus {
    Loading = "loading",
    Unavailable = "unavailable",
    Available = "available"
}
```

컴포넌트는 속성 구성에 따라 유형 `X`가 결정되는 `DynamicValue<X>`를 받습니다. 예를 들어, [TextTemplate 속성](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#texttemplate)의 경우 `DynamicValue<string>`이 되지만, [expression 속성](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#expression)의 경우 `X`는 구성된 `returnType`에 따라 달라집니다.

위의 유형 정의는 복잡해 보이지만, 컴포넌트는 항상 `DynamicValue.value`를 읽을 수 있으므로 사용하기가 상당히 간단합니다. 이 필드에는 텍스트 템플릿의 경우 보간된 `string`과 같은 실제 값이 포함되거나, 부모 데이터 뷰가 데이터 소스를 다시 로드할 때와 같이 값이 다시 계산되는 중인 경우 마지막으로 알려진 올바른 값이 포함됩니다. 다른 경우에는 값이 `undefined`로 설정됩니다.

`DynamicValue.status`는 동적 값의 상태에 대한 추가 정보와 컴포넌트가 이를 다르게 처리해야 하는지 여부를 컴포넌트에 제공합니다. 이는 다음 상황을 다루는 [차별화된 유니온(discriminated union)](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)을 사용하여 수행됩니다:

* `status`가 `ValueStatus.Available`인 경우, 동적 값에 계산에 필요한 충분한 정보가 있으며 결과가 `value`에 노출됩니다.
* `status`가 `ValueStatus.Unavailable`인 경우, 부모 데이터 뷰의 데이터 소스가 아무것도 반환하지 않았을 때와 같이 해당 정보가 없는 상태입니다. 이때 `value`는 항상 `undefined`입니다.
* `status`가 `ValueStatus.Loading`인 경우, 동적 값은 필요한 정보가 도착하기를 기다리고 있는 상태입니다. 이는 부모 데이터 뷰가 객체가 로드되기를 기다리고 있거나 [클라이언트에서 새로 고침(refresh in client)](/refguide/change-object/#refresh-in-client)으로 인해 다시 로드하는 중일 때 발생합니다.
    * 동적 값이 이전에 `ValueStatus.Available` 상태였던 경우, 이전 `value`가 여전히 반환됩니다. 이는 컴포넌트가 `Loading`을 명시적으로 처리할 필요가 없는 경우 이전 값을 계속 표시할 수 있도록 하기 위해서입니다. 이는 표시된 값이 로딩 중과 로딩 안 됨 사이를 빠르게 여러 번 변경하는 상태인 깜빡임(flickering)을 방지합니다.
    * 다른 경우에는 `value`가 `undefined`입니다. 이는 페이지가 로드되는 동안 흔히 발생하는 상황입니다.

### EditableValue {#editable-value}

`EditableValue`는 플러그형 위젯 클라이언트 컴포넌트에 의해 변경될 수 있는 속성(attribute) 또는 변수를 나타내는 데 사용되며, [attribute 속성](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#attribute)에만 전달됩니다. 다음과 같이 정의됩니다:

```ts
export interface EditableValue<T extends AttributeValue> {
    readonly status: ValueStatus;
    readonly readOnly: boolean;
    
    readonly value: T | undefined;
    setValue(value: T | undefined): void;
    readonly validation: string | undefined;
    setValidator(validator?: (value: T | undefined) => string | undefined): void;
    
    readonly displayValue: string;
    setTextValue(value: string): void;
    
    readonly formatter: ValueFormatter<T>;
    setFormatter(formatter: ValueFormatter<T> | undefined): void;
    
    readonly universe?: T[];
}
```

컴포넌트는 구성된 `attributeType`에 따라 `X`가 결정되는 `EditableValue<X>`를 받습니다.

`status`는 `DynamicValue`에 노출된 것과 유사합니다. 값의 로딩이 완료되었는지와 로딩이 성공했는지를 나타냅니다. `DynamicValue`와 마찬가지로 `EditableValue`는 위젯이 깜빡이는 것을 방지하기 위해 `status`가 `Available`에서 `Loading`으로 변경될 때 이전 `value`를 계속 반환합니다.

`readOnly` 플래그는 값을 실제로 편집할 수 있는지 여부를 나타냅니다. 예를 들어 위젯이 [편집 가능(editable)](/refguide/data-view/#editable)하지 않은 데이터 뷰 내부에 배치되어 있거나, [액세스 규칙(access rules)](/refguide/access-rules/)으로 인해 선택된 속성을 편집할 수 없는 경우 true가 됩니다. `status`가 `ValueStatus.Available`이 아닌 경우 `readOnly` 플래그는 항상 true입니다. 읽기 전용으로 설정된 값을 편집하려는 시도는 아무런 효과가 없으며 디버그 수준의 경고 메시지가 발생합니다.

값은 `value` 필드에서 읽을 수 있고 `setValue` 함수를 사용하여 수정할 수 있습니다. `setValue`는 아무것도 반환하지 않으며 값이 동기적으로 변경됨을 보장하지 않습니다. 하지만 변경 사항이 전파되면 컴포넌트는 변경 사항을 반영하는 새 prop을 받습니다.

값을 설정할 때 새 값이 특정 유효성 검사 규칙을 만족하지 않을 수 있습니다(예: 속성이 선택되었고 새 값이 기본 속성이 허용하는 것보다 큰 경우). 이 경우 변경 사항은 prop을 통해 수신된 `value` 및 `displayValue`에만 영향을 미칩니다. 변경 사항은 객체의 속성으로 전파되지 않으며 컴포넌트 외부에서 보이지 않습니다. 컴포넌트는 `EditableValue`의 `validation` 필드를 통해 유효성 검사 오류 텍스트도 받게 됩니다.

컴포넌트가 정의된 유효성 검사 규칙 세트를 확장할 수 있습니다. 전달된 값을 확인하고 유효성 검사 메시지 문자열(있는 경우)을 반환하는 함수인 새로운 유효성 검사기(validator)를 `setValidator` 함수를 통해 제공할 수 있습니다. 컴포넌트는 하나의 커스텀 유효성 검사기만 가질 수 있습니다. Mendix 플랫폼은 최종 사용자가 페이지를 저장할 때와 같이 필요할 때마다 커스텀 유효성 검사기가 실행되도록 보장합니다. 컴포넌트 수명 주기의 초기 단계, 특히 [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) 함수에서 `setValidator`를 호출하는 것이 좋습니다.

실제로 많은 클라이언트 컴포넌트는 로캘 특정 설정을 고려하여 보기 좋게 서식이 지정된 문자열로 값을 표시합니다. 이러한 경우를 용이하게 하기 위해 `EditableValue`는 `value`의 서식화된 버전인 `displayValue` 필드와 파싱을 처리하는 `setValue`의 버전인 `setTextValue` 메서드를 노출합니다. `setTextValue`는 또한 전달된 값이 파싱되어 대상의 값 유형에 할당될 수 있는지 검증합니다. `setValue`와 유사하게 유효하지 않은 값으로의 변경은 prop 자체보다 더 멀리 전파되지 않지만 `validation`이 보고됩니다. 값을 파싱할 수 없는 경우 prop에는 `displayValue` 문자열만 포함되고 `value`는 undefined가 됩니다.

서식에 대한 제어권을 유지하면서 더 편리한 `displayValue` 및 `setTextValue`를 사용하는 방법이 있습니다. 컴포넌트는 `format` 및 `parse` 메서드가 있는 객체인 포맷터(formatter) 객체를 전달하는 `setFormatter` 메서드를 사용할 수 있습니다. Mendix 플랫폼은 간단한 경우를 위해 이러한 객체를 생성하는 편리한 방법을 제공합니다. `EditableValue.formatter` 필드를 사용하여 노출된 기존 포맷터는 `withConfig` 메서드를 사용하여 수정할 수 있습니다. 복잡한 경우 포맷터를 여전히 수동으로 생성할 수 있습니다. `setFormatter(undefined)`를 호출하여 포맷터를 기본 설정으로 재설정할 수 있습니다.

선택적 필드 `universe`는 세트가 제한된 경우 `setValue`에 전달될 수 있는 모든 가능한 값의 세트를 나타내는 데 사용됩니다. 현재 `universe`는 편집된 값이 Boolean 또는 enumeration [유형](/refguide/attributes/#type)인 경우에만 제공됩니다.

### ModifiableValue {#modifiable-value}

`ModifiableValue`는 플러그형 위젯 클라이언트 컴포넌트에 의해 변경될 수 있는 값을 나타내는 데 사용됩니다. [association 속성](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#association)에만 전달되며 다음과 같이 정의됩니다:

```ts
export interface ModifiableValue<T> {
	readonly status: ValueStatus;
	readonly readOnly: boolean;
    
	readonly value: Option<T>;
	readonly setValue: (value: Option<T>) => void;
	readonly validation: Option<string>;
	readonly setValidator: (validator?: (value: Option<T>) => Option<string>) => void;
}
```

연관 속성에 대해 컴포넌트가 수신하는 유형은 허용된 연관 유형에 따라 다릅니다:

* 참조(references)만 허용되는 경우, 컴포넌트는 `ModifiableValue<ObjectItem> & { type: "Reference" };`로 정의된 `ReferenceValue`를 받습니다.
* 참조 세트(reference sets)만 허용되는 경우, 클라이언트는 `ModifiableValue<ObjectItem[]> & { type: "ReferenceSet" };`으로 정의된 `ReferenceSetValue`를 받습니다.

마지막으로 두 연관 유형이 모두 허용되는 경우 유형은 `ReferenceValue`와 `ReferenceSetValue`의 유니온(union)이며 위젯은 `type`을 확인하여 참조 또는 참조 세트가 구성되었는지 확인하고 코드에서 그에 따라 작동해야 합니다. 유형을 확인하면 TypeScript에서 올바른 유형으로 [축소(narrow)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content)됩니다.

```ts
if (association.value === undefined) {
	return "None";
}

if (association.type === "Reference") {
	return textTemplate.get(association.value);
} else {
	return association.value.map((objectItem) => textTemplate.get(objectItem)).join(",");
}
```

`status`는 `DynamicValue`에 노출된 것과 유사합니다. 값의 로딩이 완료되었는지와 로딩이 성공했는지를 나타냅니다. `DynamicValue`와 마찬가지로 `ModifiableValue`는 위젯이 깜빡이는 것을 방지하기 위해 `status`가 `Available`에서 `Loading`으로 변경될 때 이전 `value`를 계속 반환합니다.

`readOnly` 플래그는 값을 실제로 편집할 수 있는지 여부를 나타냅니다. 예를 들어 위젯이 [편집 가능(editable)](/refguide/data-view/#editable)하지 않은 데이터 뷰 내부에 배치되어 있거나, [액세스 규칙(access rules)](/refguide/access-rules/)으로 인해 선택된 속성을 편집할 수 없는 경우 true가 됩니다. `status`가 `ValueStatus.Available`이 아닌 경우 `readOnly` 플래그는 항상 true입니다. 읽기 전용으로 설정된 값을 편집하려는 시도는 아무런 효과가 없으며 디버그 수준의 경고 메시지가 발생합니다.

값은 `value` 필드에서 읽을 수 있고 `setValue` 함수를 사용하여 수정할 수 있습니다. `value`에는 구성된 연관 관계에 따라 `ObjectItem` 또는 `ObjectItem[]`이 포함됩니다. `ObjectItem`은 선택 가능한 객체의 데이터 소스에 연결된 [연결된 프로퍼티 값(linked property value)](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/#linked-values)의 `get` 함수에 전달될 수 있습니다.

값을 설정할 때 `ObjectItem`은 선택 가능한 객체의 데이터 소스에 있는 항목이어야 합니다. `setValue`는 아무것도 반환하지 않으며 값이 동기적으로 변경됨을 보장하지 않습니다. 하지만 변경 사항이 전파되면 컴포넌트는 변경 사항을 반영하는 새 prop을 받습니다.

컴포넌트가 정의된 유효성 검사 규칙 세트를 확장할 수 있습니다. 전달된 값을 확인하고 유효성 검사 메시지 문자열(있는 경우)을 반환하는 함수인 새로운 유효성 검사기(validator)를 `setValidator` 함수를 통해 제공할 수 있습니다. 컴포넌트는 하나의 커스텀 유효성 검사기만 가질 수 있습니다. Mendix 플랫폼은 최종 사용자가 페이지를 저장할 때와 같이 필요할 때마다 커스텀 유효성 검사기가 실행되도록 보장합니다. 컴포넌트 수명 주기의 초기 단계, 특히 [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) 함수에서 `setValidator`를 호출하는 것이 좋습니다.

### IconValue {#icon-value}

`DynamicValue<IconValue>`는 아이콘(Mendix 플랫폼의 작은 픽토그램)을 나타내는 데 사용됩니다. 이는 정적 또는 동적 파일 기반 또는 글꼴 기반 이미지일 수 있습니다. 아이콘은 [icon](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#icon) 속성을 통해서만 구성할 수 있습니다. `IconValue`는 다음과 같이 정의됩니다:

```ts
interface GlyphIcon {
    readonly type: "glyph";
    readonly iconClass: string;
}
    
interface WebImageIcon {
    readonly type: "image";
    readonly iconUrl: string;
}

interface Icon {
    readonly type: "icon";
    readonly iconClass: string;
}
    
interface NativeImageIcon {
    readonly type: "image";
    readonly iconUrl: Readonly<ImageURISource>;
}
    
export type WebIcon = GlyphIcon | WebImageIcon | Icon | undefined;
export type NativeIcon = GlyphIcon | NativeImageIcon | undefined;
export type IconValue = WebIcon | NativeIcon;
```

실제로 `WebIcon` 및 `NativeIcon`은 일반적으로 Mendix에서 제공하는 `Icon` 컴포넌트에 전달됩니다. 이는 모든 유형의 아이콘을 한 번에 처리할 수 있는 편리한 방법을 제공하기 때문입니다. `Icon`에 대한 자세한 내용은 아래의 [Icon](#icon) 섹션을 참조하십시오.

### ImageValue{#imagevalue}

`DynamicValue<ImageValue>`는 정적 또는 동적 이미지를 나타내는 데 사용됩니다. 이미지는 [image](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#image) 속성을 통해서만 구성할 수 있습니다. `ImageValue`는 다음과 같이 정의됩니다:

```ts
export interface WebImage {
    readonly uri: string;
    readonly name: string;
    readonly altText?: string;
}
export type NativeImage = Readonly<ImageURISource & { name?: string; } | string | number>;
export type ImageValue = WebImage | NativeImage;
```

`NativeImage`는 네이티브 위젯을 위해 Mendix에서 제공하는 `mendix/components/native/Image` 컴포넌트에 전달될 수 있습니다. `WebImage`는 react-dom의 `img` 컴포넌트에 전달될 수 있습니다.

### FileValue {#filevalue}

`DynamicValue<FileValue>`는 파일을 나타내는 데 사용됩니다. 파일은 [file](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#file) 속성을 통해서만 구성할 수 있습니다. `FileValue`는 다음과 같이 정의됩니다:

```ts
export interface FileValue {
    readonly uri: string;
    readonly name: string;
}
```

### 목록 값(List values){#list-values}

`ListValue`는 [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#datasource) 속성에 대한 객체 목록을 나타내는 데 사용됩니다. `ListValue` 및 관련 속성 값의 사용에 대한 자세한 내용은 [목록 값(List Values)](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-10/)을 참조하십시오.

### SelectionValue {#selection-value}

`SelectionValue`는 선택 항목을 나타내는 데 사용됩니다. [selection 속성](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/#selection)에만 전달되며 다음과 같이 정의됩니다:

```ts
declare interface SelectionValue<T> {
    readonly selection: T;
    readonly setSelection: (value: T) => void;
}
```

선택 속성에 대해 컴포넌트가 수신하는 유형은 허용된 선택 유형에 따라 다릅니다:

* 단일 선택만 허용되는 경우, 컴포넌트는 `SelectionValue<Option<ObjectItem>> & { type: "Single" };`로 정의된 `SelectionSingleValue`를 받습니다.
* 다중 선택만 허용되는 경우, 클라이언트는 `SelectionValue<ObjectItem[]> & { type: "Multi" };`로 정의된 `SelectionMultiValue`를 받습니다.

마지막으로 두 선택 유형이 모두 허용되는 경우 유형은 `SelectionSingleValue`와 `SelectionMultiValue`의 유니온이며 위젯은 `type`을 확인하여 단일 또는 다중 선택이 구성되었는지 확인하고 코드에서 그에 따라 작동해야 합니다. 유형을 확인하면 TypeScript에서 올바른 유형으로 [축소(narrow)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content)됩니다:

```ts
if (selection?.selection === undefined) {
    return "None";
}

if (selection.type === "Single") {
    selection.setSelection(objectItem);
} else {
    selection.setSelection([objectItem]);
}
```

## 노출된 모듈(Exposed Modules)

### Icon {#icon}

Mendix 플랫폼은 `Icon` React 컴포넌트의 두 가지 버전인 `mendix/components/web/Icon` 및 `mendix/components/native/Icon`을 노출합니다. 두 컴포넌트 모두 각각 `WebIcon` 및 `NativeIcon` 값을 렌더링하는 데 유용한 도우미입니다. 이들은 `icon` prop을 통해 전달되어야 합니다. 네이티브 `Icon` 컴포넌트는 추가로 `color`(`string`) 및 `size`(`number`) props를 허용합니다.

## 노출된 라이브러리(Exposed Libraries) {#exposed-libraries}

### React 및 React Native {#exposed-react}

Mendix 플랫폼은 [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom), [react-native](https://www.npmjs.com/package/react-native) 패키지를 플러그형 위젯에 재내보내기(re-export)합니다. `react`는 모든 컴포넌트에서 사용할 수 있습니다. `react-dom`은 웹 또는 하이브리드 모바일 앱에서 실행되는 컴포넌트에서만 사용할 수 있습니다. `react-native`는 네이티브 모바일 앱에서 실행되는 컴포넌트에서만 사용할 수 있습니다.

Mendix는 `react` 버전 `17.*.*`(npm 기준 `^17.0.1`) 및 일치하는 버전의 `react-dom`을 제공합니다. `react-native`의 경우 Mendix는 버전 `0.63.*`(npm 기준 `~0.63.3`)를 노출합니다.

패치 버전은 Mendix의 마이너 릴리스마다 변경될 수 있습니다. 

### Big.js

Mendix 플랫폼은 숫자를 표현하고 작업하기 위해 [big.js](https://www.npmjs.com/package/big-js)를 사용합니다. Mendix 9.0은 버전 6.0을 재내보내기합니다.

## 네이티브 종속성(Native Dependencies)

때때로 위젯의 경우 `react` 및 `react-native` 버전의 기존 커뮤니티 라이브러리에 의존해야 할 필요가 있습니다. 웹 플랫폼을 대상으로 하는 위젯의 경우 이러한 라이브러리를 위젯 패키지에 번들링하여 위젯과 함께 배포할 수 있으므로 포함하기 쉽습니다. 네이티브 플랫폼을 대상으로 하는 라이브러리의 경우에는 그렇지 않은 경우가 많습니다. 일부 라이브러리는 Mendix 네이티브 앱 또는 [Make It Native](/refguide/getting-the-make-it-native-app/) 앱에 Android 및 iOS 전용 코드를 설정해야 하기 때문입니다. 자세한 내용은 [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies-10/)을 참조하십시오.

## 추가 정보

* [플러그형 위젯 API 문서](/apidocs-mxsdk/apidocs/pluggable-widgets-10/)
* [플러그형 위젯 속성 유형 문서](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/)
* [플러그형 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)
* [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies-10/)

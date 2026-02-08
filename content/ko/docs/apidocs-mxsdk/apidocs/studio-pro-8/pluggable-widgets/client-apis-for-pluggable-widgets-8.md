---
title: "Client API"
linktitle: "플러거블 위젯용 Client API"
url: /apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/
weight: 20
description: A guide for understanding the client APIs available to pluggable widgets.
---

## 소개

Mendix 플랫폼이 플러거블 위젯(Pluggable Widget) 클라이언트 컴포넌트에 제공하는 주요 API는 컴포넌트가 수신하는 props입니다. 이러한 props는 위젯 정의 XML 파일에 지정된 속성의 구조와 유사합니다([플러거블 위젯 API](/apidocs-mxsdk/apidocs/pluggable-widgets/)에 설명된 구조). 속성의 어트리뷰트 타입은 클라이언트 컴포넌트에 속성이 어떻게 표현되는지에 영향을 줍니다. 간단히 말해, 어트리뷰트의 타입이 무엇이 될지를 정의합니다. 속성 타입 및 속성 값이 준수할 수 있는 인터페이스에 대한 자세한 내용은 [플러거블 위젯 속성 타입](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/)에서 확인할 수 있습니다. 플러거블 위젯의 동작 예제를 보려면 [플러거블 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)을 참조하세요.

Mendix 플랫폼은 또한 몇 가지 JavaScript 모듈을 노출합니다. 구체적으로 추가 Mendix API와 React와 같은 기존 라이브러리가 있으며, 클라이언트 컴포넌트가 플랫폼과 올바르게 기능하려면 이를 공유해야 합니다. 노출된 라이브러리에 대한 자세한 내용은 아래의 [노출된 라이브러리](#exposed-libraries) 섹션을 참조하세요.

## 번들링

Mendix는 JavaScript 라이브러리에서 일반적으로 사용되는 접근 방식인 *npm 패키지*로 코드를 제공하지 않습니다. 대신, Mendix는 실행 중에 사용 가능한 모듈을 제공합니다. 따라서 [webpack](https://webpack.js.org/)과 같은 모듈 번들러를 사용하는 경우, 이러한 모듈을 [externals](https://webpack.js.org/configuration/externals/)로 표시하도록 구성해야 합니다.

이 과정은 번거로울 수 있으므로, 플러거블 위젯과 함께 작동하도록 올바르게 구성된 번들러가 포함된 이 [도구 패키지](https://www.npmjs.com/package/@mendix/pluggable-widgets-tools)를 사용하는 것을 권장합니다. 모범 사례를 따르고 [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget)를 사용하여 위젯을 스캐폴딩하면, 이 패키지가 자동으로 추가됩니다.

## 표준 속성 {#standard-properties}

위젯 정의 XML 파일에 지정된 속성에 해당하는 props와 함께, 아래에 나열된 props는 항상 클라이언트 컴포넌트에 전달됩니다.

### Name 

Mendix Studio Pro에서 모든 위젯에는 이름이 구성되어야 합니다. 위젯 이름의 주요 용도는 [Selenium](/howto/integration/selenium-support/) 또는 Appium 테스트 자동화를 사용하여 대상으로 지정할 수 있도록 클라이언트에서 해당 컴포넌트를 식별 가능하게 만드는 것입니다. 웹 앱에서 Mendix 플랫폼은 위젯에 자동으로 `mx-name-{widgetName}` 클래스를 추가하므로 컴포넌트 개발자가 추가 작업을 할 필요가 없습니다. 불행히도 이 솔루션은 [네이티브 모바일 앱](/refguide/mobile/)에서는 불가능합니다. 네이티브 모바일 앱의 경우 컴포넌트 개발자가 주어진 `string` `name` prop을 기본 React Native [testID](https://facebook.github.io/react-native/docs/view#testid)에 수동으로 전달해야 합니다.

### Class

사용자는 모든 위젯에 여러 클래스를 지정할 수 있습니다. Studio Pro에서 [class](/refguide/common-widget-properties/#class) 속성을 직접 구성하거나 디자인 속성을 사용하여 이를 수행할 수 있습니다. 웹 앱에서 Mendix 플랫폼은 구성에서 CSS 클래스 문자열을 생성하여 모든 클라이언트 컴포넌트에 `string` `class` prop으로 전달합니다. 불행히도 React Native에는 클래스에 대한 유사한 지원이 없습니다. 따라서 네이티브 모바일 앱에서 컴포넌트는 `class` prop 대신 `style` prop을 수신합니다.

### Style

사용자는 [style](/refguide/common-widget-properties/#style) 속성을 사용하여 웹 페이지의 모든 위젯에 대해 사용자 정의 CSS를 지정할 수 있습니다. 이 스타일링은 `CSSProperties` 타입의 선택적 `style` prop을 통해 클라이언트 컴포넌트에 전달됩니다.

네이티브 페이지에서 `style` prop의 의미는 매우 다릅니다. 우선, 사용자는 네이티브 페이지의 위젯에 대해 앞서 언급한 인라인 스타일을 지정할 수 없습니다. 따라서 `style` prop은 구성된 클래스를 기반으로 계산된 스타일을 전달하는 데 사용됩니다. 클라이언트 컴포넌트는 모든 적용 가능한 스타일이 결합된 단일 [스타일 객체](/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/#style-objects)가 포함된 배열을 수신합니다.

{{% alert color="info" %}}
이 속성은 Mendix 8.0에서 스타일 객체 배열로 도입되었습니다. 이 배열은 Mendix 8.6에서 단일 스타일 객체를 포함하도록 변경되었습니다.
{{% /alert %}}

### TabIndex

위젯이 TabIndex prop [시스템 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#tabindex)을 사용하는 경우, 구성된 `Tab index`를 `number` `tabIndex` 속성을 통해 수신합니다. 단, 구성된 탭 인덱스가 기본값 0인 경우는 제외됩니다. 현재 `tabIndex`는 네이티브 페이지에서 사용되는 위젯에는 전달되지 않습니다. 

## 속성 값

### ActionValue {#actionvalue}

ActionValue는 액션 버튼의 [On click](/refguide/on-click-event/#on-click) 속성과 같은 액션을 표현하는 데 사용됩니다. **Do nothing**을 제외한 모든 액션에 대해 컴포넌트는 다음 인터페이스를 준수하는 값을 수신합니다. **Do nothing**의 경우 `undefined`를 수신합니다. `ActionValue` prop은 다음과 같습니다:

```ts
export interface ActionValue {
    readonly canExecute: boolean;
    readonly isExecuting: boolean;
    execute(): void;
}
```

`canExecute` 플래그는 현재 조건에서 액션을 실행할 수 있는지를 나타냅니다. 이를 통해 앱의 보안 설정에서 허용되지 않는 액션의 실행을 방지할 수 있습니다. 마이크로플로우(Microflow)와 나노플로우(Nanoflow)에서 사용자 역할을 설정하여 사용자가 이를 호출할 수 있도록 할 수 있습니다. 사용자 역할과 보안에 대한 자세한 내용은 [모듈 보안 참조 가이드](/refguide/module-security/)를 참조하세요. 매개변수가 있는 마이크로플로우(Microflow)를 트리거하는 **Call microflow** 액션을 사용할 때도 이 플래그를 활용할 수 있습니다. 이러한 액션은 매개변수 객체가 사용 가능해질 때까지 실행할 수 없습니다. 예를 들어, 상위 Data view가 로딩을 완료한 경우입니다. 실행할 수 없는 액션에 대해 `execute`를 시도하면 디버그 수준 경고 메시지를 생성하는 것 외에는 아무런 효과가 없습니다. 

`isExecuting` 플래그는 액션이 현재 실행 중인지를 나타냅니다. 장시간 실행되는 액션은 완료하는 데 수 초가 걸릴 수 있습니다. 컴포넌트는 이 정보를 사용하여 사용자가 로딩 진행 상황을 추적할 수 있는 인라인 로딩 인디케이터를 렌더링할 수 있습니다. 사용자가 여러 액션을 병렬로 트리거하는 것은 종종 바람직하지 않습니다. 따라서 컴포넌트는 (구성에 따라) 이전 실행이 아직 진행 중인 동안 액션 트리거를 건너뛸 수 있습니다.

`isExecuting`은 현재 액션이 실행 중인지만 나타냅니다. 다른 액션으로 인해 대상 나노플로우(Nanoflow), 마이크로플로우(Microflow) 또는 객체 작업이 실행 중인지는 나타내지 않습니다.

`execute` 메서드는 액션을 트리거합니다. 아무것도 반환하지 않으며 액션이 동기적으로 시작된다고 보장하지 않습니다. 그러나 액션이 시작되면 컴포넌트는 `isExecuting` 플래그가 설정된 새 prop을 수신합니다.

### DynamicValue {#dynamic-value}

DynamicValue는 시간이 지남에 따라 변경될 수 있는 값을 표현하는 데 사용되며 많은 속성 타입에서 사용됩니다. 다음과 같이 정의됩니다:

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

컴포넌트는 `DynamicValue<X>`를 수신하며, 여기서 타입 `X`는 속성 구성에 따라 달라집니다. 예를 들어, [TextTemplate 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#texttemplate)의 경우 `DynamicValue<string>`이 되지만, [expression 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#expression)의 경우 `X`는 구성된 `returnType`에 따라 달라집니다.

위의 타입 정의가 복잡해 보이지만, 컴포넌트는 항상 `DynamicValue.value`를 읽을 수 있으므로 사용하기는 상당히 간단합니다. 이 필드에는 텍스트 템플릿의 경우 보간된 `string`과 같은 실제 값이 포함되거나, 상위 Data view가 Data source를 다시 로드하는 경우와 같이 값이 재계산되는 중이면 마지막으로 알려진 올바른 값이 포함됩니다. 다른 경우에는 값이 `undefined`로 설정됩니다.

`DynamicValue.status`는 동적 값의 상태에 대한 추가 정보와 컴포넌트가 이를 다르게 처리해야 하는지를 제공합니다. 이는 다음 상황을 다루는 [구분된 유니온(discriminated union)](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)을 사용하여 수행됩니다:

* `status`가 `ValueStatus.Available`이면, 동적 값을 계산하기에 충분한 정보가 있으며, 결과가 `value`에 노출됩니다.
* `status`가 `ValueStatus.Unavailable`이면, 상위 Data view의 Data source가 아무것도 반환하지 않은 경우와 같이 동적 값에 충분한 정보가 없습니다. 이때 `value`는 항상 `undefined`입니다.
* `status`가 `ValueStatus.Loading`이면, 동적 값이 필요한 정보가 도착하기를 기다리고 있습니다. 이는 상위 Data view가 객체 로드를 기다리고 있거나 [클라이언트에서 새로 고침](/refguide/change-object/#refresh-in-client)으로 인해 다시 로드하는 경우에 발생합니다.
    * 동적 값이 이전에 `ValueStatus.Available` 상태였던 경우, 이전 `value`가 여전히 반환됩니다. 이는 컴포넌트가 `Loading`을 명시적으로 처리할 필요가 없는 경우 이전 값을 계속 표시할 수 있도록 하기 위한 것입니다. 이를 통해 표시된 값이 로딩과 비로딩 사이에서 빠르게 여러 번 변경되는 깜빡임 현상을 방지합니다.
    * 다른 경우에는 `value`가 `undefined`입니다. 이는 페이지가 아직 로드되는 동안의 일반적인 상황입니다.

### EditableValue {#editable-value}

EditableValue는 플러거블 위젯(Pluggable Widget) 클라이언트 컴포넌트에 의해 변경될 수 있는 값을 표현하는 데 사용되며 [attribute 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute)에만 전달됩니다. 다음과 같이 정의됩니다:

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

컴포넌트는 `EditableValue<X>`를 수신하며, 여기서 `X`는 구성된 `attributeType`에 따라 달라집니다.

`status`는 `DynamicValue`에 대해 노출된 것과 유사합니다. 값의 로딩이 완료되었는지와 로딩이 성공적이었는지를 나타냅니다. `DynamicValue`와 마찬가지로, `EditableValue`는 위젯의 깜빡임을 방지하기 위해 `status`가 `Available`에서 `Loading`으로 변경될 때 이전 `value`를 계속 반환합니다.

`readOnly` 플래그는 값이 실제로 편집 가능한지를 나타냅니다. 예를 들어 위젯이 [편집 가능](/refguide/data-view/#editable)하지 않은 Data view 안에 배치되거나, 선택된 속성이 [접근 규칙](/refguide/access-rules/)으로 인해 편집 가능하지 않은 경우 false가 됩니다. `status`가 `ValueStatus.Available`이 아닌 경우 `readOnly` 플래그는 항상 false입니다. 읽기 전용으로 설정된 값을 편집하려는 시도는 아무런 효과가 없으며 디버그 수준 경고 메시지가 발생합니다.

값은 `value` 필드에서 읽을 수 있으며 `setValue` 함수를 사용하여 수정할 수 있습니다. `setValue`는 아무것도 반환하지 않으며 값이 동기적으로 변경된다고 보장하지 않습니다. 그러나 변경이 전파되면 컴포넌트는 변경을 반영하는 새 prop을 수신합니다.

값을 설정할 때, 새 값이 특정 유효성 검사 규칙을 충족하지 못할 수 있습니다. 예를 들어 값이 기본 속성이 허용하는 것보다 클 수 있습니다. 이 경우, 변경은 prop을 통해 수신된 `value`와 `displayValue`에만 영향을 미칩니다. 변경은 객체의 속성에 전파되지 않으며 컴포넌트 외부에서 보이지 않습니다. 컴포넌트는 또한 `EditableValue`의 `validation` 필드를 통해 유효성 검사 오류 텍스트를 수신합니다.

컴포넌트가 정의된 유효성 검사 규칙 세트를 확장하는 것이 가능합니다. 전달된 값을 확인하고 검증 메시지 문자열을 반환하는 새 유효성 검사기(함수)를 `setValidator` 함수를 통해 제공할 수 있습니다. 컴포넌트는 단일 사용자 정의 유효성 검사기만 가질 수 있습니다. Mendix 플랫폼은 사용자 정의 유효성 검사기가 필요할 때, 예를 들어 최종 사용자가 페이지를 저장할 때 실행되도록 보장합니다. `setValidator`를 컴포넌트 생명주기 초기에, 특히 [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) 함수에서 호출하는 것이 모범 사례입니다.

실제로 많은 클라이언트 컴포넌트는 로케일별 설정을 고려하여 값을 보기 좋게 형식화된 문자열로 표시합니다. 이러한 경우를 용이하게 하기 위해 `EditableValue`는 `value`의 형식화된 버전인 `displayValue` 필드와 파싱을 처리하는 `setValue`의 버전인 `setTextValue` 메서드를 노출합니다. `setTextValue`는 또한 전달된 값이 파싱 가능한지 유효성을 검사하고 대상 속성의 타입을 할당합니다. `setValue`와 마찬가지로 유효하지 않은 값에 대한 변경은 prop 자체 이상으로 전파되지 않지만 `validation`이 보고됩니다. 값을 파싱할 수 없는 경우 prop에는 `displayValue` 문자열만 포함되고 `value`는 undefined가 됩니다.

형식에 대한 제어를 유지하면서 더 편리한 `displayValue`와 `setTextValue`를 사용하는 방법이 있습니다. 컴포넌트는 포매터 객체(`format`과 `parse` 메서드를 가진 객체)를 전달하여 `setFormatter` 메서드를 사용할 수 있습니다. Mendix 플랫폼은 간단한 경우를 위해 이러한 객체를 생성하는 편리한 방법을 제공합니다. `EditableValue.formatter` 필드를 사용하여 노출된 기존 포매터는 `withConfig` 메서드를 사용하여 수정할 수 있습니다. 복잡한 경우에는 포매터를 수동으로 생성할 수 있습니다. `setFormatter(undefined)`를 호출하여 포매터를 기본 설정으로 재설정할 수 있습니다.

선택적 필드 `universe`는 제한된 집합인 경우 `setValue`에 전달할 수 있는 모든 가능한 값의 집합을 나타내는 데 사용됩니다. 현재 `universe`는 편집되는 속성이 Boolean 또는 열거형(enumeration) [타입](/refguide/attributes/#type)인 경우에만 제공됩니다.

### IconValue {#icon-value}

`DynamicValue<IconValue>`는 Mendix 플랫폼에서 작은 그림인 아이콘을 표현하는 데 사용됩니다. 이는 정적 또는 동적 파일 기반 또는 폰트 기반 이미지일 수 있습니다. 아이콘은 [icon](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute) 속성을 통해서만 구성할 수 있습니다. `IconValue`는 다음과 같이 정의됩니다:

```ts
interface GlyphIcon {
    readonly type: "glyph";
    readonly iconClass: string;
}
    
interface WebImageIcon {
    readonly type: "image";
    readonly iconUrl: string;
}
    
interface NativeImageIcon {
    readonly type: "image";
    readonly iconUrl: Readonly<ImageURISource>;
}
    
export type WebIcon = GlyphIcon | WebImageIcon | undefined;
export type NativeIcon = GlyphIcon | NativeImageIcon | undefined;
export type IconValue = WebIcon | NativeIcon;
```

실제로 `WebIcon`과 `NativeIcon`은 일반적으로 Mendix에서 제공하는 `Icon` 컴포넌트에 전달됩니다. 이는 모든 유형의 아이콘을 한 번에 처리하는 편리한 방법을 제공합니다. `Icon`에 대한 자세한 내용은 아래의 [Icon](#icon) 섹션을 참조하세요.

### ImageValue{#imagevalue}

`DynamicValue<ImageValue>`는 정적 또는 동적 이미지를 표현하는 데 사용됩니다. 이미지는 [image](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#image) 속성을 통해서만 구성할 수 있습니다. `ImageValue`는 다음과 같이 정의됩니다:

```ts
export interface WebImage {
    readonly uri: string;
    readonly name: string;
    readonly altText?: string;
}
export type NativeImage = Readonly<ImageURISource & { name?: string; } | string | number>;
export type ImageValue = WebImage | NativeImage;
```

`NativeImage`는 네이티브 위젯을 위해 Mendix에서 제공하는 `mendix/components/native/Image` 컴포넌트에 전달할 수 있습니다. `WebImage`는 react-dom의 `img` 컴포넌트에 전달할 수 있습니다.

### FileValue {#filevalue}

`DynamicValue<FileValue>`는 파일을 표현하는 데 사용됩니다. 파일은 [file](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#file) 속성을 통해서만 구성할 수 있습니다. `FileValue`는 다음과 같이 정의됩니다:

```ts
export interface FileValue {
    readonly uri: string;
    readonly name: string;
}
```

### ListValue{#listvalue}

`ListValue`는 [datasource](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#datasource) 속성에 대한 객체 목록을 표현하는 데 사용됩니다.

```ts
export interface ObjectItem {
    id: GUID;
}

export interface ListValue {
    status: ValueStatus;
    offset: number;
    limit: number;
    setOffset(offset: number): void;
    setLimit(limit: Option<number>): void;
    items?: ObjectItem[];
    hasMoreItems?: boolean;
    totalCount?: number;
}
```

`isList="true"`인 `datasource` 속성이 위젯에 구성되면, 클라이언트 컴포넌트는 `ListValue`로 표현된 객체 목록을 받습니다. 이 타입은 데이터 소스에 대한 세부적인 접근을 허용하며, 목록에 표현되는 항목의 limit와 offset에 대한 제어를 가능하게 합니다.

그러나 모든 객체가 `items` 배열에서 GUID로만 표현되므로 `ListValue`에서 도메인 데이터에 직접 접근하는 것은 불가능합니다. 대신, 항목 목록은 다른 속성, 예를 들어 [`attribute`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute), [`action`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#action) 또는 [`widgets`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets) 타입의 속성과 조합하여 사용할 수 있습니다.

### ListActionValue {#listactionvalue}

`ListActionValue`는 `ListValue`의 항목에 적용할 수 있는 액션을 표현합니다. `ListActionValue`는 함수이며 그 정의는 다음과 같습니다:

```ts
export type ListActionValue = (item: ObjectItem) => ActionValue;
```

`ListValue`의 특정 항목에 대한 액션을 호출하려면, 먼저 해당 항목으로 `ListActionValue`를 호출하여 `ActionValue`의 인스턴스를 얻어야 합니다. 아래 예제를 참조하세요.

위젯 속성이 다음과 같이 구성되어 있다고 가정합니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myListAction: ListActionValue;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소에 대해 `myListAction`을 호출하는 방법을 보여줍니다.

```ts
const actionOnFirstItem = this.props.myListAction(this.props.myDataSource.item[0]);

actionOnFirstItem.execute();
```

이 코드 샘플에서는 간결함을 위해 `myDataSource`의 status 확인과 항목의 가용성 확인이 생략되었습니다. `ActionValue`의 사용에 대한 자세한 내용은 [ActionValue 섹션](#actionvalue)을 참조하세요.

### ListAttributeValue {#listattributevalue}

`ListAttributeValue`는 데이터 소스에 연결된 [attribute 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute)을 표현합니다.
이를 통해 클라이언트 컴포넌트는 `ListValue`의 개별 항목에 대한 속성 값에 접근할 수 있습니다. `ListAttributeValue`는 함수이며 그 정의는 다음과 같습니다:

```ts
export type ListAttributeValue<T extends AttributeValue> = (item: ObjectItem) => EditableValue<T>;
```

타입 `<T>`는 속성(attribute) 속성(property)에 구성된 허용 값 타입에 따라 달라집니다.

{{% alert color="warning" %}}
기술적 제한으로 인해 `ListAttributeValue`를 통해 얻은 속성은 아직 편집할 수 없습니다. `ListAttributeValue`가 반환하는 `EditableValue`는 항상 **읽기 전용**입니다.
{{% /alert %}}

`ListValue`의 특정 항목의 속성 값으로 작업하려면, 먼저 해당 항목으로 `ListAttributeValue`를 호출하여 `EditableValue`의 인스턴스를 얻어야 합니다. 아래 예제를 참조하세요.

위젯 속성이 다음과 같이 구성되어 있다고 가정합니다(`string` 타입의 속성):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myAttributeOnDatasource: ListAttributeValue<string>;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소의 속성에 대한 읽기 전용 값을 나타내는 `EditableValue`를 얻는 방법을 보여줍니다.

```ts
const attributeValue = this.props.myAttributeOnDatasource(this.props.myDataSource.items[0]);
```

참고: 이 코드 샘플에서는 간결함을 위해 `myDataSource`의 status 확인과 항목의 가용성 확인이 생략되었습니다. `EditableValue`의 사용에 대한 자세한 내용은 [EditableValue 섹션](#editable-value)을 참조하세요.

### ListWidgetValue {#listwidgetvalue}

`ListWidgetValue`는 데이터 소스에 연결된 [widget 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets)을 표현합니다. 
이를 통해 클라이언트 컴포넌트는 `ListValue`의 항목으로 하위 위젯을 렌더링할 수 있습니다.
`ListWidgetValue`는 함수이며 그 정의는 다음과 같습니다:

```ts
export type ListWidgetValue = (item: ObjectItem) => ReactNode;
```

명확히 하기 위해, `widgets` 속성 타입과 함께 `ListValue`를 사용하는 다음 예제를 살펴보세요. `myWidgets`라는 이름의 `widgets` 속성이 `myDataSource`라는 이름의 `datasource`에 연결되도록 구성된 경우, 클라이언트 컴포넌트 props는 다음과 같습니다:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myWidgets: (i: ObjectItem) => ReactNode;
}
```

위의 구성으로 인해, 클라이언트 컴포넌트는 목록의 특정 항목으로 위젯의 모든 인스턴스를 다음과 같이 렌더링할 수 있습니다:

```ts
this.props.myDataSource.items.map(i => this.props.myWidgets(i));
```

### ListExpressionValue {#listexpressionvalue}

`ListExpressionValue`는 데이터 소스에 연결된 [expression 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#expression) 또는 [text template 속성](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#texttemplate)을 표현합니다. 이를 통해 클라이언트 컴포넌트는 `ListValue`의 개별 항목에 대한 표현식 또는 텍스트 템플릿 값에 접근할 수 있습니다. `ListExpressionValue`는 함수이며 그 정의는 다음과 같습니다:

```ts
export type ListExpressionValue<T extends AttributeValue> = (item: ObjectItem) => DynamicValue<T>;
```

타입 `<T>`는 expression 속성에 구성된 반환 타입에 따라 달라집니다. text template 속성의 경우 이 타입은 항상 `string`입니다.

`ListValue`의 특정 항목에 대한 expression 또는 text template 값으로 작업하려면, 먼저 해당 항목으로 `ListExpressionValue`를 호출하여 `DynamicValue`의 인스턴스를 얻어야 합니다. 아래 예제를 참조하세요.

위젯 속성이 다음과 같이 구성되어 있다고 가정합니다(`boolean` 타입의 expression):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myExpressionOnDatasource: ListExpressionValue<boolean>;
    myTextTemplateOnDatasource: ListExpressionValue<string>;
}
```

다음 코드 샘플은 `myDataSource`의 첫 번째 요소에 대한 expression 값을 나타내는 `DynamicValue`를 얻는 방법을 보여줍니다.

```ts
const expressionValue = this.props.myDataSource.myExpressionOnDatasource(this.props.myDataSource.item[0]);
```

## 노출된 모듈

### Icon {#icon}

Mendix 플랫폼은 `Icon` React 컴포넌트의 두 가지 버전을 노출합니다: `mendix/components/web/Icon`과 `mendix/components/native/Icon`. 두 컴포넌트 모두 각각 `WebIcon`과 `NativeIcon` 값을 렌더링하는 데 유용한 헬퍼입니다. `icon` prop을 통해 전달해야 합니다. 네이티브 `Icon` 컴포넌트는 추가로 `color` (`string`)와 `size` (`number`) props를 허용합니다.

## 노출된 라이브러리 {#exposed-libraries}

### React 및 React Native {#exposed-react}

Mendix 플랫폼은 [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom), [react-native](https://www.npmjs.com/package/react-native) 패키지를 플러거블 위젯에 다시 내보냅니다. React는 모든 컴포넌트에서 사용할 수 있습니다. React-dom은 웹 또는 하이브리드 모바일 앱에서 실행되는 컴포넌트에만 사용할 수 있습니다. React-native는 네이티브 모바일 앱에서 실행되는 컴포넌트에만 사용할 수 있습니다.

Mendix는 React 버전 16.9.x(npm 용어로 `~16.9.0`)를 제공합니다. 패치 버전은 Mendix의 마이너 릴리스마다 변경될 수 있습니다. Mendix는 항상 일치하는 버전의 react-dom을 제공합니다.

react-native의 경우 Mendix는 단일 버전 0.61.5를 노출합니다. Mendix에는 다음 라이브러리도 포함되어 있습니다:

|   라이브러리   |   버전   |
| ---- | ---- |
|   [@react-native-community/art](https://www.npmjs.com/package/@react-native-community/art)   |   1.2.0   |
|   [@react-native-community/async-storage](https://www.npmjs.com/package/@react-native-community/async-storage)   |   1.8.1   |
|   [@react-native-community/cameraroll](https://www.npmjs.com/package/@react-native-community/cameraroll)   | 1.4.0     |
|  [@react-native-community/datetimepicker](https://www.npmjs.com/package/@react-native-community/datetimepicker)   |  2.3.0  |
|   [@react-native-community/geolocation](https://www.npmjs.com/package/@react-native-community/geolocation)   |   2.0.2   |
|   [@react-native-community/masked-view](https://www.npmjs.com/package/@react-native-community/masked-view)   |  0.1.7    |
|   [@react-native-community/netinfo](https://www.npmjs.com/package/@react-native-community/netinfo)   | 5.6.2     |
|   [react-native-ble-plx](https://www.npmjs.com/package/react-native-ble-plx)   |   1.1.1   |
|   [react-native-calendar-events](https://www.npmjs.com/package/react-native-calendar-events)   |   1.7.3   |
|   [react-native-camera](https://www.npmjs.com/package/react-native-camera)   |   3.19.2   |
|   [react-native-code-push](https://www.npmjs.com/package/react-native-code-push)   |   6.1.1   |
|   [react-native-device-info](https://www.npmjs.com/package/react-native-device-info)   |   5.5.3   |
|   [react-native-fast-image](https://www.npmjs.com/package/react-native-fast-image)   |   8.1.5   |
|   [react-native-firebase](https://www.npmjs.com/package/react-native-firebase)   |   5.6.0   |
|   [react-native-geocoder](https://www.npmjs.com/package/react-native-geocoder)   |   0.5.0   |
|   [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)   |   1.6.0   |
|   [react-native-image-picker](https://www.npmjs.com/package/react-native-image-picker)   |   2.3.1   |
|   [react-native-inappbrowser-reborn](https://www.npmjs.com/package/react-native-inappbrowser-reborn)   |  3.3.4    |
|   [react-native-localize](https://www.npmjs.com/package/react-native-localize)   |   1.3.4   |
|   [react-native-maps](https://www.npmjs.com/package/react-native-maps)    |   0.27.0   |
|   [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)   |   1.7.0   |
|   [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)   | 0.7.3     |
|   [react-native-sound](https://www.npmjs.com/package/react-native-sound)   |   0.11.0   |
|   [react-native-svg](https://www.npmjs.com/package/react-native-svg)   |   12.0.3   |
|   [react-native-tab-view](https://www.npmjs.com/package/react-native-tab-view)   |   2.13.0   |
|   [react-native-touch-id](https://www.npmjs.com/package/react-native-touch-id)   |   4.4.1   |
|   [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)   |   6.6.0   |
|   [react-native-video](https://www.npmjs.com/package/react-native-video)   |   5.0.2   |
|   [react-native-view-shot](https://www.npmjs.com/package/react-native-view-shot)   |   3.1.2   |
|   [react-native-webview](https://www.npmjs.com/package/react-native-webview)   |   8.1.2   |
|   [react-navigation](https://www.npmjs.com/package/react-navigation)    |   4.3.1   |
|   [react-navigation-drawer](https://www.npmjs.com/package/react-navigation-drawer)   |   2.4.4   |
|   [react-navigation-stack](https://www.npmjs.com/package/react-navigation-stack)   |   2.3.1   |
|   [react-navigation-tabs](https://www.npmjs.com/package/react-navigation-tabs)   |   2.8.4 |

### Big.js

Mendix 플랫폼은 숫자를 표현하고 연산하기 위해 [big.js](https://www.npmjs.com/package/big-js)를 사용합니다. Mendix 8.0은 버전 5.2를 다시 내보냅니다.

## 더 읽기

* [플러거블 위젯(Pluggable Widgets) API 문서](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [플러거블 위젯 속성 타입 문서 (Mendix 8)](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/)
* [플러거블 위젯 빌드 방법](/howto/extensibility/pluggable-widgets/)

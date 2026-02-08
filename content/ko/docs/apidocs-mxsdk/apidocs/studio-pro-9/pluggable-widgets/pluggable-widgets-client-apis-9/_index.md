---
title: "Client API"
linktitle: "플러거블 위젯용 Client API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-9/
description: A guide for understanding the client APIs available to pluggable widgets in Mendix 9.
weight: 20
---

## 소개

Mendix 플랫폼이 플러거블 위젯(Pluggable Widget) 클라이언트 컴포넌트에 제공하는 주요 API는 컴포넌트가 수신하는 props입니다. 이러한 props는 위젯 정의 XML 파일에 지정된 속성의 구조와 유사합니다([플러거블 위젯 API](/apidocs-mxsdk/apidocs/pluggable-parent-9/)에 설명된 구조). 속성의 어트리뷰트 타입은 클라이언트 컴포넌트에 속성이 어떻게 표현되는지에 영향을 줍니다. 간단히 말해, 어트리뷰트의 타입이 무엇이 될지를 정의합니다. 속성 타입 및 속성 값이 준수할 수 있는 인터페이스에 대한 자세한 내용은 [플러거블 위젯 속성 타입](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/)에서 확인할 수 있습니다. 플러거블 위젯의 동작 예제를 보려면 [플러거블 위젯 빌드 방법](/howto9/extensibility/pluggable-widgets/)을 참조하세요

Mendix 플랫폼은 또한 몇 가지 JavaScript 모듈을 노출합니다. 구체적으로 추가 Mendix API와 React와 같은 기존 라이브러리가 있으며, 클라이언트 컴포넌트가 플랫폼과 올바르게 기능하려면 이를 공유해야 합니다. 노출된 라이브러리에 대한 자세한 내용은 아래의 [노출된 라이브러리](#exposed-libraries) 섹션을 참조하세요.

## 번들링

Mendix는 JavaScript 라이브러리에서 일반적으로 사용되는 접근 방식인 *npm 패키지*로 코드를 제공하지 않습니다. 대신, Mendix는 실행 중에 사용 가능한 모듈을 제공합니다. 따라서 [webpack](https://webpack.js.org/)과 같은 모듈 번들러를 사용하는 경우, 이러한 모듈을 [externals](https://webpack.js.org/configuration/externals/)로 표시하도록 구성해야 합니다.

이 과정은 번거로울 수 있으므로, 플러거블 위젯과 함께 작동하도록 올바르게 구성된 번들러가 포함된 이 [도구 패키지](https://www.npmjs.com/package/@mendix/pluggable-widgets-tools)를 사용하는 것을 권장합니다. 모범 사례를 따르고 [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget)를 사용하여 위젯을 스캐폴딩하면, 이 패키지가 자동으로 추가됩니다.

## 표준 속성 {#standard-properties}

위젯 정의 XML 파일에 지정된 속성에 해당하는 props와 함께, 아래에 나열된 props는 항상 클라이언트 컴포넌트에 전달됩니다.

### Name 

In Mendix Studio Pro, every widget must have a name configured. The primary usage of a widget name is to make its component identifiable in the client so that it can be targeted using [Selenium](/howto/integration/selenium-support/) or Appium test automation. In web apps, the Mendix Platform automatically adds the class `mx-name-{widgetName}` to a widget so that no extra action from a component developer is required. Unfortunately, this solution is not possible for [native mobile apps](/refguide/mobile/). For native mobile apps a component developer must manually pass a given `string` `name` prop to an underlying React Native [testID](https://facebook.github.io/react-native/docs/view#testid).

### Class

A user can specify multiple classes for every widget. They can do this either directly by configuring a [class](/refguide9/common-widget-properties/#class) property in Studio Pro, or by using design properties. In web apps, the Mendix Platform creates a CSS class string from the configuration and passes it as a `string` `class` prop to every client component. Unfortunately, React Native does not have similar support for classes. Therefore in native mobile apps a component will not receive `class` prop, but a `style` prop instead.

### Style

A user can specify a custom CSS for every widget on a web page by using the [style](/refguide9/common-widget-properties/#style) property. This styling is passed to a client component through an optional `style` prop of the type `CSSProperties`.

On native pages, the meaning of a `style` prop is very different. First of all, a user cannot specify the aforementioned inline styles for widgets on a native page. So a `style` prop is used to pass styles computed based on configured classes. A client component will receive an array with a single [style object](/refguide9/mobile/designing-mobile-user-interfaces/widget-styling-guide/#style-objects) with all applicable styles combined.

### TabIndex

If a widget uses a TabIndex prop [system property](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#tabindex), then it will receive a configured `Tab index` through a `number` `tabIndex` property, except in the case when a configured tab index is on its default value of 0. Currently, `tabIndex` is not passed to widgets used on native pages. 

## 속성 값

### ActionValue {#actionvalue}

`ActionValue` is used to represent actions, like the [On click](/refguide9/on-click-event/#on-click) property of an action button. For any action except **Do nothing**, your component will receive a value adhering to the following interface. For **Do nothing** it will receive `undefined`. The `ActionValue` prop appears like this:

```ts
export interface ActionValue {
    readonly canExecute: boolean;
    readonly isExecuting: boolean;
    execute(): void;
}
```

The flag `canExecute` indicates if an action can be run under the current conditions. This helps you prevent executing actions that are not allowed by the app's security settings. User roles can be set in the microflows and nanoflows, allowing users to call them. For more information on user roles and security, see the [Module Security Reference Guide](/refguide9/module-security/). You can also employ this flag when using a **Call microflow** action triggering a microflow with a parameter. Such an action cannot be run until a parameter object is available, for example when a parent Data view has finished loading. An attempt to `execute` an action that cannot be run will have no effect except generating a debug-level warning message. 

The flag `isExecuting` indicates whether an action is currently running. A long-running action can take seconds to complete. Your component might use this information to render an inline loading indicator which lets users track loading progress. Often it is not desirable to allow a user to trigger multiple actions in parallel. Therefore, a component (maybe based on a configuration) can decide to skip triggering an action while a previous execution is still in progress.

Note that `isExecuting` indicates only whether the current action is running. It does not indicate whether a target nanoflow, microflow, or object operation is running due to another action.

The method `execute` triggers the action. It returns nothing and does not guarantee that the action will be started synchronously. But when the action does start, the component will receive a new prop with the `isExecuting` flag set.

### DynamicValue {#dynamic-value}

`DynamicValue` is used to represent values that can change over time and is used by many property types. It is defined as follows:

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

A component will receive a `DynamicValue<X>`  where type `X` depends on a property configuration. For example, for the [TextTemplate property](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#texttemplate) it will be `DynamicValue<string>`, but for the [expression property](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#expression) `X` will depend on a configured `returnType`.

Though the type definition above looks complex, it is fairly simply to use because a component can always read `DynamicValue.value`. This field either contains an actual value, such as an interpolated `string` in the case of a Text template, or the last known correct value if the value is being recomputed, such as when a parent Data view reloads its Data source. In other cases the value is set as `undefined`.

`DynamicValue.status` provides a component with additional information about the state of a dynamic value, as well as if the component should handle them differently. This is done using a [discriminated union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) that covers the following situations:

* When `status` is `ValueStatus.Available`, then the dynamic value has sufficient information to be computed, and the result is exposed in `value`.
* When `status` is `ValueStatus.Unavailable`, then the dynamic value does not have such information such as when a parent Data view’s Data source has returned nothing. The `value` is then always `undefined`.
* When `status` is `ValueStatus.Loading`, then the dynamic value is awaiting for the required information to arrive. This happens when a parent Data view is either waiting for its object to load or is reloading it due to a [refresh in client](/refguide9/change-object/#refresh-in-client).
    * In case a dynamic value was previously in a `ValueStatus.Available` state, then the previous `value` is still returned. This is done so that a component can keep showing the previous value if it doesn’t need to handle `Loading` explicitly. This prevents flickering: a state when a displayed value rapidly changes between loading and not loading several times.
    * In other cases, the `value` is `undefined`. This is a common situation while a page is still being loaded.

### EditableValue {#editable-value}

`EditableValue` is used to represent values that can be changed by a pluggable widget client component and is passed only to [attribute properties](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#attribute). It is defined as follows:

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

A component will receive `EditableValue<X>` where `X` depends on the configured `attributeType`.

`status` is similar to one exposed for `DynamicValue`. It indicates if the value's loading has finished and if loading was successful. Similarly to `DynamicValue`, `EditableValue` keeps returning the previous `value` when `status` changes from `Available` to `Loading` to help a widget avoid flickering.

The flag `readOnly` indicates whether a value can actually be edited. It will be true, for example, when a widget is placed inside a Data view that is not [editable](/refguide9/data-view/#editable), or when a selected attribute is not editable due to [access rules](/refguide9/access-rules/). The `readOnly` flag is always true when a `status` is not `ValueStatus.Available`. Any attempt to edit a value set to read-only will have no affect and incur a debug-level warning message.

The value can be read from the `value` field and modified using `setValue` function. Note that `setValue` returns nothing and does not guarantee that the value is changed synchronously. But when a change is propagated, a component receives a new prop reflecting the change.

When setting a value, a new value might not satisfy certain validation rules — for example a value might be bigger that the underlying attribute allows. In this case, your change will affect only `value` and `displayValue` received through a prop. Your change will not be propagated to an object’s attribute and will not be visible outside of your component. The component will also receive a validation error text through the `validation` field of `EditableValue`.

It is possible for a component to extend the defined set of validation rules. A new validator — a function that checks a passed value and returns a validation message string if any — can be provided through the `setValidator` function. A component can have only a single custom validator. The Mendix Platform ensures that custom validators are run whenever necessary, for example when a page is being saved by an end-user. It is best practice to call `setValidator` early in a component's lifecycle — specifically in the [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) function.

In practice, many client components present values as nicely formatted strings which take locale-specific settings into account. To facilitate such cases `EditableValue` exposes a field `displayValue` formatted version of `value`, and a method `setTextValue` — a version of `setValue` that takes care of parsing. `setTextValue` also validates that a passed value can be parsed and assigns the target attribute’s type. Similarly to `setValue`, a change to an invalid value will not be propagated further that the prop itself, but a `validation` is reported. Note that if a value cannot be parsed, the prop will contain only a `displayValue` string and `value` will become undefined.

There is a way to use more the convenient `displayValue`  and `setTextValue` while retaining control over the format. A component can use a `setFormatter` method passing a formatter object: an object with `format` and `parse` methods. The Mendix Platform provides a convenient way of creating such objects for simple cases. An existing formatter exposed using a `EditableValue.formatter` field can be modified using its `withConfig` method. For complex cases formatters still can be created manually. A formatter can be reset back to default settings by calling `setFormatter(undefined)`.

The optional field `universe` is used to indicate the set of all possible values that can be passed to a `setValue` if a set is limited. Currently, `universe` is provided only when the edited attribute is of the Boolean or enumeration [types](/refguide9/attributes/#type).

### ModifiableValue {#modifiable-value}

`ModifiableValue` is used to represent values that can be changed by a pluggable widget client component. It is passed only to [association properties](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#association), and is defined as follows:

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

The type received by the component for the association property depends on the allowed association types:

* If only references are allowed, the component receives a `ReferenceValue` defined as `ModifiableValue<ObjectItem> & { type: "Reference" };`
* If only reference sets are allowed, the client gets a `ReferenceSetValue` defined as `ModifiableValue<ObjectItem[]> & { type: "ReferenceSet" };`

Finally, when both association types are allowed the type is a union of `ReferenceValue` and `ReferenceSetValue` and the widget should check the `type` to determine if a reference or reference set is configured and act accordingly in the code. Checking the type will also [narrow](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content) to the correct type in TypeScript.

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

`status` is similar to the one exposed for `DynamicValue`. It indicates if the value's loading has finished and if loading was successful. Similarly to `DynamicValue`, `ModifiableValue` keeps returning the previous `value` when `status` changes from `Available` to `Loading` to help a widget avoid flickering.

The flag `readOnly` indicates whether a value can actually be edited. It will be true, for example, when a widget is placed inside a data view that is not [editable](/refguide9/data-view/#editable), or when a selected attribute is not editable due to [access rules](/refguide9/access-rules/). The `readOnly` flag is always true when a `status` is not `ValueStatus.Available`. Any attempt to edit a value set to read-only will have no affect and incur a debug-level warning message.

The value can be read from the `value` field and modified using the `setValue` function.  The `value` contains an `ObjectItem` or an `ObjectItem[]` based on the configured association. The `ObjectItem` can be passed to the `get` function of any [linked property value](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-9/#linked-values) which is linked to the selectable object's datasource. 

When setting a value, the `ObjectItem` must be items from the selectable object's data source. Note that `setValue` returns nothing and does not guarantee that the value is changed synchronously. But when a change is propagated, a component receives a new prop reflecting the change.

It is possible for a component to extend the defined set of validation rules. A new validator — a function that checks a passed value and returns a validation message string if any — can be provided through the `setValidator` function. A component can have only a single custom validator. The Mendix Platform ensures that custom validators are run whenever necessary, for example when a page is being saved by an end-user. It is best practice to call `setValidator` early in a component's lifecycle — specifically in the [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) function.

### IconValue {#icon-value}

`DynamicValue<IconValue>` is used to represent icons: small pictograms in the Mendix Platform. Those can be static or dynamic file- or font-based images. An icon can only be configured through an [icon](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#attribute) property. `IconValue` is defined as follows:

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

In practice, `WebIcon` and `NativeIcon` are usually passed to a `Icon` component provided by Mendix, since this provides a convenient way of handling all types of icons at once. For more information on `Icon`, see the [Icon](#icon) section below.

### ImageValue{#imagevalue}

`DynamicValue<ImageValue>` is used to represent static or dynamic images. An image can be configured only through an [image](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#image) property. `ImageValue` is defined as follows:

```ts
export interface WebImage {
    readonly uri: string;
    readonly name: string;
    readonly altText?: string;
}
export type NativeImage = Readonly<ImageURISource & { name?: string; } | string | number>;
export type ImageValue = WebImage | NativeImage;
```

`NativeImage` can be passed to a `mendix/components/native/Image` component provided by Mendix for native widgets. `WebImage` can be passed to react-dom’s `img` component.

### FileValue {#filevalue}

`DynamicValue<FileValue>` is used to represent files. A file can be configured only through a [file](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#file) property. `FileValue` is defined as follows:

```ts
export interface FileValue {
    readonly uri: string;
    readonly name: string;
}
```

### 리스트 값{#list-values}

`ListValue`는 [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-9/#datasource) 속성에 대한 객체 목록을 표현하는 데 사용됩니다. `ListValue` 및 관련 속성 값의 사용에 대한 자세한 내용은 [리스트 값](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values-9/)을 참조하세요.

## 노출된 모듈

### Icon {#icon}

Mendix Platform exposes two versions of an `Icon` react component: `mendix/components/web/Icon` and `mendix/components/native/Icon`. Both components are useful helpers to render `WebIcon` and `NativeIcon` values respectively. They should be passed through an `icon` prop. The native `Icon` component additionally accepts `color` (`string`) and `size` (`number`) props.

## 노출된 라이브러리 {#exposed-libraries}

### React 및 React Native {#exposed-react}

Mendix 플랫폼은 [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom), [react-native](https://www.npmjs.com/package/react-native) 패키지를 플러거블 위젯에 다시 내보냅니다. `react`는 모든 컴포넌트에서 사용할 수 있습니다. `react-dom`은 웹 또는 하이브리드 모바일 앱에서 실행되는 컴포넌트에만 사용할 수 있습니다. `react-native`는 네이티브 모바일 앱에서 실행되는 컴포넌트에만 사용할 수 있습니다.

Mendix는 `react` 버전 `17.*.*` (npm 용어로 `^17.0.1`)와 일치하는 `react-dom` 버전을 제공합니다. `react-native`의 경우 Mendix는 버전 `0.63.*` (npm 용어로 `~0.63.3`)를 노출합니다.

패치 버전은 Mendix의 마이너 릴리스마다 변경될 수 있습니다. 

### Big.js

Mendix 플랫폼은 숫자를 표현하고 연산하기 위해 [big.js](https://www.npmjs.com/package/big-js)를 사용합니다. Mendix 9.0은 버전 6.0을 다시 내보냅니다.

## 네이티브 종속성

위젯에서 `react`와 `react-native`의 기존 커뮤니티 라이브러리에 의존해야 하는 경우가 있습니다. 웹 플랫폼을 대상으로 하는 위젯의 경우 이러한 라이브러리를 위젯의 패키지에 번들링하여 위젯과 함께 제공할 수 있으므로 포함하기 쉽습니다. 네이티브 플랫폼을 대상으로 하는 라이브러리의 경우, 일부는 Mendix 네이티브 앱 또는 [Make It Native](/refguide9/getting-the-make-it-native-app/) 앱에 Android 및 iOS 관련 코드를 설정해야 하므로 종종 그렇지 않습니다. 자세한 내용은 [네이티브 종속성 선언](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies-9/)을 참조하세요.

## 더 읽기

* [Mendix 9](/apidocs-mxsdk/apidocs/pluggable-parent-9/) 플러거블 위젯 API 문서

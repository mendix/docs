---
title: "Client APIs – Mx8"
linktitle: "Client APIs for Pluggable Widgets"
url: /apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets-8/
weight: 20
description: A guide for understanding the client APIs available to pluggable widgets.
---

## Introduction

The main API the Mendix Platform provides to a pluggable widget client component is the props the component receives. These props resemble the structure of properties specified in the widget definition XML file (a structure described in [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)). A property's attribute type affects how the property will be represented to the client component. Simply, an attribute's type defines what will it be. You can find the more details on property types and the interfaces that property value can adhere to in [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/). To see examples of pluggable widgets in action, see [How To Build Pluggable Widgets](/howto/extensibility/pluggable-widgets/)

The Mendix Platform also exposes a few JavaScript modules, specifically extra Mendix APIs as well as existing libraries, like React, that client components must share with the platform to function properly. For more information on exposed libraries, see the [Exposed Libraries](#exposed-libraries) section below.

## Bundling

Mendix does not provide you code as an *npm package*, which is the approach commonly used by JavaScript libraries. Instead, Mendix provides you modules available during execution. Hence, if you are using a module bundler like [webpack](https://webpack.js.org/), you should configure it to mark these modules as [externals](https://webpack.js.org/configuration/externals/).

This process can be cumbersome, so it is recommended you use this [tools package](https://www.npmjs.com/package/@mendix/pluggable-widgets-tools) which contains the correctly-configured bundlers to work with pluggable widgets. If you follow best practices and use the [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget) to scaffold your widget, then this package is added automatically.

## Standard Properties {#standard-properties}

Alongside the props that correspond to the properties specified in widget definition XML file, the props listed below are always passed to a client component.

### Name 

In Mendix Studio Pro, every widget must have a name configured. The primary usage of a widget name is to make its component identifiable in the client so that it can be targeted using [Selenium](/howto/integration/selenium-support/) or Appium test automation. In web apps, the Mendix Platform automatically adds the class `mx-name-{widgetName}` to a widget so that no extra action from a component developer is required. Unfortunately, this solution is not possible for [native mobile apps](/refguide/mobile/). For native mobile apps a component developer must manually pass a given `string` `name` prop to an underlying React Native [testID](https://facebook.github.io/react-native/docs/view#testid).

### Class

A user can specify multiple classes for every widget. They can do this either directly by configuring a [class](/refguide/common-widget-properties/#class) property in Studio Pro, or by using design properties. In web apps, the Mendix Platform creates a CSS class string from the configuration and passes it as a `string` `class` prop to every client component. Unfortunately, React Native does not have similar support for classes. Therefore in native mobile apps a component will not receive `class` prop, but a `style` prop instead.

### Style

A user can specify a custom CSS for every widget on a web page by using the [style](/refguide/common-widget-properties/#style) property. This styling is passed to a client component through an optional `style` prop of the type `CSSProperties`.

On native pages, the meaning of a `style` prop is very different. First of all, a user cannot specify the aforementioned inline styles for widgets on a native page. So a `style` prop is used to pass styles computed based on configured classes. A client component will receive an array with a single [style object](/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/#style-objects) with all applicable styles combined.

{{% alert color="info" %}}
This property was introduced in Mendix 8.0 with an array of style objects. This array was changed to contain a single style object in Mendix 8.6.
{{% /alert %}}

### TabIndex

If a widget uses a TabIndex prop [system property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#tabindex), then it will receive a configured `Tab index` through a `number` `tabIndex` property, except in the case when a configured tab index is on its default value of 0. Currently, `tabIndex` is not passed to widgets used on native pages. 

## Property Values

### ActionValue {#actionvalue}

ActionValue is used to represent actions, like the [On click](/refguide/on-click-event/#on-click) property of an action button. For any action except **Do nothing**, your component will receive a value adhering to the following interface. For **Do nothing** it will receive `undefined`. The `ActionValue` prop appears like this:

```ts
export interface ActionValue {
    readonly canExecute: boolean;
    readonly isExecuting: boolean;
    execute(): void;
}
```

The flag `canExecute` indicates if an action can be run under the current conditions. This helps you prevent executing actions that are not allowed by the app's security settings. User roles can be set in the microflows and nanoflows, allowing users to call them. For more information on user roles and security, see the [Module Security Reference Guide](/refguide/module-security/). You can also employ this flag when using a **Call microflow** action triggering a microflow with a parameter. Such an action cannot be run until a parameter object is available, for example when a parent Data view has finished loading. An attempt to `execute` an action that cannot be run will have no effect except generating a debug-level warning message. 

The flag `isExecuting` indicates whether an action is currently running. A long-running action can take seconds to complete. Your component might use this information to render an inline loading indicator which lets users track loading progress. Often it is not desirable to allow a user to trigger multiple actions in parallel. Therefore, a component (maybe based on a configuration) can decide to skip triggering an action while a previous execution is still in progress.

Note that `isExecuting` indicates only whether the current action is running. It does not indicate whether a target nanoflow, microflow, or object operation is running due to another action.

The method `execute` triggers the action. It returns nothing and does not guarantee that the action will be started synchronously. But when the action does start, the component will receive a new prop with the `isExecuting` flag set.

### DynamicValue {#dynamic-value}

DynamicValue is used to represent values that can change over time and is used by many property types. It is defined as follows:

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

A component will receive a `DynamicValue<X>`  where type `X` depends on a property configuration. For example, for the [TextTemplate property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#texttemplate) it will be `DynamicValue<string>`, but for the [expression property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#expression) `X` will depend on a configured `returnType`.

Though the type definition above looks complex, it is fairly simply to use because a component can always read `DynamicValue.value`. This field either contains an actual value, such as an interpolated `string` in the case of a Text template, or the last known correct value if the value is being recomputed, such as when a parent Data view reloads its Data source. In other cases the value is set as `undefined`.

`DynamicValue.status` provides a component with additional information about the state of a dynamic value, as well as if the component should handle them differently. This is done using a [discriminated union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) that covers the following situations:

* When `status` is `ValueStatus.Available`, then the dynamic value has sufficient information to be computed, and the result is exposed in `value`.
* When `status` is `ValueStatus.Unavailable`, then the dynamic value does not have such information such as when a parent Data view’s Data source has returned nothing. The `value` is then always `undefined`.
* When `status` is `ValueStatus.Loading`, then the dynamic value is awaiting for the required information to arrive. This happens when a parent Data view is either waiting for its object to load or is reloading it due to a [refresh in client](/refguide/change-object/#refresh-in-client).
    * In case a dynamic value was previously in a `ValueStatus.Available` state, then the previous `value` is still returned. This is done so that a component can keep showing the previous value if it doesn’t need to handle `Loading` explicitly. This prevents flickering: a state when a displayed value rapidly changes between loading and not loading several times.
    * In other cases, the `value` is `undefined`. This is a common situation while a page is still being loaded.

### EditableValue {#editable-value}

EditableValue is used to represent values that can be changed by a pluggable widget client component and is passed only to [attribute properties](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute). It is defined as follows:

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

The flag `readOnly` indicates whether a value can actually be edited. It will be false, for example, when a widget is placed inside a Data view that is not [editable](/refguide/data-view/#editable), or when a selected attribute is not editable due to [access rules](/refguide/access-rules/). The `readOnly` flag is always false when a `status` is not `ValueStatus.Available`. Any attempt to edit a value set to read-only will have no affect and incur a debug-level warning message.

The value can be read from the `value` field and modified using `setValue` function. Note that `setValue` returns nothing and does not guarantee that the value is changed synchronously. But when a change is propagated, a component receives a new prop reflecting the change.

When setting a value, a new value might not satisfy certain validation rules — for example a value might be bigger that the underlying attribute allows. In this case, your change will affect only `value` and `displayValue` received through a prop. Your change will not be propagated to an object’s attribute and will not be visible outside of your component. The component will also receive a validation error text through the `validation` field of `EditableValue`.

It is possible for a component to extend the defined set of validation rules. A new validator — a function that checks a passed value and returns a validation message string if any — can be provided through the `setValidator` function. A component can have only a single custom validator. The Mendix Platform ensures that custom validators are run whenever necessary, for example when a page is being saved by an end-user. It is best practice to call `setValidator` early in a component's lifecycle — specifically in the [componentDidMount](https://en.reactjs.org/docs/react-component.html#componentdidmount) function.

In practice, many client components present values as nicely formatted strings which take locale-specific settings into account. To facilitate such cases `EditableValue` exposes a field `displayValue` formatted version of `value`, and a method `setTextValue` — a version of `setValue` that takes care of parsing. `setTextValue` also validates that a passed value can be parsed and assigns the target attribute’s type. Similarly to `setValue`, a change to an invalid value will not be propagated further that the prop itself, but a `validation` is reported. Note that if a value cannot be parsed, the prop will contain only a `displayValue` string and `value` will become undefined.

There is a way to use more the convenient `displayValue`  and `setTextValue` while retaining control over the format. A component can use a `setFormatter` method passing a formatter object: an object with `format` and `parse` methods. The Mendix Platform provides a convenient way of creating such objects for simple cases. An existing formatter exposed using a `EditableValue.formatter` field can be modified using its `withConfig` method. For complex cases formatters still can be created manually. A formatter can be reset back to default settings by calling `setFormatter(undefined)`.

The optional field `universe` is used to indicate the set of all possible values that can be passed to a `setValue` if a set is limited. Currently, `universe` is provided only when the edited attribute is of the Boolean or enumeration [types](/refguide/attributes/#type).

### IconValue {#icon-value}

`DynamicValue<IconValue>` is used to represent icons: small pictograms in the Mendix Platform. Those can be static or dynamic file- or font-based images. An icon can only be configured through an [icon](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute) property. `IconValue` is defined as follows:

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

In practice, `WebIcon` and `NativeIcon` are usually passed to a `Icon` component provided by Mendix, since this provides a convenient way of handling all types of icons at once. For more information on `Icon`, see the [Icon](#icon) section below.

### ImageValue{#imagevalue}

`DynamicValue<ImageValue>` is used to represent static or dynamic images. An image can be configured only through an [image](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#image) property. `ImageValue` is defined as follows:

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

`DynamicValue<FileValue>` is used to represent files. A file can be configured only through a [file](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#file) property. `FileValue` is defined as follows:

```ts
export interface FileValue {
    readonly uri: string;
    readonly name: string;
}
```

### ListValue{#listvalue}

`ListValue` is used to represent a list of objects for the [datasource](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#datasource) property.

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

When a `datasource` property with `isList="true"` is configured for a widget, the client component gets a list of objects represented as a `ListValue`. This type allows detailed access to a data source, and enables control over the limit and offset of items represented in the list.

However it is not possible to access domain data directly from `ListValue`, as every object is represented only by GUID in the `items` array. Instead, a list of items may be used in combination with other properties, for example with a property of type [`attribute`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute), [`action`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#action) or [`widgets`](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets).

### ListActionValue {#listactionvalue}

`ListActionValue` represents actions that may be applied to items from `ListValue`. The `ListActionValue` is a function and its definition is as follows:

```ts
export type ListActionValue = (item: ObjectItem) => ActionValue;
```

In order to call an action on a particular item of a `ListValue` first an instance of `ActionValue` should be obtained by calling `ListActionValue` with the item. See an example below.

Assuming widget properties are confgured as follows:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myListAction: ListActionValue;
}
```

The following code sample shows how to call `myListAction` on the first element from the `myDataSource`.

```ts
const actionOnFirstItem = this.props.myListAction(this.props.myDataSource.item[0]);

actionOnFirstItem.execute();
```

In this code sample, checks of status `myDataSource` and availability of items are omitted for simplicity. See [ActionValue section](#actionvalue) for more information about usage of `ActionValue`.

### ListAttributeValue {#listattributevalue}

`ListAttributeValue` represents an [attribute property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#attribute) that is linked to a data source.
This allows the client component to access attribute values on individual items from a `ListValue`. `ListAttributeValue` is a function and its definition is as follows:

```ts
export type ListAttributeValue<T extends AttributeValue> = (item: ObjectItem) => EditableValue<T>;
```

The type `<T>` depends on the allowed value types as configured for the attribute property.

{{% alert color="warning" %}}
Due to a technical limitation it is not yet possible to edit attributes obtained via `ListAttributeValue`. `EditableValue`s returned by `ListAttributeValue` are always **readonly**.
{{% /alert %}}

In order to work with the attribute value of a particular item of a `ListValue` first an instance of `EditableValue` should be obtained by calling `ListAttributeValue` with the item. See an example below.

Assuming widget properties are configured as follows (with an attribute of type `string`):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myAttributeOnDatasource: ListAttributeValue<string>;
}
```

The following code sample shows how to get an `EditableValue` that represents a read-only value of an attribute of the first element from the `myDataSource`.

```ts
const attributeValue = this.props.myAttributeOnDatasource(this.props.myDataSource.items[0]);
```

Note: in this code sample checks of status of `myDataSource` and availability of items are omitted for simplicity. See [EditableValue section](#editable-value) for more information about usage of `EditableValue`.

### ListWidgetValue {#listwidgetvalue}

`ListWidgetValue` represents a [widget property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#widgets) that is linked to a data source. 
This allows the client component to render child widgets with items from a `ListValue`.
`ListWidgetValue` is a function and its definition is as follows:

```ts
export type ListWidgetValue = (item: ObjectItem) => ReactNode;
```

For clarity, consider the following example using `ListValue` together with the `widgets` property type. When the `widgets` property named `myWidgets` is configured to be tied to a `datasource` named `myDataSource`, the client component props appear as follows:

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myWidgets: (i: ObjectItem) => ReactNode;
}
```

Because of the above configurations, the client component may render every instance of widgets with a specific item from the list like this:

```ts
this.props.myDataSource.items.map(i => this.props.myWidgets(i));
```

### ListExpressionValue {#listexpressionvalue}

`ListExpressionValue` represents an [expression property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#expression) or [text template property](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/#texttemplate) that is linked to a data source. This allows the client component to access expression or text template values for individual items from a `ListValue`. `ListExpressionValue` is a function and its definition is as follows:

```ts
export type ListExpressionValue<T extends AttributeValue> = (item: ObjectItem) => DynamicValue<T>;
```

The type `<T>` depends on the return type as configured for the expression property. For a text template property, this type is always `string`.

In order to work with the expression or text template value of a particular item of a `ListValue`, first an instance of `DynamicValue` should be obtained by calling `ListExpressionValue` with the item. See an example below.

Assuming widget properties are configured as follows (with an expression of type `boolean`):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myExpressionOnDatasource: ListExpressionValue<boolean>;
    myTextTemplateOnDatasource: ListExpressionValue<string>;
}
```

The following code sample shows how to get a `DynamicValue` that represents the value of an expression for the first element from the `myDataSource`.

```ts
const expressionValue = this.props.myDataSource.myExpressionOnDatasource(this.props.myDataSource.item[0]);
```

## Exposed Modules

### Icon {#icon}

Mendix Platform exposes two versions of an `Icon` react component: `mendix/components/web/Icon` and `mendix/components/native/Icon`. Both components are useful helpers to render `WebIcon` and `NativeIcon` values respectively. They should be passed through an `icon` prop. The native `Icon` component additionally accepts `color` (`string`) and `size` (`number`) props.

## Exposed Libraries {#exposed-libraries}

### React and React Native {#exposed-react}

Mendix Platform re-export [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom), and [react-native](https://www.npmjs.com/package/react-native) packages to pluggable widgets. React is available to all components. React-dom is available only to components running in web or hybrid mobile apps. React-native is available only to components running in native mobile apps.

Mendix provides you with React version 16.9.x (in npm terms `~16.9.0`). Patch versions might change from one minor release of Mendix to another. Mendix will always provide a matching version of react-dom.

For react-native Mendix exposes a single version: 0.61.5. Mendix also includes the following libraries:

|   Library   |   Version   |
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

The Mendix Platform uses [big.js](https://www.npmjs.com/package/big-js) to represent and operate on numbers. Mendix 8.0 re-exports version 5.2.

## Read More

* [Pluggable Widgets API Documentation](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Pluggable Widget Property Types Documentation (Mendix 8)](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets-8/)
* [How to Build Pluggable Widgets](/howto/extensibility/pluggable-widgets/)

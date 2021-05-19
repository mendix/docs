---
title: "List Values"
tags: ["Pluggable", "Widget", "ListValue", "ListActionValue", "ListAttributeValue", "ListWidgetValue", "ListExpressionValue"]

id: "pluggable-widgets/client-apis/list-values"
parent: "pluggable-widgets/client-apis"
dir: "/apidocs-mxsdk/apidocs/"
---

## 1 Introduction

`ListValue` is used to represent a list of objects for the [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#datasource) property. Corresponding list item values represent properties of different types linked to a [datasource](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#datasource) propery.


## 2 ListValue {#listvalue}

When a [`datasource`](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#datasource) property with `isList="true"` is configured for a widget, the client component gets a list of objects represented as a `ListValue`. This type allows detailed access and control over the data source.

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
    requestTotalCount(needTotalCount: boolean): void;
    items?: ObjectItem[];
    hasMoreItems?: boolean;
    totalCount?: number;
}
```

The `offset` and `limit` properties specify the range of objects retrieved from the datasource. The `offset` is the starting index and the `limit` is the number of requested items. By default, the `offset` is *0* and the `limit` is `undefined` which means all the datasource's items are requested. You can control these properties with the `setOffset` and `setLimit` methods. This allows a widget to not show all data at once. Instead it can show only a single page when you set the proper offset and limit, or the widget will load additional data whenever it is needed if you increase the limit.

The following code sample sets the offset and limit to load datasource items for a specific range:

```ts
this.props.myDataSource.setOffset(20);
this.props.myDataSource.setLimit(10);
```

You can use the `setOffset` and `setLimit` methods to create a widget with pagination support (assuming widget properties are configured as follows):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    pageSize: number;
}
```

To set the number of items requested by the datasource you can use the `setLimit` in the constructor of the widget:

```ts
export default class PagedWidget extends Component<PagedWidgetProps> {
    constructor(props: PagedWidgetProps) {
        super(props);

        props.myDataSource.setLimit(props.pageSize);
    }
}
```

To switch to a different page you can change the offset with the `setOffset` method:

```tsx
const ds = this.props.myDataSource;
const current = this.props.myDataSource.offset;
<button onClick={() => ds.setOffset(current - this.props.pageSize)}>
    Previous
</button>
<button onClick={() => ds.setOffset(current + this.props.pageSize)}>
    Next
</button>
```

The `hasMoreItems` property indicates whether there are more objects beyond the limit of the most recent list. When a widget does not show all the records immediately by setting a limit with `setLimit` and allows the user to load additional data, you can use this property to make it clear in the user interface that the user has reached the end of the list.

The following code sample shows a 'load more' button only when there is more data available, and loads additional data when the user clicks the button:

```tsx
const currentLimit = this.props.myDataSource.limit;
this.props.myDataSource.hasMoreItems &&
<button 
    onClick={() => this.props.myDataSource.setLimit(currentLimit + 10)}
>
    Load more
</button>
```

When a `limit` is set to *0*, that case is handled in a special way. In this case `ListValue` will avoid sending a request to the server to retrieve data and will immediately return an empty result. This property can be used to build widgets that load their data "lazily": only when and if a specific condition is met.

The following code sample loads the data only if a button is pressed:

```tsx
export default const LazyWidget = (props: LazyWidgetProps) => {
    useMemo(() => props.myDataSource.setLimit(0), []);
    return props.myDataSource.items?.length ? (
        props.myDataSource.items.map((i) => <div key={i.id}>Item</div>)
    ) : (
        <button onClick={() => props.myDataSource.setLimit(undefined)}>Load data</button>
    );
}
```

The `totalCount` property is the total number of objects the datasource can return. Calculating a total count might consume significant resources and is only returned when the widget indicated needs a total count by calling the `requestTotalCount(true)` method. When possible, please use the `hasMoreItems` instead of the `totalCount` property.

The following code sample shows how to request the total count to be returned:

```ts
export default class PagedWidget extends Component<PagedWidgetProps> {
    constructor(props: PagedWidgetProps) {
        super(props);
    
        props.myDataSource.requestTotalCount(true);
    }
}
```

The `items` property contains all the requested data items of the datasource. However, it is not possible to access domain data directly from `ListValue`, as every object is represented only by GUID in the `items` array. Instead, a list of items may be used in combination with other properties, for example with a property of type [`attribute`](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#attribute), [`action`](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#action), or [`widgets`](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#widgets).
 

## 3 Linked Property Values

### 3.1 ListActionValue {#listactionvalue}

`ListActionValue` represents actions that may be applied to items from `ListValue`. The `ListActionValue` is an object and its definition is as follows:

```ts
export interface ListActionValue {
    get: (item: ObjectItem) => ActionValue;
}
```

In order to call an action on a particular item of a `ListValue` first an instance of `ActionValue` should be obtained by calling `ListActionValue.get` with the item (assuming widget properties are configured as follows):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myListAction: ListActionValue;
}
```

The following code sample shows how to call `myListAction` on the first element from the `myDataSource`.

```ts
const actionOnFirstItem = this.props.myDataSource.myListAction.get(this.props.myDataSource.item[0]);

actionOnFirstItem.execute();
```

In this code sample, checks of status `myDataSource` and availability of items are omitted for simplicity. See the [ActionValue section](#actionvalue) for more information about the usage of `ActionValue`.

{{% alert type="info" %}}
The `get` method was introduced in Mendix 9.0.

You can obtain an instance of `ActionValue` by using the `ListActionValue` as a function and calling it with an item. This is deprecated, will be removed in Mendix 10, and should be replaced by a call to the `get` function.
{{% /alert %}}

### 3.2 ListAttributeValue {#listattributevalue}

`ListAttributeValue` represents an [attribute property](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#attribute) that is linked to a data source.
This allows the client component to access attribute values on individual items from a `ListValue`. `ListAttributeValue` is an object and its definition is as follows:

```ts
export interface ListAttributeValue<T extends AttributeValue> {
    get: (item: ObjectItem) => EditableValue<T>; // NOTE: EditableValue obtained from ListAttributeValue always readonly
}
```

The type `<T>` depends on the allowed value types as configured for the attribute property.

{{% alert type="warning" %}}
Due to a technical limitation it is not yet possible to edit attributes obtained via `ListAttributeValue`. `EditableValue`s returned by `ListAttributeValue` are always **readonly**.
{{% /alert %}}

In order to work with the attribute value of a particular item of a `ListValue` first an instance of `EditableValue` should be obtained by calling `ListAttributeValue.get` with the item (assuming widget properties are configured as follows with an attribute of type `string`):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myAttributeOnDatasource: ListAttributeValue<string>;
}
```

The following code sample shows how to get an `EditableValue` that represents a read-only value of an attribute of the first element from the `myDataSource`.

```ts
const attributeValue = this.props.myAttributeOnDatasource.get(this.props.myDataSource.items[0]);
```

Note: in this code sample checks of status of `myDataSource` and availability of items are omitted for simplicity. See [EditableValue section](#editable-value) for more information about usage of `EditableValue`.

{{% alert type="info" %}}
The `get` method was introduced in Mendix 9.0.

You can obtain an instance of `EditableValue` by using the `ListAttributeValue` as a function and calling it with an item. This is deprecated, will be removed in Mendix 10, and should be replaced by a call to the `get` function.
{{% /alert %}}

### 3.3 ListWidgetValue {#listwidgetvalue}

`ListWidgetValue` represents a [widget property](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#widgets) that is linked to a data source. 
This allows the client component to render child widgets with items from a `ListValue`.
`ListWidgetValue` is an object and its definition is as follows:

```ts
export interface ListWidgetValue {
    get: (item: ObjectItem) => ReactNode;
}
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
this.props.myDataSource.items.map(i => this.props.myWidgets.get(i));
```

{{% alert type="info" %}}
The `get` method was introduced in Mendix 9.0.

You can obtain an instance of `ReactNode` by using the `ListWidgetValue` as a function and calling it with an item. This is deprecated, will be removed in Mendix 10, and should be replaced by a call to the `get` function.
{{% /alert %}}


### 3.4 ListExpressionValue {#listexpressionvalue}

`ListExpressionValue` represents an [expression property](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#expression) or [text template property](/apidocs-mxsdk/apidocs/pluggable-widgets/property-types#texttemplate) that is linked to a data source. This allows the client component to access expression or text template values for individual items from a `ListValue`. `ListExpressionValue` is an object and its definition is as follows:

```ts
export interface ListExpressionValue<T extends AttributeValue> {
    get: (item: ObjectItem) => DynamicValue<T>
};
```

The type `<T>` depends on the return type as configured for the expression property. For a text template property, this type is always `string`.

In order to work with the expression or text template value of a particular item of a `ListValue`, first an instance of `DynamicValue` should be obtained by calling `ListExpressionValue.get` with the item (assuming widget properties are configured as follows with an expression of type `boolean`):

```ts
interface MyListWidgetsProps {
    myDataSource: ListValue;
    myExpressionOnDatasource: ListExpressionValue<boolean>;
    myTextTemplateOnDatasource: ListExpressionValue<string>;
}
```

The following code sample shows how to get a `DynamicValue` that represents the value of an expression for the first element from the `myDataSource`.

```ts
const expressionValue = this.props.myDataSource.myExpressionOnDatasource.get(this.props.myDataSource.item[0]);
```

{{% alert type="info" %}}
The `get` method was introduced in Mendix 9.0.

You can obtain an instance of `DynamicValue` by using the `ListExpressionValue` as a function and calling it with an item. This is deprecated, will be removed in Mendix 10, and should be replaced by a call to the `get` function.
{{% /alert %}}


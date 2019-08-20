---
# Property types available to Pluggable widgets
---

## 1 Introduction

[todo ] Make a link to this doc from https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets#7-widget-property

Common structure of property definition:

```xml
<property key="propertyKey" type="propertyType">
	<caption>My Property</caption>
	<description>This is my property</description>
</property>
```

## 2 XML attributes

### 2.1 `key` [required]

Defines the prop key in client component props to be supplied to widget client component. It must be unique for each widget and can contain letters of all cases, digits, or underscores. However, a `key` attribute cannot *start* with a digit.

### 2.2 `**type**` [required]

This defines a property's type. A `type` must be one of the following: [ todo] Make them links to section
* `action`
* `attribute`
* `boolean`
* `enumeration`
* `expression`
* `integer`
* `object`
* `string`
* `textTemplate`

## 3 XML Elements

`**<caption>**` [required] — This defines a user-friendly name of a property visible to modeling person.

`**<description>**` [required] — This is a description that shows a purpose of the property to a modeling person.

## 4 Static Properties

Those properties are made to pass values configured in Studio or Studio Pro to the widget. They don’t depend on any dynamic data and passed to the widget client component as simple primitive values.

### 4.1 String

String is represented as an simple text input in Studio Pro. It is passed as `string` prop to a client component.

### 4.2.1 XML Attributes

| Attribute      | Required | Attribute Type | Description                                                                                                                                                          |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Yes      | String         | Must be `string`                                                                                                                                                     |
| `key`          | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `defaultValue` | No       | String         | Default value for the property.                                                                                                                                      |
| `multiline`    | No       | Boolean        | `true` to enable multiline input in the Studio, `false` otherwise.                                                                                                   |
| `required`     | No       | Boolean        | Whether the proeprty must be specified by the user. `true` by default                                                                                                |


### 4.2.2 Studio Pro UI

For Single line [todo: single line what?] the Studio Pro UI XML is as follows:

```xml
<property key="myString" type="string">
	<caption>My string</caption>
	<description>My string setting</description>
</property>
```

In Studio Pro, a single line string widget appears this way:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565098954506_image.png)

For Multiline (todo: multiline what?)] the Studio Pro UI XML is as follows:

```xml
<property key="myStringMultiline" type="string" multiline="true">
	<caption>My string multiline</caption>
	<description>My string multiline setting</description>
</property>
```

In Studio Pro, a multi-line string widget appears this way:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565099729178_image.png)


## 4.2 Boolean

Boolean is represented as a Yes/No switch [todo: find this in product to find actual name] in Studio Pro. It is passed as `boolean` prop to a client component.

### 4.2.1 XML attributes

| Attribute      | Required | Attribute Type | Description                                                                                                                                                          |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Yes      | String         | Must be `boolean`                                                                                                                                                    |
| `key`          | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `defaultValue` | Yes      | Boolean        | Default value for the property. `true` or `false`                                                                                                                    |

### 4.2.2 Studio Pro UI

For Boolean widgets, the Studio Pro UI XML is as follows:

```xml
<property key="myBoolean" type="boolean" defaultValue="false">
	<caption>My boolean</caption>
	<description>My boolean setting</description>
</property>
```

Boolean widgets appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565100063589_image.png)

## 4.3 Integer

Integer is represented as a number input in Studio Pro. It is passed as `number` prop to a client component.

### 4.3.1 XML attributes

| Attribute      | Required | Attribute Type | Description                                                                                                                                                          |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Yes      | String         | Must be `integer`                                                                                                                                                    |
| `key`          | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `defaultValue` | Yes      | Integer        | Default value for the property.                                                                                                                                      |

### 4.3.2 Studio Pro UI

For integer widgets, the Studio Pro UI XML is as follows:

```xml
<property key="myInteger" type="integer" defaultValue="1000">
	<caption>My integer</caption>
	<description>My integer setting</description>
</property>
```

Integer widgets appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565100098654_image.png)

## 4.4 Enumeration

Enumeration allows user to select one out of multiple options defined in the XML. A key of a selected enum option is passed as `string` prop to a client component.

### 4.4.1 XML Attributes

| Attribute      | Required | Attribute Type | Description                                                                                                                                                          |
| -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Yes      | String         | Must be `enumeration`                                                                                                                                                |
| `key`          | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `defaultValue` | Yes      | Integer        | Default value for the property.                                                                                                                                      |

### 4.4.2 XML Elements

`<enumerationValues>` [required]

One `<enumerationValues>` element must be declared with multiple `<enumerationValue>` elements inside in order to define possible enumeration values. `key` attribute is required for every enumeration value as well as a caption. Enter enumeration values like this:

```xml
`<enumerationValue key="myEnumOption">My enum option caption</enumerationValue>`
```

The `key` of a selected element will be passed to the client component. `key` should not be changed since it is used to identify options used in a project.

### 4.4.3 Studio Pro UI

For enumeration value widgets, the Studio Pro UI XML is as follows:

```xml
	<property key="myEnumeration" type="enumeration" defaultValue="red">
	<caption>My enumeration</caption>
	<description>My enumeration setting</description>
	<enumerationValues>
		<enumerationValue key="red">Red</enumerationValue>
		<enumerationValue key="green">Green</enumerationValue>
		<enumerationValue key="blue">Blue</enumerationValue>
	</enumerationValues>
	</property>
```

Enumeration widgets appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565100380376_image.png)

## 5 Components

### 5.1 Icon

Icon allows a user to configure an icon similar to one used by [Action button](https://docs.mendix.com/refguide/action-button#icon). It is passed as `DynamicValue<IconValue>` prop to a client component.

## 5.2 XML Attributes

| Attribute  | Required | Attribute Type | Description                                                                                                                                                          |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | Yes      | String         | Must be `icon`                                                                                                                                                       |
| `key`      | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `required` | No       | Boolean        | Whether the proeprty must be specified by the user. `true` by default                                                                                                |

For icon components, the Studio Pro UI XML is as follows:

```xml
<property key="cardIcon" type="icon" required="false">
	<caption>Icon</caption>
	<description>Card icon</description>
</property>
```

An icon component will appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_81786A5931B829139B98071139DA0CB7AC3499B0317A73DEBE39335668768ACA_1565096170318_image.png)

### 5.2 Image

Image allows a user to configure a static image from an [Image collection](https://docs.mendix.com/refguide/image-collection). It is passed as `DynamicValue<ImageValue>` prop to a client component.

### 5.2.3 XML Attributes

| Attribute  | Required | Attribute Type | Description                                                                                                                                                          |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | Yes      | String         | Must be `image`                                                                                                                                                      |
| `key`      | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `required` | No       | Boolean        | Whether the proeprty must be specified by the user. `true` by default                                                                                                |

For image components, the Studio Pro UI XML is as follows:

```xml
<property key="bgImage" type="image" required="false">
	<caption>Background Image</caption>
	<description>Image shown blurred in a background</description>
</property>
```

An image component will appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_81786A5931B829139B98071139DA0CB7AC3499B0317A73DEBE39335668768ACA_1565096923473_image.png)

## 6 Dynamic Properties

### 6.1 Expression

Expression allows a user to configure an [expression](/refguide/expressions), the result of which  will be passed to the client component as a `DynamicValue<T>` where `T` depends on a return type of the expression.

#### 6.1.1 XML Attributes

| Attribute      | Required | Attribute Type      | Description                                                                                                                                                          |
| -------------- | -------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Yes      | String              | Must be `expression`                                                                                                                                                 |
| `key`          | Yes      | String              | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `defaultValue` | No       | String (Expression) | Default value for the property.                                                                                                                                      |
| `required`     | No       | Boolean             | Whether the proeprty must be specified by the user. `true` by default                                                                                                |

#### 6.1.2 XML Elements

`<returnType>` [required] — An expression property must contain a `<returnType>` element in order to define allowed return types for the expression. The Mendix platform will ensure the that configured expression is returning the correct data type.

Allowed return types with corresponding types that a client components will receive:

* `Boolean`— `DynamicValue<boolean>`
* `DateTime` — `DynamicValue<Date>`
* `Decimal` — `DynamicValue<BigJS>`
* `Integer` — `DynamicValue<BigJS>`
* `String` — `DynamicValue<string>`

For an expression property, the Studio Pro UI XML is as follows:

```xml
<property key="progressBarColor" type="expression" defaultValue="'red'">
	<caption>Color</caption>
	<description>Progress bar CSS color</description>
	<returnType type="String" />
</property>
```

An expression property could appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1564489919356_image.png)

### 6.4 TextTemplate

`TextTemplate` allows a user to configure translatable text template similar to the [text template](/refguide/text#text-template) of a text widget. The interpolated string will be passed to the client component as `DynamicValue<string>`.

#### 6.4.1 XML Attributes

| Attribute   | Required | Attribute Type | Description                                                                                                                                                          |
| ----------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | Yes      | String         | Must be `textTemplate`                                                                                                                                               |
| `key`       | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `multiline` | No       | Boolean        | `true` to enable multiline input in the Studio, `false` otherwise.                                                                                                   |
| `required`  | No       | Boolean        | Whether the property must be specified by the user. `true` by default                                                                                                |


#### 6.4.2 XML Elements

`<translations>` — Allows to set a default value for text templates for different languages using `<translation>` elements with a `lang` attribute representing [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code of the language. Available languages are listed in the [Languages Tab](/refguide/project-settings#4-languages-tab) in Studio Pro.

For `TextTemplate`, the Studio Pro UI XML is as follows:

```xml
<property key="myBlockTitle" type="textTemplate">
	<caption>Input title</caption>
	<description>Title for the color input</description>
	<translations>
		<translation lang="en_US">Color</translation>
		<translation lang="nl_NL">Kleur</translation>
		<translation lang="uk_UA">Колір</translation>
	</translations>
</property>
```

`TextTemplate` could appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565103789244_image.png)

### 6.5 Action

The action property allows a user to configure an action to do things like calling nanoflows, saving changes, and opening pages. The client component will receive `ActionValue` representing it, or `undefined` when the **Do nothing** action was selected.

#### 6.5.1 XML Attributes

| Attribute  | Required | Attribute Type | Description                                                                                                                                                          |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | Yes      | String         | Must be `action`                                                                                                                                                     |
| `key`      | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `required` | No       | Boolean        | Whether the proeprty must be specified by the user. `true` by default                                                                                                |
#### 6.5.2 Studio Pro UI

For an action property, the Studio Pro UI XML is as follows:

```xml
<property key="buttonAction" type="action">
	<caption>On click</caption>
	<description>Action to be performed when button is clicked</description>
</property>
```

An action property could appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1564500861810_image.png)

### 6.6 Attribute

The attribute property allows a widget to work directly with entities' attributes, both reading and writing attributes. Depending on the widget's purposes, a widget may restrict attribute types it supports (todo: check meaning). The client component will receive `EditableValue<T>` where `T` depends on a `<attributeType>` configured.

#### 6.6.1 XML Attributes

| Attribute  | Required | Attribute Type | Description                                                                                                                                                          |
| ---------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | Yes      | String         | Must be `attribute`                                                                                                                                                  |
| `key`      | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `onChange` | No       | Property Path  | Path to an Action property that will be executed by Mendix platform when value is changed by the widget.                                                             |
| `required` | No       | Boolean        | Whether the proeprty must be specified by the user. `true` by default                                                                                                |

#### 6.6.2 XML Elements

`<attributeTypes>` [required] — This element encapsulates `<attributeType>` elements which declare supported attribute types available while configuring the attribute property in the Studios.

`<attributeType>` [required one or more] — this element defines the allowed attribute type in the `name` attribute.

These are the supported attribute types and their corresponding types that a client components will receive:

* `AutoNumber` — `EditableValue<string>`
* `Binary` — `EditableValue<string>`
* `Boolean` — `EditableValue<boolean>`
* `DateTime` — `EditableValue<Date>`
* `Enum` — `EditableValue<string>`
* `HashString` — `EditableValue<string>`
* `Integer` — `EditableValue<BigJS>`
* `Long` — `EditableValue<BigJS>`
* `String` — `EditableValue<string>`
* `Decimal` — `EditableValue<BigJS>`

For *XML* elements, the Studio Pro UI *XML* is as follows:

```xml
<property key="percentage" type="attribute" onChange="onPercentageChange">
	<caption>Percentage</caption>
	<description>Progress percentage</description>
	<attributeTypes>
		<attributeType name="Decimal"/>
		<attributeType name="Integer"/>
	</attributeTypes>
</property>
    
<property key="onPercentageChange" type="action">
	<caption>On change</caption>
	<description/>
</property>
```

An *XML* element could appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1564567208591_image.png)

### 6.7 Object

The object property allows to create an arbitrary list of properties.

#### 6.7.1 XML Attributes

| Attribute | Required | Attribute Type | Description                                                                                                                                                          |
| --------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`    | Yes      | String         | Must be `object`                                                                                                                                                     |
| `key`     | Yes      | String         | [+Property types available to Pluggable widgets: key](https://paper.dropbox.com/doc/Property-types-available-to-Pluggable-widgets-key-khDOHBDy9pr5leYZzqQoK#:h2=key) |
| `isList`  | Yes      | Boolean        | Must be `true`                                                                                                                                                       |

#### 6.7.2 XML Elements

`<properties>` [required] — Encapsulates list or properties to be configured. Properties must be grouped by `<propertyGroup>` elements. Nested object properties are not supported.

For the object property, the Studio Pro UI *XML* is as follows:

```xml
<property key="myObject" type="object" isList="true">
	<caption>My object list</caption>
	<description/>
	<properties>
		<propertyGroup caption="Object list group">
			<property key="myObjectBool" type="boolean" defaultValue="true">
				<caption>My boolean</caption>
					<description>My boolean setting</description>
			</property>
    
			<property key="myObjectAction" type="action">
				<caption>My action</caption>
				<description>My action setting</description>
			</property>
		</propertyGroup>
	</properties>
</property>
```

An object property could appear in Studio Pro like this:

![](https://paper-attachments.dropbox.com/s_5009BD3439660B5188074DAF5510BE4D6691349683FF768E28F7376F479D54D2_1565101889323_image.png)

## 7 System Properties

System properties is a way for a pluggable widget to adopt extended widget functionality provided by Mendix platform. System properties should be defined as `<systemProperty>` elements.
(todo: figure out how to format this)**Required attributes**
`**key**`

    Defines the type of a system property. The following values are allowed:
* `Label`
* `Name`
* `TabIndex`
* `Visibility`
* `Editability`

### 7.1 Label

Label property allows a pluggable widget to have labeling functionality similar to one of [core input widgets](https://docs.mendix.com/refguide/text-box#label-properties). This allows a user to set a label, a label position, and a label width. If a widget has a label configured, its client component will automatically be wrapped into a correct markup.

```xml
<systemProperty key="Label"/>
```

### 7.2 Name

Every widget have a name by default. This property can be used to control position of the widget name input. If this property is not specified, input will be placed in **Common** tab. Widget’s name is also used for locating it during \[automated tests\](https://docs.mendix.com/howto/integration/selenium-support). For that purpose in web apps, a widget name is automatically appended to a `class` prop a component receives, and in native apps is passed as a separate `name` prop.

```xml
<systemProperty key="Name"/>
```

### 7.3 TabIndex

TabIndex property allow pluggable widgets to implement **Tab index** setting similar to one of a [core input widgets](https://docs.mendix.com/refguide/text-box#tab-index). Every selectable and/or input-like widget should oft for this to provide a consistent developing experience for a user and accessible app for an end-user. Widget’s tab index, when it is not zero, is passed to a client component in a `tabIndex` prop.

```xml
<systemProperty key="TabIndex"/>
```

### 7.4 Visibility

Every pluggable widget can be [conditionally hidden](/refguide/conditions). This property can be used to control a position of the widget visibility inputs.

```xml
<systemProperty key="Visibility"/>
```

### 7.5 Editability

Editability property allows a pluggable widget to have Editable configuration similar to one of [core input widgets](/refguide/text-box#editability-properties). When a widget is marked as read-only or conditionally editable with condition being false, then all [EditableValues](todo: figure out where this anchor link was supposed to go) its client component receives will have `readOnly` flag.

```xml
<systemProperty key="Editability"/>
```
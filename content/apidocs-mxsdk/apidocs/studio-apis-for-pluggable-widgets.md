---
title: "Preview Appearance APIs for Pluggable Widgets"
parent: "pluggable-widgets"
menu_order: 30
description: A guide for understanding the APIs which influence pluggable widget preview appearances.
tags: ["Widget", "Pluggable", "Custom", "JavaScript", "React", "Preview"]
---

## 1 Introduction

This guide explains the APIs offered by Mendix Studio and Studio Pro so you can build better pluggable widgets. Specifically, you can use these APIs and modules to alter pluggable widgets' preview appearances while working in Mendix Studio or Studio Pro's Design mode.

In contrast, [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets) is meant for pluggable widget development once your app project is running in the client. This guide's APIs are available in Mendix 8.0.0 and higher.

## 2 Values API

The values API passes the values configured for a pluggable widget's properties. These values will be passed in a JavaScript object, where the property's `key` is used as the object property.

Here is an example of such an object:

```javascript
{
    stringProp: "Some value",
    intProp: 42
}
```

### 2.1 Static Properties

Static property types are exposed with their configured value as a JavaScript value:

| Plugin Widget Type | JavaScript Type |
| ------------------ | ----------------|
| `string`           | `string`        |
| `boolean`          | `boolean`       |
| `integer`          | `number`        |
| `decimal`          | `number`        |
| `enumeration`      | `string`        |

For `enumeration` properties, the currently selected option's `key` will be used as the value.

### 2.2 Icon

This property appears as follows:

```typescript
type GlyphIcon = { type: "glyph"; iconClass: string; }
type ImageIcon = { type: "image"; imageUrl: string; }

type IconProperty = null | GlyphIcon | ImageIcon;
```

Icon properties are exposed objects containing a `type` field that is `"glyph"` if a glyphicon is selected,
 `"image"` if an image is selected, or `null` if no icon is selected at all.

For the `"glyph"` type, `iconClass` is available. It contains the class to apply on a `glyphicon` element to
display the correct icon. It will be an empty string value if no icon has been selected.

For the `"image"` type, `imageUrl` is available. It represents a URL from which your selected image can be reached
by Studio and Studio Pro's Design mode. It will be an empty string value if no image has been selected.

### 2.3 Image

This property appears as follows:

```typescript
type StaticImage = { type: "static"; imageUrl: string; };
type DynamicImage = { type: "dynamic"; entity: string; };

type ImageProperty = null | StaticImage | DynamicImage;
```

Image properties are exposed objects containing a `type` field that is `"static"` if a static image is selected,
 `"dynamic"` if an entity is selected, or `null` if no image is selected at all.

For the `"static"` type, `imageUrl`  is available. It represents a URL from which your selected image can be reached
by Studio and Studio Pro's Design mode. It will be an empty string value if no image has been selected.

For the `"dynamic"` type, `entity` is available. It represents the entity where the selected image's data is stored. It will be an empty string value if no entity has been selected.

### 2.4 Widgets

This property appears as follows:

```
type WidgetsProperty = {
    widgetCount: number;
    renderer: React.Component
}
```

This property is exposed as an object containing the following properties:

* `widgetCount`: The number of immediate child widgets configured
* `renderer`: A React component allowing rendering of the child widgets in the preview

### 2.5 Expression

This property will be passed as a string value containing the expression as typed by the user.

### 2.6 Text Template

A preview string will be passed. This preview is built using the currently active language, and by
replacing the placeholders with the names of the attributes.

For example, you could see these placeholders:

```
Name: {1}
Description: {2}
```

Using parameters `EventName` and `EventDescription` instead of the placeholders would look like this:

```
Name: {EventName}
Description: {EventDescription}
```

### 2.7 Action

This property appears as follows:

```
type ActionProperty = {
    type: string;
    params: { [key: string]: any }
}
```

Actions are passed as an object that will contain a `type` field identifying what action has been selected, and a
`params` field that contains an object with additional information (where applicable).

The possible types and their parameters are as follows:

* `NoClientAction`: the 'Do nothing' action
* `PageClientAction`: the 'Show a page' action
    * `params.page`: the selected page's name
* `MicroflowClientAction`: the 'Call a microflow' action
    * `params.microflow`: the selected microflow's name
* `NanoflowClientAction`: the 'Call a nanoflow' action
    * `params.nanoflow`: the selected nanoflow's name
* `OpenLinkClientAction`: the 'Open link' action
    * `params.linkType`: the type of link (can be "Web", "Email", "Call", or "Text")
    * `params.isDynamic`: whether or not the link value is based on an attribute (`true`) or static (`false`)
    * `params.value`: when dynamic, this contains the name of the selected attribute (otherwise, this contains
    the value for the link)
* `CreateObjectClientAction`: the 'Create object' action
    * `params.objectType`: the name of the entity to be created
    * `params.page`: the name of the selected edit page
* `SaveChangesClientAction`: the 'Save changes' action
* `CancelChangesClientAction`: the 'Cancel changes' action
* `ClosePageClientAction`: the 'Close page' action
* `SignOutClientAction`: the 'Sign out' action
* `DeleteClientAction`: the 'Delete' action

### 2.8 Attribute

A string containing the path of the selected attribute will be passed.

Here are a few examples:

* `EventName`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event/EventName`

### 2.9 Object

Sub-object properties will be passed as an `array` of values. For each configured sub-object, an entry with all
values will be passed.

### 2.10 File

A string containing the path of the selected file entity will be passed.

Here are a few examples:

* `MyFirstModule.Event`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event`

## 3 Preview Module for Studio and Design Mode

It is possible to create a preview for pluggable widgets that will be rendered in Studio's page editor,
as well as Studio Pro's Design Mode.

Add the module by adding a file to your custom widget with the same name as your `xml` file as well as the suffix
`.webmodeler.js`. For example, a widget named `TextBox.xml` would have the preview module `TextBox.webmodeler.js`.

This preview module is expected to be a CommonJS module, exporting the following functions using the `exports` object.

### 3.1 Exposed Libraries

In Studio and Design mode, only a few libraries are allowed to be imported. This is expected to occur through the
CommonJS method: by using `require`.

It is possible to require the following modules:

* The react libraries `"react"`, `"react-dom"`, `"react-dom-factories"`, and `"prop-types"`
* An `Icon` component that can be used to render icon properties: `"mendix/components/web/Icon"`

### 3.2 Preview Export

The `preview` export is expected to be a `class` or `function` representing a `React` component. This component, the values object (see [Values API](#2-values-api)), and the following properties will be rendered along with the values as properties:

* `readOnly` (`boolean`): `true` if the widget is read-only (for example, if it is configured to be so due to the `Editability`
  system property, or if it is inside a read-only data view)
* `className` (`string`): the classes from the system, which will include manually configured classes through the `class`
  property in Studio Pro, and the classes resulting from configured design properties
* `style` (`string`): a string representation of the styles as entered in the `style` property in Studio Pro
* `styleObj` (`React.CSSProperties`): a parsed variant of `style` in the format as how React components expect their
  `style` attribute

Assuming a pluggable widget with a string property `content` and an `integer` property `padding`, the following shows a simple preview component:

```tsx
type Props = {
    content: string;
    padding: number;
    className: string;
    styleObj: React.CSSProperties;
}

export const preview: React.FC<Props> = (props) => (
    <div className={`my-pw-container ${props.className}`}
         style={{ ...props.styleObj, padding: props.padding }}>
        {props.content}
    </div>
);
```

#### 3.2.1 Using a Widgets Property

A [Widgets Property](#2-4-widgets) contains a `renderer` field that allows its content to be rendered when filled, or shows an empty drop-zone when empty inside the preview. It requires a single, empty, DOM node as a child in which to render the contents:

```tsx
type Props = {
    content: WidgetsProperty;
}

export const preview: React.FC<Props> = (props) => {
    const ContentRenderer = props.content.renderer;

    return (
        <div className="my-pw-container">
            <div className="my-pw-header">…</div>
            <ContentRenderer><div className="my-pw-content" /></ContentRenderer>
        </div>
    );
}
```

#### 3.2.2 Using an Icon Property

The preview module provides a component to preview an [icon property](#2-2-icon) in the same way as the
`Icon` component in the client would. This component can be imported from `"mendix/components/web/Icon"` and accepts
the `IconProperty` as `icon` parameter.

```tsx
import { Icon } from "mendix/components/web/Icon";

type Props = {
    icon: IconProperty;
}

export const preview: React.FC<Props> = (props) => (
    <div className="my-pw-container">
        <Icon icon={props.icon} />
        <div className="my-pw-content">…</div>
    </div>
);
```

### 3.3 The GetPreviewCss Export

The `getPreviewCss` export is expected to be a `function` returning a `string` containing any CSS that the preview needs
to render.

```typescript
export function getPreviewCss() {
    return `
.my-pw-container {
    background-color: #C0FFEE;
}
`;
}
```

## 4 Read More

* [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets)
* [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/property-types-pluggable-widgets)
* [How to Build a Pluggable Native Widget](/howto/extensibility/build-native-widget)

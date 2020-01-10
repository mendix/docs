---
title: "Studio APIs for Pluggable Widgets"
parent: "pluggable-widgets"
menu_order: 30
description: A guide for understanding the APIs available in both Studios to pluggable widgets
tags: ["Widget", "Pluggable", "Custom", "JavaScript", "React"]
---

## 1 Introduction

This page contains information about the API the different Studio's offer to build a better modeling experience for
Pluggable Widgets.

{{% alert type="info" %}}
The following APIs are available from Mendix 8.0.0
{{% /alert %}}

## 2 Values API

The values API is used to pass the values configured for the pluggable widget's properties.

These values will be passed in a javascript object, where the property's `key` is used as the object property.

A simple example of such an object could be:

```javascript
{
    stringProp: "Some value",
    intProp: 42
}
```

### 2.1 Static Properties

Static property types are exposed with their configured value as a javascript value:

| Plugin Widget Type | JavaScript Type |
| ------------------ | ----------------|
| `string`           | `string`        |
| `boolean`          | `boolean`       |
| `integer`          | `number`        |
| `decimal`          | `number`        |
| `enumeration`      | `string`        |

For `enumeration` properties, the currently selected option's `key` will be used as the value.

### 2.2 Icon

```typescript
type GlyphIcon = { type: "glyph"; iconClass: string; }
type ImageIcon = { type: "image"; imageUrl: string; }

type IconProperty = null | GlyphIcon | ImageIcon;
```

Icon properties are exposed as an object containing a `type` field that is either `"glyph"` (if a glyphicon is selected)
or `"image"` (if an image is selected), or as `null` if no icon is selected at all.

For the `"glyph"` type, `iconClass` is available; which contains the class to apply on a `glyphicon` element to
include the right icon. It will be an empty string if no icon has been selected.

For the `"image"` type, an `imageUrl` is available; representing a URL from which the selected image can be reached
for the Studio and Design Mode previews. It will be an empty string if no image has been selected.

### 2.3 Image

Image properties will be passed as a `string` property that will contain the URL on which the image is served in
Studio and Design Mode previews. It will be an empty string if no image is selected.

### 2.4 Widgets

{{% alert type="warning" %}}
Experimental API. Format of the data might change depending on (internal) feedback.
{{% /alert %}}

```
type WidgetsProperty = {
    widgetCount: number;
    renderer: React.Component
}
```

This property is exposed as an object containing the following properties:

- `widgetCount`: The number of (immediate) child widgets configured
- `renderer`: A React Component allowing rendering of the child widgets in the preview.

### 2.5 Expression

{{% alert type="warning" %}}
Experimental API. Format of the data might change depending on (internal) feedback.
{{% /alert %}}

This property will be passed as a `string` containing the expression as typed by the user.

### 2.6 Text Template

A preview `string` will be passed. This preview is built using the currently active language, and by
replacing the placeholders with the names of the attributes.

For example:
```
Name: {1}
Description: {2}
```

With parameters: `EventName` and `EventDescription`

Would become:
```
Name: {EventName}
Description: {EventDescription}
``` 

### 2.7 Action

{{% alert type="warning" %}}
Experimental API. Format of the data might change depending on (internal) feedback.
{{% /alert %}}

```
type ActionProperty = {
    type: string;
    params: { [key: string]: any }
}
```

Actions are passed as an object that will contain a `type` field identifying what action has been selected, and a
`params` field that contains an object with additional information (where applicable).

The possible types and their parameters are:

- `NoClientAction`: The 'Do nothing' action.
- `PageClientAction`: The 'Show a page' action.  
    - `params.page`: The selected page's name.
- `MicroflowClientAction`: The 'Call a microflow' action.  
    - `params.microflow`: The selected microflow's name.
- `NanoflowClientAction`: The 'Call a nanoflow' action.
    - `params.nanoflow`: The selected nanoflow's name.
- `OpenLinkClientAction`: The 'Open link' action.
    - `params.linkType`: The type of link, can be "Web", "Email", "Call", or "Text".
    - `params.isDynamic`: Whether or not the link value is based on an attribute (`true`) or static (`false`)
    - `params.value`: When dynamic, this contains the name of the selected attribute. Otherwise, this contains
    the value for the link.
- `CreateObjectClientAction`: The 'Create object' action.
    - `params.objectType`: The name of the entity to be created.
    - `params.page`: The name of the selected edit page.
- `SaveChangesClientAction`: The 'Save changes' action.
- `CancelChangesClientAction`: The 'Cancel changes' action.
- `ClosePageClientAction`: The 'Close page' action.
- `SignOutClientAction`: The 'Sign out' action.
- `DeleteClientAction`: The 'Delete' action.

### 2.8 Attribute

{{% alert type="warning" %}}
Experimental API. Format of the data might change depending on (internal) feedback.
{{% /alert %}}

A `string` containing the path of the selected attribute will be passed.

Examples:

- `EventName`
- `MyFirstModule.EventSchedule_Event/MyFirstModule.Event/EventName`

### 2.9 Object

Sub object properties will be passed as an `array` of values. For each configured sub object, an entry with all
values will be passed.

### 2.10 File

{{% alert type="warning" %}}
Experimental API. Format of the data might change depending on (internal) feedback.
{{% /alert %}}

A `string` containing the path of the selected file entity will be passed.

Examples:

- `MyFirstModule.Event`
- `MyFirstModule.EventSchedule_Event/MyFirstModule.Event`

## 3 Preview Module (Studio & Design Mode)

It's possible to create a preview for pluggable widgets that will be rendered in Studio's page editor,
as well as the Design Mode in Studio Pro.

The module can be added by adding a file to your custom widget with the same name as the `xml` file, but using
`.webmodeler.js` as suffix instead. (So for a widget `TextBox.xml`, the file would be named `TextBox.webmodeler.js`.)

This module is expected to be a CommonJS module, exporting the following functions using the `exports` object.

### 3.1 Exposed libraries

In Studio and Design mode, only a couple of libraries are allowed to be imported. This is expected to happen using the
CommonJS way, using `require`.

It is possible to require the following modules:

- The react libraries: `"react"`, `"react-dom"`, `"react-dom-factories"`, and `"prop-types"`
- An `Icon` component that can be used to render icon properties: `"mendix/components/web/Icon"`.

### 3.2 `preview`

This export is expected to be a `class` or `function` representing a `React` component.
This component will be rendered with the values object (see [Values API](#2-values-api)) as properties, as well as
the following properties:

- `readOnly` (`boolean`): `true` if the widget is read-only. (E.g. it's configured to be so due to the `Editability`
  system property, or it's inside a read-only data view.)
- `className` (`string`): The classes from the system, these will include manually configured classes through the `class`
  property in Studio Pro, and the classes resulting from configured design properties.
- `style` (`string`): A string representation of the styles as entered in the `style` property in Studio Pro.
- `styleObj` (`React.CSSProperties`): A parsed variant of `style`, in the format as how React components expect their
  `style` attribute.

Assuming a Pluggable Widget with a `string` property `content` and an `integer` property `padding`, the following shows
a very simple preview component:

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

#### 3.2.1 Using a widgets property

A [Widgets Property](#2-4-widgets) contains a `renderer` field that allows rendering its content when filled, or an
empty drop zone when empty inside the preview.

It requires a single, empty, dom node as a child which will be used to render the contents in.

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

#### 3.2.2 Using an icon property

Similar to the client API, a component is provided that allows to preview an [icon property](#2-2-icon) in the same way as the
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

### 3.3 `getPreviewCss`

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

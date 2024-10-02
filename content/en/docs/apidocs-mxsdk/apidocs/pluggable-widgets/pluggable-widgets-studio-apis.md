---
title: "Preview Appearance APIs"
linktitle: "Preview Appearance APIs"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/
description: A guide for understanding the APIs which influence pluggable widget preview appearances in Mx10.
weight: 30
aliases:
- /apidocs-mxsdk/apidocs/studio-apis-for-pluggable-widgets
---

## Introduction

This guide explains the APIs offered by Mendix Studio Pro so you can build better pluggable widgets. Specifically, you can use these APIs and modules to alter pluggable widgets' preview appearances while working in Studio Pro's **Design mode**. To learn about creating a custom preview in **Structure mode**, add custom consistency checks, or conditionally hide widget properties, read the [Configuration Module API for Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-config-api/).

Lastly, [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/) is meant for pluggable widget development once your app is running in the client. This guide's APIs are available in Mendix 8.0.0 and higher.

## Values API {#values}

The values API passes the values configured for a pluggable widget's properties. These values will be passed in a JavaScript object, where the property's `key` is used as the object property.

Here is an example of such an object:

```javascript
{
    stringProp: "Some value",
    intProp: 42
}
```

### Static Properties

Static property types are exposed with their configured value as a JavaScript value:

| Plugin Widget Type | JavaScript Type |
| ------------------ | --------------- |
| `string`           | `string`        |
| `boolean`          | `boolean`       |
| `integer`          | `number`        |
| `decimal`          | `number`        |
| `enumeration`      | `string`        |

For `enumeration` properties, the currently selected option's `key` will be used as the value.

### Icon {#icon}

This property appears as follows:

```typescript
type GlyphIcon = { type: "glyph"; iconClass: string; }
type ImageIcon = { type: "image"; imageUrl: string; }
type Icon = { type: "icon"; iconClass: string; }

type IconProperty = null | GlyphIcon | ImageIcon | Icon;
```

Icon properties are exposed objects containing a `type` field that is `"glyph"` if a glyphicon is selected, `"image"` if an image is selected, `"icon"` if an icon from an icon collection is selected, or `null` if no icon is selected at all.

For the `"glyph"` type, `iconClass` is available. It contains the class to apply on a `glyphicon` element to display the correct icon. It will be an empty string value if no icon has been selected.

For the `"image"` type, `imageUrl` is available. It represents a URL from which your selected image can be reached by Studio Pro's **Design mode**. It will be an empty string value if no image has been selected.

For the `"icon"` type, `iconClass` is available. It contains the classes to apply to an element to display the correct icon. This element does not need to have the `glyphicon` class. It will be an empty string value if no icon has been selected.

### Image

This property appears as follows:

```typescript
type StaticImage = { type: "static"; imageUrl: string; };
type DynamicImage = { type: "dynamic"; entity: string; };

type ImageProperty = null | StaticImage | DynamicImage;
```

Image properties are exposed objects containing a `type` field that is `"static"` if a static image is selected, `"dynamic"` if an entity is selected, or `null` if no image is selected at all.

For the `"static"` type, `imageUrl`  is available. It represents a URL from which your selected image can be reached by Studio Pro's **Design mode**. It will be an empty string value if no image has been selected.

For the `"dynamic"` type, `entity` is available. It represents the entity where the selected image's data is stored. It will be an empty string value if no entity has been selected.

### Widgets {#widgets}

This property appears as follows:

```typescript
type WidgetsProperty = {
    widgetCount: number;
    renderer: React.ComponentType<{caption?: string}>;
}
```

This property is exposed as an object containing the following properties:

* `widgetCount`: The number of immediate child widgets configured
* `renderer`: A React component allowing rendering of the child widgets in the preview
    * The renderer component has an extra property called `caption` which will override the text that appears inside a dropzone when it is still empty

### Expression

This property will be passed as a string value containing the expression as typed by the user.

### Text Template

A preview string will be passed. This preview is built using the currently active language, and by
replacing the placeholders with the names of the attributes.

For example, you could see these placeholders:

```text
Name: {1}
Description: {2}
```

Using parameters `EventName` and `EventDescription` instead of the placeholders would look like this:

```text
Name: {EventName}
Description: {EventDescription}
```

### Action

When an action is set, an empty object `{}` is passed to indicate that an action has been set. When no client action is set, the passed value will be `null`.

### Attribute

A string containing the path of the selected attribute will be passed.

Here are a few examples:

* `EventName`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event/EventName`

### Object

Object properties are passed as an `array` of JavaScript objects. For each configured sub-object, an object will be passed with all the sub-object's properties. These properties are available by their `key`, with values as described throughout the [Values API](#values) section.

### File

A string containing the path of the selected file entity will be passed.

Here are a few examples:

* `MyFirstModule.Event`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event`

## Preview Module for the Design Mode

It is possible to create a preview for pluggable widgets that will be rendered in Studio Pro's Design Mode.

Add the module by adding a file to your custom widget with the same name as your `xml` file as well as the suffix
`.editorPreview.js`. For example, a widget named `TextBox.xml` would have the preview module `TextBox.editorPreview.js`.

This preview module is expected to be a CommonJS module, exporting the following functions using the `exports` object.

### Exposed Libraries

In **Design mode**, only a few libraries are allowed to be imported. This is expected to occur through the
CommonJS method: by using `require`.

It is possible to require the following modules:

* The react libraries `"react"`, `"react-dom"`, `"react-dom-factories"`, and `"prop-types"`
* An `Icon` component that can be used to render icon properties: `"mendix/components/web/Icon"`
* A `Selectable` component that can be used to define what it selectable in preview: `"mendix/preview/Selectable"`

### Preview Export

The `preview` export is expected to be a `class` or `function` representing a `React` component. This component, the values object (see the [Values API](#values) section above), and the following properties will be rendered along with the values as properties:

* `readOnly` (`boolean`): `true` if the widget is read-only (for example, if it is configured to be so due to the `Editability` system property, or if it is inside a read-only data view)
* `renderMode` (`string`): a string providing information on which mode the rendering editor is in
    * `design`: the current editor is in design mode
    * `xray`: the current editor is in x-ray mode
* `class` (`string`): the classes from the system, which will include manually configured classes through the `class` property in Studio Pro, and the classes resulting from configured design properties
* `style` (`string`): a string representation of the styles as entered in the `style` property in Studio Pro

Assuming a pluggable widget with the string properties `content` and `style`, the following shows a simple preview component:

```tsx
type Props = {
    content: string;
    style: string;
    class: string;
}

export const preview: React.FC<Props> = (props) => (
    <div className={`my-pw-container ${props.class}`} style={props.style}>
        {props.content}
    </div>
);
```

#### Using a Widgets Property

A [Widgets Property](#widgets) contains a `renderer` field that allows its content to be rendered when filled, or shows an empty drop-zone when empty inside the preview. It requires a single, empty, DOM node as a child in which to render the contents:

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

#### Using an Icon Property

The preview module provides a component to preview an [icon property](#icon) in the same way as the
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

#### Using the Selectable Component

The preview module provides a component to define that an object is selectable in the preview. This component can be imported from `"mendix/preview/Selectable"`, accepts an item from an `object` list property as an `object` parameter, and has an optional `caption` parameter.

The example below defines a simplified representation of the types for your clarity. In reality you would import those types from `"../typings/TruckWidgetProps"` if `TruckWidget` was the name of your widget.

```tsx
import { Selectable } from "mendix/preview/Selectable";

type TruckDriversType = {
    name: string;
    age: number;
    isExperienced: boolean;
}

type TruckWidgetPreviewProps = {
    truckDrivers: TruckDriversType[];
}

export const preview: React.FC<TruckWidgetPreviewProps> = (props) => (
    <div className="my-pw-container">
        {props.truckDrivers.map((truckDriver, i) => (
            <Selectable
                object={truckDriver}
                caption={truckDriver.isExperienced ? "Awesome truck driver" : undefined}
                key={`truck_driver_${i}`}
            >
                <div className="my-pw-truck-driver">
                    <div>Name: {truckDriver.name}</div>
                    <div>Age: {truckDriver.age}</div>
                </div>
            </Selectable>
        ))}
    </div>
)
```

When the widget is added to a page you can select a specific item and edit it:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-studio-apis/selectable-component.png" alt="Example of the selectable component" class="no-border" >}}

### The GetPreviewCss Export

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

## Read More

* [Configuration Module API for Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-config-api/)
* [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/)
* [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
* [How to Build a Pluggable Native Widget](/howto/extensibility/build-native-widget/)

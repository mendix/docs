---
title: "Configuration Module API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-config-api/
description: A guide for understanding the configuration module API which influences the behavior of pluggable widgets in Mx10.
weight: 35
aliases:
- /apidocs-mxsdk/apidocs/config-api-for-pluggable-widgets
---

## Introduction

A pluggable widget's configuration module allows for several modeler experience improvements. For example, you can hide widget properties based on conditions, add consistency checks to validate the widget's configuration, and customize your widget's appearance in **Structure mode**.

It is usually located in a JavaScript file using the same name as the widget’s XML file, ending with *.editorConfig.js*. For example, next to *TextBox.xml* would be a *TextBox.editorConfig.js*.

The file is expected to be in CommonJS format, using the `exports` object to export functions.

## Widget Developer Console {#widget-dev-console} 

Errors that are related to the configuration module are shown in the Widget Developer Console. This console is separate from the default console and can be found in the [View menu](/refguide/view-menu/).  

## Customizing the Widget’s Properties

To customize the properties available in Studio Pro for the pluggable widget, the module should export a `getProperties` function. Two parameters are passed to this function:

* The current configured values, following the [Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values)
* The default property configuration

```typescript
function getProperties(
    values: ValuesAPI,
    defaultConfiguration: Properties
): Properties
```

Using this API, it is possible to dynamically show or hide certain properties based on configured values.

{{% alert color="info" %}}
Please note that when a property is hidden, its value will be cleared.
{{% /alert %}}

{{% alert color="info" %}}
Be advised that hiding a property which is required according to the XML will still give a consistency error that it is required. We therefore discourage hiding properties that are required.<br><br>If a property is only required on a specific condition, it should not be marked as required in the XML. Instead of this, you should manually implement a check using the custom validation function.
{{% /alert %}}

The expected property configuration structure is as follows:

* `Properties` is expected to be an array of `PropertyGroups`
* A `PropertyGroup` is an object that must have a `caption`:
    * It is possible to have two levels of `PropertyGroup` objects, which can be achieved by giving the top-level groups a `propertyGroups` field containing an array of `PropertyGroup` objects
    * Alternatively, a property group can contain one or more `Property` objects in the `properties` field
* A `Property` is an object that must have a `key` that corresponds to a property `key` from the widget XML, and a `caption` field:
    * Optionally, a `description` field can be returned with a description of the property
    * If the property is of type `object` it requires a more complex configuration
        * The `objects` array field of the `Property` object contains the sub-objects’ properties (each sub-object will require an entry as an `ObjectProperties` object in this array)
            * The `properties` array field of the `ObjectProperties` object contains the sub-object's properties in form of an array of `PropertyGroup` objects
            * The object grid can be customized by using the property's `objectHeaders` and the object's `captions` array field (for more information, see the [Customizing Object Grids](#customize-object-grids) section)

```typescript
type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
}

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
}

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
}
```

Here is an example of how this structure looks as JavaScript object, based on the following widget XML snippet:

```XML
<properties>
    <propertyGroup caption="General">
    <property key="caption" type="string">
        <caption>Graph caption</caption>
        <description>The caption of this graph</description>
    </property>
    </propertyGroup>
    <propertyGroup caption="Data">
    <property key="dataCaption" type="string">
        <caption>Data caption</caption>
        <description>The caption of the data set</description>
    </property>
    <property key="dataPoints" type="object" isList="true">
        <caption>Data points</caption>
        <description></description>
        <objects>
        <properties>
            <propertyGroup caption="Data">
            <property key="x" type="integer" defaultValue="0">
                <caption>X value</caption>
                <description></description>
            </property>
            <property key="y" type="integer" defaultValue="0">
                <caption>Y value</caption>
                <description></description>
            </property>
            </propertyGroup>
        </properties>
        </objects>
    </property>
    </propertyGroup>
</properties>
```

Assuming the widget is configured with three data points, the following would be the first object passed (the values):

```typescript
{
    caption: "My graph",
    dataCaption: "Points",
    dataPoints: [
        { x: 0, y: 10 },
        { x: 1, y: 12 },
        { x: 2, y: 5 }
    ]
}
```

The default configuration would then be:

```typescript
[
    {
        caption: "General",
        properties: [
            {
                key: "caption",
                caption: "Graph caption",
                description: "The caption of this graph"
            }
        ]
    },
    {
        caption: "Data",
        properties: [
            {
                key: "dataCaption",
                caption: "Data caption",
                description: "The caption of the data set"
            },
            {
                key: "dataPoints",
                caption: "Data points",
                description: "",
                objects: [
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```

## Customizing Object Grids {#customize-object-grids}

An object grid for object properties can be customized. To do this, the property needs to have `objectHeaders` configured, which will be used as column headers. Each object also needs to have `captions` configured for the grid to be filled.

### Example

If you wished to use data point structure detailed above to visualize geographic coordinates, you might want to add the suffixes `° N` and `° W` to the numeric **x** and **y** values so the grid will look like this (values below are purely hypothetical):

| N Coordinate | W Coordinate |
| ------------ | ------------ |
| 51.9066° N   | 4.4883° W    |
| 42.3504° N   | -71.0468° W  |
| 51.5126° N   | -0.1062° W   |

The following code example shows an object property configuration which uses object headers and captions for each object to achieve the table shown above:

```typescript
{
    key: "dataPoints",
    caption: "Data points",
    description: "",
    objectHeaders: ["N Coordinate", "W Coordinate"], // column headers
    objects: [
        {
            captions: [`${values.dataPoints[0].y}° N`, `${values.dataPoints[0].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "Y value", description: "" },
                        { key: "x", caption: "X value", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[1].y}° N`, `${values.dataPoints[1].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "X value", description: "" },
                        { key: "x", caption: "X value", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[2].y}° N`, `${values.dataPoints[2].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "X value", description: "" },
                        { key: "x", caption: "Y value", description: "" }
                    ]
                }
            ]
        }
    ]
}
```

## Customizing Validation Using Consistency Checks

By default, Studio Pro will validate required properties. To add extra validations to the configured data, the module can export a `check` function. This function gets the values passed following the values API, and is expected to return an array of problems found:

```typescript
function check(values: ValuesAPI): Problem[]
```

A `Problem` is an object defined by the following type:

```typescript
type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    url?: string; // link with more information about the problem    
}
```

Any problem returned from this function will be shown in the [Errors](/refguide/errors-pane/) pane in Studio Pro.

### Targeting a Property of a Sub-Object

A property of the type `object` contains a list of objects with properties. In this case, it is possible to specify in which property of which object a problem occurred. This can be done by specifying the property as `<property>/<index>/<sub-property>` where index is the 1-based index of the object list. 

#### Example

For example, if an object-property `dataPoints` with the sub-properties `x` and `y` exists, and `y` should not be larger than 10, the following code will return the corresponding error:

```typescript
function check(values) {
    var problems = [];
    values.dataPoints.forEach((p, i) => {
        if (p.y > 10) {
            problems.push({
                property: `dataPoints/${i + 1}/y`,
                message: "y should not be larger than 10"
            });
        }
    });
    return problems;
}
```

## Customizing Page Explorer Caption

The Page Explorer will normally use the type name of the custom widget as its caption. If a custom caption should be used, the module can export a `getCustomCaption` function. This function gets the values passed following the values API and the current platform:

```typescript
function getCustomCaption(values: ValuesAPI, platform: "desktop" | "web"): string
```

If the caption is `null`, `undefined`, or not a string, then the default caption will be used.

## Widget Preview in Structure Mode

To configure the appearance of the custom widget in Studio Pro, export a `getPreview` function. This function receives three parameters: the first one contains the current values, the second one indicates whether dark mode is set, and the third parameter passes the current Studio Pro version. The function should return a preview properties object containing the configuration of the custom widget preview.

Please note that the default colors will be automatically adjusted for dark mode (for example font color, border color, and more). However, the `isDarkMode` flag can be used when setting colors explicitly.

To create a preview for different versions, you can use the third argument `version`. It contains the current Studio Pro version as an array of numbers in the format [`major`, `minor`, `build`], for example, `[9, 18, 0]`.

The following describes the API for the preview properties object that the `getPreview` should return.

The general element structure:

```typescript
type BaseProps = {
    type: string; // "Text" | "RowLayout" | "Image" …;
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
}
```

All types of preview properties share two common properties: `type` and `grow`: 

* `type` can be any of the preview types described below, such as `"Image"`, `"Text"`, or `"RowLayout"`
* `grow` is optional and only takes effect if the current element is a child of a row layout (see the [Row Layout](#row-layout) section for examples)

The following elements extend the base preview props with properties native to their elements. For example, it could contain `content` for text elements, or `document` and `width` for image elements. The following element sections will list all available element types and their properties.

### Image

```typescript
type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
}
```

Images properties can receive different types of input (but they always requires *either* a `document` or a `data`):

* `document`: an SVG image string
* `data`: a base64 encoded image string
* `property`: the value of an image property. 
    * Please note when passing an image property, it will only show if a static image has been set (a `document` or `data` still needs to be passed as well, which will act as a fallback image when the property is empty or a dynamic image has been set)

Additionally, a fixed `width` and `height` can be set. If not set, it will maximize to the available width. If the width and height are set to an aspect ratio that is different from the original image aspect ratio, it will show a section of the image so the image is not distorted.

Here is an example of a circle SVG:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => {
    const mySvgImage = `
<svg height="1000" width="1000">
    <circle cx="500" cy="500" r="400" stroke="black" stroke-width="35" fill="blue" />
</svg>`;
    return {
        type: "Image",
        document: mySvgImage,
        width: 200 // sets a maximum width of 200
    }
};
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-image.png" alt="an svg image of a circle" width="200"  class="no-border" >}}

### Container

```typescript
type ContainerProps = BaseProps & {
    type: "Container";
    children: StructurePreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
}
```

Containers can be used to stack multiple elements vertically. These elements are passed as `children` as an array of props. The `borders` property can be used to set borders around the whole content to visually group them.

Here is an example of two texts with borders around them:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "Container",
        borders: true,
        children: [
            { type: "Text", content: "I am on top" },
            { type: "Text", content: "I am on the bottom" }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-container.png" alt="a bordered container with two texts" width="600"  class="no-border" >}}

### Row Layout {#row-layout}

```typescript
type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow" // default is fixed
}
```

Row layouts are similar to a container, and can be used to render multiple elements horizontally next to each other. They have all the props that a container has, with the addition of a `columnSize`, which defines whether its children sizes are equal fixed weights or determined by their content (for more information, see the next section).

#### Column Size

##### Fixed (Default)

When `columnSize` is not set (or set to `"fixed"`) all available space is split into fixed weights. It will then fit the child content into the column, rather than expanding and shrinking the column based on the content size. 

As an example, this is useful for creating grid-like structures. By default, all columns get the equal amount of space. However, if the children have a `grow` value set, this will be used to set proportional column sizes for the children. Children without a `grow` value automatically receive the value 1.

As an example, consider this. The following code creates a row layout with four children. The first child (`Image`) takes the first half of the available space, and the other three children (`Texts`) share the other half. This can be achieved by simply setting the `grow` property of the first child to 3:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "fixed",
        children: [
            { type: "Image", data: mxLogo, grow: 3 },
            { type: "Text", fontSize: 20, content: "We share the" },
            { type: "Text", fontSize: 16, content: "right half of" },
            { type: "Text", fontSize: 12, content: "the row layout" }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-fixed.png" alt="a row layout with fixed column weights" width="1000"  class="no-border" >}}

##### Grow

When the `columnSize` is set to `"grow"`, the column sizes are determined by the content. When there is leftover space, the space is distributed over all columns. To influence the relative amount of space into which a child grows, you can set a `grow` factor for each child. The column will then grow proportionally according to this factor. Children without a `grow` value automatically receive the value 1.

If a layout has less space than the elements prefer, items are shrunk disproportionally to their `grow` factors (a high grow factor means a low shrink factor) until they reach their minimum sizes:

* A `text` gets wrapped to become smaller
* An `image` does not shrink further than its original size unless manually set with the `width` property or when all elements have reached their minimum size

Once all items have reached their minimum size, the layout will force smaller sizes proportionally to their `grow` value.

Please note that forcing items smaller than they require works for images, but might cause unexpected behavior with other elements.

Here is an example to show how grow factors behave:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "grow",
        children: [
            {
                type: "Container",
                grow: 0,
                borders: true,
                backgroundColor: "#F4FFB0",
                children: [{ type: "Text", content: "Grow 0", fontSize: 20 }]
            },
            {
                type: "Container",
                borders: true,
                backgroundColor: "#E6FFB0",
                children: [{ type: "Text", content: "Grow 1", fontSize: 20 }]
            },
            {
                type: "Container",
                grow: 2,
                borders: true,
                backgroundColor: "#B0C0FF",
                children: [{ type: "Text", content: "Grow 2", fontSize: 20 }]
            }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow.png" alt="a row layout with different grow factors" width="1000"  class="no-border" >}}

##### Example

Here is an example of a button to show how to center items using row layouts:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "grow",
        borders: true,
        borderRadius: 20,
        backgroundColor: "#2A2C96",
        children: [
            {
                type: "Container", // fills space on the left
            },
            {
                type: "Container",
                grow: 0, // ensures that it only takes necessary space
                padding: 10,
                children: [
                    { type: "Text", content: "A button", fontColor: "#FFF", fontSize: 20 }
                ]
            },
            {
                type: "Container", // fills space on the right
            }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow-2.png" alt="structure mode preview of a bordered container with two texts" width="600"  class="no-border" >}}

### Text

```typescript
type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
}
```

The text to be displayed must be passed as `content`. You can optionally set a `fontSize`. Please note that only integers are supported as font size.

Here is an example:

```typescript
export const getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "Text",
        content: values.myTextProp, // set displayed text to the value of myTextProp
    });
```

### Drop Zones 

```typescript
type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader: bool?; // true by default. Toggles whether to show a header containing information about the datasource
}
```

The drop zone preview type can be used to add drop zones to the widget preview. It requires a widget property of type `widgets` to be able to store the information about the containing widgets. If the property has a data source, a header will be shown inside the dropzone containing information about the data source. This header is optional and can be hidden by setting `showDataSourceHeader` to `false`.

To configure a drop zone, the widgets property object (which can be obtained directly from the [Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values)) needs to be passed as `property`, as the following example shows:

```typescript
exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
    type: "Container",
    borders: true,
    children: [
        {
            type: "Text",
            content: "This widget acts as a container for other widgets"
        },
        {
            type: "DropZone",
            property: values.myWidgetsProp
            placeholder: "Drop your widgets here!"
        }
    ]
})
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-drop-zone.png" alt="a container with a dropzone" width="600"  class="no-border" >}}

### Selectable

```typescript
type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: StructurePreviewProps; // any type of preview property to visualize the object instance
}
```

The selectable preview type can be used to make an instance of an object list selectable. If an object instance is made selectable, it will behave similar to a widget. Its properties will be shown in the `Properties` section and can also be edited in a pop-up by double-clicking the section that is visualized by the `child` properties. Note that this only works in combination with a property of type `object`.

To configure a selectable, the object from the [Value API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values) needs to be passed as `object`, and the preview properties to visualize the object as `child`. 

The following example shows how to render a container with a list of selectable objects. In this case, each object is shown as a text with its caption:

```typescript
export function getPreview(values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) {
    const container: ContainerProps = {
        type: "Container",
        borders: true,
        children: [
            { type: "Text", fontSize: 18, content: "List with selectable elements" }
        ],
    };

    for (const item of values.myObjectProp) {
        container.children!.push({
            type: "Selectable",
            object: item,
            child: {
                type: "Text",
                fontColor: "#2A2C96",
                content: item.caption
            },
        });
    }
    return container;
}
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-selectable.png" alt="a list of selectable text elements" width="600"  class="no-border" >}}

### Datasource

```typescript
type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: Nullable<object>; // datasource property object from Values API
    child?: StructurePreviewProps; // any type of preview property component (optional)
}
```

The **datasource** preview type can be used when developing a widget with a data source. Using it will render a container with a data source header, similar to other data widgets such as data views or list views. For example, the following will render a data source container with a drop-zone:

```typescript
    exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
      type: "Datasource",
      property: values.myDatasourceProp, // pass the datasource property
      child: {
        type: "DropZone",
        property: values.myWidgetsProp
      }
    })
```

Here is a preview of a **datasource** component containing a drop-zone with two text boxes:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-datasource.png" alt="a widget with a datasource" width="400"  class="no-border" >}}

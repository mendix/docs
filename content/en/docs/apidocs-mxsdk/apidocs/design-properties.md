---
title: "Design Properties API"
url: /apidocs-mxsdk/apidocs/design-properties/
description: "This API guide outlines how design properties work in Atlas UI and can help you create custom design properties."
weight: 50
---

## Introduction

The Mendix Design Properties API allows you to create or extend design properties for your Mendix apps.

To use the API, you need to alter the *design-properties.json* file of a specific module in your application's **themesource** folder. This process is described in the [Design Properties Definitions](#design-properties-definitions) section below.

Many apps can simply use the Atlas UI theme and its included set of design properties to satisfy their styling needs. However, if you want to customize your styling more deeply, you will have to create your own custom design properties. This guide outlines how design properties work and can help you create custom design properties. The design properties provided by Atlas UI have been built in the same way as outlined here.

Design properties are a special set of settings shipped together with a Mendix theme module. Design properties are shared among all the Mendix apps which use a specific theme module. 

In Studio Pro, you can see which design properties are available for a widget in the **Properties** pane.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/overview.png" alt="The Properties pane in Studio Pro" class="no-border" >}}

## Using Design Properties

While styling Mendix apps, users must often apply the same set of CSS or native styling classes to widgets on different pages again and again. This work is time consuming and vulnerable to human error as you edit text fields in order to apply classes to a widget.

Design properties can make this work easier and safer. By configuring your own custom design properties, a certain styling can be applied to a widget in a few clicks.

### Creating Styles for Your Design Properties

You can define the styles that correspond to your design properties as CSS classes. Starting with Studio Pro 10.0.0, you can also use design properties to apply CSS variables (also known as CSS custom properties) to specified CSS properties. This document will show examples of both ways.

CSS classes are the easiest and most reusable way of applying styling. However, they can also lead to duplication of similar CSS rules, resulting in large style sheets. This can happen when you want to reuse the same color for a background color and a text color. CSS variables can make this more flexible by extracting common values, such as colors. For example, a design property can target the `background-color` or the `color` CSS properties.

The Design Properties API is designed to allow you to choose between CSS classes or CSS variables depending on your use case. You may also employ both and can easily mix approaches. You can even switch between using CSS classes and CSS variables without having to manually update the styles of your widgets. You can switch from one to the other at any time. For more information on the differences between these approaches, see [CSS Classes and CSS Variables](#class-variable).

## Design Property Types

There are several types of design properties: **Toggle**, **Dropdown**, **Colorpicker**, **ToggleButtonGroup**, and **Spacing**. They are intended to cover various use cases, allowing you to choose the design property type that best fits your need. Not all versions of Studio Pro support the same design property types.

* The **Toggle** type can be turned on or off by the user. It can only be used with CSS classes, which will be applied if the toggle is turned on.
* A **Dropdown** allows you to define a set of related options. Only a single option can be selected at a single time.

The following types have been introduced with Studio Pro 10.0.0:

* A **Colorpicker** is like a **Dropdown**. As it is especially intended to work with colors, it allows you to add a preview of the color for each option.
* The **ToggleButtonGroup** type also allows you to define a set of related options. Unlike a **Dropdown**, the **ToggleButtonGroup** can be configured to allow selecting multiple options.
* The **Spacing** type can be used to set both a widget's margin and padding.

In some cases, it is possible to switch the type of design property you use without any impact on how you used it previously. This can be helpful when you do not know exactly what type to use.

## Design Properties Definitions {#design-properties-definitions}

Design properties are defined on a module level in **JSON** format. They are located in the module specific *themesource* folders (for more information, see the [File and Folder Structure](/howto/front-end/customize-styling-new/#file-and-folder) section of *How to Customize Styling*). Since styling works differently for web and native platforms, each platform's design properties are different and defined in two separate folders. Web styling is defined in *web/design-properties.json* file. Native styling is defined in the *native/design-properties.json* file.

Here is a simplified example of a design properties file:

```js
{
    "DivContainer": [
        {
            "name": "My Toggle Property",
            "type": "Toggle",
            "description": "Description of My Toggle Design Property",
            "class": "hereMyClass"
        },
        {
            "name": "My Dropdown Property",
            "type": "Dropdown",
            "description": "Description of My Dropdown Design Property",
            "options": [
                {
                    "name": "Styling option 1",
                    "class": "stylingClassOne"
                },
                {
                    "name": "Styling option 2",
                    "class": "stylingClassTwo"
                }
            ]
        }
    ],
    "Button": [
        ...
    ]
}
```

### Design Property Structure

To better illustrate the structure, here is a simplified version of the above example:

```js
{
    "DivContainer": [
        {
            ... property one
        },
        {
            ... property two
        }
    ],
    "Button": [
        ...
    ]
}
```

As you can see, design properties are defined as a *JSON* object where the keys (`DivContainer` and `Button` for example) are widget types and the values are *JSON* arrays containing sets of design properties applicable for that widget type. To learn more about this subject, see the [Widget Types](#widget-types) section below.

Every design property in the array is also represented by a *JSON* object. The exact structure of each object is dependent on its type, as indicated by the `type` property. All types also share common fields such as `name` and `description`. Those names determine how a design property appears to a user in Mendix Studio Pro.

#### Common Fields

The examples above show that the fields `name` and `description` define the UI, the name of a form control in Studio Pro, and the description under it. They are required string values naming and describing a design property. 

Field `type` defines the type of a property and must be one of the design property types: `Toggle`, `Dropdown`, `Colorpicker`, `ToggleButtonGroup` or `Spacing`.

{{% alert color="warning" %}}
Name your design property and its options carefully. Those names cannot be changed easily when there are apps already using them. If you want to rename a design property which is already being used in an app, see the [Renaming Design Properties](#old-names) section below.
{{% /alert %}}

#### Toggle-Specific Fields

Design properties of type **Toggle** have the following additional field:

| Field   | Required   | Type   | Description                                                          |
| ------- | ---------- | ------ | -------------------------------------------------------------------- |
| `class` | Yes        | String | A class name to be applied if the option is toggled on for a widget. |

Here is a full example of a **Toggle** design property:

```js
{
    "name": "Full width",
    "type": "Toggle",
    "description": "Description of My Toggle Design Property",
    "class": "fullWidth"
}
```

This is how the **Toggle** design property appears:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/toggle.png" alt="Toggle property in Studio Pro" class="no-border" >}}

#### Dropdown-Specific Fields

Design properties of type **Dropdown** have the following additional fields:

| Field      | Required                          | Type                                  | Description                 |
| ---------- | --------------------------------- | ------------------------------------- | --------------------------- |
| `options`  | Yes                               | Array of Dropdown options (see below) | A list of possible options. |
| `property` | If any option uses a CSS variable | String | A CSS property.                                            |

Dropdown options have the following fields:

| Field                 | Required                 | Type   | Description                                                                                                                 |
| --------------------- | ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                | Yes                      | String | The name is shown to the user when selecting an option.                                                                     |
| `class` or `variable` | One of these is required | String | A valid CSS class or CSS variable, respectively. See [CSS classes and CSS variables](#class-variable) for more information. |

When the selected option defines a class, that class will be applied to the widget. When the selected option defines a variable, it will be applied to the specified `property`.

Here is an example of a **Dropdown** design property using classes:

```js
{
    "name": "Font size",
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Small",
            "class": "fontSizeSmall"
        },
        {
            "name": "Medium",
            "class": "fontSizeMedium"
        },
        {
            "name": "Large",
            "class": "fontSizeLarge"
        }
    ]
}
```

Here is an example of a **Dropdown** design property using CSS variables:

```js
{
    "name": "Font size",
    "type": "Dropdown",
    "property": "font-size",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Small",
            "variable": "--font-size-small"
        },
        {
            "name": "Medium",
            "variable": "--font-size-medium"
        },
        {
            "name": "Large",
            "variable": "--font-size-large"
        }
    ]
}
```

This is how the **Dropdown** design property appears:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/dropdown.png" alt="Dropdown property in Studio Pro" class="no-border" >}}

#### Colorpicker-Specific Fields

Design properties of type **Colorpicker** have the following additional fields:

| Field      | Required                                  | Type                                      | Description                 |
| ---------- | ----------------------------------------- | ----------------------------------------- | --------------------------- |
| `options`  | Yes                                       |  Array of Colorpicker options (see below) | A list of possible options. |
| `property` | If any of the options uses a CSS variable | String                                    | A CSS property.             |

Colorpicker options have the following fields:

| Field                 | Required                 | Type   | Description                                                                                                                                                                                                                          |
| --------------------- | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                | Yes                      | String | Shown to the user when selecting a color.                                                                                                                                                                                            |
| `class` or `variable` | One of these is required | String | A valid CSS class or CSS variable, respectively.                                                                                                                                                                                     |
| `preview`             | No                      | String | A CSS variable (such as `--brand-primary`), a hexadecimal color definition (such as `#00FF00`) or the name of a HTML color (such as `green`). You can use a CSS variable for the preview even if the option is based on a CSS class. |

When the selected option defines a class, that class will be applied to the widget. When the selected option defines a variable, it will be applied to the specified `property`.

Here is an example of a **Colorpicker** design property using classes:

```js
{
    "name": "Background color",
    "type": "Colorpicker",
    "description": "Description of Background color Property",
    "options": [
        {
            "name": "Red",
            "class": "backgroundColorRed"
        },
        {
            "name": "Green",
            "class": "backgroundColorGreen"
        },
        {
            "name": "Blue",
            "class": "backgroundColorBlue"
        }
    ]
}
```

Here is an example of a **Colorpicker** design property using CSS variables:

```js
{
    "name": "Background color",
    "type": "Dropdown",
    "property": "background-color",
    "description": "Description of Background Color Property",
    "options": [
        {
            "name": "Red",
            "variable": "--color-red"
        },
        {
            "name": "Green",
            "variable": "--color-green"
        },
        {
            "name": "Blue",
            "variable": "--color-blue"
        }
    ]
}
```

Note: if you can not provide a value for the preview, it is recommended to instead use a **Dropdown** design property. If at a later point in time you can provide the preview, you can always change the type from a **Dropdown** to a **Colorpicker**.

This is how the **Colorpicker** design property appears:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/colorpicker.png" alt="Dropdown property in Studio Pro" class="no-border" >}}

#### ToggleButtonGroup-Specific Fields

Design properties of type **ToggleButtonGroup** have the following additional fields:

| Field         | Required                                  | Type                                           | Description                                                                                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiSelect` | No                                        | Boolean                                        | When `false` or if the field is not present, only a single option can be selected. When `true`, the user can set multiple options at the same time, meaning the CSS classes of all selected options will be applied to the widget. This cannot be `true` if any of the options uses a CSS variable. |
| `options`     | Yes                                       | Array of ToggleButtonGroup options (see below )| A list of possible options.                                                                                                                                                                                                                                                                         |
| `property`    | If any of the options uses a CSS variable | String                                         | A CSS property.                                                                                                                                                                                                                                                                                     |

ToggleButtonGroup options have the following fields:

| Field                 | Required                 | Type   | Description                                                                                                                                                             |
| --------------------- | ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | Yes                      | String | Shown to the user when not using any icons.                                                                                                                             |
| `class` or `variable` | One of these is required | String | A valid CSS class or CSS variable, respectively. When `multiSelect` is `true`, the options must be defined using `class`.                                               |
| `icon`                | No                       | String | A reference to an Icon from an Icon Collection: `[Module name].[IconCollection name].[Icon name]`. If you want to use an `icon`, all options must have an `icon` field. |

{{% alert color="warning" %}}
Be careful when adding, removing or changing the value of the `multiSelect` field. This results in a consistency error for any Widget that previously had multiple values selected.
{{% /alert %}}

Note that a **ToggleButtonGroup** allows you to define up to 9 different options. If you instead use `icon`, you can use up to 18 options.

Here is an example of a **ToggleButtonGroup** design property using classes:

```js
{
    "name": "Text align",
    "type": "ToggleButtonGroup",
    "description": "Description of Text align Property",
    "options": [
        {
            "name": "left",
            "class": "textAlignLeft"
        },
        {
            "name": "center",
            "class": "textAlignCenter"
        },
        {
            "name": "right",
            "class": "textAlignRight"
        }
    ]
}
```

Here is an example of a **ToggleButtonGroup** design property using CSS variables:

```js
{
    "name": "Text align",
    "type": "ToggleButtonGroup",
    "description": "Description of Text align Property",
    "options": [
        {
            "name": "left",
            "variable": "--align-left"
        },
        {
            "name": "center",
            "variable": "--align-center"
        },
        {
            "name": "right",
            "variable": "--align-right"
        }
    ]
}
```

This is how the **ToggleButtonGroup** design property appears when using icons for the options:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/toggle_button_group.png" alt="ToggleButtonGroup property in Studio Pro" class="no-border" >}}

#### Spacing-Specific Fields

For design properties of type **Spacing**, in addition to the common fields, it has the following fields:

| Field      | Required   | Type                                 | Description                 |
| ---------- | ---------- | ------------------------------------ | --------------------------- |
| `margin`   | Yes        | Array of Spacing options (see below) | A list of possible options. |
| `padding`  | Yes        | Array of Spacing options (see below) | A list of possible options. |

Spacing options have the following fields:

| Field      | Required   | Type                        | Description                                                                                                                                                                                                                                |
| ---------- | ---------- | -------------------------   | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`     | Yes        | String                      | It is recommended to use three characters or less for the names, as otherwise they will not be fully shown.                                                                                                                                |
| `top`      | No         | A Spacing value (see below) |                                                                                                                                                                                                                                            |
| `right`    | No         | A Spacing value (see below) |                                                                                                                                                                                                                                            |
| `bottom`   | No         | A Spacing value (see below) |                                                                                                                                                                                                                                            |
| `left`     | No         | A Spacing value (see below) |                                                                                                                                                                                                                                            |
| `variable` | No         | String                      | A CSS variable. When using a variable, the option will automatically be available for all four directions. Therefore, a CSS variable can not be used if any of the four directions (`top`, `right`, `bottom` or `left`) specifies a class. |

Spacing values have the following fields:

| Field      | Required   | Type                      | Description                                                                                                         |
| ---------- | ---------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `class`    | No         | String                    | A specific CSS class to apply to the sizing (margin or padding) for the given direction (top, left, right, bottom.) |

Both margin and padding allow up to 12 options to be defined. If you define more options than that, some of them will not be able to be selected.

The **Spacing** property also allows users to select the same option for all four directions at the same time. When doing so, they are only allowed to select options that are available for all four directions. This means that they need to have a CSS class defined for all four directions, or define a CSS variable.

Here is an example of a **Spacing** design property using classes:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "S",
            "top": {
                "class": "margin-top-s"
            },
            "right": {
                "class": "margin-right-s"
            },
            "bottom": {
                "class": "margin-bottom-s"
            },
            "left": {
                "class": "margin-left-s"
            }
        },
        {
            "name": "M",
            "top": {
                "class": "margin-top-m"
            },
            "right": {
                "class": "margin-right-m"
            },
            "bottom": {
                "class": "margin-bottom-m"
            },
            "left": {
                "class": "margin-left-m"
            }
        }
    ],
    "padding": [
        {
            "name": "S",
            "top": {
                "class": "padding-top-s"
            },
            "right": {
                "class": "padding-right-s"
            },
            "bottom": {
                "class": "padding-bottom-s"
            },
            "left": {
                "class": "padding-left-s"
            }
        },
        {
            "name": "M",
            "top": {
                "class": "padding-top-m"
            },
            "right": {
                "class": "padding-right-m"
            },
            "bottom": {
                "class": "padding-bottom-m"
            },
            "left": {
                "class": "padding-left-m"
            }
        }
    ]
}
```

Here is an example of a **Spacing** design property using CSS variables:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "S",
            "variable": "--spacing-s",
        },
        {
            "name": "M",
            "variable": "--spacing-m"
        }
    ],
    "padding": [
        {
            "name": "S",
            "variable": "--spacing-s"
        },
         {
            "name": "M",
            "variable": "--spacing-m"
        }
    ]
}
```

This is how the **Spacing** design property appears:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/spacing.png" alt="Spacing property in Studio Pro" class="no-border" >}}

### Extending or Overriding Design Properties of Other Modules {#extend-existing-design-properties}

Design properties can be extended or overridden in other modules. For example, you can add a custom drop-down option to an Atlas design property or override the applied CSS class of a toggle property. 

Overriding a design property can be useful when creating a theme module that builds on top of Atlas styling. To do this, simply add a design property for the same widget type in *themesource/{YOURTHEMEMODULE}/{WEB|NATIVE}/design-properties.json* using the same name and a compatible type. 

The precedence of design properties is determined by this compilation order of modules:

1. Non-UI Marketplace modules, in alphabetical order.
1. UI resources modules, ordered as in **App Settings** > **Theme**.
1. Non-UI user modules, ordered as in the Studio Pro App Explorer.

If multiple modules have a definition of a **Dropdown**, **ColorPicker**, **ToggleButtonGroup**, or **Spacing** property with the same name, the options will be ordered from high to low precedence (with the highest on top). If multiple modules have definitions of a **Toggle** property with the same name, the CSS class name from the module with the highest precedence will be applied when using the property.

Definitions for **Toggle** and **Spacing** design properties can only be merged with definitions of the exact same type.

Definitions of **ToggleButtonGroup** must either all set `multiSelect` to `true`, all be set it to `false`, or not define the `multiSelect` property at all. **Dropdown**, **ColorPicker**, and single-select **ToggleButtonGroups** can all be merged.

When merging definitions with different types, the last definition based on the precedence rules outlined above (i.e. the lowest in the list) will be used to display the design property to the user.

{{% alert color="warning" %}}
Note that having multiple definitions with incompatible types is an invalid configuration and will result in a failure to load any design properties.
{{% /alert %}}

## Widget Types{#widget-types}

When defining design properties in your *JSON* file, you must specify which widget your properties apply to, as some design properties may only work with certain widgets.

{{% alert color="info" %}}
Having a property that applies a table appearance style like **Stripped**, **Bordered**, or **Lined** only makes sense for widgets that contain tables, for example a data grid widget.
{{% /alert %}}

Widget types are types defined in the [Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/pages.html) documentation. Every type which is a direct or an indirect subtype of type [`Widget`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.widget.html) can have design properties attached to it. If a property is defined on a widget, then every subtype of this widget will have that property. For example if a property is defined on a `Widget` type, which is it the highest type in the hierarchy, then every widget will have this design property available.

### Widget Types for Pluggable Widgets

When creating design properties for [Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets/), their widget type is determined by [widget id](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-id).

## Changing the Type of a Design Property

As this document outlined, each of the design property types is designed to fulfill a certain use case. However, sometimes you might not know beforehand which type best fits your needs. In those cases, you might have to change the type of a design property. This is possible in the following cases:

* You can change between a **Dropdown**, a **Colorpicker** or a single-select **ToggleButtonGroup** at any time. This does not affect any widget or any values you have set previously.

However, not all design properties can freely change their types. In some cases, you do need more configuration, as explained in the [Renaming Design Properties](#old-names) section below.

## Renaming Design Properties{#old-names}

Sometimes you must rename design properties or their options which are already in use. As design properties are identified by names internally, renaming one may be a breaking change for apps that are already using those design properties. 

To prevent errors and offer users simple upgrade paths, use an `oldNames` field. This field must be of type array and contain old names, a particular property, or an option that was known and used before. The order of old names in an `oldNames` list does not matter. For instance, if a property was renamed twice, the `oldNames` field should contain both previous names. The strings in `oldNames` are case sensitive and should match the original definition exactly.

Example of a property and options that were renamed:

```js
{
    "name": "My Dropdown Property",
    "oldNames": ["my Dropdown Propery"],
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Styling option one",
            "class": "stylingClassOne"
        },
        {
            "name": "Styling option two",
            "oldNames": ["Stling option 2", "Styling option 2"],
            "class": "stylingClassTwo"
        }
    ]
}
```

The design property above was renamed from **my Dropdown Propery** to **My Dropdown Property**. Also **Styling option two** was renamed twice from the old names **Stling option 2** and **Styling option 2**.

### Renaming a Dropdown Option to a Toggle Property

{{% alert color="info" %}}
This feature was introduced in Mendix 9.
{{% /alert %}}

It is also possible to rename an option of a **Dropdown** property to a separate **Toggle** property. In this case, the old name of the **Toggle** property consists of the **Dropdown** property's name and the option's name separated by two colons. It is not required for the  **Dropdown** property to still exist — it may have been removed entirely.

Here is an example of a **Toggle** property that was renamed from a **Dropdown** option:

```js
{
	"name": "Styling 3",
	"oldNames": ["My Dropdown Property::Styling option 3"],
	"type: "Toggle",
	"description": "Description of Styling 3 toggle property",
	"class": "stylingClassThree"
}
```

The design property above is a replacement for the removed option **Styling option 3** of **My Dropdown Property** and will be set to **Yes** if that option was selected. The value of **My Dropdown Property** will then be set to empty if that design property still exists.

### Renaming Multiple Toggle properties to a Multi-Select ToggleButtonGroup Property

You can rename several **Toggle** properties to a multi-select **ToggleButtonGroup** property. To do this, use the `oldNames` field of an option to refer to the name of the corresponding **Toggle**. Make sure to set the `multiSelect` field of the **ToggleButtonGroup** to **true**.

Here is an example of a **ToggleButtonGroup** property that was renamed from several **Toggle** properties:

```js
{
    "name": "Font styling",
    "type": "ToggleButtonGroup",
    "description": "Change font styling",
    "multiSelect": true,
    "options": [
        {
            "name": "Bold",
            "oldNames": ["Bold text"],
            "class": "text-bold"
        },
        {
            "name": "Italic",
            "oldNames": ["Italic text"],
            "class": "text-italic"
        },
        {
            "name": "Underline",
            "oldNames": ["Underline text"],
            "class": "text-underline"
        }
    ]
}
```

The design property above is a replacement for the removed properties **Bold text**, **Italic text** and **Underline text**. An option will be turned on if that **Toggle** was previously turned on. The value of **Toggle** will then be turned off if that design property still exists.

### Renaming a Dropdown Option to a Spacing Option

You can rename options of a **Dropdown** property to an option of a **Spacing** property. In this case, the old name of the renamed options consists of the **Dropdown** property's name and the option's name separated by two colons. It is not required for the original property to still exist — it may have been removed entirely.

Here is an example of a **Spacing** property that includes options that have been renamed from a **Dropdown** option:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "M",
            "top": {
                "class": "margin-top-m",
                "oldNames": [ "spacing-top::small" ]
            }
        }
    ],
    "padding": [
        {
            "name": "S",
            "variable": "--size-s",
            "top": {
                "oldNames": [
                    "spacing-top::inner small"
                ]
            }
        }
    ]
}
```

The design property above is a replacement for the removed options **small** and **inner small** of the **Spacing-top**. The appropriate option will be selected, depending on the option that was previously selected. The value of **Spacing-top** will then be set to empty if that design property still exists.

## CSS Classes and CSS Variables{#class-variable}

### CSS Classes

When using CSS classes, you should keep a few things in mind:

* CSS classes are case insensitive, but it is highly recommended to use precise casing when using them in your *design-properties.json* file
* When specifying a CSS class for a design property (such as for a **Toggle** or for a **Dropdown** option), it is also possible to use multiple CSS classes
* When referring to a CSS class in *design-properties.json*, do not use `.` at the start of your class names
* A design property or specific option of a design property can also apply multiple CSS classes

In your apps theme, you can create CSS classes as such:

```css
.backgroundColorLightBlue {
    background-color: #87CEFA;
}

.backgroundColorLightGreen {
    background-color: #90EE90;
}
```

### CSS Variables

When using CSS variables, you should keep a few things in mind:

* CSS variables are case sensitive, so make sure to use the correct casing when referring to them in your *design-properties.json* file
* When referring to a CSS variable in *design-properties.json*, always include the `--` at the start of your CSS variable names
* CSS variables are not available for **native** documents
* Note you cannot use SASS variables (starting with `$`), but you can define a CSS variable based on your SASS variable (for example: `--brand-primary: {$brandPrimary};`)
* Only a single CSS variable can be applied to a single CSS property

In your theme, you can create CSS variables as such:

```css
:root {
    --color-light-blue: #87CEFA;
    --color-light-green: #90EE90;
}
```

It is recommended to scope them to `:root`, like in the example, as this would make the CSS variables available for all widgets in your app.

### Using Both CSS Classes and CSS Variables

Your use case might require you to gradually update your design properties from using classes to using CSS variables, or back to CSS classes. In that case, you might not be able to update all your existing styling right away. 

In that situation, you can combine **Dropdown**, **Colorpicker**, **ToggleButtonGroup**, and **Spacing** options using classes with ones that use CSS variables, as long as each individual option only defines a CSS class *or* a CSS variable (**but not both**). Also ensure that your design property defines a `property` field with the name of the CSS property you are targeting.

```js
{
    "name": "Border radius",
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "property": "border-radius",
    "options": [
        {
            "name": "Small",
            "class": "borderRadiusSmall"
        },
        {
            "name": "Large",
            "variable": "--radius-large"
        }
    ]
}
```

When the **Small** option is selected, the `borderRadiusSmall` class will be applied to the widget. On the other hand, when **Large** is selected, the `--radius-large` variable will be assigned to the `border-radius` property of the widget.

## Read More

* [Native Styling](/refguide/mobile/designing-mobile-user-interfaces/native-styling/)
* [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide/)
* [How to Extend Design Properties](/howto/front-end/extend-design-properties/)

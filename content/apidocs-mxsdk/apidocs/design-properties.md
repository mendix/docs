---
title: "Design Properties"
category: "API Documentation"
description: "This guide outlines how design properties work and can help you create custom design properties."
tags: [ ]
---

## 1 Introduction

This guide outlines how design properties work and can help you create custom design properties. Many projects can simply use the Atlas UI theme and its included set of design properties to satisfy their styling needs. These included design properties are robust enough to serve a majority of use cases. But if you want to customize your styling more deeply, you will have to modify your design properties to fit your needs.

Design properties are a special set of settings shipped together with a Mendix theme module. Design properties are shared among all the Mendix apps which use a specific theme module. You can see which design properties are available for a widget either in the **Properties** pane or in the widget's settings dialog box under the **Appearance** tab. 

![Design properties from AtlasUI for a button widget](attachments/design-properties/design_properties_teaser.png)

## 2 Using Design Properties

While styling Mendix apps, users must often apply the same set of CSS or native styling classes to widgets on different pages again and again. This work is time consuming and vulnerable to human error as you edit text fields in order to apply classes to a widget.

Design properties can make this work easier and safer. By configuring your own custom design properties, a certain styling can be applied to a widget in a few clicks.

## 4 Design Property Types

There are two types of design properties: **Toggle** and **Dropdown**. By default design properties have no effect on widgets. Styling is only applied when a **Toggle** property is toggled on (switched on, set, put to Yes?) for a widget, or when one of the options is selected for a **Dropdown** property is selected.

A design property of type **Toggle** is a simple property which may be set (switched on?) for a widget. When this property is set, then configured classes applied to a widget automatically.

For example, a **Toggle** property may be **Full width** property for button widgets from Atlas UI. When this property is set for a button, then `btn-clock` CSS class is applied. No additional classes applied when property is not set.

A design property of type **Dropdown** defines set of options with separate classes per option. When one of the options is selected, respective classes are applied to a widget.

For example, a **Dropdown** property may be **Align self** property from Atlas UI. It contains two options, **Left** and **Right**. When one of the options is selected then CSS class `pull-left` or `pull-right` is applied respectively. 

## 5 Design Properties Definitions

Design properties are defined as a part of the theme settings inside of your app's **theme** folder. Since styling works differently for web and native platforms design properties for them are also different and defined in two separate files. For web it is *settings.json*. For native it is *settings-native.json*.

Since both *settings.json* and *settings-native.json* are JSON files hence design properties are also defined in JSON format as a part of those files.

A simplified example of a theme settings file with design properties is as follows:

```js
{
    "pageTemplates": "WebModeler",
    "cssFiles": [ ... ],
    "designProperties": {
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
}
```

### 5.1 Design Property Structure

In the example above design properties are defined as a JSON object under key `designProperties` inside of a theme settings file. That object's structure is as follows:

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

As you can see from the structure above, design properties are defined as an JSON object where keys (`DivContainer`, `Button`, etc) are widget types, and values are JSON arrays containing set of design properties applicable for that widget type. See more about [Widget Types](#widget-types). Every design property from the array is also represented as a JSON object. As described earlier there are two types of design properties: **Toggle** and **Dropdown**. Both types share common fields as `name`, `type` and `description`. Those names determine how design property appears to a user in Studio and Studio Pro. Lets look at examples of design properties of both types and check how they look in Studios.

Here is an example of a **Toggle** design property:

```js
{
    "name": "My Toggle Property",
    "type": "Toggle",
    "description": "Description of My Toggle Design Property",
    "class": "hereMyClass"
}
```

This is how the **Toggle** design property appears:

![Toggle property in Studio Pro](attachments/design-properties/design_property_toggle_studio_pro.png)

Here is an example of a **Dropdown** design property:

```js
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
```

This is how the **Dropdown** design property appears:

![Dropdown property in Studio Pro](attachments/design-properties/design_property_dropdown_studio_pro.png)

![Dropdown property options in Studio Pro](attachments/design-properties/design_property_dropdown_open_studio_pro.png)

#### 5.1.1 Common Fields

As you see from examples above, the fields `name` and `description` define the UI, the name of a form control in Studio Pro, and the description under it. They are arbitrary string values naming and describing a design property. Field `type`, on the other hand, defines the type of a property and can only take one of the two string values: `Toggle` or `Dropdown`.

{{% alert type="warning" %}}
Name your design property and its options carefully. Those names cannot be changed easily when there are projects already using them. If you want to rename a design property which is already being used in a project, see the [Renaming Design Properties](#oldNames) section below.
{{% /alert %}}

#### 5.1.2 Toggle Specific Fields

When a type of design property is **Toggle** it should contain a `class` field on the top level of its property definition. This field defines an arbitrary class name to be applied if the option is toggled on for a widget. In the example above, the class to be applied is `hereMyClass`.

#### 5.1.3 Dropdown Specific Fields

When a type of design property is **Dropdown** it should contain an `options` field which is an array of possible options for the design property. Every option must be an object with `name` and `class` fields. In the example above there are two options named **Styling option 1** and **Styling option 2**. They have `stylingClassOne` and `stylingClassTwo` classes respectively.

## 6 Widget Types

When defining design properties in the theme settings you must specify widget type to which widget this property applies, as some of the design properties may be useful only for some widgets.

{{% alert type="info" %}}
Having a property that applies a table appearance style like **Stripped**, **Bordered**, or **Lined** only makes sense for widgets that contain tables, for example a data grid widget.
{{% /alert %}}

Widget types are types defined in the [Model SDK](https://apidocs.mendix.com/modelsdk/latest/modules/pages.html) documentation. Every type which is a direct or an indirect subtype of type [`Widget`](https://apidocs.mendix.com/modelsdk/latest/classes/pages.widget.html) can be used to attach design properties to. If a property is defined on a widget, then every subtype of this widget will have that property. For example if a property is defined on a `Widget` type, which is it the highest type in the hierarchy, then every widget will have this design property available.


### 6.1 Widget Types for Pluggable Widgets

When creating design properties for [Pluggable Widgets](pluggable-widgets), their widget type is determined by [widget id](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets#widget-id).


## 7 Renaming Design Properties{#oldNames}

Sometimes you must rename design properties or their options which are already in use. As design properties are identified by names internally, renaming one may be a breaking change for projects that are already using those design properties. 

To prevent errors and offer users simple upgrade path, use an `oldNames` field. This field must be of type array and contain old names, a particular property, or an option that was known and used before. The order of old names in an `oldNames` list does not matter. 
For instance, if a property was renamed two times, the `oldNames` should contain both previous names.

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

As you can see the design property itself was renamed from **my Dropdown Propery** to **My Dropdown Property**. Also **Styling option two** was renamed twice from the old names **Stling option 2** and **Styling option 2**.

## 8 Read More

* [How to Style Your Mendix App](/howto/mobile/how-to-use-native-styling)
* [Native Styling Reference Guide](/refguide/native-styling-refguide)

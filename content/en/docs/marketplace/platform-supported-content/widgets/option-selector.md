---
title: "Option Selector"
url: /appstore/widgets/option-selector/
aliases:
    - /appstore/widgets/checkbox-radio-selector/
description: "Describes the configuration and usage of the Option Selector widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Option Selector](https://marketplace.mendix.com/link/component/245825) widget displays a list of options that users can select from, shown as a checkbox list or a radio button group. Use it when end-users need to choose values from a set of options, such as selecting or clearing items from an enumeration or an association.

{{% alert color="info" %}}
This widget was previously named *Check box / radio selector*. Existing pages that use the widget keep working without changes.
{{% /alert %}}

The widget displays a checkbox list for multiple selection and a radio button list for single selection. For a Boolean data source, you choose the render type yourself.

### Features

* Supports different data sources:
    * Context:
        * Association
        * Enumeration
        * Boolean
    * Database lists
    * Static values
* Supports custom content rendering
* Supports checkbox and radio button controls
* Supports read-only display as a control or as content only

{{% alert color="info" %}}
This widget does not support lazy loading or pagination. If you need to display many options, use the [Combo Box](/appstore/widgets/combobox/) widget instead.
{{% /alert %}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. The Option Selector properties consist of the following sections:

Properties:

* [General](#general)
* [Events](#events)
* [Accessibility](#accessibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

The following sections describe the available widget properties and how to configure the widget with them.

### General Tab {#general}

#### Data Source

Set the **Source** property (required) to configure the data source type for the widget. It supports the following values:

* [Context](#context)
* [Database](#database)
* [Static](#static)

##### Context {#context}

When you select **Context**, set the **Type** property (required) to the type of the context data:

* [Association](/refguide/association-source/) – the widget selects objects through a reference or reference set association
    * **Entity** – the association to set (required)
    * **Selectable objects** – the data source that provides the options
* [Enumeration](/refguide/enumerations/) – the widget sets an enumeration attribute
    * **Attribute** – the enumeration attribute to set (required)
* [Boolean](/refguide/boolean-expressions/) – the widget sets a Boolean attribute
    * **Attribute** – the Boolean attribute to set (required)

For associations, a reference allows a single selection and a reference set allows multiple selections.

##### Database List {#database}

Use the database source type to set the value of a string, integer, long, or enumeration attribute with options fetched from a list of objects.

* **Selectable objects** – the [database data source](/refguide/database-source/) that provides the options
* **Selection type** – determines how other [listen to widget](/refguide/listen-to-grid-source/) data sources perceive the data
    * **Single** – allows only one item to be selected from the options list (radio button list)
    * **Multi** – allows multiple items to be selected from the options list (checkbox list)
* **Value** (under **Store value**) – the attribute of the selectable objects that holds the value to store
* **Target attribute** (under **Store value**) – the attribute where the selected value is stored

##### Static Values {#static}

Use the static source type to set the value of an attribute with manually configured values.

* **Attribute** – the attribute to set (required). It can be a string, enumeration, integer, long, Boolean, date and time, or decimal attribute.
* **Values** – the list of options (required). Each option has the following properties:
    * **Value** – an expression that returns the value to set
    * **Custom content** – widgets to display instead of the caption
    * **Caption** – the text to display for the option

#### Caption

For the **Association** and **Database** sources, the **Caption** section configures the text displayed for each option:

* **Caption type** – determines how the caption is defined:
    * **Attribute** – uses a string attribute of the selectable objects
    * **Expression** – uses an expression that returns a string
* **Caption** – the attribute or expression that provides the caption (required)

#### General

The **General** section configures general behavior and captions for the widget:

* **No option text** – the text displayed when no options are available. The default is "No options available".
* **Custom content** – determines whether the widget displays custom widgets instead of text for each option (not available for **Static** sources, which configure custom content per value):
    * **Yes** – displays the widgets that you place in the **Custom content** dropzone for each option
    * **No** – displays the caption of each option
* **Render type** – determines the type of control that the widget displays. The options are **Checkbox** and **Radio button**.
* **Group name** – an expression that returns the name for the group of associated inputs (optional)

#### Label

The **Label** section configures the label for the widget. For more information, see [Label Section](/refguide/common-widget-properties/#label) in *Properties Common in the Page Editor*.

#### Conditional Visibility {#visibility}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

#### Editability {#editability}

The **Editability** section configures when users can change the selection. For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

The following additional properties are available:

* **Editable** – determines when the widget is editable:
    * **Default** – the widget is editable unless the context is read-only
    * **Never** – the widget is never editable
    * **Conditionally** – the widget is editable when the **Condition** expression returns `true`
* **Condition** – the Boolean expression that determines editability when **Editable** is set to **Conditionally**
* **Read-only style** – determines how the widget appears in read-only mode:
    * **Control** – displays the checkboxes or radio buttons as disabled controls
    * **Content only** – displays only the selected items as text

### Events Tab {#events}

The **Events** tab contains the following property:

* **On change action** – the action that runs when the selection changes

### Accessibility Tab {#accessibility}

The **Accessibility** tab configures settings for the accessibility features of the widget:

* **Aria required** – an expression that returns whether the widget is required, for assistive technologies
* **Aria label** – a text template that provides an accessible label for the widget

### Common Tab {#common}

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}}

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

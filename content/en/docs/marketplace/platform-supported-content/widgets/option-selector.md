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

The widget displays a checkbox list for multiple selection and a radio button list for single selection. For a Boolean data source, you choose the render type yourself.

{{% alert color="info" %}}
This widget was previously named *Check box / radio selector*. Existing pages that use the widget keep working without changes.
{{% /alert %}}

### Features

Option selector does the following:

* Supports different data sources:
    * Context:
        * Association
        * Enumeration
        * Boolean
    * Database lists
    * Static values
* Supports custom content rendering
* Supports checkbox and radio button controls
* Supports a read-only display as a control or as content only

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
    * **Entity** (required) – This selects the association.
    * **Selectable objects** – This is the data source that provides the options.
* [Enumeration](/refguide/enumerations/) – This allows the widget to set an enumeration attribute.
    * **Attribute** (required) – The enumeration attribute that is set.
* [Boolean](/refguide/boolean-expressions/) – The widget sets a Boolean attribute.
    * **Attribute** (required) – The Boolean attribute that is set.

For associations, a reference allows a single selection and a reference set allows multiple selections.

##### Database List {#database}

Use the database source type to set the value of a string, integer, long, or enumeration attribute with options fetched from a list of objects.

* **Selectable objects** – The [database data source](/refguide/database-source/) that provides the options.
* **Selection type** – This determines how other [listen to widget](/refguide/listen-to-grid-source/) data sources perceive the data.
    * **Single** – This allows only one item to be selected from the options list (radio button list).
    * **Multi** – This allows multiple items to be selected from the options list (checkbox list).
* **Value** (under **Store value**) – The attribute of the selectable objects that holds the value to store.
* **Target attribute** (under **Store value**) – The attribute where the selected value is stored.

##### Static Values {#static}

Use the static source type to set the value of an attribute with manually configured values.

* **Attribute** (required) – The attribute to set. It can be a string, enumeration, integer, long, Boolean, date and time, or decimal attribute.
* **Values** (required)– The list of options. Each option has the following properties:
    * **Value** – An expression that returns the value to set.
    * **Custom content** – Sets widgets to display instead of the caption.
    * **Caption** – The text to display for the option.

#### Caption

For the **Association** and **Database** sources, the **Caption** section configures the text displayed for each option:

* **Caption type** – Determines how the caption is defined:
    * **Attribute** – Uses a string attribute of the selectable objects.
    * **Expression** – Uses an expression that returns a string.
* **Caption** (required) – The attribute or expression that provides the caption.

#### General

The **General** section configures general behavior and captions for the widget:

* **No option text** – The text displayed when no options are available. The default is **No options available**.
* **Custom content** – This determines whether the widget displays custom widgets instead of text for each option (not available for **Static** sources, which configure custom content per value):
    * **Yes** – This displays the widgets that you place in the **Custom content** dropzone for each option.
    * **No** – This displays the caption of each option.
* **Render type** – This determines the type of control that the widget displays. The options are **Checkbox** and **Radio button**.
* **Group name** (optional) – This is an expression that returns the name for the group of associated inputs. 

#### Label

The **Label** section configures the label for the widget. For more information, see [Label Section](/refguide/common-widget-properties/#label) in *Properties Common in the Page Editor*.

#### Conditional Visibility {#visibility}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

#### Editability {#editability}

The **Editability** section configures when users can change the selection. For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

The following additional properties are available:

* **Editable** – This determines when the widget is editable:
    * **Default** – The widget is editable unless the context is read-only.
    * **Never** – The widget is never editable.
    * **Conditionally** – The widget is editable when the **Condition** expression returns `true`.
* **Condition** – The Boolean expression that determines editability when **Editable** is set to **Conditionally**.
* **Read-only style** – This determines how the widget appears in read-only mode:
    * **Control** – This displays the checkboxes or radio buttons as disabled controls,
    * **Content only** – This displays only the selected items as text.

### Events Tab {#events}

The **Events** tab contains the following property:

* **On change action** – the action that runs when the selection changes.

### Accessibility Tab {#accessibility}

The **Accessibility** tab configures settings for the accessibility features of the widget:

* **Aria required** – An expression that returns whether the widget is required for assistive technologies or not.
* **Aria label** – A text template that provides an accessible label for the widget.

### Common Tab {#common}

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}}

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Limitations

This widget does not support lazy loading or pagination. If you need to display many options, use the [Combo Box](/appstore/widgets/combobox/) widget instead.
---
title: "Text Box"
url: /refguide/text-box/
description: "A text box is used to display and, optionally, allow the end-user to edit the value of an attribute from an object in a textual form."
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A text box is used to display and, optionally, allow the end-user to edit the value of an attribute from an object in a textual form. It can be used to display attributes of the following [data types](/refguide/data-types/):

* Autonumber
* Decimal
* Hashed string
* Integer
* Long
* String

A text box must be placed in a [data container](/refguide/data-widgets/) and displays an attribute of the object (or objects) retrieved by that container. The name of the attribute to be displayed is shown inside the text box, between square brackets, and colored blue.

For example, the following text box allows the end-user to see, and set, the **Name** of a customer.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/text-box/text-box.png" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Text box properties consist of the following sections:

Properties:

* [General](#general)
* [Data Source](#data-source)
* [Label](#label)
* [Editability](#editability)
* [Visibility](#visibility)
* [Validation](#validation)
* [Accessibility](#accessibility)
* [Common](#common)
* [Events](#events)
* [On Change Behavior](#on-change-behavior)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

Miscellaneous:

* [Formatting](#formatting)

## Properties

### General Section{#general}

#### Show as Password

Attributes of the data type `String` or `Hashed string` can have their value hidden. This can be used for passwords, for example, to prevent bystanders from seeing them.

| Value | Description |
| --- | --- |
| False *(default)*| Normal text box |
| True | Typed characters are not shown to the end-user, instead an asterisk is shown for every typed character |

#### Input Mask

{{% alert color="info" %}}Input masks are not supported on native mobile pages.
Input masks are designed for string data types. Be cautious when using them with numeric or hashed string data types.
{{% /alert %}}

The input mask limits what the end-user can enter in the text box, following the rules below:

| Character | Allows Input of |
| ----- | ----- |
| `9` | any digit |
| `Z` | any letter |
| `U` | an upper-case letter |
| `L` | a lower-case letter |
| `*` | a letter *or* a digit |

Other characters will be taken literally.

For example, the input mask `99-LLL-9999` matches `24-apr-2008`.

#### Maximum Length

This property specifies the maximum number of characters that can be typed in this text box.

| Value | Description |
| --- | --- |
| Attribute length *(default)* | The maximum number of characters is the same as the maximum length of the connected attribute |
| Unlimited | The maximum number of characters is unlimited |
| Custom | The maximum number of characters is specified in the widget properties |

#### Placeholder Text

The placeholder text is shown when no text has been entered yet, or when a displayed attribute is empty.

It can be used, for example, to give a hint to the end-user what kind of text should be entered.

#### AutoFocus {#autofocus}

If `true`, the text area will be rendered focused with the device keyboard opened.

{{% alert color="info" %}}
This option is only available in native pages.
{{% /alert %}}

<a id="label-properties"></a>

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide/data-source-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide/editability-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### Validation Section{#validation}

{{% snippet file="/static/_includes/refguide/widget-validation-link.md" %}}

### Accessibility Section{#accessibility}

#### Aria Required

In a textbox widget, when **Aria required** is set to **Yes** then assistive technologies will read out the field that is required. When set to **No** then assistive technologies will not read the field out.

#### Autocomplete 

The autocomplete property specifies if a text box should have autocomplete enabled. The autocomplete attribute also improves the browser's ability to pre-populate fields with user-preferred values. For more information on how this helps you comply with accessibility guidelines, see the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/#input-purposes)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Events Section{#events}

#### On Change Event{#on-change}

The on change event property specifies an action that will be executed when the value has been changed and gets submitted. A value will be submitted when pressing the <kbd>Enter</kbd> key or leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### On Enter Event

The on enter event property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### On Leave Event

The on leave event property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### On Enter Key Press Event

The on enter key press event property specifies an action that will be executed when the focus is inside the widget and the <kbd>Enter</kbd> key is pressed. In a web application the widget will keep focus after the action gets executed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

### On Change Behavior {#on-change-behavior}

The On Change Behavior property lets users select how **on change** is handled via the following options Studio Pro: 

* When user leaves input field (Default)
* While user is entering data

#### When user leaves input field (Default)

This option will work as in previous versions of Studio Pro. Textbox will apply changes when a value is not the same as previously saved value in the database and one of the following conditions is met:

* On enter key pressed: This will trigger on change and on enter key press events
* Blurred: This will trigger on change and on leave events

This means that there is no way for users to trigger an on change event while typing. That use case requires the second option: **While user is entering data**.

##### While user is entering data

This option allows makes it so users trigger an on change event while they are typing. Text Box will save changes when the value is not the same as the previously saved value in the database and if the last change made took place after the configured **Apply after (ms)** length of time.

With **While user is entering data**, users now can adjust one more property called **Apply after (ms)** (described above). This will reduce the amount of the calls made for an on change event, thus improving app performance.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

## Styling

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section{#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Miscellaneous

### Formatting Section{#formatting}

The formatting section applies only to the way that numeric attributes are displayed. These are attributes of the following data types:

* Decimal
* Integer
* Long

{{% snippet file="/static/_includes/refguide/numeric-formatting-link.md" %}}

## Read More

* [Data Types](/refguide/data-types/)  
* [Data View](/refguide/data-view/)
* [Attributes](/refguide/attributes/)

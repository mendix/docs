---
title: "Text Area"
url: /refguide10/text-area/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **text area** is used to display and, optionally, allow the end-user to edit the value of an attribute or variable of [data type](/refguide10/data-types/) *String*. It differs from a [text box](/refguide10/text-box/) In that the value can be displayed over several lines.

A text area must be placed within a data context to display or edit the intended value:

* A [data container](/refguide10/data-widgets/) widget containing an object
* A snippet containing one or more [parameters](/refguide10/page-properties/#parameters)
* A page or a snippet containing one or more [variables](/refguide10/page-properties/#variables)

The name of the configured value is shown inside the text area widget, between square brackets, and colored blue.

For example, the following text area allows the end-user to see, and set, the **Notes** about a contact.

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/text-area/text-area.png" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Text area properties consist of the following sections:

Properties:

* [General](#general)
* [Data source](#data-source)
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

## Properties

### General Section{#general}

#### Grow Automatically

{{% alert color="info" %}}The grow automatically property does not impact the behavior of native mobile pages. On iOS, the text area will always grow automatically
{{% /alert %}}

This property defines whether the text area grows automatically depending on the amount of text in it.

Default: *No*

#### Number of Lines

**Number of lines** determines the size of the text area, based on the height of the lines. If the text in the text area contains more lines, a scroll bar will enable the end-user to see it all. This property is only used if **Grow automatically** is set to *No*.

Default: *5*

#### Counter Message

{{% alert color="info" %}}Counter message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when typing in the text area. This text has two [parameters](/refguide10/text/#parameters). The first parameter contains the number of characters already typed and the second parameter contains the maximum number of characters.

For example, if you use the counter message `You've used {1} characters of the {2} characters that are allowed.` for your text area, the end-user will see this message displayed below the text area widget:

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/text-area/counter-message.png" class="no-border" >}}

#### Text Too Long Message

{{% alert color="info" %}}Text too long message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when the number of characters is higher than the maximum allowed number of characters.

This type of message can also occur when a loaded or stored value exceeds the character limit

#### Maximum Length

This property specifies the maximum number of characters that can be typed in this text area.

| Value                                       | Description                                                                                   |
|---------------------------------------------|-----------------------------------------------------------------------------------------------|
| Attribute length *(default for attributes)* | The maximum number of characters is the same as the maximum length of the connected attribute |
| Unlimited *(default for variables)*         | The maximum number of characters is unlimited                                                 |
| Custom                                      | The maximum number of characters is specified in the widget properties                        |

{{% alert color="info" %}}
Attribute length option is not available when the widget is configured with a variable.
{{% /alert %}}

#### Placeholder Text

The placeholder text is shown when no text has been entered yet, or when a displayed attribute or variable is empty.

It can be used, for example, to give a hint to the end-user what kind of text should be entered.

#### Autocomplete

The autocomplete property specifies if a text area should have autocomplete enabled. The autocomplete attribute also improves mobile devices' ability to pre-populate fields.

{{% alert color="info" %}}This option is only available in native pages.{{% /alert %}}
{{% alert color="info" %}}In Android when autocomplete is turned off it will remove support for new lines.{{% /alert %}}

#### AutoFocus {#autofocus}

If `true`, the text area will be rendered focused with the device keyboard opened.

{{% alert color="info" %}}
This option is only available in native pages.
{{% /alert %}}

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide10/data-source-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide10/label-section-link.md" %}}

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide10/editability-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide10/visibility-section-link.md" %}}

### Validation Section{#validation}

{{% snippet file="/static/_includes/refguide10/widget-validation-link.md" %}}

### Accessibility Section{#accessibility}

#### Aria Required

In a text area widget, when **Aria required** is set to **Yes** then assistive technologies will read out the field that is required. When set to **No** then assistive technologies will not read the field out.

### Common Section{#common}

{{% snippet file="/static/_includes/refguide10/common-section-link.md" %}}

### Events Section{#events}

#### On Change{#on-change}

The on change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget after the value has been changed.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

#### On Enter

The on enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

#### On Leave

The on leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [on change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

### On Change Behavior {#on-change-behavior}

The On Change Behavior property lets users select how **on change** is handled via the following options Studio Pro: 

* When user leaves input field (Default)
* While user is entering data

#### When user leaves input field (Default)

This option will work as in previous versions of Studio Pro. Text area will apply changes when a value is not the same as previously saved value in the database and one of the following conditions is met:

* On enter key pressed: This will trigger on change and on enter key press events
* Blurred: This will trigger on change and on leave events

This means that there is no way for users to trigger an on change event while typing. That use case requires the second option: **While user is entering data**.

#### While user is entering data

This option allows makes it so users trigger an on change event while they are typing. Text area will save changes when the value is not the same as the previously saved value in the database and if the last change made took place after the configured **Apply after (ms)** length of time.

With **While user is entering data**, users now can adjust one more property called **Apply after (ms)** (described above). This will reduce the amount of the calls made for an on change event, thus improving app performance.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

## Styling

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide10/design-section-link.md" %}} 

### Common Section{#common-styling}

{{% snippet file="/static/_includes/refguide10/common-section-link.md" %}}

## Read More

* [Data view](/refguide10/data-view/)
* [Attributes](/refguide10/attributes/)
* [Variables](/refguide10/page-properties/#variables)

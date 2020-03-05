---
title: "Text Area"
parent: "input-widgets"
menu_order: 20
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **text area** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](data-types) *String*. It differs from a [text box](text-box) In that the value can be displayed over several lines.

A text area must be placed in a [data widget](data-widgets) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the text area, between square brackets, and colored blue.

For example, the following text area allows the end-user to see, and set, the **Notes** about a contact.

![](attachments/text-area/text-area.png)

## 2 Properties

An example of text area properties is represented in the image below:

{{% image_container width="300" %}}![](attachments/text-area/text-area-properties.png)
{{% /image_container %}}

Text area properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [General](#general)
* [Label](#label)
* [Validation](#validation)
* [Visibility](#visibility)

### 2.1 Common Section{#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="refguide/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="refguide/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="refguide/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="refguide/events-section-link.md" %}}

#### 2.5.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="refguide/events-section-link.md" %}}

#### 2.5.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="refguide/events-section-link.md" %}}

### 2.6 General Section{#general}

#### 2.6.1 Grow Automatically

{{% alert type="info" %}}The grow automatically property does not impact the behavior of native mobile pages. On iOS, the text area will always grow automatically
{{% /alert %}}

This property defines whether the text area grows automatically depending on the amount of text in it.

Default: *No*

#### 2.6.2 Number of Lines

**Number of lines** determines the size of the text area, based on the height of the lines. If the text in the text area contains more lines, a scrollbar will enable the end-user to see it all. This property is only used if **Grow automatically** is set to *No*.

Default: *5*

#### 2.6.3 Counter Message

{{% alert type="info" %}}Counter message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when typing in the text area. This text has two [parameters](text#parameters). The first parameter contains the number of characters already typed and the second parameter contains the maximum number of characters.

For example, if you use the counter message `You've used {1} characters of the {2} characters that are allowed.` for your text area, the end-user will see this message displayed below the text area widget:

![](attachments/text-area/counter-message.png)

#### 2.6.4 Text Too Long Message

{{% alert type="info" %}}Text too long message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when the number of typed characters is higher than the maximum allowed number of characters.

#### 2.6.5 Maximum Length

This property specifies the maximum number of characters that can be typed in this text area.

| Value | Description |
| --- | --- |
| Attribute length *(default)* | The maximum number of characters is the same as the maximum length of the connected attribute |
| Unlimited | The maximum number of characters is unlimited |
| Custom | The maximum number of characters is specified in the widget properties |

#### 2.6.6 Placeholder Text

The placeholder text is shown when no text has been entered yet, or when a displayed attribute is empty.

It can be used, for example, to give a hint to the end-user what kind of text should be entered.

### 2.8 Label Section{#label}

{{% snippet file="refguide/label-section-link.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="refguide/widget-validation-link.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

*   [Data view](data-view)
*   [Attributes](attributes)

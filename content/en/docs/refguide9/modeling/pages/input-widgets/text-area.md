---
title: "Text Area"
url: /refguide9/text-area/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **text area** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide9/data-types/) *String*. It differs from a [text box](/refguide9/text-box/) In that the value can be displayed over several lines.

A text area must be placed in a [data container](/refguide9/data-widgets/) and displays an attribute of the object(s) retrieved by that container. The name of the attribute to be displayed is shown inside the text area, between square brackets, and colored blue.

For example, the following text area allows the end-user to see, and set, the **Notes** about a contact.

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/text-area/text-area.png" class="no-border" >}}

## 2 Properties

An example of text area properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/text-area/text-area-properties.png"   width="250"  class="no-border" >}}

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

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide9/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide9/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget after the value has been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### 2.5.2 On Change Behavior

The on change behavior property lets users select how **on change** is handled in Studio Pro via the following options: 

* **When user leaves input field (Default)**
* **While user is entering data**

##### 2.5.2.1 When User Leaves Input Field (Default)

Text area will apply changes when a value is different than a previously saved value in the database and the following condition is met:

* Blurred: this will trigger on change and on leave events

This means that there is no way for users to trigger an on change event while typing. To address that use case, please use the second option: [While user is entering data](#user-enters-data).

##### 2.5.2.2 While User is Entering Data {#user-enters-data}

This option allows users to trigger an on change event while they are typing. 

Text area will save changes if both these conditions are met:

* The value is different than the previously saved value in the database 
* The last change occurred after the configured **Apply after (ms)** length of time

With **While user is entering data**, users can adjust one more property called **Apply after (ms)** (described above). This will reduce the amount of the calls made for an on change event, thus improving app performance.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### 2.5.3 On Enter

The on enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### 2.5.4 On Leave

The on leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [on change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

### 2.6 General Section{#general}

#### 2.6.1 Grow Automatically

{{% alert color="info" %}}The grow automatically property does not impact the behavior of native mobile pages. On iOS, the text area will always grow automatically
{{% /alert %}}

This property defines whether the text area grows automatically depending on the amount of text in it.

Default: *No*

#### 2.6.2 Number of Lines

**Number of lines** determines the size of the text area, based on the height of the lines. If the text in the text area contains more lines, a scroll bar will enable the end-user to see it all. This property is only used if **Grow automatically** is set to *No*.

Default: *5*

#### 2.6.3 Counter Message

{{% alert color="info" %}}Counter message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when typing in the text area. This text has two [parameters](/refguide9/text/#parameters). The first parameter contains the number of characters already typed and the second parameter contains the maximum number of characters.

For example, if you use the counter message `You've used {1} characters of the {2} characters that are allowed.` for your text area, the end-user will see this message displayed below the text area widget:

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/text-area/counter-message.png" class="no-border" >}}

#### 2.6.4 Text Too Long Message

{{% alert color="info" %}}Text too long message is not supported on native mobile pages.{{% /alert %}}

This is the text displayed when the number of characters is higher than the maximum allowed number of characters.

This type of message can also occur when a loaded or stored value exceeds the character limit

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

#### 2.6.7 Autocomplete

The autocomplete property specifies if a text area should have autocomplete enabled. The autocomplete attribute also improves mobile devices' ability to pre-populate fields.

{{% alert color="info" %}}This option is only available in native pages.{{% /alert %}}
{{% alert color="info" %}}In Android when autocomplete is turned off it will remove support for new lines.{{% /alert %}}

#### 2.6.8 AutoFocus {#autofocus}

If `true`, the text area will be rendered focused with the device keyboard opened.

{{% alert color="info" %}}
This option is only available in native pages.
{{% /alert %}}

### 2.7 Label Section{#label}

{{% snippet file="/static/_includes/refguide9/label-section-link.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="/static/_includes/refguide9/widget-validation-link.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## 3 Read More

* [Data view](/refguide9/data-view/)
* [Attributes](/refguide9/attributes/)

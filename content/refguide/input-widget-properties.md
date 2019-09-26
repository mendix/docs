---
title: "Input Widget Properties"
parent: "input-widgets"
menu_order: 99
tags: ["studio pro", "input widget", "common properties"]
draft: true
#need to comment out draft:true for local build!
---

## 1 Introduction

All widgets have properties in common. You can find descriptions of these properties in [Properties Common for Widgets](https://docs.mendix.com/refguide/common-widget-properties).

Many input widgets also have properties in common. These are described here.

## 2 General Tab

## 3 Selectable Objects Tab

{{% todo %}}

[
    NEED TO REVIEW ALL THESE BITS FROM text-box AND SEE WHAT CAN GO HERE
    FROM HERE NO EDITING DONE!
]

{{% /todo %}}

## General Properties

{{% snippet file="refguide/numeric-formatting.md" %}}

### Show as Password (Only for Attributes of the String or HashString Type)

| Value | Description |
| --- | --- |
| False | Normal text box |
| True | Typed characters are not shown to the end-user. Instead an asterisk is shown for every typed character. |

_Default value:_ False

### Input Mask (Only in Web Forms)

The input mask limits what the user can enter in the text box. A '9' means any digit, 'Z' means any letter, 'U' an upper-case letter, 'L' a lower-case letter and '*' a letter or a digit. Other characters will be taken literally. For example, the input mask 99-LLL-9999 matches 24-apr-2008.

{{% alert type="info" %}}Not supported on native mobile pages.{{% /alert %}}

### Maximum Length

This property indicates the maximum number of characters that can be typed in this text box.

| Value | Description |
| --- | --- |
| Attribute length | The maximum number of characters is the same as the maximum length of the connected attribute. |
| Unlimited | The maximum number of characters is unlimited. |
| Custom | The maximum number of characters is set by the user. |

_Default value: Attribute length_

### Placeholder Text

The placeholder text is shown when no text has been entered yet. It can be used to give a hint to the user what kind of text should be entered.

## Validation Properties

{{% snippet file="refguide/widget-validation.md" %}}

## Data Source Properties

{{% snippet file="refguide/attribute-path-property.md" %}}

{{% snippet file="refguide/label-property.md" %}}

## Editability Properties

{{% snippet file="refguide/editable-property.md" %}}

{{% snippet file="refguide/read-only-style.md" %}}

{{% snippet file="refguide/condition-property.md" %}}

## Visibility Properties

{{% snippet file="refguide/visibility-property.md" %}}

{{% snippet file="refguide/visibility-property-with-module-roles-simple.md" %}}

## Events Properties

{{% snippet file="refguide/on-change-event.md" %}}

{{% snippet file="refguide/on-enter-event.md" %}}

{{% snippet file="refguide/on-leave-event.md" %}}

## Common Properties

{{% snippet file="refguide/name-property.md" %}}

{{% snippet file="refguide/class-property.md" %}}

{{% snippet file="refguide/style-property.md" %}}

{{% snippet file="refguide/tab-index-property.md" %}}

## Read More

*   [Data view](data-view)
*   [Attributes](attributes)

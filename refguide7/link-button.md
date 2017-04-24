---
title: "Link button"
space: "Mendix 7 Reference Guide"
parent: "button-widgets"
---


Pressing a link button can trigger a variety of actions, some of which are specific to mobile devices.

## Button properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Render+Mode+Property.md %}

{% snippet Button+Style+Property.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## General properties

### Link type

This specifies the type of action triggered when pressing the button. The following table shows the options.

| Value | Description |
| --- | --- |
| Web | Navigate to a web site URL. |
| Email | Compose an e-mail. |
| Call | Start a phone call. |
| Text | Send a text message. |

_Default value:_ Web

### Address

The address property is used differently depending on the chosen link type. It is used either as a URL (Web), as an email address (Email), or as a phone number (Call/Text).

The address can be set to either a literal value, or an attribute value.

### Address value

If a literal value is chosen for the address, you can enter the value here.

### Address attribute

If an attribute is chosen for the address, you can select the attribute here. An address attribute specifies a path to an attribute. The path starts at the entity of the data view in which the link button is contained.

## Visibility properties

{% snippet Visibility+Property.md %}

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}

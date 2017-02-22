---
title: "Common Widget Properties"
space: "Mendix 7 Reference Guide"
parent: "common-widgets"
---
# Common Widget Properties



These are properties that are shared by many widgets. For a complete list of properties, take a look at the relevant widget.

## Behavior Properties

### Required (only in web forms)

This property indicates whether this widget must be filled in by the end user or not. If set to true, this widget can not be left empty and a message will be shown if the end user presses the 'Save' button.

_Default value:_ False

### Required message (only in web forms)

This property determines the message that is shown to the end user if the widget is empty and the 'Required' property is set to true. This is a translable text. See [Translatable Texts](translatable-texts).

<div class="alert alert-info">{% markdown %}

For example, if an address field is required, the required message for the text box of the address could be something like "The address is required."

{% endmarkdown %}</div>

## Common Properties

### Tab index (only in web forms)

The tab index influences the order in which the end user navigates through the form using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the form.

_Default value:_ 0

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## Data Source Properties

{% snippet Attribute+Path+Property.md %}

## Visibility Properties

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

## Editability Properties

{% snippet Editable+Property.md %}

### Condition

A widget can be made editable based on the value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value, you specify whether the widget is editable. Upon entering the form and upon changing the condition attribute the edit state of the widget will be updated.

Example: you don't have to ask for the marriage date if the end user indicates that he or she is not married.

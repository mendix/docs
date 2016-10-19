---
title: "Set Value"
---
## Description
Set the text value of a Textbox, Textarea, Dateinput, Reference Selector or Enum Selector.

## Usage
Pass the name of the widget and the value you want to set.
Optional you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | yes | The name of the widget
Value | String | yes | The value you want to set
Search Context | WebElement | no | Limit the search to the given WebElement

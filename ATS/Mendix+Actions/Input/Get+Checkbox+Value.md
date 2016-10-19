---
title: "Get Checkbox Value"
---
## Description
Returns true if the Checkbox is checked otherwise false.

## Usage
Pass the name of the checkbox you want to get the value from.
Optional you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no | Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
---- | :---------: | ---------------
Value | Boolean | Value of the checkbox. True if checked, otherwise false.

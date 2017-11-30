---
title: "Dropdown has Option"
parent: "input"
---

## Description

Returns true if the value is available in the dropdown otherwise false.

## Supported widgets

 + Dropdown
 + ReferenceSelector
 + SearchInput Dropdown

## Usage

Pass the name of the widget you want to get the value from.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | String | yes | The value you want to check
Search Context | WebElement | no | Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Has Option | Boolean | True if option with specified value is available in dropdown otherwise false.

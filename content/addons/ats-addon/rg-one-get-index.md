---
title: "Get Index"
parent: "rg-one-input"
---

## 1 Description

Gets the index of the selected value in a drop-down, e.g. an EnumSelect or ReferenceSelector.

## 2 Supported Widgets

* Dropdown
* ReferenceSelector
* SearchInput Dropdown

## 3 Usage

Pass the name of the widget you want to get the index for the currently selected value from.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no | Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Index | Integer | The index of the selected option. Starts with 0 for the first option.

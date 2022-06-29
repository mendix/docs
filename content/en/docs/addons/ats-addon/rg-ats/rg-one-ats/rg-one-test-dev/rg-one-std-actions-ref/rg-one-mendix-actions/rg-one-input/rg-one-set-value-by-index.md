---
title: "Set Value (by Index)"
url: /addons/ats-addon/rg-one-set-value-by-index/
---

## 1 Description

Sets the value of a drop-down by index, for example, EnumSelect or ReferenceSelector

## 2 Supported widgets

* Dropdown
* ReferenceSelector
* SearchInput Dropdown

## 3 Usage

Pass the name of the widget and the index of the value you want to set.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Index | Integer | yes | The index of the desired value
Search Context | WebElement | no | Limit the search to the given WebElement

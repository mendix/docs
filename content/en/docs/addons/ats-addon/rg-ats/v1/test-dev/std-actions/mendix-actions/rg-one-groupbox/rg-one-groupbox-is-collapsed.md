---
title: "GroupBox is Collapsed"
url: /addons/ats-addon/rg-one-groupbox-is-collapsed/
---

## 1 Description

Returns the GroupBox Collapsed state: true if collapsed, otherwise false.

## 2 Supported widgets

* GroupBox

## 3 Usage

Pass the name of the GroupBox you want to get the collapsed state from as parameter for the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the groupbox you want to close
Search Context | WebElement | no | Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Is Collapsed | Boolean | Collapsed state of the GroupBox. True if it is collapsed, false if not.

---
title: "Set Checkbox Value"
url: /appstore/partner-solutions/ats/rg-one-set-checkbox-value/
---

## Description

Sets the value of a Checkbox.

## Supported widgets

* Checkbox

## Usage

Pass the name of the checkbox and the value you want to set.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | Boolean | yes | The value you want to set (un-/checked)
Search Context | WebElement | no | Limit the search to the given WebElement

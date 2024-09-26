---
title: "Get Validation Message"
url: /appstore/partner-solutions/ats/rg-one-get-validation-message/
---

## Description

Returns the validation message of a widget.

## Supported Widgets

* All standard widgets

## Usage

You have to pass the widget name to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no |Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Validation Message | String | The text of the validation message.

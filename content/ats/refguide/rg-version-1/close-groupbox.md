---
title: "Close GroupBox"
parent: "groupbox"
---

## Description

Closes a groupbox by its given name.

## Supported widgtes

 + GroupBox

## Usage

Pass the name of the GroupBox you want to close as parameter for the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the groupbox you want to close
Search Context | WebElement | no | Limit the search to the given WebElement

---
title: "Find/Assert Menu Item"
url: /appstore/partner-solutions/ats/rg-one-findassert-menu-item/
---

## Description

Finds/Asserts a visible Menu Item in a Navigation Tree, Menu Bar and Simple Menu Bar

## Supported Widgets

* NavigationTree
* MenuBar
* SimpleMenuBar

## Usage

Pass the name of the parent widget and the caption of the menu item you want to find.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the parent widget
Caption | String | yes | The caption of the menu item
Search Context | WebElement | no | Limit the search for the DataGrid row to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Menu Item | WebElement | Menu Item as a Web Element

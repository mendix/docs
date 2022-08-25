---
title: "Set ListView Search"
url: /addons/ats-addon/rg-one-set-listview-search/
---

## 1 Description

Sets the ListView Search Text.

## 2 Supported Widgets

* ListView

## 3 Usage

You have to pass the widget name and the search text to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Value | String | yes | The text to set as search text
Search Context | WebElement | no |Limit the search to the given WebElement

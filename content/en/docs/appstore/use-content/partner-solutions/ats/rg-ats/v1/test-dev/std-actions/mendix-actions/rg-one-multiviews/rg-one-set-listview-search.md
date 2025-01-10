---
title: "Set ListView Search"
url: /appstore/partner-solutions/ats/rg-one-set-listview-search/
---

## Description

Sets the ListView Search Text.

## Supported Widgets

* ListView

## Usage

You have to pass the widget name and the search text to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Value | String | yes | The text to set as search text
Search Context | WebElement | no |Limit the search to the given WebElement

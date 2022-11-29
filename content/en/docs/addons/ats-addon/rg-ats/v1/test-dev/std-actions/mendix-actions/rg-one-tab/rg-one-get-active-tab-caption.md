---
title: "Get Active Tab Caption"
url: /addons/ats-addon/rg-one-get-active-tab-caption/
---

## 1 Description

Returns the caption of the active tab page.

## 2 Supported Widgets

* TabContainer

## 3 Usage

Pass the tab widget name you want to get the tab caption from as parameter for the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the tab widget, if there are two or more tab widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the tab widget
Search Context | WebElement | no | Limit the search for the DataGrid row to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Active Tab Caption | String | Caption of the currently active tab.

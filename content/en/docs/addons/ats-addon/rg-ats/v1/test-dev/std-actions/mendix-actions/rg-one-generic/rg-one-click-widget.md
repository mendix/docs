---
title: "Click Widget"
url: /addons/ats-addon/rg-one-click-widget/
---

## 1 Description

Clicks on a Mendix widget (for example, Button, Link, Image) by its name.

## 2 Supported Widgets

All widgets.

## 3 Usage

Pass the name of the widget you want to click as parameter for the action.
Optionally you can specify if a doubleclick should be performed or not and you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget you want to click/doubleclick
Doubleclick | Boolean |no | Perform a doubleclick
Search Context | WebElement | no | Limit the search to the given WebElement

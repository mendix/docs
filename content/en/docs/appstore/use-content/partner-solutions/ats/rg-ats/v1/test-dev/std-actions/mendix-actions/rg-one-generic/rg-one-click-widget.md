---
title: "Click Widget"
url: /appstore/partner-solutions/ats/rg-one-click-widget/
---

## Description

Clicks on a Mendix widget (for example, Button, Link, Image) by its name.

## Supported Widgets

All widgets.

## Usage

Pass the name of the widget you want to click as parameter for the action.
Optionally you can specify if a doubleclick should be performed or not and you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget you want to click/doubleclick
Doubleclick | Boolean |no | Perform a doubleclick
Search Context | WebElement | no | Limit the search to the given WebElement

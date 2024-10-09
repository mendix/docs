---
title: "Click Widget Button"
url: /appstore/partner-solutions/ats/rg-one-click-widget-button/
---

## Description

Clicks a Refresh/Loadmore/ClearSearchField (ListView)/ Goto/Add (ReferenceSelector) button.

## Supported Widgets

* ListView
* ReferenceSelector

## Usage

Pass the name of the widget which contains the button. You can chose the button type from the provided global constants.

Optionally you can specify if a doubleclick should be performed or not and you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget which contains the button
Button | Enumeration | yes | The type of button
Search Context | WebElement | no | Limit the search to the given WebElement

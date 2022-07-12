---
title: "Click Widget Button"
url: /addons/ats-addon/rg-one-click-widget-button/
---

## 1 Description

Clicks a Refresh/Loadmore/ClearSearchField (ListView)/ Goto/Add (ReferenceSelector) button.

## 2 Supported Widgets

* ListView
* ReferenceSelector

## 3 Usage

Pass the name of the widget wich contains the button. You can chose the button type from the provided global constants.

Optionally you can specify if a doubleclick should be performed or not and you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget wich contains the button
Button | Enumeration | yes | The type of button
Search Context | WebElement | no | Limit the search to the given WebElement

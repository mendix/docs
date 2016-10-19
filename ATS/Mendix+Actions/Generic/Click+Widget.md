---
title: "Click Widget"
---
## Description
Click on a Mendix Widget (e.g. Button, Link, Image) by its name.

## Usage
Pass the name of the widget you want to click as parameter for the action.
Optional you can specify if a doubleclick should be performed or not and you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name. 

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | yes | The name of the widget you want to click/doubleclick
Doubleclick | Boolean |no | Perform a doubleclick
Search Context | WebElement | no | Limit the search to the given WebElement

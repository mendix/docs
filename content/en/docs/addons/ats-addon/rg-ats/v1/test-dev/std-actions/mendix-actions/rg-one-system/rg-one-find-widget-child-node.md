---
title: "Find Widget Child Node"
url: /addons/ats-addon/rg-one-find-widget-child-node/
---

## 1 Description

Finds a Node within a Mendix Widget.
Also matches the widget node itself.

## 2 Supported Widgets

* All widgets

## 3 Usage

Pass the name of the parent widget and the selector for the child node you want to find. You can use [CSS Selectors](/addons/ats-addon/rg-one-selectors/#css-selectors) and [JQuery Selectors](/addons/ats-addon/rg-one-selectors/#jquery-selectors) to define the path to the child node.
Optionally you can provide a WebElement as search context, to narrow down the search for the node, if there are two or more nodes with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the parent widget
Child Node Selector | String | yes | The selector for the child node, starting from the parent widget
Search Context | WebElement | no | Limit the search for the node to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Menu Item | WebElement | The child node of the Widget as a Web Element.

---
title: "Set File Manager"
url: /addons/ats-addon/rg-one-set-file-manager/
---

## 1 Description

Sets a file manager to the given file path to upload a file.

## 2 Supported Widgets

* FileManager

## 3 Usage

You have to pass the widget name and the file path to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
File Path | String | yes | The path to the file you want to upload
Search Context | WebElement | no |Limit the search to the given WebElement

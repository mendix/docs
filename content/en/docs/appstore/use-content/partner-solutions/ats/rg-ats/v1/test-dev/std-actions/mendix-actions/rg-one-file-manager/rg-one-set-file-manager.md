---
title: "Set File Manager"
url: /appstore/partner-solutions/ats/rg-one-set-file-manager/
---

## Description

Sets a file manager to the given file path to upload a file.

## Supported Widgets

* FileManager

## Usage

You have to pass the widget name and the file path to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
File Path | String | yes | The path to the file you want to upload
Search Context | WebElement | no |Limit the search to the given WebElement

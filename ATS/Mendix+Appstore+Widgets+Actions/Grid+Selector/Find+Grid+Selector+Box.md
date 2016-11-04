---
title: "Find Grid Selector Box"
---
## Description
Find checkbox/radiobutton by column and row caption

## Supported widgtes
 + Grid Selector

## Usage
Pass the name of the parent widget, the column caption and row caption.

## Input Parameters
Name | Datatype | Required | Description
---- | :--------: | :--------: | ---------------
Widget Name | String | yes | The name of the Grid Selector widget
Column Caption | String | yes | The column caption of the checkbox cell you want to find
Row Caption | String | yes | The row caption of the checkbox cell you want to find

## Return Value

Name | Datatype | Description
---- | :---------: | ---------------
Box | WebElement | The found checkbox/radiobutton.

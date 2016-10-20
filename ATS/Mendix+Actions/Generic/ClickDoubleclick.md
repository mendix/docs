---
title: "Click/Doubleclick"
---
## Description
Perform a Click or Doubleclick and wait for Mendix activities.

## Supported Widgets
 + All WebElements

## Usage
Pass the WebElement you want to click as parameter for the action. To get the WebElement, use an action like [Find/Assert Widget](FindAssert+Widget).
Optional you can specify if a doubleclick should be performed or not.

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Element | WebElement | yes | The WebElement you want to click/doubleclick
Doubleclick | Boolean |no | Perform a doubleclick

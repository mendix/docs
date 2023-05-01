---
title: "Click/Doubleclick"
url: /addons/ats-addon/rg-one-clickdoubleclick/
---

## 1 Description

Performs a Click or Doubleclick and waits for Mendix activities.

## 2 Supported Widgets

* All WebElements

## 3 Usage

Pass the WebElement you want to click as parameter for the action. To get the WebElement, use an action like [Find/Assert Widget](/addons/ats-addon/rg-one-findassert-widget/).
Optionally you can specify if a doubleclick should be performed or not.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Element | WebElement | yes | The WebElement you want to click/doubleclick
Doubleclick | Boolean |no | Perform a doubleclick

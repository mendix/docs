---
title: "Get Dialog Message Text"
parent: "dialog"
---

## Description

Returns the text from messages and confirmation dialogs

## Supported Widgets

 + ConfirmationDialog
 + DialogMessage

## Usage

You have to pass the dialog as WebElement to the action. To get the dialog as WebElement use the action [Find/Assert Dialog](findassert-dialog).

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog| WebElement | yes | The dialog as WebElement of which you want to get the message text

## Return Value

Name | Datatype | Description
--- | --- | ---
Text | String | The message or confirmation text

---
title: "Get Dialog Message Text"
url: /addons/ats-addon/rg-one-get-dialog-message-text/
---

## 1 Description

Returns the text from messages and confirmation dialogs

## 2 Supported Widgets

* ConfirmationDialog
* DialogMessage

## 3 Usage

You have to pass the dialog as WebElement to the action. To get the dialog as WebElement use the action [Find/Assert Dialog](/addons/ats-addon/rg-one-findassert-dialog/).

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog| WebElement | yes | The dialog as WebElement of which you want to get the message text

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Text | String | The message or confirmation text

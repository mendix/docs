---
title: "Find/Assert Dialog"
url: /addons/ats-addon/rg-one-findassert-dialog/
---

## 1 Description

Finds/Asserts a Dialog by title or type.

## 2 Supported Widgets

 + Window
 + DialogMessage
 + ConfirmationDialog

## 3 Usage

Optionally you can provide the dialog title and dialog type, to specify which dialog you want to find. Otherwise this action will return the first found active dialog.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | The title of the dialog you want to cancel
Dialog Type | Enumeration | no | The type of the dialog you want to cancel
Message Text | String | no | The message text of the dialog

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Dialog | WebElement | The dialog as a Web Element.

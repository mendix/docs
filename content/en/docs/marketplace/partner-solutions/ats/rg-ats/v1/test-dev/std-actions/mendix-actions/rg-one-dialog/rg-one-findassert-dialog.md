---
title: "Find/Assert Dialog"
url: /appstore/partner-solutions/ats/rg-one-findassert-dialog/
---

## Description

Finds/Asserts a Dialog by title or type.

## Supported Widgets

* Window
* DialogMessage
* ConfirmationDialog

## Usage

Optionally you can provide the dialog title and dialog type, to specify which dialog you want to find. Otherwise this action will return the first found active dialog.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | The title of the dialog you want to cancel
Dialog Type | Enumeration | no | The type of the dialog you want to cancel
Message Text | String | no | The message text of the dialog

## Return Value

Name | Datatype | Description
--- | --- | ---
Dialog | WebElement | The dialog as a Web Element.

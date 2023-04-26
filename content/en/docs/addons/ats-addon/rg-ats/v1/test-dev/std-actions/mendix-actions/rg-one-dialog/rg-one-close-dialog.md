---
title: "Close Dialog"
url: /addons/ats-addon/rg-one-close-dialog/
---

## 1 Description

Clicks [x]-button on a Confirmation, Error, Warning or Info Dialog.

## 2 Supported Widgets

* Window
* DialogMessage
* ConfirmationDialog

## 3 Usage

Optionally you can provide the dialog title and dialog type, to specify which dialog you want to close. Otherwise this action will close the first found active dialog.
This action is equivalent to pressing the [x]-button on top of the dialog.       

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | The title of the dialog you want to cancel
Dialog Type | Enumeration | no | The type of the dialog you want to cancel

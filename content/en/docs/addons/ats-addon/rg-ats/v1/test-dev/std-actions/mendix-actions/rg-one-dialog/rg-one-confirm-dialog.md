---
title: "Confirm Dialog"
url: /addons/ats-addon/rg-one-confirm-dialog/
---

## 1 Description

Clicks Proceed/Ok Button on a Confirmation, Error, Warning or Info Dialog.

## 2 Supported Widgets

* ConfirmationDialog
* DialogMessage

## 3 Usage

Optionally you can provide the dialog title and dialog type, to specify which dialog you want to confirm. Otherwise this action will confirm the first found active dialog.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | The title of the dialog you want to cancel
Dialog Type | Enumeration | no | The type of the dialog you want to cancel

---
title: "Close Dialog"
url: /appstore/partner-solutions/ats/rg-one-close-dialog/
---

## Description

Clicks [x]-button on a Confirmation, Error, Warning or Info Dialog.

## Supported Widgets

* Window
* DialogMessage
* ConfirmationDialog

## Usage

Optionally you can provide the dialog title and dialog type, to specify which dialog you want to close. Otherwise this action will close the first found active dialog.
This action is equivalent to pressing the [x]-button on top of the dialog.       

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog Title | String | no | The title of the dialog you want to cancel
Dialog Type | Enumeration | no | The type of the dialog you want to cancel

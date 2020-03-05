---
title: "Errors Pane"
parent: view-menu
menu_order: 40
description: "Describes the Errors pane in Mendix Studio Pro."
tags: ["Studio Pro", "errors", "error list", "errors pane"]
---

## 1 Introduction 

To make sure that your app is always consistent and properly built, Studio Pro does consistency checks when you build your app. 

When a consistency check is not met, Studio Pro will notify you about this on the **Errors** pane:

![Errors Pane](attachments/errors-pane/errors-pane.png)

To display the **Errors** pane, open the menu option **View > Error list**.

## 2 Types of Messages {#message-types}

There are three types of messages, each having its own button and icon:

![Types of Messages](attachments/errors-pane/types-of-messages.png)

The table below provides the details on each type of the message:

| Type         | Icon                                              | Function                                                     |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| Errors       | ![](attachments/errors-pane/error-icon.png)       | Consistency errors that prevent your app from functioning in a correct way and being deployed (for example, if you do not specify an entity for the data view, your app cannot function correctly). |
| Deprecations | ![](attachments/errors-pane/deprecation-icon.png) | This type shows information on features that are deprecated and can be entirely removed in the future versions. This does not affect the app now, but may cause problems when upgrading to the next version. |
| Warnings     | ![](attachments/errors-pane/warning-icon.png)     | Errors that are not critical, so you can publish your app having warnings. However, it is highly recommended to take action based on the warnings, because your app has logical gaps (for example, clicking a button does nothing). |

## 3 Interacting with the Errors Pane

### 3.1 Displaying Different Types of Messages

You can toggle what messages are displayed in the **Errors** pane by clicking **Errors**, **Deprecations**, and **Warnings** buttons. If the button is highlighted, the corresponding type of message is displayed.

For more information on types of messages, see the [Types of Messages](#message-types) section. 

### 3.2 Check Now Option

The **Check now** option initiates the check of your project on consistency failures. This is useful if you have set an auto-check delay in **Edit** > **Preferences**. If the auto-delay is not specified, the check is done immediately after each change. 

### 3.3 Limit to Current Tab Option

Limits the messages displayed in the pane to the current document. 

### 3.4 Message Overview

To enable you to find your errors, deprecations, and warnings quickly, each message shows you the following:

* Icon – indicates the [type of the message](#message-types)
* Index number – an index number assigned to each message 
* **Error Code** – a unique code that is specific for the errors only; warning and deprecation do not have  error codes
* **Message** –  description/explanation of the check failure
* **Element** – an element causing the check failure
* **Document** – the place where the element is
* **Module** – the module where the document is

Double-clicking the check will take you directly to the element causing the check failure.

You can also sort the order which messages are displayed in by clicking the column header in the pane. Thus, you can sort errors in ascending or descending order by the icon, index number, message, error code, module, document, or element.  

Right-clicking the message line opens a drop-down menu:

![Drop-Down Menu](attachments/errors-pane/drop-down-menu.png)

The following actions are available in the drop-down menu:

* **Go to {the name of the element}** – does the same as double-clicking the message, takes you to the element causing the check failure.
* **View documentation about {an error code or the name of the element}** – opens the corresponding document that describes this check failure and gives instructions on how to fix it; if there is no documentation on the current message, the option is greyed-out
* Message-specific actions – actions that depend on the message, in the example above, you can remove the microflow parameter that is not used in the project

##  4 Read More

* [Consistency Errors](consistency-errors)
* [Studio Pro Overview](studio-pro-overview)

---
title: "Definitions"
parent: "custom-action-general"
description: "This document explains the different types of custom actions."
tags: ["ATS", "testing"]
---

## 1 Introduction

A custom action is an action created by the user. The how-to's for creating custom actions are divided by type. This document describes the different custom action types. It also describes how you identify them.

## 2 Prerequisites

Before starting with this document, make sure you have the following prerequisites in place:

* [The Guidelines for Building a Custom Action](/bestpractices/guidelines-custom-action)

## 3 Combined Actions

### 3.1 Description

The first type of custom action is the Combined action. The best way to describe this custom action is that it is a combination of steps for getting from point A to point B.
In most cases, it is a combination of different steps that cover a frequently used functionality. You can then select this combined action every time you must use the functionality to get from point A to point B. 
The primary purpose of a combined action is to make it easier to create test cases. 

The name of a combined action must contain the test case number in which you test the functionality. The name must also describe what it does. By using the test case number in the name, you can debug the test case easier. Since a combined action is only used for getting somewhere, it must be a _Setup_ or _Teardown _ test step. The combined action is not testing something.

Some suggestions to make your combined action generic are:

* Input parameters

* Output parameter

* Random values

With input parameters, you can decide if the user must enter a certain value or if it is hard-coded.
You use the output parameter in combination with the random value. If you use a random value to create something, you must return the random value. To reuse the value to find the item.

There are two ways of making a Combined Action:

* Use the extract button inside a test case. 

* Create a new action and copy/paste the test steps inside that action. 

### 2.2 Example

_The steps in the Mendix App_
![](/howtos/attachments/custom-action-general/general-definition/combined-action-app-steps.png)

_The steps in ATS_
![](/howtos/attachments/custom-action-general/general-definition/combined-action-ats-steps.png)

_The Combined Action_
 ![](/howtos/attachments/custom-action-general/general-definition/combined-action-ats-newexpense-action.png)

### 2.2 Summary

- Consists of test steps from an actual test case.

- The focus is ease of use.

- Always _Setup _ or _Teardown _ call type in a test case.

- Covers multiple widgets.

- Reusable
 

## 3 Unsupported Widget Action

### 3.1 Description

When you encounter a widget that you cannot interact with using the standard actions, you create an unsupported widget action.  
An unsupported widget action uses core actions to interact with a widget. It is comparable to a standard Mendix action but created by the user itself.

Follow the guidelines for building a custom action to create an unsupported widget action.

### 3.2 Example

_The widget in the Mendix app_
![](/howtos/attachments/custom-action-general/general-definition/unsupported-widget-action-app-widget.png)

_The steps in ATS_
![](/howtos/attachments/custom-action-general/general-definition/unsupported-widget-action-ats-steps.png)

_The Unsupported Widget Action_
![](/howtos/attachments/custom-action-general/general-definition/unsupported-widget-action-ats-switch-action.png)


### 3.3 Summary

* Consists of at least 2 actions.

* The focus is interacting with the widget.

* Built generic.

* Covers a single widget.

## 4 Search Context Action

### 4.1 Description
Sometimes an app has a lot of widgets with the same mx-name.
ATS always finds the first result. To overcome this you create a Search Context action. All Mendix actions have an input parameter called Search Context. The Search Context action finds an element that a Mendix/Core action can use.
The focus is on finding an element that you can use to find the widget. The [Find/Assert Widget](/refguide-ats-1/findassert-widget) action is a great example for a Search Context action.

### 4.2 Example

_Element in the Mendix app_
![](/howtos/attachments/custom-action-general/general-definition/searchcontext-action-listview-app.png)
_The steps in ATS_
![](/howtos/attachments/custom-action-general/general-definition/searchcontext-action-listview-ats-steps.png)
_The Search Context Action_
![](/howtos/attachments/custom-action-general/general-definition/searchcontext-action-listview-ats-searchcontext-action.png)
### 4.3 Summary

-	Provides an element for Search context.
-	The focus is finding a certain element on the page.
-	Covers a single widget at a time. 

## 5 Function Action

### 5.1 Description
The last type of custom actions is the function action. Most function actions perform: 
* mathematical equations.  
* certain tasks like scrolling a window down. 

They distinguish themselves from the other actions by their purpose. If a custom action is not a combined, unsupported widget or search context action then it's a function action. Function actions use JavaScript or perform asserts, they rarely use Mendix actions.

### 5.2 Example

_The steps in ATS_
![](/howtos/attachments/custom-action-general/general-definition/function-action-ats-teststeps.png)
_The Function Action_
![](/howtos/attachments/custom-action-general/general-definition/function-action-ats-function-action.png)

### 5.3 Summary

-	Not combined, search context or unsupported widget action then a function.
-	Has either an assert action or a JavaScript action.

---
title: "Definitions"
url: /appstore/partner-solutions/ats/ht-one-custom-action-definitions/
description: "Explains the different types of custom actions."
---

## Introduction

A custom action is an action created by the user. The how-tos for creating custom actions are divided by type. This document describes the different custom action types and how you can identify them.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Read [Guidelines for Creating a Custom Action](/appstore/partner-solutions/ats/ht-one-guidelines-custom-action/)

## Combined Actions

### Description

The first type of custom action is the combined action. The best way to describe this custom action is that it is a combination of steps for getting from point A to point B. In most cases, this is a combination of different steps that cover a frequently used functionality. You can select this combined action every time you must use the functionality to get from point A to point B.

The primary purpose of a combined action is to make it easier to create test cases. The name of a combined action must contain the test case number in which you test the functionality. The name must also describe what it does. By using the test case number in the name, you can debug the test case easier. Since a combined action is only used for getting somewhere, it must be a *Setup* or *Teardown* test step. The combined action is not testing something.

These are some suggestions to make your combined action generic:

* Input parameters – decide if the user must enter a certain value or if it is hard-coded
* Output parameter – use the output parameter in combination with the random value
* Random values – if you use a random value to create something, you must return the random value in order to reuse the value to find the item

There are two ways of making a combined action:

* Click the **Extract** button inside a test case
* Create a new action and copy the test steps inside that action

### Example

The steps in a Mendix app:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/combined-action-app-steps.png" class="no-border" >}}

The steps in ATS:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/combined-action-ats-steps.png" class="no-border" >}}

The combined action:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/combined-action-ats-newexpense-action.png" class="no-border" >}}

### Summary

* A combined action consists of test steps from an actual test case
* The focus is on ease-of-use
* There is always a Setup or Teardown call type in a test case
* Covers multiple widgets
* Reusable

## Unsupported Widget Action

### Description

When you encounter a widget that you cannot interact with using the standard actions, you can create an unsupported widget action.  

An unsupported widget action uses core actions to interact with a widget. It is comparable to a standard Mendix action, but it is created by the user.

Follow the guidelines below for building a custom action to create an unsupported widget action.

### Example

The widget in a Mendix app:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/unsupported-widget-action-app-widget.png" class="no-border" >}}

The steps in ATS:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/unsupported-widget-action-ats-steps.png" class="no-border" >}}

The unsupported widget action:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/unsupported-widget-action-ats-switch-action.png" class="no-border" >}}

### Summary

* A widget action consists of at least two actions
* The focus is on interacting with the widget
* Built generically
* Covers a single widget

## Search Context Action

### Description

Sometimes an app has a lot of widgets with the same *mx-name*, but ATS always finds the first result. To overcome this, you need to create a search context action. All Mendix actions have an input parameter called **Search Context**. The search context action finds an element that a Mendix/core action can use.

The focus is on finding an element that you can use to find the widget. The [find/assert widget](/appstore/partner-solutions/ats/rg-one-findassert-widget/) action is a great example for a search context action.

### Example

An element in a Mendix app:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/searchcontext-action-listview-app.png" class="no-border" >}}

The steps in ATS:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/searchcontext-action-listview-ats-steps.png" class="no-border" >}}

The search context action:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/searchcontext-action-listview-ats-action.png" class="no-border" >}}

### Summary

* The search context action provides an element for a search context
* The focus is on finding a certain element on a page
* It covers a single widget at a time

## Function Action

### Description

The last type of custom action is the function action. Most function actions perform the following:

* Mathematical equations
* Certain tasks like scrolling a window down

Function actions distinguish themselves from other actions by their purpose. If a custom action is not a combined action, unsupported widget action, or search context action, then it's a function action. Function actions use JavaScript or perform asserts; they rarely use Mendix actions.

### Example

The steps in ATS:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/function-action-ats-teststeps.png" class="no-border" >}}

The function action:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/create-custom-actions/custom-action-general/custom-action-definitions/function-action-ats-function-action.png" class="no-border" >}}

### Summary

* If a custom action is not a combined action, search context action, or unsupported widget action, then it is function action
* A function action has either an assert action or a JavaScript action

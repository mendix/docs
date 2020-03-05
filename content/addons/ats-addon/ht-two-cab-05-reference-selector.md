---
title: "CAB.05 - Reference Selector"
parent: "ht-two-create-unsupported-widget-actions"
description: "This how-to explains step by step how to create an Unsupported Widget action for the Mendix Reference Selector widget."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create an Unsupported Widget action for the reference selector widget. In a standard situation, the first step is to check if ATS supports the widget. 

The how-to assumes you must build your own action.

This how-to applies to all widgets like the reference selector widget, if the widget has a drop-down you can follow this how-to. Keep in mind that it might need some adjustments according to the widget!

**This how-to will teach you how to do the following:**

* Approach a drop-down widget that ATS must set
* Create the custom action to set the drop-down widget

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:
 
* Read [General](ht-two-custom-action-general)

## 3 Defining the User Approach

First you define the user approach and how you interact with the widget. Since you are creating an Unsupported Widget action, how you find the widget is not important. What is important is how you interact with it.

You interact with the widget by clicking it to see the options and then selecting the option you want. A user only clicks the widget to see the options it has.

This is the reference selector opened:

![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-unopenend.png)

This is the reference selector unopened:

![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-openend.png)

Most widgets that give options—like the reference selector and the drop-down—have a `select` element that displays the options.

## 4 Creating the Action Structure

In the previous step, you wrote down the user approach for the reference selector widget. Now you will create this approach in ATS with actions.

To create the action structure, follow these steps:

1.  Check the parent element, which is always the element with `mx-name` when creating an unsupported widget action. If the widget does not have `mx-name`, look for the highest `div` element that is still referencing to the widget. The parent element of the reference selector looks like this in the debugger:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-parentelement.png)

    The debugger creates the border around the selected element in the app:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-parentelement-outlined.png)

2.  The parent element is not an `input` element. Find a child element that ATS can use to select an option. When you look at the parent element, you see it has a `select` child element that ATS can use:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-childelement-select.png)

    When you create a custom action for an unsupported widget action, you must use the [*Find Widget Child Node*](rg-one-find-widget-child-node) action. This action is a combination of the [*Find/Assert Widget*](rg-one-findassert-widget) and [*Find Element by Sizzle*](rg-one-find-element-by-sizzle) actions, combining the best of both. It is an official Mendix action, it has all the internal processes, and it uses a CSS/jQuery selector to find the child, which makes it flexible. The selector for finding the input element is an input. You use this selector in the *Find Widget Child Node* action to find an input element inside the text box widget.

3.  Before you start creating the action, you need to know if ATS can find the select element within the reference selector widget. You use the debugger to simulate what ATS does. Since the *Find Widget Child Node* action uses `mx-name` to find the parent, you also must use `mx-name` in your code. Use jQuery to find out if ATS can find the element. Enter the following code in the console of the debugger:
  * `$( ‘.mx-name-referenceSelector1 select’ )`

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-childelement-select-selector.png)

    It can happen that the debugger does not return an element. Check if jQuery is available and if you constructed the code in the correct manner. When you enter a selector in ATS, don’t use `$( ‘….’ )` or `jQuery( ‘…..’ )`.

4.  Add the *Find Widget Child Node* action to your action. Enter the child node selector `select`, then enter the test step description and output description:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-findwidgetchildnode-action.png)

5.  ATS has core actions for selecting an option from a select element. We use the *Select Option by Text* action, because you want to select the option based on text. Enter the output of test step 1 as an input and give a proper description:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-selectoptionbytext-action.png)

6.  The *Select Option by Text* action is a core action that triggers an event. Finish your custom action with a [*Mendix Wait*](rg-one-mendix-wait) action:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-mendixwait-action.png)

## 5 Action Parameters

Next, you need to add the action input parameters:

* Widget Name
* Value
* Search Context

{{% alert type="info" %}}
Keep the [guidelines for creating a custom action](ht-two-guidelines-custom-action) in mind while creating action parameters.
{{% /alert %}}

To add the action parameters, follow these steps:

1.  Configure the **Widget Name** input parameter like this:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/widget-name-parameter.png)

2.  Configure the **Value** parameter like this:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/value-parameter.png)

3.  Configure the **Search Context** input parameter like this:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/search-context-parameter.png)

    For this custom action, you do not need an output parameter.

4.  Connect the input parameters to the right actions. Start with the **Widget Name** and **Search Context** input parameters for the *Find Widget Child Node* action:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-findwidgetchildnode-inputparameters.png)

5.  The last input parameter to connect is the **Value** parameter. Connect the input parameter to the *Select Option by Text* action:

    ![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-selectoptionbytext-inputparameters.png)

There is no need to add logic to this custom action, since it is only selecting an option in the widget.

## 6 Final Check

Now check for the following:

* Use of the ATS naming convention for parameters
* A clear description of test steps, input parameters, output parameters, and action returns
* Interpunction usage in pieces of code (if used)
* Use of data types on the different parameters to avoid errors

After checking these items, you can run the test case that uses this action.

Congratulations! You have created your own custom action for the Mendix Reference Selector widget.

![](attachments/ht-two-create-unsupported-widget/ht-two-cab-05-reference-selector/ref-selector-finishedaction.png)

---
title: "CAB.02 - Switch"
parent: "create-unsupported-widget-actions"
description: "This how-to explains step by step how to create an Unsupported Widget action for the Mendix switch widget."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create an unsupported widget action for the Mendix switch widget. In a standard situation, the first step is to check if ATS supports the widget. 

The how-to assumes that you must build your own action. 

The how-to applies to all widgets (like a button). If ATS needs to click the widget, you can follow this how-to until section **5 Last Check**. Keep in mind that it might need some adjustments!

Sections **6 Adding Logic to Make Your Action "Smarter"** and **7 Final Check** apply "logic" to an action that is of the check box type. If a widget is of the check box type, you can follow these steps to apply logic.

**This how-to will teach you how to do the following:**

* Approach the widget that ATS must click
* Create the custom action to click the widget
* Add logic to your custom action

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*  Read [Custom Action General Section](custom-action-general)

## 3 Defining the User Approach

First you must define the user approach about how you interact with the widget. Since you are creating an unsupported widget action, only how you interact with it is important, not how you find the widget.

You trigger the Mendix switch by clicking it. This changes its state from checked to unchecked:

*  Switch unchecked:

   ![](attachments/create-unsupported-widget/cab-02-switch/switch-widget-unchecked.png)

*  Switch checked:

   ![](attachments/create-unsupported-widget/cab-02-switch/switch-widget-checked.png)

Next, you must determine where you must click it.

After looking at the widget, you find out that you must click the actual switch to activate it.

## 4 Creating the Action Structure

In the previous section, you wrote down the user approach for the Mendix Switch widget. Now you must create this approach in ATS with actions. Create a new action for the next steps.

Next, you must look for the element in the debugger ATS needs to click. ATS always clicks in the middle of an element. Keep this in mind while looking for the element to click.

You must start by checking the parent element, which is always the element with `mx-name-` when building an unsupported widget action. If the widget does not have `mx-name-`, look for the highest `div` element that is still referencing the widget.

The parent element of the switch widget has `mx-name-switch1` in the debugger:

![](attachments/create-unsupported-widget/cab-02-switch/highlighted-switch-mxname-debugger.png)

The debugger creates the border around the selected element in the app: 

![](attachments/create-unsupported-widget/cab-02-switch/highlighted-switch-mxname.png)

When selecting which element to find, also remember that ATS clicks in the middle of an element. In this case, ATS does not click on the actual switch. This means you must use the [find widget child node](../refguide-ats-1/find-widget-child-node) action. This action is a combination of the [Find/Assert Widget](../refguide-ats-1/findassert-widget) and [Find Element by Sizzle](../refguide-ats-1/find-element-by-sizzle) actions, combining the best of both. It’s an official Mendix action, it has all the internal processes, and it uses a CSS/jQuery selector to find the child, which makes it flexible.

Now check the different child nodes to find the one you need. While doing this, keep the [guidelines for creating a custom action](../bestpractices/guidelines-custom-action) in mind! It must be generic. Pick an element or element class that is always present, because you hard-code it into your action. Also, make sure the element is visible for the user so that ATS can click it.

After looking through the child nodes, find a child element that covers the switch and also looks generic.
 
For the element in the debugger, the rectangle shows which class name we are going to use:

![](attachments/create-unsupported-widget/cab-02-switch/childnode-switch-debugger.png)

That element looks like this in the app:

![](attachments/create-unsupported-widget/cab-02-switch/childnode-switch-app.png)

You use the class name to find the element, because it’s the most constant. The ID of an element changes a lot. You cannot use the ID when building a sustainable custom action.

Use the class name selector in jQuery for finding specific elements.

The class name you must use is `.widget-switch`. Make sure that it works when you try it first in the debugger.

You simulate what ATS does by using the debugger. Since you use the find widget child node action, you must also use the `mx-name` in your code. You use jQuery to find out if ATS finds the right element. Enter the following code in the console of the debugger:

`$( ‘.mx-name-switch1 .widget-switch’ )` 

You use "dots" here, because in jQuery, the dot stands for a class name selector.

When you enter this in the console, it looks like this:

![](attachments/create-unsupported-widget/cab-02-switch/switch-element-console.png)

It can happen that the debugger does not return an element. Check if jQuery is available and if you constructed the code in the correct manner.

When you enter a selector in ATS, you don’t use the `$( ‘….’ )` or `jQuery( ‘…..’ )`.

You enter the child node in the _Find Widget Child Node_ action:

![](attachments/create-unsupported-widget/cab-02-switch/findwidget-childnode-input.png)

According to the guidelines for building a custom action, you must define the standard parameters. You only want to hard code the child node; the action user must have the possibility to select another switch by only entering the **Widget Name**. 

In this case, you have the required **Widget Name** and the optional **Search Context** parameters. Create both parameters in the settings tab.
_Widget Name Input Parameter_

![](attachments/create-unsupported-widget/cab-02-switch/widget-name-parameter.png)

_Search Context Input Parameter_

![](attachments/create-unsupported-widget/cab-02-switch/search-context-parameter.png)

{{% alert type="info" %}}
Make sure you set the datatype correctly! The Search Context parameters expects a Web Element!  
{{% /alert %}}

Next, you connect these parameters to the _Find Widget Child Node_ action:

![](attachments/create-unsupported-widget/cab-02-switch/findwidget-childnode-inputparameters-connected.png)

You also clarify the test step by filling in the description and possible output. In this case your action returns the Mendix switch:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-findwidgetchild-description-output.png)

Next, you click the Mendix switch to change its state. You add the _[Click/Doubleclick](../refguide-ats-1/clickdoubleclick)_ action because this action is a Mendix action:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-click-doubleclick-add.png)

You connect the output of the first test steps to the _Click/Doubleclick_ action:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-click-doubleclick-set-element.png)

## 5 Last Check

Now check the following items:

*  Use of the ATS naming convention for parameters.
*  A clear description of test steps, input parameters, output parameters and action returns.
*  Interpunction usage in pieces of code (If used).
*  Use of datatypes on the different parameters to avoid errors.

After checking these items, you can run the test case that uses this action.

**Congratulations you created your own custom action!**

Now you created your own custom action for the Mendix Switch widget.

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-nocondition.png)

## 6 Adding Logic to Make Your Action "Smarter"

You have an action that clicks the switch widget to alter its state, now you make it ‘smarter’. Now your action clicks the switch no matter its current state. Next, you add logic to set the switch to a specific state.

In the debugger, you see that the Mendix Switch has the input type `checkbox` you use this input element in combination with the action _Is Selected_ to get the current state of the widget, either “True” or “False”:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-input-type.png)

First, you check if ATS can find the input element. You do this by simulating what ATS does, the same way as before. Enter the following code in the console of the debugger: 
`$( ‘.mx-name-switch1 input’ )`:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-input-type- debugger.png)

{{% alert type="info" %}}
It can happen that the debugger does not return an element. Check if jQuery is available and if you constructed the code in the correct manner.  
{{% /alert %}}

When you use an elements DOM name, the selector looks like this: `input` or `div`

Next, you add another _Find Widget Child Node_ action to find the input element. Make it step 1. Enter `input` in the child node selector parameter. As said before you don’t use the full selector. Keep the guidelines in mind and give a proper description of the test step and its output:

![](attachments/create-unsupported-widget/cab-02-switch/findwidget-childnode-input-element.png)

You use this input element to get the current state of the switch: “True for checked” and “False for unchecked”.

Next, add the _Is Selected_ action and make it the second test step, connect the output of step 1 that found the input element and of course give a proper description:

![](attachments/create-unsupported-widget/cab-02-switch/is-selected-action-mendix-switch.png)

To use the output of the _Is Selected_ action, you need something to compare it to. The action user must provide the "True" or "False" statement used to set the action. Next, you create the input parameter for the wanted state:

![](attachments/create-unsupported-widget/cab-02-switch/wanted-state-input-parameter-mendix-switch.png)

{{% alert type="info" %}}
Watch the datatype! It must be a Boolean here because the _Is Selected_ action also returns a Boolean, otherwise, you couldn’t compare them.
{{% /alert %}}

Give a clear description so that the action user knows what information is required.

The logic you use is as follows: 
**Only click the switch if the value of the switch is NOT the same as the value entered by the user.**

A precondition on the _Click/Doubleclick_ action performs the logic. You use the _[Assert not equals](../refguide-ats-1/assert-not-equals)_ action as precondition.

Example, If I want to set the switch to unchecked I enter the value False. If the switch is already false then the values are equal and the precondition fails, resulting in ATS NOT executing the _Click/Doubleclick_ action and vice versa. 

Check the precondition box at test step 4, the _Click/Doubleclick_ action and select the _Assert not equals_ action. Next, connect the input parameter value and the output of step 2, the Mendix switch current state:

![](attachments/create-unsupported-widget/cab-02-switch/mendix-switch-precondition-clickdoubleclick.png)

## 7 Final Check

Now check the following items:
*  Use of the ATS naming convention for parameters.
*  A clear description of test steps, input parameters, output parameters and action returns.
*  Interpunction usage in pieces of code (If used).
*  Use of datatypes on the different parameters to avoid errors.

After checking these items, you can run the test case that uses this action.

**Congratulations you’ve added logic to your custom action!**

![](attachments/create-unsupported-widget/cab-02-switch/switch-finished-withlogic.png)


---
title: "CAB.10 - AutoComplete"
parent: "create-unsupported-widget-action-2"
description: "This how-to explains step by step how to create an Unsupported Widget action for the AutoComplete widget."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create an Unsupported Widget action for the AutoComplete widget. In a standard situation, the first step is checking if ATS supports the widget. 

The how-to assumes that you must build your own action. 

The how-to applies to all widgets like the AutoComplete widget. If the widget has a drop-down menu that pops up elsewhere, you can follow this how-to. Keep in mind that it might need some adjustments according to the widget!

**This how-to will teach you how to do the following:**

* Approach an AutoComplete option that ATS must click
* Create the custom action to click the AutoComplete option

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Read [General](custom-action-general-2)

## 3 Defining the User Approach

First you define the user approach and how you interact with the widget. Since you are creating an Unsupported Widget action, how you find the widget is not important. What is important is how you interact with it.

You interact with the widget by clicking it, which opens the search field where you enter the text. Then, you click the option that is the same as your text.

This is the AutoComplete widget:

![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-standard.png)

This is the AutoComplete widget clicked:

![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-clicked.png)

This is the AutoComplete widget with search:

![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-withsearch.png)

This is the AutoComplete widget filled in:

![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-filledin.png)

## 4 Creating the Action Structure

In the previous step, you wrote down the user approach for the reference selector widget. Now you will create this approach in ATS with actions.

To create the action structure, follow these steps:

1.  Check the parent element, which is always the element with `mx-name` when creating an unsupported widget action. If the widget does not have `mx-name`, look for the highest `div` element that is still referencing to the widget. The parent element of the AutoComplete widget looks like this in the debugger:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-parentelement-debugger.png)

    The debugger creates the border around the selected element in the app:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-parentelement-outlined.png)

2.  In a standard situation, you use the [*Find Widget Child Node*](/ats/refguide/rg-version-1/find-widget-child-node) action while creating an unsupported widget action. In this case, you see that the drop-down menu is not a child element of the AutoComplete widget. To find it, click the inspector icon in the top-left corner of the debugger: 

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/debugger-inspector.png)

3.  Click the search field in the app while using the inspector to see it in the debugger.

    This is hovering above the input element:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/debugger-inspector-hovering-input.png)

    This is an input element in the debugger:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/debugger-inspector-inspected-input.png)

4.  In the input element, you see that the `autocomplete` option is set to off. The widget can also autocomplete the entered text. You will cover this scenario later.
5.  Use the [*Find/Assert Widget*](/ats/refguide/rg-version-1/findassert-widget) action to find the AutoComplete widget. Then, add the *Find/Assert Widget* action to your custom action, and give it a proper test step description and output description. Set **Visible Only** to `True` to ensure it only finds a visible widget:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-findassertwidget-action.png)

    You will create and connect the input parameters later.

6.  Click the AutoComplete widget to open the drop-down menu. Add the [*Click/Doubleclick*](/ats/refguide/rg-version-1/clickdoubleclick) action, describe the test step, and connect the output of test step 1:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-clickdoubleclick-action.png)

7.  Check if the parent element of the drop-down menu has an `mx-name`. If you check the debugger, you can see that there is no `mx-name`:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-dropdowncontainer-parentelement-debugger.png)

    If the parent element doesn’t have an `mx-name`, then use the [*Find Element by Sizzle*](/ats/refguide/rg-version-1/find-element-by-sizzle) action. This action uses jQuery to find an element on the page. You use the same selectors as in the *Find Widget Child Node* action. 

8.  You must be sure that ATS picks the right `input` element. Use a generic class name to find the parent. Next, find the child that contains the input element and return the input element:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/selector-autocompletewidget-dropdown.png)

    Before you create the action, you must know if ATS finds the input element within the drop-down container. You will use the debugger to simulate what ATS does.

9.  You use jQuery to find out if ATS can find the element. Enter the following code in the console of the debugger: `$( ‘.select2-container .select2-search input’ )`:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/selector-autocompletewidget-dropdown-console.png)

    It can happen that the debugger does not return an element. Check if jQuery is available and if you constructed the code in the correct manner. When you enter a selector in ATS, don’t use `$( ‘….’ )` or `jQuery( ‘…..’ )`.

10. Add the *Find Element by Sizzle* action. You also must use a filter selector to make sure ATS returns a visible element. The *Find Element by Sizzle* action is a Core action. Enter the selector, enter the filter selector `:visible`, provide a test step description, and describe the output:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-findelementbysizzle-action.png)

    A filter selector is a jQuery selector that you use to filter the results.

11. You must focus the `input` element, so use the *Focus and Clear Element Value* action. Add the action, provide the `input` element from test step 3 as the input, and provide a proper test step description:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-focusandclearelement-action.png)

12. Add the [*Send Keys*](/ats/refguide/rg-version-1/send-keys) action to enter the value in the `input` element. Add the action, connect the `input` element from test step 3 as an input, and provide a proper description:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-sendkeys-action.png)

13. Add a [Mendix Wait](/ats/refguide/rg-version-1/mendix-wait) action to give the app time to perform activities:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-mendixwait-action.png)

14. After entering the text in the search field, an option appears that ATS must click. You need to find an element containing a specific text. The drop-down container does not have an `mx-name`. Use the *Find Element by Sizzle* action again. First, you create the selector. Enter **ATS Option 11** in the AutoComplete widget and open the debugger. You will take the class name of the main results element and the class name of the element displaying the text. Also, use a `:contains` selector to find the element displaying the text: 

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-resultelement-debugger.png)

15. Use jQuery to find out if ATS can find the element. Enter the following code in the console of the debugger: `$( ‘.select2-results .autoCompleteResult:contains(“ATS Option 11”)’ )`:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-resultelement-debugger-console.png)

    It can happen that the debugger does not return an element. Check if jQuery is available and if you constructed the code in the correct manner. When you enter a selector in ATS, don’t use `$( ‘….’ )` or `jQuery( ‘…..’ )`.

    The action user must enter the text they want ATS to click. You need a variable selector to achieve this. You create a variable selector by using the [*Concatenate String*](/ats/refguide/rg-version-1/concatenate-string) action. This action combines the different input strings into one string. The Concatenate String action does not add spaces. You need to add spaces yourself.

16. Add the *Concatenate String* action. Leave the **String 2** input parameter empty! You will connect an action input parameter here later. 
17. Enter the selector `.select2-results .autoCompleteResult:containsExactCase(“”)`, provide a proper test step description, and describe the output:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-concatenatestring-action.png)

    The `:containsExactCase` selector is a pseudo-selector available in ATS. It is not an official jQuery selector and not available in standard jQuery. The difference is that the ExactCase selector is case sensitive.

18. Add the *Find Element by Sizzle* action. You also must use a filter selector to make sure ATS returns a visible element. The Find Element by Sizzle action is a Core action. Connect the selector from step 7, enter the filter selector `:visible`, give a test step description, and describe the output:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-findelementbysizzle-action-result.png)

    To make your action generic, it must also work in the situation when AutoComplete is on. In this case it is a necessity, because the widget is not supported if the action does not cover all situations.

    Use the following logic: *If the drop-down is present, then you click the option, and if the drop-down is not present, the find and click are not executed*.

19. Click the precondition box in test step 8 and add the *Find Element by Sizzle* action. Use the results element to verify if the drop-down menu is open. It is one of the class names you used earlier: `.select2-result`. Next, enter the `:visible` selector in the filter selector parameter. And last, set the timeout to 2000 milliseconds. The default timeout is 10 seconds. Setting the timeout to 2 seconds makes the precondition action faster if it fails. You should only alter the timeout if it is a precondition. Also, keep in mind that 2 seconds is the minimum advised. The precondition will look like this:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-findelementbysizzle-action-result-precondition.png)

20. Next, add the *Click/Doubleclick* action to click the option found in test step 8. Enter the output from step 8 as an input and provide a proper description:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-clickdoubleclick-action-option.png)

21. There is only one issue left, and it is that if test step 8 fails, test step 9 also fails. Therefore, you must add a precondition to the Click/Doubleclick action. Use the following logic: *If test step 8 fails or is not executed, then don’t execute test step 9*.
22. Click the precondition box at test step 9 and add the *Assert not null* action. Then, connect the output of test step 8. This way, ATS only executes test step 9 if test step 8 was successful. It looks like this:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-clickdoubleclick-action-option-precondition.png)

The action structure is now complete.

## 5 Action Parameters

Next, you need to add these action input parameters:

* Widget Name
* Value
* Search Context

{{% alert type="info" %}}
Keep the [guidelines for creating a custom action](guidelines-custom-action-2) in mind while creating action parameters. 
{{% /alert %}}

To add the action parameters, follow these steps:

1.  Configure the **Widget Name** input parameter like this:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/widget-name-parameter.png)

2.  Configure the **Value** input parameter like this:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/value-parameter.png)

3.  Configure the **Search Context** input parameter like this:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/search-context-parameter.png)

    For this custom action, you don’t need an output parameter.

4. You need to connect the input parameters to the correct actions. Start with the **Widget Name** and **Search Context** input parameters for the *Find/Assert Widget* action:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-findassertwidget-action-inputparameters.png)

5. Connect the **Value** input parameter at test step 5. The *Send Keys* action enters the text into the search field:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-sendkeys-action-inputparameters.png)

6. You need to connect the **Value** input parameter at test step 7 to use in the selector for finding the option. Connect the **Value** input parameter to the *Concatenate String* action:

    ![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-concatenatestring-action-inputparameters.png)

There is no need to add extra logic to this action. Its only involves selecting an option in the widget.

## 6 Final Check

Now check for the following:

*  Use of the ATS naming convention for parameters
*  A clear description of test steps, input parameters, output parameters, and action returns
*  Interpunction usage in pieces of code (if used)
*  Use of data types on the different parameters to avoid errors

After checking these items, you can run the test case that uses this action.

Congratulations! You have created your own custom action for the AutoComplete widget.

![](attachments/create-unsupported-widget-2/cab-10-autocomplete-2/autocompletewidget-finishedaction.png)

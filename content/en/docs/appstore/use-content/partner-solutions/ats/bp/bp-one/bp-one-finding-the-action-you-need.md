---
title: "Finding the Action You Need"
url: /appstore/partner-solutions/ats/bp-one-finding-the-action-you-need/
---

## Introduction

This document explains the best way for finding the action you need in ATS. This is done by using six main categories for what you are trying to achieve. Each category explains the generic solution and the widget specific solutions using examples.

1. Finding a widget
2. Clicking a widget
3. Cover an input widget
4. Retrieving a value from a widget
5. Asserting values/information
6. Generating values/information

Select the chapter that covers your situation. If you are not sure what covers your situation, use the widget name to search for an action inside ATS and take a look at what pops up.

Go straight to chapter 7 for a quick summary and action plan.

{{% alert color="info" %}}

When the ATS Recorder does not record any steps, you can use this best practice to find the right action.

{{% /alert %}}

## Finding a Widget

In ATS there are many actions for finding a widget. From finding a widget to finding a specific datagrid row. The first chapter explains the generic action for finding a widget. The second chapter explains the actions that conduct a more specific search. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can find something is "Find".

### Generic Action

When you want to find a widget the main choice is always the [*Find/Assert Widget*](/appstore/partner-solutions/ats/rg-one-findassert-widget/) action. It finds the widget you need using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

The *Find/Assert Widget* action works on every widget that has a `mx-name`. 

*The Find/Assert Widget Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/findassert-widget-action-search-1.png" class="no-border" >}}  

If the generic action does not work check if there is a specific one.

### Specific Action

When you are looking for a specific widget or content of that widget, use the widget name in the search. 

1. Example, you want to find a row inside a datagrid widget. You can use the *Find/Assert Widget* action in combination with the column name, but that doesn't work if there are multiple datagrids. The solution is to use the following search term, "Find Datagrid". ATS checks all the actions and returns those that match these words. You see there is an action that called [*Find/Assert DataGrid Row*](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/). The *Find/Assert DataGrid Row* action enables you to search for a datagrid row containing a specific value in a specific column. This action also works on listviews and templategrids.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-datagrid-example-1.png" class="no-border" >}}

2. Example, you want to find the checkbox in a simple checkbox set selector widget. You cannot use the *Find/Assert Widget* action because the checkbox does not have its own `mx-name`. It is part of the simple checkbox set selector widget. The solution is to use the following search term, "Find Simple Checkbox Set Selector". ATS checks all the actions and returns those that match these words. You see there is an action called [Find Simple Checkbox Set Selector](/appstore/partner-solutions/ats/rg-one-find-simple-checkbox-set-selector/). The  *Find Simple Checkbox Set Selector* action finds the checkbox based on the **Widget Name** of the entire widget and the value displayed by the checkbox.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-simple-checkbox-set-selector-example-1.png" class="no-border" >}}

3. Example, you want to find a dialog box based on the title or text inside. You cannot use the *Find/Assert Widget* action because the dialog box does not have a `mx-name`. The solution is to use the following search term, "Find Dialog". ATS checks all the actions and returns those that match these words. You see there is an action called [*Find/Assert Dialog*](/appstore/partner-solutions/ats/rg-one-findassert-dialog/). The *Find/Assert Dialog*  action can find a dialog based on title, text or only a dialog. 

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/find-dialog-example-1.png" class="no-border" >}}

### Summary

When you want to find a widget always use the *Find/Assert Widget* action if possible. 

If you want to find something more specific inside a widget or the widget does not have a `mx-name`. Then use "Find" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot find a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

## Clicking a Widget

In ATS there are many actions for clicking a widget. From clicking a widget to clicking a specific datagrid row. The first chapter explains the generic action for clicking a widget. The second chapter explains the actions that conduct a more specific click. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can click something is "Click".

### Generic Action

When you want to click a widget the main choice is always the [*Click Widget*](/appstore/partner-solutions/ats/rg-one-click-widget/) action. It clicks the widget you need using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

The *Click Widget* action works on every widget that has a `mx-name`. 

*The Click Widget Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-widget-action-search-1.png" class="no-border" >}}

If the generic action does not work check if there is a specific one.

### Specific Action

ATS also has a few specific click actions. To find these use the search term, "Click" in combination with the widget name. 

1. Example, you want to click the load more button inside a listview widget. You cannot use the *Click Widget* action because the load more button does not have its own `mx-name`. It is part of the listview widget. The solution is to use one of the following search terms, "Click load more" or "Click listview". ATS checks all the actions and returns those that match these words. You see there is an action called [*Click Widget Button*](/appstore/partner-solutions/ats/rg-one-click-widget-button/). The *Click Widget Button* action uses the `mx-name` of the widget and the button type to click the right button. In this case, select the "load more" type.
2. Example, you want to click a specific datagrid row inside a datagrid. You can use the *Click Widget* action in combination with the column name, but if there are multiple datagrids ATS cannot distinguish them. The solution is to use the following search term, "Click DataGrid".  ATS checks all the actions and returns those that match these words. You see there is an action called [*Click DataGrid Row*](/appstore/partner-solutions/ats/rg-one-click-datagrid-row/). The *Click DataGrid Row* action enables you to click a datagrid row containing a specific value in a specific column. This action also works on listviews and templategrids.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-datagrid-row-action-search-1.png" class="no-border" >}}

3. Example, you want to click a menu item in a menu bar widget.
You cannot use the *Click Widget* action because the menu item does not have its own `mx-name`. It is part of the menu bar widget. The solution is to use the following search term, "Click menu".  ATS checks all the actions and returns those that match these words.  You see there is an action called [*Click Menu Item*](/appstore/partner-solutions/ats/rg-one-click-menu-item/). The *Click Menu Item* action clicks on a menu item inside a menubar widget using the caption.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/click-menu-item-action-search-1.png" class="no-border" >}}

4. Example, you want to click an element you found in a previous step. You cannot use the *Click Widget* action because it does not accept an element as input. The solution is to use the following search term, "Click/Doubleclick". ATS checks all the actions and returns those that match these words.  You see there is an action called [*Click/Doubleclick*](/appstore/partner-solutions/ats/rg-one-clickdoubleclick/). The *Click/Doubleclick* action is the action to use when you want to click an element found in a previous step.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/clickdoubleclick-action-search-1.png" class="no-border" >}}

### Summary

When you want to click a widget always use the *Click Widget* action if possible. 

If you want to click something more specific inside a widget or the widget does not have a `mx-name`. Then use "Click" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot click a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

## Set an input widget

In ATS there are several actions for setting an input widget. From a simple action that covers most situations to checkboxes inside tables. The first chapter explains the generic action for setting an input widget. The second chapter explains the actions that set a more specific input widget. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can handle an input widget is "Set".

### Generic Action

When you want to set an input widget the main choice is always the [*Set Value*](/appstore/partner-solutions/ats/rg-one-set-value/) action. It sets the input widget using the `mx-name` of the widget and the value to set. ATS uses the **Widget Name** parameter instead of `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

The *Set Value* action works on almost every widget that is an input widget.

*The Set Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-value-action-search-1.png" class="no-border" >}}

If the generic action does not work check if there is a specific one.

### Specific Action

ATS also has a few specific actions for setting an input widget. To find these use the search term, "Set" in combination with the widget name.

1. Example, you want to set the value of a checkbox widget, but you want to set it to a specific state. You cannot use the *Set Value* action because it does not work. The solution is to use the following search term, "Set Checkbox". ATS checks all the actions and returns those that match these words. You see there is an action called [*Set Checkbox Value*](/appstore/partner-solutions/ats/rg-one-set-checkbox-value/). The *Set Checkbox Value* action uses the `mx-name` of the widget and the Boolean value you set to check or uncheck the checkbox.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-checkbox-value-action-search-1.png" class="no-border" >}}

2. Example, you want to set the BooleanSlider widget to certain value. You cannot use the *Set Value* action because it does not work. The solution is to use the following search term, "Set BooleanSlider". ATS checks all the actions and returns those that match these words. You see there is an action called [*Set BooleanSlider Value*](/appstore/partner-solutions/ats/rg-one-set-booleanslider-value/). The *Set BooleanSlider Value* action uses the `mx-name` of the widget and the value you want to set the slider to.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-booleanslider-value-action-search-1.png" class="no-border" >}}

3. Example, you want to set the radiobutton inside a GridSelector widget. You cannot use the *Set Value* because the radiobutton does not have its own `mx-name`. It is part of the GridSelector widget. The solution is to use the following search term, "Set Grid Selector". ATS checks all the actions and returns those that match these words. You see there is an action called [*Set Grid Selector Value*](/appstore/partner-solutions/ats/rg-one-set-grid-selector-radiobutton-checked/). The *Set Grid Selector Value* action uses the `mx-name` of the widget, column caption and row caption to locate the radiobutton.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-grid-selector-radiobutton-action-search-1.png" class="no-border" >}}

4. Example, you want to set an input reference selector widget. You cannot use the *Set Value* action because it does not work. The solution is to use the following search term, "Set InputReferenceSelector". ATS checks all the actions and returns those that match these words. You see there is an action called [*Set InputReferenceSelector Value*](/appstore/partner-solutions/ats/rg-one-set-inputreferenceselector-value/). The *Set InputReferenceSelector Value* action uses the `mx-name` and the value you set to set the InputReferenceSelector widget.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/set-inputreferenceselector-value-action-search-1.png" class="no-border" >}}

### Summary

When you want to set an input widget always use the *Set Value* action if possible. 

If you want to set a special input widget or the widget does not have a `mx-name`. Then use "Click" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot set an input widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

## Retrieving a value from a widget

In ATS there are several actions for getting a value from a widget. The first chapter explains the generic action for getting a value from a widget. The second chapter explains the actions that get a specific value from a widget. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can get a value is "Get".

### Generic Action

When you want to get a value from a widget the main choice is always the [Get Value](/appstore/partner-solutions/ats/rg-one-get-value/) action. It retrieves the value of a widget using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

The *Get Value* action works on almost every widget that is an input widget.

*The Get Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-value-action-search-1.png" class="no-border" >}}

If the generic action does not work check if there is a specific one.

### Specific Action

ATS also has a few specific actions for getting a value from an widget. To find these use the search term, "Get" in combination with the widget name.

1. Example, you want to get the value of an Input Reference Selector widget. You cannot use the *Get Value* action because it does not work. The solution is to use the following search term, "Get InputReferenceSelector". ATS checks all the actions and returns those that match these words. You see there is an action called [_ Get InputReferenceSelector_](/appstore/partner-solutions/ats/rg-one-get-inputreferenceselector-value/). The *Get InputReferenceSelector* action returns the value the InputReferenceSelector widget is set to using the `mx-name`. 

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-inputreferenceselector-value-action-search-1.png" class="no-border" >}}

2. Example, you want to get the value displayed in the CKEditor widget. You cannot use the *Get Value* action because it does not work. The solution is to use the following search term, "Get CKEditor". ATS checks all the actions and returns those that match these words. You see there is an action called [*Get CKEditor Value*](/appstore/partner-solutions/ats/rg-one-get-ckeditor-value/). The *Get CKEditor Value* action uses the `mx-name` to return the value displayed in the CKEditor widget.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-ckeditor-value-action-search-1.png" class="no-border" >}}

3. Example, you want to get the message displayed in the dialog box widget. You cannot use the *Get Value* action because there is no `mx-name`. The solution is to use the following search term "Get Dialog".  ATS checks all the actions and returns those that match these words. You see there is an action called [*Get Dialog Message Text*](/appstore/partner-solutions/ats/rg-one-get-dialog-message-text/). The  *Get Dialog Message Text* action uses the dialog as a WebElement to retrieve the message text. You use the *Find/Assert Dialog* action to get the dialog as a WebElement.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-dialog-message-text-action-search-1.png" class="no-border" >}}

### Summary

When you want to get a value from a widget always use the *Get Value* action if possible. 

If you want to get the value from a specific widget or the widget does not have a `mx-name`. Then use "Get" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot get the value from a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

## Asserting values/information

In ATS there are several actions for asserting values. The first chapter explains the generic action for asserting a value inside your app. The second chapter explains the actions that assert specific values inside your app or inside ATS. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can assert a value is "Assert".

### Generic Action

When you want to assert a value inside a widget the main choice is always the [*Assert Value*](/appstore/partner-solutions/ats/rg-one-assert-value/) action. It asserts the value of a widget using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" class="no-border" >}}

The *Assert Value* action works on almost every widget that is an input widget.

*The Assert Value Action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-value-action-search-1.png" class="no-border" >}}

If the generic action does not work check if there is a specific one.

### Specific Action

ATS also has a few specific actions for asserting values in a widget or inside ATS. To find these use the search term "Assert" in combination with the name of the widget or in combination with what you want to assert.

1. Example, you want to assert that a specific validation message appears. You cannot use the *Assert Value* action because that would assert the value inside the widget and not the validation message. The solution is to use the following search term, "Assert Validation". ATS checks all the actions and returns those that match these words. You see there is an action called [*Assert Validation Message*](/appstore/partner-solutions/ats/rg-one-assert-validation-message/). The *Assert Validation Message* action uses the `mx-name` of a widget to assert the validation message that appears in the widget.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-validation-message-action-search-1.png" class="no-border" >}}

2. Example, you want to assert that the right page has opened. You cannot use the *Assert Value* because there is no `mx-name` that you can use. The solution is to use the following search term, "Assert Page".  ATS checks all the actions and returns those that match these words. You see there is an action called [*Assert Current Page*](/appstore/partner-solutions/ats/rg-one-assert-current-page/). The *Assert Current Page* action uses the page title to assert that the right page has opened.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-current-page-action-search-1.png" class="no-border" >}}

    These examples showed actions meant to assert something in your Mendix app. ATS also has actions that assert internal outcomes/values. 

3. Example, you want to assert that the outcome of an earlier test step is not the same as a certain value. You cannot use the *Assert Value* action because you want to assert a value inside ATS.  The solution is to use the following search term, "Assert not equal". ATS checks all the actions and returns those that match these words. You see there is an action called [*Assert Not equals*](/appstore/partner-solutions/ats/rg-one-assert-not-equals/). The *Assert Not equals* action compares two provided values and checks if they are equal or not.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/assert-not-equals-action-search-1.png" class="no-border" >}}

### Summary

When you want to assert a value from a widget always use the *Assert Value* action if possible.

If you want to assert a value from a specific widget or the widget does not have a `mx-name`. Then use "Assert" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot assert the value from a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

## Generating values/information

In ATS there are several actions for generating random or present time values. The first chapter explains a generic action that makes a reusable string. The second chapter explains the actions that perform more specific tasks. The last chapter provides a summary of the first two chapters. In this case, there is no magic word to find the actions you need.

### Generic Action

In some test cases, you want to enter the same value a few times. Instead of entering the same value every time you can use the [*Concatenate String*](/appstore/partner-solutions/ats/rg-one-concatenate-string/). The *Concatenate String* action combines the text you enter and returns it so that you can reuse that value in different actions.

It is also used for creating variable selectors. 

*The Concatenate String action*

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/concatenate-string-action-search-1.png" class="no-border" >}}

### Specific Action

ATS also has a few specific actions for generating values to use in your test case. Search terms used to find these are, "Random" or "Current".

1. Example, you want to have a unique value in your test case. That also makes your test case reusable. The solution is to use the following search term, "Random".  ATS checks all the actions and returns those that match these words. You see there is an action called [*Random String*](/appstore/partner-solutions/ats/rg-one-random-string/). The *Random String* action generates a random value and allows you to set a prefix and/or postfix.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/random-string-action-search-1.png" class="no-border" >}}

2. Example, you want to have a unique number value in your test case. That also makes your test case reusable. The solution is to use the following search term, "Random".  ATS checks all the actions and returns those that match these words. You see there is an action called [*Random Number*](/appstore/partner-solutions/ats/rg-one-random-number/). The *Random Number* action generates a random number and allows you to set a minimum and maximum.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/random-number-action-search-1.png" class="no-border" >}}

3. Example, you want to use today's date in your test case. This makes your test case reusable, but you don't want to enter it every time you execute the test case. The solution is to use the following search term, "Current Date". ATS checks all the actions and returns those that match these words. You see there is an action called [*Get Current DateTime String*](/appstore/partner-solutions/ats/rg-one-get-current-datetime-string/). The *Get Current DateTime String* action retrieves the current date and allows you to set the date format.

    {{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-one/bp-one-finding-the-action-you-need/get-current-datetime-string-action-search-1.png" class="no-border" >}}

### Summary

For generating values or information you should follow the first two sections of this chapter. There is no generic solution regarding this. Only a constant provider like the *Concatenate String* action.

## Summary

It all comes down to following certain steps to achieve the right result. 

1. Use the ATS Recorder. If the ATS Recorder does not work go to step 2.
2. The recorder not working, does not mean ATS cannot interact with the widget. Select the action that goes with the task you want to perform.

    Task                             | Action |
    ----------------------------------|:------:|
    Finding a widget                 | The [*Find/Assert Widget*](/appstore/partner-solutions/ats/rg-one-findassert-widget/) action. |
    Clicking a widget                | The [*Click Widget*](/appstore/partner-solutions/ats/rg-one-click-widget/) action. |
    Cover an input widget            | The [*Set Value*](/appstore/partner-solutions/ats/rg-one-set-value/) action. |
    Retrieving a value from a widget | The [*Get Value*](/appstore/partner-solutions/ats/rg-one-get-value/) action. |
    Asserting values/information     | The [*Assert Value*](/appstore/partner-solutions/ats/rg-one-assert-value/) action. |
    Generating values/information    | Please read the section for more information. |

    If these don't work because you don't have an mx-name or they don't cover the task go to step 3.

3. If your task is not covered by the generic action use the following search terms depending on your task.

    Task                             | Search Term |
    ----------------------------------|:------:|
    Finding a widget                 | "Find" in combination with the name of the widget. |
    Clicking a widget                | "Click" in combination with the name of the widget. |
    Cover an input widget            | "Set" in combination with the name of the widget. |
    Retrieving a value from a widget | "Get" in combination with the name of the widget. |
    Asserting values/information     | "Assert" in combination with the name of the widget. |
    Generating values/information    | Please read the section for more information. |

    If you are certain that ATS does not support you task go to step 4.

4. If ATS does not support your task with a standard solution you must create your own solution. Go to [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-one-create-custom-actions/).

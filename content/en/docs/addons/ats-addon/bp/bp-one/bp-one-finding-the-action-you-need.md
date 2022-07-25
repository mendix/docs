---
title: "Finding the Action You Need"
url: /addons/ats-addon/bp-one-finding-the-action-you-need/
---

## 1 Introduction

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

## 2 Finding a Widget

In ATS there are many actions for finding a widget. From finding a widget to finding a specific datagrid row. The first chapter explains the generic action for finding a widget. The second chapter explains the actions that conduct a more specific search. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can find something is "Find".

### 2.1 Generic Action

When you want to find a widget the main choice is always the [_Find/Assert Widget_](/addons/ats-addon/rg-one-findassert-widget/) action. It finds the widget you need using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of  `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" >}}

The _Find/Assert Widget_ action works on every widget that has a `mx-name`. 

_The Find/Assert Widget Action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/findassert-widget-action-search-1.png" >}}  

If the generic action does not work check if there is a specific one.

### 2.2 Specific Action

When you are looking for a specific widget or content of that widget, use the widget name in the search. 

1.  Example, you want to find a row inside a datagrid widget. You can use the _Find/Assert Widget_ action in combination with the column name, but that doesn't work if there are multiple datagrids. The solution is to use the following search term, "Find Datagrid". ATS checks all the actions and returns those that match these words. You see there is an action that called [_Find/Assert DataGrid Row_](/addons/ats-addon/rg-one-findassert-datagrid-row/). The _Find/Assert DataGrid Row_ action enables you to search for a datagrid row containing a specific value in a specific column. This action also works on listviews and templategrids.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/find-datagrid-example-1.png" >}}

2.  Example, you want to find the checkbox in a simple checkbox set selector widget. You cannot use the _Find/Assert Widget_ action because the checkbox does not have its own `mx-name`. It is part of the simple checkbox set selector widget. The solution is to use the following search term, "Find Simple Checkbox Set Selector". ATS checks all the actions and returns those that match these words. You see there is an action called [Find Simple Checkbox Set Selector](/addons/ats-addon/rg-one-find-simple-checkbox-set-selector/). The  _Find Simple Checkbox Set Selector_ action finds the checkbox based on the **Widget Name** of the entire widget and the value displayed by the checkbox.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/find-simple-checkbox-set-selector-example-1.png" >}}

3.  Example, you want to find a dialog box based on the title or text inside. You cannot use the _Find/Assert Widget_ action because the dialog box does not have a `mx-name`. The solution is to use the following search term, "Find Dialog". ATS checks all the actions and returns those that match these words. You see there is an action called [_Find/Assert Dialog-](/addons/ats-addon/rg-one-findassert-dialog/). The _Find/Assert Dialog_  action can find a dialog based on title, text or only a dialog. 

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/find-dialog-example-1.png" >}}

### 2.3 Summary

When you want to find a widget always use the _Find/Assert Widget_ action if possible. 

If you want to find something more specific inside a widget or the widget does not have a `mx-name`. Then use "Find" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot find a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

## 3 Clicking a Widget

In ATS there are many actions for clicking a widget. From clicking a widget to clicking a specific datagrid row. The first chapter explains the generic action for clicking a widget. The second chapter explains the actions that conduct a more specific click. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can click something is "Click".

### 3.1 Generic Action

When you want to click a widget the main choice is always the [_Click Widget_](/addons/ats-addon/rg-one-click-widget/) action. It clicks the widget you need using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of  `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" >}}

The _Click Widget_ action works on every widget that has a `mx-name`. 

_The Click Widget Action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/click-widget-action-search-1.png" >}}

If the generic action does not work check if there is a specific one.

### 3.2 Specific Action

ATS also has a few specific click actions. To find these use the search term, "Click" in combination with the widget name. 

1.  Example, you want to click the load more button inside a listview widget. You cannot use the _Click Widget_ action because the load more button does not have its own `mx-name`. It is part of the listview widget. The solution is to use one of the following search terms, "Click load more" or "Click listview". ATS checks all the actions and returns those that match these words. You see there is an action called [_Click Widget Button_](/addons/ats-addon/rg-one-click-widget-button/). The _Click Widget Button_ action uses the `mx-name` of the widget and the button type to click the right button. In this case, select the "load more" type.
2.  Example, you want to click a specific datagrid row inside a datagrid. You can use the _Click Widget_ action in combination with the column name, but if there are multiple datagrids ATS cannot distinguish them. The solution is to use the following search term, "Click DataGrid".  ATS checks all the actions and returns those that match these words. You see there is an action called [_Click DataGrid Row_](/addons/ats-addon/rg-one-click-datagrid-row/). The _Click DataGrid Row_  action enables you to click a datagrid row containing a specific value in a specific column. This action also works on listviews and templategrids.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/click-datagrid-row-action-search-1.png" >}}

3.  Example, you want to click a menu item in a menu bar widget.
You cannot use the _Click Widget_ action because the menu item does not have its own `mx-name`. It is part of the menu bar widget. The solution is to use the following search term, "Click menu".  ATS checks all the actions and returns those that match these words.  You see there is an action called [_Click Menu Item_](/addons/ats-addon/rg-one-click-menu-item/). The _Click Menu Item_ action clicks on a menu item inside a menubar widget using the caption.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/click-menu-item-action-search-1.png" >}}

4.  Example, you want to click an element you found in a previous step. You cannot use the _Click Widget_ action because it does not accept an element as input. The solution is to use the following search term, "Click/Doubleclick". ATS checks all the actions and returns those that match these words.  You see there is an action called [_Click/Doubleclick_](/addons/ats-addon/rg-one-clickdoubleclick/). The _Click/Doubleclick_ action is the action to use when you want to click an element found in a previous step.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/clickdoubleclick-action-search-1.png" >}}

### 3.3 Summary

When you want to click a widget always use the _Click Widget_ action if possible. 

If you want to click something more specific inside a widget or the widget does not have a `mx-name`. Then use "Click" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot click a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

## 4 Set an input widget

In ATS there are several actions for setting an input widget. From a simple action that covers most situations to checkboxes inside tables. The first chapter explains the generic action for setting an input widget. The second chapter explains the actions that set a more specific input widget. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can handle an input widget is "Set".

### 4.1 Generic Action

When you want to set an input widget the main choice is always the [_Set Value_](/addons/ats-addon/rg-one-set-value/) action. It sets the input widget using the `mx-name` of the widget and the value to set. ATS uses the **Widget Name** parameter instead of  `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" >}}

The _Set Value_ action works on almost every widget that is an input widget.

_The Set Value Action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/set-value-action-search-1.png" >}}

If the generic action does not work check if there is a specific one.

### 4.2 Specific Action

 ATS also has a few specific actions for setting an input widget. To find these use the search term, "Set" in combination with the widget name.

1.  Example, you want to set the value of a checkbox widget, but you want to set it to a specific state. You cannot use the _Set Value_ action because it does not work. The solution is to use the following search term, "Set Checkbox". ATS checks all the actions and returns those that match these words. You see there is an action called [_Set Checkbox Value_](/addons/ats-addon/rg-one-set-checkbox-value/). The _Set Checkbox Value_ action uses the `mx-name` of the widget and the Boolean value you set to check or uncheck the checkbox.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/set-checkbox-value-action-search-1.png" >}}

2.  Example, you want to set the BooleanSlider widget to certain value. You cannot use the _Set Value_ action because it does not work. The solution is to use the following search term, "Set BooleanSlider". ATS checks all the actions and returns those that match these words. You see there is an action called [_Set BooleanSlider Value_](/addons/ats-addon/rg-one-set-booleanslider-value/). The _Set BooleanSlider Value_ action uses the `mx-name` of the widget and the value you want to set the slider to.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/set-booleanslider-value-action-search-1.png" >}}

3.  Example, you want to set the radiobutton inside a GridSelector widget. You cannot use the _Set Value_ because the radiobutton does not have its own `mx-name`. It is part of the GridSelector widget. The solution is to use the following search term, "Set Grid Selector". ATS checks all the actions and returns those that match these words. You see there is an action called [_Set Grid Selector Value_](/addons/ats-addon/rg-one-set-grid-selector-radiobutton-checked/). The _Set Grid Selector Value_ action uses the `mx-name` of the widget, column caption and row caption to locate the radiobutton.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/set-grid-selector-radiobutton-action-search-1.png" >}}

4.  Example, you want to set an input reference selector widget. You cannot use the _Set Value_ action because it does not work. The solution is to use the following search term, "Set InputReferenceSelector". ATS checks all the actions and returns those that match these words. You see there is an action called [_Set InputReferenceSelector Value_](/addons/ats-addon/rg-one-set-inputreferenceselector-value/). The _Set InputReferenceSelector Value_ action uses the `mx-name` and the value you set to set the InputReferenceSelector widget.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/set-inputreferenceselector-value-action-search-1.png" >}}

### 4.3 Summary

When you want to set an input widget always use the _Set Value_ action if possible. 

If you want to set a special input widget or the widget does not have a `mx-name`. Then use "Click" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot set an input widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

## 5 Retrieving a value from a widget

In ATS there are several actions for getting a value from a widget. The first chapter explains the generic action for getting a value from a widget. The second chapter explains the actions that get a specific value from a widget. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can get a value is "Get".

### 5.1 Generic Action

When you want to get a value from a widget the main choice is always the [Get Value](/addons/ats-addon/rg-one-get-value/) action. It retrieves the value of a widget using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of  `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" >}}

The _Get Value_ action works on almost every widget that is an input widget.

_The Get Value Action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/get-value-action-search-1.png" >}}

If the generic action does not work check if there is a specific one.

### 5.2 Specific Action

ATS also has a few specific actions for getting a value from an widget. To find these use the search term, "Get" in combination with the widget name.

1.  Example, you want to get the value of an Input Reference Selector widget. You cannot use the _Get Value_ action because it does not work. The solution is to use the following search term, "Get InputReferenceSelector". ATS checks all the actions and returns those that match these words. You see there is an action called [_ Get InputReferenceSelector_](/addons/ats-addon/rg-one-get-inputreferenceselector-value/). The _Get InputReferenceSelector_ action returns the value the InputReferenceSelector widget is set to using the `mx-name`. 

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/get-inputreferenceselector-value-action-search-1.png" >}}

2.  Example, you want to get the value displayed in the CKEditor widget. You cannot use the _Get Value_ action because it does not work. The solution is to use the following search term, "Get CKEditor". ATS checks all the actions and returns those that match these words. You see there is an action called [_Get CKEditor Value_](/addons/ats-addon/rg-one-get-ckeditor-value/). The  _Get CKEditor Value_ action uses the `mx-name` to return the value displayed in the CKEditor widget.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/get-ckeditor-value-action-search-1.png" >}}

3.  Example, you want to get the message displayed in the dialog box widget. You cannot use the _Get Value_ action because there is no `mx-name`. The solution is to use the following search term "Get Dialog".  ATS checks all the actions and returns those that match these words. You see there is an action called [_Get Dialog Message Text_](/addons/ats-addon/rg-one-get-dialog-message-text/). The  _Get Dialog Message Text_ action uses the dialog as a WebElement to retrieve the message text. You use the _Find/Assert Dialog_ action to get the dialog as a WebElement.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/get-dialog-message-text-action-search-1.png" >}}

### 5.3 Summary

When you want to get a value from a widget always use the _Get Value_ action if possible. 

If you want to get the value from a specific widget or the widget does not have a `mx-name`. Then use "Get" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

In case you cannot get the value from a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

## 6 Asserting values/information

In ATS there are several actions for asserting values. The first chapter explains the generic action for asserting a value inside your app. The second chapter explains the actions that assert specific values inside your app or inside ATS. The last chapter provides a summary of the first two chapters. The magic word while searching for an action that can assert a value is "Assert".

### 6.1 Generic Action

When you want to assert a value inside a widget the main choice is always the [_Assert Value_](/addons/ats-addon/rg-one-assert-value/) action. It asserts the value of a widget using the `mx-name` of the widget. ATS uses the **Widget Name** parameter instead of  `mx-name`.

The **Widget Name** is found using the ATS Helper, the value is the **Widget Name**:

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/mx-name-ats-helper-cp-1.png" >}}

The _Assert Value_ action works on almost every widget that is an input widget.

_The Assert Value Action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/assert-value-action-search-1.png" >}}

If the generic action does not work check if there is a specific one.

### 6.2 Specific Action

ATS also has a few specific actions for asserting values in a widget or inside ATS. To find these use the search term "Assert" in combination with the name of the widget or in combination with what you want to assert.

1.  Example, you want to assert that a specific validation message appears. You cannot use the _Assert Value_ action because that would assert the value inside the widget and not the validation message. The solution is to use the following search term, "Assert Validation". ATS checks all the actions and returns those that match these words. You see there is an action called [_Assert Validation Message_](/addons/ats-addon/rg-one-assert-validation-message/). The _Assert Validation Message_ action uses the `mx-name` of a widget to assert the validation message that appears in the widget.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/assert-validation-message-action-search-1.png" >}}

2.  Example, you want to assert that the right page has opened. You cannot use the _Assert Value_ because there is no `mx-name` that you can use. The solution is to use the following search term, "Assert Page".  ATS checks all the actions and returns those that match these words. You see there is an action called [_Assert Current Page_](/addons/ats-addon/rg-one-assert-current-page/). The _Assert Current Page_ action uses the page title to assert that the right page has opened.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/assert-current-page-action-search-1.png" >}}

	These examples showed actions meant to assert something in your Mendix app. ATS also has actions that assert internal outcomes/values. 

3.  Example, you want to assert that the outcome of an earlier test step is not the same as a certain value. You cannot use the _Assert Value_ action because you want to assert a value inside ATS.  The solution is to use the following search term, "Assert not equal". ATS checks all the actions and returns those that match these words. You see there is an action called [_Assert Not equals_](/addons/ats-addon/rg-one-assert-not-equals/). The _Assert Not equals_ action compares two provided values and checks if they are equal or not.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/assert-not-equals-action-search-1.png" >}}

### 6.3 Summary

When you want to assert a value from a widget always use the _Assert Value_ action if possible.

If you want to assert a value from a specific widget or the widget does not have a `mx-name`. Then use "Assert" in combination with the widget name as displayed in the [Mendix Marketplace](https://marketplace.mendix.com/), the Mendix modeler. You can also find the name using the ATS Helper.

 In case you cannot assert the value from a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

## 7 Generating values/information

In ATS there are several actions for generating random or present time values. The first chapter explains a generic action that makes a reusable string. The second chapter explains the actions that perform more specific tasks. The last chapter provides a summary of the first two chapters. In this case, there is no magic word to find the actions you need.

### 7.1 Generic Action

In some test cases, you want to enter the same value a few times. Instead of entering the same value every time you can use the [_Concatenate String_](/addons/ats-addon/rg-one-concatenate-string/). The _Concatenate String_ action combines the text you enter and returns it so that you can reuse that value in different actions.

It is also used for creating variable selectors. 

_The Concatenate String action_

{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/concatenate-string-action-search-1.png" >}}

### 7.2 Specific Action

ATS also has a few specific actions for generating values to use in your test case. Search terms used to find these are, "Random" or "Current".

1.  Example, you want to have a unique value in your test case. That also makes your test case reusable. The solution is to use the following search term, "Random".  ATS checks all the actions and returns those that match these words. You see there is an action called [_Random String_](/addons/ats-addon/rg-one-random-string/). The _Random String_ action generates a random value and allows you to set a prefix and/or postfix.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/random-string-action-search-1.png" >}}

2.  Example, you want to have a unique number value in your test case. That also makes your test case reusable. The solution is to use the following search term, "Random".  ATS checks all the actions and returns those that match these words. You see there is an action called [_Random Number_](/addons/ats-addon/rg-one-random-number/). The _Random Number_ action generates a random number and allows you to set a minimum and maximum.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/random-number-action-search-1.png" >}}

3.  Example, you want to use today's date in your test case. This makes your test case reusable, but you don't want to enter it every time you execute the test case. The solution is to use the following search term, "Current Date". ATS checks all the actions and returns those that match these words. You see there is an action called [_Get Current DateTime String_](/addons/ats-addon/rg-one-get-current-datetime-string/). The _Get Current DateTime String_ action retrieves the current date and allows you to set the date format.

	{{< figure src="/attachments/addons/ats-addon/bp/bp-one/bp-one-finding-the-action-you-need/get-current-datetime-string-action-search-1.png" >}}

### 7.3 Summary

For generating values or information you should follow the first two sections of this chapter. There is no generic solution regarding this. Only a constant provider like the _Concatenate String_ action.

## 8 Summary

It all comes down to following certain steps to achieve the right result. 

1. Use the ATS Recorder. If the ATS Recorder does not work go to step 2.

2.  The recorder not working, does not mean ATS cannot interact with the widget. Select the action that goes with the task you want to perform.

     Task                             | Action |
    ----------------------------------|:------:|
     Finding a widget                 | The [_Find/Assert Widget_](/addons/ats-addon/rg-one-findassert-widget/) action. |
     Clicking a widget                | The [_Click Widget_](/addons/ats-addon/rg-one-click-widget/) action. |
     Cover an input widget            | The [_Set Value_](/addons/ats-addon/rg-one-set-value/) action. |
     Retrieving a value from a widget | The [_Get Value_](/addons/ats-addon/rg-one-get-value/) action. |
     Asserting values/information     | The [_Assert Value_](/addons/ats-addon/rg-one-assert-value/) action. |
     Generating values/information    | Please read the section for more information. |

	If these don't work because you don't have an mx-name or they don't cover the task go to step 3.

3.  If your task is not covered by the generic action use the following search terms depending on your task.

     Task                             | Search Term |
    ----------------------------------|:------:|
     Finding a widget                 | "Find" in combination with the name of the widget. |
     Clicking a widget                | "Click" in combination with the name of the widget. |
     Cover an input widget            | "Set" in combination with the name of the widget. |
     Retrieving a value from a widget | "Get" in combination with the name of the widget. |
     Asserting values/information     | "Assert" in combination with the name of the widget. |
     Generating values/information    | Please read the section for more information. |

    If you are certain that ATS does not support you task go to step 4.

4. If ATS does not support your task with a standard solution you must create your own solution. Go to [How to Create Custom Actions](/addons/ats-addon/ht-one-create-custom-actions/).

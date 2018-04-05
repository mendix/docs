---
title: "Finding the Action you Need"
parent: "bp-version-2"
---

## 1 Introduction

This document explains the best way to find the action you need in ATS. This is done by using six main categories for what you are trying to achieve. Each category explains the generic solution and the widget specific solutions using examples. These are the categories:

* Finding a widget
* Clicking a widget
* Covering an input widget
* Retrieving a value from a widget
* Asserting values/information
* Generating values/information
 
Select the category that covers your situation. If you are not sure, use the widget name to search for an action inside ATS and take a look at what pops up.

For a quick summary and action plan, go straight to section [8 Summary](#summary).

{{% alert type="info" %}}

When the ATS recorder does not record any steps, you can use this best practice to find the right action.

{{% /alert %}}

## 2 Finding a Widget
 
In ATS there are many actions for finding a widget, from generically finding a widget to finding a specific data grid row. The first part of this section explains the generic action for finding a widget, and the second part explains the actions that conduct a more specific search. The last part of the section provides a summary of the first two parts. The magic word while searching for an action that can find something is "Find."

### 2.1 Generic Action

When you want to find a widget, the main choice is always the [Find/Assert Widget](../../refguide/rg-version-1/findassert-widget) action. It finds the widget you need using the `mx-name` of the widget. 

ATS uses the `widget name` parameter instead of  `mx-name`. The widget name is found using the ATS helper, and the value is the `widget name`:

![](attachments/finding-the-action-you-need-2/mx-name-ats-helper-cp.png)

The Find/Assert Widget action works on every widget that has a `mx-name`. 

This is the **Find/Assert Widget** action:

![](attachments/finding-the-action-you-need-2/findassert-widget-action-search.png)  

If the generic action does not work, check if there is a specific one.

### 2.2 Specific Action

When you are looking for a specific widget or content of that widget, use the widget name in the search.

#### 2.2.1 Example 1

In this example, you want to find a row inside a data grid widget. You can use the Find/Assert Widget action in combination with the column name, but that doesn't work if there are multiple data grids.

The solution in this situation is to use the following search term: "Find Datagrid". ATS checks all the actions and returns those that match these words. There is an action called [Find/Assert DataGrid Row](../../refguide/rg-version-1/findassert-datagrid-row), which enables searching for a data grid row containing a specific value in a specific column. This action also works on list views and template grids.

![](attachments/finding-the-action-you-need-2/find-datagrid-example.png)

#### 2.2.2 Example 2

In this example, you want to find the check box in a simple check box set selector widget. You cannot use the Find/Assert Widget action here, because the check box does not have its own `mx-name`. It is part of the simple check box set selector widget.

The solution in this situation is to use the following search term: "Find Simple Checkbox Set Selector". ATS checks all the actions and returns those that match these words. There is an action called [Find Simple Checkbox Set Selector](../../refguide/rg-version-1/find-simple-checkbox-set-selector), which finds the check box based on the `widget name` of the entire widget and the value displayed by the check box.

![](attachments/finding-the-action-you-need-2/find-simple-checkbox-set-selector-example.png)

#### 2.2.3 Example 3

In this example, you want to find a dialog box based on the title or text inside. You cannot use the Find/Assert Widget action, because the dialog box does not have a `mx-name`.

The solution in this situation is to use the following search term: "Find Dialog". ATS checks all the actions and returns those that match these words. There is an action called [Find/Assert Dialog](../../refguide/rg-version-1/findassert-dialog), which can find a dialog based on title, text, or only a dialog. 

![](attachments/finding-the-action-you-need-2/find-dialog-example.png)

### 2.3 Summary

When you want to find a widget, always use the Find/Assert Widget action if possible. 

If you want to find something more specific inside a widget or the widget does not have an `mx-name`, use "Find" in combination with the widget name as displayed in the [Mendix App Store](https://appstore.home.mendix.com/) and the Mendix Modeler. You can also find the name using the ATS helper.

If you cannot find a widget because it has no unique name or because it is not supported, see [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions) for more information.
 
 ## 3 Clicking a Widget

In ATS, there are many actions for clicking a widget, from generically clicking a widget to clicking a specific data grid row. The first part of this section explains the generic action for clicking a widget, and the second part explains the actions that conduct a more specific click. The last part of the section provides a summary of the first two parts. The magic word while searching for an action that can click something is "Click."

 ### 3.1 Generic Action

When you want to click a widget, the main choice is always the [Click Widget](../../refguide/rg-version-1/click-widget) action. It clicks the widget you need using the `mx-name` of the widget.

ATS uses the `widget name` parameter instead of `mx-name`. The widget name is found using the ATS helper, and the value is the `widget name`:

![](attachments/finding-the-action-you-need-2/mx-name-ats-helper-cp.png)

The Click Widget action works on every widget that has a `mx-name`.

This is the **Click Widget** action:

![](attachments/finding-the-action-you-need-2/click-widget-action-search.png)

If the generic action does not work, check if there is a specific one.

### 3.2 Specific Action

ATS also has a few specific click actions. To find these, use the search term "Click" in combination with the widget name. 

#### 3.2.1 Example 1

In this example, you want to click the **Load more** button inside a list view widget. You cannot use the Click Widget action, because the button does not have its own `mx-name`. It is part of the list view widget.

The solution in this situation is to use one of the following search terms: "Click Widget Button" because you want to click a button that is part of a widget. ATS checks all the actions and returns those that match these words. There is an action called [Click Widget Button](../../refguide/rg-version-1/click-widget-button), which uses the `mx-name` of the widget and the button type to click the right button. In this case, select the "load more" type.

![](attachments/finding-the-action-you-need-2/click-widget-button-action-search.png)

#### 3.2.2 Example 2

In this example, you want to click a specific data grid row inside a data grid. You can use the Click Widget action in combination with the column name, but if there are multiple data grids, ATS cannot distinguish them.

The solution in this situation is to use the following search term: "Click DataGrid".  ATS checks all the actions and returns those that match these words. There is an action called [Click DataGrid Row](../../refguide/rg-version-1/click-datagrid-row). which enables you to click a data grid row containing a specific value in a specific column. This action also works on list views and template grids.

![](attachments/finding-the-action-you-need-2/click-datagrid-row-action-search.png)

#### 3.2.3 Example 3

In this example, you want to click a menu item in a menu bar widget. You cannot use the Click Widget action, because the menu item does not have its own `mx-name`. It is part of the menu bar widget.

The solution in this situation is to use the following search term: "Click menu". ATS checks all the actions and returns those that match these words. There is an action called [Click Menu Item](../../refguide/rg-version-1/click-menu-item), which clicks on a menu item inside a menu bar widget using the caption.

![](attachments/finding-the-action-you-need-2/click-menu-item-action-search.png)

#### 3.2.4 Example 4

In this example, you want to click an element you found in a previous step. You cannot use the Click Widget action, because it does not accept an element as input.

The solution in this situation is to use the following search term: "Click/Doubleclick". ATS checks all the actions and returns those that match these words. You see there is an action called [Click/Doubleclick](../../refguide/rg-version-1/clickdoubleclick), which you should use when you want to click an element found in a previous step.

![](attachments/finding-the-action-you-need-2/clickdoubleclick-action-search.png)

### 3.3 Summary

When you want to click a widget, always use the Click Widget action if possible. 

If you want to click something more specific inside a widget or the widget does not have an `mx-name`, use "Click" in combination with the widget name as displayed in the [Mendix App Store](https://appstore.home.mendix.com/) and the Mendix modeler. You can also find the name using the ATS helper.

If you cannot click a widget because it has no unique name or because it is not supported, see [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions) for more information.

## 4 Setting an Input Widget

In ATS, there are several actions for setting an input widget, from a simple action that covers most situations to check boxes inside tables. The first part of this section explains the generic action for setting an input widget, and the second part explains the actions that set a more specific input widget. The last part of the section provides a summary of the first two parts. The magic word while searching for an action that can handle an input widget is "Set."

### 4.1 Generic Action

When you want to set an input widget, the main choice is always the [Set Value](../../refguide/rg-version-1/set-value) action. It sets the input widget using the `mx-name` of the widget and the value to set. 

ATS uses the `widget name` parameter instead of `mx-name`. The widget name is found using the ATS helper, and the value is the `widget name`:

![](attachments/finding-the-action-you-need-2/mx-name-ats-helper-cp.png)

The Set Value action works on almost every widget that is an input widget.
 
This is the **Set Value** action:

![](attachments/finding-the-action-you-need-2/set-value-action-search.png)

If the generic action does not work, check if there is a specific one.

### 4.2 Specific Action

ATS also has a few specific actions for setting an input widget. To find these, use the search term "Set" in combination with the widget name.

#### 4.2.1 Example 1

In this example, you want to set the value of a check box widget, but you want to set it to a specific state. You cannot use the Set Value action because it does not work.

The solution in this situation is to use the following search term: "Set Checkbox". ATS checks all the actions and returns those that match these words. There is an action called [Set Checkbox Value](../../refguide/rg-version-1/set-checkbox-value), which uses the `mx-name` of the widget and the boolean value you set to check or clear the check box.

![](attachments/finding-the-action-you-need-2/set-checkbox-value-action-search.png)

#### 4.2.2 Example 2

In this example, you want to set the BooleanSlider widget to certain value. You cannot use the Set Value action because it does not work. 

The solution in this situation is to use the following search term: "Set BooleanSlider". ATS checks all the actions and returns those that match these words. There is an action called [Set BooleanSlider Value](../../refguide/rg-version-1/set-booleanslider-value), which uses the `mx-name` of the widget and the value to which you want to set the slider.

![](attachments/finding-the-action-you-need-2/set-booleanslider-value-action-search.png)

#### 4.2.3 Example 3

In this example, you want to set a radio button inside a GridSelector widget. You cannot use the Set Value, because the radio button does not have its own `mx-name`. It is part of the GridSelector widget.

The solution in this situation is to use the following search term: "Set Grid Selector". ATS checks all the actions and returns those that match these words. There is an action called [Set Grid Selector Value](../../refguide/rg-version-1/set-grid-selector-radiobutton-checked), which uses the `mx-name` of the widget, column caption, and row caption to locate the radio button.

![](attachments/finding-the-action-you-need-2/set-grid-selector-radiobutton-action-search.png)

#### 4.2.4 Example 4

In this example, you want to set an input reference selector widget. You cannot use the Set Value action because it does not work. 

The solution in this situation is to use the following search term: "Set InputReferenceSelector". ATS checks all the actions and returns those that match these words. There is an action called [Set InputReferenceSelector Value](../../refguide/rg-version-1/set-inputreferenceselector-value), which uses the `mx-name` and the value to which you set the InputReferenceSelector widget.

![](attachments/finding-the-action-you-need-2/set-inputreferenceselector-value-action-search.png)

### 4.3 Summary

When you want to set an input widget, always use the Set Value action if possible. 

If you want to set a special input widget or the widget does not have an `mx-name`, use "Click" in combination with the widget name as displayed in the [Mendix App Store](https://appstore.home.mendix.com/) and the Mendix modeler. You can also find the name using the ATS helper.

If you cannot set an input widget because it has no unique name or because it is not supported, see [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions) for more information.

## 5 Retrieving a Value from a Widget

In ATS, there are several actions for getting a value from a widget. The first part of this section explains the generic action for getting a value from a widget, and the second part explains the actions that get a specific value from a widget. The last part of the section provides a summary of the first two parts. The magic word while searching for an action that can get a value is "Get."

### 5.1 Generic Action

When you want to get a value from a widget, the main choice is always the [Get Value](../../refguide/rg-version-1/get-value) action. It retrieves the value of a widget using the `mx-name` of the widget.

ATS uses the `widget name` parameter instead of  `mx-name`. The widget name is found using the ATS helper, and the value is the `widget name`:

![](attachments/finding-the-action-you-need-2/mx-name-ats-helper-cp.png)

The Get Value action works on almost every widget that is an input widget.
 
This is the Get Value action:

![](attachments/finding-the-action-you-need-2/get-value-action-search.png)

If the generic action does not work, check if there is a specific one.

### 5.2 Specific Action

ATS has a few specific actions for getting a value from an widget. To find these, use the search term "Get" in combination with the widget name.

#### 5.2.1 Example 1

In this example, you want to get the value of an InputReferenceSelector widget. You cannot use the Get Value action, because it does not work. 

The solution in this situation is to use the following search term: "Get InputReferenceSelector". ATS checks all the actions and returns those that match these words. There is an action called [Get InputReferenceSelector](../../refguide/rg-version-1/get-inputreferenceselector-value), which returns the value the InputReferenceSelector widget is set to using the `mx-name`. 

![](attachments/finding-the-action-you-need-2/get-inputreferenceselector-value-action-search.png)

#### 5.2.2 Example 2

In this example, you want to get the value displayed in the CKEditor widget. You cannot use the Get Value action because it does not work.  

The solution in this situation is to use the following search term: "Get CKEditor". ATS checks all the actions and returns those that match these words. There is an action called [Get CKEditor Value](../../refguide/rg-version-1/get-ckeditor-value), which uses the `mx-name` to return the value displayed in the CKEditor widget.
![](attachments/finding-the-action-you-need-2/get-ckeditor-value-action-search.png)

#### 5.2.3 Example 3

In this example, you want to get the message displayed in the dialog box widget. You cannot use the Get Value action because there is no `mx-name`.

The solution in this situation is to use the following search term: "Get Dialog". ATS checks all the actions and returns those that match these words. There is an action called [Get Dialog Message Text](../../refguide/rg-version-1/get-dialog-message-text), which uses the dialog as a WebElement to retrieve the message text. You use the Find/Assert Dialog action to get the dialog as a WebEelement.

![](attachments/finding-the-action-you-need-2/get-dialog-message-text-action-search.png)

### 5.3 Summary

When you want to get a value from a widget, always use the Get Value action if possible. 

If you want to get the value from a specific widget or the widget does not have an `mx-name`, use "Get" in combination with the widget name as displayed in the [Mendix App Store](https://appstore.home.mendix.com/) and the Mendix modeler. You can also find the name using the ATS helper.

If you cannot get the value from a widget because it has no unique name or because it is not supported, see [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions) for more information.

## 6 Asserting Values/Information

In ATS, there are several actions for asserting values. The first part of this section explains the generic action for asserting a value inside your app, and the second part explains the actions that assert specific values inside your app or inside ATS. The last part of the section provides a summary of the first two parts. The magic word while searching for an action that can assert a value is "Assert."

### 6.1 Generic Action

When you want to assert a value inside a widget, the main choice is always the [Assert Value](../../refguide/rg-version-1/assert-value) action. It asserts the value of a widget using the `mx-name` of the widget.

ATS uses the `widget name` parameter instead of `mx-name`. The widget name is found using the ATS helper, and the value is the `widget name`:

![](attachments/finding-the-action-you-need-2/mx-name-ats-helper-cp.png)

The Assert Value action works on almost every widget that is an input widget.
 
This is the Assert Value action:

![](attachments/finding-the-action-you-need-2/assert-value-action-search.png)

If the generic action does not work, check if there is a specific one.

### 6.2 Specific Action

ATS has a few specific actions for asserting values in a widget or inside ATS. To find these, use the search term "Assert" in combination with the name of the widget or in combination with what you want to assert.

#### 6.2.1 Example 1

In this example, you want to assert that a specific validation message appears. You cannot use the Assert Value action, because that would assert the value inside the widget and not the validation message.

The solution in this situation is to use the following search term: "Assert Validation". ATS checks all the actions and returns those that match these words. There is an action called [Assert Validation Message](../../refguide/rg-version-1/assert-validation-message), which uses the `mx-name` of a widget to assert the validation message that appears in the widget.

![](attachments/finding-the-action-you-need-2/assert-validation-message-action-search.png)
    
#### 6.2.2 Example 2

In this example, you want to assert that the right page has opened. You cannot use the Assert Value, because there is no `mx-name` that you can use.

The solution in this situation is to use the following search term: "Assert Page". ATS checks all the actions and returns those that match these words. There is an action called [Assert Current Page](../../refguide/rg-version-1/assert-current-page), which uses the page title to assert that the right page has opened.

![](attachments/finding-the-action-you-need-2/assert-current-page-action-search.png)

#### 6.2.3 Example 3

The above examples show actions meant to assert something in your Mendix app. ATS also has actions that assert internal outcomes/values. 

In this example, you want to assert that the outcome of an earlier test step is not the same as a certain value. You cannot use the Assert Value action, because you want to assert a value inside ATS. 

The solution in this situation is to use the following search term: "Assert not equal". ATS checks all the actions and returns those that match these words. There is an action called [Assert Not Equals](../../refguide/rg-version-1/assert-not-equals), which compares two provided values and checks if they are equal or not.

![](attachments/finding-the-action-you-need-2/assert-not-equals-action-search.png)

### 6.3 Summary

When you want to assert a value from a widget always use the _Assert Value_ action if possible.

If you want to assert a value from a specific widget or the widget does not have a `mx-name`. Then use "Assert" in combination with the widget name as displayed in the [Mendix App Store](https://appstore.home.mendix.com/), the Mendix modeler. You can also find the name using the ATS helper.

 In case you cannot assert the value from a widget due to no unique name or because it is not supported, go to [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions).

## 7 Generating Values/Information<a name="GeneratingValuesInformation"></a>

In ATS, there are several actions for generating random or present time values. The first part of this section explains a generic action that makes a reusable string, and the second part explains the actions that perform more specific tasks. The last part of the section provides a summary of the first two parts. In this case, there is no magic word to find the actions you need.

### 7.1 Generic Action

In some test cases, you want to enter the same value a few times. Instead of entering the same value every time, you can use the [Concatenate String](../../refguide/rg-version-1/concatenate-string) action, which combines the text you enter and returns it so that you can reuse that value in different actions.

It is also used for creating variable selectors. 

This is the Concatenate String action:

![](attachments/finding-the-action-you-need-2/concatenate-string-action-search.png)

### 7.2 Specific Action

ATS also has a few specific actions for generating values to use in your test case. The search terms used to find these are "Random" and "Current."

#### 7.2.1 Example 1

In this example, you want to have a unique value in your test case. That also makes your test case reusable. 

The solution in this situation is to use the following search term: "Random".  ATS checks all the actions and returns those that match this word. There is an action called [Random String](../../refguide/rg-version-1/random-string), which generates a random value and allows you to set a prefix and/or postfix.

![](attachments/finding-the-action-you-need-2/random-string-action-search.png)

#### 7.2.2 Example 2

In this example, you want to have a unique number value in your test case. That also makes your test case reusable.

The solution in this situation is to use the following search term: "Random". ATS checks all the actions and returns those that match this word. There is an action called [Random Number](../../refguide/rg-version-1/random-number), which generates a random number and allows you to set a minimum and maximum.

![](attachments/finding-the-action-you-need-2/random-number-action-search.png)

#### 7.2.3 Example 3

In this example, you want to use today's date in your test case. This makes your test case reusable, but you don't want to enter it every time you execute the test case.

The solution in this situation is to use the following search term: "Current Date". ATS checks all the actions and returns those that match these words. There is an action called [Get Current DateTime String](../../refguide/rg-version-1/get-current-datetime-string), which retrieves the current date and allows you to set the date format.

![](attachments/finding-the-action-you-need-2/get-current-datetime-string-action-search.png)

### 7.3 Summary

For generating values or information, you should follow the first two parts of this section. There is no generic solution regarding this, only a constant provider like the Concatenate String action.

## 8 Summary<a name="summary"></a>

It all comes down to following these steps to achieve the right result

1. Use the ATS Recorder. If the ATS Recorder does not work, go to step 2 below.
2.  If the ATS Recorder does not work, that does not also mean that ATS cannot interact with the widget. Select the action that goes with the task you want to perform:

     Task                             | Action |
    ----------------------------------|:------:|
     Finding a widget                 | [Find/Assert Widget](../../refguide/rg-version-1/findassert-widget) action |
     Clicking a widget                | [Click Widget](../../refguide/rg-version-1/click-widget) action |
     Cover an input widget            | [Set Value](../../refguide/rg-version-1/set-value) action |
     Retrieving a value from a widget | [Get Value](../../refguide/rg-version-1/get-value) action |
     Asserting values/information     | [Assert Value](../../refguide/rg-version-1/assert-value) action |
     Generating values/information    | See [6 Generating Values/Information](#GeneratingValuesInformation) for more information |

    If these do not work because you do not have an `mx-name` or they don't cover the task, go to step 3 below.
3.  If your task is not covered by the generic action, use the following search terms depending on your task:

     Task                             | Search Term |
    ----------------------------------|:------:|
     Finding a widget                 | "Find" in combination with the name of the widget |
     Clicking a widget                | "Click" in combination with the name of the widget |
     Cover an input widget            | "Set" in combination with the name of the widget |
     Retrieving a value from a widget | "Get" in combination with the name of the widget |
     Asserting values/information     | "Assert" in combination with the name of the widget |
     Generating values/information    | See [6 Generating Values/Information](#GeneratingValuesInformation) for more information |

    If you are certain that ATS does not support your task, go to step 4 below.
4. If ATS does not support your task with a standard solution, you must create your own solution. For more information, see [How to Create Custom Actions](../../howtos/ht-version-1/create-custom-actions).

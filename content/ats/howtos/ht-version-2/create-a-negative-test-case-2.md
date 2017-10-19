---
title: "Create a Negative Test Case"
parent: "ht-version-2"
description: "Describes the steps for performing negative tests with ATS."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create a negative test case in ATS. It uses the company expenses app as an example.

ATS is a functional testing tool that asserts/finds/sets widgets in a Mendix app. Sometimes you don't want to know if a widget is present, but if a widget is not present.

The ‘Click Menu Item’ action clicks a menu item based on the caption. In most situations, you test to make sure it is present, but sometimes you must test to check it is not present. 

For example, when an employee logs in to the company expenses app the admin menu must not be visible. When an administrator logs in the admin menu must be visible. 

To test this, you log in as an employee and assert that you do not see the admin menu. You can automate negative tests in ATS.

_Navigation Menu employee_

![](attachments/create-a-negative-test-case-2/navigation-menu-employee-company-expenses-app.png)

_Navigation Menu administrator_ 

![](attachments/create-a-negative-test-case-2/navigation-menu-administrator-company-expenses-app.png)

**This how-to will teach you how to do the following**

* Create a negative test case

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Complete [How to Create a Test Case](create-a-test-case-2)

## 3 Create a Negative Test Case

The test case used in this how-to is already created. It asserts that the navigation menu displays the correct items. Now we add a step to check if it does not display the **Admin Menu** item.

_The navigation menu_

![](attachments/create-a-negative-test-case-2/navigation-menu-employee-company-expenses-app.png)

_The test case_

![](attachments/create-a-negative-test-case-2/negative-test-case.png)

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Repository** tab.

![](attachments/create-a-negative-test-case-2/go-to-repository.png)

3. Select the test case to add the negative test step.
4. Add the _Assert False_ action where you want to place the negative test step.

![](attachments/create-a-negative-test-case-2/add-the-assert-false.png)

5. Set the **Assert Value** parameter of the _Assert False_ action to **True**.

![](attachments/create-a-negative-test-case-2/assert-value-parameter.png)

6. Next, you add the action needed to search for the menu item as **Precondition**. Check the precondition box and add the [_Find/Assert Menu Item_](/ats/refguide/rg-version-1/findassert-menu-item) action.

![](attachments/create-a-negative-test-case-2/add-findassert-menu-item-as-precondition.png)

7. Now enter the information needed to find the **Admin Menu** as an administrator to verify it is not visible as an employee. Also, enter a proper description.

![](attachments/create-a-negative-test-case-2/negative-test-step-finished.png)

Inner workings;

If ATS can find the **Admin Menu** the precondition passes and the Assert False fails. This ensures the entire test step fails. 
If ATS cannot find the **Admin Menu** the precondition fails and the _Assert False_ is not executed. This ensures that the test case results is "passed". 

Resulting in a test case fail if the menu item is found and a test case pass if it is not found. 

You can use this method for a lot of different things. 

_The finished test case_

![](attachments/create-a-negative-test-case-2/the-finished-test-case.png)

You now know how to create a negative test case.
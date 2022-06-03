---
title: "Create a Negative Test Case"
url: /addons/ats-addon/ht-two-create-a-negative-test-case/
parent: "ht-two"
description: "Describes the steps for performing negative tests with ATS."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create a negative test case in ATS. The how-to uses the Company Expenses app template for an example scenario. However, this app template is no longer platform-supported by Mendix. Therefore, sections using this app template can only be used as reference and not as sections that can be completed step-by-step.

ATS is a functional testing tool that asserts, finds, and sets widgets in a Mendix app. For this scenario, you do not want to know that a widget is present, but that a widget is not present.

The **Click Menu Item** action clicks a menu item based on the caption. In most situations, you test to make sure it is present, but sometimes you must test to check it is not present.

For example, when an employee logs in to the Company Expenses app, the admin menu must not be visible. When an administrator logs in, the admin menu must be visible. 

To test this, you log in as an employee and assert that you do not see the admin menu. You can automate negative tests in ATS.

This is the navigation menu for an employee:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/navigation-menu-employee-company-expenses-app.png" >}}

This is the navigation menu for an administrator:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/navigation-menu-administrator-company-expenses-app.png" >}}

**This how-to will teach you how to do the following**

* Create a negative test case

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Read [How to Create a Test Case](/addons/ats-addon/ht-two-create-a-test-case/)

## 3 Creating a Negative Test Case

The test case used in this how-to was created beforehand. It asserts that the navigation menu displays the correct items. Next, you add a step to check that it does not display the **Admin Menu** item.

This is the navigation menu:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/navigation-menu-employee-company-expenses-app.png" >}}

This is the final test case:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/negative-test-case.png" >}}

1. Open your app in ATS and go to the **Test Cases** menu item.
2.  Go to the **Repository** tab:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/go-to-repository.png" >}}

3. Select the test case to add the negative test step.
4.  Add the **Assert not true** action where you want to place the negative test step:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/Assert_not_true_step_added.png" >}}

5.  Set the **Assert Value** parameter of the Assert not true action to **True**:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/set-to-true.png" >}}

6.  Add the action needed to search for the menu item as a **Precondition**. Check the precondition box and add the [Find/Assert Menu Item](/addons/ats-addon/rg-one-findassert-menu-item/) action:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/add-findassert-menu-item-as-precondition-2.png" >}}

7.  Enter the information needed to find the **Admin Menu** as an administrator to verify it is not visible as an employee. Also, enter a proper description.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/negative-test-step-finished-2.png" >}}

These are the inner-workings:

* If ATS can find the **Admin Menu**, the precondition passes and the Assert not true action fails, which ensures that the entire test step fails.
* If ATS cannot find the **Admin Menu**, the precondition fails and the Assert not true action is not executed, which ensures that the test case result is "passed."

Resulting in a test case fail if the menu item is found and a test case pass if it is not found. 

You can use this method for a lot of different things. 

_The finished test case_

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-a-negative-test-case/the-finished-test-case.png" >}}

 {{% alert color="info" %}}
You can also add the **Assert not false** action with the **Assert value** set to false, instead of the **Assert not true** action, to create a negative test case.
  {{% /alert %}}

## 4 Next Up

The next how-to is [How to Create Extracted Actions](/addons/ats-addon/ht-two-create-extracted-actions/). You find an overview of all the how-tos and the structure on the [ATS 2 How-to's](/addons/ats-addon/ht-two/) page. We advise you to follow the predefined structure.

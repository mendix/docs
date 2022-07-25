---
title: "Create Maintainable Test Cases"
url: /addons/ats-addon/ht-two-create-extracted-actions/
description: "Describes how to create maintainable test cases in ATS."
tags: ["ATS", "testing", "maintainability"]
---

## 1 Introduction

You often reuse some of the same test steps in your test cases. For example, to open the application and logging into the application. Adding these separate steps each time you create a test case is time-consuming. Besides, if the password of the user changes you have to change the password in each test case that uses it. ATS has the functionality to create your own actions, this makes your test cases easier to maintain. You create your own actions from within a test case or by creating a new action from the **repository**. This how-to explains both ways of creating such actions.

This how-to will teach you how to do the following:

* Extract actions
* Create an extracted action from a test case
* Create an extracted action by creating a new action

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Read [How to Get Started](/addons/ats-addon/ht-two-getting-started/)
* Read [How to Create a Test Case](/addons/ats-addon/ht-two-create-a-test-case/)

## 3 Extract actions

You can create an extracted action for all test steps that you use in more than one test case.

### 3.1 Create an extracted action from a test case 

The following steps describe how to extract actions. In this example, we create an extracted action for the **Open Mendix Application** and **Login** actions:

1. Create a test case and enter a name and a description.
2. Add the **Open Mendix Application** and **Login** actions.
3. Set the **URL** input parameter of the **Open Mendix Application** action to **Environment URL**.
4. Enter the needed values in the **Username** and **Password** input parameters of the **Login** action. 
5. Select the checkboxes, which appear when hovering the steps, of both steps.
6.  Click **Extract action**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/extract-actions.png" >}}

	Clicking **extract action** opens the **Action - Set Details** dialog box:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/action-set-details.png" >}}

7. Enter a name in the **Name** field. (For example, *Open application and log in as employee*). It is advised to give your test step a clear name, describing what it does.
8. Enter a description in the **Description** field. (for example, *This action opens the application, based on the environment URL, and logs into the application as employee*). It is advised to give your test step a clear name, for example, describe what it does.
9.  Click **Close**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/close-extracted-action.png" >}}

You now created an extracted action. To view the test steps in the extracted action follow these steps:

1. In your test case click the **Drop-down** menu of the extracted action.
2.  Click **Open**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/click-open.png" >}}

	Clicking **Open** opens the **Action Details** page. On this page you see the test steps in the action. A test case only refers to an action, so if you change a value inside an action that change is noticed in all your test cases that use that action.

	You can also open your extracted action from the repository, as this action is now added to the repository:
	
	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/open-app-and-login-action.png" >}}

To use this custom action in other test cases follow these steps:

1. Create a new test case and give it a name and description.
2. Click **Create step manually**. The folder with your application name contains all custom and extracted actions.
3. Select the action you want to add as test step to your test case.
4.  Click **Select**

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/add-extracted-action.png" >}}

 You have now added your extracted action to another test case. So, if the password changes you only have to change it within the action and not within each test case. 

### 3.2 Create an extracted action by creating a new action 

The following steps describe how to create an extracted action for deleting an expense in a company expenses app:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/Deleting_an_expense.png" >}}

The actions needed to delete an expense are **Click DataGrid row**, **Click Widget** and **Confirm Dialog**. 

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/test-steps-delete-expense.png" >}}

The actions to delete an expense are always the same, but the value of the description can differ. The following steps describe how to create a reusable extracted action of deleting an expense.

1. Open your project in ATS and click the **Test cases** menu item to open the **Repository**.
2. Click the **Actions** drop-down.
3.  Click **New Action**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/create-new-action.png" >}}

	Clicking **New Action** opens the **Create new** dialog box:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/create-new.png" >}}

4. Enter a name in the **Name** field. (for example, *Find and delete an expense based on the description*). Using a clear and concise naming structure is advised.    
5. Enter a description in the **Description** field (for example, *This action deletes an expense based on the description. The description can be entered in the input parameter **Value**.*). Giving each test case a description of what it does is advised.
6.  Click **Create**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/click-create-of-action.png" >}}

7.  Click create to open the **Actions Details** Page.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/action-details-page.png" >}}

8.  Record the test steps needed to delete an expense, these are the **Click DataGrid row**, **Click Widget** and **Confirm Dialog** actions. You can also add the actions manually and enter the needed input parameters yourself.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/added-steps.png" >}}

9. Click the **Settings** tab.
10. Click **New**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/create-new-input-parameter.png" >}}

	Clicking **New** opens the **Edit Input Parameter** dialog box:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/edit-input-parameter-dialog.png" >}}

11. Enter **Column Value** in the **Name** field. When defining action parameter names, always use the ATS [naming conventions](/addons/ats-addon/rg-one-best-practices/).
12. Enter a description in the **Description** field. (for example, *Enter the value of the description of the expense to be deleted.*). Giving each input parameter a description of what to enter in the input parameter is advised.
13. Click **Save**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/save-input-parameter.png" >}}

	Clicking **Save** adds the input parameter:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/added-input-parameter.png" >}}

	You now created a new input parameter. The next step is to link the input parameter to the correct test step. 

14. Click the **Test steps** tab.
15. Open the **Click DatGrid Row** action.
16. Change the input parameter to **Column Value** below **Input values**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/change-input-parameter.png" >}}

You now created an action which can delete a new expenses based on the description. To check whether the action deletes an expense based on the description, add the action to a test case. Enter the **Column Value** and run the test case:

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-create-extracted-actions/enter-input-and-run.png" >}}

Congratulations, you created a reusable extracted action to delete a new expense. Every time you want to delete an expense in your test cases you only have to add this actions and enter the input parameter. 

## 4 Next Up

The next how-to is [How to Schedule Test Cases/Test Suites](/addons/ats-addon/ht-two-schedule-testcase-testsuite/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/addons/ats-addon/ht-two/) page. We advise you to follow the predefined structure.

---
title: "Create a Test Case"
url: /addons/ats-addon/ht-one-create-a-test-case/
weight: 3
description: "Describes how to create a test case and add test steps."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create a test case, add test steps manually, and add test steps using the ATS Recorder. A test case consists of test steps that contain actions. Each action (like clicking a button) performs a task.

This how-to uses the Mendix Company Expenses app as an example, and you will create a test case that submits a new expense in this app. You create the same test case twice, once manually, and once with the ATS Recorder. 

This how-to will teach you how to do the following:

* Create a new test case
* Add test steps to your test case manually
* Add test steps using the ATS Recorder

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

*  Complete [How to Get Started](/addons/ats-addon/ht-one-getting-started/)
*  Complete [How to Install the ATS Helper and ATS Recorder](/addons/ats-addon/ht-one-install-ats-helper-recorder/)

## 3 Creating a Test Case<a name="3"></a>

To create a test case, follow these steps:

1. Open your project in ATS and go to the **Repository**.
2. Click **Add Test** inside the **Tests** tab:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/repository-add-test-case.png" >}}
  
    You can also click **Add Item** inside the **All Objects** tab:
    
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/repository-add-item-case.png" >}}
  
    Clicking either button opens the **Create new** dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/repository-create-new-case.png" >}}
  
3. Select **Test Case** in the drop-down menu.
4. Enter a name in the **Name** field (for example, *TC - 001.01 - Create new Expense (Manually)*). Using a predefined naming structure is advised. 
5. Enter a description in the **Description** field (for example, *This test case creates a new expense in the company expenses app*). Giving each test case a description of what it does is advised.
6. Click **Create**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/repository-create-new-test-case.png" >}}

    This will open the **Test Case** page. ATS displays the **Name** and **Description**  in the upper-left corner of this page.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/test-case-page.png" >}}

## 4 Adding Test Steps Manually

The following steps describe how to add test steps manually to your test case. You will add the steps necessary for creating a new expense in the Company Expenses app.

1. Click **Add** on the **Test Case** page:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/test-case-page-add.png" >}}

    This will open the **Test Step Setup** dialog box.
2. The first step is opening the Company Expenses app, which you do this by entering a URL in the browser. ATS does the same by using the [open application](/addons/ats-addon/rg-one-open-application/) action.
3. Enter a description of the test step in the **Describe Test Step** text box (for example, *Open the company expenses app*).
4. Search for the **Open Application** action in the **Search Action** text box. Enter terms like *Find*, *Click*, *Set*, *Assert*, and *Get* to find the right action.
5. Select the **Open Application** action from the **Select an Action** data grid. Choose the one for Mendix applications.
6. Click **Save**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/add-open-application.png" >}}

    Now ATS adds the action to your test step.
7. Double-click the **Application URL** input parameter:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/open-application-input-parameter.png" >}}
  
    This will open the **Edit Input Value** dialog box.
8. Select **Global Constant**.
9. Select **Application URL**.
10. Click **Save**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/open-app-input-value.png" >}}

    ATS now uses the application URL you selected in the **Run Configuration** application.
    
11. After opening the application, you must log in. ATS has a standard login action for logging in to a Mendix application that you must use, which is the [login](/addons/ats-addon/rg-one-login/) action. The login page of the company expenses app looks like this:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/comp-app-login-page.png" >}}

12. Inside your test case, click **Add** again and add the **Login** action:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/add-login.png" >}}

13. Double-click the **Username** input parameter and add the username. 
14. Double-click the **Password** input parameter and add the password:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/login-input-parameters.png" >}}

15. After you log in to the Company Expenses app, you will see the home page. To create a new expense, you must click the **New Expense** button in the app. This means that ATS must click the button. To get the information you need, open the ATS Helper and hover over the **New Expense** button while holding <kbd>Ctrl</kbd>. 

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/helper-new-expense-button.png" >}}

16. ATS has an action that clicks a widget, which is the [Click Widget](/addons/ats-addon/rg-one-click-widget/) action. Inside your test case, click **Add** again and add the **Click Widget** action.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/click-widget-new-expense.png" >}}

18. Double-click the **Widget Name** input parameter and add the widget name displayed in the ATS Helper:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-input-parameter.png" >}}

19. After clicking **New Expense** in the Company Expenses app, a dialog box opens called **New Expense**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog.png" >}}

20. A user visually confirms that the dialog box appears. ATS has an action that finds and asserts a dialog box, which is the [Find/Assert Dialog](/addons/ats-addon/rg-one-findassert-dialog/) action. Inside your test case, click **Add** again and add the **Find/Assert Dialog** action.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog-action.png" >}}

21. Double-click the **Dialog Title** input parameter and add the title of the dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog-action-input-parameters.png" >}}

22. To complete an expense, you must enter an **Amount**, **Type**, and **Description**, and then **Save & Submit** the expense:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog-fields.png" >}}

23. The **Amount** field is a text box widget, the **Type** field is a reference selector widget, and the **Description** field is a text area widget. ATS can interact with all these widgets using the [Set Value](/addons/ats-addon/rg-one-set-value/) action. Inside your test case, click **Add** and add the **Set Value** action. Then, select the test step with the **Set Value** action, click **Copy**, and click **Paste** two times. Now you have a test step for each field.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/three-set-value-actions.png" >}}

24. Use the ATS Helper on the **Amount** field in the Company Expenses app. Select test step 5 in your test case, fill in a test step description, enter the **Widget Name**, and enter the **Value**.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/set-value-amount-field.png" >}}

25. Use the ATS Helper on the **Type** field in the Company Expenses app. Select test step 6 in your test case, fill in a test step description, enter the **Widget Name**, and enter the **Value**.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/set-value-type-field.png" >}}

26. Use the ATS Helper on the **Description** field in the Company Expenses app. Select test step 7 in your test case, fill in a test step description, enter the **Widget Name**, and enter the **Value**.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/set-value-description-field.png" >}}

27. To submit the new expense, you must click the **Save & Submit** button:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-save-submit.png" >}}

28. Inside your test case, click **Add**, add the **Click Widget** action, fill in a test step description, and enter the **Widget Name**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/click-widget-save-submit-parameter.png" >}}

29. You must confirm that the expense is successfully submitted. In the Company Expenses app, a submitted expense appears in the [Find/Assert DataGrid Row](/addons/ats-addon/rg-one-findassert-datagrid-row/) action. Inside your test case, click **Add** and add the **Find/Assert Datagrid Row** action.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/add-findassert-datagrid-row-new-expense.png" >}}

30. Now use the ATS Helper to find the **Widget Name** of the data grid in the Company Expenses app:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/widget-name-datagrid-new-expense.png" >}}

31. Also use the ATS Helper to find the **Column Name** of the **Description** column:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/column-name-datagrid-new-expense.png" >}}

32. Now double-click the parameters and add the correct information:

    * The **Widget Name** parameter and add the widget name
    * The **Column 1 Name** parameter and enter the column name
    * The **Column 1 Value** parameter and enter the description
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/findassert-datagrid-row-new-expense-parameters.png" >}}

33. The last step of your test case is to end your user session by logging out. ATS has two ways for logging out of your application:

    * ATS clicks the **Logout** button
    * ATS uses the [Logout](/addons/ats-addon/rg-one-logout/) action 
    The **Logout** action is a hard logout, meaning that no matter where ATS is inside your application, it always logs out. Inside your test case, click **Add** and add the **Logout** action.
   
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/add-logout-new-expense.png" >}}

    You have added all the test steps for your test case:
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/all-test-steps-new-expense.png" >}}
  
34. The last thing to do is to clarify to ATS what you are testing. This is done by setting the **Call Type** of your test steps to one of the following:

    * **Setup** for all the steps that you must perform to get to the test situation
    * **Regular** for all the steps that are part of your test situation
    * **Teardown** for all steps that are necessary to clean up
  
    Test step 1 and test step 2 must have the **Call Type:** **Setup**. Test step 3-9 must have the **Call Type:** **Regular**. Test step 10 must have the **Call Type:** **Teardown**.
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/call-type-new-expense.png" >}}

    You have now manually created your test case.

## 5 Adding Test Steps Using the ATS Recorder

The following steps describe how to add test steps to your test case using the [ATS Recorder](/addons/ats-addon/rg-one-recorder/). You add the steps necessary for creating a new expense in the Company Expenses app. Create a new test case by completing [3 Creating a Test Case](#3) before starting with this section.

To add test steps using the ATS Recorder, follow these steps:

1. Click **Record** on the **Test Case** page:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/record-test-case-page.png" >}}

    This opens the **Recording Session** page:
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/recording-session-page.png" >}}

2. Now open a new page in your browser and enter the URL of your Mendix app. When you go back to ATS you see that ATS recorded the URL and the **Open Application** action:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/open-application-comp-app-recorded.png" >}}

3. Next go back to the Company Expenses app and enter your login credentials. 
4. Click the **New Expense** button.
5. Enter an expense amount in the **Amount** field.
6. Enter an expense type in the **Type** field.
7. Enter an expense description in the **Description** field.
8. Click the **Save & Submit** button.
9. Inside the data grid, click the description in the **Description** column of your expense to simulate an assert:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/expense-description-datagrid-column.png" >}}

10. Click the **Sign Out** button. On the **Recording Session** page, you see that all the steps are recorded by ATS:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/recording-session-new-expense.png" >}}
  
11. Click **Save** to save the test steps into your test case:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/save-button-recording-session.png" >}}

12. You must set the input parameter **Application URL** of the **Open Application** action to the **Global Constant**, **Application URL**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/global-constant-open-application.png" >}}

13. You must manually add the **New Expense** dialog box (you cannot record this). You must add the action between test step 3 and test step 4. A user will visually confirm that the dialog box appears. ATS has an action that finds and asserts a dialog box, which is the [Find/Assert Dialog](/addons/ats-addon/rg-one-findassert-dialog/) action. Inside your test case, click **Add** again and add the **Find/Assert Dialog** action.

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog-action.png" >}}

    Note that you can also add actions manually between recording sessions. 

14. Double-click the **Dialog Title** input parameter and add the title of the dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/new-expense-dialog-action-input-parameters-recorder.png" >}}

15. For the logout, you can choose to keep the recorded click the **Sign Out** button or replace it with the **Logout** action.
16. The last thing to do is to clarify to ATS what you are testing. This is done by setting the **Call Type** of your test steps to one of the following:
  
    * **Setup** for all the steps that you must perform to get to the test situation
    * **Regular** for all the steps that are part of your test situation
    * **Teardown** for all steps that are necessary to clean up
  
    Test step 1 and test step 2 must have the **Call Type:** **Setup**. Test step 3-9 must have the **Call Type:** **Regular**. Test step 10 must have the **Call Type:** **Teardown**.
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-one/ht-one-create-a-test-case/call-type-new-expense-recorder.png" >}}

You have now created your test case using the ATS Recorder. 

## 6 Next Up

You have now learned how to create a test case, so the next how-to is [How to Create a Test Suite](/addons/ats-addon/ht-one-create-a-test-suite/).

For an overview of all the how-tos and the structure, see [ATS 1 How-tos](/addons/ats-addon/ht-one/). We advise following the how-to's in the order listed there.

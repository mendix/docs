---
title: "Create a Test Case"
category: "How-To's"
description: "Describes how to create a test case and add test steps."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains how to create a test case, add test steps manually and add test steps using the ATS Recorder. A test case consists of test steps that contain actions. Each action performs a task, like clicking a button.

This how-to uses the company expenses app as an example. You create a test case that submits a new expense in the company expenses app. You create the same test case twice once manually and once with the ATS Recorder. 

**This how-to will teach you how to do the following:**
* Create a new test case
* Add test steps to your test case manually
* Add test steps using the ATS Recorder

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

*  Completed [How to Get Started](getting-started)
*  Completed [How to Install the ATS Helper and ATS Recorder](install-ats-helper-recorder)

## 3 Create a Test Case

The following steps describe how to create a test case.

1.  Open your project in ATS and go to the **Repository**.
  
2.  Click **Add Test** inside the **Tests** tab.  
![](attachments/create-a-test-case/repository-add-test-case.png)
  
  You can also click **Add Item** inside the **All Objects** tab.  
![](attachments/create-a-test-case/repository-add-item-case.png)
  
  Clicking either button opens the **Create new** pop-up dialog:    
![](attachments/create-a-test-case/repository-create-new-case.png)
  
3.  Select **Test Case** in the drop-down menu.

4.  Enter a name in the **Name** field. For example, TC - 001.01 - Create new Expense (Manually)
    It is advisable to use a predefined naming structure.
    
5.  Enter a description in the **Description** field. For example, This test case creates a new expense in the company expenses app.
    It is advisable to give each test case a description of what it does.
    
6.  Click **Create**.

![](attachments/create-a-test-case/repository-create-new-test-case.png)

The **Test Case** page opens after you click **Create**. ATS displays the **Name** and **Description**  in the upper left corner of the **Test Case** page.

![](attachments/create-a-test-case/test-case-page.png)

## 4 Add Test Steps manually

The following steps describe how to add test steps manually to your test case. You will add the steps necessary for creating a new expense in the company expenses app.

1.  Click **Add** on the **Test Case** page.
![](attachments/create-a-test-case/test-case-page-add.png)

2.  The **Test Step Setup** pop-up dialog opens.

    The first step is opening the company expenses app. You do this by entering a URL in the browser. ATS does the same by using the _[Open Application](/refguide-ats-1/open-application)_ action.

3.  Enter a description of the test step in the **Describe Test Step** text box. For example: Open the company expenses app.

4.  Search for the _Open Application_ action in the **Search Action** text box.

    {{% alert type="info" %}}
    Use terms like _Find_, _Click_, _Set_, _Assert_ and _Get_ to find the right action. 
    {{% /alert %}}

5.  Select the _Open Application_ action from the **Select an Action** datagrid. Choose the one for Mendix applications.

6.  Click **Save**.
![](attachments/create-a-test-case/add-open-application.png)

  Now ATS adds the action to your test step.
7.  Double-click the input parameter **Application URL**.
![](attachments/create-a-test-case/open-application-input-parameter.png)
  
8.  The **Edit Input Value** dialog box opens.
9.  Select **Global Constant**.
10.  Select **Application URL**.
11.  Click **Save**. 
 ![](attachments/create-a-test-case/open-app-input-value.png)

  ATS now uses the application URL you select in the **Run Configuration** application.
  
12.  After opening the application you must log in. ATS has a standard login action for logging in to a Mendix application that you must use, the _[Login](/refguide-ats-1/login)_ action. The login page of the company expenses app looks like this:
![](attachments/create-a-test-case/comp-app-login-page.png)

13. Inside your test case click **Add** again and add the _Login_ action.
![](attachments/create-a-test-case/add-login.png)

14.  Double-click the input parameter **Username** and add the username. 
15.  Double-click the input parameter **Password** and add the password.
![](attachments/create-a-test-case/login-input-parameters.png)

16.  After logging in to the company expenses app the home page shows. To create a new expense you must click the **New Expense** button in the company expenses app. This means ATS must click the button. To get the information you need, open the ATS Helper and hover over the **New Expense** button while holding <kbd>Ctrl</kbd>. 
![](attachments/create-a-test-case/helper-new-expense-button.png)

17.  ATS has an action that clicks a widget, the _[Click Widget](/refguide-ats-1/click-widget)_ action. Inside your test case click **Add** again and add the _Click Widget_ action.
![](attachments/create-a-test-case/click-widget-new-expense.png)

18.  Double-click the input parameter **Widget Name** and add the widget name displayed in the ATS Helper.
![](attachments/create-a-test-case/new-expense-input-parameter.png)

19.  After clicking the **New Expense** button in the company expenses app. A dialog box opens called **New Expense**.
![](attachments/create-a-test-case/new-expense-dialog.png)

20.  A user visually confirms that the dialog box appears. ATS has an action that finds and asserts a dialog box, the _[Find/Assert Dialog](/refguide-ats-1/findassert-dialog)_ action. Inside your test case click **Add** again and add the _Find/Assert Dialog_ action.
![](attachments/create-a-test-case/new-expense-dialog-action.png)

21.  Double-click the input parameter **Dialog Title** and add the title of the dialog box.
![](attachments/create-a-test-case/new-expense-dialog-action-input-parameters.png)

22.  To complete an expense you must enter an **Amount**, **Type**, **Description** and **Save & Submit** the expense.
![](attachments/create-a-test-case/new-expense-dialog-fields.png)

23.  The **Amount** field is a Textbox widget, the **Type** field is a ReferenceSelector Widget and the **Description** field is a Textarea widget. ATS can interact with all these widgets using the _[Set Value](/refguide-ats-1/set-value)_ action. Inside your test case click **Add** and add the _Set Value_ action. Now select the test step with the _Set Value_ action, click **Copy** and click **Paste** two times. Now you have a test step for each field.
![](attachments/create-a-test-case/three-set-value-actions.png)

24.  Now use the ATS Helper on the **Amount** field in the company expenses app. Select test step 5 in your test case, fill in a test step description, enter the **Widget Name** and enter the **Value**.
![](attachments/create-a-test-case/set-value-amount-field.png)

25.  Now use the ATS Helper on the **Type** field in the company expenses app. Select test step 6 in your test case, fill in a test step description, enter the **Widget Name** and enter the **Value**.
![](attachments/create-a-test-case/set-value-type-field.png)

26.  Now use the ATS Helper on the **Description** field in the company expenses app. Select test step 7 in your test case, fill in a test step description, enter the **Widget Name** and enter the **Value**.
![](attachments/create-a-test-case/set-value-description-field.png)

27.  To submit the new expense you must click the **Save & Submit** button. 
![](attachments/create-a-test-case/new-expense-save-submit.png)

28.  Inside your test case click **Add**, add the _Click Widget_ action, fill in a test step description and enter the **Widget Name**.
![](attachments/create-a-test-case/click-widget-save-submit-parameter.png)

29.  Now you must confirm that the expense is successfully submitted. In the company expenses app, a submitted expense appears in the _[Find/Assert DataGrid Row](/refguide-ats-1/findassert-datagrid-row)_ action. Inside your test case click **Add** and add the _Find/Assert Datagrid Row_ action.
![](attachments/create-a-test-case/add-findassert-datagrid-row-new-expense.png)

30.  Now use the ATS Helper to find the **Widget Name** of the datagrid in the company expenses app.
![](attachments/create-a-test-case/widget-name-datagrid-new-expense.png)

31.  Also use the ATS Helper to find the **Column Name** of the **Description** column.
![](attachments/create-a-test-case/column-name-datagrid-new-expense.png)

32.  Now double-click the parameters and add the correct information. 
  * The **Widget Name** parameter and add the widget name. 
  * The **Column 1 Name** parameter and enter the column name.
  * The **Column 1 Value** parameter and enter the description.
![](attachments/create-a-test-case/findassert-datagrid-row-new-expense-parameters.png)

33. The last step of your test case is to end your user session by logging out. ATS has two ways to log out of your application.
  * ATS clicks the Logout button.
  * ATS uses the _[Logout](/refguide-ats-1/logout)_ action. 
   The _Logout_ action is a hard log out, meaning that no matter where ATS is inside your application it always logs out. 
   Inside your test case click **Add** and add the _Logout_ action.
![](attachments/create-a-test-case/add-logout-new-expense.png)

  Now you added all the test steps for your test case.
  ![](attachments/create-a-test-case/all-test-steps-new-expense.png)
  
34. The last thing to do is to clarify to ATS what you are testing. This is done by setting the **Call Type** of your test steps.
  * **Setup** for all the steps that you must perform to get to the test situation.
  * **Regular** for all the steps that are part of your test situation.
  * **Teardown** for all steps that are necessary to clean up.
  
  Test step 1 and test step 2 must have the **Call Type:** **Setup**.
  Test step 3-9 must have the **Call Type:** **Regular**.
  Test step 10 must have the **Call Type:** **Teardown**.
  ![](attachments/create-a-test-case/call-type-new-expense.png)
  
  You now created your test case manually.

## 5 Add Test Steps using the ATS Recorder

The following steps describe how to add test steps to your test case using the [ATS Recorder](/refguide-ats-1/recorder). You add the steps necessary for creating a new expense in the company expenses app. Create a new test case by following chapter 3 before starting with this chapter.

1.  Click **Record** on the **Test Case** page.
![](attachments/create-a-test-case/record-test-case-page.png)

  This opens the **Recording Session** page.
  ![](attachments/create-a-test-case/recording-session-page.png)

2.  Now open a new page in your browser and enter the URL of your Mendix app. When you go back to ATS you see that ATS recorded the URL and the _Open Application_ action.
![](attachments/create-a-test-case/open-application-comp-app-recorded.png)

3.  Next go back to the company expenses app and enter your login credentials. 

4.  Click the **New Expense** button.

5.  Enter an expense amount in the **Amount** field.

6.  Enter an expense type in the **Type** field.

7. Enter an expense description in the **Description** field.

8.  Click the **Save & Submit** button.

9.  Inside the datagrid, click the description in the **Description** column of your expense to simulate an assert.
 ![](attachments/create-a-test-case/expense-description-datagrid-column.png)

10.  Click the **Sign Out** button.

  On the **Recording Session** page you see that all the steps are recorded by ATS.
  ![](attachments/create-a-test-case/recording-session-new-expense.png)
  
11.  Now click **Save** to save the test steps into your test case.
![](attachments/create-a-test-case/save-button-recording-session.png)

12.  Now you must set the input parameter **Application URL** of the _Open Application_ action to the **Global Constant**, **Application URL**.
![](attachments/create-a-test-case/global-constant-open-application.png)

13.  Next, you must manually add the **New Expense** dialog box, you cannot record this. You must add the action between test step 3 and test step 4.
A user visually confirms that the dialog box appears. ATS has an action that finds and asserts a dialog box, the _[Find/Assert Dialog](/refguide-ats-1/findassert-dialog)_ action. Inside your test case click **Add** again and add the _Find/Assert Dialog_ action.
![](attachments/create-a-test-case/new-expense-dialog-action.png)

    {{% alert type="info" %}}
    You can also add actions manually between recording sessions. 
    {{% /alert %}}

14.  Double-click the input parameter **Dialog Title** and add the title of the dialog box.
![](attachments/create-a-test-case/new-expense-dialog-action-input-parameters-recorder.png)

15.  For the log out you can choose to keep the recorded click on the **Sign Out** button or replace it with the **Logout** action.

16.  The last thing to do is to clarify to ATS what you are testing. This is done by setting the **Call Type** of your test steps.
  * **Setup** for all the steps that you must perform to get to the test situation.
  * **Regular** for all the steps that are part of your test situation.
  * **Teardown** for all steps that are necessary to clean up.
  
  Test step 1 and test step 2 must have the **Call Type:** **Setup**.
  Test step 3-9 must have the **Call Type:** **Regular**.
  Test step 10 must have the **Call Type:** **Teardown**.
![](attachments/create-a-test-case/call-type-new-expense-recorder.png)

  You now created your test case using the ATS Recorder.




   


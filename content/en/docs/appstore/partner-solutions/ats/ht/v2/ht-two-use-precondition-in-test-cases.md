---
title: "Use Precondition in Test Cases"
url: /appstore/partner-solutions/ats/ht-two-use-precondition-in-test-cases/
description: "Describes how to use precondition in test cases in ATS"
---

## Introduction

To create more logic in test cases and more difficult test situations ATS has the possibility to add preconditions. These preconditions are added to test steps in your test cases. Maybe you have an application that sometimes shows a dialog after you log in with your open or new orders. If you do not know in advance whether you see the dialog after you log in, that makes it difficult to prepare test cases that always work. You sometimes need the **Close Dialog** action but not always. To make sure your test cases do not fail due to the presence (or absence) of the Dialog, you add a precondition to the **Find/Assert Dialog** action. If a dialog is present then the precondition is successful and ATS executes the underlying test step **Close Dialog**. In case no dialog is found the precondition fails and ATS does not execute the underlying test step **Close Dialog**. Not run means that ATS continues with the next step.

This how-to uses the Mendix Company Expenses app as an example. In this how-to, you create a test case that clicks on a specific expense to view the details. Unfortunately, we do not know on which page of the data grid that expense is present. So, the test case searches for that expense on the first page of the data grid. If the expense is present ATS clicks on it. If the expense is not present ATS clicks on the next button to go to the next page of the data grid. On the next page, ATS checks again if the expense is present and, if so, clicks on it.  

In the Company Expenses app I want to click the following expense to view the details:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/expense-to-click-on.png" class="no-border" >}}

This how-to teaches you how to do the following:

* How to use preconditions in test cases
* Analyzing the results of a test case with preconditions

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Read [How to Get Started](/appstore/partner-solutions/ats/ht-two-getting-started/)
* Read [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)

## How to Use Preconditions in Test Cases

The following steps explain how to create a test case with preconditions: 

1. Open ATS and go to your project.
2. Click the **Test Cases** menu item to go to the **Repository tab**.
3. Create a new test case and record the following steps:

    * Open the Company Expenses app
    * Log in as employee
    * Log out

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/beginning-of-test-case.png" class="no-border" >}}

4. Add the **Find/Assert DataGrid Row** action. Give it a description and enter an output value name. You must add the **Find/Assert DataGrid Row** action instead of the **Click DataGrid Row** action, since it has an output parameter which you need in the next steps.
5. Enter `grid7` in **Widget Name**, `column9` in **Column 1 Name** and "Some office supplies" in **Column 1 Value**. You can make the search for this data grid row more specific by entering more column names with values. The different values are found by using the ATS Helper. For more information on how to find these values, see [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/).
6. Check the **Precondition** checkbox.
7. Click **Setup precondition**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/find-datagrid-row.png" class="no-border" >}}

    Clicking **Setup precondition** opens the **Select funtion or action** dialog:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/select-function-or-action.png" class="no-border" >}}

8. Add the **Find/Assert DataGrid Row** action as precondition. 

    {{% alert color="info" %}}You add the same action as a precondition because you do not want the test case to fail at this step if the expense is not present on that page.
    {{% /alert %}}

9. Enter the same values in the input parameter fields:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/find-datagrid-row-precondition.png" class="no-border" >}}

    Now you want to double-click the expense, but only if the expense is present on that page.

10. Add the **Click/Doubleclick** action and enter a description. 
11. Use the output of the previous step in the **Element** input parameter and set **Doubleclick** to true. 
12. Add the **Assert not equalTo** action as precondition.
13. Use the output of the previous step in the **Object 1** input parameter of the precondition and Leave **Object 2** empty:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/click-doubleclick-action.png" class="no-border" >}}

    By adding the **Assert not equalTo** action as precondition the underlying action is only run if the expense is found in the previous step. If step 3 is not completed then the output of step 3 is empty. The **Assert not equalTo** action then asserts empty with empty, which are equal to each other, so the precondition fails and the actual test step is not run. 

    These two steps are enough to only double-click the expense in case the expense is present on the page. But if the expense is not present on the page ATS does not execute the double-click. The next step is to make ATS search the next page in the data grid for the expense and click it if found.

14. Record your click the **Next page** button and add the step:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/next-chunk.png" class="no-border" >}}

15. Add the **Assert equalTo** action as precondition.
16. Use the output of step 3 in the **Object 1** input parameter of the precondition and leave **Object 2** empty: 

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/click-widget-action.png" class="no-border" >}}

    ATS only executes the underlying action if the expense is **not** found in step 3 because you added the **Assert equalTo** action as precondition. If step 3 is not completed the output of step 3 is empty. The **Assert equalTo** action then asserts empty with empty, which are equal to each other, so the precondition is successful and the test step is completed.

17. Add the **Find/Assert DataGrid Row** action to be able to find the expense on this page. Use the same values as in the previous **Find/Assert DataGrid Row** action.
18. Add the **Assert equalTo** action as a precondition and use the outcome of step 3 in the **Object 1** input parameter:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/find-expense-on-new-page.png" class="no-border" >}}

19. Add the **Click/Doubleclick** action and give the action a description.
20. Add the **Assert equalTo** action as a precondition and use the outcome of step 6 in the **Object 1** input parameter:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/click-on-found-expense.png" class="no-border" >}}

21. The last step that you must add is the **Close Dialog** step, as double-clicking on an expense opens the **New Expense** dialog:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/new-expense-dialog.png" class="no-border" >}}

    Before you run the test case you must define the setup and teardown steps, depending on your test situation.

    The final test case looks like this:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/setup-and-teardown.png" class="no-border" >}}

## Analyzing the Results of a Test Case Using Preconditions

Running the test case can give two different results. If the expense is present on the first page the test run results look like:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/expense-on-first-page.png" class="no-border" >}}

If the expense is present on the second page the test run results look like:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-use-precondition-in-test-cases/expense-on-second-page.png" class="no-border" >}}

If the expense is present on the first page ATS does not click the next button and does not search for the expense on the second page. So, ATS skips the steps 5, 6 and 7. If the expense is present on the second page ATS skips step 3 and 4. As ATS cannot find the expense in step 3, ATS will not click the expense in step 4.

Congratulations, you created a test case using preconditions. This is an example of what you can do with preconditions. It is a relatively difficult example, as it shows the different possibilities in ATS. There are many more options like a negative test case, which is the next advised read. 

## Next Up

The next how-to is [How to Create a Negative Test Case](/appstore/partner-solutions/ats/ht-two-create-a-negative-test-case/). You can find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.

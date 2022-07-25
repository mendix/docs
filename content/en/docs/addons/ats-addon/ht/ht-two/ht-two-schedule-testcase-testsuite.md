---
title: "Schedule a Test Suite/Test Case"
url: /addons/ats-addon/ht-two-schedule-testcase-testsuite/
description: "Describes how to create a test suite and add test cases and test suites to your test suite."
tags: ["ATS", "testing"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Scheduling allows you to plan the execution of test cases and test suites at defined dates and times. 
Scheduling tests can be useful for the following:

* Running tests during the night 
* Investigate when the software runs slower 
* Constant reassurance that some feature works 

**This how-to will teach you  how to do the following**

* Schedule test cases
* Schedule test suites

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete [How to Get Started](/addons/ats-addon/ht-two-getting-started/)

## 3 Scheduling Test Cases

The following steps explain how to schedule test cases:

1.	Open your project in ATS and go to the **Schedules** tab in **Test Run**.
2.  Click **Schedule test case** to schedule a test case:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/Schedules-tab-TC.png" >}}

    Clicking **Schedule test case** opens the **Select Test Case** dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/select-testcase-dialog.png" >}}

3. Click the test case you want to schedule. To search for the test case, you can use the **Search** button.
4.	Click **Select**. Selecting a test case opens the **New Schedule** dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/new-schedule-dialog.png" >}}

5.	Set the desired **Schedule Test Settings**: 

    * **Active** - Activate/Deactivate the event
    * **After** - Set time when event is first executed
    * **Repeat** – Repeat/Not repeat the event
    * **Every** - Set interval to repeat the event

6.  Set the desired **General Settings**: 

    * **Environment** - Set application on which to run the test
    * **Selenium Hub** - Set Selenium hub on which to execute the test
    * **Browser** - Set browser in which to run the test

7.  Set the desired **Platform Settings**: 

	* **Platform** - Set platform on which to run the test
	* **Resolution** - Set resolution with which the test is run

	{{% alert color="info" %}}Note: Platform Settings are not visible for all Selenium hubs.
	{{% /alert %}}

6.	Click **Save**:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/new-schedule-filled.png" >}}

Clicking **Save** adds the test case to the list of scheduled items. Click the **Edit icon** to change the settings (1). Click the **Delete icon** to delete the scheduled test case(2):
{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/scheduled-testcase.png" >}}

## 4 Scheduling Test Suites

The following steps explain how to schedule test suites:

1.	Open your project in ATS and go to the **Schedules** tab in **Test Run**.
2.	Click **Schedule test suite** to schedule a test suite:
  
    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/Schedules-tab-TS.png" >}}

    Clicking **Schedule test suite** opens the **Select Test Suite** dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/select-testsuite-dialog.png" >}}

3. Click the test suite you want to schedule. To search for the test suite, you can use the **Search** button.
4.	Click **Select**. Selecting a test suite opens the **New Schedule** dialog box:

    {{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/new-schedule-dialog.png" >}}

5.	Set the desired **Schedule Test Settings**:

    * **Active** - Activate/Deactivate the event
	* **After** - Set time when event is first executed
	* **Repeat** – Repeat/Not repeat the event
	* **Every** - Set interval to repeat the event

6.  Set the desired **General Settings**: 

    * **Environment** - Set application on which to run the test
	* **Selenium Hub** - Set Selenium hub on which to execute the test
	* **Browser** - Set browser in which to run the test

7.  Set the desired **Platform Settings**: 

	* **Platform** - Set platform on which to run the test
	* **Resolution** - Set resolution with which the test is run

	{{% alert color="info" %}}
	Note: Platform Settings are not visible for all Selenium hubs.
	{{% /alert %}}

6.	Click **Save**:

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/new-schedule-filled.png" >}}

Clicking **Save** adds the test suite to the list of scheduled items. Click the **Edit icon** to change the settings (1). Click the **Delete icon** to delete the scheduled test case(2):
{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-schedule-testcase-testsuite/scheduled-testsuite-g.png" >}}

{{% alert color="info" %}}
In case repeat is set to **Yes**, ATS will run the test until you mark it as inactive or remove the repeat settings. An active test is marked green and an inactive test is marked grey. An example can can be seen in the image above.
{{% /alert %}}

{{% alert color="info" %}}
Now you can schedule your own test cases and test suites. You can add as many scheduled tests as you want. However, as executing tests takes time, there is a limit to the number of tests you can schedule.
{{% /alert %}}

## 5 Next Up

You now learned how to schedule test cases and test suites. The next how-to is [How to Mask Your Password](/addons/ats-addon/ht-two-mask-your-password/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/addons/ats-addon/ht-two/) page. We advise you to follow the predefined structure.

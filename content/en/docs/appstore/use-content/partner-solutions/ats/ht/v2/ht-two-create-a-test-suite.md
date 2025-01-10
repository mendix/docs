---
title: "Create a Test Suite"
url: /appstore/partner-solutions/ats/ht-two-create-a-test-suite/
description: "Describes how to create a test suite and add test cases and test suites to your test suite."
---

## Introduction

A test suite enables the user to execute test cases and test suites in a specific order. You can add test steps to your test suite and link a test case or another test suite to that test step. ATS executes the test steps in the same way as a test case.

This how-to uses the Company Expenses app as an example. You will create a test suite and add the test cases you created in [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/). If you do not have them anymore, create two new test cases without any test steps to walk through this how-to.

This how-to teaches you how to do the following:

* Create a test suite
* Add test cases and test suites to a test suite

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Read [How to Get Started](/appstore/partner-solutions/ats/ht-two-getting-started/)
* Read [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)

## Creating a Test Suite

To create a test suite, follow these steps:

1. Open your project in ATS and go to **Test Cases**.
2. Click the **Action** drop-down menu and select **New Test Suite**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/Repository-add-test-suite.png" class="no-border" >}}

    Clicking the **New Test Suite** button opens the **Create new** dialog box:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-create-new.png" class="no-border" >}}

3. Enter a name in the **Name** field (for example, *TS - 001. Create New Expense (Manually/Recorder)*). Using a predefined naming structure is advised.
4. Enter a description in the **Description** field (for example, *This test suite executes the test cases that create a new expense in the company expenses app.*). Giving each test suite a description of what it does is advised.
5. Click **Create**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-create-new-test-suite-e.png" class="no-border" >}}

The **Test Suite** page opens after you click **Create**. ATS displays the **Name** and **Description** on the Test Suite page. The **Test Suite** page looks like the **Test Case** page, but with fewer tabs:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/test-suite-page.png" class="no-border" >}}

## Adding Test Cases and Test Suites to a Test Suite

To add a test case or another test suite to a test suite, follow these steps:

1. Click **Select and add test case/suite** on the **Test Suite** page. This opens the **Select test case/suite** dialog box where you find all your test cases and test suites:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-test-suite-page-add.png" class="no-border" >}}

2. In the input area, enter the name or a part of the name of a test case or test suite you want to add. ATS searches in the database for test suites and test cases with that name. Note that the test case or test suite you want to add already needs to exist.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-test-suite-page-add-name.png" class="no-border" >}}

3. Select the test case or test suite and click **Select**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-add-test-case-to-test-suite.png" class="no-border" >}}

    The test case or test suite is now added to your test suite:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/repository-test-suite-page-selected-test.png" class="no-border" >}}

Repeat this process for the Recorder test case to complete your test suite.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-a-test-suite/test-suite-page-complete.png" class="no-border" >}}

{{% alert color="info" %}}
You can add as many test cases and test suites as you want. 
{{% /alert %}}

## Next Up

You now learned how to create a test suite. The next how-to is [How to Create a Data-Driven Test Case](/appstore/partner-solutions/ats/ht-two-create-datadriven-test-case/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.

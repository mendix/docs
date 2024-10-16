---
title: "Test Case"
url: /appstore/partner-solutions/ats/rg-two-test-case/
---

## Introduction

A test case is a set of [test steps](/appstore/partner-solutions/ats/rg-two-test-step/) that exercise a particular program path or verify compliance with a specific need. The point of running the test is to check if your app is fully functional. For example, whether a user can perform a certain task in your app or not.

In ATS, you create a new test case by clicking **New Test Case** in the **Actions** drop-down menu in the repository.

A dialog box opens where you give your test case a name and an optional description. After you have created a new test case, click its name, and the **Test Case Details** page will open.

## Test Case Details

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-case/testcase-details.png" class="no-border" >}}

{{% alert color="info" %}}

Please note that there is an additional switch for **parallel**/**sequential**. This switch is only available for [data driven test cases](/appstore/partner-solutions/ats/rg-two-data-driven-testing/).

{{% /alert %}}

In the upper-left corner of the **Test Case Details** page, you will find the name and the description of the test case. You can click these fields and make changes to them. ATS saves these changes automatically.

In the top right corner of the screen, you will find the **Export** and **Run** drop-down menus:

### Export

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| Export Test Definition | Creates an XML representation of your test case. You can import this into another app. |
| Export Documentation | Creates a PDF document that contains all the test steps of your test case and their parameters. |

### Run

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| Run                    | If the test case has been executed before, it runs with the configuration of the previous run. Otherwise, the [Run Configuration](/appstore/partner-solutions/ats/rg-two-test-run/) page will open. |
| Edit Run Configuration | Opens the [Run Configuration](/appstore/partner-solutions/ats/rg-two-test-run/) page. |

## Test Steps

Test steps describe the actions that the test case performs. You can add new test steps by searching an action in the **Add step** box. For a more detailed search, use the **Test Step Setup** dialog box by clicking this button:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-case/search-button.png" class="no-border" >}}

A dialog box will open where you can search for a specific action or you explore all the available actions inside ATS and your current project:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-case/select-function-action.png" class="no-border" >}}.

After you have found the desired action, add it to your test case as a test step by selecting it and clicking **Select**.

Another way of adding test steps to a test case is to use the recorder by clicking **Record step**. For more information, see [Recorder](/appstore/partner-solutions/ats/rg-two-recorder/).

The details of a test step open by clicking the test step. For more information, see [Test Step](/appstore/partner-solutions/ats/rg-two-test-step/).

To add a new step above or below an existing test step, click **Add above** or **Add below**, or click the red record icon, to add a new step by using the recorder. These buttons appear if you hover over an existing test step.

### Copying, Pasting, Deleting, and Extracting an Action

You can **Copy/Paste** or **Delete** one or more test steps at a time by checking the box in front of the test step.

**Extract Action** combines the selected test steps into a new ATS action. This action becomes available for all test cases.

### Dragging and Dropping

If you move your mouse pointer over an existing test step, the drag-and-drop handle appears. By clicking and holding it, you can move the test step to the new position.

### Setup and Teardown Icons

Test steps have three different call types: setup, regular, and teardown. ATS marks the steps that have the setup or teardown call type with the corresponding icon:

| Icon                                     | Meaning  |
| ---------------------------------------- | -------- |
| {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-case/setting-gears-2.png" class="no-border" >}} | Setup    |
| {{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-case/hammer-2.png" class="no-border" >}}       | Teardown |

For more information about the call types of test steps, see [Test Step](/appstore/partner-solutions/ats/rg-two-test-step/).

## Test Data

Under the **Test Data** tab, you can set a primary dataset for your test case. You can now link the fields of the primary dataset to your test steps. Note that the test case runs a separate session for every record in the primary dataset. For more information on how to use datasets in your test cases, see [Data Driven Testing](/appstore/partner-solutions/ats/rg-two-data-driven-testing/).

## Show Usages

The **Show Usages** tab gives an overview of all the actions used in your test case. It also gives an overview of all the test suites using your test case.

## Stories

Under **Stories**, you can add a user story to your test case. This tab displays the connected stories, the test cases within that story, and the success rate of the user story.

* **Open story** – opens the linked user story
* **Unlink selected story** – this removes the link between test case and user story
* **Link new story** – links an existing story to the test case

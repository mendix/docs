---
title: "Test Case"
url: /addons/ats-addon/rg-two-test-case/
---

## 1 Introduction

A test case is a set of [test steps](/addons/ats-addon/rg-two-test-step/) that exercise a particular program path or verify compliance with a specific need. The point of running the test is to check if your app is fully functional. For example, whether a user can perform a certain task in your app or not.

In ATS, you create a new test case by clicking **New Test Case** in the **Actions** drop-down menu in the repository.

A dialog box opens where you give your test case a name and an optional description. After you have created a new test case, click its name, and the **Test Case Details** page will open.

## 2 Test Case Details

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-case/testcase-details.png" >}}

{{% alert color="info" %}}

Please note that there is an additional switch for **paralell**/**sequential**. This switch is only available for [data driven test cases](/addons/ats-addon/rg-two-data-driven-testing/).

{{% /alert %}}

In the upper-left corner of the **Test Case Details** page, you will find the name and the description of the test case. You can click these fields and make changes to them. ATS saves these changes automatically.

In the top right corner of the screen, you will find the **Export** and **Run** drop-down menus:

### 2.2 Export

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| Export Test Definition | Creates an XML representation of your test case. You can import this into another app. |
| Export Documentation | Creates a PDF document that contains all the test steps of your test case and their parameters. |

### 2.2 Run

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| Run                    | If the test case has been executed before, it runs with the configuration of the previous run. Otherwise, the [Run Configuration](/addons/ats-addon/rg-two-test-run/) page will open. |
| Edit Run Configuration | Opens the [Run Configuration](/addons/ats-addon/rg-two-test-run/) page. |

## 3 Test Steps

Test steps describe the actions that the test case performs. You can add new test steps by searching an action in the **Add step** box. For a more detailed search, use the **Test Step Setup** dialog box by clicking this button:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-case/search-button.png" >}}

A dialog box will open where you can search for a specific action or you explore all the available actions inside ATS and your current project:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-case/select-function-action.png" >}}.

After you have found the desired action, add it to your test case as a test step by selecting it and clicking **Select**.

Another way of adding test steps to a test case is to use the recorder by clicking **Record step**. For more information, see [Recorder](/addons/ats-addon/rg-two-recorder/).

The details of a test step open by clicking the test step. For more information, see [Test Step](/addons/ats-addon/rg-two-test-step/).

To add a new step above or below an existing test step, click **Add above** or **Add below**, or click the red record icon, to add a new step by using the recorder. These buttons appear if you hover over an existing test step.

### 3.1 Copying, Pasting, Deleting, and  Extracting an Action

You can **Copy/Paste** or **Delete** one or more test steps at a time by checking the box in front of the test step.

**Extract Action** combines the selected test steps into a new ATS action. This action becomes available for all test cases.

### 3.2 Dragging and Dropping

If you move your mouse pointer over an existing test step, the drag-and-drop handle appears. By clicking and holding it, you can move the test step to the new position.

### 3.3 Setup and Teardown Icons

Test steps have three different call types: setup, regular, and teardown. ATS marks the steps that have the setup or teardown call type with the corresponding icon:

| Icon                                     | Meaning  |
| ---------------------------------------- | -------- |
| {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-case/setting-gears-2.png" >}} | Setup    |
| {{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-case/hammer-2.png" >}}       | Teardown |

For more information about the call types of test steps, see [Test Step](/addons/ats-addon/rg-two-test-step/).

## 4 Test Data

Under the **Test Data** tab, you can set a master dataset for your test case. You can now link the fields of the master dataset to your test steps. Note that the test case runs a separate session for every record in the master dataset. For more information on how to use datasets in your test cases, see [Data Driven Testing](/addons/ats-addon/rg-two-data-driven-testing/).

## 5 Show Usages

The **Show Usages** tab gives an overview of all the actions used in your test case. It also gives an overview of all the test suites using your test case.

## 6 Stories

Under **Stories**, you can add a user story to your test case. This tab displays the connected stories, the test cases within that story, and the success rate of the user story.

* **Open story** – opens the linked user story
* **Unlink selected story** – this removes the link between test case and user story
* **Link new story** – links an existing story to the test case

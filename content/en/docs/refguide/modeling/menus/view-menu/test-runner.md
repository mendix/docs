---
title: "Test Runner"
url: /refguide/test-runner/
weight: 65
description: "Describes the Test Runner pane in Studio Pro, which you use to run testflows and view their results."
beta: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

The **Test Runner** pane shows the [testflows](/refguide/testflows/) in your app. You can use it to run testflows and view their results.

To open the **Test Runner** pane, click **View** > **Test Runner**. By default, the pane is docked at the bottom of Studio Pro. When you open a testflow in the editor, or select the tab of an open testflow, the **Test Runner** pane comes to the front and selects that testflow.

## Test Tree {#test-tree}

The left side of the pane shows your testflows in a tree, grouped by module. Modules that do not contain any testflows are not shown. If your app does not contain any testflows, the pane shows the message **There are no tests to show.**

Each testflow shows the result of its last run.

## Toolbar {#toolbar}

The toolbar contains the following buttons:

* **Run all** – runs all the testflows in your app
* **Run** – runs the testflows and modules that you select in the tree; when you select a module, all the testflows in that module run
* **Stop** – stops the current test run
* **Reset all** – clears the results of all testflows, so that the next run starts fresh

## Result {#result}

The **Result** section on the right side of the pane shows the result of the testflow that you select in the tree:

* **Success** – the testflow ran to its end without a failed [Assert](/refguide/assert/) activity or another error
* The failure message – the testflow failed, either because an Assert activity failed or because another error occurred
* **Not run yet.** – the testflow has not run yet, or its result was cleared with **Reset all**

If an error prevents the test run itself, for example because the app cannot be deployed, Studio Pro shows the error in a dialog box.

## How Testflows Run {#how-testflows-run}

When you run testflows, Studio Pro does the following:

* It runs the testflows one at a time.
* It runs each testflow in a dedicated test runtime with its own in-memory database. Testflows do not affect each other, and they do not change the data of your app.
* It runs testflows as the system user, without a user session.

{{% alert color="warning" %}}
The test runtime uses the same ports as your app. For this reason, if your app is running locally, Studio Pro asks you to confirm that it can stop the app before it runs the tests. The app stays stopped after the test run. To start it again, click **Run Locally** or press <kbd>F5</kbd>.
{{% /alert %}}

## Read More

* [Testflows](/refguide/testflows/)
* [Assert](/refguide/assert/)
* [View Menu](/refguide/view-menu/)

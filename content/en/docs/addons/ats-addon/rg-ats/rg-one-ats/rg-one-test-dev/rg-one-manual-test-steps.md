---
title: "Manual Test Steps"
url: /addons/ats-addon/rg-one-manual-test-steps/
weight: 3
---

Manual test steps are the process to search and select required actions to manually create a test case in ATS. In this way the test case will be created by selecting the actions manually.

When you create a new test case it is empty and has no test steps assigned.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-one-ats/rg-one-test-dev/rg-one-manual-test-steps/21168178.png" alt="Buttons on the Test Case Window" >}}

_Buttons on the Test Case Window_

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-one-ats/rg-one-test-dev/rg-one-manual-test-steps/21168179.png" >}}

To add a new test step follow these steps:

*   Click the _Add_ button to open the _Test Step Setup_ form.
*   Under _1) Describe Test Step_ you can enter a description of what you are doing in the test step.
*   Under _2) Search Action_ you can search for an existing action in the repository. A list of all available standard actions can be found in the next section. All of your custom created actions will also be listed here for easy reusability.
*   After entering a search term, a list of found actions will show and you can see name and description of the actions
*   Click an action to select it and click the _Save_ button to add a new test step that uses the action.

You can now select the created test step and edit its parameters under the _Test Step Settings_ to the right.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-one-ats/rg-one-test-dev/rg-one-manual-test-steps/21168180.png" >}}

On the test step settings you can configure the following:

**Change Action**

Change the action that is executed in this step

**Open Action**

Open the action, to show the test steps it consists of

**Take screenshot on this step**

Check checkbox to always take a screenshot of the application on this step

**Call Type**

Change call type to _Setup_, _Regular_, or _Teardown_

**Set Input Values**

Set _Input Values_ for parameters used in the action

**Set Precondition**

Check _Precondition_ if you want to set a condition for executing this test step

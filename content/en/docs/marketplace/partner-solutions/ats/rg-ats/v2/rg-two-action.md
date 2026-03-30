---
title: "Action"
url: /appstore/partner-solutions/ats/rg-two-action/
---

## Actions

Actions perform tasks (for example, entering text in a text box widget). They work like building blocks for test cases. A test case executes the test steps containing actions. An action can contain multiple actions.

Unlike a test case, an action cannot run on its own.

In ATS, you create a new action by going to **Test Cases** in the navigation menu and then clicking **New Action** in the **Actions** drop-down menu in the **Repository** tab. A dialog box then opens where you give your action a name and an optional description. After you have created the new action, click its name and the **Action Details** page open.

Another way to create a new action is to extract an action out of test steps from a test case. For more information on how to extract an action, see the "Extract Action, Copy, Paste, Delete" section of [Test Case Reference](/appstore/partner-solutions/ats/rg-two-test-case/).

## Action Details

In the upper-left corner of the **Action Details** page, you can find the name and the description of the action. To change these, click them and edit the text. ATS saves the changes automatically.

In the upper-right corner of the page, you can find the **Export** drop-down menu, where you can export the action definition. This creates an XML file, which you can then import into another ATS project.

### Test Steps

**Test Steps** describe the actions that ATS performs. You add new test steps by searching for an action in the **Add step** box.

Another way of adding test steps to a test case is to use the recorder by clicking **Record**. For more information, see [Recorder](/appstore/partner-solutions/ats/rg-two-recorder/).

Click the test step description to open the test step details. For more information, see [Test Step](/appstore/partner-solutions/ats/rg-two-test-step/).

### Settings

Under the **Settings** tab, set the **Input Parameters** and **Output Parameters** of the action. These optional parameters pass values to the action or return the outcome of an action.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-action/action.png" class="no-border" >}}

#### Input Parameters

An input parameter is a value that you use inside your action. The input parameter is shown as an [action parameter](/appstore/partner-solutions/ats/rg-two-test-step/#action-parameter) of a test step. An action can have multiple optional or required input parameters, but it can only have one output parameter.

The following table describes the buttons under **Input Parameters**:

| Button Label | Description |
| --- | --- |
| New | Creates a new input parameter. This opens a dialog box where you give the input parameter a name and an optional description and then set the input parameter properties. |
| Edit | Opens the editor for a selected input parameter. |
| Delete | Deletes the selected input parameter. |
| Up | Swaps the order of the selected input parameter with the input parameter above. |
| Down | Swaps the order of the selected input parameter with the input parameter below. |

To create a new input parameter, click the **New** button below **Input Parameters**. This opens a dialog box where you give the input parameter a name and an optional description.

Under **Properties**, you see the extra settings for the input parameter:

| Property Name | Description |
| --- | --- |
| Datatype | The specified data type of the input parameter. |
| Show as password | If set to **Yes**, ATS displays the value of the input parameter as asterisks.  |
| Required/Optional | If set to **Required**, the user must set the input parameter in the test step details. Otherwise, ATS does not execute the action. |

#### Output Parameter

An output parameter is the outcome of an action. Each action has a maximum of one output parameter. ATS uses output parameters to make the outcome of an action available to other actions or test steps.

To set an output parameter, click **Set** under **Output Parameter**. The following input fields will appear:

| Name | Description |
| --- | --- |
| Name | The name for the output parameter. |
| Description | An optional description for the output parameter. |
| Datatype | The data type of the output parameter. |

To pass the outcome of your action to the output parameter, you must use the **Set Return Value** action in your test case. ATS uses the input value of the Set Return Value action as the output parameter of the current action.

If you want to remove the output parameter from your action, click **Remove**.

### Show Usages

The **Show Usages** tab gives an overview of all the other actions used in the current action. Besides that, it also shows other actions and test cases that use the current action.

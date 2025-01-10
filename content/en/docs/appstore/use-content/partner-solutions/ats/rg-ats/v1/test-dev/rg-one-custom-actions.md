---
title: "Custom Actions"
url: /appstore/partner-solutions/ats/rg-one-custom-actions/
weight: 5
---

## Create Custom Actions from Scratch

If you want to create a new action from scratch, go to the Repository and switch to the **All Objects** tab.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/repository.png" alt="Add Item button on Repository page" class="no-border" >}}

Now click **Add Item**, a popup window will appear.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/sampleaction.png" alt="Create new Action" class="no-border" >}}

In that window you can choose which type of item you want to create.
Choose **Action** and give it a **name** and an optional **description**. You can change the name and the description later on if you want.
When you have entered all needed information, click **Create**.

Now open the newly created action by double-clicking its name in the repository.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/editaction.png" alt="Edit Action page" class="no-border" >}}

On this page you can edit your new action by adding other existing actions to it, like you would in a test case, and set **input-** and **output parameters**.

## Create Custom Actions from Existing Actions

Based on the existing actions, you can build up your own actions (custom actions). Also, if you are fluent in JavaScript, you can add a whole variety of functionalities by using the generic “Execute JavaScript” action.

To create a custom action, first select the test steps you need to achieve the desired action in your test case:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168181.png" alt="Select multiple Test Steps in a Test Case" class="no-border" >}}

Then extract the actions into one test step that contains your selected actions using the **Extract Action** button:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168182.png" alt="Extract action dialog" class="no-border" >}}

On this dialog box, you can give your new custom action a **Name** and a **Description**. Click **Close** to finish. You can now add your action to any test case, like you would with any other action.

## Changing Custom Actions

When selecting a custom action, click **Open** under **Test Step Settings** to go inside the custom action:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168183.png" alt="Open custom action under test step settings" class="no-border" >}}

While inside your custom action, you can change the action just like you would in a test case. Additionally, you can set input and output parameters for your action under the settings tab.

## Setting Input Parameters

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168184.png" alt="Custom action settings screen" class="no-border" >}}

By clicking **New** under **Input Parameters**, you open the **Edit Input Parameter** dialog box, where you set the properties of your new input parameter:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168185.png" alt="Edit input parameter dialog" class="no-border" >}}

When adding a new input parameter, you have the following options:

Field | Description
--- | ---
Name | Sets the name of the input parameter.
Description | The description of your input parameter.
Datatype | The datatype of the parameter.
Required/Optional | Sets if the parameter is required or can be left open.
Show as Password | Sets if the parameter is readable in cleartext or hidden.
Type | Sets if the parameter is used as an input for a Selenium or internal function (should normally be **Default**).

### Enumerations

When creating a new input parameter, you can choose the datatype enumeration. An enumeration is a predefined list of values. When using an enumeration, as an input parameter you can choose which value of the enumeration to use.

To create a new enumeration, choose **Enumeration** as the **Datatype** when creating a new input parameter and click **New**:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168186.png" alt="Create new enumeration" class="no-border" >}}

On the **Edit Enumeration** dialog box, you can add new **Enumeration Entries** to your enumeration.

Enumeration entries have two attributes:

* **Caption** – the name of the entry that is shown when selecting an entry
* **Value** – the actual value of the entry that is used in the test execution

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168187.png" alt="Edit enumeration dialog" class="no-border" >}}

## Setting an Output Parameter

Setting an output parameter, works in a similar way to setting an input parameter. The difference is that you can only have one output parameter per action. To set an output parameter, click **Set** under **Output Parameter**.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168188.png" alt="Set output parameter" class="no-border" >}}

For an output parameter you can set the following:

Field | Description
--- | ---
Name | The name of the output parameter.
Description | The description of the output parameter.
Datatype | The datatype of the output parameter.
Required/Optional | Sets if the parameter is required to be set.

After an output parameter has been set, this parameter needs to be returned manually by using the *Set Return Value* action.

{{% alert color="info" %}}
To return a value from an action, you need use the **Set Return Value in a test step**.
{{% /alert %}}

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-custom-actions/21168189.png" alt="Set return Value action to return output parameter" class="no-border" >}}

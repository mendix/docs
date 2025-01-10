---
title: "Drop-Down"
url: /appstore/partner-solutions/ats/rg-two-drop-down/
---

A drop-down menu defines a list of options for an action input parameter. This means that you can only choose from the provided options. For example, the status of an order can be Open, Closed, or In Progress.

Under the **Settings** tab of your action, you can edit the input and output parameters:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-drop-down/action_add_dropdown.png" class="no-border" >}}

After clicking **New** under **Input Parameters**, the **Edit Input Parameter** dialog box opens. Here you set the data type of the input parameter to **Drop-down** and add new options to the drop-down menu by clicking **New**. Note that drop-down menu values must be unique; you cannot add two values with the same name.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-drop-down/action_add_dropdown_edit.png" class="no-border" >}}

If you now add the action to a test case, you must choose from the list of drop-down menu values you have specified as input for the action. The drop-down menu options are always interpreted as text.

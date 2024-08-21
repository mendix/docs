---
title: "Adding a Custom Action to the Workflow Toolbox"
linktitle: "Add Custom Action to Workflow Toolbox"
url: /refguide/add-action-to-workflow-toolbox/
description: "Describes how to expose a microflow as a workflow action in Mendix Studio Pro."
weight: 80
aliases:
    - /howto/logic-business-rules/add-action-to-workflow-toolbox/
---

## Introduction 

You can expose a microflow as a workflow action and add it to the workflow toolbox. This is particularly useful if you plan to reuse the microflow logic several times, turning it into a custom workflow action is a good alternative to using the [Call microflow](/refguide/call-microflow/) action. There are the following advantages to having the custom workflow action: 

* It makes logic more reusable.
* The workflow process is more visualized and understandable.
* It saves you time: dragging and dropping a ready-to-use action is faster than configuring the **Call microflow** action.  

This how-to teaches you how to do the following:

* Call a microflow
* Add microflow input parameters and return values
* Expose the microflow as the workflow action

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows/). 
* Install Atlas 3 from the Mendix Marketplace. As a result of installing Atlas 3, your app should contain the following modules that Workflow Commons depends on: Atlas_Core, Atlas_Web_Content, and DataGrid.
* Your app has the following optional modules [Workflow Commons](https://marketplace.mendix.com/link/component/117066) and [Mendix SSO](https://marketplace.mendix.com/link/component/111349) modules for better developer experience. For more information on how to set up Workflow Commons in an existing app, see [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/).

## Exposing the Microflow as the Workflow Action

For example, you have the Employee Onboarding process set up in your app. You have an integration with the SAP system and have a microflow called **ACT_SAP_INVENTORY_LAPTOP_CHECK** that checks if the employee has a laptop already assigned to them and returns `true` or `false` value. To be able to reuse the logic of this microflow in the **Employee_Onboarding** workflow, you can expose this microflow as a workflow action.

However, as the best practice, Mendix recommends using a second microflow that will call the **ACT_SAP_INVENTORY_LAPTOP_CHECK** one. The benefits of using the second microflow are the following:

* To make it easier to update parameters in **ACT_SAP_INVENTORY_LAPTOP_CHECK**. If you make changes in the parameters of the microflow that would mean that every task using this microflow will result in consistency errors. The calling microflow makes it possible to make changes to the parameters of the called microflow (**ACT_SAP_INVENTORY_LAPTOP_CHECK**) in the future, as you will have to modify only the calling microflow. 
* The calling microflow allows for data and parameter changes that the called microflow requires, but the workflow is not able to provide. For example, **ACT_SAP_INVENTORY_LAPTOP_CHECK** requires Employee ID, but the workflow has only Employee Name. You can get the Employee ID through the Employee's record and pass this to the **ACT_SAP_INVENTORY_LAPTOP_CHECK**.
* To have proper error handling, for example, you can validate what error has occurred and continue the workflow or abort it.

To create the calling microflow and add it as the custom action to the workflow toolbox, do the following:

1. Create a new microflow that calls **ACT_SAP_INVENTORY_LAPTOP_CHECK**. Name the new microflow **WFS_MY_SYSTEM_TASK**.
2. Make sure that the input parameters of the **WFS_MY_SYSTEM_TASK** microflow are mapped to the workflow definition. For the **Employee_Onboarding** workflow, add the EmployeeOnboarding parameter because the **EmployeeOnboarding** entity is set as the **Workflow entity**. 
3. In **Toolbox**, select **Microflow call** and drag it to the flow:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-action-to-workflow-toolbox/microflow-call.png" alt="Microflow call action" class="no-border" >}}

4. Double-click the **Microflow call** activity to open its properties and set **Microflow** to **ACT_SAP_INVENTORY_LAPTOP_CHECK**.
5. Click the **End event** and navigate to the **Properties** pane.
6. Set the **Return value** for it to **Boolean**.
7. Right-click the working area of the microflow and select **Properties**.
8. In the **Microflow properties** dialog box, open the **Expose as workflow action** tab.
9. Select the **Expose as workflow action** checkbox:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-action-to-workflow-toolbox/expose-as-workflow-action.png" alt="Expose as Workflow Action" class="no-border" >}}

10. The properties for the new workflow action appear. Do the following:

    1. Set the **Caption** to **Inventory check: laptop**.

    2. Set **Category** to **Integration**.

    3. Select an icon and a toolbox image from a disk for **Icon** and **Image** properties. For more information on properties, see the [Expose as Workflow Action](/refguide/microflow/#expose-as-workflow-action) section in *Microflow Properties*.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-action-to-workflow-toolbox/expose-as-workflow-action-properties.png" alt="Expose as Workflow Action Settings" class="no-border" >}}

11. Click **OK**.

Good job! You have configured the custom workflow action.

## Using the Custom Action in Workflows

Now that you have exposed the microflow as the custom workflow action, you can use it directly from the workflow toolbox. Do the following:

1. Open the **Employee_Onboarding** workflow.
2. Open the **Toolbox** and find the newly created **Integration** category there > the **Pass details to SAP** action:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-action-to-workflow-toolbox/workflow-toolbox.png" alt="Workflow Toolbox" class="no-border" >}}

3. Drag the action into the workflow.

Congratulations! You have turned the microflow into the custom workflow action and can easily use it in the workflow editor.

## Read More

* [Microflow Properties](/refguide/microflow/)
* [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/)

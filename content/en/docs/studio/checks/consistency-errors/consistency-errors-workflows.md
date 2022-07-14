---
title: "Workflow Consistency Errors"
url: /studio/consistency-errors-workflows/
weight: 05
description: "Describes workflow consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors", "workflows"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

In this document, we explain how to solve complex consistency errors that can occur when configuring [workflows](/studio/workflows/) in Mendix Studio. For more information on workflows, see [Workflows](/studio/workflows/).

An example of a consistency error is when you did not select a page for a new user task. 

{{% alert color="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by using the message text that is displayed in the **Checks** panel).

## 2 Workflow Consistency Errors 

The most common yet complex errors you can come across when configuring a workflow are described in the table below:

| Error Code | Message in the Checks Panel                                  | Element Where the Error Occurs                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE6685     | The parameters of the selected microflow have changed, please update them in the properties. | [Call Microflow](/studio/workflow-system-actions/) action  | When parameters of the selected microflow have been changed, for example, one more parameter was added, a parameter was deleted, or a parameter type was changed. | Open the **Call Microflow** properties > **Outcomes** and click **Refresh**. |
| CE6686     | The current outcomes of the call microflow activity do not match the configured microflow. Regenerate the outcomes. | [Call Microflow](/studio/workflow-system-actions/) action  | Current outcomes set in **Call Microflow** properties are no longer up-to-date. This happens when changing a return value of a microflow, for example, when a return value has been changed from enumeration type to Boolean. | Open the **Call Microflow** properties > **Outcomes** and click **Refresh**. |
| CE0078     | Condition should be of type Boolean or enumeration but is of type {type of condition}. | [Decision](/studio/workflows-general-activities/#decision) | For more information on this error, see the [Properties Not Set Consistency Errors](/studio/consistency-errors-microflows/#properties-not-set) section in *Microflow Consistency Errors*. | For more information on this error, see the [Properties Not Set Consistency Errors](/studio/consistency-errors-microflows/#properties-not-set) section in *Microflow Consistency Errors*. |
| CE0079     | The 'true' case should be configured in properties for an outgoing flow. <br />or<br />The 'false' case should be configured in properties for an outgoing flow. | [Decision](/studio/workflows-general-activities/#decision) | For more information on this error, see the [Properties Set Incorrectly Consistency Errors](/studio/consistency-errors-microflows/#properties-set-incorrectly) section in *Microflow Consistency Errors*. | For more information on this error, see the [Properties Set Incorrectly Consistency Errors](/studio/consistency-errors-microflows/#properties-set-incorrectly) section in *Microflow Consistency Errors*. |
| CE5012     | Return type of selected {Name of the microflow} should be {return type}. | [User Task](/studio/workflows-user-task/)                  | There can be different causes for this error. In the workflow editor the cause of the error is that you have a user task and its **Assign Task Using** property is set to **Microflow**, but this microflow does not return a list of users.<br />For causes when it occurs on a page, see the [Data Consistency Errors](/studio/consistency-errors-pages/#data-consistency) section in *Page Consistency Errors*. | Set the return value of the microflow to the list of System.Users.<br />The return value is set to System.Users automatically if you create a microflow though the **Assign Task Using** property. Do the following: <ol><li>Open user task properties.</li><li>Make sure the **Assign Task Using** is set to **Microflow**. </li><li>Click the **Microflow** property to select a new microflow.</li><li>In the **Select Microflow** dialog box, click the plus icon to create a new microflow.</li><li>Name the microflow and click **Create**.</li></ol>The created microflow has parameters and the return value configured automatically. Note that setting System.Users for the existing microflow can only be done in Studio Pro. |


## 3 Read More

* [Workflows](/studio/workflows/)
* [Checks](/studio/checks/)

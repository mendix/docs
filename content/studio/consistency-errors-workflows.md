---
title: "Workflow Consistency Errors"
parent: "consistency-errors"
menu_order: 05
description: "Describes workflow consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors", "workflows"]
---

## 1 Introduction 

In this document, we explain how to solve the most complex consistency errors that can occur when configuring [workflows](workflows) in Mendix Studio. For more information on workflows, see [Workflows](workflows).

An example of a consistency error is when . 

{{% alert type="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Checks** panel).

## 2 Workflows Consistency Errors 

The most common yet complex errors you can come across when configuring a workflow are described in the table below:

| Error Code | Message in the Checks Panel                                  | Element Where the Error Occurs  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE6685     | The parameters of the selected microflow have changed, please update them in the properties. |                                 |                                                              |                                                              |
| CE6686     | The current outcomes of the {ACTIVITY_TYPE} activity do not match the configured {SOURCE}. Regenerate the outcomes. | System actions (Call Microflow) | Current outcomes set in Call Microflow properties are no longer up-to-date. This happens when changing a return value of a microflow, by editing the attribute type of an attribute used in a microflow decision. | Open the **Call Microflow** properties > **Outcomes** and click **Refresh**. |




## 3 Read More

* [Workflows](workflows)
* [Checks](checks)

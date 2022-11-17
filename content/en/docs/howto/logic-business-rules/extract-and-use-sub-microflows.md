---
title: "Extract and Use Sub-Microflows"
url: /howto/logic-business-rules/extract-and-use-sub-microflows/
category: "Logic and Business Rules"
weight: 50
description: "Describes how to break down a large microflow into more manageable parts."
tags: ["microflow", "sub-microflow", "extract"]
---

## 1 Introduction

When building microflows that span multiple functions, the best practice is to break down the large microflow into sub-microflows. Sub-microflows represent individual parts of the whole microflow, for example, specific functions. You can reuse any sub-microflows in other parts in the application. Furthermore, when you have very large and complex microflows, using sub-microflows can help you better manage your logic and business processes. Use sub-microflows to make your microflow easier to understand, modify, and troubleshoot if needed.

For example, you can use sub-microflows to construct a microflow that imports data into the system. A data import process usually consists of several stages, such as data validation, import, and mapping the data into your Mendix domain model. As a best practice, instead of creating a single large microflow, you should extract the validation and mapping stages into their own sub-microflows to better manage the logic. 

{{% alert color="info" %}}
In addition to increased transparency and easier troubleshooting, creating sub-microflows also means that you can reuse some of them in other processes. In the example above, processes other than data import may also require a validation stage. Creating a sub-microflow for the data validation allows you to reuse it in other microflows as needed.
{{% /alert %}}

This how-to will teach you how to do the following:

* Create sub-microflows by extracting them from an existing microflow
* Troubleshoot extractions of sub-microflows
* Use existing microflows as sub-microflows

## 2 Creating Sub-Microflows

You can create a sub-microflow by extracting a part of an existing microflow. The following example microflow checks to see if a registration has a trainee assigned and a registration date. If the registration passes both of these checks, the registration is committed to the database.

{{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18581021.png" alt="An example of a complex microflow for validating an object and committing it to a database" >}}

In this scenario, it makes sense to create a sub-microflow for the validation steps. If you do this, you can reuse this sub-microflow in other microflows where you need to validate a registration again.

To extract the validation steps to a sub-microflow, follow these steps:

1. Select the area that you want to capture and use as a sub-microflow.

    {{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18581020.png" alt="Selecting an area to use as a sub-microflow" >}}

2. Right-click an item in the selection, and then select **Extract submicroflow**.

    {{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18581018.png" alt="Selecting the Extract submicroflow menu option" >}}

3. In the **Add microflow** dialog box, enter a name for the sub-microflow.

    {{% alert color="info" %}}As a best practice, use a consistent naming scheme that clearly identifies the microflow, for example, *Sub_{MicroflowDescription}*. For more information, see [Mendix Best Practices for Development](/refguide/dev-best-practices/).{{% /alert %}}

4. Click **OK**.
5. Open the sub-microflow by right-clicking the sub-microflow action and selecting **Go to microflow**.

    {{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18581016.png" alt="Multiple actions replaced with a microflow action" >}}

6. Make any other required configuration changes, depending on the contents of the sub-microflow. 

    For example, the sub-microflow shown in the image below does not return anything, so the sub-microflow call cannot be used in the **Is Valid?** check that immediately follows it.

    {{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18581015.png" alt="Sample sub-microflow for registration validation" >}}

    To stop or continue your microflow based on the sub-microflow's outcome, right-click the **Create Boolean Variable** activity and select **Set $isValid as return value**.

### 2.1 Troubleshooting Sub-Microflow Creation

If you get errors while extracting a sub-microflow, follow these steps:

1. Verify that you provided the right input and output parameters for the sub-microflow.
2. Check if the parameters are correctly configured.
3. Make sure that you highlighted the correct activities to turn into a sub-microflow.

## 3 Using Existing Microflows as Sub-Microflows

You can use an existing microflow as a sub-microflow. For example, after creating the validation sub-microflow, you can reuse it wherever you need to do a registration validation.

To reuse an existing microflow, follow these steps:

1. In the App Explorer, find the microflow that you want to reuse as a sub-microflow.
2. Drag it onto the working area of another microflow, as in the following figure:

{{< figure src="/attachments/howto/logic-business-rules/extract-and-use-sub-microflows/18580991.gif" alt="Dragging a microflow onto the working area of another microflow" >}}

## 5 Read More

* [Microflows](/refguide/microflows/)

---
title: "Mendix Assist"
category: "Microflows"
menu_order: 10
description: "Describes Mendix Assist in Mendix Studio."
tags: ["studio", "mendix assist", "AI", "assistant"]
---

## 1 Introduction 

Mendix Assist is an artificial intelligence-powered agent that helps you configure microflows in Mendix Studio. It gives unexperienced users recommendations on configuring the next step of the microflow based on activities, parameters, and events that already exist in the microflow.

Mendix Assist was built using machine learning analysis of over twelve million anonymized application flows built with Mendix. Mendix uses Deep Learning to detect best practice patterns in microflows. Based on these patterns Mendix Assist predicts the best options for the next activity in a microflow. Moreover, Mendix Assist keeps learning by analyzing new microflows being built.  

## 2 Mendix Assist Overview

Mendix Assist is enabled by default and is displayed as a blue dot in a flow of a [microflow](microflows). A bow-tie appears on the dot when you hover over it. 

![](attachments/mx-assist/mendix-assist-icon.png)

{{% alert type="info" %}}

It is possible to add activities in a regular way without using Mendix Assist. 

{{% /alert %}}

Click the bow-tie to view Mendix Assist recommendations. 

{{% image_container width="350" %}}![](attachments/mx-assist/mx-assist-recommendations.png)
{{% /image_container %}}

Mendix Assist lists the top five recommendations from the most probable to less probable ones for the particular microflow. Click the suggestion to proceed with it and insert it into a microflow. For more information, see the [Adding Activities and Elements with Mendix Assist](#add-activities) section.

{{% alert type="info" %}}

Some activities still need to be configured in **Properties** to function correctly. This concerns activities such as **Create Object**, when you need to set entity and attribute values manually.  

{{% /alert %}}

Once you have selected an activity or an event to insert to the microflow using Mendix Assist, the
information dialog with brief description of this activity/event is displayed above the flow.

![](attachments/mx-assist/info-dialog.png)

The following options are available in the information dialog box:

* **Don't show again** – disables the information dialog box (it will not be shown again when you insert other activities) 
* **Lean More** – opens documentation on microflow activities
* **Thanks, I understand** – dismisses the current information dialog box 

## 3 Settings

To open settings of Mendix Assist, click the gear icon in the top right corner of the information dialog.

![](attachments/mx-assist/settings-mx-assist.png)

Settings available for Mendix Assist are described in the table below:

| Setting                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| Mendix Assist Is ON/OFF      | Toggling the setting enables/disables the tool.              |
| Information Dialog Is ON/OFF | Toggling the setting enables/disables the information dialog box. **Note** The information dialog box is disabled if Mendix Assist is OFF. |

You can also enable/disable Mendix Assist by clicking the information icon in the top menu bar of Mendix Studio: 

{{% image_container width="300" %}}![](attachments/mx-assist/info-icon-setting.png)
{{% /image_container %}}

{{% alert type="info" %}}
If you disable Mendix Assist, the information dialog will be disabled as well. Once you re-enable Mendix Assist, the information dialog is also re-enabled. 
{{% /alert %}}    

## 4 Adding Activities and Elements with Mendix Assist {#add-activities}

You can add various activities using Mendix Assist. Depending on the complexity of the microflow and on the element/activity, it can be inserted right away, or you will need to provide Mendix Assist with additional information. For example, if you are adding a check, you need to specify what object or variable will be checked, and what condition exactly will be checked: if the object exists, or if the object is true. For more information, see the [Adding a Check](#add-check) section.

### 4.1 Adding an Activity

To add an activity (such as **Change Object**, **Show Page**, **Create Object**, etcetera), do the following:

1. Click a blue Mendix Assist dot in a microflow.

2. Browse the suggestions and select the activity you need.

3.  Click the selected activity to add it to the flow.

    {{% image_container width="350" %}}![](attachments/mx-assist/mx-assist-list.png)
    {{% /image_container %}}

The activity is added to the flow.

### 4.2 Adding a Check {#add-check}

Adding a check means that you will add a **Decision** with Boolean attribute type: your flow will be split into one flow labeled *true* and another one labeled *false*. For more information, see [Decision](microflows-decision).   

{{% image_container width="300" %}}![](attachments/mx-assist/check-added.png)
{{% /image_container %}}

{{% alert type="info" %}}

If you do not have a variable or/and the attributes of the Boolean type, this option will not be
listed in the suggestions.

{{% /alert %}}

To add the check, do the following:

1. Click a blue Mendix Assist dot in a microflow.

2.  Find **Add a check** in the suggestions.

    {{% image_container width="350" %}}![](attachments/mx-assist/adding-check.png)
    {{% /image_container %}}

3. The number of options for the check will be opened, select the check that you want to add and click it. 

The decision is added to the microflow. 

{{% alert type="info" %}}

The number of options for the check depend on the number of variables of Boolean type in your microflow and on the number of attributes of Boolean type in your domain model. For more information, see [Domain Model](domain-models) and [Attributes](domain-models-attributes). You can also add a check if an object exists microflow.

{{% /alert %}}

### 4.3 Adding a Decision

When you add a decision via Mendix Assist that means you add a decision with attribute of enumeration type to your microflow. For more information, see [Decision](microflows-decision) and [Attributes](domain-models-attributes). This means, if you do not have parameters with enumeration data type, **Add decision** will not appear in the suggestions.

To add the decision, do the following:

1. Click a blue Mendix Assist dot in a microflow.

2. Find **Add a decision** in the suggestions and select it.

    {{% image_container width="350" %}}![](attachments/mx-assist/adding-decision.png)
    {{% /image_container %}}

The decision is added to the microflow.

{{% alert type="info" %}}

The number of options for **Add a decision** depend on the number of parameters with enumeration data type in your microflow. For more information, see [Domain Model in Studio](domain-models) and [Attributes](domain-models-attributes).

{{% /alert %}}

## 5 Read More

* [General Info](general)
* [Microflows](microflows)
* [Decision](microflows-decision)

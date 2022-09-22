---
title: "Create List"
url: /refguide8/create-list/
weight: 3
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/create-list.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The **Create list** activity creates an empty list.

## 2 Properties

An example of create list properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/list-activities/create-list/create-list-properties.png" alt="create list properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The create list properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Entity

The entity of the objects in the list. All objects in the list must be of the same type.

### 3.2 List Name

This is the name of the list which can be used by all activities that follow this activity.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

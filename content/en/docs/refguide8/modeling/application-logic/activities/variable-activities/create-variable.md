---
title: "Create Variable"
url: /refguide8/create-variable/
tags: ["studio pro", "create variable", "variable", "variable activities"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/create-variable.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

With this action, you can create a new variable and assign a value to it. For example, you can create a *$Discount* variable and assign a value 0.5 to give customers a 50% discount and use this value to calculate a price for a customer:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/variable-activities/create-variable/create-variable.png" alt="Create Variable" >}}

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/variable-activities/create-variable/create-variable-properties.png" alt="Create Variable Properties" >}}

The **Create variable** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Data Type

**Data type** defines what type of data is stored in the variable. A variable can have one of the following [data types](/refguide8/data-types/): Boolean, Enumeration, Decimal, Integer/Long, or String.

### 3.2 Initial Value

Defines the initial value of the variable. The value is entered using an [expression](/refguide8/expressions/) (the result of the microflow expression must match the data type of the variable).

### 3.3 Variable Name

Variable defines the name of the resulting variable. The variable can be used by all activities following this activity in the flow.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## 5 Read More

* [Activities](/refguide8/activities/)
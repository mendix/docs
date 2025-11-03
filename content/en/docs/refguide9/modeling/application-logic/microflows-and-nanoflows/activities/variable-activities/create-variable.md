---
title: "Create Variable"
url: /refguide9/create-variable/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## Introduction

With this action, you can create a new variable and assign a value to it. For example, you can create a *$Discount* variable and assign a value 0.5 to give customers a 50% discount and use this value to calculate a price for a customer:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/variable-activities/create-variable/create-variable.png" alt="Create Variable" class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/variable-activities/create-variable/create-variable-properties.png" alt="Create Variable Properties" class="no-border" >}}

The **Create variable** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Data Type

**Data type** defines what type of data is stored in the variable. A variable can have one of the following [data types](/refguide9/data-types/): Boolean, Enumeration, Decimal, Integer/Long, or String.

### Initial Value

Defines the initial value of the variable. The value is entered using an [expression](/refguide9/expressions/) (the result of the microflow expression must match the data type of the variable).

### Variable Name

Variable defines the name of the resulting variable. The variable can be used by all activities following this activity in the flow.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide9/activities/)

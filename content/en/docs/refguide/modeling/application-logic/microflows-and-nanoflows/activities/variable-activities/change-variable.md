---
title: "Change Variable"
url: /refguide/change-variable/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Change variable** activity allows you to change the value of an existing variable. 

For example, if you have a *$Discount* variable that gives customers a 50% discount on certain items, you can change this variable and assign a new value to it. You can use this value to give new customers a bigger discount

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/variable-activities/change-variable/change-variable-properties.png" alt="Change Variable Properties" width="650px" class="no-border" >}}

The **Change variable** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

### Variable

The variable which you want to change the value of.

### Value

The new value for the variable. The value is entered using an [expression](/refguide/expressions/). The type of the expression must be the same as the type of the selected variable.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide/activities/)

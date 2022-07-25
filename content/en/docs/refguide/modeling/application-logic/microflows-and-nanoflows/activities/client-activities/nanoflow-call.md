---
title: "Call Nanoflow"
url: /refguide/nanoflow-call/
weight: 2
tags: ["studio pro", "nanoflow call", "call nanoflow"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert color="warning" %}}
This activity can only be used in **Nanoflows**.
{{% /alert %}}

The **Call nanoflow** activity can be used to call another [nanoflow](/refguide/nanoflows/). 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/nanoflow-call/nanoflow-call.png" alt="Nanoflow Call"   width="200"  >}}

Arguments can be passed to the nanoflow and the result can be stored in a variable.

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/nanoflow-call/nanoflow-call-properties.png" alt="Nanoflow Call Properties" >}}

The **Nanoflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Nanoflow

The nanoflow that is called by this activity.

### 3.2 Parameters

Depending on the selected microflow, you will see a list of its parameters in a table. Parameters pass data to the activity. 

#### 3.2.1 Name

The name of the parameter that is read-only.

#### 3.2.2 Type

The type of the parameter that is read-only. For more information on possible types of parameters, see [Data Types](/refguide/data-types/).

#### 3.2.3 Argument {#argument}

The **Edit parameter value** button allows you to edit the argument value. For each parameter of the nanoflow, you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide/expressions/).

### 3.3 Return Type

This read-only property indicates whether you will retrieve a variable, object or list. 

### 3.4 Use Return Value

This property determines if the returned value from the called nanoflow should be available in the rest of the current nanoflow. If **Use return value** is set to *Yes*, you will need to fill in the [name](#name) of the variable, object, or list returned by the activity.

### 3.5 Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
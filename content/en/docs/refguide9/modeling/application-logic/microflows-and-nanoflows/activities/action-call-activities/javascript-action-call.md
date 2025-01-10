---
title: "JavaScript Action Call"
url: /refguide9/javascript-action-call/
weight: 20
description: "This reference explains the properties of the JavaScript action call activity."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Nanoflows**.
{{% /alert %}}

## Introduction

The JavaScript action call activity can be used to call a [JavaScript action](/refguide9/javascript-actions/). Arguments can be passed to the action, and the result can be stored.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/javascript-action-call/javascript-call.png" alt="javascript action call properties"   width="200"  class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/javascript-action-call/javascript-action-call.png" alt="JavaScript Action Properties" class="no-border" >}}

The **JavaScript action call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### JavaScript Action

This property sets the JavaScript action called by an activity.

### Parameter

Depending on the selected JavaScript action, you will see a list of its parameters. Parameters pass data to the activity. 

#### Arguments

Click **Edit** next to the parameter to fill in the arguments. 

An argument is the input data that you are passing to the JavaScript action. For each JavaScript action parameter, you must supply an argument of the same type. 

The values of the arguments are defined using [expressions](/refguide9/expressions/):

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/java-action-call/argument-edit.png" alt="argument" class="no-border" >}}

### Return Type {#return-type}

This read-only property indicates whether you will retrieve a variable, object or list. The return type is defined by the JavaScript action.

### Use Return Value

This property determines if the returned value from the JavaScript action should be available in the rest of the microflow or nanoflow. If **Use return value** is set to *Yes*, you will need to fill in the [name](#name) of the variable, object, or list returned by the activity.

### Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity. If it is an object or list, the [Return type](#return-type) will indicate the entity which is being returned. 

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Read More

* [JavaScript Actions](/refguide9/javascript-actions/)
* [Build JavaScript Actions](/howto9/extensibility/build-javascript-actions/)
* [Nanoflows](/refguide9/nanoflows/)
* [Java Action Call](/refguide9/java-action-call/)

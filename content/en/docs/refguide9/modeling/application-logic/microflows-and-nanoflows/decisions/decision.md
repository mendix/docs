---
title: "Decision"
url: /refguide9/decision/
weight: 1
aliases:
    - /refguide9/exclusive-split.html
    - /refguide9/exclusive-split
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A decision is an element that makes a choice based on a condition and follows one and only one of the outgoing sequence flows. For example, you can use a decision to decide whether a customer gets a discount or not. You can also use a decision to assign a different online meeting URL to an employee based on which time zone they work in. 

## Properties

An example of decision properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decision/decision-properties.png"   width="50%"  class="no-border" >}}

The decision properties pane consists of the following sections:

* [Common](#common)
* [Expression](#expression)
* [Rule](#rule)

## Common Section {#common}

### Caption

For more information, see the [Caption](/refguide9/microflow-element-common-properties/#caption) section in *Common Properties*.

### Decision Type {#decision-type}

**Decision type** defines whether an expression or a rule is used to define conditions of the decision. Possible decision types are described in the table below:

| Option | Description |
| --- | --- |
| [Expression](#expression) | Expressions can be used to create or change an object or a variable based on logic. |
| [Rule](#rule) | A rule is a special kind of microflow, the outcomes of which can be used in a decision instead of calling a sub-microflow and using the return variable of that sub-microflow. The idea is that complicated decisions can be consolidated in rules and reused in various places. |

### Error Handling Type

For more information, see the [Error Handling Type](/refguide9/microflow-element-common-properties/#error-handling) section in *Common Properties*.

## Expression Section {#expression}

The **Expression** section is shown in the decision properties pane if the [Decision Type](#decision-type) property is set to **Expression**. The expression entered here is used to define the condition of the decision. For more information on expressions, see [Microflow Expressions](/refguide9/expressions/).

The expression should result in a Boolean or an [enumeration](/refguide9/enumerations/). 

### Boolean Result

For an expression resulting in a Boolean, two flows are possible: **true** and **false**. For example, you can use an expression resulting in a Boolean to decide if a customer can get a discount by checking their membership status. The expression in this example is `$Customer/Membership`.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decision/decision-boolean.png" width="500" class="no-border" >}}

### Enumeration Result

The number of conditions available for the enumeration type depends on the corresponding enumeration values. There is also the *empty* condition available for enumeration: if the enumeration parameter or an attribute of an object is unassigned, a sequence flow with the caption **(empty)** is followed.

For example, if you want to assign a different meeting URL based on the working location of an employee, you can use an expression resulting in an enumeration. 
    
In the example below, the microflow parameter is *MeetingRegistration*. Depending on where the employee works, a different meeting URL is assigned. If an employee did not select a working location when registering for the meeting, the flow labelled **(empty)** is followed and an error message is shown to the end-user (the employee in this case).

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decision/decision-enumeration.png" width="600" class="no-border" >}}

Since you want to go in a different direction for each value of the enumeration, you only need to use the attribute containing the enumeration. So the expression in this example is `$MeetingRegistration/WorkingLocation`. 
    
Afterwards, you can merge the three flows followed by a meeting URL into one flow (for more information, see [Merge](/refguide9/merge/)). Then you only need to [commit](/refguide9/committing-objects/) the registration once and have one [Close page](/refguide9/committing-objects/) activity after the merge. 

## Rule Section {#rule}

The **Rule** section is shown in the decision properties pane if the [Decision Type](#decision-type) property is set to **Rule**. A [rule](/refguide9/rules/) can be selected to define the condition of the decision. You can use the outcome of the rule for the decision instead of calling a sub-microflow and using the returned variable of that sub-microflow.

The properties of the **Rule** decision type are the following ones:

* **Rule** – allows you to select a rule.

* **Parameter** – for each parameter of the rule an argument needs to be specified using [expressions](/refguide9/expressions/). For example, a rule that determines whether a customer deserves a certain status will have a customer object as a parameter.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decision/rule-properties.png"   width="350"  class="no-border" >}}

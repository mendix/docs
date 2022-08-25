---
title: "Loop"
url: /refguide/loop/
weight: 80
tags: ["studio pro", "loop", "iterate over", "for each", "while"]
---

## 1 Introduction

A loop is used to execute repeated actions and is visualized as a frame. For each iteration, the flow inside the loop is executed. The loop can be configured to iterate over a list or be based on a Boolean expression. For more information, see the [Loop Type Property](#loop-type) section below.

The loop can contain all types of elements used in microflows, except for [start events](/refguide/start-event/) and [end events](/refguide/end-event/). Only a loop can contain [break events](/refguide/break-event/) and [continue events](/refguide/continue-event/).

## 2 Loop Type Property {#loop-type}

The two loop types are described below.

### 2.1 For Each (Item in the List) {#for-each}

This is the default type when creating a new loop activity, and it can be used to iterate over a list of objects. The list can be configured by setting the **Iterate over** property to a list in your flow scope, and for each object in the list, the flow inside the loop will be executed. The iterator (which looks the same as a parameter) represents the current object in the list for each iteration, and it can be renamed by setting **Loop object name**. This object is shown in black, and the entity type of the object is in blue.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/loop/foreach-loop-edit-form.png" >}}

For example, if you have a list of objects of the **OrderLine** entity and you want to set the purchase date for every object, you can use a loop with a change activity in it that sets the purchase date:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/loop/foreach-loop.png" >}}

### 2.1 While (Condition Is True) {#while}

This loop type repeats the flow inside the loop many times until some condition evaluates to `false`. This condition is evaluated before each execution of the loop body. Typically, a **While** loop is used when it is impossible to determine the exact number of loop iterations in advance.

You can provide a description for the loop or the condition by setting the **Caption** field. The loop condition can be entered as an [expression](/refguide/expressions/) in the **Expression** editor, and it should result in a Boolean value. The **While** keyword is shown in blue, and the **Caption** is shown underneath in black.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/loop/while-loop-edit-form.png" >}}

For example, if you want to [log](/refguide/log-message/) numbers between 1 and 5, you can use a loop with a condition that checks whether a **Counter** [variable](/refguide/variable-activities/) is less than or equal to 5. Inside the loop, you would log the **Counter** value and add 1 to the **Counter** variable in order for the loop to stop executing when the **Counter** is greater than 5:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/loop/while-loop.png" >}}

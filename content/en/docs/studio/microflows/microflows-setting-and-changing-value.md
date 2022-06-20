---
title: "Set & Change a Value for Different Activities"
url: /studio/microflows-setting-and-changing-value/
category: "Microflows"
weight: 50
description: "Describes the process of setting the initial value for objects or variables in Mendix Studio."
tags: ["studio", "microflow", "set value", "variable"]
---

## 1 Introduction 

This document describes how to set and change values for various activities in microflows of Mendix Studio.

You need to assign a value to an object/variable, when you configure the properties of the following activities:

* **Create Object** –  you can create an object with this activity and provide initial values for properties of the object 
* **Create Variable** – you can create a variable and assign a value to it with this activity 

You can also change the value when you configure the following activities:

* **Change Object** – can be used to change an existing object or properties of this object
* **Change Variable** – change the value of an existing variable in the current microflow

You can also configure a return value for the **End Event** – the location where the microflow will stop.

For more information on the functions of these activities, see [Microflows](/studio/microflows/). 

## 2 Setting the Initial Value for Create Object and Changing the Value for Change Object

 To set the initial value or change the value of an object, do the following:

1. Add the **Create Object**/**Change Object** activity to a microflow. For more information, see the [Adding New Event or Activity](/studio/microflows/#add-elements) section in *Microflows*.
2. Click the activity to view its properties.
3. Select the data source for the activity, then click **Add New Value**

    {{< figure src="/attachments/studio/microflows/microflows-setting-and-changing-value/add-new-value.png" >}}

4. In the **Set initial value**/**Change value dialog**, select an attribute or association.
5.  Set the initial value (for **Create Object**) or assign a new value (for **Change Object**) by selecting an attribute or an association and writing an expression.   For more information on how to write an expression, see [Expressions](/studio/expressions/).


## 3 Setting the Initial Value for Create Variable and Changing the Value for Change Variable

To set the initial value or change the value of a variable, do the following:

1. Add the **Create Variable**/**Change Variable** activity to a microflow. For more information on how to add an element to a microflow, see the [Adding New Event or Activity](/studio/microflows/#add-elements) section in *Microflows*.
2. Click the activity to view its properties.
3.  Select the data type for the activity, then click **Set initial value** / **Change value**

    {{< figure src="/attachments/studio/microflows/microflows-setting-and-changing-value/set-initial-value-var.png" >}}

4.  Write an expression to set the initial value (for **Create Variable**) or assign a new value (for **Change Variable**).  For more information on how to write an expression, see [Expressions](/studio/expressions/).


## 4 Configuring the Return Value for an End Event 

The return value is the value that is returned to the flow or a widget that called the current flow. To configure the return value, do the following:

1. Add the **End Event** to a microflow or select the existing end event. For more information, see the [Adding New Event or Activity](/studio/microflows/#add-elements) section in *Microflows*.
2. Click the event to view its properties.
3.  Set the **Returns** option to **Value**.

    {{< figure src="/attachments/studio/microflows/microflows-setting-and-changing-value/end-event-returns-value-setting.png" >}}

4.  Select the data type, then click **Value** to configure it.

    {{< figure src="/attachments/studio/microflows/microflows-setting-and-changing-value/configure-return-value.png" >}}

5.  Set the return value by writing an expression.  For more information on how to write an expression, see [Expressions](/studio/expressions/).


## 5 Read More

* [Microflows](/studio/microflows/)
* [Microflow Expressions](/studio/expressions/)

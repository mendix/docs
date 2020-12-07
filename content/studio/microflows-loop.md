---
title: "Loop"
category: "Microflows"
menu_order: 30
description: "Describes a loop in Mendix Studio."
tags: ["studio", "microflow", "loop", "loops"]
---

## 1 Introduction 

A loop is used to iterate over a list of object and perform actions on each item of the list when building [microflows](microflows). For example, you can retrieve a list of orders from your database, then loop over this list and mark orders as processed. For more details on use cases, see the [Configuring a Loop](#loop-example) section.

The loop is visualized as a frame. The flow inside the loop is executed for each object. That means, if you add more than one activity to the loop, the full flow gets executed on each item. For example, you can add a loop that will prevent orders from processing if the order is not paid:

![](attachments/microflows-loop/loop.png)

The loop can contain all types of elements used in microflows, except for start and end events. Additionally, only a loop can contain [break events](/refguide/break-event) and [continue events](/refguide/continue-event). A break event is used in loops only to stop iterating over a list of objects and continue with the rest of the flow in a microflow. A continue event is used in loops only to stop the current iteration and start the iteration of the next object.

## 2 Loop Properties

Loop properties consists of the **Data Source** section and are described below:

* **Loop Over** – a variable that is a list of items you will loop through

*  **Loop Variable Name** – refers to the name of the list item that is currently being worked on

	{{% image_container width="350" %}}![Data Source Properties of a Loop](attachments/microflows-loop/loop-properties.png)
	{{% /image_container %}}

## 3 Configuring a Loop {#loop-example}

A straightforward use-case is where you retrieve a list of orders from your database, loop over this list, and mark orders as processed as a result. 

![Loop Example](attachments/microflows-loop/loop-example.png)

Make sure you have the following prerequisites:

1. [Create an entity](domain-models#adding-new-entities) in your domain model and name it *Order*.
2. [Create an attribute](domain-models#adding-new-attributes) of the Boolean type for this entity to indicate the status of an order and name this attribute *Processed*.
3. [Create a microflow](microflows#creating-new-microflow).

To start the use-case, do the following:

1. Open a microflow you want to add a loop to.

2. First of all, you need to get the list of orders to loop over. Do the following: <br />

    a. In the **Toolbox**, select **Retrieve**, drag and drop it to the microflow. <br />

    b. In **Properties** > the **Data Source** section, select **From Database**, and set *Order* as an entity for this activity. (The **Range** property is set to **All** by default): <br />

    {{% image_container width="350" %}}![Retrieve Object Properties](attachments/microflows-loop/retrieve-properties.png)
    {{% /image_container %}}

3. As you have retrieved the list of orders you can work on, you now need to create a loop and logic for it. Do the following: <br />

    a. In the **Toolbox**, select **Loop**, drag and drop it to the microflow. <br />

    ![Loop is Added](attachments/microflows-loop/loop-added.png)<br />

    b. In **Properties**, set **OrderList** as **Loop Over** (**Loop Variable Name** is set automatically). So, you have selected the list of objects to loop over. <br />

    {{% image_container width="350" %}}![Loop Properties in an Example](attachments/microflows-loop/loop-properties-in-example.png)
     {{% /image_container %}}

4. Now you can add the activity that will change the status of each order to *Processed*. This means that the activities you add inside the loop will be performed on each object (each order). Do the following:<br />

    a. In the **Toolbox**, select **Change Object**, drag and drop it inside the loop .<br />

    b. In **Properties** > the **Data Source** section for the **Change Object** activity, set **Object** to **Order**.<br/>

    c. When the **Change Members** option appears, click **Add New Value**.<br />

    ![Change Object Properties in Loop Example](attachments/microflows-loop/change-object-properties.png)

5. In the **Change value** dialogue window, do the following:<br />

    a. Set **Select an Attribute or Association** to **Processed (Boolean)**.<br />

    b. In the **Expressions** tab, set the **New value** of this attribute by typing in *true*. <br />

    ![Example of Change Value Dialogue Window](attachments/microflows-loop/change-value-dialogue-example.png)

    c. Click **Add** to save the changes. 

This video shows the process of configuring the example above:

<video width="768" height="432" controls src="attachments/microflows-loop/loop-example-video.mp4">VIDEO</video>
As a result, you have a list of orders retrieved to your microflow, and a loop that iterates over this list. The activity inside the loop sets the status of each order to processed. 

## 4 Read More

* [Microflows](microflows)

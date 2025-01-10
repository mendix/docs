---
title: "Retrieve"
url: /refguide/retrieve/
weight: 60
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

A **Retrieve** activity can be used to get one or more objects, either by directly traversing an association of another object, or by retrieving objects from the database.

## Properties

An example of retrieve activity properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/retrieve-properties.png" alt="retrieve properties" width="700px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The retrieve properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Source {#source}

The **Source** defines the way the objects are retrieved:

| Option | Description |
| --- | --- |
| By association | Retrieve the object (or objects) associated to an object by following an association. Note that when objects and/or their associations are changed and not committed, the data is not yet available in the database. By retrieving **By association**, the data that is not committed can be retrieved. For more information, see the [Retrieve by Association Properties](#association) section below.  |
| From database | Retrieve objects from the database. This can only be used for [persistable objects](/refguide/persistability/). For more information, see the [Retrieve from Database Properties](#from-database) section below. 

{{% alert color="warning" %}}
If you have changes in the memory, this action retrieves objects from the database and also applies the changes in the client.

In this case, a change is not the entire object, but just an attribute of the object (for example, a **Name** attribute of a **Person** entity). If you retrieve the **Person** entity from the database, you still retrieve the **Age** and **Height** attributes that are stored in the database.
{{% /alert %}}

{{% alert color="info" %}}
Any changes made to an object are visible in all widgets. This is because changes are stored globally in the client.
{{% /alert %}}

### Retrieve by Association Properties {#association}

#### Association

This property specifies which association is followed. The association must be an association from an object that is already available to the retrieve activity. Associations can be followed in both directions.

### Retrieve from Database Properties {#from-database}

#### Entity

This property specifies the entity from which to retrieve instances (objects).

#### XPath Constraint

The [XPath constraint](/refguide/xpath-constraints/) defines the condition the objects need to fulfill to be retrieved. If there is no XPath constraint, all objects of the entity are retrieved.

{{% alert color="info" %}}
Date functions, user-role tokens, computations based on tokens, and following associations are not supported in XPath constraints when the retrieve activity is in a nanoflow.
{{% /alert %}}

#### Range

This property specifies the range that determines how many objects are retrieved:

| Range | Meaning |
| --- | --- |
| All | Retrieve all objects at once. |
| First | Retrieve only the first object. The result of the retrieve action will be a single object instead of a list. Note that when you know you have only one object or you only want to use the first object in a list, use **First** to get a result of the object type (as opposed to a list). |
| Custom | Retrieve a given number of objects (**Amount**) starting at a given index (**Offset**). The amount and offset are expressions that should result in a number. Note that the first object has an offset of 0. An amount of 0 means that all objects are retrieved. |

#### Sorting

This property defines the order of the list. The list can be sorted in ascending and descending order on the values of an attribute. If there are objects that have the same attribute value, the list is sorted based on the second attribute (if any) and so on.

### Type

This read-only property indicates whether you retrieve a singe object or a list.

### List Name or Object Name

This is the name of the list or object returned by the activity. It can be used by all the activities that follow this activity.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Optimizing Retrieve Activities

You often need to retrieve objects in order to complete a process. Sometimes those objects cannot be found and you need to take additional actions. Moreover, the objects you retrieve and the objects you create are assigned different names, and you cannot merge them back into a single flow.

This section presents an example for optimizing retrieve activities during the process of finding and creating objects. It also gives an example for retrieving a specific instance of an object.

### A Common Example 

A common example is shown below in which creating an order needs to be associated with the customer and their address. This example ends up with three different flows, and they cannot be merged back into the main flow because that causes the entities **OtherAddress** and **NewPrimaryAddress** to be unreachable.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/example-create-order.png" width="550px" class="no-border" >}}

One solution for this is to include the logic (partially) in a sub-microflow (as shown in the following image). However, this is not easy to read, and preventing creating the same object multiple times at different places also causes a lot of unnecessary maintenance.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/example-solution-one.png" width="650px" class="no-border" >}}

### Optimization

You can easily work around the issue in the example above by using a sub-microflow at a different place. To avoid making exceptions in your microflow for the default behavior, do not put the standard logic into a sub-microflow that is difficult to read (because of one exception earlier in the process). Since we got to this point because of an exception, it makes the most sense to solve this problem by altering the exception so that it fits in our standard flow.

The easiest way to implement this is to move all the logic for acquiring the customer's address into one sub-microflow (the **GetCustomerPrimaryAddress** sub-microflow). By doing so, all the logic acquired after getting the address only needs to be specified once, and the microflow is still easily readable. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/example-solution-two.png" width="500px" class="no-border" >}}

As we can see in the example below, the **GetCustomerPrimaryAddress** sub-microflow contains the same logic as in the original example, except that there is only one result from this sub-microflow: the correct customer's address.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/get-address-sub-microflow.png" width="550px" class="no-border" >}}

### Retrieving an Instance of an Object

Sometimes you only need to retrieve a specific instance of an object. Building a sub-microflow for just one retrieve-and-create action is too much work. An alternative way is to build your own loop, which allows you to have one main microflow but still be able to find and create objects during this process.

However, there is the risk of creating an infinite loop if the retrieve activity applies a constraint that is not set correctly during the create activity. So, always make sure to print a log message so that you can easily identify any problems in your design.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/retrieve/retrieve-one-object-instance.png" width="400px" class="no-border" >}}

## Read More

* [Extracting and Using Sub-Microflows](/refguide/extracting-and-using-sub-microflows/)

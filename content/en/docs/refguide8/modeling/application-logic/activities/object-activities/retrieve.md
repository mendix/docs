---
title: "Retrieve"
url: /refguide8/retrieve/
weight: 60
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/retrieve.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve** activity can be used to get one or more objects, either by directly traversing an association of another object, or by retrieving objects from the database.

## 2 Properties

An example of retrieve properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/object-activities/retrieve/retrieve-properties.png" alt="retrieve properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The retrieve properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Source {#source}

The **Source** defines the way the objects are retrieved:

| Option | Description |
| --- | --- |
| By association | Retrieve the object(s) associated to an object by following an association. Note that when objects and/or their associations are changed and not committed, the data is not yet available in the database. By retrieving **By association**, the data that is not committed can be retrieved. For more information, see the [Retrieve by Association Properties](#association) section below.  |
| From database | Retrieve objects from the database. For more information, see the [Retrieve from Database Properties](#from-database) section below. |

### 3.2 Retrieve by Association Properties {#association}

#### 3.2.1 Association

This property specifies which association will be followed. The association must be an association from an object that is already available to the retrieve activity. Associations can be followed in both directions.

### 3.3 Retrieve from Database Properties {#from-database}

#### 3.3.1 Entity

This property specifies the entity from which to retrieve instances (objects).

#### 3.3.2 Range

This property specifies the range that determines how many objects are retrieved:

| Range | Meaning |
| --- | --- |
| All | Retrieve all objects at once. |
| First | Retrieve only the first object. The result of the retrieve action will be a single object instead of a list. Note that when you know you have only one object or you only want to use the first object in a list, use **First** to get a result of the object type (as opposed to a list). |
| Custom | Retrieve a given number of objects (**Amount**) starting at a given index (**Offset**). The amount and offset are expressions that should result in a number. Note that the first object has an offset of 0. An amount of 0 means that all objects are retrieved. |

#### 3.3.3 XPath Constraint

The [XPath](/refguide8/xpath/) constraint defines the condition the objects need to fulfill to be retrieved. If there is no XPath constraint, all objects of the entity are retrieved.

{{% alert color="info" %}}
Date functions, user-role tokens, computations based on tokens, and following associations are not supported in XPath constraints when the retrieve activity is in a nanoflow.
{{% /alert %}}

#### 3.3.4 Sorting

This property defines the order of the list. The list can be sorted in ascending and descending order on the values of an attribute. If there are objects that have the same attribute value, the list is sorted based on the second attribute (if any) and so on.

### 3.4 Type

This read-only property indicates whether you will retrieve a singe object or a list.

### 3.5 List Name or Object Name

This is the name of the list or object returned by the activity. It can be used by all the activities that follow this activity.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

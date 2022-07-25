---
title: "Association Tab Properties"
url: /refguide8/association-member-properties/
weight: 15
tags: ["domain model", "association", "studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/association-member-properties.pdf).
{{% /alert %}}

## 1 Introduction

There are two ways to edit the properties of an [association](/refguide8/associations/). This document describes the properties you can edit from the **Associations** tab in the entity properties. If you want to edit the association as described in [Association Properties](/refguide8/association-properties/), you can click **Edit** to open the association properties dialog.

For more information on associations, see [Associations](/refguide8/associations/). 

## 2 Properties

An example of the **Associations** tab of the entity properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-member-properties/edit-entity-association.png" >}}

Associations in the Association tab have the following properties:

* [Name](#name) 
* [Type](#type)
* [Owner](#owner)
* [Parent/Child](#parent-child)

You can sort the list of associations by any of these properties (ascending or descending) by clicking the column titles.

### 2.1 Name {#name}

The name of the association is used to refer to it. For example, in forms or microflows.

{{% alert color="info" %}}
You cannot change this name in the association tab. To change the name, click **Edit** (or double-click the association name) to open the [Association Properties](/refguide8/association-properties/).
{{% /alert %}}

### 2.2 Type {#type}

This property defines whether an association is a reference (single) or a reference set (plural).

| Value | Description |
| --- | --- |
| Reference *(default)* | Single: an object of the owning entity refers to zero or one objects of the other entity. |
| Reference set | Plural: an object of the owning entity refers to zero or more objects of the other entity. |

{{% alert color="info" %}}
The examples for this property are combined with the example of the owner property below.
{{% /alert %}}

### 2.3 Owner {#owner}

This property defines whether an association has one or two owners. If there is one owner, the owner is located at the start of the arrow.

| Value | Description |
| --- | --- |
| Default *(default)* | Only one entity is the owner (the parent). |
| Both | Both entities are owners. |

Ownership is important as it defines two aspects of an association:

* how cardinality (many or one) is controlled
* where the association is recorded

{{% alert color="info" %}}
An external entity cannot be the owner for an association between a external and a local entity.
{{% /alert %}}

#### 2.3.1 Cardinality

Cardinality refers to counting the number of associations an object can have. To ensure that an object can count the occurrences of a particular association it needs to have ownership of the association.

So, for a one-to-many association the *many* end owns the association to ensure that it can only associate with *one* object. For a one-to-one association, both ends own the association. For a many-to-many relationship cardinality is not important.

#### 2.3.2 Association Recording

An association is recorded in the object which owns it. If both objects own the association, then the association is recorded with both objects. You can see examples of where the associations are recorded in the [Association Examples](/refguide8/associations/#examples) section of *Associations*.

Where the association is recorded has an important impact on the user of reference and reference set selectors in your app. The selector can only be inside a data view containing the _owning_ object. This is because it is only when you commit the owning object that the association is recorded.

For example, imagine you have a many-to-many association, **Customer_Group**, between **Customer** and **Group** owned by the Customer entity. You can put an input reference set selector to select Groups from within a Customer data view. However you _cannot_ put an input reference set selector to select Customers from within a Group data view.

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-member-properties/input-reference-set-selector.png" alt="Selecting Group objects through an input reference set selector in a Customer data view" >}}

If both ends own the association, you can overcome this limitation. However, this has to be balanced by the overhead associated with having to commit all entities where the association is recorded. Therefore, it is recommended that many-to-many relationships are owned by the **Default** entity, unless there is a strong business reason for needing to add the association from either end in your Mendix app.

{{% alert color="info" %}}
Recording the association on only one of the entities does not affect your ability to navigate the association from both ends. However, it may be slower to navigate from the non-owning end.
{{% /alert %}}

### 2.4 Type & Owner Relationship with Multiplicity & Navigability {#types}

**Type** and **Owner** properties of an entity are related to [Multiplicity](/refguide8/association-properties/#multiplicity) and [Navigability](/refguide8/association-properties/#navigability) properties of an association. When you change **Type** or **Owner**, you change **Multiplicity** and **Navigability** as well. 

You can find the correspondence between **Type**/**Owner** and **Multiplicity**/**Navigability** in the table below.

| **Multiplicity** | **Navigability** | Type          | Owner   |
| -----------------|----------------- | ------------- | ------- |
| One-to-one     | —      | Reference     | Both    |
| One-to-many     | —     | Reference     | Default |
| Many-to-many     | X objects refer to Y objects | Reference set | Default |
| Many-to-many     | X and Y objects refer to each other | Reference set | Both    |

For more information on multiplicity and navigability, see the [Multiplicity](/refguide8/association-properties/#multiplicity) and [Navigability](/refguide8/association-properties/#navigability) sections in *Association Properties*.

## 3 Parent/Child {#parent-child}

Parent and child settings show you the direction of the association. Parent defines the entity the association starts from, and child defines the entity the association ends with.

## 4 Read More

* [Association Properties](/refguide8/association-properties/)
* [Entities](/refguide8/entities/)

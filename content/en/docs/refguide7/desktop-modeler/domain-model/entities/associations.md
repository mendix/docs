---
title: "Associations"
url: /refguide7/associations/
weight: 30
tags: ["domain model", "association"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Associations** tab is a tab in the entity properties and has the following settings:

* [Name](#name) 
* [Type](#type)
* [Owner](#owner)
* [Parent/Child](#parent-child)  

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/associations/dm-entity-properties-associations-tab.png" >}}

For more information on associations, see [Association and Their Properties](/refguide7/association-properties/). 

## 2 Name {#name}

The name of the association is used to refer to it from forms, microflows, XPath constraints, etcetera.

## 3 Type {#type}

This property defines whether an association is a reference (single) or a reference set (plural).

| Value | Description |
| --- | --- |
| Reference | Single: an object of the owning entity refers to zero or one objects of the other entity. |
| Reference set | Plural: an object of the owning entity refers to zero or more objects of the other entity. |

* *Default value*: Reference

{{% alert color="info" %}}

The examples for this property are combined with the example of the owner property below.

{{% /alert %}}

## 4 Owner {#owner}

This property defines whether an association has one or two owners. If there is one owner, the owner is located at the start of the arrow.

| Value | Description |
| --- | --- |
| Default | Only one entity is the owner (the parent). |
| Both | Both entities are owners. |

* *Default value*: Default

## 5 Type and Owner Relation to Multiplicity and Navigability

**Type** and **Owner** properties of an entity are related to **[Multiplicity](/refguide7/association-properties/#multiplicity)** and **[Navigability](/refguide7/association-properties/#navigability)** properties of an association. When you change **Type** or **Owner**, you change **Multiplicity** and **Navigability** as well. 

You can find correspondence between **Type**/**Owner** and **Multiplicity**/**Navigability** in the table below.

|                                                              | Type          | Owner   |
| ------------------------------------------------------------ | ------------- | ------- |
| **Multiplicity**: one-to-one <br />**Navigability**: not available | Reference     | Both    |
| **Multiplicity**: one-to-many <br />**Navigability**: not available | Reference     | Default |
| **Multiplicity**: many-to-many <br />**Navigability**: X objects refer to Y objects | Reference set | Default |
| **Multiplicity**: many-to-many <br />**Navigability**: X and Y objects refer to each other | Reference set | Both    |

For more information on multiplicity and navigability, see section [2.3 Multiplicity](/refguide7/association-properties/#multiplicity) and section [2.4 Navigability](/refguide7/association-properties/#navigability) in *Associations and Their Properties*.

## 6 Parent/Child {#parent-child}

Parent and child settings show you the direction of the association. Parent defines an entity the association starts from, and child defines an entity the association ends with.

## 7 Association Examples

Drawing an association from the **Order** entity to the **Customer** entity results in the following:

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/association-properties/918217.png" >}}

The type property has its default value `Reference`. In this example, a customer can have multiple orders, and an order can only have one customer.

In XML, instances of these entities and their association look as follows (note that the association is only stored in the **Order** element):

```xml
<Order id="101">
	<number>1</number>
	<date>9/30/2008</date>
	<Order_Customer>id_201</Order_Customer>
</Order>

<Customer id="201">
	<fullname>Apple Inc.</fullname>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
</Customer>

```

A many-to-many association with default ownership is created by drawing an association and then setting the `Type` property to `Reference set`.

In this example, a **Customer** can have multiple **Groups**, and a **Group** can have multiple **Customers**:

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/associations/918127.png" >}}

In XML, instances of these entities and their associations look as follows (note that the association is only stored in the **Customer** element):

```xml
<Customer id="201">
	<fullname>Apple Inc.</name>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
	<Customer_Group>id_301 id_302</Customer_Group>
</Customer>

<Group id="301">
	<name>Multinational corporations</name>
</Group>

<Group id="302">
	<name>Hardware suppliers</name>
</Group>

```

A one-to-one association is created by setting the owner property to `Both` (while leaving the type property at its default value `Reference`).

In this example, a **Customer** can have one **Profile**, and a **Profile** can have one **Customer**:

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/associations/918128.png" >}}

In XML, instances of these entities and their associations look as follows (note that the association is stored both in the **Profile** element and the **Customer** element):

```xml
<Profile id="401">
	<religion>Buddhism</religion>
	<job>Chief Executive Officer</job>
	<website>http://www.apple.com/ </website>
	<Customer_Profile>id_201</Customer_Profile>
</Profile>

<Customer id="201">
	<fullname>Steve Jobs</fullname>
	<address>1 Infinite Loop</address>
	<telephonenumber>1-800-MY-APPLE</telephonenumber>
	<Customer_Profile>id_401</Customer_Profile>
</Customer>

```

A many-to-many association where both entities are owners is created by setting the owner property to `Both` and the type property to `Reference set`.

In this example, an **Accountant** can have multiple **Groups** and a **Group** can have multiple **Accountants**:

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/associations/918125.png"   width="500"  >}}

In XML, instances of these entities and their association look as follows (note that the association is stored both in the **Accountant** element and the **Group** element):

```xml
<Accountant id="501">
	<idnumber>1</idnumber>
	<name>Earl Grey</name>
	<telephonenumber>1-800-EARL-GREY</telephonenumber>
	<Accountant_Group>id_301 id_302</Accountant_Group>
</Accountant>

<Accountant id="502">
	<idnumber>2</idnumber>
	<name>Scrooge McDuck</name>
	<telephonenumber>1-800-SCROOGE-MCDUCK</telephonenumber>
	<Accountant_Group>id_301 id_302</Accountant_Group>
</Accountant>

<Group id="301">
	<name>Multinational corporations</name>
	<Accountant_Group>id_501 id_502</Accountant_Group>
</Group>

<Group id="302">
	<name>Hardware suppliers</name>
	<Accountant_Group>id_501 id_502</Accountant_Group>
</Group>

```

## 8 Read More

* [Associations and Their Properties](/refguide7/association-properties/)
* [Entities](/refguide7/entities/)
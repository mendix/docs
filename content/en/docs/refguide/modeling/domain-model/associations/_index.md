---
title: "Associations"
url: /refguide/associations/
weight: 20
tags: ["domain model", "association", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction {#intro}

An association describes a relation between entities. In the domain model, an association is represented by a line or arrow between two entities.

{{% alert color="info" %}}
Associations between two external entities from the same data source are defined in the originating app and therefore automatically established when the entities are used in a model. For further details, see the [Associations](/refguide/external-entities/#properties) section of *External Entities*.
{{% /alert %}}

### 1.1 Ownership {#ownership}

The value of an association should be viewed and edited from the object of the entity that is the [owner](/refguide/association-member-properties/#owner) of the association. Ownership in an association is signified by an arrow (note that the arrow does not signify direction). Either one entity or both entities can be the owner of the association. If one entity is the owner, there is an arrow that points from the owner to the other entity. If both entities are owners, there is a line between the two entities but no arrow. This is the only way the arrow can be controlled.

It is important to understand why ownership exists. Ownership is implemented in Mendix so that you can change relationships dynamically rather than being stuck with your first design. For example, if you design something as a [one-to-many association](#one-to-many) and then need it to be a [many-to-many association with default ownership](#many-to-many), you do not need to rebuild your database, because Mendix handles it for you.

### 1.2 Multiplicity

The [multiplicity](/refguide/association-properties/#multiplicity) (or number of referred objects) of an association is indicated by the number one (`1`) or a star (`*`) at either side of the association.

In the example below, the arrow indicates that **Order** is the owner of the association, and the `1` and `*` indicate that one customer is associated with many orders:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-order-customer.png" >}}

{{% alert color="info" %}}
An association between a persistable entity and a non-persistable entity must start in the non-persistable entity and have the owner **Default**. For more information on persistable and non-persistable entities, see [Persistability](/refguide/persistability/).
{{% /alert %}}

## 2 Creating Associations {#creating}

The quickest way to create an association is to draw the association between two entities in a [domain model](/refguide/domain-model/). By default this will create a one-to-many association starting at the owner/many side of the association and ending at the one side of the association. The association will be named by joining the names of the two entities with an underscore. You can then edit the association as discussed in the next section.

You can also create associations between entities in different modules of your app. In this case it is not possible to draw the association. You can create an association to an entity in another module's domain model by creating a new association in the **Association** tab of the entity which owns the association. You can then choose any entity within your app as the target of the association. For more information see [Association Tab Properties](/refguide/association-member-properties/).

{{% alert color="info" %}}
You can create and edit associations only between an external entity and a local entity. However, an external entity cannot be the [owner](/refguide/association-member-properties/#owner) for an association with a local entity.
{{% /alert %}}

{{% alert color="info" %}}
If you need to connect two external entities, consider adding a local entity and connect this local entity with both external entities. The local entity must be the owner of both associations, in this case.
{{% /alert %}}

## 3 Editing Associations

There are two ways of editing an association.

### 3.1 Edit the Association Directly

You can edit the association itself. In this case you will define the association using multiplicity and navigability.

{{< figure src="/attachments/refguide/modeling/domain-model/associations/edit-association.png" >}}

For more information see [Association Properties](/refguide/association-properties/).

### 3.2 Edit from Associations in the Entity

You can edit the associations as members of the entity. In this case you will define the association using type and owner.

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-member-properties/edit-entity-association.png" >}}

For more information see [Association Tab Properties](/refguide/association-member-properties/).

### 3.3 Move the Association Arrow

You can move the association arrow between two entities without deleting it. Click within the black dot on either side of the association arrow and drag it to the new desired location.

{{% alert color="warning" %}}
Your mouse pointer should not activate a white dot. This indicates the creation of a new association.
{{% /alert %}}

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-move-arrow.png" >}}

## 4 Association Examples {#examples}

### 4.1 One-to-Many Association {#one-to-many}

In this example, drawing an association from the **Order** entity to the **Customer** entity results in the following:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-order-customer.png" >}}

The type property has its default value `Reference`, and the owner (the Order entity) is `Default`. This is the same as having multiplicity set to `One 'Customer' object is associated with multiple 'Order' objects` so a customer can have multiple orders, but an order can only have one customer.

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

### 4.2 Many-to-Many Association with Default Ownership {#many-to-many}

A many-to-many association with default ownership is created by drawing an association and then setting the type property to `Reference set` and leaving the owner as `Default`.

In this example, a **Customer** can have multiple **Groups**, and a **Group** can have multiple **Customers**. This is the same as having multiplicity set to `Multiple 'Group' objects are associated with multiple 'Customer' objects` with Navigability set to `'Customer' objects refer to 'Group' objects`:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-customer-group.png" >}}

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

### 4.3 One-to-One Association

A one-to-one association is created by setting the owner property to `Both` (while leaving the type property at its default value `Reference`).

In this example, a **Customer** can have one **Profile**, and a **Profile** can have one **Customer**. This is the same as having multiplicity set to `One 'Customer' object is associated with one 'Profile' object`:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-customer-profile.png" >}}

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

### 4.4 Many-to-Many Association with Dual Ownership {#many-to-many-both}

A many-to-many association where both entities are owners is created by setting the owner property to `Both` and the type property to `Reference set`.

In this example, an **Accountant** can have multiple **Groups** and a **Group** can have multiple **Accountants**. This is the same as having multiplicity set to `Multiple 'Group' objects are associated with multiple 'Accountant' objects` with Navigability set to `'Accountant' and 'Group' objects refer to each other`:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-accountant-group.png" >}}

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

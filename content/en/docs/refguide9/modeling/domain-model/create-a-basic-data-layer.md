---
title: "Creating a Basic Data Layer"
url: /refguide9/create-a-basic-data-layer/
weight: 60
description: "Describes how to create entities and attributes, add enumerations, create associations, and configure the delete behavior for associations with Studio Pro."
aliases:
    - /howto9/data-models/create-a-basic-data-layer/
---

## Introduction

This document explains how you can create a basic data layer for your application with Mendix. Each application can have multiple [modules](/refguide9/modules/), and each module has its own domain model. All the domain models together define the data layer of the application. 

A [domain model](/refguide9/domain-model/) consists of entities and associations. An entity is the blueprint for an object in your application, like the **Customer** and **Order** entities mentioned in the following sections. 

Associations define the relation between two entities. As soon as you deploy the application, Mendix takes care of the underlying database for you. This means that you do not have to create tables and write queries yourself.

This document teaches you how to do the following:

* Create entities and attributes
* Add enumerations
* Create associations
* Delete association behavior

## Creating Entities and Attributes {#create-entity}

To create entities and their attributes, follow these steps:

1. Open your [domain model](/refguide9/domain-model/).
2. Go to **Toolbox** and drag **Entity** into your domain model.

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/toolbox-entity.png" width="300px" class="no-border" >}}

    By default, Studio Pro creates a persistable entity, which means that the app's database is able to store objects of this type of entity.

3. Start typing directly to change the name of the entity to *Customer*, or you can go to **Properties** and enter *Customer* for the **Name**:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/customer-name.png" class="no-border" >}}

4. Double-click the **Customer** entity and go to **Attributes**.
5. Click **New** to add an attribute to the **Customer** entity.
6. Enter *Name* for the **Name** of the new attribute, and select **String** as the data **Type**:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/add-attribute.png" width="350px" class="no-border" >}}

7. Refer to steps 4-6 to create a **Customer** entity that looks like this:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/customer-entity.png" class="no-border" >}}

8. Refer to steps 1-6 to create a second entity **Order** that looks like this:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/order-entity-one.png" class="no-border" >}}

## Adding Enumerations {#add-enumeration}

An [enumeration](/refguide9/enumerations/) is a predefined list of values that can be used as an attribute type. This allows end-users to select any of the predefined values for this attribute. A good example of an enumeration is order status (with values open, processing, and complete).

To extend the **Order** entity with an enumeration value-based attribute, follow these steps:

1. Right-click the module and select **Add other** > **Enumeration**.
2. Enter *OrderStatus* for the **Name** and click **OK**.
3. Click **New** to add an enumeration value.
4. Enter *Open* for the **Caption** and click **OK**.

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/add-enum-value.png" width="350px" class="no-border" >}}

5. Refer to steps 3 and 4 to add the **Processing** and **Complete** values. You should then have the following configured values:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/enum-order-status.png" width="400px" class="no-border" >}}

    Click **OK** to save the enumeration. Now you need to add an enumeration value-based attribute to the **Order** entity and select the **OrderStatus** enumeration there. 

6. Double-click the **Order** entity and go to **Attributes**.
7. Click **New** to add an attribute to the **Order** entity.
8. Enter *OrderStatus* for the **Name** and select **Enumeration** for the **Type**.
9. Select the **OrderStatus** enumeration and click **Select**.
10. Select **Open** for **Default value**:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/add-order-status-attribute.png" width="450px" class="no-border" >}}

11. Click **OK** to save the new attribute. Now the **Order** entity should look like this:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/order-entity-two.png" width="160px" class="no-border" >}}

## Creating Associations

After you created the entities, you can create associations for the entities. For more information, see [Associations](/refguide9/associations/).

To create an association, draw a line from the border of one entity to the border of the other entity. Always start with the entity that can have more instances in the system than the other one. In this case, draw an association from **Order** to **Customer**, because one customer can have multiple orders.

{{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/customer-order-association.png" class="no-border" >}}

## Multiplicity

This section explains how to change the [multiplicity](/refguide9/association-properties/#multiplicity) of associations. 

By default, the domain model editor creates an association with a one-to-many multiplicity. In the above case, a customer can have multiple orders, and an order can only have one customer.

If you want to change the multiplicity, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To change the association to a one-to-one multiplicity, select the **[1 – 1]** option in the **Multiplicity** section; this means that a customer can only have one order and vice versa:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/one-to-one.png" width="500px" class="no-border" >}}

* To change the association to a many-to-many multiplicity, select the **[* – *]** option in the **Multiplicity** section; this means that a customer can have multiple orders, and an order can have multiple customers:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/many-to-many.png" width="500px" class="no-border" >}}

    When the association is set to a many-to-many multiplicity, the **Navigability** property is also activated. For further details, see the [Navigability](/refguide9/association-properties/#navigability) section in *Association Properties*.

## Delete Behavior {#delete-behavior}

You can configure the [delete behavior](/refguide9/association-properties/#delete-behavior) for both sides of an association.

To configure the delete behavior, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To configure cascading delete, select the **Delete 'Order' object(s) as well** option in the **On delete of 'Customer' object** section; this means that all the orders of a customer are removed if the customer is deleted:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/cascading-delete.png" width="500px" class="no-border" >}}

* To configure prevention of delete, select the **Delete 'Customer' object only if it is not associated with 'Order' object(s)** in the **On delete of 'Customer' object** section; this means that a customer can only be deleted if no orders refer to this customer, and the **Error message** is shown to the end-user who tries to delete a customer that has orders:

    {{< figure src="/attachments/refguide9/modeling/domain-model/create-a-basic-data-layer/delete-prevention.png" width="500px" class="no-border" >}}

{{% alert color="info" %}}
Delete behavior includes objects which are in memory. This means that cascading delete or prevention of delete applies, even if the associated object has not been committed.
{{% /alert %}}

## Read More

* [Denormalize Data to Improve Performance](/howto9/data-models/denormalize-data-to-improve-performance/)
* [Setting Up Data Validation](/refguide9/setting-up-data-validation/)

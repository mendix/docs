---
title: "Creating a Basic Data Layer"
url: /refguide/create-a-basic-data-layer/
weight: 60
description: "Describes how to create entities and attributes, add enumerations, create associations, and configure the delete behavior for associations with Studio Pro."
tags: ["data layer", "domain model", "entities", "enumerations", "associations"]
aliases:
    - /howto/data-models/create-a-basic-data-layer/
---

## 1 Introduction

This how-to explains how you can create a basic data layer for your application with Mendix. Each application can have multiple modules, and each module has its own domain model. All the domain models together define the data layer of the application. 

The domain model consists of entities and associations. An entity is the blueprint for an object in your application, like "Customer" or "Order." Associations define the relation between two entities. As soon as you deploy the application, Mendix takes care of the underlying database for you. This means that you do not have to create tables and write queries yourself.

This how-to will teach you how to do the following:

* Create entities and attributes
* Add enumerations
* Create associations
* Delete association behavior

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download and install [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Create a new app or have an existing app available

## 3 Creating Entities and Attributes {#create-entity}

To create entities and their attributes, follow these steps:

1. Open your [Domain Model](/refguide/domain-model/).
2. Go to **Toolbox** and drag **Entity** into your domain model.

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/toolbox-entity.png" width="300px" >}}

    By default, Studio Pro creates a persistable entity, which means that the app's database will be able to store objects of this type of entity.

3. Start typing directly to change the name of the entity to *Customer*, or you can go to **Properties** and enter *Customer* for the **Name**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582189.png" >}}

4. Double-click the **Customer** entity and go to **Attributes**.
5. Click **New** to add an attribute to the **Customer** entity.
6. Enter *Name* for the **Name** of the new attribute, and select **String** as the data **Type**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-attribute.png" width="350px" >}}

7. Repeat the steps above to create a **Customer** entity that looks like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582185.png" >}}

8. Repeat the steps above again to create a second entity **Order** that looks like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582184.png" >}}

## 4 Adding Enumerations {#add-enumeration}

An [enumeration](/refguide/enumerations/) is a predefined list of values that can be used as an attribute type. This allows end-users to select any of the predefined values for this attribute. A good example of an enumeration is order status.

To extend the **Order** entity with an enumeration value-based attribute, follow these steps:

1. Right-click the module and select **Add other** > **Enumeration**.
2. Enter *OrderStatus* for the **Name** and click **OK**.
3. Click **New** to add an enumeration value.
4. Enter *Open* for the **Caption** and click **OK**.

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-enum-value.png" width="350px" >}}

5. Repeat the steps above for the **Processing** and **Complete** values. You should then have the following configured values:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/enum-order-status.png" width="400px" >}}

    Click **OK** to save the enumeration. Now, you need to add an enumeration value-based attribute to the **Order** entity and select enumeration **OrderStatus** there. 

6. Double-click the **Order** entity and go to **Attributes**.
7. Click **New** to add an attribute to the **Order** entity.
8. Enter *OrderStatus* for the **Name** and select **Enumeration** for the **Type**.
9. Select the **OrderStatus** enumeration and click **Select**.
10. Select **Open** for **Default value**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-order-status-attribute.png" width="450px" >}}

11. Click **OK** to save the new attribute. Now, the **Order** entity should look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582176.png" >}}

## 5 Creating Associations

After you have created the entities, you can start creating associations.

To create an association, draw a line from the border of one entity to the border of the other entity to create an association. Always start at the entity that will have more instances in the system than the other one. In this case, draw an association from **Order** to **Customer**, because you will want to store more orders than customers in your application.

{{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582175.png" >}}

## 6 Multiplicity

This section will explain how to change the multiplicity of associations. 

By default, the domain model editor creates an association with a one-to-many multiplicity. In the above case, a customer can have multiple orders, and an order can only have one customer. If the desired multiplicity is not available in the properties list you have probably drawn the association the wrong way, so you should remove the association and draw it again the other way around.

To change the multiplicity, double-click the **Order_Customer** association in order to open its **Properties** dialog box:

* To change the association to a one-to-one multiplicity, select the **[1 – 1]** option in the **Multiplicity** section; this means that a customer can only have one order and vice versa:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582206.png" >}}

* To change the association to a many-to-many multiplicity, select the **[* – *]** option in the **Multiplicity** section; this means that a customer can have multiple orders, and an order can have multiple customers:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582205.png" >}}

## 7 Delete Behavior {#delete-behavior}

You can configure the delete behavior for both sides of an association.

To configure the delete behavior, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To configure a cascading delete, select the **Delete 'Order' object(s) as well** option in the **On delete of 'Customer' object** section; this means that all the orders of a customer will also be removed if the customer is deleted:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582209.png" >}}

* To configure the delete prevention, select the **Delete 'Customer' object only if it is not associated with 'Order' object(s)** in the **On delete of 'Customer' object** section; this means that a customer can only be deleted if no orders refer to this customer, and the **Error message** will be shown to a user that tries to delete a customer that has orders:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/18582208.png" >}}

{{% alert color="info" %}}
Delete behavior includes objects which are in memory. This means that delete cascades and delete prevention will apply, even if the associated object has not been committed.
{{% /alert %}}

## 8 Read More

* [Denormalize Data to Improve Performance](/howto/data-models/denormalize-data-to-improve-performance/)
* [Set Up Data Validation](/howto/data-models/setting-up-data-validation/)

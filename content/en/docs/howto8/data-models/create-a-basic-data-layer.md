---
title: "Create a Basic Data Layer"
url: /howto8/data-models/create-a-basic-data-layer/
weight: 1
---

## Introduction

This how-to explains how you can create a basic data layer for your application with Mendix. Each application can have multiple modules, and each module has its own domain model. All the domain models together define the data layer of the application. 

The domain model consists of entities and associations. An entity is the blueprint for an object in your application, like "Customer" or "Order." Associations define the relation between two entities. As soon as you deploy the application, Mendix takes care of the underlying database for you. This means that you won't have to create tables and write queries yourself.

This how-to teaches you how to do the following:

* Create entities and attributes
* Add enumerations
* Create associations
* Delete association behavior

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download and install [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Create a new app or have an existing app available

## Creating Entities and Attributes

To create entities and their attributes, follow these steps:

1. Open your app's **Domain Model**:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582192.png" class="no-border" >}}

2. Click **Entity** in the menu bar:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582191.png" class="no-border" >}} 

3. Click inside the domain model editor to create the entity:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582190.png" class="no-border" >}} 

    By default, Studio Pro creates a persistable entity, which means the app's database will be able to store objects of this type of entity.
4. Start typing directly to change the name of the entity into **Customer**:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582189.png" class="no-border" >}}

5. Right-click the **Customer** entity and select **Add** > **Attribute**:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582188.png" class="no-border" >}}

6. Enter *Name* for the **Name** of the new attribute, and select **String** as the data **Type**:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582186.png" class="no-border" >}}

7. Repeat the steps above to create a complete entity that looks like this:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582185.png" class="no-border" >}}

8. Repeat the steps above again to create a second entity that looks like this:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582184.png" class="no-border" >}}

## Adding Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. This allows users of the app to select any of the predefined values for this attribute. A good example of an enumeration is order status. Let's add an enumeration and extend the **Order** entity with an enumeration value-based attribute.

To add enumerations, follow these steps:

1. Right-click the module and select **Add other** > **Enumeration**.
2. Enter *OrderStatus* for the **Name** and click **OK**.
3. Click **New** to add a new enumeration value:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582181.png" class="no-border" >}}

4. Enter *Open* for the **Caption** and click **OK**.
5. Repeat the steps above for the **Processing** and **Complete** values. You should then have the following configured values:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582179.png" class="no-border" >}}

    Click **OK** to save the enumeration. Now we will create an enumeration value-based attribute in the **Order** entity.
6. Right-click the **Order** entity and select **Add** > **Attribute**.
7. Enter *OrderStatus* for the **Name** and select **Enumeration** for the **Type**.
8. Select the **OrderStatus** enumeration and click **Select**.
9. Select **Open** for **Default value**:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582197.png" class="no-border" >}}

10. Click **OK** to save the new attribute. The **Order** entity should look like this:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582176.png" class="no-border" >}}

## Creating Associations

After you have created the entities, you can start creating associations.

To create an association, draw a line from the border of one entity to the border of the other entity to create an association. Always start at the entity that will have more instances in the system than the other one. In this case, draw an association from **Order** to **Customer**, because you will want to store more orders than customers in your application.

{{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582175.png" class="no-border" >}}

## Multiplicity

This section will explain how to change the multiplicity of associations. 

By default, the domain model editor creates an association with a one-to-many multiplicity. In the above case, a customer can have multiple orders, and an order can only have one customer. If the desired multiplicity is not available in the properties list you have probably drawn the association the wrong way, so you should remove the association and draw it again the other way around.

To change the multiplicity, double-click the **Order_Customer** association in order to open its **Properties** dialog box:

* To change the association to a one-to-one multiplicity, select the **[1 – 1]** option in the **Multiplicity** section; this means that a customer can only have one order and vice versa:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582206.png" class="no-border" >}}

* To change the association to a many-to-many multiplicity, select the **[* – *]** option in the **Multiplicity** section; this means that a customer can have multiple orders, and an order can have multiple customers:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582205.png" class="no-border" >}}

## Delete Behavior {#delete-behavior}

You can configure the delete behavior for both sides of an association.

To configure the delete behavior, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To configure a cascading delete, select the **Delete 'Order' object(s) as well** option in the **On delete of 'Customer' object** section; this means that all the orders of a customer will also be removed if the customer is deleted:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582209.png" class="no-border" >}}

* To configure the delete prevention, select the **Delete 'Customer' object only if it is not associated with 'Order' object(s)** in the **On delete of 'Customer' object** section; this means that a customer can only be deleted if no orders refer to this customer, and the **Error message** will be shown to a user that tries to delete a customer that has orders:

    {{< figure src="/attachments/howto8/data-models/create-a-basic-data-layer/18582208.png" class="no-border" >}}

{{% alert color="info" %}}
Delete behavior includes objects which are in memory. This means that delete cascades and delete prevention will apply, even if the associated object has not been committed.
{{% /alert %}}

## Read More

* [Work with Images and Files](/howto8/data-models/working-with-images-and-files/)
* [Denormalize Data to Improve Performance](/howto8/data-models/denormalize-data-to-improve-performance/)
* [Set Up Data Validation](/howto8/data-models/setting-up-data-validation/)

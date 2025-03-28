---
title: "Configuring a Domain Model"
url: /refguide/configuring-a-domain-model/
weight: 60
description: "Describes how to create entities and attributes, add enumerations, create associations, and configure the delete behavior for associations with Studio Pro."
aliases:
    - /howto/data-models/create-a-basic-data-layer/
    - /refguide/create-a-basic-data-layer/
---

## Introduction

This document explains how you can configure a domain model for your application with Mendix. Each application can have multiple [modules](/refguide/modules/), and each module has its own domain model. All the domain models together define the data layer of the application. 

A [domain model](/refguide/domain-model/) consists of entities and associations. An entity is the blueprint for an object in your application, like the **Customer** and **Order** entities mentioned in the following sections. 

[Associations](/refguide/associations/) define the relation between two entities. As soon as you deploy the application, Mendix takes care of the underlying database for you. This means that you do not have to create tables and write queries yourself.

This document teaches you how to do the following:

* Create entities and attributes
* Add enumerations
* Create associations
* Delete association behavior

This document also presents [an example for defining the domain model](#example-domain-model) for an online shopping shop.

## Creating Entities and Attributes {#create-entity}

To create entities and their attributes, follow the steps below.

{{% alert color="info" %}}
If you are using Mendix version 10.13.0 or above, you can use the Maia domain model generator to create a domain model based on a description of your requirements. For more information, see [Maia Domain Model Generator](/refguide/domain-model-generator/).

The domain model generator is currently an experimental feature. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/). 
{{% /alert %}}

1. Open your [domain model](/refguide/domain-model/).
2. Go to **Toolbox** and drag **Entity** into your domain model.

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/toolbox-entity.png" width="300px" class="no-border" >}}

    By default, Studio Pro creates a persistable entity, which means that the app's database is able to store objects of this type of entity.

3. Start typing directly to change the name of the entity to *Customer*, or you can go to **Properties** and enter *Customer* for the **Name**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/customer-name.png" class="no-border" >}}

4. Double-click the **Customer** entity and go to **Attributes**.
5. Click **New** to add an attribute to the **Customer** entity.
6. Enter *Name* for the **Name** of the new attribute, and select **String** as the data **Type**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-attribute.png" width="350px" class="no-border" >}}

7. Refer to steps 4-6 to create a **Customer** entity that looks like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/customer-entity.png" class="no-border" >}}

8. Refer to steps 1-6 to create a second entity **Order** that looks like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/order-entity-one.png" class="no-border" >}}

## Adding Enumerations {#add-enumeration}

An [enumeration](/refguide/enumerations/) is a predefined list of values that can be used as an attribute type. This allows end-users to select any of the predefined values for this attribute. A good example of an enumeration is order status (with values open, processing, and complete).

To extend the **Order** entity with an enumeration value-based attribute, follow these steps:

1. Right-click the module and select **Add other** > **Enumeration**.
2. Enter *OrderStatus* for the **Name** and click **OK**.
3. Click **New** to add an enumeration value.
4. Enter *Open* for the **Caption** and click **OK**.

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-enum-value.png" width="350px" class="no-border" >}}

5. Refer to steps 3 and 4 to add the **Processing** and **Complete** values. You should then have the following configured values:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/enum-order-status.png" width="400px" class="no-border" >}}

    Click **OK** to save the enumeration. Now you need to add an enumeration value-based attribute to the **Order** entity and select the **OrderStatus** enumeration there. 

6. Double-click the **Order** entity and go to **Attributes**.
7. Click **New** to add an attribute to the **Order** entity.
8. Enter *OrderStatus* for the **Name** and select **Enumeration** for the **Type**.
9. Select the **OrderStatus** enumeration and click **Select**.
10. Select **Open** for **Default value**:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/add-order-status-attribute.png" width="450px" class="no-border" >}}

11. Click **OK** to save the new attribute. Now the **Order** entity should look like this:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/order-entity-two.png" width="160px" class="no-border" >}}

## Creating Associations

After you created the entities, you can create associations for the entities. For more information, see [Associations](/refguide/associations/).

To create an association, draw a line from the border of one entity to the border of the other entity. Always start with the entity that can have more instances in the system than the other one. In this case, draw an association from **Order** to **Customer**, because one customer can have multiple orders.

{{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/customer-order-association.png" class="no-border" >}}

## Multiplicity

This section explains how to change the [multiplicity](/refguide/association-properties/#multiplicity) of associations. 

By default, the domain model editor creates an association with a one-to-many multiplicity. In the above case, a customer can have multiple orders, and an order can only have one customer.

If you want to change the multiplicity, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To change the association to a one-to-one multiplicity, select the **[1 – 1]** option in the **Multiplicity** section; this means that a customer can only have one order and vice versa:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/one-to-one.png" width="500px" class="no-border" >}}

* To change the association to a many-to-many multiplicity, select the **[* – *]** option in the **Multiplicity** section; this means that a customer can have multiple orders, and an order can have multiple customers:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/many-to-many.png" width="500px" class="no-border" >}}

    When the association is set to a many-to-many multiplicity, the **Navigability** property is also activated. For further details, see the [Navigability](/refguide/association-properties/#navigability) section in *Association Properties*.

## Delete Behavior {#delete-behavior}

You can configure the [on delete behavior](/refguide/association-properties/#delete-behavior) for both sides of an association.

To configure the delete behavior, double-click the **Order_Customer** association to open its **Properties** dialog box:

* To configure cascading delete, select the **Delete 'Order' object(s) as well** option in the **On delete of 'Customer' object** section; this means that all the orders of a customer are removed if the customer is deleted:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/cascading-delete.png" width="500px" class="no-border" >}}

* To configure prevention of delete, select the **Delete 'Customer' object only if it is not associated with 'Order' object(s)** in the **On delete of 'Customer' object** section; this means that a customer can only be deleted if no orders refer to this customer, and the **Error message** is shown to the end-user who tries to delete a customer that has orders:

    {{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/delete-prevention.png" width="500px" class="no-border" >}}

{{% alert color="info" %}}
Delete behavior includes objects which are in memory. This means that cascading delete or prevention of delete applies, even if the associated object has not been committed.
{{% /alert %}}

## An Example of Defining a Domain Model {#example-domain-model}

In the above sections, you learn the basics of how to configure a domain model. In this section, we present an example for how you can define the domain model for an online shopping app.

### Defining What Data to Include

Understanding the typical process helps you define what data to include to your domain model. The workflow for new customers of the online shopping app looks the following way:

1. A customer registers in the online shopping app and enters the following details:
    1. Full name
    2. Address
    3. Email
    4. Date of birth
2. When registration is complete, a *unique ID* is assigned to the customer. 
3. The customer browses through *products* and the following product details are displayed:
    1. Product image 
    2. Name
    3. Description 
    4. Availability
    5. Price 
    6. Vendor
    7. Unique product ID 
4. The customer adds products to a shopping cart. 
5. In the shopping cart, every item is presented as a separate line showing *quantity* and *price* per line. The customer checks the order, pays it, and gets a *confirmation* with the *order details* and the *date* the order is purchased on. 

Based on the description above, you can divide your data into the following elements: 

* Customer
* Product
* Order

The following sections show how to represent the data you want to include in your app with entities and their attributes in the domain model and how you should set up the associations between the entities. 

An example of the domain model for the online shopping app is shown below:

{{< figure src="/attachments/refguide/modeling/domain-model/create-a-basic-data-layer/domain-model-online-shop.png" alt="Domain Model online shopping app" class="no-border" >}}

### Defining Entities

 The following shows what entities you should create in your domain model for the online shopping app:

* The customer information should be presented by the following entity:

    * **Customer** – general information about the customer, such as their name, address, and email address

* The product information should be divided into the following entities:

    * **Product** – general information about the product, such as its name, description, and price
    * **Product_Image** – each product has an image, but you do not create it as an attribute. You need to create an entity that is a specialization of the **System.Image** entity to allow you to store images. For an example on how to use the specialization of the **System.Image** entity to display images on a page, see [Image Uploader](/refguide/image-uploader/)

* The order information should be divided into the following entities:

    * **Order** – general information about the order, such as its status, order number, the name of the customer and their address
    * **Order_line** – items ordered, their quantity and price
    * **Order_confirmation** – confirmation that is sent to the customer that the order is placed

### Defining Associations

The following explains how each entity is associated for the online shopping app:

* **Product_Image** and **Product** have a one-to-one association – One product image is connected to only one product.
* **Order** and **Customer** have a one-to-many association – An order is placed by a customer. Several orders can be connected to one customer.
* **Product** and **Order_Line** have a one-to-many association – The **Order_Line** uses information about the product. One product can be associated with several order lines.
* **Order** and **Order_Line** have a one-to-many association – One order can contain multiple items (order lines) in it.
* **Order** and **Order_Confirmation** have a one-to-one association – One order confirmation is issued per order.

## Read More

* [Denormalize Data to Improve Performance](/howto/data-models/denormalize-data-to-improve-performance/)
* [Setting Up Data Validation](/refguide/setting-up-data-validation/)

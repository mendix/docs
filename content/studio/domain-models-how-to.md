---
title: "Configure the Domain Model"
category: "Domain Model"
description: "This how-to describes the process of configuring the domain model in Mendix Studio."
tags: ["studio", "domain model", "decision", "domain model"]
---

## 1 Introduction

This how-to explains how you can configure the domain model in Mendix Studio. 



**This how-to will teach you how to do the following:**

* 

This how-to describes the following use case: 

You are configuring the domain model for an online shop. 

## 2 Understanding What Data to Include  

The workflow for new customers of the online shop will look the following way:

1. A customer browses through products represented by name, description, availability, price, vendor, an image, and a unique ID. 
2. The customer adds products to a shopping cart. 
3. In the shopping cart, every item is presented as a separate line, that the customer can delete or choose the quantity of. 
4. When the customer has decided on the order, he/she needs to register and enter the following details:
   1. full name, 
   2. an address, 
   3. email, and 
   4. a date of birth. 
5. When registration is complete, the customer is assigned a unique ID. 
6. The customer pays the order and gets a confirmation that the order is created. 

Prior to configuring the domain model, you need to decide what data to include. Start with deciding what will be an entity. In this example, the online shop will contain the following:

* Order – item(s) ordered by a customers
* Order line – an individual item ordered
* Order confirmation – confirmation that an order has been created
* Customer – person who made an order
* Product – items that a customer can order
*  Product Image– an image of the product 

### 2.1 Adding Entities and Attributes

After you defined what data should become an entity, you can start creating them:

1. Open your [domain model](domain-models).
2. One of the central parts of the online shop are products. Create entity *Product*. For more information on how to create a new entity, see the [Adding New Entities](domain-models) section in *Domain Models Overview*.
3.  Products contain information on their name, price, etc. These are the attributes of the Product entity.   For the **Product** entity, create attributes (for more information on how to create the attribute, see the [Adding New Attributes](domain-models) section) and do the following:<br />
    1. Product ID Autonumber
    2. Name String
    3. Description String
    4. Available Boolean
5. Price Decimal
    6. Vendor String

The attribute is created.

### 2.2 Creating Associations

## 3 Configuring the Decision with Attribute of the Boolean Type  

In this example, you will create a microflow and configure a decision to prevent a blocked customer from making an order. The reasons for blocking the customer can be that customer's credit score is too low, or password has expired. 

This use case will require a decision with an attribute of the Boolean type (true or false). For more information on the types of attributes, see [Attributes](domain-models-attributes).

### 3.1 Adding an Entity and an Attribute to the Domain Model 

As you will verify customers by their statuses, you need to create a corresponding attribute for the entity first. For this, do the following:

1. Open your [domain model](domain-models).
2.  For the Customer entity, create an attribute (for more information on how to create attributes, see the [Adding New Attributes](domain-models) section),  and do the following: <br />
    a. Set name to *Blocked*. <br />
    b. Set the [Type](domain-models-attributes) to **Boolean**. <br />
    c. Click **Create**. 

    ![](attachments/microflows-how-to-configure-decision/new-attribute-create-dialog.png)

The attribute for the **Customer** entity is created.

![](attachments/microflows-how-to-configure-decision/blocked-attribute.png)

1. 

Congratulations! You have now configured the domain model for the online shop!



---
title: "Creating Your Own Documents"
parent: "document-templates"
description: "This documentation will give you insight into creating documents with Mendix."
tags: ["Document", "Generate", "Word", "PDF"]
---

## 1 Introduction

Have you been wondering how to create your own documents with Mendix? This reference will tell you how to do it!

With Mendix, you can generate documents in different ways. Here, you will learn the fundamentals of generating a document from your own application.

Before we start, we recommend you first read the following two Mendix Reference Guide pages:

* [Document Templates](document-templates)
* [Generate Documents](generate-document)

## 2 Know Your Document

Before you start producing a document with Mendix, it is advisable to make a draft version of the document you want to produce. You can sketch something on a piece of paper or ask your customer to provide you with an example. Either way, it is good to have in mind what you want to achieve.

Using your desired document, you can choose a strategy for producing it. Mendix offers numerous options for producing documents using the out-of-the-box document template functionality, but you may find that the Mendix features are not sufficient to generate your document. Don’t worry. For alternative ways of producing documents with Mendix, see [5 Alternative Ways of Creating Documents](#Alternative).

For our example, we’ve concluded that the Mendix functionality does suffice. So, let’s have a look at how this works with an example.

## 3 The Business Case

In this application, customers can purchase products. They will do so by creating orders and selecting the products they want to purchase. To be able to present the customer with an overview of their order, a PDF will be created and sent to the customer as an attachment to their confirmation email. The order should show the customer details, the logo of the company, the products with their price, and the total value of the order.

## 4 Generating a Document with Out-of-the-Box Mendix Functionality

### 4.1 The Domain Model

The domain model for this application looks like this:

![](attachments/how-to-create-your-own-documents/00_DomainModel.png)

The **Customer** holds the address information and the preferred communication language. The **Order** owns the date and sum of all the order lines. The **OrderLine** entity has the customer-specific price for a **Product**. Because you want to generate a document, the **OrderDocument** entity has been added. This entity inherits from the **System.FileDocument** entity.

{{% alert type="info" %}}
Do not use the **Sytem.FileDocument** entity directly, because you have no control over the security of that part from the **System** module.
{{% /alert %}}

### 4.2 The Microflow

Now the domain model has been set up, you are ready to create the microflow for your new generate document function.

Create a new folder to organize all the order document creation related sources:

![](attachments/how-to-create-your-own-documents/01_Folder.png)

Now you need a microflow to handle the creation of the document:

![](attachments/how-to-create-your-own-documents/02_CreateMicroflow.png)

The microflow consists of just the default start and endpoint at present:

![](attachments/how-to-create-your-own-documents/03_EmptyMicroflow.png)

After creating the microflow, decide what information you would like to use in the document. Let’s start with an order as input. Later on, you can retrieve additional data via the order instance.

{{% alert type="info" %}}
When you create microflows, it is a best practice to limit the number of input parameters to promote reuse.
{{% /alert %}}

Here is the input parameter:

![](attachments/how-to-create-your-own-documents/04_InputParameterInclude.png)

In the next step, you will create a new OrderDocument. This object will store the actual document. Set the reference to the **Order** variable and the name of the document:

![](attachments/how-to-create-your-own-documents/05_CreateOrderDocument.png)

Now you need to have a **Language** object. In our case, the **Customer** holds  the preferred communication language. In our microflow example, you first retrieve the **Customer** via the **Order**, and then retrieve the **Language** from that **Customer**:

![](attachments/how-to-create-your-own-documents/06_GetLanguage.png)

The next step is to use the **Generate document** activity. Within this activity, you can use the available variables and select the document template to create the document. However, the document template does not exist yet, so you need to create it and place it in your folder:

![](attachments/how-to-create-your-own-documents/07_DocumentTemplateAdded.png)

This is the document template configuration:

![](attachments/how-to-create-your-own-documents/08_DocumentTemplateSettings.png)

{{% alert type="info" %}}
Based on the changes you make to the selected template, the arguments will change.
{{% /alert %}}

The **Generate document** activity has been added:

![](attachments/how-to-create-your-own-documents/09_DocumentTemplateMicroflow.png)

After you have configured the general settings of the document template, you do not need a seperate commit for **NewOrderDocument**. This entity is automatically committed via the document template activity.

Now that you have set up the **Generate document** configuration, you can configure the template itself.

{{% alert type="info" %}}
Make sure to set the correct entity access for entities and their attributes used in the document template. Read access is a must for those attributes that are shown in the template. Here is a **Customer** entity that is configured to **Read, Write** for the **User** module role:

![](attachments/how-to-create-your-own-documents/10_AccessRules.png)

{{% /alert %}}

### 4.3 The Document Template

In this example, the following document template is available:

![](attachments/how-to-create-your-own-documents/11_DocumentTemplate.png)

In this document template, you start with a data view containing the order details. From this order, you can get the customer information and, from the order lines, the information about the purchased products.

The data view makes use of tables, table cells, labels, pictures, line breaks, and a template grid to compose the document.

Now that you have created the document template, you can see that there is an error in the error dock:

![](attachments/how-to-create-your-own-documents/12_ErrorDock.png)

To resolve this error, open the **Generate document** activity of the microflow. When the activity is opened, the parameter mapping will be updated and the variable allocated to the mapping parameter.

Now, your **Generate document** configuration should look like this:

![](attachments/how-to-create-your-own-documents/13_DocumentTemplate.png)

The document template is now configured, and the microflow is ready to be used. If we call this microflow as a sub-microflow, you can add a download activity in the main microflow. This microflow could 
* call the sub-microflow to create the document
* retrieve the created document, and
* download the file:

![](attachments/how-to-create-your-own-documents/14_MainMicroflow.png)

This is the resulting document:

![](attachments/how-to-create-your-own-documents/15_Result.png)

In this example, you retrieved the **OrderLine** information via the **Entity (path)** data source. An alternative way of doing this would be to use a microflow that returns objects for the list presentation. If you do this, make sure to add the correct user role(s) to the microflows that are being used as data source microflows within the document template.

## 5 Alternative Ways of Creating Documents<a name="Alternative"></a>

In addition to out-of-the-box Mendix functions, there are two other ways of generating documents with your Mendix app.

### 5.1 App Store Module

In the Mendix App Store, [Document generation 4 Mendix](https://appstore.home.mendix.com/link/app/2026/) is available.

For more information on this way of working, see [Document Generation for Mendix, Finally](http://www.appronto.nl/over-appronto/blog/word-merging-for-mendix-finally).

### 5.2 Java API

The other way to generate documents is via a Java API called IText. This Java library is free to use.

For more information on this way of working, see [iText Developers](http://developers.itextpdf.com/developers-home).

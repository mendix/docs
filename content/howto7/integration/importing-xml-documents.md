---
title: "Import XML Documents"
category: "Integration"
menu_order: 3
tags: ["import", "xml", "integration"]
---

## 1 Introduction

Mendix is the app platform for the enterprise organization, and in enterprise software, you likely do not work in a [green field](https://en.wikipedia.org/wiki/Greenfield_project). In almost every situation, you will need to integrate with existing systems. Mendix supports many ways of integration, but this how-to focuses on how you can import XML documents with Mendix.

**This how-to will teach you how to do the following:**

* Prepare the data structure and GUI
* Add an XML schema
* Create XML-to-domain mapping

## 2 Prerequisites

Before you continue, make sure that you know how to create:

* Domain models (see [How to Create a Basic Data Layer](/howto7/data-models/create-a-basic-data-layer))
* A custom file document (see [How to Work with Images & Files](/howto7/data-models/working-with-images-and-files))
* Overview and detail pages (see [How to Create Your First Two Overview & Detail Pages](/howto7/front-end/create-your-first-two-overview-and-detail-pages))
* Menu items (see [How to Set Up the Navigation Structure](/howto7/general/setting-up-the-navigation-structure))

## 3 Preparing the Data Structure & GUI

The XML document used in this how-to contains customers. To be able to see the imported data, you first need to set up the data structure and GUI to maintain the customer data. Then, you need to facilitate the uploading and downloading of XML documents. Finally, you will create the actual import logic and the corresponding import mapping.

To prepare the data structure and the GUI, follow these steps:

1. Create the following **Customer** entity in your domain model:

    ![](attachments/18448727/18581649.png)

2. Create the overview and detail pages to manage objects of the **Customer** type.
3. Create a menu item to access the customer overview page.
4. Create an entity called **XMLDocument** that inherits all the properties from **System.FileDocument**:

    ![](attachments/18448727/18581650.png)

5. Create the overview and detail pages to manage objects of the **XMLDocument** type.
6. Create a menu item to access the XML document overview page (for more information, see [How to Set Up the Navigation Structure](/howto7/general/setting-up-the-navigation-structure).

## 4 Adding an XML Schema (XSD)

Whether you plan to import or export documents, working with XML means that your application must contain an XML schema, which is also called an XSD. An XSD describes the possible contents of an XML file. Based on the XSD, your application knows how to read or write an XML file. If you don't have an XSD file, there are some online XSD generators that accept an XML document as input. For this how-to, you can use [Customers.xsd](attachments/18448727/18581652.xsd).

To add an XML schema (XSD), follow these steps:

1.  Right-click a module in the **Project Explorer** and select **Add Other** > **XML schema** from the menu.
2.  Enter **CustomersXSD** as the **Name** and click **OK**:

    ![](attachments/18448727/18581696.png)

3.  In the **XML Schema** editor, click **Select** and select the XSD file that you downloaded earlier:

    ![](attachments/18448727/18581657.png)

4. Click **OK** to save the XML schema, which you will be using in the following steps.

## 5 Create XML-to-Domain Mapping

The XML schema describes what the possible contents of an XML file are, but we need to create an XML-to-domain mapping to define how the data in the XML document is imported into the application.

To create the XML-to-domain mapping, follow these steps:

1. Right-click a module in the **Project Explorer** and select **Add Other** > **Import mapping**.
2.  Enter **ImportCustomersMapping** as the **Name** and click **OK.**  The new mapping will open automatically and the elements will be shown.

	![](attachments/18448727/18581689.png)

3.  On the **Select schema elements** dialog box, make sure **XML schema** is selected as the **Schema source**, and select **CustomerXSD** as the schema. Then, click **Expand all** to see the tree with elements.
4.  Select the following elements: **Customer**, **ID**, **CompanyName**, **Address**, **City**, and **PostalCode**:

	![](attachments/18448727/18581656.png)

5.  Click **OK**. The first part of the import mapping should look like this:

	![](attachments/18448727/18581655.png)

6. Open the connector (from the lower-right side of the Modeler or from the **View** menu).
7.  Drag the entity **Customer** from the connector to the place-holder in the mapping editor:

	![](attachments/18448727/18581681.png)  

	The **Map entity** editor for this element will open automatically:

	![](attachments/18448727/18581654.png)

8.  In the **Map entity** editor, do the following:
	* Select **Find an object (by key)** for the **Method** (to be able to search for an object, you need to define one or more keys in the value-to-attribute mappings)
	* Select **Create** for **If no object was found**
	* Select attributes for all five value-to-attribute mappings
	* Set **CustomerID** as the **Key**

	![](attachments/18448727/18581653.png)

9. Click **OK** to save the mapping.

## 6 Creating the Import Logic

In this section, you will create the logic to import the customers stored in an [XML document](attachments/18448727/18581651.xml) in your application.

To create the import logic, follow these steps:

1. Open the **XMLDocument** overview page. It should look this, using a default layout:

    ![](attachments/18448727/18581648.png)

2. Right-click the toolbar of the data grid widget and select **Add button** > **Action** to add a new action button:

    ![](attachments/18448727/18581647.png)

3. Double-click the new button to open the **Edit Action Button** editor and do the following:<br />
    a. Change the caption to *Import XML Document*<br />
    b. For the **On click** event, select **Call a microflow**, then click **Select** for the microflow, create a new microflow, and name it **XMLDocument_Import**.<br />
    c. Click **OK** to save the properties.<br />

    ![](attachments/18448727/18581646.png)

4. Right-click the new **Import XML Document** button and select **Go to on click microflow** in the context menu. You should see an empty microflow with **XMLDocument** as the input parameter:

    ![](attachments/18448727/18581669.png)

5. Open the **Toolbox** and drag an **Import with mapping** activity to the line between the start and end event. This inserts a new import XML activity.
6. Double-click the new activity to open the **Import With Mapping** dialog box and do the following:<br />
    a. Select the input paramater **XMLDocument** as the **Variable**.<br />
    b. Select the previously created XML-to-domain mapping **ImportCustomersMapping** as the mapping.<br />
    c. Click **OK** to save the properties.<br />

    ![](attachments/18448727/18581668.png)

    The microflow should look like this:

    ![](attachments/18448727/18581667.png)

## 7 Importing an XML File

To import the XML file, follow these steps:

1. Deploy the application, upload [Customers.xml](attachments/18448727/18581651.xml), and trigger the import microflow.
2. Open the customer overview page and check if the customer data has been imported into your application.

## 8 Read More

* [How to Consume a Complex Web Service](consume-a-complex-web-service)
* [How to Consume a Simple Web Service](consume-a-simple-web-service)
* [How to Export XML Documents](export-xml-documents)
* [How to Expose a Web Service](expose-a-web-service)
* [How to Handle Selenium Support](selenium-support)
* [How to Consume a REST Service](consume-a-rest-service)
* [Exporting to a CSV Button](/refguide7/export-to-csv-button)


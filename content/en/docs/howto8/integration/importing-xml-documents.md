---
title: "Import XML Documents"
url: /howto8/integration/importing-xml-documents/
weight: 3
---

## Introduction

Mendix is the app platform for the enterprise organization, and in enterprise software, you likely do not work in a [green field](https://en.wikipedia.org/wiki/Greenfield_project). In almost every situation, you will need to integrate with existing systems. Mendix supports many ways of integration, but this how-to focuses on how you can import XML documents with Mendix.

This how-to teaches you how to do the following:

* Prepare the data structure and GUI
* Add an XML schema
* Create XML-to-domain mapping

## Prerequisites

Before you continue, make sure that you know how to create:

* Domain models (see [How to Create a Basic Data Layer](/howto8/data-models/create-a-basic-data-layer/))
* A custom file document (see [How to Work with Images and Files](/howto8/data-models/working-with-images-and-files/))
* Overview and detail pages (see [How to Create Your First Two Overview and Detail Pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/))
* Menu items (see [How to Set Up the Navigation Structure](/howto8/general/setting-up-the-navigation-structure/))

## Preparing the Data Structure and GUI

The XML document used in this how-to contains customers. To be able to see the imported data, you first need to set up the data structure and GUI to maintain the customer data. Then, you need to facilitate the uploading and downloading of XML documents. Finally, you will create the actual import logic and the corresponding import mapping.

To prepare the data structure and the GUI, follow these steps:

1. Create the following **Customer** entity in your domain model:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581649.png" class="no-border" >}}

2. Create the overview and detail pages to manage objects of the **Customer** type.
3. Create a menu item to access the customer overview page.
4. Create an entity called **XMLDocument** that inherits all the properties from **System.FileDocument**:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581650.png" class="no-border" >}}

5. Create the overview and detail pages to manage objects of the **XMLDocument** type.
6. Create a menu item to access the XML document overview page (for more information, see [How to Set Up the Navigation Structure](/howto8/general/setting-up-the-navigation-structure/).

## Adding an XML Schema (XSD)

Whether you plan to import or export documents, working with XML means that your application must contain an XML schema, which is also called an XSD. An XSD describes the possible contents of an XML file. Based on the XSD, your application knows how to read or write an XML file. If you don't have an XSD file, there are some online XSD generators that accept an XML document as input. For this how-to, you can use [Customers.xsd](/attachments/howto8/integration/18448727/18581652.xsd).

To add an XML schema (XSD), follow these steps:

1. Right-click a module in the **Project Explorer** and select **Add Other** > **XML schema** from the menu.
2. Enter **CustomersXSD** as the **Name** and click **OK**:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581696.png" class="no-border" >}}

3. In the **XML Schema** editor, click **Select** and select the XSD file that you downloaded earlier:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581657.png" class="no-border" >}}

4. Click **OK** to save the XML schema, which you will be using in the following steps.

## Create XML-to-Domain Mapping

The XML schema describes what the possible contents of an XML file are, but we need to create an XML-to-domain mapping to define how the data in the XML document is imported into the application.

To create the XML-to-domain mapping, follow these steps:

1. Right-click a module in the **Project Explorer** and select **Add Other** > **Import mapping**.
2. Enter **ImportCustomersMapping** as the **Name** and click **OK.**  The new mapping will open automatically and the elements will be shown.

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581689.png" class="no-border" >}}

3. On the **Select schema elements** dialog box, make sure **XML schema** is selected as the **Schema source**, and select **CustomerXSD** as the schema. Then, click **Expand all** to see the tree with elements.
4. Select the following elements: **Customer**, **ID**, **CompanyName**, **Address**, **City**, and **PostalCode**:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581656.png" class="no-border" >}}

5. Click **OK**. The first part of the import mapping should look like this:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581655.png" class="no-border" >}}

6. Open the connector (from the lower-right side of Studio Pro or from the **View** menu).
7. Drag the entity **Customer** from the connector into the place-holder in the mapping editor:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581681.png" class="no-border" >}}  

    The **Map entity** editor for this element will open automatically:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581654.png" class="no-border" >}}

8. In the **Map entity** editor, do the following:
    * Select **Find an object (by key)** for the **Method** (to be able to search for an object, you need to define one or more keys in the value-to-attribute mappings)
    * Select **Create** for **If no object was found**
    * Select attributes for all five value-to-attribute mappings
    * Set **CustomerID** as the **Key**

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581653.png" class="no-border" >}}

9. Click **OK** to save the mapping.

## Creating the Import Logic

In this section, you will create the logic to import the customers stored in an [XML document](/attachments/howto8/integration/18448727/18581651.xml) in your application.

To create the import logic, follow these steps:

1. Open the **XMLDocument** overview page. It should look this, using a default layout:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581648.png" class="no-border" >}}

2. Right-click the toolbar of the data grid widget and select **Add button** > **Action** to add a new action button:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581647.png" class="no-border" >}}

3. Double-click the new button to open the **Edit Action Button** editor and do the following:<br />
    1. Change the caption to *Import XML Document*<br />
    1. For the **On click** event, select **Call a microflow**, then click **Select** for the microflow, create a new microflow, and name it **XMLDocument_Import**.<br />
    1. Click **OK** to save the properties.<br />

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581646.png" class="no-border" >}}

4. Right-click the new **Import XML Document** button and select **Go to on click microflow** in the context menu. You should see an empty microflow with **XMLDocument** as the input parameter:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581669.png" class="no-border" >}}

5. Open the **Toolbox** and drag an **Import with mapping** activity to the line between the start and end event. This inserts a new import XML activity.
6. Double-click the new activity to open the **Import With Mapping** dialog box and do the following:<br />
    1. Select the input parameter **XMLDocument** as the **Variable**.<br />
    1. Select the previously created XML-to-domain mapping **ImportCustomersMapping** as the mapping.<br />
    1. Click **OK** to save the properties.<br />

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581668.png" class="no-border" >}}

    The microflow should look like this:

    {{< figure src="/attachments/howto8/integration/importing-xml-documents/18581667.png" class="no-border" >}}

## Importing an XML File

To import the XML file, follow these steps:

1. Deploy the application, upload [Customers.xml](/attachments/howto8/integration/18448727/18581651.xml), and trigger the import microflow.
2. Open the customer overview page and check if the customer data has been imported into your application.

## Read More

* [How to Consume a Complex Web Service](/howto8/integration/consume-a-complex-web-service/)
* [How to Consume a Simple Web Service](/howto8/integration/consume-a-simple-web-service/)
* [How to Export XML Documents](/howto8/integration/export-xml-documents/)
* [How to Expose a Web Service](/howto8/integration/expose-a-web-service/)
* [How to Handle Selenium Support](/howto8/integration/selenium-support/)
* [How to Consume a REST Service](/howto8/integration/consume-a-rest-service/)
* [How to Expose Data to BI Tools Using OData](/howto8/integration/exposing-data-to-bi-tools-using-odata/) 

---
title: "Export XML Documents"
url: /howto8/integration/export-xml-documents/
weight: 4
---

## Introduction

In enterprise software, it is not likely that you work in a [greenfield](https://en.wikipedia.org/wiki/Greenfield_project). In almost every situation, you will need to integrate with existing systems. Mendix supports many ways of integration, but this how-to focuses on how you can export XML documents.

This how-to teaches you how to do the following:

* Add an XML schema
* Create domain-to-XML mapping and export logic

## Prerequisites

Before you can start exporting XML documents, you need data in your application that is used during the export. You first need to set up the data structure and GUI to maintain the customer data. Then you'll create the actual export logic and the corresponding export mapping. So, you need to know how to do the following:

* Create a domain model (for more information, see [How to Create a Basic Data Layer](/howto8/data-models/create-a-basic-data-layer/))
* Create a custom file document (for more information, see [How to Work with Images and Files](/howto8/data-models/working-with-images-and-files/))
* Create overview and detail pages (for more information, see [How to Create Your First Two Overview and Detail Pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/))
* Create menu items, (for more information, see [How to Set Up the Navigation Structure](/howto8/general/setting-up-the-navigation-structure/))

Before starting this how-to, make sure you have completed the following prerequisites:

1. Create the following **Customer** entity in your domain model:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581816.png" class="no-border" >}}

2. Create overview and detail pages to manage the Customer objects.
3. Create a menu item to access the customer overview page.
4. Create the **XMLDocument** entity that inherits all the properties from *System.FileDocument*:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581650.png" class="no-border" >}}

5. Create a reference set (multiplicity **[*-*]**) between XMLDocument and Customer:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581814.png" class="no-border" >}}

## Adding an XML Schema (XSD)

Whether you plan to import documents or export documents, working with XML means that your application must contain an XML schema (also called XSD). An XSD describes the possible contents of an XML file. Based on this XSD, your application knows how to read or write an XML file. If you don't have an XSD file, there are a couple of online XSD generators that accept an XML document as input. For this how-to, you can use [Customers.xsd](/attachments/howto8/integration/18448731/18581813.xsd).

1. Right-click your module in the **Project Explorer** and select **Add other** > **XML schema**.
2. Enter *CustomersXSD* for the **Name** and click **OK**:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581696.png" class="no-border" >}}

3. In the **XML Schema** editor, click **Select** for **XML Schema** and select the XSD file that you downloaded earlier:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581812.png" class="no-border" >}}

4. Click **OK** to save the XML Schema. We'll be using this schema in the following steps.

## Creating Domain-to-XML mapping

The XML schema describes what the contents of an XML document should be. We need to create domain-to-XML mapping to define how the data in our application is transformed into a XML document.

1. Right-click your module in the **Project Explorer** and select **Add other** > **Export mapping**.

2. Enter *ExportCustomersMapping* for the **Name**:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581849.png" class="no-border" >}}

3. Click **OK**, and the **Select schema elements for export mapping** dialog box will automatically open. Now do the following:<br />
    1. For **Schema source**, select **XML schema**.<br />
    2. For the schema, select the previously added **CustomersXSD**.<br />
    3. In the **Schema elements** section of the dialog box, click the **Expand all** and **Check all** buttons. This automatically selects the **Customer** element and its child elements. Your screen should now look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581811.png" class="no-border" >}}

4. Click **OK**. You should now see the first part of the import mappings:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581810.png" class="no-border" >}}

5. Open the **Connector** pane, which should be in the lower-right corner of Studio Pro:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581817.png" class="no-border" >}}

6. Drag the **XMLDocument** entity from the **Connector** into the placeholder:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581809.png" class="no-border" >}}

    The mapping editor for this element will pop up, you can close that by clicking **OK**.

7. Drag the **Customer** entity from the **Connector** into the placeholder:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581808.png" class="no-border" >}}

    The mapping editor for this element will open up:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581806.png" class="no-border" >}}

8. In the mapping editor, verify the following:<br />
    1. **Method** is set to **By association**<br />
    2. **Association to parent** is set to **XMLDocument_Customer**<br />
9. Select attributes for all five **Attribute to value element mapping** instances (or click **Map attributes by name** to accomplish this). You should have the following mapping:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581807.png" class="no-border" >}}

10. Click **OK** to save the mapping.

## Creating the Export Logic

This section explains how you can create logic to export the customers stored in your application to an XML document.

To create the export logic, follow these steps:

1. Open the **Customer** overview page, right-click the toolbar of the data grid widget, and select **Add button** > **Action** to add a new Action button:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581804.png" class="no-border" >}}

2. Double-click the new button to open the properties editor and do the following:
    * For **Caption**, enter *Export as XML*
    * For **On click**, select **Call a microflow**
    * In the **Select Microflow** dialog box, click **New** to create a new microflow and enter *Customers_Export* for its **Name**

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581803.png" class="no-border" >}}

3. Click **OK** to save the button properties.
4. Right-click the new action button and click **Go to microflow** in the context menu. You should see an empty microflow with one input parameter:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581802.png" class="no-border" >}}

5. Select the input parameter and delete it.
6. Open the **Toolbox**, which should be on the lower-right side of Studio Pro (you can also open it from the **View** menu).
7. Drag a **Retrieve** activity from the **Toolbox** to the line between the start event and end event.
8. Double-click the activity to open the **Retrieve Objects** properties editor and do the following:
    * For **Source**, select **From database**
    * For **Entity**, click **Select...** and select the customer entity

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581830.png" class="no-border" >}}

9. Click **OK**. The microflow should now look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581827.png" class="no-border" >}}

10. Drag a **Create object** activity from the **Toolbox** to the line between the start event and end event.
11. Double-click the activity to open the **Create Object** editor and do the following:
    * For **Entity**, select **XMLDocument**
    * Click **New** to add a change item

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581801.png" class="no-border" >}}

12. In the **Edit Change Item** editor, do the following:
    * For the **Member** for the change item, select the **XMLDocument_Customer** reference:
    * For the **Value**, enter *$CustomerList*

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581825.png" class="no-border" >}}

13. Click **OK** to save the change item.
14. Create a change item to set the **Name** attribute to: *'customers.xml'* (including the single quotation marks [']). The **Create Object** dialog box should now look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/create-object.png" class="no-border" >}}

15. Click **OK** to save the action properties. The microflow should look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581823.png" class="no-border" >}}

16. Drag an **Export with mapping** activity from the **Toolbox** to the line between the start event and end event. This inserts a new export XML activity.
17. Double-click the new activity to open the properties editor and do the following:
    * For **Mapping**, select the previously created **ExportCustomersMapping** XML-to-domain mapping
    * For **Parameter type**, verify that the entity **XMLDocument** is automatically selected
    * For the **Parameter**, select the created **NewXMLDocument**
    * For the output **Name**, select the created **NewXMLDocument**

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581822.png" class="no-border" >}}

18. Click **OK** to save the properties. The microflow should look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581821.png" class="no-border" >}}

19. Drag a **Download file** activity from the **Toolbox** to the line between the start event and end event.
20. Double-click the actvity to open the **Download File** dialog box and select **NewXMLDocument** as the **File document**:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581818.png" class="no-border" >}}

21. Click **OK**. The microflow should now look like this:

    {{< figure src="/attachments/howto8/integration/export-xml-documents/18581819.png" class="no-border" >}}

22. Deploy the application and open the customer overview page.
23. Click the **Export as XML** button and download the generated XML document.

## Read More

* [Consume a Complex Web Service](/howto8/integration/consume-a-complex-web-service/)
* [Consume a Simple Web Service](/howto8/integration/consume-a-simple-web-service/)
* [Import Excel Documents](/howto8/integration/importing-excel-documents/)
* [Expose a Web Service](/howto8/integration/expose-a-web-service/)
* [Enable Selenium Support](/howto8/integration/selenium-support/)
* [Import XML Documents](/howto8/integration/importing-xml-documents/)
* [Consume a REST Service](/howto8/integration/consume-a-rest-service/)
* [Expose Data to BI Tools Using OData](/howto8/integration/exposing-data-to-bi-tools-using-odata/)

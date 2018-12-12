---
title: "Import Excel Documents"
category: "Integration"
menu_order: 5
description: "Describes how to set up import templates and import data into your app using the Excel Importer module."
tags: ["import", "excel", "integration"]
---

## 1 Introduction

Adding large amounts of data to your application, for example rootdata or data from an external application, can be very time consuming. In order to save time and effort, this process can be automated by using the 'Excel Importer' module. In this How-to you will setup import templates, and import data into your application by using the 'Excel Importer'.

## 2 Prerequisites

Before starting this how-to, make sure you know how to do the following:

* Create domain models (see [How to Create a Basic Data Layer](../data-models/create-a-basic-data-layer))
* Create overview and detail pages (see [How to Create Your First Two Overview & Detail Pages](../ux/create-your-first-two-overview-and-detail-pages))
* Create menu items (see [How to Set Up the Navigation Structure](../ux/setting-up-the-navigation-structure))
* Create microflows (see [How to Create Your First Microflow: Hello World!](../logic-business-rules/create-your-first-microflow-hello-world)
* Add App Store content to your app (see [How to Use App Store Content](/developerportal/app-store/use-app-store-content-in-the-modeler))
* Secure your applications (see [How to Create a Secure App](../security/create-a-secure-app))

## 3 Preparing the Data Structure, GUI, and Modules

Before you can start importing data into your application, you first need to set up the data structure and GUI.

Follow these steps:

1.  Create the following domain model.
  
    ![](attachments/18448735/18581969.png)

    The 'XLSFile' object inherits from the 'Filedocument' object. If you don't know how to achieve this, please take a look at [How to Work with Images & Files](../data-models/working-with-images-and-files).
2. Create **Overview** and **Detail** pages to manage objects of type **Customer** and **Order**.
3.  Create **menu items **to access the **Order** and the **Customer** overview pages.
4.  Download the **Excel Importer** and **Mx Model Reflection** modules from the appstore.
5.  Create **menu items** for the **ExcelImportOverview** and the **MxObjects_Overview** pages. Those pages already exist within the _**USE_ME** folders of the downloaded modules.
6.  Configure the **Administrator** user role to have the **Configurator** modu lerole for the **Excel Importer** module, and the **ModelAdministrator** module role for the **Mx Model Reflection** module.

## 4 Preparing the Logic for the Data Import

As an enumeration is used for the **OrderStatus** attribute, a microflow needs to be created to determine the enumeration value of the attribute based on the input from the Excel file.

1.  Create the following microflow and name it **IVK_ParseStatus**.
  
    ![](attachments/18448735/18581968.png)

2.  Set the **Return value** as follows:

    ```
    if $Unformatted = 'open' then MyFirstModule.OrderStatus.Open
    else if $Unformatted = 'processing' then MyFirstModule.OrderStatus.Processing
    else if $Unformatted = 'complete' then MyFirstModule.OrderStatus.Complete
    else MyFirstModule.OrderStatus.Complete
    ```

3.  **Save** the microflow.

## 5 Using the Application Model Metadata in the Client

In order to set up import templates for importing data, your application model meta data should be reflected in the client. This can be achieved by using [Mx Model reflection](https://appstore.home.mendix.com/link/app/69/Mendix/Mx-Model-reflection). In this part of the How-to you will learn to do so.

1.  Click **Run Locally** to start your application:

    ![](attachments/18448735/18581975.png)

2.  Click **View** to open your application in the browser:

    ![](attachments/18448735/18581974.png)

3.  **Log in** as an Administrator.
4.  Click on the menu item for the **MxObjects_Overview** in your navigation.
5.  Select the module that contains the objects you want to use in your client, by clicking on the box to the left of it. In this case  **MyFirstModule** .
6.  Click on the arrows next to **Synchronize all entities and microflows of checked modules on the left.**
  
    ![](attachments/18448735/18581937.png)

7.  Now the two objects and the parse microflow from the module **MyFirstModule** can be seen and used in the client.

## 6 Creating the Import Templates

Before you can import data from an Excel File into your application, you have to first setup an import template. In this template you will configure which objects the data should be mapped to, if an object is associated to another object, from which row of the Excel File the import should start and which columns should be imported.

In this how-to, you will import data from a simple Excel file which can be downloaded here:

[![](attachments/18448735/18581938.png)](attachments/18448735/18581949.xlsx)

Based on the structure of the file you want to import, you will setup your template.

1.  Click on the menu item for the ExcelImportOverview in your navigation.
2.  Click on **New Template**.![](attachments/18448735/18581971.png)
3.  Determine the name of the template.
4.  Click on the arrow next to the **Mendix object** box.
5.  Select the **Customer** object.
  
    ![](attachments/18448735/18581966.png)

6.  Click on the arrow next to **Reference to import objects** box.
7.  Select the **MyFirstModule.Customer_XLSFile** association.

    {{% alert type="warning" %}}

     By setting the association to the XLS File, the XLS file is saved on disk and the imported data is linked to the source file.

    {{% /alert %}}
8.  Set **Import Action** to **Synchronize objects**.
  
    ![](attachments/18448735/18581965.png)

    {{% alert type="warning" %}}

    For this example you will be using a simple Excel file, with just one sheet and columnheaders at the first row. If a more comprehensive Excel file is used you can change these values at the Sheet nr, Header row nr, and Import from row nr boxes.

    {{% /alert %}}
9.  Under the **Connect columns to attributes** section, click on **New** to create a mapping from the Excel sheet column to the proper Mendix attribute.
  
    ![](attachments/18448735/18581964.png)

10. Add the column number, this should correspond with the column number from the value on the Excel file you want to map

    {{% alert type="warning" %}}

    The number of the first column in Excel is 0, the second 1, etc.

    {{% /alert %}}
11. Define the Excel column header as the **Caption** value.
12. Choose **Attribute** as a **type**.
13. Click on the arrow next to the **Attribute** box.
  
    ![](attachments/18448735/18581963.png)

14. Select the **attribute** you want to map the Excel value to.
  
    ![](attachments/18448735/18581962.png)

15. Repeat steps 9 to 14 for each attribute of the **Customer** object.

    {{% alert type="warning" %}}

    If the mapping is setup right, a green check will appear in front of the row.

    {{% /alert %}}

16. For the mapping of attribute **Name** set the key value to **Yes**, to prevent a customer from being duplicated.
  
    ![](attachments/18448735/18581961.png)

17. After creating all the mappings for the **Customer** object attributes, also create mappings for the **Order** object attributes by repeating steps 9 to 11. Because the **Order** object is associated to the **Customer** object, the mapping setup will be slightly different. The additional steps are discribed below.
18. Choose **Reference** instead of **Attribute** as a type.
19. Click on the arrow next to the **Reference** box, here you will select over which association the Order is linked to the Customer.
  
    ![](attachments/18448735/18581959.png)

20. Select the **Customer_Order** association.
  
    ![](attachments/18448735/18581960.png)

21. Click on the arrow next to the **Attribute** box.
  
    ![](attachments/18448735/18581958.png)

22. Select the **Number** attribute form the **Order** object.
  
    ![](attachments/18448735/18581957.png)

23. Click **Save**.
24. Repeat steps 17 to 23 for each attribute of the **Order** object.
25. For the mapping of attribute **Number** set the key value to**'Yes, only for the associated object**, to prevent orders being duplicated.
  
    ![](attachments/18448735/18581956.png)

26. For the mapping of attribute **OrderStatus** the Excel file value needs to be parsed to an enumeration value. To achieve this we can use the **IVK_ParseStatus** microflow, created under 2.0, by clicking on the arrow next to the **Parse with** box.
  
    ![](attachments/18448735/18581955.png)

27. Select the **IVK_ParseStatus** microflow.
  
    ![](attachments/18448735/18581953.png)

28. Click **Save**.
29. Save the **Import Template**.

## 7 Importing the Excel File

Now the template is setup you can start importing data from an Excel file into your application. You can use the example file downloadable under **4\. Create Import Templates**

1.  Click on the menu item for the **ExcelImportOverview** in your navigation.
2.  Go to the **Import Files** tab.
3.  Click **New**.
  
    ![](attachments/18448735/18581952.png)

4.  Select the template you just created.
5.  Click **Browse**.

    ![](attachments/18448735/18581951.png)

6.  Select the example **Excel file** from your local drive.
7.  Click **Save**.
8.  Select the **Import** file.
9.  Click **Import file**.

    ![](attachments/18448735/18581950.png)

10.  Check if the data is imported under the menu items you created in chapter 1 step 3.

## 8 Creating the Import Templates by the Excel File

In the previous steps you have manually added all the columns to your import template. In this section you will be creating the same Excel template in an automated way. You can do this by using the **New template by excelfile** button at the **Normal templates** tab. An example Excel file can be downloaded here:

[![](attachments/18448735/18581938.png)](attachments/18448735/18581949.xlsx)

1.  Click on the menu item for the ExcelImportOverview in your navigation.
2.  Click on  **New template by excelfile

    ![](attachments/18448735/18581948.png)

3.  Select the [Import Example.xlsx](attachments/18448735/18581949.xlsx)
4.  Define the sheet number.
5.  Define the Header row nr.
6.  Define the row to import from.

    ![](attachments/18448735/18581947.png)

7.  Click on 'Save & next'.
8.  Automatically a row is created for every header of the Excel file.

    ![](attachments/18448735/18581936.png)

9.  Select the **Customer object** **type**.

    ![](attachments/18448735/18581935.png)

10.  Click on **Connecting matching attributes**.![](attachments/18448735/18581934.png)

     {{% alert type="warning" %}}

     The attributes of the selected Mendix Object which have the same name as the Caption will be automatically matched.

     {{% /alert %}}
11.  To complete the template repeat the same actions as performed in chapter 4.

     {{% alert type="warning" %}}

     Keep in mind that you have to set a key attribute for as well as the **Customer **object as the **Order** object

     {{% /alert %}}

## 9 Exporting/Importing the Template

Once you have completed an Excel template you can export the template for example from the test environment and import it into the acceptance environment. When exporting and importing this template, the exact template will be uploaded. So columns are generated, the Mendix object is selected, the attributes are connected, and the parse microflows are selected.

1.  Select the Excel template you created in chapter 4.
2.  Click **Export template** and save the file on your computer

    ![](attachments/18448735/18581933.png)

3.  Import the downloaded file by clicking **Import template**.
4.  Select the downloaded file and click **Import**.

    ![](attachments/18448735/18581932.png)**

5.  You have now imported a complete import template.

    {{% alert type="warning" %}}

    You will have a duplicate import template in your app, but in a real life situation you would import this template in a different environment/database where this template is not created yet.

    {{% /alert %}}

## 10 Related Content

* [How to Consume a Complex Web Service](consume-a-complex-web-service)
* [How to Consume a Simple Web Service](consume-a-simple-web-service)
* [How to Export XML documents](export-xml-documents)
* [Importing Excel Documents](importing-excel-documents)
* [How to Expose a Web Service](expose-a-web-service)
* [Selenium Support](selenium-support)
* [How to Synchronize User Accounts Using the LDAP Module](synchronizing-user-accounts-using-the-ldap-module)
* [How to Import XML Documents](importing-xml-documents)
* [How to Consume a REST Service](consume-a-rest-service)
* [How to Expose Data to BI Tools Using OData](exposing-data-to-bi-tools-using-odata)
* [The Export to CSV Button](/refguide7/export-to-csv-button)

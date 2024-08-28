---
title: "Import Excel Documents"
url: /howto8/integration/importing-excel-documents/
weight: 5
description: "Describes how to set up import templates and import data into your app using the Excel Importer module."
---

## Introduction

Adding large amounts of data to your application (for example, reference data or data from an external application) can be very time-consuming. In order to save time and effort, this process can be automated using the [Excel Importer](/appstore/modules/excel-importer/) from the Mendix Marketplace. In this how-to, you will set up import templates and import data into your app using this module.

## Prerequisites

Before starting this how-to, make sure you know how to do the following:

* Create domain models (see [How to Create a Basic Data Layer](/howto8/data-models/create-a-basic-data-layer/))
* Create overview and detail pages (see [How to Create Your First Two Overview and Detail Pages](/howto8/front-end/create-your-first-two-overview-and-detail-pages/))
* Create menu items (see [How to Set Up the Navigation Structure](/howto8/general/setting-up-the-navigation-structure/))
* Create microflows (see [How to Trigger a Microflow From a Menu Item](/howto8/logic-business-rules/trigger-microflow-from-menu-item/)
* Add Marketplace content to your app (see [Using Marketplace Content](/appstore/use-content/))
* Secure your applications (see [How to Create a Secure App](/howto8/security/create-a-secure-app/))

## Preparing the Data Structure, GUI and Modules

Before you can start importing data into your application, you first need to set up the data structure and GUI by following these these steps:

1. Create the following domain model:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581969.png" class="no-border" >}}

    Create an enumeration for the **OrderStatus** attribute with the values of **Open**, **Processing**, and **Complete**.

    Configure the **XLSFile** object to inherit from the **FileDocument** object (for more information, see [How to Work with Images and Files](/howto8/data-models/working-with-images-and-files/)).
2. Create **Overview** and **Detail** pages to manage objects of the **Customer** and **Order** types.
3. Create menu items to access the **Order** and the **Customer** overview pages.
4. Download the **Excel Importer** and **Mx Model Reflection** modules from the Mendix Marketplace (available by clicking the shopping-cart icon in the upper right of Studio Pro).
5. Create menu items for the **ExcelImportOverview** and the **MxObjects_Overview** pages (these pages already exist in the **_USE_ME** folders of the downloaded modules).
6. Configure the **Administrator** user role to have the **Configurator** module role for the **ExcelImporter** module, and the **ModelAdministrator** module role for the **Mx Model Reflection** module.

## Preparing the Logic for Data Import {#preparing}

Because an enumeration is used for the **OrderStatus** attribute, you need to create a microflow to determine the enumeration value of the attribute based on the input from the Excel file.

1. Create the following microflow and name it **IVK_ParseStatus**.

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581968.png" class="no-border" >}}

2. Set the **Return value** as follows:

    ```text
    if $Unformatted = 'open' then MyFirstModule.OrderStatus.Open
    else if $Unformatted = 'processing' then MyFirstModule.OrderStatus.Processing
    else if $Unformatted = 'complete' then MyFirstModule.OrderStatus.Complete
    else MyFirstModule.OrderStatus.Complete
    ```

3. **Save** the microflow.

## Using Application Model Metadata in the Client

In order to set up import templates for importing data, your application model metadata should be reflected in the client. This can be achieved by using the [Mx Model Reflection](/appstore/modules/model-reflection/) module. In this section, you will learn how to do this by following these steps:

1. Click **Run Locally** to start your application.
2. Click **View** to open your application in the browser.
3. **Log in** as an Administrator.
4. Click on the menu item for the **MxObjects_Overview** in your navigation.
5. Select the module that contains the objects you want to use in your client by checking the box to the left of it – which in this case is **MyFirstModule**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581937.png" class="no-border" >}}

6. Click the button next to **Synchronize all entities and microflows of checked modules on the left**. Now the two objects and the parse microflow from the **MyFirstModule** module can be seen and used in the client.

## Manually Creating an Import Template {#creating}

Before you can import data from an Excel File into your application, you have to set up an import template. In this template, you will configure the objects to which the data should be mapped, if an object is associated to another object, from which row of the Excel file the import should start, and which columns should be imported.

In this section, you will import data from a simple Excel file example, which can be downloaded here:

{{< figure src="/attachments/howto8/integration/importing-excel-documents/18581938.png" link="/attachments/howto8/integration/18448735/18581949.xlsx" class="no-border" >}}

Based on the structure of the file you want to import, you need to manually set up your template by following these steps:

1. Click the menu item for **ExcelImportOverview** in the navigation of your app's home page.
2. Click **New Template**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581971.png" class="no-border" >}}

3. Give a name to the template.
4. Click the arrow next to the **Mendix object** box.
5. Double-click the **Customer** object:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581966.png" class="no-border" >}}

6. Click the arrow next to the **Reference to import objects** box.
7. Select the **MyFirstModule.Customer_XLSFile** association. By setting the association to the XLS file, the XLS file is saved on disk and the imported data is linked to the source file.
8. Make sure **Import Action** is set to **Synchronize objects**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581965.png" class="no-border" >}}

    {{% alert color="info" %}}For this example you will be using a simple Excel file that has just one sheet and column headers on the first row. If a more comprehensive Excel file is used, you can change these values via the **Sheet nr**, **Header row nr**, and **Import from row nr** fields.{{% /alert %}}

9. In the **Connect columns to attributes** section, click **New** to create a mapping from the Excel sheet column to the proper Mendix attribute.
10. Add the column number that corresponds to the column number from the Excel file you want to map.

    {{% alert color="info" %}}The number of the first column in Excel is 0, the second is 1, etc.{{% /alert %}}

11. Define the Excel column header as the **Caption** value.
12. Select **Attribute** for the **Type**.
13. Click the arrow next to the **Attribute** box:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581963.png" class="no-border" >}}

14. Double-click the **Attribute** to which you want to map the Excel value:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581962.png" class="no-border" >}}

15. Repeat steps 9 to 14 above for each attribute of the **Customer** object.

    * For the mapping of attribute **Name**, set the **Key** value to **Yes** to prevent a customer from being duplicated.

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581961.png" class="no-border" >}}

    {{% alert color="info" %}}If the mapping is set up right, a green check appears in front of the row.{{% /alert %}}

16. You now need to create mappings for the **Order** object attributes. However, because the **Order** object is associated to the **Customer** object, the mapping setup will be slightly different. Follow these steps for each attribute of the **Order** object:<br/>
    1. Add the column number that corresponds to the column number from the Excel file you want to map.<br/>
    1. Define the Excel column header as the **Caption** value.<br/>
    1. Choose **Reference** for the type.<br/>
    1. Click the arrow next to the **Reference** box, where you can select the association over which the order is linked to the customer – which in this case should **Order_Customer**.<br/>
    1. Click the arrow next to the **Attribute** box and double-click the **Attribute** to which you want to map the Excel value.<br/>
    1. For the mapping of attribute **Number**, set the **Key** value to **Yes, only for the associated object** in order to prevent orders being duplicated.<br/>
    1. Click **Save**.
  
    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581956.png" class="no-border" >}}

17. For the mapping of the **OrderStatus** attribute, the Excel file value needs to be parsed to an enumeration value. To achieve this, you can use the **IVK_ParseStatus** microflow (created in the [Preparing the Logic for Data Import](#preparing) section above). Click the arrow next to the **Parse with** box and select the **IVK_ParseStatus** microflow:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581953.png" class="no-border" >}}

18. Save the import template.

### Importing an Excel File

Now that the template is set up, you can start importing data from an Excel file into your application. You can use the example file you downloaded in the [Creating the Import Template](#creating) section above.

Follow these steps to import the Excel file:

1. Click the menu item for **ExcelImportOverview** in the navigation of your app's home page.
2. Go to the **Import files** tab and click **New**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581952.png" class="no-border" >}}

3. Select the template you just created.
4. Click **Browse**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581951.png" class="no-border" >}}

5. Select the example Excel file you downloaded and click **Save**.
6. Click the Excel file under **Filename** to select it, then click **Import file**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581950.png" class="no-border" >}}

7. Click **OK** when the import has finished.

## Automatically Creating an Import Template via an Excel File

In the previous steps, you manually added all the columns to your import template. In this section, you will create the same Excel template in an automated way, which you can do this via the specific **New template by excelfile** button. You can use this same Excel file example:

{{< figure src="/attachments/howto8/integration/importing-excel-documents/18581938.png" link="/attachments/howto8/integration/18448735/18581949.xlsx" class="no-border" >}}

Follow these steps to create the import template via the Excel file:

1. Click the menu item for **ExcelImportOverview** in the navigation of your app's home page.
2. Click **New template by excelfile**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581948.png" class="no-border" >}}

3. Select the example Excel file you downloaded.
4. Define the **Sheet nr**, **Header row nr**, and **Import from row nr**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581947.png" class="no-border" >}}

5. Click **Save & next**. This will automatically create a row for every header of the Excel file:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581936.png" class="no-border" >}}

6. Back in the top section of the page, click the arrow next to **Mendix object** and select the **Customer** object type:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581935.png" class="no-border" >}}

7. Under **Connect columns to attributes**, click **Connect matching attributes**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581934.png" class="no-border" >}}

    This will automatically match attributes of the selected Mendix object that have the same name as the **Caption**.

8. Complete the template as you did in the [Creating the Import Template](#creating) section above.

    {{% alert color="info" %}}Remember that you have to set a key attribute for the **Customer** object as well as the **Order** object.{{% /alert %}}

## Exporting and Importing a Template

Once you have completed an Excel template, you can export the template (for example, from a test environment) and import it (for example, into an acceptance environment). When exporting and importing a template, the exact template will be uploaded, which means that columns are generated, the Mendix object is selected, the attributes are connected, and the parse microflows are selected.

Follow these steps to export and import your template:

1. Click the menu item for **ExcelImportOverview** in the navigation of your app's home page.
2. Click the Excel template you created in the [Creating the Import Template](#creating) section above to select it, then click **Export template** and save the file on your computer:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581933.png" class="no-border" >}}

3. Import the file you just downloaded by clicking **Import template**, selecting the file, and clicking **Import**:

    {{< figure src="/attachments/howto8/integration/importing-excel-documents/18581932.png" class="no-border" >}}

You have now imported a complete import template.

{{% alert color="info" %}}You will have a duplicate import template in your app, but in a working scenario, you would import this template in a different environment/database where the template had not already been created.{{% /alert %}}

## Read More

* [Export XML Documents](/howto8/integration/export-xml-documents/)
* [Import XML Documents](/howto8/integration/importing-xml-documents/)
* [Expose a Web Service](/howto8/integration/expose-a-web-service/)

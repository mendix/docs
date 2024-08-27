---
title: "Import a Large Excel File"
url: /howto/integration/import-a-large-excel-file/
weight: 10
---

## Introduction

Use XML-to-domain mapping to create a new import entity from an Excel sheet in a quick, semi-automated way.

This how-to teaches you how to do the following:

* Import a large Excel file with a lot of columns

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Have an app with the [MxModel Reflection](/appstore/modules/model-reflection/) and [Excel Importer](/appstore/modules/excel-importer/) modules installed and configured from the Mendix Marketplace.

## Modifying Your Excel Sheet

The Excel sheet you receive in this scenario contains almost every country in the world, as well as some supporting data. This data has to be imported into your application.

You can find the Excel sheet here: [Countries](/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/Countries.xlsx).

You are going to make an XSD schema from the headers in the Excel sheet so you can import the data into the model.

To modify your Excel sheet, follow these steps:

1. Select the header row with all the country names.
2. Copy and paste them in a new sheet using the transpose function:

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398888.png" class="no-border" >}}

    Your headers should be listed vertically and your sheet should look like this: [Countries Transposed](/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/CountriesTransposed.xlsx).

    You are now ready to add some tags around the column.

3. Add one column to the left.
4. Place the following string in cell **A1**:

    ```text
    <xs:element type="xs:string" name="
    ```

5. Drag the string all the way down to the last country.

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398889.png" class="no-border" >}}

6. In cell **C1**, enter the following string:

    ```text
    "/>
    ```

7. Like you did with the previous string, drag it down to the last country. The Excel sheet should now look like this: [Countries with Tags](/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/CountriesWithTags.xlsx).

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398890.png" class="no-border" >}}

    Now, group the three different columns into one column. This is necessary to copy the whole column into an XSD file.

8. Select cell **D1** and type in the following into the formula box: 

    ```text
    =(A1&B1&C1)
    ```

9. Drag the cells down like you’ve done with column **A1** and **C1**. Now, column **D** should have columns **A**, **B**, and **C** combined into one, and your sheet should look like this: [Countries with Tags and Column D](/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/CountriesWithTagsAndColumnD.xlsx).

## Preparing Your XSD File

You have used some of Excel's basic functionalities to create the first part of the XSD structure. For a proper XSD file, it needs a header and a footer. To prepare your XSD file, follow these steps:

1. Open a new file and name it *CountriesImport.xsd*.
2. Place the following text as the header of your XSD file:

    ```xsd
    <?xml version="1.0"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified">
    <xs:element name="CountriesImport">
    <xs:complexType>
    <xs:sequence>
    ```

3. Go back to your sheet, copy the content from column **D**, and paste it underneath the header.  

   {{% alert type="info" %}} Sometimes the content copied from Excel contains extra double quotes. To eliminate these, paste the Excel content into Word, and then copy it from Word and paste it into the XSD file. {{%/alert%}}

4. Place the following text as the footer:

    ```xsd
    </xs:sequence>
    </xs:complexType>
    </xs:element>
    </xs:schema>
    ```

    Your file should look like this: [Country Import](/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/CountryImport.xsd).

5. Click **Save**.

## Importing into Your Application Project

The XSD file is ready to be imported into your app. To import it, follow these steps:

1. Open your app and create a new XSD schema:

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398893.png" class="no-border" >}}

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/create.png" class="no-border" >}}

2. With the new XSD schema, create the XML-to-domain mapping. Do this by right-clicking the module > **Add other** > **Import mapping**.

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398895.png" class="no-border" >}}

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398896.png" class="no-border" >}}

3. Check all the attributes listed. After clicking **OK**, you see a mapping entity with all your countries.

4. You will now generate a real entity from it that you can use as an import table for your Excel sheet. Click **Map automatically**:

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398897.png" class="no-border" >}}

    There’s your entity!

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398898.png" class="no-border" >}}

5. Go to your domain model and set the entity’s **Persistable** property to **Yes**. 

    {{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/19398899.png" class="no-border" >}}

The data is imported to the page, as seen in the image below:  

{{< figure src="/attachments/howto/integration/importing-excel-documents/import-a-large-excel-file/large-file.png" class="no-border" >}}

To keep your application clean, you can delete the XSD schema and XML-to-domain files from your app.

A video demonstrating this technique can be viewed below:  

{{< youtube 8qLyIoUqKEE >}}

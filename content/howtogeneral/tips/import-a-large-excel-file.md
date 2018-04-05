---
title: "Import a Large Excel File"
category: "Tips & Tricks"
---

Every now and then a client asks you to import some data. It doesn’t look like a lot of effort at first glance, so you add it as a task and plan to pick it up at the end of the day.

Looking at the sheet later, you realize that there are more than hundred columns that need to be imported into the application. This means manual labour, a lot of it. As every column represents an attribute, creating 100+ new attributes in an import entity would take ages if you did it manually.

The trick is to use XML-to-domain mapping.

We will use XML-to-domain mapping to create a new import entity from an Excel sheet quickly in a semi-automated way.

**This how-to will teach you how to do the following:**

* Quickly import a large Excel file with a lot of columns

## 1 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Have an app project with the [MxModel Reflection](https://appstore.home.mendix.com/link/app/69/) and [Excel Importer](https://appstore.home.mendix.com/link/app/72/) modules installed and configured from the Mendix App Store

## 2 Modifying your Excel Sheet

The Excel sheet you received in this scenario contains almost every country in the world, and for every country, some data is stored. This data has to be imported into your application.

You can find the Excel sheet here: [Countries](attachments/Excel/Countries.xlsx).

You are going to make an XSD schema from the headers in the Excel sheet so that you can import this later into the model.

To modify your Excel sheet, follow these steps:

1.  Select the header row with all the country names.
2.  Copy and paste them in a new sheet using the transpose function:

    ![](attachments/19202606/19398887.png)
     
    ![](attachments/19202606/19398888.png)
    
    Your headers should be listed vertically and your sheet should look like this: [Countries Transposed](attachments/Excel/CountriesTransposed.xlsx).

    We are now ready to add some tags around the column.

3.  Add one column to the left.
4.  Place the following string in cell **A1**:

    ```text
    <xs:element type="xs:string" name="
    ```

5.  Drag it down all the way to the last country.

    ![](attachments/19202606/19398889.png)

6.  In cell **C1**, enter the following string:

    ```text
    "/>
    ```

7.  Like you did with the previous string, drag it down to the last country. The Excel sheet should now look like this: [Countries with Tags](attachments/Excel/CountriesWithTags.xlsx).

    ![](attachments/19202606/19398890.png)
    

    Now you have to get the three different columns into one column. This is necessary because later on, you want to copy the whole column into an XSD file.

8.  Select cell **D1** and type in the following into the formula box:

    ```text
    =(A1&B1&C1)
    ```

9.  Drag the cells down like you’ve done with column **A1** and **C1**. Now your column **D** should have the columns **A**, **B**, and **C** combined into one, and your sheet should look like this: [Countries with Tags and Column D](attachments/Excel/CountriesWithTagsAndColumnD.xlsx).

## 3 Preparing Your XSD File

We have used some of the basic functionalities of Excel to help us out creating the first part of our XSD structure. For a proper XSD file, we still need to have a header and a footer. This is where your favourite text editor comes in (for example, Brackets).

To prepare your XSD file, follow these steps:

1.  Open a new file and call it *CountriesImport.xsd*.
2.  Place this text as the header of your XSD file:

    ```text
    <?xml version="1.0"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified">
    <xs:element name="CountriesImport">
    <xs:complexType>
    <xs:sequence>
    ```

3.  Go back to your sheet, copy the content from column **D**, and paste it underneath the header.
4.  Now it’s time to place the footer, which will complete the XSD file. Place this text as for footer:

    ```text
    </xs:sequence>
    </xs:complexType>
    </xs:element>
    </xs:schema>
    ```

    Your file should look like this: [Country Import](attachments/Excel/CountryImport.xsd).

5.  Don’t forget to save it!

## 4 Importing into Your Application Project

The XSD file is ready to be imported into the Desktop Modeler. To import it, follow these steps:

1.  Open your app project and create a new XSD schema:

    ![](attachments/19202606/19398893.png)
    
    ![](attachments/19202606/19398894.png)

2.  With the new XSD schema created, it’s time to create the XML-to-domain mapping that will perform the trick for you and make your life a bit easier.

    ![](attachments/19202606/19398895.png)
    
    ![](attachments/19202606/19398896.png)

3.  Be sure to check all the attributes! After clicking **OK**, you should see a mapping entity with all your countries.
4.  You will now generate a real entity from it that you can use as an import table for your Excel sheet. Click **Map automatically**:

    ![](attachments/19202606/19398897.png)

    There’s your entity!

    ![](attachments/19202606/19398898.png)

5.  Go to your domain model, set the entity’s **Persistable** property to **Yes**, and the job is done!

    ![](attachments/19202606/19398899.png)

6.  To keep your application clean, you can delete the XSD schema and XML-to-domain files from your project.

Happy modeling!

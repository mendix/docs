---
title: "Excel Exporter"
category: "Modules"
description: "Describes the configuration and usage of the Excel Exporter module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "excel exporter", "excel", "filedocument", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With the [Excel Exporter](https://marketplace.mendix.com/link/component/726/) module, you can create templates that export data from your Mendix application to the Excel or CSV formats. The module creates an OQL query and directly prints the result to a FileDocument system module entity in your desired format. You can add styling to your Excel to create proper headers and styling formats in order to create a complete report.

The Excel Exporter is compatible with the [Excel Importer](excel-importer) version 8.1.1 or higher and [Atlas UI Resources](atlas-ui-resources) version 1.2.2 or higher.

## 2 Prerequisites

* [Install Mx Model Reflection](/howto/integration/using-the-excel-exporter#download-modules) version 6.1.1 or higher
* [Add MxReflection page and Excel Exporter page to the navigation](/howto/integration/using-the-excel-exporter#add-navigation-items)
* [Configure Mx Model Reflection](/howto/integration/using-the-excel-exporter#configure-mx-model-reflection)

## 3 Configuration

### 3.1 Excel Exporter Page

On the **Excel Exporter** page, there are the following items:

* Search: enable searching for a template using one or more of the following parameters:

  * **Template ID**: the ID of a template, which is generated automatically by the system
  * **Name**: the name of the template
  * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, or **CSV file**)

* **New**: opens the **New template** dialog box that contains the following items:

  * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, or **CSV file**)

  * **Filename** : the name of the template

  * **Input object** (optional):

    {{% todo %}}[Add the description of the input object]{{% /todo %}}

  * **Description** (optional): the description of the template

* **Edit**: opens the [template details page](#template-details) so that you can make changes for the selected template

* **Delete**: deletes the selected template

* **Create report**: exports data to an Excel document using the selected template

### 3.2 Template Details Page {#template-details}

On the template details page, there are the following items:

{{% todo %}}[Add the description of the input object and date time export format]{{% /todo %}}

* **Template ID**: the ID of a template, which is generated automatically by the system

* **Filename**: the name of the template

* **Input object**(optional):

* **Description** (optional): the description of the template

* **Date time export format**: the format for exported data and time

*  **Upload existing excel file**: uploads an Excel file the is used as a template

   {{% alert type="info" %}}If you upload an Excel file, the names of the sheets and columns that are defined in your Excel template file will be used.{{% /alert %}}
   
*  **Worksheets**: contains the following items related to the sheets in an exported document:

   * **New**: opens a new [sheet details page](#sheet-details) to create a sheet
   * **Edit**: opens the sheet details page for the selected sheet so that you can make changes
   * **Delete**: deletes the selected sheet
   * **Status**: shows if the settings for the sheet are correct
   * **Sequence**: the sequence of the sheet shown in an exported document {{% todo %}}[double check if this is true]]{{% /todo %}}
   * **Name**: the name of the sheet
   
* Styles: contains the following items related to the style in an exported document:

   * **New**: opens the **New Style** dialog box to create that contains the following items:
     
      * **Style name**: the name of the style
      
      * **Bold**: when selected, the text is in bold
      
      * **Italic**: when selected, the text is in italics
      
      * **Underline**: when selected, the text is underlined
      
      * **Text height**: the height of the text
      
      * **Text color**: the color of the text
      
      * **Horizontal alignment**: the alignment of the text horizentally 
      
      * **Background color**: the color of the background
      
      * **Vertical alignment**: the alignment of the text vertically
      
      * **Rotation**: the degrees that the text is rotated anti-clockwise
      
        {{% alert type="info" %}}The rotation must be between -90 and 90 degrees. If the number is negative, the rotation is clockwise.{{% /alert %}}
      
      * **Wrap text**: when selected, the text in a cell can be wrapped to a line
      
      * **Border top**
      
      * **Border bottom**
      
      * **Border left**
      
      * **Border right**
      
      * **Border color**
      
      * **Format**:
      
   * **Edit**: opens the **Edit style** dialog box where you can make changes for the selected style
   
   * **Delete**: deletes the selected style
   
   * **Style name**: the name of the style


### 3.3 Sheet Details Page {#sheet-details}

On the sheet details page, there are the following items:

* **Name:** the name of the sheet
* **Sequence**
* **Row object**: the object for the rows
* **Reference to template input object **(optional)
* **Sheet input object**
* **Start retrieved data at row**
* **Distinct duplicate data**
* **Use static data**: when selected, the [Static data tab](#static-data-tab) becomes visible
* **Column default width**
* **Default text style**
* **Row default height**
* **Default header text style**

#### 3.3.1 Static Data Tab {#static-data-tab}

On the **Static data** tab, there are the following items:

* **Search**
* **New**
* **Edit**
* **Delete**
* **Status**
* **Row**
* **Column**
* **Type**
* **Name**
* **Static type**
* **Style**

#### 3.3.2 Column Data Tab

On the **Column data** tab, there are the following items:

* **New**: opens the **New column** dialog box that contains the following items:

  * **Column number**: the number of the column

    {{% alert type="info" %}}The lowest column number is 0. This column becomes column A in the exported Excel document.{{% /alert %}}

  * **Style**: the style of the column (not including the column header)

  * **Name**: the name of the column

  * **Use name as column header**:

  * **Retrieve type**: the type of the data which is retrieved for the column

  * **Aggregate on attribute**:

  * **End column with aggregate**: when selected, **Aggregate type** becomes visible

    * **Aggregate type**: the result of the selected mathematical operation is shown at the button of the column

* **Edit**: opens the **Edit Mx column** dialog box where you can make changes to the selected column

* **Delete**: deletes the selected column

* ⬆: changes the sequence/column number to a lower number

* ⬇: changes the sequence/column sequence to a higher number

* **Status**: shows if the column is correctly configured

* **Sequence**: the number of the column

* **Column name**: the name of the column

* **Object and attribute**

* **Header**

  * **Yes**: the column name is used as a header
  * **No**: the attribute name is used as a header

* **Specific style**: the style of the column (not including the column header)

* **Data aggregate**:

* **Function**: the mathematical operation that is carried out

* **Result aggregate**: the result of the mathematical operation is shown at the button of the column

#### 3.3.3 Associations, Constraints and Sorting Tab

On the **Associations, constrains and sorting** tab, there are the following items:

* **Associations**
  * **New**: opens the **Edit Mx Reference Handling** dialog box that contains the following items:
    * **JOIN type**
  * **Edit**:
  * **Delete**: deletes the selected association
  * **Association**
  * **Join type**
* **Constaints**
  * **New**: opens the **Edit Mx Constant dialog box** that contains the following items:
    * **Retrieve type**:
  * **Edit**
  * **Delete**: deletes the selected constraint
  * **⬆**
  * **⬇** 
  * **Sequence**
  * **And/Or**
  * **Summary**
* **Sorting**
  * **New**: opens the **Edit sorting** dialog box that contains the following items:
    * **Sequence**
    * **Sorting direction**
    * **Retrieve type**
  * **Edit**
  * **Delete**
  * **⬆**
  * **⬇** 
  * **Sequence**
  * **Summary**
  * **Direction**: ascending or descending

#### 3.3.4 Sheet Preferences Tab

On the **Sheet Preferences** tab, there are the following items:

* **Column settings**
  * **Search**
  * **New**
  * **Edit**
  * **Delete**
  * **Column index**
  * **Auto size**
  * **Column width**
* **Row settings**
  * **Search**
  * **New**
  * **Edit**
  * **Delete**
  * **Row number**
  * **Default height**
  * **Row height**

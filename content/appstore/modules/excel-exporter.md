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

* **New**: opens the **New template** dialog box where you can set the following items:

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

* **Date time export format**:

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

   * **New**: opens the **New Style** dialog box where you can set the following items:
      * **Style name**
      * **Bold**
      * **Italic**
      * **Uderline**
      * **Text height**
      * **Text color**
      * **Horizontal alignment**
      * **Background color**
      * **Vertical alignment**
      * **Rotation**
      * **Wrap text**
      * **Border top**
      * **Border bottom**
      * **Border left**
      * **Border right**
      * **Border color**
      * **Format**

   * **Edit**: opens the **Edit style** dialog box where you can make changes for the selected style
   * **Delete**: deletes the selected style


### 3.3 Sheet Details Page {#sheet-details}

On the sheet details page, there are the following items:

* **Name:**
* **Sequence**
* **Row object** (optional)
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

* **New**
* **Edit**
* **Delete**
* ⬆
* ⬇ 
* **Status**
* **Sequence**
* **Column name**
* **Object and attribute**
* **Header**
* **Specific style**
* **Data aggregat**
* **Function**
* **Result aggregate**

#### 3.3.3 Associations, Constraints and Sorting Tab

On the **Associations, constrains and sorting** tab, there are the following items:

* **Associations**
  * **New**
  * **Edit**
  * **Delete**
  * **Association**
  * **Join type**
* **Constaints**
  * **New**
  * **Edit**
  * **Delete**
  * **⬆**
  * **⬇** 
  * **Sequence**
  * **And/Or**
  * **Summary**
* **Sorting**
  * **New**
  * **Edit**
  * **Delete**
  * **⬆**
  * **⬇** 
  * **Sequence**
  * **Summary**
  * **Direction**

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

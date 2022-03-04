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

* **Search**: enables searching for a template using one or more of the following parameters:
  * **Template ID**: the ID of a template, which is generated automatically by the system
  * **Name**: the name of the template
  * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, or **CSV file**)
  
* **New**: opens the **New template** dialog box that contains the following items:

  * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, or **CSV file**)

  * **Filename** : the name of the template

  * **Input object **(optional): an entity associated to your entity to be exported

  * **Description** (optional): the description of the template

* **Edit**: opens the [template details page](#template-details) so that you can make changes to the selected template

* **Delete**: deletes the selected template

* **Create report**: exports data to an Excel document using the selected template

### 3.2 Template Details Page {#template-details}

On the template details page, you can define the template with the following items:

* **Template ID**: the ID of a template, which is generated automatically by the system

* **Filename**: the name of the template

* **Input object **(optional): an entity associated to your entity to be exported

* **Description** (optional): the description of the template

* **Date time export format**: the format for exported date and time

*  **Upload existing excel file**: uploads an Excel file which is used as a template

   {{% alert type="info" %}}If you use an uploaded Excel file as a template, the names of the sheets and columns in your template will be used. However, the background color in your template will be overruled by the **Background color** you select for the [Styles](#styles) when the **Background color** is not set to **none**{{% /alert %}}
   
*  **Worksheets**: contains the following items that you can use to define sheets in an exported document

   * **New**: opens a new [sheet details page](#sheet-details) to create a sheet
   * **Edit**: opens the sheet details page for the selected sheet so that you can make changes
   * **Delete**: deletes the selected sheet
   * **Status**: shows if the sheet is correctly configured
   * **Sequence**: the sequence of the sheet shown in an exported document
   * **Name**: the name of the sheet
   
* **Styles**: contains the following items that you can use to define the style in an exported document:

   * **New**: opens the **New Style** dialog box to create that contains the following items:
     
      * **Style name**: the name of the style
      
      * **Bold**: if selected, the text is in bold
      
      * **Italic**: if selected, the text is in italics
      
      * **Underline**: if selected, the text is underlined
      
      * **Text height** (optional): the height of the text
      
      * **Text color**: the color of the text
      
      * **Horizontal alignment**: the horizontal alignment of the text 
      
      *  **Background color**: the color of the background
      
         {{% alert type="info" %}}If you use an uploaded Excel file as a template, the background color you select here (if the value is not **none**) will overrule the background color in your template.{{% /alert %}}
      
      * **Vertical alignment**: the vertical alignment of the text
      
      * **Rotation**: the degrees that the text is rotated anti-clockwise
      
        {{% alert type="info" %}}The rotation must be between -90 and 90 degrees. If the number is negative, the rotation is clockwise.{{% /alert %}}
      
      * **Wrap text**: if selected, the text in a cell can be wrapped to a line
      
      * **Border top**: each number represents a type of border in Excel sheet (the maximum value is 14)
      
      * **Border bottom**: each number represents a type of border in Excel sheet (the maximum value is 14)
      
      * **Border left**: each number represents a type of border in Excel sheet (the maximum value is 14)
      
      * **Border right**: each number represents a type of border in Excel sheet (the maximum value is 14)
      
      * **Border color**: the color of the cell borders
      
      * **Format**: **General** or **Number**
      
        * When **Number** is selected, **Decimal places** becomes visible
          * **Decimal places**: defines the number of decimal places (for instance, 0.010 has 3 decimal places, and 0.2 has 1 decimal place)
      
   * **Edit**: opens the **Edit style** dialog box where you can make changes to the selected style
   
   * **Delete**: deletes the selected style
   
   * **Style name**: the name of the style


### 3.3 Sheet Details Page {#sheet-details}

On the sheet details page, you can define sheets with the following items:

* **Name:** the name of the sheet

  {{% alert type="info" %}}If you use **Upload existing excel file** on the [template details page](#template-details), the sheet name defined in your Excel template file will be used, and the **Name** you enter here will not be used.{{% /alert %}}

* **Sequence **(optional): the sequence of the sheet in the exported document

  {{% alert type="info" %}}The sheets in the exported Excel document are shown in the ascending sequence. If the sequence of a sheet is set to empty, this sheet will become the first sheet.{{% /alert %}}

* **Row object**: the object data used for the rows

* **Reference to template input object **(optional): the reference to the template input object (if **Input object** is used)

* **Sheet input object**: the object that is the input for this sheet

* **Start retrieved data at row**: the row where the header is

* **Distinct duplicate data**
  
  * If selected, duplicate data are not exported
  * If unselected, duplicate data are exported
  
* **Use static data**: if selected, the [Static data tab](#static-data-tab) becomes visible

* **Column default width**

  * If selected, the default column width is used
  * If unselected, you can set a new default row height in the **Default column height in pixels** field

* **Default text style**: the default style of the text when no style is applied

* **Row default height**

  * If selected, the default row height is used
  * If unselected, you can set a new default row height in the **Default column height in points** field

* **Default header text style**: the default style of the header text

#### 3.3.1 Static Data Tab {#static-data-tab}

On the **Static data** tab, there are the following items:

* **Search**: enables searching for a template using one or more of the following parameters

  * **Column place**: the column in which the static data are shown
  * **Row place**:  the row in which the static data are shown
  * **Static type**: the type of the static data
  * **Name**: the name of the cell where the static data are placed

* **New**: opens the **New static data** dialog box that contains the following items:
  * **Row**: the row in which the static data are placed

    {{% alert type="info" %}}The value of **Row** must be smaller than the value of **Start retrieved data at row**.{{% /alert %}}

  * **Column**: the column in which the static data are placed

  * **Name**: the name of the cell where the static data are placed

  * **Type**: the type of the static data in the cell
    
    * **Static Text**: if selected, the cell shows static text, and **Name** is changed to **Excel Text**.
    * **Object data**: if selected, the cell shows object data
    * **Aggregate function**: if selected, the cell shows an aggregate function
    
  * **Style**: the style of the static data

* **Edit**: opens the **Edit Mx static** dialog box where you can make the changes to the selected static data settings

* **Delete**: deletes the selected static data

* **Status**: shows if the selected static data are correctly configured

* **Row**: the row in which the static data are shown

* **Column**: the column in which the static data are shown

* **Type**: the type of the static data

* **Name**: the name of the static data

* **Static type**: the type of the static data

* **Style**: the style of the static data

#### 3.3.2 Column Data Tab

On the **Column data** tab, you can define column data with the following items:

* **New**: opens the **New column** dialog box that contains the following items:

  * **Column number**: the number of the column, same as **Sequence**

    {{% alert type="info" %}}The lowest column number is 0. This column becomes column A in the exported Excel document.{{% /alert %}}

  * **Style**: the style of the column

    {{% alert type="info" %}}This style does not apply to the column header. The style of the header is defined by **Default header text style** on the [sheet details page](#sheet-details).{{% /alert %}}

  * **Name**: the name of the column

    {{% alert type="info" %}}If you use **Upload existing excel file** on the [template details page](#template-details), the column name defined in your Excel template file will be used, and the **Name** you enter here will not be used.{{% /alert %}}

  * **Retrieve type**: the type of the data which is retrieved for the column

  * **Aggregate on attribute**: if selected, you can select an aggregate function

    * **Aggregate type**: sets the type of the aggregate function, which is added in the query

  * **End column with aggregate**: if selected, the result of the aggregate function that you select in the **Aggregate type** drop-down list will be shown at the bottom of the column

    * **Aggregate type**: the type of the aggregate function, the result of which will be shown at the bottom of the column

* **Edit**: opens the **Edit Mx column** dialog box where you can make changes to the selected column

* **Delete**: deletes the selected column

* ⬆: changes the sequence (column number) to a lower number

* ⬇: changes the sequence (column number) to a larger number

* **Status**: shows if the column is correctly configured

* **Sequence**: the number of the column, same as **Column number**

* **Column name**: the name of the column

* **Object and attribute**: the source of the data used for the column

* **Specific style**: the style of the column (not including the column header)

* **Data aggregate**: shows if a type of the aggregate function is added in the query

* **Function**: the type of the aggregate function added in the query

* **Result aggregate**: if the result of the function is shown at the button of the column

#### 3.3.3 Associations, Constraints and Sorting Tab

On the **Associations, constraints and sorting** tab, you can define the associations, constraints, and sorting with the following items:

* **Associations**: contains the following items that you can use to define associations:
  * **New**: opens the **Edit Mx Reference Handling** dialog box that contains the following items:
    * **JOIN type**
      * **LEFT JOIN**: all the records from the left table and the matched records from the right table
      * **INNER JOIN**: records that have matching values in both tables
      * **RIGHT JOIN**: all the records from the right table and the matched records from the left table
      * **FULL JOIN**: all records when there is a match in either left or right table
  * **Edit**: opens the **Edit Mx Reference Handling** dialog box where you can make changes to the selected association
  * **Delete**: deletes the selected association
  * **Association**: the reference that is used
  * **Join type**: the type of JOIN
* **Constraints**: contains the following items that you can use to define constraints:
  * **New**: opens the **Edit Mx Constant** dialog box that contains the following items:
    * **Sheet row object**: the object of the rows
    * **Retrieve type**: type of the data used as a constraint2
      * **Attribute**: if selected, you use an attribute as a constraint
        * **Select attribute**: the attribute that you use as a constraint
        * **Constraint**: the rule of the constraint
        * **Handling on previous constraint:** how this constraint is used with the previous constraint
      * **Reference**: if selected, you use a reference as a constraint
        * **Select reference**: the reference that you use for sorting
        * **Select object**: the object that you use for sorting
  * **Edit**: opens the **Edit Mx Constraint** dialog box where you can make changes to the selected constraint
  * **Delete**: deletes the selected constraint
  * **⬆**: changes the sequence of the selected constraint to a lower number
  * **⬇**: changes the sequence of the selected constraint to a larger number
  * **Sequence**: the sequence of the constraint
  * **And/Or**: how this constraint is used together with the previous constraint
  * **Summary**: the summary of the constraint
* **Sorting**: contains the following items that you can use to define sorting:
  * **New**: opens the **Edit sorting** dialog box that contains the following items:
    * **Sequence**: the sequence of the sorting
    * **Sorting direction**: the direction of the sorting (**Ascending** or **Descending**)
    * **Retrieve type**: the type of the data used for sorting
      * **Attribute**: if selected, you use an attribute for sorting
        * **Select attribute**: the attribute that you use for sorting
      * **Reference**: if selected, you use a reference for sorting
      * **Select reference**: the reference that you use for sorting
      * **Select object**: the object that you use for sorting
  * **Edit**: opens the **Edit sorting** dialog box where you can make changes to the selected sorting
  * **Delete**: deletes the selected sorting
  * **⬆**: changes the sequence of the selected sorting to a lower number
  * **⬇**: changes the sequence of the selected sorting to a larger number
  * **Sequence**: the sequence of the sorting
  * **Summary**: the summary of the sorting
  * **Direction**: the direction of the sorting (**Ascending** or **Descending**)

#### 3.3.4 Sheet Preferences Tab

On the **Sheet Preferences** tab, you can define sheet preferences with the following items:

* **Column settings**
  
  * **Search**: enables searching for column settings using one or more of the following parameters:
  
    * **Column index**: the number of the column, same as **Column number**
    * **Auto size**: if the column width is automatically adjusted 
    * **Column width**: the fixed width of the column in pixels
  
  * **New**: opens the **Form title** dialog box that contains the following items:
  
    * **Column number**: the number of the column, same as **Column index**
    * **Automatic resize**
      * If selected, the column width is automatically adjusted and **Column width** is invisible
      * If unselected, the **Column width** is visible
        * **Column width (pixels)**: the fixed width of the column in pixels
  
  * **Edit**: opens the **Form title** dialog box where you can make changes to the selected column settings
  
    **Delete**: deletes the selected column settings
  
  * **Column index**: the number of the column, same as **Column number**
  
  * **Auto size**: if the column width is automatically adjusted 
  
  * **Column width**: the fixed width of the column in pixels
  
* **Row settings**
  * **Search**: enables searching for row settings using one or more of the following parameters:
    * **Row number**: the number of the row
    * **Automatic height**: if the row uses the default height, same as **Default height**
    * **Row height**: the fixed height of the row
  * **New**: opens the **Edit Mx row settings** dialog box that contains the following items:
    * **Row number**: the number of the row
    * **Automatic height**
      * If selected, the row height is automatically adjusted and **Row height** is invisible
      * If unselected, the **Row height** is visible
        * **Row height**: the fixed height of the row
  * **Edit**: opens the **Edit Mx row settings** dialog box where you can make changes to the selected row settings
  * **Delete**: deletes the selected row settings
  * **Row number**: the number of the row
  * **Default height**: if the row uses the default height, same as **Automatic height**
  * **Row height**: the fixed height of the row

## 4 Read More

- [How to Export to Excel](https://docs.mendix.com/howto/integration/using-the-excel-exporter)

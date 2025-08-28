---
title: "Excel Exporter"
url: /appstore/modules/excel-exporter/
description: "Describes the configuration and usage of the Excel Exporter module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The Atlas UI Resources module is deprecated, as is Atlas 2. If you are still using Atlas 2, Mendix recommends that you [migrate from Atlas 2 To Atlas 3](/refguide9/moving-from-atlas-2-to-3/).
{{% /alert %}}

## Introduction

With the [Excel Exporter](https://marketplace.mendix.com/link/component/726/) module, you can create templates that export data from your Mendix application to the Excel, macro-enabled Excel, or CSV formats. The module creates an OQL query and directly prints the result to a FileDocument system module entity in your desired format. You can add styling to your Excel to create proper headers and styling formats in order to create a complete report.

The Excel Exporter is compatible with the [Excel Importer](/appstore/modules/excel-importer/) version 8.1.1 or higher and [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730) version 1.2.2 or higher.

## Prerequisites

* [Install Mx Model Reflection](/refguide/using-the-excel-exporter/#download-modules) version 6.1.1 or higher
* [Add MxReflection page and Excel Exporter page to the navigation](/refguide/using-the-excel-exporter/#add-navigation-items)
* [Configure Mx Model Reflection](/refguide/using-the-excel-exporter/#configure-mx-model-reflection)

## Configuration

### Excel Exporter Page

On the **Excel Exporter** page, there are the following items:

* **Search**: enables searching for a template using one or more of the following properties:
    * **Template ID**: the ID of a template, which is generated automatically by the system
    * **Name**: the name of the template
    * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, **Excel 2007 and higher (Macro-Enabled)**, or **CSV file**)
* **New**: opens the **New template** dialog box that contains the following items:
    * **Document type**: the document type of the exported file (**Excel 97 - 2003**, **Excel 2007 or higher**, **Excel 2007 and higher (Macro-Enabled)**, or **CSV file**)

    {{% alert color="info" %}}The module uses `"` by default as the quotation character during CSV export. However, you can specify any single character of your choice as the quotation character or even decide not to have any during export.{{% /alert %}}

    * **Filename** : the name of the template
    * **Input object**(optional): an entity associated to your entity to be exported
    * **Description** (optional): the description of the template
* **Edit**: opens the [template details page](#template-details) where you can make changes to the selected template
* **Delete**: deletes the selected template
* **Create report**: exports data to an Excel document using the selected template

### Template Details Page {#template-details}

On the template details page, you can define the template with the following items:

* **Template ID**: the ID of a template, which is generated automatically by the system
* **Filename**: the name of the template
* **Input object**(optional): an entity associated to your entity to be exported
* **Description** (optional): the description of the template
* **Date time export format**: the format for exported date and time
* **Upload existing excel file**: uploads an Excel file which is used as a template

    {{% alert color="info" %}}If you use an uploaded Excel file as a template, the names of the sheets and columns in your template will be used. However, the background color in your template will be overruled by the **Background color** (including **none**) specified in the applicable style. {{% /alert %}}
   
* **Worksheets**: contains the following items that you can use to define sheets in an exported document:
    * **New**: opens a new [sheet details page](#sheet-details) to create a sheet
    * **Edit**: opens the sheet details page for the selected sheet where you can make changes
    * **Delete**: deletes the selected sheet
    * **Status**: if the sheet is correctly configured
    * **Sequence**: the sequence of the sheet shown in an exported document
    * **Name**: the name of the sheet, which needs to be mandatorily provided
* **Styles**: contains the following items that you can use to define the style in an exported document:
    * **New**: opens the **New Style** dialog box to create that contains the following items:
        * **Style name**: the name of the style
        * **Bold**: if selected, the text is in bold
        * **Italic**: if selected, the text is in italics
        * **Underline**: if selected, the text is underlined
        * **Text height** (optional): the height of the text
        * **Text color**: the color of the text
        * **Horizontal alignment**: the horizontal alignment of the text 
        * **Background color**: the color of the background

            {{% alert color="info" %}}If you use an uploaded Excel file as a template, the background color you select here (including the value **none**) will overrule the background color in your template.{{% /alert %}}

        * **Vertical alignment**: the vertical alignment of the text
        * **Rotation**: the degrees that the text is rotated anti-clockwise

            {{% alert color="info" %}}The rotation must be between -90 and 90 degrees. If the number is negative, the rotation is clockwise.{{% /alert %}}

        * **Wrap text**: if selected, the text in a cell can be wrapped to a line
        * **Border top**: each number represents a type of border in the Excel document (the maximum value is 14)
        * **Border bottom**: each number represents a type of border in theExcel document (the maximum value is 14)
        * **Border left**: each number represents a type of border in the Excel document (the maximum value is 14)
        * **Border right**: each number represents a type of border in the Excel document (the maximum value is 14)
        * **Border color**: the color of the cell borders
        * **Format**: the format of the cell
            * **General**: if selected, the cells have no specific number format
            * **Number**: if selected, the cells display numbers, and the **Decimal places** property becomes available
                * **Decimal places**: defines the number of decimal places (for instance, 0.010 has 3 decimal places, and 0.2 has 1 decimal place)
    * **Edit**: opens the **Edit style** dialog box where you can make changes to the selected style
    * **Delete**: deletes the selected style
    * **Style name**: the name of the style

### Sheet Details Page {#sheet-details}

On the sheet details page, you can define sheets with the following items:

* **Name:** the name of the sheet

    {{% alert color="info" %}}If you use **Upload existing excel file** on the [template details page](#template-details), the sheet name defined in your Excel template file will be used, and the **Name** you enter here will not be used.{{% /alert %}}

* **Sequence**(optional): the sequence of the sheet in the exported document

    {{% alert color="info" %}}The sheets in the exported Excel document are shown in the ascending sequence. If the sequence of a sheet is set to empty, this sheet will become the first sheet.{{% /alert %}}

* **Row object**: the object data used for the rows

  {{% alert color="info" %}}External Entities are not supported, so **Row object** and **Input object** (if specified) should be persistable entities from your domain model.{{% /alert %}}

* **Reference to template input object** (optional): the reference to the template input object (if **Input object** is used)
* **Sheet input object**: the object that is the input for this sheet
* **Start retrieved data at row**: the row where the header is
* **Distinct duplicate data**
    * If selected, duplicate data are not exported
    * If unselected, duplicate data are exported
* **Use static data**: if selected, the [Static data tab](#static-data-tab) becomes available
* **Column default width**
    * If selected, the default column width is used
    * If unselected, you can set a new default row height with the **Default column height in pixels** property
* **Default text style**: the default style of the text when no style is applied
* **Row default height**

    * If selected, the default row height is used
    * If unselected, you can set a new default row height with the **Default column height in points** property
* **Default header text style**: the default style of the header text

#### Static Data Tab {#static-data-tab}

On the **Static data** tab, there are the following items:

* **Search**: enables searching for a template using one or more of the following properties:
    * **Column place**: the column in which the static data are shown
    * **Row place**: the row in which the static data are shown
    * **Static type**: the type of the static data
    * **Name**: the name of the cell where the static data are placed
* **New**: opens the **New static data** dialog box that contains the following items:
    * **Row**: the row in which the static data are placed

        {{% alert color="info" %}}The value of **Row** must be smaller than the value of **Start retrieved data at row**.{{% /alert %}}

    * **Column**: the column in which the static data are placed
    * **Name**: the name of the cell where the static data are placed
    * **Type**: the type of the static data in the cell
        * **Static Text**: if selected, the cell shows static text, and **Name** is changed to **Excel Text**.
        * **Object data**: if selected, the cell shows object data, and the **Select attribute from the row object** property becomes available:
            * **Select attribute from the row object**: sets an attribute from the entity selected for the **Row object** property in the [sheet details page](#sheet-details)
        * **Aggregate function**: if selected, the cell shows an aggregate function, and the **Aggregate type** property becomes available:
            * **Aggregate type**: the type of aggregate function and if the type is not **Count**, the **Aggregate column** becomes available
                * **Aggregate column**: the column for the aggregate function
    * **Style**: the style of the static data

* **Edit**: opens the **Edit Mx static** dialog box where you can make the changes to the selected static data properties:
* **Delete**: deletes the selected static data
* **Status**: if the selected static data are correctly configured
* **Row**: the row in which the static data are shown
* **Column**: the column in which the static data are shown
* **Type**: the type of the static data
* **Name**: the name of the static data
* **Static type**: the type of the static data
* **Style**: the style of the static data

#### Column Data Tab

On the **Column data** tab, you can define column data with the following items:

* **New**: opens the **New column** dialog box that contains the following items:
    * **Column number**: the number of the column, same as **Sequence**

        {{% alert color="info" %}}The lowest column number is 0. This column becomes column A in the exported Excel document.{{% /alert %}}

    * **Style**: the style of the column

        {{% alert color="info" %}}This style does not apply to the column header. The style of the header is defined by **Default header text style** on the [sheet details page](#sheet-details).{{% /alert %}}

    * **Name**: the name of the column

        {{% alert color="info" %}}If you use **Upload existing excel file** on the [template details page](#template-details), the column name defined in your Excel template file will be used, and the **Name** you enter here will not be used.{{% /alert %}}

    * **Retrieve type**: the type of the data which is retrieved for the column
    * **Aggregate on attribute**: if selected, the **Aggregate type** property becomes available, and the results of the aggregate function that you select will be shown in the column

        * **Aggregate type**: sets the type of the aggregate function, the results of which will be shown in the column
    * **End column with aggregate**: if selected, the **Aggregate type** property becomes available, and the result of the aggregate function that you select will be shown at the bottom of the column

        * **Aggregate type**: the type of the aggregate function, the result of which will be shown at the bottom of the column
* **Edit**: opens the **Edit Mx column** dialog box where you can make changes to the selected column
* **Delete**: deletes the selected column
* ⬆: changes the sequence (column number) to a lower number
* ⬇: changes the sequence (column number) to a larger number
* **Status**: if the column is correctly configured
* **Sequence**: the number of the column, same as **Column number**
* **Column name**: the name of the column
* **Object and attribute**: the source of the data used for the column
* **Specific style**: the style of the column (not including the column header)
* **Data aggregate**: if a type of the aggregate function is added in the query
* **Function**: the type of the aggregate function added in the query
* **Result aggregate**: if the result of the aggregate function is shown at the button of the column

#### Associations, Constraints and Sorting Tab

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
        * **Retrieve type**: type of the data used as a constraint
            * **Attribute**: if selected, you use an attribute as a constraint, and the following properties become available:
                * **Select attribute**: the attribute that you use as a constraint
                * **Constraint**: the rule of the constraint
                * **Handling on previous constraint:** how this constraint is used with the previous constraint
            * **Reference**: if selected, you use a reference as a constraint, and the following properties become available:
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
            * **Attribute**: if selected, you use an attribute for sorting, and the **Select attribute** property becomes available:
                * **Select attribute**: the attribute that you use for sorting
            * **Reference**: if selected, you use a reference for sorting, and the following properties become available:
                * **Select reference**: the reference that you use for sorting
                * **Select object**: the object that you use for sorting
    * **Edit**: opens the **Edit sorting** dialog box where you can make changes to the selected sorting
    * **Delete**: deletes the selected sorting
    * **⬆**: changes the sequence of the selected sorting to a lower number
    * **⬇**: changes the sequence of the selected sorting to a larger number
    * **Sequence**: the sequence of the sorting
    * **Summary**: the summary of the sorting
    * **Direction**: the direction of the sorting (**Ascending** or **Descending**)

#### Sheet Preferences Tab

On the **Sheet Preferences** tab, you can define sheet preferences with the following items:

* **Column settings** 
    * **Search**: enables searching for column settings using one or more of the following properties: 
        * **Column index**: the number of the column, same as **Column number**
        * **Auto size**: if the column width is automatically adjusted 
        * **Column width**: the fixed width of the column in pixels
    * **New**: opens the **Form title** dialog box that contains the following items:
        * **Column number**: the number of the column, same as **Column index**
        * **Automatic resize**
            * If selected, the column width is automatically adjusted and **Column width** is unavailable
            * If unselected, the **Column width** property becomes available
                * **Column width (pixels)**: the fixed width of the column in pixels
    * **Edit**: opens the **Form title** dialog box where you can make changes to the selected column settings
    * **Delete**: deletes the selected column settings
    * **Column index**: the number of the column, same as **Column number**
    * **Auto size**: if the column width is automatically adjusted 
    * **Column width**: the fixed width of the column in pixels
* **Row settings**
    * **Search**: enables searching for row settings using one or more of the following properties:
        * **Row number**: the number of the row
        * **Automatic height**: if the row uses the default height, same as **Default height**
        * **Row height**: the fixed height of the row
    * **New**: opens the **Edit Mx row settings** dialog box that contains the following items:
        * **Row number**: the number of the row
        * **Automatic height**
            * If selected, the row height is automatically adjusted and **Row height** property is unavailable
            * If unselected, the **Row height** property becomes available
                * **Row height**: the fixed height of the row
    * **Edit**: opens the **Edit Mx row settings** dialog box where you can make changes to the selected row settings
    * **Delete**: deletes the selected row settings
    * **Row number**: the number of the row
    * **Default height**: if the row uses the default height, same as **Automatic height**
    * **Row height**: the fixed height of the row

{{% alert color="info" %}}While exporting output data into an Excel file having macros in it, the existing macros will neither be parsed nor removed, but will be retained as-is in the output file.{{% /alert %}}

## Read More

* [How to Export to Excel](/howto/integration/using-the-excel-exporter/)

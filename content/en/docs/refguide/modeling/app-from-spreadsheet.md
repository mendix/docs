---
title: "Starting with App from a Spreadsheet"
url: /refguide/app-from-spreadsheet/
weight: 19
description: "Describes how to import an Excel spreadsheet to your app in Mendix Studio Pro using App from a spreadsheet template."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor <after-import> below is mapped, so it should not be removed or changed.
---

## Introduction

You can choose the **App from a spreadsheet** starting point in Studio Pro, import a Microsoft Excel spreadsheet, and build an app using your data. The data of the spreadsheet will be analyzed and converted into a domain model with entities, attributes, and associations. Also, pages and navigation items based on your data can be generated.

{{% alert color="info" %}}

**App from a spreadsheet** is currently available only on Windows.

{{% /alert %}}

## Preparing Your Data for Import

Before importing your spreadsheet into the app, do the following:

1. Make sure your spreadsheet is in the *.xlsx* format
2. Make sure that the spreadsheet meets the following requirements:
   1. The size of your file does not exceed 1 MB.
   2. The number of worksheets does not exceed 50.
   3. The number of columns per worksheet does not exceed 100.
   4. A column name does not exceed 100 characters.
3. Make sure that you have normalized your data in the spreadsheet. Check if the following requirements are met:
   1. Each column should name a unique name within a workbook.
      {{% alert color="info" %}}If a column name consists of several lines, Studio Pro will process the only first one. If your column does not have a name, but has values in it, it will be named "_EMPTY". {{% /alert %}}

   2. Each cell of the worksheet (a row or a column) should contain a single value or be empty.
   3. If you want to create links (associations) between two columns, make sure the conditions mentioned above for creating these links are met.

## Data Conversion During Import

During the import process, spreadsheet data is analyzed and converted the following way:

1. Your worksheets are converted into entities.
2. Your columns are converted into attributes.
3. The links between the worksheets are identified and can be converted into associations if all of the following conditions are met:

   1. All values of one column in your spreadsheet are used in another column.
   2. The values of the other column are unique.
   3. The type of data in these columns is converted to string or enumeration attribute types. For more information on correspondence between Excel data types and attribute types, see the [Correspondence Between Excel Data Types and Attribute Types](#excel-type-attribute-type) section.

Download this Excel spreadsheet example to check how data is normalized there: [Spreadsheet Example](/attachments/refguide/modeling/app-from-spreadsheet/Example.xlsx). You can also import it into an app and test how this spreadsheet is converted. For more information, see the [Importing a Spreadsheet](#importing-spreadsheet) section.

## Starting an App from a Spreadsheet {#importing-spreadsheet}

To create an app using your own data, do the following:

1. Open Studio Pro and choose **Create New App**. 

2. Choose the **App from a spreadsheet** starting point.

   {{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/start-from-studio-pro.jpg"  width="650"  class="no-border" >}}

3. When you create your app, a page where you can upload your spreadsheet is opened. Drag your spreadsheet onto the page or browse your files and choose the one you would like to import.

    {{% alert color="info" %}}If you choose to start without data, you will have just a blank app, and will not be able to import a spreadsheet later.{{% /alert %}}

### Previewing Spreadsheet Data

Once you select the spreadsheet for import, your data is analyzed and is converted to associations, entities, and attributes.

#### Correspondence Between Excel Data Types and Attribute Types {#excel-type-attribute-type}

In the table below, you can see how the Excel data corresponds to the attribute types:

| Excel Data                                                   | Attribute Type It Is Converted to                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| One of the following conditions should be met: <ul><li>No data: no values, an empty column</li><li>If the value does not fall under any of the cases described below</li></ul> | String                                                       |
| Values in the columns should be exclusively one of the following: <ul><li>1 and 0</li><li>Y/y and N/n</li><li>yes and no</li><li>true and false</li><li>V/v and empty cells</li><li>X/x and empty cells</li></ul> | Boolean                                                      |
| Data of type General or Number that falls into a range from –2,147,483,648 to 2,147,483,647 and does not contain empty cells. | Integer                                                      |
| Data of type General or Number that falls into a range from –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 and does not contain empty cells. | Long                                                         |
| Other numbers that do not fall under Integer and Long attribute type conditions and the column does not contain empty cells. | Decimal                                                      |
| Data of type Date or Time that does not contain empty cells. | Date and Time **Note** If only the date is indicated, the time is set to 00:00 in the preview |
| All of the following conditions should be met:  <ul><li>The value is identified as a string</li><li>Values in the column are used more than once</li><li>The number of such values is less than or equals ten</li></ul>When all conditions listed above are met, the column is treated as enumeration, and the values are turned into enumeration items. Values which are identical apart from being spelled with a lowercase or an uppercase will be combined under the version which is most common, or under the first one if all values are used the same number of times. For example, the values "Test" and "test" will be combined. | Enumeration                                                  |

#### Previewing Associations

After you upload the spreadsheet, worksheets that have relations (associations) are identified.

{{% alert color="info" %}}Associations are not identified if the data is converted to **Integer**. In this case you can either change the column type to **Text** in Excel, or change the type of both columns to **String** when previewing your data. For more information on how to change attribute types, see the [Managing Attribute Types](#managing-attribute-types) section.
{{% /alert %}}

In the **Customize import**, you can check the spreadsheet data before the actual import is completed. You can review tables and columns and untick the ones that you do not want to import. Tables that have relations (associations) detected are indicated with a link icon ({{% icon name="hyperlink" %}}):

{{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/data-preview.jpg" >}}

The columns which have associations cannot be deselected for the import. You need to delete the association first.

To review a list of associations and unselect the ones that you do not want to be created, click **Edit…**. In the **Edit Relations** dialog box, you can see which table and column will be used to create an association **From** and which will be used to create an association **To**. A column with unique data is the one the association goes **to**.

{{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/manage-relations.jpg"   width="500"  >}}

For example, in the image above you can see that an association is created from the **MarketingDocs** entity to the **Contributors** entity. This association was discovered through the column **Responsible** in **MarketingDocs** and the column **Name** in **Contributors**.  As a result, when data is imported, the **MarketingDocs** entity does not have **Responsible** as an attribute. Instead, it has an association with the **Contributors** entity and gets data from this entity through the association.

{{% alert color="info" %}}
A column can be used to create an association **from** it once only. If an association is created to lead **from** a column, no link can be created as a link **to** it.
{{% /alert %}}

#### Managing Attribute Types {#managing-attribute-types}

At the bottom of each column (that will be turned into an attribute), an attribute type is automatically identified and indicated. Click the drop-down menu to change the attribute type. For more information on how Excel data types correspond to attribute types, see [Correspondence between Excel Data Types and Attribute Types](#excel-type-attribute-type).

{{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/attribute-type-drop-down.jpg" >}}

If columns have empty values, the attribute type will be identified as **String**. However, if you change it to another attribute type, Studio Pro automatically chooses and fills in a default value for the following attribute types:

* Booleans – empty values are converted to **False**
* Long and integer – empty values are converted to **0**

#### The Option to Generate Pages for My Data

You can select or unselect the **Generate pages for my data** option at the bottom of the **Data Import Preview**.

If this option is selected, it generates an overview page with a data grid and an **{EntityName}__NewEdit** page for each entity. For more information, see the [Generating Pages](#generating-pages) section below.

### Your Data after the Import {#after-import}

After you have reviewed all data, click **Import Data** at the bottom of the **Data Import Preview**.

Open the domain model to see the created entities and attributes:

{{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/domain-model-example.jpg"   width="650"  class="no-border" >}}

You can now preview your app and test it out by clicking **Run Locally** ({{% icon name="controls-play" %}}).

### Generating Pages {#generating-pages}

If **Generate overview pages** is selected in the preview page, pages are created based on your spreadsheet. The following changes are made in the page editor or in the navigation document:

* One **{EntityName}_Overview** page per entity is created – a page with a data grid where you can have an overview of this entity's objects

* One **{EntityName}_NewEdit** page per entity is created – a page to create and save a new object of this entity, or to edit the existing objects

* A **Manage data** menu item is created in the navigation with a link to the first **{EntityName}_Overview** page with tabs for each Excel table that allow you to go to the overview pages of other entities:

    {{< figure src="/attachments/refguide/modeling/app-from-spreadsheet/manage-data-page.jpg" class="no-border" >}}

* Your data is transferred to the preview and publish environment. This means when you preview or publish your app, you can view your data there

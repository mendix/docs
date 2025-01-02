---
title: "Create a Data-Driven Test Case"
url: /appstore/partner-solutions/ats/ht-two-create-datadriven-test-case/
description: "Describes how to create data and connect this to a test case."
---

## Introduction

This how-to explains data-driven testing, a functionality of ATS. With data-driven testing, you can run the same test case with different data sheets without manually entering the new information in the case. ATS executes a test case for each record in the primary dataset.

This how-to teaches you how to do the following:

* Create a primary dataset with different datasheets in ATS
* Create an Excel file to upload in ATS
* Create a primary dataset using an Excel file
* Use the primary dataset in a test case
* Understand the result log of a data-driven test case

This how-to uses the Company Expenses app as an example. In the how-to, you will create data for the following fields in the Company Expenses app:

* Amount
* Date
* Type
* Description

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/dataset-fields-company-expenses-app.png" class="no-border" >}}

An example test case is used to illustrate how to connect the dataset to a test case.

## Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Read [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/)

## Creating a Primary Data Set within ATS

The following steps explain how to create a primary dataset within ATS. If you want to create a primary dataset from an Excel file, please see chapter four.

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Test Data** tab.
3. Click **New Data Set**

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/test-cases-data-sets-new-data-set.png" class="no-border" >}}

    When you click the **New Data Set**, the **New Data Set** dialog box opens.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-data-set-dialog.png" class="no-border" >}}

4. Enter a name for your dataset in the **Name** field. Remember that you must find the dataset later, so give it a unique and corresponding name.
5. Enter a description for your dataset in the **Description** field. Providing a clear description of what data is found inside is advisable.
6. Click **Save**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-data-set-dialog-new-expense.png" class="no-border" >}}

### Creating Data Set Fields

The following steps explain how to add dataset fields to your primary dataset.

1. Click the name of the dataset.
2. Click **New Field**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/add-new-field-data-set.png" class="no-border" >}}

3. When you click **New Field**, the **New Field** dialog box opens. Enter **Amount** in the name field. This field represents the expense amount in the Company Expenses app. By using the exact label from the Mendix app, it becomes easier to connect the fields from your dataset to the right action.
4. The amount in the Company Expenses app can only be a number. Select **Number** as the datatype.
5. Click **Save**

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-data-set-field-amount.png" class="no-border" >}}

Repeat steps 1 to 5 for these fields in the Company Expenses app:

* Date
* Type
* Description

The result will look comparable to the image below:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/all-fields-new-expense-data-set.png" class="no-border" >}}

Next, you create a record for the dataset fields.

### Creating Records

To create a record for your dataset fields, follow these steps:

1. Click the **Records** tab.
2. Click **New Record**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/click-new-record.png" class="no-border" >}}

    The **New Record** dialog box opens:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-record-dialog.png" class="no-border" >}}

3. Enter the desired values for each field and click **Save**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/entered-new-record.png" class="no-border" >}}

Repeat step 2 and step 3 as many times as you want. In our example, we create a record for each expense type:

* Accommodation
* Meal
* Other
* Supplies
* Transport

The records look like this:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/all-records-new-expense.png" class="no-border" >}}

You can also update your records from Excel.  For details on how to do this, see [Creating a Primary Data Set with Excel](#create).

## Creating the Excel File {#excel}

The following steps explain how to create the right Excel file and how it should look. You will need this file in [Creating a Primary Data Set with Excel](#create).

1. Open Excel and create a new file. ATS implements the values in the first row as dataset fields and all the rows beyond the first row as records. This is an example:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/excel-sheet-example-ats.png" class="no-border" >}}

2. Create the dataset fields you need:

    * Amount
    * Date
    * Type
    * Description

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/excel-sheet-data-set-fields.png" class="no-border" >}}

3. Now you must add records. Create a record for each expense type available, five in total:

    * Accommodation
    * Meal
    * Other
    * Supplies
    * Transport

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/excel-sheet-add-records-new-expense.png" class="no-border" >}}

4. Save the Excel file so that you can use it in the next section.

## Creating a Primary Data Set with Excel {#create}

The following steps explain how to create and update a primary dataset from an Excel file. You will use the file you created in [4 Creating the Excel File](#excel).

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Test Data** tab.
3. Click **New Data Set**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/test-cases-data-sets-new-data-set.png" class="no-border" >}}

    When you click the **New Data Set**, the **New Data Set** dialog box opens.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-data-set-dialog.png" class="no-border" >}}

4. Enter a name for your dataset in the **Name** field. Remember that you must find the dataset later, so giving it a unique and corresponding name is advisable.
5. Enter a description for your dataset in the **Description** field. Providing a clear description of what data is found inside is advisable.
6. Check the **Create/Update fields from file** box.
7. Select the Excel file you created in [4 Creating the Excel File](#excel).
8. Click **Save**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/new-data-set-dialog-new-expense-excel.png" class="no-border" >}}

Now you have a new primary dataset using an Excel file.

## Updating the Primary Data Set Using an Excel File

To update a primary dataset using an Excel file, follow these steps:

1. Click the name of the dataset.
2. Click the **Records** tab.
3. Click **Export to Excel**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/export-data-set-excel.png" class="no-border" >}}

    You now download an Excel file containing the dataset.

4. Save the file to your local computer so that you can make changes.
5. Change the description of all records to "ATS excel description 1" etc.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/excel-sheet-update-records.png" class="no-border" >}}

6. Click **Import from Excel** inside the **Records** tab:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/import-from-excel-new-records.png" class="no-border" >}}

    This will open the **Import records** dialog box.

7. Select the file you altered in steps 4–5. 
8. Click **Import**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/import-new-records-excel.png" class="no-border" >}}

ATS updates the changed records:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/updated-records-new-expense-data-set.png" class="no-border" >}}

Great! You have updated the primary dataset using an Excel file.

## Connecting the Primary Data Set to Your Test Case

The following steps explain how to connect the primary dataset to your test case. An example test case is used in this chapter. For more information, see [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/).

1. Open your test case and click the **Test Data** tab.
2. Click the arrow icon:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/test-data-tab-test-case-details-page.png" class="no-border" >}}

    The **Select Data Set** dialog box opens.

3. Search for the primary dataset.
4. Select the dataset.
5. Click **Save**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/select-data-set-dialog-new-expense.png" class="no-border" >}}

    Connect the primary dataset to your test case.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/connected-primary-data-set-new-expense.png" class="no-border" >}}

6. Now you need to connect the dataset fields to the right test steps, so click the **Test Steps** tab.
7. Select the test step to which you want to connect a dataset field.
8. Search for and select the first dataset field:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/first-data-set-field-connected-amount.png" class="no-border" >}}

Repeat this process for all the dataset fields you want to connect.

## Data-Driven Results

The following steps explain how to read and understand the results of a data-driven test case. An example is used in which the data-driven test case is already run.

1. Open your app and click the **Test Runs** menu item.
2. Click the result of the data-driven test case.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/test-runs-data-driven-test-case.png" class="no-border" >}}

    This opens the **Result Log** page, where ATS displays the result of each run record.

3. Click one of the results:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/data-driven-test-case-result-log.png" class="no-border" >}}

4. To see the record used by this execution, click the **Data Records** tab:

    This displays all the values in the record:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/data-driven-test-case-data-records.png" class="no-border" >}}

    You can use the breadcrumbs to return to the overview **Result Log**:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-create-datadriven-test-case/result-log-breadcrumb.png" class="no-border" >}}

## Conclusion

You now know how to do the following:

* Create a primary dataset within ATS
* Create an Excel file to upload in ATS
* Create a primary dataset using an Excel file
* Update a primary dataset using an Excel file
* Connect the primary dataset to your test case
* Analyze the result of a data-driven test case

## Next Up

You now learned how to create a dataset and how to use that data in your test case. The next how-to is [How to Use Precondition in Test Cases](/appstore/partner-solutions/ats/ht-two-use-precondition-in-test-cases/). You find an overview of all the how-tos and the structure on the [ATS 2 How-Tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.

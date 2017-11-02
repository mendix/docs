---
title: "Create a Data-Driven Test Case"
parent: "ht-version-2"
description: "Describes how to create data and connect this to a test case."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to explains data-driven testing, a functionality of ATS. With data-driven testing, you can run the same test case with different data sheets without manually entering the new information in the case. ATS executes a test case for each record in the master data set.

**This how-to will teach you  how to do the following**

* Create a master data set with different datasheets in ATS
* Create an Excel file to upload in ATS
* Create a master data set using an Excel file
* Use the master data set in a test case
* Understand the result log of a data-driven test case

This how-to uses the Company Expenses app as an example. In the how-to, you will create data for the following fields in the Company Expenses app:

* Amount
* Date
* Type
* Description

![](attachments/create-datadriven-test-case/dataset-fields-company-expenses-app.png)

An example test case is used to illustrate how to connect the data set to a test case.

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* Read [How to Create a Test Case](create-a-test-case-2)

## 3 Creating a Master Data Set within ATS

The following steps explain how to create a master data set within ATS. If you want to create a master data set from an Excel file, please see chapter four.

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Test Data** tab.
3.  Click **New Data Set**

   ![](attachments/create-datadriven-test-case/test-cases-data-sets-new-data-set.png)

   When you click the **New Data Set**, the **New Data Set** dialog box opens.

   ![](attachments/create-datadriven-test-case/new-data-set-dialog.png)

4. Enter a name for your data set in the **Name** field. Remember that you must find the data set later, so give it a unique and corresponding name.
5. Enter a description for your data set in the **Description** field. Providing a clear description of what data is found inside is advisable.
6.  Click **Save**.

   ![](attachments/create-datadriven-test-case/new-data-set-dialog-new-expense.png)

### 3.1 Creating Data Set Fields

The following steps explain how to add data set fields to your master data set.

1. Click the name of the data set.
2.  Click **New Field**.

    ![](attachments/create-datadriven-test-case/add-new-field-data-set.png)

3. When you click **New Field**, the **New Field** dialog box opens. Enter **Amount** in the name field. This field represents the expense amount in the Company Expenses app. By using the exact label from the Mendix app, it becomes easier to connect the fields from your data set to the right action.
4. The amount in the Company Expenses app can only be a number. Select **Number** as the datatype.
5.  Click **Save**

   ![](attachments/create-datadriven-test-case/new-data-set-field-amount.png)

Repeat steps 1 to 5 for these fields in the Company Expenses app:

* Date
* Type
* Description

The result will look comparable to the image below:

![](attachments/create-datadriven-test-case/all-fields-new-expense-data-set.png)

 Next, you create a record for the data set fields.

### 3.2 Creating Records

The following steps explain how to create a record for your data set fields.

1. Click the **Records** tab.
2. Click **New Record**.

![](attachments/create-datadriven-test-case/click-new-record.png)

The **New Record** dialog box opens.

![](attachments/create-datadriven-test-case/new-record-dialog.png)

3. Enter the desired values for each field and click **Save**.

![](attachments/create-datadriven-test-case/entered-new-record.png)

Repeat step 2 and step 3 as many times as you want. In our example, we create a record for each expense type.
* Accommodation
* Meal
* Other
* Supplies
* Transport

The records look like this:

![](attachments/create-datadriven-test-case/all-records-new-expense.png)

You can also update your records from excel. This is explained in chapter five.

## 4 Create the Excel File

The following steps explain how to create the right excel file and how it should look. You need this file in chapter five.

1. Open Excel and create a new file.

ATS implements the values in the first row as data set fields and all the rows beyond the firs row as records. See the example below.

![](attachments/create-datadriven-test-case/excel-sheet-example-ats.png)

2. First you create the data set fields you need. 
    * Amount
    * Date
    * Type
    * Description

![](attachments/create-datadriven-test-case/excel-sheet-data-set-fields.png)

3. Now that you created the data set fields, you must add records. Create a record for each expense type available, five in total.
    * Accommodation
    * Meal
    * Other
    * Supplies
    * Transport

![](attachments/create-datadriven-test-case/excel-sheet-add-records-new-expense.png)

4. Now save the excel file so that you can use it in the next chapter.

## 5 Create a Master Data Set with Excel

The following steps explain how to create and update a master data set from an excel file. You use the file you created in chapter four.

1. Open your app in ATS and go to the **Test Cases** menu item.
2. Click the **Test Data** tab.
3. Click **New Data Set**

![](attachments/create-datadriven-test-case/test-cases-data-sets-new-data-set.png)

When you click the **New Data Set**, the **New Data Set** dialog box opens.

![](attachments/create-datadriven-test-case/new-data-set-dialog.png)

4. Enter a name for your data set in the **Name** field. Remember that you must find the data set later so giving it a unique and corresponding name is advisable.
5. Enter a description for your data set in the **Description** field. Providing a clear description of what data is found inside is advisable.
6. Check the **Create/Update fields from file** box.
7. Select the excel file you created in chapter four.
8. Click **Save**.

![](attachments/create-datadriven-test-case/new-data-set-dialog-new-expense-excel.png)

Now you created a new master data set using an excel file.

## 6 Update the master data set using an excel file.

The following steps explain how to update a master data set using an excel file.

1. Click the name of the data set.
2. Click the **Records** tab.
3. Click **Export to Excel**.

![](attachments/create-datadriven-test-case/export-data-set-excel.png)

You now download an excel file containing the data set. 

4. Save the file to your local computer so that you can make changes.
5. Change the description of all records to "ATS excel description 1" etc.

![](attachments/create-datadriven-test-case/excel-sheet-update-records.png)

6.  Click **Import from Excel** inside the **Records** tab.

![](attachments/create-datadriven-test-case/import-from-excel-new-records.png)

The **Import records** dialog box opens.

7. Select the file you altered in step 4 and step 5. 
8. Click **Import**.

![](attachments/create-datadriven-test-case/import-new-records-excel.png)

ATS now updated the changed records.

![](attachments/create-datadriven-test-case/updated-records-new-expense-data-set.png)

You now updated the master data set using an excel file.

## 7 Connect the Master Data Set to your Test Case

The following steps explain how to connect the master data set to your test case. An example test case is used in this chapter. See [How to Create a Test Case](create-a-test-case-2) for more information.

1. Open your test case and click the **Test Data** tab.
2. Click the arrow icon.

![](attachments/create-datadriven-test-case/test-data-tab-test-case-details-page.png)

The **Select Data Set** dialog box opens.

3. Search for the master data set.
4. Select the data set.
5. Click **Save**.

![](attachments/create-datadriven-test-case/select-data-set-dialog-new-expense.png)

Now you connected the master data set to your test case.

![](attachments/create-datadriven-test-case/connected-master-data-set-new-expense.png)

Next, you connect the data set fields to the right test steps.

6. Click the **Test Steps** tab.
7. Select the test step you want to connect a data set field too.
8. Search and select the first data set field.

![](attachments/create-datadriven-test-case/first-data-set-field-connected-amount.png)

Repeat this process for all the data set fields you want to connect.

You now connected the data set fields to the test steps in your test case.

## 8 Data-Driven Results

The following steps explain how to read and understand the results of a data-driven test case. An example is used in which the data-driven test case is already executed.

1. Open your app and click the **Test Runs** menu item.
2. Click the result of the data-driven test case.

![](attachments/create-datadriven-test-case/test-runs-data-driven-test-case.png)

This opens the **Result Log** page. Where ATS displays the result of each executed record.

3. Click one of the results.

![](attachments/create-datadriven-test-case/data-driven-test-case-result-log.png)

4. To see the record used by this execution, click the **Data Records** tab.

This displays all the values in the record.

![](attachments/create-datadriven-test-case/data-driven-test-case-data-records.png)

You can use the breadcrumbs to return to the overview **Result Log**.

![](attachments/create-datadriven-test-case/result-log-breadcrumb.png)

You now know how to do the following:

* Create a master data set within ATS.
* Create an Excel file to upload in ATS.
* Create a master data set using an excel file.
* Update a master data set using an excel file.
* Connect the master data set to your test case.
* Analyse the result of a data-driven test case.

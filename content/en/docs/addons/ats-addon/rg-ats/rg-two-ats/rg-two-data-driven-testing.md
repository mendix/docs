---
title: "Data-Driven Testing"
url: /addons/ats-addon/rg-two-data-driven-testing/
---

## 1 Introduction

Data-driven testing in ATS allows you to run tests using tables of data as direct test input. This way, you test different input values without having to write extra tests.

Datasets are easy to create and maintain, so you can add more values later on without changing your test cases.

You can access the **Test Data** tab from the **Test Cases** page. Here you create a dataset by clicking **New Data Set**. A dialog box opens, where you give the dataset a name and an optional description.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-data-driven-testing/test-data-tab.png" >}}

Datasets consist of one or more fields and records. You can think of fields as columns in a table. Corresponding to that, records are the rows in a table and represent the values of a field.

Fields can have following data types: text or number.

| Name   | Description                              |
| ------ | ---------------------------------------- |
| Field  | A column of a table for specific data (for example, *username*. |
| Record | A row in a data table containing a text or number value. |

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-data-driven-testing/test-data.PNG" >}}

## 2 Using Test Data in Test Cases

To use your datasets in test cases, you need to select a **Master dataset** under the **Test Data** tab inside a test case. Click the arrow to open the **Select Data Set** dialog box.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-data-driven-testing/master-data-set.png" >}}

You can only select one master dataset at a time per test case. Your selected dataset affects which fields you can use as parameters in your selected test case. You can only choose fields that are in the selected master dataset. On execution, ATS picks the corresponding record values for each field.

{{% alert color="info" %}}

If you connect a dataset with a test case, ATS executes a session for each record row in the dataset. For example, if there are three rows, ATS executes three sessions.

{{% /alert %}}


### 2.1 Execution type for data driven test cases

For data driven test cases you have the option between parallel/sequential execution. If this is set to parallel, ATS tries to run all the sessions (one for each record) of your test case in parallel. This is limited through the concurrency limit of your Selenium hub. When the sequential option is chosen, the sessions run in succession, one after the other.
Use the sequential execution in order to prevent the tests to interfere with each other by manipulating data at the same time.

## 3 Importing and Exporting Datasets

When creating and editing a dataset, select the **Create/Update fields from file** option to provide a template Excel file. Create or update fields and records of your dataset using this Excel file. ATS recognizes the first row of the Excel sheet as the field names. ATS considers all extra rows as records and also uses them to determine the field data type.

{{% alert color="info" %}}

When importing data from Excel, ATS tries to convert data that doesn't match the expected data type. If a conversion is not possible (for example, from a string to an integer), the resulting value is empty. Always check your data after import to ensure all the data was completely imported.

{{% /alert %}}

Export a dataset to Excel by clicking **Export to Excel**.

## 4 Exporting a Test Case

When exporting a test case that has a dataset assigned to it, ATS also exports that connection. ATS automatically looks for the same dataset when importing that test case. If no such dataset exists yet, ATS connects it when created.

## 5 Error Types

There are two error types that can occur when setting a dataset. These are described below.

ATS lists the test step and parameter for each error for easy identification.

### 5.1 Missing fields

For this type of error, fields are shown that are not in the selected master dataset currently used in the test case.

### 5.2 Incompatible Data Types

For this error type, parameters are shown that need a different data type than the data type of the field.

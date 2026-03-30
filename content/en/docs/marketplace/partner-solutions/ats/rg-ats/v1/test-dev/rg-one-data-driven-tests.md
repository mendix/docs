---
title: "Data-Driven Tests"
url: /appstore/partner-solutions/ats/rg-one-data-driven-tests/
weight: 8
---

## Introduction

Data Driven Testing in ATS allows you to run tests using tables of data directly as test inputs. This way you can test an array of different input values without having to write additional tests. Datasets are easy to create and maintain, so you can add additional data records later on without changing your test cases.

Please see the Data Driven testing section for information on how to create datasets to use in your tests.

To use your datasets in test cases you need to select a *Master dataset* under the *Test Data* tab inside a test case. You can only select one primary dataset at a time per test case. Your selected dataset affects which fields you can use as parameters in your selected test case. You can only choose fields that are in the selected primary dataset.

## Page

When you run a test with a dataset field set as a parameter a new test will be run for every record in the dataset.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-data-driven-tests/21168190.png" alt="Set primary dataset inside a test case" class="no-border" >}}

The page also gives an overview over the selected dataset:

**Master dataset**

The currently selected dataset. Here you can change the dataset

**Available field in Test Accounts**

Shows the fields available in the selected set and their data types

There are 2 error types that can occur when setting a dataset:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-data-driven-tests/21168191.png" alt="Errors when setting dataset" class="no-border" >}}

**Missing fields**

Shows fields that are not in the selected primary dataset that are currently used in the test case.

**Incompatible datatypes**

Shows parameters that require a different data type than the datatype of the field.

For each error the test step and parameter are listed so they can be easily identified.

{{% alert color="info" %}}
If you change the selected dataset the system will remember your set parameters and will match them again if you select a dataset containing the same field names.
{{% /alert %}}

When you have selected a primary dataset you can use the contained field as input values for your test steps.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/test-dev/rg-one-data-driven-tests/21168192.png" alt="Setting a filed as input value" class="no-border" >}}

**Exporting a Test Case**

When exporting a test case that has a dataset assigned to it, the name of the dataset will be exported with it. When importing the test case a dataset with the same name will be automatically assigned to it. If no such dataset exists it will be assigned when you create it.

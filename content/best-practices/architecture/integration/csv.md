---
title: "Example – File Import with CSV"
parent: "batch-integration"
menu_order: 2
draft: true
---

## 1 Introduction

This integration pattern has been implemented by a Mendix Expert. It will soon be packaged as a [Mendix App Store](https://appstore.home.mendix.com/index3.html) module that can be downloaded and used in your app projects.

Importing by file using the CSV format is widely used in the following scenarios:

* Importing larger volumes of data
* Importing reference data
* Importing data from legacy systems

This diagram shows the main steps of this pattern – extracting/exporting to file, moving the file, then loadint/importing the file:

![](attachments/csv/csv-import.png)

### 1.1 When to Use CSV Files

CSV is supported by a broad range of systems including Excel and Access, so it is the most frequently used file format. The following conditions should be considered for using CSV as a format for transferring data:

* When there is a large volume of data (for example, > 1 million records)
* When  the structure is relatively flat and can be formatted as a table
* For moderately nested structures, multiple CSV files are required, and objects are linked by functional IDs
* For complex structured data, XML files are better

### 1.2 How We Built This Project

This project is fully self-contained and contains all the tests and data.

The reference case shows the following scenarios:

* Import for creating or updating records
* Import for creating, updating, and deleting records

## 2 Recommendations

* Keep track of which records are imported in your current run
	* This way, it is easy to determine which records have been deleted since the previous import
	* Reference implementation – the **Product.ImportReference** is set to a string determined at the beginning of an import

	![](attachments/csv/do1.png)

* Use an intermediate format (non-persistent entity) to read lines from the CSV
	* This introduces a loose coupling between the read structure and the functional domain model
	* Reference implementation – the **Book** entity reflects the CSV structure while the **Product** entity is entity used in the application’s logic

	![](attachments/csv/do2.png)

* Use a functional key to uniquely identify an object
	* This can be used to determine if an object is new or should be updated
	* Reference implementation – the attribute **Product.ISBN** is used as the functional key

	![](attachments/csv/do3.png)

* Apply unique validation on the functional key	
	
	* Reference implementation – the attribute **Product.ISBN** has unique validation
* Commit the imported lines in batches and find the correct batch size (for example, 20,000 items)
	* This optimizes database activity and memory consumption
	* Reference implementation – the **CSV_ImportBooks** microflow contains a list of    Products (**ProductBatch**) that will be committed and cleared for each 20,000 imported products

	![](attachments/csv/do4.png)

* Print the progression in the log
	* Reference implementation – within the `CSV_\*` microflows, the progression is printed in the logs every 20,000 lines

	![](attachments/csv/do5.png)

* In case of an error, the logging should contain information for obtaining the invalid source data (for example, a line number)
	* This helps in troubleshooting data quality or processing issues
	* Reference implementation – within the `CSV_\*` microflows, the line number is     incremented after each read line, and an error is printed if the processing caused an error

	![](attachments/csv/do6.png)

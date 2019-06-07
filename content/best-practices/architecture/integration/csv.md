---
title: "Example – File Import with CSV"
parent: "batch-integration"
menu_order: 2
draft: true
---
## 1 Introduction

This integration pattern has been implemented by a Mendix Expert. It will soon be placed in an App Store module that can be downloaded from the **Best Practices** section as **Integration Pattern: File Import (CSV)**.

Importing by file using the CSV format is widely used to:

1. Import larger volumes of data. 
2. Import reference data
3. Import data from legacy systems

The diagram shows the main steps of this pattern: Export to file, move file, Import file.

![](attachments/csv/csv-import.png)

### 1.1 When to use CSV files?

CSV is supported by a broad range of systems including Excel and Access, so it the most frequently used file format. The following conditions should be considered for using CSV as a format for transferring data:

* When there is a large volume of data, for example > 1m records
* When  structure is relatively flat and can be formatted as a table
** For moderatelly nested structures multiple CSV files are required. Objects are linked by functional IDs
** For complex structured data, XML files files are better

{{% todo %}}[**LAST SENTENCE IS INCOMPLETE**]{{% /todo %}}

### 1.2 How We Built This Project

The project is fully self-contained. It contains all the tests and data, and it should be ready to use.

The reference case shows the following scenario’s:

1. Import for create or update of records
2. Import for create, update and deletion of records

## 2 Recommendtions

* Keep track of which records are imported in your current run
	* This way, it is easy to determine which records have been deleted since the previous import
	* Reference implementation: **Product.ImportReference**, which is set to a string determined at the beginning of an import

	![](attachments/csv/do1.png)

* Use an intermediate format (non-persistent entity) to read lines from the CSV
	* This introduces a loose coupling between the read structure and the functional domain model
	* Reference implementation: the **Book** entity reflects the CSV structure while the **Product** entity is entity used in the application’s logic

	![](attachments/csv/do2.png)

* Use a functional key to uniquely identify an object
	* This can be used to determine if an object is new or should be updated
	* Reference implementation: the attribute **Product.ISBN** is used as the functional key

	![](attachments/csv/do3.png)

* Apply unique validation on the functional key

  * Reference implementation: the attribute **Product.ISBN** has unique validation
* Commit the imported lines in batches and find the correct batch size for example, 20,000)
	* This optimizes database activity and memory consumption
	* Reference implementation: the **CSV_ImportBooks** microflow contains a list of    Products **(ProductBatch**) that will be committed and cleared for each 20,000 imported Products

	![](attachments/csv/do4.png)

* Print the progression in the log.
	* Reference implementation: within the `CSV_\*` microflows, progression is printed in the logs every 20,000 lines

	![](attachments/csv/do5.png)

* In case of an error, logging should contain information to obtain the invalid source data (for example, a line number)
	* This helps in troubleshooting data quality or processing issues
	* Reference implementation: within the `CSV_\*` microflows, the line number is     incremented after each read line, and an error is printed if processing caused an error

	![](attachments/csv/do6.png)

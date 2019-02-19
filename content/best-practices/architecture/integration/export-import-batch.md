---
title: "Exporting, Importing & Batching"
parent: "integration-use-cases"
menu_order: 1
draft: true
---

**NEEDS STAGE 4 & STAGE 5 REVIEW.**

## Introduction

This document describes some Best Practices around importing and exporting data to/from a Mendix App.

## Integration – Export, Import, Batch

### About this Document

This document is intended for a Mendix developer that already has some level of experience, and wants to improve import to or export from a Mendix App.

(At this stage it is only for internal review by members of the architecture guild before publishing it on the public Best Practices section)

## Bulk import and export with Mendix

### Conceptual explanation of the use case

The import and export of data is the automated or semi-automated input and output of data sets between different applications.

More and more processes become real-time, but a lot of business processes are still periodic in nature, e.g. salary payments, interest calculations. These use-cases are best implemented in batch-oriented interfaces.

Batch oriented integration runs a large set of data at a certain moment. Interfaces towards DWH and BI are often bulk and/or snap-shot oriented. The same is true for initial loads of systems, or distribution of reference data.

Importing and exporting large portions of data will stay important over time. It allows systems to be decoupled, transfer data at moments when it doesn&#39;t influence other running processes and can have workflows to handle errors.

Processing data in bulk allows more optimization and can therefore be made CPU efficient. If it is periodic, it can usually be done at night, when other load is much lower to avoid interference of running other processes.

### Why and when to use it

Batch imports are often applied when data

- Is of a high volume
- Has a low rate of change

Imports and exports are often executed on a scheduled basis or manual invocation (instead of trigger or event based).

Besides a mechanism to import or export data, one requires a (safe) manner of transportation of data between source and target system. Mendix supports various manners of transportation (e.g. (S)FTP, HTTP, File (disk) access and many others). Transportation is not within the scope of this best practice.

Characteristics of a typical batch import or export case are:

- It&#39;s run periodically (suitable as scheduled event).
- High volume transfer.
- The data has the scope of a full entity (all records).
- Can be optimized for performance.

### How to use it

To apply this use case the following elements are typically needed:

1. 1A defined format to exchange data (e.g. CSV, XML, Excel, Fixed Delimited).
2. 2A manner of transporting the data (e.g. (S)FTP, HTTP, File (disk) access).
3. 3Possible interpretation (e.g. masks for complex fields or logic to interpret an expected date format).
4. 4Possible transformation (e.g. associate an imported Address to master data Country).

### Do's

- Uniquely identify records and store it in the application (to be able to update later; if applicable).
- Index unique identifiers.
- Import data when less other processes are running to avoid interference.
- Consider a strategy to handle deleted data (e.g. mark as deleted and keep in the database or remove during the import).
- Think of correct error handling (e.g. should only a single object fail or the complete batch).
- Preserve a trail of import/export statistics (e.g. how many records were new, changed, removed or exported).
- Implement a process to verify if imports are running successfully. If not, most of the time there should be an action taken (e.g. requesting a record to be resent from source or a correction of data).

### Don'ts

- Apply batch imports/exports when data is expected to be updated in real-time.
- Apply heavy batch processing during peak hours of system usage.

## Technology options with the Mendix Platform

The following patterns are suitable options for batch import/export:

- Batch
  - File (e.g. CSV, Excel, XML).
  - Database (e.g. JDBC).
- RPC
  - REST
  - SOAP
  - OData

### When to apply which option

The technology chosen is often limited by the environment (e.g. remote system only exports its data in a certain manner).

| ** ** | **Pro&#39;s** | **Cons** |
| --- | --- | --- |
| **Batch** |  Export/Import is part of Batch integration |   |
| **File** | Large volume in one transaction. | Intermediate transfer required (e.g. SFTP). |
| **Database** |   | Connectivity to database required. |
| **RPC** |   | Multiple requests pagination / transactions
 |
| **REST** | Using standard HTTP(S) connectivity.
Part of Mendix Core. |   |
| **SOAP** | Using standard HTTP(S) connectivity.
Part of Mendix Core. |   |
| **OData** | Using standard HTTP(S) connectivity.
Part of Mendix Core. | Doesn&#39;t support binary interface. |

## Reference integration pattern: File import (CSV)

_The integration pattern has been implemented in an App Store module. It can be downloaded at the Best Practices section as Integration Pattern: File Import (CSV)._

Importing by file using the CSV format is a widely used manner to import larger volumes of reference data. It is both a simple and popular format to exchange data between systems, often also supported by (old) legacy systems.

### Why and when to use it

The following arguments can be used to consider CSV as format to transfer data:

- If the structure is relatively flat and can be formatted as a table (for nested structures XML can be easier. As a workaround nested structures can be assembled as multiple CSV files).
- If the data matters a large volume (e.g. 1M+ records).
- It is supported by a broad range of systems (from Excel, Access to

### How did we build it

The project is fully self-contained. It contains all tests and data and should be ready to use.

The reference case shows the following scenario&#39;s:

1. Import having create or update
2. Import having create, update or delete

### Do&#39;s

- Keep track of which records are imported in your current run. This way, it is easy to determine which records have been deleted since the previous import.

_Reference implementation: Product.ImportUID which is set to a string which is determined at the beginning of an import._

- Use an intermediate format (non-persistent entity) to read lines from the CSV. This introduces a loose coupling between the read structure and the functional domain model.

_Reference implementation: the Book entity reflects the CSV structure while the Product entity is entity used in the application&#39;s logic._

- Use a functional key to uniquely identify an object. This can be used to determine if an object is new or should be updated.

_Reference implementation: the attribute Product.ISBN is used as functional key._

- Apply unique validation on the functional key.

_Reference implementation: the attribute Product.ISBN has unique validation._

- Commit imported lines in batches and find the correct batch size (e.g. 20000). This optimizes database activity and memory consumption.

_Reference implementation: the microflow CSV\_ImportBooks contains a list of Products (ProductBatch) which will be committed and cleared for each 20000 imported Products._

- Print progression in log.

_Reference implementation: within the CSV\_\* microflows, progression is printed in the logs at each 20000 lines._

- In case of an error, logging should contain information to obtain the invalid source data (e.g. a linenumber). This helps troubleshooting data quality or processing issues.

_Reference implementation: within the CSV\_\* microflows, the linenumber is incremented after each read line and an error is printed if processing caused an error._
---
title: "Export, Import & Batch Processing"
parent: "integration-use-cases"
menu_order: 1
draft: true
---

## 1 Export, Import & Batch Processing Use Case

The importing and exporting of data is the automated or semi-automated input and output of datasets between different applications. More and more processes are becoming real-time, but a lot of business processes are still periodic in nature (for example, salary payments and interest calculations). These use cases are best implemented in batch-oriented interfaces.

Batch-oriented integration runs large sets of data at certain moments. Interfaces towards DWH and BI are often bulk and/or snapshot oriented. The same is true for initial loads of systems or the distribution of reference data.

Importing and exporting large portions of data will stay important over time. This allows for decoupling systems and for transferring data at moments when it does not influence other running processes and there are workflows in place to handle errors.

Processing data in bulk allows for more optimization and can therefore be made CPU-efficient. If this is periodic, it can usually be done at night, when other load is much lower in order to avoid the interference of running other processes.

### 1.1 Characteristics of Batch Import & Export

* Run periodically (suitable as a scheduled event)
* High volume transfer
* Data has the scope of a full entity (all records)
* Can be optimized for performance

### 1.2 When & Why to Use This Use Case

Batch imports are often applied when data

-   Is of a high volume

-   Has a low rate of change

Imports and exports are often executed on a scheduled basis or manual invocation
(instead of trigger or event based).

Besides a mechanism to import or export data, one requires a (safe) manner of
transportation of data between source and target system. Mendix supports various
manners of transportation (e.g. (S)FTP, HTTP, File (disk) access and many
others). Transportation is not within the scope of this best practice.

### 1.3 How to Use This Use Case

To apply this use case the following elements are typically needed:

1.  A defined format to exchange data (e.g. CSV, XML, Excel, Fixed Delimited).

2.  A manner of transporting the data (e.g. (S)FTP, HTTP, File (disk) access).

3.  Possible interpretation (e.g. masks for complex fields or logic to interpret
    an expected date format).

4.  Possible transformation (e.g. associate an imported Address to master data
    Country).

## 2 Do's & Don'ts

### 2.1 Do’ s

-   Uniquely identify records and store it in the application (to be able to
    update later; if applicable).

-   Index unique identifiers.

-   Import data when less other processes are running to avoid interference.

-   Consider a strategy to handle deleted data (e.g. mark as deleted and keep in
    the database or remove during the import).

-   Think of correct error handling (e.g. should only a single object fail or
    the complete batch).

-   Preserve a trail of import/export statistics (e.g. how many records were
    new, changed, removed or exported).

-   Implement a process to verify if imports are running successfully. If not,
    most of the time there should be an action taken (e.g. requesting a record
    to be resent from source or a correction of data).

### 2.2 Don’ts

-   Apply batch imports/exports when data is expected to be updated in
    real-time.

-   Apply heavy batch processing during peak hours of system usage.

## 3 Technology Options with the Mendix Platform

The following patterns are suitable options for batch import/export:

-   Batch

    -   File (e.g. CSV, Excel, XML).

    -   Database (e.g. JDBC).

-   RPC

    -   REST

    -   SOAP

    -   OData

### 3.1 When to Apply Each Technology Option

The technology chosen is often limited by the environment (e.g. remote system
only exports its data in a certain manner).

|              | **Pro’s**                                                 | **Cons**                                    |
|--------------|-----------------------------------------------------------|---------------------------------------------|
| **Batch**    |  Export/Import is part of Batch integration               |                                             |
| **File**     | Large volume in one transaction.                          | Intermediate transfer required (e.g. SFTP). |
| **Database** |                                                           | Connectivity to database required.          |
| **RPC**      |                                                           | Multiple requests pagination / transactions |
| **REST**     | Using standard HTTP(S) connectivity. Part of Mendix Core. |                                             |
| **SOAP**     | Using standard HTTP(S) connectivity.                      |                                             |
|              | Part of Mendix Core.                                      |                                             |
| **OData**    | Using standard HTTP(S) connectivity.                      | Doesn’t support binary interface.           |
|              | Part of Mendix Core.                                      |                                             |

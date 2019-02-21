---
title: "Export, Import & Batch Processing"
parent: "integration-use-cases"
menu_order: 1
draft: true
---

Explanation of the use case
---------------------------

The import and export of data is the automated or semi-automated input and
output of data sets between different applications.

More and more processes become real-time, but a lot of business processes are
still periodic in nature, e.g. salary payments, interest calculations. These
use-cases are best implemented in batch-oriented interfaces.

Batch oriented integration runs a large set of data at a certain moment.
Interfaces towards DWH and BI are often bulk and/or snap-shot oriented. The same
is true for initial loads of systems, or distribution of reference data.

Importing and exporting large portions of data will stay important over time. It
allows systems to be decoupled, transfer data at moments when it doesn’t
influence other running processes and can have workflows to handle errors.

Processing data in bulk allows more optimization and can therefore be made CPU
efficient. If it is periodic, it can usually be done at night, when other load
is much lower to avoid interference of running other processes.

### Characteristics of Batch import or export:

-   It’s run periodically (suitable as scheduled event).

-   High volume transfer.

-   The data has the scope of a full entity (all records).

-   Can be optimized for performance.

### Why and when to use it

Batch imports are often applied when data

-   Is of a high volume

-   Has a low rate of change

Imports and exports are often executed on a scheduled basis or manual invocation
(instead of trigger or event based).

Besides a mechanism to import or export data, one requires a (safe) manner of
transportation of data between source and target system. Mendix supports various
manners of transportation (e.g. (S)FTP, HTTP, File (disk) access and many
others). Transportation is not within the scope of this best practice.

### How to use it

To apply this use case the following elements are typically needed:

1.  A defined format to exchange data (e.g. CSV, XML, Excel, Fixed Delimited).

2.  A manner of transporting the data (e.g. (S)FTP, HTTP, File (disk) access).

3.  Possible interpretation (e.g. masks for complex fields or logic to interpret
    an expected date format).

4.  Possible transformation (e.g. associate an imported Address to master data
    Country).

### Do’ s

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

### Don’ts

-   Apply batch imports/exports when data is expected to be updated in
    real-time.

-   Apply heavy batch processing during peak hours of system usage.

Technology options with the Mendix Platform
-------------------------------------------

The following patterns are suitable options for batch import/export:

-   Batch

    -   File (e.g. CSV, Excel, XML).

    -   Database (e.g. JDBC).

-   RPC

    -   REST

    -   SOAP

    -   OData

### When to apply which option

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

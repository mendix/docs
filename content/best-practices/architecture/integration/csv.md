---
title: "CSV File Import Example"
parent: "export-import-batch"
draft: true
---

*The integration pattern has been implemented in an App Store module. It can be
downloaded at the Best Practices section as Integration Pattern: File Import
(CSV).*

Importing by file using the CSV format is a widely used manner to import larger
volumes of reference data. It is both a simple and popular format to exchange
data between systems, often also supported by (old) legacy systems.

### Why and when to use it

The following arguments can be used to consider CSV as format to transfer data:

-   If the structure is relatively flat and can be formatted as a table (for
    nested structures XML can be easier. As a workaround nested structures can
    be assembled as multiple CSV files).

-   If the data matters a large volume (e.g. 1M+ records).

-   It is supported by a broad range of systems (from Excel, Access to

### How did we build it

The project is fully self-contained. It contains all tests and data and should
be ready to use.

The reference case shows the following scenario’s:

1.  Import having create or update

2.  Import having create, update or delete

### Do’s

-   Keep track of which records are imported in your current run. This way, it
    is easy to determine which records have been deleted since the previous
    import.

    *Reference implementation: Product.ImportUID which is set to a string which
    is determined at the beginning of an import.*

-   Use an intermediate format (non-persistent entity) to read lines from the
    CSV. This introduces a loose coupling between the read structure and the
    functional domain model.

    *Reference implementation: the Book entity reflects the CSV structure while
    the Product entity is entity used in the application’s logic.*

-   Use a functional key to uniquely identify an object. This can be used to
    determine if an object is new or should be updated.

    *Reference implementation: the attribute Product.ISBN is used as functional
    key.*

-   Apply unique validation on the functional key.

    *Reference implementation: the attribute Product.ISBN has unique
    validation.*

-   Commit imported lines in batches and find the correct batch size (e.g.
    20000). This optimizes database activity and memory consumption.

    *Reference implementation: the microflow CSV_ImportBooks contains a list of
    Products (ProductBatch) which will be committed and cleared for each 20000
    imported Products.*

-   Print progression in log.

    *Reference implementation: within the CSV_\* microflows, progression is
    printed in the logs at each 20000 lines.*

-   In case of an error, logging should contain information to obtain the
    invalid source data (e.g. a linenumber). This helps troubleshooting data
    quality or processing issues.

    *Reference implementation: within the CSV_\* microflows, the linenumber is
    incremented after each read line and an error is printed if processing
    caused an error.*

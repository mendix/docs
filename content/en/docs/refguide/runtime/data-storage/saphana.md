---
title: "SAP HANA"
url: /refguide/saphana/
weight: 70
---

## Introduction

The behavior of Mendix using an SAP HANA database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## Adding SAP HANA JDBC Driver

Mendix Studio Pro versions 11.15.0 and above, and Mendix Studio Pro version 11.12 ([LTS](/releasenotes/studio-pro/lts-mts/)) patch versions 11.12.5 and above, no longer include the SAP HANA JDBC driver. This is because of licensing issues.

If you deploy your app to SAP BTP using the [Mendix Portal](/developerportal/deploy/sap-cloud-platform/), the driver will be added to your app during deployment. You do not have to take any additional steps.

If you want to test your app locally against a SAP HANA database or deploy it using your own infrastructure, you must add the JDBC driver to your app like any other 3rd party jar file using one of the following two methods:

* Download the SAP HANA JDBC driver manually from [Maven Central](https://central.sonatype.com/artifact/com.sap.cloud.db.jdbc/ngdbc) and add it to the `userlib` folder in your app.
* Use [Managed Dependencies](/refguide/managed-dependencies/) to add a dependency with Group ID `com.sap.cloud.db.jdbc` and Artifact ID `ngdbc`. This adds the driver to the `vendorlib` folder in your app.

Mendix recommends using the latest driver version that has major version 2.

## Behavior of Unlimited and Very Long Strings

### Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

See also [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/).

### Sorting, Grouping, and Aggregating

You cannot sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB (Character Large Object). Consider decreasing the length of the string attribute or removing it from data grids.  

### Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) Unicode characters are supported.

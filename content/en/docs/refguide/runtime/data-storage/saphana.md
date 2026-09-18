---
title: "SAP HANA"
url: /refguide/saphana/
weight: 70
---

## Introduction

The behavior of Mendix using an SAP HANA database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## SAP HANA JDBC driver

Starting with Mendix version 11.15.0 and 11.12.5, we no longer distribute the SAP HANA JDBC driver with Studio Pro, because of licensing issues.

If you deploy your app to [SAP BTP using the Mendix Portal](/developerportal/deploy/sap-cloud-platform/), the driver will be added to your app during deployment. No special treatment is necessary.

If you want to test your app locally against a SAP HANA database or deploy it using your own infrastructure, you will need to add the JDBC driver to your app like any other 3rd party jar file using one of these two methods:
* Download the SAP HANA JDBC driver manually from [Maven Central](https://central.sonatype.com/artifact/com.sap.cloud.db.jdbc/ngdbc) and add it to the `userlib` folder in your app.
* Use [Managed Dependencies](/refguide/managed-dependencies/) to add a dependency with Group ID `com.sap.cloud.db.jdbc` and Artifact ID `ngdbc`. This adds the driver to the `vendorlib` folder in your app.

We recommend using the latest driver version that has major version 2.

## Behavior of Unlimited and Very Long Strings

### Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

See also [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/).

### Sorting, Grouping, and Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

### Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) Unicode characters are supported.

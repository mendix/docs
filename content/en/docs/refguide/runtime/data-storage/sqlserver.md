---
title: "SQL Server"
url: /refguide/sqlserver/
weight: 80
---

## Introduction

The behavior of Mendix using a Microsoft SQL Server database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

See also [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/) for information about setting up a SQL Server database to use with Mendix.

## Behavior of Uniqueness Constraint with Nulls

When an attribute has a [validation rule of **Type** *Unique*](/refguide/validation-rules/#uniqueness), the Mendix runtime creates a uniqueness constraint in the database for the corresponding database column.

If two different objects have a value of `null` for that attribute, SQL Server will treat them as equal and raise a unique constraint violation, causing an error.

Other databases treat all occurrences of `null` as unequal to each other, allowing multiple objects with a `null` value for the attribute.

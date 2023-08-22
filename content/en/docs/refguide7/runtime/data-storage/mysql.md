---
title: "MySQL/MariaDB"
url: /refguide7/mysql/
weight: 50
---

## 1 Introduction

There are some extra considerations you need to take into account if you are implementing a Mendix app using a MySQL or MariaDB database. In addition, the behavior of Mendix using a MySQL or MariaDB database has some minor differences when compared with using a PostgreSQL database.

These considerations and differences are documented below.

## 2 Storage Engine

Mendix only supports the InnoDB storage engine, with row-based logging enabled.

## 3 Transaction Isolation

Mendix uses the `Read Committed` transaction isolation level by default, starting with the release of Mendix 7.2. Only row-based logging can be used in the case of this transaction isolation level. You should set the `binlog_format` database configuration value to `ROW` or `MIXED`. For more information, see [`binlog_format` for MySQL](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format) or [`binlog_format` for MariaDB](https://mariadb.com/kb/en/replication-and-binary-log-system-variables/#binlog_format).

## 4 SAVEPOINT Exception Does Not Exist

If you receive a `SAVEPOINT unnamed does not exist` exception, a deadlock has occurred. Mendix cannot correctly handle this situation because MySQL/MariaDB automatically rolls back the transaction and removes all the save points for that transaction. Mendix tries to roll back to a specific save point, but that is not allowed anymore by MySQL and MariaDB. Avoiding deadlocks by keeping transactions as short as possible is advised.

## 5 Time Zone Support

Mendix supports functionality to extract a part of a date and time in a query. In XPath, you can use functions like [`hours-from-dateTime`](/refguide7/xpath-hours-from-datetime/) and [`week-from-dateTime`](/refguide7/xpath-week-from-datetime/). In OQL, you can use functions like [`DATEPART(..)`](/refguide7/oql-datepart/) and [`DATEDIFF(..)`](/refguide7/oql-datediff/). 

In Mendix, DateTimes are stored in the UTC time zone. For these functions to work correctly, it is important that the database supports converting dates and times from UTC to another time zone. If this is not possible, the functions will operate on the date and time in the UTC time zone. That can lead to incorrect results if the user expects the date to work in their time zone.

MySQL does not fully support time zone conversion out-of-the-box. You have to fill in some time zone tables (for more details, see [5.1.15 MySQL Server Time Zone Support](http://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html)). You do not have to do this if you do not use this sort of function in your queries, or if you always want to work with UTC dates and times.

MariaDB supports an identical configuration for time zone conversions.

## 6 Database Creation

New MySQL database creation is supported for Mendix 7.18 and above. The user must have enough access rights to be able to create a database.

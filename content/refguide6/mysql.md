---
title: "MySQL/MariaDB"
parent: "data-storage"
---
Mendix only supports the InnoDB storage engine, with row-based logging enabled.

## Transaction Isolation

Mendix uses the `Read Committed` transaction isolation level by default starting with the release of 6.10.6 (for version 6; for Mendix 7, usage is from Mendix 7.2). Only row-based logging can be used in the case of this transaction isolation level. You should set the `binlog_format` database configuration value to `ROW` or `MIXED`. For more information, see the details on `binlog_format` [here](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_format) and [here](https://mariadb.com/kb/en/mariadb/replication-and-binary-log-server-system-variables/#binlog_format).

### The SAVEPOINT Exception Does Not Exist

In the case of the "SAVEPOINT unnamed does not exist" exception, a deadlock has occurred. Mendix cannot correctly handle this situation, because MySQL/MariaDB automatically rolls back the transaction and removes all the save points for that transaction. Mendix tries to roll back to a specific save point, but that is not allowed anymore by MySQL and MariaDB. Avoiding deadlocks by keeping transactions as short as possible is advised.

## Time Zone Support

Mendix supports functionality to extract a part of a date and time in a query. In XPath, you can use functions like [`hours-from-dateTime`](xpath-hours-from-datetime) and [`week-from-dateTime`](xpath-week-from-datetime). In OQL, you can use functions like [`DATEPART(..)`](oql-datepart) and [`DATEDIFF(..)`](oql-datediff). 

In Mendix, DateTimes are stored in the UTC time zone. For these functions to work correctly, it is important that the database supports converting dates and times from UTC to another time zone. If this is not possible, the functions will operate on the date and time in the UTC time zone. That can lead to incorrect results if the user expects the date to work in their time zone.

MySQL does not fully support time zone conversion out-of-the-box. You have to fill in some time zone tables (for more details, see [10.6 MySQL Server Time Zone Support](http://dev.mysql.com/doc/refman/5.5/en/time-zone-support.html)). However, if you do not use the previously mentioned functions in your queries or if you always want to work with UTC dates and times, then it is not necessary to configure your MySQL database for this.

MariaDB supports an identical configuration for time zone conversions.

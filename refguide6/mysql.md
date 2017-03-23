---
title: "MySQL/MariaDB"
space: "Reference Guide 6"
parent: "data-storage"
---
Mendix introduced support for MySQL 5.5 in Mendix 5.12, and support for MariaDB 5.5\. in Mendix 5.16.
Mendix only supports the InnoDB storage engine, with row-based logging enabled.

## Transaction isolation
Mendix uses the Read Committed transaction isolation level by default since Mendix 6.10.6 and 7.2. Only row-based logging can be used in case of this transaction isolation level. You should set the binlog_format database configuration value to ROW or MIXED. For more information, see:

https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_format
https://mariadb.com/kb/en/mariadb/replication-and-binary-log-server-system-variables/#binlog_format

#### Exception SAVEPOINT does not exist
In case of exception 'SAVEPOINT unnamed does not exist', a deadlock has occurred. Mendix cannot correctly handle this situation, because MySQL/MariaDB automatically rollbacks the transaction and removes all the savepoints for the rollbacked transaction. Mendix tries to rollback to a specific savepoint, but that is not allowed anymore by MySQL and MariaDB. It is advisable to avoid deadlocks by keeping transactions as short as possible.

## Time zone support

Mendix supports functionality to extract a part of a date and time in a query. In XPath, you can use functions like `[hours-from-dateTime](xpath-hours-from-datetime)` and [`week-from-dateTime`](xpath-week-from-datetime). In OQL, you can use functions like `[DATEPART(..)](oql-datepart)` and `[DATEDIFF(..)](oql-datediff)`. In Mendix, DateTimes are stored in the UTC time zone. For a correct working of these functions, it is important that a database supports converting dates and times from the UTC time zone to another time zone. If this is not possible, the functions will operate on the date and time in the UTC time zone. That can lead to incorrect results if a user expects the date part to work in his time zone.

MySQL does not fully support time zone convertion out-of-the-box. You have to fill some time zone tables. [See this page](http://dev.mysql.com/doc/refman/5.5/en/time-zone-support.html) for more information about this. However, if you do not use the previously mentioned functions in your queries or if you always want to work with UTC dates and times, then it is not necessary to configure your MySQL database for this.

MariaDB supports an identical configuration for time zone conversions.

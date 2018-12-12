---
title: "Oracle"
parent: "data-storage"
---

## Known Issues

### Numeric Conversion

There is a known bug in older versions of Oracle 11.2 where converting numeric attributes to string attributes with a length greater than 80 leads to corrupted data on existing rows.

This problem is fixed in Oracle 11.2.0.4\. See [https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8](https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8) and [http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2](http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2).

### Select DISTINCT Attribute of Type CLOB

Selecting DISTINCT attributes of type String and size > 2000 characters is not supported by Mendix due to a known Oracle limitation of selecting DISTINCT columns with a CLOB data type. When you run into this limitation, you may encounter an exception in the logs with a message like this:

`Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small`

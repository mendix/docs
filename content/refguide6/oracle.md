---
title: "Oracle"
parent: "data-storage"
---
## Known issue

There is a known bug in older versions of Oracle 11.2 where converting numeric attributes to string attributes with a length greater than 80 leads to corrupted data on existing rows.

This problem is fixed in Oracle 11.2.0.4\. See [https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8](https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8) and [http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2](http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2).

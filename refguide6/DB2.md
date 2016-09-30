---
title: "DB2"
space: "Reference Guide 6"
parent: "Data+Storage"
---
Mendix supports running on IBM DB2 databases since Mendix 6.8.

## Page size of the table space

To allow Mendix to run on DB2, it is very important that the user table space has a page size of at least 8K, but preferably 32K. The reason is that Mendix uses national character strings (NVARCHAR or VARCHAR with string units CODEUNIT32). This data type consumes more space than an octets-based VARCHAR. For the system administration, Mendix always creates some tables with indexes which require at least a table space page size of 8K.

### Exception with SQL Code -614

If the index is too big for the page size, DB2 will throw an exception:

`com.ibm.db2.jcc.am.SqlException: DB2 SQL Error: SQLCODE=-614, SQLSTATE=54008, SQLERRMC=some_index_name`

For user-created indexes, if the combined length of the specified columns in the index is greater than the max key length, then you should also increase the page size of the table space.

See here for more detailed information: [https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00614n.html](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00614n.html)

## Known issues

### Sort on very long strings

It is not possible to sort on unlimited strings or strings with a specified length greater than 8192\. The reason is that long or unlimited strings are implemented with the data type NCLOB. DB2 does not allow sorting on columns with this data type. Technically, it is possible to cast this type during the execution of the query to a normal VARCHAR type and sort on this, but this increases the execution time. The question is if it is really user friendly to show such long strings in a data grid. Consider decreasing the length of the string attribute or removing it from data grids. 

### Order By a correlated scalar fullselect or a function with an external action

According to the official IBM DB2 [documentation](https://www.ibm.com/support/knowledgecenter/SS6NHC/com.ibm.swg.im.dashdb.sql.ref.doc/doc/r0059211.html), ORDER BY a correlated scalar fullselect (SQLSTATE 42703) or a function with an external action (SQLSTATE 42845) is not supported by DB2\. Taking this limitation into account, ordering by associated attribute is not supported when a Mendix application is backed by DB2\. Thus, any associated attribute which is used for ordering is filtered out from a query and a result set is returned as if ordering by the associated attribute had not been presented in the query.

### Non-blocking read-isolated streaming with OData

According to the official IBM DB2 [documentation](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.admin.perf.doc/doc/c0004121.html), non-blocking read-isolated queries are not supported by DB2\. The default behavior of DB2 is that when one user is retrieving rows from a table, and another user is making modifications on the same table at the same time, then those modifications will show up in the data in the retrieve query (that means database reads are not isolated). Configuring a stricter transaction isolation level to prevent this behavior puts locks on those same rows (that means concurrent database actions are blocking). Taking this limitation into account, preventing concurrent row modifications from being included in the result set of a data retrieve action is not supported when a Mendix application is using DB2 as a streaming OData datasource.
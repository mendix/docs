---
title: "DB2"
space: "Mendix 7 Reference Guide"
parent: "data-storage"
---

Mendix 6.10 and above supports running on IBM DB2 databases.

## Page Size of the Table Space

For Mendix to run on DB2, it is very important that the user table space has a page size of at least 8K (but preferably 32K). This is because Mendix uses national character strings (NVARCHAR or VARCHAR with string units CODEUNIT32). This data type consumes more space than an octets-based VARCHAR. For the system administration, Mendix always creates some tables with indexes, which require at least a table space page size of 8K.

### Exception with SQL Code -614

If the index is too big for the page size, DB2 will throw an exception:

`com.ibm.db2.jcc.am.SqlException: DB2 SQL Error: SQLCODE=-614, SQLSTATE=54008, SQLERRMC=some_index_name`

For user-created indexes, if the combined length of the specified columns in the index is greater than the max key length, you should also increase the page size of the table space.

For more detailed information, see the [IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00614n.html).

## Transaction Log Size

### Exception with SQL Code -964

If the transaction log space is depleted or there is a temporary increase in the number of active transactions, DB2 will throw this exception: `com.ibm.db2.jcc.am.SqlException: DB2 SQL Error: SQLCODE=-964, SQLSTATE=57011, SQLERRMC=null`.

In this case, the size of "LOGPRIMARY" must be increased. 

For more detailed information, see [IBM Support](http://www-01.ibm.com/support/docview.wss?uid=swg21298630) and 
[IBM Knowledge Center](http://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.messages.sql.doc/doc/msql00964c.html).

## Making DB2 Case-Insensitive

When applying sort on string column values that have mixed letter cases, DB2 will also take into account the letter cases. However, such situations can be avoided if the DB2 database is created with a collation that is case insensitive.

For more detailed information, see [IBM Developer Works]
(http://www.ibm.com/developerworks/data/library/techarticle/0203adamache/0203adamache.html).

## Known Issues

### Sorting on Very Long Strings

It is not possible to sort on unlimited strings or strings with a specified length greater than 8192\. This is because such long or unlimited strings are implemented with the data type NCLOB. DB2 does not allow sorting on columns with this data type. Technically, it is possible to cast this type during the execution of the query to a normal VARCHAR type and sort on this, but this increases the execution time. The question is if it really is user-friendly to show such long strings in a data grid. Consider decreasing the length of the string attribute or removing it from data grids. 

### ORDER BY a Correlated Scalar Fullselect or a Function with an External Action

According to the [IBM DB2 documentation](https://www.ibm.com/support/knowledgecenter/SS6NHC/com.ibm.swg.im.dashdb.sql.ref.doc/doc/r0059211.html), ORDER BY a correlated scalar fullselect (SQLSTATE 42703) or a function with an external action (SQLSTATE 42845) is not supported by DB2\. Taking this limitation into account, ordering by the associated attribute is not supported when a Mendix application is backed by DB2\. Therefore, any associated attribute that is used for ordering is filtered out from the query and the result set is returned as if ordering by the associated attribute had not been presented in the query.

### Non-Blocking Read-Isolated Streaming with OData

According to the [IBM DB2 documentation](https://www.ibm.com/support/knowledgecenter/SSEPGG_11.1.0/com.ibm.db2.luw.admin.perf.doc/doc/c0004121.html), non-blocking read-isolated queries are not supported by DB2\. The default behavior of DB2 is that when one user is retrieving rows from a table and another user is making modifications on the same table at the same time, then those modifications will show up in the data in the retrieve query (which means database reads are not isolated). Configuring a stricter transaction isolation level to prevent this behavior puts locks on those same rows (which means concurrent database actions are blocking). Taking this limitation into account, preventing concurrent row modifications from being included in the result set of a data retrieve action is not supported when a Mendix application is using DB2 as a streaming OData datasource.

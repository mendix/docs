---
title: "OQL Aggregation"
url: /refguide7/oql-aggregation/
---


Aggregations perform specific calculations on the values of the retrieved column(s). The following aggregate functions are possible:

| AVG | average |
| --- | --- |
| COUNT | count |
| MAX | maximum |
| MIN | minimum |
| SUM | sum |

When you are using an aggregate expression in the SELECT clause, all expressions in the SELECT clause have to be either an aggregation OR part in the GROUP BY clause of the query.

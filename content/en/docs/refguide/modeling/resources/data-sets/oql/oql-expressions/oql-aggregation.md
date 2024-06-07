---
title: "OQL Aggregation"
url: /refguide/oql-aggregation/
---


Aggregations perform specific calculations on the values of the retrieved column (or columns). The following aggregate functions are possible:

| Expression | Description |
| --- | --- |
| AVG | Average |
| COUNT | Count |
| MAX | Maximum |
| MIN | Minimum |
| SUM | Sum |

When you are using an aggregate expression in the `SELECT` clause, all expressions in the `SELECT` clause have to be either an aggregation *or* part of the `GROUP BY` clause of the query.

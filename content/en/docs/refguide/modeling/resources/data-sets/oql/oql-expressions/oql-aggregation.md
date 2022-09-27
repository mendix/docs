---
title: "OQL Aggregation"
url: /refguide/oql-aggregation/
tags: ["studio pro"]
---


Aggregations perform specific calculations on the values of the retrieved column(s). The following aggregate functions are possible:

| Expression | Description |
| --- | --- |
| AVG | Average |
| COUNT | Count |
| MAX | Maximum |
| MIN | Minimum |
| SUM | Sum |

When you are using an aggregate expression in the `SELECT` clause, all expressions in the `SELECT` clause have to be either an aggregation *or* part of the `GROUP BY` clause of the query.

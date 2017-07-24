---
title: "OQL Aggregation"
parent: "oql-expressions"
---


Aggregations perform specific calculations on the values of the retrieved column(s). The following aggregate functions are possible:

<table><thead><tr><td class="confluenceTd">AVG</td><td class="confluenceTd">average</td></tr></thead><tbody><tr><td class="confluenceTd">COUNT</td><td class="confluenceTd">count</td></tr><tr><td class="confluenceTd">MAX</td><td class="confluenceTd">maximum</td></tr><tr><td class="confluenceTd">MIN</td><td class="confluenceTd">minimum</td></tr><tr><td class="confluenceTd">SUM</td><td class="confluenceTd">sum</td></tr></tbody></table>

When you are using an aggregate expression in the SELECT clause, all expressions in the SELECT clause have to be either an aggregation OR part in the GROUP BY clause of the query.

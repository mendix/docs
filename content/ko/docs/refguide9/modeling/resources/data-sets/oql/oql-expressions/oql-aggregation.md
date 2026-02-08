---
title: "OQL Aggregation"
url: /refguide9/oql-aggregation/
---


집계는 검색된 열의 값에 대해 특정 계산을 수행합니다. 다음 집계 함수를 사용할 수 있습니다:

| 표현식 | 설명 |
| --- | --- |
| AVG | 평균 |
| COUNT | 개수 |
| MAX | 최대값 |
| MIN | 최소값 |
| SUM | 합계 |

`SELECT` 절에서 집계 표현식을 사용하는 경우 `SELECT` 절의 모든 표현식은 집계이*거나* 쿼리의 `GROUP BY` 절의 일부여야 합니다.

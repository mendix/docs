---
title: "XPath Query Functions"
url: /refguide8/xpath-query-functions/
---

다음 XPath 쿼리 집계 함수를 사용할 수 있습니다:

* [avg](/refguide8/xpath-avg/)
* [count](/refguide8/xpath-count/)
* [max](/refguide8/xpath-max/)
* [min](/refguide8/xpath-min/)
* [sum](/refguide8/xpath-sum/)

이러한 함수는 인수로 전체 쿼리를 포함해야 합니다. 그러나 `avg`, `max`, `min`, `sum` 함수는 집계할 쿼리의 열을 지정해야 합니다.

{{% alert color="warning" %}}
이러한 함수는 Java 코드에서만 사용할 수 있습니다.
{{% /alert %}}

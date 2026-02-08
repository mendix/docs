---
title: "OQL ROUND"
url: /refguide9/oql-round/
---

## 설명

`ROUND` 함수는 주어진 숫자 표현식을 반올림합니다.

## 구문

구문은 다음과 같습니다:

```sql
ROUND ( numeric_expression , length )
```

### numeric_expression

`numeric_expression`은 반올림해야 하는 표현식을 지정합니다. 이 표현식은 숫자 표현식이어야 합니다.

{{% alert color="info" %}}

`numeric_expression`이 `NULL`(비어 있음)이면 함수는 `NULL`을 반환합니다.

{{% /alert %}}

### length

`length`는 표현식을 반올림할 소수점 이하 자릿수를 지정합니다.

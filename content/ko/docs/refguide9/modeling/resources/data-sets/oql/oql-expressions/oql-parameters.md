---
title: "OQL Parameters"
url: /refguide9/oql-parameters/
---

## 소개

현재 매개변수는 [Dataset](/refguide9/data-sets/)에 정의된 OQL 쿼리 내에서만 지원됩니다. 쿼리에서 정의된 매개변수를 사용하려면 `$` 기호를 사용하십시오.

## 예시

올바른 매개변수 이름의 예시는 `$weight_range`, `$age`입니다.

OQL 쿼리에서 매개변수 값이 설정되지 않은 경우 해당 부분의 문은 무시됩니다. 예를 들어, 다음 쿼리에서:

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > $param 
    AND
    Active = true
```

`$param`의 값이 제공되지 않으면 쿼리는 다음과 동등합니다:

```sql
SELECT Name
FROM Module.Person
WHERE
    Active = true
```

위의 예시는 `$param`의 값이 제공되었지만 `NULL`인 경우와 다릅니다. 이 경우 쿼리는 다음과 동등합니다:

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > NULL
    AND
    Active = true
```

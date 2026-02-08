---
title: "OQL RANGEEND"
url: /refguide8/oql-rangeend/
---

## 설명

`RANGEEND` 함수는 범위 파라미터의 종료 값을 추출합니다.

구문은 다음과 같습니다:

```sql
RANGEEND ( $range )
```

`$range`는 범위 파라미터를 지정합니다.

## 예제

[RANGEBEGIN](/refguide8/oql-rangebegin/) 및 `RANGEEND`는 파라미터를 사용하는 OQL 함수이며, OQL 파라미터는 Dataset(리포트 생성에 사용됨)에서만 사용할 수 있습니다. 페이지를 만들고 Dataset이 있는 리포트를 추가할 때 해당 Dataset에서 `RANGEBEGIN` 및 `RANGEEND`를 사용할 수 있습니다.

다음은 OQL에서 범위를 사용하는 예제로, `$range`가 지난주로 설정되어 지난주에 태어난 모든 고객을 반환합니다:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday IN ($rangeLastWeek)
```

이 예제는 where 절에서 `RANGEEND` 함수를 사용하여 지난주 끝 이후에 태어난 모든 고객을 반환합니다:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday > RANGEEND($rangeLastWeek)
```

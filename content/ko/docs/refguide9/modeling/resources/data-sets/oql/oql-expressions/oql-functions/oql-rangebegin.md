---
title: "OQL RANGEBEGIN"
url: /refguide9/oql-rangebegin/
---

## 설명

`RANGEBEGIN` 함수는 범위 매개변수의 초기 값을 추출합니다.

`RANGEBEGIN`과 [RANGEEND](/refguide9/oql-rangeend/)는 매개변수를 사용하는 OQL 함수이며, OQL 매개변수는 [Dataset](/refguide9/data-sets/) (리포트 생성에 사용됨)에서만 사용할 수 있습니다. 페이지를 만들고 Dataset이 있는 리포트를 추가하면 해당 Dataset에서 `RANGEBEGIN`과 `RANGEEND`를 사용할 수 있습니다.

## 구문

구문은 다음과 같습니다:

```sql
RANGEBEGIN ( $range )
```

`$range`는 범위 매개변수를 지정합니다.

## 예시

이것은 OQL에서 범위를 사용하는 예시이며, `$range`가 지난 주로 설정되어 지난 주에 태어난 모든 고객을 반환합니다:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday IN ($rangeLastWeek)
```

이 예시는 `WHERE` 절에서 `RANGEBEGIN` 함수를 사용하며, 지난 주 시작 이후에 태어난 모든 고객을 반환합니다:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday > RANGEBEGIN($rangeLastWeek)
```

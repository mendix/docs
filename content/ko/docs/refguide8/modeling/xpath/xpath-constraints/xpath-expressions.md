---
title: "XPath Expressions"
url: /refguide8/xpath-expressions/
---

## 개요

표현식은 제약 조건 내에서 true인 값을 생성하는 데 사용됩니다.

제약 조건에 사용할 수 있는 세 가지 유형의 표현식이 있습니다:

* 연산자를 사용한 비교
* 함수
* 존재 표현식

## 비교

비교 표현식은 `=`, `<=`, `>`와 같은 비교 [연산자](/refguide8/xpath-operators/)로 구분된 두 개의 Attribute 또는 값으로 구성됩니다.

### 예제

예를 들어, 이 쿼리는 이름이 "Jansen"인 모든 고객을 검색합니다:

```java
//Sales.Customer[Name = 'Jansen']
```

이 쿼리는 총 가격이 50.00유로 미만인 모든 주문을 검색합니다:

```java
//Sales.Order[TotalPrice < 50.00]
```

이 쿼리는 미결제 주문이 최소 하나 있는 모든 고객을 검색합니다:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/HasPayed = false()]
```

이 쿼리는 거주 도시와 동일한 이름을 가진 모든 고객을 검색합니다:

```java
//Sales.Customer[Name = City]
```

이 쿼리는 주어진 고유 식별 번호로 주문한 고객을 검색합니다:

```java
//Sales.Customer[Sales.Customer_Order = 'ID_124123512341']
```

다음 쿼리로도 동일한 결과를 검색할 수 있습니다:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 'ID_124123512341']
```

그러나 위의 표기법은 사용하지 않는 것을 강력히 권장합니다. 데이터베이스에서 처리되는 방식 때문에 실행이 비효율적이며 성능이 저하됩니다.

## 함수

사용 가능한 함수에 대한 정보는 [XPath Constraint Functions](/refguide8/xpath-constraint-functions/)를 참조하십시오.

## 존재 표현식 {#exist}

마지막 유형의 표현식은 존재 표현식으로, 특정 Association이 채워져 있는지 여부를 확인하는 데 사용할 수 있습니다.

### 예제

이 쿼리는 최소 하나의 주문을 한 모든 고객을 검색합니다:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order]
```

이 쿼리는 주문을 하지 않은 모든 고객을 검색합니다:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```

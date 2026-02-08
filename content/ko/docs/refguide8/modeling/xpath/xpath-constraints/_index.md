---
title: "XPath Constraints"
url: /refguide8/xpath-constraints/
---

## 소개

제약 조건은 검색되는 데이터를 필터링하기 위해 모든 XPath 쿼리에 추가할 수 있습니다. 항상 유효한 [표현식](/refguide8/xpath-expressions/)의 형태를 취해야 합니다. 이는 [연산자](/refguide8/xpath-operators/), [함수](/refguide8/xpath-constraint-functions/), [키워드 또는 시스템 변수](/refguide8/xpath-keywords-and-system-variables/)와 결합된 하나 이상의 변수로 구성되어야 합니다.

예를 들어, 이 쿼리는 이름이 Jansen인 모든 고객을 검색합니다:

```java
//Sales.Customer[Name = 'Jansen']
```

쿼리의 전반부는 검색할 Entity를 정의하고, 후반부(괄호 사이)는 데이터를 특정 Attribute로 *제약*합니다. 제약 조건은 (항상) 괄호로 둘러싸여야 합니다.

단일 쿼리에 여러 제약 조건을 추가할 수 있으며, 이는 `id` 쿼리를 제외한 모든 쿼리에 해당합니다. 가장 일반적으로 첫 번째 괄호를 닫은 후 새 괄호 세트를 여는 방식으로 수행됩니다.

{{% alert color="warning" %}}
Studio Pro에서는 완전한 쿼리를 작성하지 않고 제약 조건만 작성합니다. Entity는 컨텍스트에 의해 암묵적으로 결정됩니다. 따라서 고객 컨텍스트에서 `//Sales.Customer[Name='Jansen']` 대신 `[Name='Jansen']`만 작성하면 됩니다. Java에서는 이중 슬래시(`//`)와 Entity 이름을 포함한 전체 쿼리를 작성해야 합니다.
{{% /alert %}}

## 예제

이 쿼리는 이름이 Jansen이고 Rotterdam에 거주하는 모든 고객을 검색합니다:

```java
//Sales.Customer[Name = 'Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

`and` 또는 `or` [연산자](/refguide8/xpath-operators/)와 제약 조건을 결합할 수도 있습니다. 이 쿼리는 이름이 Jansen이고 *그리고* Rotterdam에 거주하는 모든 고객을 검색합니다:

```java
//Sales.Customer[Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

이 쿼리는 이름이 Jansen이거나 Rotterdam에 거주하는 모든 고객을 검색합니다.

```java
//Sales.Customer[Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

괄호로 제약 조건을 그룹화하여 우선순위를 정의할 수 있습니다. 이 쿼리는 "Jansen" 또는 "Smit"라는 이름을 가지면서도 Rotterdam에 거주하는 모든 고객을 검색합니다:

```java
//Sales.Customer[( Name = 'Jansen' or Name = 'Smit' ) and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

경우에 따라 제약되는 데이터를 제한하기 위해 하위 제약 조건을 정의하는 것이 유용할 수 있습니다. 이는 원래 제약 조건의 괄호 내에 하위 제약 조건을 추가하여 쉽게 달성됩니다. 하위 제약 조건은 실제 쿼리가 아닌 메타 제약 조건에만 적용되므로 두 개의 별도 제약 조건과 혼동하지 마십시오. 따라서 괄호는 하나씩 열고 닫히지 않습니다; 하위 제약 조건은 메타 제약 조건 내에 완전히 포함되어야 합니다. 충분히 복잡한 쿼리에서는 하나의 제약 조건이 끝나고 다른 제약 조건이 시작되는 위치에 대한 혼란이 발생할 수 있습니다. 이를 방지하기 위해 괄호 세트를 주의 깊게 추적하십시오.

이 쿼리는 Administrator 역할을 가진 모든 사용자를 검색합니다:

```java
//Sales.User[id = '[%UserRole_Administrator%]']]
```

이 쿼리는 Rotterdam 또는 Losdun에 거주하는 모든 고객을 검색합니다:

```java
//Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
```

이 쿼리는 가이아나의 New Amsterdam에 거주하는 모든 고객을 검색합니다(예: 인디아나의 New Amsterdam에 거주하는 고객과 구별):

```java
//Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Address_Country/Sales.Country/Name = 'Guyana']
```

단일 제약 조건에서 동일한 경로를 두 번 이상 사용하지 마십시오. 예를 들어, Rotterdam과 Losdun에 대한 예제는 다음과 같이 설정할 수도 있습니다:

```java
//Sales.Customer[Sales.Customer_Address/Sales.Address/City = 'Rotterdam' or Sales.Customer_Address/Sales.Address/City = 'Losdun']
```

그러나 이 쿼리는 비효율적으로 실행되어 쿼리 프로세스를 상당히 느리게 합니다.

---
title: "XPath"
url: /refguide8/xpath/
weight: 90
description: "함수와 예제를 제시하여 Mendix에서 XPath 쿼리 언어가 어떻게 사용되는지 설명합니다."
---

## 소개

Mendix XPath는 데이터를 검색하기 위해 설계된 Mendix 쿼리 언어 중 하나입니다. XPath는 경로 표현식을 사용하여 Mendix 객체의 데이터와 해당 Attribute 또는 Association을 선택합니다.

XPath 쿼리는 Studio Pro에서 작성할 수 있습니다. 예를 들어 Retrieve Microflow Activity에서 검색되는 데이터에 대한 제약 조건을 지정하려는 경우, 그리고 Java Action의 .java 파일에서 코드로 직접 작성할 수 있습니다. 모든 연산자가 Studio Pro에서 지원되는 것은 아니며, 쿼리의 구문은 Studio Pro와 Java 환경 간에 다를 수 있습니다.

XPath 쿼리의 예:

* `//Sales.Customer`
    모든 고객을 검색합니다.
* `//Sales.Customer[Name='Jansen']`
    이름이 'Jansen'인 모든 고객을 검색합니다.
* `avg(//Sales.Order[IsPaid = true()]/TotalPrice)`
    지불된 모든 주문의 총 가격 평균을 검색합니다.

{{% alert color="warning" %}}
Studio Pro에서는 완전한 쿼리를 작성하지 않고 제약 조건만 작성합니다. Entity는 컨텍스트에 의해 암묵적으로 결정됩니다. 따라서 고객 컨텍스트에서 `//Sales.Customer[Name='Jansen']` 대신 `[Name='Jansen']`만 작성하면 됩니다. Java에서는 이중 슬래시(`//`)와 Entity 이름을 포함한 전체 쿼리를 작성해야 합니다.
{{% /alert %}}

## XPath 요소

일반적인 Mendix XPath 쿼리는 여러 요소로 구성됩니다.

| A | B | C | D |
| --- | --- | --- | --- |
| 집계 함수 (선택 사항) | 검색할 Entity (필수) | 제약 조건 (선택 사항) | 검색할 Attribute (선택 사항) |
| avg | //Sales.Order | [IsPaid = true()] | /TotalPrice |

요소 B는 각 쿼리의 핵심을 설명하며, 검색할 객체에 대한 설명으로 구성됩니다. 이 세그먼트는 항상 두 개의 슬래시 '//'로 시작하며, 마침표로 구분된 Entity를 포함하는 모듈 이름이 앞에 오는 접근하려는 Entity의 이름이 포함됩니다. 예를 들어 //Sales.Customer는 'Sales' 모듈의 'Customer' Entity의 모든 객체를 반환합니다.

요소 C는 선택 사항이며, 검색되는 데이터를 제한하는 하나 이상의 제약 조건을 포함합니다.

다음 쿼리를 고려하십시오:

`//Sales.Customer[Name='Jansen']`

제약 조건은 괄호 사이에 명확히 보이며, 검색된 객체를 Attribute 'Name'이 'Jansen'인 객체로 제한합니다. Jansen 이외의 이름을 가진 객체는 목록에서 제외됩니다.
단일 쿼리에 대한 가능한 제약 조건의 수는 무제한입니다. 제약 조건을 추가하고 조작하는 방법에 대한 자세한 내용은 [XPath Constraints](/refguide8/xpath-constraints/)를 참조하십시오.

요소 D는 선택 사항이며, 검색된 Entity의 Attribute를 지정합니다. 이 옵션은 모든 데이터가 객체에 저장되어 단일 Attribute 목록을 다루기 번거롭고 불필요하게 복잡하므로 Studio Pro 자체에서는 거의 사용되지 않습니다. 그러나 다양한 Java Action에서 이러한 목록을 사용합니다. 또한 이 기능은 파트 A와 함께 사용하여 특정 Attribute의 집계를 쉽게 만들 수 있습니다.

요소 A는 선택 사항이며, 집계를 지정합니다. 요소 A는 [avg](/refguide8/xpath-avg/), [count](/refguide8/xpath-count/), [max](/refguide8/xpath-max/), [min](/refguide8/xpath-min/), [sum](/refguide8/xpath-sum/) 함수 중 하나일 수 있습니다. 'count'를 제외하고 이러한 각 함수는 요소 D에서 특정 Attribute를 지정해야 합니다.

## 토큰

자세한 내용은 [XPath Tokens](/refguide8/xpath-tokens/)를 참조하십시오.

## 연산자

자세한 내용은 [XPath Operators](/refguide8/xpath-operators/)를 참조하십시오.

## 함수

다음 XPath 함수를 사용할 수 있습니다:

* [XPath 함수](/refguide8/xpath-query-functions/):
    * [avg](/refguide8/xpath-avg/)
    * [count](/refguide8/xpath-count/)
    * [max](/refguide8/xpath-max/)
    * [min](/refguide8/xpath-min/)
    * [sum](/refguide8/xpath-sum/)
* [제약 조건 함수](/refguide8/xpath-constraint-functions/):
    * [contains](/refguide8/xpath-contains/)
    * [starts-with](/refguide8/xpath-starts-with/)
    * [ends-with](/refguide8/xpath-ends-with/)
    * [not](/refguide8/xpath-not/)
    * [true](/refguide8/xpath-true/)
    * [false](/refguide8/xpath-false/)

## 예제

**XPath로의 올바른 경로를 찾는 방법**

{{< youtube sdabUY-w4ZU >}}

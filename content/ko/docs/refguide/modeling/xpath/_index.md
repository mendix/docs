---
title: "XPath"
url: /refguide/xpath/
weight: 90
description: "Mendix에서 XPath 쿼리 언어가 어떻게 사용되는지 함수와 예제를 통해 설명합니다."
---

## 소개

Mendix XPath는 데이터를 검색하기 위해 설계된 Mendix 쿼리 언어 중 하나입니다. XPath는 경로 표현식을 사용하여 Mendix 객체의 데이터와 해당 Attribute 또는 Association을 선택합니다.

XPath 쿼리는 Studio Pro에서 작성할 수 있습니다. 예를 들어, Retrieve Microflow Activity에서 검색할 데이터에 대한 제약 조건을 지정하려는 경우가 있습니다. Studio Pro에서 XPath 쿼리가 사용되는 예시는 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오.

XPath 쿼리는 Java Action의 *.java* 파일에서 코드로 직접 사용할 수도 있습니다. Java 코드에서 완전한 XPath 쿼리의 예시는 다음과 같습니다:

* `//Sales.Customer`
    모든 고객을 검색합니다.
* `//Sales.Customer[Name='Jansen']`
    이름이 'Jansen'인 모든 고객을 검색합니다.
* `avg(//Sales.Order[IsPaid = true()]/TotalPrice)`
    결제 완료된 모든 주문의 총 가격 평균을 검색합니다.

{{% alert color="warning" %}}
XPath 쿼리의 구문은 Studio Pro 환경과 Java 환경에서 다릅니다. Studio Pro에서는 완전한 쿼리를 작성하지 않고 제약 조건만 작성합니다. Entity는 컨텍스트에 의해 암묵적으로 결정됩니다. 따라서 고객 컨텍스트에서는 `//Sales.Customer[Name='Jansen']` 대신 `[Name='Jansen']`만 작성하면 됩니다. Java에서는 이중 슬래시(`//`)와 Entity 이름을 포함한 전체 쿼리를 작성해야 합니다.
{{% /alert %}}

{{% alert color="warning" %}}
모든 [XPath 연산자](/refguide/xpath-operators/)가 Studio Pro에서 지원되는 것은 아닙니다.
{{% /alert %}}

## XPath 요소

일반적인 XPath 쿼리는 여러 요소로 구성됩니다.

| A | B | C | D |
| --- | --- | --- | --- |
| 집계 함수 (선택 사항) | 검색할 Entity (필수) | 제약 조건 (선택 사항) | 검색할 Attribute (선택 사항) |
| `avg` | `//Sales.Order` | `[IsPaid = true()]` | `/TotalPrice` |

요소 B는 각 쿼리의 핵심을 설명하며, 검색할 객체에 대한 설명으로 구성됩니다. 이 세그먼트는 항상 두 개의 슬래시 `//`로 시작하며, 접근하려는 Entity의 이름 앞에 해당 Entity를 포함하는 Module 이름을 마침표로 구분하여 포함합니다. 예를 들어, `//Sales.Order`는 `Sales` Module의 `Order` Entity의 모든 객체를 반환합니다. 

{{% alert color="info" %}}
Studio Pro에서는 XPath 쿼리에 요소 B를 작성하지 않습니다. 컨텍스트에 의해 암묵적으로 결정되기 때문입니다. 자세한 내용은 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오.
{{% /alert %}}

쿼리의 요소 C는 선택 사항이며, 검색할 데이터를 제한하는 하나 이상의 제약 조건을 포함합니다. 다음 완전한 XPath 쿼리를 살펴보십시오:

```java
//Sales.Customer[Name='Jansen']
```

제약 조건은 대괄호 사이에 명확하게 표시되며, 검색되는 객체를 Attribute `Name`이 `Jansen`인 것으로 제한합니다. Jansen 이외의 다른 이름을 가진 객체는 목록에서 제외됩니다. 단일 쿼리에 적용할 수 있는 제약 조건의 수는 무제한입니다. 이러한 제약 조건을 추가하고 조작하는 방법에 대한 자세한 내용은 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오.

쿼리의 요소 D는 선택 사항이며, 검색된 Entity의 Attribute를 지정합니다. 이 옵션은 모든 데이터가 객체에 저장되므로 단일 Attribute 목록을 다루는 것이 번거롭고 불필요하게 복잡하기 때문에 Studio Pro 자체에서는 거의 사용되지 않습니다. 그러나 다양한 Java Action에서 이러한 목록을 활용합니다. 또한 이 기능은 요소 A와 함께 사용하여 특정 Attribute의 집계를 쉽게 생성할 수 있습니다.

요소 A는 쿼리의 선택 사항이며, 집계를 지정합니다. 요소 A는 다음 함수 중 하나일 수 있습니다: [avg](/refguide/xpath-aggregate-functions/#avg), [count](/refguide/xpath-aggregate-functions/#count), [max](/refguide/xpath-aggregate-functions/#max), [min](/refguide/xpath-aggregate-functions/#min), [sum](/refguide/xpath-aggregate-functions/#sum). [count](/refguide/xpath-aggregate-functions/#count)를 제외하고, 이러한 각 함수는 요소 D에서 특정 Attribute를 지정해야 합니다. 

{{% alert color="info" %}}
요소 A는 Java 코드에서만 사용할 수 있습니다.
{{% /alert %}}

## 토큰

자세한 내용은 [XPath Tokens](/refguide/xpath-tokens/)를 참조하십시오.

## 연산자

자세한 내용은 [XPath Operators](/refguide/xpath-operators/)를 참조하십시오.

## 함수

두 가지 함수 유형이 있습니다. XPath 집계 함수는 Java 코드에서만 사용할 수 있으며, 인수로 전체 쿼리를 포함해야 합니다. XPath 제약 조건 함수는 Java 코드와 Studio Pro 모두에서 사용할 수 있습니다. Studio Pro에서는 완전한 쿼리를 작성하지 않고 제약 조건만 작성합니다.

자세한 내용은 [XPath 집계 함수](/refguide/xpath-aggregate-functions/) 및 [XPath 제약 조건 함수](/refguide/xpath-constraint-functions/)를 참조하십시오. 
    
## 예제

**XPath로의 올바른 경로를 찾는 방법**

{{% alert color="info" %}}
이 비디오는 [Studio Pro 8](/refguide8/)로 제작되었지만, 개념은 동일하게 적용됩니다.
{{% /alert %}}

{{< youtube sdabUY-w4ZU >}}

## 추가 정보

* [XPath를 사용하여 개요 페이지에서 데이터 필터링하기](/refguide/filtering-data-on-an-overview-page/)
* [XPath를 사용하여 접근 규칙 정의하기](/refguide/define-access-rules-using-xpath/)

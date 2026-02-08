---
title: "XPath 표현식"
url: /refguide/xpath-expressions/
---

## 개요

표현식은 제약 조건 내에서 true인 값을 생성하는 데 사용됩니다.

제약 조건에 사용할 수 있는 세 가지 유형의 표현식이 있습니다:

* 연산자를 사용한 비교
* 함수
* 존재 표현식

## 비교

비교 표현식은 `=`, `<=` 또는 `>`와 같은 비교 [연산자](/refguide/xpath-operators/)로 구분된 두 개의 Attribute 또는 값으로 구성됩니다.

### 예제

예를 들어, 다음 쿼리는 이름이 "Jansen"인 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = 'Jansen']
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 총 가격이 50.00유로 미만인 모든 주문을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [TotalPrice < 50.00]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Order[TotalPrice < 50.00]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 미결제 주문이 하나 이상 있는 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/HasPaid = false()]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/HasPaid = false()]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 `Delivered`가 아닌 상태의 주문이 있는 모든 고객을 검색합니다.
주문이 없는 고객은 검색되지 않습니다.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/Status != 'Delivered']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/Status != 'Delivered']
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 상태가 비어 있는 주문이 있는 모든 고객을 검색합니다.
위의 예제와 마찬가지로, 주문이 없는 고객은 검색되지 않습니다.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/Status = empty]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/Status = empty]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 `Delivered` 상태의 주문이 없는 모든 고객을 검색합니다.
이전 세 개의 쿼리와 달리, 주문이 없는 고객도 검색됩니다.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order/Status = 'Delivered')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[not(Sales.Customer_Order/Sales.Order/Status = 'Delivered')]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 거주 도시와 이름이 같은 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = City]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = City]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 주어진 고유 식별 번호로 주문한 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order = 124123512341]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order = 124123512341]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 이전 쿼리와 동일한 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/ID = 124123512341]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 124123512341]
    {{% /tab %}}
{{< /tabpane >}}

### 암시적 유형 변환

비교(`=`, `!=`, `<`, `<=`, `>`, `>=`)의 양쪽이 서로 다른 유형인 경우, 한쪽이 다른 쪽의 유형으로 암시적으로 변환될 수 있습니다.

한쪽이 일반 값(리터럴, Microflow 변수 또는 [시스템 변수](/refguide/xpath-keywords-and-system-variables/#system-variables))이고 다른 쪽이 쿼리할 Attribute인 경우, 값은 Attribute의 유형으로 변환됩니다. 예를 들어, 아래 줄은 쿼리를 실행하기 전에 문자열 `'42'`를 숫자 `42`로 변환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [TotalPrice >= '42']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Order[TotalPrice >= '42']
    {{% /tab %}}
{{< /tabpane >}}

반대로, 이 줄은 쿼리를 실행하기 전에 숫자 `42`를 문자열 `'42'`로 변환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [42 = Name]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[42 = Name]
    {{% /tab %}}
{{< /tabpane >}}

양쪽이 모두 일반 값이고 서로 다른 유형인 경우, 한쪽이 다른 쪽의 유형으로 변환됩니다. 변환할 유형은 다음 목록에서 먼저 나오는 것입니다:

1. Date and time
1. Boolean
1. Decimal
1. Integer/Long
1. String

예를 들어, `[%CurrentDateTime%]`(Date and time)를 `12345678`(Long)과 비교할 때, Long이 Date and time으로 변환됩니다.

변환은 다음과 같이 작동합니다:

* Boolean을 Date and time으로 변환하려고 하면 오류가 발생합니다.
* Decimal 또는 Integer/Long은 Unix Epoch(1970년 1월 1일 00:00 UTC) 이후의 초 수로 해석하여 Date and time으로 변환됩니다.
* String은 ISO 8601 형식으로 파싱하여 Date and time으로 변환됩니다. `2011-12-03T10:15:30`과 같이 시간대가 지정되지 않은 경우, 세션의 시간대가 사용됩니다.
* Decimal 또는 Integer/Long은 양수를 `true`로, 0 또는 음수를 `false`로 변환하여 Boolean으로 변환됩니다.
* String은 대소문자를 구분하지 않고 문자열 `'true'`와 비교하여 Boolean으로 변환됩니다.
* String은 숫자로 파싱하여 Decimal 또는 Integer/Long으로 변환됩니다.

### 빈 값 {#empty-values}

데이터베이스에서 Attribute의 값이 비어 있으면, 이는 "알 수 없음"으로 해석되며 해당 Attribute를 다른 Attribute와 비교할 때 일치하지 않습니다. 두 값이 모두 비어 있어도 마찬가지입니다.
이는 XPath 표현식이 변환되는 SQL의 `NULL` 값 의미론을 따릅니다.

다음은 두 가지 예제입니다 – 다른 비교(예: `<`)에서도 유사한 결과를 얻을 수 있습니다:

* `[Attribute1 = Attribute2]`는 두 Attribute가 모두 비어 있지 않고 값이 같은 경우 `true`입니다. 두 Attribute가 모두 비어 있으면 `false`입니다.
* `[Attribute1 != Attribute2]`는 두 Attribute가 모두 비어 있지 않고 값이 같지 않은 경우 `true`입니다. 하나의 Attribute가 비어 있고 다른 하나가 비어 있지 않으면 `false`입니다.

비교의 한쪽이 상수인 경우, 특수한 경우로 처리되는 몇 가지 예외가 있습니다:

* `[Attribute = empty]`는 Attribute가 비어 있는 경우 `true`입니다.
* `[Attribute != empty]`는 Attribute가 비어 있지 않은 경우 `true`입니다.
* `[Attribute != 'value']`는 Attribute가 상수 `'value'`와 같지 않거나 Attribute가 비어 있는 경우 `true`입니다.
* `[not(Attribute = 'value')]`는 Attribute가 상수 `'value'`와 같지 않거나 Attribute가 비어 있는 경우 `true`입니다.

{{% alert color="info" %}}
XPath 평가를 위해 Microflow 변수도 상수로 처리됩니다. XPath 평가 중에 고정된 값을 갖기 때문입니다.
{{% /alert %}}

## 함수

사용 가능한 함수에 대한 자세한 내용은 [XPath Constraint Functions](/refguide/xpath-constraint-functions/)를 참조하십시오.

## 존재 표현식 {#exist}

마지막 유형의 표현식은 존재 표현식으로, 특정 Association이 채워져 있는지 여부를 확인하는 데 사용할 수 있습니다.

### 예제

이 쿼리는 하나 이상의 주문을 한 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 주문을 하지 않은 모든 고객을 검색합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
{{< /tabpane >}}

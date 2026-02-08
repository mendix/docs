---
title: "XPath not"
linktitle: "not"
url: /refguide/xpath-not/
weight: 3
---

## 개요

`not()` 함수는 인수의 의미(및 결과)를 반전시킵니다.

{{% alert color="info" %}}
`not()` 함수는 역비교(예: `=`의 부정인 `!=`)와 다른 결과를 가질 수 있습니다. 자세한 설명은 아래 예제를 참조하십시오.
{{% /alert %}}

## 예제

이 쿼리는 이름이 "Jansen"과 같지 *않은* 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Name = 'Jansen')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Name = 'Jansen')]
    {{% /tab %}}
{{< /tabpane >}}

이 경우, 위의 쿼리는 다음 쿼리와 동일한 결과를 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name != 'Jansen']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name != 'Jansen']
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 하나 이상의 주문을 하지 않은 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
{{< /tabpane >}}

다음 쿼리는 `TotalPrice`가 30,000을 *초과*하는 주문을 하지 않은 모든 고객을 반환하며, 주문을 전혀 하지 않은 고객도 포함합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
    {{% /tab %}}
{{< /tabpane >}}

위의 쿼리는 아래 쿼리와 동일한 결과를 반환하지 않습니다. 아래 쿼리는 30,000 이상의 주문 수에 관계없이 `TotalPrice`가 30,000 *미만*인 주문을 *하나 이상* 한 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
    {{% /tab %}}
{{< /tabpane >}}

예를 들어, 고객이 15,000짜리 주문 하나와 35,000짜리 주문 하나를 한 경우, 이 쿼리는 해당 고객을 반환하지만 *not* 쿼리는 반환하지 않습니다. 주문을 전혀 하지 않은 고객은 이 쿼리에 의해 반환되지 않습니다.

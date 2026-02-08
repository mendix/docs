---
title: "XPath true"
linktitle: "true"
url: /refguide/xpath-true/
weight: 1
---

## 개요

`true()` 함수는 Boolean 값 `true`를 반환합니다.

XPath 쿼리에서 `true` 또는 `false` 값을 사용하려면, `true()` 또는 `false()` 함수를 호출하거나 값을 따옴표로 묶어야 합니다.

## 예제

이 쿼리는 "골드 고객"으로 분류된 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [IsGoldCustomer = true()]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[IsGoldCustomer = true()]
    {{% /tab %}}
{{< /tabpane >}}

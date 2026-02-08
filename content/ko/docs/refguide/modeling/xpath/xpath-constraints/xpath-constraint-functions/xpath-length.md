---
title: "XPath length"
linktitle: "length"
url: /refguide/xpath-length/
weight: 4
---

## 개요

`length()` 함수는 문자열 Attribute 또는 값의 길이를 반환합니다.

## 예제

이 쿼리는 `FirstName`이 5자 이상인 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [length(FirstName) >= 5]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[length(FirstName) >= 5]
    {{% /tab %}}
{{< /tabpane >}}

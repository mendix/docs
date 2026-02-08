---
title: "XPath starts-with"
linktitle: "starts-with"
url: /refguide/xpath-starts-with/
weight: 17
---

## 개요

`starts-with()` 함수는 문자열 Attribute가 특정 문자열로 시작하는지 여부를 테스트합니다.

{{% alert color="info" %}}
XPath 제약 조건에서 문자열 비교는 일반적으로 대소문자를 구분하지 않지만, 일부 데이터베이스의 콜레이션 설정에 따라 달라질 수 있습니다. 자세한 내용은 [대소문자 구분 데이터베이스 동작](/refguide/case-sensitive-database-behavior/)을 참조하십시오.
{{% /alert %}}

## 예제

이 쿼리는 이름이 "Jans" 문자열로 시작하는 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [starts-with(Name, 'Jans')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[starts-with(Name, 'Jans')]
    {{% /tab %}}
{{< /tabpane >}}

예를 들어, 이름이 "Jansen"인 고객은 이름이 "Jans"로 시작하므로 반환됩니다.

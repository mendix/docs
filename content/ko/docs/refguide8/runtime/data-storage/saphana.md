---
title: "SAP HANA"
url: /refguide8/saphana/
weight: 70
---

## 소개

SAP HANA 데이터베이스를 사용하는 Mendix의 동작은 PostgreSQL 데이터베이스를 사용할 때와 비교하여 약간의 차이가 있습니다. 이러한 차이점은 아래에 설명되어 있습니다.

## 연관된 Attribute 정렬

연관된 Entity 중 하나의 Attribute에서 정렬된 Entity를 검색하는 것은 SAP HANA에서 지원되지 않습니다.

예를 들어, **Person**과 **Address** 두 개의 연관된 Entity가 있고 각각 **name**과 **street** Attribute가 있습니다. `Person_Address/Address/street`로 정렬된 `Person` 객체를 검색할 수 없습니다.

## 무제한 및 매우 긴 문자열의 동작

### 비교 함수

SAP HANA는 XPath 제약 조건에서 같음(`=`) 또는 같지 않음(`!=`) 연산자를 사용할 때 무제한 문자열 또는 지정된 길이가 5000자보다 큰 문자열을 지원하지 않습니다. 그러나 `contains()`, `starts-with()`, `ends-with()`를 포함한 함수는 지원합니다.

[대소문자 구분 데이터베이스 동작](/refguide8/case-sensitive-database-behavior/)도 참조하십시오.

{{% alert color="warning" %}}
Mendix 8.11.0 미만 버전에서는 SAP HANA의 문자열 비교가 대소문자를 구분했습니다.
{{% /alert %}}

### 정렬, 그룹화, 집계

무제한 문자열 또는 지정된 길이가 5000자보다 큰 문자열에서 정렬, 그룹화 또는 `count()`와 같은 집계 함수를 사용하는 것은 불가능합니다. 이러한 길거나 무제한 문자열은 CLOB 데이터 유형으로 구현되기 때문입니다. 문자열 Attribute의 길이를 줄이거나 데이터 그리드에서 제거하는 것을 고려하십시오.

### SELECT DISTINCT Attribute

CLOB 데이터 유형의 DISTINCT 열 선택에 대한 알려진 SAP HANA 제한으로 인해, 크기가 5000자보다 큰 문자열 유형의 DISTINCT Attribute 선택은 Mendix에서 지원되지 않습니다.
 
## 알려진 문제

### 유니코드 지원

현재 [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) 유니코드 문자만 지원됩니다.

---
title: "값 설정 (인덱스 기준)"
url: /appstore/partner-solutions/ats/rg-one-set-value-by-index/
---

## 설명

인덱스로 드롭다운의 값을 설정합니다(예: EnumSelect 또는 ReferenceSelector).

## 지원 Widget

* Dropdown
* ReferenceSelector
* SearchInput Dropdown

## 사용법

Widget의 이름과 설정하려는 값의 인덱스를 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Index | Integer | yes | 원하는 값의 인덱스입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

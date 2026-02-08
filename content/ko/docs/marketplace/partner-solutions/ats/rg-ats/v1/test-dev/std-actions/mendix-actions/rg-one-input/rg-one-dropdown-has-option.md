---
title: "Dropdown 옵션 존재 여부"
url: /appstore/partner-solutions/ats/rg-one-dropdown-has-option/
---

## 설명

드롭다운에서 값을 사용할 수 있으면 true를, 그렇지 않으면 false를 반환합니다.

## 지원 Widget

* Dropdown
* ReferenceSelector
* SearchInput Dropdown

## 사용법

값을 가져오려는 Widget의 이름을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Value | String | yes | 확인하려는 값입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Has Option | Boolean | 지정된 값의 옵션이 드롭다운에서 사용 가능하면 True, 그렇지 않으면 false입니다.

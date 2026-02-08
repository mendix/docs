---
title: "인덱스 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-index/
---

## 설명

드롭다운(예: EnumSelect 또는 ReferenceSelector)에서 선택된 값의 인덱스를 가져옵니다.

## 지원 Widget

* Dropdown
* ReferenceSelector
* SearchInput Dropdown

## 사용법

현재 선택된 값의 인덱스를 가져오려는 Widget의 이름을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Index | Integer | 선택된 옵션의 인덱스입니다. 첫 번째 옵션은 0부터 시작합니다.

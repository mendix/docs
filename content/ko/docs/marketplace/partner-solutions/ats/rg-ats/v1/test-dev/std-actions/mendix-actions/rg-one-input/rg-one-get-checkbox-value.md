---
title: "Checkbox 값 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-checkbox-value/
---

## 설명

체크박스가 선택된 경우 true를, 그렇지 않으면 false를 반환합니다.

## 지원 Widget

* Checkbox

## 사용법

값을 가져오려는 체크박스의 이름을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Value | Boolean | 체크박스의 값입니다. 선택된 경우 True, 그렇지 않으면 false입니다.

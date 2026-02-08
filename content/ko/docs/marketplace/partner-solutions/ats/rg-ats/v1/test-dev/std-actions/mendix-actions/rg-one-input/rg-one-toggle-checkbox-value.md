---
title: "Checkbox 값 토글"
url: /appstore/partner-solutions/ats/rg-one-toggle-checkbox-value/
---

## 설명

Checkbox를 클릭하여 값을 토글합니다. 이 Action은 체크박스의 현재 값을 반전합니다.

## 지원 Widget

* Checkbox

## 사용법

체크박스의 이름을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

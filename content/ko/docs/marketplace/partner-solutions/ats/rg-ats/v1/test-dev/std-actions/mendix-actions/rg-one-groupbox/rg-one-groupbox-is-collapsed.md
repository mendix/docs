---
title: "GroupBox 축소 상태 확인"
url: /appstore/partner-solutions/ats/rg-one-groupbox-is-collapsed/
---

## 설명

GroupBox의 축소 상태를 반환합니다: 축소된 경우 true, 그렇지 않으면 false.

## 지원 Widget

* GroupBox

## 사용법

축소 상태를 확인하려는 GroupBox의 이름을 Action의 파라미터로 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 닫으려는 GroupBox의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Is Collapsed | Boolean | GroupBox의 축소 상태입니다. 축소된 경우 True, 그렇지 않으면 false입니다.

---
title: "유효성 검사 메시지 검증"
url: /appstore/partner-solutions/ats/rg-one-assert-validation-message/
---

## 설명

특정 텍스트로 Widget의 유효성 검사 메시지를 검증합니다.

## 지원 Widget

* 모든 표준 Widget

## 사용법

Widget 이름과 예상되는 유효성 검사 메시지를 Action에 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid, TemplateGrid 또는 Listview의 이름입니다.
Validation Message | String | yes | 예상되는 유효성 검사 메시지입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

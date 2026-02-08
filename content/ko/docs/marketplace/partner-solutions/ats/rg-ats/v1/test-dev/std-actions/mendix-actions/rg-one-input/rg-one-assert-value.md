---
title: "값 검증"
url: /appstore/partner-solutions/ats/rg-one-assert-value/
---

## 설명

TextBox, TextArea, DateInput의 텍스트 값을 검증합니다.

## 지원 Widget

* TextBox
* TextArea
* DatePicker
* Dropdown
* RadioButton
* ReferenceSelector
* SearchInput Text
* SearchInput Dropdown
* Label
* OnChangeInputbox

## 사용법

Widget의 이름과 검증하려는 값을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Value | String | yes | 검증하려는 값입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

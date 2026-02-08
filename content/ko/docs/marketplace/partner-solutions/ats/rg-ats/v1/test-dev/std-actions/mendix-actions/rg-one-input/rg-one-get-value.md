---
title: "값 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-value/
---

## 설명

Textbox, Textarea, Dateinput, RadioButton, Dropdown 등에서 텍스트 값을 반환합니다.

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

값을 가져오려는 Widget의 이름을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Value | String | Widget의 표시 값입니다.

---
title: "Widget 찾기/검증"
url: /appstore/partner-solutions/ats/rg-one-findassert-widget/
---

## 설명

지정된 이름 또는 값으로 Mendix Widget을 찾거나 검증합니다.
경로로 이름의 시퀀스를 사용할 수 있습니다.

## 지원 Widget

* 모든 Widget

## 사용법

* Widget의 이름을 제공하세요.
* 선택적으로 값으로 Widget을 검색하고 보이는 Widget만 필터링할 수 있습니다.
* WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | Widget의 이름입니다.
Value | String |no | Widget의 값입니다.
Visible Only | Boolean | no | 반환 값을 보이는 Widget만으로 제한합니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Widget | WebElement | Web Element로서의 Widget입니다.

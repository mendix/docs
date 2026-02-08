---
title: "메뉴 항목 찾기/검증"
url: /appstore/partner-solutions/ats/rg-one-findassert-menu-item/
---

## 설명

Navigation Tree, Menu Bar 및 Simple Menu Bar에서 보이는 메뉴 항목을 찾거나 검증합니다.

## 지원 Widget

* NavigationTree
* MenuBar
* SimpleMenuBar

## 사용법

상위 Widget의 이름과 찾으려는 메뉴 항목의 캡션을 전달하세요.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | 상위 Widget의 이름입니다.
Caption | String | yes | 메뉴 항목의 캡션입니다.
Search Context | WebElement | no | 지정된 WebElement로 DataGrid 행 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Menu Item | WebElement | Web Element로서의 메뉴 항목입니다.

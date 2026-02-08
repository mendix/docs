---
title: "표시된 항목/행 수 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-visible-itemrow-count/
---

## 설명

TemplateGrid, DataGrid 또는 ListView에서 현재 표시된 항목/행의 수를 반환합니다.

## 지원 Widget

* DataGrid
* TemplateGrid
* ListView

## 사용법

Widget 이름을 Action에 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required| Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid, TemplateGrid 또는 Listview의 이름입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Item/Row Count | Integer | 표시된 항목/행의 수입니다.

---
title: "ListView 검색 설정"
url: /appstore/partner-solutions/ats/rg-one-set-listview-search/
---

## 설명

ListView 검색 텍스트를 설정합니다.

## 지원 Widget

* ListView

## 사용법

Widget 이름과 검색 텍스트를 Action에 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid, TemplateGrid 또는 Listview의 이름입니다.
Value | String | yes | 검색 텍스트로 설정할 텍스트입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

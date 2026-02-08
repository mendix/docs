---
title: "항목/행 찾기"
url: /appstore/partner-solutions/ats/rg-one-find-itemrow/
---

## 설명

지정된 인덱스로 DataGrid, TemplateGrid 또는 ListView의 행/항목을 찾습니다.

## 지원 Widget

* DataGrid
* TemplateGrid
* ListView

## 사용법

DataGrid, TemplateGrid 또는 ListView의 이름과 행의 0 기반 인덱스를 제공하세요.

선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid, TemplateGrid 또는 Listview의 이름입니다.
Index | Integer |yes | 찾을 항목/행의 인덱스입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | DataGrid 행 또는 TemplateGrid/ListView 항목입니다.

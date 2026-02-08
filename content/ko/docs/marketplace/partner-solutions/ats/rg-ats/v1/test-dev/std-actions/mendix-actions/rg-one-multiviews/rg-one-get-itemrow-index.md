---
title: "항목/행 인덱스 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-itemrow-index/
---

## 설명

Datagrid의 행 또는 TemplateGrid, ListView의 항목에 대한 0 기반 인덱스를 반환합니다.

## 지원 Widget

* DataGrid
* TemplateGrid
* ListView

## 사용법

항목/행을 WebElement로 제공해야 합니다. DataGrid 행 또는 TemplateGrid/ListView 항목을 가져오려면 [Find Item/Row](/appstore/partner-solutions/ats/rg-one-find-itemrow/), [Find Item/Row (by child element)](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/) 또는 [Find/Assert DataGrid Row](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/) Action을 사용하세요.

## 입력 파라미터

Name | Datatype | Required| Description
--- | --- | --- | ---
Item/Row | WebElement |yes| DataGrid 행 또는 TemplateGrid/ListView 항목입니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Index | Integer | 제공된 행/항목의 인덱스입니다. 첫 번째 행/항목은 0부터 시작합니다.

---
title: "행 셀 값 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-row-cell-value/
---

## 설명

열 이름으로 지정된 DataGrid 행의 셀 값을 문자열로 반환합니다.

## 지원 Widget

* DataGrid

## 사용법

DataGrid 행을 WebElement로 전달하고 읽으려는 셀을 결정할 열 이름을 전달해야 합니다. DataGrid 행을 가져오려면 [Find Item/Row](/appstore/partner-solutions/ats/rg-one-find-itemrow/), [Find Item/Row (by child element)](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/) 또는 [Find/Assert DataGrid Row](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/) Action을 사용하세요.

## 입력 파라미터

Name | Datatype | Required| Description
--- | --- | --- | ---
DataGrid Row | WebElement |yes| 셀의 DataGrid 행입니다.
Column Name | String | yes | 셀의 열 이름입니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Value | String | 제공된 행에서 지정된 열에 대한 셀의 값입니다.

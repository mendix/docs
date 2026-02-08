---
title: "행 셀 값 설정"
url: /appstore/partner-solutions/ats/rg-one-set-row-cell-value/
---

## 설명

열 이름으로 지정된 DataGrid 행의 셀 값을 설정합니다.

## 지원 Widget

* DataGrid

## 사용법

DataGrid 행을 WebElement로 전달하고 쓰려는 셀을 결정할 열 이름을 전달해야 합니다. DataGrid 행을 가져오려면 [Find Item/Row](/appstore/partner-solutions/ats/rg-one-find-itemrow/), [Find Item/Row (by child element)](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/) 또는 [Find/Assert DataGrid Row](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/) Action을 사용하세요.

## 입력 파라미터

Name | Datatype |Required| Description
--- | --- | --- | ---
DataGrid Row | WebElement |yes| 값을 삽입할 DataGrid 행입니다.
Value | String |yes| 셀에 삽입할 값입니다.
Column Name | String |yes| 값이 삽입되는 셀을 정의하는 열 이름입니다.

---
title: "DataGrid 행 찾기/검증"
url: /appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/
---

## 설명

특정 열 값으로 DataGrid 행을 찾거나 검증합니다.

## 지원 Widget

* DataGrid

## 사용법

찾을 행을 결정하기 위해 DataGrid의 이름, 열 제목, 행의 셀 값을 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 DataGrid가 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid의 이름입니다.
Column Name | String | yes | 열 값이 위치한 열의 이름입니다.
Column Value | String | yes | 행을 정의하는 열 값입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
DataGrid Row | WebElement | 찾은 DataGrid 행이 Web Element로 반환됩니다.

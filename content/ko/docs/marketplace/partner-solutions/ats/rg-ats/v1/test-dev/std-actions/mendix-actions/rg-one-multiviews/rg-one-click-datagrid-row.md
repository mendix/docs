---
title: "DataGrid 행 클릭"
url: /appstore/partner-solutions/ats/rg-one-click-datagrid-row/
---

## 설명

지정된 열 값으로 DataGrid 행을 클릭합니다.

## 지원 Widget

* DataGrid

## 사용법

DataGrid의 행을 클릭/더블클릭하려면 이 Action을 사용하세요. 클릭할 행을 결정하기 위해 DataGrid의 이름, 열 제목, 행의 셀 값을 전달해야 합니다. 선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 DataGrid가 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | yes | DataGrid의 이름입니다.
Column Name | String | yes | 열 값이 위치한 열의 이름입니다.
Column Value | String | yes | 행을 정의하는 열 값입니다.
Doubleclick | Boolean | no | true인 경우 더블클릭을 수행합니다.
Search Context | WebElement | no | 지정된 WebElement로 DataGrid 행 검색을 제한합니다.

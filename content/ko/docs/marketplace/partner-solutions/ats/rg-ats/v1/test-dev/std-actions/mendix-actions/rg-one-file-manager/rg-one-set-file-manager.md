---
title: "File Manager 설정"
url: /appstore/partner-solutions/ats/rg-one-set-file-manager/
---

## 설명

파일을 업로드하기 위해 File Manager를 지정된 파일 경로로 설정합니다.

## 지원 Widget

* FileManager

## 사용법

Widget 이름과 파일 경로를 Action에 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | DataGrid, TemplateGrid 또는 Listview의 이름입니다.
File Path | String | yes | 업로드하려는 파일의 경로입니다.
Search Context | WebElement | no | 지정된 WebElement로 검색을 제한합니다.

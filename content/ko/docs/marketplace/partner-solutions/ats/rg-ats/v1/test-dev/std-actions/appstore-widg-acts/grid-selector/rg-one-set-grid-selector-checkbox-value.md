---
title: "Checkbox Set Selector 값 설정"
url: /appstore/partner-solutions/ats/rg-one-set-grid-selector-checkbox-value/
---

## 설명

열 및 행 캡션으로 체크박스를 찾고, 지정된 checked 파라미터 값으로 설정합니다.

## 지원 Widget

* Grid Selector

## 사용법

찾으려는 체크박스의 Widget 이름, 열 캡션, 행 캡션을 전달하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | Grid Selector Widget의 이름입니다.
Column Caption | String | Yes | 값을 가져오려는 체크박스 셀의 열 캡션입니다.
Row Caption | String | Yes | 값을 가져오려는 체크박스 셀의 행 캡션입니다.
Checked | Boolean | Yes | 설정하려는 체크박스 값입니다 (true 또는 false).

---
title: "Dialog 메시지 텍스트 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-dialog-message-text/
---

## 설명

메시지 및 확인 Dialog에서 텍스트를 반환합니다.

## 지원 Widget

* ConfirmationDialog
* DialogMessage

## 사용법

Dialog를 WebElement로 Action에 전달해야 합니다. Dialog를 WebElement로 가져오려면 [Find/Assert Dialog](/appstore/partner-solutions/ats/rg-one-findassert-dialog/) Action을 사용하세요.

## 입력 파라미터

Name | Datatype | Required | Description
--- | --- | --- | ---
Dialog| WebElement | yes | 메시지 텍스트를 가져오려는 Dialog의 WebElement입니다.

## 반환 값

Name | Datatype | Description
--- | --- | ---
Text | String | 메시지 또는 확인 텍스트입니다.

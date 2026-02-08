---
title: "현재 페이지 검증"
url: /appstore/partner-solutions/ats/rg-one-assert-current-page/
---

## 설명

현재 페이지 제목을 확인하여 특정 페이지가 열려 있는지 검증합니다. 페이지 제목은 사용자의 언어에 따라 다를 수 있습니다! Dialog의 경우 [Find/Assert dialog Action](/appstore/partner-solutions/ats/rg-one-findassert-dialog/)을 사용하세요.

## 사용법

현재 페이지 제목과 비교할 페이지 제목을 Action에 전달해야 합니다.
선택적으로 WebElement를 검색 컨텍스트로 제공하여, 동일한 이름의 Widget이 두 개 이상인 경우 검색 범위를 좁힐 수 있습니다.

## 입력 파라미터

Name | Datatype | Required| Description
--- | --- | --- | ---
Page Title | String | yes | 페이지가 가져야 할 제목입니다.

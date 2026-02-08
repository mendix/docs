---
title: "임의 문자열 생성"
url: /appstore/partner-solutions/ats/rg-one-random-string/
---

## 설명

다음 수식을 사용하여 임의의 영숫자 문자열을 생성합니다:
Math.random().toString(36).slice(2,8)

## 사용법

선택적으로 접두사 또는 접미사와 생성할 문자열의 길이를 파라미터로 전달할 수 있습니다.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Prefix | String | no | 생성된 문자열 앞에 붙일 문자열입니다.
Postfix | String | no | 생성된 문자열 뒤에 추가할 문자열입니다.
Length | Integer | no | 생성될 문자열의 길이입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Random String | String | 생성된 임의 문자열입니다.

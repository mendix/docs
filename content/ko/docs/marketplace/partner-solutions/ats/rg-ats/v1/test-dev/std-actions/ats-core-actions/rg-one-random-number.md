---
title: "난수 생성"
url: /appstore/partner-solutions/ats/rg-one-random-number/
---

## 설명

다음 수식을 사용하여 임의의 정수를 생성합니다:
Math.floor(Math.random() * (max - min)) + min;

## 사용법

생성되는 숫자의 범위를 제한하기 위해 하한/최솟값과 상한/최댓값을 전달하세요.
최솟값(포함)과 최댓값(미포함)을 정의해야 합니다.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Min | Integer | yes | 결과의 하한값입니다.
Max | Integer | yes | 결과의 상한값입니다.

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
Random integer | Integer | 생성된 난수입니다.

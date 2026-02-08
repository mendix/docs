---
title: "현재 날짜/시간 문자열 가져오기"
url: /appstore/partner-solutions/ats/rg-one-get-current-datetime-string/
---

## 설명

지정된 형식(Java 날짜 형식)으로 현재 날짜와 시간을 반환합니다 (예: `yyyy-MM-dd HH:mm:ss`).

## 사용법

날짜/시간 형식을 전달하세요. Java에서 날짜/시간 형식 지정에 대한 자세한 내용은 [SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) Java 참조 문서를 확인하세요.

## 입력 파라미터

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Datetime Format | String | yes | 날짜/시간 형식을 지정하는 Java datetime 형식 정의입니다 (예: `dd.MM.yyyy`).

## 반환 값

Name | Datatype | Description
---- | --------- | ---------------
CurrentDateTime | String | 지정된 형식에 따라 포맷된 현재 날짜/시간의 문자열 표현입니다 (예: `27.07.2020`).

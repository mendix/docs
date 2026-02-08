---
title: "Published REST Query Parameters"
url: /refguide10/published-rest-query-parameters/
weight: 40
description: "Published REST 쿼리의 매개변수"
# Merge into published rest service document
---

## 소개

[Published REST Operation](/refguide10/published-rest-operation/)의 사양에는 오퍼레이션을 구현하는 Microflow가 포함됩니다. 이 Microflow는 요청의 쿼리 문자열에서 오는 매개변수를 사용할 수 있습니다.

쿼리 매개변수는 기본 유형(Boolean, date and time, decimal, enumeration, integer/long 또는 string)만 가질 수 있습니다.

쿼리 매개변수는 `?name=John&age=42` 형식으로 경로 뒤에 물음표를 붙여 추가됩니다. 이는 [오퍼레이션의 예제 위치](/refguide10/published-rest-operation/#example-location)에 표시됩니다.

쿼리 매개변수에 대한 추가 참고 사항은 다음과 같습니다:

* 쿼리 매개변수는 대소문자를 구분합니다.
* Date and time 매개변수는 [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) 형식으로 입력해야 합니다 (예: `2018-12-31T09:00:00`).
* 클라이언트가 쿼리 매개변수를 지정하지 않고 오퍼레이션을 호출하면 Microflow에서 `empty` 값을 가집니다 (Boolean 유형인 경우 기본값은 `false`).

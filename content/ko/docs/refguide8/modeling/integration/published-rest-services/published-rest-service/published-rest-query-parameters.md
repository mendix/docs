---
title: "Published REST 쿼리 매개변수"
url: /refguide8/published-rest-query-parameters/
weight: 40
description: "Published REST 쿼리의 매개변수"
# Merge into published rest service document
---

[Published REST Operation](/refguide8/published-rest-operation/)의 사양에는 작업을 구현하는 Microflow가 포함됩니다. 이 Microflow는 요청의 쿼리 문자열에서 오는 매개변수를 받을 수 있습니다.

쿼리 매개변수는 원시 유형(Boolean, 날짜 및 시간, 소수, 열거형, 정수/long 또는 문자열)만 가질 수 있습니다.

쿼리 매개변수는 `?name=John&age=42` 형식으로 물음표 뒤에 경로 끝에 추가됩니다. 이는 [작업의 예시 위치](/refguide8/published-rest-operation/#example-location)에 표시됩니다.

쿼리 매개변수에 대한 추가 참고 사항은 다음과 같습니다:

* 쿼리 매개변수는 대소문자를 구분합니다.
* 날짜 및 시간 매개변수는 [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) 형식(예: `2018-12-31T09:00:00`)으로 입력해야 합니다.
* 클라이언트가 쿼리 매개변수를 지정하지 않고 작업을 호출하면 Microflow에서 `empty` 값을 갖게 됩니다(Boolean 유형인 경우 기본값은 `false`입니다).

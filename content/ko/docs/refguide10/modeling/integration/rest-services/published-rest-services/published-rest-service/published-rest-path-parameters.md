---
title: "Published REST Path Parameters"
url: /refguide10/published-rest-path-parameters/
weight: 30
# combine this with published rest service
---

## 소개

[Published REST Operation](/refguide10/published-rest-operation/)의 오퍼레이션 경로는 오퍼레이션 위치(URL)의 마지막 부분을 지정합니다.

하나 이상의 경로 매개변수를 사용하여 위치의 일부를 Microflow 매개변수로 캡처할 수 있습니다. 오퍼레이션 경로에서 `{`와 `}` 사이에 경로 매개변수를 지정하세요.

경로 매개변수 위치에 있는 URL의 값이 Microflow, Import Mapping 또는 둘 다에 전달됩니다.

경로 매개변수의 요구 사항은 다음과 같습니다:

* 오퍼레이션 경로에서 동일한 경로 매개변수를 두 번 사용할 수 없습니다.
* 경로 매개변수 이름에는 중괄호(`{` 또는 `}`)를 포함할 수 없습니다.
* 경로 매개변수는 기본 유형(Boolean, date and time, decimal, enumeration, integer/long 또는 string)만 가질 수 있습니다.
* 경로 매개변수는 경로에서 슬래시(`/`) 사이에만 나타날 수 있습니다.

[Published REST Operation](/refguide10/published-rest-operation/) 편집기 창에서 새 Microflow를 생성하면 결과 Microflow에는 오퍼레이션 경로에 지정된 각 경로 매개변수에 대한 문자열 매개변수가 있습니다. 경로 매개변수를 다른 유형으로 변경하려면 Microflow에서 유형을 변경할 수 있습니다.

Date and time 매개변수는 [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) 형식으로 입력해야 합니다 (예: `2018-12-31T09:00:00`).

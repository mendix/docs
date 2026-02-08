---
title: "Published REST 경로 매개변수"
url: /refguide8/published-rest-path-parameters/
weight: 30
# combine this with published rest service
---

[Published REST Operation](/refguide8/published-rest-operation/)의 작업 경로는 작업 위치(URL)의 마지막 부분을 지정합니다.

하나 이상의 경로 매개변수를 사용하여 위치의 일부를 Microflow 매개변수로 캡처할 수 있습니다. `{`와 `}` 사이의 작업 경로에 경로 매개변수를 지정하십시오.

경로 매개변수 위치의 URL에 있는 값은 Microflow, Import Mapping 또는 둘 다에 전달됩니다.

경로 매개변수에 대한 요구 사항은 다음과 같습니다:

* 작업 경로에서 동일한 경로 매개변수를 두 번 사용할 수 없습니다.
* 경로 매개변수 이름에 중괄호(`{` 또는 `}`)를 포함할 수 없습니다.
* 경로 매개변수는 원시 유형(Boolean, 날짜 및 시간, 소수, 열거형, 정수/long 또는 문자열)만 가질 수 있습니다.
* 경로 매개변수는 경로에서 슬래시(`/`) 사이에만 나타날 수 있습니다.

[Published REST Operation](/refguide8/published-rest-operation/) 편집기 창에서 새 Microflow를 생성하면 결과 Microflow에는 작업 경로에 지정된 각 경로 매개변수에 대한 문자열 매개변수가 있습니다. 경로 매개변수를 다른 유형으로 지정하려면 Microflow에서 유형을 변경할 수 있습니다.

날짜 및 시간 매개변수는 [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) 형식(예: `2018-12-31T09:00:00`)으로 입력해야 합니다.

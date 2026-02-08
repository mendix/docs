---
title: "OQL CAST"
url: /refguide8/oql-cast/
---

## 소개

CAST 함수는 표현식을 특정 데이터 타입으로 변환합니다.

구문은 다음과 같습니다:

```sql
CAST ( expression AS data_type )
```

* `expression` – 변환할 표현식을 지정합니다
* `data_type` – 표현식을 변환할 데이터 타입을 지정합니다. 데이터 타입은 다음 중 하나일 수 있습니다:
    * BOOLEAN
    * DATETIME
    * DECIMAL
    * INTEGER
    * LONG
    * STRING

## 지원되는 변환

아래 표는 지원되는 CAST 변환을 설명합니다:

* ✔ – 변환이 지원됩니다
* ✔* – 변환이 지원되지만 데이터베이스마다 동작이 다릅니다(아래 참고 사항 참조)
* ✘ – 변환이 지원되지 않습니다

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔* | ✔*¹ |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔* | ✔*² |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*² |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |

<Small>[1] BOOLEAN에서 STRING (limited)으로의 변환은 결과 문자열 길이가 5 이상인 경우에만 지원됩니다.<br />[2] DATETIME 및 DECIMAL에서 STRING (limited)으로의 변환은 값이 문자열 길이에 완전히 맞는 경우에만 지원됩니다. 결과 문자열 길이가 20 미만이면 변환이 실패할 수 있습니다.</small>

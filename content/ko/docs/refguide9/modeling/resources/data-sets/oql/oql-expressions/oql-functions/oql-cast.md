---
title: "OQL CAST"
url: /refguide9/oql-cast/
---

## 설명

`CAST` 함수는 표현식을 특정 데이터 유형으로 변환합니다.

## 구문

구문은 다음과 같습니다:

```sql
CAST ( expression AS data_type )
```

### expression

`expression`은 변환할 표현식을 지정합니다.

### data_type

`data_type`은 표현식을 변환할 데이터 유형을 지정합니다. 데이터 유형은 다음 중 하나일 수 있습니다:

* `BOOLEAN`
* `DATETIME`
* `DECIMAL`
* `INTEGER`
* `LONG`
* `STRING`

## 지원되는 변환

아래 표는 어떤 `CAST` 변환이 지원되는지 설명합니다:

* ✔ – 변환이 지원됩니다
* ✔* – 변환이 지원되지만 데이터베이스마다 동작이 다릅니다
* ✘ – 변환이 지원되지 않습니다

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔* | ✔*¹ |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔* | ✔*² |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*² |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |

<small>[1] BOOLEAN에서 STRING (limited)으로의 변환은 결과 문자열 길이가 ≥ 5인 경우에만 지원됩니다. <br />[2] DATETIME 및 DECIMAL에서 STRING (limited)으로의 변환은 값이 문자열 길이에 완전히 맞는 경우에만 지원됩니다. 결과 문자열 길이가 < 20이면 변환이 실패할 수 있습니다.</small>

## 예시

`CAST`의 빈번한 사용 사례는 `DATETIME` 데이터 유형의 날짜를 더 읽기 쉬운 `STRING` 유형으로 변환하는 것입니다: 

```sql
CAST ( your_datetime_variable AS string )
```

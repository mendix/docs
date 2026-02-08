---
title: "To String"
url: /refguide9/to-string/
weight: 130
---

## 소개

다양한 데이터 유형의 값을 문자열로 변환하는 기본 함수입니다.

## toString

지정된 값을 문자열 표현으로 변환합니다.

출력 형식을 완전히 제어해야 하는 경우 데이터 유형별 형식 함수를 사용하는 것을 고려하십시오. 예를 들어, decimal의 경우 [formatDecimal](/refguide9/parse-and-format-decimal-function-calls/)을 사용하십시오.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                         | 유형                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| 문자열로 변환해야 하는 값입니다. | Integer/Long, Decimal, Date and time, Boolean 및 Enumeration.<br />Enumeration의 경우 Expression은 캡션이 아닌 Enumeration 값의 키를 반환합니다. 자세한 내용은 [Expression의 Enumeration](/refguide9/enumerations-in-expressions/)을 참조하십시오. |

### 예제

다음 입력을 사용하는 경우:

```java
toString(1.4)
```

출력은 다음과 같습니다:

```java
'1.4'
```

Date and time 유형의 입력을 사용하는 경우:

```java
toString(dateTime(2007))
```

출력은 다음과 같습니다:

```java
'Mon Jan 01 00:00:00 CET 2007'
```

Boolean 입력을 사용하는 경우:

```java
toString(true)
```

출력은 다음과 같습니다:

```java
'true'
```

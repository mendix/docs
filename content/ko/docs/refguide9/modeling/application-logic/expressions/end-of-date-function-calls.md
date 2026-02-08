---
title: "End-of Date 함수 호출"
url: /refguide9/end-of-date-function-calls/
weight: 98
description: Studio Pro Expression에서 end-of date 함수 호출을 설명합니다.
---

{{% alert color="info" %}}
이 함수는 Mendix Studio Pro 9.18.0 이상에서만 사용할 수 있습니다.
{{% /alert %}}

## 소개

End-of date 함수 호출은 일, 주, 월 또는 연도의 끝을 계산하고 값을 반환합니다.

첫 번째 매개변수는 **Date and time** 유형의 Entity Attribute, **Date and time** 유형의 변수 또는 [Date Creation](/refguide9/date-creation/) 함수를 사용하여 생성된 **Date and time** 값일 수 있습니다.

지정된 날짜에서 기간의 끝을 계산할 수도 있습니다. 자세한 내용은 [Begin-of Date 함수 호출](/refguide9/begin-of-date-function-calls/)을 참조하십시오.

## endOfDay

`endOfDay` 함수는 초기 날짜 기준으로 해당 일의 끝을 계산합니다.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                  | 유형          |
| -------------------------------------- | ------------- |
| 초기 날짜                           | Date and time |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형          |
| ------------------------------------------------------------ | ------------- |
| *초기 날짜* 기준으로 해당 일의 끝인 Date and time 값입니다. | Date and time |

### 예제

```java
endOfDay(dateTime(2007, 2, 7, 1, 1))
```

출력은 다음과 같습니다:

```java
"Wed Feb 07 23:59 CET 2007"
```

## endOfWeek

`endOfWeek` 함수는 초기 날짜 기준으로 해당 주의 끝을 계산합니다. 주의 시작과 끝은 사용자의 로케일을 기반으로 합니다. 익명 사용자의 경우 브라우저의 로케일이 대신 사용됩니다.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                  | 유형          |
| -------------------------------------- | ------------- |
| 초기 날짜                           | Date and time |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형          |
| ------------------------------------------------------------ | ------------- |
| *초기 날짜* 기준으로 해당 주의 끝인 Date and time 값입니다. | Date and time |

### 예제

```java
endOfWeek(dateTime(2007, 2, 7, 1, 1, 1))
```

출력은 다음과 같습니다:

```java
"Sat Feb 10 23:59 CET 2007"
```

## endOfMonth

`endOfMonth` 함수는 초기 날짜 기준으로 해당 월의 끝을 계산합니다.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                  | 유형          |
| -------------------------------------- | ------------- |
| 초기 날짜                           | Date and time |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형          |
| ------------------------------------------------------------ | ------------- |
| *초기 날짜* 기준으로 해당 월의 끝인 Date and time 값입니다. | Date and time |

### 예제

```java
endOfMonth(dateTime(2007, 2, 7, 1, 1, 1))
```

출력은 다음과 같습니다:

```java
"Wed Feb 28 23:59 CET 2007"
```

## endOfYear

`endOfYear` 함수는 초기 날짜 기준으로 해당 연도의 끝을 계산합니다.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                  | 유형          |
| -------------------------------------- | ------------- |
| 초기 날짜                           | Date and time |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형          |
| ------------------------------------------------------------ | ------------- |
| *초기 날짜* 기준으로 해당 연도의 끝인 Date and time 값입니다. | Date and time |

### 예제

```java
endOfYear(dateTime(2007, 2, 7, 1, 1, 1))
```

출력은 다음과 같습니다:

```java
"Mon Dec 31 23:59 CET 2007"
```

## 더 읽기

* [Date Creation](/refguide9/date-creation/)
* [Begin-of Date 함수 호출](/refguide9/begin-of-date-function-calls/)

---
title: "Expression의 Enumeration"
url: /refguide9/enumerations-in-expressions/
weight: 170
---

## 소개

Enumeration은 `<modulename>.<enumerationname>.<enumerationvalue>`로 참조됩니다.

예를 들어, *OrderProcessing*이라는 모듈이 있고, 그 안에 *started*와 *completed*라는 두 가지 가능한 값을 가진 *Status* Enumeration이 정의되어 있습니다.

변경 목록, 객체 또는 변수 Activity에서 Attribute 값을 *completed*로 설정하려면 다음 입력을 사용하십시오:

```java
OrderProcessing.Status.completed
```

조건문도 가능합니다:

```java
if 4>3 then
  OrderProcessing.Status.completed
else
  OrderProcessing.Status.started
```

## getCaption

`getCaption` 함수는 Enumeration 값을 받아 해당 값의 캡션을 반환합니다. *캡션*은 번역 가능한 문자열이며 이 함수의 결과는 현재 언어에 따라 달라집니다.

### 입력 매개변수

입력 매개변수로 모든 Enumeration의 Enumeration 값을 사용할 수 있습니다.

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형   |
| ------------------------------------------------------------ | ------ |
| 현재 언어에서의 Enumeration 값의 캡션입니다. | String |

### 예제

다음 입력을 사용하는 경우:

```java
getCaption($Customer/Grade)
```

출력은 다음과 같을 수 있습니다:

```java
Gouden
```

## getKey

`getKey` 함수는 Enumeration 값을 받아 해당 값의 키(Studio Pro에서 *Name*이라고 함)를 반환합니다. 키는 Enumeration 값의 기술 이름이며 언어에 독립적입니다. 자세한 내용은 [Enumeration](/refguide9/enumerations/)을 참조하십시오.

### 입력 매개변수

입력 매개변수로 모든 Enumeration의 Enumeration 값을 사용할 수 있습니다.

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형   |
| ------------------------------------------------------------ | ------ |
| 현재 언어에서의 Enumeration 값의 키(이름)입니다. | String |

### 예제

다음 입력을 사용하는 경우:

```java
getKey($Customer/Grade)
```

출력은 다음과 같을 수 있습니다:

```java
Golden
```

## 더 읽기

* [Enumeration](/refguide9/enumerations/)

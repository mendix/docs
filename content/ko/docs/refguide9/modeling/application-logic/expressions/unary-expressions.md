---
title: "단항 Expression"
url: /refguide9/unary-expressions/
weight: 10
---

## 소개

단항 마이너스 연산자는 숫자를 음수에서 양수로 또는 그 반대로 변환하는 데 사용됩니다.

{{% alert color="info" %}}

단항 플러스는 없습니다.

{{% /alert %}}

## 예제

아래 예제는 '8'의 음수 값을 나타냅니다.

```java
-8
```

이미 음수 값을 가진 변수와 함께 사용하면 결과는 양수입니다.

예를 들어, $myVariable의 정수 값이 "-7"인 경우:

```java
-$myVariable
```

출력은 다음과 같습니다:

```java
7
```

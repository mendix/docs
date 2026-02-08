---
title: "Boolean Expression"
url: /refguide9/boolean-expressions/
weight: 50
---

## 소개

Boolean Expression은 true 또는 false를 반환하는 논리 연산을 수행하는 데 사용할 수 있습니다.

## and

`and` 연산자는 두 개의 Boolean Expression을 확인하고 두 Expression이 모두 true인 경우에만 `true`를 반환합니다.

### 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* 다음 입력을 사용하는 경우:

    ```java
    (6 > 4) and (3 < 5)
    ```

    두 Expression이 모두 `true`이므로 출력은 `true`입니다.

* 다음 입력을 사용하는 경우:

    ```java
    ('hello' = 'hallo') and (3 < 5)
    ```

    두 번째 Expression만 `true`이므로 출력은 `false`입니다.

## or

`or` 연산자는 두 개의 Boolean Expression을 결합하고, Expression 중 하나 이상이 true이면 `true`를 반환합니다.

### 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* integer 유형의 *price* Attribute를 가진 *product*라는 Entity가 있습니다. *price* Attribute는 3이고, *recommendedPrice*라는 다른 Attribute는 2입니다.

    다음 입력을 사용하는 경우:

    ```java
    ($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
    ```

    Expression 중 하나 이상이 true(두 번째)이므로 Expression은 `true`를 반환합니다. 두 문이 모두 true였더라도 여전히 `true`를 반환합니다.

* 다음 입력을 사용하는 경우:

    ```java
    ('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
    ```

    두 Expression이 모두 false이므로 Expression은 `false`를 반환합니다.

## not

`not` 연산자는 지정된 Boolean Expression을 부정합니다.

### 입력

Boolean 유형의 Expression입니다.

### 출력

지정된 Expression의 부정을 반환합니다. Expression이 `true`로 평가되면 `false`를 반환하고, 그 반대도 마찬가지입니다.

### 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* 다음 입력을 사용하는 경우:

    ```java
    not('hello' = 'hallo')
    ```

    Expression은 `true`를 반환합니다.

* 다음 입력을 사용하는 경우:

    ```java
    not(true)
    ```

    Expression은 `false`를 반환합니다.

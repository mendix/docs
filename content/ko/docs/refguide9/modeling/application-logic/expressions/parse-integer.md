---
title: "Parse Integer"
url: /refguide9/parse-integer/
weight: 140
description: "Mendix에서 문자열에서 정수를 파싱하는 함수를 설명합니다."
---

## 소개

이 문서에서는 문자열을 [Integer/Long](/refguide9/data-types/#integer-long) 데이터 유형의 값으로 변환하는 함수를 설명합니다.

## parseInteger

문자열을 받아 Integer/Long으로 파싱합니다.

### 입력 매개변수

입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                        | 유형         |
| ---------------------------- | ------------ |
| 파싱할 문자열          | String       |
| 기본값 **(선택 사항)** | Integer/Long |

{{% alert color="info" %}}
파싱 오류를 처리하기 위해 기본값을 지정할 수 있습니다. 기본값이 제공되지 않으면 문자열이 숫자가 아니거나 파싱된 값이 Integer/Long의 유효한 값 범위 내에 있지 않은 경우 오류가 발생합니다. Integer/Long의 유효한 값 범위는 이 [지원되는 데이터 유형 표](/refguide9/data-types/#supported-data-types)에서 찾을 수 있습니다.
{{% /alert %}}

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형    |
| ------------------------------------------------------------ | ------- |
| 문자열에서 파싱할 수 있는 경우 Integer/Long입니다. 문자열을 Integer/Long으로 파싱할 수 없는 경우 기본값이 반환됩니다. 기본값이 제공되지 않으면 오류가 발생합니다. | Integer/Long |

### 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* 다음 입력을 사용하는 경우:

    ```java
    parseInteger('42')
    ```

    출력은 다음과 같습니다:

    ```java
    42
    ```

* 다음 입력을 사용하는 경우:

    ```java
    parseInteger('not_an_integer', 42)
    ```

    출력은 다음과 같습니다:

    ```java
    42
    ```

---
title: "Parse 및 Format Decimal 함수 호출"
url: /refguide9/parse-and-format-decimal-function-calls/
weight: 150
---

## 소개

이 문서에서는 decimal 파싱 및 포맷 함수 호출을 설명합니다. 모든 패턴 가능성에 대한 자세한 내용은 [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)을 참조하십시오.

{{% alert color="warning" %}}
Nanoflow에서는 페이지의 텍스트 매개변수 내에서 선택적 형식 문자열(예: `'#,###.##'`)을 사용하여 decimal 파싱 및 포맷 함수 호출을 사용할 수 없습니다. 텍스트 매개변수는 Nanoflow와 동일한 방식으로 작동하며 Mendix 앱에서 현재 사용자의 언어에서 로케일에 적합한 형식만 사용하도록 제한됩니다.
{{% /alert %}}

## parseDecimal

지정된 형식에 따라 문자열 값을 decimal 값으로 파싱합니다.

### 입력 매개변수

`parseDecimal()`의 기능은 Microflow에서 사용되는지 Nanoflow에서 사용되는지에 따라 달라집니다.

#### Microflow의 입력 매개변수

Microflow의 입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                                        | 유형             |
| ------------------------------------------------------------ | ---------------- |
| 파싱할 값                                               | String           |
| Java 라이브러리 `DecimalFormat`에 기반한 입력 값의 형식(자세한 내용은 [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) 참조) | String           |
| 기본값 **(선택 사항)**                                 | Decimal 또는 empty |

#### Nanoflow의 입력 매개변수

Nanoflow의 입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                                        | 유형             |
| ------------------------------------------------------------ | ---------------- |
| 파싱할 값                                               | String           |
| 기본값 **(선택 사항)**                                 | Decimal 또는 empty |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형    |
| ------------------------------------------------------------ | ------- |
| 출력은 제공된 문자열 값과 일치하는 decimal 값입니다. 값을 파싱할 수 없는 경우(형식 매개변수와 일치하지 않거나 잘못된 문자가 포함된 경우) 기본값이 반환됩니다. 기본값이 제공되지 않으면 오류가 발생합니다. | Decimal |

### 예제

다음 예제는 Microflow와 Nanoflow 모두에 적용됩니다. 입력 매개변수에 따라 어떤 출력을 얻는지 보여줍니다.

* `parseDecimal('3.45')`는 `3.45`를 반환합니다
* `parseDecimal('noDecimal', 5.05)`는 `5.05`를 반환합니다
* `parseDecimal('noDecimal', empty)`는 `empty`를 반환합니다

변수가 비어 있는 경우:

* `parseDecimal($StringVariable)`는 오류를 발생시킵니다
* `parseDecimal($StringVariable, empty)`는 empty를 반환합니다. 결과 변수는 decimal로 사용될 때(예: `'$var > 0'` Expression에서) 오류를 발생시킬 수 있습니다
* `parseDecimal($StringVariable, 0)`는 `0`을 반환합니다. 결과 변수는 항상 decimal이며 예외를 발생시키지 않습니다

다음 예제는 Nanoflow에서는 형식을 수동으로 지정할 수 없으므로 Microflow에만 적용됩니다:

* `parseDecimal('3,241.98', '#,###.##')`는 `3241.98`을 반환합니다

## formatDecimal

지정된 형식에 따라 decimal 값을 문자열 값으로 변환합니다.

### 입력 매개변수

`formatDecimal()`의 기능은 Microflow에서 사용되는지 Nanoflow에서 사용되는지에 따라 달라집니다.

#### Microflow의 입력 매개변수

Microflow의 입력 매개변수는 아래 표에 설명되어 있습니다:

| 값                                                        | 유형    |
| ------------------------------------------------------------ | ------- |
| 변환할 값                                             | Decimal |
| Java 라이브러리 `DecimalFormat`에 기반한 결과의 형식(자세한 내용은 [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) 참조) | String  |
| 결과가 포맷되어야 하는 로케일 **(선택 사항)**. 지원되는 값에 대한 자세한 내용은 [forLanguageTag](https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html#forLanguageTag-java.lang.String-)를 참조하십시오. 생략하면 사용자 구성 로케일이 사용됩니다. | String  |

#### Nanoflow의 입력 매개변수

Nanoflow에서 이 함수는 아래에 설명된 단일 매개변수만 받습니다:

| 값            | 유형    |
| ---------------- | ------- |
| 변환할 값 | Decimal |

### 출력

출력은 아래 표에 설명되어 있습니다:

| 값                                                        | 유형   |
| ------------------------------------------------------------ | ------ |
| `format` 매개변수로 지정된 형식의 decimal 문자열 표현입니다. | String |

정확한 출력은 전달된 형식에 따라 Java 버전 및 사용자 로케일에 따라 달라질 수 있습니다.

### Microflow 예제

아래 예제는 Expression이 반환하는 값을 보여줍니다:

* 다음 입력을 사용하는 경우:

    ```java
    formatDecimal(1234.56, '#,###.#')
    ```

    출력은 (언어 설정에 따라) 다음과 같습니다:

    ```java
    '1,234.5' or '1.234,5'
    ```

* 다음 입력을 사용하는 경우:

    ```java
    formatDecimal(1234.56, '¤ #,##0.00')
    ```

    출력은 (언어 설정에 따라) 다음과 같습니다:

    ```java
    '€ 1.234,50' or '$ 1,234.50'
    ```

* 다음 입력을 사용하는 경우:

    ```java
    formatDecimal(0.56, '% ##0')
    ```

    출력은 다음과 같습니다:

    ```java
    '% 56' 
    ```

### Nanoflow 예제

Nanoflow에서는 Mendix 앱에서 현재 사용자의 언어에서 로케일에 적합한 형식을 사용하여 decimal을 포맷합니다.

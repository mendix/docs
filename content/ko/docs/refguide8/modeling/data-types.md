---
title: "데이터 타입"
url: /refguide8/data-types/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Studio Pro 전체에서 동일한 데이터 타입 세트가 사용됩니다. 예외는 [Attribute](/refguide8/attributes/)의 유형으로, 데이터베이스에 저장하는 것과 관련하여 더 구체적입니다. 일반적으로 Attribute 유형은 동일한 이름의 데이터 타입에 매핑됩니다. 예외는 아래 표에 언급되어 있습니다.

## 지원되는 데이터 타입 {#supported-data-types}

Mendix는 다음 데이터 타입을 지원합니다:

| 이름 | 설명 | 예시 |
| --- | --- | --- |
| Boolean | 참/거짓 값. | `true` 및 `false` |
| Binary | 파일 및 이미지와 같은 바이너리 데이터. |   |
| Date and time | 밀리초까지 정확한 날짜와 시간 구성 요소로 이루어진 시점. | Thursday, 12 February 2015, 14:50:36 |
| Decimal | 고정밀 분수. Decimal 타입은 고정밀 계산에 사용할 수 있습니다. 예를 들어 금액을 나타내는 데 이 타입을 사용하십시오. Decimal은 소수점 앞에 최대 20자리, 소수점 뒤에 최대 8자리를 가질 수 있습니다. | 3.14, 738000000000.00000001 |
| Enumeration | 주어진 [Enumeration](/refguide8/enumerations/)의 값 중 하나. | Red, Green, Blue; Todo, Running, Done |
| <a id="integer-long"></a>Integer/Long | -(2^63)과 2^63 - 1 사이의 정수. Attribute 유형 AutoNumber, Integer 및 Long이 이 데이터 타입에 매핑됩니다. | -42, 0, 123 |
| List | 특정 [Entity](/refguide8/entities/)의 객체 목록. |   |
| Nothing | 값 없음. [Microflow](/refguide8/microflows/)의 반환 유형으로만 사용할 수 있습니다. |   |
| Object | 특정 [Entity](/refguide8/entities/)의 단일 객체. |   |
| String | 문자, 숫자, 공백 및 기타 문자를 포함할 수 있는 텍스트. Attribute 유형 **String**과 **Hashed string**이 모두 이 데이터 타입에 매핑됩니다. | 'Hello World!'; 'Desiderius Erasmus' |

한 유형에서 다른 유형으로 데이터를 변경하려면(예: 텍스트 상자의 메시지 일부로 숫자를 표시하려면) 일반적으로 표현식을 사용해야 합니다. 사용 가능한 내용에 대한 자세한 내용은 [표현식](/refguide8/expressions/)을 참조하십시오.

예외는 Integer/Long을 Decimal로 변환하는 것으로, Decimal이 예상되는 곳에 Integer/Long을 제공하면 변환이 암묵적으로 수행됩니다.

---
title: "Columns (Document Template)"
url: /refguide8/columns-document-template/
aliases:
    - /refguide8/columns-(document-template).html
    - /refguide8/Columns+(document+template).html
    - /refguide8/columns-(document-template)
    - /refguide8/Columns+(document+template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 외관 속성

### 캡션

열의 캡션은 행 위에 머리글로 표시되는 텍스트입니다. 이는 번역 가능한 텍스트입니다. [Internationalization](/refguide8/translatable-texts/)을 참조하십시오.

### 열거형 형식 (열거형 타입의 속성에만 해당)

열은 내용을 텍스트(기본값) 또는 이미지로 표시할 수 있습니다.

| 값 | 설명 |
| --- | --- |
| Text | 연결된 속성(Attribute)의 내용을 텍스트로 표시합니다. |
| Image | 열거형 값의 이미지를 표시합니다. |

### 소수점 정밀도 (소수 속성에만 해당)

값의 정밀도는 해당 값을 표현하는 데 사용되는 자릿수로 정의됩니다. 이 속성은 소수 자릿수(소수점 뒤의 자릿수)를 나타냅니다.

기본값: *2*

### 자릿수 그룹화 (숫자 속성에만 해당)

읽기 쉽도록, 소수 구분 기호 앞에 많은 자릿수가 있는 숫자는 구분 기호를 사용하여 그룹으로 나눌 수 있습니다. 이 속성은 최종 사용자에게 이러한 그룹이 표시되는지 여부를 정의합니다.

기본값: *False*

### 날짜 형식 (**Date and time** 타입의 속성에만 해당)

날짜 형식은 날짜 부분, 시간 부분 또는 둘 다 표시되는지를 결정합니다. 날짜 및 시간 부분의 형식은 애플리케이션을 사용하는 사용자의 로케일에 따라 달라집니다.

가능한 값은 다음과 같습니다:

* **Date** *(기본값)*
* **Time**
* **Date and time**
* **Custom** (자세한 내용은 아래 참조)

### 사용자 정의 날짜 형식 (**Date and time** 타입의 속성에만 해당)

날짜 형식으로 **Custom**을 선택하면(위 참조) 이 속성은 속성 값의 형식을 결정합니다. 사용자 정의 날짜 형식은 아래 표에 있는 기호의 조합을 허용하는 문자열입니다. 모든 구두점은 그대로 렌더링됩니다.

{{% snippet file="/static/_includes/refguide8/custom-date-format-tokens.md" %}}

## 데이터 소스 속성

### Attribute (Path)

Attribute (path) 속성은 열에 표시될 값의 속성(Attribute)을 지정합니다. 그리드 Entity의 속성이거나 연관된 Entity의 속성일 수 있습니다. 연관된 객체에 접근하는 경로를 속성 경로라고 합니다. 경로는 참조(Reference) 타입의 여러 연관(Association)을 따를 수 있으며, 끝에 (선택적으로) 참조 세트(Reference Set) 타입 하나를 따를 수 있습니다. 열에 참조 세트를 표시하면 값이 쉼표로 구분됩니다.

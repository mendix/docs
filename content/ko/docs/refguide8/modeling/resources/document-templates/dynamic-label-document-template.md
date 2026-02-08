---
title: "Dynamic Label (Document Template)"
url: /refguide8/dynamic-label-document-template/
aliases:
    - /refguide8/Dynamic+label+(document+template).html
    - /refguide8/dynamic-label-(document-template).html
    - /refguide8/Dynamic+label+(document+template)
    - /refguide8/dynamic-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Dynamic Label은 페이지 편집기의 텍스트 상자와 동일한 종류의 속성(Attribute)에 사용됩니다. 텍스트 값을 표시하는 데 사용할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918131.png" class="no-border" >}}

고객 이름에 연결된 Dynamic Label입니다.

{{% /alert %}}

## 외관 속성

### 스타일

자세한 내용은 [Style](/refguide8/style/)을 참조하십시오.

### XHTML 렌더링

'Render XHTML' 속성을 true로 설정하면 이 레이블에 연결된 속성(Attribute)에 XHTML이 포함된 것으로 간주하여 그에 따라 렌더링합니다. 이는 Document Template에 서식 있는 텍스트를 포함하려는 경우에 유용합니다. 이 속성은 String 타입의 속성(Attribute)에만 true일 수 있습니다.

내용은 오류 없이 렌더링하려면 유효한 XHTML이어야 합니다.

기본값: *False*

### 소수점 정밀도 (소수 속성에만 해당)

값의 정밀도는 해당 값을 표현하는 데 사용되는 자릿수로 정의됩니다. 이 속성은 위젯에서 렌더링될 소수 자릿수(소수점 뒤의 자릿수)를 나타냅니다.

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

## 공통 속성

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

## 데이터 소스 속성

### Attribute (Path)

Attribute (path) 속성은 Dynamic Label에 표시될 속성(Attribute)을 지정합니다.

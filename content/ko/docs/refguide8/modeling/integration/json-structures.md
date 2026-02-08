---
title: "JSON 구조"
url: /refguide8/json-structures/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 일반

JSON 구조 문서는 JSON 스니펫을 저장하고, 이를 [Import Mapping](/refguide8/import-mappings/) 및 [Export Mapping](/refguide8/export-mappings/)에서 사용할 수 있는 스키마 구조로 변환하여 JSON 내용을 Mendix 객체로 변환하거나 그 반대로 변환합니다. 

{{< figure src="/attachments/refguide8/modeling/integration/json-structures/19398772.png" class="no-border" >}}

### JSON 스니펫

JSON 스니펫의 텍스트를 포함합니다. 일반적으로 API 문서에서 붙여넣거나 간단한 JSON의 경우 수동으로 입력할 수 있습니다.

{{% alert color="info" %}}

JSON 스니펫을 붙여넣거나 수정하면 유효성이 자동으로 검사됩니다. 스니펫이 유효하지 않으면 스니펫 위에 느낌표가 나타납니다:

{{< figure src="/attachments/refguide8/modeling/integration/json-structures/19398781.png" class="no-border" >}}

JSON을 유효하게 만들지 않으면 "OK"를 누를 수 없습니다.

{{% /alert %}}

### 형식

API 문서에서 발견되는 JSON 스니펫의 형식 및 공백은 다양할 수 있습니다. 공백을 신경 쓰지 않고 JSON을 문서에 붙여넣을 수 있습니다. 'Format' 버튼은 JSON 스니펫을 표준적이고 읽기 쉬운 방식으로 형식화합니다. 스니펫의 의미적 내용은 변경되지 않습니다.

{{% alert color="info" %}}

특수 유니코드 문자는 JSON 표준에 따라 인코딩됩니다. 예를 들어, 원본 스니펫에 하트 모양 기호(❤️)가 포함되어 있으면 '\u2764'로 대체됩니다.

{{% /alert %}}

### 구조

JSON 스니펫에서 구문 분석된 스키마가 있는 트리 구조를 표시합니다. 다음 열을 사용할 수 있습니다:

* **Name** – JSON 요소의 이름을 표시합니다. JSON 요소에 이름이 없으면 괄호 안에 요소 유형을 표시합니다: (Object), (Array), (Wrapper) 또는 (Value).
* **Value** – JSON 스니펫에서 요소의 원본 값을 표시합니다. 스니펫에서 원본 요소를 쉽게 찾을 수 있도록 하는 데 사용됩니다. 모델의 나머지 부분에서는 사용되지 않습니다.
* **Primitive Type** – 구문 분석 후 요소의 타입을 표시합니다.
* **Occurrence** – 요소의 발생 횟수를 표시합니다. 일반적으로 JSON 배열은 복수 발생(0..*)이고 JSON 객체는 단일 발생(1)입니다.
* **Custom name** – 이 열은 편집 가능합니다. JSON 객체 또는 배열의 이름은 종종 스니펫에서 유추할 수 없습니다. 참조를 위해 JSON 요소의 이름을 수정할 수 있습니다. 이 이름은 JSON 스키마를 기반으로 Mapping 문서를 사용할 때 중요합니다. Mapping 요소에서 이 이름을 볼 수 있으며 "Map Automatically"를 사용하여 Domain Model Entity와 연관(Association)을 생성할 때 사용됩니다.

{{% alert color="info" %}}
JSON 스니펫을 수정한 경우 'Refresh' 버튼을 클릭하여 구조를 새로고침해야 합니다. 그렇게 하지 않으면 오류가 나타납니다:

{{< figure src="/attachments/refguide8/modeling/integration/json-structures/19399140.png" class="no-border" >}}

구조를 업데이트하지 않으면 "OK"를 누를 수 없습니다.
{{% /alert %}}

### 문서화

스니펫을 설명하는 문서화입니다.

## JSON 스니펫 구문 분석

### 단순 JSON 객체

단순 JSON 객체는 중괄호('{' 와 '}' 사이)에 포함됩니다. 쉼표로 구분된 JSON 속성 목록을 포함합니다. 다음 예제를 참조하십시오.

{{< figure src="/attachments/refguide8/modeling/integration/json-structures/19398772.png" class="no-border" >}}

각 JSON 속성은 키("name")와 값("John")으로 구성됩니다. 값이 큰따옴표(" ") 사이에 있으면 문자열로 간주되며, 그렇지 않으면 값에서 타입이 유추됩니다. 다음 JSON 값이 지원됩니다:

* `"string"` – String 타입의 속성(Attribute)으로 변환됩니다
* `123` – Integer 타입의 속성(Attribute)으로 변환됩니다
* `true` 또는 `false` – Boolean 타입의 속성(Attribute)으로 변환됩니다
* `"1985-04-12T23:20:50.52Z"` – **Date and time** 타입의 속성(Attribute)으로 변환됩니다
* `12.50` – Decimal 타입의 속성(Attribute)으로 변환됩니다

### JSON 배열

JSON 배열은 대괄호(`[` 와 `]` 사이)에 포함됩니다. 쉼표로 구분된 JSON 값 또는 JSON 객체 목록을 포함합니다.

* JSON 배열은 JSON 스니펫의 루트가 될 수 있습니다.
* JSON 배열은 JSON 객체 내에 포함될 수 있습니다.
* JSON 배열은 다른 JSON 배열 내에 포함될 수 있습니다.

{{% alert color="info" %}}
배열의 첫 번째 항목이 배열 항목의 타입을 결정하는 데 사용됩니다. 혼합 배열은 지원되지 않습니다. 혼합 배열은 서로 다른 데이터 타입(예: 문자열 및 정수)의 항목이 있는 배열입니다. 트리 구조에서 매핑에 혼합 배열을 사용할 수 없다는 오류가 나타납니다.
{{% /alert %}}

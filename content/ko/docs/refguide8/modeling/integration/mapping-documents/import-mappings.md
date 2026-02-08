---
title: "Import Mapping"
url: /refguide8/import-mappings/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Import Mapping에 대한 소개는 [Mapping Document](/refguide8/mapping-documents/)를 참조하십시오.

## Import Mapping에서 객체 가져오기

Figure 1은 **Select elements...** 대화 상자를 사용하여 XML Schema에서 두 개의 요소가 선택된 Import Mapping 문서의 예를 보여줍니다. 이후 ReceivedPartners 및 ReceivedClient Entity가 추가되고 Result 및 Client 스키마 요소에 매핑되었습니다. Import Mapping이 호출될 때마다 새 ReceivedPartners 객체가 생성됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/import-mappings/16843942.png" class="no-border" >}}

**Figure 1**

### 객체 가져오기

각 XML 또는 JSON 객체에 대해 Mendix 객체를 가져와야 합니다. 새로 생성하거나 데이터베이스에서 기존 객체를 찾을 수 있습니다. 또는 객체를 반환하는 사용자 정의 Microflow를 사용할 수 있습니다. 특정 매핑 요소를 더블 클릭하면 표시되는 Figure 2의 창에서 Mendix 객체가 어떻게 가져오는지 확인할 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/import-mappings/16843943.png" class="no-border" >}}

**Figure 2**

### 속성 매핑 속성

#### Mendix 객체 가져오기 방법

| 속성 | 설명 |
| --- | --- |
| **Create an object** | 단순히 새 객체를 생성합니다. 실패하는 before create Microflow가 있으면 오류가 발생할 수 있습니다. |
| **Find an object (by key)** | 속성 목록에 정의된 키를 사용하여 객체를 검색합니다. 런타임은 **Key**로 표시된 모든 속성(아래 **Value element to attribute mapping** 섹션에서)을 가져와 XPath 쿼리로 변환하여 객체를 검색합니다. XPath 쿼리에서 둘 이상의 객체가 반환되면 오류가 발생합니다. |
| **Call a microflow** | Microflow를 호출하여 객체를 가져옵니다. Microflow에 파라미터가 필요한 경우 **Select...** 창에서 지정해야 합니다. 가능한 파라미터는 입력 파라미터(위 참조), 매핑의 상위 Entity 및 현재 XML 요소의 속성(Attribute)입니다. |

#### 객체를 찾지 못한 경우

이것은 지정된 **Obtain Mendix Object** 액션에서 오류가 발생했을 때 런타임이 수행하는 액션입니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/import-mappings/no-object-found.png" class="no-border" >}}

| 속성 | 설명 |
| --- | --- |
| **Create** | 매핑할 올바른 Entity의 객체를 생성합니다. |
| **Ignore** | 이 요소를 매핑하지 않고 나머지 XML 구문 분석을 계속합니다. |
| **Error** | XML 구문 분석을 명시적으로 중지하고 오류를 발생시킵니다. 이 오류는 호출하는 Microflow에서 처리해야 합니다. |

매핑의 최상위 수준인 경우 **Decide this at the place where the mapping gets used**를 선택할 수 있습니다. 이를 선택하면 매핑을 사용할 때마다(예: [Import Mapping Action](/refguide8/import-mapping-action/) 또는 [Call REST Service Action](/refguide8/call-rest-action/)에서) **if no object was found** 옵션을 설정할 수 있습니다.

### 연관(Association) 설정

선택적으로 상위 객체에 대한 연관(Association)을 설정할 수 있습니다. Yes로 설정하면 허용된 연관 목록이 표시됩니다. 연관이 선택되면 Mapping Document에 그려집니다.

{{% alert color="warning" %}}

Mendix 데이터베이스에서 목록은 정렬된 상태로 저장되지 않는다는 점에 유의하십시오. XML Schema는 객체 그룹이 시퀀스임을 규정할 수 있지만 데이터베이스에서 Mendix 객체의 순서는 수신 XML 요소의 순서와 다를 수 있습니다.

{{% /alert %}}

## Import Mapping에서 속성(Attribute) 매핑

선택된 각 XML 또는 JSON 요소는 Domain Entity의 속성(Attribute)에 매핑되어야 합니다. 특정 요소를 매핑하지 않으려면 **Select elements...** 대화 상자에서 해당 요소를 선택 해제하면 됩니다. 속성 매핑 구성은 특정 매핑 요소를 더블 클릭하면 표시되는 Figure 3의 화면에서 수행됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/import-mappings/16843943.png" class="no-border" >}}

**Figure 3**

속성에 대한 매핑을 정의하면 이러한 매핑이 Mapping Document에도 표시됩니다. 특정 속성을 선택하면 스키마 요소도 선택됩니다. 반대 방향으로도 작동합니다. Figure 4는 Entity와 스키마 요소 모두에서 **dati** 속성이 선택된 예를 보여줍니다(이 경우 dati가 dati에 매핑됨).

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/import-mappings/16843944.png" class="no-border" >}}

**Figure 4**

### 매핑 속성 속성

| 속성 | 설명 |
| --- | --- |
| Entity Attribute | 이 값 요소를 매핑할 속성(Attribute)을 선택할 수 있습니다. 각 값 매핑은 객체를 가져오기 위한 Microflow에서 파라미터로 사용되는 경우를 제외하고 매핑되어야 합니다. |
| Schema value element | 스키마 값 요소의 이름과 타입입니다. |
| Occurrence | 요소가 발생할 수 있는 횟수를 반영합니다. 필수 여부에 따라 **0..1** 또는 **1**일 수 있습니다. 값이 비어 있고 스키마에서 지정한 요소의 최소 필수 발생 횟수가 0이면 요소 생성이 건너뜁니다. 선택적 요소에 값을 절대 매핑하지 않으려면 **Select elements...** 대화 상자에서 비활성화하면 됩니다. |
| Convert using (optional) | 수신 데이터의 값 요소가 올바른 형식이 아닌 경우 Microflow를 사용하여 다른 데이터 타입으로 변환할 수 있습니다. 변환 Microflow에는 요소 타입과 일치하는 하나의 파라미터가 있어야 합니다. 또는 모든 수신 데이터가 사실상 String이므로 파라미터가 String 타입일 수 있습니다. 예를 들어 수신 데이터에 비정상적인 DateTime 형식이 포함된 경우 String 파라미터가 있는 변환 Microflow를 사용하여 이 형식을 직접 구문 분석할 수 있습니다. 이 값 요소가 속성에 매핑되는 경우 변환 Microflow의 반환 타입은 속성 타입과 일치해야 합니다. 값 요소의 변환 Microflow는 이러한 값 요소가 검색 키 또는 객체를 가져오기 위한 Microflow 파라미터로 사용되기 전에 실행됩니다. 이는 변환 Microflow가 있는 값 요소를 객체를 가져오기 위한 Microflow의 파라미터로 사용할 때 파라미터 타입이 변환 Microflow의 반환 타입과 일치해야 함을 의미합니다. |
| Key | 이 속성은 값 요소가 객체를 가져오기 위한 검색 키로 사용되는지 여부를 지정합니다. 값 요소가 검색 키로 사용되는 경우 매핑할 속성을 지정해야 합니다. 객체를 검색할 때 XML 값이 이 속성의 값과 일치합니다. 'binary' 타입의 속성(Attribute)은 키로 설정할 수 없습니다.
| Map attributes by name | 이 버튼을 클릭하면 이름으로 속성을 일치시키려는 시도가 이루어집니다. 변경된 내용을 보고하는 대화 상자가 나타납니다. |

## 매핑 파라미터

Import Mapping에는 수신 파라미터를 받을 수 있는 추가 옵션이 있습니다. 파라미터는 Microflow가 [Import from Mapping](/refguide8/import-mapping-action/) 액션을 사용할 때 호출하는 Microflow에서 전달될 수 있습니다.

매핑에 대한 파라미터를 정의하려면 파라미터 상자를 클릭하고 데이터 타입을 선택하십시오. Entity를 파라미터 상자에 드래그할 수도 있습니다. 

Entity 파라미터를 사용하면 연관(Association)을 설정할 수 있습니다. 기본형 파라미터(string, integer 등)를 사용하면 가져오는 객체의 속성(Attribute)에 값을 쓸 수 있습니다.

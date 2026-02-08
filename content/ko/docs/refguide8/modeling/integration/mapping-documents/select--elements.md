---
title: "요소 선택"
url: /refguide8/select--elements/
aliases:
    - /refguide8/Select++Elements.html
    - /refguide8/Select++Elements
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[Import Mapping](/refguide8/import-mappings/) 및 [Export Mapping](/refguide8/export-mappings/) 모두에서 매핑하려는 요소 구조를 지정해야 합니다. 이 작업은 **Select schema elements** 창에서 수행합니다. 이 화면의 예시는 아래에 나와 있습니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/select--elements/19399143.png" class="no-border" >}}

**Select schema elements** 창에서 다음 단계를 수행하십시오:

1. [XML 스키마](/refguide8/xml-schemas/), [사용된 웹 서비스](/refguide8/consumed-web-services/) 또는 [JSON 구조](/refguide8/json-structures/) 문서에 대한 매핑을 만들려는지에 따라 소스로 **XML schema**, **Web service operation** 또는 **JSON structure**를 선택해야 합니다.
2. 소스가 XML 스키마인 경우 매핑의 루트 요소를 선택하십시오. XML 스키마의 경우 **Start at** 요소를 선택하고, 웹 서비스 작업의 경우 **request part**를 선택하면 됩니다. **Start at**에는 XML 스키마의 루트 요소가 나열됩니다. 매핑의 기반이 될 루트 요소 하나를 선택할 수 있습니다. 소스가 웹 서비스 작업인 경우 **Request part**에 작업의 요청 부분에 대한 헤더 및 본문 요소가 나열됩니다. 작업에 여러 매개변수가 있는 경우 Request part에도 나열됩니다. **Request part**는 Export Mapping에만 적용됩니다.
3. 마지막으로 아래 트리 탐색기에서 특정 요소를 선택하십시오. 일반적으로 소스가 상당히 클 수 있으므로 전체 소스를 매핑할 필요는 없습니다.

{{% alert color="info" %}}
사용된 스키마 소스의 내용이 변경되면 매핑 문서가 스키마와 더 이상 일치하지 않으며 일관성 오류가 표시됩니다. 이 일관성 오류는 일관성 오류 자체를 마우스 오른쪽 버튼으로 클릭하고 'Resolve by updating from schema'를 선택하여 쉽게 수정할 수 있습니다.

스키마 내용은 변경된 XML 스키마, WSDL을 가져오거나 JSON 구조를 변경하여 변경될 수 있습니다.
{{% /alert %}}

## 규칙 및 제한 사항

요소 선택에 대한 다음 규칙 및 제한 사항을 유의하십시오:

* 지원되지 않는 요소는 선택할 수 없습니다.
* 부모 요소 없이 값을 선택할 수 없습니다.
* 최상위 요소는 선택 해제할 수 없습니다(Export Mapping만 해당).
* 부모 요소를 선택하지 않고 속성을 선택할 수 없습니다(Export Mapping만 해당).
* 최소 발생 횟수가 1인 요소는 선택 해제할 수 없습니다(Export Mapping만 해당).
* Choice 또는 Inheritance 요소를 선택한 경우 하위 항목 중 하나 이상을 선택해야 합니다.

사용 편의를 위해 일부 요소는 자동으로 선택되거나 선택 해제됩니다:

* 필수 하위 항목이 있는 요소를 선택하면 필수 하위 항목이 자동으로 선택됩니다.
* 마찬가지로 Export Mapping에서 요소를 선택 해제하면 해당 요소의 하위 항목도 선택 해제됩니다.

Import Mapping에서 작업할 때는 계층 구조에서 요소를 건너뛰고 하위 항목을 선택할 수 있습니다. 중간 요소에 저장된 정보에 관심이 없는 경우 이 기능을 사용할 수 있습니다.

{{% alert color="info" %}}
회색으로 표시된 요소 선택 체크박스가 나타날 수 있습니다. 체크박스 위에 마우스를 올리면 체크박스 값을 변경할 수 없는 규칙 또는 제한 사항을 확인할 수 있습니다. 예를 들어, 하위 노드를 선택하기 전에 부모 노드를 먼저 선택해야 할 수 있습니다.
{{% /alert %}}

## 편의 기능

{{% alert color="info" %}}

| 기능 | 설명 |
| --- | --- |
| Filter | 이름에 필터 텍스트가 포함되어 있는지에 따라 트리 노드를 확장하고 필터링합니다. 필터링 동작은 '모두 확장' 동작에 의존하므로, 매우 큰 스키마에서는 필터와 일치하는 모든 요소가 검색되지 않을 수 있습니다. |
| Expand all | 노드가 상위 항목의 중복이거나 확장된 노드 수가 너무 많지 않는 한 전체 트리를 확장합니다. 확장 작업당 최대 노드 수는 현재 1,000개입니다. |
| Collapse all | 전체 트리를 축소하여 루트 노드만 표시합니다. |
| Check all | 확장된 모든 노드와 보이는 리프 노드 옆의 체크박스를 선택합니다. 축소된 노드와 그 하위 항목은 영향을 받지 않습니다. |
| Uncheck all | 확장된 모든 노드와 보이는 리프 노드 옆의 체크박스를 선택 해제합니다. 축소된 노드와 그 하위 항목은 영향을 받지 않습니다. |

{{% /alert %}}

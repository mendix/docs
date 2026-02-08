---
title: "Export Mapping"
url: /refguide8/export-mappings/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Export Mapping에 대한 소개는 [Mapping Document](/refguide8/mapping-documents/)를 참조하십시오.

## Export Mapping에서 객체 가져오기

Figure 1은 [Select Elements](/refguide8/select--elements/) 대화 상자를 사용하여 스키마에서 두 개의 요소가 선택된 Export Mapping 문서의 예를 보여줍니다. Entity Cheesecake(왼쪽)가 Cheesecake 요소(오른쪽)에 매핑되도록 드래그되었고 Entity Topping이 Topping 요소에 매핑되었습니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843939.png" class="no-border" >}}

**Figure 1**

어떤 Entity가 어떤 스키마 요소에 매핑되는지 정의한 후, Export Mapping이 호출될 때 내보낼 실제 Mendix 객체를 어떻게 가져올지 구성해야 합니다. 루트 수준 요소(이 경우 Cheesecake)는 Export Mapping의 파라미터이므로 호출 시 Export Mapping에 직접 전달됩니다. 매핑의 다른 Mendix 객체를 어떻게 가져올지 구성해야 합니다.

### 파라미터에서 객체 가져오기

매핑의 최상위에 Entity가 있으면 해당 Entity가 매핑의 파라미터가 됩니다. 매핑을 사용할 때 해당 타입의 객체를 전달해야 합니다.

매핑의 최상위 요소가 [선택 사항](#optional)인 경우 **From parameter**를 Mendix 객체를 가져오는 방법으로 선택하여 다른 요소를 매핑의 파라미터로 지정할 수 있습니다.

### 연관(Association)으로 객체 가져오기

하위 객체의 경우 Figure 1에 표시된 것처럼 상위 객체와의 연관(Association)을 통해 객체를 가져올 수 있습니다. 예제에서 내보내야 하는 **Topping** 객체는 런타임에 **Topping_Cheesecake** 연관을 사용하여 가져옵니다. **Topping** Entity(왼쪽) 또는 **Topping** 스키마 요소(오른쪽)를 더블 클릭하여 매핑 요소를 편집할 수 있습니다. 다음 창이 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843938.png" class="no-border" >}}

**Figure 2**

### Microflow를 사용하여 객체 가져오기

이 창에서 상위와의 연관(Association)으로 객체를 가져오거나(Figure 3) Microflow로 가져올 수 있습니다(자세한 내용은 [Export Mapping에서 속성 매핑](#mapping-attributes) 참조). Microflow로 객체를 가져오는 경우 반환할 객체를 결정하는 데 도움이 되도록 상위 객체를 해당 Microflow에 인수로 전달할 수 있습니다. 이를 구성하는 창은 다음과 같습니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843937.png" class="no-border" >}}

**Figure 3**

Microflow로 객체를 가져오도록 선택하면 **Export Mapping Document**에 다음과 같이 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843936.png" class="no-border" >}}

**Figure 4**

마지막으로 선택한 Mendix 객체 가져오기 방법(파라미터에서, 연관으로, 또는 Microflow로)이 실패할 경우 수행할 작업도 정의할 수 있습니다. 첫 번째 옵션은 오류를 발생시키고 매핑을 중단하는 것입니다. 이 매핑을 호출한 Microflow가 이 오류를 처리해야 합니다. 또는 매핑되는 스키마 요소의 최소 발생 횟수가 0인 경우 요소 생성을 건너뛸 수 있습니다. Export Mapping은 나머지 요소에 대해 계속됩니다.

## Export Mapping에서 속성(Attribute) 매핑 {#mapping-attributes}

복합 스키마 요소가 포함하는 각 값 요소에 대해 Entity에서 속성(Attribute)을 매핑해야 합니다. 이러한 속성은 Choice 또는 상속 요소에는 적용되지 않습니다. 값 요소가 포함되지 않기 때문입니다. 속성 매핑 구성은 특정 매핑 요소를 더블 클릭하면 표시되는 Figure 5의 창에서 수행됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843935.png" class="no-border" >}}

**Figure 5**

### Entity 매핑 속성

| 속성 | 설명 |
| --- | --- |
| Entity attribute | 요소에 매핑되어야 하는 Domain Entity의 속성(Attribute)입니다. |
| Schema value element | 채워질 요소입니다. |
| Occurrence | 요소가 발생할 수 있는 횟수를 표시합니다. 필수 여부에 따라 "0..1" 또는 "1"일 수 있습니다. 값이 비어 있고 스키마에서 지정한 요소의 최소 필수 발생 횟수가 0이면 요소 생성이 건너뜁니다. 선택적 요소에 값을 절대 매핑하지 않으려면 "Select elements..." 대화 상자에서 비활성화하면 됩니다. |
| Convert Using (optional) | 내보내기를 수행하기 전에 값을 변환하는 Microflow입니다. |
| Map attributes by name | 이 버튼을 클릭하면 이름으로 속성을 일치시키려는 시도가 이루어집니다. 변경된 내용을 보고하는 대화 상자가 나타납니다. |

## 선택적 매핑 요소 {#optional}

일부 선택된 스키마 요소의 경우 Entity 정의는 선택 사항입니다. 이는 스키마 요소가 다음 조건을 충족할 때입니다:

* 속성(Attribute)을 포함하지 않음
* 최대 발생 횟수가 1(maxOccurs="1")
* Choice 요소가 아니거나 Choice 요소에 포함되지 않음
* 상속 요소가 아니거나 상속 요소에 포함되지 않음

이에 대한 예가 Figure 6에 표시됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/export-mappings/16843934.png" class="no-border" >}} 

**Figure 6**

선택적 매핑에 객체가 정의되지 않으면 요소가 항상 생성됩니다.

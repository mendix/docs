---
title: "Association 속성"
url: /refguide8/association-properties/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[Association](/refguide8/associations/)의 속성을 편집하는 두 가지 방법이 있습니다. 이 페이지에서는 도메인 모델에서 Association의 속성 패널에서 편집하거나 Association 또는 Entity 속성의 Association 탭에서 직접 Association 속성 대화 상자를 열어 편집할 수 있는 속성을 설명합니다.

Entity 속성의 Association 탭에서 직접 Association을 편집할 수도 있습니다. 자세한 내용은 [Association 탭 속성](/refguide8/association-member-properties/)을 참조하십시오.

{{% alert color="info" %}}
연관된 External Entity의 Attribute 속성은 원본 앱에서 정의되며 이러한 Entity에 적용할 수 있는 유일한 로컬 변경 사항은 로컬 이름과 설명입니다. 자세한 내용은 *External Entity*의 [Attribute](/refguide8/external-entities/#attributes) 섹션을 참조하십시오.
{{% /alert %}}

## Association 속성

Association 속성의 예는 아래 이미지에 나타나 있습니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-properties/association-properties.png" alt="Association Properties" class="no-border" >}}

Association은 다음 속성을 가집니다:

* [이름](#name) 
* [문서화](#documentation)
* [다중성](#multiplicity)
* [탐색 가능성](#navigability)
* [삭제 동작](#delete-behavior)

### 이름 {#name}

Association을 참조하는 데 사용되는 이름입니다. 예를 들어, 양식이나 Microflow에서 사용됩니다.

### 문서화 {#documentation}

**Documentation** 속성에 메모와 문서를 작성할 수 있습니다.

### 다중성 {#multiplicity}

다중성은 다음 유형 중 하나일 수 있습니다:

| 다중성 | 의미 | 동등한 것 |
| --- | --- | --- |
| 일대일 | 하나의 X 객체가 하나의 Y 객체와 연관됨 | 소유자가 **Both**로 설정된 **Reference** 유형의 Association |
| 일대다 *(기본값)* | 하나의 X 객체가 여러 Y 객체와 연관됨 | 소유자가 **Default**로 설정된 **Reference** 유형의 Association |
| 다대다 | 여러 X 객체가 여러 Y 객체와 연관됨 | **Reference set** 유형의 Association – 이 경우 소유권은 **탐색 가능성** 속성에 의해 설정됨 |

Association 유형에 대한 자세한 내용은 *Association 탭 속성*의 [유형](/refguide8/association-member-properties/#type) 섹션을, 소유권에 대한 정보는 *Association 탭 속성*의 [소유자](/refguide8/association-member-properties/#owner) 섹션을 참조하십시오.

### 탐색 가능성 {#navigability}

| 탐색 가능성 | 의미 | 동등한 것 |
| --- | --- | --- |
| X 객체가 Y 객체를 참조 *(기본값)* | Association의 소유자는 X | 소유자가 **Default**로 설정된 **Reference set** 유형의 Association |
| X와 Y 객체가 서로 참조 | 두 Entity가 모두 소유자 | 소유자가 **Both**로 설정된 **Reference set** 유형의 Association |

이것은 **Reference set**에 대한 **Owner** 속성에 해당합니다. 탐색 가능성 변경의 영향에 대한 더 자세한 논의는 *Association 탭 속성*의 [소유자](/refguide8/association-member-properties/#owner) 섹션을 참조하십시오.

이름과 달리 탐색 가능성은 일반적으로 Association을 추가하거나 변경할 때만 중요합니다. 하나의 객체를 Association의 소유자로 만드는 것이 비소유자 쪽에서 Association을 읽는 것을 방지하지는 않습니다.

### 삭제 동작 {#delete-behavior}

| 값 | 설명 |
| --- | --- |
| {Entity 이름} 객체를 삭제하지만 {다른 Entity 이름} 객체는 유지 *(기본값)* | 객체가 삭제될 때 연관된 객체는 삭제되지 않습니다. |
| {Entity 이름} 객체와 {다른 Entity 이름} 객체도 함께 삭제¹ | 객체가 삭제될 때 연관된 객체도 삭제됩니다. |
| {다른 Entity 이름} 객체와 연관되지 않은 경우에만 {Entity 이름} 객체 삭제² | 다른 객체와 연관되지 않은 경우에만 객체를 삭제할 수 있습니다. |

¹ 이 삭제 동작은 **Customer**가 삭제될 때 연관된 **Profile**도 삭제하려는 경우 사용됩니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-properties/association-delete-both.png" class="no-border" >}}

² 이 삭제 동작은 **Order**와 연관되지 않은 경우에만 **Customer**를 삭제할 수 있도록 하려는 경우 사용됩니다. 이 경우 이 고객을 삭제할 수 없음을 최종 사용자에게 알리고 다음 조치를 제안하는 **'Customer' 객체를 삭제할 수 없는 경우 오류 메시지**를 입력하라는 메시지가 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/domain-model/associations/association-properties/association-prevent-delete.png" class="no-border" >}}

## 더 읽기

* [Association](/refguide8/associations/)

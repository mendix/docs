---
title: "Dynamic Image (Document Template)"
url: /refguide8/dynamic-image-document-template/
aliases:
    - /refguide8/Dynamic+Image+(document+template).html
    - /refguide8/dynamic-image-(document-template).html
    - /refguide8/Dynamic+Image+(document+template)
    - /refguide8/dynamic-image-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Dynamic Image는 System.Image를 표시하는 데 사용할 수 있습니다. 이미지를 사용할 수 없는 경우(예: 이미지가 저장되지 않은 경우) 미리 설정된 기본 이미지가 표시됩니다. Data View 또는 Template Grid 내부에 배치할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918132.png" class="no-border" >}}
테이블 셀 내부에 미리 설정된 기본 이미지를 표시하는 Dynamic Image입니다.

{{% /alert %}}

## 외관 속성

### 기본 이미지

기본 이미지는 Dynamic Image를 찾을 수 없을 때(System.Image Entity를 특수화한 Entity에 실제 이미지가 포함되어 있지 않은 경우) 문서에 표시되는 이미지입니다.

### 썸네일 사용

여기에서 문서에 썸네일을 사용할지 전체 이미지를 사용할지 선택할 수 있습니다.

### 너비

너비는 문서에서 이미지의 너비를 정의합니다. 픽셀 단위로 설정되며 Document Template의 PPI를 사용하여 실제 인쇄 크기로 재계산됩니다. 너비 또는 높이 중 하나만 설정할 수 있습니다. 이미지의 왜곡을 방지하기 위해 둘 다 설정하는 것은 불가능합니다.

### 높이

높이는 문서에서 이미지의 높이를 정의합니다. 픽셀 단위로 설정되며 Document Template의 PPI를 사용하여 실제 인쇄 크기로 재계산됩니다. 너비 또는 높이 중 하나만 설정할 수 있습니다. 이미지의 왜곡을 방지하기 위해 둘 다 설정하는 것은 불가능합니다.

## 공통 속성

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

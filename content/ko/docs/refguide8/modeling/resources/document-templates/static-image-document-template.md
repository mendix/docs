---
title: "Static Image (Document Template)"
url: /refguide8/static-image-document-template/
aliases:
    - /refguide8/Static+Image+(document+template).html
    - /refguide8/static-image-(document-template).html
    - /refguide8/Static+Image+(document+template)
    - /refguide8/static-image-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Static Image는 미리 정의된 이미지를 표시합니다. Data View 또는 Template Grid 내부 또는 외부에 배치할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918133.png" class="no-border" >}}

테이블 셀 내부의 Static Image입니다.

{{% /alert %}}

## 외관 속성

### 이미지

이 속성은 문서에 표시될 이미지를 정의합니다.

### 너비

너비는 문서에서 이미지의 너비를 정의합니다. 픽셀 단위로 설정되며 Document Template의 PPI를 사용하여 실제 인쇄 크기로 재계산됩니다. 너비 또는 높이 중 하나만 설정할 수 있습니다. 이미지의 왜곡을 방지하기 위해 둘 다 설정하는 것은 불가능합니다.

### 높이

높이는 문서에서 이미지의 높이를 정의합니다. 픽셀 단위로 설정되며 Document Template의 PPI를 사용하여 실제 인쇄 크기로 재계산됩니다. 너비 또는 높이 중 하나만 설정할 수 있습니다. 이미지의 왜곡을 방지하기 위해 둘 다 설정하는 것은 불가능합니다.

## 공통 속성

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

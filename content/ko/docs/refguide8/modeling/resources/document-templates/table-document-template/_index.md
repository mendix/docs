---
title: "Table (Document Template)"
url: /refguide8/table-document-template/
aliases:
    - /refguide8/table-(document-template).html
    - /refguide8/Table+(document+template.html
    - /refguide8/table-(document-template)
    - /refguide8/Table+(document+template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Table은 양식의 레이아웃을 변경하는 데 사용할 수 있습니다. 여러 행과 열을 포함하며 두 항목의 교차점을 셀이라고 합니다. 각 셀에는 위젯이 포함될 수 있습니다. 셀은 비대칭 레이아웃을 허용하기 위해 가로 및 세로로 병합할 수 있습니다.

Table은 Data View 또는 Template Grid 위젯 내부와 외부 모두에서 사용할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918134.png" class="no-border" >}}

이 Table에는 4개의 행과 3개의 열이 있습니다. 마지막 행에는 다른 Table이 포함된 Data View가 있습니다.

{{% /alert %}}

## 컴포넌트

### Column

Table의 열입니다.

### Row

Table의 행입니다. [Row (Document Template)](/refguide8/row-document-template/)를 참조하십시오.

## 외관 속성

### 가중치

열 가중치는 세미콜론으로 구분된 백분율로 열의 너비를 결정합니다. 가중치의 합은 100이어야 합니다. 열 너비를 변경하는 다른 방법은 열 사이의 구분선을 드래그하는 것입니다.

{{% alert color="info" %}}

위의 스크린샷에서 감싸는 Table의 열 가중치는 `25;25;50`입니다.

{{% /alert %}}

### 셀 간격

셀 간격은 셀 사이의 공간을 지정합니다.

### 셀 패딩

셀 패딩은 셀의 내용과 셀 벽 사이의 공간을 지정합니다.

### 스타일

자세한 내용은 [Style](/refguide8/style/)을 참조하십시오.

## 공통 속성

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

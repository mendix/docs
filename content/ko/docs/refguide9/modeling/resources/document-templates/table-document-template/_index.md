---
title: "Table (Document Template)"
url: /refguide9/table-document-template/
aliases:
    - /refguide9/table-(document-template).html
    - /refguide9/Table+(document+template.html
    - /refguide9/table-(document-template)
    - /refguide9/Table+(document+template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

테이블은 폼의 레이아웃을 변경하는 데 사용할 수 있습니다. 여러 행과 열을 포함하며, 두 개의 교차점을 셀이라고 합니다. 각 셀에는 위젯이 포함될 수 있습니다. 셀은 비대칭 레이아웃을 허용하기 위해 수평 및 수직으로 병합할 수 있습니다.

테이블은 Data View 또는 Template Grid 위젯의 내부 및 외부 모두에서 사용할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918134.png" class="no-border" >}}

이 테이블에는 4개의 행과 3개의 열이 있습니다. 마지막 행에는 다른 테이블이 있는 Data View가 포함되어 있습니다.

{{% /alert %}}

## 컴포넌트

### 열

테이블의 열입니다.

### 행

테이블의 행입니다. [Row (Document Template)](/refguide9/row-document-template/)을 참조하십시오.

## 외관 속성

### 가중치

열 가중치는 열의 너비를 결정하는 세미콜론으로 구분된 백분율입니다. 가중치의 합은 100이어야 합니다. 열 너비를 변경하는 대안적인 방법은 열 사이의 구분선을 끌어서 변경하는 것입니다.

{{% alert color="info" %}}

위 스크린샷에서 둘러싸는 테이블의 열 가중치는 `25;25;50`입니다.

{{% /alert %}}

### 셀 간격

셀 간격은 셀 사이의 공간을 지정합니다.

### 셀 패딩

셀 패딩은 셀 내용과 셀 벽 사이의 공간을 지정합니다.

### 스타일

자세한 내용은 [Style](/refguide9/style/)을 참조하십시오.

## 공통 속성

{{% snippet file="/static/_includes/refguide9/name-property.md" %}}

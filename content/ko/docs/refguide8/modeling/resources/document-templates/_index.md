---
title: "Document Template"
url: /refguide8/document-templates/
weight: 90
aliases:
    - /refguide8/Document+Templates.html
    - /refguide8/Document+Templates
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Document Template는 애플리케이션 데이터를 기반으로 다양한 종류의 문서를 생성할 수 있는 문서 내보내기 Action에 필요한 입력 템플릿을 모델링하는 데 사용됩니다. [페이지](/refguide8/pages/)와 매우 유사한 방식으로 구성됩니다.

{{% alert color="warning" %}}
이 페이지는 Document Template의 용도와 배치할 수 있는 위젯의 종류를 설명합니다. Document Template의 속성을 확인하려면 [Document Template](/refguide8/document-template/) 자체의 문서를 참조하십시오.
{{% /alert %}}

Document Template에는 *위젯*이라고도 하는 컴포넌트가 포함됩니다. 아래는 모든 위젯의 카테고리별 개요입니다. 다음 카테고리가 사용됩니다:

* [핵심 위젯](#core)은 Mendix에서 Document Template를 구축하는 데 중심적인 역할을 합니다. Entity 목록이나 단일 Entity를 표시할 수 있는 위젯입니다
* [레이아웃 위젯](#layout)은 Document Template의 레이아웃을 구조화하는 데 사용됩니다
* [동적 데이터 위젯](#dynamic)은 속성(Attribute) 및 연관(Association)의 값을 표시할 수 있게 합니다
* [정적 데이터 위젯](#static)은 미리 정의된 이미지와 같은 정적 데이터를 다룰 수 있게 합니다

또한 대부분의 위젯과 Document Template 자체에서 스타일을 정의할 수 있습니다. 자세한 정보는 [Style](/refguide8/style/)을 참조하십시오.

아랍어나 태국어와 같이 특수 문자가 포함된 언어로 텍스트를 표시하려면 이러한 문자를 지원하는 글꼴을 스타일 편집기에서 선택하십시오. "Tahoma"가 그러한 글꼴 중 하나입니다.

## 핵심 위젯 {#core}

핵심 위젯은 Mendix에서 Document Template를 구축하는 데 중심적인 역할을 합니다. 단일 Entity 또는 Entity 목록의 내용을 표시할 수 있습니다. Domain Model의 데이터를 표시하도록 설계된 모든 Document Template에는 이러한 컴포넌트 중 하나가 필요합니다.

### Data Grid

Data Grid는 그리드에 객체 목록을 표시합니다. 예를 들어, Data Grid는 고객이 한 모든 주문을 표시할 수 있습니다.

자세한 정보는 [Data Grid (Document Template)](/refguide8/data-grid-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/data-grid-document-template/918138.png" class="no-border" >}}

설명과 참조된 고객 이름이 있는 주문 목록을 표시하는 Data Grid입니다.
{{% /alert %}}

### Data View

Data View는 정확히 하나의 객체의 내용을 표시하는 데 사용됩니다. 예를 들어, 단일 고객의 세부 정보를 표시하려면 Data View를 사용합니다. Data View에는 일반적으로 정적 레이블과 동적 레이블과 같은 동적 데이터 위젯이 있는 테이블이 포함됩니다. 더 복잡한 템플릿에서는 Data View에 관련 객체에 대한 Data Grid 및 기타 Data View가 포함될 수 있습니다.

자세한 정보는 [Data View (Document Template)](/refguide8/data-view-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/data-view-document-template/918139.png" class="no-border" >}}

주문 라인 정보를 표시하는 Data View입니다.
{{% /alert %}}

### Template Grid

Template Grid는 타일 뷰에 객체 목록을 표시합니다. 예를 들어, Template Grid는 제품 목록을 표시할 수 있습니다. Template Grid는 Data Grid와 많은 공통점이 있습니다. 주요 차이점은 객체가 행 대신 템플릿(작은 Data View와 유사)으로 표시된다는 것입니다.

자세한 정보는 [Template Grid (Document Template)](/refguide8/template-grid-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918137.png" class="no-border" >}}

이름과 설명이 있는 제품을 표시하는 Template Grid입니다.
{{% /alert %}}

## 레이아웃 위젯 {#layout}

레이아웃 위젯은 페이지에 구조를 부여합니다. 데이터를 표시하지 않지만 데이터를 표시하는 다른 위젯을 배치할 수 있는 레이아웃을 제공합니다.

### Table

Table은 페이지의 레이아웃을 변경하는 데 사용할 수 있습니다. 여러 행과 열을 포함하며 두 항목의 교차점을 셀이라고 합니다. 각 셀에는 위젯이 포함될 수 있습니다. 셀은 비대칭 레이아웃을 허용하기 위해 채워지기 전에 가로 및 세로로 병합할 수 있습니다.
Table은 Data View 또는 Template Grid 위젯 내부와 외부 모두에서 사용할 수 있습니다.

자세한 정보는 [Table (Document Template)](/refguide8/table-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918134.png" class="no-border" >}}

4개의 행과 3개의 열이 있는 Table입니다. 마지막 행에는 다른 Table이 포함된 Data View가 있습니다.
{{% /alert %}}

### Page Break

Page Break를 삽입하면 현재 페이지가 Break 이후에 잘리고 Break 아래의 위젯은 새 페이지에 표시됩니다.

자세한 정보는 [Page Break (Document Template)](/refguide8/page-break-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918135.png" class="no-border" >}}

Page Break
{{% /alert %}}

### Line Break

Line Break를 삽입하면 해당 위치에 새 줄이 삽입됩니다.

자세한 정보는 [Line Break (Document Template)](/refguide8/line-break-document-template/)를 참조하십시오.

## 동적 데이터 위젯 {#dynamic}

동적 데이터 위젯은 (동적) 데이터를 표시하는 데 사용됩니다. Entity의 속성(Attribute) 또는 연관(Association)을 표시하므로 Data View 또는 Template Grid 내부에 배치해야 합니다.

### Dynamic Label

Dynamic Label은 페이지 편집기의 텍스트 상자와 동일한 속성(Attribute) 타입에 사용됩니다. 텍스트 값을 표시하는 데 사용할 수 있습니다.

자세한 정보는 [Dynamic Label (Document Template)](/refguide8/dynamic-label-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918131.png" class="no-border" >}}

고객 이름에 연결된 Dynamic Label입니다.
{{% /alert %}}

### Dynamic Image

Dynamic Image는 System.Image를 표시하는 데 사용할 수 있습니다. 이미지를 사용할 수 없는 경우(예: 이미지가 저장되지 않은 경우) 미리 설정된 기본 이미지가 표시됩니다. Data View 또는 Template Grid 내부에 배치할 수 있습니다.

자세한 정보는 [Dynamic Image (Document Template)](/refguide8/dynamic-image-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918132.png" class="no-border" >}}

테이블 셀 내부에 미리 설정된 기본 이미지를 표시하는 Dynamic Image입니다.
{{% /alert %}}

## 정적 데이터 위젯 {#static}

이러한 위젯은 생성된 문서의 외관을 만드는 데 도움이 되는 정적(고정) 데이터를 포함합니다.

### Static Label

Static Label은 정적 텍스트 한 줄을 표시합니다. Data View 또는 Template Grid 또는 Table 내부에 사용자 정의 텍스트를 배치하는 데 사용할 수 있습니다.

자세한 정보는 [Static Label (Document Template)](/refguide8/static-label-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918130.png" class="no-border" >}}

'Customer name' 텍스트가 있는 레이블입니다.
{{% /alert %}}

### Title

Title은 Static Label과 비슷하게 작동하지만 Data View, Template Grid 또는 Table 외부에 배치할 수 있습니다.

자세한 정보는 [Title (Document Template)](/refguide8/title-document-template/)을 참조하십시오.

### Static Image

Static Image는 미리 정의된 이미지를 표시합니다. Data View 또는 Template Grid 내부 또는 외부에 배치할 수 있습니다.

자세한 정보는 [Static Image (Document Template)](/refguide8/static-image-document-template/)를 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918133.png" class="no-border" >}}

테이블 셀 내부의 Static Image입니다.
{{% /alert %}}

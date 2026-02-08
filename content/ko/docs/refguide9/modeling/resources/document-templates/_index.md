---
title: "Document Template"
url: /refguide9/document-templates/
weight: 90
aliases:
    - /refguide9/Document+Templates.html
    - /refguide9/Document+Templates
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
PDF 문서 생성에 대한 자세한 내용은 [PDF Document Generation](/appstore/modules/document-generation/) 모듈을 참조하십시오.
{{% /alert %}}

## 소개

Document Template은 애플리케이션 데이터를 기반으로 다양한 종류의 문서를 생성할 수 있는 문서 내보내기 액션의 입력으로 필요한 템플릿을 모델링하는 데 사용됩니다. [페이지](/refguide9/pages/)와 매우 유사한 방식으로 구성됩니다.

{{% alert color="warning" %}}
이 페이지에서는 Document Template의 용도와 배치할 수 있는 위젯의 종류를 설명합니다. Document Template 자체의 속성을 보려면 [Document Template](/refguide9/document-template/) 문서를 확인하십시오.
{{% /alert %}}

Document Template에는 *위젯*이라고도 하는 컴포넌트가 포함되어 있습니다. 아래는 모든 위젯의 카테고리별 개요입니다. 다음 카테고리가 사용됩니다:

* [핵심 위젯](#core)은 Mendix에서 Document Template을 구축하는 데 핵심적입니다. Entity의 목록 또는 단일 Entity를 표시할 수 있는 위젯입니다
* [레이아웃 위젯](#layout)은 Document Template의 레이아웃을 구조화하는 데 사용됩니다
* [동적 데이터 위젯](#dynamic)은 속성 및 연관의 값을 표시할 수 있게 합니다
* [정적 데이터 위젯](#static)은 미리 정의된 이미지와 같은 정적 데이터로 작업할 수 있습니다

또한, 대부분의 위젯과 Document Template 자체에서 스타일을 정의할 수 있습니다. 자세한 내용은 [Style](/refguide9/style/)을 참조하십시오.

아랍어나 태국어와 같은 특수 문자를 가진 언어로 텍스트를 표시하려면 이러한 문자를 지원하는 글꼴을 스타일 편집기에서 선택하십시오. "Tahoma"는 그러한 글꼴입니다.

## 핵심 위젯 {#core}

핵심 위젯은 Mendix에서 Document Template을 구축하는 데 핵심적입니다. 단일 Entity 또는 Entity 목록의 내용을 표시할 수 있습니다. Domain Model의 데이터를 표시하도록 설계된 모든 Document Template에는 이러한 컴포넌트 중 하나가 필요합니다.

### Data Grid

Data Grid는 그리드에서 객체 목록을 표시합니다. 예를 들어, Data Grid는 고객이 주문한 모든 주문을 표시할 수 있습니다.

자세한 내용은 [Data Grid (Document Template)](/refguide9/data-grid-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/data-grid-document-template/918138.png" class="no-border" >}}

설명과 참조된 고객 이름이 있는 주문 목록을 표시하는 Data Grid입니다.

{{% /alert %}}

### Data View

Data View는 정확히 하나의 객체의 내용을 표시하는 데 사용됩니다. 예를 들어, 단일 고객의 세부 정보를 표시하려면 Data View를 사용합니다. Data View에는 일반적으로 정적 라벨과 동적 라벨과 같은 동적 데이터 위젯이 있는 테이블이 포함됩니다. 더 복잡한 템플릿에서는 Data View에 관련 객체에 대한 Data Grid와 다른 Data View가 포함될 수 있습니다.

자세한 내용은 [Data View (Document Template)](/refguide9/data-view-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/data-view-document-template/918139.png" class="no-border" >}}

주문 라인 정보를 표시하는 Data View입니다.

{{% /alert %}}

### Template Grid

Template Grid는 타일 뷰에서 객체 목록을 표시합니다. 예를 들어, Template Grid는 제품 목록을 표시할 수 있습니다. Template Grid는 Data Grid와 많은 공통점이 있습니다. 주요 차이점은 객체가 행 대신 템플릿(작은 Data View와 유사한 형태)으로 표시된다는 것입니다.

자세한 내용은 [Template Grid (Document Template)](/refguide9/template-grid-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918137.png" class="no-border" >}}

이름과 설명이 있는 제품을 표시하는 Template Grid입니다.

{{% /alert %}}

## 레이아웃 위젯 {#layout}

레이아웃 위젯은 페이지에 구조를 제공합니다. 데이터를 표시하지 않지만 데이터를 표시하는 다른 위젯을 배치할 수 있는 레이아웃을 제공합니다.

### 테이블

테이블은 페이지의 레이아웃을 변경하는 데 사용할 수 있습니다. 여러 행과 열을 포함하며, 두 개의 교차점을 셀이라고 합니다. 각 셀에는 위젯이 포함될 수 있습니다. 셀은 비대칭 레이아웃을 허용하기 위해 채워지기 전에 수평 및 수직으로 병합할 수 있습니다.
테이블은 Data View 또는 Template Grid 위젯의 내부 및 외부 모두에서 사용할 수 있습니다.

자세한 내용은 [Table (Document Template)](/refguide9/table-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918134.png" class="no-border" >}}

4개의 행과 3개의 열이 있는 테이블입니다. 마지막 행에는 다른 테이블이 있는 Data View가 포함되어 있습니다.

{{% /alert %}}

### 페이지 나누기

페이지 나누기를 삽입하면 현재 페이지가 나누기 후에 잘리며 나누기 아래의 위젯은 새 페이지에 표시됩니다.

자세한 내용은 [Page Break (Document Template)](/refguide9/page-break-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918135.png" class="no-border" >}}

페이지 나누기

{{% /alert %}}

### 줄 바꿈

줄 바꿈을 삽입하면 해당 위치에 새 줄이 삽입됩니다.

자세한 내용은 [Line Break (Document Template)](/refguide9/line-break-document-template/)을 참조하십시오.

## 동적 데이터 위젯 {#dynamic}

동적 데이터 위젯은 (동적) 데이터를 표시하는 데 사용됩니다. Entity의 속성 또는 연관을 표시하므로 Data View 또는 Template Grid 내부에 배치해야 합니다.

### 동적 라벨

동적 라벨은 페이지 편집기의 텍스트 상자와 동일한 속성 유형에 사용됩니다. 텍스트 값을 표시하는 데 사용할 수 있습니다.

자세한 내용은 [Dynamic Label (Document Template)](/refguide9/dynamic-label-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918131.png" class="no-border" >}}

고객 이름에 연결된 동적 라벨입니다.

{{% /alert %}}

### 동적 이미지

동적 이미지는 System.Image를 표시하는 데 사용할 수 있습니다. 이미지를 사용할 수 없는 경우(예: 이미지가 저장된 적이 없는 경우) 미리 설정된 기본 이미지를 표시합니다. Data View 또는 Template Grid 내부에 배치할 수 있습니다.

자세한 내용은 [Dynamic Image (Document Template)](/refguide9/dynamic-image-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918132.png" class="no-border" >}}

테이블 셀 내부에 있는 동적 이미지로, 미리 설정된 기본 이미지를 표시합니다.

{{% /alert %}}

## 정적 데이터 위젯 {#static}

이러한 위젯에는 생성된 문서의 외관을 만드는 데 도움이 되는 정적(고정) 데이터가 포함되어 있습니다.

### 정적 라벨

정적 라벨은 한 줄의 정적 텍스트를 표시합니다. Data View, Template Grid 또는 테이블 내부에 사용자 정의 텍스트를 배치하는 데 사용할 수 있습니다.

자세한 내용은 [Static Label (Document Template)](/refguide9/static-label-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918130.png" class="no-border" >}}

'Customer name' 텍스트가 있는 라벨입니다.

{{% /alert %}}

### 제목

제목은 정적 라벨과 매우 유사하게 작동하지만 Data View, Template Grid 또는 테이블 외부에 배치할 수 있습니다.

자세한 내용은 [Title (Document Template)](/refguide9/title-document-template/)을 참조하십시오.

### 정적 이미지

정적 이미지는 미리 정의된 이미지를 표시합니다. Data View 또는 Template Grid의 내부 또는 외부에 배치할 수 있습니다.

자세한 내용은 [Static Image (Document Template)](/refguide9/static-image-document-template/)을 참조하십시오.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918133.png" class="no-border" >}}

테이블 셀 내부의 정적 이미지입니다.

{{% /alert %}}

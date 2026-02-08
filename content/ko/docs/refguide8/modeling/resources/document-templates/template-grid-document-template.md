---
title: "Template Grid (Document Template)"
url: /refguide8/template-grid-document-template/
aliases:
    - /refguide8/Template+Grid+(document+template).html
    - /refguide8/template-grid-(document-template).html
    - /refguide8/Template+Grid+(document+template)
    - /refguide8/template-grid-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Template Grid는 타일 뷰에 객체 목록을 표시합니다. 예를 들어, Template Grid는 제품 목록을 표시할 수 있습니다. Template Grid는 Data Grid와 많은 공통점이 있습니다. 주요 차이점은 객체가 행 대신 템플릿(일종의 작은 Data View)으로 표시된다는 것입니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918137.png" class="no-border" >}}

이름, 설명 및 이미지가 있는 제품을 표시하는 Template Grid입니다.
{{% /alert %}}

## 컴포넌트

### Sort Bar

[Sort Bar](/refguide8/sort-bar/)를 참조하십시오.

## 외관 속성

### 줄무늬 활성화

줄무늬를 활성화하면 짝수 및 홀수 Template Grid 행의 내용을 개별적으로 설정할 수 있습니다. 이 방법으로 두 가지 다른 행 스타일의 색상을 변경하여 줄무늬 효과를 만들 수 있습니다.

### 열 수

Template Grid에 포함될 열의 수를 정의합니다.

## 공통 속성

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

## 데이터 소스 속성

데이터 소스 속성은 Template Grid에 표시될 객체를 결정합니다. Template Grid의 객체 목록은 다음 메커니즘에 의해 제한됩니다:

1. 최상위 Template Grid의 경우, 문서 내보내기 Action을 호출하는 Microflow에서 전달된 객체가 표시됩니다.
2. 중첩된 Template Grid의 경우, Entity 경로가 사용되면 포함하는 객체에서 경로를 따라 도달할 수 있는 객체만 표시됩니다.
3. 중첩된 Template Grid의 경우, Microflow가 사용되면 Microflow에서 반환된 객체가 표시됩니다.

### Entity (Path)

Entity (path) 속성은 Template Grid에 표시될 Entity 인스턴스를 지정합니다. 최상위 Template Grid는 항상 Entity에 연결됩니다. 중첩된 Template Grid는 Entity에 연결되거나 포함하는 Data View의 Entity에서 시작하는 Entity 경로에 연결될 수 있습니다. Entity 경로는 타입과 소유권에 관계없이 연관(Association)을 따를 수 있습니다.

### Microflow

중첩된 Template Grid가 Entity에 연결된 경우, 데이터를 검색하기 위해 Microflow가 필요합니다. 이러한 Microflow의 입력 파라미터는 항상 포함하는 Data View의 객체이며 출력은 중첩된 Template Grid 타입의 객체 목록입니다.

---
title: "Data View (Document Template)"
url: /refguide9/data-view-document-template/
aliases:
    - /refguide9/Data+View+(document+template).html
    - /refguide9/data-view-(document-template).html
    - /refguide9/Data+View+(document+template)
    - /refguide9/data-view-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Data View는 정확히 하나의 객체의 내용을 표시하는 데 사용됩니다. 예를 들어, 단일 주문 라인의 세부 정보를 표시하려면 Data View를 사용하는 것이 가장 쉽습니다. Data View에는 일반적으로 정적 라벨과 동적 라벨과 같은 동적 데이터 위젯이 있는 테이블이 포함됩니다. 더 복잡한 템플릿에서는 Data View에 관련 객체에 대한 Data Grid와 다른 Data View가 포함될 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/data-view-document-template/918139.png" class="no-border" >}}

주문 라인 정보를 표시하는 Data View입니다.

{{% /alert %}}

## 공통 속성

{{% snippet file="/static/_includes/refguide9/name-property.md" %}}

## 데이터 소스 속성

데이터 소스 속성은 Data Grid에 표시될 객체를 결정합니다. Data Grid의 객체 목록은 다음 메커니즘에 의해 제한됩니다:

1. 최상위 Data Grid의 경우 문서 내보내기 액션을 호출하는 Microflow에 전달된 객체가 표시됩니다.
2. 중첩된 Data Grid의 경우 Entity 경로가 사용되면 포함된 객체에서 경로를 따라 도달할 수 있는 객체만 표시됩니다.
3. 중첩된 Data Grid의 경우 Microflow가 사용되면 Microflow에서 반환된 객체가 표시됩니다.

### Entity (Path)

Entity (path) 속성은 Data View에 표시될 Entity 인스턴스를 지정합니다. 최상위 Data View는 항상 Entity에 연결됩니다. 중첩된 Data View는 Entity에 연결되거나 포함된 Data View의 Entity에서 시작하는 Entity 경로에 연결될 수 있습니다. Entity 경로는 유형 및 소유권에 관계없이 연관을 따를 수 있습니다.

### Microflow

중첩된 Data View가 Entity에 연결된 경우 데이터를 검색하기 위해 Microflow가 필요합니다. 이러한 Microflow의 입력 매개변수는 항상 포함된 Data View의 객체이며, 출력은 중첩된 Data View의 Entity 유형 객체입니다.

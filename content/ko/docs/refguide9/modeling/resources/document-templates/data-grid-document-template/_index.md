---
title: "Data Grid (Document Template)"
url: /refguide9/data-grid-document-template/
aliases:
    - /refguide9/Data+Grid+(document+template).html
    - /refguide9/data-grid-(document-template).html
    - /refguide9/Data+Grid+(document+template)
    - /refguide9/data-grid-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Data Grid는 그리드에서 객체 목록을 표시합니다. 예를 들어, Data Grid는 고객이 주문한 모든 주문을 표시할 수 있습니다.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/data-grid-document-template/918138.png" class="no-border" >}}

설명과 참조된 고객 이름이 있는 주문 목록을 표시하는 Data Grid입니다.

{{% /alert %}}

## 컴포넌트

### 열

[Columns (Document Template)](/refguide9/columns-document-template/)을 참조하십시오.

### Sort Bar

[Sort Bar](/refguide9/sort-bar/)를 참조하십시오.

## 외관 속성

### 열 가중치

열 가중치는 열의 너비를 결정하는 세미콜론으로 구분된 백분율입니다. 가중치의 합은 100이어야 합니다. 열 너비를 변경하는 대안적인 방법은 열 사이의 구분선을 끌어서 변경하는 것입니다.

{{% alert color="info" %}}
위 스크린샷에서 열 가중치는 50;25;25입니다.
{{% /alert %}}

### 셀 간격

셀 간격은 셀 사이의 공간을 지정합니다.

### 셀 패딩

셀 패딩은 셀 내용과 셀 벽 사이의 공간을 지정합니다.

### 줄무늬 활성화

줄무늬를 활성화하면 짝수 및 홀수 Data Grid 행의 속성을 개별적으로 설정할 수 있습니다. 이를 통해 두 가지 다른 행 스타일의 색상을 변경하여 줄무늬 효과를 만들 수 있습니다.

### 스타일

[Style](/refguide9/style/)을 참조하십시오.

## 공통 속성

### 이름

위젯의 내부 이름입니다. 위젯에 의미 있는 이름을 지정하는 데 사용할 수 있습니다. 이름 속성은 생성된 HTML에도 나타납니다: 위젯 DOM 요소에는 자동으로 '`mx-name-{NAME}`' 클래스가 포함되어 [Selenium 테스트](/howto9/integration/selenium-support/)에 유용할 수 있습니다.

## 데이터 소스 속성

데이터 소스 속성은 Data Grid에 표시될 객체를 결정합니다. Data Grid의 객체 목록은 다음 메커니즘에 의해 제한됩니다:

1. 최상위 Data Grid의 경우 문서 내보내기 액션을 호출하는 Microflow에 전달된 객체가 표시됩니다.
2. 중첩된 Data Grid의 경우 Entity 경로가 사용되면 포함된 객체에서 경로를 따라 도달할 수 있는 객체만 표시됩니다.
3. 중첩된 Data Grid의 경우 Microflow가 사용되면 Microflow에서 반환된 객체가 표시됩니다.

### Entity (Path)

Entity (path) 속성은 Data Grid에 표시될 Entity 인스턴스를 지정합니다. 최상위 Data Grid는 항상 Entity에 연결됩니다. 중첩된 Data Grid는 Entity에 연결되거나 포함된 Data View의 Entity에서 시작하는 Entity 경로에 연결될 수 있습니다. Entity 경로는 유형 및 소유권에 관계없이 연관을 따를 수 있습니다.

### Microflow

중첩된 Data Grid가 템플릿에 연결된 경우 데이터를 검색하기 위해 Microflow가 필요합니다. 이러한 Microflow의 입력 매개변수는 항상 포함된 Data View의 객체이며, 출력은 중첩된 Data Grid 유형의 객체 목록입니다.

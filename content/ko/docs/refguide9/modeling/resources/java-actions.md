---
title: "Java Action"
url: /refguide9/java-actions/
weight: 10
description: "Java Action을 사용하여 Mendix 앱의 기능을 확장하는 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Java Action을 사용하면 Microflow로 구현하기 어려운 상황에서 애플리케이션의 기능을 확장할 수 있습니다. [Java Action Call](/refguide9/java-action-call/)을 사용하여 Microflow에서 Java Action을 호출할 수 있습니다.

{{% alert color="info" %}}
Studio Pro에서 정의된 각 Java Action은 앱 디렉토리의 하위 디렉토리 *javasource/{module name}/actions*에 있는 파일 *{Java Action 이름}.java*에 해당합니다.

이러한 *.java* 파일의 스켈레톤은 Eclipse용으로 배포할 때(**App** 메뉴에서) 자동으로 생성됩니다. 이러한 파일에서 Java 코드를 생성하는 방법에 대한 자세한 내용은 [Java Programming](/refguide9/java-programming/)을 참조하십시오.
{{% /alert %}}

## 일반

### 이름

Java Action의 이름은 Microflow에서 호출할 때 참조하는 데 사용됩니다. 생성된 *.java* 파일의 이름이기도 합니다.

### 매개변수

Java Action에는 0개 이상의 매개변수가 있습니다. 매개변수는 Java Action에 데이터를 전달하는 수단입니다. Java 코드에서 매개변수의 값에 접근할 수 있습니다.

각 매개변수에는 이름, 유형, 카테고리 및 설명이 있습니다. 

카테고리를 사용하여 [Java Action Call](/refguide9/java-action-call/)에서 매개변수를 구분하십시오. 카테고리를 지정하지 않으면 매개변수가 **Input** 그룹에 나타납니다.

가능한 표준 매개변수 유형은 [Data Types](/refguide9/data-types/)를 참조하십시오. 유형이 Object 또는 List인 경우 Entity 유형도 선택해야 하며, 이는 특정 Entity 또는 유형 매개변수일 수 있습니다. 유형 매개변수는 Java Action이 Microflow에서 사용될 때까지 실제 Entity 유형의 선택을 연기합니다. 이를 통해 Java Action이 임의의 Entity 유형의 Mendix 객체(목록)를 수락할 수 있습니다.

Java Action이 지원하는 다른 유형은 아래에 설명되어 있습니다.

#### Entity 유형

**Entity** 매개변수 유형은 Microflow에서 호출될 때 Entity의 이름으로 채워질 Entity의 자리 표시자입니다. 또한 Entity 유형은 유형 매개변수를 채우는 데 사용할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 유형은 문자열로 표현됩니다.

일반적인 사용 사례는 다음을 포함하지만 이에 국한되지 않습니다:

* 쿼리 결과를 특정 Entity 유형에 매핑
* 유형별로 Entity 쿼리, 검색 및 필터링

#### Microflow 유형

**Microflow** 매개변수 유형을 사용하면 Java Action 사용자가 Microflow를 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 유형은 문자열(즉, Microflow의 이름)로 표현됩니다.

#### Import Mapping 유형

**Import mapping** 매개변수 유형을 사용하면 Import Mapping을 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 유형은 문자열(즉, Import Mapping의 이름)로 표현됩니다.

#### Export Mapping 유형

**Export mapping** 매개변수 유형을 사용하면 Export Mapping을 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 유형은 문자열(Export Mapping의 이름)로 표현됩니다.

#### String Template 유형 {#string-template-type}

**String template** 매개변수 유형을 사용하면 문자열 템플릿을 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 유형은 `IStringTemplate`으로 표현됩니다.

템플릿에는 중괄호 사이에 숫자로 작성된 매개변수가 포함될 수 있습니다(예: `{1}`). 첫 번째 매개변수의 번호는 `1`이고, 두 번째는 `2`입니다.

템플릿의 각 매개변수에 대해 Microflow 표현식을 정의하며, 해당 값이 매개변수 위치에 삽입됩니다. 

생성된 코드에서 `IStringTemplate` 유형은 기본 또는 사용자 정의 로직을 사용하여 전달된 문자열 템플릿을 평가하는 메서드를 제공합니다. 

### 반환

Java Action은 앱에 다양한 데이터 유형을 반환할 수 있습니다.

#### 반환 유형

반환 유형은 Java Action이 반환하는 데이터 유형을 결정합니다. 이는 *.java* 파일의 `executeAction()` 메서드의 반환 유형에 해당합니다. Java Action의 결과를 호출한 Microflow에서 사용할 수 있습니다. 가능한 반환 유형은 [Data Types](/refguide9/data-types/)를 참조하십시오.

매개변수와 마찬가지로 반환 유형도 일부 유형 매개변수의 객체 또는 목록일 수 있습니다. 반환 유형에 대해 선택한 유형 매개변수는 Java Action 매개변수 중 하나 이상에서도 사용되어야 합니다.

#### 변수 이름

이 설정을 사용하면 반환 유형이 선택된 경우 Java Action의 반환 값에 이름을 지정할 수 있습니다. 이 이름은 액션을 Microflow에 끌어 놓을 때 사용됩니다. 기본값은 **ReturnValueName**으로 설정됩니다.

{{% alert color="info" %}}
반환 변수의 이름을 지정하는 기능은 Mendix 버전 9.23.0에서 추가되었습니다
{{% /alert %}}

## 유형 매개변수

유형 매개변수는 Microflow에서 호출될 때 특정 Entity로 채워질 Entity 유형의 자리 표시자입니다. 유형 매개변수는 매개변수의 데이터 유형을 구성할 때 사용할 수 있으며, 이를 통해 사용자가 임의의 Entity 유형의 객체 또는 목록을 전달할 수 있습니다.

Java Action에는 0개 이상의 유형 매개변수가 있습니다. 각 유형 매개변수는 고유한 이름을 가져야 합니다.

## Microflow Action으로 노출 {#expose-microflow-action}

**Expose as microflow action** 옵션을 선택하면 Java Action을 Microflow Action으로 노출할 수 있습니다. Java Action을 노출하면 선택한 카테고리에서 Microflow를 편집할 때 **Toolbox** 창에 나타납니다. 이 액션이 Microflow에서 사용되면 제공된 캡션과 아이콘이 표시됩니다.

Microflow Action의 캡션과 카테고리는 필수이지만, 아이콘과 타일 이미지는 선택 사항입니다. Studio Pro의 라이트 모드와 다크 모드에 대해 독립적으로 아이콘과 타일 이미지를 지정할 수 있습니다. 아이콘 또는 타일 이미지가 선택되지 않으면 기본 Java Action 아이콘과 타일 이미지가 사용됩니다.

아이콘 크기는 64x64 픽셀이어야 하고 타일 이미지는 256x192 픽셀이어야 합니다. 이미지는 PNG 형식이어야 합니다.

## 문서화

Java Action 대화 상자의 **Documentation** 탭에서 Java Action을 문서화할 수 있습니다. 문서화는 해당 *.java* 파일 클래스의 `Javadoc`에 복사됩니다.

---
title: "Java Action"
url: /refguide8/java-actions/
weight: 10
description: "Mendix 앱의 기능을 확장하기 위한 Java Action 사용에 대해 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Java Action을 사용하면 Microflow로 구현하기 어려운 상황에서 애플리케이션의 기능을 확장할 수 있습니다. [Java Action Call](/refguide8/java-action-call/)을 사용하여 Microflow에서 Java Action을 호출할 수 있습니다.

{{% alert color="info" %}}
Studio Pro에서 정의된 각 Java Action은 프로젝트 디렉토리의 하위 디렉토리 *javasource/{모듈 이름}/actions*에 있는 *{Java Action 이름}.java* 파일에 해당합니다. 이러한 *.java* 파일의 스켈레톤은 Eclipse용으로 배포할 때(**Project** 메뉴에서) 자동으로 생성됩니다. 이러한 파일에서 Java 코드를 작성하는 방법에 대한 자세한 정보는 [Java Programming](/refguide8/java-programming/)을 참조하십시오.
{{% /alert %}}

Java Action에 대한 심층적인 내용은 아래 동영상을 확인하십시오:

{{< vidyard "rof7aUB6Hom4et6qQU7FuT?" >}}

## 일반

### 이름

Java Action의 이름은 Microflow에서 호출할 때 참조하는 데 사용됩니다. 또한 생성되는 *.java* 파일의 이름이기도 합니다.

### 파라미터

Java Action에는 0개 이상의 파라미터가 있습니다. 파라미터는 Java Action에 데이터를 전달하는 수단입니다. Java 코드에서 파라미터의 값에 접근할 수 있습니다.

각 파라미터에는 이름, 타입, 카테고리 및 설명이 있습니다. 

[Java Action Call](/refguide8/java-action-call/)에서 파라미터를 구분하기 위해 카테고리를 사용하십시오. 카테고리를 지정하지 않으면 파라미터는 **Input** 그룹에 표시됩니다.

가능한 표준 파라미터 타입에 대해서는 [Data Types](/refguide8/data-types/)를 참조하십시오. 타입이 Object 또는 List인 경우, Entity 타입도 선택해야 하며, 이는 특정 Entity이거나 타입 파라미터일 수 있습니다. 타입 파라미터는 Java Action이 Microflow에서 사용될 때까지 실제 Entity 타입의 선택을 연기합니다. 이를 통해 Java Action이 임의의 Entity 타입의 Mendix 객체(또는 목록)를 수용할 수 있습니다.

Java Action에서 지원되는 기타 타입은 아래에 설명되어 있습니다.

#### Entity 타입

**Entity** 파라미터 타입은 Microflow에서 호출될 때 Entity 이름으로 채워지는 플레이스홀더입니다. 또한 Entity 타입은 타입 파라미터를 채우는 데 사용할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 타입은 문자열로 표현됩니다.

일반적인 사용 사례는 다음을 포함하지만 이에 국한되지 않습니다:

* 쿼리 결과를 특정 Entity 타입에 매핑
* 타입별로 Entity 조회, 검색 및 필터링

#### Microflow 타입

**Microflow** 파라미터 타입을 사용하면 Java Action 사용자가 Microflow를 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 타입은 문자열(즉, Microflow의 이름)로 표현됩니다.

#### Import Mapping 타입

**Import mapping** 파라미터 타입을 사용하면 Import Mapping을 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 타입은 문자열(즉, Import Mapping의 이름)로 표현됩니다.

#### Export Mapping 타입

**Export mapping** 파라미터 타입을 사용하면 Export Mapping을 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 타입은 문자열(Export Mapping의 이름)로 표현됩니다.

#### String Template 타입 {#string-template-type}

**String template** 파라미터 타입을 사용하면 String Template를 Java Action에 전달할 수 있습니다. 생성된 Java Action 템플릿 코드에서 이 타입은 `IStringTemplate`로 표현됩니다.

템플릿에는 중괄호 사이에 숫자로 작성된 파라미터가 포함될 수 있습니다(예: `{1}`). 첫 번째 파라미터는 번호 `1`, 두 번째는 `2` 등입니다.

템플릿의 각 파라미터에 대해 Microflow 표현식을 정의하며, 그 값은 파라미터 위치에 삽입됩니다. 

생성된 코드에서 `IStringTemplate` 타입은 기본 또는 사용자 정의 로직을 사용하여 전달된 String Template를 평가하는 메서드를 제공합니다. 

#### 반환 타입

반환 타입은 Java Action이 반환하는 데이터의 타입을 결정합니다. 이는 Java Action의 *.java* 파일에 있는 `executeAction()` 메서드의 반환 타입에 해당합니다. Java Action을 호출하는 Microflow에서 Java Action의 결과를 사용할 수 있습니다. 가능한 반환 타입에 대해서는 [Data Types](/refguide8/data-types/)를 참조하십시오.

파라미터와 마찬가지로 반환 타입도 특정 타입 파라미터의 객체 또는 목록일 수 있습니다. 반환 타입에 선택한 타입 파라미터는 Java Action 파라미터 중 하나 이상에서도 사용되어야 합니다.

## 타입 파라미터

타입 파라미터는 Microflow에서 호출될 때 특정 Entity로 채워지는 Entity 타입의 플레이스홀더입니다. 타입 파라미터는 파라미터의 데이터 타입을 구성할 때 사용할 수 있으며, 사용자가 임의의 Entity 타입의 객체 또는 목록을 전달할 수 있게 합니다.

Java Action에는 0개 이상의 타입 파라미터가 있습니다. 각 타입 파라미터는 고유한 이름을 가져야 합니다.

## Microflow Action으로 노출

**Expose as microflow action** 옵션을 선택하면 Java Action을 Microflow Action으로 노출할 수 있습니다. Java Action을 노출하면 Microflow를 편집할 때 선택한 카테고리의 **Toolbox** 창에 표시됩니다. 이 Action이 Microflow에서 사용되면 제공된 캡션과 아이콘이 표시됩니다.

Microflow Action의 캡션과 카테고리는 필수이지만 아이콘은 선택 사항입니다. 아이콘을 선택하지 않으면 기본 Java Action 아이콘이 사용됩니다.

아이콘의 권장 크기는 16x16 픽셀입니다.

## 문서화

Java Action 대화 상자의 **Documentation** 탭에서 Java Action을 문서화할 수 있습니다. 문서화 내용은 해당 *.java* 파일 클래스의 `Javadoc`에 복사됩니다.

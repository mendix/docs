---
title: "Mendix 9"
url: /apidocs-mxsdk/apidocs/design-properties-9/
description: "이 API 가이드는 Atlas UI에서 디자인 속성이 작동하는 방식을 개략적으로 설명하며 사용자 지정 디자인 속성을 만드는 데 도움이 될 수 있습니다."
weight: 70
---

## 1 소개

Mendix Design Properties API를 사용하면 Mendix 앱에 대한 디자인 속성을 생성하거나 확장할 수 있습니다.

API를 사용하려면 애플리케이션의 **themesource** 폴더에 있는 특정 모듈의 *design-properties.json* 파일을 변경해야 합니다. 이 프로세스는 아래의 [디자인 속성 정의(Design Properties Definitions)](#design-properties-definitions) 섹션에 설명되어 있습니다.

이 가이드는 디자인 속성이 작동하는 방식을 개략적으로 설명하며 사용자 지정 디자인 속성을 만드는 데 도움이 될 수 있습니다. 많은 앱은 단순히 Atlas UI 테마와 포함된 디자인 속성 세트를 사용하여 스타일링 요구 사항을 충족할 수 있습니다. Atlas UI는 이 가이드에 설명된 기능 위에 구축된 디자인 속성을 제공합니다. 따라서 Atlas UI의 디자인 속성이 아래 예제로 사용되지만 디자인 속성 자체는 Atlas UI 테마만을 위한 것이 아닙니다. 사실 스타일링을 더 깊이 사용자 지정하려면 고유한 사용자 지정 디자인 속성을 만들어야 합니다.

디자인 속성은 Mendix 테마 모듈과 함께 제공되는 특별한 설정 세트입니다. 디자인 속성은 특정 테마 모듈을 사용하는 모든 Mendix 앱 간에 공유됩니다.

Studio Pro의 **Properties** 창이나 위젯 설정 대화 상자의 **Appearance** 탭에서 위젯에 사용할 수 있는 디자인 속성을 확인할 수 있습니다.

## 2 디자인 속성 사용

Mendix 앱의 스타일을 지정하는 동안 사용자는 종종 다른 페이지의 위젯에 동일한 CSS 또는 기본 스타일링 클래스 세트를 반복해서 적용해야 합니다. 이 작업은 시간이 많이 걸리며 위젯에 클래스를 적용하기 위해 텍스트 필드를 편집할 때 인적 오류가 발생하기 쉽습니다.

디자인 속성은 이 작업을 더 쉽고 안전하게 만들 수 있습니다. 고유한 사용자 지정 디자인 속성을 구성하면 몇 번의 클릭만으로 위젯에 특정 스타일을 적용할 수 있습니다.

## 3 디자인 속성 유형

디자인 속성에는 **Toggle**과 **Dropdown**의 두 가지 유형이 있습니다. 기본적으로 디자인 속성은 위젯에 영향을 미치지 않습니다. **Toggle** 속성이 켜져 있거나 **Dropdown** 속성에 대해 옵션 중 하나가 선택된 경우에만 스타일이 적용됩니다.

**Toggle** 디자인 속성은 위젯에 대해 켤 수 있는 간단한 속성입니다. 이 속성이 설정되면 구성된 클래스가 위젯에 자동으로 적용됩니다. 예를 들어, **Toggle** 속성은 Atlas UI 버튼 위젯의 **Full width** 속성일 수 있습니다. 이 속성이 버튼에 대해 설정되면 `btn-block` CSS 클래스가 적용됩니다. 속성이 설정되지 않으면 추가 클래스가 적용되지 않습니다.

**Dropdown** 유형의 디자인 속성은 옵션별로 별도의 클래스가 있는 옵션 세트를 정의합니다. 옵션 중 하나가 선택되면 해당 클래스가 위젯에 적용됩니다. 예를 들어, **Dropdown** 속성은 Atlas UI **Align self** 속성일 수 있습니다. 여기에는 **Left**와 **Right**의 두 가지 옵션이 포함됩니다. 이 옵션 중 하나가 선택되면 `pull-left` 또는 `pull-right` CSS 클래스가 적용됩니다.

## 4 디자인 속성 정의 {#design-properties-definitions}

디자인 속성은 **JSON** 형식으로 모듈 수준에서 정의됩니다. 이들은 모듈별 *themesource* 폴더에 있습니다(자세한 내용은 *스타일링 사용자 지정 방법(How to Customize Styling)*의 [파일 및 폴더 구조(File and Folder Structure)](/howto/front-end/customize-styling-new/#file-and-folder) 섹션 참조). 웹 및 네이티브 플랫폼의 스타일링 방식이 다르기 때문에 각 플랫폼의 디자인 속성은 다르며 두 개의 별도 폴더에 정의됩니다. 웹 스타일링은 *web/design-properties.json* 파일에 정의됩니다. 네이티브 스타일링은 *native/design-properties.json* 파일에 정의됩니다.

다음은 디자인 속성 파일의 간단한 예입니다:

```js
{
    "DivContainer": [
        {
            "name": "My Toggle Property",
            "type": "Toggle",
            "description": "Description of My Toggle Design Property",
            "class": "hereMyClass"
        },
        {
            "name": "My Dropdown Property",
            "type": "Dropdown",
            "description": "Description of My Dropdown Design Property",
            "options": [
                {
                    "name": "Styling option 1",
                    "class": "stylingClassOne"
                },
                {
                    "name": "Styling option 2",
                    "class": "stylingClassTwo"
                }
            ]
        }
    ],
    "Button": [
        ...
    ]
}
```

### 4.1 디자인 속성 구조

위의 예를 더 간단하게 하려면 이 코드를 사용하십시오:

```js
{
    "DivContainer": [
        {
            ... property one
        },
        {
            ... property two
        }
    ],
    "Button": [
        ...
    ]
}
```

위의 구조에서 볼 수 있듯이 디자인 속성은 *JSON* 객체로 정의되며 여기서 키(`DivContainer` 및 `Button` 등)는 위젯 유형이고 값은 해당 위젯 유형에 적용할 수 있는 디자인 속성 세트를 포함하는 *JSON* 배열입니다. 이 주제에 대해 자세히 알아보려면 아래의 [위젯 유형(#widget-types)](#widget-types) 섹션을 참조하십시오. 속성에 여러 클래스 이름을 추가할 수 있습니다.

배열의 모든 디자인 속성도 *JSON* 객체로 나타납니다. 앞서 설명한 대로 디자인 속성에는 **Toggle**과 **Dropdown**의 두 가지 유형이 있습니다. 두 유형 모두 `name`, `type` 및 `description`과 같은 공통 필드를 공유합니다. 이러한 이름은 디자인 속성이 Mendix Studio Pro에서 사용자에게 어떻게 표시되는지 결정합니다. 아래에서 두 가지 유형의 디자인 속성 예를 볼 수 있습니다.

다음은 **Toggle** 디자인 속성의 예입니다:

```js
{
    "name": "My Toggle Property",
    "type": "Toggle",
    "description": "Description of My Toggle Design Property",
    "class": "hereMyClass"
}
```

**Toggle** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/toggle.png" alt="Studio Pro의 토글 속성" >}}

다음은 **Dropdown** 디자인 속성의 예입니다:

```js
{
    "name": "My Dropdown Property",
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Styling option 1",
            "class": "stylingClassOne"
        },
        {
            "name": "Styling option 2",
            "class": "stylingClassTwo"
        }
    ]
}
```

**Dropdown** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/dropdown.png" alt="Studio Pro의 드롭다운 속성" max-width=80% >}}

#### 4.1.1 공통 필드

위의 예에서 볼 수 있듯이 `name` 및 `description` 필드는 UI, Studio Pro의 양식 컨트롤 이름 및 그 아래의 설명을 정의합니다. 디자인 속성의 이름을 지정하고 설명하는 임의의 문자열 값입니다.

`type` 필드는 속성의 유형을 정의하며 `Toggle` 또는 `Dropdown`의 두 문자열 값 중 하나만 가질 수 있습니다.

{{% alert color="warning" %}}
디자인 속성과 해당 옵션의 이름을 신중하게 지정하십시오. 이미 해당 이름을 사용하는 앱이 있는 경우 이름을 쉽게 변경할 수 없습니다.

이미 앱에서 사용 중인 디자인 속성의 이름을 바꾸려면 아래의 [디자인 속성 이름 바꾸기(#old-names)](#old-names) 섹션을 참조하십시오.
{{% /alert %}}

#### 4.1.2 Toggle 관련 필드

디자인 속성의 유형이 **Toggle**인 경우 속성 정의의 최상위 수준에 `class` 필드를 포함해야 합니다. 이 필드는 위젯에 대해 옵션이 켜져 있는 경우 적용할 임의의 클래스 이름을 정의합니다. 위의 예에서 적용할 클래스는 `hereMyClass`입니다.

#### 4.1.3 Dropdown 관련 필드

디자인 속성의 유형이 **Dropdown**인 경우 디자인 속성에 대한 가능한 옵션의 배열인 `options` 필드를 포함해야 합니다. 모든 옵션은 `name` 및 `class` 필드가 있는 객체여야 합니다. 위의 예에는 **Styling option 1**과 **Styling option 2**라는 두 가지 옵션이 있습니다. 각각 `stylingClassOne` 및 `stylingClassTwo` 클래스가 있습니다.

### 4.2 다른 모듈의 디자인 속성 확장 또는 재정의 {#extend-existing-design-properties}

디자인 속성은 다른 모듈에서 확장하거나 재정의할 수 있습니다. 예를 들어, Atlas 디자인 속성에 사용자 지정 드롭다운 옵션을 추가하거나 토글 속성의 적용된 CSS 클래스를 재정의할 수 있습니다.

디자인 속성을 재정의하는 것은 Atlas 스타일링 위에 구축되는 테마 모듈을 만들 때 유용할 수 있습니다. 이렇게 하려면 동일한 이름과 속성 유형을 사용하여 *themesource/{YOURTHEMEMODULE}/{WEB|NATIVE}/design-properties.json*의 동일한 위젯 유형에 디자인 속성을 추가하기만 하면 됩니다.

디자인 속성의 우선 순위는 다음 모듈 컴파일 순서에 따라 결정됩니다:

1. Non-UI Marketplace 모듈(알파벳 순서)
1. UI 리소스 모듈(**App Settings** > **Theme**에 정렬된 순서)
1. Non-UI 사용자 모듈(Studio Pro App Explorer에 정렬된 순서)

여러 모듈에 동일한 이름의 **Dropdown** 속성 정의가 있는 경우 옵션은 높은 우선 순위에서 낮은 우선 순위로(가장 높은 것이 위에) 정렬됩니다. 여러 모듈에 동일한 이름의 **Toggle** 속성 정의가 있는 경우 가장 높은 우선 순위를 가진 모듈의 CSS 클래스 이름이 속성 사용 시 적용됩니다.

{{% alert color="warning" %}}
다른 유형(예: **Toggle** 및 **Dropdown**)의 여러 정의가 있으면 잘못된 구성이 되어 디자인 속성을 로드하는 데 실패합니다.
{{% /alert %}}

## 5 위젯 유형{#widget-types}

*JSON* 파일에서 디자인 속성을 정의할 때 일부 디자인 속성은 특정 위젯에서만 작동할 수 있으므로 속성이 적용되는 위젯을 지정해야 합니다.

{{% alert color="info" %}}
**Stripped**, **Bordered** 또는 **Lined**와 같은 테이블 모양 스타일을 적용하는 속성을 갖는 것은 테이블을 포함하는 위젯(예: 데이터 그리드 위젯)에만 의미가 있습니다.
{{% /alert %}}

위젯 유형은 [Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/pages.html) 문서에 정의된 유형입니다. [`Widget`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.widget.html) 유형의 직접 또는 간접 하위 유형인 모든 유형에는 디자인 속성을 첨부할 수 있습니다. 속성이 위젯에 정의되어 있으면 이 위젯의 모든 하위 유형에도 해당 속성이 있습니다. 예를 들어 계층 구조에서 가장 높은 유형인 `Widget` 유형에 속성이 정의되어 있으면 모든 위젯에서 이 디자인 속성을 사용할 수 있습니다.

### 5.1 플러그형 위젯(Pluggable Widgets)을 위한 위젯 유형

[플러그형 위젯(Pluggable Widgets)](/apidocs-mxsdk/apidocs/pluggable-widgets/)에 대한 디자인 속성을 만들 때 위젯 유형은 [위젯 ID](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-id)에 의해 결정됩니다.

## 6 디자인 속성 이름 바꾸기{#old-names}

이미 사용 중인 디자인 속성이나 해당 옵션의 이름을 바꿔야 하는 경우가 있습니다. 디자인 속성은 내부적으로 이름으로 식별되므로 이름을 바꾸면 해당 디자인 속성을 이미 사용하고 있는 앱에 중대한 변경이 발생할 수 있습니다.

오류를 방지하고 사용자에게 간단한 업그레이드 경로를 제공하려면 `oldNames` 필드를 사용하십시오. 이 필드는 배열 유형이어야 하며 이전에 알려지고 사용된 특정 속성이나 옵션의 이전 이름을 포함해야 합니다. `oldNames` 목록의 이전 이름 순서는 중요하지 않습니다. 예를 들어 속성 이름이 두 번 바뀐 경우 `oldNames` 필드에는 두 이전 이름이 모두 포함되어야 합니다.

이름이 바뀐 속성 및 옵션의 예:

```js
{
    "name": "My Dropdown Property",
    "oldNames": ["my Dropdown Propery"],
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Styling option one",
            "class": "stylingClassOne"
        },
        {
            "name": "Styling option two",
            "oldNames": ["Stling option 2", "Styling option 2"],
            "class": "stylingClassTwo"
        }
    ]
}
```

위의 디자인 속성은 **my Dropdown Propery**에서 **My Dropdown Property**로 이름이 바뀌었습니다. 또한 **Styling option two**는 이전 이름 **Stling option 2** 및 **Styling option 2**에서 두 번 이름이 바뀌었습니다.

### 6.1 Dropdown 옵션을 Toggle 속성으로 이름 바꾸기

{{% alert color="info" %}}
이 기능은 Mendix 9에 도입되었습니다.
{{% /alert %}}

**Dropdown** 속성의 옵션을 별도의 **Toggle** 속성으로 이름을 바꿀 수도 있습니다. 이 경우 **Toggle** 속성의 이전 이름은 **Dropdown** 속성의 이름과 옵션의 이름을 이중 콜론으로 구분하여 구성됩니다. **Dropdown** 속성이 여전히 존재할 필요는 없으며 완전히 제거되었을 수 있습니다.

다음은 **Dropdown** 옵션에서 이름이 바뀐 **Toggle** 속성의 예입니다:

```js
{
	"name": "Styling 3",
	"oldNames": ["My Dropdown Property::Styling option 3"],
	"type: "Toggle",
	"description": "Description of Styling 3 toggle property",
	"class": "stylingClassThree"
}
```

위의 디자인 속성은 **My Dropdown Property**의 제거된 옵션 **Styling option 3**을 대체하며 해당 옵션이 선택된 경우 **Yes**로 설정됩니다. 해당 디자인 속성이 여전히 존재하는 경우 **My Dropdown Property**의 값은 비어 있게 설정됩니다.

## 7 추가 정보

* [네이티브 스타일링](/refguide/mobile/designing-mobile-user-interfaces/native-styling/)
* [네이티브 모바일 스타일링 참조 가이드](/refguide/native-styling-refguide/)
* [디자인 속성 확장 방법](/howto/front-end/extend-design-properties/)

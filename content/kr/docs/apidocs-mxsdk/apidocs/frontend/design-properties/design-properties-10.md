---
title: "Mendix 10"
url: /apidocs-mxsdk/apidocs/design-properties-10/
description: "이 API 가이드는 Atlas UI에서 디자인 속성이 작동하는 방식을 개략적으로 설명하며 사용자 지정 디자인 속성을 만드는 데 도움이 될 수 있습니다."
weight: 60
---

## 소개

Mendix Design Properties API를 사용하면 Mendix 앱에 대한 디자인 속성을 생성하거나 확장할 수 있습니다.

API를 사용하려면 애플리케이션의 **themesource** 폴더에 있는 특정 모듈의 *design-properties.json* 파일을 변경해야 합니다. 이 프로세스는 아래의 [디자인 속성 정의(Design Properties Definitions)](#design-properties-definitions) 섹션에 설명되어 있습니다.

많은 앱은 단순히 Atlas UI 테마와 포함된 디자인 속성 세트를 사용하여 스타일링 요구 사항을 충족할 수 있습니다. 그러나 스타일링을 더 깊이 사용자 지정하려면 고유한 사용자 지정 디자인 속성을 만들어야 합니다. 이 가이드는 디자인 속성이 작동하는 방식을 개략적으로 설명하며 사용자 지정 디자인 속성을 만드는 데 도움이 될 수 있습니다. Atlas UI에서 제공하는 디자인 속성은 여기에 설명된 것과 동일한 방식으로 구축되었습니다.

디자인 속성은 Mendix 테마 모듈과 함께 제공되는 특별한 설정 세트입니다. 디자인 속성은 특정 테마 모듈을 사용하는 모든 Mendix 앱 간에 공유됩니다.

Studio Pro의 **Properties** 창에서 위젯에 사용할 수 있는 디자인 속성을 확인할 수 있습니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/overview.png" alt="Studio Pro의 속성 창" max-width=60% >}}

## 디자인 속성 사용

Mendix 앱의 스타일을 지정하는 동안 사용자는 종종 다른 페이지의 위젯에 동일한 CSS 또는 기본 스타일링 클래스 세트를 반복해서 적용해야 합니다. 이 작업은 시간이 많이 걸리며 위젯에 클래스를 적용하기 위해 텍스트 필드를 편집할 때 인적 오류가 발생하기 쉽습니다.

디자인 속성은 이 작업을 더 쉽고 안전하게 만들 수 있습니다. 고유한 사용자 지정 디자인 속성을 구성하면 몇 번의 클릭만으로 위젯에 특정 스타일을 적용할 수 있습니다.

### 디자인 속성에 대한 스타일 생성

디자인 속성에 해당하는 스타일을 CSS 클래스로 정의할 수 있습니다. Studio Pro 10.0.0부터는 디자인 속성을 사용하여 CSS 변수(CSS 사용자 지정 속성이라고도 함)를 지정된 CSS 속성에 적용할 수도 있습니다. 이 문서에서는 두 가지 방법의 예를 보여줍니다.

CSS 클래스는 스타일을 적용하는 가장 쉽고 재사용 가능한 방법입니다. 그러나 유사한 CSS 규칙이 중복되어 스타일 시트가 커질 수도 있습니다. 이는 배경색과 텍스트 색상에 동일한 색상을 재사용하려는 경우에 발생할 수 있습니다. CSS 변수는 색상과 같은 공통 값을 추출하여 이를 더 유연하게 만들 수 있습니다. 예를 들어, 디자인 속성은 `background-color` 또는 `color` CSS 속성을 대상으로 할 수 있습니다.

Design Properties API는 사용 사례에 따라 CSS 클래스 또는 CSS 변수 중에서 선택할 수 있도록 설계되었습니다. 두 가지를 모두 사용할 수도 있고 쉽게 혼합할 수도 있습니다. 위젯의 스타일을 수동으로 업데이트할 필요 없이 CSS 클래스와 CSS 변수 사용 간에 전환할 수도 있습니다. 언제든지 하나에서 다른 것으로 전환할 수 있습니다. 이러한 접근 방식의 차이점에 대한 자세한 내용은 [CSS 클래스 및 CSS 변수(#class-variable)](#class-variable)를 참조하십시오.

## 디자인 속성 유형

디자인 속성 유형에는 **Toggle**, **Dropdown**, **Colorpicker**, **ToggleButtonGroup** 및 **Spacing**의 여러 유형이 있습니다. 이러한 유형은 다양한 사용 사례를 다루도록 의도되었으므로 필요에 가장 적합한 디자인 속성 유형을 선택할 수 있습니다. 모든 Studio Pro 버전이 동일한 디자인 속성 유형을 지원하는 것은 아닙니다.

* **Toggle** 유형은 사용자가 켜거나 끌 수 있습니다. 토글이 켜져 있으면 적용될 CSS 클래스에서만 사용할 수 있습니다.
* **Dropdown**을 사용하면 관련 옵션 세트를 정의할 수 있습니다. 한 번에 하나의 옵션만 선택할 수 있습니다.

다음 유형은 Studio Pro 10.0.0에 도입되었습니다:

* **Colorpicker**는 **Dropdown**과 같습니다. 특히 색상 작업을 하도록 의도되었으므로 각 옵션에 대한 색상 미리보기를 추가할 수 있습니다.
* **ToggleButtonGroup** 유형을 사용하면 관련 옵션 세트를 정의할 수도 있습니다. **Dropdown**과 달리 **ToggleButtonGroup**은 여러 옵션을 선택할 수 있도록 구성할 수 있습니다.
* **Spacing** 유형은 위젯의 여백(margin)과 안쪽 여백(padding)을 모두 설정하는 데 사용할 수 있습니다.

어떤 경우에는 이전에 사용했던 방식에 영향을 주지 않고 사용하는 디자인 속성 유형을 전환할 수 있습니다. 이는 정확히 어떤 유형을 사용해야 할지 모를 때 유용할 수 있습니다.

## 디자인 속성 정의 {#design-properties-definitions}

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

### 디자인 속성 구조

구조를 더 잘 설명하기 위해 위 예의 단순화된 버전은 다음과 같습니다:

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

보시다시피, 디자인 속성은 *JSON* 객체로 정의되며 여기서 키(`DivContainer` 및 `Button` 등)는 위젯 유형이고 값은 해당 위젯 유형에 적용할 수 있는 디자인 속성 세트를 포함하는 *JSON* 배열입니다. 이 주제에 대해 자세히 알아보려면 아래의 [위젯 유형(#widget-types)](#widget-types) 섹션을 참조하십시오.

배열의 모든 디자인 속성도 *JSON* 객체로 나타납니다. 각 객체의 정확한 구조는 `type` 속성에 표시된 대로 유형에 따라 다릅니다. 모든 유형은 `name` 및 `description`과 같은 공통 필드도 공유합니다. 이러한 이름은 디자인 속성이 Mendix Studio Pro에서 사용자에게 어떻게 표시되는지 결정합니다.

#### 공통 필드

위의 예에서 볼 수 있듯이 `name` 및 `description` 필드는 UI, Studio Pro의 양식 컨트롤 이름 및 그 아래의 설명을 정의합니다. 디자인 속성의 이름을 지정하고 설명하는 필수 문자열 값입니다.

`type` 필드는 속성의 유형을 정의하며 `Toggle`, `Dropdown`, `Colorpicker`, `ToggleButtonGroup` 또는 `Spacing` 디자인 속성 유형 중 하나여야 합니다.

{{% alert color="warning" %}}
디자인 속성과 해당 옵션의 이름을 신중하게 지정하십시오. 이미 해당 이름을 사용하는 앱이 있는 경우 이름을 쉽게 변경할 수 없습니다.

이미 앱에서 사용 중인 디자인 속성의 이름을 바꾸려면 아래의 [디자인 속성 이름 바꾸기(#old-names)](#old-names) 섹션을 참조하십시오.
{{% /alert %}}

#### Toggle 관련 필드

**Toggle** 유형의 디자인 속성에는 다음 추가 필드가 있습니다:

| 필드   | 필수   | 유형   | 설명                                                          |
| ------- | ---------- | ------ | -------------------------------------------------------------------- |
| `class` | 예        | String | 위젯에 대해 옵션이 켜져 있는 경우 적용할 클래스 이름입니다. |

다음은 **Toggle** 디자인 속성의 전체 예입니다:

```js
{
    "name": "Full width",
    "type": "Toggle",
    "description": "Description of My Toggle Design Property",
    "class": "fullWidth"
}
```

**Toggle** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/toggle.png" alt="Studio Pro의 토글 속성" >}}

#### Dropdown 관련 필드

**Dropdown** 유형의 디자인 속성에는 다음 추가 필드가 있습니다:

| 필드      | 필수                          | 유형                                  | 설명                 |
| ---------- | --------------------------------- | ------------------------------------- | --------------------------- |
| `options`  | 예                               | Dropdown 옵션 배열 (아래 참조) | 가능한 옵션 목록입니다. |
| `property` | 옵션 중 하나라도 CSS 변수를 사용하는 경우 | String | CSS 속성입니다.                                            |

Dropdown 옵션에는 다음 필드가 있습니다:

| 필드                 | 필수                 | 유형   | 설명                                                                                                                 |
| --------------------- | ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                | 예                      | String | 옵션을 선택할 때 사용자에게 표시되는 이름입니다.                                                                     |
| `class` 또는 `variable` | 둘 중 하나는 필수 | String | 유효한 CSS 클래스 또는 CSS 변수입니다. 자세한 내용은 [CSS 클래스 및 CSS 변수(#class-variable)](#class-variable)를 참조하십시오. |

선택한 옵션이 클래스를 정의하면 해당 클래스가 위젯에 적용됩니다. 선택한 옵션이 변수를 정의하면 지정된 `property`에 적용됩니다.

다음은 클래스를 사용하는 **Dropdown** 디자인 속성의 예입니다:

```js
{
    "name": "Font size",
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Small",
            "class": "fontSizeSmall"
        },
        {
            "name": "Medium",
            "class": "fontSizeMedium"
        },
        {
            "name": "Large",
            "class": "fontSizeLarge"
        }
    ]
}
```

다음은 CSS 변수를 사용하는 **Dropdown** 디자인 속성의 예입니다:

```js
{
    "name": "Font size",
    "type": "Dropdown",
    "property": "font-size",
    "description": "Description of My Dropdown Design Property",
    "options": [
        {
            "name": "Small",
            "variable": "--font-size-small"
        },
        {
            "name": "Medium",
            "variable": "--font-size-medium"
        },
        {
            "name": "Large",
            "variable": "--font-size-large"
        }
    ]
}
```

**Dropdown** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/dropdown.png" alt="Studio Pro의 드롭다운 속성" max-width=80% >}}

#### Colorpicker 관련 필드

**Colorpicker** 유형의 디자인 속성에는 다음 추가 필드가 있습니다:

| 필드      | 필수                                  | 유형                                      | 설명                 |
| ---------- | ----------------------------------------- | ----------------------------------------- | --------------------------- |
| `options`  | 예                                       |  Colorpicker 옵션 배열 (아래 참조) | 가능한 옵션 목록입니다. |
| `property` | 옵션 중 하나라도 CSS 변수를 사용하는 경우 | String                                    | CSS 속성입니다.             |

Colorpicker 옵션에는 다음 필드가 있습니다:

| 필드                 | 필수                 | 유형   | 설명                                                                                                                                                                                                                          |
| --------------------- | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                | 예                      | String | 색상을 선택할 때 사용자에게 표시됩니다.                                                                                                                                                                                            |
| `class` 또는 `variable` | 둘 중 하나는 필수 | String | 유효한 CSS 클래스 또는 CSS 변수입니다.                                                                                                                                                                                     |
| `preview`             | 아니요                      | String | CSS 변수(예: `--brand-primary`), 16진수 색상 정의(예: `#00FF00`) 또는 HTML 색상 이름(예: `green`). 옵션이 CSS 클래스를 기반으로 하는 경우에도 미리보기에 CSS 변수를 사용할 수 있습니다. |

선택한 옵션이 클래스를 정의하면 해당 클래스가 위젯에 적용됩니다. 선택한 옵션이 변수를 정의하면 지정된 `property`에 적용됩니다.

다음은 클래스를 사용하는 **Colorpicker** 디자인 속성의 예입니다:

```js
{
    "name": "Background color",
    "type": "ColorPicker",
    "description": "Description of Background color Property",
    "options": [
        {
            "name": "Red",
            "class": "backgroundColorRed"
        },
        {
            "name": "Green",
            "class": "backgroundColorGreen"
        },
        {
            "name": "Blue",
            "class": "backgroundColorBlue"
        }
    ]
}
```

다음은 CSS 변수를 사용하는 **Colorpicker** 디자인 속성의 예입니다:

```js
{
    "name": "Background color",
    "type": "ColorPicker",
    "property": "background-color",
    "description": "Description of Background Color Property",
    "options": [
        {
            "name": "Red",
            "variable": "--color-red"
        },
        {
            "name": "Green",
            "variable": "--color-green"
        },
        {
            "name": "Blue",
            "variable": "--color-blue"
        }
    ]
}
```

미리보기가 지정되지 않은 경우 기본적으로 CSS 변수 값이 사용됩니다. 따라서 디자인 속성이 CSS 변수를 기반으로 하는 경우 미리보기 속성을 생략할 수 있습니다. 그러나 디자인 속성이 클래스를 기반으로 하는 경우 미리보기를 제공하는 것이 좋습니다.

필요한 경우 언제든지 유형을 **Colorpicker**에서 **Dropdown**으로 변경할 수 있습니다.

**Colorpicker** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/colorpicker.png" alt="Studio Pro의 드롭다운 속성" max-width=80% >}}

#### ToggleButtonGroup 관련 필드

**ToggleButtonGroup** 유형의 디자인 속성에는 다음 추가 필드가 있습니다:

| 필드         | 필수                                  | 유형                                           | 설명                                                                                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiSelect` | 아니요                                        | Boolean                                        | `false`이거나 필드가 없으면 단일 옵션만 선택할 수 있습니다. `true`인 경우 사용자는 동시에 여러 옵션을 설정할 수 있으며, 이는 선택한 모든 옵션의 CSS 클래스가 위젯에 적용됨을 의미합니다. 옵션 중 하나라도 CSS 변수를 사용하는 경우 `true`일 수 없습니다. |
| `options`     | 예                                       | ToggleButtonGroup 옵션 배열 (아래 참조 )| 가능한 옵션 목록입니다.                                                                                                                                                                                                                                                                         |
| `property`    | 옵션 중 하나라도 CSS 변수를 사용하는 경우 | String                                         | CSS 속성입니다.                                                                                                                                                                                                                                                                                     |

ToggleButtonGroup 옵션에는 다음 필드가 있습니다:

| 필드                 | 필수                 | 유형   | 설명                                                                                                                                                             |
| --------------------- | ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | 예                      | String | 아이콘을 사용하지 않을 때 사용자에게 표시됩니다.                                                                                                                             |
| `class` 또는 `variable` | 둘 중 하나는 필수 | String | 유효한 CSS 클래스 또는 CSS 변수입니다. `multiSelect`가 `true`인 경우 옵션은 `class`를 사용하여 정의해야 합니다.                                               |
| `icon`                | 아니요                       | String | 아이콘 컬렉션의 아이콘에 대한 참조: `[Module name].[IconCollection name].[Icon name]`. `icon`을 사용하려면 모든 옵션에 `icon` 필드가 있어야 합니다. |

{{% alert color="warning" %}}
`multiSelect` 필드의 값을 추가, 제거 또는 변경할 때 주의하십시오. 이전에 여러 값을 선택한 위젯에 대해 일관성 오류가 발생합니다.
{{% /alert %}}

**ToggleButtonGroup**을 사용하면 최대 9개의 다른 옵션을 정의할 수 있습니다. 대신 `icon`을 사용하면 최대 18개의 옵션을 사용할 수 있습니다.

다음은 클래스를 사용하는 **ToggleButtonGroup** 디자인 속성의 예입니다:

```js
{
    "name": "Text align",
    "type": "ToggleButtonGroup",
    "description": "Description of Text align Property",
    "options": [
        {
            "name": "left",
            "class": "textAlignLeft"
        },
        {
            "name": "center",
            "class": "textAlignCenter"
        },
        {
            "name": "right",
            "class": "textAlignRight"
        }
    ]
}
```

다음은 CSS 변수를 사용하는 **ToggleButtonGroup** 디자인 속성의 예입니다:

```js
{
    "name": "Text align",
    "type": "ToggleButtonGroup",
    "description": "Description of Text align Property",
    "options": [
        {
            "name": "left",
            "variable": "--align-left"
        },
        {
            "name": "center",
            "variable": "--align-center"
        },
        {
            "name": "right",
            "variable": "--align-right"
        }
    ]
}
```

옵션에 아이콘을 사용할 때 **ToggleButtonGroup** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/toggle_button_group.png" alt="Studio Pro의 ToggleButtonGroup 속성" max-width=80% >}}

#### Spacing 관련 필드

**Spacing** 유형의 디자인 속성에는 공통 필드 외에도 다음 필드가 있습니다:

| 필드      | 필수   | 유형                                 | 설명                 |
| ---------- | ---------- | ------------------------------------ | --------------------------- |
| `margin`   | 예        | Spacing 옵션 배열 (아래 참조) | 가능한 옵션 목록입니다. |
| `padding`  | 예        | Spacing 옵션 배열 (아래 참조) | 가능한 옵션 목록입니다. |

Spacing 옵션에는 다음 필드가 있습니다:

| 필드      | 필수   | 유형                        | 설명                                                                                                                                                                                                                                |
| ---------- | ---------- | -------------------------   | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`     | 예        | String                      | 이름은 3자 이하로 사용하는 것이 좋습니다. 그렇지 않으면 완전히 표시되지 않습니다.                                                                                                                                |
| `top`      | 아니요         | Spacing 값 (아래 참조) |                                                                                                                                                                                                                                            |
| `right`    | 아니요         | Spacing 값 (아래 참조) |                                                                                                                                                                                                                                            |
| `bottom`   | 아니요         | Spacing 값 (아래 참조) |                                                                                                                                                                                                                                            |
| `left`     | 아니요         | Spacing 값 (아래 참조) |                                                                                                                                                                                                                                            |
| `variable` | 아니요         | String                      | CSS 변수입니다. 변수를 사용하면 옵션은 4가지 방향 모두에 대해 자동으로 사용할 수 있습니다. 따라서 4가지 방향(`top`, `right`, `bottom` 또는 `left`) 중 하나라도 클래스를 지정하는 경우 CSS 변수를 사용할 수 없습니다. |

Spacing 값에는 다음 필드가 있습니다:

| 필드      | 필수   | 유형                      | 설명                                                                                                         |
| ---------- | ---------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `class`    | 아니요         | String                    | 주어진 방향(top, left, right, bottom)의 크기 조정(여백 또는 안쪽 여백)에 적용할 특정 CSS 클래스입니다. |

여백(margin)과 안쪽 여백(padding) 모두 최대 12개의 옵션을 정의할 수 있습니다. 그보다 더 많은 옵션을 정의하면 일부는 선택할 수 없게 됩니다.

**Spacing** 속성은 사용자가 동시에 4가지 방향 모두에 대해 동일한 옵션을 선택할 수 있도록 합니다. 그렇게 할 때 4가지 방향 모두에 사용할 수 있는 옵션만 선택할 수 있습니다. 즉, 4가지 방향 모두에 대해 정의된 CSS 클래스가 있거나 CSS 변수를 정의해야 합니다.

다음은 클래스를 사용하는 **Spacing** 디자인 속성의 예입니다:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "S",
            "top": {
                "class": "margin-top-s"
            },
            "right": {
                "class": "margin-right-s"
            },
            "bottom": {
                "class": "margin-bottom-s"
            },
            "left": {
                "class": "margin-left-s"
            }
        },
        {
            "name": "M",
            "top": {
                "class": "margin-top-m"
            },
            "right": {
                "class": "margin-right-m"
            },
            "bottom": {
                "class": "margin-bottom-m"
            },
            "left": {
                "class": "margin-left-m"
            }
        }
    ],
    "padding": [
        {
            "name": "S",
            "top": {
                "class": "padding-top-s"
            },
            "right": {
                "class": "padding-right-s"
            },
            "bottom": {
                "class": "padding-bottom-s"
            },
            "left": {
                "class": "padding-left-s"
            }
        },
        {
            "name": "M",
            "top": {
                "class": "padding-top-m"
            },
            "right": {
                "class": "padding-right-m"
            },
            "bottom": {
                "class": "padding-bottom-m"
            },
            "left": {
                "class": "padding-left-m"
            }
        }
    ]
}
```

다음은 CSS 변수를 사용하는 **Spacing** 디자인 속성의 예입니다:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "S",
            "variable": "--spacing-s",
        },
        {
            "name": "M",
            "variable": "--spacing-m"
        }
    ],
    "padding": [
        {
            "name": "S",
            "variable": "--spacing-s"
        },
         {
            "name": "M",
            "variable": "--spacing-m"
        }
    ]
}
```

**Spacing** 디자인 속성은 다음과 같이 나타납니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/spacing.png" alt="Studio Pro의 간격 속성" max-width=80% >}}

### 다른 모듈의 디자인 속성 확장 또는 재정의 {#extend-existing-design-properties}

디자인 속성은 다른 모듈에서 확장하거나 재정의할 수 있습니다. 예를 들어, Atlas 디자인 속성에 사용자 지정 드롭다운 옵션을 추가하거나 토글 속성의 적용된 CSS 클래스를 재정의할 수 있습니다.

디자인 속성을 재정의하는 것은 Atlas 스타일링 위에 구축되는 테마 모듈을 만들 때 유용할 수 있습니다. 이렇게 하려면 동일한 이름과 호환되는 유형을 사용하여 *themesource/{YOURTHEMEMODULE}/{WEB|NATIVE}/design-properties.json*의 동일한 위젯 유형에 디자인 속성을 추가하기만 하면 됩니다.

디자인 속성의 우선 순위는 다음 모듈 컴파일 순서에 따라 결정됩니다:

1. Non-UI Marketplace 모듈(알파벳 순서)
1. UI 리소스 모듈(**App Settings** > **Theme**에 정렬된 순서)
1. Non-UI 사용자 모듈(Studio Pro App Explorer에 정렬된 순서)

여러 모듈에 동일한 이름의 **Dropdown**, **ColorPicker**, **ToggleButtonGroup** 또는 **Spacing** 속성 정의가 있는 경우 옵션은 높은 우선 순위에서 낮은 우선 순위로(가장 높은 것이 위에) 정렬됩니다. 여러 모듈에 동일한 이름의 **Toggle** 속성 정의가 있는 경우 가장 높은 우선 순위를 가진 모듈의 CSS 클래스 이름이 속성 사용 시 적용됩니다.

**Toggle** 및 **Spacing** 디자인 속성에 대한 정의는 정확히 동일한 유형의 정의와만 병합할 수 있습니다.

**ToggleButtonGroup**의 정의는 모두 `multiSelect`를 `true`로 설정하거나 모두 `false`로 설정하거나 `multiSelect` 속성을 전혀 정의하지 않아야 합니다. **Dropdown**, **ColorPicker** 및 단일 선택 **ToggleButtonGroups**는 모두 병합할 수 있습니다.

다른 유형의 정의를 병합할 때 위에 설명된 우선 순위 규칙에 따른 마지막 정의(즉, 목록의 맨 아래에 있는 정의)가 사용자에게 디자인 속성을 표시하는 데 사용됩니다.

{{% alert color="warning" %}}
호환되지 않는 유형의 여러 정의가 있으면 잘못된 구성이 되어 디자인 속성을 로드하는 데 실패합니다.
{{% /alert %}}

## 위젯 유형{#widget-types}

*JSON* 파일에서 디자인 속성을 정의할 때 일부 디자인 속성은 특정 위젯에서만 작동할 수 있으므로 속성이 적용되는 위젯을 지정해야 합니다.

{{% alert color="info" %}}
**Stripped**, **Bordered** 또는 **Lined**와 같은 테이블 모양 스타일을 적용하는 속성을 갖는 것은 테이블을 포함하는 위젯(예: 데이터 그리드 위젯)에만 의미가 있습니다.
{{% /alert %}}

위젯 유형은 [Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/pages.html) 문서에 정의된 유형입니다. [`Widget`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.widget.html) 유형의 직접 또는 간접 하위 유형인 모든 유형에는 디자인 속성을 첨부할 수 있습니다. 속성이 위젯에 정의되어 있으면 이 위젯의 모든 하위 유형에도 해당 속성이 있습니다. 예를 들어 계층 구조에서 가장 높은 유형인 `Widget` 유형에 속성이 정의되어 있으면 모든 위젯에서 이 디자인 속성을 사용할 수 있습니다.

### 플러그형 위젯(Pluggable Widgets)을 위한 위젯 유형

[플러그형 위젯(Pluggable Widgets)](/apidocs-mxsdk/apidocs/pluggable-widgets/)에 대한 디자인 속성을 만들 때 위젯 유형은 [위젯 ID](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-id)에 의해 결정됩니다.

## 디자인 속성 유형 변경

이 문서에서 설명한 대로 각 디자인 속성 유형은 특정 사용 사례를 충족하도록 설계되었습니다. 그러나 어떤 유형이 요구 사항에 가장 적합한지 미리 알지 못할 때가 있습니다. 이러한 경우 디자인 속성의 유형을 변경해야 할 수 있습니다. 다음과 같은 경우에 가능합니다:

* 언제든지 **Dropdown**, **Colorpicker** 또는 단일 선택 **ToggleButtonGroup** 간에 변경할 수 있습니다. 이는 위젯이나 이전에 설정한 값에 영향을 주지 않습니다.

그러나 모든 디자인 속성이 유형을 자유롭게 변경할 수 있는 것은 아닙니다. 어떤 경우에는 아래의 [디자인 속성 이름 바꾸기(#old-names)](#old-names) 섹션에 설명된 대로 더 많은 구성이 필요합니다.

## 디자인 속성 이름 바꾸기{#old-names}

이미 사용 중인 디자인 속성이나 해당 옵션의 이름을 바꿔야 하는 경우가 있습니다. 디자인 속성은 내부적으로 이름으로 식별되므로 이름을 바꾸면 해당 디자인 속성을 이미 사용하고 있는 앱에 중대한 변경이 발생할 수 있습니다.

오류를 방지하고 사용자에게 간단한 업그레이드 경로를 제공하려면 `oldNames` 필드를 사용하십시오. 이 필드는 배열 유형이어야 하며 이전에 알려지고 사용된 특정 속성이나 옵션의 이전 이름을 포함해야 합니다. `oldNames` 목록의 이전 이름 순서는 중요하지 않습니다. 예를 들어 속성 이름이 두 번 바뀐 경우 `oldNames` 필드에는 두 이전 이름이 모두 포함되어야 합니다. `oldNames`의 문자열은 대소문자를 구분하며 원래 정의와 정확히 일치해야 합니다.

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

### Dropdown 옵션을 Toggle 속성으로 이름 바꾸기

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

### 여러 Toggle 속성을 다중 선택 ToggleButtonGroup 속성으로 이름 바꾸기

여러 **Toggle** 속성을 다중 선택 **ToggleButtonGroup** 속성으로 이름을 바꿀 수 있습니다. 이렇게 하려면 옵션의 `oldNames` 필드를 사용하여 해당 **Toggle**의 이름을 참조하십시오. **ToggleButtonGroup**의 `multiSelect` 필드를 **true**로 설정해야 합니다.

다음은 여러 **Toggle** 속성에서 이름이 바뀐 **ToggleButtonGroup** 속성의 예입니다:

```js
{
    "name": "Font styling",
    "type": "ToggleButtonGroup",
    "description": "Change font styling",
    "multiSelect": true,
    "options": [
        {
            "name": "Bold",
            "oldNames": ["Bold text"],
            "class": "text-bold"
        },
        {
            "name": "Italic",
            "oldNames": ["Italic text"],
            "class": "text-italic"
        },
        {
            "name": "Underline",
            "oldNames": ["Underline text"],
            "class": "text-underline"
        }
    ]
}
```

위의 디자인 속성은 제거된 속성 **Bold text**, **Italic text** 및 **Underline text**를 대체합니다. 해당 **Toggle**이 이전에 켜져 있었던 경우 옵션이 켜집니다. 해당 디자인 속성이 여전히 존재하는 경우 **Toggle**의 값은 꺼집니다.

### Dropdown 옵션을 Spacing 옵션으로 이름 바꾸기

**Dropdown** 속성의 옵션을 **Spacing** 속성의 옵션으로 이름을 바꿀 수 있습니다. 이 경우 이름이 바뀐 옵션의 이전 이름은 **Dropdown** 속성의 이름과 옵션의 이름을 이중 콜론으로 구분하여 구성됩니다. 원래 속성이 여전히 존재할 필요는 없으며 완전히 제거되었을 수 있습니다.

다음은 **Dropdown** 옵션에서 이름이 바뀐 옵션을 포함하는 **Spacing** 속성의 예입니다:

```js
{
    "name": "Spacing",
    "type": "Spacing",
    "description": "Spacing control",
    "margin": [
        {
            "name": "M",
            "top": {
                "class": "margin-top-m",
                "oldNames": [ "spacing-top::small" ]
            }
        }
    ],
    "padding": [
        {
            "name": "S",
            "variable": "--size-s",
            "top": {
                "oldNames": [
                    "spacing-top::inner small"
                ]
            }
        }
    ]
}
```

위의 디자인 속성은 **Spacing-top**의 제거된 옵션 **small** 및 **inner small**을 대체합니다. 이전에 선택된 옵션에 따라 적절한 옵션이 선택됩니다. 해당 디자인 속성이 여전히 존재하는 경우 **Spacing-top**의 값은 비어 있게 설정됩니다.

## CSS 클래스 및 CSS 변수{#class-variable}

### CSS 클래스

CSS 클래스를 사용할 때 몇 가지 사항을 염두에 두어야 합니다:

* CSS 클래스는 대소문자를 구분하지 않지만 *design-properties.json* 파일에서 사용할 때는 정확한 대소문자를 사용하는 것이 좋습니다.
* 디자인 속성(예: **Toggle** 또는 **Dropdown** 옵션)에 CSS 클래스를 지정할 때 여러 CSS 클래스를 사용하는 것도 가능합니다.
* *design-properties.json*에서 CSS 클래스를 참조할 때 클래스 이름 시작 부분에 `.`을 사용하지 마십시오.
* 디자인 속성 또는 디자인 속성의 특정 옵션은 여러 CSS 클래스를 적용할 수도 있습니다.

앱 테마에서 다음과 같이 CSS 클래스를 만들 수 있습니다:

```css
.backgroundColorLightBlue {
    background-color: #87CEFA;
}

.backgroundColorLightGreen {
    background-color: #90EE90;
}
```

### CSS 변수

CSS 변수를 사용할 때 몇 가지 사항을 염두에 두어야 합니다:

* CSS 변수는 대소문자를 구분하므로 *design-properties.json* 파일에서 참조할 때 올바른 대소문자를 사용해야 합니다.
* *design-properties.json*에서 CSS 변수를 참조할 때 항상 CSS 변수 이름 시작 부분에 `--`를 포함하십시오.
* CSS 변수는 **네이티브(native)** 문서에서 사용할 수 없습니다.
* SASS 변수(`$`로 시작)를 사용할 수 없지만 SASS 변수를 기반으로 CSS 변수를 정의할 수 있습니다(예: `--brand-primary: {$brandPrimary};`).
* 단일 CSS 속성에 단일 CSS 변수만 적용할 수 있습니다.

테마에서 다음과 같이 CSS 변수를 만들 수 있습니다:

```css
:root {
    --color-light-blue: #87CEFA;
    --color-light-green: #90EE90;
}
```

예제처럼 `:root`로 범위를 지정하는 것이 좋습니다. 이렇게 하면 앱의 모든 위젯에서 CSS 변수를 사용할 수 있습니다.

### CSS 클래스와 CSS 변수 모두 사용

사용 사례에 따라 디자인 속성을 클래스 사용에서 CSS 변수 사용으로 또는 그 반대로 점진적으로 업데이트해야 할 수 있습니다. 그런 경우 기존 스타일링을 모두 즉시 업데이트하지 못할 수 있습니다.

이러한 상황에서는 각 개별 옵션이 CSS 클래스 *또는* CSS 변수(**둘 다 아님**)만 정의하는 경우 클래스를 사용하는 **Dropdown**, **Colorpicker**, **ToggleButtonGroup** 및 **Spacing** 옵션을 CSS 변수를 사용하는 옵션과 결합할 수 있습니다. 또한 디자인 속성이 대상으로 하는 CSS 속성 이름으로 `property` 필드를 정의하는지 확인하십시오.

```js
{
    "name": "Border radius",
    "type": "Dropdown",
    "description": "Description of My Dropdown Design Property",
    "property": "border-radius",
    "options": [
        {
            "name": "Small",
            "class": "borderRadiusSmall"
        },
        {
            "name": "Large",
            "variable": "--radius-large"
        }
    ]
}
```

**Small** 옵션을 선택하면 `borderRadiusSmall` 클래스가 위젯에 적용됩니다. 반면 **Large**를 선택하면 `--radius-large` 변수가 위젯의 `border-radius` 속성에 할당됩니다.

## 디자인 속성 번역

디자인 속성은 최종 사용자가 선호하는 사용자 인터페이스 언어에 맞게 번역될 수 있습니다. 여기에는 **Properties** 탭에 표시되는 디자인 속성의 이름, 설명 및 옵션(있는 경우)이 포함됩니다. 제공된 번역은 디자인 속성의 동작에 영향을 주지 않습니다.

디자인 속성에 대한 번역을 제공하려면 모듈의 **Styling** 폴더에 *locales/{language-code}/translation.json* 파일을 만드십시오. 언어 코드는 *en-US*, *ja-JP*, *ko-KR* 또는 *zh-CN*과 같이 Studio Pro에서 지원하는 사용자 인터페이스 언어 중 하나일 수 있습니다. **locales/{language-code}** 폴더의 다른 파일은 무시됩니다. 따라서 사용자 지정 네임스페이스를 사용할 수 없습니다. 예를 들어, 결과 구조는 다음과 같을 수 있습니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/design-properties/translations.png" alt="Styling/locales/de-DE 폴더의 translation.json 파일" class="no-border" max-width=50% >}}

이러한 JSON 파일은 i18next 라이브러리, 특히 v3에서 사용하는 형식을 따릅니다. 자세한 내용은 [i18next JSON 형식 문서](https://www.i18next.com/misc/json-format)를 참조하십시오. 예를 들어, **left**, **center** 및 **right** 옵션이 있는 이름 **Text align**인 디자인 속성을 번역하려면 *locales/ko-KR/translation.json*의 내용은 다음과 같을 수 있습니다:

```json
{
    "Text align": "텍스트 정렬",
    "left": "왼쪽",
    "center": "센터",
    "right": "오른쪽"
}
```

이름이 같은 모든 디자인 속성과 옵션은 다른 모듈에 정의되어 있더라도 동일한 방식으로 번역됩니다. 두 개 이상의 모듈이 동일한 디자인 속성 또는 디자인 속성 옵션에 대한 번역을 정의하는 경우 사용되는 번역이 [다른 모듈의 디자인 속성 확장 또는 재정의](#extend-existing-design-properties)에 설명된 것과 동일하다는 보장은 없습니다. 따라서 디자인 속성과 디자인 속성 옵션은 정의된 것과 동일한 모듈에서만 번역하는 것이 좋습니다.

번역을 사용할 수 없는 경우 *design-properties.json*에 정의된 이름과 설명이 대신 사용됩니다. 예를 들어, 사용자가 Studio Pro를 한국어로 사용하도록 설정을 변경했지만 모듈에 *locales/ko-KR/translation.json* 파일이 없는 경우입니다. 또한 해당 *translation.json* 파일에 디자인 속성의 이름, 옵션 또는 설명이 누락된 경우에도 발생할 수 있습니다.

{{% alert color="warning" %}}
기존 디자인 속성에 대한 번역을 추가할 때 *design-properties.json*에 정의된 기존 디자인 속성이나 해당 옵션의 이름을 변경하지 마십시오. 이미 해당 이름을 사용하는 앱이 있는 경우 이름을 쉽게 변경할 수 없습니다. 자세한 내용은 위의 [디자인 속성 이름 바꾸기(#old-names)](#old-names) 섹션을 참조하십시오.
{{% /alert %}}

## 추가 정보

* [네이티브 스타일링](/refguide/mobile/designing-mobile-user-interfaces/native-styling/)
* [네이티브 모바일 스타일링 참조 가이드](/refguide/native-styling-refguide/)
* [디자인 속성 확장 방법](/howto/front-end/extend-design-properties/)

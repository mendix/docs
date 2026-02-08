---
title: "구성 모듈 API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-config-api-9/
description: A guide for understanding the configuration module API which influences the behavior of pluggable widgets in Studio Pro Mendix 9.
weight: 35
---

## 소개

플러거블 위젯(Pluggable Widget)의 구성 모듈은 여러 가지 모델러 경험 개선을 가능하게 합니다. 예를 들어, 조건에 따라 위젯 속성을 숨기거나, 위젯 구성의 유효성을 검사하기 위한 일관성 검사를 추가하고, Structure mode에서 위젯의 외관을 사용자 정의할 수 있습니다.

일반적으로 위젯의 XML 파일과 동일한 이름에 접미사 *.editorConfig.js*를 붙인 JavaScript 파일에 위치합니다. 예를 들어, *TextBox.xml* 옆에 *TextBox.editorConfig.js*가 있습니다.

이 파일은 CommonJS 형식이어야 하며, `exports` 객체를 사용하여 함수를 내보냅니다.

## 위젯 개발자 콘솔 {#widget-dev-console} 

구성 모듈과 관련된 오류는 위젯 개발자 콘솔에 표시됩니다. 이 콘솔은 기본 콘솔과 별개이며 [보기 메뉴](/refguide/view-menu/)에서 찾을 수 있습니다.  

## 위젯 속성 사용자 정의

플러거블 위젯에 대해 Studio Pro에서 사용할 수 있는 속성을 사용자 정의하려면, 모듈에서 `getProperties` 함수를 내보내야 합니다. 이 함수에 두 가지 매개변수가 전달됩니다:

* 현재 구성된 값, [Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values)를 따름
* 기본 속성 구성

```typescript
function getProperties(
    values: ValuesAPI,
    defaultConfiguration: Properties
): Properties
```

이 API를 사용하면 구성된 값에 따라 특정 속성을 동적으로 표시하거나 숨길 수 있습니다.

{{% alert color="info" %}}
속성이 숨겨지면 해당 값이 지워집니다.
{{% /alert %}}

{{% alert color="info" %}}
XML에 따라 필수인 속성을 숨기면 여전히 필수라는 일관성 오류가 발생합니다. 따라서 필수 속성을 숨기는 것은 권장하지 않습니다.<br><br>속성이 특정 조건에서만 필수인 경우, XML에서 필수로 표시하면 안 됩니다. 대신 사용자 정의 유효성 검사 함수를 사용하여 수동으로 검사를 구현해야 합니다.
{{% /alert %}}

예상되는 속성 구성 구조는 다음과 같습니다:

* `Properties`는 `PropertyGroups`의 배열이어야 합니다
* `PropertyGroup`은 `caption`을 가져야 하는 객체입니다:
    * 두 단계의 `PropertyGroup` 객체를 가질 수 있으며, 최상위 그룹에 `PropertyGroup` 객체의 배열을 포함하는 `propertyGroups` 필드를 지정하여 달성할 수 있습니다
    * 또는 속성 그룹은 `properties` 필드에 하나 이상의 `Property` 객체를 포함할 수 있습니다
* `Property`는 위젯 XML의 속성 `key`에 해당하는 `key`와 `caption` 필드를 가져야 하는 객체입니다:
    * 선택적으로 속성에 대한 설명이 포함된 `description` 필드를 반환할 수 있습니다
    * 속성이 `object` 타입인 경우 더 복잡한 구성이 필요합니다
        * `Property` 객체의 `objects` 배열 필드는 하위 객체의 속성을 포함합니다 (각 하위 객체는 이 배열에 `ObjectProperties` 객체로 항목이 필요합니다)
            * `ObjectProperties` 객체의 `properties` 배열 필드는 `PropertyGroup` 객체의 배열 형태로 하위 객체의 속성을 포함합니다
            * 객체 그리드는 속성의 `objectHeaders`와 객체의 `captions` 배열 필드를 사용하여 사용자 정의할 수 있습니다 (자세한 내용은 [객체 그리드 사용자 정의](#customize-object-grids) 섹션을 참조하세요)

```typescript
type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
}

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
}

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
}
```

다음은 이 구조가 JavaScript 객체로 어떻게 보이는지에 대한 예시로, 다음 위젯 XML 스니펫을 기반으로 합니다:

```XML
<properties>
    <propertyGroup caption="General">
    <property key="caption" type="string">
        <caption>Graph caption</caption>
        <description>The caption of this graph</description>
    </property>
    </propertyGroup>
    <propertyGroup caption="Data">
    <property key="dataCaption" type="string">
        <caption>Data caption</caption>
        <description>The caption of the data set</description>
    </property>
    <property key="dataPoints" type="object" isList="true">
        <caption>Data points</caption>
        <description></description>
        <objects>
        <properties>
            <propertyGroup caption="Data">
            <property key="x" type="integer" defaultValue="0">
                <caption>X value</caption>
                <description></description>
            </property>
            <property key="y" type="integer" defaultValue="0">
                <caption>Y value</caption>
                <description></description>
            </property>
            </propertyGroup>
        </properties>
        </objects>
    </property>
    </propertyGroup>
</properties>
```

위젯이 세 개의 데이터 포인트로 구성되어 있다고 가정하면, 첫 번째로 전달되는 객체(값)는 다음과 같습니다:

```typescript
{
    caption: "My graph",
    dataCaption: "Points",
    dataPoints: [
        { x: 0, y: 10 },
        { x: 1, y: 12 },
        { x: 2, y: 5 }
    ]
}
```

기본 구성은 다음과 같습니다:

```typescript
[
    {
        caption: "General",
        properties: [
            {
                key: "caption",
                caption: "Graph caption",
                description: "The caption of this graph"
            }
        ]
    },
    {
        caption: "Data",
        properties: [
            {
                key: "dataCaption",
                caption: "Data caption",
                description: "The caption of the data set"
            },
            {
                key: "dataPoints",
                caption: "Data points",
                description: "",
                objects: [
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "Data Point",
                                properties: [
                                    { key: "x", caption: "X value", description: "" },
                                    { key: "y", caption: "Y value", description: "" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```

## 객체 그리드 사용자 정의 {#customize-object-grids}

object 속성에 대한 객체 그리드를 사용자 정의할 수 있습니다. 이를 위해 속성에 열 헤더로 사용될 `objectHeaders`를 구성하고, 각 객체에도 그리드를 채우기 위한 `captions`를 구성해야 합니다.

### 예제

위에서 설명한 데이터 포인트 구조를 사용하여 지리 좌표를 시각화하려면, 숫자 **x**와 **y** 값에 `° N`과 `° W` 접미사를 추가하여 그리드가 다음과 같이 보이도록 할 수 있습니다 (아래 값은 순수 가상입니다):

| N 좌표 | W 좌표 |
| ------------ | ------------ |
| 51.9066° N   | 4.4883° W    |
| 42.3504° N   | -71.0468° W  |
| 51.5126° N   | -0.1062° W   |

다음 코드 예제는 위 테이블을 달성하기 위해 객체 헤더와 각 객체의 캡션을 사용하는 object 속성 구성을 보여줍니다:

```typescript
{
    key: "dataPoints",
    caption: "Data points",
    description: "",
    objectHeaders: ["N Coordinate", "W Coordinate"], // column headers
    objects: [
        {
            captions: [`${values.dataPoints[0].y}° N`, `${values.dataPoints[0].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "Y value", description: "" },
                        { key: "x", caption: "X value", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[1].y}° N`, `${values.dataPoints[1].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "X value", description: "" },
                        { key: "x", caption: "X value", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[2].y}° N`, `${values.dataPoints[2].x}° W`],
            properties: [
                {
                    caption: "Data Point",
                    properties: [
                        { key: "y", caption: "X value", description: "" },
                        { key: "x", caption: "Y value", description: "" }
                    ]
                }
            ]
        }
    ]
}
```

## 일관성 검사를 사용한 유효성 검사 사용자 정의

기본적으로 Studio Pro는 필수 속성의 유효성을 검사합니다. 구성된 데이터에 추가 유효성 검사를 추가하려면, 모듈에서 `check` 함수를 내보낼 수 있습니다. 이 함수는 values API를 따르는 값을 전달받고, 발견된 문제의 배열을 반환해야 합니다:

```typescript
function check(values: ValuesAPI): Problem[]
```

`Problem`은 다음 타입으로 정의된 객체입니다:

```typescript
type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    url?: string; // link with more information about the problem    
}
```

이 함수에서 반환된 모든 문제는 Studio Pro의 [오류](/refguide/errors-pane/) 창에 표시됩니다.

### 하위 객체의 속성 타겟팅

`object` 타입의 속성은 속성을 가진 객체의 목록을 포함합니다. 이 경우, 어떤 객체의 어떤 속성에서 문제가 발생했는지 지정할 수 있습니다. 이는 속성을 `<property>/<index>/<sub-property>` 형식으로 지정하여 수행할 수 있습니다. 여기서 index는 객체 목록의 1 기반 인덱스입니다. 

#### 예제

예를 들어, 하위 속성 `x`와 `y`를 가진 object-property `dataPoints`가 존재하고, `y`가 10보다 크면 안 되는 경우, 다음 코드는 해당 오류를 반환합니다:

```typescript
function check(values) {
    var problems = [];
    values.dataPoints.forEach((p, i) => {
        if (p.y > 10) {
            problems.push({
                property: `dataPoints/${i + 1}/y`,
                message: "y should not be larger than 10"
            });
        }
    });
    return problems;
}
```

## 페이지 탐색기 캡션 사용자 정의

페이지 탐색기는 일반적으로 사용자 정의 위젯의 타입 이름을 캡션으로 사용합니다. 사용자 정의 캡션을 사용해야 하는 경우, 모듈에서 `getCustomCaption` 함수를 내보낼 수 있습니다. 이 함수는 values API를 따르는 값과 현재 플랫폼을 전달받습니다:

```typescript
function getCustomCaption(values: ValuesAPI, platform: "desktop" | "web"): string
```

캡션이 `null`, `undefined`이거나 문자열이 아닌 경우, 기본 캡션이 사용됩니다.

## Structure Mode에서의 위젯 미리보기

Studio Pro에서 사용자 정의 위젯의 외관을 구성하려면 `getPreview` 함수를 내보내세요. 이 함수는 세 가지 매개변수를 수신합니다: 첫 번째는 현재 값을 포함하고, 두 번째는 다크 모드가 설정되었는지 나타내며, 세 번째는 현재 Studio Pro 버전을 전달합니다. 이 함수는 사용자 정의 위젯 미리보기의 구성을 포함하는 미리보기 속성 객체를 반환해야 합니다.

기본 색상은 다크 모드에 맞게 자동으로 조정됩니다(예: 글꼴 색상, 테두리 색상 등). 그러나 색상을 명시적으로 설정할 때는 `isDarkMode` 플래그를 사용할 수 있습니다.

다른 버전에 대한 미리보기를 만들려면, 세 번째 인수 `version`을 사용할 수 있습니다. 이는 현재 Studio Pro 버전을 [`major`, `minor`, `build`] 형식의 숫자 배열로 포함합니다. 예: `[9, 18, 0]`.

다음은 `getPreview`가 반환해야 하는 미리보기 속성 객체에 대한 API를 설명합니다.

일반 요소 구조:

```typescript
type BaseProps = {
    type: string; // "Text" | "RowLayout" | "Image" …;
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
}
```

모든 유형의 미리보기 속성은 두 가지 공통 속성을 공유합니다: `type`과 `grow`: 

* `type`은 아래에 설명된 미리보기 타입 중 하나일 수 있습니다. 예: `"Image"`, `"Text"`, `"RowLayout"`
* `grow`는 선택적이며 현재 요소가 row layout의 자식인 경우에만 효과가 있습니다 (예제는 [Row Layout](#row-layout) 섹션 참조)

다음 요소들은 해당 요소에 고유한 속성으로 기본 미리보기 props를 확장합니다. 예를 들어, 텍스트 요소의 `content`, 이미지 요소의 `document`와 `width` 등이 있습니다. 다음 요소 섹션에서 사용 가능한 모든 요소 타입과 해당 속성을 나열합니다.

### Image

```typescript
type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
}
```

Image 속성은 다양한 유형의 입력을 받을 수 있습니다 (하지만 항상 `document` 또는 `data` 중 하나가 *필요*합니다):

* `document`: SVG 이미지 문자열
* `data`: base64 인코딩 이미지 문자열
* `property`: 이미지 속성의 값
    * 이미지 속성을 전달할 때 정적 이미지가 설정된 경우에만 표시됩니다 (속성이 비어 있거나 동적 이미지가 설정된 경우 대체 이미지로 작동할 `document` 또는 `data`도 전달해야 합니다)

추가로 고정 `width`와 `height`를 설정할 수 있습니다. 설정하지 않으면 사용 가능한 너비로 최대화됩니다. 너비와 높이가 원본 이미지 종횡비와 다른 종횡비로 설정된 경우, 이미지가 왜곡되지 않도록 이미지의 일부를 표시합니다.

원형 SVG 예제:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => {
    const mySvgImage = `
<svg height="1000" width="1000">
    <circle cx="500" cy="500" r="400" stroke="black" stroke-width="35" fill="blue" />
</svg>`;
    return {
        type: "Image",
        document: mySvgImage,
        width: 200 // sets a maximum width of 200
    }
};
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-image.png" alt="an svg image of a circle" width="200"  class="no-border" >}}

### Container

```typescript
type ContainerProps = BaseProps & {
    type: "Container";
    children: StructurePreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
}
```

Container는 여러 요소를 수직으로 쌓는 데 사용할 수 있습니다. 이러한 요소는 props 배열로 `children`에 전달됩니다. `borders` 속성을 사용하여 전체 내용 주위에 테두리를 설정하여 시각적으로 그룹화할 수 있습니다.

테두리가 있는 두 텍스트 예제:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "Container",
        borders: true,
        children: [
            { type: "Text", content: "I am on top" },
            { type: "Text", content: "I am on the bottom" }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-container.png" alt="a bordered container with two texts" width="600"  class="no-border" >}}

### Row Layout {#row-layout}

```typescript
type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow" // default is fixed
}
```

Row layout은 컨테이너와 유사하며, 여러 요소를 수평으로 나란히 렌더링하는 데 사용할 수 있습니다. 컨테이너의 모든 props를 가지며, 자식 크기가 균등한 고정 가중치인지 내용에 따라 결정되는지를 정의하는 `columnSize`가 추가됩니다 (자세한 내용은 다음 섹션 참조).

#### 열 크기

##### Fixed (기본값)

`columnSize`가 설정되지 않았거나 `"fixed"`로 설정된 경우 모든 사용 가능한 공간이 고정 가중치로 분할됩니다. 그런 다음 내용 크기에 따라 열을 확장하거나 축소하는 대신 자식 내용을 열에 맞춥니다. 

예를 들어, 이것은 그리드와 같은 구조를 만드는 데 유용합니다. 기본적으로 모든 열은 동일한 양의 공간을 얻습니다. 그러나 자식에 `grow` 값이 설정되면 자식에 대한 비례적 열 크기를 설정하는 데 사용됩니다. `grow` 값이 없는 자식은 자동으로 값 1을 받습니다.

예를 들어, 다음 코드는 네 개의 자식이 있는 row layout을 생성합니다. 첫 번째 자식(`Image`)은 사용 가능한 공간의 절반을 차지하고, 나머지 세 자식(`Texts`)은 나머지 절반을 공유합니다. 이는 단순히 첫 번째 자식의 `grow` 속성을 3으로 설정하여 달성할 수 있습니다:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "fixed",
        children: [
            { type: "Image", data: mxLogo, grow: 3 },
            { type: "Text", fontSize: 20, content: "We share the" },
            { type: "Text", fontSize: 16, content: "right half of" },
            { type: "Text", fontSize: 12, content: "the row layout" }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-fixed.png" alt="a row layout with fixed column weights" width="1000"  class="no-border" >}}

##### Grow

`columnSize`가 `"grow"`로 설정되면 열 크기는 내용에 의해 결정됩니다. 남은 공간이 있으면 모든 열에 분배됩니다. 자식이 성장하는 상대적 공간의 양에 영향을 주려면 각 자식에 `grow` 팩터를 설정할 수 있습니다. 그러면 열은 이 팩터에 비례하여 성장합니다. `grow` 값이 없는 자식은 자동으로 값 1을 받습니다.

레이아웃이 요소가 선호하는 것보다 적은 공간을 가지면, 최소 크기에 도달할 때까지 항목이 `grow` 팩터에 반비례하여 축소됩니다(높은 grow 팩터는 낮은 shrink 팩터를 의미):

* `text`는 더 작아지기 위해 줄바꿈됩니다
* `image`는 `width` 속성으로 수동 설정하거나 모든 요소가 최소 크기에 도달하지 않는 한 원본 크기 이하로 축소되지 않습니다

모든 항목이 최소 크기에 도달하면 레이아웃은 `grow` 값에 비례하여 더 작은 크기를 강제합니다.

항목을 필요한 것보다 더 작게 강제하는 것은 이미지에 대해서는 작동하지만 다른 요소에서는 예상치 못한 동작을 일으킬 수 있습니다.

grow 팩터의 동작을 보여주는 예제:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "grow",
        children: [
            {
                type: "Container",
                grow: 0,
                borders: true,
                backgroundColor: "#F4FFB0",
                children: [{ type: "Text", content: "Grow 0", fontSize: 20 }]
            },
            {
                type: "Container",
                borders: true,
                backgroundColor: "#E6FFB0",
                children: [{ type: "Text", content: "Grow 1", fontSize: 20 }]
            },
            {
                type: "Container",
                grow: 2,
                borders: true,
                backgroundColor: "#B0C0FF",
                children: [{ type: "Text", content: "Grow 2", fontSize: 20 }]
            }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow.png" alt="a row layout with different grow factors" width="1000"  class="no-border" >}}

##### 예제

row layout을 사용하여 항목을 중앙에 배치하는 방법을 보여주는 버튼 예제:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "RowLayout",
        columnSize: "grow",
        borders: true,
        borderRadius: 20,
        backgroundColor: "#2A2C96",
        children: [
            {
                type: "Container", // fills space on the left
            },
            {
                type: "Container",
                grow: 0, // ensures that it only takes necessary space
                padding: 10,
                children: [
                    { type: "Text", content: "A button", fontColor: "#FFF", fontSize: 20 }
                ]
            },
            {
                type: "Container", // fills space on the right
            }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow-2.png" alt="structure mode preview of a bordered container with two texts" width="600"  class="no-border" >}}

### Text

```typescript
type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
}
```

표시할 텍스트는 `content`로 전달해야 합니다. 선택적으로 `fontSize`를 설정할 수 있습니다. 글꼴 크기로는 정수만 지원됩니다.

예제:

```typescript
export const getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "Text",
        content: values.myTextProp, // set displayed text to the value of myTextProp
    });
```

### Drop Zones 

```typescript
type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader: bool?; // true by default. Toggles whether to show a header containing information about the datasource
}
```

drop zone 미리보기 타입은 위젯 미리보기에 드롭 존을 추가하는 데 사용할 수 있습니다. 포함된 위젯에 대한 정보를 저장할 수 있는 `widgets` 타입의 위젯 속성이 필요합니다. 속성에 데이터 소스가 있는 경우, 데이터 소스에 대한 정보를 포함하는 헤더가 드롭존 내부에 표시됩니다. 이 헤더는 선택사항이며 `showDataSourceHeader`를 `false`로 설정하여 숨길 수 있습니다.

드롭 존을 구성하려면 [Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values)에서 직접 얻을 수 있는 위젯 속성 객체를 `property`로 전달해야 합니다. 다음 예제를 참조하세요:

```typescript
exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
    type: "Container",
    borders: true,
    children: [
        {
            type: "Text",
            content: "This widget acts as a container for other widgets"
        },
        {
            type: "DropZone",
            property: values.myWidgetsProp
            placeholder: "Drop your widgets here!"
        }
    ]
})
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-drop-zone.png" alt="a container with a dropzone" width="600"  class="no-border" >}}

### Selectable

```typescript
type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: StructurePreviewProps; // any type of preview property to visualize the object instance
}
```

selectable 미리보기 타입은 객체 목록의 인스턴스를 선택 가능하게 만드는 데 사용할 수 있습니다. 객체 인스턴스가 선택 가능하게 되면 위젯과 유사하게 동작합니다. 해당 속성이 `Properties` 섹션에 표시되며, `child` 속성으로 시각화된 섹션을 더블 클릭하여 팝업에서 편집할 수도 있습니다. 이는 `object` 타입의 속성과 조합하여만 작동합니다.

selectable를 구성하려면 [Value API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis/#values)의 객체를 `object`로 전달하고, 객체를 시각화하기 위한 미리보기 속성을 `child`로 전달해야 합니다. 

다음 예제는 선택 가능한 객체 목록이 있는 컨테이너를 렌더링하는 방법을 보여줍니다. 이 경우 각 객체는 캡션이 있는 텍스트로 표시됩니다:

```typescript
export function getPreview(values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) {
    const container: ContainerProps = {
        type: "Container",
        borders: true,
        children: [
            { type: "Text", fontSize: 18, content: "List with selectable elements" }
        ],
    };

    for (const item of values.myObjectProp) {
        container.children!.push({
            type: "Selectable",
            object: item,
            child: {
                type: "Text",
                fontColor: "#2A2C96",
                content: item.caption
            },
        });
    }
    return container;
}
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-selectable.png" alt="a list of selectable text elements" width="600"  class="no-border" >}}

### Datasource

```typescript
type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: Nullable<object>; // datasource property object from Values API
    child?: StructurePreviewProps; // any type of preview property component (optional)
}
```

**datasource** 미리보기 타입은 데이터 소스가 있는 위젯을 개발할 때 사용할 수 있습니다. 이를 사용하면 Data view나 List view와 같은 다른 데이터 위젯과 유사한 데이터 소스 헤더가 있는 컨테이너를 렌더링합니다. 예를 들어, 다음은 드롭 존이 있는 데이터 소스 컨테이너를 렌더링합니다:

```typescript
    exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
      type: "Datasource",
      property: values.myDatasourceProp, // pass the datasource property
      child: {
        type: "DropZone",
        property: values.myWidgetsProp
      }
    })
```

두 개의 텍스트 박스가 있는 드롭 존을 포함하는 **datasource** 컴포넌트의 미리보기:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-datasource.png" alt="a widget with a datasource" width="400"  class="no-border" >}}

---
title: "구성 모듈 API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-config-api-10/
description: Mx10에서 플러그형 위젯의 동작에 영향을 미치는 구성 모듈 API를 이해하기 위한 가이드입니다.
weight: 35
---

## 소개

플러그형 위젯의 구성 모듈을 사용하면 여러 가지 모델러 경험 개선이 가능합니다. 예를 들어, 조건에 따라 위젯 속성을 숨기고, 위젯 구성을 검증하기 위해 일관성 검사를 추가하며, **Structure mode**에서 위젯의 모양을 사용자 지정할 수 있습니다.

일반적으로 위젯의 XML 파일과 동일한 이름을 사용하고 *.editorConfig.js*로 끝나는 JavaScript 파일에 위치합니다. 예를 들어, *TextBox.xml* 옆에는 *TextBox.editorConfig.js*가 있습니다.

이 파일은 CommonJS 형식이어야 하며 `exports` 객체를 사용하여 함수를 내보내야 합니다.

## 위젯 개발자 콘솔 {#widget-dev-console} 

구성 모듈과 관련된 오류는 위젯 개발자 콘솔(Widget Developer Console)에 표시됩니다. 이 콘솔은 기본 콘솔과 분리되어 있으며 [View 메뉴](/refguide/view-menu/)에서 찾을 수 있습니다.  

## 위젯 프로퍼티 사용자 지정

플러그형 위젯에 대해 Studio Pro에서 사용할 수 있는 속성을 사용자 지정하려면 모듈에서 `getProperties` 함수를 내보내야 합니다. 이 함수에는 두 개의 파라미터가 전달됩니다:

* [Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis-10/#values)를 따르는 현재 구성된 값
* 기본 속성 구성

```typescript
function getProperties(
    values: ValuesAPI,
    defaultConfiguration: Properties
): Properties
```

이 API를 사용하면 구성된 값을 기반으로 특정 속성을 동적으로 표시하거나 숨길 수 있습니다.

{{% alert color="info" %}}
속성이 숨겨지면 그 값은 지워집니다.
{{% /alert %}}

{{% alert color="info" %}}
XML에 따라 필수(required)인 속성을 숨기더라도 해당 속성이 필수라는 일관성 오류가 계속 발생합니다. 따라서 필수 속성을 숨기는 것은 권장하지 않습니다.<br><br>특정 조건에서만 속성이 필요한 경우 XML에서 필수로 표시해서는 안 됩니다. 대신 사용자 지정 유효성 검사 함수를 사용하여 수동으로 확인을 구현해야 합니다.
{{% /alert %}}

예상되는 속성 구성 구조는 다음과 같습니다:

* `Properties`는 `PropertyGroups`의 배열이어야 합니다.
* `PropertyGroup`은 `caption`을 가져야 하는 객체입니다:
    * 최상위 그룹에 `PropertyGroup` 객체 배열을 포함하는 `propertyGroups` 필드를 제공하여 두 수준의 `PropertyGroup` 객체를 가질 수 있습니다.
    * 또는 속성 그룹의 `properties` 필드에 하나 이상의 `Property` 객체를 포함할 수 있습니다.
* `Property`는 위젯 XML의 속성 `key`에 해당하는 `key`와 `caption` 필드를 가져야 하는 객체입니다:
    * 선택적으로 속성 설명을 포함하는 `description` 필드를 반환할 수 있습니다.
    * 속성 유형이 `object`인 경우 더 복잡한 구성이 필요합니다.
        * `Property` 객체의 `objects` 배열 필드에는 하위 객체의 속성이 포함됩니다(각 하위 객체는 이 배열에 `ObjectProperties` 객체로 항목이 필요함).
            * `ObjectProperties` 객체의 `properties` 배열 필드에는 `PropertyGroup` 객체 배열 형식으로 하위 객체의 속성이 포함됩니다.
            * 속성의 `objectHeaders`와 객체의 `captions` 배열 필드를 사용하여 객체 그리드를 사용자 지정할 수 있습니다(자세한 내용은 [객체 그리드 사용자 지정(#customize-object-grids)](#customize-object-grids) 섹션 참조).

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
    objectHeaders?: string[]; // 객체 그리드 사용자 지정에 사용됨
    objects?: ObjectProperties[];
}

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // 객체 그리드 사용자 지정에 사용됨
}
```

다음은 위젯 XML 스니펫을 기반으로 이 구조가 JavaScript 객체로 어떻게 보이는지에 대한 예입니다:

```XML
<properties>
    <propertyGroup caption="일반">
    <property key="caption" type="string">
        <caption>그래프 캡션</caption>
        <description>이 그래프의 캡션</description>
    </property>
    </propertyGroup>
    <propertyGroup caption="데이터">
    <property key="dataCaption" type="string">
        <caption>데이터 캡션</caption>
        <description>데이터 세트의 캡션</description>
    </property>
    <property key="dataPoints" type="object" isList="true">
        <caption>데이터 포인트</caption>
        <description></description>
        <objects>
        <properties>
            <propertyGroup caption="데이터">
            <property key="x" type="integer" defaultValue="0">
                <caption>X 값</caption>
                <description></description>
            </property>
            <property key="y" type="integer" defaultValue="0">
                <caption>Y 값</caption>
                <description></description>
            </property>
            </propertyGroup>
        </properties>
        </objects>
    </property>
    </propertyGroup>
</properties>
```

위젯이 세 개의 데이터 포인트로 구성되어 있다고 가정하면, 전달되는 첫 번째 객체(값)는 다음과 같습니다:

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
        caption: "일반",
        properties: [
            {
                key: "caption",
                caption: "그래프 캡션",
                description: "이 그래프의 캡션"
            }
        ]
    },
    {
        caption: "데이터",
        properties: [
            {
                key: "dataCaption",
                caption: "데이터 캡션",
                description: "데이터 세트의 캡션"
            },
            {
                key: "dataPoints",
                caption: "데이터 포인트",
                description: "",
                objects: [
                    {
                        properties: [
                            {
                                caption: "데이터 포인트",
                                properties: [
                                    { key: "x", caption: "X 값", description: "" },
                                    { key: "y", caption: "Y 값", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "데이터 포인트",
                                properties: [
                                    { key: "x", caption: "X 값", description: "" },
                                    { key: "y", caption: "Y 값", description: "" }
                                ]
                            }
                        ]
                    },
                    {
                        properties: [
                            {
                                caption: "데이터 포인트",
                                properties: [
                                    { key: "x", caption: "X 값", description: "" },
                                    { key: "y", caption: "Y 값", description: "" }
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

## 객체 그리드 사용자 지정 {#customize-object-grids}

객체 속성에 대한 객체 그리드를 사용자 지정할 수 있습니다. 이를 위해 속성에는 열 헤더로 사용될 `objectHeaders`가 구성되어야 합니다. 또한 그리드를 채우기 위해 각 객체에 `captions`가 구성되어야 합니다.

### 예시

지리적 좌표를 시각화하기 위해 위에 자세히 설명된 데이터 포인트 구조를 사용하려는 경우, 그리드가 다음과 같이 보이도록 숫자 **x** 및 **y** 값에 접미사 `° N` 및 `° W`를 추가하고 싶을 수 있습니다(아래 값은 순전히 가상입니다):

| N 좌표 | W 좌표 |
| ------------ | ------------ |
| 51.9066° N   | 4.4883° W    |
| 42.3504° N   | -71.0468° W  |
| 51.5126° N   | -0.1062° W   |

다음 코드 예제는 위에 표시된 테이블을 달성하기 위해 각 객체에 대해 객체 헤더와 캡션을 사용하는 객체 속성 구성을 보여줍니다:

```typescript
{
    key: "dataPoints",
    caption: "데이터 포인트",
    description: "",
    objectHeaders: ["N 좌표", "W 좌표"], // 열 헤더
    objects: [
        {
            captions: [`${values.dataPoints[0].y}° N`, `${values.dataPoints[0].x}° W`],
            properties: [
                {
                    caption: "데이터 포인트",
                    properties: [
                        { key: "y", caption: "Y 값", description: "" },
                        { key: "x", caption: "X 값", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[1].y}° N`, `${values.dataPoints[1].x}° W`],
            properties: [
                {
                    caption: "데이터 포인트",
                    properties: [
                        { key: "y", caption: "X 값", description: "" },
                        { key: "x", caption: "X 값", description: "" }
                    ]
                }
            ]
        },
        {
            captions: [`${values.dataPoints[2].y}° N`, `${values.dataPoints[2].x}° W`],
            properties: [
                {
                    caption: "데이터 포인트",
                    properties: [
                        { key: "y", caption: "X 값", description: "" },
                        { key: "x", caption: "Y 값", description: "" }
                    ]
                }
            ]
        }
    ]
}
```

## 일관성 검사를 사용한 유효성 검사 사용자 지정

기본적으로 Studio Pro는 필수 속성의 유효성을 검사합니다. 구성된 데이터에 추가 유효성 검사를 추가하려면 모듈에서 `check` 함수를 내보낼 수 있습니다. 이 함수는 Values API에 따라 전달된 값을 가져오며, 발견된 문제의 배열을 반환해야 합니다:

```typescript
function check(values: ValuesAPI): Problem[]
```

`Problem`은 다음 유형으로 정의된 객체입니다:

```typescript
type Problem = {
    property?: string; // 문제가 존재하는 속성의 키
    severity?: "error" | "warning" | "deprecation"; // 기본값 = "error"
    message: string; // 문제에 대한 설명
    url?: string; // 문제에 대한 자세한 정보가 있는 링크
}
```

이 함수에서 반환된 모든 문제는 Studio Pro의 [Errors](/refguide/errors-pane/) 창에 표시됩니다.

### 하위 객체의 속성 타겟팅

`object` 유형의 속성에는 속성이 있는 객체 목록이 포함됩니다. 이 경우 어떤 객체의 어떤 속성에서 문제가 발생했는지 지정할 수 있습니다. 이는 속성을 `<property>/<index>/<sub-property>`로 지정하여 수행할 수 있으며, 여기서 index는 객체 목록의 1부터 시작하는 인덱스입니다.

#### 예시

예를 들어, 하위 속성 `x` 및 `y`가 있는 객체 속성 `dataPoints`가 존재하고 `y`가 10보다 크지 않아야 하는 경우, 다음 코드는 해당 오류를 반환합니다:

```typescript
function check(values) {
    var problems = [];
    values.dataPoints.forEach((p, i) => {
        if (p.y > 10) {
            problems.push({
                property: `dataPoints/${i + 1}/y`,
                message: "y는 10보다 커서는 안 됩니다."
            });
        }
    });
    return problems;
}
```

## 페이지 탐색기 캡션 사용자 지정

페이지 탐색기(Page Explorer)는 일반적으로 커스텀 위젯의 유형 이름을 캡션으로 사용합니다. 사용자 지정 캡션을 사용해야 하는 경우 모듈에서 `getCustomCaption` 함수를 내보낼 수 있습니다. 이 함수는 Values API에 따라 전달된 값과 현재 플랫폼을 가져옵니다:

```typescript
function getCustomCaption(values: ValuesAPI, platform: "desktop" | "web"): string
```

캡션이 `null`, `undefined` 또는 문자열이 아닌 경우 기본 캡션이 사용됩니다.

## Structure Mode에서의 위젯 미리보기

Studio Pro에서 커스텀 위젯의 모양을 구성하려면 `getPreview` 함수를 내보내십시오. 이 함수는 세 개의 파라미터를 받습니다: 첫 번째는 현재 값을 포함하고, 두 번째는 다크 모드 설정 여부를 나타내며, 세 번째 파라미터는 현재 Studio Pro 버전을 전달합니다. 이 함수는 커스텀 위젯 미리보기 구성이 포함된 미리보기 속성 객체를 반환해야 합니다.

기본 색상은 다크 모드에 맞게 자동으로 조정됩니다(예: 글꼴 색상, 테두리 색상 등). 그러나 색상을 명시적으로 설정할 때 `isDarkMode` 플래그를 사용할 수 있습니다.

버전별로 미리보기를 만들려면 세 번째 인수인 `version`을 사용할 수 있습니다. 여기에는 [`major`, `minor`, `build`] 형식의 숫자 배열로 현재 Studio Pro 버전이 포함됩니다(예: `[9, 18, 0]`).

다음은 `getPreview`가 반환해야 하는 미리보기 속성 객체에 대한 API를 설명합니다.

일반적인 요소 구조:

```typescript
type BaseProps = {
    type: string; // "Text" | "RowLayout" | "Image" …;
    grow?: number; // 레이아웃에서 사용되는 경우 선택적으로 증가 계수를 설정합니다(기본값 = 1).
}
```

모든 유형의 미리보기 속성은 `type`과 `grow`라는 두 가지 공통 속성을 공유합니다:

* `type`은 아래에 설명된 미리보기 유형(`"Image"`, `"Text"`, `"RowLayout"` 등) 중 하나일 수 있습니다.
* `grow`는 선택 사항이며 현재 요소가 행 레이아웃(row layout)의 자식인 경우에만 효과가 있습니다(예제는 [행 레이아웃(#row-layout)](#row-layout) 섹션 참조).

다음 요소들은 기본 미리보기 props를 해당 요소의 고유 속성으로 확장합니다. 예를 들어 텍스트 요소의 경우 `content`를 포함하거나 이미지 요소의 경우 `document` 및 `width`를 포함할 수 있습니다. 다음 요소 섹션에서는 사용 가능한 모든 요소 유형과 해당 속성을 나열합니다.

### Image

```typescript
type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg 이미지
    data?: string; // base64 이미지
    property?: object; // Values API의 위젯 이미지 속성 객체
    width?: number; // 고정된 최대 너비 설정
    height?: number; // 고정된 최대 높이 설정
}
```

이미지 속성은 서로 다른 유형의 입력을 받을 수 있습니다(하지만 항상 `document` 또는 `data` 중 *하나*가 필요합니다):

* `document`: SVG 이미지 문자열
* `data`: base64 인코딩된 이미지 문자열
* `property`: 이미지 속성의 값.
    * 이미지 속성을 전달할 때 정적 이미지가 설정된 경우에만 표시됩니다(`document` 또는 `data`도 함께 전달해야 하며, 속성이 비어 있거나 동적 이미지가 설정된 경우 대체 이미지로 작동함).

또한 고정된 `width`와 `height`를 설정할 수 있습니다. 설정하지 않으면 사용 가능한 너비로 최대화됩니다. 너비와 높이가 원본 이미지 가로세로 비율과 다르게 설정된 경우 이미지가 왜곡되지 않도록 이미지의 일부를 보여줍니다.

다음은 원형 SVG의 예입니다:

```typescript
export const getPreview = (_values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => {
    const mySvgImage = `
<svg height="1000" width="1000">
    <circle cx="500" cy="500" r="400" stroke="black" stroke-width="35" fill="blue" />
</svg>`;
    return {
        type: "Image",
        document: mySvgImage,
        width: 200 // 최대 너비를 200으로 설정
    }
};
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-image.png" alt="원의 svg 이미지" width="200"  class="no-border" >}}

### Container

```typescript
type ContainerProps = BaseProps & {
    type: "Container";
    children: StructurePreviewProps[]; // 다른 미리보기 요소
    borders?: boolean; // 자식 요소를 시각적으로 그룹화하기 위해 레이아웃 주변에 테두리 설정
    borderRadius?: number; // 정수. 둥근 테두리를 만드는 데 사용할 수 있음
    backgroundColor?: string; // HTML 색상, #RRGGBB 형식
    borderWidth?: number; // 테두리 너비 설정
    padding?: number; // 정수. 컨테이너 주변에 패딩 추가
}
```

컨테이너는 여러 요소를 수직으로 쌓는 데 사용할 수 있습니다. 이러한 요소는 props 배열인 `children`으로 전달됩니다. `borders` 속성을 사용하여 전체 콘텐츠 주변에 테두리를 설정하여 시각적으로 그룹화할 수 있습니다.

다음은 테두리가 있는 두 개의 텍스트 예입니다:

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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-container.png" alt="두 개의 텍스트가 있는 테두리가 있는 컨테이너" width="600"  class="no-border" >}}

### 행 레이아웃(Row Layout) {#row-layout}

```typescript
type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow" // 기본값은 fixed
}
```

행 레이아웃은 컨테이너와 유사하며 여러 요소를 수평으로 나란히 렌더링하는 데 사용할 수 있습니다. 컨테이너가 가진 모든 props를 가지며, 자식 크기가 동일한 고정 가중치인지 아니면 콘텐츠에 의해 결정되는지 정의하는 `columnSize`가 추가되었습니다(자세한 내용은 다음 섹션 참조).

#### 열 크기(Column Size)

##### Fixed (기본값)

`columnSize`가 설정되지 않았거나 `"fixed"`로 설정된 경우 사용 가능한 모든 공간은 고정된 가중치로 나뉩니다. 그런 다음 콘텐츠 크기에 따라 열을 확장하거나 축소하는 대신 자식 콘텐츠를 열에 맞춥니다.

예를 들어 이는 그리드와 같은 구조를 만드는 데 유용합니다. 기본적으로 모든 열은 동일한 양의 공간을 얻습니다. 그러나 자식에 `grow` 값이 설정된 경우 자식에 대해 비례적인 열 크기를 설정하는 데 사용됩니다. `grow` 값이 없는 자식은 자동으로 값 1을 받습니다.

예를 들어 다음 코드는 네 개의 자식이 있는 행 레이아웃을 생성합니다. 첫 번째 자식(`Image`)은 사용 가능한 공간의 절반을 차지하고 나머지 세 자식(`Texts`)은 나머지 절반을 공유합니다. 이는 첫 번째 자식의 `grow` 속성을 3으로 설정하여 달성할 수 있습니다:

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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-fixed.png" alt="고정된 열 가중치를 가진 행 레이아웃" width="1000"  class="no-border" >}}

##### Grow

`columnSize`가 `"grow"`로 설정된 경우 열 크기는 콘텐츠에 의해 결정됩니다. 남은 공간이 있으면 모든 열에 분배됩니다. 자식이 성장하는 상대적인 공간 양에 영향을 주려면 각 자식에 대해 `grow` 계수를 설정할 수 있습니다. 그러면 열은 이 계수에 따라 비례적으로 성장합니다. `grow` 값이 없는 자식은 자동으로 값 1을 받습니다.

레이아웃에 요소가 선호하는 것보다 적은 공간이 있는 경우 항목은 최소 크기에 도달할 때까지 `grow` 계수에 반비례하여 축소됩니다(높은 grow 계수는 낮은 축소 계수를 의미함):

* `text`는 더 작아지기 위해 줄바꿈됩니다.
* `image`는 `width` 속성으로 수동으로 설정하거나 모든 요소가 최소 크기에 도달하지 않는 한 원본 크기보다 더 축소되지 않습니다.

모든 항목이 최소 크기에 도달하면 레이아웃은 `grow` 값에 비례하여 더 작은 크기를 강제합니다.

항목을 필요 이상으로 작게 강제하는 것은 이미지에는 작동하지만 다른 요소에서는 예상치 못한 동작을 유발할 수 있습니다.

다음은 grow 계수가 어떻게 작동하는지 보여주는 예입니다:

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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow.png" alt="다른 grow 계수를 가진 행 레이아웃" width="1000"  class="no-border" >}}

##### 예시

다음은 행 레이아웃을 사용하여 항목을 중앙에 배치하는 방법을 보여주는 버튼 예입니다:

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
                type: "Container", // 왼쪽 공간을 채움
            },
            {
                type: "Container",
                grow: 0, // 필요한 공간만 차지하도록 함
                padding: 10,
                children: [
                    { type: "Text", content: "A button", fontColor: "#FFF", fontSize: 20 }
                ]
            },
            {
                type: "Container", // 오른쪽 공간을 채움
            }
        ]
    });
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-row-layout-grow-2.png" alt="두 개의 텍스트가 있는 테두리가 있는 컨테이너의 구조 모드 미리보기" width="600"  class="no-border" >}}

### Text

```typescript
type TextProps = BaseProps & {
    type: "Text";
    content: string; // 표시될 텍스트
    fontSize?: number; // 글꼴 크기 설정
    fontColor?: string; // HTML 색상, #RRGGBB 형식
    bold?: boolean;
    italic?: boolean;
}
```

표시할 텍스트는 `content`로 전달되어야 합니다. 선택적으로 `fontSize`를 설정할 수 있습니다. 글꼴 크기로는 정수만 지원됩니다.

예시는 다음과 같습니다:

```typescript
export const getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => (
    {
        type: "Text",
        content: values.myTextProp, // 표시되는 텍스트를 myTextProp 값으로 설정
    });
```

### 드롭 존(Drop Zones) 

```typescript
type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // Values API의 위젯 속성 객체
    placeholder: string; // 비어 있을 때 드롭존 내부에 표시될 텍스트
    showDataSourceHeader: bool?; // 기본값은 true. 데이터 소스에 대한 정보를 포함하는 헤더를 표시할지 여부를 토글함
}
```

드롭 존 미리보기 유형은 위젯 미리보기에 드롭 존을 추가하는 데 사용할 수 있습니다. 포함된 위젯에 대한 정보를 저장할 수 있도록 `widgets` 유형의 위젯 속성이 필요합니다. 속성에 데이터 소스가 있는 경우 데이터 소스에 대한 정보를 포함하는 헤더가 드롭존 내부에 표시됩니다. 이 헤더는 선택 사항이며 `showDataSourceHeader`를 `false`로 설정하여 숨길 수 있습니다.

드롭 존을 구성하려면 다음 예제와 같이 ([Values API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis-10/#values)에서 직접 얻을 수 있는) 위젯 속성 객체를 `property`로 전달해야 합니다:

```typescript
exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
    type: "Container",
    borders: true,
    children: [
        {
            type: "Text",
            content: "이 위젯은 다른 위젯의 컨테이너 역할을 합니다."
        },
        {
            type: "DropZone",
            property: values.myWidgetsProp
            placeholder: "여기에 위젯을 드롭하세요!"
        }
    ]
})
```

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-drop-zone.png" alt="드롭존이 있는 컨테이너" width="600"  class="no-border" >}}

### Selectable

```typescript
type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // Value API의 객체 속성 인스턴스
    child: StructurePreviewProps; // 객체 인스턴스를 시각화하기 위한 모든 유형의 미리보기 속성
}
```

selectable 미리보기 유형은 객체 리스트의 인스턴스를 선택 가능하게 만드는 데 사용할 수 있습니다. 객체 인스턴스가 선택 가능하게 만들어지면 위젯과 유사하게 동작합니다. 그 속성은 `Properties` 섹션에 표시되며 `child` 속성에 의해 시각화된 섹션을 두 번 클릭하여 팝업에서 편집할 수도 있습니다. 이는 `object` 유형의 속성과 조합해서만 작동합니다.

selectable을 구성하려면 [Value API](/apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis-10/#values)의 객체를 `object`로 전달하고, 객체를 시각화할 미리보기 속성을 `child`로 전달해야 합니다.

다음 예제는 선택 가능한 객체 목록이 있는 컨테이너를 렌더링하는 방법을 보여줍니다. 이 경우 각 객체는 캡션이 있는 텍스트로 표시됩니다:

```typescript
export function getPreview(values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) {
    const container: ContainerProps = {
        type: "Container",
        borders: true,
        children: [
            { type: "Text", fontSize: 18, content: "선택 가능한 요소가 있는 목록" }
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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-selectable.png" alt="선택 가능한 텍스트 요소 목록" width="600"  class="no-border" >}}

### Datasource

```typescript
type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: Nullable<object>; // Values API의 데이터 소스 속성 객체
    child?: StructurePreviewProps; // 모든 유형의 미리보기 속성 컴포넌트(선택 사항)
}
```

**datasource** 미리보기 유형은 데이터 소스가 있는 위젯을 개발할 때 사용할 수 있습니다. 이를 사용하면 데이터 뷰나 리스트 뷰와 같은 다른 데이터 위젯과 유사하게 데이터 소스 헤더가 있는 컨테이너가 렌더링됩니다. 예를 들어 다음은 드롭 존이 있는 데이터 소스 컨테이너를 렌더링합니다:

```typescript
    exports.getPreview = (values: WidgetPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
      type: "Datasource",
      property: values.myDatasourceProp, // 데이터 소스 속성 전달
      child: {
        type: "DropZone",
        property: values.myWidgetsProp
      }
    })
```

다음은 두 개의 텍스트 상자가 있는 드롭 존을 포함하는 **datasource** 컴포넌트의 미리보기입니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/structure-preview-example-datasource.png" alt="데이터 소스가 있는 위젯" width="400"  class="no-border" >}}

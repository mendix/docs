---
title: "미리보기 모양 API"
linktitle: "미리보기 모양 API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis-10/
description: Mx10에서 플러그형 위젯 미리보기 모양에 영향을 미치는 API를 이해하기 위한 가이드입니다.
weight: 30
---

## 소개

이 가이드는 더 나은 플러그형 위젯을 빌드할 수 있도록 Mendix Studio Pro에서 제공하는 API를 설명합니다. 구체적으로, Studio Pro의 **Design mode**에서 작업하는 동안 플러그형 위젯의 미리보기 모양을 변경하기 위해 이러한 API와 모듈을 사용할 수 있습니다. **Structure mode**에서 사용자 지정 미리보기를 만들거나, 사용자 지정 일관성 검사를 추가하거나, 조건부로 위젯 속성을 숨기는 방법에 대해 알아보려면 [플러그형 위젯을 위한 구성 모듈 API(/apidocs-mxsdk/apidocs/pluggable-widgets-config-api-10/)](#pluggable-widgets-config-api)를 읽어보십시오.

마지막으로, [플러그형 위젯에서 사용할 수 있는 클라이언트 API(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/)](#pluggable-widgets-client-apis)는 앱이 클라이언트에서 실행된 후의 플러그형 위젯 개발을 위한 것입니다. 이 가이드의 API는 Mendix 8.0.0 이상에서 사용할 수 있습니다.

## Values API {#values}

Values API는 플러그형 위젯의 속성에 대해 구성된 값을 전달합니다. 이러한 값은 JavaScript 객체로 전달되며, 속성의 `key`가 객체 속성으로 사용됩니다.

이러한 객체의 예는 다음과 같습니다:

```javascript
{
    stringProp: "Some value",
    intProp: 42
}
```

### 정적 속성(Static Properties)

정적 속성 유형은 구성된 값과 함께 JavaScript 값으로 노출됩니다:

| 플러그인 위젯 유형 | JavaScript 유형 |
| ------------------ | --------------- |
| `string` | `string` |
| `boolean` | `boolean` |
| `integer` | `number` |
| `decimal` | `number` |
| `enumeration` | `string` |

`enumeration` 속성의 경우 현재 선택된 옵션의 `key`가 값으로 사용됩니다.

### Icon {#icon}

이 속성은 다음과 같이 나타납니다:

```typescript
type GlyphIcon = { type: "glyph"; iconClass: string; }
type ImageIcon = { type: "image"; imageUrl: string; }
type Icon = { type: "icon"; iconClass: string; }

type IconProperty = null | GlyphIcon | ImageIcon | Icon;
```

아이콘 속성은 `type` 필드를 포함하는 노출된 객체입니다. 글리피콘(glyphicon)이 선택된 경우 `"glyph"`, 이미지가 선택된 경우 `"image"`, 아이콘 컬렉션의 아이콘이 선택된 경우 `"icon"`, 아이콘이 전혀 선택되지 않은 경우 `null`입니다.

`"glyph"` 유형의 경우 `iconClass`를 사용할 수 있습니다. 여기에는 올바른 아이콘을 표시하기 위해 `glyphicon` 요소에 적용할 클래스가 포함됩니다. 아이콘이 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"image"` 유형의 경우 `imageUrl`을 사용할 수 있습니다. 이는 Studio Pro의 **Design mode**에서 선택한 이미지에 액세스할 수 있는 URL을 나타냅니다. 이미지가 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"icon"` 유형의 경우 `iconClass`를 사용할 수 있습니다. 여기에는 올바른 아이콘을 표시하기 위해 요소에 적용할 클래스가 포함됩니다. 이 요소에는 `glyphicon` 클래스가 필요하지 않습니다. 아이콘이 선택되지 않은 경우 빈 문자열 값이 됩니다.

### Image

이 속성은 다음과 같이 나타납니다:

```typescript
type StaticImage = { type: "static"; imageUrl: string; };
type DynamicImage = { type: "dynamic"; entity: string; };

type ImageProperty = null | StaticImage | DynamicImage;
```

이미지 속성은 `type` 필드를 포함하는 노출된 객체입니다. 정적 이미지가 선택된 경우 `"static"`, 엔티티가 선택된 경우 `"dynamic"`, 이미지가 전혀 선택되지 않은 경우 `null`입니다.

`"static"` 유형의 경우 `imageUrl`을 사용할 수 있습니다. 이는 Studio Pro의 **Design mode**에서 선택한 이미지에 액세스할 수 있는 URL을 나타냅니다. 이미지가 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"dynamic"` 유형의 경우 `entity`를 사용할 수 있습니다. 이는 선택한 이미지의 데이터가 저장된 엔티티를 나타냅니다. 엔티티가 선택되지 않은 경우 빈 문자열 값이 됩니다.

### Widgets {#widgets}

이 속성은 다음과 같이 나타납니다:

```typescript
type WidgetsProperty = {
    widgetCount: number;
    renderer: React.ComponentType<{caption?: string}>;
}
```

이 속성은 다음 속성을 포함하는 객체로 노출됩니다:

* `widgetCount`: 구성된 직계 자식 위젯의 수
* `renderer`: 미리보기에서 자식 위젯을 렌더링할 수 있게 해주는 React 컴포넌트
    * renderer 컴포넌트에는 `caption`이라는 추가 속성이 있어, 드롭존이 비어 있을 때 내부에 표시되는 텍스트를 재정의할 수 있습니다.

### Expression

이 속성은 사용자가 입력한 표현식을 포함하는 문자열 값으로 전달됩니다.

### 텍스트 템플릿(Text Template)

미리보기 문자열이 전달됩니다. 이 미리보기는 현재 활성화된 언어를 사용하고 자리 표시자(placeholders)를 속성 이름으로 바꾸어 작성됩니다.

예를 들어 다음과 같은 자리 표시자를 볼 수 있습니다:

```text
Name: {1}
Description: {2}
```

자리 표시자 대신 파라미터 `EventName` 및 `EventDescription`을 사용하면 다음과 같이 보입니다:

```text
Name: {EventName}
Description: {EventDescription}
```

### Action

액션이 설정되면 액션이 설정되었음을 나타내기 위해 빈 객체 `{}`가 전달됩니다. 클라이언트 액션이 설정되지 않은 경우 전달된 값은 `null`이 됩니다.

### Attribute

선택된 속성(attribute)의 경로를 포함하는 문자열이 전달됩니다.

몇 가지 예시는 다음과 같습니다:

* `EventName`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event/EventName`

### Object

객체 속성은 JavaScript 객체의 `array`로 전달됩니다. 구성된 각 하위 객체에 대해 모든 하위 객체의 속성을 가진 객체가 전달됩니다. 이러한 속성은 `key`로 사용할 수 있으며, 값은 [Values API(#values)](#values) 섹션 전체에서 설명한 것과 같습니다.

### File

선택된 파일 엔티티의 경로를 포함하는 문자열이 전달됩니다.

몇 가지 예시는 다음과 같습니다:

* `MyFirstModule.Event`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event`

## Design Mode를 위한 미리보기 모듈

Studio Pro의 Design Mode에서 렌더링될 플러그형 위젯에 대한 미리보기를 생성할 수 있습니다.

커스텀 위젯에 `xml` 파일과 동일한 이름에 `.editorPreview.js` 접미사를 붙인 파일을 추가하여 모듈을 추가하십시오. 예를 들어, `TextBox.xml`이라는 이름의 위젯은 `TextBox.editorPreview.js`라는 미리보기 모듈을 가집니다.

이 미리보기 모듈은 `exports` 객체를 사용하여 다음 함수를 내보내는 CommonJS 모듈이어야 합니다.

### 노출된 라이브러리

**Design mode**에서는 몇 가지 라이브러리만 가져올 수 있습니다. 이는 `require`를 사용하는 CommonJS 방식을 통해 이루어져야 합니다.

다음 모듈을 require할 수 있습니다:

* React 라이브러리 `"react"`, `"react-dom"`, `"react-dom-factories"`, `"prop-types"`
* 아이콘 속성을 렌더링하는 데 사용할 수 있는 `Icon` 컴포넌트: `"mendix/components/web/Icon"`
* 미리보기에서 선택 가능한 대상을 정의하는 데 사용할 수 있는 `Selectable` 컴포넌트: `"mendix/preview/Selectable"`

### Preview 내보내기(Export)

`preview` 내보내기는 `React` 컴포넌트를 나타내는 `class` 또는 `function`이어야 합니다. 이 컴포넌트, values 객체(위의 [Values API(#values)](#values) 섹 참조) 및 다음 속성들이 values와 함께 속성으로 렌더링됩니다:

* `readOnly` (`boolean`): 위젯이 읽기 전용인 경우 `true` (예: `Editability` 시스템 속성으로 인해 그렇게 구성되었거나 읽기 전용 데이터 뷰 내부에 있는 경우)
* `renderMode` (`string`): 렌더링 에디터가 어떤 모드인지에 대한 정보를 제공하는 문자열
    * `design`: 현재 에디터가 디자인 모드임
    * `xray`: 현재 에디터가 x-ray 모드임
* `class` (`string`): 시스템의 클래스. Studio Pro의 `class` 속성을 통해 수동으로 구성된 클래스와 구성된 디자인 속성에서 결과로 나온 클래스가 포함됩니다.
* `style` (`string`): Studio Pro의 `style` 속성에 입력된 스타일의 문자열 표현

문자열 속성 `content` 및 `style`을 가진 플러그형 위젯을 가정하면, 다음은 간단한 미리보기 컴포넌트를 보여줍니다:

```tsx
type Props = {
    content: string;
    style: string;
    class: string;
}

export const preview: React.FC<Props> = (props) => (
    <div className={`my-pw-container ${props.class}`} style={props.style}>
        {props.content}
    </div>
);
```

#### Widgets 속성 사용

[Widgets 속성(#widgets)](#widgets)에는 내용이 채워졌을 때 렌더링되도록 하거나, 미리보기 내부에서 비어 있을 때 빈 드롭존을 표시하는 `renderer` 필드가 포함되어 있습니다. 콘텐츠를 렌더링하기 위해 자식으로 비어 있는 단일 DOM 노드가 필요합니다:

```tsx
type Props = {
    content: WidgetsProperty;
}

export const preview: React.FC<Props> = (props) => {
    const ContentRenderer = props.content.renderer;

    return (
        <div className="my-pw-container">
            <div className="my-pw-header">…</div>
            <ContentRenderer><div className="my-pw-content" /></ContentRenderer>
        </div>
    );
}
```

#### Icon 속성 사용

미리보기 모듈은 클라이언트의 `Icon` 컴포넌트와 동일한 방식으로 [아이콘 속성(#icon)](#icon)을 미리 볼 수 있는 컴포넌트를 제공합니다. 이 컴포넌트는 `"mendix/components/web/Icon"`에서 가져올 수 있으며 `IconProperty`를 `icon` 파라미터로 받습니다.

```tsx
import { Icon } from "mendix/components/web/Icon";

type Props = {
    icon: IconProperty;
}

export const preview: React.FC<Props> = (props) => (
    <div className="my-pw-container">
        <Icon icon={props.icon} />
        <div className="my-pw-content">…</div>
    </div>
);
```

#### Selectable 컴포넌트 사용

미리보기 모듈은 미리보기에서 객체를 선택 가능하도록 정의하는 컴포넌트를 제공합니다. 이 컴포넌트는 `"mendix/preview/Selectable"`에서 가져올 수 있으며, `object` 리스트 속성의 항목을 `object` 파라미터로 받고, 선택적인 `caption` 파라미터를 가집니다.

아래 예제는 명확성을 위해 유형(types)의 단순화된 표현을 정의합니다. 실제로는 위젯 이름이 `TruckWidget`인 경우 `"../typings/TruckWidgetProps"`에서 해당 유형을 가져올 것입니다.

```tsx
import { Selectable } from "mendix/preview/Selectable";

type TruckDriversType = {
    name: string;
    age: number;
    isExperienced: boolean;
}

type TruckWidgetPreviewProps = {
    truckDrivers: TruckDriversType[];
}

export const preview: React.FC<TruckWidgetPreviewProps> = (props) => (
    <div className="my-pw-container">
        {props.truckDrivers.map((truckDriver, i) => (
            <Selectable
                object={truckDriver}
                caption={truckDriver.isExperienced ? "멋진 트럭 운전사" : undefined}
                key={`truck_driver_${i}`}
            >
                <div className="my-pw-truck-driver">
                    <div>이름: {truckDriver.name}</div>
                    <div>나이: {truckDriver.age}</div>
                </div>
            </Selectable>
        ))}
    </div>
)
```

위젯이 페이지에 추가되면 특정 항목을 선택하고 편집할 수 있습니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-studio-apis/selectable-component.png" alt="Selectable 컴포넌트 예시" class="no-border" >}}

### GetPreviewCss 내보내기(Export)

`getPreviewCss` 내보내기는 미리보기를 렌더링하는 데 필요한 CSS를 포함하는 `string`을 반환하는 `function`이어야 합니다.

```typescript
export function getPreviewCss() {
    return `
.my-pw-container {
    background-color: #C0FFEE;
}
`;
}
```

## 추가 정보

* [플러그형 위젯을 위한 구성 모듈 API(/apidocs-mxsdk/apidocs/pluggable-widgets-config-api-10/)](#pluggable-widgets-config-api)
* [플러그형 위젯에서 사용할 수 있는 클라이언트 API(/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-10/)](#pluggable-widgets-client-apis)
* [플러그형 위젯 속성 유형(/apidocs-mxsdk/apidocs/pluggable-widgets-property-types-10/)](#pluggable-widgets-property-types)
* [플러그형 네이티브 위젯 빌드 방법](/howto/extensibility/build-native-widget/)
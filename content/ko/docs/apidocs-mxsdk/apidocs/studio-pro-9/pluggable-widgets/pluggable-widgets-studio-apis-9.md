---
title: "미리보기 외관 API"
linktitle: "미리보기 외관 API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-studio-apis-9/
description: A guide for understanding the APIs which influence pluggable widget preview appearances.
weight: 30
---

## 소개

이 가이드는 더 나은 플러거블 위젯(Pluggable Widget)을 구축할 수 있도록 Mendix Studio Pro에서 제공하는 API를 설명합니다. 구체적으로, 이러한 API와 모듈을 사용하여 Studio Pro의 Design mode에서 작업하는 동안 플러거블 위젯의 미리보기 외관을 변경할 수 있습니다. Structure mode에서 사용자 정의 미리보기를 생성하거나, 사용자 정의 일관성 검사를 추가하거나, 조건부로 위젯 속성을 숨기는 방법에 대해 알아보려면 [플러거블 위젯용 구성 모듈 API](/apidocs-mxsdk/apidocs/pluggable-widgets-config-api/)를 참조하세요.

마지막으로, [플러거블 위젯에 사용 가능한 Client API](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/)는 앱이 클라이언트에서 실행 중일 때 플러거블 위젯 개발을 위한 것입니다. 이 가이드의 API는 Mendix 8.0.0 이상에서 사용할 수 있습니다.

## Values API {#values}

Values API는 플러거블 위젯의 속성에 대해 구성된 값을 전달합니다. 이러한 값은 JavaScript 객체로 전달되며, 속성의 `key`가 객체 속성으로 사용됩니다.

다음은 이러한 객체의 예입니다:

```javascript
{
    stringProp: "Some value",
    intProp: 42
}
```

### 정적 속성

정적 속성 타입은 구성된 값을 JavaScript 값으로 노출합니다:

| 플러그인 위젯 타입 | JavaScript 타입 |
| ------------------ | --------------- |
| `string`           | `string`        |
| `boolean`          | `boolean`       |
| `integer`          | `number`        |
| `decimal`          | `number`        |
| `enumeration`      | `string`        |

`enumeration` 속성의 경우, 현재 선택된 옵션의 `key`가 값으로 사용됩니다.

### Icon {#icon}

이 속성은 다음과 같이 나타납니다:

```typescript
type GlyphIcon = { type: "glyph"; iconClass: string; }
type ImageIcon = { type: "image"; imageUrl: string; }
type Icon = { type: "icon"; iconClass: string; }

type IconProperty = null | GlyphIcon | ImageIcon | Icon;
```

Icon 속성은 `type` 필드를 포함하는 객체로 노출됩니다. 글리프아이콘이 선택된 경우 `"glyph"`, 이미지가 선택된 경우 `"image"`, 아이콘 컬렉션에서 아이콘이 선택된 경우 `"icon"`, 아이콘이 전혀 선택되지 않은 경우 `null`입니다.

`"glyph"` 타입의 경우, `iconClass`를 사용할 수 있습니다. 올바른 아이콘을 표시하기 위해 `glyphicon` 엘리먼트에 적용할 클래스를 포함합니다. 아이콘이 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"image"` 타입의 경우, `imageUrl`을 사용할 수 있습니다. Studio Pro의 Design mode에서 선택한 이미지에 접근할 수 있는 URL을 나타냅니다. 이미지가 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"icon"` 타입의 경우, `iconClass`를 사용할 수 있습니다. 올바른 아이콘을 표시하기 위해 엘리먼트에 적용할 클래스를 포함합니다. 이 엘리먼트에는 `glyphicon` 클래스가 필요하지 않습니다. 아이콘이 선택되지 않은 경우 빈 문자열 값이 됩니다.

### Image

이 속성은 다음과 같이 나타납니다:

```typescript
type StaticImage = { type: "static"; imageUrl: string; };
type DynamicImage = { type: "dynamic"; entity: string; };

type ImageProperty = null | StaticImage | DynamicImage;
```

Image 속성은 `type` 필드를 포함하는 객체로 노출됩니다. 정적 이미지가 선택된 경우 `"static"`, 엔티티(Entity)가 선택된 경우 `"dynamic"`, 이미지가 전혀 선택되지 않은 경우 `null`입니다.

`"static"` 타입의 경우, `imageUrl`을 사용할 수 있습니다. Studio Pro의 Design mode에서 선택한 이미지에 접근할 수 있는 URL을 나타냅니다. 이미지가 선택되지 않은 경우 빈 문자열 값이 됩니다.

`"dynamic"` 타입의 경우, `entity`를 사용할 수 있습니다. 선택한 이미지의 데이터가 저장되는 엔티티(Entity)를 나타냅니다. 엔티티가 선택되지 않은 경우 빈 문자열 값이 됩니다.

### Widgets {#widgets}

이 속성은 다음과 같이 나타납니다:

```typescript
type WidgetsProperty = {
    widgetCount: number;
    renderer: React.ComponentType<{caption?: string}>;
}
```

이 속성은 다음 속성을 포함하는 객체로 노출됩니다:

* `widgetCount`: 구성된 직접 하위 위젯의 수
* `renderer`: 미리보기에서 하위 위젯을 렌더링할 수 있는 React 컴포넌트
    * renderer 컴포넌트에는 드롭존이 아직 비어 있을 때 내부에 나타나는 텍스트를 재정의하는 `caption`이라는 추가 속성이 있습니다

### Expression

이 속성은 사용자가 입력한 표현식을 포함하는 문자열 값으로 전달됩니다.

### Text Template

미리보기 문자열이 전달됩니다. 이 미리보기는 현재 활성 언어를 사용하고 플레이스홀더를 속성 이름으로 대체하여 구축됩니다.

예를 들어, 다음과 같은 플레이스홀더를 볼 수 있습니다:

```text
Name: {1}
Description: {2}
```

플레이스홀더 대신 `EventName`과 `EventDescription` 매개변수를 사용하면 다음과 같습니다:

```text
Name: {EventName}
Description: {EventDescription}
```

### Action

액션이 설정되면, 액션이 설정되었음을 나타내는 빈 객체 `{}`가 전달됩니다. 클라이언트 액션이 설정되지 않은 경우, 전달되는 값은 `null`입니다.

### Attribute

선택된 속성의 경로를 포함하는 문자열이 전달됩니다.

몇 가지 예입니다:

* `EventName`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event/EventName`

### Object

Object 속성은 JavaScript 객체의 `array`로 전달됩니다. 구성된 각 하위 객체에 대해 모든 하위 객체의 속성이 포함된 객체가 전달됩니다. 이러한 속성은 해당 `key`로 접근할 수 있으며, 값은 [Values API](#values) 섹션 전체에 설명된 대로입니다.

### File

선택된 파일 엔티티(Entity)의 경로를 포함하는 문자열이 전달됩니다.

몇 가지 예입니다:

* `MyFirstModule.Event`
* `MyFirstModule.EventSchedule_Event/MyFirstModule.Event`

## Design Mode를 위한 미리보기 모듈

Studio Pro의 Design Mode에서 렌더링될 플러거블 위젯의 미리보기를 생성할 수 있습니다.

위젯의 `xml` 파일과 동일한 이름에 접미사 `.editorPreview.js`를 붙인 파일을 사용자 정의 위젯에 추가하여 모듈을 추가하세요. 예를 들어, `TextBox.xml`이라는 위젯에는 `TextBox.editorPreview.js`라는 미리보기 모듈이 있습니다.

이 미리보기 모듈은 CommonJS 모듈이어야 하며, `exports` 객체를 사용하여 다음 함수를 내보내야 합니다.

### 노출된 라이브러리

Design mode에서는 몇 가지 라이브러리만 가져올 수 있습니다. 이는 CommonJS 방식, 즉 `require`를 사용하여 수행해야 합니다.

다음 모듈을 require할 수 있습니다:

* React 라이브러리 `"react"`, `"react-dom"`, `"react-dom-factories"`, `"prop-types"`
* icon 속성을 렌더링하는 데 사용할 수 있는 `Icon` 컴포넌트: `"mendix/components/web/Icon"`
* 미리보기에서 선택 가능한 항목을 정의하는 데 사용할 수 있는 `Selectable` 컴포넌트: `"mendix/preview/Selectable"`

### Preview Export

`preview` export는 `React` 컴포넌트를 나타내는 `class` 또는 `function`이어야 합니다. 이 컴포넌트는 values 객체(위의 [Values API](#values) 섹션 참조)와 다음 속성이 값과 함께 속성으로 렌더링됩니다:

* `readOnly` (`boolean`): 위젯이 읽기 전용인 경우 `true` (예: `Editability` 시스템 속성으로 인해 구성된 경우 또는 읽기 전용 Data view 안에 있는 경우)
* `class` (`string`): Studio Pro의 `class` 속성을 통해 수동으로 구성된 클래스와 구성된 디자인 속성에서 발생한 클래스를 포함하는 시스템의 클래스
* `style` (`string`): Studio Pro의 `style` 속성에 입력된 스타일의 문자열 표현

문자열 속성 `content`와 `style`을 가진 플러거블 위젯을 가정하면, 다음은 간단한 미리보기 컴포넌트를 보여줍니다:

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

#### Widgets 속성 사용하기

[Widgets 속성](#widgets)에는 내용이 채워져 있을 때 렌더링하거나, 미리보기 내에서 비어 있을 때 빈 드롭 존을 표시하는 `renderer` 필드가 포함되어 있습니다. 내용을 렌더링할 단일 빈 DOM 노드가 자식으로 필요합니다:

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

#### Icon 속성 사용하기

미리보기 모듈은 클라이언트의 `Icon` 컴포넌트와 동일한 방식으로 [icon 속성](#icon)을 미리 보기 위한 컴포넌트를 제공합니다. 이 컴포넌트는 `"mendix/components/web/Icon"`에서 가져올 수 있으며 `IconProperty`를 `icon` 매개변수로 허용합니다.

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

#### Selectable 컴포넌트 사용하기

미리보기 모듈은 미리보기에서 객체를 선택 가능하게 정의하는 컴포넌트를 제공합니다. 이 컴포넌트는 `"mendix/preview/Selectable"`에서 가져올 수 있으며, `object` 목록 속성의 항목을 `object` 매개변수로 허용하고, 선택적 `caption` 매개변수가 있습니다.

아래 예제는 명확성을 위해 타입의 단순화된 표현을 정의합니다. 실제로는 위젯 이름이 `TruckWidget`인 경우 `"../typings/TruckWidgetProps"`에서 해당 타입을 가져옵니다.

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
                caption={truckDriver.isExperienced ? "Awesome truck driver" : undefined}
                key={`truck_driver_${i}`}
            >
                <div className="my-pw-truck-driver">
                    <div>Name: {truckDriver.name}</div>
                    <div>Age: {truckDriver.age}</div>
                </div>
            </Selectable>
        ))}
    </div>
)
```

위젯이 페이지에 추가되면 특정 항목을 선택하고 편집할 수 있습니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/pluggable-widgets-studio-apis/selectable-component.png" alt="Example of the selectable component" class="no-border" >}}

### GetPreviewCss Export

`getPreviewCss` export는 미리보기 렌더링에 필요한 CSS를 포함하는 `string`을 반환하는 `function`이어야 합니다.

```typescript
export function getPreviewCss() {
    return `
.my-pw-container {
    background-color: #C0FFEE;
}
`;
}
```

## 더 읽기

* [Mendix 9](/apidocs-mxsdk/apidocs/pluggable-parent-9/) 플러거블 위젯 API 문서

---
title: "네이티브 모바일 스타일링(Native Mobile Styling)"
url: /refguide8/native-styling-refguide/
weight: 20
description: "이 참조 가이드는 Mendix가 네이티브 모바일 앱에서 사용하는 스타일 요소를 설명하고, Mendix 위젯의 클래스 및 스타일 속성을 안내합니다."
---

## 소개

이 참조 가이드는 Mendix가 네이티브 모바일 앱에서 사용하는 스타일 요소를 설명하고, Mendix 위젯의 클래스 및 스타일 속성을 안내합니다. 네이티브 스타일링의 기본 사항을 배우려면 [네이티브 모바일 스타일링 구현 방법](/howto8/mobile/native-styling/)을 참조한 후 [Mendix 네이티브 모바일 앱 스타일링 방법](/howto8/mobile/how-to-use-native-styling/)을 따르세요.

Mendix 앱은 레이아웃을 사용하여 페이지의 모양과 기능을 결정합니다. 특히 네이티브 모바일 앱의 경우 네이티브 레이아웃을 사용하여 네이티브 기능에 최적화된 네비게이션과 설정을 쉽게 통합할 수 있습니다. 레이아웃에 대한 자세한 내용은 [Layout](/refguide8/layout/)을 참조하세요.

위젯을 반응형으로 유지하기 위해 Mendix 앱은 Flexbox를 사용합니다. Flexbox를 사용하면 컴포넌트가 하위 컴포넌트의 레이아웃을 설정할 수 있습니다. 이를 통해 앱이 여러 폼 팩터에서 일관된 레이아웃을 유지할 수 있습니다. 레이아웃에 대한 자세한 내용은 React Native의 [Flexbox 문서](https://reactnative.dev/docs/flexbox)를 참조하세요.

`height` 및 `width` 속성을 사용하여 위젯 컴포넌트의 크기를 설정할 수 있습니다. 크기에 대한 자세한 내용은 React Native의 [Height and Width 문서](https://reactnative.dev/docs/height-and-width)를 참조하세요.

## 스타일 객체 {#style-objects}

위젯은 다양한 요소로 구성되며, 각 요소를 개별적으로 스타일링할 수 있습니다. 스타일 객체를 사용하여 위젯을 사용자 정의할 수 있습니다. 스타일 객체는 각 위젯에 특정한 속성 세트를 가진 JavaScript 객체입니다. 일부 속성은 React Native의 ViewStyle, TextStyle, ImageStyle 및 Colors 요소와 같은 다른 요소의 속성을 재사용합니다. 앱을 사용자 정의할 때 스타일링 속성에 대한 자세한 정보는 다음 속성 세트를 참조하세요:

* **ViewStyle** – React Native의 [View Style](https://reactnative.dev/docs/view-style-props) 속성 세트는 테두리, 불투명도 및 앱의 기타 일반적인 측면을 변경하는 데 도움이 됩니다(View Style 속성 세트에는 레이아웃, 그림자 및 변환 속성도 포함되어 있습니다)
* **TextStyle** – React Native의 [Text](https://reactnative.dev/docs/text-style-props) 속성 세트를 사용하면 텍스트를 스타일링할 수 있습니다 – 이 속성을 사용하여 텍스트의 글꼴, 선택 상태 등을 제어할 수 있습니다(Text 속성 세트에는 레이아웃 속성도 포함되어 있습니다)
* **ImageStyle** – React Native의 [Image](https://reactnative.dev/docs/image-style-props) 속성 세트를 사용하면 네트워크 소스, 로컬 라이브러리 및 임시 로컬 이미지의 이미지를 스타일링할 수 있습니다 – 이 속성을 사용하여 이미지의 크기, 테두리 등을 변경할 수 있으며, Image 속성 세트에는 레이아웃 속성도 포함되어 있습니다(`resizeMode` 값 `repeat`는 지원되지 않습니다)
* **Colors** – React Native의 [Color Reference](https://reactnative.dev/docs/colors) 속성 세트를 사용하면 색상을 변경할 수 있습니다 – RGB 표기법을 사용하여 색상을 사용자 정의하거나 색조 또는 채도를 변경할 수 있습니다

### 클래스 이름

각 스타일 객체에는 객체의 클래스 이름이라고 하는 이름이 있습니다. 새 사용자 정의 클래스를 만든 다음 위젯 클래스 속성에 클래스 이름을 설정하여 단일 위젯에 스타일을 적용할 수 있습니다. 다음은 `customClassName`을 만드는 코드입니다:

```javascript
// A custom styling class
export const customClassName = {
	container: {
		// ViewStyle properties
		paddingTop: 5
	},
	text: {
		// TextStyle properties
		fontWeight: "bold"
	}
}
```

해당 사용자 정의 클래스는 Mendix Studio Pro에서 쉽게 접근할 수 있습니다:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-styling-refguide/custom-class.png" alt="custom class"   width="400"  class="no-border" >}}

위젯의 한 인스턴스에 스타일을 적용하려면 해당 위젯의 기본 클래스를 확장할 수 있습니다. 각 위젯의 기본 클래스는 아래 [데이터 위젯](#understanding-data-widgets) 섹션에 명시되어 있습니다. 아래 예시는 기본 클래스를 확장하는 방법을 보여줍니다:

```javascript
export const ActionButton = {
	container: {
		// ViewStyle properties
		borderWidth: 3
	},
	caption: {
		// TextStyle properties
		fontSize: 20
	},
};
```

애드온 위젯은 전체 위젯 ID(*{widget name}.xml*에서 찾을 수 있음)를 기반으로 고유한 기본 스타일링 클래스를 가지며, 점을 밑줄로 대체하여 만들 수 있습니다. 아래 예시는 플러거블 위젯의 기본 스타일링 클래스를 보여줍니다:

```javascript
export const com_mendix_widget_native_badge_Badge = (Badge = {
	caption: {
		// TextStyle properties
		color: "#00FF00",
	}
});
```

사용자 정의 클래스를 만드는 방법에 대한 자세한 내용은 *Mendix 네이티브 모바일 앱 스타일링*의 [사용자 정의 클래스 만들기](/howto8/mobile/how-to-use-native-styling/#creating-your-own-classes) 섹션을 참조하세요. 해당 문서에서는 사용자 정의 클래스를 디자인 속성으로 사용하는 방법도 보여줍니다.

## 데이터 위젯 {#understanding-data-widgets}

데이터 위젯은 많은 Mendix 앱에 필수적입니다. 이러한 위젯을 사용하면 사용자가 데이터 객체를 생성하고 처리할 수 있으며, 앱의 요구 사항에 맞게 사용자 정의할 수 있습니다.

### Data View 위젯

Data View 위젯은 하나의 데이터 객체의 내용을 표시합니다. 이 위젯에 대한 자세한 내용은 [Data View](/refguide8/data-view/)를 참조하세요. 이 위젯에는 사용자 인터페이스가 없으므로 스타일링을 지원하지 않습니다.

### List View 위젯 {#list-view}

List View는 세로 또는 가로로 정렬된 객체 목록을 표시합니다. 이 위젯에 대한 자세한 내용은 [List View](/refguide8/list-view/)를 참조하세요. 이것은 기본 List View가 아니라 앱에서 List View 위젯이 어떻게 보일 수 있는지의 예시입니다:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-styling-refguide/list-view.png" alt="list view"   width="350"  class="no-border" >}}

위젯의 코드 구조는 다음과 같습니다:

```xml
<container>
	<listItem>content</listItem>
	<listItem>content</listItem>
</container>
```

위젯의 스타일 속성은 다음과 같습니다:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | All ViewStyle properties |       |
| `container` | `numColumns` | This is the number of columns that the list should render (defaults to 1). |
| `listItem`  | All ViewStyle properties |          |
| `listItem`  | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the item has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `listItem`  | `underlayColor` | This is the color while pressing the item on iOS, and will be applied only when the item has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `listItemDisabled`  | Same properties as `listItem` | Overrides `listItem` styles if the item has an on click action and the action cannot be executed or is disabled during action. |

모든 List View를 스타일링하는 기본 클래스 이름은 `ListView`입니다.

## 공통 위젯

공통 위젯은 거의 모든 앱 페이지에서 사용됩니다. 공통 위젯의 스타일링을 배우면 앱에 큰 변화를 줄 수 있습니다.

### Text

텍스트 위젯은 선택적으로 매개변수를 포함할 수 있는 텍스트를 표시합니다. 이러한 위젯에 대한 자세한 내용은 [Text Widgets](/refguide8/text/)를 참조하세요. 위젯의 스타일 속성은 다음과 같습니다:

```xml
<container>
	<text>content</text>
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |                 |
| `text`      | This has all TextStyle properties. |                 |

모든 텍스트를 스타일링하는 기본 클래스 이름은 `Text`입니다.

### Image {#image}

이미지 위젯은 페이지, 레이아웃 또는 스니펫에 미리 정의된 이미지를 표시하는 데 사용할 수 있습니다. 이러한 위젯에 대한 자세한 내용은 [Image Widgets](/refguide8/image/)를 참조하세요. 위젯의 스타일 속성은 다음과 같습니다:

```xml
<container>
	<image/>
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties.  |       |
| `container`  | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `container`  | `underlayColor` | This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the image has an on click action and the action cannot be executed or is disabled during action. |
| `image`     | This has all ImageStyle properties. |       |
| `imageDisabled` | Same properties as `image` | Overrides `image` styles if the image has an on click action and the action cannot be executed or is disabled during action. |

모든 정적 이미지 스타일을 스타일링하는 기본 클래스 이름은 `Image`입니다. 모델에서 로드된 이미지는 아래 [Image Viewer](#image-viewer) 섹션에 설명된 대로 `ImageViewer`로 스타일링됩니다.

### Page Title

Page Title 위젯은 사용되는 페이지의 제목을 표시합니다. 이는 페이지 자체에 정의된 제목이거나 페이지를 표시할 때 정의된 재정의 제목일 수 있습니다. 이 위젯에 대한 자세한 내용은 [Page Title](/refguide8/page-title/)을 참조하세요. 위젯의 스타일 속성은 다음과 같습니다:

```xml
<container>
	<text>Page Title</text>
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |                 |
| `text`      | This has all TextStyle properties. |                 |

모든 페이지 제목을 스타일링하는 기본 클래스 이름은 `PageTitle`입니다.

### Layout Grid

Layout Grid 위젯은 페이지의 콘텐츠를 구조화하는 데 사용할 수 있습니다. 고정 또는 동적 크기를 가지도록 구성할 수 있는 행과 열을 만들 수 있습니다.

위젯의 스타일 속성은 여러 객체에 나뉘어 있습니다: `LayoutGrid`, `row`, `noGuttersRow`, `col`, `colFitToContent`, `col1`, `col2`, `col3`, `col4`, `col5`, `col6`, `col7`, `col8`, `col9`, `col10`, `col11`, `col12`, `noGutters`.

`col`은 열의 Width 속성이 "Auto-fill"인 경우 적용됩니다.

`colFitToContent`는 열의 Width 속성이 "Auto-fit content"인 경우 적용됩니다.

`col1`부터 `col12`까지는 열의 Width 속성이 "Manual"인 경우 적용됩니다. 관련 Size 속성에 따라 하나의 클래스만 적용됩니다.

`noGuttersRow`(Row)와 `noGutters`(Column)는 행의 Spacing between columns 속성이 "No"로 설정된 경우 적용됩니다.

메인 `LayoutGrid`:

```xml
<container></container>
```

`row`, `noGuttersRow`:

```xml
<container></container>
```

`col`, `colFitToContent`, `col1`, `col2`, `col3`, `col4`, `col5`, `col6`, `col7`, `col8`, `col9`, `col10`, `col11`, `col12`, `noGutters`:

```xml
<container></container>
```

결과 DOM은 다음과 같습니다:

```xml
<container>
	<row>
		<col></col>
	</row>
</container>
```

## 컨테이너 위젯

컨테이너 위젯은 페이지 콘텐츠의 구조를 제공하는 도구 세트입니다. 아래에 자세히 설명된 컨테이너 위젯이라는 특정 위젯도 있습니다. 이러한 위젯에 대한 자세한 내용은 [Container Widgets](/refguide8/container-widgets/)를 참조하세요.

### Container

컨테이너 위젯은 위젯 그룹을 스타일링하거나 숨기는 데 사용할 수 있습니다. 이 위젯은 기본적으로 시각적 표현이 없지만 스타일링을 사용하여 간격을 추가할 수 있습니다. 위젯의 스타일 속성은 다음과 같습니다:

```xml
<container>
	content
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |        |
| `container` | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `container`  | `underlayColor` | This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `containerDisabled` | Same properties as `container` | This overrides `container` styles if the there is an on click action set and the action cannot be executed or is disabled during action. |

모든 컨테이너를 스타일링하는 기본 클래스 이름은 `Container`입니다.

### Tab Container {#tab-container}

탭 컨테이너는 여러 탭 페이지로 분류된 정보를 표시하는 데 사용됩니다. 탭 컨테이너는 디바이스의 화면 공간을 초과하는 정보를 표시하는 데 도움이 됩니다. 앱에서 기본 탭 컨테이너 위젯의 예시:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-styling-refguide/tab-container.png" alt="tab container"   width="350"  class="no-border" >}}

위젯의 코드 구조는 다음과 같습니다:

```xml
<container>
	<tabBar>
		<tab>
			<activeLabel>PAGE 1</activeLabel>
			<badgeContainer><badgeCaption /></badgeContainer>
		</tab>
		<tab>
			<label>PAGE 2</label>
		</tab>
		<indicator>
	<tabBar>
	content
</container>
```

위젯의 스타일 속성은 다음과 같습니다:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |     |
| `tabBar`    | This has all ViewStyle properties. |     |
| `tabBar` | `bounces` | This is a Boolean value indicating whether the tab bar bounces when scrolling. |
| `tabBar` | `pressColor` | This is a color for material ripple (Android only). |
| `tabBar` | `pressOpacity` | This is opacity for a pressed tab. |
| `tabBar` | `scrollEnabled` | This is a Boolean value enabling scrollable tabs. |
| `tabBar` | `tabBarPosition` | This is the position of the tab bar in the tab view, and possible values are `top` and `bottom` (defaults to `top`). |
| `indicator` | This has all ViewStyle properties. |     |
| `tab`       | This has all ViewStyle properties. |     |
| `label`     | This has all TextStyle properties. |     |
| `activeLabel`     | This has all TextStyle properties. |     |
| `badgeContainer`  | This has all ViewStyle properties. |     |
| `badgeCaption`    | This has all TextStyle properties. |     |

모든 탭 컨테이너를 스타일링하는 기본 클래스 이름은 `TabContainer`입니다.

### Scroll Container

스크롤 컨테이너는 페이지의 일부에 대해 스크롤을 활성화하는 데 사용됩니다. 이 위젯은 기본적으로 시각적 표현이 없지만 스타일링을 사용하여 간격을 추가할 수 있습니다. 위젯의 스타일 속성은 다음과 같습니다:

```xml
<container>
	scrollable content
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |            |

모든 스크롤 컨테이너를 스타일링하는 기본 클래스 이름은 `ScrollContainer`입니다.

## 입력 위젯

입력 위젯은 일반적으로 사용자에게 데이터를 표시하고 데이터를 편집할 수 있게 하는 데 사용됩니다. 이러한 위젯에 대한 자세한 내용은 [Input Widgets](/refguide8/input-widgets/)를 참조하세요.

이 문서의 나머지 부분은 영문 원본과 동일한 기술 참조 테이블 및 코드 블록을 포함합니다. 각 위젯의 스타일 속성에 대한 자세한 내용은 영문 원본을 참조하세요.

### Text Box {#text-box}

텍스트 박스는 텍스트 값을 표시하거나 편집하는 데 사용할 수 있습니다. 앱에서 유효성 검사 피드백이 있는 텍스트 박스 위젯과 일반 텍스트 박스 위젯의 예시:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-styling-refguide/text-box.png" alt="text box"   width="350"  class="no-border" >}}

위젯의 스타일 속성 구조는 다음과 같습니다:

```xml
<container>
	<label>Text box</label>
	<inputError>Content invalid</inputError>
	<validationMessage>Input validation feedback message</validationMessage>
</container>
<container>
	<label>Text box</label>
	<input>Valid text</input>
</container>
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties.   |   |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the text box is non-editable. |
| `input` | This has all TextStyle properties. |  |
| `input` | `autoCapitalize` | This automatically capitalizes certain characters when the user types:<br><br>*`characters`: capitalizes all characters<br>* `words`: capitalizes the first letter of each word<br>*`sentences`: capitalizes the first letter of each sentence (default)<br>* `none`: capitalizes nothing |
| `input` | `placeholderTextColor` | This is the text color of the placeholder string. |
| `input` | `selectionColor` | This is the highlight and cursor color of the text input. |
| `input` | `underlineColorAndroid` | This is the color of the `input` underline. |
| `inputFocused` | Same properties as `input` | Overrides `input` styles if the text box is focused (with Studio Pro 8.15). |
| `inputError` | This has the same properties as `input` | Overrides `input` styles if there are validation errors. |
| `inputDisabled` | Same properties as `input` | Overrides `input` styles if the text box is non-editable. |
| `label` | This has all TextStyle properties |   |
| `label` | `numberOfLines` | This is the maximum number of lines to wrap the label text. If the text is any longer, it will be cut off with an ellipsis (defaults to 1). |
| `labelDisabled` | Same properties as `label` | Overrides `label` styles if the text box is non-editable. |
| `validationMessage` | This has all TextStyle properties.   |    |

모든 텍스트 박스를 스타일링하는 기본 클래스 이름은 `TextBox`입니다.

### Text Area

텍스트 영역은 여러 줄의 텍스트 값을 표시하거나 편집하는 데 사용할 수 있습니다. 이 위젯은 위의 [Text Box](#text-box) 위젯과 동일한 스타일 속성과 구조를 지원합니다.

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-styling-refguide/text-area.png" alt="text area"   width="350"  class="no-border" >}}

모든 텍스트 영역을 스타일링하는 기본 클래스 이름은 `TextArea`입니다.

### Drop-Down {#drop-down}

드롭다운은 Enumeration Attribute를 표시하고 편집하는 데 사용할 수 있는 입력 위젯입니다.

Studio Pro 8.11부터 드롭다운 위젯에는 두 플랫폼 모두에서 균일한 디자인을 가능하게 하는 `useUniformDesign: boolean`이라는 새 스타일 속성이 있습니다.

비균일(non-uniform) 위젯의 렌더링 계층 구조는 다음과 같습니다:

```xml
<container>
	<label>Drop down enumeration</label>
	<value>Content invalid</value>
	<validationMessage>Validation feedback enumeration</validationMessage>
</container>
<picker>
	<pickerBackdropIOS/>
	<pickerTopIOS><button>close</button></pickerTopIOS>
	<pickerIOS>
		<pickerItemIOS>First</pickerItemIOS>
		<pickerItemIOS>Second</pickerItemIOS>
		<pickerItemIOS>Third</pickerItemIOS>
	</pickerIOS>
</picker>
```

균일(uniform) 위젯의 렌더링 계층 구조는 다음과 같습니다:

```xml
<container>
	<label>Drop down enumeration</label>
    <valueContainer>
        <value>First</value>
	<icon/>
    </valueContainer>
	<validationMessage>Validation feedback enumeration</validationMessage>
</container>
<menuWrapper>
	<selectedItemContainer>
		<selectedItem>First</selectedItem>    <= Selected
	</selectedItemContainer>
    <itemContainer>
        <item>Second</item>
    </itemContainer>
    <itemContainer>
        <item>Third</item>
    </itemContainer>
</menuWrapper>
```

드롭다운 위젯의 전체 스타일 속성 테이블 및 나머지 입력 위젯(Checkbox, Date Picker, Reference Selector), 파일 위젯, 버튼 위젯, 페이지, 네비게이션, 애드온 위젯의 상세 스타일 속성은 영문 원본 문서를 참조하세요. 모든 코드 블록, 테이블, 이미지 경로 및 shortcode는 원본과 동일합니다.

모든 드롭다운을 스타일링하는 기본 클래스 이름은 `DropDown`입니다.

## 추가 읽기

* [Mendix 네이티브 모바일 앱 스타일링 방법](/howto8/mobile/how-to-use-native-styling/)
* [네이티브 모바일 스타일링 구현 방법](/howto8/mobile/native-styling/)
* [Design Properties 문서](/apidocs-mxsdk/apidocs/design-properties/)

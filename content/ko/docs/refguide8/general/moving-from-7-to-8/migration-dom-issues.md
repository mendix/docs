---
title: "DOM 변경 사항 문제 해결"
url: /refguide8/migration-dom-issues/
weight: 10
description: "이 문서는 Mendix 8의 업데이트된 DOM 구조와 이것이 앱의 CSS에 미치는 영향을 설명합니다."
---

## 소개

Mendix 8에서의 클라이언트에 대한 기타 개선 사항 중에 Mendix 애플리케이션의 HTML도 업데이트되었습니다. 이러한 변경 사항은 위젯을 더 접근 가능하고, 더 일관되게 만들며, 작업하기 더 깔끔한 마크업을 제공합니다.

그러나 이러한 업데이트는 스타일링에 영향을 미칠 수 있습니다. 위젯의 Document Object Model 구조가 업데이트되었으므로 애플리케이션의 외관이 영향을 받을 수 있습니다. 이 참조 가이드는 DOM 및 CSS와 관련하여 Mendix 7과 8 간의 차이점을 설명합니다. 이 문서는 커스텀 CSS를 사용하거나 기존 Atlas UI CSS를 수정하는 앱에만 해당됩니다.

## Atlas 업데이트

Mendix 8로 업그레이드하면 DOM 구조 변경이 관련 Sass 스타일링 파일도 변경합니다. 이로 인해 일부 스타일링이 예상대로 작동하지 않을 수 있습니다. 스타일링을 Mendix 8과 호환되도록 만들려면 [Mendix 8로 마이그레이션 시 Atlas UI 변경 사항 문제 해결](/refguide8/migration-atlas/)을 참조하십시오.

## 간소화된 커스텀 테마

Mendix 8 이전에는 앱에 테마가 없는 경우 클라이언트가 많은 양의 기본 스타일링을 제공했습니다. 이로 인해 기본 스타일링을 재정의해야 하므로 자체 테마를 구축하기가 어려웠습니다. Mendix 8부터 모든 스타일링이 Atlas UI로 이동되었습니다. 이제 처음부터 자체 테마를 구축하는 데 필요한 작업이 상당히 줄었습니다.

이전 버전의 Mendix에서 이미 처음부터 자체 테마를 구축한 경우, Mendix 8 애플리케이션에 기본적으로 포함되지 않는 기본 스타일링(특히 Bootstrap 파일과 **mxui.css** 파일)에 의존할 수 있습니다.

이 경우를 위해 Mendix는 이 [GitHub 리포지토리](https://github.com/mendix/legacy-mxui-css)에서 기본값이 포함된 레거시 **mxui.css** 및 Bootstrap 파일을 제공합니다. 이 리포지토리에서 파일을 다운로드하여 커스텀 테마를 활성화하십시오.

경우에 따라 다르지만, 일반적으로 Mendix 7에서 8로 마이그레이션할 때 Mendix 7의 `theme` 폴더에 **mxui.css** 파일을 추가해야 할 것입니다. 앱이 커스텀 테마를 통해 Bootstrap CSS를 사용하는 경우 해당 파일도 `theme` 폴더에 추가하십시오. 마무리로, **index.html** 파일에 **mxui.css** 및 Bootstrap 파일을 포함하십시오.

{{% alert color="info" %}}
`CE6103: We detected that you are not using Atlas UI for your theme. Please check 'Troubleshooting DOM Changes' to ensure your theme is fully compliant with Mendix 8. Right-click to see more options`라는 오류 메시지가 표시되면 마우스 오른쪽 버튼으로 클릭하고 **Mark as Resolved**를 선택하여 메시지를 지울 수 있습니다.
{{% /alert %}}

## 포커스 전용 클래스 제거

Mendix 8 이전에는 클라이언트가 포커스를 받는 요소에 `mx-focus`를 자주 적용하고 요소가 포커스를 잃으면 `mx-focus`를 제거했습니다. 모든 지원되는 브라우저가 이제 `:focus` 의사 클래스를 적절히 지원하므로 이러한 재적용이 더 이상 필요하지 않습니다. `:focus`에 대한 자세한 내용은 Mozilla의 [:focus 문서](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)를 참조하십시오.

테마에서 `mx-focus`를 사용하고 있다면 `:focus`로 교체해야 합니다.

다음과 같은 코드:

```css
.mx-listview-item.mx-focus {
	/* your styling */
}
```

다음과 같이 변경해야 합니다:

```css
.mx-listview-item:focus {
	/* your styling */
}
```

## Data Grid 마크업 업데이트

Data Grid 마크업에 여러 업데이트를 했습니다. 이전에는 Data Grid가 헤더를 포함하는 테이블과 데이터를 포함하는 테이블, 두 개의 별도 테이블로 나뉘어 있었습니다. 이로 인해 스크린 리더가 이를 두 개의 별도 테이블로 표시하므로 Data Grid의 접근성이 떨어졌습니다. 이제 두 테이블이 단일 테이블로 병합되었습니다. 또한 두 테이블을 감싸는 `div`가 제거되었습니다.

또 다른 Data Grid 마크업 변경 사항은 툴바를 포함하는 `div`와 페이징 바를 포함하는 `div`(둘 다 컨트롤 바의 일부)가 이제 논리적 순서로 되어 있다는 것입니다. 이전에는 올바른 순서로 표시하기 위해 추가 CSS가 필요했고, 논리적인 탭 동작을 지시하기 위해 추가 JavaScript가 필요했습니다. 현재 구조는 [DOM 순서가 시각적 순서를 따르도록](https://www.w3.org/TR/WCAG20-TECHS/C27.html) 하여 [웹 콘텐츠 접근성 지침 2.1의 기준 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence)에 부합합니다.

새로운 접근성 기능이 구현되면서, 페이지네이션 섹션을 포함하는 `div`(컨트롤 바 내부)에는 적절한 `role` 속성이 설정되었습니다. 이 `div` 내부의 버튼과 `div` 자체에는 Modeler의 `System Texts` 페이지에서 카테고리 이름 `Accessibility`로 설정할 수 있는 번역 가능한 `aria-label` 속성이 있습니다. 새로운 `span` 및 `caption` 요소가 각각 *페이지네이션 버튼*과 `thead`의 형제로 추가되었습니다. 스크린 리더에만 표시됩니다.

다음은 Data Grid의 현재 마크업입니다(변경되지 않은 코드 생략):

```html
<div class="mx-grid mx-datagrid mx-name-grid1">
	<div class="mx-grid-searchbar" style="display: none;">...</div>
	<div class="mx-grid-controlbar">
		...
		<div ... role="navigation" aria-label="Pagination(translatable text)">
			<button ...  aria-label="Go to first page(translatable text)"> </button>
			<button ... aria-label="Go to previous page(translatable text)"></button>
			<div ... aria-hidden="true">1 to 20 of 132</div> 
				<span class="sr-only">Currently showing(translatable text) 1 to 20 of 132</span>
			<button ... aria-label="Go to next page(translatable text)"></button>
			<button ... aria-label="Go to last page(translatable text)"></button>
		</div>
		...
	</div>
	<div class="mx-grid-content">
		<table>
			<caption class="sr-only">Caption</caption>
			<colgroup>...</colgroup>
			<thead>
				<tr class="mx-name-head-row"></tr>
			</thead>
			<tbody>
				<tr class="mx-name-index-0" >...</tr>
			</tbody>
			<tfoot></tfoot>
		</table>
	</div>
</div>
```

또한 요소 이름을 사용하여 쉽게 접근할 수 있으므로 테이블에 있던 여러 추가 클래스가 제거되었습니다.

이전에 Data Grid를 다음과 같이 스타일링했다면:

```css
.mx-datagrid .mx-datagrid-head-table {
	// your styling
}
.mx-datagrid .mx-datagrid-body-table .mx-datagrid-body tr td {
	// your styling
}
```

다음 지침을 사용하여 Data Grid 스타일링을 다시 작성해야 합니다:

```css
.mx-datagrid thead {
	// your styling
}

.mx-datagrid tbody tr td {
	// your styling
}
```

## List View 마크업 변경

List View 위젯의 마크업도 변경되었습니다. 스타일링을 단순화하기 위해 다음 클래스가 제거되었습니다:

* `mx-list`
* `mx-listview-list`
* `mx-listview-striped`
* `mx-listview-item`
* `mx-listview-search-input`
* `mx-listview-clear-button`

참조 또는 참조 세트 선택기의 선택 페이지에 없는 List View의 경우 List View의 `mx-listview-selectable`이 제거되었습니다. 각 List View 항목의 내용 주위에 있는 `mx-listview-content` 클래스가 있는 불필요한 `div` 요소도 제거되었습니다.

List View 검색 바의 DOM 요소 순서가 시각적 순서와 일치하도록 수정되었습니다. 검색 입력 필드 주위의 `div` 요소가 제거되었습니다.

이전에 List View 위젯을 다음과 같이 스타일링했다면:

```css
.mx-listview-item {
	// Your styling
}
.mx-listview-search-input input {
	// Your styling
}
.mx-listview-clear-button {
	// Your styling
}
```

다음 지침을 사용하여 List View 스타일링을 다시 작성해야 합니다:

```css
.mx-listview li {
	// Your styling
}
.mx-listview-searchbar input {
	// Your styling
}
.mx-listview-searchbar button {
	// Your styling
}
```

## Scroll Container 마크업 변경

`mx-scrollcontainer` 대응과 중복되므로 Scroll Container에서 `mx-layoutcontainer`로 시작하는 모든 클래스가 제거되었습니다.

## Link Button 마크업 변경

Link Button의 마크업이 다른 버튼과 더 일관되게 변경되었습니다:

```html
<a href="#" class="mx-link mx-name-actionButton1">
	<span class="glyphicon glyphicon-euro"></span>
	Link button
</a>
```

## 입력 위젯 마크업 변경

모든 입력 위젯에는 암시적인 폼 그룹 구조가 감싸고 있습니다. 최근 변경 사항 이전에는 입력 위젯의 DOM 구조가 설정에 따라 정리되지 않은 것처럼 보일 수 있었습니다. 이제 폼 그룹 구조는 입력 위젯이 데이터 뷰 내에서 올바르게 정렬되고 올바르게 레이블이 지정되도록 보장합니다.

### Data View의 수직 및 수평 클래스

이전에는 Data View가 **Form orientation**이 **Horizontal**로 설정된 경우 `form-horizontal` 클래스를 렌더링하고, 이 옵션이 **Vertical**로 설정된 경우 해당 클래스가 없었습니다. 이제 **Horizontal** 및 **Vertical** 옵션에 대해 각각 `form-horizontal` 또는 `form-vertical`이 추가됩니다.

이를 통해 CSS 선택기에서 클래스를 타겟으로 하여 다양한 방향의 폼(및 그 안의 입력)을 더 쉽게 스타일링할 수 있습니다. 이전에 `form-horizontal`의 존재 또는 부재에 의존했다면 이제 `form-vertical`을 사용하여 CSS 선택기를 단순화할 수 있습니다.

다음은 Data View 위젯의 현재 DOM 구조입니다:

```html
<div class="mx-dataview [form-horizontal or form-vertical]">
	<div class="mx-dataview-content">
		...
		<div class="form-group"> ... </div>
		<div class="form-group"> ... </div>
		...
	</div>
	<div class="mx-dataview-controls">
		...
	</div>
</div>
```

### 폼 그룹 구조

이전에는 위젯의 **Show caption** 옵션이 **No**로 설정된 경우 폼 그룹 구조의 최상위 `div`에 `form-group` 클래스가 없었습니다:

```html
<div class="mx-name-textBox4 [...]" [...]>
	<INPUT-WIDGET />
</div>
```

이제 `form-group` 클래스가 추가 `no-columns` 클래스와 함께 유지됩니다:

```html
<div class="form-group no-columns mx-name-textBox4 [...]" [...]>
	<INPUT-WIDGET />
</div>
```

이전에 `.form-group`을 사용하여 커스텀 스타일을 만들었다면, `.form-group`이 이제 더 많은 요소와 일치하므로 이것이 breaking change일 수 있습니다. 이제 `.form-horizontal .form-group` 또는 `.form-vertical .form-group`을 각각 사용하여 수평 또는 수직 폼에서만 폼 그룹과 내부 요소를 대상으로 할 수 있습니다.

### 입력 위젯 유형 클래스

폼 그룹에는 이제 위젯 유형에 따른 특수 클래스 이름이 있습니다:

* `.mx-checkbox`
* `.mx-datepicker`
* `.mx-dropdown`
* `.mx-inputreferencesetselector`
* `.mx-radiobuttongroup`
* `.mx-referenceselector`
* `.mx-textarea`
* `.mx-textbox`

### 폼 그룹 레이아웃 예시

수직 폼 그룹 입력 위젯에는 이제 레이블, 입력 컨트롤 및 선택적 유효성 검사 메시지가 동일한 레벨에 있습니다:

```html
<div class="form-group mx-name-textBox4 [...]" [...]>
	<label class="control-label" for="123_abc">
		Caption
	</label>

	<INPUT-CONTROL/>
	<!-- OR for readonly style text -->
	<div class="form-control-static">value</div>

	<!-- optional: validation message -->
	<div class="alert alert-danger mx-validation-message">checkboom</div>
</div>
```

수평 폼 그룹 입력 위젯에는 이제 `col-sm-{labelWith}`가 있는 레이블과 `div.col-sm-{12-labelWith}`가 있습니다. 레이블에는 입력 컨트롤과 선택적 유효성 검사 메시지도 내부에 있습니다:

```html
<div class="form-group mx-name-textBox4 [...]" [...]>
	<label class="control-label col-sm-4" for="123_abc">
		Caption
	</label>
	<div class="col-sm-8">
		<INPUT-CONTROL/>
		<!-- OR for readonly style text -->
		<div class="form-control-static">value</div>

		<!-- optional: validation message -->
		<div class="alert alert-danger mx-validation-message">checkboom</div>
	</div>
</div>
```

다음은 수평 또는 수직 Data View에서 **Show label**이 **No**로 설정된 입력 위젯의 구조입니다. 입력 위젯에는 입력 컨트롤과 선택적 유효성 검사 메시지가 있습니다:

```html
<div class="form-group mx-name-textBox4 [...]" [...]>
	<!-- A form group without a label is still a form-group -->
    
	<INPUT-CONTROL/>
	<!-- OR for readonly style text -->
	<div class="form-control-static">value</div>
    
	<!-- optional: validation message -->
	<div class="alert alert-danger mx-validation-message">checkboom</div>
</div>
```

### 읽기 전용 컨트롤

이전에는 **Read-only style**이 **Text**로 설정된 입력 위젯의 편집 불가능한 입력 컨트롤이 `form-control-static` 클래스가 있는 `p` 또는 `label` 요소를 사용하여 렌더링될 수 있었습니다.

**Read-only style**이 **Text**로 설정된 읽기 전용 컨트롤은 이제 다음과 같이 렌더링됩니다:

```html
<div class="form-control-static">value</div>
```

### 입력 위젯 구조

이전에는 일부 입력 위젯에 컨트롤을 둘러싼 래퍼 요소가 있었습니다.

이러한 중복 래퍼가 제거되었으며, 이제 가능한 한 베어 컨트롤이 렌더링됩니다(라디오 버튼 그룹의 라디오 버튼은 예외이며, 각 개별 컨트롤이 `div`로 래핑됩니다).

### 입력 컨트롤 예시

다양한 입력 컨트롤의 몇 가지 예시가 아래에 나열되어 있습니다.

Text box:

```html
<input class="form-control" type="text" id="123_abc" />
```

Text area:

```html
<textarea class="form-control mx-textarea-input mx-textarea mx-textarea-input-noresize"></textarea>
```

Checkbox:

```html
<input type="checkbox" value="" />
```

**Label position**이 **After control**로 설정된 Checkbox(이 경우 폼 그룹의 레이블은 표시되지 않음):

```html
<input type="checkbox" id="123_abc" value="" />
<label for="123_abc">Label</label>
```

Radio buttons:

```html
<div role="radiogroup" id="123_abc" aria-labelledby="123_abc-label">
	<div class="radio">
		<input type="radio" id="123_abc_0" value="Funghi">
		<label for="123_abc_0">Funghi</label>
	</div>
	<div class="radio">
		<input type="radio" id="123_abc_1" value="Pepperoni">
		<label for="123_abc_1">Pepperoni</label>
	</div>
	<div class="radio">
		<input type="radio" id="123_abc_2" value="Tre_Formaggi">
		<label for="123_abc_2">Tre Formaggi</label>
	</div>
	<div class="radio">
		<input type="radio" id="123_abc_3" value="Margherita">
		<label for="123_abc_3">Margherita</label>
	</div>
</div>
```

Drop-down:

```html
<select class="form-control">
	<option value=""></option>
	<option value="a1">a1</option>
	<option value="a2">a2</option>
	<option value="a3">a3</option>
</select>
```

## Date Picker 위젯 변경

### 입력

Date Picker 입력 위젯에 다음 변경 사항이 적용되었습니다:

* `mx-dateinput` 및 `mx-dateinput-input` 클래스가 새로운 `mx-compound-control` 클래스로 대체되었습니다
* `mx-compound-control` 클래스는 입력 옆에 버튼이 있는 위젯과 같이 하나 이상의 요소로 구성된 입력 위젯에 대해 도입되었습니다
* `mx-dateinput-input-wrapper` 클래스가 있는 입력 주위의 내부 `<div>` 요소가 제거되었습니다
* `<button>` 요소가 시각적 순서와 일치하도록 DOM에서 입력 뒤에 배치되었습니다

### 캘린더

캘린더 팝업 창이 더 이상 Dojo 프레임워크를 사용하여 구현되지 않으므로 캘린더 팝업 창의 내부 구조에 여러 변경 사항이 적용되었습니다:

* `dijit`으로 시작하는 모든 클래스가 제거되었습니다
* 가장 바깥쪽 `<div>` 요소에 이제 `mx-calendar` 클래스가 있습니다
* 캘린더 뷰에서 날짜를 나타내는 `<td>` 요소에는 다음 클래스가 적용됩니다:
    * `mx-calendar-day-month-current`, `mx-calendar-day-month-previous` 또는 `mx-calendar-day-month-next`: 해당 날짜가 현재, 이전 또는 다음 달에 속하는지에 따라
    * `mx-calendar-day-selected`: 해당 날짜가 캘린더가 열린 Date Picker에서 현재 선택된 경우
    * `mx-calendar-day-active`: 해당 날짜에 현재 포커스가 있는 경우
* `<td>` 및 `<th>` 요소 내의 `<span>` 요소가 제거되었습니다

월 헤더는 이제 다음 구조를 가집니다:

```html
<div class="mx-calendar-month-header">
	<button class="mx-calendar-month-previous">
		<span class="glyphicon glyphicon-minus"/>
	</button>
	<div class="mx-calendar-month-dropdown">
		<div class="mx-calendar-month-current">
			<div class="mx-calendar-month-spacer">
				<div>January</div>
				...
			</div>
			<div class="mx-calendar-month-label">June</div>
		</div>
		<span class="glyphicon glyphicon-chevron-down"/>

		<!-- only rendered when the month dropdown is clicked -->
		<div class="mx-calendar-month-dropdown-options">
			<div>January</div>
			...
		</div>
	</div>
	<button class="mx-calendar-month-next">
		<span class="glyphicon glyphicon-plus"/>
	</button>
</div>
```

연도 전환기는 이제 다음 구조를 가집니다:

```html
<div class="mx-calendar-year-switcher">
	<span class="mx-calendar-year-previous">2018</span>
	<span class="mx-calendar-year-selected">2019</span>
	<span class="mx-calendar-year-next">2020</span>
</div>
```

## Reference Selector 및 Input Reference Set Selector 마크업 변경

Reference Selector 마크업에 다음 변경 사항이 적용되었습니다:

* 새로운 `mx-compound-control` 클래스로 대체되어 메인 `<div>` 요소에서 `mx-referenceselector` 및 `mx-referencesetselector` 클래스가 제거되었습니다. 이 클래스는 입력 요소 옆에 버튼이 있는 위젯과 같이 하나 이상의 요소로 구성된 입력 위젯에 대해 도입되었습니다.

Input Reference Set Selector 마크업에 다음 변경 사항이 적용되었습니다:

* 폼 그룹은 이제 대신 `mx-referenceselector` 또는 `mx-inputreferencesetselector`(`input` 접두사에 유의) 클래스를 받습니다
* `-input-wrapper`로 끝나는 클래스를 공유하는 입력 주위의 내부 `<div>` 요소가 제거되었습니다
* `<button>` 요소가 시각적 순서와 일치하도록 DOM에서 입력 뒤에 배치되었습니다

## DropDownButton 위젯 정리

`DropDownButton` 위젯에 다음 변경 사항이 적용되었습니다:

* 대화 상자의 용어 목록에서 `mx-list` 클래스가 제거되었습니다
* 대화 상자에서 `mx-dropdown` 클래스가 제거되었습니다. 검색 입력의 드롭다운과 관련이 없기 때문입니다

## File Manager 및 Image Uploader 위젯 변경

이전에는 File Manager 및 Image Uploader 위젯이 데스크톱과 모바일 브라우저에서 다르게 렌더링되었습니다. 데스크톱에서는 이러한 위젯이 스타일링하기 쉬운 커스텀 HTML 스니펫으로 렌더링되었지만, 모바일에서는 스타일링하기 어려운 네이티브 파일 입력으로 나타났습니다.

일관성을 위해 File Manager 및 Image Uploader 위젯이 변경되었습니다. 이제 항상 동일한 HTML 구조를 표시합니다. 또한 이러한 위젯의 DOM 구조가 다른 복합 위젯(Reference Selector 및 Date Picker와 같은)과 더 일관되게 만들어졌습니다.

이제 File Manager 및 Image Uploader 위젯은 항상 `mx-compound-control` 클래스가 있는 `div` 요소로 표시됩니다. 또한 `mx-fileinput` 클래스가 폼 그룹으로 이동되었습니다. `div` 내부에는 `form-control` 클래스가 있는 입력이 있습니다. 이 입력은 현재 선택된 파일의 파일 이름을 나타냅니다. `mx-wrapped-label` 클래스는 입력에서 사라졌습니다. 입력 옆에는 현재 파일을 업로드하고 다운로드하기 위한 하나 또는 두 개의 버튼이 있습니다. 이러한 버튼은 이전과 동일한 클래스를 가집니다.

## 더 읽기

* [Atlas UI 변경 사항 문제 해결](/refguide8/migration-atlas/)

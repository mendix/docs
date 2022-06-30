---
title: "Troubleshooting DOM Changes"
url: /refguide8/migration-dom-issues/
weight: 10
description: "This document explains the updated DOM structure for Mendix 8, and what that means for app's CSS."
tags: ["DOM", "Widgets", "Themes", "Classes"]
---

## 1 Introduction

Among other improvements to the client in Mendix 8,  the HTML of Mendix applications has also been updated. These changes make widgets more accessible, more consistent, and give you a cleaner markup to work with. 

However, these updates might impact your styling. The appearance of your application may be affected, as the widgets' Document Object Model structure has been updated. This reference guide will outline the differences between Mendix 7 and 8 as they pertain to the DOM and CSS. This document is only relevant for apps which employ custom CSS or modify existing Atlas UI CSS.

## 2 Updating Atlas

When you upgrade to Mendix 8, DOM structure changes will also alter the correlating Sass styling files. This could make some of your styling not work as expected anymore. To make your styling compatible with Mendix 8, see [Troubleshoot Atlas UI Changes when Migrating to Mendix 8](/refguide8/migration-atlas/). 

## 3 Streamlined Custom Themes

Before Mendix 8, the client provided a large amount of default styling if your app lacked a theme. This made building your own theme difficult, as you needed to override the default styling. As of Mendix 8, all styling has been moved to AtlasUI. Now, building your own theme from scratch requires significantly less work.

If you have already built your own theme from scratch in an earlier version of Mendix, you might depend on the default styling (specifically the Bootstrap files and the **mxui.css** file) not included in Mendix 8 applications by default. For this case, Mendix provides legacy **mxui.css** and Bootstrap files with defaults in this [GitHub repository](https://github.com/mendix/legacy-mxui-css). Download files from this repository to enable your custom theme.

{{% alert color="info" %}}
If you get an error message `CE6103: We detected that you are not using Atlas UI for your theme. Please check 'Troubleshooting DOM  Changes' to ensure your theme is fully compliant with Mendix 8. Right-click to see more options`, you can clear the message by right-clicking it and selecting **Mark as Resolved**.
{{% /alert %}}

## 4 Focus-Specific Class Removed

Before Mendix 8, the client frequently applied `mx-focus` to the element receiving focus and removed `mx-focus` when the element lost focus. Because all supported browsers now have proper support for the `:focus` pseudo-class, these reapplications are no longer necessary.  For more information on `:focus`, see Mozilla’s [:focus documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus).

If your are using `mx-focus` in your theme, you should replace it with `:focus`.

Code such as this:

```css
.mx-listview-item.mx-focus {
	/* your styling */
}
```

Should be changed to: 

```css
.mx-listview-item:focus {
	/* your styling */
}
```

## 5 Data Grid Markup Updates

We made a number of updates to the data grid markup. Previously, the data grid was split into two separate tables: one containing the header and one containing the data. This made the data grid less accessible, because screen readers show these as two separate tables. Now the two tables have been merged into a single table. Furthermore, the `div` wrapping the two tables has been removed.

Another data grid markup change is that the `div` containing the toolbar and the `div` containing the paging bar (both part of the control bar) are now in a logical order. Previously, additional CSS was needed to display them in the right order, and additional JavaScript was needed to dictate a logical tab behavior. The current structure now falls in line with [Web Content Accessibility Guidelines 2.1's criterion 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence) by having [the DOM order follow the visual order](https://www.w3.org/TR/WCAG20-TECHS/C27.html).

With new accessibility features implemented, now `div` containing pagination section (inside of control bar) has appropriate `role` attribute set. Buttons inside of this `div`, including the `div` itself, now has translatable `aria-label` attributes which can be set from Modeler's `System Texts` page with category name `Accessibility`. New `span` and `caption` elements added as a sibling to *`buttons` for pagination* and `thead` respectively. They are only visible to screen readers. 

This is the current markup of the data grid (unchanged code omitted):

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

Additionally, a number of additional classes on the table have been removed, as they are easily accessed using element names. 

If you were styling your data grid in this way:

```css
.mx-datagrid .mx-datagrid-head-table {
	// your styling
}
.mx-datagrid .mx-datagrid-body-table .mx-datagrid-body tr td {
	// your styling
}
```

You should rewrite the data grid styling using these guidelines:

```css
.mx-datagrid thead {
	// your styling
}

.mx-datagrid tbody tr td {
	// your styling
}
```

## 6 List View Markup Changes

The markup for list view widgets has also been changed. To simplify the styling, the following classes have been removed:

* `mx-list`
* `mx-listview-list`
* `mx-listview-striped`
* `mx-listview-item`
* `mx-listview-search-input` 
* `mx-listview-clear-button`

For list views that are not in a select page for a reference or reference set selector,  the list view's `mx-listview-selectable` has been removed. The unneeded `div` elements with class `mx-listview-content` around the contents of each list view item have also been removed.

The order of the list view search bar's DOM elements has been corrected to be consistent with the visual order. The `div` element around the search input field has been removed.

If you were styling your list view widgets this way:

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

You should rewrite your list view styling using these guidelines :

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

## 7 Scroll Container Markup Changes

All classes starting with `mx-layoutcontainer` have been removed from scroll containers, as they are redundant with their `mx-scrollcontainer` counterparts.

## 8 Link Button Markup Changes

The markup for link buttons has been made more consistent with other buttons:

```html
<a href="#" class="mx-link mx-name-actionButton1">
	<span class="glyphicon glyphicon-euro"></span>
	Link button
</a>
```

## 9 Input Widgets Markup Changes

Every input widget has an implicit form group structure wrapped around it. Before recent changes, an input widget’s DOM structure could appear disorganized depending on its settings. Now, the form group structure ensures that the input widget is properly aligned inside the data view and properly labeled.

### 9.1 Vertical and Horizontal Classes on DataView

Previously, data view was rendering `form-horizontal` class on it when **Form orientation** was set to **Horizontal** and no such class if this option was set to **Vertical**. Now, `form-horizontal` or `form-vertical` are added on **Horizontal** and **Vertical** options respectively. 

This makes it easier to style forms (and inputs in them) with different orientations by targeting a class in your CSS selector. If you were previously relying on the presence or absence of `form-horizontal,` now you can simplify your CSS selectors by using `form-vertical`.

This is how the DOM structure of the data view widget is organized now:

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

### 9.2 Form Group Structure

Previously, if widget had the **Show caption** option set to **No**, form group structure was missing `form-group` class on its top level `div`:

```html
<div class="mx-name-textBox4 [...]" [...]>
	<INPUT-WIDGET />
</div>
```

Now, the `form-group` class stays in place with extra `no-columns` class:

```html
<div class="form-group no-columns mx-name-textBox4 [...]" [...]>
	<INPUT-WIDGET />
</div>
```

If you have made custom styles using `.form-group` before, this might be a breaking change as `.form-group`  matches with more elements now. You can now target form groups and elements inside them on only horizontal or only vertical forms using `.form-horizontal .form-group` or `.form-vertical .form-group` respectively. 

### 9.3 Input Widget Type Classes

Form groups now have special class name depending on their widget type:

* `.mx-checkbox`
* `.mx-datepicker`
* `.mx-dropdown`
* `.mx-inputreferencesetselector`
* `.mx-radiobuttongroup`
* `.mx-referenceselector`
* `.mx-textarea`
* `.mx-textbox`

### 9.4 Examples of Form Group Layout

The vertical form group input widget now has a label, input control, and an optional validation message on the same level:

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

The horizontal form group input widget now has a label with `col-sm-{labelWith}`and `div.col-sm-{12-labelWith}`. Its label also has input control and an optional validation message inside:

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

This is the structure of an input widget, in either a horizontal or vertical data view, with **Show label** set to **No**. The input widget has an input control and an optional validation message:

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

### 9.5 Read-Only Controls

Previously, non-editable input controls of input widgets with **Read-only style** set to **Text** could have been rendered using a `p` or a `label` element with a `form-control-static` class on them. 

Read-only controls with **Read-only style** set to **Text** are now rendered as the following:

```html
<div class="form-control-static">value</div>
```

### 9.6 Input Widgets Structure

Previously, some input widgets had a wrapper element surrounding their control. 

These redundant wrappers have been removed, and now bare controls are rendered wherever possible (except radio buttons in a radio buttons group, in which each individual control is wrapped in a `div`).

### 9.7 Examples of Input Controls

A few examples of various input controls are listed below.

Text box:

```html
<input class="form-control" type="text" id="123_abc" />
```

Text area:

```html
<textarea class="form-control mx-textarea-input mx-textarea mx-textarea-input-noresize"></textarea>
```

Check box:

```html
<input type="checkbox" value="" />
```

Check box when **Label position** is set to **After control** (in this case the label on the form group is not shown):

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

## 10 Date Picker Widget Changes

### 10.1 Input

The following changes have been made to the date picker input widget:

* The classes `mx-dateinput` and `mx-dateinput-input` have been removed in favor of the new `mx-compound-control` class
* The `mx-compound-control` class was introduced for input widgets made up of more than one element, such as a widget with a button next to the input
* The inner `<div>` element with class `mx-dateinput-input-wrapper` around the input was removed
* The `<button>` element was placed after the input in the DOM to match the visual order

### 10.2 Calendar

Because the calendar pop-up window is no longer implemented using the Dojo framework, several changes were made to the calendar pop-up window's internal structure:

* All classes starting with `dijit` have been removed
* The outermost `<div>` element now has the class `mx-calendar`
* The `<td>` elements, which represent the days in the calendar view, get the following classes:
	* `mx-calendar-day-month-current`, `mx-calendar-day-month-previous` or `mx-calendar-day-month-next`: depending on whether the day falls in the current, previous, or next month
	* `mx-calendar-day-selected`: if the day is currently selected in the date picker for which the calendar was opened
	* `mx-calendar-day-active`:  if the day currently has the focus
* The `<span>` elements inside the `<td>` and `<th>` elements have been removed

The month header now has the following structure:

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

The year switcher now has the following structure:

```html
<div class="mx-calendar-year-switcher">
	<span class="mx-calendar-year-previous">2018</span>
	<span class="mx-calendar-year-selected">2019</span>
	<span class="mx-calendar-year-next">2020</span>
</div>
```

## 11 Reference Selector and Input Reference Set Selector Markup Changes

The following changes have been made to the reference selector markup:

* The classes `mx-referenceselector` and `mx-referencesetselector` have been removed from the main `<div>` element in favor of the new `mx-compound-control` class, which was introduced for input widgets made up of more than one element (one common input widget with multiple elements is a button next to an input element).

The following changes have been made to the input reference set selector markup: 

* The form group will now get the class `mx-referenceselector` or `mx-inputreferencesetselector` (note the `input` prefix) instead
* The inner `<div>` element (sharing a class ending with `-input-wrapper`) around the input was removed
* The `<button>` elements have been placed after the input in the DOM to match the visual order

## 12 DropDownButton Widget Cleanup

The following changes have been made to the `DropDownButton` widget:

* The class `mx-list` has been removed from the list of terms in the dialog box
* The class `mx-dropdown` has been removed from the dialog box, as it has nothing to do with drop-down in the search input

## 13 File Manager and Image Uploader Widget Changes

Previously, file manager and image uploader widgets were rendered differently on desktop and mobile browsers. On desktop these widgets rendered as an easy-to-style custom HTML snippet, while on mobile they manifested as difficult-to-style native file input.

File manager and image uploader widgets have been changed for consistency. Now, they always shows the same HTML structure. Also, these widgets' DOM structure has been made more consistent with other compound widgets (like the reference selector and date picker).

Now, file manager and image uploader widgets are always represented as a `div`  element with `mx-compound-control` class on it. Also, the `mx-fileinput` class has been moved to the form group. Inside of the `div`, there is an input with `form-control` class. This input represents a filename of currently selected file. The class `mx-wrapped-label` is gone from the input. Next to the input, there are one of two buttons for uploading and downloading the current file. These buttons have the same classes as before.

## 14 Read More

* [Troubleshoot Atlas UI Changes](/refguide8/migration-atlas/)

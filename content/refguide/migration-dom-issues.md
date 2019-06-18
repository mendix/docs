---
title: "Mendix Studio Pro DOM Improvements"
category: "App Modeling"
menu_order: 
description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
tags: ["Samba", "MxCloud", "cloud", "share"]
---

## 1 Introduction

While improving the client in Mendix 8,  the markup has also been updated. These changes make widgets more accessible, more consistent, and give you a cleaner markup to work with. 

However these updates might impact your styling. Markup in your widgets and their classnames might be affected if your app uses custom CSS. This reference guide will outline the differences between Mendix 7 and 8 as they pertain to the DOM and CSS. This document is only relevant for apps which employ custom CSS.

## 2 Updating Atlas

TODO: [+How to migrate Atlas to Mendix 8](https://paper.dropbox.com/doc/How-to-migrate-Atlas-to-Mendix-8-g4PvGKOMxR2aSHLPSj4xo) 


## 3 Streamlined Custom Themes

**what is — find nice location-- ?**

Before Mendix 8, when you lacked a theme the client provided a large amount of default styling. This made it difficult to build your own theme, as you needed to override the default styling often. As of Mendix 8, all CSS which is not required for a working application has been removed. Now, building your own theme from scratch requires significantly less work.

If you already have built your own theme from scratch in a previous Mendix version, you might depend on that styling. For that we provide the previous defaults — find nice location-- for you to download so you can re-use it.

## 4 Focus-Specific Class Removed

Before Mendix 8, the client frequently applied `mx-focus` to the element which received focus and removing `mx-focus` when the element lost focus. Because all supported browsers now have proper support for the `:focus` pseudo-class, these reapplications are no longer necessary. For more information on `:focus`, see Mozilla’s [:focus documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus). If your are using `mx-focus` in your theme, you should replace it with `:focus` :

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

We made a number of updates to the data grid markup. Previously, the data grid was split into two separate tables: one containing the header and one containing the data. This made the data grid less accessible, because for screen readers these are just two separate tables, without any relation to one another. Now the two tables have been merged into a single table. Furthermore, the `div` wrapping the two tables has been removed.

Another change concerning the data grid markup is that the `div` containing the toolbar and the `div` containing the paging bar (both part of the control bar) are now in a logical order. Previously, additional CSS was needed to display them in the right order, and additional Javascript was needed to dictate a logical tab behavior. The current structure now falls in line with WCAG standards by having the DOM order follow the visual order.

This is the current resulting markup of the data grid (unchanged parts omitted):

```html
    <div class="mx-grid mx-datagrid mx-name-grid1">
        <div class="mx-grid-searchbar" style="display: none;">...</div>
        <div class="mx-grid-controlbar">...</div>
        <div class="mx-grid-content">
            <table>
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

Additionally, a number of additional classes on the table have been removed, as they are easily accessed by the element names. 

Common use cases for styling the data grid now contains CSS such as this:

```css
    .mx-datagrid .mx-datagrid-head-table {
      // your styling
    }
    .mx-datagrid .mx-datagrid-body-table .mx-datagrid-body tr td {
      // your styling
    }
```

This should now be rewritten to:

```css
    .mx-datagrid thead {
      // your styling
    }
    
    .mx-datagrid tbody tr td {
      // your styling
    }
```

## 6 List View Markup Changes

The markup for list views was also changed. To simplify the styling, the following classes have been removed:


* `mx-list`
* `mx-listview-list`
* `mx-listview-striped`
* `mx-listview-item`
* `mx-listview-search-input` 
* `mx-listview-clear-button`

For list views that are not in a select page for a reference or reference set selector,  the `mx-listview-selectable` class on the list view itself and the unneeded `div` element with class `mx-listview-content` around the contents of each list view item have been removed.

The order of the DOM elements list view search bar has been corrected to be consistent with the visual order. The `div` element around the search input field has been removed.

Common use cases for styling the list view might contain CSS such as this:

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

This should be rewritten to:

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

Every input widget has an implicit form group structure wrapped around it. Before recent changes, an input widget’s DOM structure could appear disorganized depending on its settings.Now, the form group structure ensures that the input widget is properly aligned inside the data view and properly labeled.  For the full description form group and input widget structures, see [Link to the full form group / input widgets description].


### 9.1 Vertical/horizontal classes on DataView

Previously data view was rendering `form-horizontal` class on it when **Form orientation** was set to **Horizontal** and no such class if this option was set to **Vertical**. Now we always add `form-horizontal` or `form-vertical` on **Horizontal** and **Vertical** options respectively. This makes it easier to style forms (and inputs in them) with different orientations by targeting one or another class in your CSS selector. If previously you were relying on presence or absence of `form-horizontal` now you can make your CSS selectors simpler by using `form-vertical`.

```html
    <div class="mx-dataview mx-name-dataView3 form-horizontal"><!-- or form-vertical -->
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

### 9.2 Form group structure

Previously if widget had **Show caption** option set to **No** form group structure was missing `form-group` class on the top level div:

```html
    <div class="mx-name-textBox4 [...]" [...]>
        <INPUT-WIDGET />
    </div>
```

Now `form-group` class is always in place with extra `no-columns` class:

```html
    <div class="form-group no-columns mx-name-textBox4 [...]" [...]>
        <INPUT-WIDGET />
    </div>
```

If you’ve had custom styles using `.form-group` before, this might be a breaking change as `.form-group`  matches with more elements now. You can now target form groups and elements inside them on only horizontal or only vertical forms using `.form-horizontal .form-group` or `.form-vertical .form-group` respectively. 

### 9.3 Input widget type classes

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

Vertical input has a label, input, and an optional validation message on the same level:

```html
    <div class="form-group mx-name-textBox4 [...]" [...]>
       <label class="control-label" for="123_abc">
           Caption
       </label>
    
       <INPUT-WIDGET/>
       <!-- OR for readonly style text -->
       <div class="form-control-static">value</div>
    
       <!-- optional: validation message -->
       <div class="alert alert-danger mx-validation-message">checkboom</div>
    </div>
```

Horizontal input has a label with `col-sm-{labelWith}`, `div.col-sm-{12-labelWith}`, input, and an optional validation message inside:

```html
    <div class="form-group mx-name-textBox4 [...]" [...]>
        <label class="control-label col-sm-4" for="123_abc">
            Caption
        </label>
        <div class="col-sm-8">
            <INPUT-WIDGET/>
            <!-- OR for readonly style text -->
            <div class="form-control-static">value</div>
    
            <!-- optional: validation message -->
            <div class="alert alert-danger mx-validation-message">checkboom</div>
        </div>
    </div>
```

Without label. Same structure for inputs without a label in both vertical and horizontal forms. Has an input and an optional validation message.

```html
    <div class="form-group mx-name-textBox4 [...]" [...]>
        <!-- A form group without a label is still a form-group -->
    
        <INPUT-WIDGET/>
        <!-- OR for readonly style text -->
        <div class="form-control-static">value</div>
    
        <!-- optional: validation message -->
        <div class="alert alert-danger mx-validation-message">checkboom</div>
    </div>
```

### 9.5 Read-Only Controls

Previously, non-editable controls with **Read-only style** set to **Text** could have been rendered using a `p` or a `label` element with a `form-control-static` class on them. Read-only controls with **Read-only style** **Text** are now rendered as `<div class="form-control-static"/>`.

### 9.6 Input Widgets Structure

Previously, some input widgets had a wrapper element surrounding their control. These redundant wrappers have been removed, and now bare controls are rendered wherever possible (except radio buttons in a radio buttons group, each individual control is wrapped in a `div`).

### 9.7 Examples of Input Widget Layout

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

When **Label position** is set to **After control** (label on the form group is not shown):

```html
    <input type="checkbox" value="" />
    <label for="">Label</label>
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

Drop down:

```html
    <select class="form-control">
        <option value=""></option>
        <option value="a1">a1</option>
        <option value="a2">a2</option>
        <option value="a3">a3</option>
    </select>
```

## 10 Date Picker Markup Changes

### 10.1 Input

The classes `mx-dateinput` and `mx-dateinput-input` have been removed in favour of the new `mx-compound-control` class, which was introduced for input widgets which are made up of more than one element (like having a button next to the input). The inner `<div>` element (with class `mx-dateinput-input-wrapper` ) around the input was removed and `<button>` element is now after the input in the DOM to match the visual order.

### 10.2 Calendar

Because the calendar pop-up is no longer implemented using the Dojo framework, several changes were made to its internal structure:

* All classes starting with `dijit` have been removed.
* The outermost `<div>` element now has the class `mx-calendar`
* The `<td>` elements, which represent the days in the calendar view, get the following classes:
	* `mx-calendar-day-month-current`, `mx-calendar-day-month-previous` or `mx-calendar-day-month-next` (depending on whether the day falls in the current, previous or next month)
	* `mx-calendar-day-selected` if the day is currently selected in the date picker for which the calendar was opened
	* `mx-calendar-day-active` if the day currently has the focus
* The `<span>` elements inside `<td>` and `<th>` elements have been removed.

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
            <div class="mx-calendar-month-dropdown-options"> <!-- only rendered when the month dropdown is clicked -->
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

The classes `mx-referenceselector` and `mx-referencesetselecto``r` have been removed from the main `<div>` element in favor of the new `mx-compound-control` class, which was introduced for input widgets made up of more than one element. One common input widget with multiple elements is a button next to an input. The surrounding form group will now get the class `mx-referenceselector` or `mx-inputreferencesetselector` (note the `input` prefix) instead. The inner `<div>` element (having a class ending with `-input-wrapper`) around the input was removed and `<button>` elements have been placed after the input in the DOM to match the visual order.


## 12 DropDownButton Widget Cleanup

The class `mx-list` has been removed from the list of terms in the dialog window. The class `mx-dropdown` has been removed from the dialog window, as it has nothing to do with drop down in the search input.


## 13 File Uploader Markup Changes

Previously File and Image uploader widgets were rendered differently on desktop and mobile browsers. On desktop it was an easily stylable custom html snippet while on mobile it was a native file input which is hard to style.

We made this widget consistent, now it always shows the same html structure. Also we made some changes in a DOM structure of those widgets to be consistent with other compound widgets like Reference Selector and Date Picker.

Now those widgets are always represented as a `div`  element with `mx-compound-control` class on it, `mx-fileinput` class is moved to the form group. Inside of the `div` there is an input with `form-control` class. This input represents a filename of currently selected file. Additional class `mx-wrapped-label` is gone from the input. Next to the input there are one of two buttons for uploading and downloading the current file, they have the same classes as before.



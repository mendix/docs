---
title: "Page"
parent: "Pages"
space: "Reference Guide 5"
---


<div class="alert alert-warning">{% markdown %}

This document describes the properties of a page. If you want to see what pages are for and what kind of widgets can be placed on them, please read the [Pages](Pages) overview documentation.

{% endmarkdown %}</div>

Pages define the end user interface of a Mendix application. Every page is based on a [layout](Layout). A page fills the 'gaps' defined by a layout with widgets such as the [data view](Data+view) and the [data grid](Data+grid).

## Common Properties

### Name

The name of the page. You can change the name via the project explorer.

### Documentation

This property can be used to store developer documentation. End-users will never see this documentation.

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the page.

### Style

The style property allows you to specify custom cascading style sheet (CSS) rules for this page. In general, it's preferable to use a CSS class instead.

## Designer Properties

### Canvas width

The canvas width property defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 800

### Canvas height

The canvas height property defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 600

## General Properties

### Title

The title of the page that is shown using the [page title widget](Page+title). If the page is shown in a pop-up the title appears in the title bar of the pop-up. The title can be overridden from places where forms are opened to make it possible to reuse a page for different purposes. For example, a [Grid New Button](Grid+New+Button) and an [Edit button](Edit+button) can refer to the same page but override the title to 'New' and 'Edit' respectively.

### Layout

The [layout](Layout) that this page is based on.

## Navigation Properties

### Visible for

The module roles for which the page is visible. This has effect on [menu widgets](Menu+Widgets) and on buttons that are visible only if allowed. See, for example, the [Edit button](Edit+button).

See also [Module Security](Module+Security).

## Pop-up Size Properties

The pop-up size properties are only relevant if the page is shown as a pop-up, as opposed to in content.

### Width (in pixels)

Specifies the pop-up width in pixels. When set to 0, the width is determined automatically.

_Default value:_ 0

### Height (in pixels)

Specifies the pop-up height in pixels. When set to 0, the height is determined automatically.

_Default value:_ 0

### Resizable

Specifies whether the pop-up is resizable (Yes) or fixed-size (No).

_Default value:_ Yes

## Usage Properties

### Mark as used

You can search for unused items (Ctrl+Shift+F, Search for = Unused items) in the Modeler. Pages that are only used from Java code will be listed as unused because the Modeler cannot look inside Java source code.

By setting the propery 'Mark as used' to 'Yes' you specify that the document is used implicitly and the Modeler will no longer list it when searching for unused items.

_Default value:_ No

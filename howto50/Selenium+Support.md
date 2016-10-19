---
title: "Selenium Support"
category: "howto50"
space: "Mendix 5 How-to's"
---
<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">5.21.0</td><td class="confluenceTd">Jun 18, 2014 16:12</td><td colspan="1" class="confluenceTd">Nov 24, 2015 14:59</td></tr></tbody></table>



Mendix 5 uses CSS classes to identify page content like widgets and popups. You can use these classes in Selenium to manipulate pages and verify data.

# Table of contents

## 1. Naming conventions

Widgets can be given a name in the Mendix modeler. These names appear in the HTML document as class names prefixed by '`mx-name-`'. For instance, a grid named `ArtistGrid` will get a CSS class '`mx-name-ArtistGrid`'. This is true for all widgets.

More complex widgets, like a grid, can set more specific CSS classes to sub-elements like columns or the paging bar buttons.

Some widgets, like a Grid or a Listview, can show multiple items. Every item has a CSS class '`mx-name-index-`' followed by an index number, starting at 0.

The easiest way to discover these names is to use a browser's developer tool, like [Firebug](https://addons.mozilla.org/nl/firefox/addon/firebug/).

## 2\. Pitfalls

### 2.1 Nested widgets

Every widget has a unique class name, which means that you can use the name on its own as a selector in Selenium. This makes hem robust against changes in your page, like moving a button from one container to another. However, not all sub-elements in widgets are unique, like the buttons in the Grid's paging bar. To select such an element, use a descendant selector like '`.mx-name-artist-grid .mx-name-next`'. This first selects the artist grid and then searches for the next page button on that grid.

### 2.2 Timing issues

Some actions done by Selenium take time to complete, for instance animations or requesting data for a pop-up. When clicking a search button in a grid, the search bar appears using an animation. This means that after clicking the button, the test needs to wait for the animation to complete, before continuing.

For more information, see the [Webdriver: advanced usage](http://docs.seleniumhq.org/docs/04_webdriver_advanced.jsp) page.

## 3\. Examples

Select a Microflow button named `Execute` in a page:

```javascript
$('.mx-name-Execute')

```

Select the fourth row a grid named `ArtistGrid`:

```javascript
$('.mx-name-ArtistGrid .mx-name-index-3')

```

Note that the fourth row in a grid has an index of 3.

## 4\. Related content

*   [Creating automated tests with TestNG](Creating+automated+tests+with+TestNG)
*   [Expose a web service](Exposing+a+web+service)
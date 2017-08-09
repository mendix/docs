---
title: "Tab page"
parent: "tab-container"
---


## General Properties

### Caption

{{% alert type="info" %}}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{{% /alert %}}

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](data-view) or [list view](list-view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

This property indicates what text will be shown on this widget or part of the widget. This is a translatable text. See [Translatable Texts](translatable-texts).

### Default tab page

The tab page with the property 'Default page' set to true will be open when the page is opened. If no tab page is the default page, the first tab page will be shown.

_Default value:_ False

### Refresh on show

This property indicates whether the contents of the tab page should be refreshed if the tab page is shown. It is true by default. Set this property to false if refreshing is an expensive operation or if you know that nothing will affect the information on the tab page.

_Default value:_ True

## Visibility Properties

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met.

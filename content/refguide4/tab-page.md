---
title: "Tab Page"
parent: "tab-control"
---
## Appearance Properties

### Caption

This is the text that is displayed in the tab page header. This is a translatable text. See [Translatable Texts](translatable-texts).

## Behavior Properties

### Default tab page

The tab page with the property 'Default page' set to true will be open when the form is opened. If no tab page is the default page, the first tab page will be shown.

_Default value:_ False

### Refresh on show

This property indicates whether the contents of the tab page should be refreshed if the tab page is shown. It is true by default. Set this property to false if refreshing is an expensive operation or if you know that nothing will affect the information on the tab page.

_Default value:_ True

## Visibility Properties

### Visible

A tab page can be made conditionally visible based on the value of an attribute (of type enumeration or boolean) and/or user roles. See [Conditions](conditions).

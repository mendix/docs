---
title: "Layout"
parent: "Pages"
space: "Reference Guide 5"
redirect_from:
  - "/refguide5/Layouts"
---


Layouts specify what comes where. Each [page](Page) is based on a layout. The layout contains widgets and structures that return on every page based on that layout. For example, it is common to put a menu bar widget in a layout so that the menu is visible on all pages.

A layout consists of contents and [placeholder](Placeholder)s. The contents covers everything that should be present in every page that uses the layout, from navigation bars to sign out buttons. Placeholders, on the other hand, are empty areas that later form the canvas for any pages that make use of the layout. The layout contents remains the same in every page, but the placeholder areas cover what is unique to every individual page. 

Layouts can be based on other layouts, in which case the generic layout is referred to as the master layout. If a layout has a master layout, it can use the placeholders defined in the master to create a more specialized configuration. If a page is based on this specialized layout, it makes use of the placeholders defined in the new layout, ignoring those of the master layout. 

![](attachments/4522351/8946113.png)

This chain can be as long as is necessary, with a generic layout used throughout the project used as a master layout for a more specific data input layout which is, in turn, used as a master layout for a specialized edit user layout. 

When opening a new page in the browser, content found in layouts is not reloaded if the layout is re-used by the new page. That is, if a user transitions from page A to page B, both of which use layout X, the placeholder contents is refreshed but the layout content is unaffected. This allows for navigation between pages without losing valuable input or performing a costly refresh on elements that do not require one. Example scenarios include a tab container that does not require the user to select the correct tab every time a new page is opened, or a side bar with user input that should not be cleared after every single refresh. 

Mendix will intelligently detect if pages share a layout, no user input is required. This also applies for nested layouts. If two pages have different layouts but those layouts share a common master layout, the sub-layout will reload but the master layout will remain static. 

## Common Properties

### Name

The name of the layout. You can change the name via the project explorer.

### Documentation

This property can be used to store developer documentation. End-users will never see this documentation.

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the layout. This class will be applied to every page that is based on this layout or on a layout that has this layout as its master layout.

## Designer properties

### Canvas width

The canvas width property defines the width in pixels of the layout in the layout editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 800

### Canvas height

The canvas height property defines the preferred minimum height in pixels of the layout in the layout editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 600

## General properties

### Master layout

This property specified the master layout on which this layout is based. If no master layout is specified, this layout contains a single widget (e.g. a [layout container](Layout+Container)) that defines the structure of pages based on this layout. If a master layout is specified, this layout fills the gaps defined by the master layout. You can introduce new gaps on this layout by using [placeholders](Placeholder).

### Use main placeholder for pop-ups

<div class="alert alert-warning">{% markdown %}

This property was introduced to remain compatible with version 4, in which there was no distinction between pop-up pages and in-content pages. It will be removed in version 6.

{% endmarkdown %}</div>

When this property is enabled, pages based on this layout will only show the contents of the main placeholder (see below) when they are shown as pop-up.

### Layout type

If [Page Templates](Page+Templates) are enabled, every layout has a layout type

<table><thead><tr><th class="confluenceTh">Layout type</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Responsive</td><td class="confluenceTd">Use this layout for pages that will work fine on all types of devices. The <a href="Layout+grid">layout grid</a> and other widgets make it possible to create responsive pages.</td></tr><tr><td class="confluenceTd">Tablet specific</td><td class="confluenceTd">Use this layout for pages on a tablet if the responsive option is not sufficient, e.g. if different use cases with different user interfaces have to be supported.</td></tr><tr><td colspan="1" class="confluenceTd">Phone specific</td><td colspan="1" class="confluenceTd">Use this layout for pages on a phone if the responsive option is not sufficient, e.g. if different use cases with different user interfaces have to be supported.</td></tr><tr><td colspan="1" class="confluenceTd">Modal pop-up</td><td colspan="1" class="confluenceTd">Use this layout for pages that should appear as modal pop-ups.</td></tr><tr><td colspan="1" class="confluenceTd">Pop-up</td><td colspan="1" class="confluenceTd">Use this layout for pages that should appear as non-modal pop-ups.</td></tr><tr><td colspan="1" class="confluenceTd">Legacy</td><td colspan="1" class="confluenceTd">Layouts created in Mendix 5.17 or older are of this type. It is recommended to assign one of the other layout types.</td></tr></tbody></table>

The layout type also determines how a page is opened, instead of the old [location property](Opening+Pages). If the layout type is "Legacy", then the location property is still used.

When enabling page templates and assigning layout types to existing layouts, it might be that pages will be opened in a different way than the location property indicated.

When disabling page templates the page is opened based on the location property and no longer based on the layout type. The location property may contain a different value than the one implied by the page layout type.

This may result in a change of behavior of your application. Be sure to test your application thoroughly.

## Page Generation Properties

### Main placeholder

This property defines the placeholder in which the Modeler places the page content when generating a page. For example, when you generate an edit page for the edit button of a data grid, the resulting page will contain a data view in the gap of the main placeholder.

### Save button placeholder

This property defines the placeholder in which the Modeler places the save button when generating a page. If no save button placeholder is defined, the save button is placed in the data view control bar if possible.

### Cancel button placeholder

This property defines the placeholder in which the Modeler places the cancel button when generating a page. If no save button placeholder is defined, the cancel button is placed in the data view control bar if possible.

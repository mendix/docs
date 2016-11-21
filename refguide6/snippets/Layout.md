Layouts specify what comes where. Each [page](page) is based on a layout. The layout contains widgets and structures that return on every page based on that layout. For example, it is common to put a menu bar widget in a layout so that the menu is visible on all pages.

A layout consists of contents and [placeholder](placeholder)s. The contents covers everything that should be present in every page that uses the layout, from navigation bars to sign out buttons. Placeholders, on the other hand, are empty areas that later form the canvas for any pages that make use of the layout. The layout contents remains the same in every page, but the placeholder areas cover what is unique to every individual page. 

Layouts can be based on other layouts, in which case the generic layout is referred to as the master layout. If a layout has a master layout, it can use the placeholders defined in the master to create a more specialized configuration. If a page is based on this specialized layout, it makes use of the placeholders defined in the new layout, ignoring those of the master layout. 

![](attachments/16713875/16843991.png)

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

This property specified the master layout on which this layout is based. If no master layout is specified, this layout contains a single widget (e.g. a [scroll container](scroll-container)) that defines the structure of pages based on this layout. If a master layout is specified, this layout fills the gaps defined by the master layout. You can introduce new gaps on this layout by using [placeholders](placeholder).

### Layout type

Every layout has a layout type, which determines the purpose of the layout and how a page using the layout is opened.

| Layout type | Description |
| --- | --- |
| Responsive | Use this layout for pages that will work fine on all types of devices. The [layout grid](layout-grid) and other widgets make it possible to create responsive pages. |
| Tablet specific | Use this layout for pages on a tablet if the responsive option is not sufficient, e.g. if different use cases with different user interfaces have to be supported. |
| Phone specific | Use this layout for pages on a phone if the responsive option is not sufficient, e.g. if different use cases with different user interfaces have to be supported. |
| Modal pop-up | Use this layout for pages that should appear as modal pop-ups. |
| Pop-up | Use this layout for pages that should appear as non-modal pop-ups. |
| Legacy |

Layouts created in Mendix 5.17 or older are of this type. It is recommended to assign one of the other layout types.

How the page is opened is determined by the [location property](opening-pages).

 |

## Page Generation Properties

### Main placeholder

This property defines the placeholder in which the Modeler places the page content when generating a page. For example, when you generate an edit page for the edit button of a data grid, the resulting page will contain a data view in the gap of the main placeholder.

### Save button placeholder

This property defines the placeholder in which the Modeler places the save button when generating a page. If no save button placeholder is defined, the save button is placed in the data view control bar if possible.

### Cancel button placeholder

This property defines the placeholder in which the Modeler places the cancel button when generating a page. If no save button placeholder is defined, the cancel button is placed in the data view control bar if possible.

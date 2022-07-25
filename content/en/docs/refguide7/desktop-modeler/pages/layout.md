---
title: "Layouts"
url: /refguide7/layout/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Layouts specify what comes where. Each [page](/refguide7/page/) is based on a layout. The layout contains widgets and structures that return on every page based on that layout. For example, it is common to put a menu bar widget in a layout so that the menu is visible on all pages.

A layout consists of content and [placeholders](/refguide7/placeholder/). The content is everything that should be present in every page that uses the layout, from navigation bars to sign-out buttons. Placeholders are empty areas that later form the canvas for any pages that make use of the layout. The layout content remains the same in every page, but the placeholders cover what is unique to every individual page. 

Layouts can be based on other layouts, in which case the generic layout is referred to as the master layout. If a layout has a master layout, it can use the placeholders defined in the master to create a more specialized configuration. If a page is based on this specialized layout, it makes use of the placeholders defined in the new layout, ignoring those of the master layout. 

{{< figure src="/attachments/refguide7/desktop-modeler/pages/layout/16843991.png" >}}

This chain can be as long as is necessary, with a generic layout used throughout the project  as a master layout for a more specific data input layout which is, in turn, used as a master layout for a specialized edit user layout. 

When opening a new page in the browser, the content found in the layouts is not reloaded if the layout is re-used by the new page. That is, if a user transitions from page A to page B, both of which use layout X, the placeholder content is refreshed, but the layout content is unaffected. This allows for navigation between pages without losing valuable input or performing a costly refresh on elements that do not require one. Example scenarios include a tab container that does not require the user to select the correct tab every time a new page is opened, or a sidebar menu with user input that should not be cleared after every single refresh. 

Mendix will intelligently detect if pages share a layout, so no user input is required. This also applies for nested layouts. If two pages have different layouts but those layouts share a common master layout, the sub-layout will reload, but the master layout will remain static. 

## 2 Placeholder Management<a name="phm"></a>

{{% alert color="info" %}}

The method for mapping placeholders described in this section was introduced in Mendix 7.9.0. Older versions make use of the placeholder properties described in [6 Page Generation Properties](#pgp).

{{% /alert %}}

A layout contains one or more placeholders. One of these placeholders must be named **Main**, and it can be differentiated from the others by a darker shade of blue. Unlike most other widgets, the name of a placeholder carries a special significance. When a user switches a page from one layout to another, the placeholder names will be used to map the content of the page to the new layout. For every placeholder that has content in the current layout, the Modeler will search for a placeholder with the same name in the new one. As the Main placeholder is mandatory, the user can always be assured that at least some of the page content will be salvaged. Any content found in placeholders not present in the new layout will be moved above the canvas, where it can easily be redistributed over the new placeholders.

The placeholder naming scheme also has an impact on [page templates](/refguide7/page-templates/). When creating a new page, the template will map its content based on the names of the placeholders in its preview layout. Consequently, a template might describe the content for a placeholder that is not available in the selected layout. To prevent this, a compatible layout is automatically pre-selected when clicking a page template in the create new page dialog. If an incompatible layout is then selected manually, all the content for the missing placeholders will be discarded. 

As a consequence of this behavior, user experience can be improved significantly if all of a project's layouts adhere to the same or a similar naming scheme. This will ensure layouts can be alternated freely without having to consider the effect on the content of each individual placeholder. 

## 3 Common Properties

{{% snippet file="/static/_includes/refguide7/Document+Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Documentation+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Document+Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## 4 Designer Properties

{{% snippet file="/static/_includes/refguide7/Canvas+Width+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Canvas+Height+Property.md" %}}

## 5 General Properties

### 5.1 Master Layout

This property specifies the master layout on which the layout is based. If no master layout is specified, the layout contains a single widget (for example, a [scroll container](/refguide7/scroll-container/)) that defines the structure of pages based on this layout. If a master layout is specified, this layout fills the gaps defined by the master layout. You can introduce new gaps in this layout by using [placeholders](/refguide7/placeholder/).

### 5.1 Layout Type<a name="layout-type"></a>

Every layout has a layout type, which determines the purpose of the layout and how a page using the layout is opened.

| Layout Type | Description |
| --- | --- |
| **Responsive** | Use this layout for pages that will work fine on all types of devices. The [layout grid](/refguide7/layout-grid/) and other widgets make it possible to create responsive pages. |
| **Tablet specific** | Use this layout for pages on a tablet if the responsive option is not sufficient (for example, if different use cases with different user interfaces have to be supported). |
| **Phone specific** | Use this layout for pages on a phone if the responsive option is not sufficient (for example, if different use cases with different user interfaces have to be supported). |
| **Modal pop-up** | Use this layout for pages that should appear as [modal pop-up windows](https://www.wikiwand.com/en/Modal_window). |
| **Pop-up** | Use this layout for pages that should appear as modeless pop-up windows. |

## 6 Page Generation Properties<a name="pgp"></a>

{{% alert color="warning" %}}

This section (along with the placeholder properties described below) was removed in Mendix 7.9.0 in favor of name-based placeholder mapping. For a full explanation, see [2 Placeholder Management](#phm). 

{{% /alert %}}

### 6.1 Main Placeholder

This property defines the placeholder in which the Modeler places the page content when generating a page. For example, when you generate an edit page for the edit button of a data grid, the resulting page will contain a data view in the gap of the main placeholder.

### 6.2 Save Button Placeholder

This property defines the placeholder in which the Modeler places the save button when generating a page. If no save button placeholder is defined, the save button is placed in the data view control bar if possible.

### 6.3 Cancel Button Placeholder

This property defines the placeholder in which the Modeler places the cancel button when generating a page. If no save button placeholder is defined, the cancel button is placed in the data view control bar if possible.

---
title: "Opening Pages"
parent: "Page+Concepts"
space: "Reference Guide 5"
---


In many places within pages you can open other pages. For example, the [edit button](Edit+button) of the [data grid](Data+grid) opens a page to edit the selected object.

Pages can be opened either in the content pane of the browser or in a new pop-up. Where the page is opened depends on the [layout type](Layout#layout-type) of its [layout](Layout): pages based on a layout of type 'Modal pop-up' or 'Pop-up' will be open as a pop-up, other pages will be opened in content. If the project does not have Page Templates enabled, or if the target page layout is of type 'Legacy', then the page location must be configured manually (see [Location](Opening+Pages#location) section below).

If the target page contains a [data view](Data+view) with data source "caller of the page", then an object for this data view must be passed to the page while opening. What object to pass is configured automatically based on the arguments available for the widget opening the page (see [available arguments for microflows](Starting+Microflows) for details).

Generally speaking, opening a page in content will trigger a full reload of the entire browser contents. However, if the new page uses the same [layout](Layout) as the old one, only the page contents will refresh. The layout will retain its state. This allows for navigation without any unnecessary overhead or loss of data. 

## Properties

Mendix allows for a number of methods for opening a page. Each of these methods share a set of properties that determine the conditions in which the page is opened.

### Page

This is the [page](Page) that is shown to the end user. There can be a number restrictions on the page, depending on the place which the page is opened from. For example, the page that is opened by the New button must contain a data view that is connected to the same entity as the grid.

### Page title

By default the title of the page is taken from the title property of the selected page. You can replace this title with a custom title if necessary.

<div class="alert alert-success">{% markdown %}
This feature allows you to re-use the same page for the New and Edit buttons of a data grid. By simply setting the titles to, for example, 'New customer' and 'Edit customer', you can save yourself the trouble of duplicating the rest of the page.
{% endmarkdown %}</div>

### Location

<div class="alert alert-info">{% markdown %}

If the [layout](Layout) of the target page has a [layout type](Layout#layout-type) configured, the Location property will be removed. Instead, the layout type will determine how the page is opened. This eliminates the risk of accidentally modeling a pop-up form with a huge menu bar.

{% endmarkdown %}</div>

This property indicates where the page is shown.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">In content</td><td class="confluenceTd">The page replaces the page that is currently in the content pane of the browser.</td></tr><tr><td class="confluenceTd">Pop-up</td><td class="confluenceTd">The page is shown as a non-blocking pop-up overlaying the page you were looking at. Non-blocking means that you can still use the underlying page .</td></tr><tr><td class="confluenceTd">Blocking pop-up</td><td class="confluenceTd">The page is shown as a blocking pop-up. Blocking means that you cannot use the underlying page until you close the pop-up.</td></tr></tbody></table>

_Default value:_ Pop-up

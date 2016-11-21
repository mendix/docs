---
title: "Show Page"
parent: "client-activities"
space: "Reference Guide 5"
redirect_from:
  - "/refguide5/Show+Form"
---


With the 'Show page' action you can show a page to the end user.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](/refguide5/microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### Object to pass

Object that will be passed to the opened page. This object will be used by [data views](/refguide5/data-view) with data source "caller of the page".

## Action Properties

### Page

The [page](/refguide5/page) to show to the end user. If the Object to pass is specified, the page must contain a data view connected to the same entity as the passed object (or its generalization).

<div class="alert alert-success">{% markdown %}

You can generate a new page to show by clicking 'Select...' and then 'New'. If you have selected an Object to pass the Modeler will automatically generate a data view to edit that object.

{% endmarkdown %}</div>

### Page title

By default the title of the page is determined by the page title property of the page. You can replace this title with a custom title if necessary.

<div class="alert alert-success">{% markdown %}

This feature allows you to re-use the same page for the New and Edit buttons of a data grid. By simply setting the titles to, for example, 'New customer' and 'Edit customer', you can save yourself the trouble of duplicating the rest of the page.

{% endmarkdown %}</div>

### Location

<div class="alert alert-info">{% markdown %}

If the [layout](/refguide5/layout) of the target page has a [layout type](/refguide5/layout#layout-type) configured, the Location property will be removed. Instead, the layout type will determine how the page is opened. This eliminates the risk of accidentally modeling a pop-up form with a huge menu bar.

{% endmarkdown %}</div>

Location defines how the page is shown.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">In content</td><td class="confluenceTd">The page replaces the existing top-level page.</td></tr><tr><td class="confluenceTd">Pop-up</td><td class="confluenceTd">The page is opened in a new dialog on top of the existing page(s).</td></tr><tr><td class="confluenceTd">Blocking pop-up</td><td class="confluenceTd">The page is opened in a new dialog on top of the existing page(s) and a hover, that makes it impossible to navigate to another page, is put on top of the underlying page(s).</td></tr></tbody></table>

_Default value:_ Pop-up

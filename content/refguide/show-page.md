---
title: "Show Page"
parent: "client-activities"
---


With the 'Show page' action you can show a page to the end user.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Object to pass

Object that will be passed to the opened page. This object will be used by [data views](data-view) with data source "caller of the page".

## Action Properties

### Page

The [page](page) to show to the end user. If the Object to pass is specified, the page must contain a data view connected to the same entity as the passed object (or its generalization).

{{% alert type="success" %}}

You can generate a new page to show by clicking 'Select...' and then 'New'. If you have selected an Object to pass the Modeler will automatically generate a data view to edit that object.

{{% /alert %}}

### Page title

By default the title of the page is determined by the page title property of the page. You can replace this title with a custom title if necessary.

{{% alert type="success" %}}

This feature allows you to re-use the same page for the New and Edit buttons of a data grid. By simply setting the titles to, for example, 'New customer' and 'Edit customer', you can save yourself the trouble of duplicating the rest of the page.

{{% /alert %}}

### Location

Location defines how the page is shown.

{{% alert type="info" %}}
Please note that this option should no longer appear in apps that were created in Mendix 5.18 or newer. From version 5.18 onwards, the way a page is shown is determined by the layout you select from the NavigationLayouts module and the Layout type property it has been set to.
{{% /alert %}}

If you have a project that was upgraded from a version below 5.18 and have not upgraded your layouts, they will be marked as "Legacy". In such cases the options below remain relevant.

| Option | Description |
| --- | --- |
| In content | The page replaces the existing top-level page. |
| Pop-up | The page is opened in a new dialog on top of the existing page(s). |
| Blocking pop-up | The page is opened in a new dialog on top of the existing page(s) and a hover, that makes it impossible to navigate to another page, is put on top of the underlying page(s). |

_Default value:_ Pop-up

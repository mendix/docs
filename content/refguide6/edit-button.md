---
title: "Edit button"
parent: "control-bar"
---


The edit button allows user to edit, or view, an object selected in the grid or reference set selector.

## Common properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## General properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Is+default+button+Property.md" %}}

### Page

This property indicates the page that is shown to end-end user when he or she clicks this button. The end-user can use this page to edit the selected object. This page should contain a data view connected to the same entity as the grid, or as the reference set selector.

See [Opening Pages](opening-pages).

### Pages for specializations

If the entity that is connected to the grid or reference set selector has specializations you can optionally specify pages for each specialization. When you edit a row in the data grid the most specific page is opened. For each specialization you specify the page to open, where to open it and a title for the page.

{{% alert type="info" %}}

Let us say you have an entity Vehicle and two specializations thereof: Bicycle and Car. And there is a specialization of Car called SportsCar. You create a data grid that is connected to Vehicle. With the page property of the data grid you specify what page to open for arbitrary Vehicles. For the specializations Bicycle and Car you create separate pages to edit them. If you now edit a row of type Bicycle the page specific for bicycles will be opened. If you edit a Car, you get the page for cars. If you edit a SportsCar, the page for cars will be opened! There is no page specific for sports cars (in this example) and car is the 'closest' generalization for which there is a page.

{{% /alert %}}

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Extended.md" %}}

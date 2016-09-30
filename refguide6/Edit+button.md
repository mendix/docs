---
title: "Edit button"
space: "Reference Guide 6"
parent: "Control+Bar"
---


The edit button allows user to edit, or view, an object selected in the grid or reference set selector.

## Common properties

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## General properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Button+Style+Property.md %}

{% snippet Is+default+button+Property.md %}

### Page

This property indicates the page that is shown to end-end user when he or she clicks this button. The end-user can use this page to edit the selected object. This page should contain a data view connected to the same entity as the grid, or as the reference set selector.

See [Opening Pages](Opening+Pages).

### Pages for specializations

If the entity that is connected to the grid or reference set selector has specializations you can optionally specify pages for each specialization. When you edit a row in the data grid the most specific page is opened. For each specialization you specify the page to open, where to open it and a title for the page.

<div class="alert alert-info">{% markdown %}

Let us say you have an entity Vehicle and two specializations thereof: Bicycle and Car. And there is a specialization of Car called SportsCar. You create a data grid that is connected to Vehicle. With the page property of the data grid you specify what page to open for arbitrary Vehicles. For the specializations Bicycle and Car you create separate pages to edit them. If you now edit a row of type Bicycle the page specific for bicycles will be opened. If you edit a Car, you get the page for cars. If you edit a SportsCar, the page for cars will be opened! There is no page specific for sports cars (in this example) and car is the 'closest' generalization for which there is a page.

{% endmarkdown %}</div>

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}

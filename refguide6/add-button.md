---
title: "Add button"
space: "Reference Guide 6"
parent: "control-bar"
---


The add button can only be used in the reference set selector. With this button the end-user can select objects that have to be added to the reference set selector.

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

This property indicates the page that is shown to the end-user after he or she clicks on this button. The end-user can use this page to select objects that have to be added to the reference set selector. This page should contain a data grid, template grid or list view connected to the same entity as the reference set selector.

See [Opening Pages](opening-pages). Note that opening select pages in content is prohibited.

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

---
title: "Grid microflow button"
space: "Reference Guide 6"
parent: "Control+Bar"
---


The microflow button allows you to create a button with custom behavior. The selection in the grid or in the reference set selector can be passed on to the microflow as a parameter.

## Common properties

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## Events

### On click

This property specifies the microflow that is executed when the button is clicked.

### On click settings

With the on click settings you can customize which parameters to pass to the microflow, whether to show a progress bar and more. See [Starting Microflows](Starting+Microflows).

## General properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Is+default+button+Property.md %}

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}

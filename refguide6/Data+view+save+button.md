---
title: "Data view save button"
space: "Reference Guide 6"
parent: "Data+view+control+bar"
---


<div class="alert alert-info">{% markdown %}

This special save button, that was only available in the data view control bar, has been removed in version 6.7.0. Use a normal [Save button](Save+button) instead.

{% endmarkdown %}</div>

The save button commits the changes that were made to the object by input fields in the data view. First, validations are performed and if all is well, the object is saved. If validations fail, the feedback will be sent to the user in the form of red text below the input widget with problematic content. The page showing the data view will be closed if the data view property 'Close on Save/Cancel' is true.

## Common properties

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## General properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Button+Style+Property.md %}

{% snippet Is+close+button+Property.md %}

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

---
title: "Drop Down"
space: "Reference Guide 6"
parent: "Report+Widgets"
---

<div class="alert alert-info">{% markdown %}

This has been introduced in version 6.10.0.

{% endmarkdown %}</div>

With the report parameter, the user can specify a parameter of the data set that is then used for filtering the data displayed in the [Report](Report+Widgets).

Note that if you have a report parameter widget on the page, you must also add a [Report Button](Report+Button) widget so that it is possible for the user to regenerate the report after specifying the parameter.

<div class="alert alert-warning">{% markdown %}

A drop-down menu can be used for a data set parameter of any type except DateTime. DataTime parameters can be filtered by a [Report Date Parameter](Report+Date+Parameter).

{% endmarkdown %}</div>

## General Properties

### Parameter

Refers to the data set parameter, the value of which is restricted by this widget. The corresponding data set must be used by one of the report widgets on the page.

### Displayed Attribute

If the type of the data set parameter is an object, this property indicates which attribute of the corresponding entity is shown in the drop-down menu.

## Common Properties

### Name, Class, Style

For details, see [Common Widget Properties](Common+Widget+Properties).

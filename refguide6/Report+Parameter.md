---
title: "Drop Down"
space: "Reference Guide 6"
parent: "Report+Widgets"
---

<div class="alert alert-info">{% markdown %}

Introduced in version 6.10.0.

{% endmarkdown %}</div>

With a report parameter the end user can specify a parameter of the data set, which is then used for filtering data displayed in the [report](Report+Widgets).

Note that if you have a report parameter widget on the page, you must also add a [report button](Report+Button) widget, so it is possible for the end user to re-generate the report after specifying the parameter.

<div class="alert alert-warning">{% markdown %}

A drop down can be used for a data set parameter of any type except DateTime. DataTime parameters can be filtered by a [report date parameter](Report+Date+Parameter).

{% endmarkdown %}</div>

## General properties

### Parameter

Refers to the data set parameter of which the value is restricted by this widget. Corresponding data set must be used by one of the report widgets on the page.

### Displayed attribute

If the type of the data set parameter is object, this property indicates which attribute of the corresponding entity is shown in the drop down.


## Common Properties

### Name, Class, Style

See [Widget Properties](Common+Widget+Properties).

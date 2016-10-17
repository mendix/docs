---
title: "Caption Property"
category: "refguide5"
space: "Reference Guide 5"
---
### Caption

<div class="alert alert-info">{% markdown %}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{% endmarkdown %}</div>

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](Data+view) or [list view](List+view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

This property indicates what text will be shown on this widget or part of the widget. This is a translatable text. See [Translatable Texts](Translatable+Texts).
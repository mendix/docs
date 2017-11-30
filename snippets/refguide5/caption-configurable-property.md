### Caption

<div class="alert alert-info">

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

</div>

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](data-view) or [list view](list-view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

The caption can be set to either a literal value, or an attribute value. A literal caption specifies a translatable text. See [Translatable Texts](translatable-texts). An attribute caption specifies a path to an attribute. The path starts at the entity of the entity widget in which this widget is contained.

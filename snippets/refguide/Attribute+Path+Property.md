### Attribute (path)

Many input widgets, like text boxes and drop-down widgets, can be connected to:

1.  an attribute of the entity of the data view that contains the widget
2.  an attribute of an entity associated with the data view entity by following one or more associations of type reference through the domain model.

In the first case we say the widget is connected to an attribute and in the second case to an attribute path.

<div class="alert alert-warning">

In Mendix 8.0 an input widget connected to an attribute <strong>path</strong> must be read-only. The Modeler will check this for you. In a later versions of Mendix, it is possible to edit attributes over a path.

</div>

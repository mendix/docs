### Attribute (Path)

Many input widgets (like text boxes and drop-down widgets) can be connected to the following:

* An attribute of the entity of the data view that contains the widget; in this case, the widget is connected to an attribute
* An attribute of an entity associated with the data view entity by following one or more associations of the reference type through the domain model; in this case, the widget is connected to an attribute path

{{% alert type="warning" %}}
In Mendix 8.0, an input widget connected to an attribute *path* must be read-only. Studio Pro will check this for you. In later versions of Mendix, it will be possible to edit attributes over a path.
{{% /alert %}}

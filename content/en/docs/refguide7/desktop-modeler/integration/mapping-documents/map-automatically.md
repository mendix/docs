---
title: "Map Automatically"
url: /refguide7/map-automatically/
---


## Create entities, attributes and associations from import- or export mappings

After you have selected a schema source for the mapping document, you need to connect it to entities, associations and attributes. When you do not yet have suitable entities available in your domain model, creating new ones by hand can be quite cumbersome, especially in large mappings. The button "Map automatically" does the majority of the work for you. Based on the selected schema elements, it creates domain model entities and uses them in the mapping.

{{< figure src="/attachments/refguide7/desktop-modeler/integration/mapping-documents/map-automatically/18579457.png" >}}

In the above picture, no entities are connected to the schema elements, and the domain model in the module is empty. After clicking on "Map automatically", the situation is as follows:

{{< figure src="/attachments/refguide7/desktop-modeler/integration/mapping-documents/map-automatically/18579459.png" >}}

The following actions will be applied:

*   Entities are created for each schema object element. The name is set to the complex type name in the schema.
*   For XML extension types and choice options, the entity generalization is set to the entity corresponding to the XML base type, or choice container.
*   Entity attributes are generated for schema primitive types and attributes.

A dialog is shown with the changes that have been applied to the domain model and mapping document. (press "Details" to expand the dialog).

{{< figure src="/attachments/refguide7/desktop-modeler/integration/mapping-documents/map-automatically/18579458.png" >}}

## Use of existing entities, attributes and associations

If the domain model already contains entities that map to schema elements, they are re-used in the mapping. By default, an entity with the same name of the schema type is used. New attributes may be added, or a generalization may be set if the entity did not already have one. New associations may be created as well if they do not yet exist. The result dialog reports if it reuses existing domain model elements:

{{< figure src="/attachments/refguide7/desktop-modeler/integration/mapping-documents/map-automatically/18579460.png" >}}

## Limitations

The parameter entity for import mappings is not created by "Map Automatically". By default, non-persistable entities are created. You can change that manually in the domain model.

Note that "Map Automatically" is not going to create entity generalization if there is any impact on the persistence behaviour of the entity.

## Manual verification

"Map automatically" is a helper tool. It creates domain model entities and associations to relieve you from doing a lot of manual work. It is advised that you make sure the changes in the domain model are correct. You can use the reporting dialog, or look at the changes dock of the Modeler to see what has been changed effectively. Often, in more complex mappings, you may want to rename elements in the domain model, reconnect schema elements to other attributes, or revise entity generalizations. Be aware that if a generalization is set to an entity, this may have consequences for the database tables that store Mendix objects.

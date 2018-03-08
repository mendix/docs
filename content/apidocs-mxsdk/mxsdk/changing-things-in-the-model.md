---
title: "Change Things in the Model"
parent: "manipulating-existing-models"
---

All units and elements can be freely altered after loading as long as you adhere to the type system. The properties `id`, `container`, `structureTypeName`, `isLoaded` and `unit`, as defined on the [IStructure](https://apidocs.mendix.com/modelsdk/latest/interfaces/istructure.html) object, should not be used: these are (mostly) for internal purposes.

To create new units, you need to pass the parent structural unit to the constructor.

To create new elements, use the `create` methods, as this will create an element detached from the model. Please note that after creating an element, you have to assign it to a property before it actually becomes part of your model. For example, a new `Attribute` element should be pushed onto the `attributes` array of an entity. If you want to create an element and attach it to the model directly, you can use `createIn`. 

An element is always in a specific state: new, attached, detached, or deleted. The state determines what changes can be applied to the element. For a full description of these states and their characteristics, see [Element States](element-states).

All non-list-like properties can be altered simply using assignments. List-like properties are essentially JavaScript arrays, so to alter them you can just replace them or use JavaScript's built-in [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions such as `push`.

References are automatically resolved by the SDK. This means you can just assign or read references directly using fully-typed objects. For each property that refers to a concept in another unit, there is also a read-only property available with `<propertyName>QualifiedName` (or `<propertyName>QualifiedNames` for list-like properties) that gives the string representation of the references.

The following example function creates a new entity with an attribute given a domain model:

```js
import {domainmodels} from "mendixmodelsdk";

function createEntitiy(domainModel : domainmodels.DomainModel, entityName : string, attributeName : string) {
    const newEntity = domainmodels.Entity.createIn(domainModel);
	newEntity.name = entityName;
	domainModel.entities.push(newEntity);

	// location on the canvas in the Mendix Modeler:
	newEntity.location = { 'x': 100, 'y': 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
	newAttribute.name = attributeName;
	newEntity.attributes.push(newAttribute);
}
```

Continue with [How to Close the Server Connection](closing-the-server-connection).

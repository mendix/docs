---
title: "Changing Things in the Model"
parent: "manipulating-existing-models"
---
All units and elements can be freely altered after loading as long as you adhere to the type system. The properties `id`, `container`, `structureTypeName`, `isLoaded` and `unit`, as defined on the [IStructure](https://apidocs.mendix.com/modelsdk/latest/interfaces/istructure.html) object, should not be used: these are (mostly) for internal purposes.

To create new units, you need to pass the parent structural unit to the constructor.

To create new elements use the parameterless constructors. Please note that after creating an element you have to assign it to some property before it becomes actually part of your model. For example, a new `Attribute` element should be pushed onto the `attributes` array of an Entity.

An element is always in a specific state: new, attached, detached, or deleted. The state determines what changes can be applied to the element. For a full description of these states and their characteristics, see [Element States](element-states).

All non-list-like properties can be altered simply using assignments. List-like properties are essentially JavaScript arrays, so to alter them you can just replace them or use JavaScript's built-in [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions such as `push`.

References are automatically resolved by the SDK. This means you can just assign or read references directly using fully-typed objects. For each property that refers to a concept in another unit, there is also a read-only property available with `<propertyName>QualifiedName` (or `<propertyName>QualifiedNames` for list-like properties) that gives the string representation of the references.

The following example function creates a new entity with an attribute given a domain model:

```js
import {domainmodels} from "mendixmodelsdk";

function createEntitiy(domainModel : domainmodels.DomainModel, entityName : string, attributeName : string) {
	var newEntity = new domainmodels.Entity();
	newEntity.name = entityName;
	domainModel.entities.push(newEntity);

	// location on the canvas in the Mendix Modeler:
	newEntity.location = { 'x': 100, 'y': 100 };

	// new attribute (which is by default a string attribute):
	let newAttribute = new domainmodels.Attribute();
	newAttribute.name = attributeName;
	newEntity.attributes.push(newAttribute);
}
```

Continue the learning path with [Closing the server connection](closing-the-server-connection).

---
title: "Change Things in the Model"
url: /apidocs-mxsdk/mxsdk/changing-things-in-the-model/
---

## Introduction

All units and elements can be freely altered after loading as long as you adhere to the type system. The properties `id`, `container`, `structureTypeName`, `isLoaded` and `unit`, as defined on the [IStructure](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/istructure.html) object, should not be used: these are (mostly) for internal purposes.

## Creating New Units and Elements

To create new units, you need to pass the parent structural unit to the constructor.

To create new elements, use the `create` methods, as this will create an element detached from the model. Please note that after creating an element, you have to assign it to a property before it actually becomes part of your model. For example, a new `Attribute` element should be pushed onto the `attributes` array of an entity. If you want to create an element and attach it to the model directly, you can use `createIn`.

An element is always in a specific state: new, attached, detached, or deleted. The state determines what changes can be applied to the element. For a full description of these states and their characteristics, see the [Element States](#es) section below.

All non-list-like properties can be altered simply using assignments. List-like properties are essentially JavaScript arrays, so to alter them you can just replace them or use JavaScript's built-in [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions such as `push`.

References are automatically resolved by the SDK. This means you can just assign or read references directly using fully-typed objects. For each property that refers to a concept in another unit, there is also a read-only property available with `<propertyName>QualifiedName` (or `<propertyName>QualifiedNames` for list-like properties) that gives the string representation of the references.

The following example function creates a new entity with an attribute given a domain model:

```typescript
import { domainmodels } from "mendixmodelsdk";

function createEntity(domainModel: domainmodels.DomainModel, entityName: string, attributeName: string) {
    const newEntity = domainmodels.Entity.createIn(domainModel);
    newEntity.name = entityName;

    // location in the Mendix Studio Pro working area:
    newEntity.location = { x: 100, y: 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
    newAttribute.name = attributeName;
}
```

## Element States {#es}

An element can be in four different states. The state determines what can be done with the element.

### States

#### New

The *new* state signifies that an element has been created and has not yet been added to a model. A *new* element does not need to be added to a model, it can be "forgotten".

*New* elements can be added as parts of other *new* elements. They will then retain their *new* state. This only applies to elements with
the state *new*; *detached* elements cannot be added to new elements.

When an element in the *new* state is attached to a model, the element and all of its parts will get the *attached* state.

When a *new* element is added to a *detached* element, the *new* element and its parts get the state *attached*.

An element in the *new* state cannot become *detached*.

#### Attached

The *attached* state signifies that an element is part of a model or is part of a *detached* element.

When an element becomes part of a model, it gets the *attached* state. All access is allowed, as this is the "normal" situation. Rules (for example, about being required) are taken into account.

If an element gets the *attached* state, all of its parts also get the *attached* state.

#### Detached

The *detached* state signifies that an element has been part of a model and is temporarily not part of a model.

You cannot *detach* an element with the *new* state.

A *detached* element must be attached to a model again within the same (implicit) transaction.

Most access is allowed, just as in the *attached* state:

* Property access, and change are allowed
* Elements in a *detached* tree can be detached or deleted from the tree again

In contrary to the *attached* state, an element with the *detached* state cannot become *deleted*.

Rules (for example, about being required) are taken into account.

If an element is being *detached*, its parts stay in their original (*attached*) state.

A *detached* element can be attached to an *attached* element. A *detached* element cannot be attached to a *new* element; the *new* element should be attached first.

If a *detached* element is attached to a model, the element becomes *attached*. All of its parts that have the *attached* state stay in this state.

#### Deleted

The *deleted* state signifies that the element has been deleted from the model.

All write access to a *deleted* element is forbidden and will throw an error.

All the parts of a *deleted* element are also *deleted* and cannot be accessed. If an element gets the state *deleted*, all of its parts will also get the *deleted* state.

### Overview of Allowed State Changes

| Starting State | To *new*    | To *attached* | To *detached* | To *deleted* |
| -------------- | ----------- | ------------- | ------------- | ------------ |
| *new*          | -           | Allowed       | Not allowed   | Allowed      |
| *attached*     | Not allowed | -             | Allowed       | Allowed      |
| *detached*     | Not allowed | Allowed       | -             | Not allowed  |
| *deleted*      | Not allowed | Not allowed   | Not allowed   | -            |

## Next Step

Continue with [How to Close the Server Connection](/apidocs-mxsdk/mxsdk/closing-the-server-connection/).

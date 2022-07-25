---
title: "Change Things in the Model"
url: /apidocs-mxsdk/mxsdk/changing-things-in-the-model/
---

## 1 Introduction

All units and elements can be freely altered after loading as long as you adhere to the type system. The properties `id`, `container`, `structureTypeName`, `isLoaded` and `unit`, as defined on the [IStructure](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/istructure.html) object, should not be used: these are (mostly) for internal purposes.

## 2 Creating New Units & Elements

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

    // location on the canvas in the Mendix Studio Pro:
    newEntity.location = { x: 100, y: 100 };

    // new attribute (which is by default a string attribute):
    const newAttribute = domainmodels.Attribute.createIn(newEntity);
    newAttribute.name = attributeName;
}
```

## 3 Element States {#es}

An element can be in four different states. The state determines what can be done with the element.

### 3.1 States

#### 3.1.1 New

The _new_ state signifies that an element has been created and has not yet been added to a model. A _new_ element does not need to be added to a model, it can be "forgotten".

_New_ elements can be added as parts of other _new_ elements. They will then retain their _new_ state. This only applies to elements with
the state _new_; _detached_ elements cannot be added to new elements.

When an element in the _new_ state is attached to a model, the element and all of its parts will get the _attached_ state.

When a _new_ element is added to a _detached_ element, the _new_ element and its parts get the state _attached_.

An element in the _new_ state cannot become _detached_.

#### 3.1.2 Attached

The _attached_ state signifies that an element is part of a model or is part of a _detached_ element.

When an element becomes part of a model, it gets the _attached_ state. All access is allowed, as this is the "normal" situation. Rules (for example, about being required) are taken into account.

If an element gets the _attached_ state, all of its parts also get the _attached_ state.

#### 3.1.3 Detached

The _detached_ state signifies that an element has been part of a model and is temporarily not part of a model.

You cannot _detach_ an element with the _new_ state.

A _detached_ element must be attached to a model again within the same (implicit) transaction.

Most access is allowed, just as in the _attached_ state:

-   Property access, and change are allowed
-   Elements in a _detached_ tree can be detached or deleted from the tree again

In contrary to the _attached_ state, an element with the _detached_ state cannot become _deleted_.

Rules (for example, about being required) are taken into account.

If an element is being _detached_, its parts stay in their original (_attached_) state.

A _detached_ element can be attached to an _attached_ element. A _detached_ element cannot be attached to a _new_ element; the _new_ element should be attached first.

If a _detached_ element is attached to a model, the element becomes _attached_. All of its parts that have the _attached_ state stay in this state.

#### 3.1.4 Deleted

The _deleted_ state signifies that the element has been deleted from the model.

All write access to a _deleted_ element is forbidden and will throw an error.

All the parts of a _deleted_ element are also _deleted_ and cannot be accessed. If an element gets the state _deleted_, all of its parts will also get the _deleted_ state.

### 3.2 Overview of Allowed State Changes

| Starting State | To _new_    | To _attached_ | To _detached_ | To _deleted_ |
| -------------- | ----------- | ------------- | ------------- | ------------ |
| _new_          | -           | Allowed       | Not allowed   | Allowed      |
| _attached_     | Not allowed | -             | Allowed       | Allowed      |
| _detached_     | Not allowed | Allowed       | -             | Not allowed  |
| _deleted_      | Not allowed | Not allowed   | Not allowed   | -            |

## 4 Next Step

Continue with [How to Close the Server Connection](/apidocs-mxsdk/mxsdk/closing-the-server-connection/).

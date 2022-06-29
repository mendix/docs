---
title: "Work with Load Units & Elements"
url: /apidocs-mxsdk/mxsdk/loading-units-and-elements/
---

After finding your unit or element you have to obtain it in its fully-loaded form to be able to change it, or to analyze the information which is not available in just the interface. Changing an element in interface form will result in an exception being thrown.

Each element (whether in interface or full form) has an `isLoaded` property and `load` and `asLoaded` functions. The [`isLoaded`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/istructure.html#isloaded) property indicates whether this element is fully loaded already. In practice you should never need to test its value, but simply make sure that you always `load` a unit/element first.

The [`load`](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/iabstractelement.html#load) interface loads the element or unit fully. This process is asynchronous, so the fully-loaded object will be passed to the callback passed to the `load` function. In javascript terms, the fully-loaded object is actually the very same instance as the interface, but it is passed into the callback as parameter nonetheless, for convenience. The parameter is upcast to the full, non-interface type so that type system (for example, that of TypeScript or your smart IDE) allows access to all members. `load` always fetches the complete unit, even if you only called it on a specific element. Load always returns units from the local cache if they have already been loaded before.

Since a unit might already have been loaded before, you are also allowed to use `asLoaded` on an element/unit without arguments in which case it just acts as an upcast from the interface type to the full type. But beware: if the unit that contains that element was not loaded before, an exception will be thrown.

The following (slightly) contrived example demonstrates the behavior of `load`. The type information is made explicit in this example for demonstration purposes, but you can just omit this code since the TypeScript compiler will infer it. Note that this example is contrived: a normal flow would be to call `load` on the `domainModel` and work with the fully-loaded domain model inside its callback.

```ts
import {domainmodels} from "mendixmodelsdk";

const model = workingCopy.model();

// at first, only interfaces are available:
const domainModel = model.allDomainModels()[0];
const entity1Interface = domainModel.entities[0];

console.log(entity1Interface.isLoaded); // ==> false

entity1Interface.load((entity1) => {
    // entity1 is now the fully-loaded entitiy of type domainmodels.Entity
    console.log(entity1.isLoaded); // ==> true
    console.log(entity1Interface === entity1); // ==> true

    // loading the entity actually loaded the complete domain model unit:
    console.log(domainModel.isLoaded); // prints true
    // ... so we can cast it as a fully loaded domainModel:
    const fullDomainModel = domainModel.asLoaded();

    // In fully-loaded units, all sub elements also have the fully-loaded types,
    // while in interfaces all sub objects are interfaces as well.
    const entity2: domainmodels.Entity = fullDomainModel.entities[1];
});
```
{{% alert color="info" %}}

 You can also load units or elements using the convenience method `loadAsPromise`, which is available in the Mendix Platform SDK as a way to load and get `promise` as an output instead of having to use a callback function.

{{% /alert %}}

Continue with [How to Generate Code from the Model](/apidocs-mxsdk/mxsdk/generating-code-from-the-model/).

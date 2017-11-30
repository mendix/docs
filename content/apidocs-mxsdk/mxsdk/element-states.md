---
title: "Element States"
parent: "changing-things-in-the-model"
---

An element can be in four different states. The state determines what can be done with the element.

## States

### New

The *new* state signifies that an element has been created and has not yet been added to a model. A *new* element does not need to be added to a model, it can be "forgotten".

*New* elements can be added as parts of other *new* elements. They will then retain their *new* state. This only applies to elements with
the state *new*; *detached* elements cannot be added to new elements.

When an element in the *new* state is attached to a model, the element and all of its parts will get the *attached* state.

When a *new* element is added to a *detached* element, the *new* element and its parts get the state *attached*.

An element in the *new* state cannot become *detached*.

### Attached

The *attached* state signifies that an element is part of a model or is part of a *detached* element.

When an element becomes part of a model, it gets the *attached* state. All access is allowed, as this is the "normal" situation. Rules (for example, about being required) are taken into account.

If an element gets the *attached* state, all of its parts also get the *attached* state.

### Detached

The *detached* state signifies that an element has been part of a model and is temporarily not part of a model.

You cannot *detach* an element with the *new* state.

A *detached* element must be attached to a model again within the same (implicit) transaction.

All access is allowed, just as in the *attached* state:

* Deletion, property access, and change are allowed
* Elements in a *detached* tree can be detached or deleted from the tree again

Rules (for example, about being required) are taken into account.

If an element is being *detached*, its parts stay in their original (*attached*) state.

A *detached* element can be attached to an *attached* element. A *detached* element cannot be attached to a *new* element; the *new* element should be attached first.

If a *detached* element is attached to a model, the element becomes *attached*. All of its parts that have the *attached* state stay in this state.

### Deleted

The *deleted* state signifies that the element has been deleted from the model.

All write access to a *deleted* element is forbidden and will throw an error.

All the parts of a *deleted* element are also *deleted* and cannot be accessed. If an element gets the state *deleted*, all of its parts will also get the *deleted* state.

## Overview of Allowed State Changes

| Starting State | To *new*    | To *attached* | To *detached* | To *deleted* |
|---|---|---|---|---|
| *new*       | -           | Allowed       | Not allowed   | Allowed |
| *attached*  | Not allowed | -             | Allowed       | Allowed |
| *detached*  | Not allowed | Allowed       | -             | Allowed |
| *deleted*   | Not allowed | Not allowed   | Not allowed   | -       |

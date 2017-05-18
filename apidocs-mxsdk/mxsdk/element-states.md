---
title: "Element States"
space: "API & SDK"
parent: "your-learning-path-for-the-mendix-sdk"
---
# Element States

Elements can be in four different states.
The states determine what can be done with the elements.

## New

The *new* state signifies that an element has been created and has
not yet been added to a model.
A *new* element does not need to be added to a model,
it can be "forgotten".
New elements can be added as parts of other new elements,
they will then retain their *new* state. This only applies to elements with
state *new*, *detached* elements can't be added to new elements.

When an element in state *new* is attached to a model,
the element and all its parts will get the *attached* state.

When a *new* element is added to a *detached* element,
the new element and its parts get the state *attached*.

An element in the *new* state cannot become *detached*.

## Attached

The *attached* state signifies that an element is part of a model,
or is part of a *detached* element.
When an element becomes part of a model, it gets the *attached* state.
All access is allowed, this is the "normal" situation.
Rules about being required etc. are taken into account.

If an element gets the *attached* state, all its parts also
get the *attached* state.

## Detached

The *detached* state signifies that an element has been part of a model,
and is temporarily not part of a model.
It's not allowed to *detach* an element with state *new*.

A *detached* element must be attached to a model again within the same (implicit) transaction.

All access is allowed, just as in the *attached* state.

- A *detached* element can be deleted,
- Property access and change is allowed,
- Elements in a *detached* tree can be detached or deleted from the tree again.

Rules about being required etc. are taken into account.

If an element is being *detached*, its parts stay in their original
(*attached*) state.

A *detached* element can be attached to an *attached* element.
A *detached* element cannot be attached to a *new* element;
the *new* element should be attached first.

If a *detached* element is attached to a model, the element becomes *attached*.
All its parts that have the *attached* state stay in this state.

## Deleted

The *deleted* state signifies that the element has been deleted from the model.

All write access to a *deleted* element is forbidden and will throw an error.

All parts of a *deleted* element are also *deleted* and cannot be accessed either.
If an element gets the state *deleted*, all its part will also
get the *deleted* state.

# Overview of Allowed State Changes

| start state | to *new*    | to *attached* | to *detached* | to *deleted* |
|---|---|---|---|---|
| *new*       |             | allowed       | not allowed   | allowed |
| *attached*  | not allowed |               |     allowed   | allowed |
| *detached*  | not allowed | allowed       |               | allowed |
| *deleted*   | not allowed | not allowed   | not allowed   |         |

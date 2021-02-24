---
title: "9.0"
parent: "metamodel-9"
---

## 9.0.4

Release date: February 16th, 2021

### Microflows

#### LoopedActivity (Element) {#loopedactivity}

We are extending our `LoopedActivity` to support [While loops](/refguide/loop#while) in addition to [For each loops](/refguide/loop#for-each). To represent this in the metamodel, we removed the `iteratedListVariableName` and `loopVariableName` properties and added a new property `loopSource` of type `LoopSource` (abstract element).

There are currently two types of loop sources available:
* `IterableList` – represents the existing behavior where the loop is executed once for each element of the specified list
 * `IterableList.listVariableName` – corresponds to the old property `iteratedListVariableName`
 * `IterableList.variableName` – corresponds to the old property `loopVariableName`
* `WhileLoopCondition` – represents the new behavior where the loop is executed while an expression evaluates to `true`
 * `WhileLoopCondition.whileExpression` – the expression evaluated at the start of each iteration

#### LoopSource, IterableList & WhileLoopCondition (Elements)

* We introduced these elements. For details, see the [LoopedActivity](#loopedactivity) section above.

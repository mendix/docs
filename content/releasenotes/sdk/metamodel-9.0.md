---
title: "9.0"
parent: "metamodel-9"
---

## 9.0.4

Release date: February 16th, 2021

### Microflows

#### LoopedActivity (Element)

We are extending our Looped Activity to support while loops in addition to for-each loops. To represent this in the metamodel, we removed the properties `iteratedListVariableName` and `loopVariableName` and added a new property `loopSource` of type `LoopSource` (abstract element).

There are currently two types of loop sources available:
* `IterableList`: this represents the existing behavior where the loop is executed once for each element of the specified list.
  * `IterableList.listVariableName` corresponds to the old property `iteratedListVariableName`.
  * `IterableList.variableName` corresponds to the old property `loopVariableName`.
* `WhileLoopCondition`: this represents the new behavior where the loop is executed while an expression evaluates to `true`.
  * `WhileLoopCondition.whileExpression` is the expression that is evaluated at the start of each iteration.

#### LoopSource, IterableList & WhileLoopCondition (Elements)

* We introduced these elements. See LoopedActivity above for more information.

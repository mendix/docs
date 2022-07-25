---
title: "If Expressions"
url: /refguide/if-expressions/
weight: 60
tags: ["studio pro", "if expression", "expression", "if statement", "expressions"]
---

## 1 Introduction

If expressions can be used to define conditional actions in expressions. The correct syntax is the following:

if _`<condition>`_ then _`<a value>`_ else _`<other value>`_

## 2 Example

Using the following statement as the expression of a Change variable activity for a string value:

```java
if 7 > 6 then 'correct' else 'incorrect'
```

will set the value of the variable to `correct`.

---
title: "If Expressions"
url: /refguide8/if-expressions/
weight: 60
---

## Introduction

If expressions can be used to define conditional actions in expressions. The correct syntax is the following:

if `<condition>` then `<a value>` else `<other value>`

## Example

Using the following statement as the expression of a Change variable activity for a string value:

```java
if 7 > 6 then 'correct' else 'incorrect'
```

will set the value of the variable to `correct`.

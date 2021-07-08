---
title: "If Expressions"
parent: "expressions"
menu_order: 60
tags: ["studio pro", "if expression", "expression", "if statement", "expressions"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/if-expressions.pdf).
{{% /alert %}}

## 1 Introduction

If expressions can be used to define conditional actions in expressions. The correct syntax is the following:

if _`<condition>`_ then _`<a value>`_ else _`<other value>`_

## 2 Example

Using the following statement as the expression of a Change variable activity for a string value:

```java
if 7 > 6 then 'correct' else 'incorrect'
```

will set the value of the variable to `correct`.

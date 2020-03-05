---
title: "Sequence Flow"
parent: "application-logic"
menu_order: 90
tags: ["studio pro", "condition value", "microflow"]
---

## 1 Introduction

A sequence flow is an arrow that links events, activities, decisions and merges with each other. Hereby it defines the order of execution. Flows always flow in one direction where elements follow each other up one by one. Decisions always lead to one direction, so it is not possible that multiple flows take place simultaneously.

{{% alert type="info" %}}

When you have two activities that you want to link together a sequence flow is used.

![](attachments/819203/917971.png)

{{% /alert %}}

## 2 Condition Value

The **Condition value** describes which direction should be followed based on the outcome of a [decision](decision) or an [object type decision](object-type-decision).

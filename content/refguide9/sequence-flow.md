---
title: "Sequence Flow"
parent: "application-logic"
menu_order: 30
tags: ["studio pro", "sequence flow", "microflow"]
---

## 1 Introduction

A sequence flow is a flow that is shown an arrow that links elements (events, activities, decisions, etc.) with each other. Hereby it defines the order of execution. Flows always flow in one direction where elements follow each other up one by one. Decisions always lead to one direction, so it is not possible that multiple flows take place simultaneously.

When you have two activities that you want to link together a sequence flow is used.

![](attachments/sequence-flow/sequence-flow.png)

## 2 Condition Value

The **Condition value** describes which direction should be followed based on the outcome of a [decision](decision) or an [object type decision](object-type-decision).

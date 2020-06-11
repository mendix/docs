---
title: "Rules"
parent: "resources"
menu_order: 30
tags: ["Microflow", "Nanoflow", "Decision", "Logic"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A rule is a special kind of microflow. Its result should be an enumeration or a Boolean and it can be used in a [decision](decision) to make a decision based on that result. The idea is that complicated decisions can be consolidated in rules and reused in various places.

## 2 Differences from Microflows

Rules are very similar to microflows; see the documentation on [Microflows](microflows) for more information on how to build a rule. There are only a few differences between rules and microflows:

*   A rule can only be used in a decision
*   The return type has to be Boolean or enumeration
*   A rule cannot change data in the database; the actions to create, delete, change and rollback objects are not available in rules
*   A rule cannot interact with the client; the actions to show or close forms, show messages, send validation feedback and download files are not available in rules
*   A rule cannot call web services, generate documents or import XML

## 3 Read More

* [Microflows](microflows)
* [Decision](decision)

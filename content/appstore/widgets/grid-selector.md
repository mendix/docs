---
title: "Grid Selector"
category: "Widgets"
description: "Describes the configuration and usage of the Grid Selector widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "grid selector", "platform support"]
draft: true
---

## 1 Introduction

The [Grid Selector](https://appstore.home.mendix.com/link/app/266/) creates a grid that consists of a list of objects to the left and one at the top. The check boxes can be used to set the reference connecting the objects. The widget thus enables quickly setting a lot of references over or for a lot of objects.

### 1.1 Features

* Supports both references (radio buttons) and reference sets (check boxes)
* An on-change action that is triggered for each change
* Constraints for both entities
* Paging on the left entities
* Keyboard support with the arrow keys for navigating and the spacebar for clearing a selection

## 2 Configuration

The on-change microflow should be set up to commit the object if a commit is required. The widget does not commit anything itself. Use the radio-button version for setting references and the check-box version for setting reference sets.

## 3 Properties

### 3.1 On-Change Microflow

This is the microflow executed when a check box or radio button is cleared. This receives the left entity as an input parameter.

### 3.2 Items per Page

This is the amount of items that should be shown on the left for paging. Use **0** to disable paging and show all the objects.

### 3.3 Read-Only

This sets the entire grid to a read-only view.

### 3.4 Left Entity

This is the entity of the objects that will be displayed on the left side of the grid.

### 3.5 Left Constraint

This is the constraint to apply to these objects.

### 3.6 Left Display Attribute

This is the attribute displayed for each object.

### 3.7 Left Sort Attribute

This is the attribute on which the objects are sorted.

### 3.8 Left Sort Order

This is the order on which the objects are sorted.

### 3.9 Width in Percentage

You can set the width of the first left column here. Using **0** makes it resize with the other columns.

### 3.10 Top Entity

This is the reference or reference set that is used.

### 3.11 Top Constraint

This is the constraint to apply to these objects.

### 3.12 Top Display Attribute

This is the attribute displayed for each object.

### 3.13 Top Sort Attribute

This is the attribute on which the objects are sorted.

### 3.14 Top Sort Order

This is the order on which the objects are sorted.

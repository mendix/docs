---
title: "Grid Selector"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Grid Selector](https://appstore.home.mendix.com/link/app/266/) creates a grid, consisting of a list of objects to the left and one at the top. The checkboxes can then be used to set the reference connecting the two. It lets you quickly set a lot of references over/for a lot of objects

Supports both references (radiobuttons) and referencesets (checkboxes).
Contributing

For more information on contributing to this repository visit Contributing to a GitHub repository!
Features

Has an on change that is triggered for each change Constraints for both entities Paging on the left entities Keyboard support with the arrow keys and spacebar to (de)select
Configuration

The onchange microflow should be set up to commit the object if a commit is required. The widget does not commit anything itself. Use the Radiobutton version for setting references and the Checkbox version for setting referencesets.
Properties
Onchange microfow

The microflow that is executed when a checkbox or radiobutton is (de)selected. Receives the left entity as input parameter.
Items per page

Amount of items that should be shown on the left for paging. You can use 0 to disable paging and show all objects.
Read-only

Sets the entire grid to a read-only view.
Left entity

The entity of the objects that will be displayed on the left side of the grid.
Left constraint

The constraint to apply to these objects.
Left display attribute

The attribute that is displayed for each object.
Left sort attribute

The attribute that the objects are sorted on.
Left sort order

The order the objects are sorted on.
Width in percentage

You can set the width of the first left column here. Using 0 makes it resizes with the other columns.
Top entity

The reference or reference set that is used.
Top constraint

The constraint to apply to these objects.
Top display attribute

The attribute that is displayed for each object.
Top sort attribute

The attribute that the objects are sorted on.
Top sort order

The order the objects are sorted on.
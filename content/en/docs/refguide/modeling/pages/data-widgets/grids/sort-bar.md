---
title: "Sort Bar"
url: /refguide/sort-bar/
weight: 50
tags: ["studio pro", "sort bar", "grid"]
aliases:
    - /refguide/Sort+Bar.html
    - /refguide/Sort+Bar
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A sort bar allows end-user to sort items in a [data grid](/refguide/data-grid/), [template grid](/refguide/template-grid/) or a [reference set selector](/refguide/reference-set-selector/). 

The sort bar contains sort items. Each sort item specifies what attribute to sort on and in what direction (ascending or descending). First, the contents of the grid are sorted on the first item. If two rows are the same with respect to this sort item, the second item will be used, and so on. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

If you do not specify any sort items, the objects will appear in the order in which they were created.

{{% alert color="info" %}}
There are special cases for ordering behavior. For more details, refer to [Order By Behavior](/refguide/ordering-behavior/).
{{% /alert %}}

## 2 Read More

* [Data Grid](/refguide/data-grid/)
* [Template Grid](/refguide/template-grid/)
* [Reference Set Selector](/refguide/reference-set-selector/)

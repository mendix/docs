---
title: "Sort Bar"
parent: "grids"
menu_order: 50
tags: ["studio pro", "sort bar, "sort-bar", "grid"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The sort bar contains sort items. Each sort item specifies what attribute to sort on and in what direction (ascending or descending). First, the contents of the grid will be sorted on the first item. If two rows are the same with respect to this sort item, the second item will be used, and so on. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

If you do not specify any sort items, the objects will appear in the order in which they were created.

For default ordering behavior of NULL values, refer to [NULL Order Behavior](null-ordering-behavior).
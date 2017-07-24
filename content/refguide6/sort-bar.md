---
title: "Sort Bar"
parent: "data-grid"
---


The sort bar contains sort items. Each sort item specifies what attribute to sort on and in what direction (ascending or descending). First the contents of the grid will be sorted on the first item; if two rows are the same with respect to this sort item the second item will be used et cetera. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

If you specify no sort items, the objects will appear in the order in which they were created. Note: in Mendix 6.3 and before, you were required to specify at least one sort item.

**Note:** For default ordering behavior of NULL values refer to [this documentation](null-ordering-behavior).

---
title: "Sort Order"
url: /refguide/sort-order/
weight: 50
aliases:
    - /refguide/Sort+Bar.html
    - /refguide/Sort+Bar
    - /refguide/Sort+Order.html
    - /refguide/Sort+Order
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A sort order allows you to sort items in a [data grid](/refguide/data-grid/), [template grid](/refguide/template-grid/), [list view](/refguide/list-view/) or a [reference set selector](/refguide/reference-set-selector/).

You can specify what attribute to sort on and in what direction (ascending or descending). First, the contents of the grid are sorted on the first item. If two rows are the same with respect to this sort item, the second item will be used, and so on. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

If you do not specify any sort items, the objects will appear in the order in which they were created.

{{% alert color="info" %}}
There are special cases for ordering behavior. For more details, refer to [Order By Behavior](/refguide/ordering-behavior/).
{{% /alert %}}

## Sort Bar{#sort-bar}

The sort order can be configured from the properties dialog box or properties panel. In structure mode, it can also be configured with the sort bar.

## Read More

* [Data Grid](/refguide/data-grid/)
* [Template Grid](/refguide/template-grid/)
* [Reference Set Selector](/refguide/reference-set-selector/)

---
title: "Sort Bar"
url: /refguide8/sort-bar/
weight: 50
tags: ["studio pro", "sort bar", "grid"]
aliases:
    - /refguide8/Sort+Bar.html
    - /refguide8/Sort+Bar
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/sort-bar.pdf).
{{% /alert %}}

## 1 Introduction

A sort bar allows end-user to sort items in a [data grid](/refguide8/data-grid/), [template grid](/refguide8/template-grid/) or a [reference set selector](/refguide8/reference-set-selector/). 

The sort bar contains sort items. Each sort item specifies what attribute to sort on and in what direction (ascending or descending). First, the contents of the grid are sorted on the first item. If two rows are the same with respect to this sort item, the second item will be used, and so on. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

If you do not specify any sort items, the objects will appear in the order in which they were created.

{{% alert color="info" %}}
There are special cases for ordering behavior. For more details, see [Order By Behavior](/refguide8/ordering-behavior/).
{{% /alert %}}

## 2 Read More

* [Data Grid](/refguide8/data-grid/)
* [Template Grid](/refguide8/template-grid/)
* [Reference Set Selector](/refguide8/reference-set-selector/)

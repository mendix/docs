---
title: "Data Containers"
url: /refguide9/data-widgets/
weight: 15
---

## Introduction

Data containers display contents of one object or a list of objects. 

The Data containers category contains the following widgets:

* [Data view](/refguide9/data-view/) – This widget shows the contents of exactly one object. If, for example, you want to show details of a single program item, you would use a data view for this:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/data-view-example.png"   width="500"  class="no-border" >}}

* [Data grid](/refguide9/data-grid/) – This widget shows a list of objects in a table format. For example, a data grid can show all the orders a customer has placed. Using controls provided by the data grid you can browse, search, and edit those objects.

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/data-grid-example.png"   width="450"  class="no-border" >}}

* [Template grid](/refguide9/template-grid/) – This widget shows a list of objects in a tile view. For example, a template grid can show a list of employees with their profile pictures. Using controls provided by the template grid you can browse, search, and manipulate those objects.

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/template-grid-example.png"   width="450"  class="no-border" >}}

* [List view](/refguide9/list-view/) – This widget shows a list of objects. For example, you can display list of all profiles using a list view. 

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/list-view-example.png"   width="450"  class="no-border" >}}

A [snippet](/refguide9/snippet/) can also function as a data container when it has at least one snippet parameter. Unlike other data containers, a snippet never exposes a `$currentObject` variable because it can represent multiple independent objects.

## Performing Basic Functions

{{% snippet file="/static/_includes/refguide9/performing-basic-functions-widgets.md" %}}

## Read More

* [Page](/refguide9/page/)
* [Pages](/refguide9/pages/)
* [Snippet](/refguide9/snippet/)

---
title: "Data View (Document Template)"
url: /refguide8/data-view-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Data+View+(document+template).html
    - /refguide8/data-view-(document-template).html
    - /refguide8/Data+View+(document+template)
    - /refguide8/data-view-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/data-view-document-template.pdf).
{{% /alert %}}

## 1 Introduction

The data view is used for showing the contents of exactly one object. If, for example, you want to show details of a single orderline this is most easily achieved with a data view. The data view typically contains a table with static labels and dynamic data widgets like a dynamic label. In more complex templates, a data view can contain data grids and other data views for related objects.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/data-view-document-template/918139.png" >}}

A data view showing orderline information.

{{% /alert %}}

## 2 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

## 3 Data Source Properties

The data source properties determine which objects will be shown in the data grid. The list of objects in the data grid is constrained by the following mechanisms:

1.  For top-level data grids, the objects passed in the microflow calling the document export action are shown.
2.  For nested data grids, if an entity path is used, only the objects reachable by following the path from the containing object are shown.
3.  For nested data grids, if a microflow is used, the objects returned by the microflow are shown.

### 3.1 Entity (Path)

The entity (path) property specifies of which entity an instance will be shown in the data view. A top-level data view is always connected to an entity. A nested data view can either be connected to an entity or to an entity path starting in the entity of the containing data view. The entity path can follow associations irrespective of type and ownership.

### 3.2 Microflow

When a nested data view is connected to an entity, a microflow is needed to retrieve the data. The input parameter of these microflows is always the object of the containing data view and the output is an object with the entity type of the nested data view.

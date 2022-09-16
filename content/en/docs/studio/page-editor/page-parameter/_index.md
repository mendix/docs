---
title: "Page Parameter"
url: /studio/page-parameter/
description: "Describes page parameters in Mendix Studio."
weight: 10
tags: ["studio", "parameter", "page parameter", "page"]
---

## 1 Introduction 

A page parameter is an input that needs to be passed from the calling page or a microflow to the current page. Page parameters determine information that can be re-used on the page. For example, if you would like to build an **Employee_Detail_Edit** page, then the page will have a parameter **Employee**. When calling the page a specific Employee object needs to be passed in order to be able to show the corresponding Employee data.

Page parameters provide context to data views and allow you using multiple objects that do not have an association. 

{{< figure src="/attachments/studio/page-editor/page-parameter/page-parameters.png" >}}

You can pass multiple objects when opening a page same way microflows do. For example, you can add multiple top-level data views, each connected to a different parameter and displaying data from their entities. Additionally, you can directly select associations of a page parameter.

## 2 Properties

Parameter consists of the following general properties:

* [Entity](#entity)
* [Name](#name)

### 2.1 Entity {#entity}

The entity of the parameter. When the page is opened, an object of this entity type should be passed to it. This object can be used by data views, i.e. data from this entity will be shown in a data view. 

### 2.2 Name {#name}

The name of the parameter, displayed in blue. 

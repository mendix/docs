---
title: "Page Parameter"
url: /studio/page-parameter/
description: "Describes page parameters in Mendix Studio."
weight: 10
tags: ["studio", "parameter", "page parameter", "page"]
---

## 1 Introduction 

Page parameters allow you using multiple objects on a page that do not have an association. You can pass multiple objects when opening a page same as with microflows. 

For example, you can add multiple top-level data views, each connected to a different parameter. Additionally, you can directly select associations of a page parameter, reducing the need for an additional data view just to be able to follow the association, therefore reducing complexity of the page.

## 2 Properties

Parameter consists of the following general properties:

* [Entity](#entity)
* [Name](#name)

### 2.1 Entity {#entity}

The entity of the parameter. When the page is opened, the selected object is passed to it. This object can be used by data containers (data view, list view, and data grid), i.e. data from this entity will be shown in the data view. 

### 2.2 Name {#name}

The name of the parameter, displayed in blue. 

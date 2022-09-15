---
title: "Page Parameter"
url: /studio/page-parameter/
description: "Describes page parameters in Mendix Studio."
weight: 10
tags: ["studio", "parameter", "page parameter", "page"]
---

## 1 Introduction 

Page parameters provide context to data views and allow you using multiple objects that do not have an association. You can pass multiple objects when opening a page same way microflows do. For example, you can add multiple top-level data views, each connected to a different parameter and displaying data from their entities. Additionally, you can directly select associations of a page parameter.

## 2 Properties

Parameter consists of the following general properties:

* [Entity](#entity)
* [Name](#name)

### 2.1 Entity {#entity}

The entity of the parameter. When the page is opened, the selected object is passed to it. This object can be used by data views, i.e. data from this entity will be shown in a data view. 

### 2.2 Name {#name}

The name of the parameter, displayed in blue. 

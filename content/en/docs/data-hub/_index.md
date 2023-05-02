---
title: "Data Hub Guide"
url: /data-hub/
description: "Describes Mendix Data Hub for finding and sharing enterprise data assets."
weight: 40
no_list: false
description_list: true
cascade:
    - space: "Data Hub Guide"
    - mendix_version: 10
tags: ["data hub", "data hub catalog", "data hub landscape", "external entities", "external users"]
aliases:
    - /data-hub/data-catalog/index.html
---

## 1 Introduction

Studio Pro [8.14](/releasenotes/studio-pro/8.14/) supports integration with the data available from the many applications in an organization. Collectively called *Data Hub*, this functionality enables reliable data sources to be located centrally from one point and for users to connect to them through it. 

## 2 Overview of Mendix Data Hub

Mendix Data Hub has components to enable the flexible sharing of datasets:

1. Apps and other software expose datasets in REST OData services. These are used with [external entities](/refguide/external-entities/). The data is stored in the respective source apps.
2. In Studio Pro, exposed OData services (or entity sets as they are named in Studio Pro) are automatically registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/) when your app is deployed. OData services from other applications can also be manually registered in the Data Hub Catalog.
3. Search in the Data Hub Catalog or **Data Hub** pane in Studio Pro to find shared data assets to use.
4. Drag and drop to consume datasets in Studio Pro.  
5. The consuming application directly connects to the source system (as defined in the published service metadata) to use the data associated with the consumed dataset.

## 3 Roles in Data Hub {#data-hub-roles}

Data Hub can be used by anyone with a Mendix license and a Data Hub license. See [User Roles](/data-hub/data-hub-catalog/manage-data-sources/user-roles/) for detailed information on user roles in the Data Hub Catalog.

## 4 Guide Categories

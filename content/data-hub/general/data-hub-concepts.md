---
title: "Concepts behind Mendix Data Hub and Data Sharing (Working title)"
category: "General Info"
menu_order: 12
description: "Describes terminology and concepts"
tags: ["data hub", "microservices", "curator", "custom owner", "administration"]

---

## 

# 1 Introduction

Describes concepts behind using the Mendix Data Hub and sharing datasets.

R



#  2 Overview of using Data Hub to share data sources 

A visual example:

![image-20210313122809029](./attachments/introducingDH/overview-processes.png)

* Customer information is created in the Sales App. 

* Different parts of that information needs to be used in other Apps -**Delivery App** and **Invoicing APP**.

- Each app builds around the shared data with their own Customer information relevant to their particular scope of functionality
- Changes to the shared dataset from **Sales APP** will be reflected in the other apps.  



## 2.2 Using Data Hub to Share Data - an example

1. Developer of **Sales APP** has Customer data in his App which he wants share with the rest of the company.  Publishes useful groups of entities (datasets) that would be useful in an **OData REST service**. 
   1. The developer organizes the published services to group the **datasets** into relevant services oriented towards specific use cases. Not all of the information is necessary, or should be shared, so only entities and attributes of these entities are published.
   2. Developers of **Delivery APP** and **Invoicing APP** discover the **Customer* datasets in the organizations Data Hub. 
      1. They qualify the datasets by examining the originating app and the *quality* of the data.  
      2. In Mendix Studio Pro each developer drags the required entities from the published services into the Domain Model and can immediately start using them in their app modeling. The service contract is consumed, but only the required entities are accessed.
      3. The consumed entities can be edited to only include attributes and associations that are required for the consuming app. Other fields that can be removed. 
      4. The consumed entities are available in all Microflows and UX components as if they were part of his own Domain Model (practically removing the need to build a dedicated integration when accessing objects in other Apps that would be required when if Data Hub was not used).
   3. During run-time, when the end of **Delivery APP** and **Invoicing APP** do something that requires the **Customer** data, it is automatically retrieved from **Sales APP** in real-time. Filtering, paging and selecting in the protocol itself and only the requested fields and records are retrieved. 

This makes it simpler to use data between Apps, and the Catalog allows governance of which data is used by whom, and life cycle management informing people of changes, and with good versioning of OData contracts.

##  2.3 The Role of Data Hub

·The Catalog is the hub in the collaboration, discovery and connection of an organizations data source.   It catalogs microservices from the organization's business applications systems using OData contracts. The Data Hub can already import OData contracts from 3rd party systems such as Teamcenter, SAP & Microsoft and OData v4services from other business applications.

The Data Hub facilitates an integration mechanism, where architects and lead developers can define data that is available and what the data means. Citizen Developers?? can use the data easily, ??and where impact analysis for who uses which data is out of the box??.

In the current format OData is supported, but ??soon also e.g. REST Swagger files can be imported??, 

## 2.4 DataHub Features

The following base features of DataHub:

- Easy access to datasets in other Apps, with completely seamless filtering and paging 

- ??Easier caching of data when required, using a Microflow??

- Search and discovery of the data that has been published

- ??Governance on who can accesses what data ?? not DH but defined by the publisher

- Management of data access rules in the source (e.g. using ID propagation)

- Versioning and life cycle management of OData contracts?? publishers have to take care of that

- Automatic update of catalog when deploying an app (published services)

- Automatic registration of dependencies in catalog, always up to date landscape view

- Information on number of consumers of an API, understand when you can resign an API and who to inform 



------------------------



---
title: "Concepts behind Mendix Data Hub and Data Sharing (Working title)"
category: "General Info"
menu_order: 12
description: "Describes terminology and concepts"
tags: ["data hub catalog", "data hub", "virtual entities", "landscape", "published odata service"]

---



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

Data hub presents the data in a  visual format in Landscape and also shows the popularity of datarouces on it home page. dashboard or report.

## Popularity of Data Sources

Column and Usage popularity,  

top joins/filters/queries. 

------------------------

# Data Hub Administration

# Curation

## What is Data Curation?

Data curation is a term used for managing data and collections of that to makes it more useful for users to find the correct data discovery and to categorize and analyze it.  Traditional librarians (yes physical books) curate their collections by organizing them into different categories and indexing them so that they can be found depending on a users search requirements. Museam curators, do the same with the artifacts that they have to manage. Indexing, categorizing, and ensuring that the correct item is properly labelled, described and can be found. 

The work of a Data Hub curator is the same, managing data that originates from many sources. The role of a curator can be as extensive as the on-going management of data through its life-cycle and level of interest and usefulness to (potential) user. Curation activities include enabling data discovery and retrieval, maintaining  quality, adding value, and maintenance for re-use over a period of  time.

Data curation can also be described as the process of adding value to data. A data-driven organization will naturally want to maximize the  value of that data. Therefore, establishing people, processes and tools  for data curation should be a part of any technical manager’s plans.  This may mean establishing strict rules about which data can and should  be used, as well as putting [business rules](https://vimeo.com/197560663/b61ef781f7) or other metrics in place that apply to all data sets no matter where they physically reside.

Data curation is a necessary endeavor for any organization attempting to enable [self-service analytics](http://go.alation.com/eckerson-group-data-marketplaces-feb-2017) because it provides data consumers with a faster on-ramp to the data  that they need to make intelligent business decisions that impact the  enterprise.

## 

## What is the Role of a Data Curator?

Curation activities are carried out by the Data Hub Administrator and assigned Data Hub Curators. In addition, data source owners also have curation rights over the datasets that they own. 

# Owners

Business Owners and Technical Owners.

n the Data Hub Catalog, the search details for a service include a **Technical Owner** (for technical inquiries) and the **Business Owner** who is responsible for the data sets. Owners who are registered Mendix platform users can curate their assets.

## 

# Data Sources and Data Sets

These data sets are the sets of data that are shared.  

Being able to present the data  in an effective manner is also extremely important. 



# Consume

Registered assets in the Data Hub Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling). These external data sources are represented in the domain model as *external entities* which can be used with local entities with the difference that external entities connect to data that is maintained in the source application and therefore can only be read or consumed. Changes to this data is done in the originating apps.

## Entitysets

To make data from your apps available to others, you can publish the datasets in an **OData service** and register it in the Data Hub. In a Mendix app, the datasets are the **Entity sets** for a defined **Entity**. Using this REST-based protocol, metadata contracts defining the structure and documentation of the datasets that are included are registered. Further details such as the location of the data associated with a registered dataset are also captured: for Mendix app deploying to the Mendix cloud this information is taken during the deployment process. This information is also obtained during the process of [manually registering data sources from an enterprise application](/data-hub/data-hub-catalog/register#registration-form). 

## Information Available in the Data Hub Catalog

## Assets

Assets is the collective term for all items that are registered in the Catalog - apps, data sources, data sets, registered attributes and their associations. 

##  Endpoints and URLS

All registered assets (apps, data sources, datasets) are defined by their endpoints (URLs) in the Catalog. 

The endpoint of the service is accessed by the consuming app. 

The service URLs provide the locations of the service contract. In turn, these define the endpoints for exposed datasets (or entity sets) and attributes and thereby access to the associated datasets by the consuming apps. You obtain data source and dataset URI's from the search details for integration of the resource in other BI applications. 

## Environment

Apps and data source endpoints are deployed to environments. To complete the precise location of an asset, the environment of the endpoints is critical. 

The location of the OData service must also include the environment where the publishing app is deployed. Connecting to a data source in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a non-production test or acceptance environment. However, the final production app will have to access the datasets from the production environment - the actual live or working data. In the Data Hub, the **Environment Type** is also specified which indicates to users the quality of the data. 

{{% alert type="info" %}}
You can filter the search results by environment type in the Data Hub Catalog (**Production**, **Non-production**, and the Mendix Free App environment or **Sandbox**). In the [Data Hub pane](/refguide/data-hub-pane) of Studio Pro, you can expand search results to include non-production environments. 
{{% /alert %}}

The Data Hub Catalog is a register of apps that are deployed to a particular environment and the services (or data sources as they are known in Data Hub) published from the apps deployed to the environment. This means that the Catalog registers the version of a service running in a specific environment. The environment also indicates the quality of the dataset that is available. Shared datasets that are available from a *production environment* will have production-level data, while those in non-production environments (*acceptance*, *development*) could be populated with data that may not be reliable for building stable apps and be useful for doing development work.

The search results will show these data source endpoints (which is the combination of the OData service version deployed on a specific environment). Therefore, if a version of a service is deployed on both a test and acceptance environment, a search on the service name in the Data Hub Catalog will have two hits. 

The environment is therefore a major component of the definition and forms part of the URL for the endpoint being consumed. This, in combination with the OData version number, provides the link to the correct data for the datasets that are exposed.

{{% alert type="info" %}}
By default, search results in the Data Hub Catalog are filtered to show only hits in the Production environment. You can extend the search to **Non-production** or **Mendix Free App (Sandbox)** environments by checking them in the search pane **Add Filter** list. For more details, see [Filters](#filter).
{{% /alert %}}

## Published OData Service

At the service endpoint are the OData service metadata contract files that define the service. Available data sources are registered in the Data Hub Catalog by exposing  datasets in the [published OData service](/refguide/published-odata-services). These metadata contracts define the exposed attributes and associations and the links for connecting to the data they define. 

The contract of the published OData service (the *$metadata* document) contains the details of what is exposed in the service. This includes the metadata of the exposed datasets (or entity sets in Mendix Studio Pro) and their exposed attributes, associations, types, and accessibility. This information about the registered OData service is shown in the search details. 

OData Protocol

## Service Versions

Every published OData service or data source as they are known as in the Data Hub Catalog has a version number, and apps that consume a datasource will consume from a specific version. Updates and changes to a service will be indicated by a change in the version number if good practice is followed by the data source originators. This means that there may be several versions of a registered data source available in the catalog and they will all be listed as separate items in the search results for the same-named data source.

The version number of the OData service contracts is also included to uniquely identify the asset and must be specificed in the registration and more importantly when consuming the resource. 

The contract exposed at a specific endpoint may be changed over time by the service owner, and if good practice is followed, these changes will be indicated by changing the version number. Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment. 

{{% alert type="info" %}}
If significant changes are made in the service which would break any consuming apps, then good practice dictates that the service is published with a major update in the version number and also deployed to a different endpoint. In this case the service will be listed twice for the two different endpoints. For more information see [Semantic numbering](/refguide/consumed-odata-service#semantic) in *Consumed OData Service*.
{{% /alert %}}

## Metadata

Metadata is information that defines and describes the data that is shared. The OData contract files for shared datasets are the metadata contracts of the published service.  In the Data Hub Catalog, the metadata is shown in the asset details pages and in the Metadata Panels. Search in the Catalog is performed on the metadata of the assets.

### Discoverability 

When a data source is registered, by default, it is made available to other users with the **Discoverable** setting active in the Data Hub Catalog. When this is set, all users can find it and the view details and consume it. Owners of a registered service and curators can set a data source as non-discoverable, which means it is not visible to users unless they are the owner or a curator.

###  Tags 

Tags help you to group services and datasets and categorize them (for example, by department, process, or use). You can use tags to refine the search and filter search results in the Data Hub Catalog by doing the following:

* Add tags to the service as a curate function in the Data Hub Catalog after a service is registered by service owners and [Data Hub Curators](/data-hub/#curator)
* Add different tags to the different versions of the same service, as they will be two separately registered assets in the catalog (this is also a way to make different version identifiable)
* Add tags to the datasets exposed in the service
* Add tags in the [manual registration of OData v4 services](
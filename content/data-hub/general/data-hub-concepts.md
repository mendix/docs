---
title: "Concepts behind Mendix Data Hub and Data Sharing (Working title)"
category: "General Info"
menu_order: 12
description: "Describes terminology and concepts"
tags: ["data hub catalog", "data hub", "virtual entities", "landscape", "published odata service"]

---



# 1 Introduction

Describes concepts behind using the Mendix Data Hub and sharing datasets.

Data Hub makes it simpler to use data between Apps. Catalog allows governance of which data is used by whom, and life cycle management informing people of changes, and with good versioning of OData contracts.

##  1.1 The Role of a Data Hub in an Organization

The Catalog is the hub in the collaboration, discovery and connection of an organizations data source.   It catalogs microservices from the organization's business applications systems using OData contracts. The Data Hub can already import OData contracts from 3rd party systems such as Teamcenter, SAP & Microsoft and OData v4services from other business applications.

The Data Hub facilitates an integration mechanism, where architects and lead developers can define data that is available and what the data means. Citizen Developers?? can use the data easily, ??and where impact analysis for who uses which data is out of the box??.

In the current format OData is supported, but ??soon also e.g. REST Swagger files can be imported??, 

## 1.2 DataHub Features

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

#  2 Overview of using Data Hub to share data sources 

A visual example:

![image-20210313122809029](./attachments/introducingDH/overview-processes.png)

* Customer information is created in the Sales App. 

* Different parts of that information needs to be used in other Apps -**Delivery App** and **Invoicing APP**.

- Each app builds around the shared data with their own Customer information relevant to their particular scope of functionality
- Changes to the shared dataset from **Sales APP** will be reflected in the other apps.  

## 2.2 Using Data Hub to Share Data - An Example

### 2.2.1 Creating and App and Sharing Datasets

1. Developer of **Sales APP** has Customer data in his App which he wants share with the rest of the company.  The developer publishes useful groups of entities (datasets) in an **OData v3 service**. 
2. The developer organizes the **datasets** into groups which are in different services oriented towards specific use cases. Not all of the information is necessary, or should be shared, so only the **entitysets**,  **attributes** and also the **associations**  entities are published in the services.
3. The developer assigns a **version number** to each service that is deployed in each **environment** that the app is deployed to.
4. Upon **deployment**, the services are automatically **registered** in Data Hub
5. In Data Hub, the developer who is the **technical owner** or the **curator** of the department **curates** the registered assets to enhance the **metadata** and add  **tags** that also indicate the relevancy of the data to different users. They may also indicate, for example, that datasets are the "official", "reliable" datasets by setting the sources as **validated**.
6. Developers of the **Delivery APP** and **Invoicing APP** discover the the customer datasets for their specific requirements in the Data Hub Catalog.
7. They qualify the datasets by examining the originating app and the *quality* of the data from the **Metadata** that is displayed.
8. In Mendix Studio Pro the developers, using the **Data Hub Pane**, drag the required entities from the published services into the domain model and can immediately start using them in their app modeling. The **OData service contract** is consumed, but only the required entities are accessed and displayed as **external entities** in the domain model. 
9. Depending on the stage of development, the consuming developers will data sources deployed to **non-production** environments to fully test out their modeling, and for the final deployed app, they will consume services in the  **production** environments.
10. During the app modelling, the **external entities** entities can be edited to only include attributes and associations that are required by the consuming app. Other fields that can be removed. 
11. The **consumed entities** are available in all microflows and UX components as part of the consuming apps Domain Model.
12. During run-time, when the end users of the **Delivery APP** and **Invoicing APP** do something that requires the **Customer** data, it is automatically retrieved from **Sales APP** in **real-time**. Filtering, paging and selecting in the protocol itself and only the requested fields and records are retrieved. 

### 2.2.1 Updating the Publishing App

1. When the developer of **SalesAPP** makes changes in the app such as adding attributes to entities, changing associations, deleteing entities, he must decide if the services that are currently published should be updated.
2. Using **semantic numbering** the severity of the changes are indicated to ensure that consuming apps will not "break". 
3. For **minor** version changes the developer must also decide if he deploys an updated service to the same **endpoint**, and thereby overwrite the current contracts, or if he deploys to a different endpoint.  While *every* change to consumed services should be indicated by a version change, and deployed to a different endpoint (for traceability). The following rule of thumb can also be considered:

   1.  If there if are minor *additions* which will not break any consuming apps, the new contract  *could* be deployed to the same endpoint. This will automatically update consuming apps.
   2. Any major changes and *deletions* should always be located at a different endpoint.
	In both cases, consumers should be notified. 
4. **Major** version changes should alway be indicated by a new service, deployed to a different endpoint. In this case the registration in the Catalog will show all the available versions at the different endpoints.
5. All deployments of data sources to the different endpoints must be curated to ensure that the right users can find it.
6. In Mendix Studio Pro, consumers of the data sources can then **update** the contracts of consumed when a different contract is detected at the same endpoint. When there are several versions of the same service deployed to different endpoints, the Studio Pro user can **Switch** to a different endpoint.    

# 3 OData Services, Versions and Endpoints

The Data Hub Catalog is a catalog of reigstered endpoints and the data at these endpoints.   

An **Endpoint** is the complete and unique identifier of data souce or service defined by the location of the app *in* the environment it is deployed to with the relative path of the service.  For an OData service, the relative path of the service that should include the major version number.  This is the **endpoint** that is registered and this is where the *contract* files of the service is defined. 

The schematic below shows the different endpoints that result from a service that is deployed by an app, and consumed by other apps. 

- [ ]  to be re-drawn according to design guidelines, and so that it is clear and parts can be extracted for the rest of the section.

![service versions and endpoints](./attachments/dh-concepts/service-versions-endpoints.png)



###  3.1 The Intial Situation

Looking at the the process in Detail:

![service versions1.0](./attachments/dh-concepts/service-versions-endpoints-1.png)

The app **Mendix Model 1.0**  publishes two services: 

* **Customer Service 1.0**
* **Test Service 1.0**

When this app is deployed to the **Production** environment this defines the **root URL** of the app and the services that are deployed by the app:

* **Customer Service 1.0** is published at the endpoint **pub.mendix.com/api/customer/v1**
* **Test Service 1.0** is published at the endpoint **pub.mendix.com/api/test/v1**

The app consuming these services consumes from these endpoints.

### 3.2 New Version of the App  Services Deployed to Accp

When the app is revised, a new release **Mendix Model 1.1**  that is deployed to the acceptance environment.

![service versions1.0](./attachments/dh-concepts/service-versions-endpoints-2.png) 



The app **Mendix Model 1.1**  publishes two services: 

* Customer Service 1.1 - minor changes have been made to this service so now the version number has been changed to 1.1
* Test Service 1.0 - this is unchanged from the version in the **Production** environment.

When this app is deployed to the **Accp** environment which defines the **root URL** of the app and the services that are deployed:

* **Customer Service 1.1** is published at the endpoint **pub-acccp.mendix.com/api/customer/v1**
* **Test Service 1.0** is published at the endpoint **pub-accp.mendix.com/api/test/v1**

Apps can consume from the service, deployed to the endpoints in this environment while being aware that there is a version available in the production environment.

**Note** There is now a **Test Service 1.0** deployed to the Accp environment in addition to the same version service in the production environement. They both have two different endpoints.

### 3.3 Mendix Model 1.1 Deployed to Production  



![service versions1.0](./attachments/dh-concepts/service-versions-endpoints-3.png)

------------------------

 When **Mendix Model 1.1** is deployed to the production environment, the service endpoints will now have the contract files for version 1.1 of the App. Assuming proper dev practices, no breaking changes  consumers will continue to function with the  new services:

* **Customer Service 1.1** is now published at the endpoint **pub.mendix.com/api/customer/v1**
* **Test Service 1.0** – this is unchanged from the previous version –  is now published at **pub.mendix.com/api/test/v1**.



# Curation  and Governance

## What is Data Curation?

In practice, data curation is about maintaining and  managing the metadata.  The process of data curation revolves around ingesting metadata.  Data curators not only create, manage, and  maintain data, but may also be involved in determining best practices for working with that data. 

Defining which data sources and data sets are the most useful is the job of the data curator who keeps an overview of the data sharing landscape of the organization. While some rules of  thumb and best practices apply, the data curator must make an educated  decision about which data assets are appropriate to use.

## What is the Role of a Data Curator?

The curator, maintains the assets in Data Hub. Depending on the organization, curators can be assigned to oversee registered assets for a department, by category, by function. Curation activities are carried out by the Data Hub Administrator and assigned Data Hub Curators. In addition, data source owners also have curation rights over the datasets that they own. 

## Curating Assets

Users who can curate assets in Data Hub Catalog are as follows: 

* Owners of a registered service – can curate their own services which includes those that have been set to non-**Discoverable**
* [Data Hub Curators](/data-hub/#curator) and [Data Hub Admins](/data-hub/#admin) – can curate and find all registered assets in the Catalog, discoverable and non-discoverable

Owners and Curators can also get an overview of the registered assets they own and curate from the [Curate](#curatelist) tab of Data Hub.

{{% alert type="info" %}}
Information that is added or changed during curation is stored in the Data Hub Catalog for that item. It will not be added to the OData service contract or metadata files or affect any of the values in the metadata files associated with the service or the data associated with the exposed datasets. 
{{% /alert %}}

# Owners

Business Owners and Technical Owners.

n the Data Hub Catalog, the search details for a service include a **Technical Owner** (for technical inquiries) and the **Business Owner** who is responsible for the data sets. Owners who are registered Mendix platform users can curate their assets.

By default, the **Technical Owner** for a registered asset is the user who registered the data source when registration is done through the deployment pipeline in Studio Pro or specified during manual registration or using the Data Hub API. These owners can be changed by curating the application details. The **Technical** and **Business Owners** are displayed as a link in the asset **Metadata** pane so that users can contact them. 

{{% alert type="info" %}}**Business** and **Technical Owners** have curation rights for the registered data source in the Data Hub Catalog if they are registered users on the Mendix Platform. If a custom owner is *created* with the process described in this section, the link to contact them will be displayed for the asset but this does not mean that they are able to curate it.  {{% /alert %}}

## 

# Data Sources and Data Sets

These data sets are the sets of data that are shared.  

Being able to present the data  in an effective manner is also extremely important. 

###  Services

The published OData service document (the API) is included in the module definition (in Studio Pro) and contains the metadata for linking to the data for the datasets exposed in the service.

When a new version of the OData service for an external entity is registered in the Data Hub Catalog, the consumed OData service will have to be updated in the consuming app to make use of the new features that the new version brings. For more details on updating a consumed service see the [Updating or Switching a Consumed OData Service](/refguide/consumed-odata-service#updating) section of *Consumed OData Service*.

{{% alert type="info" %}}
This is not compulsory, and users can continue to use an older version of a service unless the new version was deployed to the same service endpoint as the previous version. In Studio Pro, new versions of a service are indicated and users can choose to **Update** the service, or **Switch** to another version of the service deployed to another endpoint.
{{% /alert %}}

It is good practice that publishers of a service serve a notice of deprecation on a service version that will be replaced with a new service that may contain breaking changes which would cause the consuming app to fail. In this case the updated service should be deployed to a new service endpoint. In this case, in Studio Pro, users will get the option to **Switch** to the new version. 

# Consume

Registered assets in the Data Hub Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling). These external data sources are represented in the domain model as *external entities* which can be used with local entities with the difference that external entities connect to data that is maintained in the source application and therefore can only be read or consumed. Changes to this data is done in the originating apps.

Data can be published from an app for use by other apps through [published OData services](published-odata-services). Consumed OData services can be used to integrate external data sources in apps through [Mendix Data Hub](/data-hub/). 

Mendix Data Hub enables integration of available data sources from different sources in an organization into your Mendix apps.  OData services that are registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/) expose entities that can be dragged and dropped into your domain model through the [Data Hub pane](data-hub-pane) as external entities. The OData service document that is added to your project provides the information for retrieving the metadata for the service and exposed entities.

For further details on the consumed OData service document and updating consumed OData services in your project, see [Consumed OData Service](consumed-odata-service).

When you add an external entity to your project, you are consuming the entity from a specific version of a service (the *service endpoint*), deployed to a given environment. The metadata file or contract for the service is located at this endpoint. 

The same service, deployed to a different environment will be to a different service endpoint and this will be registered as a different asset in the Data Hub Catalog. In the following example, there are two endpoints for the **CustomerApi service version 1.1.0** which is deployed to the production environment and the **Acceptance** environment: 

ge_container width="250" %}}![2 endpoints](/Users/Ila.Gordhan/Desktop/Github Mendix User Documentation/content/refguide/attachments/consumed-odata-service/same-service-different-endpoints.png){{% /image_container %}}

When you drag the **Customer** entity from **CustomerApi version 1.0.0** deployed to the **Acceptance** environment into your project, Studio Pro will retrieve the information it requires from the contract that is at the endpoint. 

## Consumed (External) Entities

When you use an external entity from a published OData service through the **Data Hub** pane in Studio Pro, you are consuming the dataset from the service (which is published from the app deployed in a specific environment). The OData endpoint for the dataset is used in the consuming app.

External entities are read-only, so it is not possible to change te structural values of attributes or associations between two external entities.

When security is enabled for your app, you can define access rules for external entities just as you would for [persistable](/refguide/persistability#persistable) and [non-persistable](/refguide/persistability#non-persistable) entities. You can only define read access, and also access rules based on user roles (for more details, see [Security and Controlling Access to Information](security)).

You can associate external entities with local entities (both [persistable and non-persistable](/refguide/persistability). However, the external entity cannot be the owner of an association, which means that the association has to be from a local entity to the external entity in the domain model, and the value for the association [owner](/refguide/associations#ownership) must be set to **Default**.

Mendix entities that are specializations in the the originating app will be published and consumed as discrete entities that include the inherited attributes and associations. When the generalized entity is also exposed in the same service as the specialized entities the inheritance relationship will not be present in the metadata contract or when both are consumed. 

{{% alert type="warning" %}}
Associations that are inherited from a generalization will be exposed and shown when the specialization is consumed. However the same association of the generalized entity is not supported for the specialization in the same domain model The same association cannot be exposed and consumed for two different external entities in the same domain model.
{{% /alert %}}

## Datasets, Entities and Associations

Currently datsets (in Mendix entity sets) of [persistable](/refguide/persistability) entities can be exposed for sharing by another app. The dataset associated with the entity is used in the consuming app.

When selecting the entities to expose in a service, consider including associated entities so that the relationship between the data is also maintained.

When exposing Mendix entities that are generalizations and specializations in the same service the specialized entities will be defined in the published OData service as discrete entities which include the inherited attributes and associations. The inheritance relationship will not be present in the metadata contract, and also not when the entities are consumed in Mendix Studio Pro.

{{% alert type="note" %}}The association of a generailsed entity that is exposed in the same service as the specializations is not supported for both entities when consumed. The same association cannot be consumed for the two different entities. In this case, the inherited association should not be included when exposing the specialization.{{% /alert %}}

Data for external entities is not in the consuming app's database but in the database of the app that publishes the OData service.

The data set that is associated with the consumed entity is maintained in the publishing app.

Access  to the data is through the published REST OData service, with "reading" and "querying" of the data by the consuming app.

{{% alert type="info" %}}
This means that there are currently no "writes" or requests to the originating app to change data by the consuming app. 
{{% /alert %}}

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

Deployment [environments](/developerportal/deploy/environments) should be clearly defined for the organization. The environment that an app is deployed to is important and indicates the quality and reliability of the app and data. 

The OData service that is published when an app is deployed is associated with the environment that the app is deployed to. The service endpoint is therefore a combination of the application environement URL and the relative path of service contract. This provides the link to the exposed datasets. 

When exposing datasets through an OData service for use in other apps, it is important to inform users of the quality and reliability of the datasets that are available from that deployment. The deployment environment of the app (and the published data sources) provides a good indication of the data quality in combination with the **Environment Type**: **Production**, **Non-production**, and **Sandbox** (the Mendix free app environment).  

We recommend that apps sharing data should to be deployed to a reliable *production* environment where the data for the apps is valid, stable and reliably maintained. When apps are being developed, ensure that there is a representative set of data available in the test or development environments so that the services can be properly tested in the consuming apps. For example, in the case of an app for Human Resources, the developer should have representative test data with the different access levels to ensure that in consuming apps the correct data is available to users of differing access levels.

## Deployment



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

Services that are updated should be clearly documented and version numbers maintained and registered.

It is a good practice to adopt a strict convention for versioning. For example, any revisions or changes made to a service that is deployed to the same location can be indicated using a semantic numbering convention and communicated to all apps consuming the service. This means that major version numbers are assigned for significant changes to the service (for example, removing entities or attributes, or requiring input parameters that would be incompatible for the consuming apps and  result in a break or failure). You can assign minor version numbers for revisions that will "not break" consuming apps (for example, when adding new fields to the service or adding new operations), for which the clients will continue to work.

It is also good practice to expose major revisions to a data source to a new service at a different endpoint. If the publisher wants to drop support for the old service, it can be deprecated, with a grace period for consumers to transfer to the superseded service and eventually remove it when there are no more connections to the old service. The consequences of signficant changes to a service deployed to the same endpoint as the previous version may cause apps consuming from the endpoint to break.

Notify the **Business Owner** and **Technical Owners** of apps that consume datasets when there is a change to a service or entity.

### Semantic Numbering for Service Versions {#semantic}

It is important that the publishers of the services adopt a strict revision process for any changes they make to their published OData services that are consumed by other users. 

We recommend that a strict versioning system, for example semantic numbering, is used when issuing updates to services. The service version should clearly indicate the level and severity of the changes that have been made when a service is updated and deployed according to the following guidelines.

#### 4.2.1 Minor Service Updates

*Minor* service updates are, for example,  additional fields added to the service or new operations included which would not break any apps that consume the previous versions. 

If semantic numbering is used then a minor/non-breaking change to a service can be indicated by an increase in the decimal part of the version number. For example, 1.0.11, 1.0.12, 1.1, 1.2. 

Minor service updates can be deployed to the same service endpoints, thereby ensuring that all consuming apps consume the latest version of the service. 

#### 4.2.2 Major Service Updates

*Major* service updates are for example, when entities or attributes are removed, or input parameters are required, which would be incompatible for the consuming apps and result in the consuming app "breaking". 

When a major change has been made to a published service we recommend that the service is deployed to a *different endpoint* with the new service version number clearly indicating that there has been a major change—with semantic numbering this would be an incremental increase  of a whole number. 

In this case the new service will be registered in the Data Hub Catalog as a different service, and show up in the catalog as a separate asset. In the following example, there are 4 registered occurrences of the **OrderManagementService**: 

{{% image_container width="250" %}}![4 endpoints](/Users/Ila.Gordhan/Desktop/Github Mendix User Documentation/content/refguide/attachments/consumed-odata-service/consume-major-service-update-version.png){{% /image_container %}}

There is a major service update indicated by the change in the version number from **1.0.0** to **2.0.0**. Further, both versions have also been deployed to the **Acceptance** which also results in separately registered assets in the Data Hub Catalog.

{{% alert type="info" %}} 
Entities of non-Mendix OData services are identified with a key of one or more fields. If the key fields are changed in an update of the service, this will also be seen as a breaking change. 
{{% /alert %}}

## Metadata

Metadata is information that defines and describes the data that is shared. The OData contract files for shared datasets are the metadata contracts of the published service.  In the Data Hub Catalog, the metadata is shown in the asset details pages and in the Metadata Panels. Search in the Catalog is performed on the metadata of the assets.

### Discoverability 

When a data source is registered, by default, it is made available to other users with the **Discoverable** setting active in the Data Hub Catalog. When this is set, all users can find it and the view details and consume it. Owners of a registered service and curators can set a data source as non-discoverable, which means it is not visible to users unless they are the owner or a curator.

###  Discoverable

By default, when an asset is registered in the Data Hub catalog, it is set to **Discoverable**, which means that all users can find the asset and see details of it. 

When the **Discoverable** setting is turned off, it will only be visible to the owners of the service and curators and the Data Hub Admin. All other users of Data Hub (also through the Data Hub integrations in Studio Pro and Studio) will not be able to see an asset whose discvorabilty is turned off.

{{% alert type="info" %}}Services that are set to **not Discoverable** in the Catalog will not be included in the search results for *any* user including owners of the service. To consume entities from services owners must ensure that [Discoverability](/data-hub/data-hub-catalog/curate#discoverability) is turned on for them.{{% /alert %}}

###  Tags 

Tags help you to group services and datasets and categorize them (for example, by department, process, or use). You can use tags to refine the search and filter search results in the Data Hub Catalog.

###  Validated {#validated}

The **Validated** value can be assigned to a data source by owners and curators to indicate, for example that it has been qualified and is a reliable data source. It can turned on and off by clicking the **Validated** toggle. A validated data source is indicated by the validation shield on the data source details screen and also in the search results pane. 

## OData Security for Shared Datasets

For Mendix apps that publish entities and those that consume the shared entities in their apps as [external entities](/refguide/external-entities), the following details apply:

* The security for the OData-based service is defined in the publishing app – at the project, module, and entity level

* The security that is defined at the module level will apply to the OData services that are published from the module and enforced when the entities from the service are used in a consuming app when end-users try to access the data

  {{% alert type="info" %}}The security for an OData service can only be set if the [project security](/refguide/project-security) is enabled.
  {{% /alert %}}

* Classification of the data associated with the entities is defined in the service metadata and shown in the [Service Metadata](search#metadata) panel of the **Search Details** screen. This is further discussed below.

* Through the identification protocols used for establishing the user identity, the security rules for the user in the publishing app are applied

  * On the Mendix Platform, this is [Mendix SSO](/developerportal/deploy/mendix-sso),  but it can also be the organization's identification protocol

* In the publishing app in Studio Pro, access can be defined at the entity level as follows:

  * None
  * Basic authentication on the user name and password
  * Customized where the publisher builds their own microflow which gets the header from the request to determine the user and what the user wants to do

For further details, see the [Entity Access](/refguide/module-security#entity-access) section of *Module Security*.

## Data Classification of Registered OData Services

OData services registered in the Data Hub Catalog have the following classifications that apply to the data associated with the exposed datasets:

* **Public**  – data is available to all internal and external users
* **Internal**  – data is restricted to the members of the organization

The classification of the asset indicates the runtime security on the data and defines what users are allowed to see and use when running their application.

The classification for a registered OData service is shown in the **Service Metadata** panel in the Data Hub Catalog. This classification applies to access to the data associated with the service or dataset by end-users of the app that consumes the entity. 

# Search in the Data Hub

[Search] – Enter a search string of alphanumeric characters to search in the Data Hub Catalog. The search will be performed on services, entities, attributes, associations, and descriptions in the Catalog. 

[Filter] – By default, the search will be performed on assets in the **Production** environment. Click the **Filter** icon to include all other environments such as test, acceptance and also the Mendix free app environment **Sandbox** in the search.

You can perform a wildcard search by entering `*` in the search area.

{{% alert type="info" %}}
The search strings must be a minimum of 3 alphanumeric characters. Punctuation cannot be used as part of the search term except for the wildcard character `*` to perform an "empty" search in the Data Hub Catalog. You cannot use the wildcard in combination with other characters. For further details, see [How to Search for Registered Assets](/data-hub/data-hub-catalog/search).
{{% /alert %}}

# Landscape

The Data Hub Landscape presents a graphical view of the registered OData services in your Data Hub. It provides a landscape visualization of items registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/) and their relationships with apps that consume the datasets that they connect to. In the Data Hub Landscape, the nodes are the runtime instances of applications (or, more specifically, the deployments of apps in specific environments) and the published OData services from the apps. All public services that are issued with Data Hub are also shown in the Landscape.
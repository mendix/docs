---
title: "Data Hub Catalog"
description: "Introduces the processes and properties of the Mendix Data Hub Catalog."
tags: ["data hub", "data hub catalog"]
---

## 1 Introduction

The Data Hub Catalog is the core of Mendix Data Hub for finding the shared registered assets that are made available through OData services published in an organization. It enables a single data source to be consistently used in several apps, ensuring that they will all be using the latest set of data maintained in the source. These registered assets are curated in the Data Hub Catalog to ensure that they are exposed to the relevant users and can be found easily.

The Data Hub Catalog functionality is enhanced by the [Data Hub Landscape](../data-hub-landscape/index), which enables the networks of shared data and resources to be graphically represented in a network of relationships between apps and services. This integration enables different views of the registered assets to show, at a glance, popular apps and the network of dependencies between apps and services. 

## 2 Data Hub Screen {#data-hub-home}

From the [Data Hub](https://hub.mendix.com) screen, you can carry out the major functions of Data Hub.

![Data Hub screen](../share-data/attachments/share-data/data-hub-home.png)

You can navigate to the following tabs:
* **Data Hub** – search in the Data Hub Catalog, manually register a service from different applications, see the most popular services
* **Catalog** – [search](search) for registered assets in the search pane and see details of the metadata of selected asset
* **Landscape** – gain a graphical view of the organization's available services and exposed entities showing consuming and publishing dependencies (for further details, see [Data Hub Landscape](../data-hub-landscape/index)
* **Curate** – carry out [curate](curate) functions on registered assets to enrich the registered metdata and increase discoverability by relevant users
* **Administration** – Data Hub Admin can assign curator roles and curators can manage the list of owners

From the Data Hub screen, you can do the following:
* **Search** – search in the Data Hub Catalog using the **Search** box or clicking the suggested **Tags**

* **Register a new service** – manually register non-Mendix OData v4 services in the Data Hub Catalog (for further details, see the [Manually Registering OData V4 Services](register#registration-form) section of *How to Register Data Assets*)

* **Most popular services** – view directly the most popular services being consumed and the datasets that are available through these services

Data Hub is also integrated in Mendix Studio Pro to find and connect to shared data sources in your apps. For further details on using Data Hub in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

## 3 Using the Data Hub Catalog

The functionality of the Data Hub Catalog reflects the process of sharing data in an organization through service APIs. The sections below describe the processes involved.

### 3.1 Search – Finding Connectable Data sources

Users can find shared datasets by searching the Data Hub Catalog. The [search](search) features include results that are project-relevant in order of most popular services, and results can be refined by using filters. Full details of the registered services are displayed to help in deciding on the suitability of the data associated with a registered entity.

The Data Hub Catalog search functionality is integrated into Mendix Studio Pro through the [Data Hub pane](/refguide/data-hub-pane) for finding registered services and entities to use when developing apps.

For more details, see [How to Search for Registered Assets](search).

### 3.2 Consume – Using Registered Entities

Registered assets in the Data Hub Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling). These external data sources are represented in the domain model as *external entities* which can be used with local entities with the difference that external entities connect to data that is maintained externally and therefore can only be read or consumed. Changes to this data is done in the originating apps

For further information on consuming from the Data Hub Catalog, see [How to Consume Registered Assets](consume). For details on using shared entities in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

### 3.3 Register – Sharing Datasets 

If you want to make the data from your app available to others, you can provide access by publishing the entities in an OData service and registering it in the Data Hub Catalog. Using this REST-based protocol, metadata contracts defining the structure and documentation of the datasets that are available are registered. Further details such as the location of the data associated with a registered entity are captured, for example from the `dependencies.json`, or during the registration process. 

OData services can be registered in the Data Hub Catalog in two ways:

* In Mendix Studio Pro, entities are exposed in a [published OData service](/refguide/published-odata-services), and upon deployment of the app to an environment hosted in the Mendix Cloud, the service is automatically registered in the Data Hub Catalog. For details on publishing OData services in Studio Pro, see the [Publishing an OData Service in Studio Pro to Register Entities](register#odata-service-reg) section of *How to Register Data Assets*. You can follow how to publish an OData service from a Mendix app in the [Publishing to the Data Hub Catalog](../share-data/index#publishing) section of the Data Hub how-to, *Share Data Between Apps*.
* OData v4 services originating from non-Mendix sources can be [registered manually as a new service](register#registration-form). For further details on the manual registration process in the Data Hub Catalog, see [How to Register Data Assets](register).

### 3.4 Curate – Maintaining Registered Assets

Registered services can be curated in the Data Hub Catalog to ensure that they are discoverable by the relevant users. Findability of registered assets can be enhanced by adding tags and descriptions to the services.

For more details, see [How to Curate Registered Assets](curate).

### 3.5 Data Accessibility and Data Security

Mendix Data Hub enables organizations to manage the data that is used. Security of the shared datasets is crucial, and this includes access to the shared data and authentication of users.

Registered users on the Mendix platform have access to Data Hub. However to consume data through external entities in your Mendix app, you need a Data Hub license and the type of license that you have determines how much data you can consume. This is described in [Data Hub License](/refguide/consumed-odata-service-requirements#license-limitations). 

For details on security and accessibility in the Data Hub Catalog and for registered services and entities, see [Data Accessibility and Security](security).

## 4 Information Available in the Data Hub Catalog

In the Data Hub Catalog, all the information for registered services is displayed in the [search details](search#search-details) screen. This information comes from the metadata defining the OData services and also from additional metadata that is added when registered services are curated in the Data Hub Catalog. Registered assets can be curated by owners and [Data Hub Curators](../index#curator) to enable them to be found or **Discoverable** by other users and therefore enable the shared datasets they expose to be "consumed" in app development in, for example, Mendix Studio Pro and Studio. 

The information that is registered for services and exposed assets are as follows: 

* **Endpoints** – All registered assets are defined as endpoints in the Catalog. The endpoint of the service is accessed by the consuming app. 

* **Environment** – To complete the location of the asset, the endpoints are published to an environment.The location of the OData service also includes the environment to which the publishing app is deployed. Connecting to a service in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a non-production test or acceptance environment. However, the final production app will have to access the datasets from the production environment - the actual live or working data. In the Data Hub Catalog, the **Environment Type** is also specified which indicates the quality of the data that the asset connects to. 

  {{% alert type="info" %}}
  You can filter the search results by environment type in the Data Hub Catalog (**Production**, **Non-production**, and the Mendix Free App environment or **Sandbox**). In the [Data Hub pane](/refguide/data-hub-pane) of Studio Pro, you can expand search results to include non-production environments. 
  {{% /alert %}}

* **Published OData service** – At the endpoint an OData service is available and defined by the metadata contract at the location. Available data sources are registered in the Data Hub Catalog by exposing the entities that define them in a [published OData service](/refguide/published-odata-services). This service document or metadata contract also includes the exposed attributes and associations that are relevant for connecting to the data they define. 

* **Versions** – The version number of the OData service contracts is also included in the asset registration. The contract exposed by a specific endpoint may be changed over time by the service owner, and if good practice is followed, these changes will be indicated by changing the version number. Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment. 

  {{% alert type="info" %}}
  If significant changes are made in the service which would break any consuming apps, then good practice dictates that the service is published with a major update in the version number and also deployed to a different endpoint. In this case the service will be listed twice for the two different endpoints. For more information see [Semantic numbering](/refguide/consumed-odata-service#semantic) in *Consumed OData Service*.
  {{% /alert %}}

## 5 Main Documents in This Category

* [How to Search for Registered Assets](search) – describes search and asset details
* [How to Consume Registered Assets](consume) – gives general information on consuming registered entities
* [How to Register Data Assets](register) – describes how to register OData services in the Data Hub Catalog through Studio Pro and manually register non-Mendix services
* [How to Curate Registered Assets](curate) – describes the curate functions for managing assets
* [Data Accessibility and Security](security) – describes access to entities and security

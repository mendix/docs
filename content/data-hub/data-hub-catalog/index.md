---
title: "Data Hub Catalog"
description: "Introduces the processes and properties of the Mendix Data Hub Catalog."
tags: ["data hub", "data hub catalog"]
---

## 1 Introduction

The Data Hub Catalog is the core of Mendix Data Hub for finding the shared registered assets that are made available through OData services published in an organization. It enables a single data source to be consistently used in several apps, ensuring that they will all be using the latest set of data maintained in the source. These registered assets are curated in the Data Hub Catalog to ensure that they are exposed to the relevant users and can be found easily.

The Data Hub Catalog functionality is enhanced by the [Data Hub Landscape](../data-hub-landscape/index), which enables the networks of shared data and resources to be graphically represented in a network of relationships between apps and services. This integration enables different views of the registered assets to show, at a glance, popular apps and the network of dependencies between apps and services. 

## 2 Data Hub Screen {#data-hub-home}

From the [Data Hub](https://hub.mendix.com) screen, you can carry out the major functions of Data Hub. Data Hub is also integrated in Mendix Studio Pro to find and connect to shared data sources in your apps. For further details on using Data Hub in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

{{% todo %}}[AD: screenshot missing for data-hub-home - add new one]{{% /todo %}}

From the Data Hub screen, you can navigate to the following tabs:

* **Catalog** –  search for registered services, entities, and attributes in the search pane and search details page
* **Landscape** – gain a graphical view of the organization's available services and exposed entities showing consuming and publishing dependencies (for further details, see [Data Hub Landscape](../data-hub-landscape/index).

From the Data Hub screen, you can do the following:

* **Search** –  search for registered services and entities using the **Search** box or clicking the suggested **Tags**
* **Register a new service** – manually register non-Mendix OData v4 services in the Data Hub Catalog (for further details, see the [Manually Registering OData V4 Services](register#registration-form) section of *How to Register Data Assets*)
* **Most popular services** – view directly the most popular services being consumed and the datasets that are available through these services

## 3 Using the Data Hub Catalog

The functionality of the Data Hub Catalog reflects the process of sharing data in an organization  through service APIs. The sections below describe the processes involved.

### 3.1 Search – Finding Connectable Entities

Users can find shared data by searching the Data Hub Catalog. The [search](search) features include results that are project-relevant in order of most popular services, and results can be refined by using filters. Full details of the registered services are displayed to help in deciding on the suitability of the data associated with a registered entity.

The Data Hub Catalog search functionality is integrated into Mendix Studio Pro through the [Data Hub pane](/refguide/data-hub-pane) for finding registered services and entities to use when developing apps.

For more details, see [How to Search for Registered Assets](search).

### 3.2 Consume – Using Registered Entities

Services and their exposed entities registered in the Data Hub Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling). These external sources of data are represented in the domain model as external entities which can be used with regular entities, with the difference that external entities connect to data that is maintained externally and therefore can only be consumed.

For further information on consuming from the Data Hub Catalog, see [How to Consume Registered Assets](consume). For details on using shared entities in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

### 3.3 Register – Sharing Datasets 

If you want to make the data from your app available to others, you can provide access by publishing the entities in an OData service and registering them in the Data Hub Catalog. Using this REST-based protocol, the details that are registered include the location of the data associated with a registered entity, metadata on the structure, and descriptive metadata to inform users about the datasets that are available. 

OData services can be registered in the Data Hub Catalog in two ways:

* In Mendix Studio Pro, entities are exposed in a [published OData service](/refguide/published-odata-services), and upon deployment of the app to an environment, the service is automatically registered in the Data Hub Catalog. For details on publishing OData services in Studio Pro, see the [Publishing an OData Service in Studio Pro to Register Entities](register#odata-service-reg) section of *How to Register Data Assets*.
* OData v4 services originating from non-Mendix sources can be [registered manually through a new service](register#registration-form). For further details on registration in the Data Hub Catalog and using  manual registration, see [How to Register Data Assets](register).

{{% todo %}}[IG:  The Data Hub Registration API is available to register OData Services to the Data Hub Catalog.   The deployment pipeline ensures that the app is only deployed if all dependencies are met. This API validates published dependencies and consumed dependencies and can  be used by 3rd party deployment tooling.]{{% /todo %}}

{{% todo %}}[Out for 0.21 release]{{% /todo %}}

### 3.4 Curate – Maintaining Registered Assets

Registered services can be curated in the Data Hub Catalog to ensure that they are discoverable by the relevant users. Findability of registered assets can be enhanced by adding tags and descriptions to the services.

For more details, see [How to Curate Registered Assets](curate).

{{% todo %}}[IG:GM -  Manage versions is not a curation task, this is part of the app/API lifecycle. Other curation tasks (beautifying display names for example) are not part of the public beta - review]{{% /todo %}}

### 3.5 Data Accessibility and Data Security

Mendix Data Hub enables organizations to manage the data that is used. Security of the shared datasets is crucial, and this includes accessibility to the shared data and authentication of users.

For details on security and accessibility in the Data Hub Catalog and for registered services and entities, see [Data Accessibility and Security](security).

{{% todo %}}[IG: x-ref to authentication in Publish OData Service in SP and see if there is much to refer to in the consuming sections for SP - if it is just repeat of what is said in the former then one x-ref suf]{{% /todo %}}

## 4 Information Available in the Data Hub Catalog

In the Data Hub Catalog, all the information for registered services is displayed in the [search details](search#search-details) screen. This information comes from the metadata defining the OData services and also from additional information that is added when registered services are curated in the Data Hub Catalog. Registered items can be "published" by owners and [Data Hub Curators](../index#curator) so that they are discoverable by other users and ready to be consumed in Studio Pro. 

The information available for registered services and exposed elements includes the following:

* **Published OData service** – Available data sources are registered in the Data Hub Catalog by exposing the entities that define them in a [published OData service](/refguide/published-odata-services).  This service document also defines the attributes and associations that are relevant for connecting to the data they define. 
* **Versions** – Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment. New versions of a service are issued if changes are made. 
* **Environment** – The location of the OData service also includes the environment to which the publishing app is deployed. Connecting to a service in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a test or acceptance environment. However, the final production app will have to access the datasets from the production environment. In the Data Hub Catalog, the quality of the data is also given in the search details.  You can filter the search results by environment in the Data Hub Catalog and in the [Data Hub pane](/refguide/data-hub-pane) of Studio Pro, you can specify searching in production and non-production environments. 
* **Endpoints** – The combination of service URL, environment, and version provides the endpoint that is accessed by the consuming app. Entities and attributes define further endpoints pointing to the specific item – which in turn provide the connection to the data in the resulting app. To complete the definition, endpoints will be in the environment to which the service is deployed.

## 5 Main Documents in This Category

* [How to Search for Registered Assets](search) – describes search and asset details
* [How to Consume Registered Assets](consume) – gives general information on consuming registered entities
* [How to Register Data Assets](register) – describes how to register OData services in the Data Hub Catalog through Studio Pro and manually register non-Mendix services
* [How to Curate Registered Assets](curate) – describes the curate functions for managing assets
* [Data Accessibility and Security](security) – describes access to entities and security

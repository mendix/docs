---
title: "Data Hub Catalog"
description: "Introduces the processes and properties of Mendix Data Hub."
tags: ["data hub", "data hub catalog"]
weight: 30
---

## 1 Introduction

The Data Hub Catalog is the core of Mendix Data Hub for finding the shared registered assets that are made available through OData services published in an organization. It enables a single data source to be consistently used in several apps, ensuring that they will all be using the latest set of data maintained in the source. These registered assets are curated in the Data Hub Catalog to ensure that they are exposed to the relevant users and can be found easily.

The Data Hub Catalog functionality is enhanced by the [Data Hub Landscape](/data-hub/data-hub-landscape/), which enables the networks of shared data and resources to be graphically represented in a network of relationships between apps and services. This integration enables different views of the registered assets to show, at a glance, popular apps and the network of dependencies between apps and services.

## 2 Data Hub Home {#data-hub-home}

From the Data Hub [Home](https://hub.mendix.com) screen, you can carry out the major functions of Data Hub.

![Data Hub screen](../share-data/attachments/share-data/data-hub-home.png)

You can navigate to the following tabs:

* **Home** – search in the Data Hub Catalog, manually register a service from different applications, select from the most popular services
* **Catalog** – [search](search) for registered assets in the search pane and see details of the metadata of selected asset
* **Landscape** – gain a graphical view of the organization's available services and exposed datasets showing consuming and publishing dependencies (for further details, see [Data Hub Landscape](/data-hub/data-hub-landscape/)
* **Curate** – carry out [curate](curate) functions on registered assets to enrich the registered metdata and increase discoverability by relevant users

From the **Home** screen, you can do the following:

* **Search** – search in the Data Hub Catalog using the **Search** box or clicking the suggested **Tags**
* **Register a new data source** – manually register an OData service from your enterprise business application to the Data Hub (for more details, see [How to Register OData Resources in the Data Hub Catalog](register-data))

* **Popular Data Sources** – click on the most popular data sources

Data Hub is also integrated in Mendix Studio Pro to find and connect to shared data sources in your apps. For further details on using Data Hub in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

{{% alert type="info" %}}
The Data Hub integration is available in Studio Pro version 8.14 and above. To use the latest functionality of Data Hub download the latest version of Studio Pro. {{% /alert %}}

## 3 Using Mendix Data Hub

The functionality of the Data Hub reflects the process of sharing data in an organization through application APIs from the different systems in an enterprise. The sections below describe the processes involved.

### 3.1 Search – Finding Connectable Data sources

Users can find shared datasets by searching the Data Hub Catalog. The [search](search) features include results that are project-relevant in order of most popular services, and results can be refined by using filters. Full details of the registered services are displayed to help in deciding on the suitability of the data associated with a registered dataset.

You can use the Data Hub to find suitable data sources to integrate into your other enterprise applications using the [Copy Data Source URI](search#service-details) button in the Data Hub Catalog.

The Data Hub Catalog search functionality is integrated into Mendix Studio Pro through the [Data Hub pane](/refguide/data-hub-pane) for finding registered services and datasets to use when developing apps.

For more details, see [How to Search for Registered Assets](search).

### 3.2 Consume – Using Registered Datasets

Registered assets in the Data Hub Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling). These external data sources are represented in the domain model as *external entities* which can be used with local entities with the difference that external entities connect to data that is maintained in the source application and therefore can only be read or consumed. Changes to this data is done in the originating apps.

For further information on consuming from the Data Hub Catalog, see [How to Consume Registered Assets](consume). For details on using shared entities in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane) in the *Studio Pro Guide*.

### 3.3 Register – Sharing Datasets

If you want to make the data from your apps available for use by others, you can publish the datasets in an OData service and register it in the Data Hub. In a Mendix app, the datasets are the **Entity sets** for a defined **Entity**. Using this REST-based protocol, metadata contracts defining the structure and documentation of the datasets that are included are registered. Further details such as the location of the data associated with a registered dataset are also captured: for Mendix app deploying to the Mendix cloud this information is taken during the deployment process. This information is also obtained during the process of [registering a service without Mendix Cloud](/data-hub/data-hub-catalog/register-data).

OData services can be registered in the Data Hub in the following ways:

* In Mendix Studio Pro, entities are exposed in a [published OData service](/refguide/published-odata-services), and upon deployment of the app to an environment hosted in the Mendix Cloud, the service is automatically registered in the Data Hub Catalog. For details on publishing an OData service from a Mendix app, see the [Publishing to the Data Hub Catalog](/data-hub/share-data/#publishing) section of *How to Share Data Between Apps*.
* OData v4 services originating from non-Mendix sources can be registered manually. For further details, see [Register OData Resources in the Data Hub Catalog](/data-hub/data-hub-catalog/register-data).
* Using the [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis) you can set up a registration pipeline to register data sources from your business application.

### 3.4 Curate – Maintaining Registered Assets

Registered assets can be curated to ensure that they are discoverable by the relevant users. Findability of registered assets can be enhanced by adding tags and descriptions to the services. Further enhancements to the registered metadata such as specifying the app owners can also be performed.

For more details, see [How to Curate Registered Assets](curate).

### 3.5 Data Accessibility & Security

Mendix Data Hub enables organizations to manage the data that is shared from the different sources. Security of the shared datasets is crucial, and this includes access to the shared data and authentication of users.

Registered users on the Mendix platform have access to Data Hub. However to consume data through external entities in your Mendix app, you need a Data Hub license and the type of license that you have determines how much data you can consume. For more information, see the [Data Hub License Limitations](/refguide/consumed-odata-service-requirements#license-limitations) section of *Consumed OData Service Requirements*.

For details on security and accessibility in the Data Hub Catalog and for registered services and datasets, see [Data Accessibility and Security](security).

## 4 Information Available in the Data Hub Catalog

In the Data Hub Catalog, all the information for registered assets is displayed in the [Catalog search details](search#search-details) screen. This information comes from the metadata in the OData service contract and also from additional metadata that is added when registered assets are curated. Registered assets can be curated by owners and [Data Hub curators](/data-hub/#curator) and [Mendix Admins](/data-hub/#admin).

The information that is registered for data sources and exposed datasets are as follows:

* **Endpoints** – All registered assets are defined as endpoints (URLs) in the Catalog. The endpoint of the service is accessed by the consuming app.
* **Environment** – To complete the location of the asset, the endpoints are published to an environment. The location of the OData service also includes the environment to which the publishing app is deployed. Connecting to a data source in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a non-production test or acceptance environment. However, the final production app will have to access the datasets from the production environment - the actual live or working data. In the Data Hub, the **Environment Type** is also specified which indicates to users the quality of the data.

	{{% alert type="info" %}}
  You can filter the search results by environment type in the Data Hub Catalog (**Production**, **Non-production**, and the Mendix Free App environment or **Sandbox**). In the [Data Hub pane](/refguide/data-hub-pane) of Studio Pro, you can expand search results to include non-production environments. {{% /alert %}}

* **Published OData service** – At the service endpoint there are the OData service metadata contract filesthat define the service. Available data sources are registered in the Data Hub Catalog by exposing  datasets in the [published OData service](/refguide/published-odata-services). This service document or metadata contract also includes the exposed attributes and associations that are relevant for connecting to the data they define.
* **Versions** – The version number of the OData service contracts is also included in the asset registration. The contract exposed at a specific endpoint may be changed over time by the service owner, and if good practice is followed, these changes will be indicated by changing the version number. Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment.

	{{% alert type="info" %}}
  If significant changes are made in the service which would break any consuming apps, then good practice dictates that the service is published with a major update in the version number and also deployed to a different endpoint. In this case the service will be listed twice for the two different endpoints. For more information see [Semantic numbering](/refguide/consumed-odata-service#semantic) in *Consumed OData Service*. {{% /alert %}}

## 5 Main Documents in This Category

* [How to Search for Registered Assets](search) – describes search and asset details
* [How to Consume Registered Assets](consume) – gives general information on consuming registered datasets
* [How to Register OData Resources in the Data Hub Catalog](register-data) – describes how to register OData resources in the Data Hub Catalog: through the Mendix Cloud, using the Registration API, or in the UI form
* [How to Register Non-OData Resources in the Data Hub Catalog](register-non-odata-resources) – describes ways to register non-OData resources in the Data Hub Catalog
* [How to Curate Registered Assets](curate) – describes the curate functions for managing assets
* [Data Accessibility and Security](security) – describes access to datasets and security

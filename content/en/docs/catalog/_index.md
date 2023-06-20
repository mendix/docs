---
title: "Catalog Guide"
url: /catalog/
description: "Describes the processes and properties of Catalog."
weight: 40
no_list: false
description_list: true
cascade:
    - space: "Catalog Guide"
    - mendix_version: 10
tags: ["data hub", "Catalog", "data hub landscape", "external entities", "external users"]
aliases:
    - /data-hub/data-catalog/index.html
    - /data-hub/
---

## 1 Introduction

The Catalog is a development tool provided in the Mendix Cloud. 

OData REST services provided by Mendix Apps running in the Mendix Cloud, [published OData services](/refguide/published-odata-services/), will automatically be registered in the Catalog upon deployment. This provides you with an up-to-date view of all the OData REST APIs published and consumed by your Mendix apps. These assets can be [curated](/catalog/manage/curate/) in the Catalog to ensure that they are exposed to the relevant users and can be found easily. The [Landscape](/data-hub/data-hub-landscape/), part of the Catalog, is a graphical representation of the relationship between apps and services.

Learn about updates and improvements in the [Catalog](/releasenotes/data-hub/) release notes.

{{% alert color="info" %}}
If you deploy your Mendix apps in an alternative environment, like on-prem or private cloud, you can use the Catalog APIs to register your apps and services in the Catalog to enable visibility of your deployed APIs. For information about using Data Hub for local deployment, see [Register Data without Mendix Cloud](/data-hub/data-hub-without-mendix-cloud/).{{% /alert %}}

{{% alert color="info" %}}
The Catalog and [external entities](/refguide/external-entities/) are supported in Studio Pro [8.14](/releasenotes/studio-pro/8.14/) and above.{{% /alert %}}

## 2 Catalog and Mendix Connect {#catalog-mx-connect}

[Mendix Connect](https://www.mendix.com/data-hub/) is a collection of functionalities available in the Mendix Platform that allow people in your organization to discover, understand, connect, and govern data securely. The [Catalog](/catalog/) is a part of the Mendix Connect ecosystem as a user-friendly way to view, share, and use data within your organization. 

In addition to the Catalog, Mendix Connect functionalities include:

* [Integration capabilities](/refguide/integration/#integration-mx-connect) in Studio Pro [10.0](/releasenotes/studio-pro/10.0/)
* Platform-supported [connectors and modules](/appstore/#marketplace-mx-connect) available in the [Mendix Marketplace](/appstore/)

## 3 Catalog Home {#catalog-home}

From the Catalog [Home](https://catalog.mendix.com) screen, you can navigate to the following tabs:

* **Home** – search in the Catalog, manually register a service from different applications, select from the most popular services
* **Catalog** – [search](/catalog/search/) for registered assets in the search pane and see details of the metadata of selected asset
* **Landscape** – gain a graphical view of the organization's available services and exposed datasets showing consuming and publishing dependencies (for further details, see [Data Hub Landscape](/data-hub/data-hub-landscape/))
* **Curate** – carry out [curate](/catalog/manage/curate/) functions on registered assets to enrich the registered metadata and increase discoverability

From the **Home** screen, you can do the following:

* **Search** – search in the Catalog using the **Search** box or by clicking the suggested **Tags**
* **Register a new data source** – manually register an OData service from your enterprise business application to the Data Hub (for more details, see [How to Register OData Resources in the Catalog](/catalog/register/register-data/))

* **Popular Data Sources** – click on the most popular data sources

Data Hub is also integrated in Mendix Studio Pro to find and connect to shared data sources in your apps. For further details on using Data Hub in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane/) in the *Studio Pro Guide*.

{{% alert color="info" %}}
The Data Hub integration is available in Studio Pro version 8.14 and above. To use the latest functionality of Data Hub download the latest version of Studio Pro. {{% /alert %}}

## 4 Using Mendix Data Hub

The functionality of the Data Hub reflects the process of sharing data in an organization through APIs from different systems in an enterprise. The sections below describe the processes involved.

### 4.1 Search – Finding Connectable Data Sources

Users can find shared datasets by searching the Catalog. The [search](/catalog/search/) features include results that are project-relevant in order of most popular services, and results can be refined by using filters. Full details of the registered services are displayed to help in deciding on the suitability of the data associated with a registered dataset.

Use the Data Hub to find suitable data sources to integrate into your other enterprise applications by clicking [Copy Data Source URI](/catalog/manage/search/#service-details).

The Catalog search functionality is integrated into Mendix Studio Pro through the [Data Hub pane](/refguide/data-hub-pane/) for finding registered services and datasets to use when developing apps.

For more details, see [How to Search for Registered Assets](/catalog/search/).

### 4.2 Consume – Using Registered Datasets

Registered assets in the Catalog can be accessed in Mendix Studio Pro to [build apps](/refguide/modeling/). These external data sources are represented in the domain model as [external entities](/refguide/external-entities/) which can be used with local entities.

For further information on consuming from the Catalog, see [How to Consume Registered Assets](/catalog/consume/). For details on using shared entities in Studio Pro, see [Data Hub Pane](/refguide/data-hub-pane/) in the *Studio Pro Guide*.

### 4.3 Register – Sharing Datasets

If you want to make the data from your apps available for use by others, you can publish the datasets in an OData service and register it in the Data Hub. In a Mendix app, the datasets are the **Entity sets** for a defined **Entity**. Using this REST-based protocol, metadata contracts defining the structure and documentation of the datasets that are included are registered. Further details such as the location of the data associated with a registered dataset are also captured. For Mendix apps deploying to the Mendix Cloud, this information is captured during the deployment process. This information can also be collected while [registering a service without Mendix Cloud](/catalog/register/register-data/).

OData services can be registered in the Data Hub in the following ways:

* In Mendix Studio Pro, entities are exposed in a [published OData service](/refguide/published-odata-services/), and upon deployment of the app to an environment hosted in the Mendix Cloud, the service is automatically registered in the Catalog. For details on publishing an OData service from a Mendix app, see the [Publishing to the Catalog](/catalog/share-data/#publishing) section of *How to Share Data Between Apps*.
* OData v4 services originating from non-Mendix sources can be registered manually. For further details, see [Register OData Resources in the Catalog](/catalog/register/register-data/).
* Using the [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/) you can set up a registration pipeline to register data sources from your business application.

### 4.4 Curate – Maintaining Registered Assets

You can add tags and descriptions, edit app owners, and toggle discoverability to ensure the right people find your service. For more details, see [How to Curate Registered Assets](/catalog/manage/curate/).

## 5 Information Available in the Catalog {#available-info}

In the Catalog, all the information for registered assets is displayed in the [Catalog search details](/catalog/manage/search/#search-details) screen. This information comes from the metadata in the OData service contract, and also from additional metadata that is added when registered assets are curated. Registered assets can be curated by owners, [Data Hub curators](/catalog/manage/user-roles/#curator), and [Mendix Admins](/catalog/manage/user-roles/#admin).

The information that is registered for data sources and exposed datasets are as follows:

* **Endpoints** – All registered assets are defined as endpoints (URLs) in the Catalog. The endpoint of the service is accessed by the consuming app.
* **Environment** – To complete the location of the asset, the endpoints are published to an environment. The location of the OData service also includes the environment to which the publishing app is deployed. Connecting to a data source in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a non-production test or acceptance environment. However, the final production app will have to access the datasets from the production environment - the actual live or working data. In the Data Hub, the **Environment Type** is also specified which indicates to users the quality of the data.

    {{% alert color="info" %}}You can filter the search results by environment type in the Catalog (**Production**, **Non-production**, and the Mendix Free App environment or **Sandbox**). In the [Data Hub pane](/refguide/data-hub-pane/) of Studio Pro, you can remove the default filter on the search results to include non-production environments. {{% /alert %}}

* **Published OData service** – At the service endpoint, there are the OData service metadata contract files that define the service. Available data sources are registered in the Catalog by exposing  datasets, attributes, and associations in the [published OData service](/refguide/published-odata-services/). 
* **Versions** – The contract exposed at a specific endpoint may be changed over time by the service owner, and if good practice is followed, these changes will be indicated by changing the version number. Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment.

    {{% alert color="info" %}}If significant changes are made in the service which would break any consuming apps, then good practice dictates that the service is deployed to a different endpoint with a major update in the version number. In this case the service will be listed twice for the two different endpoints. For more information see [Semantic numbering](/refguide/consumed-odata-service/#semantic) in *Consumed OData Service*. {{% /alert %}}

## 6 Data Hub Administration

Mendix Admins can assign and manage **Curators**, **Owners**, and **External Users**, and control discoverability settings. For more information, see [Data Hub Administration](/developerportal/control-center/data-hub-admin/).

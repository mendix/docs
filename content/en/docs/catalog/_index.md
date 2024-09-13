---
title: "Catalog"
url: /catalog/
description: "Describes the processes and properties of Catalog."
weight: 41
no_list: false
description_list: true
cascade:
    - content_type: "Catalog"
    - mendix_version: 10
aliases:
    - /data-hub/data-catalog/index.html
    - /data-hub/
    - /data-hub/data-hub-catalog/
---

{{% alert color="info" %}}
The Mendix Portal is the online platform of Mendix. It includes [Apps](/developerportal/), [Control Center](/control-center/), [Community](/community-tools/), [Marketplace](/appstore/), Catalog, and [Mendix Support](/support/).
{{% /alert %}}

## Introduction

The [Catalog](https://catalog.mendix.com) is a development tool provided in the Mendix Cloud. 

{{< figure src="/attachments/catalog/catalog-home.png" class="no-border" >}}

REST services provided by Mendix Apps running in the Mendix Cloud (published [OData](/refguide/published-odata-services/) and OpenAPI REST Services) are automatically registered in your organization's Catalog upon deployment. This provides you with an up-to-date view of all the OData and OpenAPI REST APIs published and consumed by your Mendix apps. These assets can be [curated](/catalog/manage/curate/) in the Catalog to ensure that they are exposed to the relevant users and can be found easily. 

Learn about updates and improvements in the [Catalog](/releasenotes/data-hub/) release notes.

{{% alert color="info" %}}
If you deploy your Mendix apps in an alternative environment, like on-prem or private cloud, you can use the Catalog APIs to register your apps and services in the Catalog to enable visibility of your deployed APIs. For information about using Catalog for local deployment, see [Register Data Sources without Mendix Cloud](/catalog/data-sources-without-mendix-cloud/).{{% /alert %}}

{{% alert color="info" %}}
The Catalog and [external entities](/refguide/external-entities/) are supported in Studio Pro [8.14](/releasenotes/studio-pro/8.14/) and above.{{% /alert %}}

## Catalog and Mendix Connect {#catalog-mx-connect}

[Mendix Connect](https://www.mendix.com/data-hub/) is a collection of functionalities available in the Mendix Platform that allow people in your organization to discover, understand, connect, and govern data securely. The [Catalog](/catalog/) is a part of the Mendix Connect ecosystem as a user-friendly way to view, share, and use data within your organization. 

In addition to the Catalog, Mendix Connect functionalities include:

* [Integration capabilities](/refguide/integration/#integration-mx-connect) in Studio Pro [10.0](/releasenotes/studio-pro/10.0/)
* Platform-supported [connectors and modules](/appstore/#marketplace-mx-connect) available in the [Mendix Marketplace](/appstore/)

## Catalog Home {#catalog-home}

From the Catalog [Home](https://catalog.mendix.com) screen, you can navigate to the following tabs:

* **Home** – search in the Catalog, manually register a service from different applications, or select from the most recently changed or most popular services
* **Browse** – [search](/catalog/search/) for registered assets in the search pane and see details of the metadata of selected asset, either with the **Data View** or [Landscape View](/catalog/manage/landscape/)
* **Curate** – carry out [curate](/catalog/manage/curate/) functions on registered assets to enrich the registered metadata and increase discoverability

From the **Home** screen, you can do the following:

* **Search** – search in the Catalog using the **Search** box or by clicking the suggested **Tags**
* **Register a new data source** – manually register an OData service from your enterprise business application to the Catalog (for more details, see [How to Register OData Resources in the Catalog](/catalog/register/register-data/))

* **Most Recent Changes** – view the most recently changed data sources
* **Popular Data Sources** – view the most popular data sources

The Catalog is also integrated in Mendix Studio Pro to find and connect to shared data sources in your apps. For further details on using Catalog in Studio Pro, see [Integration Pane](/refguide/integration-pane/) in the *Studio Pro Guide*.

{{% alert color="info" %}}
The Catalog integration is available in Studio Pro 8.14 and above. {{% /alert %}}

## Information Available in the Catalog {#available-info}

In the Catalog, all the information for registered assets is displayed in the [Catalog search details](/catalog/manage/search/#search-details) screen. This information comes from the metadata in the OData service contract, and also from additional metadata that is added when registered assets are curated. Registered assets can be curated by owners, [Curators](/catalog/manage/user-roles/#curator), and [Mendix Admins](/catalog/manage/user-roles/#admin).

The information that is registered for data sources and exposed datasets are as follows:

* **Endpoints** – All registered assets are defined as endpoints (URLs) in the Catalog. The endpoint of the service is accessed by the consuming app.
* **Environment** – To complete the location of the asset, the endpoints are published to an environment. The location of the OData service also includes the environment to which the publishing app is deployed. Connecting to a data source in the correct environment is very important. For example, when developing an app, you want to connect to the test data of the app deployed to a non-production test or acceptance environment. However, the final production app will have to access the datasets from the production environment - the actual live or working data. In the Catalog, the **Environment Type** is also specified which indicates to users the quality of the data.

    {{% alert color="info" %}}You can filter the search results by environment type in the Catalog (**Production**, **Non-production**, and the Mendix Free App environment or **Sandbox**). In the [Integration Pane](/refguide/integration-pane/) of Studio Pro, you can remove the default filter on the search results to include non-production environments. {{% /alert %}}

* **Published OData service** – At the service endpoint, there are the OData service metadata contract files that define the service. Available data sources are registered in the Catalog by exposing datasets, attributes, and associations in the [published OData service](/refguide/published-odata-services/). 
* **Versions** – The contract exposed at a specific endpoint may be changed over time by the service owner, and if good practice is followed, these changes will be indicated by changing the version number. Every published OData service has a version number. Apps consuming from a service will consume from a specific version of a service deployed to an environment.

    {{% alert color="info" %}}If significant changes are made in the service which would break any consuming apps, then good practice dictates that the service is deployed to a different endpoint with a major update in the version number. In this case the service will be listed twice for the two different endpoints. For more information see [Semantic numbering](/refguide/consumed-odata-service/#semantic) in *Consumed OData Service*. {{% /alert %}}

Mendix Admins can assign and manage **Curators**, **Owners**, and **External Users**, and control discoverability settings. For more information, see [Catalog Administration](/control-center/catalog-admin/).

## Guide Categories

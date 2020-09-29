---
title: "Data Hub Pane"
parent: view-menu
menu_order: 15
description: "Describes the Data Hub pane in Mendix Studio Pro."
tags: ["studio Pro", "data hub", "data hub pane", "data hub catalog"]
---

{{% todo %}}[replace all graphics with 8.14 screens and improve on clarity of images]{{% /todo %}}

## 1 Introduction 

[Mendix Data Hub](/data-hub/index) enables integration of available data sources from the different applications in an organization into your Mendix apps. This means that new apps can be created using shared datasets that are registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/index). In Studio Pro, this is possible using the integrated functionality of Data Hub Catalog through the **Data Hub** pane.

The **Data Hub** pane enables you to search the Data Hub Catalog and discover the data sources available for your organization. Via this pane you can add the entities that are exposed in the OData services registered in the Data Hub Catalog into your app's domain model customer where they are known as [external entities](external-entities). These external entities provide access to the data associated with the entities which can be utlized in your app.

Click  **View** > **Data Hub** to display the **Data Hub** pane:

![data-hub-pane](attachments/data-hub-pane/data-hub-pane-empty.png)

## 2 Data Hub Pane in the Domain Model

In the domain model, the Data Hub pane is used to search the Data Hub Catalog for services and entities that can be dragged and used:

![](attachments/data-hub-pane/data-hub-pane.png)

The following functionality is available in the pane:

* [Search](#search) – Enter a search string of alphanumeric characters to find a service, entity, or attribute in the Data Hub Catalog. Entities can be dragged from the search results into your domain model as external entities.
* [Filter](#search) – By default, the search will search for services in production environments. Click the **Filter** icon to include non-production environments in the search.
* [Search results](#viewing) – The items satisfying the search string will show the service name, service version, environment that the service was deployed to, and the entities in the service. Services and the entities that are currently being used in the current domain model are indicated with a green check-mark in the search results. You can drag entities from the search results into the domain model and use them as a data source for your app project.

When no search string has been specified, the **Project** pane displays the consumed services and the external entities used in the current project:

![Project Section](attachments/data-hub-pane/project-section.png)

To add entities to your project model, see [Adding an External Entity to a Project](external-entities#adding-external-entities).

## 3 Searching the Data Hub Catalog {#search}

As you enter a search term, all the items in the Data Hub Catalog satisfying the search string are listed in the search results. You can do a wildcard search by entering `*` in the search area.

{{% alert type="info" %}}
The search strings must be a minimum of 3 alphanumeric characters. Punctuation cannot be used as part of the search term except for the `*` character to perform a wildcard search in the Data Hub Catalog. For further details, see [How to Search for Registered Assets](/data-hub/data-hub-catalog/search).
{{% /alert %}}

By default, the search is restricted to apps and services deployed to a production environment. To include non-production environments in the search, click the **Filter** icon and check **Show development environments**:

![Filter Icon](attachments/data-hub-pane/filter-icon.png)

{{% alert type="info" %}}
When the development environments setting is checked, all subsequent searches will include search in non-production environments. 
{{% /alert %}}

## 4 Viewing Search Results {#viewing}

For all items satisfying the search string, the following information is displayed:

* Service name
*  An icon indicating the source of the service (Mendix, SAP, Siemens Teamcenter, or other non-Mendix apps)

	{{% todo %}}[list the icon types]{{% /todo %}}

* Service version
*  The name of the environment that the service is deployed to (for non-production environments)

	{{% alert type="info" %}}By default, search results will show deployments to production environments which will not be named in the search results. Only the names of non-production environments will be displayed.{{% /alert %}}

* Green check-mark if the service or entity is already consumed by the project
*  Blue **Update Service** icon to indicate that there is a later version of the consumed service available in the Data Hub. Click to update the service that is consumed in the project to the contract that is now available

	{{% alert type="info" %}}If there is an OData Service update available, then the entities that are listed are those that are available in the currently consumed OData service. These entities will be "grayed-out" to indicate that they can no longer be dragged into the domain model as the originial contract is no longer available in the Data Hub Catalog and a different version of the consumed OData service must be retrieved using the **Update** button. Once the service has been **Updated** then the entities will be available from the new version of the Consumed OData service. {{% /alert %}}

	{{% alert type="info" %}}The version number that is shown for the OData service is the latest one that is available in the Data Hub Catalog—in the example below version 1.0.11 of **Theatre_service** is currently consumed in the project, but version **1.0.12** is now available in the Data Hub Catalog.{{% /alert %}}
  
	![Data Hub Pane updaten](attachments/data-hub-pane/data-hub-pane-update.png)
  
*  Information icon to view further information on the service and to go directly to the [Service Details](/data-hub/data-hub-catalog/search#search-details) screen in the Data Hub Catalog: 

	![Data Hub Pane Information](attachments/data-hub-pane/data-hub-pane-info.png)

If you right-click a consumed service, you can do the following:

![info on a Service](attachments/data-hub-pane/data-hub-pane-menu.png)

* **View in Data Hub Catalog** – click this to go to the **Service Details** page in the Data Hub Catalog
* **Go to connection settings** – click this to open the [consumed OData service](consumed-odata-service) document

If you right-click an entity in the list and select **View in Data Hub Catalog**, you will go to the entity details page in the [Data Hub Catalog](/data-hub/data-hub-catalog/index).

If you right-click a consumed entity and **Go to entity**, the domain model will be opened.

{{% todo %}}[previous section: adding an external entity has now moved to the external-entities doc - watch for ex-refs]{{% /todo %}}

##  5 Read More

* [Data Hub Catalog](/data-hub/data-hub-catalog)
* [External Entities](external-entities)
* [Consumed OData Service](consumed-odata-service)
* [How to Consume Registered Assets](/data-hub/data-hub-catalog/consume)

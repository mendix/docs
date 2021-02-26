---
title: "Search for Registered Assets"
category: "Data Hub Catalog"
menu_order: 10
description: "Describes how to find data sources and datasets in the Data Hub Catalog."
tags: ["data hub", "data hub catalog"]
---

## 1 Introduction

Finding the right data is made easier with the Data Hub Catalog search functionality. The details of data assets are displayed in the [asset details](#search-details) screen. 

The [Copy Data Source URI](#service-details) or **Download** contract buttons enable you to integrate registered data sources into your enterprise applications.

You can start searching from the [Data Hub](#data-hub-home) page or click the [Catalog](#search-tab) tab to go to the **Search** pane and **Asset Details** screen.

The [Data Hub pane](/refguide/data-hub-pane) in Studio Pro connects to the powerful search in the Data Hub Catalog to enable you to use registered datasets as external entities in you app development.

This page describes the search functionality of the Data Hub Catalog and the information that is displayed for registered assets.

## 2 Details of Registered Assets

The [details](#search-details) screen for a registered data source, dataset, or attribute displays information as provided in the published OData service contract that is used to register assets in the Data Hub Catalog. Registered services and the exposed datasets can be curated to provide additional information such as **Tags** and **Descriptions** to ensure that they can be found by the appropriate users.

{{% alert type="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro, which by default, is the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

### 2.1 Published OData Service 

The contract of the published OData service (the *$metadata* document) contains the details of what is exposed in the service. This includes the metadata of the exposed datasets (or entity sets in Mendix Studio Pro) and their exposed attributes, associations, types, and accessibility. This information about the registered OData service is shown in the search details. 

For details on creating a published OData service in Studio Pro, see [How to Register Data Assets](register).

### 2.2 Versions 

Every published OData service or data source as they are known as in the Data Hub Catalog has a version number, and apps that consume a datasource will consume from a specific version. Updates and changes to a service will be indicated by a change in the version number if good practice is followed by the data source originators. This means that there may be several versions of a registered data source available in the catalog and they will all be listed as separate items in the search results for the same-named data source.

The [search details](#search-details) screen in the Data Hub Catalog will include the version of the selected service.

### 2.3 Environments

The Data Hub Catalog is a register of apps that are deployed to a particular environment and the services (or data sources as they are known in Data Hub) published from the apps deployed to the environment. This means that the Catalog registers the version of a service running in a specific environment. The environment also indicates the quality of the dataset that is available. Shared datasets that are available from a *production environment* will have production-level data, while those in non-production environments (*acceptance*, *development*) could be populated with data that may not be reliable for building stable apps and be useful for doing development work.

The search results will show these data source endpoints (which is the combination of the OData service version deployed on a specific environment). Therefore, if a version of a service is deployed on both a test and acceptance environment, a search on the service name in the Data Hub Catalog will have two hits. 

The environment is therefore a major component of the definition and forms part of the URL for the endpoint being consumed. This, in combination with the OData version number, provides the link to the correct data for the datasets that are exposed.

{{% alert type="info" %}}
By default, search results in the Data Hub Catalog are filtered to show only hits in the Production environment. You can extend the search to **Non-production** or **Mendix Free App (Sandbox)** environments by checking them in the search pane **Add Filter** list. For more details, see [Filters](#filter).
{{% /alert %}}

### 2.4 URLs 
The service URLs provide the locations of the service contract. In turn, these define the endpoints for exposed datasets (or entity sets) and attributes and thereby access to the associated datasets by the consuming apps. You obtain data source and dataset URI's from the search details for integration of the resource in other BI applications. 

### 2.5 Discoverability 
When a data source is registered, by default, it is "published" for public use with the **Discoverable** setting in the Data Hub Catalog. When this is set, all users can find it and the view details and consume it. Owners and curators of a registered service can set a service to be non-discoverable, which means that it can only be found and consumed by the owners and is not visible to other users of the Catalog.

### 2.6 Tags 
Tags help you to group services and datasets and categorize them (for example, by department, process, or use). You can use tags to refine the search and filter search results in the Data Hub Catalog by doing the following:

* Add tags to the service as a curate function in the Data Hub Catalog after a service is registered by service owners and [Data Hub Curators](../index#curator)
* Add different tags to the different versions of the same service, as they will be two separately registered assets in the catalog (this is also a way to make different version identifiable)
* Add tags to the datasets exposed in the service
* Add tags in the [manual registration of OData v4 services](register#registration-form)

### 2.7 Description
The description that is included as part of the published service metadata. This description can be further curated at the data source, dataset, and attribute level by owners and curators to provide further details of the exposed datasets and the associated data.

{{% alert type="info" %}}
In Studio Pro, when publishing an OData service, it is possible to specify a summary of the service and a description. Only the description is included in the OData service contract document and displayed in the Data Hub Catalog.
{{% /alert %}}

### 2.8 Contacts for Registered Apps and Services 
In the Data Hub Catalog, the search details for a service include a **Technical Owner** (for technical inquiries) and the **Business Owner** who is responsible for the data sets. Owners who are registered Mendix platform users can curate their assets.

## 3 Searching in the Data Hub Catalog {#data-hub-home}

When searching in the Data Hub Catalog, the following fields are searched:

* Data source or service endpoint: Name, Description, Tags
* Application: Name
* Dataset: Name, Description
* Attribute: Name, Description
* Association: Name

From the **Data Hub** page, you can search in the Data Hub Catalog in the following ways:

![](../share-data/attachments/share-data/data-hub-home.png)

* Type a search term in the search box and click **Search** (search strings can comprise a minimum of 3 characters and include the alphanumeric characters)
* Click one of the *tags* given in the **Search suggestions**
* Click one of the services under **Most Popular Services**
* Click the **Catalog** tab

Any of the above actions will take you to the **Search** screen, which is described below.

## 4 Search Screen {#search-tab}

The **Search** screen is divided into the [search](#search-pane) pane on the left, the [asset details](#search-details) of the selected asset in the centre panel, and the [asset metadata](#metadata) panel on the right.

![](attachments/search/search-details-page.png)

### 4.1 Search Pane {#search-pane}

The collapsable **Search** pane is used to search for registered assets in the Data Hub Catalog:

 {{% image_container width="300" %}}![](attachments/search/search-pane.png){{% /image_container %}}

#### 4.1.1 Search Area

Enter a search string in the **Search** area comprising a minimum of 3 alpha-numeric characters.

The wildcard `*` can also be used to imply an empty search but it is not necessary as search without specifying any search string will return all registered items. 

{{% alert type="info" %}}
Punctuation cannot be used as part of the search term. 
{{% /alert %}}

{{% alert type="info" %}}
Search is case-insensitive.
{{% /alert %}}

#### 4.1.2 Filters {#filter}

You can filter search results by environment type. By default, the **Production** environment filter is active to restrict search results to the production environment. The number of filters that are active for the current search is displayed adjacent to the filter: 

{{% image_container width="200" %}}![](attachments/search/filter-active.png){{% /image_container %}}


To specify the environment type for the search, click **Filter**:

![](attachments/search/dh-filter-box.png)

In the **Filters** dialog box, check the **Environment Type** that you want to restrict your search to and click, **Apply Filters**. The search results will only display hits for the specified search string in the checked environments.

Click **Clear Filters** to clear all the checked environments and click **Apply Filters** to see search results in all environments.

{{% alert type="info" %}}
The **Sandbox** filter refers to apps deployed to the Mendix Free App environment. 
{{% /alert %}}

#### 4.1.3 Search Results

The number of items satisfying the search criteria (search string plus filters) are shown at the top of the search results. Search results will include assets that match the search string and satisfy the active filters. Items that are included in the search include all application names, data sources, datasets (or entity sets), attributes, tags, and descriptions. The order of the search results will be a combination of the following:

* Closest match to the search string
* Popularity of the service (number of connections)

If no search string is specified, all registered assets will be listed in the search results pane in order of popularity (number of connections to the asset).

When an item in the search results is selected, the **Catalog** tab will display the **Details** of the asset and the **Landscape** tab will show the network of connections and dependencies of the selected item in the [Data Hub Landscape](../data-hub-landscape/index).

### 4.2 Selected Asset Details {#search-details}

When you click on an asset (data source or dataset) in the search results, the details are displayed in this panel. 

#### 4.2.1 Details of a Selected Data Source {#service-details}

When a data source is selected in the search results, the following details are displayed:

![](attachments/search/search-details-service.png)

* Application icon

* Name of the data source

* **Validated** tag – if it has been set for the asset

* **Environment Name** – where the app is deployed

* **Version** number of the service

* **Connections** –  number of apps that consume the service

* A description of the data source

* Each **Dataset** that is exposed in the data source (you can expand this to see details of the attributes and associations) 

	{{% alert type="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro, which by default, is the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}
	

You can perform the following actions from this screen:

* **Copy Data Source URI** –  click to copy the URI of the data source contract to the clipboard. This URI can be used to integrate the data source in other enterprise applications.
*  **Share Data Source** –  click to copy the link to this asset detail page to the clipboard so that you can share it with others.
*  [Download](#download-contract) – retrieve and save the metadata contract locally.
* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications.

#### 4.2.2 Details for a Selected Dataset {#entity-details}

When an **Dataset** is selected in the search results, the following details are displayed in the **Search Details** panel:

![](attachments/search/search-details-entity.png)

* Dataset name

* **Part of** –  a link to the data source details page that the dataset is exposed in

* **Version** number of the data source that the dataset is exposed in

* **Connections** – the number of apps that consume this dataset

* A description of the dataset

* **Dataset Information**
	The **Attributes** that are exposed for the dataset for this data source are listed showing the attribute types and description.

	Under the **Associations** tab for each dataset, the associations are shown:

	![](attachments/search/attributes-associations.png)

	* **Name** – the name of the association that is exposed in the OData service contract
	* **Navigates to** – the dataset the association is made with. Click the link to see the details of the associated dataset in the Catalog. 
	* **Multiplicity** – the number of object at the other end of the association (0..1, 1 or *)

You can perform the following actions from this screen:

* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications
* **Share Dataset** – click to copy the link to this dataset detail page to the clipboard so that it can be shared with others


### 4.3 Data Source Metadata Panel {#metadata}

The data source metadata panel at the right of the asset details screen displays details from the OData service metadata contract and values that have been curated in the Data Hub Catalog:

 {{% image_container width="300" %}}![](attachments/search/metadata.png){{% /image_container %}}

* **Tags** – tags that have been assigned to the data source when it has been [curated](curate#tags)
	{{% alert type="info" %}}Tags assigned at a data source level propagate down to the datasets and attributes exposed in the service.{{% /alert %}}
* **Business Owner** – links to the business owner of the data fr the data source; this is added as a curation task
* **Technical Owner** – technical contact of the app; by default this is the owner who registered the OData service. For apps hosted in the Mendix Cloud, the **Technical Owner** is the **Technical Contact** of the app in the Mendix Cloud
* **Discoverability** – the discoverability of the asset so that other users can find it:
	* **Discoverable** – all users of the Data Hub Catalog and Studio Pro can see and consume the asset provided they meet the requirements of the **Classification**
	* **Non-Discoverable** – the asset is not visible in the Catalog and only owners, Data Hub curators, and the Data Hub Admin can find, use, and curate the service. See [Curate Bar](#curate-bar) for changing **Discoverability** as an owner or curator.
	  {{% alert type="info" %}}If an asset is set to **Non-discoverable** it will not appear in the search results in the **Data Hub** pane of Studio Pro, or any other client of the Data Hub API.{{% /alert %}}
* **Access Level** – shows the access classification of the service; end-users of the data associated with the datasets exposed in the service must have the appropriate [user role](/refguide/user-roles) to access the data:
	* **Public** – classified as public and available to all users	
	* **Internal** – restricted to the members of the organization
	{{% alert type="info" %}}Classifications at a data source level propagate down to the datasets and attributes exposed in the OData service. {{% /alert %}}
* **Environment Type** – indicates the quality and the status of the data associated with the exposed datasets by the environment that the app and service are deployed to. The following are the environment types: 
  * **Production**
  * **Non-Production** 
  * **Sandbox** (the Mendix Free App environment) 
* **Application** – a link to the app in the given environment from which the OData service was published 

### 4.4 Curate Bar {#curate-bar}

The **Curate Bar** is displayed on the asset detail screen if you are the owner of the selected asset or a curator:

![](attachments/search/curate-bar.png)

You can perform the following actions:

* **Edit Metadata** – edit detals that are displayed in the Catalog: 
  * for a selected data source you can edit [Application Details](./curate#curate-application) and [Data Source Details](./curate#service-details)
  *  for a selected dataset you can edit [Dataset Details](./curate#curate-datasets)
* **Discoverable**/**Validated** – set the discoverability of the service, and validate the dataset
  * **Discoverable** – all users of Data Hub and Studio Pro can see and consume the service in combination with the classification of the data
  * **Non-Discoverable** – the service is not visible and only owners of the service, Data Hub curators, and the Data Hub Admin can access the service
  * **Validated** – indicate if the dataset has been validated

{{% alert type="info" %}}By default, newly registered services are set to **Discoverable** and visible to all users. {{% /alert %}}

For further details on curating registered assets see [Curation](./curate).

## 5 Download the Metadata Contract of a Data Source {#download-contract}
For a selected data source you can click **Download** to download the OData service contract as a ***.zip*** file. This will include the all the files that make up the full metadata contract. The resulting ***.zip*** file will be named as follows:

`DataHub_<service_name>_<service_version>_<technology>.zip`

The string *technology* identifies the OData version (v3 or v4) in the file name.

For the following example: 

![](attachments/search/download_example.png)

When you click **Download** the following file is downloaded: `DataHub_SAMPLE_EmployeeDirectory_1.1.0_OData3.zip`

This zip file comprise the folder: `DataHub_SAMPLE_EmployeeDirectory_1.1.0_OData3` which contains the metadata files that define the service:

`metadata.xml`
`serviceFeed.xml`

## 6 Viewing Search Results in the Data Hub Landscape

When an item is selected in the search results pane, you can click the [Landscape](../data-hub-landscape/index) tab to see the network of connections and dependencies for the selected asset. This enables you to graphically see the context and relevance for a selected item and the data for the exposed datasets.

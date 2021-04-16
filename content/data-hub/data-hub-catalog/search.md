---
title: "Search in the Data Hub Catalog"
category: "Data Hub Catalog"
menu_order: 10
description: "Describes how to find data sources and datasets in the Data Hub Catalog."
tags: ["data hub", "data hub catalog"]
---

## 1 Introduction

The search functionality in the [Data Hub Catalog](#data-hub-home) makes it easy to find the right data to use in your app development. 

* The details of registered data assets can be viewed in the [Asset details](#search-details) screen
* The [Copy Data Source URI](#service-details) and **Download** contract buttons enable you to access the data source endpoints which you can use to integrate registered data sources into your enterprise applications

You can start searching from the [Data Hub Home](#data-hub-home) page or click the [Catalog](#search-tab) tab to go to the **Search** pane and **Asset Details** screen.

{{% alert type="info" %}}The [Data Hub pane](/refguide/data-hub-pane) in Studio Pro integrates the powerful search of the Data Hub Catalog. You can find and use registered datasets as external entities in your app development.{{% /alert %}}

Registered assets can be [curated](#curate-bar) to add and edit **Tags**, **Owners**, and **Descriptions**. Further curate functions include setting properties such as  **Discoverable** and **Validated** . 

## 2 Details of Registered Assets

The Catalog displays the [information](#search-details) about data sources, datasets, and attributes (the metadata). This section describes important properties of registered contracts.

{{% alert type="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro, which by default, is the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

### 2.1 Versions 

Every published OData service (which is referred to as a data source in Data Hub) has a version number and apps that consume a data source will consume a specific version. When the data source owner issues updates and changes to a service, if good practice is followed, this will be indicated by a change in the version number. If the changed Odata services is deployed to a different endpoint this will result in several versions that are available in the Catalog. Each endpoint will be listed as a separate item in the search results.

The version of the selected data source is displayed in the [Asset Details](#search-details).

### 2.2 Environments

The Data Hub Catalog is a collection of apps that are deployed to a particular environment, and the services/data sources published from the apps that are deployed to the same environment. This means that each registered data source has a unique **endpoint**. This endpoint is the location of the OData service contract where the particular version of the service is running in a specific environment.

The environment also provides an indication of the quality of the data that is going to be available. Shared datasets available in *production environments* will have production-level or live data. Shared datasets in non-production environments (*acceptance*, *development*) indicates that it is not live data but includes representative data that is useful for development work.

Search results show the data source endpoints. Therefore, if a version of a service is deployed on both a test and acceptance environment, a search on the service name will have two hits. 

{{% alert type="info" %}}
By default, search results in the Data Hub Catalog are filtered to show only hits in the **Production** environments. You can extend the search to **Non-production** or **Mendix Free App (Sandbox)** environments by checking them in the search pane **Add Filter** list. For more details, see the [Filters](#filter) section below.
{{% /alert %}}

### 2.3 Asset Descriptions

A description is included as part of the published service metadata. This description can be further curated at the data source, dataset, and attribute level by owners and curators to provide further details.

{{% alert type="info" %}}
In Studio Pro, when publishing an OData service, it is possible to specify a summary and a description of the service. Only the description is included in the OData service contract document and displayed in the Data Hub Catalog.
{{% /alert %}}

## 3 Search in the Data Hub Catalog {#data-hub-home}

When searching in the Data Hub Catalog, the following fields are searched:

* Data source or service endpoint: Name, Description, Tags
* Application: Name
* Dataset: Name, Description
* Attribute: Name, Description
* Association: Name

### 3.1 Searching for Assets

From the **Data Hub Home** page, you can you can search the Catalog in the following ways: 

![](../share-data/attachments/share-data/data-hub-home.png)

* Type a search term in the search box and click **Search** (use at least three alphanumeric characters)
* Click one of the *tags* given in the **Search suggestions**
* Click one of the services under **Most Popular Services**
* Click the **Catalog** tab

Any of the above actions will take you to the **Search** screen.

### 3.2 Search Screen {#search-tab}

The **Search** screen is divided into the [search](#search-pane) pane on the left, the [asset details](#search-details) of the selected asset in the center panel, and the [asset metadata](#metadata) panel on the right.

![](attachments/search/search-details-page.png)

## 4 Search Pane {#search-pane}

The collapsible **Search** pane is used to search for registered assets:

{{% image_container width="300" %}}![](attachments/search/search-pane.png){{% /image_container %}}

### 4.1 Specifying the Search

Enter a search string in the **Search** area using a minimum of three alphanumeric characters.

The wildcard `*` can also be used to imply an empty search but it is not necessary. Searching without specifying any search string will return all registered items. 

{{% alert type="info" %}}
Punctuation cannot be used as part of the search term. 
{{% /alert %}}

{{% alert type="info" %}}
Search is case-insensitive.
{{% /alert %}}

### 4.2 Filters {#filter}

You can filter search results by environment type. By default, the **Production** environment filter is active, restricting search to assets in a production environment. 

To specify the environment type for the search, click **Filter**:

![](attachments/search/dh-filter-box.png)

In the **Filters** dialog box, check the **Environment Types** that you want to include, and click **Apply Filters**. The search results will only display hits for the specified search string in the checked environments.

{{% alert type="info" %}}
The **Sandbox** filter refers to apps deployed to the Mendix Free App environment. 
{{% /alert %}}

The number of filters that are active for the current search is displayed adjacent to the filter: 

{{% image_container width="200" %}}![](attachments/search/filter-active.png){{% /image_container %}}

Click **Clear Filters** to clear all the checked environments and click **Apply Filters** to see search results in all environments.

### 4.3 Search Results

The number of items satisfying the search criteria (search string plus filters) are shown above the search results list. Items in the asset metadata that are searched include all application names, data sources, datasets (or entity sets), attributes, tags, and descriptions. The order of the search results will be a combination of the following:

* Closest match to the search string
* Popularity of the service (the number of connections)
* **Validated** assets before not validated items

{{% alert type="info" %}}Assets that are set to [Not Discoverable](#discoverability-metadata) are not included in the search results unless you are a curator or owner of the asset.{{% /alert %}}

When an item in the search results is selected, the **Catalog** tab displays the **Details** of the asset and the **Landscape** tab will show the network of connections and dependencies of the selected item in the [Data Hub Landscape](/data-hub/data-hub-landscape/).

## 5 Selected Asset Details {#search-details}

When you click on an asset (data source or dataset) in the search results, the details are displayed in this panel. 

### 5.1 Details of a Selected Data Source {#service-details}

The contract of the published OData service (the *$metadata* document) contains the definitions and details of what is exposed in the service. This includes the metadata of the exposed datasets (or entity sets in Mendix Studio Pro) and their exposed attributes, associations, types, and accessibility. The contract metadata is displayed in the Data Source details along with any Catalog-curated metadata. 

When a data source is selected in the search results, the following details are displayed:

![](attachments/search/search-details-service.png)

* Application icon

* Name of the data source

* **Non-discoverable** icon – if the data source has been set to non-discoverable (by default, no icon indicates that it can be seen by all users in your company)

* **Validated** icon – if it has been set for the asset

* **Environment Name** – where the app is deployed

* **Version** number of the service

* **Connections** – number of apps that consume the service

* A description of the data source

* All **Datasets** that are exposed in the data source (you can expand each one to see details of the attributes and associations) 

{{% alert type="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro. By default, the entity name has an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}
	
You can perform the following actions from this screen:

* **Copy Data Source URI** – click to copy the URI of the data source contract to the clipboard; this URI can be used to integrate the data source in other enterprise applications
*  **Share Data Source** – click to copy the link to this asset detail page to the clipboard so that you can share it with others
*  [Download](#download-contract) – retrieve and save the OData contract from the data source endpoint to your computer

### 5.2 Details for a Selected Dataset {#entity-details}

When a **Dataset** is selected in the search results, the following details are displayed in the **Search Details** panel:

![](attachments/search/search-details-entity.png)

* Dataset name

* **Part of** – a link to the data source details page that the dataset is exposed in

* **Version** number of the data source that the dataset is exposed in

* **Connections** – the number of apps that consume this dataset

* A description of the dataset

* **Dataset Information**
	The **Attributes** that are exposed for the dataset in the OData service are listed showing the attribute types and description.

	Under the **Associations** tab for each dataset, the associations are displayed:

	![](attachments/search/attributes-associations.png)

	* **Name** – the name of the association that is exposed in the OData service contract
	* **Navigates to** – the dataset the association is made with; click the link to see the details of the associated dataset in the Catalog
	* **Multiplicity** – the number of object at the other end of the association (0..1, 1 or *)

You can perform the following actions from this screen:

* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications
* **Share Dataset** – click to copy the link to this dataset detail page to the clipboard so that it can be shared with others

## 6 Metadata Panel {#metadata}

The metadata panel at the right of the asset details screen displays details from the OData service metadata contract and values that can be curated in the Data Hub Catalog:

 {{% image_container width="300" %}}![](attachments/search/metadata.png){{% /image_container %}}

### 6.1 Tags

The tags that have been assigned to the data source during [curation.](curate#tags)
{{% alert type="info" %}}Tags assigned at a data source level propagate down to the datasets and attributes exposed in the service.{{% /alert %}}

### 6.2 Business Owner

A link to the business owner of the data exposed in the data source. Business owners can be added. For more information, see the [Changing Owners of an Application](curate#changing-owners) section of *How to Curate Registered Assets*.

### 6.3 Technical Owner

The technical contact of the app; by default this is the owner who registered the OData service. For apps hosted in the Mendix Cloud, by default, the **Technical Owner** is the app developer who deployed the app. For more information, see the [Changing Owners of an Application](curate#changing-owners) section of *How to Curate Registered Assets*.

### 6.4 Discoverability {#discoverability-metadata}

When a data source is registered, by default, it is **Discoverable** in the Data Hub Catalog. When this is set, all users can find it, view the details, and consume it. The owners of an asset and curators can set a data source as **Not discoverable**, which means it is not visible to users unless they are the owner or a curator.

See [Curate Bar](#curate-bar) for changing **Discoverability** as the owner of the data source or curator.

The following discoverability values can be set:

* **Discoverable** – all users of the Data Hub Catalog and Studio Pro can see and consume the asset provided they meet the requirements of the **Classification**
* **Not Discoverable** – the asset is not visible in the Catalog; only owners, Data Hub curators, and the Data Hub Admin can find, use, and curate the service
  {{% alert type="info" %}}A **Not discoverable** asset is also not included in the search results in the **Data Hub** pane of Studio Pro, or any other client of the Data Hub API.{{% /alert %}}

### 6.5 Validated

Indicates if the data source has been **Validated**. See [Curate Bar](#curate-bar) for changing **Validated** as an owner of the data source or curator.

### 6.6 Access Level

Displays the access classification of the data exposed by the service: end-users of the app will only be able to see the information must have the appropriate [user role](/refguide/user-roles) to access the data:

* **Public** – classified as public and available to all users, internal and external to the organization
* **Internal** – restricted to the members of the organization
  {{% alert type="info" %}}Classifications at a data source level propagate down to the datasets and attributes. {{% /alert %}}

### 6.7 Application

A link to the application from which the data source was published. 

### 6.8 Environment Type

The environment type indicates the quality and the status of the data. The following environment types can be specified: 

* **Production**
* **Non-Production** 
* **Sandbox** (the Mendix Free App environment) 

## 7 Curate Bar {#curate-bar}

The **Curate Bar** is displayed in the asset detail screen if you are the owner of the selected asset or a curator:

![](attachments/search/curate-bar.png)

Owners and curators can carry out the following actions:

* **Edit Metadata** – edit information that is displayed in the Catalog for the asset: 
  * for a selected data source you can edit [Application Details](./curate#curate-application) and [Data Source Details](./curate#service-details)
  *  for a selected dataset you can edit [Dataset Details](./curate#curate-datasets)
* **Discoverable**/**Validated** – set the discoverability of the service, and validate the dataset
  * **Discoverable** – all users of the Data Hub Catalog and Mendix Studio Pro can see and consume the service 
  * **Not Discoverable** – the service is not visible and only owners of the service, Data Hub curators, and the Data Hub Admin can access the service
  * **Validated** – indicates if the dataset has been validated

{{% alert type="info" %}}By default, newly registered services are set to **Discoverable** and visible to all users and are set to **Not validated**.{{% /alert %}}

For further details, see [Curation](/data-hub/data-hub-catalog/curate).

## 8 Data Source and Dataset URIs 

The data source URI is the location of the service contract of the data source – also known as the service endpoint. The endpoints of all exposed datasets (entity sets) are defined in the contract. From the details screen of the data source and dataset, you can copy the URIs to the clipboard by clicking the **Copy Data Source URI** and **Copy Dataset URI**, respectively. These URIs can be used for directly accessing the contract and resource in other BI applications. 

## 9 Download the Metadata Contract of a Data Source {#download-contract}

For a selected data source you can click **Download** to download the OData service contract as a ***.zip*** file. This will include the all the files that make up the full metadata contract. The resulting ***.zip*** file will be named as follows:

```DataHub_<service_name>_<service_version>_<technology>.zip```

The string *technology* identifies the OData version (v3 or v4) in the file name.

For the following example: 

![](attachments/search/download_example.png)

When you click **Download** the following file is downloaded: `DataHub_SAP_Intelligence_1.0_OData4.zip`

This zip file cotains the folder: `DataHub_SAP_Intelligence_1.0_OData4` which contains the all the metadata files that define the service.

## 10 Viewing Search Results in the Data Hub Landscape

When an item is selected in the search results pane, you can click the [Landscape](/data-hub/data-hub-landscape/) tab to see the network of connections and dependencies for the selected asset. This provides a graphical representation to indicate the context and relevance of a selected item and the data for the exposed datasets.

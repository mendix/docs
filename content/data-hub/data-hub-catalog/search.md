---
title: "Search in the Data Hub Catalog"
url: /data-hub/data-hub-catalog/search/
category: "Data Hub Catalog"
menu_order: 10
description: "Describes how to find data sources and datasets in the Data Hub Catalog."
tags: ["data hub", "data hub catalog", "data source", "dataset"]
---

## 1 Introduction

Finding the right data to use in your app development is made easier using the search functionality in the Data Hub Catalog. The details of registered data assets can be accessed using the [Data Hub Search API](/apidocs-mxsdk/apidocs/data-hub-apis), or viewed in the [Asset details](#search-details) screen of the Catalog or the [Data Hub pane](/refguide/data-hub-pane) in Studio Pro.  This document describes how you can search in Data Hub Catalog.

## 2 Search Using the API {#search-api}

To use the Data Hub Catalog Search API, you need the following:

* A [Personal Access Token](https://docs.mendix.com/data-hub/data-hub-catalog/register-data#create-token)
* A search term

For more details on what can and cannot be provided in your search query, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/search.html#/Search/get_data).

You can see an example of a request below where the search term is `Customer`:

```curl
curl --location --request GET 'https://hub.mendix.com/rest/search/v3/data?query=Customer' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>'
```

A successful `GET` call results in a `200` status code and a JSON response body that includes the details about the search results:

```json
{
    "TotalResults": 145,
    "Links": [
        {
            "Href": "https://hub.mendix.com/rest/search/v3/data?query=Customer",
            "Rel": "First"
        },
        {
            "Href": "https://hub.mendix.com/rest/search/v3/data?query=Customer",
            "Rel": "Current"
        },
        {
            "Href": "https://hub.mendix.com/rest/search/v3/data?query=Customer&afterId=18d7d608-723f-4f33-b247-a85271d5eefd",
            "Rel": "Next"
        }
    ],
    "Data": [
        {
            "Connections": 34,
            "Validated": true,
            "Description": "This is the primary data source for customer information.",
            "SecurityClassification": "Internal",
            "TotalItems": 3,
            "Name": "CustomerApi",
            "Version": "1.1.0",
            "ContractType": "OData_3_0",
            "Environment": {
                "Type": "Production",
                "UUID": "5f0e2439-cc8b-4b12-87a4-556437d9e4d1",
                "Name": "Production",
                "Location": "https://your-app-url.com"
            },
            "Links": [
                {
                    "Rel": "Self",
                    "Href": "https://hub.mendix.com/rest/search/v3/endpoints/9756545b-9b36-4f51-8655-1102c36e9288"
                },
                {
                    "Rel": "Catalog",
                    "Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=9756545b-9b36-4f51-8655-1102c36e9288"
                }
            ],
            "Items": [
                {
                    "Type": "DataSource",
                    "Validated": false,
                    "EntitySetName": "Customers",
                    "Updatable": false,
                    "Links": [{
                        "Rel": "Catalog",
                        "Href": "https://hub.mendix.com/link/entity?EndpointUUID=9756545b-9b36-4f51-8655-1102c36e9288&EntityUUID=d27150f1-1ba3-41f0-965b-3ce3402412ef"
                    }],
                    "Deletable": false,
                    "Items": [
                        {
                            "Type": "Attribute",
                            "EdmxType": "Edm.Int64",
                            "Updatable": false,
                            "Insertable": false,
                            "Name": "CustomerId"
                        },
                        {
                            "Type": "Association",
                            "ReferencedDataSource": "ContactHistory",
                            "Multiplicity": "*",
                            "EntitySetName": "ContactHistorys",
                            "Updatable": false,
                            "Insertable": false,
                            "Namespace": "mx.customer.api",
                            "Name": "ContactHistory_Customer",
                            "EntityTypeName": "ContactHistory"
                        },
                        {
                            "Type": "Association",
                            "ReferencedDataSource": "ContactInfo",
                            "Multiplicity": "0..1",
                            "EntitySetName": "ContactInfos",
                            "Updatable": false,
                            "Insertable": false,
                            "Namespace": "mx.customer.api",
                            "Name": "ContactInfo_Customer",
                            "EntityTypeName": "ContactInfo"
                        }
                    ],
                    "TotalItems": 6,
                    "Insertable": false,
                    "Namespace": "mx.customer.api",
                    "Name": "Customer",
                    "EntityTypeName": "Customer"
                },
                {
                    "Type": "DataSource",
                    "Validated": false,
                    "EntitySetName": "ContactHistorys",
                    "Updatable": false,
                    "Links": [{
                        "Rel": "Catalog",
                        "Href": "https://hub.mendix.com/link/entity?EndpointUUID=9756545b-9b36-4f51-8655-1102c36e9288&EntityUUID=3aeb0d6b-4205-4bc6-adef-67487e85e178"
                    }],
                    "Deletable": false,
                    "Items": [{
                        "Type": "Association",
                        "ReferencedDataSource": "Customer",
                        "Multiplicity": "0..1",
                        "EntitySetName": "Customers",
                        "Updatable": false,
                        "Insertable": false,
                        "Namespace": "mx.customer.api",
                        "Name": "ContactHistory_Customer",
                        "EntityTypeName": "Customer"
                    }],
                    "TotalItems": 6,
                    "Insertable": false,
                    "Namespace": "mx.customer.api",
                    "Name": "ContactHistory",
                    "EntityTypeName": "ContactHistory"
                },
                {
                    "Type": "DataSource",
                    "Validated": false,
                    "EntitySetName": "ContactInfos",
                    "Updatable": false,
                    "Links": [{
                        "Rel": "Catalog",
                        "Href": "https://hub.mendix.com/link/entity?EndpointUUID=9756545b-9b36-4f51-8655-1102c36e9288&EntityUUID=6939a90c-c3bc-4eaf-a741-a484cf2248ad"
                    }],
                    "Deletable": false,
                    "Items": [{
                        "Type": "Association",
                        "ReferencedDataSource": "Customer",
                        "Multiplicity": "*",
                        "EntitySetName": "Customers",
                        "Updatable": false,
                        "Insertable": false,
                        "Namespace": "mx.customer.api",
                        "Name": "ContactInfo_Customer",
                        "EntityTypeName": "Customer"
                    }],
                    "TotalItems": 11,
                    "Insertable": false,
                    "Namespace": "mx.customer.api",
                    "Name": "ContactInfo",
                    "EntityTypeName": "ContactInfo"
                }
            ],
            "LastUpdated": "2021-07-24T16:12:52.795Z",
            "UUID": "9756545b-9b36-4f51-8655-1102c36e9288",
            "SecurityScheme": {
                "Types": [{"Name": "Anonymous"}],
                "MxAllowedRoles": [
                    {
                        "UUID": "abc56ffb-75ab-44f6-9c04-87fbe419ce74",
                        "Name": "Administrator"
                    },
                    {
                        "UUID": "3f8cbb62-bbcc-4d9f-b583-27d4b50d5405",
                        "Name": "User"
                    }
                ]
            },
            "Application": {
                "Type": "Other",
                "TechnicalOwner": {
                    "Email": "roselien.opmeer@mendix.com",
                    "OpenID": "https://mxid2.mendixcloud.com/mxid2/id?id=3abbc519-36cb-49e0-b158-120e9100e8be",
                    "Name": "Roselien Opmeer"
                },
                "Icon": "https://hub.mendix.com/resources/logos/other_icon.png",
                "UUID": "34aacfda-8a85-497c-bb21-74f1c6ee2b18",
                "RepositoryLocation": "https://sprintr.home.mendix.com/link/project/a2e76491-bd8d-4284-b865-00c9ae8dde94",
                "BusinessOwner": {
                    "Email": "roselien.opmeer@mendix.com",
                    "OpenID": "https://mxid2.mendixcloud.com/mxid2/id?id=3abbc519-36cb-49e0-b158-120e9100e8be",
                    "Name": "Roselien Opmeer"
                },
                "Name": "CustomerApp"
            },
            "Tags": [
                {"Name": "customer"},
                {"Name": "contact"}
            ]
        }, {...}, {...}, {...},
    ],
    "Limit": 20,
    "LastId": "18d7d608-723f-4f33-b247-a85271d5eefd"
}
```

## 3 Search in the Catalog {#search-catalog}

### 3.1 Details of Registered Assets

You can start searching from the [Data Hub Home](#data-hub-home) page, or click the [Catalog](#search-tab) tab to go to the **Search** pane and **Asset Details** screen. This section describes important properties of registered assets: data sources, datasets, and attributes.

{{% alert type="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro, which by default, is the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

#### 3.1.1 Versions

Every published OData service (or data source) has a version number. Apps that consume a data source will consume from a specific version. Updates and changes to a service will be indicated by a change in the version number. Several versions of a registered data source may be available in the Catalog. The data source version is displayed in the [Asset Details](#search-details).

#### 3.1.2 Environments

The Data Hub Catalog is a register of published OData services (or data sources) that are deployed to a particular environment. Each registered data source is a unique **endpoint** combination of service version and environment.

The environment also provides an indication of the quality of the dataset that is available. Shared datasets that are available from a *production environment* will have production-level data, while those in non-production environments (*acceptance*, *development*) could be populated with data that may not be reliable for building stable apps but be useful for development work.

Search results show the data source endpoints. If a version of a service is deployed on both a test and acceptance environment, two endpoints are shown in the search results.

{{% alert type="info" %}}
By default, search results in the Data Hub Catalog are filtered to show only hits in the **Production** environments. You can extend the search to **Non-production** or **Mendix Free App (Sandbox)** environments by checking them in the search pane **Add Filter** list. For more details, see the [Filters](#filter) section below.
{{% /alert %}}

#### 3.1.3 Asset Description

The description that is included as part of the published service metadata. This description can be edited at the data source, dataset, and attribute level by owners and curators.

{{% alert type="info" %}}
In Studio Pro, when publishing an OData service, it is possible to specify a summary of the service and a description. Only the description is included in the OData service contract document and registered in the Data Hub Catalog.
{{% /alert %}}

### 3.2 Searching for Assets from Data Hub Home {#data-hub-home}

When searching in the Data Hub Catalog, the following fields are searched:

* Data source or service endpoint: Name, Description, Tags
* Application: Name
* Dataset: Name, Description
* Attribute: Name, Description
* Association: Name

From the **Data Hub Home** page, you can search the Catalog in the following ways:

![data hub home page](/data-hub/share-data/attachments/share-data/data-hub-home.png)

* Type a search term in the search box and click **Search** (search strings must be at least 3 alphanumeric characters)
* Click one of the *tags* given in the search suggestions
* Click one of the services under **Popular Data Sources**
* Click the **Catalog** tab

Any of the above actions will take you to the **Search** screen.

### 3.3 Search Screen {#search-tab}

The **Search** screen is divided into the [search](#search-pane) pane on the left, the [asset details](#search-details) of the selected asset in the center panel, and the [asset metadata](#metadata) panel on the right.

![search details](attachments/search/search-details-page.png)

### 3.4 Search Pane {#search-pane}

The collapsible **Search** pane is used to search for registered assets in the Data Hub Catalog:

 {{% image_container width="300" %}}![search pane](attachments/search/search-pane.png){{% /image_container %}}

#### 3.4.1 Specifying the Search

Enter a search string in the **Search** area with a minimum of 3 alphanumeric characters. Searching for the wildcard `*` or the empty string `''` will return all registered items.

#### 3.4.2 Filters {#filter}

You can filter search results by environment type. The **Production** environment filter is active by default.

To change the environment type filter, click **Filter**:

![filter box](attachments/search/dh-filter-box.png)

In the **Filters** dialog box, check the **Environment Type** that you want to include in your search. Then click **Apply Filters**. The search results will only display results in the selected environments.

#### 3.4.3 Search Results {#search-results}

The number of items satisfying the search criteria (search string plus filters) are shown in the search results list. The order of the items presented in the search results will be a combination of the following:

* Closest match to the search string
* Popularity of the service (the number of connections)
* **Validated** assets before non-validated ones

When an item in the search results is selected, the **Landscape** tab shows the network of connections and dependencies of the selected item in the [Data Hub Landscape](/data-hub/data-hub-landscape/).

### 3.5 Selected Asset Details {#search-details}

When you click a search result, the details are displayed in this panel.

#### 3.5.1 Details of a Selected Data Source {#service-details}

The contract of the published OData service (the *$metadata* document) contains the details of what is exposed in the service. This includes the metadata of the exposed datasets (or entity sets in Mendix Studio Pro) and their exposed attributes, associations, and types. The contract metadata is displayed, along with any Catalog-curated metadata.

When a data source is selected in the search results, the following details are displayed:

![service details](attachments/search/search-details-service.png)

* Application icon

* Name of the data source

* **Non-discoverable** icon – if the data source has been set to non-discoverable (by default, data sources are discoverable to all users in your company and no icon appears)

* **Validated** icon – if it has been set for the asset

* **Environment Name** – where the app is deployed

* **Version** – version number of the service

* **Connections** – number of apps that consume the service

* A description of the data source

* All **Datasets** that are exposed in the data source (you can expand each one to see details of the attributes and associations)

 {{% alert type="info" %}}In Mendix Studio Pro, the **Dataset** is the name of the **Entity set** of a published **Entity**. This defaults to the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

You can perform the following actions from this screen:

* **Copy Data Source URI** – click to copy the URI of the data source contract to the clipboard. This URI can be used to integrate the data source in other enterprise applications.
* **Share Data Source** – click to copy the link to this asset detail page to the clipboard so that you can share it with others.
* [Download](#download-contract) – retrieve and save the OData contract from the data source endpoint to your computer.
* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications.

#### 3.5.2 Details for a Selected Dataset {#entity-details}

When a **Dataset** is selected in the search results, the following details are displayed in the **Search Details** panel.

![search details entity](attachments/search/search-details-entity.png)

##### 3.5.2.1 General Information

The source and endpoint details of the dataset are displayed:

* Dataset name

* **Part of** – a link to the data source details page that the dataset is exposed in

* **Version** number of the data source that the dataset is exposed in

* **Connections** – the number of apps that consume this dataset

* A description of the dataset

You can perform the following actions from this screen:

* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications
* **Share Dataset** – click to copy the link to this dataset detail page to the clipboard so that it can be shared with others

#### 3.5.2.2 Dataset Information

 The **Attributes** tab lists the attributes that are exposed for the dataset in the OData service.

 Under the **Associations** tab for each dataset, the associations are displayed:

 ![associations info](attachments/search/attributes-associations.png)

* **Name** – the name of the association that is exposed in the OData service contract.
* **Navigates to** – the dataset the association is made with. Click the link to see the details of the associated dataset in the Catalog.


### 3.6 Metadata Panel {#metadata}

The metadata panel at the right of the asset details screen displays details from the OData service metadata contract and values that have been curated in the Data Hub Catalog:

 {{% image_container width="300" %}}![metadata pane](attachments/search/metadata.png){{% /image_container %}}

#### 3.6.1 Tags

These are the tags that have been assigned to the data source in the Catalog (for more information, see the [Adding or Editing Tags to a Service](curate#tags) section of *How to 
Curate Registered Assets*). Tags assigned at a data source-level propagate down to the datasets and attributes exposed in the service.

#### 3.6.2 Business Owner {#busines-owner}

This is a link to the business owner of the data exposed in the data source. For more information, see the [Changing Owners of an App](curate#changing-owners) section of *How to Curate Registered Assets*.

#### 3.6.3 Technical Owner

The technical contact of the app; by default this is the owner who registered the OData service.

For apps hosted in the Mendix Cloud, the **Technical Owner** is the app developer that deployed the app.

Technical owners can be [changed](curate#changing-owners).

#### 3.6.4 Discoverability {#discoverability-metadata}

When a data source is registered, by default, it is **Discoverable** in the Data Hub Catalog. When this is set, all users in your company can find it, view the details, and consume it. The owners of an asset and curators can set a data source as **Non-discoverable**, which means it is not visible to users unless they are the owner or a curator.

See the [Curation Bar](#curation-bar) section below for changing **Discoverability** as the owner of the data source or curator.

The following discoverability values can be set:

* **Discoverable** – all users in your company can see and consume the asset in the Data Hub Catalog and Studio Pro 
* **Non-Discoverable** – the asset is only visible to owners, Data Hub curators, and the Data Hub Admin in the Catalog; it is not included in the search results in the **Data Hub** pane of Studio Pro, or any other client of the Data Hub API.

#### 3.6.5 Validated

This indicates if the data source has been **Validated**. For details on changing **Validated** as an owner or curator, see the [Curation Bar](#curation-bar) section below.

#### 3.6.6 Application

A link to the application from which the data source was published in the given environment.

#### 3.6.7 Environment Type

The environment type indicates the quality and the status of the data that the exposed datasets connect to. The following environment types can be specified:

* **Production**
* **Non-Production**
* **Sandbox** (the Mendix Free App environment)

### 3.7 Curation Bar {#curation-bar}

The **Curation Bar** is displayed in the asset detail screen if you are the owner of the selected asset or a curator. In **Edit** > **Edit Metadata**, you can edit the information that is displayed in the Catalog for an asset:

* For the selected data source, you can edit [Application Details](curate#curate-application) and [Data Source Details](curate#service-details)
* For a selected dataset, you can edit [Dataset Details](curate#curate-datasets)

For further details, see [Curate Registered Assets](curate).

### 3.8 Data Source and Dataset URIs

The data source URI is the location of the service contract of the data source, also known as the service endpoint. The endpoints of all exposed datasets (entity sets) are defined in the contract. From the details screen of the data source and dataset, you can copy the URIs to the clipboard by clicking the **Copy Data Source URI** and **Copy Dataset URI** respectively. These URIs can be used for directly accessing the contract and resource in BI applications.

### 3.9 Download the Metadata Contract of a Data Source {#download-contract}

For a selected data source, you can click **Download** to download the OData service contract that is located at the data source endpoint. A ZIP file that includes the all the files that make up the full metadata contract is generated and downloaded.

The resulting ZIP file is named `DataHub_<service_name>_<service_version>_<technology>.zip` where the string `<technology>` identifies the OData version (`v3` or `v4`) in the file name.

Here is an example:

![download example](attachments/search/download_example.png)

When you click **Download**, the following file is downloaded: `DataHub_SAP_Intelligence_1.0_OData4.zip`. This ZIP file has the folder `DataHub_SAP_Intelligence_1.0_OData4`, which contains the all the metadata files that define the service.

### 3.10 Viewing Search Results in the Data Hub Landscape

When an item is selected in the search results pane, you can click the [Landscape](/data-hub/data-hub-landscape/) tab to see the network of connections and dependencies for the selected asset. This provides a graphical representation to indicate the context and relevance of a selected item and the data for the exposed datasets.

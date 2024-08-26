---
title: "Search in the Catalog"
url: /catalog/manage/search/
description: "Describes how to find data sources and datasets in the Catalog."
aliases:
    - /data-hub/data-hub-catalog/search/
    - /data-hub/data-hub-catalog/manage-data-sources/search/
    - /catalog/search/
---

## Introduction

Finding the right data to use in your app development is made easier using the search functionality in the Catalog. The details of registered data assets can be accessed using the [Search API](/apidocs-mxsdk/apidocs/catalog-apis/), or viewed in the [Asset details](#search-details) screen of the Catalog or the [Integration pane](/refguide/integration-pane/) in Studio Pro.  This document describes how you can search in Catalog.

## Search Using the API {#search-api}

To use the Catalog Search API, you need the following:

* A [personal access token](/community-tools/mendix-profile/user-settings/#pat)
* A search term

For more details on what can and cannot be provided in your search query, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/search_v5.html#/Search/get_data).

You can see an example of a request below where the search term is `Customer`:

```curl
curl --location --request GET 'https://catalog.mendix.com/rest/search/v5/data?query=Customer' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>'
```

A successful `GET` call results in a `200` status code and a JSON response body that includes the details about the search results:

<details><summary><b>Click to see JSON response body</b></summary>

```json
{
    "totalResults": 177,
    "links": [
        {
            "rel": "First",
            "href": "https://catalog.mendix.com/rest/search/v5/data?offset=0&serviceType=OData&query=Customer&limit=20"
        },
        {
            "rel": "Current",
            "href": "https://catalog.mendix.com/rest/search/v5/data?offset=0&serviceType=OData&query=Customer&limit=20"
        },
        {
            "rel": "Next",
            "href": "https://catalog.mendix.com/rest/search/v5/data?offset=20&serviceType=OData&query=Customer&limit=20"
        },
        {
            "rel": "Last",
            "href": "https://catalog.mendix.com/rest/search/v5/data?offset=160&serviceType=OData&query=Customer&limit=20"
        }
    ],
    "data": [
        {
            "connections": 11,
            "validated": true,
            "description": "Primary data source for customer information. Requires approval for prod use - please contact owner for details.",
            "totalEntities": 3,
            "securityClassification": "Internal",
            "specificationVersion": "3.0",
            "name": "CustomerApi",
            "version": "1.1.0",
            "serviceType": "OData",
            "environment": {
                "type": "Production",
                "uuid": "6e40b8c9-0d70-47ff-ba8c-cf1a074cafaf",
                "name": "Production",
                "location": "https://customermanagement103.mendixcloud.com"
            },
            "links": [
                {
                    "rel": "Self",
                    "href": "https://catalog.mendix.com/rest/search/v5/endpoints/ca355a57-dae1-4449-873c-51e2d6fd1755"
                },
                {
                    "rel": "Catalog",
                    "href": "https://catalog.mendix.com/link/endpoint?EndpointUUID=ca355a57-dae1-4449-873c-51e2d6fd1755"
                }
            ],
            "entities": [
                {
                    "topSupported": true,
                    "countable": true,
                    "skipSupported": true,
                    "validated": false,
                    "totalAttributes": 1,
                    "totalAssociations": 2,
                    "namespace": "mx.customer.api",
                    "entityTypeName": "Customer",
                    "name": "Customer",
                    "type": "Dataset",
                    "sortable": true,
                    "entitySetName": "Customers",
                    "filterable": true,
                    "updatable": false,
                    "links": [
                        {
                            "rel": "Catalog",
                            "href": "https://catalog.mendix.com/link/entity?EndpointUUID=ca355a57-dae1-4449-873c-51e2d6fd1755&EntityUUID=9ef95bd7-198a-444a-958a-89c874443409"
                        }
                    ],
                    "deletable": false,
                    "attributes": [
                        {
                            "countable": true,
                            "typeName": "Edm.Int64",
                            "typeKind": "Attribute",
                            "sortable": true,
                            "filterable": true,
                            "updatable": false,
                            "insertable": false,
                            "name": "CustomerId"
                        }
                    ],
                    "associations": [
                        {
                            "countable": true,
                            "multiplicity": "*",
                            "entitySetName": "ContactHistorys",
                            "updatable": false,
                            "insertable": false,
                            "namespace": "mx.customer.api",
                            "referencedDataset": "ContactHistory",
                            "name": "ContactHistory_Customer",
                            "entityTypeName": "ContactHistory"
                        },
                        {
                            "countable": true,
                            "multiplicity": "0..1",
                            "entitySetName": "ContactInfos",
                            "updatable": false,
                            "insertable": false,
                            "namespace": "mx.customer.api",
                            "referencedDataset": "ContactInfo",
                            "name": "ContactInfo_Customer",
                            "entityTypeName": "ContactInfo"
                        }
                    ],
                    "insertable": false
                },
                {
                    "topSupported": true,
                    "countable": true,
                    "skipSupported": true,
                    "validated": false,
                    "totalAttributes": 0,
                    "totalAssociations": 1,
                    "namespace": "mx.customer.api",
                    "entityTypeName": "ContactHistory",
                    "name": "ContactHistory",
                    "type": "Dataset",
                    "sortable": true,
                    "entitySetName": "ContactHistorys",
                    "filterable": true,
                    "updatable": false,
                    "links": [
                        {
                            "rel": "Catalog",
                            "href": "https://catalog.mendix.com/link/entity?EndpointUUID=ca355a57-dae1-4449-873c-51e2d6fd1755&EntityUUID=325261db-a8c0-427e-ab4c-14768bfd9c9a"
                        }
                    ],
                    "deletable": false,
                    "associations": [
                        {
                            "countable": true,
                            "multiplicity": "0..1",
                            "entitySetName": "Customers",
                            "updatable": false,
                            "insertable": false,
                            "namespace": "mx.customer.api",
                            "referencedDataset": "Customer",
                            "name": "ContactHistory_Customer",
                            "entityTypeName": "Customer"
                        }
                    ],
                    "insertable": false
                },
                {
                    "topSupported": true,
                    "countable": true,
                    "skipSupported": true,
                    "validated": false,
                    "totalAttributes": 0,
                    "totalAssociations": 1,
                    "mamespace": "mx.customer.api",
                    "entityTypeName": "ContactInfo",
                    "mame": "ContactInfo",
                    "type": "Dataset",
                    "sortable": true,
                    "entitySetName": "ContactInfos",
                    "filterable": true,
                    "updatable": false,
                    "links": [
                        {
                            "rel": "Catalog",
                            "href": "https://catalog.mendix.com/link/entity?EndpointUUID=ca355a57-dae1-4449-873c-51e2d6fd1755&EntityUUID=de5140bd-f181-4b0e-ab60-20664cc6184e"
                        }
                    ],
                    "deletable": false,
                    "items": [
                        {
                            "countable": true,
                            "multiplicity": "*",
                            "entitySetName": "Customers",
                            "updatable": false,
                            "insertable": false,
                            "namespace": "mx.customer.api",
                            "referencedDataset": "Customer",
                            "name": "ContactInfo_Customer",
                            "entityTypeName": "Customer"
                        }
                    ],
                    "insertable": false
                }
            ],
            "lastUpdated": "2021-05-26T16:12:52.795Z",
            "uuid": "ca355a57-dae1-4449-873c-51e2d6fd1755",
            "application": {
                "type": "Other",
                "technicalOwner": {
                    "email": "andrej.koelewijn@mendix.com",
                    "uuid": "d9d4b5bc-ffe8-4c5c-b237-7358d01f7981",
                    "name": "Andrej Koelewijn"
                },
                "icon": "https://catalog.mendix.com/resources/logos/other_icon.png",
                "uuid": "1bed66d2-4477-39a9-9144-d0f848212f1e",
                "repositoryLocation": "https://sprintr.home.mendix.com/link/project/369386df-35b4-475b-a917-17adcc81c1b5",
                "businessOwner": {
                    "email": "andrej.koelewijn@mendix.com",
                    "uuid": "d9d4b5bc-ffe8-4c5c-b237-7358d01f7981",
                    "name": "Andrej Koelewijn"
                },
                "name": "CustomerApp"
            },
            "securityScheme": {
                "securityTypes": [
                    {
                        "name": "Anonymous"
                    }
                ],
                "mxAllowedRoles": [
                    {
                        "uuid": "8dd52bfa-6d7e-453b-b506-303c0a3d9567",
                        "name": "Administrator"
                    },
                    {
                        "uuid": "53f5d6fa-6da9-4a71-b011-454ec052cce8",
                        "name": "User"
                    }
                ]
            },
            "tags": [
                {
                    "name": "customer"
                },
                {
                    "name": "contact"
                }
            ]
        }, 
    ],
    "limit": 20,
    "offset": 0
}
```

</details>

## Search in the Catalog {#search-catalog}

### Details of Registered Assets

You can start searching from the [Home](#data-hub-home) page, or click the [Catalog](#search-tab) tab to go to the **Search** pane and **Asset Details** screen. This section describes important properties of registered assets: data sources, datasets, and attributes.

{{% alert color="info" %}}The **Dataset** is the name of the **Entity set** of a published **Entity** in Mendix Studio Pro, which by default, is the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

#### Versions

Every published service (or data source) has a version number. Apps that consume a data source will consume from a specific version. Updates and changes to a service will be indicated by a change in the version number. Several versions of a registered data source may be available in the Catalog. The data source version is displayed in the [Asset Details](#search-details).

#### Environments

The Catalog is a register of published services (or data sources) that are deployed to a particular environment. You can have multiple versions of a service for each environment by giving them different version numbers.

The environment also provides an indication of the quality of the dataset that is available. Shared datasets that are available from a *production environment* will have production-level data, while those in non-production environments (*acceptance*, *development*) could be populated with data that may not be reliable for building stable apps but be useful for development work.

Search results show the data source endpoints. If a version of a service is deployed on both a test and acceptance environment, two endpoints are shown in the search results.

{{% alert color="info" %}}
By default, search results in the Catalog are filtered to show only hits in the **Production** environments. You can extend the search to **Non-production** or **Mendix Free App (Sandbox)** environments by checking them in the search pane **Add Filter** list. For more details, see the [Filters](#filter) section below.
{{% /alert %}}

#### Asset Description

The description that is included as part of the published service metadata. This description can be edited at the data source, dataset, and attribute level by owners and curators.

{{% alert color="info" %}}
In Studio Pro, when publishing a service, it is possible to specify a summary of the service and a description. Only the description is included in the service contract document and registered in the Catalog.
{{% /alert %}}

### Searching for Assets {#data-hub-home}

When searching in the Catalog, the following fields are searched:

* Data source or service endpoint: Name, Description, Tags
* Application: Name
* Dataset: Name, Description
* Attribute: Name, Description
* Association: Name

From the **Catalog** home page, you can search the Catalog in the following ways:

* Type a search term in the search box and click **Search** (search strings must be at least 3 alphanumeric characters)
* Click one of the tags provided in the search suggestions
* Click one of the services under **Most Recent Changes**
* Click one of the services under **Popular Data Sources**
* Click the **Catalog** tab

Any of the above actions will take you to the **Search** screen.

### Search Screen {#search-tab}

The **Search** screen is divided into the [search](#search-pane) pane on the left, the [asset details](#search-details) of the selected asset in the center panel, and the [asset metadata](#metadata) panel on the right.

### Search Pane {#search-pane}

The collapsible **Search** pane is used to search for registered assets in the Catalog:

{{< figure src="/attachments/catalog/search/search-pane.png" alt="search pane"   width="300"  class="no-border" >}}

#### Specifying the Search

Enter a search string in the **Search** area with a minimum of 3 alphanumeric characters. Searching for the wildcard `*` or the empty string `''` will return all registered items.

#### Filters {#filter}

You can filter search results by: 

* Environment type (the **Production** environment filter is active by default)
* Technology
* [CRUD](/howto/integration/write-data/) (Creatable, Readable, Updatable, or Deletable) capabilities
* Ownership

In the **Filter** dialog box, check the filters you want to include in your search, then click **Apply**. The search results will only display results in the selected filters.

You will also see any restrictions that apply, including **Count** and **Pagination** and whether something is **Sortable** or **Filterable**.

#### Search Results {#search-results}

The number of items satisfying the search criteria (search string plus filters) are shown in the search results list. The order of the items presented in the search results will be a combination of the following:

* Closest match to the search string
* Popularity of the service (the number of connections)
* **Validated** assets before non-validated ones

When an item in the search results is selected, the **Landscape** tab shows the network of connections and dependencies of the selected item in the [Landscape](/data-hub/data-hub-landscape/).

### Selected Asset Details {#search-details}

When you click a search result, the details are displayed in this panel.

#### Details of a Selected Data Source {#service-details}

The contract of the published service (the *$metadata* document) contains the details of what is exposed in the service. This includes the metadata of the exposed datasets (or entity sets in Mendix Studio Pro) and their exposed attributes, associations, and types. The contract metadata is displayed, along with any Catalog-curated metadata.

When a data source is selected in the search results, the following details are displayed:

* Application icon
* Name of the data source
* **Non-discoverable** icon – if the data source has been set to non-discoverable (by default, data sources are discoverable to all users in your company and no icon appears)
* **Validated** icon – if it has been set for the asset
* **Environment Name** – where the app is deployed
* **Version** – version number of the service
* **Connections** – number of apps that consume the service
* **Authentication** – authentication information, and the option to **Request access** if available
* A description of the data source
* All **Datasets** that are exposed in the data source (you can expand each one to see details of the attributes and associations)

{{% alert color="info" %}}In Mendix Studio Pro, the **Dataset** is the name of the **Entity set** of a published **Entity**. This defaults to the entity name with an "s" appended to it. For example, if an entity named `Customer` is published in an OData service, the **Dataset** name in the **Search Details** will be `Customers`.{{% /alert %}}

You can perform the following actions from this screen:

* **Share** – click to copy the link to this asset detail page to the clipboard so that you can share it with others.
* **[Download Contract](#download-contract)** – retrieve and save the OData contract from the data source endpoint to your computer. You can upload this in the Catalog to register it manually.
* **Copy URI** – click to copy the URI of the data source contract to the clipboard. This URI can be used to integrate the data source in other enterprise applications.
* **Copy Dataset URI** – click to copy the URI of the dataset to the clipboard for use in other business applications.

#### Details for a Selected Dataset {#entity-details}

When a **Dataset** is selected in the search results, the following details are displayed in the **Search Details** panel.

##### General Information

The source and endpoint details of the dataset are displayed:

{{< figure src="/attachments/catalog/search/dataset-details.png" alt="associations info" >}}

* Dataset name
* **Part of** – a link to the data source details page that the dataset is exposed in
* **Version** number of the data source that the dataset is exposed in
* **Connections** – the number of apps that consume this dataset
* A description of the dataset
* [Authentication method](/catalog/register/register-data/#authentication)

You can perform the following actions from this screen:

* **Copy URI** – click to copy the URI of the dataset to the clipboard for use in other business applications
* **Share** – click to copy the link to this dataset detail page to the clipboard so that it can be shared with others
* **Edit** – click to access the dataset edit screen

#### Dataset Information

The **Attributes** tab lists the attributes that are exposed for the dataset in the service.

Under the **Associations** tab for each dataset, the associations are displayed:

{{< figure src="/attachments/catalog/search/attributes-associations.png" alt="associations info" class="no-border" >}}

* **Name** – the name of the association that is exposed in the OData service contract.
* **Navigates to** – the dataset the association is made with. Click the link to see the details of the associated dataset in the Catalog.
* **Multiplicity** – indicates the multiplicity.

### Metadata Panel {#metadata}

The metadata panel at the right of the asset details screen displays details from the service metadata contract and values that have been curated in the Catalog:

{{< figure src="/attachments/catalog/search/metadata.png" alt="metadata pane"   width="300"  class="no-border" >}}

#### Tags

These are the tags that have been assigned to the data source in the Catalog (for more information, see the [Adding or Editing Tags to a Service](/catalog/manage/curate/#tags) section of *How to Curate Registered Assets*). Tags assigned at a data source-level propagate down to the datasets and attributes exposed in the service.

#### Business Owner {#business-owner}

This is a link to the business owner of the data exposed in the data source. For more information, see the [Changing Owners of an App](/catalog/manage/curate/#changing-owners) section of *How to Curate Registered Assets*.

#### Technical Owner

This is a technical contact for the app. By default, this is the owner who registered the service.

For apps hosted in the Mendix Cloud, the **Technical Owner** is the app developer that deployed the app.

Technical owners can be [changed](/catalog/manage/curate/#changing-owners).

#### Discoverability {#discoverability-metadata}

When a data source is registered, by default, it is **Discoverable** in the Catalog. When this is set, all users in your company can find it, view the details, and consume it. The owners of an asset and curators can set a data source as **Non-discoverable**, which means it is not visible to users unless they are the owner or a curator.

See the [Curation Bar](#curation-option) section below for changing **Discoverability** as the owner of the data source or curator.

The following discoverability values can be set:

* **Discoverable** – all users in your company can see and consume the asset in the Catalog and Studio Pro 
* **Non-Discoverable** – the asset is only visible to owners, curators, and the Mendix Admin in the Catalog; it is not included in the search results in the [Integration pane](/refguide/integration-pane/) of Studio Pro, or any other client of the Catalog API.

#### Validated

This indicates if the data source has been **Validated**. For details on changing **Validated** as an owner or curator, see the [Curation Bar](#curation-option) section below. See the [Validated](/catalog/manage/curate/#validated) section of *Curate Registered Assets* to learn about what this means.

#### Application

A link to the application from which the data source was published in the given environment.

#### Environment Type

The environment type indicates the quality and the status of the data that the exposed datasets connect to. The following environment types can be specified:

* **Production**
* **Non-Production**
* **Sandbox** (the Mendix Free App environment)

### Curation Option {#curation-option}

The **Curation Option** is displayed in the asset detail screen if you are the owner of the selected asset or a curator. In **Edit**, you can edit the information that is displayed in the Catalog for an asset:

{{< figure src="/attachments/catalog/search/curation-option.png" alt="curation option"   width="300"  >}}

* For the selected data source, you can edit [Application Details](/catalog/manage/curate/#curate-application), [Data Source Details](/catalog/manage/curate/#service-details), and Authentication

For further details, see the [Discoverable and Validated](/catalog/manage/curate/#discoverability) section of *Curate Registered Assets*.

### Data Source and Dataset URIs

The data source URI is the location of the service contract of the data source, also known as the service endpoint. The endpoints of all exposed datasets (entity sets) are defined in the contract. From the details screen of the data source and dataset, you can copy the URIs to the clipboard by clicking the **Copy Data Source URI** and **Copy Dataset URI** respectively. These URIs can be used for directly accessing the contract and resource in BI applications.

### Download the Contract of a Data Source {#download-contract}

For a selected data source, you can click **Download** to download the service contract that is located at the data source endpoint. A ZIP file that includes the all the files that make up the full contract is generated and downloaded.

The resulting ZIP file is named `DataHub_<service_name>_<service_version>_<technology>.zip` where the string `<technology>` identifies the service protocol.

Here is an example:

{{< figure src="/attachments/catalog/search/download_example.png" alt="download example" class="no-border" >}}

When you click **Download**, the following file is downloaded: `DataHub_SAP_Intelligence_1.0_OData4.zip`. This ZIP file has the folder `DataHub_SAP_Intelligence_1.0_OData4`, which contains all the metadata files that define the service.

### Viewing Search Results in the Landscape

When an item is selected in the search results pane, you can click the [Landscape](/data-hub/data-hub-landscape/) tab to see the network of connections and dependencies for the selected asset. This provides a graphical representation to indicate the context and relevance of a selected item and the data for the exposed datasets.

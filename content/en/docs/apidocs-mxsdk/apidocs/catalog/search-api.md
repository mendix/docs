---
title: "Search API"
linktitle: "Search API"
url: /apidocs-mxsdk/apidocs/search-api/
description: "The Search API allows you to search and retrieve information on registered assets that can be used in your app development."
weight: 50
type: swagger
---

## Introduction

The Search API enables users to search and retrieve assets that are registered in the Catalog that satisfy the specified search criteria.

You can paginate through search results with an offset, which allows you to limit the number of results and specify how many to skip.

## Authentication and Access Rights

To use the Catalog Search API, you need the following:

* A personal access token (PAT)

For more details on what can and cannot be provided in your search query, see the [API Reference](#api-reference) section below.

### Generating a PAT

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Store the generated value {GENERATED_PAT} somewhere safe so you can use it to authorize your API calls.

## Example 

### Search in the Catalog

You can see an example of a request below where the search term is Customer:

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

## API Reference {#api-reference}

{{< swaggerui src="/openapi-spec/catalog-registration_v5.yaml" >}}

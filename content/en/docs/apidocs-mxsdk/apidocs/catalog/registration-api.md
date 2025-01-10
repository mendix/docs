---
title: "Registration API"
linktitle: "Registration API"
url: /apidocs-mxsdk/apidocs/registration-api/
description: "The Registration API allows you to register and update services to the organization's Catalog."
weight: 50
type: swagger
---

## Introduction

The Registration API can be used to register applications, environments, and services.

The API includes the following:

* `POST` methods for registering new assets where a UUID is generated and returned for the asset in the response body
* `PUT` calls to update assets for existing UUIDs or create new applications and environments for new UUIDs. 
* `DELETE` calls to delete applications, environments, and endpoints.

## Authentication and Access Rights

Authentication for the Registration API requires the following:

* Personal access token (PAT): For every API request you make to a Catalog API, include the following key-value pair with your headers: `Authorization: MxToken <your_Personal_Access_Token>`.

### Generating a PAT 

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Store the generated value {GENERATED_PAT} somewhere safe so you can use it to authorize your API calls.

## Calling the Registration API

Follow this series of REST calls (described in detail in the following sections) to register the details of your exposed services:

1. [Register the application](#register-application) and retrieve an application UUID.
2. Use the application UUID to [register the environment](#register-environment) and retrieve the environment UUID.
3. Use the application UUID and the environment UUID to [register services](#register-services). If needed, use the [Transform API](#transform-api) (an endpoint of the Registration API) to get your service contract in the right format before registering the service.

The Registration API specification describes all the optional fields, required formats, and other operations on these same paths. 

## Examples {#registration}

### Registering an Application {#register-application}

To register an application, you need the following:

* Personal access token
* Application Name

You can see an example of a request below:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"name": "My-Application"}'
```

A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the application, the location of an application icon, and a unique ID:

```json
{
	"name":"My-Application",
	"type":"Other",
	"uuid":"0301800d-b104-417f-8a64-a8f3ba3450c3",
	"icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
}
```

Use the application `uuid` to register your environment.

### Registering an Environment {#register-environment}

To register an environment, you need the following:

* Personal access token
* `application_UUID`
* Environment `Name`
* Environment `Location`
* Environment `Type`

For more details on what can and cannot be provided in these fields, see the [API Reference](#api-reference) section below.

You can see an example of a request below:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"name": "My-Environment", "location": "https://my-deployed-application-url.com", "type": "Production"}'
```

A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the environment, along with a unique ID:

```json
{
	"name":"My-Environment",
	"uuid":"c3acf1e6-8ed3-472c-8c9f-d93cf3a53b9b",
	"location":"https://my-deployed-application-url.com",
	"type":"Production",
	"application": {
		"name":"My-Application",
		"uuid":"0301800d-b104-417f-8a64-a8f3ba3450c3",
		"type":"Other",
		"icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
	}
}
```

Use the application `uuid` and the environment `uuid` to register one or more services.

### Registering Services {#register-services}

To register services, you need the following:

* Personal access token
* `application_UUID`
* `environment_UUID`
* Service `Path`, `Name`, and `ContractType`
* Service version `Version` and `Security Scheme`
* Service `Contract` with `Type` and `Value`

{{% alert color="warning" %}}
Once a version is released to production, any updated contracts should be given a new version. This applies even if you are only registering for a non-production environment.

This is because changes to a particular version of a published OData service are reflected in the entities and attributes available through the Catalog, for every environment for which the service is published. For example, if you have version 1.0.0 published to both non-production and production environments, any changes you make to version 1.0.0 of the service in the non-production environment are also reflected in the service in production.
{{% /alert %}}

For more details on what can and cannot be provided in these fields, see the [API Reference](#api-reference) section below.

You can see an example of a request below:

```bash
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v5/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>'\
--data-raw '{
  "endpoints": [
    {
      "path": "/path/to/my/service/endpoint",
      "serviceVersion": {
        "version": "1.0",
        "type": "OData",
        "service": {
          "name": "My-Service-Name",
           "ContractType": "OData_3_0"
        },
        "securityScheme": {
          "securityTypes": [
            {
              "name": "Basic"
            }
          ]
        },
        "contracts": [
          {
            "type": "CSDL",
            "documentBaseURL": "https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/",
            "documents": [
              {
                "isPrimary": true,
                "uri": "metadata.xml",
                "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
              },
              {
                "isPrimary": false,
                "uri": "servicefeed.xml",
                "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><service xmlns:atom=\"http://www.w3.org/2005/Atom\" xml:base=\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\" xmlns=\"http://www.w3.org/2007/app\"><workspace><atom:title>Default</atom:title><collection href=\"Employees\"><atom:title>Employees</atom:title></collection>  </workspace></service>"
              }
            ]
          }
        ]
      }
    }
  ]
}'''
```

{{% alert color="info" %}} If you are receiving a `400` response because your contract metadata is getting rejected, use the [Transform API](#transform-api) to get the contract in the right format. If you want to register more than one service for the same application and environment at once, add another object to the `Endpoints` list in the request body.{{% /alert%}}

A successful `PUT` call results in a `200` status code and a JSON response body that includes the details you provided about the service or services, along with a unique UUID and some other details:

```json
{
    "endpoints": [
        {
            "path": "path/to/my/service/endpoint",
            "securityClassification": "Internal",
            "uuid": "f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
            "links": [
                {
                    "href": "https://catalog.mendix.com/rest/registration/v5/endpoints/f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
                    "rel": "Self"
                },
                {
                    "href": "https://catalog.mendix.com/link/endpoint?EndpointUUID=f8e1772a-4bd2-43c7-bb1c-3bc61eb8bf5c",
                    "rel": "Catalog"
                }
            ],
            "connections": 0,
            "lastUpdated": "2023-08-03T11:40:39.462Z",
            "serviceVersion": {
                "version": "1.0",
                "description": "",
                "publishDate": "2023-08-03T11:40:04.978Z",
                "uuid": "ffdf7a37-b3df-4488-b4de-79553ed34888",
                "service": {
                    "name": "My-Service-Name",
                    "uuid": "e36650ab-9a89-4a2d-8b88-d57a2efa5b9e",
                    "links": [
                        {
                            "href": "https://catalog.mendix.com/rest/registration/v5/applications/831ae898-7ee2-4e60-bf9c-2c709e0050b6/services/My-Service-Name",
                            "rel": "Self"
                        }
                    ]
                },
                "securityScheme": {
                    "securityTypes": [
                        {
                            "name": "Basic"
                        }
                    ]
                },
                "type": "OData"
            },
            "validated": false,
            "discoverable": true
        }
    ]
}
```

{{% alert color="info" %}}
Completing the `PUT` operation call more than once overwrites the details for all the published endpoints at the specified environment. If there is a collection of endpoints on the environment, you can create, update, and delete different endpoints all in one `PUT` call.
{{% /alert %}}

#### Behavior when Renaming an Environment 

It is possible (although uncommon) to update the URL of a hosted environment. The root URLs update upon redeployment, and endpoints that are registered under that environment get updated endpoint locations.

### Preparing Your Service Details Using the Transform API {#transform-api}

The Transform API is an endpoint in the Registration API. It converts the *dependencies.json* file that your Mendix app generates into the structure the Registration API requires to register services.

{{% alert color="info" %}}These optional fields are not currently converted by the Transform API: `SecurityClassification`, `Discoverable`, `Validated`, and `Tags`.{{% /alert %}}

To call the Transform endpoint of the Registration API, you need the following:

* Your app's *dependencies.json* file converted to an escaped JSON string

    {{% alert color="info" %}}You can find your *dependencies.json* file in the **deployment** > **model** folder of your Mendix application.{{% /alert %}}

* Endpoint location `Name`
* Endpoint location `Value`

    {{% alert color="info" %}}You can find these two values in the *metadata.json* file for your exposed service. They are in an array called `Constants`, and named `Name` and `DefaultValue`.{{% /alert %}}

    {{% alert color="info" %}}For more details on what can and cannot be provided in these fields, [API Reference](#api-reference) section below.{{% /alert %}}

You can see an example of a request that converts a *dependencies.json* file below:

```bash
curl --location --request POST 'https://catalog.mendix.com/rest/registration/v5/transform/dependenciesjson' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{
  "dependenciesJsonString": "{ \"schemaVersion\": \"1.3\", \"appName\": \"HR Acme Corp\", \"published\": [ { \"name\": \"test.acme.employeeinformation\", \"version\": \"2.0\", \"path\": \"/employeeservice/v2\", \"serviceType\": \"OData 3.0\", \"contracts\": [ { \"type\": \"ServiceFeed\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<service xmlns=\\\"http://www.w3.org/2007/app\\\" xmlns:atom=\\\"http://www.w3.org/2005/Atom\\\" xml:base=\\\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\\\">\\r\\n <workspace>\\r\\n <atom:title>Default</atom:title>\\r\\n <collection href=\\\"Employees\\\">\\r\\n <atom:title>Employees</atom:title>\\r\\n </collection>\\r\\n </workspace>\\r\\n</service>\" }, { \"type\": \"Metadata\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<edmx:Edmx xmlns:edmx=\\\"http://schemas.microsoft.com/ado/2007/06/edmx\\\" xmlns:mx=\\\"http://www.mendix.com/Protocols/MendixData\\\" Version=\\\"1.0\\\">\\r\\n <edmx:DataServices xmlns:m=\\\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\\\" m:DataServiceVersion=\\\"3.0\\\" m:MaxDataServiceVersion=\\\"3.0\\\">\\r\\n <Schema xmlns=\\\"http://schemas.microsoft.com/ado/2009/11/edm\\\" Namespace=\\\"DefaultNamespace\\\">\\r\\n <EntityType Name=\\\"Employee\\\">\\r\\n <Key>\\r\\n <PropertyRef Name=\\\"ID\\\" />\\r\\n </Key>\\r\\n <Property Name=\\\"ID\\\" Type=\\\"Edm.Int64\\\" Nullable=\\\"false\\\" mx:isAttribute=\\\"false\\\" />\\r\\n <Property Name=\\\"Name\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"DateOfBirth\\\" Type=\\\"Edm.DateTimeOffset\\\" />\\r\\n <Property Name=\\\"Address\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"JobTitle\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"Salary\\\" Type=\\\"Edm.Decimal\\\" />\\r\\n </EntityType>\\r\\n <EntityContainer Name=\\\"test.acme.employeeinformation/v1Entities\\\" m:IsDefaultEntityContainer=\\\"true\\\">\\r\\n <EntitySet Name=\\\"Employees\\\" EntityType=\\\"DefaultNamespace.Employee\\\" />\\r\\n </EntityContainer>\\r\\n </Schema>\\r\\n </edmx:DataServices>\\r\\n</edmx:Edmx>\" } ], \"security\": { \"types\": [ { \"type\": \"MxID\", \"authenticationModuleId\": \"a4f7847b-9562-4b5a-adc2-4a0bf41cc534\" } ], \"allowedRoles\": [ { \"name\": \"User\", \"id\": \"91ca220e-9498-4d23-9d2e-90b9c19aca37\" } ] } } ], \"consumed\": [ { \"name\": \"test.acme.employeemanagement\", \"version\": \"1.0\", \"serviceType\": \"OData 3.0\", \"constant\": \"MyFirstModule.EmployeeManagement_Location\", \"uses\": [{ \"type\": \"entity\", \"name\": \"ManagingEmployees\" }] } ] }",
  "endpointLocationConstants": [
    {
      "name": "MyFirstModule.EmployeeManagement_Location",
      "value": "https://hr.acmecorp.test/employeeservice/v2"
    }
  ]
}'
```

A successful `PUT` call results in a `200` status code and a JSON response body. To register your services, use the information in the `PUTPublishedEndpoints` section.

```json
{
  "putPublishedEndpoints": {
    "endpoints": {
      "path": "/employeeservice/v2",
      "discoverable": true,
      "validated": true,
      "serviceVersion": {
        "version": "2.0",
        "type": "OData",
        "service": {
          "name": "test.acme.employeeinformation"
        },
        "tags": [
          {
            "name": "hr"
          },
          {
            "name": "employee"
          }
        ],
        "securityScheme": {
          "securityTypes": [
            {
              "name": "MxID",
              "marketplaceModuleID": "93457"
            }
          ],
          "mxAllowedRoles": [
            {
              "name": "User",
              "uuid": "91ca220e-9498-4d23-9d2e-90b9c19aca37"
            }
          ],
          "contracts": [
            {
              "type": "CSDL",
              "documentBaseURL": "https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/",
              "documents": [
                {
                  "isPrimary": true,
                  "uri": "metadata.xml",
                  "contents": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "putConsumedEndpoints": {
    "endpoints": [
      {
        "endpointLocation": "https://hr.acmecorp.test/employeeservice/v2",
        "consumedItems": [
          {
            "type": "EntitySet",
            "name": "ManagingEmployees",
            "namespace": "DefaultNamespace"
          }
        ]
      }
    ]
  }
}
```

## API Reference {#api-reference}

{{< swaggerui src="/openapi-spec/catalog-registration_v5.yaml" >}}

---
title: "Register OData Resources in the Catalog"
linktitle: "Register OData Resources"
url: /catalog/register/register-data/
description: "Describes how to register OData resources in the Catalog: through Mendix Cloud, using the Registration API, or in the UI form."
weight: 10
tags: ["data hub", "Catalog", "external entities", "register", "published OData service" ,"how to", "registration"]
aliases:
    - /catalog/register/
    - /catalog/register-data/
    - /catalog/register-data-sources/register-data/
    - /catalog/register-data-sources/register
    - /data-hub/data-hub-catalog/register
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor registration-form below is mapped, so it should not be removed or changed.
---

## 1 Introduction

There are three ways to register published services in the Catalog. Mendix supports all OData versions.

This how-to teaches you how to register a service in the following ways:

* [Through Mendix Cloud](#mendix-cloud), where registration occurs automatically when you deploy a [published OData service](/refguide/published-odata-services/) to Mendix Cloud
* [Through the Catalog Registration API](#registration-api)
* [Through the Catalog UI form](#registration-form)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You have Studio Pro [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/) installed
* You have a Mendix account
* You have an exposed service that you are ready to register (for instructions on how to create an exposed service, refer to the sections on creating an app and exposing an entity in [Share Data Between Apps](/data-hub/share-data/))

## 3 Registering a Service Through Mendix Cloud {#mendix-cloud}

If you have a published service that is deployed to [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), then congratulations! Your service is already registered in the [Catalog](/catalog/).

## 4 Registering a Service Without Mendix Cloud {#without-mendix-cloud}

If you are not using Mendix Cloud to deploy your Mendix application, there are two other ways to register an exposed service in the Catalog:

* [Through the Catalog Registration API](#registration-api)
* [Through the Catalog UI form](#registration-form)

The Catalog collects metadata about the application and environment where your application is deployed, so you can distinguish services from one another. To register your service, you need to provide details about both the application and the environment where the service is deployed.

For details on working with external entities and the Catalog without Mendix Cloud, see [Register Data Sources without Mendix Cloud](/catalog/data-sources-without-mendix-cloud/).

### 4.1 Registering a Service Through the Catalog Registration API {#registration-api}

Calling the Catalog [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) allows you to register one or more exposed services. 

First, you need to create an authentication token to get access to the Catalog APIs. The Catalog Registration API requires authentication through a personal access token. For every API request you make to a Catalog API, include the following key-value pair with your headers: `Authorization: MxToken <your_Personal_Access_Token>`.

For details on creating a personal access token (PAT), see the [Personal Access Tokens](/developerportal/community-tools/mendix-profile/#pat) section of *Mendix Profile*.

Once you have a personal access token, follow this series of REST calls (described in detail in the following sections) to register the details of your exposed services:

1. [Register the application](#register-application) and retrieve an application UUID.
2. Use the application UUID to [register the environment](#register-environment) and retrieve the environment UUID.
3. Use the application UUID and the environment UUID to [register services](#register-services). If needed, use the [Transform API](#transform-api) (an endpoint of the Registration API) to get your service contract in the right format before registering the service.
 
The [Registration API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html) describes all the optional fields, required formats, and other operations on these same paths. In this how-to, you will fill out only the required fields and one operation per path.

#### 4.1.1 Registering an Application Through the Catalog Registration API {#register-application}

To register an application, you need the following:

* Personal access token
* Application `Name`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html#/Register/post_applications).

You can see an example of a request below:

```curl
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v4/applications' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Application"}'
```

A successful `PUT` call results in a `201` status code and a JSON response body that includes the details you provided about the application, the location of an application icon, and a unique ID:

```json
{
	"Name":"My-Application",
	"Type":"Other",
	"UUID":"0301800d-b104-417f-8a64-a8f3ba3450c3",
	"Icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
}
```

Use the application UUID to register your environment.

#### 4.1.2 Registering an Environment Through the Catalog Registration API {#register-environment}

To register an environment, you need the following:

* Personal access token
* `application_UUID`
* Environment `Name`
* Environment `Location`
* Environment `Type`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html#/Register/post_applications__AppUUID__environments). 

You can see an example of a request below:

```curl
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v4/applications/{application_UUID}/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Environment", "Location": "https://my-deployed-application-url.com", "Type": "Production"}'
```

A successful `PUT` call results in a `201` status code and a JSON response body that includes the details you provided about the environment, along with a unique ID:

```json
{
	"Name":"My-Environment",
	"UUID":"c3acf1e6-8ed3-472c-8c9f-d93cf3a53b9b",
	"Location":"https://my-deployed-application-url.com",
	"Type":"Production",
	"Application": {
		"Name":"My-Application",
		"UUID":"0301800d-b104-417f-8a64-a8f3ba3450c3",
		"Type":"Other",
		"Icon":"https://catalog.mendix.com/resources/logos/other_icon.png"
	}
}
```

Use the application UUID and the environment UUID to register one or more services.

#### 4.1.3 Registering Services Through the Catalog Registration API {#register-services}

To register services, you need the following:

* Personal access token
* `application_UUID`
* `environment_UUID`
* Service `Path`, `Name`, and `ContractType`
* Service version `Version` and `Security Scheme`
* Service `Contract` with `Type` and `Value`

{{% alert color="warning" %}}
Once a version is released to production, any updated contracts should be given a new version. This applies even if you are only registering for a non-production environment.

This is because changes to a particular version of a published service are reflected in the metadata details available through the Catalog, for every environment for which the service is published. For example, if you have version 1.0.0 published to both non-production and production environments, any changes you make to version 1.0.0 of the service in the non-production environment are also reflected in the service in production.
{{% /alert %}}

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html#/Register/put_applications__AppUUID__environments__EnvironmentUUID__published_endpoints).

You can see an example of a request below:

```curl
curl --location --request PUT 'https://catalog.mendix.com/rest/registration/v4/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Endpoints":[{"Path": "/path/to/my/service/endpoint","ServiceVersion":{"Version": "1.0","Service":{"Name": "My-Service-Name","ContractType": "OData_3_0"},"SecurityScheme": { "SecurityTypes": [{"Name": "Basic"}] },"Contracts":[{"Type": "Metadata",  "Value": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"}]}}]}'
```

{{% alert color="info" %}} If you are receiving a `400` response because your contract metadata is getting rejected, use the [Transform API](#transform-api) to get the contract in the right format. If you want to register more than one service for the same application and environment at once, add another object to the `Endpoints` list in the request body.{{% /alert%}}

A successful `PUT` call results in a `200` status code and a JSON response body that includes the details you provided about the service or services, along with a unique ID and some other details:

```json
{
	"Endpoints": [{
		"Path": "path/to/my/service/endpoint",
		"SecurityClassification": "Internal",
		"UUID": "f6cde195-a45e-4077-b055-bca10e83c202",
		"Links": [{
				"Href": "https://catalog.mendix.com/rest/registration/v4/endpoints/f6cde195-a45e-4077-b055-bca10e83c202",
				"Rel": "Self"
			},
			{
				"Href": "https://catalog.mendix.com/link/endpoint?EndpointUUID=f6cde195-a45e-4077-b055-bca10e83c202",
				"Rel": "Catalog"
			}
		],
		"Connections": 0,
		"LastUpdated": "2021-08-11T12:28:18.716Z",
		"ServiceVersion": {
			"Version": "1.0",
			"PublishDate": "2021-08-11T12:28:18.698Z",
			"UUID": "9fe460ac-5e09-49a3-81be-677f2f88a549",
			"Service": {
				"Name": "My-Service-Name",
				"ContractType": "OData_3_0",
				"UUID": "0fe4ce93-a421-4ffe-8022-3715a5a60d15",
				"Links": [{
					"Href": "https://catalog.mendix.com/rest/registration/v4/applications/0301800d-b104-417f-8a64-a8f3ba3450c3/services/My-Service-Name",
					"Rel": "Self"
				}]
			},
			"SecurityScheme": {
				"SecurityTypes": [{
					"Name": "Basic"
				}]
			}
		},
		"Validated": false,
		"Discoverable": true
	}]
}
```

{{% alert color="info" %}}
Completing the `PUT` operation call more than once overwrites the details for all the published endpoints at the specified environment. If there is a collection of endpoints on the environment, you can create, update, and delete different endpoints all in one `PUT` call.
{{% /alert %}}

##### 4.1.3.1 Behavior When Renaming an Environment

It is possible (although uncommon) to update the URL of a hosted environment. The root URLs update upon redeployment, and endpoints that are registered under that environment get updated endpoint locations.

#### 4.1.4 Preparing Your Service Details Using the Transform API {#transform-api}

The Transform API is an endpoint in the Registration API. It converts the *dependencies.json* file that your Mendix app generates into the fields that the Registration API requires to register services.

{{% alert color="info" %}}These optional fields are not currently converted by the Transform API: `SecurityClassification`, `Discoverable`, `Validated`, `ServiceVersion`, and `Tags`.{{% /alert %}}

To call the Transform endpoint of the Registration API, you need the following:

* Your app's *dependencies.json* file converted to an escaped JSON string

    {{% alert color="info" %}}You can find your *dependencies.json* file in the **deployment** > **model** folder of your Mendix application.{{% /alert %}}

* Endpoint location `Name`
* Endpoint location `Value`

    {{% alert color="info" %}}You can find these two values in the *metadata.json* file for your exposed service. They are in an array called `Constants`, and named `Name` and `DefaultValue`.{{% /alert %}}

    {{% alert color="info" %}}For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html#/Endpoints/post_transform_dependenciesjson).{{% /alert %}}

You can see an example of a request that converts a *dependencies.json* file below:

```curl
curl --location --request PUT 'https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html#/Endpoints/post_transform_dependenciesjson' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{
  "DependenciesJsonString": "{ \"schemaVersion\": \"1.3\", \"appName\": \"HR Acme Corp\", \"published\": [ { \"name\": \"test.acme.employeeinformation\", \"version\": \"2.0\", \"path\": \"/employeeservice/v2\", \"serviceType\": \"OData 3.0\", \"contracts\": [ { \"type\": \"ServiceFeed\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<service xmlns=\\\"http://www.w3.org/2007/app\\\" xmlns:atom=\\\"http://www.w3.org/2005/Atom\\\" xml:base=\\\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\\\">\\r\\n <workspace>\\r\\n <atom:title>Default</atom:title>\\r\\n <collection href=\\\"Employees\\\">\\r\\n <atom:title>Employees</atom:title>\\r\\n </collection>\\r\\n </workspace>\\r\\n</service>\" }, { \"type\": \"Metadata\", \"value\": \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<edmx:Edmx xmlns:edmx=\\\"http://schemas.microsoft.com/ado/2007/06/edmx\\\" xmlns:mx=\\\"http://www.mendix.com/Protocols/MendixData\\\" Version=\\\"1.0\\\">\\r\\n <edmx:DataServices xmlns:m=\\\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\\\" m:DataServiceVersion=\\\"3.0\\\" m:MaxDataServiceVersion=\\\"3.0\\\">\\r\\n <Schema xmlns=\\\"http://schemas.microsoft.com/ado/2009/11/edm\\\" Namespace=\\\"DefaultNamespace\\\">\\r\\n <EntityType Name=\\\"Employee\\\">\\r\\n <Key>\\r\\n <PropertyRef Name=\\\"ID\\\" />\\r\\n </Key>\\r\\n <Property Name=\\\"ID\\\" Type=\\\"Edm.Int64\\\" Nullable=\\\"false\\\" mx:isAttribute=\\\"false\\\" />\\r\\n <Property Name=\\\"Name\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"DateOfBirth\\\" Type=\\\"Edm.DateTimeOffset\\\" />\\r\\n <Property Name=\\\"Address\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"JobTitle\\\" Type=\\\"Edm.String\\\" MaxLength=\\\"200\\\" />\\r\\n <Property Name=\\\"Salary\\\" Type=\\\"Edm.Decimal\\\" />\\r\\n </EntityType>\\r\\n <EntityContainer Name=\\\"test.acme.employeeinformation/v1Entities\\\" m:IsDefaultEntityContainer=\\\"true\\\">\\r\\n <EntitySet Name=\\\"Employees\\\" EntityType=\\\"DefaultNamespace.Employee\\\" />\\r\\n </EntityContainer>\\r\\n </Schema>\\r\\n </edmx:DataServices>\\r\\n</edmx:Edmx>\" } ], \"security\": { \"types\": [ { \"type\": \"MxID\", \"authenticationModuleId\": \"a4f7847b-9562-4b5a-adc2-4a0bf41cc534\" } ], \"allowedRoles\": [ { \"name\": \"User\", \"id\": \"91ca220e-9498-4d23-9d2e-90b9c19aca37\" } ] } } ], \"consumed\": [ { \"name\": \"test.acme.employeemanagement\", \"version\": \"1.0\", \"serviceType\": \"OData 3.0\", \"constant\": \"MyFirstModule.EmployeeManagement_Location\", \"uses\": [{ \"type\": \"entity\", \"name\": \"ManagingEmployees\" }] } ] }",
  "EndpointLocationConstants": [
    {
      "Name": "My-Endpoint-Location",
      "Value": "https://my-deployed-application-url.com/path/to/my/service/endpoint"
    }
  ]
}'
```

A successful `PUT` call results in a `200` status code and a JSON response body. To register your services, use the information in the `PUTPublishedEndpoints` section.

```json
{
	"PUTPublishedEndpoints": {
		"Endpoints": [{
			"Path": "/employeeservice/v2",
			"ServiceVersion": {
				"Version": "2.0",
				"Service": {
					"Name": "test.acme.employeeinformation",
					"ContractType": "OData_3_0"
				},
				"SecurityScheme": {
					"SecurityTypes": [{
						"Name": "MxID",
						"AppStoreModuleId": "a4f7847b-9562-4b5a-adc2-4a0bf41cc534"
					}],
					"MxAllowedRoles": [{
						"Name": "User",
						"UUID": "91ca220e-9498-4d23-9d2e-90b9c19aca37"
					}]
				},
				"Contracts": [{
					"Type": "ServiceFeed",
					"Value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<service xmlns=\"http://www.w3.org/2007/app\" xmlns:atom=\"http://www.w3.org/2005/Atom\" xml:base=\"https://hr.acmecorp.test/odata/test.acme.employeeinformation/v1/\">\r\n <workspace>\r\n <atom:title>Default</atom:title>\r\n <collection href=\"Employees\">\r\n <atom:title>Employees</atom:title>\r\n </collection>\r\n </workspace>\r\n</service>"
				}, {
					"Type": "Metadata",
					"Value": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<edmx:Edmx xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\" Version=\"1.0\">\r\n <edmx:DataServices xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\">\r\n <Schema xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\" Namespace=\"DefaultNamespace\">\r\n <EntityType Name=\"Employee\">\r\n <Key>\r\n <PropertyRef Name=\"ID\" />\r\n </Key>\r\n <Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" />\r\n <Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" />\r\n <Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" />\r\n <Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" />\r\n <Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" />\r\n <Property Name=\"Salary\" Type=\"Edm.Decimal\" />\r\n </EntityType>\r\n <EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\">\r\n <EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" />\r\n </EntityContainer>\r\n </Schema>\r\n </edmx:DataServices>\r\n</edmx:Edmx>"
				}]
			}
		}]
	},
	"PUTConsumedEndpoints": {
		"Endpoints": [{
			"EndpointLocation": "Please fill in the endpointlocation here",
			"ConsumedItems": [{
				"Type": "EntitySet",
				"Name": "ManagingEmployees"
			}]
		}]
	}
}
```

### 4.2 Registering a Service Through the Catalog UI Form {#registration-form}

The Catalog has a UI form where you can register a single exposed service. Make sure you have collected the following details before you begin:

* OData metadata contract file as an XML, or ZIP if it is multiple files
* Data Source details: `Name`, `Version`, `Path`
* Application `Name`
* Environment details: `Name`, `Location` (URL), `Type`

Follow the steps below:

1. Start at the [Catalog home page](https://catalog.mendix.com). If the connector for your business application is not shown, use the generic **OData** v4 service.

2. On the **Contract** screen, upload your XML or ZIP file. For more information on the contract, see the [Contract Structure](#contract-structure) section below.
3. On the **Data Source** screen, specify the following Data Source details: **Data Source Name**, **Data Source Version**, and **Data Source Relative Path**. The **Data Source Relative Path** is the path of the service contract relative to the environment URL of the application. For more advice on versioning, see [Semantic numbering](/refguide/consumed-odata-service/#semantic). The other fields on the form are optional.

    {{% alert color="warning" %}}Once a version is released to production, any updated contracts should be given a new version. This applies even if you are only registering for a non-production environment.<br/><br/>This is because changes to a particular version of a published service are reflected in the entities and attributes available through the Catalog for every environment for which the service is published. For example, if you have version 1.0.0 published to both non-production and production environments, any changes you make to version 1.0.0 of the service in the non-production environment are also reflected in the service in production.{{% /alert %}}

4. Once you have filled out all the required fields, select **Next**.
5. On the **Application** screen, select an existing application by name or register a new one. You will also be able to edit **Technical Owner** and **Business Owner** through the **Curation** feature after registration is completed.
6. Once you have filled out all the required fields, select **Next**.
7. On the **Environment** screen, select an existing environment by name, or provide the **Environment Name**, **Environment Location** (URL), and **Environment Type** to register a new one. The **Environment Type** options indicate what type of data you might find there:

    * **Production** – data is of production quality
    * **Sandbox** – the Mendix Free App environment, data is not of production quality
    * **Non-production** – hosting is paid for, but data is not of production quality

8. Select your **Authentication** method. For details on supported authentication types, see the [Authentication](#authentication) section below. Curators can also [add or change authentication methods](/catalog/manage/curate/#authentication) later.
9. Select **Done!** to complete the registration.

Congratulations! Your service is registered in the Catalog. 

The discoverable status of the service defaults to the value set by the Mendix Admin. For more details, see the [Settings](/control-center/catalog-admin/#settings) section of *Catalog Administration*.

#### 4.2.1 Selecting an Authentication Method {#authentication}

Publishers of a data source can determine how consuming developers will need to identify themselves when consuming the data source.

The Catalog supports the following methods:

* **Basic authentication** – Authenticate from a username and password
* **Active session** – For Mendix data sources, authenticate from the open and active browser session
* **Mendix SSO** – For Mendix data sources, authenticate from single sign-on using the [Mendix SSO](/appstore/modules/mendix-sso/) module
* **OAuth** – Authenticate with [OAuth](https://oauth.net/)
* **OpenID Connect** – Authenticate with [OpenID Connect](https://openid.net/connect/), built on top of [OAuth 2.0](https://oauth.net/2/) and used with the [OIDC SSO](/appstore/modules/oidc/) module
* **Other** – Specify other ways to authenticate, including custom modules

Fill in as many details as you can to ensure that consuming developers can easily authenticate themselves to consume your service. 

##### 4.2.1.1 Selecting a Marketplace Module (Optional)

If you are using a module from the Mendix Marketplace, select **Other** and then choose the module in the **Marketplace Module** dropdown list.

#### 4.2.2 Contract Structure {#contract-structure}

All ZIP contracts must include a primary document, named *primary*.

The other documents in the ZIP file should be structured within a series of nested folders, in which each segment of the URI path is represented by its own folder. It's possible to use absolute URLs or relative URIs, but these have different top-level folders:

* Absolute URL – The entire URL is represented in the folder structure, starting with an **http** or **https** folder in the root of the ZIP file. This top-level **http** or **https** folder contains a folder named after the domain. The domain folder contains a series of other folders and files representing the rest of the URL path.
* Relative URI – The folders and files must be structured relative to the Document Base URL. In other words, relative URIs use a folder structure that matches the relative path as it is used in the primary document.

The following diagram shows examples of the ZIP contract structure for both URI types. The absolute folder structure is the same in each case, but the relative structure depends on the Document Base URL. Note that **odata**, **v1**, and **docs** are each separate folders, but in the absolute folder structure shown here, they are represented in a condensed format to save space.

{{< figure src="/attachments/catalog/register-data/zip-file-structure.png" alt="Absolute and relative folder structures for two different base URLs.">}}

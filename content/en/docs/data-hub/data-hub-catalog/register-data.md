---
title: "Register OData Resources in the Data Hub Catalog"
url: /data-hub/data-hub-catalog/register-data/
description: "How to register OData resources in the Data Hub Catalog: through the Mendix Cloud, using the Registration API, or in the UI form"
category: "Data Hub Catalog"
weight: 35
tags: ["data hub catalog", "data hub", "external entities", "register", "published OData service" ,"how to", "registration"]
aliases:
    /data-hub/data-hub-catalog/register.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor registration-form below is mapped, so it should not be removed or changed.
---

## 1 Introduction

There are three ways to register exposed OData services in the Data Hub Catalog. We support all OData versions.

**This how-to will teach you how to register a service:**

* [Through the Mendix Cloud](#mendix-cloud)
* [Through the Data Hub Catalog Registration API](#registration-api)
* [Through the Data Hub Catalog UI form](#registration-form)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro version [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/).
* You have a Mendix account.
* You have an exposed OData service that you are ready to register, or follow sections 3 and 4 in [this how-to](https://docs.mendix.com/data-hub/share-data/) to create one.


## 3 Registering a Service Through the Mendix Cloud {#mendix-cloud}


If you have an exposed OData service, that is deployed to the Mendix Cloud, then congratulations! Your service is already registered in the Data Hub Catalog. This is the power of the Mendix Data Hub.

## 4 Registering a Service Without the Mendix Cloud {#without-mendix-cloud}

If you are not using the Mendix Cloud to deploy your Mendix application, there are two other ways to register an exposed OData service in the Data Hub Catalog:

* [Through the Data Hub Catalog Registration API](#registration-api)
* [Through the Data Hub Catalog UI form](#registration-form)

The Data Hub Catalog collects metadata about the application and environment where your application is deployed, so you can distinguish services from one another. You need to provide details about both the application and environment where the service is deployed in order to register your service.

### 4.1 Registering a Service Through the Data Hub Catalog Registration API {#registration-api}

Calling the Data Hub Catalog Registration APIs allows you to register one (or several at a time) exposed OData service(s). 

First, you need to create an authentication token to get access to the Data Hub Catalog APIs. The Data Hub Catalog Registration API requires authentication through a Personal Access Token. For every API request you make to a Data Hub Catalog API, include the following key-value pair with your headers:

`Authorization: MxToken <your_Personal_Access_Token>`

For information on how to to create a Personal Access Token, see [Creating a Data Hub Catalog Registration API token](#create-token).

Once you have a Personal Access Token, follow this series of REST calls to register the details of our exposed OData service:

1. [Register the application and retrieve an application UUID](#register-application).
2. Use the application UUID to [register the environment, and retrieve the environment UUID](#register-environment).
3. Use the application UUID and the environment UUID to [register one or more services](#register-services).

   If your service contract is not in the right format, use the [Transform API](#transform-api) to get your service contract in the right format before registering them.

The [Data Hub Registration API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html) describes all the optional fields, required formats, other operations on these same paths. You will only fill out the required fields and one operation per path in this how-to. 

#### 4.1.1 Creating a Data Hub Catalog API token {#create-token}

You can create a Personal Access Token in the Mendix [Warden](/developerportal/community-tools/warden/) application.

#### 4.1.2 Registering an Application Through the Data Hub Catalog Registration API {#register-application}

To register an application, you need:

- Personal Access Token
- Application `Name`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/post_applications).

You can see an example of a request below:

```curl
curl --location --request POST 'https://hub.mendix.com/rest/registration/v3/applications' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Application"}'
```
A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the application, the location of an application icon, and a unique ID:


```json
{
	"Name":"My-Application",
	"Type":"Other",
	"UUID":"0301800d-b104-417f-8a64-a8f3ba3450c3",
	"Icon":"https://hub.mendix.com/resources/logos/other_icon.png"
}
```

Use the application UUID to register your environment.

#### 4.1.3 Registering an Environment Through the Data Hub Catalog Registration API {#register-environment}

To register an environment, you need the following:

- Personal Access Token
- `application_UUID`
- Environment `Name`
- Environment `Location`
- Environment `Type`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/post_applications__AppUUID__environments). 

You can see an example of a request below:

```curl
curl --location --request POST 'https://hub.mendix.com/rest/registration/v3/applications/{application_UUID}/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Environment", "Location": "https://my-deployed-application-url.com", "Type": "Production"}'
```

A successful `POST` call results in a `201` status code and a JSON response body that includes the details you provided about the environment, along with a unique ID:

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
		"Icon":"https://hub.mendix.com/resources/logos/other_icon.png"
	}
}
```

Use the application UUID and the environment UUID to register one or more services.


#### 4.1.4 Registering Services Through the Data Hub Catalog Registration API {#register-services}

To register services, you need the following:

- Personal Access Token
- `application_UUID`
- `environment_UUID`
- Service `Path`, `Name`, and `ContractType`
- Service version `Version` and `Security Scheme`
- Service `Contract` with `Type` and `Value`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/put_applications__AppUUID__environments__EnvironmentUUID__published_endpoints). 

You can see an example of a request below:

```curl
curl --location --request PUT 'https://hub.mendix.com/rest/registration/v3/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Endpoints":[{"Path": "/path/to/my/service/endpoint","ServiceVersion":{"Version": "1.0","Service":{"Name": "My-Service-Name","ContractType": "OData_3_0"},"SecurityScheme": { "SecurityTypes": [{"Name": "Basic"}] },"Contracts":[{"Type": "Metadata",  "Value": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"}]}}]}'
```

If you are receiving a `400` response because your contract metadata is getting rejected, use the [Transform API](#transform-api) to get it in the right format. If you want to register more than one service for the same application and environment at once, add another object to the `Endpoints` list in the request body.

A successful `PUT` call will result in a `200` status code and a JSON response body that includes the details you provided about the service(s), along with a unique ID and some other details:

```json
{
	"Endpoints": [{
		"Path": "path/to/my/service/endpoint",
		"SecurityClassification": "Internal",
		"UUID": "f6cde195-a45e-4077-b055-bca10e83c202",
		"Links": [{
				"Href": "https://hub.mendix.com/rest/registration/v3/endpoints/f6cde195-a45e-4077-b055-bca10e83c202",
				"Rel": "Self"
			},
			{
				"Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=f6cde195-a45e-4077-b055-bca10e83c202",
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
					"Href": "https://hub.mendix.com/rest/registration/v3/applications/0301800d-b104-417f-8a64-a8f3ba3450c3/services/My-Service-Name",
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


#### 4.1.5 Preparing Your Service Details Using the Transform API {#transform-api}

The Transform API converts the `dependencies.json` file your Mendix app generates into the fields the Registration API requires to registers services. 

{{% alert color="info" %}}These optional fields are not currently converted by the Transform API: `SecurityClassification`, `Discoverable`, `Validated`, `ServiceVersion`, `Tags`.{{% /alert %}}

To call the Transform API, you need the following:

* Your app's `dependencies.json` file converted to an escaped JSON string

    {{% alert color="info" %}}You can find your `dependencies.json` in the `deployment` > `model` folder of your Mendix application.{{% /alert %}}

* Endpoint location `Name`
* Endpoint location `Value`

    {{% alert color="info" %}}These two values can be found in the `metadata.json` file for your exposed OData service. They are in an array called `Constants`, and named `Name` and `DefaultValue`.{{% /alert %}}

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html#/Dependencies.json/post_dependenciesjson). 

You can see an example of a request that converts a `dependencies.json` file below: 

```curl
curl --location --request POST 'https://hub.mendix.com/rest/transform/v1/dependenciesjson' \
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
A successful `POST` call results in a `200` status code and a JSON response body. The `PUTPublishedEndpoints` section is what you will want to go register your services:

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


### 4.2 Registering a Service Through the Data Hub Catalog UI Form {#registration-form}

The Data Hub Catalog has a UI form where you can register a single exposed OData service. Make sure you have collected the following details before you begin:

- OData metadata contract file as an XML, or ZIP if it is multiple files
- Data Source details: `Name`, `Version`, `Path`
- Application `Name`
- Environment details: `Name`, `Location` (URL), `Type`

Follow the steps below:

1. Start at the [Data Hub Catalog homepage](https://hub.mendix.com). If the connector for your business application is not shown, use the generic **OData** v4 service:

	{{< figure src="/attachments/data-hub/data-hub-catalog/register-data/register-data-source-odata-connector.png" alt="upload contract" >}}

2. On the **Contract** screen, upload your XML or ZIP file.

	{{< figure src="/attachments/data-hub/data-hub-catalog/register-data/register-data-source-contract.png" alt="upload contract"   width="400"  >}}

	If you selected the wrong file, click the **x** to remove it and upload a different one. 

3. On the **Data Source** screen, specify the following Data Source details: **Data Source Name**, **Data Source Version**, **Data Source Relative Path**.  The **Data Source Relative Path** is the path of the OData service contract relative to the *environment URL of the application*. For more advice on versioning, see [Semantic numbering](/refguide/consumed-odata-service/#semantic). The other fields on the form are optional.

	{{< figure src="/attachments/data-hub/data-hub-catalog/register-data/register-data-source-details.png" alt="upload contract"   width="400"  >}}

4. Select the **Go to next step** option that appears once you have filled out all the required fields.

5. On the **Application** screen, select an existing application by name, or register a new one. **Technical Owner** and **Business Owner** can be edited through the **Curation** feature later.

6. Select the **Go to next step** option that appears once you have filled out all the required fields.

7. On the **Environment** screen, select an existing environment by name, or provide the `Name`, `Location` (URL), and `Type` to register a new one. The types options give users an indication of what type of data they might find there:

    1. **Production**: data is of production quality.
    2. **Sandbox**: the Mendix Free App environment, data is not of production quality.
    3. **Non-production**: hosting is paid for, but data is not of production quality.

8. Select the **Done!** option that appears once you have filled out all the required fields.

Congratulations! Your OData service is registered in the Data Hub Catalog. 

The discoverable status of the OData service defaults to the value set by the Mendix Admin. For more details, see the [Settings](/developerportal/control-center/data-hub-admin/#settings) section of *Data Hub Administration*.

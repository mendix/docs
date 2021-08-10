---
title: "How to Register OData resources in the Data Hub Catalog"
description: "How to register OData resources in the Data Hub Catalog: through the Mendix Cloud, using the Registration API, or in the UI form"
tags: ["data hub catalog", "data hub", "external entities", "register", "published OData service" ,"how to", "registration"]
---

## 1 Introduction

There are three ways to register exposed OData services in the Data Hub Catalog.

**This how-to will teach you how to register a service:**

* Through the [Mendix Cloud](#mendix-cloud)
* Through the [Data Hub Catalog Registration API](#registration-api)
* Through the [Data Hub Catalog UI form](#registration-form)


## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro version [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/)
* You have a Mendix account
* You have an exposed OData service that you're ready to register, or follow sections 3 and 4 in [this how-to](https://docs.mendix.com/data-hub/share-data/) to create one.


## 3 Registering a service through the Mendix Cloud {#mendix-cloud}


If you've got:

1. an exposed OData service, that's
2. deployed to the Mendix Cloud,

then congratulations! Your service is already registered in the Data Hub Catalog. This is the power of the Mendix Data Hub.

## 4 Registering a service without the Mendix Cloud {#without-mendix-cloud}

If you aren't using the Mendix Cloud to deploy your Mendix application, there are two other ways to register an exposed OData service in the Data Hub Catalog:

* Through the Data Hub Catalog Registration API
* Through the Data Hub Catalog UI form

The Data Hub Catalog collects metadata about the application and environment where your application is deployed, so you can distinguish services from one another. You'll need to provide details about both the application and environment where the service is deployed in order to register your service.

### 4.1 Registering a service through the Data Hub Catalog Registration API {#registration-api}

Calling the Data Hub Catalog Registration APIs will allow you to register one (or several at a time) exposed OData service(s). 

First, we'll:

1. create an authentication token to get access to the Data Hub Catalog APIs

The Data Hub Catalog Registration API requires authentication through a Personal Access Token. For every API request you make to a Data Hub Catalog API, include the following key-value pair with your headers:

`Authorization: MxToken <your_Personal_Access_Token>`

To create a Personal Access Token, see [Creating a Data Hub Catalog Registration API token](#create-token).

Once you have a Personal Access Token, we'll follow this series of REST calls to register the details of our exposed OData service:

2. [register the application and retrieve an application UUID](#register-application)
3. use the application UUID to [register the environment, and retrieve the environment UUID](#register-environment)
4. use the application UUID and the environment UUID to [register one or more services](#register-services); or if your service contract isn't in the right format,
5. use the [Transform API](#transform-api) to get your service contract in the right format before registering them.

The [Data Hub Registration API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html) describes all the optional fields, required formats, other operations on these same paths. You'll only the required fields and one operation per path in this how-to. 

#### 4.1.1 Creating a Data Hub Catalog Registration API token {#create-token}

You can create a Personal Access Token in the Mendix **Warden** application: 

1. To access the **Warden** app go to [https://warden.mendix.com/](https://warden.mendix.com/) and log in to land on the Warden homepage.

    ![Warden Home Screen](attachments/warden-home-screen.png)

2. To create a new personal access token, click **Add**. The **Create a Personal Access Token** screen is displayed.

3. Enter a unique **Name** for the token. This name will help you identify it on the Warden home screen.

4. In the **Select scopes that can be used with this token:**, find the Data Hub section and check both the **mx:datahub:services:read** and **mx:datahub:services:write** boxes.
	
	![create token home](attachments/create-token.png)
    
5. Click **Create**. The token will be generated and displayed in a pop-up window:

    ![generated token](attachments/generated-token.png)

6. Copy the **Token secret** and keep it token in a secure place. You will not get another chance to view this token once you **Close** this dialog box.

7. Click **Close** to return to the **Warden** home screen where all your Personal Access Tokens are listed. If needed, you can delete your token from this list using the red trash can button.

![generated token](attachments/warden-home-with-token.png)

#### 4.1.2 Registering an application through the Data Hub Catalog Registration API {#register-application}

To register an application, you'll need:

- a Personal Access Token
- an application `Name`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/post_applications).

Here's an example of a request:

```curl
curl --location --request POST 'https://hub.mendix.com/rest/registration/v3/applications' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Application"}'
```
A successful `POST` call will result in a `201` status code and a JSON response body that includes the details you provided about the application, the location of an application icon, and a unique ID:


```json
{
  "Name": "My-Application",
  "UUID": "1681ca4d-c119-4da9-97d0-f37221d50294",
  "Icon": "https://cdn.mendix.com/image.png"
}
```

Use the application UUID to register your environment.

#### 4.1.3 Registering an environment through the Data Hub Catalog Registration API {#register-environment}

To register an environment, you'll need:

- a Personal Access Token
- an `application_UUID`
- an environment `Name`
- an environment `Location`
- an environment `Type`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/post_applications__AppUUID__environments). 

Here's an example of a request:

```curl
curl --location --request POST 'https://hub.mendix.com/rest/registration/v3/applications/{application_UUID}/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{"Name": "My-Environment", "Location": "https://my-deployed-application-url.com", "Type": "Production"}'
```

A successful `POST` call will result in a `201` status code and a JSON response body that includes the details you provided about the environment, along with a unique ID:

```json
{
​    "Name": "My-Environment",
​    "Location": "https://my-deployed-application-url.com",
​    "Type": "Production",
​    "UUID": "c82b21d7-465e-479a-86e1-e49830451809",
​    "Application": {
​        "Name": "My-Application",
​        "UUID": "1681ca4d-c119-4da9-97d0-f37221d50294"
​    }
}
```

Use the application UUID and the environment UUID to register one or more services.


#### 4.1.4 Registering services through the Data Hub Catalog Registration API {#register-services}

To register services, you'll need:

- a Personal Access Token
- an `application_UUID`
- an `environment_UUID`
- a service `Path`, `Name`, and `ContractType`
- a service version `Version` and `Security Scheme`
- a service `Contract` with `Type` and `Value`

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html#/Register/put_applications__AppUUID__environments__EnvironmentUUID__published_endpoints). 

Here's an example of a request that registers one service:

```curl
curl --location --request PUT 'https://hub.mendix.com/rest/registration/v3/applications/{application_UUID}/environments/{environment_UUID}/published-endpoints' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <your_Personal_Access_Token>' \
--data-raw '{
    "Endpoints": [
        {
            "Path": "/path/to/my/service/endpoint",
            "ServiceVersion": {
                "Version": "1.0",
                "Service": { 
                		"Name": "My-Service-Name", 
                		"ContractType": "OData_3_0"
                },
                "SecurityScheme": {},
                "Contracts": [
                    {
                        "Type": "Metadata",
                        "Value": "<?xml version=\"1.0\" encoding=\"utf-8\"?><edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:mx=\"http://www.mendix.com/Protocols/MendixData\">  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http://schemas.microsoft.com/ado/2009/11/edm\"><EntityType Name=\"Employee\"><Key><PropertyRef Name=\"ID\" /></Key><Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" /><Property Name=\"Name\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"DateOfBirth\" Type=\"Edm.DateTimeOffset\" /><Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"JobTitle\" Type=\"Edm.String\" MaxLength=\"200\" /><Property Name=\"Salary\" Type=\"Edm.Decimal\" /></EntityType><EntityContainer Name=\"test.acme.employeeinformation/v1Entities\" m:IsDefaultEntityContainer=\"true\"><EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
                    }
                ]
            }
        }
    ]
}'
```

If you're receiving a `400` response because your contract metadata is getting rejected, use the [Transform API](#tranform-api) to get it in the right format. If you want to register more than one service for the same application and environment at once, add another object to the `Endpoints` list in the request body.

A successful `PUT` call will result in a `200` status code and a JSON response body that includes the details you provided about the service(s), along with a unique ID and some other details:

```json
    Schema

{
  "Endpoints": [
    {
      "UUID": "0a25b1d5-5b17-494b-99c6-81ecec7ccab2",
      "Path": "/path/to/my/service/endpoint",
      "SecurityClassification": "Internal",
      "Discoverable": true,
      "Validated": true,
      "Connections": 0,
      "LastUpdated": "2021-01-01T15:22:58.981Z",
      "Links": [
        {
          "Rel": "Self",
          "Href": "https://hub.mendix.com/rest/datahubservice/v3/applications/cfc36b98-7409-4384-b71d-f003b0c2f84b/environments/57e214d1-d8b2-48fb-8ff3-d67932ae392b/services/test.acme.salaryservice/3.0"
        },
        {
          "Rel": "Catalog",
          "Href": "https://hub.mendix.com/link/endpoints?EndpointUUID=0a25b1d5-5b17-494b-99c6-81ecec7ccab2"
        }
      ],
      "ServiceVersion": {
        "Version": "3.0",
        "UUID": "fef91870-0306-42a7-810f-13d3dbb14331",
        "Service": [
          {
            "Name": "test.acme.salaryservice",
            "UUID": "8afabb90-fb74-4647-b33a-39b81cc33abb",
            "ContractType": "OData_3_0",
            "Links": [
              {
                "Rel": "Self",
                "Href": "https://hub.mendix.com/rest/datahubservice/v2/applications/cfc36b98-7409-4384-b71d-f003b0c2f84b/environments/57e214d1-d8b2-48fb-8ff3-d67932ae392b/services/test.acme.salaryservice"
              }
            ]
          }
        ],
        "SecurityScheme": {}
      }
    }
  ]
}
```


#### 4.1.5 Preparing your service details using the Transformation API {#tranformation-api}

The Transform API converts the `dependencies.json` file your Mendix app generates into the fields the Registration API requires to registers services. 

{{% alert type="info" %}}Note that these optional fields are not currently converted by the Transform API: `SecurityClassification`, `Discoverable`, `Validated`, `ServiceVersion`, `Tags`.{{% /alert %}}

To call the Transform API, you'll need:

1. your app's `dependencies.json` file converted to an escaped JSON string

You can find your `dependencies.json` in the `deployment` > `model` folder of your Mendix application.

2. endpoint location `Name`
3. endpoint location `Value`

These two values can be found in the `metadata.json` file for your exposed OData service. They're in an array called `Constants`, and named `Name` and `DefaultValue`.

For more details on what can and cannot be provided in these fields, see the [API specification](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html#/Dependencies.json/post_dependenciesjson). 

Here's an example of a request that converts a `dependencies.json` file: 

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
A successful `POST` call will result in a `200` status code and a JSON response body. The `PUTPublishedEndpoints` section is what you'll want to go register your services:

```json
{
  "PUTPublishedEndpoints": {
    "Endpoints": [
      {
        "Path": "/employeeservice/v3",
        "ServiceVersion": {
          "Version": "2.1",
          "Description": "Information about the employees of AcmeCorp",
          "SecurityScheme": {
            "SecurityTypes": [
              {
                "Name": "Basic"
              },
              {
                "Name": "MxID",
                "AppStoreModuleId": "93457"
              }
            ],
            "MxAllowedRoles": [
              {
                "Name": "HrExpert",
                "UUID": "04989324-8a86-495b-b2d0-baf491ce6ff5"
              }
            ]
          },
          "Service": {
            "Name": "test.acme.employeeinformation",
            "ContractType": "OData_3_0"
          },
          "Contracts": [
            {
              "Type": "ServiceFeed",
              "Value": "<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?><edmx:Edmx Version=\\\"1.0\\\" xmlns:edmx=\\\"http://schemas.microsoft.com/ado/2007/06/edmx\\\">  <edmx:DataServices m:DataServiceVersion=\\\"3.0\\\" m:MaxDataServiceVersion=\\\"3.0\\\" xmlns:m=\\\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\\\"><Schema Namespace=\\\"DefaultNamespace\\\" xmlns=\\\"http://schemas.microsoft.com/ado/2009/11/edm\\\"><EntityType Name=\\\"Entity\\\"><Key><PropertyRef Name=\\\"ID\\\" /></Key><Property Name=\\\"ID\\\" Type=\\\"Edm.Int64\\\" Nullable=\\\"false\\\" /><Property Name=\\\"Attribute\\\" Type=\\\"Edm.String\\\" /></EntityType><EntityContainer Name=\\\"ODataServiceEntities\\\" m:IsDefaultEntityContainer=\\\"true\\\"><EntitySet Name=\\\"Entities\\\" EntityType=\\\"DefaultNamespace.Entity\\\" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>",
              "Includes": [
                {
                  "Value": "<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?><edmx:Edmx Version=\\\"4.0\\\" xmlns:edmx=\\\"http://docs.oasis-open.org/odata/ns/edmx\\\"><edmx:Reference Uri=\\\"http://localhost/CORE/v1/CsdlSchema.xml\\\"><edmx:Include Alias=\\\"CORE\\\" Namespace=\\\"CORE_SCHEMA_V_1_0\\\"/><edmx:Include Alias=\\\"FOUNDATION\\\" Namespace=\\\"FOUNDATION_SCHEMA_V_1_0\\\"/></edmx:Reference><edmx:DataServices><Schema xmlns=\\\"http://docs.oasis-open.org/odata/ns/edm\\\" Namespace=\\\"SUB_SCHEMA_V_1_0\\\"><EntityType Name=\\\"VendorPart\\\" BaseType=\\\"CORE_SCHEMA_V_1_0.Part\\\"><NavigationProperty Name=\\\"VendorReference\\\" Type=\\\"SUB_SCHEMA_V_1_0.Vendor\\\"></NavigationProperty></EntityType><EntityType Name=\\\"Vendor\\\"><Key><PropertyRef Name=\\\"ContactName\\\"/></Key><Property Name=\\\"Name\\\" Type=\\\"Edm.String\\\"></Property><Property Name=\\\"Description\\\" Type=\\\"Edm.String\\\"></Property><Property Name=\\\"Address\\\" Type=\\\"Edm.String\\\"></Property><Property Name=\\\"Phone\\\" Type=\\\"Edm.String\\\"></Property><Property Name=\\\"Email\\\" Type=\\\"Edm.String\\\"></Property><Property Name=\\\"ContactName\\\" Type=\\\"Edm.String\\\"></Property></EntityType><EntityContainer Name=\\\"SupplierCollaborationContainer\\\" Extends=\\\"CORE_SCHEMA_V_1_0.CORE_APA242_CONTAINER_1\\\"><EntitySet Name=\\\"VendorParts\\\" EntityType=\\\"SUB_SCHEMA_V_1_0.VendorPart\\\"><NavigationPropertyBinding Path=\\\"VendorReference\\\" Target=\\\"Vendors\\\"/></EntitySet><EntitySet Name=\\\"Vendors\\\" EntityType=\\\"SUB_SCHEMA_V_1_0.Vendor\\\"></EntitySet></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>"
                }
              ]
            }
          ]
        }
      }
    ]
  },
  "PUTConsumedEndpoints": {
    "Endpoints": [
      {
        "EndpointLocation": "https://hr.acmecorp.test/employeeservice/v2",
        "ConsumedItems": [
          {
            "Type": "EntitySet",
            "Name": "ManagingEmployees",
            "Namespace": "DefaultNamespace"
          }
        ]
      }
    ]
  }
}
```


### 4.2 Registering a service through the Data Hub Catalog UI form {#registration-form}

The Data Hub Catalog has a UI form where you can register a single exposed OData service. Make sure you've collected the following details before you begin:

- OData v4 metadata contract file as an XML, or ZIP if it's multiple files
- Data Source details: `Name`, `Version`, `Path`
- Application `Name`
- Environment details: `Name`, `Location` (URL), `Type`

1. Start at the [Data Hub Catalog homepage](https://hub.mendix.com). If the connector for your business application is not shown, use the generic **OData** v4 service:

	![upload contract](attachments/register-data-source-odata-connector.png)

2. On the **Contract** screen, upload your XML or ZIP file.

	{{% image_container width="400" %}}![upload contract](attachments/register-data-source-contract.png) {{% /image_container %}}

	If you selected the wrong file, click the **x** to remove it and upload a different one. 

3. On the **Data Source** screen specify the following Data Source details: `Name`, `Version`, `Path`.  The **Data Source Relative Path** is the path of the OData service contract relative to the *environment URL of the application*. For more advice on versioning, see [Semantic numbering](/refguide/consumed-odata-service#semantic). The other fields on the form are optional.

	{{% image_container width="400" %}}![upload contract](attachments/register-data-source-details.png) {{% /image_container %}}

	Once you've filled out all the required fields, you'll see the **Go to next step** option. Select it.

4. On the **Application** screen, select an existing application by name, or register a new one. **Technical Owner** and **Business Owner** can be edited through the **Curation** feature later.

	Once you've filled out all the required fields, you'll see the **Go to next step** option. Select it.

5. On the **Environment** screen, select an existing environment by name, or provide the `Name`, `Location` (URL), and `Type` to register a new one. The types options give users an indictation of what type of data they might find there:

	* **Production**: data is of production quality
	* **Sandbox**: the Mendix Free App environment, data is not of production quality
	* **Non-production**: hosting is paid for, but data is not of production quality
	
	Once you've filled out all the required fields, you'll see the **Done!** option. Select it.

6. Your OData service is registered in the Data Hub Catalog. 
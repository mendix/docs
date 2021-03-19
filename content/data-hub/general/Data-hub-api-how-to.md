---
title: "Using the Data Hub API"
category: "General Info"
menu_order: 50
description: "How to use the Dat Hub API a guide with examples."
tags: ["data hub", "Data Hub API", "registration", "api", "api-requests"]
---

# Using the Data Hub API


# 1 Introduction

This guide takes you through how to use and the [DataHubAPI](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/) for searching and registering your data sources from your business applications to Data Hub and consuming them. 

The [DataHubAPI](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/) is published as an Open API (formerly Swagger) specification which enables you to visualize the API. It has the latest documentation on the implemented calls which you can try out.  For full definitions of the objects and schemas used in this how-to refer to the specification.

You can see the process of search and registration to Data Hub in the [Share Data Between Apps](https://d25bt5g8n19u8d.cloudfront.net/data-hub/share-data/) how-to. This demonstrates the integrated functionality of Data Hub in Mendix Studio Pro for registering data sources. Using the Data Hub API you can create a deployment process for your apps to register the OData v3 and OData v4 services from these apps and make them available for use in another app through the Data Hub Catalog. 

**Note**: To use the Mendix Data Hub a license is required.

**This how-to will teach you how to do use the API to do the following:**

- Search the catalog for a string
- Register the service in the Catalog
- Register consumed datasets by an App

# 2 Prerequisites

Before starting this how-to, make sure you have completed the following:

- Have a registered Mendix Data Hub Account
- To access the API you must obtain a Personal Access Token (PAT) as described in [Generating your Personal Access Token](https://docs.mendix.com/apidocs-mxsdk/apidocs/data-hub-apis#generatepat) to authenticate your integration’s API requests

# 3 Overview of the Data Hub API

- You can access the latest Data Hub API at: [http://datahub-spec.s3-website.eu-central-1.amazonaws.com](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/).

- The base URL for all calls to the API is: https://hub.mendix.com/rest/datahubservice/v2/

- All requests that are made to the Data Hub API must include the access to the organization’s Data Hub. This is accomplished by including the PAT ( [Generating your Personal Access Token](https://docs.mendix.com/apidocs-mxsdk/apidocs/data-hub-apis#generatepat)) in the header of the request: `Authorization`:  `MxToken <your_PAT_Token>.` For more details see: [+Using the Data Hub API: 2-Making-the-API-Calls-and-Aut](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-2-Making-the-API-Calls-and-Aut-bPBYadNIdEkr2rwXEjwVK#:uid=774113068974419150188919&amp;h2=2-Making-the-API-Calls-and-Aut) 

- For the full specifications of the parameters and schemas and the response status codes refer to the  [Open API spec](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/). 

- The requests that can be made through the Data Hub API:

  - Search for registered assets (data sources, datasets, attributes and associations) in the Catalog using GET

  - Registering datasets:
    Registering datasets involves registering the data source (OData services) that the dataset is exposed in. The following requests in the given order:

    1. Application that the dataset originates from: POST application
    2. Environment that the dataset is deployed to: POST environment
    3. Register the published services (data source) of the application: PUT
    4. Register the all the published services (data source) of the application

	- Register consumed services (data source)


# 4 Making the API Calls and Authentication

This how-to guides users in using the Data Hub API, for full details of all the objects and schemas that define the collections and arrays that are required refer to the [Data Hub Open API spec](http://datahub-spec.s3-website.eu-central-1.amazonaws.com).

For each request described in this document, the method and URL is given for the base call with a description of the parameters and body. An example is given that you follow to try out the calls. 

For some examples, the [curl](http://curl.haxx.se/) command is also given. You will be required to enter the specifics for your own registration such as the returned values for your requests. 

**Note:** curl is an open-source tool curl that is pre-installed on many Linux and macOS systems. Windows users can download a version at curl.haxx.se. When using HTTPS on Windows, ensure that your system meets the curl requirements for SSL.


## 4.1 Authentication

Authorization in the Data Hub API is established by defining the access to your organization’s Data Hub using the [PAT](https://docs.mendix.com/apidocs-mxsdk/apidocs/data-hub-apis#generatepa). You do not specify any authorization for your request but must include the following key:value pair as part of the header for *each* request:  `Authorization`:  `MxToken <your_PAT_Token>`

### 4.1.1 Using Postman
If you prefer to use a tool with a user interface when working with APIs, you can use a REST API client of your choice, for example, [Postman](https://www.getpostman.com/).  Using Postman, for each request, provide the request URI, the HTTP method, and, if required, the request parameters and body.  Authentication is specified in the request **Header**.  You can set your PAT token as a variable which can be conveniently called for each request.

###  4.1.2 Using a Command Line Tool such as Curl
If you are using the [curl](http://curl.haxx.se/) command to send your HTTP requests to the API  then you must include the authentication header as given in this example of a GET call: 

`curl --location --request GET 'https://hub.mendix.com/rest/datahubservice/v2/data' \
--header 'Authorization: MxToken <*yourMxToken>*' \`

Insert your `MxToken` for the the string <*your token*> for every request that you make.

## 4.2 Base Variables used in this How-to

For convenience and conciseness, throughout this how-to the following variables are used and should be substituted by the relevant values or those that are returned in the response:


- {{baseUrl}} – the base URL for the Data Hub API:  https://hub.mendix.com/rest/datahubservice/v2/data
- {*AppUUID}* – insert the value returned in the API response for the UUID of the application
- {*EnvironmentUUID} -* insert the value returned in the API response for the UUID of the application

# 5 Searching in the Catalog

Search in the Catalog returns the registered assets that satisfy the search string and filters. The search is carried out on all registered assets in the catalog (data sources, data sets, attributes and descriptions of the registered items).

## 5.1 Method and Endpoint

`GET /data` 

## 5.2 Request Parameters

The following parameters can be specified for `data` :

| **Name**                | **Type** | **Required/Optional** | **DefaultValue**      | **Description**                                              |
| ----------------------- | -------- | --------------------- | --------------------- | ------------------------------------------------------------ |
| query                   | string   | optional              |                       | Search string                                                |
| productionEndpointsOnly | boolean  | optional              | false                 | Boolean filter to only return endpoints in a Production environment. False will return endpoints in Production, Non-production and Sandbox environments. |
| contractType            | string   | optional              | all                   | Protocol used by the service. Currently supported values: OData_3_0, OData_4_0_Xml, <br>Kafka_1_0. |
| afterId                 | string   | optional              | first page of results | UUID of the last endpoint on the previous page               |
| limit                   | integer  | optional              | 20                    | The maximum number of items that could be returned. Default is 20, Maximum value = 100. |

## 5.3 200 OK Response

A successful 200 response returns the assets from the Data Hub that satisfies the search string and specified filters. This means that all the objects in the the returned `Data` array will have the string `sample` in the names and descriptions. 

### 5.3.1 `SearchResults` objects

The endpoints which are the data sources (services) that are returned in the `SearchResults` object comprise the following.  For a full specification of the lower level objects and arrays refer to the [Open API spec](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/).

| **Name**     | **Type** | I**ncluded in response?** | **Description**                                              |
| ------------ | -------- | ------------------------- | ------------------------------------------------------------ |
| Data         |          | always                    | An array of `Data` objects (5.3.2)                           |
| Links        |          | always                    | Array of `Link` objects.  Pagination links. 'First' provides the URL to the first page of results, 'Current' provides a URL to the current page of results, 'Next' provides URL to the next page of results. |
| Limit        | integer  | always                    | Limit for this request. Example: 1                           |
| LastId       | string   |                           | UUID of the last item returned in the `Data` array. Example: 69db538d-35d4-4a9f-825a-93db0eb8130f |
| TotalResults | integer  | always                    | Total number of results matching the search query. Example: 87 |

 ### 5.3.2  `Data` Objects
The objects that are returned in the response  for  `Data`. For full details of objects that define the arrays and collections, refer to the  [Open API spec](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/).

| **Name**               | **Type** | I**ncluded in response?** | **Description**                                              |
| ---------------------- | -------- | ------------------------- | ------------------------------------------------------------ |
| UUID                   | string   | always                    | UUID of the endpoint.<br>Example: 69db538d-35d4-4a9f-825a-93db0eb8130f |
| Name                   |          | always                    | Name of the service published at the endpoint. Example: test.acme.employeeinformation |
| Version                | integer  | always                    | Version of the service published by the endpoint. Example: 2.1 |
| ContractType           | string   | always                    | Protocol used by the service. Currently supported values: OData_3_0, OData_4_0_Xml, Kafka_1_0 Example: OData_3_0 |
| Description            | string   |                           | Description of the service published by the endpoint. Only returned if present. Example: Information about the employees of AcmeCorp |
| Connections            | integer  | always                    | Number of environments consuming this endpoint.  Example 42  |
| LastUpdated            | string   | always                    | UTC timestamp of the most recent update to the service. Example: 2019-01-01T15:22:58.981Z |
| SecurityClassification | string   | always                    | The classification of data for this service. Allowed string values (rather than enum): Public, Internal (restricted to company), or Confidential (restricted within company). Example: Internal |
| Validated              | boolean  | always                    | Indicates if the service is validated during curation. Example: true |
| SecurityScheme         |          | always                    | An array of objects defining the security scheme for the item. |
| Environment            |          | always                    | A collection of the objects specifying the deployment environment |
| Application            |          | always                    | A collection of objects specifying the application details of the service. |
| Tags                   |          | always                    | Tags on this endpoint.<br>example: List [ OrderedMap { "Name": "HR" }, OrderedMap { "Name": "Salary" }, OrderedMap { "Name": "PeopleManagement" } ]<br>An array of `Tag` objects |
| TotalItems             | integer  | always                    | The total number of items (such as daa sources ) existing at this level.<br>Example: 17 |
| Items                  |          |                           | List of items (such as data sources) at this endpoint relevant to the search query<br>Example: List [ OrderedMap { "Name": "Employee", "Type": "DataSource", "EntitySetName": "NewEmployees", "EntityTypeName": "Employee", "Namespace": "AcmeHR", "TotalItems": 3, "Validated": true, "Items": List [ OrderedMap { "Name": "Name", "Type": "Attribute", "EdmxType": "String" }, OrderedMap { "Name": "Salary", "Type": "Attribute", "EdmxType": "Decimal" }, OrderedMap { "Name": "Employee_Car", "Type": "Association", "ReferencedDataSource": "Car", "Multiplicity": "0..1", "EntitySetName": "CompanyCars", "EntityTypeName": "Car", "Namespace": "AcmeHR" } ], "Links": OrderedMap { "Rel": "Catalog", "Href": "https://hub.mendix.com/link/entity?EndpointUUID=9e26c386-9316-4a33-9963-8fe9f69a5117&EntityUUID=130b6d98-bb60-4920-8262-a0adfbe0ade8" } } ] |
| Links                  |          | always                    | Catalog is a deeplink to the endpoint details page in the Catalog. Self is the URL with the endpoint details, including contracts. |





## 5.4 Example: Searching for Registered Assets in the Catalog that have the string:  `sample`

### 5.4.1 Base Request URL
This example shows you how to search for assets that satisfy the following:

- the search string `sample` 
- in the production environments only (value `true`)
- for all registered contract types 

The GET request URL is as follows:


    GET {{baseUrl}}/data?query=sample&productionEndpointsOnly=true



The example Curl command for the above search is:

curl --location --request GET 'https://hub.mendix.com/rest/datahubservice/v2/data?query=sample&productionEndpointsOnly=true' \

--header 'Authorization: MxToken <*your MxToken>*' \`



### 5.4.2 The Response
The 200 OK response returned the following results:

- `TotalResults` that are returned are 11
- For conciseness of the 7 objects that are returned for the  `Data`  object only the second data source, **SAMPLE_EmployeeDirectory**, is shown fully in the response payload below, the other data sources have been concatenated as { …}.

 The Response body that is returned is the following:

{

​    "TotalResults": 11,

​    "Links": [

​        {

​            "Href": "https://hub.mendix.com/rest/datahubservice/v2/data?query=sample&productionEndpointsOnly=true",

​            "Rel": "First"

​        },

​        {

​            "Href": "https://hub.mendix.com/rest/datahubservice/v2/data?query=sample&productionEndpointsOnly=true",

​            "Rel": "Current"

​        },

​        {

​            "Href": "https://hub.mendix.com/rest/datahubservice/v2/data?query=sample&afterId=c6afa18d-4b3d-49b2-a945-5a93b9a0868e&productionEndpointsOnly=true",

​            "Rel": "Next"

​        }

​    ],

​    "Data": [

​        {...   },

​        {

​            "Connections": 43,

​            "Validated": **true**,

​            "Description": "Service provided by Mendix for testing and sandbox scenarios. Contains mockup HR data to play around with.",

​            "SecurityClassification": "Internal",

​            "TotalItems": 3,

​            "Name": "SAMPLE_EmployeeDirectory",

​            "Version": "1.1.0",

​            "ContractType": "OData_3_0",

​            "Environment": {

​                "Type": "Production",

​                "UUID": "c2fee2c5-00da-4b8b-b3b3-71433b02f064",

​                "Name": "Production",

​                "Location": "https://hrsampleapp.mendixcloud.com"

​            },

​            "Links": [

​                {

​                    "Rel": "Self",

​                    "Href": "https://hub.mendix.com/rest/datahubservice/v2/applications/30aaf7ca-415f-306d-bd6e-458e6f821f06/environments/c2fee2c5-00da-4b8b-b3b3-71433b02f064/services/SAMPLE_EmployeeDirectory/1.1.0"

​                },

​                {

​                    "Rel": "Catalog",

​                    "Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=d4369ff2-cb61-4db0-b77c-b0ba35b052e1"

​                }

​            ],

​            "Items": [],

​            "LastUpdated": "2021-03-09T13:47:04.482Z",

​            "UUID": "d4369ff2-cb61-4db0-b77c-b0ba35b052e1",

​            "SecurityScheme": {

​                "Types": [

​                    {

​                        "Name": "Anonymous"

​                    }

​                ],

​                "MxAllowedRoles": [

​                    {

​                        "ID": "8dd52bfa-6d7e-453b-b506-303c0a3d9567",

​                        "Name": "Administrator"

​                    },

​                    {

​                        "ID": "53f5d6fa-6da9-4a71-b011-454ec052cce8",

​                        "Name": "User"

​                    }

​                ]

​            },

​            "Application": {

​                "Type": "Mendix",

​                "TechnicalOwner": {

​                    "Email": "nam.nguyen@mendix.com",

​                    "OpenID": "https://mxid2.mendixcloud.com/mxid2/id?id=81b8f360-0e75-4195-b1b7-30aed6018eae",

​                    "Name": "Nam Nguyen"

​                },

​                "Icon": "https://hub.mendix.com/rest/documents/v1/images/944a6477-e83c-4236-a6b8-3374c6551657",

​                "UUID": "30aaf7ca-415f-306d-bd6e-458e6f821f06",

​                "RepositoryLocation": "https://sprintr.home.mendix.com/link/project/98c8f370-7bbe-4df5-8289-031c10383ece",

​                "BusinessOwner": {

​                    "Email": "georg.maureder@mendix.com",

​                    "OpenID": "https://mxid2.mendixcloud.com/mxid2/id?id=283b4e98-cee5-4181-88e9-3c87624944bb",

​                    "Name": "Georg Maureder"

​                },

​                "Name": "HR Sample App"

​            },

​            "Tags": [

​                {

​                    "Name": "sample"

​                },

​                {

​                    "Name": "hr"

​                },

​                {

​                    "Name": "employee"

​                },

​                {

​                    "Name": "mockup"

​                }

​            ]

​        },

​        { ... },

​        { ... },

​        { ... },

​        { ... },

​        {... },

​        {... },

​        {... },

​        {... },

​        { ...}

​    ],

​    "Limit": 20,

​    "LastId": "c6afa18d-4b3d-49b2-a945-5a93b9a0868e"

}

### 5.4.2 Search Results for the Same Search When Viewed in the Catalog

Viewed in the Data Hub the search shows the following with the total list in the search results pane on the left and the details of the selected **SAMPLE_EmployeeDirectory** :

![search results](attachments/data-hub-api-how-to/dh-search-sample.png)

# 6 Registering a Sample OData v3 Contract 

This section describes the steps required for registering a data source. 
To register a data source to Data Hub you must register the following in the given sequence:


        1. Application that the data source originates from: POST application
        2. Environment that the data source is deployed to: POST environment
        3. All the published services from the application (data source) of the application: PUT published-endpoints

An additional step that is described in section: ??? is to register the applications that consume the registered data source.

An example Odata v3 services called  **DataHub_Sample_1.0.0_OData3** is provided at the end of this how to in Section ?? which you can use. **** The service is defined by the two files:

- metadata.xml
- serviceFeed.xml

**Note** that the OData service contract files must be in escaped JSON format. There are several online converters available for converting your *.xml* files into this format such as one available from [Freeform.com](https://www.freeformatter.com/json-escape.html#ad-output). Just paste the contents of your files and convert them to the escaped format.  

## 6.1 Registering an Application in the Catalog using POST

The first step is to register the application that the service originates from. 

**Note**: If the application is already registered in the Catalog (for previously registered services for example), you can proceed to 3.3 using the `AppUUID` and `EnvUUID` for the registered service.

6**.1.1 Method and Endpoint**
`POST /applications`

6**.1.2 Request Body** 
There are no parameters to this request only a payload that specifies the details of the application to be registered:

| **Name**           | **Type** | **Required/Optional** | **DefaultValue** | **Description**                                              |
| ------------------ | -------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| Name               | string   | Required              |                  | Name of the application                                      |
| Description        | string   |                       |                  | Description of the application                               |
| RepositoryLocation | string   |                       |                  | Location of the development repository of the application    |
| Type               | string   |                       | Other            | Type of the application. Possible values are "Mendix", "Teamcenter", "Mindsphere", "Microsoft", "SAP" and "Other" (Default)<br>Enum:<br>[ Mendix, Teamcenter, Mindsphere, Microsoft, SAP, Other ] |
| BusinessOwner      |          |                       |                  | Business owner of the application comprising objects defining name and email. |
| TechnicalOwner     |          |                       |                  | Technical owner of the application comprising objects that define the name and email. |
|                    |          |                       |                  |                                                              |


**6.1.3 POST Response**
The successful 201 response will indicate that the application has been registered in the Catalog and return an application `UUID`, which is the Catalog identifier for the registered app that must be used  when referring to the application in the next steps of the registration.

**6.1.4 Example: Registering the SampleDH-App**
For this example, you are going to register an app called **SampleDH-App**. The details of the app are included in the JSON format request body given below.

**6.1.4.1 Base request URL:**
`POST {{baseUrl}}/applications`

**6.1.4.2.  JSON Format Request Body:**
{
  "Name": "SampleDH-App",
  "Description": "This application is used to show how the DH API is used",
  "RepositoryLocation": "https://dhcorp.com/",
  "Type": "Teamcenter",
  "BusinessOwner": {
    "FirstName": "Bill",
    "LastName": "Raine",
    "Email": "bill.raine@dh.co"
  },
  "TechnicalOwner": {
    "FirstName": "Bob",
    "LastName": "Raine",
    "Email": "bill.raine@dh.co"
  }
}

**6****.1.4.3 The Example Curl Command:**
The curl command specifies the format of the body content and the body data. 

curl --location --request POST '*{{BaseURL}}*' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken <*yourMxToken>*' \
--data-raw '{
  "Name": "SampleDH-App",
  "Description": "This application is used to show how the DH API is used",
  "RepositoryLocation": "https://dhcorp.com/",
  "Type": "Teamcenter",
  "BusinessOwner": {
    "FirstName": "Bill",
    "LastName": "Raine",
    "Email": "bill.raine@dh.co"
  },
  "TechnicalOwner": {
    "FirstName": "Bob",
    "LastName": "Raine",
    "Email": "bill.raine@dh.co"
  }
}'

**6.1.4.4 Response 201 Created**
The 201 Response is given below. 
Note that the response returned   `"UUID": "a9e428ba-f84b-4f8d-a4e6-2350ee4177bc"`, which is the Catalog identifier for the application which will be used in subsequent steps of the registration of the data source.

{
    "Name": "SampleDH-App",
    "Description": "This application is used to show how the DH API is used",
    "UUID": "a9e428ba-f84b-4f8d-a4e6-2350ee4177bc",
    "RepositoryLocation": "https://dhcorp.com/",
    "Type": "Teamcenter",
    "TechnicalOwner": {
        "FirstName": "Bob",
        "LastName": "Raine",
        "Email": "bill.raine@dh.co"
    },
    "BusinessOwner": {
        "FirstName": "Bill",
        "LastName": "Raine",
        "Email": "bill.raine@dh.co"
    }
}
}

## 6.2 Registering the Environment using POST

The next step is to register the environment in which the app and the service is deployed. 

6**.2.1 Method and Endpoint**
`POST /applications/{``*AppUUID*``}/environments`

6**.2.2 Request Parameters and body**

| **Name** | **Type** | **Required/Optional** | **DefaultValue** | **Description**                 |
| -------- | -------- | --------------------- | ---------------- | ------------------------------- |
| AppUUID  | string   | Required              |                  | Catalog UUID for registered app |


The Request must be accompanied by the following body: 

| **Name**        | **Type** | **Required/Optional** | **DefaultValue** | **Description**                                              |
| --------------- | -------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| Name            | string   | Required              |                  | Name of the environment                                      |
| Location        | string   | Required              |                  | Location of the environment                                  |
| Type            | string   | Required              | Non-Production   | Value for the environment type, allowed values are: Production, Non-Production, Sandbox. Default value is Non-Production. |
| CustomLocations |          |                       |                  | An array of custom locations at which this environment can also be reached. |


6**.2.3 POST Response**
A 201 response indicates that the environment has been registered in the Catalog for the given application and returns the environment UUID for the environment. 

The combination of the App UUID and the environment UUID is the identifier that is used to register the published endpoints (data sources/services) for the application that are deployed to this environment. 
**Note: You will also need these UUIDs**  registering apps that consume the data sources at these endpoints.

6**.2.4 Example: Registering the Environment** `**Production**`  **for the** `SampleDH-App`  ****

For the app registered in 6.1.4.4 the following steps take you through registering the environment **Production** that the app and the service are deployed to.

**3.2.4.1 Base request URL:**
`POST *{{baseUrl}}*`/applications/a9e428ba-f84b-4f8d-a4e6-2350ee4177bc`/environments`
[](https://hub.mendix.com/rest/datahubservice/v2/applications/:AppUUID/environments) 
6**.2.4.2.  JSON format request body for :**
   {
    "Name": "Production",
    "Location": "https://dhcorp1.com",
    "Type": "Production",
    "CustomLocations": [
        "https://dh.corp1.com"
    ]
}

6**.2.4.3 Example Curl Command:**
curl --location --request POST '{{BaseURL}}/applications/a9e428ba-f84b-4f8d-a4e6-2350ee4177bc/environments' \
--header 'Content-Type: application/json' \
--header 'Authorization: MxToken *<your MX Token>*' \
--data-raw '{
    "Name": "Production",
    "Location": "https://dhcorp1.com",
    "Type": "Production",
    "CustomLocations": [
        "https://dh.corp1.com"
    ]
}'

6**.2.4.4 Response 201 Created**
Note that the response returns the Catalog-generated identifier for the registered `Production` environment:  `"UUID": "d79988dc-1ac3-4ba8-9674-341f98364204"`.

{
    "Name": "Production",
    "Location": "https://dhcorp1.com",
    "Type": "Production",
    "CustomLocations": [
        "https://dh.corp1.com"
    ],
    "UUID": "d79988dc-1ac3-4ba8-9674-341f98364204",
    "Application": {
        "Name": "SampleDH-App",
        "Description": "This application is used to show how the DH API is used",
        "RepositoryLocation": "https://dhcorp.com",
        "Type": "Teamcenter",
        "UUID": "a9e428ba-f84b-4f8d-a4e6-2350ee4177bc"
    }

## 6.3 Registering the Published Services using PUT

After registering the published services for the app registered as in 3.1 in the environment registered in 3.2 you can specify the services (endpoints) that are published by the app in the given environment using the application and environment UUIDs that were returned.   When there are multiple services for a given app, you can include them in a single request.

**6.3.1 Method and Endpoint**
`PUT /applications/``*{AppUUID}*``/environments/``*{EnvironmentUUID}*``/published-endpoints`

**6.3.2 Request Parameters and Body**

The parameters `AppUUID` and `EnvironmentUUID` that were returned in 3.1. and 3.2 are required as input parameters.

The request body is made up of the collection of objects for the `PutPublishedEndpointsRequest`. They include an array of the objects that define each service deployed by the app in the given environment -  `Endpoints` – which are represented below. 
(The blue objects indicate that the constituent objects are a collection, the red an array, and the solid outline indicates if the object is required.)


![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1615912367292_Screenshot+2021-03-16+at+17.32.17.png)


When defining each service in the `ServiceVersion` object specify all the details of the endpoints or service which includes the name, version number. 
The service contracts that are included as part of the `Contracts` object must be in an escaped JSON string format.

**Notes:** 

- For Odata contracts that are made up of several files, all the files must be included for each service.
- If an empty array is sent for `ServiceVersion`, then it will be interpreted that the application in the environment does not publish any services. **Note:** This does not affect any services that are already registered for the application/environment.
- When there are updates to a services, care must be taken when deciding if you will register the new contract at the same endpoint which means that the previous contract will be replaced or do a different endpoint. It is recommended that you use semantic numbering to indicate the severity of changes and follow a strict protocol when deciding on endpoints to ensure that apps consuming previous versions do not experience disruptions.

**6.3.3 PUT Response**
A successful 200 response will return the array of endpoints that are registered for the given environment and application.
For each endpoint a unique  `UUID` for is returned for each service.  
For each endpoint, `Links` will provide the URL of the details page in the Catalog, and also the URI of the service.

The response will also include the number of environment/applications-  `Connections` - that consume this endpoint.


**6.3.4** **Example: Registering the ODatav3-sample-service**
In this example, the service **ODatav3-sample-service** is registered for the application registered in ??? and deployed to the environment registered in ???.

Two tags, `odata` and `sample` are also defined as part of the registration.

For the `Contracts` object you can use the service that is made up of two files supplied with this how-to in Section 6: 

    - “Type”: “ServiceFeed” 
    - “Type”: “Metadata”

Each of these files is provided in escaped JSON format and replace the<*insert service feed from*[+Using the Data Hub API: 6.1-Service-Feed](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.1-Service-Feed-bPBYadNIdEkr2rwXEjwVK#:uid=743818443434385856503942&amp;h2=6.1-Service-Feed) > *and<Insert example metadata from*[+Using the Data Hub API: 6.2-Metadata](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.2-Metadata-bPBYadNIdEkr2rwXEjwVK#:uid=362078091944697159682892&amp;h2=6.2-Metadata) > strings given in the following example.

**6.3.4.1 Example Base request URL**

`PUT` `*{{baseUrl}}*``/applications/{appUUID}/environments/{envUUID}/published-endpoints`

**6.3.4.2.  JSON format request body for the** `**Endpoints**` **Object**
**Note:** for conciseness the two contract files are not included: you must insert the example contract files provided in Section 7: `<``*insert service feed from*`[+Using the Data Hub API: 6.1-Service-Feed](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.1-Service-Feed-bPBYadNIdEkr2rwXEjwVK#:uid=743818443434385856503942&amp;h2=6.1-Service-Feed) `>` and `*<Insert example metadata from*`[+Using the Data Hub API: 6.2-Metadata](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.2-Metadata-bPBYadNIdEkr2rwXEjwVK#:uid=362078091944697159682892&amp;h2=6.2-Metadata) `>` .

{
    "Endpoints": [
        {
            "Path": "/dhservice/v1",
            "SecurityClassification": "Public",
            "Discoverable": **true**,
            "Validated": **false**,
            "ServiceVersion": {
                "Version": "1.0",
                "Description": "A Sample OData v3 service",
                "Service": {
                    "Name": "ODatav3-sample-service",
                    "ContractType": "OData_3_0"
                },
                "Tags": [
                    {
                        "Name": "odata"
                    },
                    {
                        "Name": "sample"
                    }
                ],
                "SecurityScheme": {
                    "SecurityTypes": [
                        {
                            "Name": "MxID",
                            "AppStoreModuleId": "a4f7847b-9562-4b5a-adc2-4a0bf41cc534"
                        }
                    ],
                    "MxAllowedRoles": [
                        {
                            "Name": "User",
                            "UUID": "91ca220e-9498-4d23-9d2e-90b9c19aca37"
                        }
                    ]
                },
                "Contracts": [
                    {
                        "Type": "ServiceFeed",
                        "Value": "<*insert service feed from*[+Using the Data Hub API: 6.1-Service-Feed](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.1-Service-Feed-bPBYadNIdEkr2rwXEjwVK#:uid=743818443434385856503942&amp;h2=6.1-Service-Feed) >"
                    },
                    {
                        "Type": "Metadata",
                        "Value": "*<Insert example metadata from*[+Using the Data Hub API: 6.2-Metadata](https://paper.dropbox.com/doc/Using-the-Data-Hub-API-6.2-Metadata-bPBYadNIdEkr2rwXEjwVK#:uid=362078091944697159682892&amp;h2=6.2-Metadata) >"
                    }
                ]
            }
        }
    ]
}

**6.3.4.3 Sample Response 200 OK**
For the above request the following 200 OK response is received:

{
    "Endpoints": [
        {
            "Path": "dhservice/v1",
            "SecurityClassification": "Public",
            "UUID": "fd9975a4-7c46-41e2-acb2-0d16bc28309a",
            "Links": [
                {
                    "Href": "https://hub.mendix.com/rest/datahubservice/v2/applications/a9e428ba-f84b-4f8d-a4e6-2350ee4177bc/environments/d79988dc-1ac3-4ba8-9674-341f98364204/services/ODatav3-sample-service/1.0",
                    "Rel": "Self"
                },
                {
                    "Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=fd9975a4-7c46-41e2-acb2-0d16bc28309a",
                    "Rel": "Catalog"
                }
            ],
            "Connections": 0,
            "LastUpdated": "2021-03-18T11:32:02.409Z",
            "ServiceVersion": {
                "Version": "1.0",
                "Description": "A Sample OData v3 service",
                "PublishDate": "2021-03-18T11:32:02.367Z",
                "UUID": "07f0b455-992b-463c-99e2-31175cc5987f",
                "Service": {
                    "Name": "ODatav3-sample-service",
                    "ContractType": "OData_3_0",
                    "UUID": "f3045344-6229-4d6e-8bf4-a8497c0a61d8"
                },
                "SecurityScheme": {
                    "SecurityTypes": [
                        {
                            "Name": "MxID",
                            "AppStoreModuleId": "a4f7847b-9562-4b5a-adc2-4a0bf41cc534"
                        }
                    ],
                    "MxAllowedRoles": [
                        {
                            "UUID": "91ca220e-9498-4d23-9d2e-90b9c19aca37",
                            "Name": "User"
                        }
                    ]
                },
                "Tags": [
                    {
                        "Name": "odata"
                    },
                    {
                        "Name": "sample"
                    }
                ]
            },
            "Validated": **false**,
            "Discoverable": **true**
        }
    ]
}

The resulting entry in the Catalog for the registered service the entry in the Catalog is the following: 

![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1616087887956_Screenshot+2021-03-18+at+18.18.00.png)


This will be shown in the Landscape as:

![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1616088009554_Screenshot+2021-03-18+at+18.19.55.png)

# 7 Registering Consumed Endpoints by an App using PUT

For the app  registered in [6.1](https://paper.dropbox.com/doc/bPBYadNIdEkr2rwXEjwVK#:uid=323899919797247672112224&h2=6.1-Registering-an-Application),  you can register any services that it consumes by providing the endpoint details and the entities (datasets) that it consumes. This is registered in the Catalog and indicated for the consumed service by the **Connections.**  Consumed services are shown in the Data Hub Landscape for the app.
**Note:** The PUT call for registering consumed entities will *update* the currently registered datasets for an app/environment. This means that when you want to *add* consumed endpoints to an app (indicating the services the app is consuming), all previously registered consumed endpoints must be included in the request payload of the new request. If the previously registered consumed endpoints are not included, the result will be that they will be *removed*.


## 7.1 Method and Endpoint

`PUT /applications/{``*AppUUID*``}/environments/{``*EnvironmentUUID*``}/consumed-endpoints`


## 7.2 Request Parameters and body

The body of the request must include an array of the objects consumed by the application.

Both parameters `AppUUID` and `EnvironmnetUUID` are required for the app that is consuming the service.
The Request body is comprised of the array of consumed endpoints `ConsumedEndpointRequestDetails`. 
For every consumed endpoint the unique identifier of the absolute URL of the endpoint must be provided for the  `EndpointLocation`. 
The `ConsumedItems` includes the name of the `EntitySet` that is consumed and the `Namespace` of the entity set to ensure that the correct consumed dataset can be registered.
**NOTE:**  Some apps may have the same named  `Entityset` which appears in several different `Namespaces` therefore,  while `Namespace` is not required, it is recommended that you include it.

## 7.3 POST Response

The 200 OK response returns the full details of the registered endpoint showing the consumed endpoints and the total number of connections to this endpoint and the full details of the service as registered in the Catalog. 

## 7.4 Example: Registering Consumed Endpoints 

To register that the **Howto5-App** is consuming 2 datasets: **Employees** and **Offices** from the service **SAMPLE_EmployeeDirectory**. 
**Note**: For this example, the `Namespace` object for the `consumedItems` is called `DefaultNamespace` which is the default namespace for Mendix services.

**7.4.1 Example Base Request URL**

`PUT {{baseUrl}}/applications/c602513c-0d33-4ab4-a0de-3ba0f7f9cf75/environments/c08a0a07-9517-48e0-b0ab-beda44a43110/consumed-endpoints`

7**.4.2.  JSON Format Request Body to Register Consuming from SampleDH-App**
To register the two consumed entities **Employees** and **Offices** from the HR Sample service at https://hrsampleapp.mendixcloud.com/odata/PubOdataEmployeeDirectory/v1



7.4.3 **Example** **Response 200 Created**
The response that is returned shows the full details of the consumed service as part of the `Endpoints` object. The total number of connections to the service is 43: 




This is shown in the Data Hub Landscape for the **SampleDHApp.** It consumes 2 datasets from the **SAMPLE_EmployeeDirectory** service which is deployed from the **HR Sample App.**

![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1616099275601_image.png)


When the**SAMPLE_EmployeeDirectory** is viewed in the Data Hub Landscape, **Howto5-App** is one of the network of apps consuming it:


![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1616100598264_image.png)



 

# 5 ~~Consuming data through Data Hub~~

The Process is to 
Search for a service and then for a particular service the following requests should be made:

- GET all different versions of a service /applications/{AppUUID}/services/{ServiceName}
- GET detailed information about a specific contract
- PUT the consumed entities registered in the catalog by the application



## 5.1 Get all versions and endpoints of a service

You can perform a search to find a particular service with the dataset that you want to use. Before you can do that you must use the GET /applications request to retrieve the UUID of a particular application:

- All the versions and their endpoints for a particular service
- Identify and retrieve the contract of the service that you want to consume 

5**.1.1 Method and Endpoint**
`GET /applications/{AppUUID}/services/{ServiceName}`

5**.1.2 Request Parameters and body**

| **Name**    | **Type** | **Required/Optional** | **DefaultValue** | **Description**                 |
| ----------- | -------- | --------------------- | ---------------- | ------------------------------- |
| AppUUID     | string   | Required              |                  | Catalog UUID for registered app |
| ServiceName | string   | Required              |                  | Name of Service                 |

5**.1.3 GET Response**

| **Name**     | **Type** | **Required/Optional** | **DefaultValue** | **Description**                                              |
| ------------ | -------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| Name         | string   | Required              |                  | Name of Service                                              |
| ContractType | string   | Required              |                  | Protocol used by the service. Currently supported values: OData_3_0, OData_4_0_Xml |
| Application  |          | required              |                  | Will return a collection of objects describing the application |
| Versions     |          |                       |                  | For the specified endpoint, the details of the version numbers, the environments they are deployed to and links to the each version number |

5**.1.4 Example:** 
To get all services for the service `SAMPLE_EmployeeDirectory`

5**.4.4.1 Base request URL:**
`GET /applications/30aaf7ca-415f-306d-bd6e-458e6f821f06/services/SAMPLE_EmployeeDirectory'`

curl --location --request GET 'https://hub.mendix.com/rest/datahubservice/v2/applications/30aaf7ca-415f-306d-bd6e-458e6f821f06/services/SAMPLE_EmployeeDirectory' \
--header 'Authorization: MxToken <*yourMxToken>*'

**5.1.5 Example response**
For the above response there was only a single instance of the service found: 
{
    "Name": "SAMPLE_EmployeeDirectory",
    "ContractType": "OData_3_0",
    "Application": {
        "Name": "HR Sample App",
        "UUID": "30aaf7ca-415f-306d-bd6e-458e6f821f06",
        "RepositoryLocation": "https://sprintr.home.mendix.com/link/project/98c8f370-7bbe-4df5-8289-031c10383ece",
        "Type": "Mendix",
        "Icon": "https://hub.mendix.com/rest/documents/v1/images/944a6477-e83c-4236-a6b8-3374c6551657",
        "TechnicalOwner": {
            "Email": "nam.nguyen@mendix.com",
            "Name": "Nam Nguyen"
        },
        "BusinessOwner": {
            "Email": "georg.maureder@mendix.com",
            "Name": "Georg Maureder"
        }
    },
    "Versions": [
        {
            "Version": "1.1.0",
            "PublishDate": "2020-06-11T15:17:46.129Z",
            "Endpoints": [
                {
                    "Connections": 37,
                    "LastUpdated": "2020-09-18T09:22:15.765Z",
                    "SecurityClassification": "Public",
                    "UUID": "d4369ff2-cb61-4db0-b77c-b0ba35b052e1",
                    "Links": [
                        {
                            "Href": "https://hub.mendix.com/rest/datahubservice/v2/applications/30aaf7ca-415f-306d-bd6e-458e6f821f06/environments/c2fee2c5-00da-4b8b-b3b3-71433b02f064/services/SAMPLE_EmployeeDirectory/1.1.0",
                            "Rel": "Self"
                        },
                        {
                            "Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=d4369ff2-cb61-4db0-b77c-b0ba35b052e1",
                            "Rel": "Catalog"
                        }
                    ],
                    "Environment": {
                        "Name": "Production",
                        "UUID": "c2fee2c5-00da-4b8b-b3b3-71433b02f064",
                        "Location": "https://hrsampleapp.mendixcloud.com",
                        "Type": "Production"
                    }
                },
                {
                    "Connections": 0,
                    "LastUpdated": "2021-01-26T17:02:05.826Z",
                    "SecurityClassification": "Public",
                    "UUID": "31f68737-9b2a-4aa2-85ee-ca5ad8378cb5",
                    "Links": [
                        {
                            "Href": "https://hub.mendix.com/rest/datahubservice/v2/applications/30aaf7ca-415f-306d-bd6e-458e6f821f06/environments/58b206d6-dfa9-459d-852a-11c0e8a92db0/services/SAMPLE_EmployeeDirectory/1.1.0",
                            "Rel": "Self"
                        },
                        {
                            "Href": "https://hub.mendix.com/link/endpoint?EndpointUUID=31f68737-9b2a-4aa2-85ee-ca5ad8378cb5",
                            "Rel": "Catalog"
                        }
                    ],
                    "Environment": {
                        "Name": "Acceptance",
                        "UUID": "58b206d6-dfa9-459d-852a-11c0e8a92db0",
                        "Location": "https://hrsampleapp-accp.mendixcloud.com",
                        "Type": "Non-Production"
                    }
                }
            ]
        }
    ]
}

In the Catalog the following is shown when searching for the same service: 

![](https://paper-attachments.dropbox.com/s_5110D0F8658FA1B6296437C16E0C83965FFDB37EE0B69FD3C06E5B34A72DC3E6_1615294296033_Screenshot+2021-03-09+at+13.51.30.png)



## 5.2 Retrieve Contract of a specific Service

Retrieve contract or contract files (for OData v3, two contract files JIRA CAT-645..) that are registered in the Catalog. This contract can then be retrieved in order to parse it and consume specific entities your app modelling.
The consumed entitysets should then be registered in the Catalog as described in 5.3

5**.2.1 Method and Endpoint**
`GET /applications/``*{AppUUID}*``/environments/``*{EnvironmentUUID}*``/services/{ServiceName}/{ServiceVersion}`

5**.2.2 Request Parameters and body**
All parameters are required in order to retrieve the contract that you want to consume from.  These are returned from the first GET call performed in 5.1 You can upload the contract and consume exposed entities from this. 

5**.2.3 Response**
The response will return a collection of the specific details of the service:

| **Name**    | **Type** | **Required/Optional** | **DefaultValue** | **Description**                                              |
| ----------- | -------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| VersionText | string   | Required              |                  | The version number of the downloaded service                 |
| PublishedOn | string   | Required              |                  | Date of publication of the service                           |
| Location*   | string   | Required              |                  | Location at which the service version has been published.    |
| Description | string   |                       |                  | Description of the service                                   |
| Services    |          | Required              |                  | For the specified endpoint (application/environment/version) the details of the contract and the links to the Data Hub details. |
| Contracts   |          | Required              |                  | Collection of objects specifying the contract and the JSON-encoded contents of the contract. <br>Note that for `Type` the type of contract is provided: for OData V3, the accepted types are "ServiceFeed" and "Metadata". For OData V4, the primary contract should be called "Metadata". |

5**.2.4 Example:** 
give the example of retrieving HR Sample app

**5.2.5 Example response**
…



# ~~5~~ ~~How to Delete Data Sources from the Catalog~~

~~~~
~~The Data Hub provides a description of the organizations landscape: the apps, the services published by the apps.~~ 
~~The action of removing or “deleting” a service from an app is achieved by registering the application and environment  as described in 3.2.1 and 3.2.1?? and then registering all the services deployed by the app without the service that is no longer available.~~ 



# 8 Sample Contract

The following are the files that make up an example OData v3 contract that you can use for the registration service request. The full contract definition is made up of the **service feed** and the **metadata**. The format provided below is in escaped JSON format contract which you can copy and directly insert in the request body.


## 8.1 Service Feed

<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<service xmlns:atom=\"http:\/\/www.w3.org\/2005\/Atom\" xml:base=\"{applicationRootUrl}\/odata\/SAP\/v1\/\" xmlns=\"http:\/\/www.w3.org\/2007\/app\">\r\n  <workspace>\r\n    <atom:title>Default<\/atom:title>\r\n    <collection href=\"Departments\">\r\n      <atom:title>Departments<\/atom:title>\r\n    <\/collection>\r\n    <collection href=\"Employees\">\r\n      <atom:title>Employees<\/atom:title>\r\n    <\/collection>\r\n    <collection href=\"Offices\">\r\n      <atom:title>Offices<\/atom:title>\r\n    <\/collection>\r\n  <\/workspace>\r\n<\/service>

## 8.2 Metadata 

<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http:\/\/schemas.microsoft.com\/ado\/2007\/06\/edmx\" xmlns:mx=\"http:\/\/www.mendix.com\/Protocols\/MendixData\">\r\n  <edmx:DataServices m:DataServiceVersion=\"3.0\" m:MaxDataServiceVersion=\"3.0\" xmlns:m=\"http:\/\/schemas.microsoft.com\/ado\/2007\/08\/dataservices\/metadata\">\r\n    <Schema Namespace=\"DefaultNamespace\" xmlns=\"http:\/\/schemas.microsoft.com\/ado\/2009\/11\/edm\">\r\n      <EntityType Name=\"Department\">\r\n        <Key>\r\n          <PropertyRef Name=\"ID\" \/>\r\n        <\/Key>\r\n        <Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" \/>\r\n        <Property Name=\"Number\" Type=\"Edm.Int64\" \/>\r\n        <Property Name=\"Name\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"Color\" Type=\"Edm.String\" \/>\r\n        <NavigationProperty Name=\"Employees\" Relationship=\"DefaultNamespace.Employee_Department\" FromRole=\"Department\" ToRole=\"Employees\" \/>\r\n      <\/EntityType>\r\n      <EntityType Name=\"Employee\">\r\n        <Key>\r\n          <PropertyRef Name=\"ID\" \/>\r\n        <\/Key>\r\n        <Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" \/>\r\n        <Property Name=\"firstName\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"lastName\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"email\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"phone\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"street\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"city\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"zip\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"country\" Type=\"Edm.String\" \/>\r\n        <NavigationProperty Name=\"Department\" Relationship=\"DefaultNamespace.Employee_Department\" FromRole=\"Employees\" ToRole=\"Department\" \/>\r\n        <NavigationProperty Name=\"Office\" Relationship=\"DefaultNamespace.Employee_Office\" FromRole=\"Employees\" ToRole=\"Office\" \/>\r\n      <\/EntityType>\r\n      <EntityType Name=\"Office\">\r\n        <Key>\r\n          <PropertyRef Name=\"ID\" \/>\r\n        <\/Key>\r\n        <Property Name=\"ID\" Type=\"Edm.Int64\" Nullable=\"false\" mx:isAttribute=\"false\" \/>\r\n        <Property Name=\"Number\" Type=\"Edm.Int64\" \/>\r\n        <Property Name=\"Name\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"Street\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"StreetNumber\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"ZIP\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"City\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"Country\" Type=\"Edm.String\" \/>\r\n        <Property Name=\"CountryCode\" Type=\"Edm.String\" \/>\r\n        <NavigationProperty Name=\"Employees\" Relationship=\"DefaultNamespace.Employee_Office\" FromRole=\"Office\" ToRole=\"Employees\" \/>\r\n      <\/EntityType>\r\n      <Association Name=\"Employee_Department\">\r\n        <End Type=\"DefaultNamespace.Employee\" Multiplicity=\"*\" Role=\"Employees\" \/>\r\n        <End Type=\"DefaultNamespace.Department\" Multiplicity=\"0..1\" Role=\"Department\" \/>\r\n      <\/Association>\r\n      <Association Name=\"Employee_Office\">\r\n        <End Type=\"DefaultNamespace.Employee\" Multiplicity=\"*\" Role=\"Employees\" \/>\r\n        <End Type=\"DefaultNamespace.Office\" Multiplicity=\"0..1\" Role=\"Office\" \/>\r\n      <\/Association>\r\n      <EntityContainer Name=\"SAP\/v1Entities\" m:IsDefaultEntityContainer=\"true\">\r\n        <EntitySet Name=\"Departments\" EntityType=\"DefaultNamespace.Department\" \/>\r\n        <EntitySet Name=\"Employees\" EntityType=\"DefaultNamespace.Employee\" \/>\r\n        <EntitySet Name=\"Offices\" EntityType=\"DefaultNamespace.Office\" \/>\r\n        <AssociationSet Name=\"Employee_Department\" Association=\"DefaultNamespace.Employee_Department\">\r\n          <End Role=\"Employees\" EntitySet=\"Employees\" \/>\r\n          <End Role=\"Department\" EntitySet=\"Departments\" \/>\r\n        <\/AssociationSet>\r\n        <AssociationSet Name=\"Employee_Office\" Association=\"DefaultNamespace.Employee_Office\">\r\n          <End Role=\"Employees\" EntitySet=\"Employees\" \/>\r\n          <End Role=\"Office\" EntitySet=\"Offices\" \/>\r\n        <\/AssociationSet>\r\n      <\/EntityContainer>\r\n    <\/Schema>\r\n  <\/edmx:DataServices>\r\n<\/edmx:Edmx>

# 7 Read More
- [The Data Hub AP](https://docs.mendix.com/apidocs-mxsdk/apidocs/data-hub-apis)I 
- Publishing Data Sources
----------

Ref source material:
[+Using the DH API - Source Material](https://paper.dropbox.com/doc/Using-the-DH-API-Source-Material-NVMGGdPu2YcTn5LnCzWXv) 


~~~~
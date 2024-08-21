---
title: "Wrap Services, APIs, or Databases with OData"
url: /refguide9/wrap-services-odata/
linktitle: "Wrap with OData"
weight: 80
---

## Introduction

Features released in Studio Pro [9.17](/releasenotes/studio-pro/9.17/) expand on existing OData capabilities in Studio Pro. These features allow you to wrap any non-OData service, API, or database with OData, ensuring compatibility with the [Mendix Data Hub](/data-hub/) ([external entities](/refguide9/external-entities/) and the [Catalog](/catalog/)). 

You can also use these features to more easily [build connectors](/appstore/creating-content/connector-guide-build/) that access external data. This set of features adds to the tools described in [Introducing the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/), and are collectively referred to as *Connector Kit 2.0*.

In this guide, you will learn about the following:

* Exposing non-persistable entities as published OData resources 
* Using a microflow to define how resources should be retrieved and stored, and to return values of published OData services
* Selecting a key when exposing entities as OData resources

### Prerequisites

Before you read this guide, do the following:

* Learn how [published](/refguide9/published-odata-services/) and [consumed](/refguide9/consumed-odata-services/) OData services work in Studio Pro
* Read the [Build Connectors](/appstore/creating-content/connector-guide-build/) guide
* Install Studio Pro [9.17](/releasenotes/studio-pro/9.17/) and above

## Why Wrap with OData?

### Best Practices and Performance

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide filtering, sorting, and pagination on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto9/integration/exposing-data-to-bi-tools-using-odata/)), and also ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance. 

### Compatibility with Data Hub

Wrapping a service, API, or database in OData ensures compatibility with the [Mendix Data Hub](/data-hub/). Published OData services are registered automatically in the [Catalog](/catalog/), making them easily usable in other Mendix apps. Discovering and using OData resources in [external entities](/refguide9/external-entities/) is made easy for licensed users on a [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), as [published OData Services](/refguide9/published-odata-services/) are registered automatically in the [Catalog](/catalog/) and made available in the Studio Pro [Data Hub pane](/refguide9/data-hub-pane/).
  
## Non-Persistable Entities as Published OData Resources {#npe-published-odata}

When building a connector or integration, you might only need to move data from back-end services to the client apps instead of storing the data in the database. To support this, you can expose [non-persistable entities](/refguide9/entities/#non-persistable-entity) as [published OData resources](/refguide9/published-odata-resource/). Previously, only persistable entities could be exposed as published OData resources.

### Publishing a Non-Persistable Entity as a Published OData Resource

To expose a non-persistable entity as a published OData resource, do the following: 

1. Right-click on the non-persistable entity you want to expose.
2. Select **Expose as OData resource**.

Publishing a non-persistable entity as a published OData resource is supported for all OData service versions.

## Data Sources for Published OData Resources {#odata-data-sources}

In Studio Pro, you can expose entities as OData resources by adding them to a published OData service. You can expose any number of related resources in a published OData service by using a microflow that determines the result of the incoming request. This is now possible for the [Readable](/refguide9/published-odata-resource/#readable) capability of your service you can define how your resources should be retrieved and stored.

When a consuming app reads your published OData service, it sends a GET request. You can handle an incoming GET request for an OData resource in the following ways:

1. **Read from database** – This action passes the incoming OData query to a database query and retrieve the data from the database. This is the default action for *Readable* section. This action does not apply to non-persistable entities, because non-persistable entities cannot be retrieved from the database. For those, call a microflow.
2. **Call a microflow** – This action calls a microflow defined in the *Readable* section. Specify your custom logic in this microflow to return a list of objects that correspond to the incoming request. See [Handle a GET Request with a Microflow](#handle-get-request).

The resulting list of objects from either will then be transformed into an OData payload. If it fails, you will see a [status code](/refguide9/published-odata-services/#status-codes) of `500`.

### Handling a GET Request with a Microflow {#handle-get-request}

{{% alert color="info" %}}
This feature is only available for published OData services that use OData v4.
{{% /alert %}}

Inside a published OData service, you can expose entities as published resources and select how GET requests are handled. Do the following:

1. Open the published service, and in the **Entities** field, click **Add**.
2. Choose an entity to add to the published service and click **OK**.
3. Highlight the selected entity, and under the **Entities** field, click **Edit**.
4. Under **Readable**, choose to **Call a Microflow**.
5. Click **Select** and create a new microflow to handle the GET request.

The microflow is executed when a consumer sends a GET request to the service endpoint. Include the following tasks inside the microflow:

1. Parse the incoming OData query.
2. Decide what data needs to be collected.
3. Retrieve the required data from another system.
4. Retrieve the required count (this can be done in several ways).
5. Store the count value in the **ODataResponse** object.
6. Return a list of objects that matches the exposed entity.

{{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/call-microflow-implementation.png" alt="Example of an implementation of calling a microflow to handle an incoming GET request." class="no-border" >}}

{{% alert color="info" %}}
When you use a microflow to provide data, any security constraints are applied to the result of the microflow.{{% /alert %}}

### Microflow Parameters

* **HttpRequest** – The first accepted parameter is an HTTP request of the entity type **System.HttpRequest**. This parameter is optional.

    When a consumer sends a request to the published OData service, the `HttpRequest` string attribute *Uri* will contain the OData query that consumer requested. Based on that information, the microflow needs to decide what should be returned. For more information on how an OData v4 requests work, see [OData v4.0. Part 2: URL Conections Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

* **ODataResponse** – The second accepted parameter is an OData response of the entity type **System.ODataResponse**. This parameter is optional.

    The **ODataResponse** has a **Count** attribute where the count value can be stored.

    In OData, there are two different count types:

    1. **Count as a request** – Use this when the consumer is only interested in the number of objects and not the object themselves.

        For example, consider the following request: `persons/$count?$filter=name eq 'John'`.

        This returns the number of people named John.

        If the **ODataResponse** is present as a microflow parameter, then it will return the **Count** attribute value regardless of the result list of objects. Otherwise, it will count the result list of objects.

    1. **Inline count in the request** – Use this when the consumer is interested in the total number of objects while retrieving some of the objects.

        For example, consider the following request: `persons?$count=true&$skip=5&top=5`

        This returns an OData payload with maximum give objects, and a count of the total number of objects that would have been returned if the request did not include $skip and $top. The count information will be included in the payload. This information is useful when paging through all the objects.

        If the **ODataResponse** is present as a microflow parameter, then it will return the **Count** attribute value regardless of the result list of objects. Otherwise, it will return -1 for not defined, which is the default value. A **Count** value of 0 means that there no record.

{{% alert color="info" %}}
In Studio Pro [9.16](/releasenotes/studio-pro/9.16/) and below, the inline count value will be retrieved from the count microflow. For Studio Pro [9.17](/releasenotes/studio-pro/9.17/) and above, the count value can be stored in the `ODataResponse` object.
{{% /alert %}}

## Key Selection When Exposing Entities as OData Resources {#select-key}

Select which attribute(s) to use as a [key](/refguide9/published-odata-resource/#key) when exposing an entity as Published OData Resource so that clients will be able to identify objects returned by the service.

To learn more about selecting a key, see the [Key](/refguide9/published-odata-resource/#key) section of *Published OData Resource*.

### Selecting Attributes as a Key {#select-key}

To select different attributes as a key, do the following:

1. Open the **Published OData Resource**. 
2. In the **Key** section, click **Edit** located next to the **Key** property.
3. In the **Key Selection** dialog box, move the key attributes to the right side. 

A key icon represents attributes that are part of the key.

## Testing {#testing}

You can use tools like Postman or Visual Studio Code to test your published OData services. These tools can help you call the OData service and validate its output.

Another way to test published OData services is with the user interfaces of [OpenAPI](/refguide9/published-odata-services/#openapi), released in Studio Pro [9.17](/releasenotes/studio-pro/9.17/).

## Usage Examples {#usage}

The following examples are possible ways to use OData to connect to external data sources.

### Third-Party Service Connector {#third-party}

You can use the features released in Studio Pro [9.17](/releasenotes/studio-pro/9.17/) to build a connector that wraps a third-party service API as OData. 

For example, say you want to build an app that works with the [Twitter v2 REST API](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api). You would like a simple app where you can enter the ID of a Twitter user and view their latest tweets and followers. 

{{% alert color="info" %}}
This guide is meant to serve as an example to show how to use *Connector Kit 2* features, and is not an official guide to building a Twitter connector. It is intended for local deployments and has not been tested.{{% /alert %}}

{{% alert color="warning" %}}
On February 9, 2023, Twitter will drop support for free API access and will offer a paid basic version instead. Please use the guide below as a reference only.
{{% /alert %}}

#### Prerequisites

To build your app, you first need to do the following:

* [Register as a Twitter Developer](https://developer.twitter.com/en/portal)
* Download Studio Pro [9.17](/releasenotes/studio-pro/9.17/) or above

#### Building the Connector {#twitter-connector}

Set up a connector module that communicates to the Twitter API with OData by following the steps outlined below. To ensure that your app will run, fill in your valid bearer token as the **Default value** in a **BearerToken** [constant](/refguide9/constants/). You can get one by [registering as a Twitter Developer](https://developer.twitter.com/en/portal).

1. Use the Twitter API to find the JSON structures for the calls for users, tweets, and followers, and add the [JSON structure](/refguide9/json-structures/) for each.
2. Create [import mappings](/refguide9/mapping-documents/#import-mappings) for each, which generates entities in your domain model.
    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/twitter-connector-domain-model.png" alt="Domain model for Twitter connector module." class="no-border" >}}
3. Publish all three non-persistable entities as a published OData service (see [Non-Persistable Entities as Published OData Resources](#npe-published-odata)).
4. Select a new [key](#select-key) to be used for each entity. For example, you can set the **UserId**, a **String** value, as a key for the **User** entity.
5. For every exposed entity, specify the microflow that handles the count and query capabilities (for example, a QueryFollowers microflow). See [Data Sources for Published OData Resources](#odata-data-sources).
    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/query-followers-microflow.png" alt="Microflow for querying followers." class="no-border" >}}
6. Export the metadata file of the published OData service to be used in the client module. To do so, open the service and go to **Settings**, and click **Export** next to the **Metadata** field.

    Since you are working in local development environment and not deploying locally, your published resource will not automatically be available in the Catalog or the Data Hub pane. See [Data Hub without the Mendix Cloud](/data-hub/data-hub-without-mendix-cloud/) to understand how to work with Data Hub (external entities and the Catalog) for local deployments.

#### Building the Client

Set up a Twitter client module that allows users to input a Twitter ID and communicates to the Twitter API via your [Twitter connector](#twitter-connector).

1. Create a consumed OData service in the client module, and import the XML file you exported in the [building the connector](#twitter-connector) section.
2. Drag the external **Users**, **Tweets**, and **Followers** entities into your client domain model.
3. Add a non-persistable entity for the TwitterClientInput to be able to fill in the data, handled by a **NewTwitterInput** microflow.

    Double-click the entity, and in the **Persistable** field, choose **No**. The domain model for the Twitter client looks like this:

    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/twitter-client-domain-model.png" alt="Twitter client domain model with external entities and non-persistent entity." class="no-border" >}}

    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/newtwitterinput-microflow.png" alt="Microflow that handles inputted usernames." class="no-border" >}}

4. Add a new page to display the data, and create a ShowUserPage microflow.

    The microflow includes a **Retrieve Object** action that pulls information from the **TwitterClientInput** non-persistable entity. In this case, you can use the XPath constraint [Username=$TwitterClientInput/Username] to get the users with the username you entered. This is then translated into an OData request that is sent to the connector.

    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/showuserpage-microflow.png" alt="Microflow that handles TwitterClientInput request and shows a page." class="no-border" >}}

5. On the **TwitterPage**, use a **Data Grid**, and pull data **by Association** from the to get the tweets and followers connected to the user.

#### Parsing the URI

Run the Twitter client to receive decoded OData requests. 

1. Manually parse the URI, and create a microflow to read data from the URI. 
    {{< figure src="/attachments/refguide9/modeling/integration/wrap-services-odata/read-uri-data.png" alt="Microflow that finds query parameter values." class="no-border" >}}
2. Extract the Twitter user ID from the query, and use a **Call REST** object to ping the Twitter API for the followers (or other data). The API response goes into the import mapping.

Ensure that you have created microflows for all entities used in your connector. When you run your app, you can enter the ID of a Twitter user and view their latest tweets and followers.

## Updatable Operational Data Stores {#operational-data-stores}

Wrapped OData APIs can function as an operational data store, or as a [Data Layer](/refguide9/create-a-basic-data-layer/) for other Mendix apps. For example, you have one Mendix app where you define a central data model that is being used by multiple frontend apps. This central app gets data from different backend systems, caches it, and makes it available as a unified model to the frontend apps. With OData, can provide full read-write APIs to your frontend apps. To ensure data consistency, you can use [OData as a data source microflows](#odata-data-sources) to update your backend systems when a front-end app changes data through an OData API.

Operational data stores are often used to unify and cache external data used by multiple apps. Reasons for this include the following:

* Service APIs do not fit well with interactive use by frontend apps (no sorting,paging, filtering available on the APIs).
* You want to centrally manage security on the data, instead of handling this in every frontend app.
* You want to simplify the data model by unifying data from different services.

To implement a low-code operational data store, include these steps:

* Define a unified model using persistable entities.
* Cache data in a persistable entity. When you call the OData source, it will any updates since it was last called, and will retrieve older records from a local database.
* Expose the unified model with OData, including write-back logic in your microflows.

For general information on building connectors, see the [Build Connectors](/appstore/creating-content/connector-guide-build/) guide.

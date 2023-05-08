---
title: "Build OData APIs with REST Best Practices"
url: /refguide/build-odata-apis/
weight: 75
tags: ["connectors", "data hub", "studio pro", "build", "API", "REST", "connector guide", "odata", "published odata services", "integration"]
---

## 1 Introduction

Companies with a large portfolio of custom built REST APIs use a set of [best practices](#best-practices) to ensure these APIs provide the required functionality in a predictable way. 

You have full control of all these aspects when creating a published REST service in Mendix. However, there is a faster way to build REST APIs in Mendix that comply with a widely supported set of REST best practices: [Published OData services](/refguide/published-odata-services/). If you plan to create a large number of APIs, using OData to implement REST can save you a lot of time while ensuring consistency across your APIs.

This document illustrates examples of how [published OData services](/refguide/published-odata-services/) in Studio Pro help you build better REST APIs faster and easier.

## 2 Common REST API Best Practices {#best-practices}

REST API best practices usually include some of the following:

* **Use JSON** – JSON is easy to read, libraries to process it are available in most languages. However, don’t forget RESTful HTTP supports content negotiation, so using binary images, PDF or even MS-word content-type is also REST and often better than converting binary to JSON.
* **Use nouns not verbs (resource-first, no actions in path)** – APIs should be resource based instead of action based to improve decoupling: all interactions assume resources and a limited set of standardized operations.
* **A resource has an ID** – Every resource has a unique path where it can be retrieve or updated.
* **A resource has a uniform interface, i.e., correct use of http operation** – Use the standardized set of HTTP operations to work with your resources: GET (retrieve), POST (create/insert), PUT (replace), PATCH (update), DELETE.
* **Name collections with plurals** – An endpoint that can return more than one resource should indicate that by have the resource name in plural.
* **Use of standard HTTP status codes** – HTTP has standardized status codes for most situations, good REST APIs use these. Status codes work the same way across applications, application specific errors should be handled in the payload.
* **Versioning and compatibility** – usually specifies versioning should be date based or semantic versioning with the major version part of the url. Clients should assume changes to an endpoint are always backwards compatible. In case of breaking changes, a new endpoint including a new major version number should be used.
* **Use filtering, sorting & pagination** – To ensure best possible performance, and to limit resource usage, enable clients to flexibly define exactly what data they need. This also helps to decouple the client and the service, as not all clients have the same needs. Enabling the client to define what is needed, helps to serve more types of clients.
* **Secure your APIs** – Apps shouldn’t be able to access more information than they are allowed to see.

## 3 Implementing REST APIs with OData

This document use the following domain model as an example. (Don’t worry, API first will also be discussed in this article.) REST apis, and especially OData apis often provide access to data within the app. Mendix OData APIs are excellent for providing APIs for entities, but can also be used for accessing other types of data. This is illustrated later in this article. 

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675863725292_image.png) implement-odata-apis

### 3.1 Published OData Service Document

To provide an Odata REST API for an entity you can add it from the domain model, or in the published odata service document. Here you an also select which attributes and associations are available in the API.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675864696474_image.png) select-attributes-associations


For every published resources you can define what functionality is available (create = POST, read = GET, update = PATCH, delete =DELETE ), and some other capabilities like if counting the results is supported, skipping results (skip) and limiting the number of results returned (top). 

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675863872703_image.png) edit-published-resource


This document presents a resource-first approach to building REST APIs, where you first define the resource you want to expose, and then define which standard operations you want to provide on these resources. Insertable enables POST, readable is a GET, updatable is a PATCH, and deletable will result in a DELETE http operation. This guides you into using the HTTP operations in the right way, resulting in a better REST API.

### OpenApi version 3 contract and test page

When you start your app you can will have a swagger documentation and test page.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675872655152_image.png) swagger-doc


The test page lists all accepted parameters, and example payloads, both for regular responses, as well as for error payloads.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676369088675_image.png) test-page


JSON schema description of all the payload types is also provided.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676370666126_image.png) json-schema


And finally you have an OpenAPI version 3.0.1 contract out of the box.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676368969489_image.png) openapi-contract

# Rich and flexible way to retrieve data puts the client in control

OData REST APIs work as you would expect a REST API to function. Here are some examples using the [REST plugin in Visual Studio Code.](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

Fetching all customers:

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675871307299_image.png) fetch-all-customers

## Get resource by id

Fetching a single Customer resource can be done by providing the id between brackets. OData also supports using multi-field ids by proving the required attributes as a key value list between the brackets.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675872753246_image.png) fetch-single-customer

## Filter, sort, paginate and select the data you need

OData standardizes how you specify which resources you’re interested in. This provides the client with the tools to ensure that the response payload is as small as possible. It also ensures that the Mendix service implementation will be able to push down the filtering, sorting and pagination into the database, ensuring use of the database query optimizer and available indexes to optimize performance.

The following url parameters are available:

- **$filter** - Define [filter expressions](https://docs.mendix.com/refguide/odata-query-options/#4-filtering) for the resource attributes, include equals, not equal, smaller, larger, contains, etc.
- **$top, $skip** - How many resource to skip and how many to return. Helps implement client side pagination.
- **$orderby -** How to sort the resources in the response payload
- **$select -** Which attributes of the resource to return

The following example illustrates how you can combine filtering, sorting, pagination and attribute selection.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675930677250_image.png) filter-sort-page-attribute


Alternatively you can specify the query in the payload of a POST call, which can be useful if you have a long complex query.

# Full CRUD out of the box
## Insert new data

If you selected ‘insertable’ in the API definition, new resources can be created using POST. Successfully created of data will automatically result in a 201 status code, and a ‘Location’ header provides the URL of the resulting resource, as is best practice for REST APIs.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675872843570_image.png) insert-new-data


Using the returned location header to query the new resource at its endpoint.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675872888661_image.png) query-resource-endpoint


**Use of the Prefer header is also supported**
Instead of doing the two API calls illustrated above, POST followed by GET, you also have the option to use the Prefer header. If you give this the value of “return=representation”, the resulting resource will be returned automatically, saving you one API call.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1678714748564_image.png) prefer-header


**Creating resources with associations**
If you want to create a new resource associated to another resource, you can refer to the id of the resource in your payload.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1678887622503_image.png) create-resources-associations

## Modify existing data

Updating of resources is provided using the HTTP PATCH operation. Mendix will automatically handle updating the entity, no need to implement a microflow to handle this. You do have the option to use a microflow if you want to enrich the default behavior, e.g., to add additional validations. Validation rules defined on the entity will be respected automatically, so validation microflows are only needed if you want to do validation more complex than this.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675872999585_image.png) modify-existing-data-1

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873026002_image.png) modify-existing-data-2

## Delete data

Deleting is provided using the DELETE operation.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873068955_image.png) - delete-operation

# Automatic use of standard HTTP error codes

OData APIs automatically return the correct HTTP status code, e.g., a 404 if a specified resource cannot be found.


![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873193102_image.png) standard-error-codes

## Validation rules

When changing data with POST, PUT or DELETE, validation rules specified on the underlying entities are applied automatically. A failed validation rule will result in a HTTP status code 422, the error message will be included in the response payload.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873397541_image.png) validation-rules


The validation rules on customer define that both Firstname and Lastname are mandatory. When you try to create a new customer without a Lastname, this will fail with status code 422, and the error message as defined in the validation rule will be returned in the response.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873351031_image.png) error-422

## Validation microflows 

The above illustrates how errors are handled when using entity validation rules, but you can also reuse the generated validation microflows.

Here’s an example of a validation microflow for the customer entity. On a save button right click and select generate validation microflow.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676054128858_image.png) generate-validation-microflow


Resulting validation microflow looks like this. Notice the use of *show validation message* activity to set the errors to be shown in the UI in this generated validation microflow. This microflow will be called in the insert microflow displayed below.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676054230652_image.png) validation-microflow


Next we’ll specify that we want to use a microflow to handle insert of a new Customer resource via the OData API. This microflow will be called whenever a client does a POST operation on the endpoint of the resource.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676054731019_image.png) specify-use-microflow


In the insert microflow we simply call the generated validation microflow and commit the object if the validation succeeds. 

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676054694396_image.png) insert-microflow


If validation fails the *show validation message* texts are provided automatically in the response payload:

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676054511602_image.png) validation-response-payload

# Optimize performance

OData enables you to exactly specify which attributes you need, so other attributes are not included in the response. This helps reduce the size of the response message. To reduce the number of round-trips, associated objects can be included in the response using the $expand expression.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675873666945_image.png) expand-expression


You can use select and expand in combination with filters, sorting, top and skip as discussed above.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676105444511_image.png) sort-top-skip


For long queries it might be useful to place the query in the request body. You can do this by using POST, and adding $query to the endpoint. 


![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676105604049_image.png) long-queries


You’ll notice that you now have something that is very similar to how you would use GraphQL, where you can query a graph of objects, and limit the attributes returned to only those that you need. 

# API first aka decouple your APIs from your domain model

In some cases you may not want to directly publish APIs for your persistent entities:

- If you want to **decouple** your API resources from your entities
- If you want to define your services **API first**. 
- If your data isn’t stored in the database of your app but in a **3rd party datasource**

Regarding API first, [there are two ways to approach this](https://blog.stoplight.io/api-first-vs.-api-design-first-a-comprehensive-guide): the first states you should always start by defining a contract, e.g., an OpenApi document, the second states that it is more about setting the use case and developer experience of using your APIs first.

The first is not something supported by Mendix OData services, unless the contract is also based on OData. The second however, is not tied to a specific tool. You could start by defining your APIs on a whiteboard, in a word document, or any other tool. The main challenge is to define a resource model that makes sense to your API users.

For these situations you can use NPEs. You first define a resource model using NPEs, expose these as OData resource, and then model microflows to map you NPE resources to the actual source data. This will be more effort than using PEs, as you’ll need to handle the OData query options in the microflow. Smart use of custom Java actions can simplify this though, as the following example illustrates.

In this example we want to expose a single REST resource that combines data from the Customer entity and the Address entity, so it joins data from both entities, and also combines the Firstname and Lastname attributes into a single attribute Fullname. We also only want to provide the home address information, and exclude other address types.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675895988776_image.png) expose-single-resource-domain-model


We start by adding the CustomerHomeAddress NPE as a resource to the OData service.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675895872508_image.png) customer-home-address-npe


In mendix you can use an OQL Dataset to define the query to fetch this information from your entities.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675896086992_image.png) oql-database


Next we need to define a microflow that will fetch the correct data when a user does a GET on the CustomerHomeAddress resource:

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675895840011_image.png) get-microflow


The microflow uses a Java action to translate the OData query to an OQL expression using the OQL Dataset as the base query. This ensures filtering, sorting, paging will work as expected.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675895940853_image.png) translate-to-odl-expression


You can now do a REST GET call, defining which attributes you need, how you want it sorted, and how many objects you need.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1675895760563_image.png) get-call


The result is that you have decoupled your REST resource from your domain model Persistent Entities: you can change your entities and use the OQL query to ensure the exposed data remains backwards compatible.

The Java action used above add the OData query to the original OQL query is as follows:

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676284412127_image.png) view-log-line-details


With some formatting it’s better readable. The original OQL query is used as a subquery (inline view) for the OData query. As is illustrated here, all the expressions will be pushed down into the database, and benefit from the performance of the database optimizer.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676301766285_image.png) subquery

# No actions in path

You may wonder how you are supposed to provide logic in a REST api, if REST best practices specify you should only use the default http operations insert, update, retrieve or delete?

If you think of the input parameters of your logic as the REST resource, it’s easy to see that executing logic can simply be modeled by handling the logic in the insert microflow. This way you execute the logic when a client POSTs a new resource to your API. 

This example shows a CustomerEmailRequest entity, that a client can create using an API. The API will execute the logic to send the customer an email when this resource is created. 

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676275381470_image.png) create-customer-email-request-entity


Next we define the logic as the insert (POST) action.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676023504737_image.png) define-insert-action


There’s one other [best practice](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#asynchronous-operations) you want to consider when doing this: for operations that take a while to complete, you should consider running them asynchronously. This means that you tell the client the request has been received, that it’s not yet completely processed but that you’ll do it in the background. In Mendix you can use a Task Queue to schedule the logic to be run in the background. In the meantime the client can GET the resource to see what the status is.

The last activity of the insert microflow calls the SendCustomerEmail microflow using the TaskQueue:


![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676023643853_image.png) task-queue


Example of calling the send customer email logic. The POST response provides the location where the client can retrieve the status of the request.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676023692823_image.png) call-send-email-logic


When we GET the resource from the location provided, we can see that the status has value *Sent*, indicating that the logic has completed.

![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676023726548_image.png) get-resource-sent

# Versioning

Reliable versioning is key for APIs. Client applications should trust your API not to make any incompatible changes that will cause the client app to malfunction. This means that any change you make to an API should always be backwards compatible. Breaking changes can only be introduced in new APIs, offering your clients a period of time where they can migrate from the old version to the new version. This means you need to the ability to run 2 versions of the same API side by side.

With OData, similar to REST APIs in Mendix, you have full control over how you define your versions. By default Mendix suggests to use semantic versioning, adding the major version number to the url. If you need to introduce breaking changes, simply duplicate the entire OData service, change the major version and you are good to go.


![](https://paper-attachments.dropboxusercontent.com/s_A7C365B156C73FE0E73A206FAF1622E045C694DFEDFC4EA12B065B4B4F20286D_1676056489860_image.png) versioning


This approach ensures client applications can migrate at their own pace, as you’ll both have the old version and the new major version of the API in your application. Once all client applications have migrated you can remove the old API from your application.
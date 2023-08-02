---
title: "Build OData APIs with REST Best Practices"
url: /refguide/build-odata-apis/
weight: 75
tags: ["connectors", "data hub", "studio pro", "build", "API", "REST", "connector guide", "odata", "published odata services", "integration"]
---

## 1 Introduction

Companies with a large portfolio of custom built REST APIs use a set of [best practices](#best-practices) to ensure these APIs provide the required functionality in a predictable way. You have full control of all these aspects when creating a [published REST service](/refguide/published-rest-service/) in Mendix Studio Pro. 

If you plan to create a large number of APIs, using [published OData services](/refguide/published-odata-services/) to implement REST can save you a lot of time while ensuring consistency across your APIs. 

This document shows how [published OData services](/refguide/published-odata-services/) in Studio Pro help you build APIs that implement REST best practices.

### 1.1 Common REST API Best Practices {#best-practices}

REST API best practices usually include some of the following:

* **Use JSON** – JSON is easy to read, and libraries to process it are available in most languages. 
* **Use nouns, not verbs (resource-first, no actions in path)** – APIs should be resource-based instead of action-based to improve decoupling: all interactions assume resources and a limited set of standardized operations.
* **A resource has an ID** – Every resource has a unique path where it can be retrieved or updated. See the [Retrieving Data](#retrieving-data) section in this document.
* **A resource has a uniform interface (for example, the correct use of an HTTP operation)** – Use the standardized set of HTTP operations to work with your resources: GET (retrieve), POST (create/insert), PUT (replace), PATCH (update), DELETE. See the [Creating and Changing Data with Full CRUD](#creating-changing-data) section in this document.
* **Name collections with plurals** – An endpoint that can return more than one resource should indicate that by have the resource name in plural.
* **Use of standard HTTP status codes** – HTTP has standardized status codes for most situations, good REST APIs use these. Status codes work the same way across applications, application specific errors should be handled in the payload. See the [Automatic Standard HTTP Error Codes](#http-codes) section in this document.
* **Use filtering, sorting, and pagination** – To ensure best possible performance, and to limit resource usage, these features enable clients to flexibly define exactly what data they need. They also help to decouple the client and the service, as not all clients have the same needs. Enabling the client to define what is needed, helps to serve more types of clients. See the [Filtering, Sorting, Paginating, and Selecting Data](#filter-sort-page-select-data) section in this document.
* **Versioning and compatibility** – Versioning usually should be date-based, or semantic versioning should include the major version part of the URL. Clients should assume changes to an endpoint are always backwards compatible. In case of breaking changes, a new endpoint including a new major version number should be used. See the [Versioning](#versioning) section in this document.
* **Secure APIs** – Apps should not be able to access more information than they are allowed to see.

### 1.2 Starting Point: Example Domain Model {#starting-domain-model}

This document use the following domain model as an example: 

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/example-domain-model.png" >}}

REST APIs, and especially OData APIs, often provide access to data within the app. Mendix OData APIs are excellent for providing APIs for entities, but can also be used for accessing other types of data. See the [API-First](#api-first) section to learn about decoupling APIs from the domain model. 

## 2 Creating OData APIs {#creating-odata-apis}

Create OData APIs by right-clicking on an entity > **Expose as OData resource**, or right-clicking on a module > **Add other** > **Published OData service**. 

### 2.1 Published OData Service Document

In the [published OData service](/refguide/published-odata-services/) document, you also select which attributes and associations are available in the API:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/select-attributes-associations.png" >}} 

For every published resource, you can define what functionality is available: 

* **Create** = POST
* **Read** = GET
* **Update** = PATCH
* **Delete** = DELETE 

You can also define other capabilities, like if you can count results (using a `$count` query), skip results (using a `$skip` query), or limit the number of results returned (using a `$top` query): 

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/edit-published-resource.png" >}} 

### 2.2 OpenAPI 3 Contract and Test Page

When you start your app, you see the Swagger UI documentation and test page:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/swagger-doc.png" >}} 

The test page lists all accepted parameters, and example payloads, for regular responses and for error payloads:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/test-page.png" >}} 

It also provides a JSON schema of all the payload types:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/json-schema.png" >}} 

And it provides an OpenAPI 3.0.1 contract:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/openapi-contract.png" >}} 

## 3 Retrieving Data {#retrieving-data}

OData REST APIs work as you would expect a REST API to function. Here are some examples using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) plugin in Visual Studio Code.

### 3.1 Fetching All Resources

The following call is an example of fetching all customers:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/fetch-all-customers.png" >}} 

### 3.1 Getting a Resource by Identifier

Fetch a single **Customer** resource by providing the identifier between brackets:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(1)
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/fetch-single-customer.png" >}} 

OData also supports using multi-field IDs by providing the required attributes as a key value list between the brackets.

### 3.2 Filtering, Sorting, Paginating, and Selecting Data {#filter-sort-page-select-data}

OData standardizes how to specify which resources to consume. This provides the client with the tools to ensure that the response payload is as small as possible. It also ensures that the Mendix Runtime service implementation will be able to push down the filtering, sorting, and pagination into the database. This uses the database query optimizer and available indexes to optimize performance.

The following URL parameters are available:

* **$filter** – This defines [filter expressions](https://docs.mendix.com/refguide/odata-query-options/#4-filtering) for the resource attributes (equals, not equal, smaller, larger, contains, etc.).
* **$top**, **$skip** – This indicates how many resource to skip and how many to return, helping to implement client-side pagination.
* **$orderby** – This defines how to sort the resources in the response payload.
* **$select** – This defines which attributes of the resource to return.

The following example illustrates how you can combine filtering, sorting, pagination and attribute selection:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers?$filter=contains(Lastname, 'a')&$orderby=CompanyName&$select=FirstName,Lastname,CompanyName&$top=2&skip=1
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/filter-sort-page-attribute.png" >}} 

Alternatively, you can specify the query in the payload of a POST call, which can be useful if you have a long complex query.

## 4 Creating and Changing Data with Full CRUD {#creating-changing-data}

Published OData services in Studio Pro allow you to easily create and change data.

### 4.1 Inserting New Data

If you selected **Insertable** in the API definition, clients can create new resources using POST. Successfully created data will automatically result in a 201 status code, and a **Location** header provides the URL of the resulting resource, as is best practice for REST APIs."

Here is an example of a POST call:

```
POST http://localhost:8080/odata/CustomerApi/v1/Customers

{
    "Firstname": "Jimmy",
    "Lastname": "Smooth",
    "Title": "Engineer",
    "CompanyName": "CustKo"
}
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/insert-new-data.png" >}} 

The following GET request uses the returned location header to query the new resource at its endpoint:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/query-resource-endpoint.png" >}} 

#### 4.1.1 Using a Prefer Header

Instead of doing the two API calls illustrated above, POST followed by GET, you also have the option to use the **Prefer** header. If you give this the value of `return=representation`, the resulting resource will be returned automatically, resulting in one fewer API call.

See this example of a POST call with a `Prefer` header:

```
POST http://localhost:8080/odata/CustomerApi/v1/Customers
Prefer: return=representation

{
    "FirstName": "Alexis",
    "Lastname": "Sweeper",
    "Title": "Ir.",
    "CompanyName": "GadgetsAndBeers"
}
```

The following is the response:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/prefer-header.png" >}} 

#### 4.1.2 Creating Resources with Associations

If you want to create a new resource associated to another resource, you can refer to the identifier of the resource in your payload. See the following POST request:

```
POST http://localhost:8080/odata/CustomerApi/v1/Addresses
Prefer: return=representation

{ 
    "Country: "UK",
    "HouseNumber":"11",
    "PhoneNumber":"123123",
    "Zipcode":"13423",
    "Street":"Mainstreet",
    "Customer":{"@id":"Customers(11)"}
    "City":"Bristol",
    "AddressType":"Home"
}
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/create-resources-associations.png" >}} 

### 4.2 Modifying Existing Data

Updating of resources is provided using the PATCH operation. Mendix Runtime will automatically handle updating the entity; there is no need to implement a microflow to handle this. 

Example of a PATCH request:

```
PATCH http://localhost:8080/odata/CustomerApi/v1/Customers(5)

{
    "FirstName": "Jimmy2"
}
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/modify-existing-data-1.png" >}} 

And a subsequent GET request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/modify-existing-data-2.png" >}} 

[Validation rules](#validation-rules) defined on the entity will be respected automatically. You can use a [validation microflow](#validation-microflows) if you want to enrich the default behavior, including adding additional validations. 

#### 4.2.1 Validation Rules {#validation-rules}

When changing data with POST, PUT or DELETE, validation rules specified on the underlying entities are applied automatically. A failed validation rule will result in a HTTP status code 422, the error message will be included in the response payload:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/validation-rules.png" >}} 

The validation rules on customer define that both `Firstname` and `Lastname` are mandatory. When you try to create a new customer without a last name, this will fail with status code 422, and the error message as defined in the validation rule will be returned in the response. See the following POST request:

```
POST http://localhost:8080/odata/CustomerApi/v1/Customers

{
    "FirstName": "Jimmy",
    "Title": "Engineer",
    "CompanyName": "CustKo"
}
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/error-422.png" >}} 

#### 4.2.2 Validation Microflows {#validation-microflows}

You can also generate and reuse the generated validation microflows. The following example shows a validation microflow for the customer entity. 

1. On a save button, right-click and select **Generate validation microflow**. The resulting validation microflow looks like this:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/validation-microflow.png" >}} 

     The use of *show validation message* activity to set the errors to be shown in the UI in this generated validation microflow. This microflow will be called in the insert microflow displayed below.

2. Specify that you want to use a microflow to handle insert of a new Customer resource via the OData API. This microflow will be called whenever a client does a POST operation on the endpoint of the resource:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/specify-use-microflow.png" >}} 

3. In the insert microflow, call the generated validation microflow and commit the object if the validation succeeds:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/insert-microflow.png" >}} 

     If validation fails, the *show validation message* texts are provided automatically in the response payload. See the following POST request:

     ```
     POST http://localhost:8080/odata/CustomerApi/v1/Customers

     {
         "FirstName": "Boris",
         "Lastname": "Smith",
         "Title": "",
         "CompanyName": ""
     }
     ```

     The response is as follows:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/validation-response-payload.png" >}} 

### 4.3 Deleting Data

Deleting is provided using the DELETE operation. See the following DELETE request:

```
DELETE http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response returns `HTTP/1.1 204 No Content`.

### 4.4 Automatic Standard HTTP Error Codes {#http-codes}

OData APIs automatically return the correct HTTP status code, like a 404, if a specified resource cannot be found. See the following DELETE request:

```
DELETE http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/standard-error-codes.png" >}} 

## 5 Performance

OData enables you to exactly specify which attributes you need, so that other attributes are not included in the response. This reduces the size of the response message. 

To reduce the number of round-trips, associated objects can be included in the response using the `$expand` expression. See the following GET request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(1)?$expand=Addresses,Notes
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/expand-expression.png" >}} 

You can use select and expand in combination with filters, sorting, top and skip as discussed in [Filtering, Sorting, Paginating, and Selecting Data](#filter-sort-page-select-data). See the following GET request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers
            ?$select=CustomerId,Lastname
            &$expand=Addresses($select=AddressId,City),Notes($select=NoteId,Note)
            &$filter=contains(FirstName,'a')
            &$orderby=CustomerId+desc
            &$top=1
```

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/sort-top-skip.png" >}} 

For long queries, place the query in the request body. You can do this by using POST, and adding `$query` to the endpoint. See the following POST request:

```
POST http://localhost/8080/odata/CustomerApi/v1/Customers/$query
Content-Type: text/plain
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/long-queries.png" >}} 

This result is very similar to using GraphQL, where you can query a graph of objects, and limit the attributes returned to only those that you need. 

## 6 API-First: Decoupling APIs from the Domain Model {#api-first}

You may not want to directly publish APIs for your persistable entities because of the following:

* You want to decouple your API resources from your entities
* You want to define your services API-first
* Your data is not stored in the database of your app, but in a third-party data source

There are two ways to take an API-first approach, as explained in the [API-First vs. API Design-First: A Comprehensive Guide](https://blog.stoplight.io/api-first-vs.-api-design-first-a-comprehensive-guide):

1. You should always start by defining a contract, like an OpenAPI document.
2. You should set the use case and developer experience of using your APIs first.

The first is not something supported by Mendix OData services, unless the contract is also based on OData. The second, however, is not tied to a specific tool. You could start by defining your APIs on a whiteboard, in a text document, or any other tool. The main challenge is to define a resource model that makes sense to your API users.

### 6.1 Defining a Resource Model

Define a resource model using [non-persistable entities](/refguide/persistability/), expose these as OData resources, and then model microflows to map these resources to the actual source data. This will be more effort than using persistable entities, as you’ll need to handle the OData query options in the microflow. Use of custom Java actions can simplify this, as explained in [Combining Data from Two Entities](#two-entities).

### 6.2 Combining Data from Two Entities {#two-entities}

Refer to the [example domain model](#starting-domain-model) for this section.

In this example, you can expose a single REST resource that combines data from the **Customer** entity and the **Address** entity. It will join data from both entities, and also combine the `Firstname` and `Lastname` attributes into a single attribute, `Fullname`. We want to provide the home address information, and exclude other address types:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/expose-single-resource-domain-model.png" >}} 

1. Add the `CustomerHomeAddress` entity as a resource to the OData service:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/customer-home-address-npe.png" >}} 

2. You can use an OQL Dataset to define the query to fetch this information from your entities:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/oql-database.png" >}} 

3. Define a microflow that will fetch the correct data when a user does a GET on the CustomerHomeAddress resource:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/get-microflow.png" >}} 

     The microflow uses a Java action to translate the OData query to an OQL expression using the OQL Dataset as the base query. This ensures that filtering, sorting, and paging work as expected.

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/translate-to-odl-expression.png" >}} 

4. You can now do a REST GET call, defining which attributes you need, how you want it sorted, and how many objects you need:

     ```
     GET http://localhost:8080/odata/CustomerApi/v1/CustomerHomeAddresses?$select=CustomerId,FullName,Street,City&$orderby=City+desc&$top=2
     ```

     The response is as follows:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/get-call.png" >}} 

5. The result is that you have decoupled your REST resource from your domain model Persistent Entities. You can change your entities and use the OQL query to ensure the exposed data remains backwards compatible.

     The Java action used above adds the OData query to the original OQL query as follows:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/view-log-line-details.png" >}} 

     With some formatting, it can be more readable. The original OQL query is used as a subquery (inline view) for the OData query. All the expressions will be pushed down into the database, and benefit from the performance of the database optimizer:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/subquery.png" >}} 

### 6.3 Defining Logic in an Insert Microflow

How you are supposed to provide logic in a REST API, if REST best practices specify that you should only use the default HTTP operations (insert, update, retrieve or delete)?

Consider the input parameters of your logic as the REST resource. In this way, executing logic can be modeled by handling the logic in the insert microflow. This way you execute the logic when a client POSTs a new resource to your API. 

This example shows a `CustomerEmailRequest` entity, that a client can create using an API. 

1. The API will execute the logic to send the customer an email when this resource is created:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/create-customer-email-request-entity.png" >}} 

2. Define the logic as the insert (POST) action:

     {{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/define-insert-action.png" >}} 

### 6.4 Running Operations Asynchronously 

Consider running operations that take awhile to complete [asynchronously](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#asynchronous-operations). This means that you tell the client that the request has been received, that it is not yet completely processed, but that you’ll do it in the background. In Mendix Studio Pro, you can use a [Task Queue](/refguide/task-queue/) to schedule the logic to be run in the background. In the meantime, the client can GET the resource to see what the status is.

The last activity of the insert microflow calls the SendCustomerEmail microflow using the task queue:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/task-queue.png" >}} 

The POST response provides the location where the client can retrieve the status of the request. See the following POST request:

```
POST http://localhost:8080/odata/CustomerApi/v1/CustomerEmailRequests

{
    "Subject":"Test email",
    "EmailText":"Hello",
    "CustomerId":1
}
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/call-send-email-logic.png" >}} 

When you GET the resource from the location provided, the status has the value *Sent*, indicating that the logic has completed. See the following GET request:

```
GET http://localhost:8080/odata/CustomerApi/v1/CustomerEmailRequests(12)
```

The response is as follows:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/get-resource-sent.png" >}} 

## 7 Versioning {#versioning}

Reliable versioning is important for APIs. Client applications should trust your API not to make any incompatible changes that will cause the client app to malfunction. Any change you make to an API should always be backwards-compatible, though backwards-incompatible changes can be made in a new major version. Breaking changes can only be introduced in a new major version, offering your clients a period of time where they can migrate from the old version to the new version. This means you need to the ability to run 2 versions of the same API side by side.

With OData, similar to REST APIs in Mendix, you have full control over how you define your versions. By default, we suggest using [semantic versioning](https://semver.org/), adding the major version number to the URL. 

If you need to introduce breaking changes, duplicate the entire OData service and change the major version:

{{< figure src="/attachments/refguide/modeling/integration/build-odata-apis/versioning.png" >}} 

This approach ensures client applications can migrate at their own pace, because you will have the old version and the new major version of the API in your application. Once all client applications have migrated, you can remove the old API from your application.

## 8 Read More

* [OData Services](/refguide/integration/odata-services/)
* [Wrap Services, APIs, or Databases with OData](/refguide/wrap-services-odata/)
* [Integration](/refguide/integration/)

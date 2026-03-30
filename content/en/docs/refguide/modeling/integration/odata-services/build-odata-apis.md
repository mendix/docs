---
title: "Build OData APIs with REST Best Practices"
url: /refguide/build-odata-apis/
weight: 75
---

## Introduction

Companies with a large portfolio of custom-built REST APIs use a set of best practices to ensure these APIs function properly and in a predictable way. Mendix Studio Pro gives you full control of all these aspects when creating a [published REST service](/refguide/published-rest-service/).

If you plan to create a large number of APIs, implementing REST using published OData services can save you a lot of time and ensure consistency across your APIs. 

This document shows how published OData services in Studio Pro help you build APIs that implement REST best practices.

### Common REST API Best Practices {#best-practices}

REST API best practices usually include some of the following:

* **Use JSON** – JSON is easy to read, and libraries to process it are available in most languages. 
* **Use nouns, not verbs (resource-first, no actions in path)** – APIs should be resource-based instead of action-based to improve decoupling; all interactions assume resources and a limited set of standardized operations.
* **A resource has an ID** – Every resource has a unique path where it can be retrieved or updated. For more details, see the [Retrieving Data](#retrieving-data) section in this document.
* **A resource has a uniform interface (for example, the correct use of an HTTP operation)** – Use the standardized set of HTTP operations to work with your resources: `GET` (retrieve), `POST` (create/insert), `PUT` (replace), `PATCH` (update), `DELETE`. For more details, see the [Creating and Changing Data with Full CRUD](#creating-changing-data) section in this document.
* **Name collections with plurals** – An endpoint that can return more than one resource should indicate that by naming the resource in plural.
* **Use of standard HTTP status codes** – HTTP has standardized status codes for most situations. Status codes work the same way across applications. Application-specific errors should be handled in the payload. For more details, see the [Automatic Standard HTTP Error Codes](#http-codes) section in this document.
* **Use filtering, sorting, and pagination** – These features enable clients to flexibly define what data they need to ensure the best possible performance and limit resource usage. They also help to decouple the client and the service, as not all clients have the same needs.  For more details, see the [Filtering, Sorting, Paginating, and Selecting Data](#filter-sort-page-select-data) section in this document.
* **Versioning and compatibility** – Versioning is usually date-based. Semantic versioning should include the major version part of the URL. Clients should assume changes to an endpoint are always backwards compatible. In case of breaking changes, a new endpoint including a new major version number should be used. For more details, see the [Versioning](#versioning) section in this document.
* **Secure APIs** – Apps should not be able to access more information than they are allowed to see.

### Starting Point: Example Domain Model {#starting-domain-model}

This document uses the following domain model as an example: 

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/example-domain-model.png" width="500" class="no-border" alt="Example domain model" >}}

REST APIs, and especially OData APIs, often provide access to data within the app. Mendix OData APIs are excellent for providing APIs for entities, but can also be used for accessing other types of data. For more information, see the [API-First](#api-first) section to learn about decoupling APIs from the domain model. 

## Creating OData APIs {#creating-odata-apis}

Create OData APIs by right-clicking on an entity > **Publish in OData service** or right clicking on a module > **Add other** > **Published OData service**. 

### Published OData Service Document

In the [published OData service](/refguide/published-odata-services/) document, select which attributes and associations are available in the API:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/select-attributes-associations.png" class="no-border" alt="Published OData service general settings" >}} 

For every published entity, you can define what functionality is available: 

* **Create** = `POST`
* **Read** = `GET`
* **Update** = `PATCH`
* **Delete** = `DELETE` 

You can also define other capabilities, such as if you can count results (using a `$count` query), skip results (using a `$skip` query), or limit the number of results returned (using a `$top` query).

### OpenAPI 3 Contract and Test Page {#contract-and-test}

When you start your app, you see the Swagger UI documentation and test page:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/swagger-doc.png" width="400" class="no-border" alt="Customer API swagger page" >}} 

The test page lists all accepted parameters and example payloads for regular responses and error payloads:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/test-page.png" width="500" class="no-border" alt="" >}} 

It provides a JSON schema of all the payload types:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/json-schema.png" width="400" class="no-border" alt="" >}} 

And it provides an OpenAPI 3.0.1 contract:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/openapi-contract.png" class="no-border" alt="" >}} 

## Retrieving Data {#retrieving-data}

OData REST APIs work as you would expect a REST API to function. Below are some examples using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) plugin in Visual Studio Code.

### Fetching All Resources

The following call is an example of fetching all customers:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Wed, 08 Feb 2023 15:33:34 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 293


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers",
  "value": [
    {
      "CustomerId": 1,
      "FirstName": "John",
      "Lastname": "Smith",
      "Title": "Engineer",
      "CompanyName": "CustKo"
    },
    {
      "CustomerId": 2,
      "FirstName": "Pete",
      "Lastname": "Arnhold",
      "Title": "Sales Manager",
      "CompanyName": "Devco"
    }
  ]
}
```

### Getting a Resource by Identifier

Fetch a single **Customer** resource by adding the identifier between brackets:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(1)
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Wed, 08 Feb 2023 16:12:13 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 186


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers/$entity",
  "CustomerId": 1,
  "FirstName": "John",
  "Lastname": "Smith",
  "Title": "Engineer",
  "CompanyName": "CustKo"
}

```

OData also supports using multi-field IDs by providing the required attributes as a key value list between the brackets.

### Filtering, Sorting, Paginating, and Selecting Data {#filter-sort-page-select-data}

OData standardizes how to specify which resources to consume. This provides the client with the tools to ensure the response payload is as small as possible and that the Mendix Runtime service implementation will be able to push down the filtering, sorting, and pagination into the database. This uses the database query optimizer and available indexes to optimize performance.

The following URL parameters are available:

* **$filter** – This defines filter expressions for the resource attributes (equals, not equal, smaller, larger, contains, etc.).
* **$top**, **$skip** – This indicates how many resources to skip and how many to return to help implement client-side pagination.
* **$orderby** – This defines how to sort the resources in the response payload.
* **$select** – This defines which attributes of the resource to return.
* **$expand** – This defines which associated resources to include in the response payload. 
* **$count** – This defines whether or not to return the count of the query result instead of the resources themselves. 

For more information about these query options, see [Supported OData Operations](/refguide/supported-odata-operations/#query-options).

The following example illustrates how you can combine filtering, sorting, pagination, and attribute selection:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers?$filter=contains(Lastname, 'a')&$orderby=CompanyName&$select=FirstName,Lastname,CompanyName&$top=2&skip=1
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Thu, 09 Feb 2023 08:16:33 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 273


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers(FirstName,Lastname,CompanyName)",
  "value": [
    {
      "FirstName": " Irène",
      "Lastname": "Aisha",
      "CompanyName": "Foster Hale"
    },
    {
      "FirstName": "Angela",
      "Lastname": "Naja ",
      "CompanyName": "Mimosa Advertising"
    }
  ]
}

```

Alternatively, you can specify the query in the payload of a `POST` call, which is useful if you have a long complex query.

## Creating and Changing Data with Full CRUD {#creating-changing-data}

Published OData services in Studio Pro allow you to easily create and change data.

### Inserting New Data

If you select **Insertable** in the API definition, the client can create new resources using `POST`. Successfully created data will automatically result in a 201 status code, and a **Location** header provides the URL of the resulting resource.

Here is an example of a `POST` call:

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

```json
HTTP/1.1 201 OK
Date: Wed, 08 Feb 2023 16:13:32 GMT
Connection: close
Cache-Control: no-store
Location: Customers(5)
```

The following `GET` request uses the returned location header to query the new resource at its endpoint:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Wed, 08 Feb 2023 16:14:26 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 188


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers/$entity",
  "CustomerId": 5,
  "FirstName": "Jimmy",
  "Lastname": "Smooth",
  "Title": "Engineer",
  "CompanyName": "CustKo"
}

```

#### Using a Prefer Header

Instead of doing the two API calls illustrated above, you also have the option to use the **Prefer** header. If you give this the value of `return=representation`, the resulting resource will be returned automatically, resulting in one fewer API call.

See this example of a `POST` call with a `Prefer` header:

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

```json
HTTP/1.1 200 OK
Date: Mon, 13 Mar 2023 13:38:20 GMT
Connection: close
Cache-Control: no-store
Content-Type: application/json;charset=utf-8
Location: Customers(15)


{
  "@context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers/$entity",
  "CustomerId": 15,
  "FirstName": "Alexis",
  "Lastname": "Sweeper",
  "Title": "Ir.",
  "CompanyName": "GadgetsAndBeers"
}

```

#### Creating Resources with Associations

If you want to create a new resource associated with another resource, you can refer to the identifier of the resource in your payload. See the following `POST` request:

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

```json
HTTP/1.1 200 OK
Date: Wed, 15 Mar 2023 13:39:18 GMT
Connection: close
Cache-Control: no-store
Content-Type: application/json;charset=utf-8
Location: Addresses(8)
Content-Length: 235


{
  "@context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Addresses/$entity",
  "AddressId": 8,
  "Street": "Mainstreet",
  "HouseNumber": "11",
  "Zipcode": "13423",
  "City": "Bristol",
  "Country": "Uk",
  "PhoneNumber": " 123123",
  "AddressType": "Home"
}

```

### Modifying Existing Data

The `PATCH` operation allows you to update resources. Mendix Runtime automatically handles updating the entity; there is no need to implement a microflow to handle this. 

Example of a `PATCH` request:

```
PATCH http://localhost:8080/odata/CustomerApi/v1/Customers(5)

{
    "FirstName": "Jimmy2"
}
```

The response is as follows:

```json
HTTP/1.1 204 No Content
Date: Wed, 08 Feb 2023 16:16:20 GMT
Connection: close
```

And a subsequent `GET` request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Wed, 08 Feb 2023 16:16:46 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 189


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers/$entity",
  "CustomerId": 5,
  "FirstName": "Jimmy2",
  "Lastname": "Smooth",
  "Title": "Engineer",
  "CompanyName": "CustKo"
}

```

[Validation rules](#validation-rules) defined on the entity will be respected automatically. You can use a [validation microflow](#validation-microflows) if you want to enrich the default behavior, including adding additional validations. 

#### Validation Rules {#validation-rules}

When changing data with `POST`, `PUT`, or `DELETE`, validation rules specified on the underlying entities are applied automatically. A failed validation rule will result in a HTTP status code 422. The error message will be included in the response payload:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/validation-rules.png" width="400" class="no-border" alt="Sample domain model with its entity property settings" >}} 

The validation rules on **Customer** show that both `Firstname` and `Lastname` are mandatory. When you try to create a new customer without a last name, this will fail with status code 422, and the error message as defined in the validation rule will be returned in the response. See the following `POST` request:

```
POST http://localhost:8080/odata/CustomerApi/v1/Customers

{
    "FirstName": "Jimmy",
    "Title": "Engineer",
    "CompanyName": "CustKo"
}
```

The response is as follows:

```json
HTTP/1.1 422 Unprocessable Entity
Date: Wed, 08 Feb 2023 16:22:09 GMT
Connection: close
Cache-Control: no-store
Content-Language: en-US
Content-Type: application/json;charset=utf-8
Content-Length: 141


{
  "error": {
    "code": "422",
    "message": "Validation failed",
    "details": [
      {
        "code": "VE001",
        "target": "Lastname",
        "message": "Please provide a lastname"
      }
    ]
  }
}

```

#### Validation Microflows {#validation-microflows}

You can generate and reuse generated validation microflows. The following example shows a validation microflow for the customer entity. 

1. On a save button, right-click and select **Generate validation microflow**. The resulting validation microflow looks like this:

     {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/validation-microflow.png" class="no-border" alt="Sample validation microflow" >}} 

2. Use the **Show validation message** activity to set the errors to be shown in the UI in this generated validation microflow. This microflow will be called in the insert microflow displayed below.

3. Specify that you want to use a microflow to insert a new **Customer** resource via the OData API. This microflow will be called when you do a `POST` operation on the endpoint of the resource:

     {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/specify-use-microflow.png" class="no-border" alt="Published service general settings dialog" >}} 

4. In the insert microflow, call the generated validation microflow and commit the object if the validation succeeds:

     {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/insert-microflow.png" class="no-border" alt="Sample microflow" >}} 

     If validation fails, the show validation message texts are provided automatically in the response payload. See the following `POST` request:

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

     ```json
    HTTP/1.1 422 Unprocessable Entity
    Date: Fri, 10 Feb 2023 18:41:17 GMT
    Connection: close
    Cache-Control: no-store
    Content-Language: en-US
    Content-Type: application/json;charset=utf-8
    Content-Length: 201

    
    {
    "error": {
        "code": "422",
        "message": "Validation failed",
        "details": [
        {
            "code": "VE001",
            "target": "CompanyName",
            "message": "Company name is empty"
        },
        {
            "code": "VE001",
            "target": "Title",
            "message": "Title is empty"
        }
        ]
    }
    }
     ```


### Deleting Data

Deleting is provided using the `DELETE` operation. See the following `DELETE` request:

```
DELETE http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response returns `HTTP/1.1 204 No Content`.

### Automatic Standard HTTP Error Codes {#http-codes}

OData APIs automatically return the correct HTTP status code if a specified resource cannot be found. See the following `DELETE` request:

```
DELETE http://localhost:8080/odata/CustomerApi/v1/Customers(5)
```

The response is as follows:

```json
HTTP/1.1 404 Not Found
Date: Wed, 08 Feb 2023 16:19:30 GMT
Connection: close
Content-Language: en-US
Content-Type: application/json;charset=utf-8
Content-Length: 67

{
  "error": {
    "code": "404",
    "message": "Entity with key '5' not found."
  }
}


```

## Performance

OData enables you to specify which attributes you need so other attributes are not included in the response. This reduces the size of the response message. 

To reduce the number of round-trips, you can include associated objects in the response using the `$expand` expression. See the following `GET` request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers(1)?$expand=Addresses,Notes
```

The response is as follows:

```json

HTTP/1.1 200 OK
Date: Wed, 08 Feb 2023 16:27:06 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0
Content-Length: 442

{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers/$entity",
  "CustomerId": 1,
  "FirstName": "John",
  "Lastname": "Smith",
  "Title": "Engineer",
  "CompanyName": "CustKo",
  "Addresses": [
    {
      "AddressId": 1,
      "Street": "Middlesquare",
      "HouseNumber": "4",
      "Zipcode": "12334",
      "City": "Middletown",
      "Country": "United Kingdom",
      "PhoneNumber": "1231233",
      "AddressType": "Office"
    }
  ],
  "Notes": [
    {
      "NoteId": 1,
      "Summary": "Tried calling",
      "Note": "Not available"
    }
  ]
}

```

You can use `select` and `expand` in combination with `filter`, `orderby`, `top`, and `skip`. For more information, see the [Filtering, Sorting, Paginating, and Selecting Data](#filter-sort-page-select-data) section below. 

See the following `GET` request:

```
GET http://localhost:8080/odata/CustomerApi/v1/Customers
            ?$select=CustomerId,Lastname
            &$expand=Addresses($select=AddressId,City),Notes($select=NoteId,Note)
            &$filter=contains(FirstName,'a')
            &$orderby=CustomerId+desc
            &$top=1
```

```json

HTTP/1.1 200 OK
Date: Sat, 11 Feb 2023 08:49:50 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0

{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers(CustomerId,Lastname)",
  "value": [
    {
      "CustomerId": 3,
      "Lastname": "Naja ",
      "Addresses": [
        {
          "AddressId": 3,
          "City": "New York"
        },
        {
          "AddressId": 4,
          "City": "Gouda"
        }
      ],
      "Notes": []
    }
  ]
}

```

For long queries, place the query in the request body. You can do this by using `POST` and adding `$query` to the endpoint. See the following `POST` request:

```
POST http://localhost/8080/odata/CustomerApi/v1/Customers/$query
Content-Type: text/plain
```

The response is as follows:

```json

HTTP/1.1 200 OK
Date: Sat, 11 Feb 2023 08:52:46 GMT
Connection: close
Cache-Control: no-store
Content-Type: application/json;charset=utf-8
OData-Version: 4.0


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#Customers(CustomerId,Lastname)",
  "value": [
    {
      "CustomerId": 3,
      "Lastname": "Naja ",
      "Addresses": [
        {
          "AddressId": 3,
          "City": "New York"
        },
        {
          "AddressId": 4,
          "City": "Gouda"
        }
      ],
      "Notes": []
    }
  ]
}


```

This result is very similar to using GraphQL, where you can query a graph of objects and limit the attributes returned to only those that you need. 

## API-First: Decoupling APIs from the Domain Model {#api-first}

You may not want to directly publish APIs for your persistable entities because of the following:

* You want to decouple your API resources from your entities
* You want to define your services API-first
* Your data is not stored in the database of your app, but in a third-party data source

There are two ways to take an API-first approach, as explained in [API-First vs. API Design-First: A Comprehensive Guide](https://blog.stoplight.io/api-first-vs.-api-design-first-a-comprehensive-guide):

* Define a contract, like an OpenAPI document. This is not supported by Mendix OData services unless the contract is also based on OData.
* Set the use case and developer experience of using your APIs first. This is not tied to a specific tool. You can start by defining your APIs on a whiteboard, in a text document, or any other tool. The main challenge is to define a resource model that makes sense to your API users.

### Defining a Resource Model

Define a resource model using [non-persistable entities](/refguide/persistability/), publish them in an OData service, then model microflows to map these resources to the actual source data. This will require you to handle the OData query options in the microflow. Using custom Java actions can simplify this process, as explained in the [Combining Data from Two Entities](#two-entities) section below.

### Combining Data from Two Entities {#two-entities}

Refer to the [example domain model](#starting-domain-model) for this section.

In this example, you can publish a single REST resource that combines data from the **Customer** entity and the **Address** entity. It will join data from both entities and combine the **Firstname** and **Lastname** attributes into a single attribute, **Fullname**. Provide the home address information and exclude other address types:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/expose-single-resource-domain-model.png" width="300" class="no-border" >}} 

1. Add the **CustomerHomeAddress** entity as a resource to the OData service:

2. Use an OQL dataset to define the query to fetch this information from your entities:

    {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/oql-database.png" class="no-border" alt="Domain model with four entities"  >}} 

3. Define a microflow that will fetch the correct data when a user does a `GET` on the **CustomerHomeAddress** resource:

    {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/get-microflow.png" width="400" class="no-border" alt="OQL source code for entity" >}} 

    The microflow uses a Java action to translate the OData query to an OQL expression using the OQL Dataset as the base query. This ensures that filtering, sorting, and paging work as expected. 
 
    {{% alert color="info" %}}This action can be built using custom Java actions. This action will be updated in the second half of 2024.{{% /alert %}}

    {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/translate-to-odl-expression.png" class="no-border" alt="Published resource properties" >}} 

4. Do a REST `GET` call and define which attributes you need, how you want it sorted, and how many objects you need:

    ```
    GET http://localhost:8080/odata/CustomerApi/v1/CustomerHomeAddresses?$select=CustomerId,FullName,Street,City&$orderby=City+desc&$top=2
    ```

    The response is as follows:

    ```json

    HTTP/1.1 200 OK
    Date: Wed, 08 Feb 2023 22:35:13 GMT
    Connection: close
    Cache-Control: no-store
    Content-Type: application/json;charset=utf-8
    OData-Version: 4.0
    Content-Length: 295

    {
    "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#CustomerHomeAddresses(CustomerId,FullName,Street,City)",
    "value": [
        {
        "CustomerId": 8,
        "FullName": "Jimmy2 Johnson",
        "Street": null,
        "City": null
        },
        {
        "CustomerId": 4,
        "FullName": "Irène Aisha",
        "Street": "Conifer Drive",
        "City": "Seattle"
        }
    ]
    }

    ```

    {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/get-call.png" class="no-border" alt="Microflow with query OQL dataset settings" >}} 

5. You have decoupled your REST resource from your domain model persistable entities. You can change your entities and use the OQL query to ensure the published data remains backwards compatible.

    The Java action used above adds the OData query to the original OQL query as follows:

    {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/view-log-line-details.png" class="no-border" alt="OQL query log details"  >}} 

    With some formatting, it can be more readable. The original OQL query is used as a subquery (inline view) for the OData query. All the expressions will be pushed down into the database and benefit from the performance of the database optimizer:

    ```sql
    
    select  bq.CustomerId   as CustomerId,
            bq.FullName     as FullName,
            bq.Street       as Street,
            bq.City         as City
    from (
            select  cust.CustomerId              as CustomerId,
                    cust.FirstName + ' ' + cust.Lastname  as FullName,
                    addr.Street                  as Street,
                    addr.City                    as City
            from    CustomerService.Customer as cust
            left join cust/CustomerService.Address_Customer/CustomerService.Address as addr
            where   addr.AddressType = 'Home'
        ) as bq
    order by City desc
    limit 2

    ```

### Defining Logic in an Insert Microflow

How do you provide logic in a REST API if REST best practices specify that you should only use the default CRUD (create, read, update, delete) operations?

Consider the input parameters of your logic as the REST resource. In this way, executing logic can be modeled by handling the logic in the insert microflow. This allows you to execute the logic when a client `POSTs` a new resource to your API. 

This example shows a **CustomerEmailRequest** entity that a client can create using an API. 

1. The API will execute the logic to send the customer an email when this resource is created:

     {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/create-customer-email-request-entity.png" class="no-border" alt="Domain model with five entities" >}} 

2. Define the logic as the insert (`POST`) action:

     {{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/define-insert-action.png" class="no-border" alt="Published resource general settings" >}} 

### Running Operations Asynchronously 

Consider running operations that take longer to complete [asynchronously](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#asynchronous-operations). This means you tell the client that the request has been received, that it is not yet completely processed, but that it will be done in the background. In Studio Pro, you can use a [task queue](/refguide/task-queue/) to schedule the logic to run in the background. In the meantime, the client can `GET` the resource to see what the status is.

The last activity of the insert microflow calls the SendCustomerEmail microflow using the task queue:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/task-queue.png" class="no-border" alt="Two microflows" >}} 

The `POST` response provides the location where the client can retrieve request status. See the following `POST` request:

```
POST http://localhost:8080/odata/CustomerApi/v1/CustomerEmailRequests

{
    "Subject":"Test email",
    "EmailText":"Hello",
    "CustomerId":1
}
```

The response is as follows:

```json
POST http://localhost:8080/odata/CustomerApi/v1/CustomerEmailRequests

{
  "Subject": "Test email",
  "EmailText": "Hello",
  "CustomerId": 1
}

HTTP/1.1 201 Created
Date: Fri, 10 Feb 2023 10:07:37 GMT
Connection: close
Cache-Control: no-store
Location: CustomerEmailRequests(12)
```

When you `GET` the resource from the location provided, the status has the value **Sent**, indicating that the logic has completed. See the following `GET` request:

```
GET http://localhost:8080/odata/CustomerApi/v1/CustomerEmailRequests(12)
```

The response is as follows:

```json
HTTP/1.1 200 OK
Date: Fri, 10 Feb 2023 10:08:23 GMT
Connection: close
Content-Type: application/json;charset=utf-8
OData-Version: 4.0


{
  "@odata.context": "http://localhost:8080/odata/CustomerApi/v1/$metadata#CustomerEmailRequests/$entity",
  "CustomerEmailRequestId": 12,
  "Subject": "Test email",
  "EmailText": "Hello",
  "CustomerId": 1,
  "Status": "Sent"
}

```

## Versioning {#versioning}

Reliable versioning is important for APIs. Client applications should trust your API to not make any incompatible changes that will cause the app to malfunction. Any change you make to an API should always be backwards-compatible, though backwards-incompatible changes can be made in a new major version. Breaking changes can only be introduced in a new major version, offering the end-user a period of time where they can migrate from the old version to the new version. This means you need to have the ability to run two versions of the same API side by side.

With OData, similar to REST APIs in Studio Pro, you have full control over how you define your versions. By default, it is suggested you use [semantic versioning](https://semver.org/), adding the major version number to the URL. 

If you need to introduce breaking changes, duplicate the entire OData service and change the major version:

{{< figure src="/attachments/refguide/modeling/integration/odata-services/build-odata-apis/versioning.png" class="no-border" alt="Entity general settings" >}} 

This approach ensures customer applications can migrate at their own pace because you will have the old version and the new major version of the API in your application. Once all customer applications have migrated, you can remove the old API from your application.

## Read More

* [OData Services](/refguide/integration/odata-services/)
* [Integration](/refguide/integration/)

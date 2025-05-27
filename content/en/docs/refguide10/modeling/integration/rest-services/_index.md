---
title: "REST Services"
url: /refguide10/integration/rest-services/
weight: 30
description: "Introduces REST services."
---

## Introduction

Representational state transfer (REST) is an approach to consuming or exposing resources. It has gained popularity because of its simplicity, as no extensive schemas or contracts are needed to transfer data between endpoints. It uses the following:

* HTTP URLs to locate resources
* HTTP headers to authenticate and specify content types (such as XML or JSON)
* HTTP methods to identify operations on resources, such as `GET` (retrieve data) or `POST` (send data)

Lack of contracts and schemas give you an easy start to using REST. However, many REST endpoints return complex data.

The [JSON Structure](/refguide10/json-structures/) document helps to give structure to JSON data. From an example JSON snippet, a lightweight schema is extracted that is used in [Mapping Documents](/refguide10/mapping-documents/). 
The [Import Mapping](/refguide10/import-mappings/) document converts JSON (or XML) to Mendix objects, and the [Export Mapping](/refguide10/export-mappings/) document serializes Mendix objects to JSON (or XML).

## Content Types {#content-types}

Content types are included in [custom HTTP headers](/refguide10/call-rest-action/#custom-http-headers) to specify the output of the call, including media type or data format. For more information on content types, see [Content Negotiation in REST](https://restfulapi.net/content-negotiation/).

## JSON

JavaScript object notation (JSON) is a lightweight representation of data. 

```js
{
    "name": "John Smith",
    "age": 23,
    "address": 
    {
        "street": "Dopeylane 14",
        "city": "Worchestire"
    }
}
```

Above, the object `person` is described with the corresponding values for the attributes `name`, `age`, and the referred object `address`.

REST calls that output JSON need to declare the [content type](#content-types) as `application/JSON`. 

## Read More

To publish REST services, see:

* [Published REST Services](/refguide10/published-rest-services/), an overview in the Studio Pro guide
* [Publish a REST Service](/howto10/integration/publish-rest-service/) for step-by-step instructions
* [HttpRequest and HttpResponse System Entities](/refguide10/http-request-and-response-entities/), an overview of these system entities in your domain model

To consume REST services, see:

* [Consumed REST Service](/refguide10/consumed-rest-service/), an overview on how to Consume a REST Service
* [Call REST Service](/refguide10/call-rest-action/), a description of the microflow action
* [Use Call REST Service Action in a Microflow](/refguide10/integration/use-call-rest-action-in-microflow/), instructions on how to use the Call REST Service action in a microflow
* [HttpRequest and HttpResponse System Entities](/refguide10/http-request-and-response-entities/), an overview of these system entities in your domain model

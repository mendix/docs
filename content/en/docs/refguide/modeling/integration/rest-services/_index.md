---
title: "REST Services"
url: /refguide/integration/rest-services/
weight: 30
description: "Introduces REST services."
---

## Introduction

Representational state transfer (REST) is an approach to consuming or exposing resources. It has gained popularity because of its simplicity, as no extensive schemas or contracts are needed to transfer data between endpoints. It uses the following:

* HTTP URLs to locate resources
* HTTP headers to authenticate and specify content types (such as XML or JSON)
* HTTP methods to identify operations on resources, such as `GET` (retrieve data) or `POST` (send data)

Lack of contracts and schemas give you an easy start to using REST. However, many REST endpoints return complex data.

The [JSON Structure](/refguide/json-structures/) document helps to give structure to JSON data. From an example JSON snippet, a lightweight schema is extracted that is used in [Mapping Documents](/refguide/mapping-documents/). 
The [Import Mapping](/refguide/import-mappings/) document converts JSON (or XML) to Mendix objects, and the [Export Mapping](/refguide/export-mappings/) document serializes Mendix objects to JSON (or XML).

## Content Types {#content-types}

Content types are included in [custom HTTP headers](/refguide/call-rest-action/#custom-http-headers) to specify the output of the call, including media type or data format. For more information on content types, see [Content Negotiation in REST](https://restfulapi.net/content-negotiation/).

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

## Documents in This Category

To publish REST services, see:

* [Published REST Services](/refguide/published-rest-services/), an overview in the Studio Pro guide
* [Publish a REST Service](/howto/integration/publish-rest-service/) for step-by-step instructions
* [HttpRequest and HttpResponse System Entities](/refguide/http-request-and-response-entities/), an overview of these system entities in your domain model

To consume REST services, see:

* [Consumed REST Services (Beta)](/refguide/consumed-rest-services-beta/), an overview on how to Consume a REST Service
* [Call REST Service](/refguide/call-rest-action/), a description of the microflow action
* [Use Call REST Service Action in a Microflow](/refguide/integration/use-call-rest-action-in-microflow/), instructions on how to use the Call REST Service action in a microflow
* [HttpRequest and HttpResponse System Entities](/refguide/http-request-and-response-entities/), an overview of these system entities in your domain model

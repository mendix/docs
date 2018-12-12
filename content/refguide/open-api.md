---
title: "Open API 2.0 Documentation"
parent: "published-rest-technical-details"
menu_order: 30 
#description: " "
#tags: ["These", "are", "Example", "Tags"]
---

{{% alert type="info" %}}

The **published REST service** feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction 

Every [published REST service](published-rest-service) is automatically documented. The system generates a *swagger.json* file that conforms to the [OpenAPI 2.0 specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) (formerly known as the "swagger specification"). This file can be [saved from the modeler](published-rest-service#export-swagger-json) or downloaded from `/rest-doc/servicename/swagger.json`.

If you need to communicate with the service from another app, you can use the *swagger.json* file to generate an API in many different systems, including Microsoft Visual Studio, React, Angular, and Java. This makes it easy to communicate between your different apps.

Many of the popular API tools support OpenAPI 2.0, including [SoapUI](https://www.soapui.org/), [Postman](https://www.getpostman.com/), and [Swagger UI](https://swagger.io/swagger-ui/) (for a longer list of supported tools, see [swagger.io/commercial-tools](https://swagger.io/commercial-tools/)). This means that you can easily test your published service from any of these tools.

A technical description is presented below of which parts of the `swagger.json` file are generated.

## 2 Schema

The main schema object documents the service.

| Property | Generated Value |
| --- | --- |
| `swagger` | 2.0 |
| `info.title` | The [name of the service](published-rest-service#service-name). |
| `info.description` | The [public documentation of the service](published-rest-service#public-documentation). |
| `info.version` | 1.0.0 |
| `host` | The host on which the app is running. |
| `basePath` | */rest/servicename* |
| `schemes` | The schemes of the server on which the app is running (*http* and/or *https*). |
| `responses` | Contains the unauthorized response when security is enabled. |
| `securityDefinitions` | Contains the basic authentication when security is enabled. |
| `security` | Contains the basic authentication when security is enabled. |
| `tags` | Each resource generates a tag with the [name](published-rest-resource#name) and description ([public documentation](published-rest-resource#public-documentation)) of the resource. |
| `paths` | Each group of operations generates a path object. See below for more information. |

## 3 Paths

The service's operations are grouped by [operation path](published-rest-operation#operation-path). Each of these groups generates a `PathItem` with the operation path as the name. The `PathItem` has an `Operation` property for each operation in the group.

## 4 Operations

Each operation generates an `Operation` object:

| Property | Generated value |
| --- | --- |
| `tags` | The [name](published-rest-resource#name) of the resource. |
| `summary` | The [public documentation summary](published-rest-operation#summary) of the operation. |
| `description` | The [public documentation description](published-rest-operation#description) of the operation. |
| `parameters` | The path and query parameters. For the POST, PUT, PATCH, and OPTIONS methods, there is also a body parameter. |
| `responses` | The OK response. If security is enabled, this is also the unauthorized response. |
| `deprecated` | Set to true when the operation is marked as deprecated. |

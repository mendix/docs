---
title: "Open API 2.0 documentation"
parent: "Published REST service"
---

Every [Published REST service](published-rest-service) is automatically documented. The system generates a `swagger.json` file that conforms to the [OpenAPI 2.0 specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). This file can be [saved from the modeler](published-rest-service#export-swagger-json) or downloaded from `/rest-doc/servicename/swagger.json`.

What follows is a technical description of which parts of the `swagger.json` file are generated.

### Main schema object

The main schema object documents the service

| Property | Generated value |
| --- | --- |
| swagger | 2.0 |
| info.title | The [name of the service](published-rest-service#service-name) |
| info.description | The [public documentation of the service](published-rest-service#public-documentation) |
| info.version | 1.0.0 |
| host | The server on which the app is running |
| basePath | /rest/servicename |
| schemes | The schemes of the server on which the app is running (http and/or https) |
| responses | Contains the unautorized response when security is enabled |
| securityDefinitions | Contains basic authentication when security is enabled |
| securityRequirement | Contains basic authentication when security is enabled |
| tags | Each resource generates a tag with the [name](published-rest-resource#name) and description ([public documentation](published-rest-resource#public-documentation)) of the resource |
| paths | Each group of operations generates a Path object. See [below](#tags) for more information. |

### <a name="tags"></a>Tags

The service's operations are grouped by [operation path](published-rest-operation#operation-path). Each of these groups generates a PathItem with the operation path as the name. The PathItem has an Operation property for each operation in the group.

### Operations

Each operation generates an Operation object

| Property | Generated value |
| --- | --- |
| tags | The [name](published-rest-resource#name) of the resource |
| summary | The [public documentation summary](published-rest-operation#summary) of the operation |
| description | The [public documentation description](published-rest-operation#description) of the operation |
| parameters | The path and query parameters, and for methods POST, PUT and PATCH also a body parameter |
| responses | The OK response, and if security is enabled also the unauthorized response |

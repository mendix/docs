---
title: "Published REST service"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The **Published REST Service** feature was introduced in version 7.8.0. This feature is still in private beta, and it is subject to change before final release.

{{% /alert %}}

## 1 Introduction

Use a published REST service to expose your entities and microflows to other apps using the REST standard.

## 2 General

### <a name="service-name"></a>2.1 Service Name

The service name uniquely identifies the service in the app. It's part of the location of the service, so it cannot contain spaces or special characters.

### 2.2 Example Location

The example location shows the URL on which the service can be reached. This is an example : 

![](attachments/published-rest-service/example-location-url.png)

### 2.3 Allowed Roles

The allowed roles define which [module role](module-role) a user must have to be able to access the service.

### <a name="public-documentation"></a>2.4 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](open-api). You can use [GitHub-flavored markdown](gfm-syntax) for rich text.

### <a name="export-swagger-json"></a>2.5 Export swagger.json

Click **Export swagger.json** to save the service's [OpenAPI (Swagger) documentation](open-api) somewhere on your machine. This is a machine-readable file in the [OpenAPI 2.0 file format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). Most API tools support this format.

When the app is running, this file is available under `/rest-doc/servicename/swagger.json`.

## 3 Resources

A REST service exposes a number of [resources](published-rest-resource). On a resource you can define GET, PUT, POST, PATCH, and DELETE operations.

## 4 Operations

When you select a resource, you see the [operations](published-rest-operation) that are defined for that resource.

## 5 Related Content

For more information on which operation gets executed for a given request URL, see [Published REST routing](published-rest-routing).

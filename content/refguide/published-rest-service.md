---
title: "Published REST service"
parent: "published-rest-services"
---

Use a _Published REST Service_ to expose your entities and microflows to other apps using the REST standard.

## General

### <a name="service-name"></a>Service name

The service name uniquely identifies the service in the app. It's part of the location of the service, so it can't contain spaces or special characters.

### Example location

The example location shows the URL on which the service can be reached.

For example : 

![](attachments/published-rest-service/example-location-url.png)

### Allowed roles

The allowed roles define which [module role](module-role) a user must have to be able to access the service.

### <a name="public-documentation"></a>Public documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](open-api). You can use [GitHub Flavored Markdown](gfm-syntax) for rich text.

### <a name="export-swagger-json"></a>Export swagger.json

Click the _Export swagger.json_ button to save the service's [OpenAPI (Swagger) documentation](open-api) somewhere on your machine. This is a machine-readable file in the [OpenAPI 2.0 file format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). Most API tools support this format.

When the app is running, this file is available under `/rest-doc/servicename/swagger.json`.

## Resources

A REST service exposes a number of [resources](published-rest-resource). On a resource you can define GET, PUT, POST, PATCH and DELETE operations.

## Operations

When you select a resource, you see the [operations](published-rest-operation) that are defined for that resource.

## Related Topics

* See [Published REST routing](published-rest-routing) for more information on which operation gets executed for a given request URL

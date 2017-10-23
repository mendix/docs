---
title: "Published REST service"
parent: "integration"
---

Use a _Published REST Service_ to expose your entities and microflows to other apps using the REST standard.

## General

### Service name

The service name uniquely identifies the service in the app. It's part of the location of the service, so it can't contain spaces or special characters.

### Example location

The example location shows the URL on which the service can be reached.

### Allowed roles

The allowed roles define which [module role](module-role) a user must have to be able to access the service.

### Public documentation

The public documentation is used in service's OpenApi (Swagger) documentation page. You can use [GitHub Flavored Markdown](gfm-syntax) for rich text.

### Export swagger.json

Click the _Export swagger.json_ button to save the service's OpenApi (Swagger) documentation page somewhere on your machine.

## Resources

A REST service exposes a number of [resources](published-rest-resource). On a resource you can define GET, PUT, POST, PATH and DELETE operations.

## Operations

When you select a resource, you see the [operations](published-rest-operation) that are defined for that resource.

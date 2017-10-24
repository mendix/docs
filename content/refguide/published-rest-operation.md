---
title: "Published REST operation"
parent: "Published REST service"
---

A _Published REST Operation_ is part of a [Published REST Resource](published-rest-resource), and defines an endpoint that a client can call to get, put, post, patch or delete items from the resource.

## General

### Method

The _method_ specifies what type of operation is performed by the microflow.

* GET: The operation retrieves the entry or entries at the specified location
* PUT: The operation replaces the entry or entries at the specified location, or creates them if they don't exist
* POST: The operation creates an entry in the collection at the specified location
* PATCH: The operations updates (part of) the entry at the specified location
* DELETE: The operation deletes the entry or entries at the specified location

### <a name="operation-path"></a>Operation path

The location where the operation can be reached starts with the location of the resource.

The _operation path_ specifies the remainder of the location of the operation. You can leave it empty to use the location of the resource.

You can use [path parameters](published-rest-path-parameters) to capture part of the location as a microflow parameter. Specify path parameters in the operation path between `{` and `}`. The microflow (see below) should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

The method and operation path determine [which operation gets executed for a given request URL](published-rest-routing).

### Example location

The _example location_ gives an example of a URL on which the operation can be reached. It shows path parameters and query parameter values as placeholders between `{` and `}`.

### Microflow

Specify the microflow that implements the operation. It should be a microflow that:

* Returns a *System.HttpResponse* object that is not _empty_
* Takes all [path parameters](published-rest-path-parameters) specified in the _operation path_ as parameters
* Allows all roles that the service allows
* The microflow may have a *System.HttpRequest* parameter, which you can use to inspect the incoming request.
* The microflow should not have any other *Object* or *List of Object* parameters.

Any remaining microflow parameters will be treated as optional [query parameters](published-rest-query-parameters).

If the microflow throws an unhandled exception, the response is 500: Internal server error.

### Allowed roles

The _allowed roles_ define which [module role](module-role) a user must have to be able to access the service.

## Public documentation

The _public documentation_ is used in the service's [OpenApi (Swagger) documentation page](published-rest-interactive-documentation).

### <a name="sumary"></a>Summary

The _summary_ provides a short description of what the operation does.

### <a name="description"></a>Description

the _description_ provides a complete overview of what the operation does. You can use [GitHub Flavored Markdown](gfm-syntax) for rich text.

---
title: "Published REST Operation"
parent: "published-rest-services"
---

{{% alert type="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

A published REST operation is part of a [published REST resource](published-rest-resource) and defines an endpoint that a client can call to get, put, post, patch, or delete items from the resource.

## 2 General

### 2.1 Method

The method specifies what type of operation is performed by the microflow:

* `GET` – the operation retrieves the entry or entries at the specified location
* `PUT` – the operation replaces the entry or entries at the specified location, or it creates them if they do not exist
* `POST` – the operation creates an entry in the collection at the specified location
* `PATCH` – the operations updates (part of) the entry at the specified location
* `DELETE` – the operation deletes the entry or entries at the specified location

### <a name="operation-path"></a>2.2 Operation Path

The location where the operation can be reached starts with the location of the resource.

The operation path specifies the remainder of the location of the operation. You can leave it empty to use the location of the resource.

You can use [path parameters](published-rest-path-parameters) to capture part of the location as a microflow parameter. Specify path parameters in the operation path between `{` and `}`. The microflow (see below) should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

The method and operation path determine [which operation gets executed for a given request URL](published-rest-routing).

### <a name="example-location"></a>2.3 Example Location

The example location gives an example of a URL on which the operation can be reached. It shows path parameters and query parameter values as placeholders between `{` and `}`.

### 2.4 Microflow

An operation has different parameters:
 * [Path parameters](published-rest-path-parameters), which are part of the path of the url
 * Query parameters, which are at the end of the url in the form of `?name1=value1&name2=value2`. When a microflow parameter is not in the path and is not object, then it's considered a query parameter.
 * A body parameter (optional), which are in the body of the request to the operation. *GET*, *HEAD* and *DELETE* operations do not have a body parameter

A microflow for an operation takes all these operation parameters as input.

A *body* parameter should be a file document (or inherit from a file document).

Path and query parameters can't have *List* or *Object* type.

An operation microflow can also take an [HttpRequest](http-request-and-response-entities#http-request) parameter. You can add this parameter if you would like to inspect the requested URL and headers.

The result of the microflow is the result of the operation. You have several options here:

 * Return an [HttpResponse](http-request-and-response-entities#http-response) - In the *HttpResponse*, you can set the status code, reason phrase and content (as a string). You can fill the content for instance with the result of a mapping, or with a string from an other source. You can also add headers to the response. One important header to set is *Content-Type*. Don't return an *empty* HttpResponse; that will always result in an error.
 * Return a primitive - When your microflow returns a string, an integer, a boolean, etc. then the response to the operation will be that value. In order to still be able to set a status code, reason phrase and headers, you should add an [HttpResponse](http-request-and-response-entities#http-response) object parameter and set the attributes of that object. If you return a non-empty value from the microflow, the *Content* attribute of the *HttpResponse* object is ignored. If you return an empty value from the microflow, then the *Content* of the *HttpResponse* is taken as the result.
 * Return a file document - When you want to return data that is a file, such as a pdf or an image, then you can have your microflow return a file document. In this case you should also have an *HttpResponse* parameter and set the *Content-Type* header.

If the microflow throws an unhandled exception, the response is **500: Internal server error**.

If security is enabled, then then microflow needs to have at least one role configured to be accessible.

### 2.5 Allowed Roles

The allowed roles define which [module role](module-role) a user must have to be able to access the service.

## 3 Public Documentation

The public documentation is used in the service's [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation).

### <a name="summary"></a>3.1 Summary

The summary provides a short description of what the operation does.

### <a name="description"></a>3.2 Description

The description provides a complete overview of what the operation does. You can use [GitHub-flavored markdown](gfm-syntax) for rich text.

## 4 Parameters

{{% alert type="info" %}}

This feature was introduced in version 7.12.0.

{{% /alert %}}

The **Parameters** table shows the name, data type, and type of the parameter.

Operation parameters can be either query parameters or path parameters. The type of a parameter is detemined by where in the URL it is placed. If the parameter is part of the operations location, it will be of the path type. If it is a part of the operation's query string, it will be of the query type.

The parameter data type is determined by the microflow of the operation. New parameters that are not yet part of the microflow will have "(Not set)" as their data type.

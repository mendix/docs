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
* `HEAD` – the operation retrieves information about the entry or entries at the specified location; this is identical to `GET`, except for the fact that it doesn't return a message body
* `OPTIONS` – the operation returns information about the available communication options

### <a name="operation-path"></a>2.2 Operation Path

The location where the operation can be reached starts with the location of the resource.

The operation path specifies the remainder of the location of the operation. You can leave it empty to use the location of the resource.

You can use [path parameters](published-rest-path-parameters) to capture part of the location as a microflow parameter. Specify path parameters in the operation path between `{` and `}`. The microflow (see below) should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

The method and operation path determine [which operation gets executed for a given request URL](published-rest-routing).

### <a name="example-location"></a>2.3 Example Location

The example location gives an example of a URL on which the operation can be reached. It shows path parameters and query parameter values as placeholders between `{` and `}`.

### 2.4 Microflow

{{% alert type="info" %}}

Support for **File Documents** in these microflows was introduced in version 7.13.0.

{{% /alert %}}

An operation has different parameters:

 * [Path parameters](published-rest-path-parameters), which are part of the path of the URL
 * Query parameters, which are at the end of the URL in the form of `?name1=value1&name2=value2` (when a microflow parameter is not in the path and is not object, then it's considered a query parameter)
 * A body parameter (optional), which are in the body of the request to the operation (the `GET`, `HEAD`, and `DELETE` operations do not have a body parameter)

A microflow for an operation takes all these operation parameters as input.

A body parameter should be a file document (or inherit from a file document).

Path and query parameters can't have list or object types.

An operation microflow can also take an [HttpRequest](http-request-and-response-entities#http-request) parameter. You can add this parameter if you would like to inspect the requested URL and headers.

The result of the microflow is the result of the operation. You have several options here, which are described below.

The first option is to **return an [HttpResponse](http-request-and-response-entities#http-response)**. In the *HttpResponse*, you can set the status code, reason phrase, and content (as a string). You can fill the content with, for example, the result of a mapping or a string from another source. You can also add headers to the response. One important header to set is *Content-Type*. Do not return an *empty* HttpResponse, because that will always result in an error.

The second option is to **return a primitive**. When your microflow returns a string, integer, Boolean, etc., then the response to the operation will be that value. In order to still be able to set a status code, reason phrase, and headers, you should add an [HttpResponse](http-request-and-response-entities#http-response) object parameter and set the attributes of that object. If you return a non-empty value from the microflow, the `Content` attribute of the `HttpResponse` object is ignored. If you return an empty value from the microflow, then the `Content` of the `HttpResponse` is taken as the result.

The final option is to **return a file document**. When you want to return data that is a file (such as a PDF or image), then you can have your microflow return a file document. In this case, you should also have an `HttpResponse` parameter and set the `Content-Type` header.

If the microflow throws an unhandled exception, the response is **500: Internal server error**.

If security is enabled, then then microflow needs to have at least one role configured to be accessible.

### 2.5 Deprecated

If you check this box, the operation as marked as deprecated in the service's [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation). This tells clients not to use it anymore.

### 2.6 Allowed Roles

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

An operation parameter can be either a query parameter, a path parameter or a body parameter. Path and the query parameters are detemined by their placement in the URL. If the parameter is part of the operation's location, it is a path parameter. If it is a part of the operation's query string, it is a query parameter. A body parameter comes from the body of the request.

The parameter data type is determined by the microflow of the operation. New parameters that are not yet part of the microflow will have "(Not set)" as their data type.

## 5 Example

**How to publish REST natively with Mendix**

{{% youtube HzrFkv0U4n8 %}}

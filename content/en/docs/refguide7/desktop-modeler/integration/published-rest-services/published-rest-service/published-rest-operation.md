---
title: "Published REST Operation"
url: /refguide7/published-rest-operation/
weight: 10
description: "Options to  configure a published REST operation."
tags: ["Published REST", "operation", "method", "path", "example location", "mapping", "operation parameters", "how to"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > select resource > add operation for resource > help (integration)
---

{{% alert color="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

A published REST operation is part of a [published REST resource](/refguide7/published-rest-resource/) and defines an endpoint that a client can call to get, put, post, patch, or delete items from the resource.

This document describes the options when configuring a REST operation through the *add operation for resource* pop-up dialog.

## 2 General

### 2.1 Method

The method specifies what type of operation is performed by the microflow:

* 'GET' – the operation retrieves the entry or entries at the specified location
* 'PUT' – the operation replaces the entry or entries at the specified location, or it creates them if they do not exist
* 'POST' – the operation creates an entry in the collection at the specified location
* 'PATCH' – the operations updates (part of) the entry at the specified location
* 'DELETE' – the operation deletes the entry or entries at the specified location
* 'HEAD' - the operation retrieves information about the entry or entries at the specified location; this is identical to _GET_, except for the fact that it doesn't return a message body
* 'OPTIONS' - the operation returns information about the available communication options

### 2.2 Operation Path{#operation-path}

The location where the operation can be reached starts with the location of the resource.

The operation path specifies the remainder of the location of the operation. You can leave it empty to use the location of the resource.

You can use [path parameters](/refguide7/published-rest-path-parameters/) to capture part of the location as a microflow parameter or as a parameter to the import mapping. Specify path parameters in the operation path between '{' and '}'. Whatever is in the URL at the place of the path parameter will be passed to the microflow or the import mapping.

The method and operation path determine [which operation gets executed for a given request URL](/refguide7/published-rest-routing/).

### 2.3 Example Location{#example-location}

The example location gives an example of a URL on which the operation can be reached. It shows path parameters and query parameter values as placeholders between '{' and '}'.

### 2.4 Microflow

{{% alert color="info" %}}

Support for **File Documents** in these microflows was introduced in version 7.13.0.

{{% /alert %}}

An operation has different parameters:

 * [Path parameters](/refguide7/published-rest-path-parameters/), which are part of the path of the URL
 * [Query parameters](/refguide7/published-rest-query-parameters/), which are at the end of the URL in the form of `?name1=value1&name2=value2` (when a microflow parameter is not in the path and is not object, then it's considered a query parameter)
 * Header parameters, which come from the HTTP headers of the request
 * A body parameter (optional), which is in the body of the request to the operation (the 'GET', 'HEAD', and 'DELETE' operations do not have a body parameter). Only body parameters parameters can have a *List* or *Object* type.

A microflow for an operation takes these operation parameters as input.

A microflow parameter that has the *list* or *object* type indicates a body parameter. You can specify an import mapping to convert the incoming JSON or XML. If the parameter is a file document or inherits from a file document, an import mapping is not needed.

An operation microflow may also take an [HttpRequest](/refguide7/http-request-and-response-entities/#http-request) parameter. You can add this parameter if you would like to inspect the requested URL and headers.

To set the status code, reason phrase, and headers, you should add an [HttpResponse](/refguide7/http-request-and-response-entities/#http-response) object parameter and set the attributes of that object, or return an *HttpResponse*.

The result of the microflow is the result of the operation. You have several options here, which are described below.

The first option is to **return a *list* or an *object***. You will need to specify an export mapping to convert it to XML or JSON.

The second option is to **return a primitive**. When your microflow returns a string, integer, Boolean, etc., then the response to the operation will be that value. If you return a non-empty value from the microflow, the *Content* attribute of the *HttpResponse* object is ignored. If you return an empty value from the microflow, then the *Content* of the *HttpResponse* is taken as the result.

The third option is to **return a file document**. When you want to return data that is a file (such as a PDF or image), then you can have your microflow return a file document.

The final option is to **return an [HttpResponse](/refguide7/http-request-and-response-entities/#http-response)**. In the *HttpResponse*, you can set the status code, reason phrase, and content (as a string). You can fill the content with, for example, the result of a mapping or a string from another source. You can also add headers to the response. One important header to set is *Content-Type*. Do not return an *empty* *HttpResponse*, because that will always result in an error.

If the microflow throws an unhandled exception, the response is **500: Internal server error**.

If security is enabled, then then microflow needs to have at least one role configured to be accessible.

### 2.5 Deprecated

If you check this box, the operation is marked as deprecated in the service's [OpenApi (Swagger) documentation page](/refguide7/published-rest-services/#interactive-documentation). This tells clients not to use it anymore.

### 2.6 Parameters

{{% alert color="info" %}}

This feature was introduced in version 7.12.0.

Ability to edit the parameters was introduced in version 7.17.0

{{% /alert %}}

In this list, you can add, update or delete the [parameters of the operation](/refguide7/published-rest-operation-parameter/).

<a name="import-mapping"></a>
### 2.6.1 Import Mapping

{{% alert color="info" %}}

This feature was introduced in version 7.14.0. Using an import mapping that takes a parameter was introduced in version 7.17.0

{{% /alert %}}

For a body parameter, you can select an [import mapping](/refguide7/import-mappings/) that converts the body of the request to an object. All object and list parameters besides file documents must have an import mapping selected. To select an import mapping, double-click the parameter or click **Edit** in the grid after you select the parameter. When selecting the import mapping, you can also choose the commit behavior of the mapping. You can choose to either commit, commit without events, or not commit imported objects.

You can select an import mapping that takes no parameter, or an import mapping that takes a primitive parameter (string, integer, etcetera). If you select an import mapping with a primitive parameter, you need to have exactly one [path parameter](/refguide7/published-rest-path-parameters/) with the same type. That path parameter will be passed to the import mapping.

You can indicate what should happen **if no object was found** when the import mapping has checked the box **decide this at the place where the mapping gets used**.

If you select an import mapping that supports both XML and JSON (for instance, a mapping that is based on a message definition), then the operation will be able to handle both XML and JSON requests.

Valid requests need to contain a *Content-Type* header. See [Table 1: Recognized media types](#table1) below for a list of media types that are understood by the import mapping. If an unsupported content type is used, the operation will result in a "400 Bad Request" response.

The import mapping is also used to generate object schemas for operation responses in [OpenAPI (Swagger) documentation page](/refguide7/published-rest-services/#interactive-documentation) based on [JSON Schema](/refguide7/published-rest-service-json-schema/)

### 2.7 Response

{{% alert color="info" %}}

Support for **Export mapping and models in OpenAPI (Swagger)** was added in 7.14.0.

{{% /alert %}}

This shows information about the response of the operation. You can see the type of the microflow result as well as export mapping applied to it (if any).

#### 2.7.1 Type

This shows the result type of the microflow.

#### 2.7.2 Export Mapping

When the microflow returns an object or a list of objects, you need to specify how this result is mapped to JSON or XML. Select an export mapping that takes the result of the microflow as input.

If you select an export mapping that supports both XML and JSON (for instance, a mapping that is based on a message definition), then the output depends on whether the microflow has a parameter of type *System.HttpResponse* and adds a *Content-Type* header to it. These are possible scenarios:

* When the microflow sets the *Content-Type* header with a media type that is XML (see [Table 1: Recognized media types](#table1)), then the operation returns XML
* When the microflow sets the *Content-Type* header to something else, then the operation returns JSON
* When the microflow does not set the *Content-Type* header, then the output is determined by inspecting the *Accept* header in the request: the first media type that is understood to be XML or JSON (see see [Table 1: Recognized media types](#table1)) determines the operation result, and the *Content-Type* is *application-xml* (when it's XML) or *application-json* (when it's JSON)
* When there is no *Accept* header or the *Accept* header does not contain a recognizable media type, then the operation returns JSON and the *Content-Type* is *application/json*

| Media Type                   | Recogized As |
| ---                          | --- |
| *application/xml*            | XML |
| *text/xml*                   | XML |
| anything ending with *+xml*  | XML |
| *application/json*           | JSON |
| anything ending with *+json* | JSON |

<a name="table1"></a>**Table 1: Recognized media types**

The export mapping is also used to generate object schemas for operation responses in the [OpenAPI (Swagger) documentation page](/refguide7/published-rest-services/#interactive-documentation) based on the [JSON schema](/refguide7/published-rest-service-json-schema/).

## 3 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](/refguide7/published-rest-services/#interactive-documentation).

### 3.1 Summary{#summary}

The summary provides a short description of what the operation does.

### 3.2 Description{#description}

The description provides a complete overview of what the operation does. You can use [GitHub-flavored markdown](/refguide7/gfm-syntax/) for rich text.

## 4 Example

**How to publish REST natively with Mendix**

{{% youtube HzrFkv0U4n8 %}}

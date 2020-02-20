---
title: "Published REST Operation"
parent: "published-rest-service"
menu_order: 10
description: "Options to  configure a published REST operation."
tags: ["Published REST", "operation", "method", "path", "example location", "mapping", "operation parameters", "how to"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > select resource > add operation for resource > help (integration)
---

## 1 Introduction

A published REST operation is part of a [published REST resource](published-rest-resource) and defines an endpoint that a client can call to get, put, post, patch, or delete items from the resource.

This document describes the options when configuring a REST operation for your resource when you click **Add** or **Edit** in the **Resource** pane to display the operations for the resource in the **Operation** pane.

## 2 General

### 2.1 Method

The **Method** specifies the type of operation that is performed by the microflow:

* **GET** –  retrieves the entry or entries at the specified location
* **PUT** – replaces the entry or entries at the specified location, or it creates them if they do not exist

*  **POST** –  creates an entry in the collection at the specified location
* **PATCH** –  updates (part of) the entry at the specified location
* **DELETE** –  deletes the entry or entries at the specified location
* **HEAD** - retrieves information about the entry or entries at the specified location; this is identical to **GET**, except that it doesn't return a message body
* **OPTIONS** - the operation returns information about the available communication options

### <a name="operation-path"></a>2.2 Operation Path

The **Operation path** shows the location from where the operation can be invoked starting with the location of the resource and with the URL shown in  **Example location**. The **Operation path** specifies the remainder of the location URL of the operation. If left empty, then the location of the resource is used.

 [Path parameters](published-rest-path-parameters) can be used to capture part of the location as a microflow parameter or as a parameter to the import mapping. Specify the path parameters in the operation path between `{` and `}`. Whatever is in the URL at the place of the path parameter will be passed to the microflow or the import mapping.

The **Method** and **Operation path** determine which operation gets executed for a given request URL. For more detail see [Published REST routing](published-rest-routing).

### <a name="example-location"></a>2.3 Example Location

The URL in the **Example Location** shows the path parameters and query parameter values as placeholders between `{` and `}`.

[//]: #	"on screen there ae no {}"

### 2.4 Microflow

Click **Select** for the  **Microflow** to select or create a microflow for the operation and click **Show** to edit it.  An operation has the following parameters:

 * [**Query parameters**](published-rest-query-parameters), that are at the end of the URL in the form of `?name1=value1&name2=value2` (when a microflow parameter is not in the path and is not an object, then it is considered to be a query parameter).

 * [**Path parameters**](published-rest-path-parameters), that are part of the path of the URL.

 * A **body** parameter (optional), which is placed in the body of the request to the operation.

{{% alert type="info" %}} The '**GET**', '**HEAD**', and '**DELETE**' operations do not have a body parameter.

{{% /alert %}}

 * **Header** parameters,  from the HTTP headers of the request.

 * A **form** parameter (optional), which is a part of the body of a multipart form request.

A microflow for an operation takes these operation parameters as input.

A microflow parameter that has the **List** or **Object** type indicates a body parameter. You can specify an import mapping to convert the incoming JSON or XML. 

[//]: #	"convention for parmeters - bold or ..."

A parameter of the `FileDocument` type (or that inherits from a `FileDocument`) can also be used for the form parameters, and an import mapping is not needed.

An operation microflow may also take a [`HttpRequest`](http-request-and-response-entities#http-request) parameter. Add this parameter if you want to inspect the requested URL and headers.

To set the `status code`, `reason phrase`, and `headers`, add a [`HttpResponse`](http-request-and-response-entities#http-response) object parameter and set the attributes of that object, or return a **HttpResponse**.

The microflow determines the result of the operation with any of the following outcomes:

1. **Return a list or an object** - specify an export mapping to convert it to XML or JSON.

2.  **Return a primitive** -  when the microflow returns a value, for example, a string, integer, Boolean, then the response to the operation will be that value. If a non-empty value is returned from the microflow, the **Content** attribute of the **HttpResponse** object is ignored. If an empty value is returned  then the **Content** of the **HttpResponse** is taken as the result.

3.  **Return a file document** - the microflow returns data that is a file (such as a .*PDF* or image).

4. **Return a HttpResponse** - in which the status code, reason phrase, and content (as a string) can be set. The content can be filled with, for example, the result of a mapping or a string from another source. Headers can also be added to the response. One important header to set is `Content-Type`. Do not return an `empty` `HttpResponse`, because that will always result in an error.

If the microflow returns an unhandled exception, the response is **500: Internal server error**.

If security is enabled, then then microflow needs to have at least one role configured to be accessible.

### 2.5 Deprecated

Check this box to mark the operation as deprecated in the service's [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation). This informs clients not to use it anymore.

### 2.6 Parameters

In this list, you can **Add**, **Edit** or **Delete** the [parameters of the operation](published-rest-operation-parameter).

### 2.6.1 Import Mapping {#import-mapping}

For a body parameter, you can select an [import mapping](import-mappings) that converts the body of the request to an object. 

{{% alert type="info" %}}

All object and list parameters, except for file documents, must have an import mapping selected. 

{{% /alert %}}

To select an import mapping, right-click the parameter or click **Edit** in the **Resource Editor** window when a parameter is selected. When selecting the import mapping, it is also possible to select the commit behavior of the mapping: **commit**, **commit without events**, or **not commit imported objects**.

{{% alert type="info" %}}

An import mapping can also be specified that takes no parameter, or takes a primitive parameter (for example, string, integer). If you select an import mapping with a primitive parameter, you must have exactly one [path parameter](published-rest-path-parameters) with the same type which will be passed to the import mapping.

{{% /alert %}}

You can indicate what should happen **If no object was found** when the import mapping has checked the box **Decide this at the place where the mapping gets used**.
[//]: #	"to be verified how this is presented on screen."

If you select an import mapping that supports both XML and JSON (for example, a mapping that is based on a message definition), then the operation will be able to handle both XML and JSON requests.

{{% alert type="info" %}}
Valid requests must  contain a `Content-Type` header. See [Table 1: Recognized media types](#table1) below for a list of media types that are understood by the import mapping. If an unsupported content type is used, the operation will result in a "400 Bad Request" response.

{{% /alert %}}

The import mapping is also used to generate object schemas for operation responses in [OpenAPI (Swagger) documentation page](published-rest-services#interactive-documentation) based on [JSON Schema](published-rest-service-json-schema).

### 2.7 Response

In this pane specify the information for the response of the operation: the **Type** of the microflow result and  **Export mapping** applied to it (if any).

#### 2.7.1 Type

The **Type** field displays the result type of the microflow.

#### 2.7.2 Export Mapping

When the microflow returns an object or a list of objects, you need to specify how the result is mapped to JSON or XML. Select an export mapping that takes the result of the microflow as input.

If you **Select** an export mapping that supports both XML and JSON (for example, a mapping that is based on a message definition), then the output depends on whether the microflow has a parameter of type `System.HttpResponse` and adds a `Content-Type` header to it. These are possible scenarios:

* When the microflow sets the `Content-Type` header with a media type that is XML (see [Table 1: Recognized media types](#table1)), then the operation returns XML
* When the microflow sets the `Content-Type` header to something else, then the operation returns JSON
* When the microflow does not set the `Content-Type` header, then the output is determined by inspecting the `Accept` header in the request. The first media type that is understood to be XML or JSON (see [Table 1: Recognized media types](#table1)) determines the operation result, and the `Content-Type` is `application-xml` (for XML format) or `application-json` (for JSON format)
* When there is no `Accept` header or the `Accept` header does not contain a recognizable media type, then the operation returns JSON and the `Content-Type` is `application/json`

| Media Type                   | Recogized As |
| ---                          | --- |
| `application/xml`            | XML |
| `text/xml`                   | XML |
| anything ending with `+xml`  | XML |
| `application/json`           | JSON |
| anything ending with `+json` | JSON |

<a name="table1"></a>**Table 1: Recognized media types**

The export mapping is also used to generate object schemas for operation responses in the [OpenAPI (Swagger) documentation page](published-rest-services#interactive-documentation) based on the [JSON schema](published-rest-service-json-schema).

## 3 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](published-rest-services#interactive-documentation).

### <a name="summary"></a>3.1 Summary

The summary provides a short description of what the operation does.

### <a name="description"></a>3.2 Description

The description provides a complete overview of what the operation does. You can use [GitHub-flavored markdown](gfm-syntax) for rich text.

## 4 Example

**How to publish REST natively with Mendix**

{{% youtube HzrFkv0U4n8 %}}

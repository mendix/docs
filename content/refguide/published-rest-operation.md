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

* _GET_ – the operation retrieves the entry or entries at the specified location
* _PUT_ – the operation replaces the entry or entries at the specified location, or it creates them if they do not exist
* _POST_ – the operation creates an entry in the collection at the specified location
* _PATCH_ – the operations updates (part of) the entry at the specified location
* _DELETE_ – the operation deletes the entry or entries at the specified location
* _HEAD_ - the operation retrieves information about the entry or entries at the specified location; this is identical to _GET_, except for the fact that it doesn't return a message body
* _OPTIONS_ - the operation returns information about the available communication options

### <a name="operation-path"></a>2.2 Operation Path

The location where the operation can be reached starts with the location of the resource.

The operation path specifies the remainder of the location of the operation. You can leave it empty to use the location of the resource.

You can use [path parameters](published-rest-path-parameters) to capture part of the location as a microflow parameter. Specify path parameters in the operation path between _{_ and _}_. The microflow (see below) should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

The method and operation path determine [which operation gets executed for a given request URL](published-rest-routing).

### <a name="example-location"></a>2.3 Example Location

The example location gives an example of a URL on which the operation can be reached. It shows path parameters and query parameter values as placeholders between _{_ and _}_.

### 2.4 Microflow

{{% alert type="info" %}}

Support for **File Documents** in these microflows was introduced in version 7.13.0.

{{% /alert %}}

An operation has different parameters:

 * [Path parameters](published-rest-path-parameters), which are part of the path of the URL
 * Query parameters, which are at the end of the URL in the form of `?name1=value1&name2=value2` (when a microflow parameter is not in the path and is not object, then it's considered a query parameter)
 * A body parameter (optional), which are in the body of the request to the operation (the _GET_, _HEAD_, and _DELETE_ operations do not have a body parameter)

A microflow for an operation takes all these operation parameters as input.

Path and query parameters can't have *List* or *Object* type.

A microflow parameter that has type *List* or *Object* indicates a body parameter. You can specify an import mapping to convert the incoming JSON or XML. If the parameter is a file document or inherits from file document, an import mapping is not needed.

An operation microflow may also take an [HttpRequest](http-request-and-response-entities#http-request) parameter. You can add this parameter if you would like to inspect the requested URL and headers.

To set the status code, reason phrase, and headers, you should add an [HttpResponse](http-request-and-response-entities#http-response) object parameter and set the attributes of that object, or return an *HttpResponse*.

The result of the microflow is the result of the operation. You have several options here, which are described below.

The first option is to **return a *List* or an *Object***. You will need to specify an export mapping to convert it to XML or JSON. 

The second option is to **return a primitive**. When your microflow returns a string, integer, Boolean, etc., then the response to the operation will be that value. If you return a non-empty value from the microflow, the _Content_ attribute of the _HttpResponse_ object is ignored. If you return an empty value from the microflow, then the _Content_ of the _HttpResponse_ is taken as the result.

The third option is to **return a file document**. When you want to return data that is a file (such as a PDF or image), then you can have your microflow return a file document.

The final option is to **return an [HttpResponse](http-request-and-response-entities#http-response)**. In the *HttpResponse*, you can set the status code, reason phrase, and content (as a string). You can fill the content with, for example, the result of a mapping or a string from another source. You can also add headers to the response. One important header to set is *Content-Type*. Do not return an *empty* HttpResponse, because that will always result in an error.

If the microflow throws an unhandled exception, the response is **500: Internal server error**.

If security is enabled, then then microflow needs to have at least one role configured to be accessible.

## 2.5 Parameters

{{% alert type="info" %}}

This feature was introduced in version 7.12.0.

{{% /alert %}}

The **Parameters** table shows the name, data type, and type of the parameter.

An operation parameter can be either a query parameter, a path parameter or a body parameter. Path and the query parameters are detemined by their placement in the URL. If the parameter is part of the operation's location, it is a path parameter. If it is a part of the operation's query string, it is a query parameter. A body parameter comes from the body of the request.

The parameter data type is determined by the microflow of the operation. New parameters that are not yet part of the microflow will have "(Not set)" as their data type.

### 2.5.1 Import mapping

{{% alert type="info" %}}

This feature was introduced in version 7.14.0.

{{% /alert %}}

An import mapping can be selected for a body parameter. Any object or list parameter except a file document must have import mapping selected. To select an import mapping you can double click the parameter or click the Edit button in a grid after you select the parameter.

If you select an import mapping that supports both XML and JSON (for instance a mapping that is based on a message definition) then the operation will be able to handle both XML and JSON requests.

Valid requests need to contain a _Content-Type_ header. See Table 1 for a list of media types that are understood by the import mapping. If an unsupported content type is used, the operation will result in a _400 Bad Request_ response.

The import mapping is also used to generate object schemas for operation responses in [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation) based on [JSON Schema](published-rest-service-json-schema)

### 2.6 Response

{{% alert type="info" %}}

Support for **Export mapping and models in OpenApi (Swagger)** was added in 7.14.0.

{{% /alert %}}

Shows information about the response of the operation. You can see the type of the microflow result as well as export mapping applied to it (if any).

#### 2.6.1 Export Mapping

When the microflow returns an object or a list of objects, you need to specify how this result is mapped to JSON or XML. Select an export mapping that takes the result of the microflow as input.

If you select an export mapping that supports both XML and JSON (for instance a mapping that is based on a message definition), then the output depends on whether the microflow has a parameter of type System.HttpResponse and adds a Content-Type header to it: 

- When the microflow sets the Content-Type header with a media type that is XML (see Table 1) then the operation returns XML
- When the microflow sets the Content-Type header to something else, then the operation returns JSON
- When the microflow does not set the Content-Type header, then the output is determined by inspecting the Accept header in the request. The first media type that is understood to be XML or JSON (see Table 1) determines the operation result, and the Content-Type is _application-xml_ (when it's XML) or _application-json_ (when it's JSON).
- When there is no Accept header or the Accept header does not contain a recognizable media type, then the operation returns JSON and the Content-Type is _application/json_

| Media type                   | Recogized as |
| ---                          | --- |
| _application/xml_            | XML |
| _text/xml_                   | XML |
| anything ending with _+xml_  | XML |
| _application/json_           | JSON |
| anything ending with _+json_ | JSON |

**Table 1**: Recognized media types

The export mapping is also used to generate object schemas for operation responses in [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation) based on [JSON Schema](published-rest-service-json-schema)

## 3 Public Documentation

The public documentation is used in the service's [OpenApi (Swagger) documentation page](published-rest-services#interactive-documentation).

### <a name="summary"></a>3.1 Summary

The summary provides a short description of what the operation does.

### <a name="description"></a>3.2 Description

The description provides a complete overview of what the operation does. You can use [GitHub-flavored markdown](gfm-syntax) for rich text.

## 4 Example

**How to publish REST natively with Mendix**

{{% youtube HzrFkv0U4n8 %}}

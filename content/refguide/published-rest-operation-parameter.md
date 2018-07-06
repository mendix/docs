---
title: "Published REST Operation Parameter"
parent: "published-rest-services"
---

## 1 Introduction

When a client calls a published REST operation, they call a URL with an optional query string and possibly a body. These parameters can be passed to the microflow and import mapping as path parameters, query parameters and body parameters respectively. When you add or edit a parameter in a published REST operation, you can set the following:

## 2 General

{{% alert type="info" %}}

These fields were introduced as read-only in the parameter list in version 7.12.0, read-only in the dialog in version 7.14.0. They are writable since version 7.17.0.

{{% /alert %}}

### 2.1 Parameter type

Specify where the parameter comes from. Possible values are

* **Query** When the request contains a query string such as `?name=John&age=42`, you can pass these to the microflow by adding query parameters. For more information, see [Published REST Query Parameters](published-rest-query-parameters).
* **Path** The operation path can contain parameters as well. If you add a path parameter, make sure you add it to the operation path as well. For more information, see [Published REST Path Parameters](published-rest-path-parameters).
* **Body** The microflow can have 0 or 1 body parameters. A body parameter is taken from the body of the request. If the body is a file document or an image, its contents will be filled with the body of the request. If the body parameter is an other type of object or a list, an import mapping is needed to convert the body content of the request into an object or a list. **GET**, **HEAD** and **OPTIONS** operations shouldn't have body parameters.
* **Header** The value of a header parameter is taken from the (first) request header with that name

### 2.2 Name

The name of the parameter. For a header parameter, this should be the name of the request header.

### 2.3 Type

Specify the type of the parameter. Object or list parameters can only come from the body of the request.

### 2.4 Microflow parameter

Specify the microflow parameter that will be filled with the value from this operation parameter. You should always select one, except for when you defined a path parameter to be passed to the import mapping.

## 3 Mapping

The mapping group only shows for body parameters.

## 3.1 Import mapping

{{% alert type="info" %}}

This feature was introduced in version 7.14.0

{{% /alert %}}

Specify the import mapping that converts the body of the request (JSON or XML) into an Object or a List.

You can use an import mapping that takes a primitive parameter (string, integer, etc.) if the operation has no more than one path parameter with that type. The value of that path parameter will be passed to the microflow. If there is no path parameter, and empty value will be passed to the import mapping.

## 3.2 If no object was found

{{% alert type="info" %}}

This feature was introduced in version 7.17.0

{{% /alert %}}

You can indicate what should happen **if not object was found** when the import mapping has checked the box **decide this at the place where the mapping gets used**. Typically this is **Create** for **POST** operations and **Error** for **PUT** and **PATCH** operations.

## 3.3 Commit

{{% alert type="info" %}}

This feature was introduced in version 7.14.0

{{% /alert %}}

You can indicate whether the import mapping should commit the objects that it creates or changes. You can choose between

* **Yes** - this commits the changes and triggers events such as validation rules
* **Yes without events** - this commits the changes without triggering events such as validation rules
* **No** - this does not commit the changes, so you can commit them in your microflow. This is useful if you want to add some additional checks in your microflow, and skip the commit if one of those checks fail

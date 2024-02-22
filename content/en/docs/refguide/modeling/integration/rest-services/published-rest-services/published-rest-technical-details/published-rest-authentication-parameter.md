---
title: "Custom Authentication Microflow Parameters"
url: /refguide/published-rest-authentication-parameter/
weight: 40
description: "The parameters which are passed to the custom authentication microflow for a published REST service"
tags: ["published REST", "custom authentication", "microflow", "parameters", "arguments", "query", "header"]
---

## 1 Introduction

The custom authentication microflow of a published REST service is executed whenever a client calls one of the operation. The client's requests contains headers and may contain query parameters, which can be passed to the authentication microflow. 

When you click the **Parameters** button that is next to the authentication microflow, the **Authentication microflow arguments** dialog box appears. In this dialog box, you can set the parameters.

## 2 Parameters

The information below gives you an overview of the microflow parameters, and explains where their values are taken from. Click **Add** to add a parameter, and **Edit** to change a parameter.

Make sure that you add all microflow parameters here.

### 2.1 Parameter Type

Specify where the parameter comes from. Possible values are

* **Query** – when the request contains a query string such as `?name=John&age=42`, you can pass these to the microflow by adding query parameters. For more information, see [Published REST Query Parameters](/refguide/published-rest-query-parameters/).

* **Header** – the value of a header parameter is taken from the (first) request header with that name.

### 2.2 Name

The name of the parameter. For a header parameter, this should be the name of the request header.

### 2.3 Data Type

Specify the type of the parameter. Only primitive types are supported.

### 2.4 Microflow Parameter

Specify the microflow parameter that will be filled with the value from this operation parameter. You should always select one.

---
title: "Published REST Query Parameters"
parent: "published-rest-operation"
---

{{% alert type="info" %}}

The 'Published REST Service' was introduced in version 7.10.0.

{{% /alert %}}

The specification of a [published REST operation](published-rest-operation) includes a microflow that implements the operation. This microflow takes a number of parameters:

* It may take a parameter of the [HttpRequest](http-request-and-response-entities#http-request) type
* It takes all the [path parameters](published-rest-path-parameters) specified in the operation path of the operation

Any other parameters are automatically considered to be optional query parameters. A query parameter can only have a primitive type (Boolean, date and time, decimal, enumeration, integer/long, or string).

Query parameters are added to the end of the path following a question mark in the format `?name=John&age=42`. This is shown in the [example location of the operation](published-rest-operation#example-location).

These are some additional notes about query parameters:

* Query parameters are case sensitive
* Date and time parameters should be entered in the [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format (for example, `2018-12-31T09:00:00`)
* When a client calls the operation without specifying the query paramater, it will have the value `empty` in the microflow (except when it has the Boolean type, which is `false` by default)

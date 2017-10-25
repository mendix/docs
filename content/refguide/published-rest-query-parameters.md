---
title: "Published REST Query Parameters"
parent: "published-rest-operation"
---

The specification of a [Published REST Operation](published-rest-operation) includes a microflow that implements the operation. This microflow takes a number of parameters:

* It may take parameter of type [HttpRequest](http-request-and-response-entities#http-request). 
* It takes all the [path parameters](published-rest-path-parameters) specified in the operation path of the operation.

Any other parameters are automatically considered to be optional query parameters. A query parameter can only have a primitive type (Boolean, Date and time, Decimal, Enumeration, Integer/Long or String).

Query parameters are added to the end of the path following a question mark in the format `?name=John&age=42`. This is shown in the [example location of the operation](published-rest-operation#example-location).

Some things to note about query parameters:

* Query parameters are case sensitive.
* Date and time parameters should be entered in [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format, for instance `2018-12-31T09:00:00`.
* When a client calls the operation without specifying the query paramater it will have the value _empty_ in the microflow. Except when it has type _Boolean_, which is _false_ by default.

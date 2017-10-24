---
title: "Published REST Query Parameters"
parent: "Published REST operation"
---

The specification of a [Published REST Operation](published-rest-operation) includes a microflow which implements the operation. This microflow takes a number of parameters. 

It may take parameter of type `System.HttpRequest`. 

Secondly, it should take all the [path parameters](published-rest-path-parameters) specified in the operation path of the operation.

All other parameters that are specified for the microflow with a primitive data type are automatically considered optional query parameters. 

Query parameters are added to the end of the path following a question mark in the format `?name1=value1&name2=value2`.

This is shown in the example location in the [operation editor window](published-rest-operation).

Query paramaters can be be of all the prmitive types supported in Mendix (string, boolean, date and time, decimal, enumeration, integer or double).

Date and time parameters should be entered in [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format, for instance `2018-12-31T09:00:00`.

When a client calls the operation without specifying the query paramater it will have the value _empty_ in the microflow. Except when it has type _boolean_, which is _false_ by default.

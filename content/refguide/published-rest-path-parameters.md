---
title: "Published REST Path Parameters"
parent: "published-rest-operation"
---

The operation path in the [Published REST Operation](published-rest-operation) specifies the last part of the location (URL) of the operation. 

You can use one or more _path parameters_ to capture part of the location as a microflow parameter. Specify path parameters in the operation path between `{` and `}`. 

The microflow should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

Some requirements for path parameters:

* You can't use the same path parameter twice in an operation path
* Path parameter names should start with a letter and contain only letters, digits and underscores
* Path parameters can only have a primitive types (Boolean, Date and time, Decimal, Enumeration, Integer/Long or String)
* Path parameters can only appear between slashes `/`

When generating a new microflow from the [Published REST Operation](published-rest-operation) editor window the resulting microflow will have string parameters for each of the path parameters specified in the operation path. If you want the path parameters to be of a different type, you can change the type in the microflow.

Date and time parameters should be entered in [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format, for instance `2018-12-31T09:00:00`.

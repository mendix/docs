---
title: "Published REST Query Parameters"
parent: "Published REST operation"
---

The specification of a [Published REST Operation](published-rest-operation) includes a microflow which implements the operation. This microflow takes a number of parameters. 
Firstly an optional System.HttpRequest parameter. 
Secondly, it takes all the [path parameters](published-rest-path-parameters) specified in the operation path of the Published REST Operation.
All other parameters that are specified for the microflow with a primitive data type are automatically considered optional query parameters. 

Query parameters are added to the end of the path following a question mark in the format _?variableName=VariableValue&variableName2=VariableValue2_. 
This is shown in the example location in the [Published REST Operation](published-rest-operation) editor window.

Query paramaters can be be of all the prmitive types supported in Mendix (string, boolean, date and time, decimal, enumeration, integer or double).
For date and time we accept input formatted according to ISO-8601 (https://www.w3schools.com/xml/schema_dtypes_date.asp).
When calling an opteration and an optional query paramater is not specified it will have the value _empty_ in the microflow, with the expection of
paramaters with the type boolean which will have the default value _false_.
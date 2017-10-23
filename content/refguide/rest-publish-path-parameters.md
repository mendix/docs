---
title: "Published REST Path Parameters"
parent: "Published REST operation"
---

The operation path in the [Published REST Operation](published-rest-operation) specifies the last part of the location (uri) of the operation. 
You can use one or more _path parameters_ to capture part of the location as a microflow parameter. Specify path parameters in the operation path between { and }. 
The microflow should have a parameter with the same name. Whatever is in the URL at the place of the path parameter will be passed to the microflow.

The name you specify for a path parameter should be unique in the ioeration path. 
Further, it should be a valid microflow parameter name and therefore start with a letter and contain only letters, digits and underscores.
Finally, path parameters should be enclosed in '/'s so they are a separate segment of the path.

When generating a new microflow from the [Published REST Operation](published-rest-operation) editor window the resulting microflow will have string parameters for each of the path parameters specified in the operation path.
If you want the path parameters to be of another primitive data type (boolean, date and time, decimal, enumeration, or integer) you can change the type in the microflow.

For date and time we accept input formatted according to ISO-8601 (https://www.w3schools.com/xml/schema_dtypes_date.asp).
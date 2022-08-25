---
title: "Published REST Path Parameters"
url: /refguide8/published-rest-path-parameters/
weight: 30
tags: ["published REST", "path parameters", "Data and Time", "studio pro"]
# combine this with published rest service
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-path-parameters.pdf).
{{% /alert %}}

The operation path in the [published REST operation](/refguide8/published-rest-operation/) specifies the last part of the location (URL) of the operation. 

You can use one or more path parameters to capture part of the location as a microflow parameter. Specify path parameters in the operation path between `{` and `}`. 

Whatever is in the URL at the place of the path parameter will be is passed to the microflow, the import mapping or both.

These are the requirements for path parameters:

* You cannot use the same path parameter twice in an operation path
* Path parameter names cannot contain curly braces (`{` or `}`)
* Path parameters can only have primitive types (Boolean, date and time, decimal, enumeration, integer/long, or string)
* Path parameters can only appear between slashes (`/`) in the path

When generating a new microflow from the [published REST operation](/refguide8/published-rest-operation/) editor window, the resulting microflow will have string parameters for each of the path parameters specified in the operation path. If you want the path parameters to be of a different type, you can change the type in the microflow.

Date and time parameters should be entered in the [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format (for example, `2018-12-31T09:00:00`).

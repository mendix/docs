---
title: "Published REST Query Parameters"
url: /refguide8/published-rest-query-parameters/
weight: 40
description: "Parameters for a published REST query"
tags: ["published REST", "query", "parameters", "Date and Time format", "studio pro"]
# Merge into published rest service document
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-query-parameters.pdf).
{{% /alert %}}

The specification of a [published REST operation](/refguide8/published-rest-operation/) includes a microflow that implements the operation. This microflow may take parameters that come from the query string of the request.

A query parameter can only have a primitive type (Boolean, date and time, decimal, enumeration, integer/long, or string).

Query parameters are added to the end of the path following a question mark in the format `?name=John&age=42`. This is shown in the [example location of the operation](/refguide8/published-rest-operation/#example-location).

These are some additional notes about query parameters:

* Query parameters are case sensitive
* Date and time parameters should be entered in the [ISO-8601](https://www.w3schools.com/xml/schema_dtypes_date.asp) format (for example, `2018-12-31T09:00:00`)
* When a client calls the operation without specifying the query paramater, it will have the value `empty` in the microflow (except when it has the Boolean type, which is `false` by default)

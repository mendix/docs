---
title: "Published REST Request Routing"
url: /refguide8/published-rest-routing/
weight: 10
description: "A flow chart which shows how an example request is processed, what security is applied, and what is returned by the service."
tags: ["flow chart", "processing", "security", "service", "resource", "operation", "method", "authentication", "return code", "published REST", "studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-routing.pdf).
{{% /alert %}}

When a REST HTTP request arrives at the server, the server needs to determine which [operation](/refguide8/published-rest-operation/) to execute and what security to apply.

This flow chart shows an example request, how this will be processed, and what will be returned by the service under different circumstances.

Consult this flow chart to answer questions like:

* Which REST operation microflow will be executed for my URL?
* What happens when an exception occurs in a REST operation microflow?
* How does basic authentication for REST services work?
* How does anonymous authentication for REST services work?
* What happens when a REST operation microflow returns an empty HTTPResponse?
* Why does my REST service return _400 Bad Request_?
* Why does my REST service return _401 Not Authorized_?
* Why does my REST service return _404 Not Found_?
* Why does my REST service return _405 Method Not Allowed_?

The example request is `GET /rest/petstore/pet/12`.

{{< figure src="/attachments/refguide8/modeling/integration/published-rest-services/published-rest-technical-details/published-rest-routing/determine-operation.png" >}}

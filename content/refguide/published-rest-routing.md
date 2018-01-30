---
title: "Published REST routing"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The **published REST service** feature was introduced in Mendix 7.10.0.

{{% /alert %}}

When a REST HTTP request arrives at the server, the server needs to determine which [operation](published-rest-operation) to execute. This flow chart shows how that works:

![](attachments/published-rest-service/determine-operation.png)

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

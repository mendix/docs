---
title: "Published REST Request Routing"
parent: "published-rest-technical-details"
menu_order: 10
description: "A flow chart which shows how an example request is processed, what security is applied, and what is returned by the service."
tags: ["flow chart", "processing", "security", "service", "resource", "operation", "method", "authentication", "return code", "published REST", "studio pro"]
---

When a REST HTTP request arrives at the server, the server needs to determine which [operation](published-rest-operation) to execute and what security to apply.

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

![](attachments/published-rest-service/determine-operation.png)

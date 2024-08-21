---
title: "Published REST Request Routing"
url: /refguide/published-rest-routing/
weight: 10
description: "A flow chart which shows how an example request is processed, what security is applied, and what is returned by the service."
---

## Introduction

When a REST HTTP request arrives at the server, the server needs to determine which [operation](/refguide/published-rest-operation/) to run and what security to apply.

This flow chart shows an example request, how this will be processed, and what will be returned by the service under different circumstances.

Consult this flow chart to answer questions like:

* Which REST operation microflow will be executed for my URL?
* What happens when an exception occurs in a REST operation microflow?
* How does basic authentication for REST services work?
* How does anonymous authentication for REST services work?
* What happens when a REST operation microflow returns an empty HTTPResponse?
* Why does my REST service return *400 Bad Request*?
* Why does my REST service return *401 Not Authorized*?
* Why does my REST service return *404 Not Found*?
* Why does my REST service return *405 Method Not Allowed*?

The example request is `GET /rest/petstore/pet/12`.

{{< figure src="/attachments/refguide/modeling/integration/published-rest-services/published-rest-technical-details/published-rest-routing/determine-operation.png" class="no-border" >}}

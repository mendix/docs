---
title: "게시된 REST 요청 라우팅"
url: /refguide9/published-rest-routing/
weight: 10
description: "예제 요청이 처리되는 방법, 적용되는 보안 및 서비스에서 반환되는 내용을 보여주는 흐름도입니다."
---

When a REST HTTP request arrives at the server, the server needs to determine which [operation](/refguide9/published-rest-operation/) to execute and what security to apply.

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

{{< figure src="/attachments/refguide9/modeling/integration/published-rest-services/published-rest-technical-details/published-rest-routing/determine-operation.png" class="no-border" >}}

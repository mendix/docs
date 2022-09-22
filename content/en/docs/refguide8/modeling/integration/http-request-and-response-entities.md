---
title: "HttpRequest & HttpResponse System Entities"
url: /refguide8/http-request-and-response-entities/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/http-request-and-response-entities.pdf).
{{% /alert %}}

## 1 Introduction

`HttpRequest` is a system entity that represents a request to a server. `HttpResponse` represents the response from the server. Use these entities when [publishing](/refguide8/published-rest-services/) or [consuming](/refguide8/consumed-rest-services/) REST services.

{{< figure src="/attachments/refguide8/modeling/integration/http-request-and-response-entities/http-request-and-response-domain-model.png" >}}

## 2 HttpRequest {#http-request}

The `HttpRequest` entity has the following attributes:

|  Attribute  |  Type  |  Default Value | Description  |
|  ---  |  ---  |  ---  |  ---  |
|  `HttpVersion` (Inherited from `HttpMessage`) |  String  | HTTP/1.1 | The protocol version. You can almost always ignore this value. |
|  `Uri`  | String  | empty | The full URI for the incoming request, including query parameters. |
|  `Content` (inherited from `HttpMessage`) |  String  | empty | The body of the request. |

You can retrieve the request headers via the `HttpHeaders` association.

## 3 HttpResponse {#http-response}

The `HttpResponse` entity has the following attributes:

|  Attribute  |  Type  |  Default Value | Description  |
|  ---  |  ---  |  ---  |  ---  |
|  `HttpVersion` (inherited from `HttpMessage`)  |  String  | HTTP/1.1 | The protocol version. You can almost always ignore this value. |
|  `StatusCode`  |  Integer  | 200 | The HTTP status code returned by the server.  |
|  `ReasonPhrase`  |  String  |  OK | A textual representation of the `StatusCode`.  |
|  `Content`  |  String  | empty | The body of the response. |

For more information on HTTP status codes, see the [W3C Specification of Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

You can retrieve or create response headers via the `HttpHeaders` association.

An important `HttpResponse` header is `Content-Type`, which indicates how the content should be interpreted. For more information on this header, see the [W3C specification of Content-Type](https://www.w3.org/Protocols/rfc1341/4_Content-Type.html).

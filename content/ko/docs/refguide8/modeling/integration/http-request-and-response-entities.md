---
title: "HttpRequest 및 HttpResponse 시스템 엔티티"
url: /refguide8/http-request-and-response-entities/
---

## 소개

`HttpRequest`는 서버에 대한 요청을 나타내는 시스템 Entity입니다. `HttpResponse`는 서버의 응답을 나타냅니다. REST 서비스를 [게시](/refguide8/published-rest-services/)하거나 [사용](/refguide8/consumed-rest-services/)할 때 이러한 Entity를 사용하십시오.

{{< figure src="/attachments/refguide8/modeling/integration/http-request-and-response-entities/http-request-and-response-domain-model.png" class="no-border" >}}

## HttpRequest {#http-request}

`HttpRequest` Entity에는 다음과 같은 속성(Attribute)이 있습니다:

|  속성  |  타입  |  기본값 | 설명  |
|  ---  |  ---  |  ---  |  ---  |
|  `HttpVersion` (`HttpMessage`에서 상속됨) |  String  | HTTP/1.1 | 프로토콜 버전입니다. 거의 항상 이 값을 무시할 수 있습니다. |
|  `Uri`  | String  | empty | 쿼리 파라미터를 포함한 수신 요청의 전체 URI입니다. |
|  `Content` (`HttpMessage`에서 상속됨) |  String  | empty | 요청의 본문입니다. |

`HttpHeaders` 연관(Association)을 통해 요청 헤더를 검색할 수 있습니다.

## HttpResponse {#http-response}

`HttpResponse` Entity에는 다음과 같은 속성(Attribute)이 있습니다:

|  속성  |  타입  |  기본값 | 설명  |
|  ---  |  ---  |  ---  |  ---  |
|  `HttpVersion` (`HttpMessage`에서 상속됨)  |  String  | HTTP/1.1 | 프로토콜 버전입니다. 거의 항상 이 값을 무시할 수 있습니다. |
|  `StatusCode`  |  Integer  | 200 | 서버에서 반환된 HTTP 상태 코드입니다.  |
|  `ReasonPhrase`  |  String  |  OK | `StatusCode`의 텍스트 표현입니다.  |
|  `Content`  |  String  | empty | 응답의 본문입니다. |

HTTP 상태 코드에 대한 자세한 정보는 [W3C Specification of Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)를 참조하십시오.

`HttpHeaders` 연관(Association)을 통해 응답 헤더를 검색하거나 생성할 수 있습니다.

중요한 `HttpResponse` 헤더는 `Content-Type`으로, 내용을 어떻게 해석해야 하는지를 나타냅니다. 이 헤더에 대한 자세한 정보는 [W3C specification of Content-Type](https://www.w3.org/Protocols/rfc1341/4_Content-Type.html)을 참조하십시오.

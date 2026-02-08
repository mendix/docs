---
title: "Published REST 요청 라우팅"
url: /refguide8/published-rest-routing/
weight: 10
description: "예시 요청이 처리되는 방법, 적용되는 보안 및 서비스에서 반환되는 내용을 보여주는 흐름도"
---

REST HTTP 요청이 서버에 도착하면 서버는 실행할 [작업](/refguide8/published-rest-operation/)과 적용할 보안을 결정해야 합니다.

이 흐름도는 예시 요청, 처리 방법 및 다양한 상황에서 서비스가 반환하는 내용을 보여줍니다.

다음과 같은 질문에 답하기 위해 이 흐름도를 참조하십시오:

* 내 URL에 대해 어떤 REST 작업 Microflow가 실행됩니까?
* REST 작업 Microflow에서 예외가 발생하면 어떻게 됩니까?
* REST 서비스의 기본 인증은 어떻게 작동합니까?
* REST 서비스의 익명 인증은 어떻게 작동합니까?
* REST 작업 Microflow가 빈 HTTPResponse를 반환하면 어떻게 됩니까?
* REST 서비스가 *400 Bad Request*를 반환하는 이유는 무엇입니까?
* REST 서비스가 *401 Not Authorized*를 반환하는 이유는 무엇입니까?
* REST 서비스가 *404 Not Found*를 반환하는 이유는 무엇입니까?
* REST 서비스가 *405 Method Not Allowed*를 반환하는 이유는 무엇입니까?

예시 요청은 `GET /rest/petstore/pet/12`입니다.

{{< figure src="/attachments/refguide8/modeling/integration/published-rest-services/published-rest-technical-details/published-rest-routing/determine-operation.png" class="no-border" >}}

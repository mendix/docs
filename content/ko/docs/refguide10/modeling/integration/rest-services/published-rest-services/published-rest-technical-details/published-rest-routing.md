---
title: "Published REST 요청 라우팅"
url: /refguide10/published-rest-routing/
weight: 10
description: "예제 요청이 처리되는 방법, 적용되는 보안, 서비스가 반환하는 내용을 보여주는 플로우 차트입니다."
---

## 소개

REST HTTP 요청이 서버에 도착하면 서버는 어떤 [오퍼레이션](/refguide10/published-rest-operation/)을 실행할지와 어떤 보안을 적용할지 결정해야 합니다.

이 플로우 차트는 예제 요청, 처리 방법, 다양한 상황에서 서비스가 반환하는 내용을 보여줍니다.

다음과 같은 질문에 답하기 위해 이 플로우 차트를 참조하세요:

* 내 URL에 대해 어떤 REST 오퍼레이션 Microflow가 실행될까요?
* REST 오퍼레이션 Microflow에서 예외가 발생하면 어떻게 될까요?
* REST 서비스의 기본 인증은 어떻게 작동할까요?
* REST 서비스의 익명 인증은 어떻게 작동할까요?
* REST 오퍼레이션 Microflow가 빈 HttpResponse를 반환하면 어떻게 될까요?
* REST 서비스가 **400 Bad Request**를 반환하는 이유는 무엇일까요?
* REST 서비스가 **401 Not Authorized**를 반환하는 이유는 무엇일까요?
* REST 서비스가 **404 Not Found**를 반환하는 이유는 무엇일까요?
* REST 서비스가 **405 Method Not Allowed**를 반환하는 이유는 무엇일까요?

예제 요청은 `GET /rest/petstore/pet/12`입니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/published-rest-routing/determine-operation.png" class="no-border" >}}

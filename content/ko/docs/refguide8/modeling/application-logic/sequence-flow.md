---
title: "시퀀스 플로우"
url: /refguide8/sequence-flow/
weight: 30
---

## 소개

시퀀스 플로우는 요소(이벤트, 액티비티, Decision 등)를 서로 연결하는 화살표로 표시되는 플로우입니다. 이를 통해 실행 순서를 정의합니다. 플로우는 항상 한 방향으로 흐르며, 요소가 하나씩 순차적으로 이어집니다. Decision은 항상 하나의 방향으로만 이동하므로 여러 플로우가 동시에 실행되는 것은 불가능합니다.

두 개의 액티비티를 연결하려면 시퀀스 플로우를 사용하십시오.

{{< figure src="/attachments/refguide8/modeling/application-logic/sequence-flow/sequence-flow.png" class="no-border" >}}

## 조건 값

**Condition value**는 [Decision](/refguide8/decision/) 또는 [객체 유형 Decision](/refguide8/object-type-decision/)의 결과에 따라 어떤 방향으로 이동해야 하는지를 설명합니다.

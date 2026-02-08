---
title: "Sequence Flow"
url: /refguide9/sequence-flow/
weight: 30
---

## 소개

Sequence Flow는 요소(이벤트, Activity, Decision 등)를 서로 연결하는 화살표로 표시되는 흐름입니다. 이를 통해 실행 순서를 정의합니다. 흐름은 항상 한 방향으로 진행되며 요소가 하나씩 차례로 이어집니다. Decision은 항상 하나의 방향으로 이어지므로 여러 흐름이 동시에 발생하는 것은 불가능합니다.

연결하려는 두 Activity가 있을 때 Sequence Flow가 사용됩니다.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/sequence-flow/sequence-flow.png" class="no-border" >}}

## 조건 값

**조건 값**은 [Decision](/refguide9/decision/) 또는 [객체 유형 Decision](/refguide9/object-type-decision/)의 결과에 따라 어떤 방향으로 진행해야 하는지 설명합니다.

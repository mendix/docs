---
title: "어노테이션"
url: /refguide8/annotation/
weight: 60
aliases:
    - /refguide8/annotation-flow.html
    - /refguide8/annotation-flow
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

어노테이션은 플로우에 주석을 추가하는 데 사용할 수 있는 요소입니다.

아래 예제에서는 **Show message** 액티비티를 사용하여 클라이언트에서 팝업 메시지로 미결제 주문에 대해 최종 사용자에게 경고합니다. 나중에 이 경고를 사용자에게 전송하는 이메일 메시지로 확장하려고 합니다. 어노테이션을 리마인더로 사용하여 현재 액티비티 위에 배치할 수 있습니다.

{{< figure src="/attachments/refguide8/modeling/application-logic/annotation/anotation.png" class="no-border" >}}

## 공통 속성

### 캡션

자세한 내용은 [공통 속성](/refguide8/microflow-element-common-properties/)을 참조하십시오.

## 어노테이션 플로우 {#annotation-flow}

어노테이션 플로우는 어노테이션을 플로우 객체에 연결하는 데 사용할 수 있는 연결입니다.

예를 들어, 다음은 어노테이션과 **Microflow call** 액티비티를 연결하는 어노테이션 플로우입니다:

{{< figure src="/attachments/refguide8/modeling/application-logic/annotation/anotation-flow.png" class="no-border" >}}

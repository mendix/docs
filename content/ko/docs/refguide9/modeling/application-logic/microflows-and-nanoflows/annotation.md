---
title: "Annotation"
url: /refguide9/annotation/
weight: 60
aliases:
    - /refguide9/annotation-flow.html
    - /refguide9/annotation-flow
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Annotation은 흐름에 주석을 달 수 있는 요소입니다.

아래 예제에서는 **Show message** Activity를 사용하여 클라이언트에서 팝업 메시지로 미결제 주문에 대해 최종 사용자에게 경고합니다. 나중에 이 경고를 사용자에게 보내는 이메일 메시지로 확장하려고 합니다. Annotation을 리마인더로 사용하여 현재 Activity 위에 배치할 수 있습니다.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/annotation/anotation.png" class="no-border" >}}

## 공통 속성

### 캡션

자세한 내용은 [공통 속성](/refguide9/microflow-element-common-properties/)을 참조하십시오.

## Annotation Flow {#annotation-flow}

Annotation Flow는 Annotation을 흐름 객체에 연결하는 데 사용할 수 있는 연결입니다.

예를 들어, Annotation과 **Microflow call** Activity를 연결하는 Annotation Flow입니다:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/annotation/anotation-flow.png" class="no-border" >}}

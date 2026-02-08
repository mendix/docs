---
title: "Annotation"
url: /refguide9/annotations/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

**Annotation**은 Domain Model에 주석을 추가하는 데 사용할 수 있습니다.

예를 들어, 주문 Entity에는 **TotalPrice**와 **Discount**라는 두 개의 Decimal Attribute가 포함되어 있습니다. Annotation을 추가하여 총 가격과 달리 할인율은 금액이 아닌 백분율을 나타낸다는 점을 기록할 수 있습니다.

{{< figure src="/attachments/refguide9/modeling/domain-model/annotations/16844036.png" class="no-border" >}}

## 공통 속성

### Caption

Caption 속성에는 Annotation의 텍스트가 포함됩니다.
